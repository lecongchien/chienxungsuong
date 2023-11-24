<template>
  <v-card>
    <v-layout>
      <admin></admin>
      <v-main>
        <index-product />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import IndexProduct from '@/views/product/IndexProduct.vue'
import Admin from '../Admin.vue'
import IndexView from '@/views/category/IndexView.vue'
export default {
  components: { Admin, IndexProduct, IndexView },
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