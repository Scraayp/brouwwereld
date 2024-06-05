<template>
  <Navbar />

  <h1
    class="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-4xl dark:text-white text-center mt-2 content-between"
  >
    Nieuws
  </h1>

  <div
    class="grid lg:grid-cols-4 gap-2 items-center text-center mx-auto justify-center lg:ml-16"
  >
    <template v-for="item in news" :key="item.id">
      <newsItem
        :id="item.id"
        :title="item.title"
        :description="item.content"
        :picture="item.picture"
        class=""
      />
    </template>
  </div>

  <Footer class="mt-20" />
</template>

<script lang="ts" setup>
import { news } from "@/server/data";
</script>

<style></style>
