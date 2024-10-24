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
    <div v-if="article" class="article_card max-w-[420px] rounded-[8px] shadow-md">
      <div class="w-full rounded-t-[8px] lg:h-[350px] md:h-[300px] h-[250px] overflow-hidden">
        <img class="w-full h-full object-fit" :src="article_image" :alt="article.title" />
      </div>

      <div class="article_content max-h-[300px] overflow-hidden p-4">
        <h3 class="line-clamp-2 lg:text-mh_h5 md:text-mh_h6 text-[20px] font-[600] leading-[1.3] mb-2">
          {{ article.title }}
        </h3>
        <p class="line-clamp-4 lg:text-mh_h6 md:text-[18px] text-[16px] my-2">
          {{ article.content }}
        </p>
        <p class="lg:text-[18px] md:text-[16px] text-[14px] mt-8">
          <span class="font-[500]">Mental health </span>
          <span
            class="lg:text-[16px] md:text-[14px] text-[12px] border-l-2 px-2 border-mh_dark_text text-mh_subtle_text">{{
              article.date }}</span>
        </p>
      </div>
    </div>
  </template>

  <template v-else-if="type == 'videos'">
    <template v-if="video">
      <div class="flex lg:flex-nowrap md:flex-nowrap flex-wrap gap-8 w-full">
        <div class="video lg:w-[37%] md:w-[37%] w-full rounded-[8px] overflow-hidden">
          <video class="w-full h-full object-cover" controls src="https://www.youtube.com/watch?v=xvFZjo5PgG0"
            poster="../assets/images/video_poster.png"></video>
        </div>

        <div class="video_description lg:w-[60%] md:w-[60%] w-full">
          <h3 class="lg:text-mh_h3 md:text-mh_h4 text-[20px] font-[600] leading-[1.3] mb-2">
            {{ video.title }}
          </h3>
          <p class="lg:text-mh_h6 md:text-[18px] text-[16px] my-2 text-mh_subtle_text max-w-[750px]">
            {{ video.description }}
          </p>
          <p class="lg:text-[18px] md:text-[16px] text-[14px] mt-8">
            <span class="font-[500]">Mental health </span>
            <span
              class="lg:text-[16px] md:text-[14px] text-[12px] border-l-2 px-2 border-mh_dark_text text-mh_subtle_text">{{
                video.uploadDate }}</span>
          </p>
        </div>
      </div>
    </template>
  </template>

  <template v-else>
    <div v-if="article" class="article_card flex gap-4 lg:w-[45%] md:w-full w-full max-h-[300px] rounded-[8px] shadow-md">
      <div class="lg:w-[30%] md:w-[30%] w-[35%] rounded-t-[8px] max-h-[300px] overflow-hidden">
        <img class="w-full h-full object-fit" :src="article_image" :alt="article.title" />
      </div>

      <div class="article_content w-[65%] overflow-hidden lg:p-4 md:p-4 pb-4 pr-4">
        <h3 class="line-clamp-1 lg:text-mh_h5 md:text-mh_h6 text-[20px] font-[600] leading-[1.3] mb-2">
          {{ article.title }}
        </h3>
        <p class="line-clamp-3 lg:text-mh_h6 md:text-[18px] text-[16px] my-2">
          {{ article.content }}
        </p>
        <p class="lg:text-[18px] md:text-[16px] text-[14px] mt-8">
          <span class="font-[500]">Mental health </span>
          <span
            class="lg:text-[16px] md:text-[14px] text-[12px] border-l-2 px-2 border-mh_dark_text text-mh_subtle_text">{{
              article.publishedAt }}</span>
        </p>
      </div>
    </div>
  </template>
</template>

<style scoped>
</style>
