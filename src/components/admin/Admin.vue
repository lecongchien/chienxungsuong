<template>
  <v-navigation-drawer theme="dark" rail permanent>
    <v-list-item
      nav
      prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        value="dashboard"
      ></v-list-item>
      <v-list-item prepend-icon="mdi-forum" value="messages"> </v-list-item>

      <router-link style="color: #fff" to="/">
        <v-list-item
          prepend-icon="mdi-home-account"
          value="messages"
        ></v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>

  <v-navigation-drawer permanent>
    <v-list>
      <v-list-item>
        <router-link to="/admin/loai-san-pham" class="list_item_title">
          <v-list-item title="Category" value="Category"></v-list-item>
        </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {}
</script>

<style>
</style>

