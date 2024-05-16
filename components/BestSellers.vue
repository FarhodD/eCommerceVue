<script setup>
import { allProducts } from "~/data";
import Cart from "./Cart.vue";
import { register } from 'swiper/element/bundle';
register();

const filteredProducts = ref(allProducts);
const currentCategory = ref("All Products");

const filterByCategory = (categoryID) => {
  filteredProducts.value =
    categoryID === "All Products"
      ? allProducts
      : allProducts.filter(
          (product) => product.categoryID === Number(categoryID)
        );

  currentCategory.value = categoryID;
};
</script>

<template>
  <section class="py-10">
    <h2 class="text-3xl text-center font-semibold">Best Sellers</h2>
    <div class="flex gap-10 my-10">
      <button
        :class="{ active: currentCategory === 'All Products' }"
        @click="filterByCategory('All Products')"
      >
        All Products
      </button>
      <button
        :class="{ active: currentCategory === 1 }"
        @click="filterByCategory(1)"
      >
        T-shirt
      </button>
      <button
        :class="{ active: currentCategory === 2 }"
        @click="filterByCategory(2)"
      >
        Hoodies
      </button>
      <button
        :class="{ active: currentCategory === 3 }"
        @click="filterByCategory(3)"
      >
        Jacket
      </button>
    </div>

    <div class="slider">
      <swiper-container :slides-per-view="4" :space-between="50" :navigation="true">
        <swiper-slide v-for="product in filteredProducts" :key="product.id">
          <Cart
            :img="product.img"
            :name="product.name"
            :category="product.category"
            :price="product.price"
            :productTitle="product.productTitle"
            :categoryID="product.categoryID"
          />
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<style>
.swiper-button-prev,
.swiper-button-next {
  color: #1e2832;
}

button.active {
  font-weight: 700;
}
</style>