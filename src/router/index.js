import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactUs from '../components/navbar/ContactUs/ContactUs.vue'
import Update from '../components/admin/update/Update.vue'
import Setting from '../components/admin/setting/Setting.vue'
import Cart from '../components/Cart/Cart.vue'
import Login from '../components/Users/Login.vue'
import Register from '../components/Users/Register.vue'
import UserManagement  from '../components/UserManagement/UserManagement.vue'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart.vue'
import IndexCategory from '../views/category/IndexView.vue'
import IndexProduct from '../views/product/IndexProduct.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact-us',
    component: ContactUs,
  },
  {
    path: '/admin',
    component: Update,
  },
  {
    path: '/admin/settings',
    component: Setting,
  },
  {
    path: "/cart/:productId/:productName/:productDiscount/:productDescription/:productPrice/:image",
    name: "cart",
    component: Cart,
    props: true,
  },
  {
    path: '/sign-in',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/admin/userManagement',
    component: UserManagement
  },
  {
    path: '/card/shoppingCart',
    component: ShoppingCart 
  },
  {
    path: '/admin/loai-san-pham',
    component: IndexCategory 
  },
  {
    path: '/admin/product',
    component: IndexProduct 
  },
 
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
