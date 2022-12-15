<template>
  <div
    class="py-16 container mx-auto px-4"
    v-for="product in products"
    :key="product.id"
  >
    <div class="lg:flex gap-x-16 pt-16">
      <img :src="product.image" alt="" class="w-96 h-96" />

      <div class="items-center space-y-4 pt-8">
        <h1 class="text-4xl mb-2">{{ product.category }}</h1>
        <h1 class="text-2xl font-bold mb-2">{{ product.title }}</h1>

        <div class="m-3">
          <p>{{ products.description }}</p>
          <p class="text-3xl font-bold">${{ product.price }}</p>
        </div>

        <div>
          <button
            :disabled="!inStock"
            @click="addToCart"
            :class="[
              inStock
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
                : 'bg-gray-400 cursor-not-allowed',
            ]"
            class="rounded-md px-4 py-2 text-white"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const products = computed(() => {
  return store.state.products;
});

onMounted(() => {
  store.dispatch("fetchProducts");
});

const emit = defineEmits(["add-to-cart"]);
const product = ref({
  selectedVariant: 0,
  variants: [
    { id: 2, quantity: 10 },
    { id: 3, quantity: 5 },
  ],
});

const inStock = computed(() => {
  return product.value.variants[product.value.selectedVariant].quantity;
});

function addToCart() {
  if (inStock.value) {
    product.value.variants[product.value.selectedVariant].quantity--;
    emit(
      "add-to-cart",
      product.value.variants[product.value.selectedVariant].id
    );
  } else {
    return false;
  }
}
</script>
