<template>
  <div>
    <v-row class="mt-12 a">
      <router-link class="sa" to="/admin">
        <h3>
          <v-icon>mdi-home</v-icon>
          Danh sách sản phẩm
        </h3>
      </router-link>
      <v-btn color="primary" small icon @click="dialogAdd = true">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-row>
    <v-row class="mt-3">
      <v-col>
        <v-card>
          <v-table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Hình ảnh</th>
                <th>Mô tả</th>
                <th>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in products" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.quantity }}</td>
                <td style="width: 30px; height: 30px">
                  <img :src="item.thumbnail" alt="" />
                </td>

                <td>{{ item.description }}</td>
                <td>
                  <v-btn
                    color="blue"
                    size="x-small"
                    class="mr-3"
                    icon
                    @click="editProduct(item)"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    color="red"
                    size="x-small"
                    class="mr-3"
                    icon
                    @click="confirmDelete(item.id)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                  <v-btn color="primary" @click="openDialog(item.id)">
                    tải ảnh lên

                    <v-dialog v-model="dialog" activator="parent" width="600">
                      <v-card style="padding: 20px">
                        <v-file-input
                          label="File input"
                          variant="outlined"
                          ref="fileInput"
                          @change="handleFileUpload($event)"
                        >
                        </v-file-input>

                        <v-card-actions>
                          <v-btn @click="saveChange()"> Button </v-btn>
                          <v-btn color="primary" block @click="dialog = false"
                            >Thoát</v-btn
                          >
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
    <add-product
      :dialogAdd="dialogAdd"
      @close="dialogAdd = false"
      @updateData="getProducts"
    />
    <edit-product
      :dialogEdit="dialogEdit"
      @close="dialogEdit = false"
      :currentItem="currentItem"
      @updateData="getProducts"
    />

    <v-dialog max-width="450px" v-model="dialogDelete">
      <v-card>
        <v-alert type="error">
          <v-row align="center">
            <v-col cols="11" class="text-center"
              >Bạn có đồng ý xóa không?</v-col
            >
          </v-row>
          <v-row align="center">
            <v-spacer></v-spacer>
            <v-col cols="5" variant="text">
              <v-btn @click="deleteProduct">Đồng ý</v-btn>
            </v-col>
            <v-col cols="6" variant="text">
              <v-btn @click="dialogDelete = false">Hủy bỏ</v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import AddProduct from './AddProduct.vue'
import EditProduct from './EditProduct.vue'

export default {
  components: { AddProduct, EditProduct },
  data() {
    return {
      products: [],
      dialogAdd: false,
      dialogEdit: false,
      currentItem: '',
      dialogDelete: false,
      id: '',
      dialog: false,
      currentId: '',
      file: '',
    }
  },
  methods: {
    getProducts() {
      axios
        .get('https://localhost:7293/api/Product')
        .then((response) => {
          this.products = response.data
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteProduct() {
      axios
        .delete('https://localhost:7293/api/Product/' + this.id)
        .then((response) => {
          var newArr = this.products.filter((x) => x.id != this.id)
          this.products = newArr
          this.dialogDelete = false
          console.log(response.status)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    editProduct(item) {
      this.currentItem = item
      this.dialogEdit = true
    },
    confirmDelete(productId) {
      this.id = productId
      this.dialogDelete = true
    },
    saveChange() {
      console.log(this.file)
      let formData = new FormData()
      formData.append('file', this.file)
      axios
        .post(
          `https://localhost:7293/api/Product/${this.currentId}/image`,
          formData,
          { headers: { 'Content-Type': 'multipart/form-data' } },
        )
        .then((response) => {
          var newArr = this.products.filter((x) => x.id != this.id)
          this.products = newArr
          this.dialogDelete = false
          console.log(response.status)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    handleFileUpload(event) {
      this.file = event.target.files[0]
    },
    openDialog(id) {
      this.currentId = id
    },
  },
  created() {
    this.getProducts()
  },
}
</script>

<style>
.sa {
  color: black;
  text-decoration: none;
}
.a {
  padding: 0 20px;
  justify-content: space-between;
}
</style>
