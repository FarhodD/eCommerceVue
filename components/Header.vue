<template>
  <header class="w-4/5 mx-auto mb-5">
    <div class="flex justify-between">
      <Logo />
      <ul class="flex gap-5 text-primaryColor font-medium text-lg">
        <li class="flex items-center gap-1">
          <svg
            width="23"
            height="23"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 12.5C9.72656 12.5 7.5 10.2734 7.5 7.5C7.5 4.76562 9.72656 2.5 12.5 2.5C15.2344 2.5 17.5 4.76562 17.5 7.5C17.5 10.2734 15.2344 12.5 12.5 12.5ZM14.4531 14.375C18.2031 14.375 21.25 17.4219 21.25 21.1719C21.25 21.9141 20.625 22.5 19.8828 22.5H5.07812C4.33594 22.5 3.75 21.9141 3.75 21.1719C3.75 17.4219 6.75781 14.375 10.5078 14.375H14.4531Z"
              fill="#1E2832"
            />
          </svg>
          <NuxtLink to="/">Account</NuxtLink>
        </li>
        <li class="flex items-center gap-1">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.125 6.875C8.125 4.49219 10.0781 2.5 12.5 2.5C14.8828 2.5 16.875 4.49219 16.875 6.875V8.75H19.375C20.3906 8.75 21.25 9.60938 21.25 10.625V18.75C21.25 20.8203 19.5703 22.5 17.5 22.5H7.5C5.39062 22.5 3.75 20.8203 3.75 18.75V10.625C3.75 9.60938 4.57031 8.75 5.625 8.75H8.125V6.875ZM10 8.75H15V6.875C15 5.50781 13.8672 4.375 12.5 4.375C11.0938 4.375 10 5.50781 10 6.875V8.75ZM9.0625 12.5C9.57031 12.5 10 12.1094 10 11.5625C10 11.0547 9.57031 10.625 9.0625 10.625C8.51562 10.625 8.125 11.0547 8.125 11.5625C8.125 12.1094 8.51562 12.5 9.0625 12.5ZM15.9375 10.625C15.3906 10.625 15 11.0547 15 11.5625C15 12.1094 15.3906 12.5 15.9375 12.5C16.4453 12.5 16.875 12.1094 16.875 11.5625C16.875 11.0547 16.4453 10.625 15.9375 10.625Z"
              fill="#1E2832"
            />
          </svg>

          <NuxtLink to="/shoping">Shoping</NuxtLink>
        </li>
      </ul>
    </div>

    <hr class="my-3" />

    <nav class="flex justify-between">
      <NuxtLink to="/">Jewelry & Accessories</NuxtLink>
      <NuxtLink to="/">Clothing & Shoes</NuxtLink>
      <NuxtLink to="/">Home & Living</NuxtLink>
      <NuxtLink to="/">Wedding & Party</NuxtLink>
      <NuxtLink to="/">Toys & Entertainment</NuxtLink>
      <NuxtLink to="/">Art & Collectibles</NuxtLink>
      <NuxtLink to="/">Craft Supplies & Tools</NuxtLink>
    </nav>
  </header>
</template>