<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavigationComponent from './components/NavigationComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
// import { getArticles } from './utils/index';
import { onMounted } from 'vue';
import { useArticlesStore } from './stores/articles';

const articlesStore = useArticlesStore();

onMounted(async () => {
  articlesStore.fetchArticles("http://localhost:1337/api/articles");
});
</script>

<template>
  <NavigationComponent />
  <RouterView />
  <FooterComponent />
</template>

<style scoped></style>
