import { createStore } from "vuex";
import axios from "axios";
import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();
export default createStore({
  state: {
    products: [],
    id: [],
    idnew: "",
  },
  getters: {
    getProducts: (state) => state.products,
    getId: (state) => state.id,
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const data = await axios.get(" https://fakestoreapi.com/products");
        sessionStorage.setItem("session", JSON.stringify(data));
        commit("SET_PRODUCTS", data.data);
        commit("SET_ID", data.data);
      } catch (error) {
        notify({
          title: "Error",
          text: "Network Error. Please Check your connection",
          type: "error",
        });
      }
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_ID(state, id) {
      state.id = id;
      for (var key of state.id) {
        state.idnew = key.id;
      }
    },
  },
});
