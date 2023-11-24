<template>
  <navbar></navbar>
  <v-container>
    <v-row class="mb-6" no-gutters>
      <v-col cols="5">
        <v-sheet style="display: flex" class="pa-2 ma-2">
          <v-img
            class="bg-white"
            width="350"
            height="400"
            :aspect-ratio="1"
            :src="`${image}`"
            cover
          ></v-img>
        </v-sheet>
      </v-col>

      <v-col cols="7">
        <v-sheet class="pa-2 ma-2">
          <v-card :title="`Sản phẩm: ${productName}`" style="font-weight: bold">
            <v-rating v-model="rating" bg-color="orange-lighten-1" color="blue">
            </v-rating>
            <div style="padding: 0 15px">
              <div>
                <h2>Giá tiết kiệm: {{ productDiscount }} VNĐ</h2>
                <br />
                <h3 class="old_price">
                  Giá trước đó: {{ productPrice }} VNĐ | Tiết kiệm 10%
                </h3>
              </div>
            </div>
            <v-expansion-panels style="margin: 20px 0">
              <v-expansion-panel
                title="Thông tin hơn về sản phẩm"
                :text="`${productDescription}`"
              >
              </v-expansion-panel>
            </v-expansion-panels>
            <div
              style="
                padding: 20px !important;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 0px !important;
                border: 1px solid rgb(221, 221, 221) !important;
              "
            >
              <div class="addToCart">
                <v-btn
                  style="margin: 0 0 10px 0; width: 100%"
                  variant="outlined"
                  >Thêm vào giỏ hàng

                  <v-dialog
                    style="width: 800px"
                    v-model="dialog"
                    activator="parent"
                  >
                    <v-card>
                      <v-container class="bg-surface-variant">
                        <header
                          style="
                            width: 100%;
                            text-align: center;
                            font-weight: bold;
                            padding: 20px 0;
                          "
                        >
                          Đơn hàng của bạn đủ điều kiện được Giao hàng Tiêu
                          chuẩn Miễn phí
                        </header>
                        <v-row class="mb-6" no-gutters>
                          <v-col cols="5">
                            <v-sheet class="pa-2 ma-2">
                              <v-img
                                class="bg-white"
                                width="100%"
                                height="200px"
                                :aspect-ratio="1"
                                :src="`${image}`"
                                cover
                              ></v-img>
                            </v-sheet>
                          </v-col>

                          <v-col cols="7">
                            <v-sheet class="pa-2 ma-2">
                              <v-card
                                title="Thông tin đơn hàng"
                                :text="`Sản phẩm: ${productName}`"
                              >
                                <div style="display: flex; padding: 0 15px">
                                  <h3>
                                    Hardcover | {{ productDiscount }} VNĐ | Qty:
                                    1
                                  </h3>
                                </div>
                                <v-btn
                                  style="margin: 20px 0 20px 15px"
                                  color="#346250"
                                  variant="outlined"
                                  @click="addToCart"
                                >
                                  <router-link to="/card/shoppingCart">
                                    Xem giỏ hàng
                                  </router-link>
                                </v-btn>
                              </v-card>
                            </v-sheet>
                          </v-col>
                        </v-row>
                      </v-container>
                      <v-card-actions>
                        <v-btn color="primary" block @click="dialog = false"
                          >Thoát</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-btn>
                <v-hover>
                  <template v-slot:default="{ isHovering, props }">
                    <v-btn
                      style="width: 100%"
                      v-bind="props"
                      :color="isHovering ? 'primary' : undefined"
                      variant="tonal"
                    >
                      Instant Purchase
                    </v-btn>
                  </template>
                </v-hover>
              </div>
            </div>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <Footer />
</template>

<script>
import Footer from '../Footer/Footer.vue'
import Navbar from '../navbar/Navbar.vue'
export default {
  components: { Navbar, Footer },
  data() {
    return {
      dialog: false,
    }
  },
  props: [
    'productId',
    'productName',
    'productDiscount',
    'productPrice',
    'productDescription',
    'image',
  ],
  methods: {
    addToCart() {
      // Emit sự kiện để chuyển dữ liệu lên cấp cha
      this.$emit('add-to-cart', {
        productId: this.productId,
        productName: this.productName,
        productDiscount: this.productDiscount,
        productPrice: this.productPrice,
        productDescription: this.productDescription,
        image: this.image,
      })
    },
  },
}
</script>

<style>
.ship_item {
  font-size: 15px;
  line-height: 1.38;
  letter-spacing: 0.3px;
  font-weight: bold;
}
.ship-this-item-qualify {
  font-size: 14px;
  color: #000;
  margin-top: 4px;
  margin-bottom: 8px;
  line-height: 1.48;
}
</style>