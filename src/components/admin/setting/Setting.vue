<template>
  <v-card>
    <v-layout>
      <admin></admin>
      <v-main>
        <v-card>
          <v-container>
            <v-form @submit="submitForm">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="title" label="Tiêu đề"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-file-input
                    v-model="image"
                    label="Hình ảnh"
                    accept="image/*"
                    show-size
                    outlined
                  ></v-file-input>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="price" label="Giá cả"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="date"
                    label="Ngày tháng năm"
                    readonly
                    outlined
                    prepend-icon="mdi-calendar"
                    @click="showDatePicker = true"
                  ></v-text-field>
                  <v-date-picker
                    v-model="date"
                    v-if="showDatePicker"
                    @input="showDatePicker = false"
                  ></v-date-picker>
                </v-col>
                <v-col class="text-right">
                  <v-btn type="submit" color="primary">Thêm</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import Admin from '../Admin.vue'
export default {
  data() {
    return {
      image: null,
      title: '',
      price: '',
      date: null,
      showDatePicker: false,
    }
  },
  methods: {
    submitForm() {
      // Xử lý logic lưu thông tin
      console.log('Thông tin đã được lưu')
    },
  },
  components: { Admin },
}
</script>
    
<style>
th,
td {
  padding: 12px;
  text-align: center;
  white-space: nowrap;
  height: 70px;
}

th {
  font-weight: bold;
}

img {
  max-width: 100%;
  height: auto;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>