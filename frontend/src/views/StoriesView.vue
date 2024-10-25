<script setup lang="ts">
import ButtonComponent from "../components/ButtonComponent.vue";
</script>

<template>
  <header
    class="home_hero overflow-hidden relative lg:min-h-[100vh] md:min-h-[90vh] min-h-[80vh] flex lg:items-center md:items-center items-end justify-center lg:px-20 md:px-12 px-4 lg:pb-0 md:pb-0 pb-20">
    <img class="absolute top-0 left-0 w-full h-full object-cover" src="../assets/images/stories_header_image.png"
      alt="Hero Image" />

    <div class="hero_text text-center relative text-mh_light max-w-[800px]">
      <h1 class="lg:text-mh_large md:text-mh_h1 text-mh_h1 font-[700] leading-tight">
        Your story can give hope to someone today!
      </h1>

      <div class="hero_btn flex items-center justify-center mt-8">
        <a class="min-w-[120px] min-h-[50px] text-center flex items-center justify-center rounded-[8px] bg-mh_nude font-bold px-12 text-gray-900 text-mh_h6 py-4"
          href="https://docs.google.com/forms/d/e/1FAIpQLSf_Fo4kIKYY4osreH-FhpQ3PuPQTjy_lEYTdKrCCuxpEAr7UA/viewform"
          target="_blank">
          Share your experience
        </a>
      </div>
    </div>
  </header>

  <main>
    <!-- Men's Challenge -->
    <section
      class="bg-[#efefef] lg:px-20 md:px-12 px-4 py-20 flex flex-wrap items-center justify-center gap-x-16 gap-y-4">
      <div class="image_container max-w-[500px] max-h-[500px] relative p-4 lg:order-1 md:order-1 order-2">
        <img class="w-full h-full object-fit" src="../assets/images/about_image.png" alt="Experience Image" />
      </div>

      <div class="max-w-[650px] lg:order-2 md:order-2 order-1">
        <h3
          class="px-3 font-[700] lg:text-mh_h2 md:text-mh_h3 text-mh_h4 relative mb-2 leading-tight lg:text-left md:text-left text-center">
          Men go through challenges too
        </h3>
        <p
          class="font[500] lg:text-[22px] md:text-mh_h6 text-[18px] px-3 font-[500] lg:text-left md:text-left text-center">
          Men's health impacts far more than just men themselves. It starts with
          individuals but exends to families, workplaces, communities, and even influences
          health systems and economies. <br /><br />
          Everyone has a story related to men's health that deserves to be shared.
          <br /><br />
          You can contribute by sharing your experiences with men's health-whether it's
          about your own journey, or the profound effect of losing someone to suicide.
          <br /><br />
          These personal stories are crucial in illustrating the real-world impact of
          men's health issues.
        </p>

        <div class="lg:hidden md:hidden w-full flex flex-col items-center justify-center gap-12 mt-8">
          <p class="text-[18px] font-[500] text-center">
            By sharing, you help amplify the call for healthcare systems that address the
            needs of all genders and advocate for stronger government action on men's health
            issues. It only takes a couple of minutes to make a difference.
          </p>

          <a class="min-h-[50px] flex items-center justify-center rounded-[8px] bg-[#130D06] font-bold px-12 text-mh_light text-[18px] py-4 lg:w-[50%] md:w-[70%] w-full"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf_Fo4kIKYY4osreH-FhpQ3PuPQTjy_lEYTdKrCCuxpEAr7UA/viewform"
            target="_blank">
            Share your experience
          </a>
        </div>
      </div>
    </section>

    <section
      class="bg-[#efefef] lg:flex md:flex hidden flex-wrap items-center justify-center gap-x-16 gap-y-4 lg:px-20 md:px-12 px-4 pb-20">
      <div class="lg:w-[70%] md:w-[90%] w-full flex flex-col items-center justify-center gap-8">
        <p class="text-mh_h6 font-[500]">
          By sharing, you help amplify the call for healthcare systems that address the
          needs of all genders and advocate for stronger government action on men's health
          issues. It only takes a couple of minutes to make a difference.
        </p>

        <a class="min-h-[50px] flex items-center justify-center rounded-[8px] bg-[#130D06] font-bold px-12 text-mh_light text-[18px] py-4 lg:w-[50%] md:w-[70%] w-full"
          href="https://docs.google.com/forms/d/e/1FAIpQLSf_Fo4kIKYY4osreH-FhpQ3PuPQTjy_lEYTdKrCCuxpEAr7UA/viewform"
          target="_blank">
          Share your experience
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
