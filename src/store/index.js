import { createStore } from 'vuex'


export default createStore({
  state: {
    iconColor: 'black', // Màu sắc mặc định
  },
  getters: {
  },
  mutations: {
    setIconColor(state, color) {
      state.iconColor = color;
    },
  },
  actions: {
  },
  modules: {
  }
})
