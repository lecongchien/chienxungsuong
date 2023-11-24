<template>
  <div>
    <v-row class="mt-12 adada">
      <router-link class="asasas" to="/admin" style="display: flex">
        <v-icon>mdi-home</v-icon>
        <h3>Danh sách loại sản phẩm</h3>
      </router-link>
      <div>
        <v-btn color="primary" small icon @click="dialogAdd = true">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-row>
    <v-row class="mt-3">
      <v-col>
        <v-card>
          <v-table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã loại sản phẩm</th>
                <th>Tên loại sản phẩm</th>
                <th>chức năng</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in categories" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.categoryId }}</td>
                <td>{{ item.categoryName }}</td>
                <td>
                  <v-btn
                    color="blue"
                    size="x-small"
                    class="mr-3"
                    icon
                    @click=";(dialogEdit = true), (currentItem = item)"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    color="red"
                    size="x-small"
                    class="mr-3"
                    icon
                    @click="
                      ;(dialogDelete = true), (categoryId = item.categoryId)
                    "
                  >
                    <v-icon> mdi-delete </v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
    <add-view
      :dialogAdd="dialogAdd"
      @close="dialogAdd = false"
      @updateData="getCategories"
    />
    <edit-view
      :dialogEdit="dialogEdit"
      @close="dialogEdit = false"
      :currentItem="currentItem"
      @updateData="getCategories"
    />
    <v-dialog max-width="450px" v-model="dialogDelete">
      <v-card>
        <v-alert type="error">
          <v-row align="center">
            <v-col cols="11" class="text-center"
              >bạn có đồng ý xóa không?</v-col
            >
          </v-row>
          <v-row align="center">
            <v-spacer></v-spacer>
            <v-col cols="5" variant="text">
              <v-btn @click="deleteCategory">Đồng ý</v-btn>
            </v-col>
            <v-col cols="6" variant="text">
              <v-btn>Hủy bỏ</v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import AddView from './AddView.vue'
import EditView from './EditView.vue'
export default {
  components: { AddView, EditView },
  data() {
    return {
      categories: [],
      dialogAdd: false,
      dialogEdit: false,
      currentItem: '',
      dialogDelete: false,
      categoryId: '',
    }
  },
  methods: {
    getCategories() {
      axios
        .get('https://localhost:7293/api/Category')
        .then((response) => {
          this.categories = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteCategory() {
      axios
        .delete('https://localhost:7293/api/Category/' + this.categoryId)
        .then((response) => {
          var newArr = this.categories.filter(
            (x) => x.categoryId != this.categoryId,
          )
          this.categories = newArr
          this.dialogDelete = false
          console.log(response.status)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  created() {
    this.getCategories()
  },
}
</script>

<style>
.adada {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
.asasas {
  color: black;
  text-decoration: none;
}
</style>