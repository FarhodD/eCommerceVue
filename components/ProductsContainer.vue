<template>
  <div class="productsContainer">
    <slot />
  </div>
</template>

<style>
.productsContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
}
</style>