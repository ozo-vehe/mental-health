<script setup lang="ts">
defineProps({
  text: String,
  mh_class: String,
});
</script>

<template>
  <button class="min-w-[120px] min-h-[50px] text-center flex items-center justify-center rounded-[8px]"
    :class="mh_class">
    {{ text }}
  </button>
</template>

<style scoped></style>
