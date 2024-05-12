<script setup>
defineProps({
  img: String,
  name: String,
  productTitle: String,
  category: String,
  price: Number,
  categoryID: Number,
});
</script>

<template>
  <article>
    <img class="h-96 w-full object-cover" :src="img" alt="" />
    <div class="p-2">
      <h4 class="text-lg font-semibold mb-3">{{ productTitle }}</h4>
      <div class="flex justify-between items-end">
        <span>{{ name }}</span>
        <span>{{ price }}</span>
      </div>
    </div>
  </article>
</template>