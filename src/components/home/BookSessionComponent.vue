<script setup lang="ts">
import checkbox from "../../assets/icons/checkbox.png";
import { ref } from "vue";

// Functions
const handleSubmit = async () => {
  console.log("Submitting...");
};

// Data
const type = ref("text");
</script>

<template>
  <section class="book_session">
    <div class="lg:px-20 md:px-12 px-4 py-20">
      <h2 class="lg:text-mh_h2 md:text-mh_h3 text-mh_h4 font-[600] max-w-[750px] leading-tight">
        Book a counseling session
      </h2>
      <p class="font-[600] lg:text-mh_h6 md:text-[18px] text-[16px]">
        Take the first step towards mental wellness
      </p>

      <div
        class="flex flex-wrap items-center lg:justify-between md:justify-between justify-center gap-10 w-full lg:mt-16 md:mt-8 mt-8">
        <div class="max-w-[350px] flex flex-col lg:gap-8 md:gap-6 gap-6">
          <div class="flex items-center gap-2">
            <img :src="checkbox" alt="Checkbox" />
            <p class="font-[500] ml-2">Identify your needs.</p>
          </div>

          <div class="flex items-center gap-2">
            <img :src="checkbox" alt="Checkbox" />
            <p class="font-[500] ml-2">Fill the form.</p>
          </div>

          <div class="flex items-center gap-2">
            <img :src="checkbox" alt="Checkbox" />
            <p class="font-[500] ml-2">Get connected with specialized doctors.</p>
          </div>

          <div class="flex items-center gap-2">
            <img :src="checkbox" alt="Checkbox" />
            <p class="font-[500] ml-2">Recommendations based on expert advise.</p>
          </div>

          <div class="flex items-center gap-2">
            <img :src="checkbox" alt="Checkbox" />
            <p class="font-[500] ml-2">Identify your needs</p>
          </div>
        </div>

        <div class="counseling_form mx-auto max-w-[850px] bg-[#F5EADF] p-8 rounded-[8px] mt-8">
          <form class="flex flex-wrap items-center justify-center gap-6" @submit="handleSubmit">
            <div class="h-[50px] flex gap-4 w-full">
              <!-- Name -->
              <input
                class="w-1/2 px-2 h-full bg-[#F5EADF] outline-none border border-[#130D06] rounded-[8px] placeholder:text-[#130D06] lg:placeholder:text-[16px] md:placeholder:text-[16px] placeholder:text-[14px]"
                type="text" name="name" id="name" placeholder="Enter your name" required />
              <!-- Email Address -->
              <input
                class="w-1/2 px-2 h-full bg-[#F5EADF] outline-none border border-[#130D06] rounded-[8px] placeholder:text-[#130D06] lg:placeholder:text-[16px] md:placeholder:text-[16px] placeholder:text-[14px]"
                type="email" name="email" id="email" placeholder="Enter email address" required />
            </div>

            <div class="h-[50px] flex gap-4 w-full">
              <!-- Consultation Type -->
              <div
                class="w-full flex items-center justify-center gap-2 h-full border border-[#130D06] rounded-[8px] pr-2 overflow-hidden">
                <select
                  class="w-full px-2 h-full bg-[#F5EADF] outline-none border-none lg:text-[16px] md:text-[16px] text-[14px]"
                  name="date" id="date" required>
                  <option value="">Consultation type</option>
                  <option value="type1">Type1</option>
                  <option value="type2">Type2</option>
                </select>
              </div>
            </div>

            <div class="h-[50px] flex gap-4 w-full">
              <!-- Date -->
              <div
                class="w-1/2 flex items-center justify-center gap-2 h-full border border-[#130D06] rounded-[8px] pr-2 overflow-hidden">
                <input
                  class="w-full px-2 h-full bg-[#F5EADF] outline-none border-none placeholder:text-[#130D06] lg:placeholder:text-[16px] md:placeholder:text-[16px] placeholder:text-[14px] lg:text-[16px] md:text-[16px] text-[14px]"
                  :type="type" name="date" id="date" placeholder="Date" @focus="type = 'date'" required />

                <!-- <img class="w-[20px] h-[20px] cursor-pointer" src="../assets/icons/calender_waiting.png"
                  alt="Calender" /> -->
              </div>
              <!-- Phone number -->
              <div
                class="w-1/2 flex items-center justify-center gap-2 h-full border border-[#130D06] rounded-[8px] pr-2 overflow-hidden">
                <input
                  class="w-full px-2 h-full bg-[#F5EADF] outline-none border-none placeholder:text-[#130D06] lg:placeholder:text-[16px] md:placeholder:text-[16px] placeholder:text-[14px]"
                  type="tel" name="phone_number" id="phone_number" placeholder="Phone number" required />
                <img class="w-[20px] h-[20px] cursor-pointer"
                  src="https://img.icons8.com/windows/96/130D06/add-phone.png" alt="add-phone" />
              </div>
            </div>

            <!-- Form Button -->
            <div class="form_btn w-full mt-4">
              <button
                class="w-full py-3 rounded-[8px] flex items-center justify-center gap-2 bg-[#130D06] font-[600] text-mh_light">
                Send message
                <img class="w-[24px] h-[24px] bg-[#130D06] p-1"
                  src="https://img.icons8.com/material-rounded/96/ffffff/right.png" alt="right" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
