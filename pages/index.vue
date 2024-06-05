<template>
  <div class="">
    <head>
      <title>Mad Gamer</title>
    </head>
    <Navbar />
    <h1
      class="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl dark:text-white text-center mt-6 content-between"
    >
      Welkom bij
      <mark
        class="px-2 text-white bg-prim dark:bg-prim overflow-hidden rounded-xl"
        >Mad Gamer.</mark
      >
    </h1>

    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="products"
      :ui="{ item: 'basis-full' }"
      class="rounded-lg overflow-hidden text-center items-center mx-auto"
      indicators
    >
      <img
        :src="item.picture"
        class="lg:w-[70vw] lg:h-[80vh] sm:w-[70vw] text-center items-center mx-auto"
        draggable="false"
      />
    </UCarousel>
    <h2 class="text-white font-bold text-center text-5xl mt-5 mb-5">
      Laatste Nieuws
    </h2>
    <div class="grid grid-cols-3 gap-2 items-center text-center ml-16">
      <news-item
        :id="news[news.length - 1].id"
        :title="news[news.length - 1].title"
        :description="news[news.length - 1].content"
        :picture="news[news.length - 1].picture"
      />
      <news-item
        :id="news[news.length - 2].id"
        :title="news[news.length - 2].title"
        :description="news[news.length - 2].content"
        :picture="news[news.length - 2].picture"
      />
      <news-item
        :id="news[news.length - 3].id"
        :title="news[news.length - 3].title"
        :description="news[news.length - 3].content"
        :picture="news[news.length - 3].picture"
      />
    </div>

    <Footer class="mt-20" />
  </div>
</template>

<script lang="ts" setup>
import { products, news } from "@/server/data";
import NewsItem from "~/components/newsItem.vue";

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});

console.log(news[news.length - 1].picture);

const newsLength = news.length;
</script>

<style></style>
