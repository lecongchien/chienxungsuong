<template>
  <v-app style="height: 64px">
    <v-app-bar
      :elevation="0"
      scroll-behavior="elevate"
      style="height: 64px"
      class="app_navbar"
      v-responsive
    >
      <router-link
        class="list_item_title contact_us padding_1rem"
        to="/contact-us"
      >
        Contact Us
      </router-link>
      <v-toolbar-title style="margin-inline-start: 0px" class="toolbar-title">
        <router-link to="/" class="list_item_title">EA Games</router-link>
      </v-toolbar-title>
      <template v-slot:append>
        <div class="padding_1rem">
          <router-link to="/card/shoppingCart" class="list_item_title">
            <v-icon class="item-icon" icon="mdi-bag-checked"></v-icon>
            <v-badge :content="1" dot color="error" class="dot"> </v-badge>
          </router-link>
          <v-icon class="item-icon" icon="mdi-magnify"></v-icon>
          <v-icon
            class="item-icon"
            :color="$store.state.iconColor"
            icon="mdi-account"
            dot
          ></v-icon>
          <!-- ===============  MENU ================== -->
          <v-menu transition="slide-x-transition">
            <template v-slot:activator="{ props }">
              <v-overlay v-model="overlay"></v-overlay>
              <v-btn class="item-icon" v-bind="props">
                <v-icon icon="mdi-menu"></v-icon>
                <v-tooltip class="font_w_b" activator="parent" location="top"
                  >Menu</v-tooltip
                >
              </v-btn>
            </template>
            <div class="box_menu">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title
                  style="
                    font-weight: 400;
                    font-size: 14px;
                    font-family: sans-serif;
                  "
                  class="item_click"
                  >{{ item.title }}</v-list-item-title
                >
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item v-for="(content, i) in contents" :key="i">
                <router-link
                  style="color: #000"
                  class="font_w_b item_click"
                  :to="content.to"
                  >{{ content.title }}</router-link
                >
              </v-list-item>
            </div>
          </v-menu>
          <!-- ===============  MENU ================== -->
        </div>
      </template>
    </v-app-bar>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      //Items
      items: [
        { title: 'Game Bắn Súng' },
        { title: 'Game phiêu lưu' },
        { title: 'Game giải trí' },
        { title: 'Game Hành Động' },
      ],
      //content
      contents: [
        {
          title: 'Sign In',
          to: '/sign-in',
        },
        {
          title: 'Contact us',
          to: '/contact-us',
        },
      ],
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');
/**ALL */
.font_w_b {
  font-weight: bold;
}
.bg-black {
  color: #000;
}
.padding_1rem {
  padding: 0 1rem;
  display: flex;
  align-items: center;
}
/**STYle */
.my-drawer {
  font-weight: 600;
}
.toolbar-title {
  font-family: 'Dela Gothic One', cursive;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.item-icon:not(:last-child) {
  margin: 15px;
  color: #000;
  height: 0px;
}
.contact_us {
  font-size: 14px;
  font-weight: 600;
}
.contact_us:hover {
  transition: 300ms ease-in-out;
  text-decoration: underline;
}
.list_item_title {
  position: relative;
  text-decoration: none; /* Định nghĩa màu nền mong muốn */
  color: #000;
}
.dot {
  position: absolute;
  top: 0;
  right: 12px;
}
.box_menu {
  background: #ffffff;
  width: 350px;
  height: 100vh;
  margin: -40px -26px 0 0;
  border-radius: 5px;
  position: absolute;
  padding: 3rem 0 3rem 2rem;
  right: 0;
}
.item_click {
  cursor: pointer;
  text-decoration: none;
  transition: 200ms ease-in-out;
}
.item_click:hover {
  transition: 200ms ease-in-out;
  text-decoration: underline;
  margin: 0 0 5px 0;
}
</style>
