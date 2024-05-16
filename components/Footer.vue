<template>
  <footer>
    <div class="py-20 footer__top w-4/5 mx-auto">
      <div>
        <Logo class="mb-8" />
        <p class="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div class="flex items-center gap-9">
          <a href="#">
            <Facebook />
          </a>

          <a href="#">
            <Twitter />
          </a>

          <a href="#">
            <LinckedIn />
          </a>

          <a href="#">
            <Instagram />
          </a>
        </div>
      </div>

      <div>
        <h4 class="text-xl font-semibold mb-5">CATALOG</h4>
        <div class="flex flex-col gap-3">
          <a href="#">Necklaces</a>
          <a href="#">Hoodies</a>
          <a href="#">Jewelry Box</a>
          <a href="#">T-shirt</a>
          <a href="#">Jacket</a>
        </div>
      </div>

      <div>
        <h4 class="text-xl font-semibold mb-5">ABOUT US</h4>
        <div class="flex flex-col gap-3">
          <a href="#">Our Producers</a>
          <a href="#">Sitemap</a>
          <a href="#">FAQ</a>
          <a href="#">About Us</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>

      <div>
        <h4 class="text-xl font-semibold mb-5">CUSTOMER SERVICES</h4>
        <div class="flex flex-col gap-3">
          <a href="#">Contact Us</a>
          <a href="#">Track Your Order</a>
          <a href="#">Product Care & Repair</a>
          <a href="#">Book an Appointment</a>
          <a href="#">Shipping & Returns</a>
        </div>
      </div>
    </div>

    <div
      class="footer__bottom bg-primaryColor text-white min-h-14 flex items-center"
    >
      <div class="w-4/5 mx-auto flex justify-between">
        <p>© {{ new Date().getFullYear() }} Coral , Inc.</p>
        <img src="/icons_payment.png" alt="" />
        <a href="#" class="flex gap-1">
          <span>Scroll to top</span>
          <ArrowTop />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer__top {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}
</style>