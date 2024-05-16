<template>
  <section class="py-24">
    <h2 class="text-3xl font-semibold text-center mb-14">
      Follow products and discounts on Instagram
    </h2>
    <div class="gallery flex gap-6 flex-wrap justify-center">
      <img src="/01.jpg" alt="" />
      <img src="/02.jpg" alt="" />
      <img src="/03.jpg" alt="" />
      <img src="/04.jpg" alt="" />
      <img src="/05.jpg" alt="" />
      <img src="/06.jpg" alt="" />
    </div>

    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-semibold text-center my-16">
        Or subscribe to the newsletter
      </h2>

      <div class="flex justify-between gap-6">
        <input
          type="email"
          class="border-b-2 border-b-black outline-none p-2 flex-1"
          placeholder="Email address..."
        />
        <button class="p-2 border-b-2 border-b-primaryColor">SUBMIT</button>
      </div>
    </div>
  </section>
</template>

<style>
.gallery img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>