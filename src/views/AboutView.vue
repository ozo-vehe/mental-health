<script setup lang="ts">
import ButtonComponent from "../components/ButtonComponent.vue";
</script>

<template>
  <header
    class="home_hero overflow-hidden relative min-h-[100vh] flex items-center justify-center lg:px-20 md:px-12 px-4">
    <img class="absolute top-0 left-0 w-full h-full object-cover" src="../assets/images/abt_header_image.png"
      alt="Hero Image" />

    <div class="hero_text text-center relative text-mh_light max-w-[800px]">
      <h1 class="text-mh_large font-[700] leading-tight">About Us</h1>

      <p class="my-2 text-[22px]">
        We provide a wide range of services, from counseling and consultations to advocacy
        and edication, all designed to meet the unique needds of men in underserved
        communities.
      </p>

      <div class="hero_btn flex items-center justify-center mt-8">
        <ButtonComponent text="get involved" mh_class="bg-mh_nude font-bold px-12 text-gray-900" />
      </div>
    </div>
  </header>

  <main>
    <!-- About HEvolve Section -->
    <section
      class="bg-[#efefef] lg:px-20 md:px-12 px-4 py-20 flex flex-wrap items-center justify-center gap-x-16 gap-y-4">
      <div class="max-w-[700px]">
        <div
          class="border-l border-mh_body_text pb-10 px-4 relative before:absolute before:w-[12px] before:h-[12px] before:rounded-full before:bg-mh_nude before:top-0 before:-left-[6px]">
          <h3
            class="px-3 font-[600] text-mh_h4 relative z-[1] before:absolute before:w-[70px] before:h-full before:bg-[#F5EADF] before:left-0 before:-z-10 mb-2">
            About HEvlove
          </h3>
          <p class="font[500] px-3">
            To empower men to prioritize their mental health, speak up, and seek support,
            ultimately reducing the stigma surrounding mental health in Nigeria and saving
            lives.
          </p>
        </div>

        <div
          class="border-l border-mh_body_text pb-10 px-4 relative before:absolute before:w-[12px] before:h-[12px] before:rounded-full before:bg-mh_nude before:top-4 before:-left-[6px]">
          <h3
            class="px-3 font-[600] text-mh_h4 relative z-[1] before:absolute before:w-[70px] before:h-full before:bg-[#F5EADF] before:left-0 before:-z-10 mb-2">
            Our Mission
          </h3>
          <p class="font[500] px-3">
            To provide a comprehensive and quality mental health services to MEN who
            suffer from mental breakdown and promote mental health awareness and education
            in the community.
          </p>
        </div>

        <div
          class="border-l border-mh_body_text px-4 relative before:absolute before:w-[12px] before:h-[12px] before:rounded-full before:bg-mh_nude before:bottom-0 before:-left-[6px]">
          <h3
            class="px-3 font-[600] text-mh_h4 relative z-[1] before:absolute before:w-[70px] before:h-full before:bg-[#F5EADF] before:left-0 before:-z-10 mb-2">
            Our Vision
          </h3>
          <p class="font[500] px-3">
            To create a world that support good mental health for MEN with proevention at
            the heart of what we do. We aiim to find and address the sources of mental
            health problems so that MEN and communnites can thrive.
          </p>
        </div>
      </div>

      <div class="image_container w-[430px] h-[530px] relative p-4">
        <img class="w-full h-full object-fit" src="../assets/images/abt_image.png" alt="About Image" />

        <!-- Image Style Bars -->
        <div class="upper_bars absolute top-0 right-0 w-[70%] h-[30%]">
          <span class="block upper_bars_up bg-mh_nude w-full h-[35px] rounded-[10px] absolute top-0"></span>
          <span class="block upper_bars_right bg-mh_nude h-full w-[35px] rounded-[10px] absolute right-0 top-0"></span>
        </div>

        <div class="lower_bars absolute bottom-0 right-0 w-[70%] h-[30%]">
          <span class="block upper_bars_up bg-mh_nude w-full h-[35px] rounded-[10px] absolute bottom-0"></span>
          <span
            class="block upper_bars_right bg-mh_nude h-full w-[35px] rounded-[10px] absolute right-0 bottom-0"></span>
        </div>
      </div>
    </section>

    <!-- Founder's Story Section -->
    <section class="bg-[#F5EADF] lg:px-20 md:px-12 px-4 py-20 flex flex-wrap items-center justify-center">
      <div class="about_video w-[300px] h-[300px] rounded-[8px] bg-[#A5A4A4] flex items-center justify-center">
        <img class="shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] rounded-full cursor-pointer"
          src="../assets/icons/play_btn.png" alt="Play Button" />
      </div>

      <div
        class="founders_story py-8 lg:px-40 md:px-12 px-4 shadow-md max-w-[800px] min-h-[350px] flex flex-col items-center justify-center bg-[#D9D9D9] rounded-[8px]">
        <h3 class="text-mh_h3 mb-4">Our Founder's Story</h3>
        <p class="font-[500] text-center">
          Ridwanullahi Amoo, the founder of HEvolve, is a survivor of severe mental health
          challenges. Diagnosed with bipolar disorder and PTSD, Ridwan faced the barriers
          of stigma and limited access to care. His journey from despaor to recovery
          inspired him to create HEvolve - a plateform to help other man navigate their
          mental health journeys and find the support they need.
        </p>

        <h3 class="text-mh_h3 font-[700] mt-8">HEvolve</h3>
      </div>
    </section>

    <!-- What We Are Known For -->
    <section class="lg:px-20 md:px-12 px-4 py-20 flex flex-col items-center justify-center">
      <h2 class="font-[600] text-mh_h4 text-center mb-8">What we are known for</h2>

      <div class="lg:w-[70%] md:w-[80%] w-full flex flex-col items-center justify-center gap-8">
        <div class="text-center flex items-center justify-center">
          <p
            class="bg-[#f5eadf] text-mh_dark_text font-[700] rounded-[30px] py-2 px-8 w-fit relative -rotate-6 text-[18px] min-w-[150px]">
            Objectivity
          </p>
        </div>

        <div class="text-center flex items-center justify-between w-[50%]">
          <p
            class="bg-[#f5eadf] text-mh_dark_text font-[700] rounded-[30px] py-2 px-8 w-fit relative -rotate-6 text-[18px] min-w-[150px]">
            Vallant
          </p>
          <p
            class="bg-[#f5eadf] text-mh_dark_text font-[700] rounded-[30px] py-2 px-8 w-fit relative -rotate-4 text-[18px] min-w-[150px]">
            Love
          </p>
        </div>

        <div class="text-center flex items-center justify-between w-[60%]">
          <p class="bg-[#f5eadf] text-mh_dark_text font-[700] rounded-[30px] py-[6px] px-5 w-fit relative -rotate-6">
            Empathy
          </p>
          <p class="bg-[#f5eadf] text-mh_dark_text font-[700] rounded-[30px] py-[6px] px-5 w-fit relative -rotate-6">
            Versatility
          </p>
        </div>

        <div class="text-center flex items-center justify-between w-[70%]">
          <p class="bg-[#f5eadf] text-mh_dark_text font-[700] rounded-[30px] py-[6px] px-5 w-fit relative -rotate-6">
            Humanity
          </p>
          <p class="bg-[#f5eadf] text-mh_dark_text font-[700] rounded-[30px] py-[6px] px-5 w-fit relative -rotate-6">
            Ethical values
          </p>
        </div>
      </div>
    </section>

    <!-- Join Our Community -->
    <section class="bg-[#F5EADF] lg:px-20 md:px-12 px-4 py-20 flex flex-wrap items-center justify-center">
      <div
        class="join_community p-8 border-[3px] border-mh_dark_text rounded-[8px] flex flex-wrap justify-center items-center gap-x-12 lg:w-[70%] md:w-[80%] w-full">
        <h3 class="text-mh_h3 font-[700] max-w-[200px] text-center">
          Join Our Community
        </h3>

        <div class="max-w-[450px]">
          <p class="font-[500] mb-6">
            Join a community of like minded individuals in your journey to mental
            wholeness. Don't miss out on the support and knowledge that can make a
            difference in your life.
          </p>

          <ButtonComponent text="Join us now" mh_class="bg-mh_dark_text font-[500] px-10 text-[#f5eadf] w-[80%]" />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
