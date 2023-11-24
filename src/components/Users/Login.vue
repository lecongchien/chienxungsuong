<template>
  <div>
    <navbar></navbar>
    <v-container class="change">
      <v-card class="card">
        <v-toolbar-title style="text-align: center; font-weight: bold"
          >Đăng nhập</v-toolbar-title
        >
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field v-model="user.email" label="Email"></v-text-field>
            <v-text-field
              v-model="user.password"
              label="Password"
              type="password"
            ></v-text-field>
            <v-btn
              type="submit"
              class="login-button"
              :class="{ loading: loading }"
              :disabled="loading"
            >
              <span v-if="!loading">Login</span>
              <v-progress-circular
                v-if="loading"
                indeterminate
                color="white"
              ></v-progress-circular>
            </v-btn>
            <div v-if="loginSuccess === true" class="success-message">
              <p>Đăng nhập thành công</p>
              <router-link class="success-message" to="/"
                >Trở về trang chủ</router-link
              >
            </div>
            <div v-if="loginSuccess === false" class="error-message">
              Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.
            </div>
            <router-link to="/register">
              <v-btn
                color="green"
                variant="outlined"
                style="margin: 10px 0 0 0; width: 100%"
              >
                Đăng ký
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
import router from '@/router'

export default {
  data() {
    return {
      loading: false,
      user: {
        email: '',
        password: '',
      },
      loginSuccess: null,
      iconColor: 'black',
    }
  },
  components: {
    Navbar,
    Footer,
  },

  methods: {
    login() {
      this.loading = true
      axios
        .post('https://localhost:7293/api/User/login', this.user)
        .then((response) => {
          this.loginSuccess = response.data
          if (
            response.data === true &&
            this.user.email === 'admin@gmail.com' &&
            this.user.password === '123456'
          ) {
            console.log(response.data)
            console.log('Đăng nhập thành công')
            router.push('/admin')
            this.$store.commit('setIconColor', 'green')
          } else {
            console.log('Đăng nhập thất bại')
            this.$store.commit('setIconColor', 'green')
          }
        })
        .catch((error) => {
          console.error('Đăng nhập thất bại:', error)
          ;(this.loginSuccess = false),
            this.$store.commit('setIconColor', 'red')
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

.login-button {
  width: 100%;
  margin-top: 20px;
  position: relative;
  background-color: #4caf50;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #45a049;
}

.login-button:disabled {
  background-color: #999999;
  cursor: not-allowed;
}

.login-button .v-progress-circular {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.change {
  display: flex;
  justify-content: center;
}
.error-message {
  color: red;
  margin: 10px 0 0;
}
.success-message {
  margin: 10px 0 0;
  color: #4caf50;
  text-decoration: none;
}
</style>