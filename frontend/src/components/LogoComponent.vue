<script setup lang="ts">
import { RouterLink } from "vue-router";
import footer_logo from "../assets/footer_logo.png";
import nav_logo from "../assets/nav_logo.png";

defineProps({
  component: String,
  mh_class: String,
});

</script>

<template>
  <div v-if="component == 'navbar'" class="logo uppercase">
    <RouterLink to="/" class="font-[800] text-mh_h5" :class="mh_class">
      <img :src="nav_logo" alt="Logo">
    </RouterLink>
  </div>

  <div v-else-if="component == 'footer'" class="logo uppercase">
    <RouterLink to="/" class="font-[800] text-mh_h5" :class="mh_class">
      <img :src="footer_logo" alt="Logo">
    </RouterLink>
  </div>
</template>
