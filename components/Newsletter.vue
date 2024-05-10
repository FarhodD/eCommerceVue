<script setup>
import Cart from './Cart.vue';
import ProductsContainer from './ProductsContainer.vue';
</script>

<template>
  <section class="py-10">
    <h2 class="text-center text-3xl font-semibold capitalize">
      Or subscribe to the newsletter
    </h2>

    <div class="flex gap-10 my-10">
      <button>All Products</button>
      <button>T-shirt</button>
      <button>hoodies</button>
      <button>jacket</button>
    </div>
    <ProductsContainer>
      <Cart />
    </ProductsContainer>
  </section>
</template>