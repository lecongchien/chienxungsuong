<template>
  <div>
    <v-dialog v-model="dialog" max-width="640px">
      <v-card>
        <v-card-title class="primary">
          <span style="color: black">Thêm mới sản phẩm</span>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Tên sản phẩm"
                    v-model="product.name"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Mô tả ngắn"
                    v-model="product.shortDescription"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Giá"
                    v-model="product.price"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Giảm Giá"
                    v-model="product.discount"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Số lượng"
                    v-model="product.quantity"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Trạng thái"
                    v-model="product.status"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Mô tả"
                    v-model="product.description"
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Danh mục"
                    v-model="product.categoryId"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" @click="cancel">Hủy</v-btn>
          <v-btn @click="saveProduct" color="primary">Lưu</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddProduct',
  data() {
    return {
      product: {
        name: '',
        shortDescription: '',
        price: '',
        discount: '',
        quantity: '',
        thumbnail: '',
        status: '',
        description: '',
        categoryId: '',
      },
      dialog: false,
      uploadedImage: null,
      isImageUploaded: false,
      selectedFile: null,
    }
  },
  methods: {
    saveProduct() {
      console.log('Data before sending:', this.product)

      if (this.isImageUploaded) {
        this.product.thumbnail = this.uploadedImage
      }

      axios
        .post('https://localhost:7293/api/Product', this.product)
        .then((response) => {
          console.log(response)
          this.closeDialog()
          this.$emit('updateData')
          console.log(response.data)
        })
        .catch((error) => {
          console.log('Lỗi từ máy chủ:', error.response)
        })
    },

    handleFileChange(file) {
      console.log('Selected file:', file)
      this.selectedFile = file
    },

    uploadFile() {
      console.log('Uploading file:', this.selectedFile)
      if (this.selectedFile) {
        const formData = new FormData()
        formData.append('imageFile', this.selectedFile) // Thay đổi tên tham số thành 'imageFile'

        axios
          .post('https://localhost:7293/api/Product/upload-image', formData)
          .then((response) => {
            console.log(response.data)
            this.product.thumbnail = response.data.imagePath
            this.isImageUploaded = true
            console.log('Upload response:', response.data)
          })
          .catch((error) => {
            console.error('Upload error:', error)
          })
      }
    },

    cancel() {
      this.closeDialog()
    },
    closeDialog() {
      this.dialog = false
      this.$emit('close')
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
          this.closeDialog()
        }
      },
    },
  },
}
</script>

<style>
</style>
