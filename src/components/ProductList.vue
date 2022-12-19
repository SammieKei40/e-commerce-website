<template>
  <notifications position="top left" />
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
          <p class="text-3xl font-bold">
            ${{ product.price + Math.round(2.2 / 100) }}
          </p>
        </div>

        <div>
          <button
            :disabled="!inStock"
            v-bind:id="product.id"
            refs="product.id"
            :key="product.id"
            @click="addToCart(product.value)"
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
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification();
const store = useStore();
const products = computed(() => {
  return store.state.products;
});

const id = computed(() => {
  return store.state.idnew;
});
onMounted(() => {
  store.dispatch("fetchProducts");
});

const emit = defineEmits(["add-to-cart"]);
const product = ref({
  selectedVariant: 0,
  variants: [{ quantity: 20 }],
});

const inStock = computed(() => {
  return product.value.variants[product.value.selectedVariant].quantity;
});

function addToCart() {
  if (inStock.value) {
    product.value.variants[product.value.selectedVariant].quantity--;
    emit("add-to-cart", id.value);
    console.log(id.value);
    notify({
      title: "Success",
      text: " Product added to cart",
      type: "success",
    });
  } else {
    notify({
      title: "Error",
      text: "Sorry, an error occurs from our side while adding your product to the cart, we are currently working on it, Kindly try again.",
      type: "error",
    });
  }
}
</script>
