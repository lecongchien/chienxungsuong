<template>
  <div>
    <v-dialog v-model="dialog" max-width="640px">
      <v-card>
        <v-card-title class="primary">
          <span style="color: black">Cập nhật sản phẩm</span>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Mã sản phẩm"
                    v-model="data.id"
                    readonly
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Tên sản phẩm"
                    v-model="data.name"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field label="Giá" v-model="data.price"></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Số lượng"
                    v-model="data.quantity"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Mô tả"
                    v-model="data.description"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Danh mục"
                    v-model="data.categoryId"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Mô tả ngắn"
                    v-model="data.shortDescription"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Giảm giá"
                    v-model="data.discount"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Hình ảnh"
                    v-model="data.thumbnail"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Trạng thái"
                    v-model="data.status"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" @click="$emit('close')">Hủy</v-btn>
          <v-btn color="primary" @click="updateProduct">Cập nhật</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditProduct',
  data() {
    return {
      data: {
        id: null,
        name: '',
        price: null,
        quantity: null,
        description: '',
        categoryId: null,
        shortDescription: '',
        discount: '',
        thumbnail: '',
        status: '',
      },
    }
  },
  methods: {
    updateProduct() {
      axios
        .put('https://localhost:7293/api/Product', this.data)
        .then((response) => {
          this.$emit('close')
          this.$emit('updateData')
          console.log(response.status)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  props: ['dialogEdit', 'currentItem'],
  computed: {
    dialog: {
      get() {
        return this.dialogEdit
      },
      set(value) {
        if (!value) {
          this.$emit('close')
        }
      },
    },
  },
  watch: {
    currentItem: function () {
      this.data.id = this.currentItem.id
      this.data.name = this.currentItem.name
      this.data.price = this.currentItem.price
      this.data.quantity = this.currentItem.quantity
      this.data.description = this.currentItem.description
      this.data.categoryId = this.currentItem.categoryId
    },
  },
}
</script>

<style>
</style>