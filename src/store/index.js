import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    products: [],
  },
  getters: {
    getProducts: (state) => state.products,
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const data = await axios.get(" https://fakestoreapi.com/products");
        sessionStorage.setItem("session", JSON.stringify(data));
        commit("SET_PRODUCTS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
  },
});
