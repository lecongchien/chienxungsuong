<template>
  <div>
    <v-dialog v-model="dialog" max-width="640px">
      <v-card>
        <v-card-title class="primary">
          <span style="color: black">Thêm mới loại sản phẩm</span>
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
          <v-btn @click="addCategory" color="primary">Lưu</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AddView',
  data() {
    return {
      data: {
        categoryName: '',
      },
    }
  },
  methods: {
    addCategory() {
      axios
        .post('https://localhost:7293/api/Category', this.data)
        .then((response) => {
          this.$emit('close')
          this.$emit('updateData')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  props: ['dialogAdd'],
  computed: {
    dialog: {
      get() {
        return this.dialogAdd
      },
      set(value) {
        if (!value) {
          this.$emit('close')
        }
      },
    },
  },
}
</script>

<style>
</style>