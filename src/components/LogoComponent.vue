<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps({
  text: String,
  mh_class: String,
});
</script>

<template>
  <div class="logo uppercase">
    <RouterLink to="/" class="font-[800] text-mh_h5" :class="mh_class">{{
      text
    }}</RouterLink>
  </div>
</template>
