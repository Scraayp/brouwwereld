<template>
  <Navbar />

  <!-- <div class="container mx-auto">
    <div class="flex justify-center">
      <div class="w-1/2">
        <h1 class="text-3xl font-bold text-center">{{ currentNews!.title }}</h1>
        <p class="text-center text-gray-500">{{ currentNews!.date }}</p>
        <img
          :src="currentNews!.picture"
          alt="news image"
          class="w-full h-96 object-cover mt-4"
        />
        <p class="mt-4">{{ currentNews!.content }}</p>
      </div>
    </div>
  </div> -->

  <Footer />
</template>

<script lang="ts" setup>
import { news } from "@/server/data";

const route = useRoute();

const currentNewsId = Number(route.params.id);

const currentNews = news.find((n) => n.id === currentNewsId);

console.log(currentNews);

// if (currentNews === undefined) {
//   navigateTo("/news");
// }
</script>

<style></style>
