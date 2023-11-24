<template>
  <div>
    <v-dialog v-model="dialog" max-width="640px">
      <v-card>
        <v-card-title class="primary">
          <span style="color: black">Cập nhập mới sản phẩm</span>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Ten loai san pham"
                    v-model="data.categoryName"
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
          <v-btn color="primary" @click="updateCategory">Cập nhật</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EditView',
  data() {
    return {
      data: {
        categoryId: '',
        categoryName: '',
      },
    }
  },
  methods: {
    updateCategory() {
      axios
        .put('https://localhost:7293/api/Category', this.data)
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
      this.data.categoryId = this.currentItem.categoryId
      this.data.categoryName = this.currentItem.categoryName
    },
  },
}
</script>

<style>
</style>