<script setup lang="ts">
import { ref, type Ref } from 'vue';

const name: Ref<String> = ref("");

const socials = [
  {
    icon: "https://img.icons8.com/ios-glyphs/90/ffffff/twitterx--v2.png",
    name: "X",
    link: "/",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png",
    name: "Facebook",
    link: "/",
  },
  {
    icon: "https://img.icons8.com/windows/96/ffffff/whatsapp--v1.png",
    name: "WhatsApp",
    link: "/",
  },
  {
    icon: "https://img.icons8.com/windows/96/ffffff/instagram-new.png",
    name: "Instagram",
    link: "/",
  },
  {
    icon: "https://img.icons8.com/windows/96/ffffff/linkedin.png",
    name: "LinkedIn",
    link: "/",
  },
];

// FUNCTIONS
// A function to handle contact for submission.
// It takes the form data, checks if they are valid and if checks are passed, it sends
// the data to HEvolve.
const handleSubmit = async () => {
  console.log(name.value);
}
</script>
<template>
  <main class="lg:px-20 md:px-12 px-4 pt-[150px] py-10 min-h-screen flex flex-col items-center justify-center">
    <div class="contact_header_text text-center">
      <h2 class="text-mh_h3 font-[600]">Get in touch</h2>
      <p class="font-[600] text-[18px] max-w-[450px] mx-auto">
        Whether you have questions or need support, HEvolve is here to help
      </p>
    </div>

    <div class="contact_form mx-auto max-w-[850px] bg-[#130D06] p-8 rounded-[8px] my-8">
      <form
        class="flex flex-wrap items-center justify-center gap-6"
        @submit="handleSubmit"
      >
        <div class="h-[50px] flex gap-4 w-full">
          <!-- Name -->
          <input
            class="w-1/2 px-2 h-full bg-[#130D06] outline-none border border-mh_light rounded-[8px] placeholder:text-mh_light"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
          <!-- Email Address -->
          <input
            class="w-1/2 px-2 h-full bg-[#130D06] outline-none border border-mh_light rounded-[8px] placeholder:text-mh_light"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            required
          />
        </div>

        <div class="h-[50px] flex gap-4 w-full">
          <!-- Phone number -->
          <div
            class="w-1/2 flex items-center justify-center gap-2 h-full border border-mh_light rounded-[8px] pr-2 overflow-hidden"
          >
            <input
              class="w-full px-2 h-full bg-[#130D06] outline-none border-none placeholder:text-mh_light"
              type="tel"
              name="phone_number"
              id="phone_number"
              placeholder="Phone number"
              required
            />
            <img
              class="w-[20px] h-[20px] cursor-pointer"
              src="https://img.icons8.com/windows/96/ffffff/add-phone.png"
              alt="add-phone"
            />
          </div>
          <!-- Email Address -->
          <div
            class="w-1/2 flex items-center justify-center gap-2 h-full border border-mh_light rounded-[8px] pr-2 overflow-hidden"
          >
            <input
              class="w-full px-2 h-full bg-[#130D06] outline-none border-none placeholder:text-mh_light"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />

            <img
              class="w-[20px] h-[20px] cursor-pointer"
              src="../assets/icons/medical_note.png"
              alt="Subject icon"
            />
          </div>
        </div>

        <div class="message w-full h-[170px]">
          <textarea
            name="message"
            id="message"
            class="w-full h-full placeholder:text-mh_light p-2 border border-mh_light rounded-[8px] bg-[#130D06]"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <!-- Form Button -->
        <div class="form_btn w-full mt-4">
          <button
            class="w-full py-3 rounded-[8px] flex items-center justify-center gap-2 bg-mh_nude capitalize font-[600]"
          >
            send
            <img
              class="w-[24px] h-[24px] bg-[#130D06] p-1"
              src="https://img.icons8.com/material-rounded/96/ffffff/right.png"
              alt="right"
            />
          </button>
        </div>
      </form>
    </div>

    <div class="email_address text-center pt-4 flex flex-col items-center justify-center">
      <img
        class="w-[32px] h-[32px] bg-mh_nude p-[6px] rounded-sm"
        src="https://img.icons8.com/material-outlined/96/130D06/new-post.png"
        alt="new-post"
      />

      <div class="mt-2">
        <p class="font-[600] text-mh_h6">Email address</p>
        <p class="text-sm font-[600]">info@hevolve.org.</p>
      </div>
    </div>

    <div class="contact_socials flex items-center justify-center gap-6 my-6">
      <RouterLink v-for="(social, index) in socials" :key="index" :to="social.link">
        <img
          class="w-[32px] h-[32px] bg-[#130D06] p-1 rounded-[4px]"
          :src="social.icon"
          :alt="social.name"
        />
      </RouterLink>
    </div>
  </main>
</template>

<style scoped></style>
