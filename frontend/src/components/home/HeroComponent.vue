<script setup lang="ts">
import ButtonComponent from "../ButtonComponent.vue";
</script>

<template>
  <header
    class="home_hero rounded-bl-[32px] overflow-hidden relative lg:min-h-[100vh] md:min-h-[90vh] min-h-[100vh] flex items-end">

    <div class="fade_one absolute top-0 left-0 w-full h-full flex items-end pb-32 lg:px-20 md:px-12 px-4">
      <img class="absolute top-0 left-0 w-full h-full object-cover" src="../../assets/images/hero_image.png"
        alt="Hero Image" />

      <div class="relative text-mh_light max-w-[700px]">
        <h1 class="lg:text-mh_large md:text-mh_h1 text-mh_h1 font-[700] leading-tight">
          Men! Your <span class="text-mh_nude">Mental</span> Health Matters To Us.
        </h1>

        <p class="my-2 pr-10 lg:text-[22px] md:text-[18px] text-[16px]">
          Hevolve is a safe space for men to access mental health support, share their
          stories and find community
        </p>

        <div class="hero_btn flex items-center justify-start gap-7 mt-8">
          <ButtonComponent text="Get Involved" mh_class="bg-mh_nude font-bold px-8 text-gray-900" />
          <ButtonComponent text="Learn More" mh_class="text-mh_nude font-bold" />
        </div>
      </div>
    </div>

    <div class="fade_two absolute top-0 left-0 w-full h-full flex items-end pb-32 lg:px-20 md:px-12 px-4">
      <img class="absolute top-0 left-0 w-full h-full object-cover" src="../../assets/images/hero_image_2.png"
        alt="Hero Image 2">

      <div class="relative text-mh_light max-w-[700px]">
        <h1 class="lg:text-mh_large md:text-mh_h1 text-mh_h1 font-[700] leading-tight">
          Share Your <span class="text-mh_nude">Experience</span> Of Men's Mental Health.
        </h1>

        <p class="my-2 pr-10 lg:text-[22px] md:text-[18px] text-[16px]">
          HEvolve is a safe space for men to access mental health support, share their stories and find community.
        </p>

        <div class="hero_btn flex items-center justify-start gap-7 mt-8">
          <RouterLink to="/">
            <ButtonComponent text="Share your story" mh_class="bg-mh_nude font-bold px-8 text-gray-900" />
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.fade_one {
  opacity: 1;
  animation: image_fade 14s ease-in-out alternate infinite;
}

.fade_two {
  opacity: 0;
  animation: image_fade2 14s ease-in-out alternate infinite;
}

@keyframes image_fade {
  0% {
    opacity: 1;
  }

  45% {
    opacity: 1;
  }

  55% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

@keyframes image_fade2 {
  0% {
    opacity: 0;
  }

  45% {
    opacity: 0;
  }

  55% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}
</style>
