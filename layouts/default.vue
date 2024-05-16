<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="w-4/5 mx-auto flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>