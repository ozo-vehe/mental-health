<script setup lang="ts">
import ButtonComponent from "./ButtonComponent.vue";

defineProps({
  image: String,
  hero_button: String,
});
</script>

<template>
  <header
    class="home_hero rounded-bl-[32px] overflow-hidden relative min-h-[100vh] flex items-end pb-32 lg:px-20 md:px-12 px-4">
    <img class="absolute top-0 left-0 w-full h-full object-cover" :src="image" alt="Hero Image" />

    <div class="hero_text relative text-mh_light max-w-[700px]">
      <h1 class="text-mh_large font-[700] leading-tight">
        <slot name="hero_header"></slot>
      </h1>
      <p class="my-2 pr-10 lg:text-[22px] md:text-[18px] text-[16px]">
        <slot name="hero_text"></slot>
      </p>

      <div class="hero_btn flex items-center justify-start gap-7 mt-8">
        <ButtonComponent :text="hero_button" mh_class="bg-mh_nude font-bold px-8 text-gray-900" />
      </div>
    </div>
  </header>
</template>

<style scoped></style>
