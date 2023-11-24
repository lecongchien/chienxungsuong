<template>
  <div>
    <navbar></navbar>
    <v-container class="change">
      <v-card class="card">
        <v-toolbar-title style="text-align: center; font-weight: bold"
          >Đăng ký</v-toolbar-title
        >
        <v-card-text>
          <v-form @submit.prevent="register">
            <v-text-field v-model="user.email" label="Email"></v-text-field>
            <v-text-field
              v-model="user.password"
              label="Password"
              type="password"
            ></v-text-field>
            <v-text-field
              v-model="user.phonenumber"
              label="Phone Number"
            ></v-text-field>
            <v-text-field v-model="user.address" label="Address"></v-text-field>
            <v-text-field
              v-model="user.username"
              label="Username"
            ></v-text-field>
            <v-text-field
              v-model="user.fullname"
              label="Full Name"
            ></v-text-field>
            <v-text-field
              v-model="user.roleId"
              label="người dùng là 1"
            ></v-text-field>
            <v-btn
              type="submit"
              color="green"
              :class="{ loading: loading }"
              :disabled="loading"
              class="register-button"
            >
              <span v-if="!loading">Register</span>
              <v-progress-linear
                v-if="loading"
                indeterminate
                color="white"
              ></v-progress-linear>
            </v-btn>
            <router-link to="/login">
              <v-btn
                color="green"
                variant="outlined"
                style="margin: 10px 0 0 0; width: 100%"
              >
                Đăng nhập
              </v-btn>
            </router-link>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from '../Footer/Footer.vue'
import Navbar from '../navbar/Navbar.vue'
import axios from 'axios'

export default {
  components: { Navbar, Footer },
  data() {
    return {
      user: {
        email: '',
        password: '',
        phonenumber: '',
        address: '',
        username: '',
        fullname: '',
        roleId: 0,
      },
      loading: false,
    }
  },
  methods: {
    register() {
      this.loading = true

      axios
        .post('https://localhost:7293/api/User/register', this.user)
        .then((response) => {
          if (response.data === true) {
            alert('Đăng ký thành công!')
          } else {
            console.log('Đăng nhập thất bại')
          }
        })
        .catch((error) => {
          console.error('Đăng ký thất bại:', error)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  width: 300px;
  margin: 10px;
  padding: 20px;
}

.register-button {
  width: 100%;
  margin-top: 20px;
  position: relative;
}

.register-button .v-progress-linear {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 0;
}

.register-button.loading {
  background-color: #ff4081;
  transition: background-color 0.3s;
}

.register-button.loading:hover {
  background-color: #e91e63;
}

.register-button.loading:disabled {
  background-color: #999999;
  cursor: not-allowed;
}

.register-button.loading .v-progress-linear::before {
  background-color: #ffffff;
}

.register-button.loading .v-progress-linear .v-progress-linear__buffer {
  background-color: rgba(255, 255, 255, 0.3);
}

.register-button.loading .v-progress-linear .v-progress-linear__indeterminate {
  background-color: #ffffff;
}

.register-button.loading
  .v-progress-linear
  .v-progress-linear__indeterminate::before {
  background-color: #ffffff;
}

.change {
  display: flex;
  justify-content: center;
}
</style>