<template>
  <div
    class="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 md:mb-28"
  >
    <nav
      class="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4"
    >
      <div class="flex items-center justify-between">
        <button @click="toggleMenu" class="focus:outline-none">
          <div class="flex items-center space-x-2">
            <h2 class="text-black dark:text-white font-bold text-2xl">
              Company
            </h2>
          </div>
        </button>
        <div class="hidden lg:block">
          <ul
            class="flex space-x-10 text-base font-bold text-black/60 dark:text-white"
          >
            <li
              class="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear"
            >
              <NuxtLink href="/">Home</NuxtLink>
            </li>
            <li
              class="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear"
            >
              <NuxtLink href="/about">About</NuxtLink>
            </li>
            <li
              class="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear"
            >
              <NuxtLink href="/contact">Contact</NuxtLink>
            </li>
          </ul>
        </div>
        <div
          id="mobile-menu"
          :class="{ hidden: !showMenu }"
          class="fixed top-0 left-0 w-full h-full z-100 bg-prim"
        >
          <div class="flex items-center justify-end">
            <button
              @click="toggleMenu"
              class="focus:outline-none text-slate-200 dark:text-white"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                class="text-3xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500 mr-4 mt-5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div class="flex flex-col items-center mt-60 min-h-screen space-y-8">
            <a href="/" class="text-3xl font-semibold">Home</a>
            <a href="/about" class="text-3xl font-semibold">About</a>
            <a href="/contact" class="text-3xl font-semibold">Contact</a>
            <hr class="my-4 border-t border-gray-300" />
            <a href="/register" class="text-3xl font-semibold">Sign Up</a>
            <a href="/login" class="text-3xl font-semibold">Login</a>
          </div>
        </div>
        <div class="hidden lg:flex lg:items-center gap-x-2">
          <NuxtLink href="/register">
            <button
              class="flex items-center text-black dark:text-white justify-center px-6 py-2.5 font-semibold"
            >
              Sign up
            </button>
          </NuxtLink>
          <NuxtLink href="/login">
            <button
              class="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
            >
              Login
            </button>
          </NuxtLink>
        </div>
        <div class="flex items-center justify-center lg:hidden">
          <button
            @click="toggleMenu"
            class="focus:outline-none text-slate-200 dark:text-white"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              class="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
