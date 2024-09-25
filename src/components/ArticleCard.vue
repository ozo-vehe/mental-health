<script setup lang="ts">
import article_image from "../assets/images/article_image.png";
defineProps({
  article: Object,
  type: String,
  video: Object,
});
</script>

<template>
  <template v-if="type == 'articles'">
    <div v-if="article" class="article_card w-[420px] rounded-[8px] shadow-md">
      <div class="w-full rounded-t-[8px] h-[350px] overflow-hidden">
        <img class="w-full h-full object-fit" :src="article_image" :alt="article.title" />
      </div>

      <div class="article_content h-[300px] overflow-hidden p-4">
        <h3 class="text-mh_h5 font-[600] leading-[1.3] mb-2">{{ article.title }}</h3>
        <p class="line-clamp-4 lg:text-mh_h6 md:text-[18px] text-[16px] my-2">
          {{ article.content }}
        </p>
        <p class="lg:text-mh_h6 md:text-[18px] text-[16px] mt-8">
          <span class="font-[500]">Mental health </span>
          <span class="text-[16px] border-l-2 px-2 border-mh_dark_text text-mh_subtle_text">{{ article.publishedAt
            }}</span>
        </p>
      </div>
    </div>
  </template>

  <template v-else-if="type == 'videos'">
    <template v-if="video">
      <p>Video: {{ video.title }}</p>
    </template>
  </template>
</template>
