<template>
  <Navbar />

  <h1
    class="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-4xl dark:text-white text-center mt-2 content-between"
  >
    Producten
  </h1>

  <div class="grid grid-cols-4 gap-2 items-center text-center ml-16">
    <template v-for="item in products" :key="item.id">
      <productItem
        :picture="item.picture"
        :name="item.name"
        :publisher="item.publisher"
        :genre="item.genre"
        class=""
      />
    </template>
  </div>

  <Footer class="mt-20" />
</template>

<script lang="ts" setup>
import { products } from "@/server/data";
</script>

<style></style>
