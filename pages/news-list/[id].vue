<template>
  <Navbar />

  <div v-if="currentNews" class="mb-40">
    <h1 class="text-3xl font-bold text-center">{{ currentNews.title }}</h1>
    <p class="text-center text-gray-500">{{ currentNews.date }}</p>
    <img
      :src="currentNews.picture"
      alt="news image"
      class="lg:w-[90%] lg:h-[60vh] object-cover mt-4 mx-auto rounded-3xl"
    />
    <p class="mt-4 text-center text-lg w-4/5 mx-auto">
      {{ currentNews.content }}
    </p>
  </div>
  <div v-else>
    <p class="text-center text-red-500">News item not found.</p>
  </div>

  <Footer />
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { news } from "@/server/data";

const route = useRoute();
const router = useRouter();

const currentNews = ref({});

onMounted(() => {
  const currentNewsId = Number(route.params.id);
  const foundNews = news.find((n) => n.id === currentNewsId);

  if (foundNews) {
    currentNews.value = foundNews;
  } else {
    // Navigate to the news list if the news item is not found
    router.push("/news");
  }
});
</script>

<style scoped>
/* Add any specific styles for your page here */
</style>
