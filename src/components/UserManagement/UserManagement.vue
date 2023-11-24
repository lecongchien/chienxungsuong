<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item-group v-model="activeItem">
          <v-list-item
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Admin Dashboard</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-card>
          <v-card-title>
            <h2>Users</h2>
          </v-card-title>
          <v-card-text>
            <!-- Hiển thị danh sách người dùng -->
            <v-data-table
              :headers="headers"
              :items="users"
              :search="search"
              :items-per-page="10"
              class="elevation-1 custom-table"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="item in users" :key="item">
                  <tr class="custom-row">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td class="custom-actions">
                      <v-btn class="mgi" color="#ccc">
                        <v-icon
                          small
                          class="mr-1 custom-icon"
                          @click="editUser(item)"
                          >mdi-pencil</v-icon
                        >
                        Sửa
                      </v-btn>
                      <v-btn class="mgi" color="red">
                        <v-icon
                          small
                          class="custom-icon"
                          @click="deleteUser(item)"
                          >mdi-delete</v-icon
                        >
                        Xóa
                      </v-btn>
                    </td>
                  </tr>
                </template>
              </tbody>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      activeItem: null,
      menuItems: [
        { title: 'admin', icon: 'mdi-view-dashboard', route: '/admin' },
      ],
      headers: [
        { text: 'ID', value: 'id' },
        { name: 'Name', value: 'name' },
        { email: 'Email', value: 'email' },
        { actions: 'Actions', value: 'actions', sortable: false },
      ],
      users: [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
        // Thêm các người dùng khác tùy theo yêu cầu
      ],
      search: '',
    }
  },
  methods: {
    editUser(user) {
      // Xử lý khi người dùng nhấp vào chỉnh sửa người dùng
      console.log('Edit user:', user)
    },
    deleteUser(user) {
      // Xử lý khi người dùng nhấp vào xóa người dùng
      console.log('Delete user:', user)
    },
  },
}
</script>

<style>
.custom-table {
  font-size: 14px;
}

.custom-header {
  background-color: #f5f5f5;
  font-weight: bold;
}

.custom-row {
  background-color: #ffffff;
}

.custom-actions {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-icon {
  cursor: pointer;
  color: #757575;
}
.mgi {
  margin: 0 20px;
}
.custom-icon:hover {
  color: #333333;
}
</style>