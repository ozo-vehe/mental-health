<script setup lang="ts">
import ButtonComponent from "../components/ButtonComponent.vue";
import service_underline from "../assets/images/service_underline.png";
import individual from "../assets/icons/individual.png";
import group from "../assets/icons/group.png";
import counseling_image from "../assets/images/counseling_image.png"
import { ref } from "vue";

// Service categories
const service_categories = ref(["counseling & consultation", "medication management", "support groups", "education & self-help"]);

// Active category
const active_category = ref("counseling & consultation");

// Function
// A function to handle contact for submission.
const handleSubmit = async () => {
  console.log("Form submitted");
}
</script>

<template>
  <header
    class="home_hero overflow-hidden relative lg:min-h-[100vh] md:min-h-[90vh] min-h-[80vh] flex lg:items-center md:items-center items-end justify-center lg:px-20 md:px-12 px-4 lg:pb-0 md:pb-0 pb-20">
    <img class="absolute top-0 left-0 w-full h-full object-cover" src="../assets/images/service_image.png"
      alt="Hero Image" />

    <div class="hero_text text-center relative text-mh_light max-w-[800px]">
      <h1 class="lg:text-mh_large md:text-mh_h1 text-mh_h1 font-[700] leading-tight">
        Services
      </h1>

      <p class="my-2 lg:text-[22px] md:text-[18px] text-[16px]">
        HEvolve offers comprehensive mental health services tailored to men
      </p>

      <div class="hero_btn flex items-center justify-center mt-8">
        <ButtonComponent text="Get Involved" mh_class="bg-mh_nude font-bold px-12 text-gray-900 text-mh_h6 py-4" />
      </div>
    </div>
  </header>

  <!-- Services Section -->
  <section class="services_container my-16 max-w-[1440px] mx-auto lg:px-20 md:px-12 px-4">
    <h2 class="max-w-[700px] relative lg:text-mh_h2 md:text-mh_h3 text-mh_h4 font-[700] text-center mx-auto mb-12">
      <span>What we do at HEvolve</span>
      <img class="absolute -bottom-3 left-0 w-full" :src="service_underline" alt="Underline">
    </h2>

    <div class="service_categories flex flex-wrap items-center lg:justify-between md:justify-between justify-center gap-4">
      <p v-for="(category, index) in service_categories" :key="index"
        class="cursor-pointer capitalize lg:text-mh_h6 md:text-mh_h6 text-[16px] px-3 py-1 rounded-[4px]"
        :class="{ 'bg-[#F9E6E6] font-[600]': active_category === category }" @click="active_category = category">{{
          category }}</p>
    </div>
  </section>

  <!-- Services Category Section -->
  <section
    class="service_category my-16 max-w-[1440px] mx-auto lg:px-20 md:px-12 px-4 py-16 flex flex-wrap items-center justify-center gap-20">
    <div class="category_image w-[550px] h-[350px]">
      <img class="w-full h-full object-cover" src="../assets/images/consultation.png" alt="Consultation">
    </div>

    <div class="category_text max-w-[500px]">
      <h2 class="lg:text-mh_h2 md:text-mh_h3 text-mh_h4 font-[700] leading-tight">Online Counseling & Consultation </h2>
      <h4 class="lg:text-mh_h5 text-[20px] font-[500] mt-2 lg:mb-8 mb-5">Accessible Support, Anywhere</h4>
      <p class="font-[400] leading-8">Get the help you need from the comfort of your home. Our online counseling service
        provides flexible and confidential support through video or voice calls. Whether you're balancing a busy
        schedule or prefer a more private setting, online counseling offers professional care on your terms.</p>
    </div>
  </section>

  <!-- In Person Counseling Section -->

  <section
    class="counseling_container my-16 max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-20 h-fit">
    <div class="counseling_text lg:max-w-[45%] md:max-w-[35%] w-full py-8 pl-16 text-white">
      <h2 class="lg:text-mh_h2 md:text-mh_h3 text-mh_h4 font-[700] leading-[1.2]">In-Person & Group Counseling</h2>
      <h4 class="text-[16px] font-[700] mt-2 mb-5">One-on-One Sessions or Shared Experiences</h4>
      <p>Our in-person sessions offer private, one-on-one counseling or group sessions where men share and grow
        together, providing both individual focus and community support for deeper healing.</p>
    </div>

    <div
      class="counseling_options relative lg:w-[45%] md:w-[50%] w-full h-[400px] flex flex-wrap items-center justify-center gap-x-4">
      <img class="absolute top-0 left-0 w-full h-full object-cover" :src="counseling_image" alt="Counseling Image">
      <div class="individual bg-white relative z-[1px] max-w-[250px] py-2 px-4 rounded-[28px] text-center">
        <img class="w-[40px] h-[40px] mx-auto" :src="individual" alt="Individual">
        <h4 class="text-[16px] font-[500]">Individual Counseling</h4>
        <p class="text-[12px]">One-on-One Sessions for Focused Support</p>
      </div>

      <div class="group bg-white relative z-[1px] max-w-[250px] py-2 px-4 rounded-[28px] text-center">
        <img class="w-[40px] h-[40px] mx-auto" :src="group" alt="Individual">
        <h4 class="text-[16px] font-[500]">Group Counseling</h4>
        <p class="text-[12px]">Shared Experiences, Collective Growth</p>
      </div>
    </div>
  </section>


  <!-- Get Help Section -->
  <section
    class="get_help max-w-[1440px] mx-auto lg:px-20 md:px-12 px-4 py-20 flex flex-wrap gap-x-16 gap-y-8 items-center justify-center">
    <div
      class="get_help_image_text rounded-[20%] relative overflow-hidden max-w-[320px] min-h-[250px] shadow-md flex items-center justify-center px-2 text-center text-white font-[500]">
      <img class="absolute top-0 left-0 w-full h-full object-cover" src="../assets/images/get_help.png"
        alt="Get Help Image" />

      <div class="get_help_text relative flex flex-col items-center justify-center z-[1]">
        <p class="text-[18px] mb-4">You Need to Understand that Mental Anxiety can be <span
            class="text-gray-900 font-[700]">Discussed</span></p>
        <button class="bg-gray-800 text-gray-50 rounded-[4px] py-3 px-2">Get Free Consultation</button>
      </div>
    </div>

    <div class="max-w-[650px]">
      <h2 class="font-[700] lg:text-mh_h3 md:text-mh_h4 text-mh_h5 mb-2">Get help from the people who care</h2>
      <div class="contact_form w-full bg-[#F5EADF] p-8 rounded-[8px]">
        <form class="flex flex-wrap items-center justify-center gap-6" @submit="handleSubmit">
          <div class="h-[60px] flex gap-4 w-full">
            <!-- Name -->
            <input
              class="w-1/2 px-2 h-full bg-[#F5EADF] outline-none border border-gray-800 rounded-[8px] placeholder:text-gray-800 text-gray-800"
              type="text" name="name" id="name" placeholder="Enter your name" required />
            <!-- Email Address -->
            <input
              class="w-1/2 px-2 h-full bg-[#F5EADF] outline-none border border-gray-800 rounded-[8px] placeholder:text-gray-800 text-gray-800"
              type="email" name="email" id="email" placeholder="Enter email address" required />
          </div>

          <div class="consultation_type h-[60px] w-full border">
            <select name="consultation_type" id="consultation_type"
              class="w-full px-2 h-full bg-[#F5EADF] outline-none placeholder:text-gray-800 text-gray-800 border border-gray-800 rounded-[8px]">
              <option value="">Consultation type</option>
              <option value="type_one">Consultation type</option>
              <option value="type_two">Consultation type</option>
              <option value="type_three">Consultation type</option>
            </select>
          </div>

          <div class="h-[60px] flex gap-4 w-full">
            <!-- Date -->
            <div
              class="w-1/2 flex items-center justify-center gap-2 h-full border border-gray-800 rounded-[8px] pr-2 overflow-hidden">
              <input class="w-full px-2 h-full bg-[#F5EADF] outline-none border-none placeholder:text-gray-800"
                type="date" name="date" id="date" placeholder="Date" required />
              <!-- <img class="w-[20px] h-[20px] cursor-pointer" src="https://img.icons8.com/windows/96/ffffff/add-phone.png"
              alt="add-phone" /> -->
            </div>

            <!-- Phone number -->
            <div
              class="w-1/2 flex items-center justify-center gap-2 h-full border border-gray-800 rounded-[8px] pr-2 overflow-hidden">
              <input class="w-full px-2 h-full bg-[#F5EADF] outline-none border-none placeholder:text-gray-800"
                type="tel" name="phone_number" id="phone_number" placeholder="Phone number" required />
              <img class="w-[20px] h-[20px] cursor-pointer" src="https://img.icons8.com/windows/96/1f2937/add-phone.png"
                alt="add-phone" />
            </div>
          </div>

          <!-- Form Button -->
          <div class="form_btn w-full mt-4">
            <button
              class="w-full py-3 rounded-[8px] flex items-center justify-center gap-2 bg-[#130D06] capitalize font-[600] text-white">
              send
              <img class="w-[20px] h-[20px] bg-[#130D06]"
                src="https://img.icons8.com/material-rounded/96/ffffff/right.png" alt="right" />
            </button>
          </div>
        </form>
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
        <p class="font-[500] mb-6 lg:text-left md:text-left text-center">
          Join a community of like minded individuals in your journey to mental
          wholeness. Don't miss out on the support and knowledge that can make a
          difference in your life.
        </p>

        <ButtonComponent text="Join us now"
          mh_class="bg-mh_dark_text font-[500] px-10 text-[#f5eadf] lg:w-[80%] md:w-[80%] w-full" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.counseling_container {
  background: linear-gradient(to right, #a8a8a8, #000000 50%);
}

.get_help_image_text::after {
  background: #0000005d;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}
</style>
