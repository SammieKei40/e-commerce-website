<template>
  <header
    class="bg-gradient-to-r from-cyan-500 to-blue-500 py-4 px-4 fixed w-full"
  >
    <section class="flex justify-between items-center">
      <div class="flex container mx-auto items-center">
        <img :src="img" alt="logo" class="text-4xl w-40" />
        <h1 class="font-bold text-black">Ecommerce</h1>
      </div>
      <h1 class="text-white">Cart({{ cartItems.length }})</h1>
    </section>
  </header>
  <ProductList :member="isMember" @add-to-cart="addToCart" />
</template>

<script setup>
import { ref } from "vue";
import ProductList from "./components/ProductList.vue";
const img = "../src/assets/iConnect-logo.png";
const isMember = ref(false);
const cartItems = ref([]);
function addToCart(id) {
  cartItems.value.push(id);
}
</script>
