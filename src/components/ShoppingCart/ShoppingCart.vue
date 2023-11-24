<template>
  <navbar></navbar>
  <div>
    <h1>Shopping Cart</h1>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(game, index) in Games" :key="index">
          <td>{{ game.title }}</td>
          <td>
            <v-text-field
              v-model="game.quantity"
              type="number"
              @input="updateQuantity(index)"
            ></v-text-field>
          </td>
          <td>{{ game.price }}</td>
          <td>{{ game.quantity * game.price }}</td>
          <td>
            <v-btn @click="removegame(index)">Remove</v-btn>
          </td>
        </tr>
      </tbody>
    </table>
    <p>Total: {{ total }}</p>
    <v-btn @click="addGame">Add Game</v-btn>
  </div>
  <Footer />
</template>

<script>
import Footer from '../Footer/Footer.vue'
import Navbar from '../navbar/Navbar.vue'
export default {
  components: { Navbar, Footer },
  el: '#app',
  data() {
    return {
      Games: [
        { title: 'game 1', quantity: 1, price: 10 },
        { title: 'game 2', quantity: 2, price: 15 },
        { title: 'game 3', quantity: 3, price: 20 },
      ],
      total: 0,
    }
  },
  mounted() {
    this.calculateTotal()
  },
  methods: {
    updateQuantity(index) {
      this.calculateTotal()
    },
    calculateTotal() {
      this.total = this.Games.reduce((sum, game) => {
        return sum + game.quantity * game.price
      }, 0)
    },
    removegame(index) {
      this.Games.splice(index, 1)
      this.calculateTotal()
    },
    addGame() {
      this.Games.push({ title: 'New game', quantity: 1, price: 10 })
      this.calculateTotal()
    },
  },
}
</script>

<style scoped>
/* Tạo đường viền, background và padding cho shopping cart */
.shopping-cart {
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  padding: 20px;
}

/* Tạo kiểu cho tiêu đề */
h1 {
  margin-bottom: 20px;
}

/* Tạo kiểu cho bảng */
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

/* Tạo kiểu cho tiêu đề của bảng */
th {
  background-color: #ccc;
  padding: 10px;
  text-align: left;
}

/* Tạo kiểu cho nội dung của bảng */
td {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

/* Tạo kiểu cho nút "Remove" */
.remove-button {
  background-color: #ff5722;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}

/* Tạo kiểu cho nút "Add game" */
.add-button {
  background-color: #4caf50;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}
</style>