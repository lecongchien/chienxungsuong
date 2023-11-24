<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-sheet class="pa-2 text-a-c">Explore Games</v-sheet>
    </v-col>
    <v-col cols="12">
      <v-sheet max-width="100%">
        <v-slide-group
          v-model="model"
          class="pa-4"
          selected-class="bg-primary"
          show-arrows
        >
          <v-slide-group-item v-for="(product, index) in products" :key="index">
            <router-link
              :to="{
                name: 'cart',
                params: {
                  productId: product.id,
                  productName: product.name,
                  productPrice: product.price,
                  productDiscount: product.discount,
                  productDescription: product.description,
                  image: product.thumbnail,
                },
              }"
            >
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  style="margin: 0 50px"
                  height="400"
                  width="400"
                  v-bind="props"
                >
                  <v-img
                    width="400"
                    height="300"
                    cover
                    :src="`${product.thumbnail}`"
                  ></v-img>

                  <v-card-text>
                    <h2 class="qqqq">
                      {{ product.name }}
                    </h2>
                    <p class="ccaca" style="margin: 10px 0 0">
                      {{ product.description }}
                    </p>
                  </v-card-text>
                  <v-overlay
                    :model-value="isHovering"
                    contained
                    scrim="#036358"
                    class="align-center justify-center"
                  >
                    <v-btn variant="flat">Xem chi tiết về game</v-btn>
                  </v-overlay>
                </v-card>
              </v-hover>
            </router-link>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
    <v-col cols="12" style="margin: 90px 0 40px">
      <v-parallax
        width="100%"
        height="100%"
        aspect-ratio="16/9"
        :src="getImagePath('Game1.jpg')"
        alt="Example Image"
        class="image_radius"
      >
      </v-parallax>
    </v-col>
    <v-col style="padding: 0 8rem" cols="12">
      <v-list class="flex" lines="two">
        <v-list-item
          v-for="n in Noble"
          :key="n"
          :title="n.title"
          :subtitle="n.subtitle"
        >
          <br />
          <v-divider></v-divider>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
  <Footer />
</template>

<script>
import Footer from '../Footer/Footer.vue'
import axios from 'axios'
export default {
  components: { Footer },
  data() {
    return {
      model: null,
      products: [],
    }
  },
  methods: {
    getImagePath(filename) {
      return require(`@/assets/images/${filename}`)
    },
    async fetchData() {
      try {
        const response = await axios.get('https://localhost:7293/api/Product')
        this.products = response.data // Gán dữ liệu từ API vào mảng products
        console.log(response)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
  },
  created() {
    this.fetchData()
  },
}
</script>

<style>
.text-a-c {
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  transition: 300ms ease-in-out;
  margin-bottom: 50px;
  cursor: pointer;
}
.text-a-c:hover {
  transition: 300ms ease-in-out;
  text-decoration: underline;
}
.flex {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 8rem;
}
.v-list-item-subtitle {
  margin: 10px 0 0;
}
.v-list-item-title {
  font-weight: bold;
}
.qqqq {
  font-weight: bold;
  text-decoration: none;
}
.ccaca {
  text-decoration: none;
}
</style>