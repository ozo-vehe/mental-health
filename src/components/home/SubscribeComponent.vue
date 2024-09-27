<script setup lang="ts"></script>

<template>
  <section class="py-20 lg:px-20 md:px-12 px-4 flex items-center justify-center bg-gray-100">
    <div
      class="bg-[#130D06] text-mh_light lg:max-w-[80%] md:max-w-[90%] w-full flex flex-col gap-4 items-center justify-center p-8 rounded-[8px]">
      <h2 class="lg:text-mh_h2 md:text-mh_h3 text-mh_h4 font-[600] max-w-[750px] text-center">
        Stay Informed!
      </h2>

      <p class="lg:text-mh_h6 md:text-[18px] text-[16px] font-[400] max-w-[670px] text-center">
        Get latest updates on our webinars, workshops, and support group meetings. Don't
        miss out on the support and knowledge that can make a difference in your life.
      </p>

      <div
        class="input_field flex items-center h-[60px] lg:w-[500px] md:w-[500px] w-full rounded-[8px] overflow-hidden mt-8 py-2 pr-2 border border-mh_light">
        <input
          class="text-mh_light h-full w-full px-2 placeholder:text-mh_light lg:placeholder:text-[16px] mg:placeholder:text-[16px] placeholder:text-[14px] outline-none border-none bg-[#130D06]"
          type="text" name="message" id="message" required placeholder="Enter your email" />
        <button
          class="w-[150px] px-4 py-1 capitalize rounded-[12px] h-full bg-mh_light font-[500] text-mh_dark_text flex items-center justify-center gap-2 lg:text-[16px] md:text-[16px] text-[14px]">
          <span>Subscribe</span>
          <img class="w-[20px] h-[20px]" src="https://img.icons8.com/material-rounded/96/right.png" alt="right" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
