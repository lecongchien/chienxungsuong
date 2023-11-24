<template>
  <div class="home">
    <navbar></navbar>
    <header-tool-slice></header-tool-slice>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <content-product />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '../components/navbar/Navbar.vue'
import ContentProduct from '@/components/ContentProduct/ContentProduct.vue'
import HeaderToolSlice from '@/components/HeaderToolSlice/HeaderToolSlice.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    Navbar,
    ContentProduct,
    HeaderToolSlice,
  },
}
</script>
