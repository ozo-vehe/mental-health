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
        <h3 class="lg:text-mh_h5 md:text-mh_h6 text-[20px] font-[600] leading-[1.3] mb-2">
          {{ article.title }}
        </h3>
        <p class="line-clamp-4 lg:text-mh_h6 md:text-[18px] text-[16px] my-2">
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

  <template v-else-if="type == 'videos'">
    <template v-if="video">
      <div class="flex flex-wrap gap-8">
        <div class="video max-w-[500px] max-h-[350px] rounded-[8px] overflow-hidden">
          <video class="w-full h-full object-cover" controls src="https://www.youtube.com/watch?v=xvFZjo5PgG0" poster="../assets/images/video_poster.png"></video>
        </div>

        <div class="video_description max-w-[650px]">
          <h3 class="lg:text-mh_h3 md:text-mh_h4 text-[20px] font-[600] leading-[1.3] mb-2">
            {{ video.title }}
          </h3>
          <p class="lg:text-mh_h6 md:text-[18px] text-[16px] my-2 text-mh_subtle_text">
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
    <template v-if="article">
      <div class="flex flex-wrap gap-8">
        {{ article.title }}
      </div>
    </template>
  </template>
</template>
