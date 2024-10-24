<script setup lang="ts">
import ArticleCard from "@/components/ArticleCard.vue";
import { videos } from "@/sample";
import { useArticlesStore } from "@/stores/articles";
import { storeToRefs } from "pinia";

const articlesStore = useArticlesStore();

const { articles } = storeToRefs(articlesStore)
</script>

<template>
  <header
    class="home_hero overflow-hidden relative lg:min-h-[85vh] md:min-h-[80vh] min-h-[75vh] flex lg:items-center md:items-center items-end justify-center lg:px-20 md:px-12 px-4 bg-[#F5EADF] lg:pb-0 md:pb-0 pb-20">
    <div class="hero_text text-center relative text-mh_light max-w-[800px]">
      <h1 class="text-mh_large text-mh_dark_text font-[700] leading-tight">Articles</h1>
      <p class="text-mh_subtle_text text-mh_h6 font-[500]">
        Gen empowered with men's mental health articles that will help your understanding
        of mental health
      </p>

      <div
        class="hero_search_bar flex gap-4 items-center justify-center mt-8 border border-mh_body_text rounded-[8px] min-h-[55px] py-2 pr-2">
        <input
          class="bg-[#F5EADF] outline-none border-none w-full h-full px-3 text-[14px] placeholder:text-mh_body_text text-mh_body_text"
          type="text" placeholder="Search articles" />
        <img class="w-[20px] h-[20px] cursor-pointer"
          src="https://img.icons8.com/fluency-systems-regular/48/search--v1.png" alt="search--v1" />
      </div>
    </div>
  </header>

  <main>
    <!-- Articles -->
    <section class="bg-[#efefef] lg:px-20 md:px-12 px-4 pt-20 pb-10 flex flex-col items-center justify-center gap-8">
      <h2 class="w-full text-mh_h3 font-[700]">Articles</h2>
      <div v-if="articles.length >= 1" class="flex lg:flex-nowrap md:flex-wrap flex-wrap items-center justify-center gap-x-4 gap-y-8">
        <template v-for="article in articles.slice(0, 3)" :key="article.id">
          <ArticleCard :article="article" type="articles" />
        </template>
      </div>
      <div v-else>
        <p>No article</p>
      </div>
    </section>

    <!-- Videos -->
    <section class="bg-[#efefef] lg:px-20 md:px-12 px-4 py-10 flex flex-col justify-center gap-8">
      <h2 class="w-full text-mh_h3 font-[700]">Videos</h2>
      <div class="flex flex-wrap items-center gap-x-4 gap-y-8">
        <template v-for="video in videos.slice(0, 1)" :key="video.id">
          <ArticleCard :video="video" type="videos" />
        </template>
      </div>
    </section>

    <!-- Recommendations -->
    <section class="bg-[#efefef] lg:px-20 md:px-12 px-4 py-10 flex flex-col justify-center gap-8">
      <h2 class="w-full text-mh_h3 font-[700]">Recommended articles</h2>
      <div class="flex flex-wrap items-center gap-x-12 gap-y-8">
        <template v-for="article in articles.slice(0, 4)" :key="article.id">
          <ArticleCard :article="article" />
        </template>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
