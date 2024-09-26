<script setup lang="ts">
import LogoComponent from "./LogoComponent.vue";
// import linked_in from "../assets/icons/linkedin.png";
// import whatsapp from "../assets/icons/whatsapp.png";
// import facebook from "../assets/icons/facebook.png";
// import instagram from "../assets/icons/instagram.png";
// import x from "../assets/icons/x.png";

const socials = [
  {
    icon: "https://img.icons8.com/ios-filled/50/linkedin-2.png",
    name: "LinkedIn",
    link: "/",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/facebook-new.png",
    name: "Facebook",
    link: "/",
  },
  {
    icon: "https://img.icons8.com/ios-filled/50/twitter.png",
    name: "X",
    link: "/",
  },
  {
    icon: "https://img.icons8.com/ios/50/instagram-new.png",
    name: "Instagram",
    link: "/",
  },
  {
    icon: "https://img.icons8.com/ios/50/whatsapp.png",
    name: "WhatsApp",
    link: "/",
  },
];
// 130D06
// 271a0c
</script>

<template>
  <footer class="lg:px-20 md:px-12 px-4 bg-[#130D06] text-mh_light py-10">
    <div class="flex flex-wrap gap-y-8 items-start justify-between">
      <div class="lg:max-w-[250px] md:max-w-[250px] w-full">
        <LogoComponent text="logo" class="mb-6" mh_class="text-mh_light" />

        <div class="mb-4 lg:block md:block hidden">
          <p>Emali: info@hevolve.org</p>
          <p>Phone: +234 8124 900 0000</p>
        </div>

        <div class="socials lg:flex md:flex hidden gap-4">
          <RouterLink
            class="bg-mh_light rounded-full w-[35px] h-[35px] p-2"
            v-for="(social, index) in socials"
            :key="index"
            :to="social.link"
          >
            <img class="" :src="social.icon" :alt="social.name" />
          </RouterLink>
        </div>
      </div>

      <div class="max-w-[250px]">
        <h3 class="text-mh_h6 uppercase font-[600] mb-2">info</h3>
        <ul>
          <li>
            <RouterLink class="text-mh_light capitalize" to="/">about</RouterLink>
          </li>

          <li>
            <RouterLink class="text-mh_light capitalize" to="/">FAQ</RouterLink>
          </li>

          <li>
            <RouterLink class="text-mh_light capitalize" to="/">contact</RouterLink>
          </li>

          <li>
            <RouterLink class="text-mh_light capitalize" to="/">cookies</RouterLink>
          </li>
        </ul>
      </div>

      <div class="max-w-[250px]">
        <h3 class="text-mh_h6 uppercase font-[600] mb-2">resources</h3>
        <ul>
          <li>
            <RouterLink class="text-mh_light capitalize" to="/">services</RouterLink>
          </li>

          <li>
            <RouterLink class="text-mh_light capitalize" to="/">contact</RouterLink>
          </li>

          <li>
            <RouterLink class="text-mh_light capitalize" to="/">community</RouterLink>
          </li>

          <li>
            <RouterLink class="text-mh_light capitalize" to="/"
              >terms of services</RouterLink
            >
          </li>
        </ul>
      </div>

      <div class="max-w-[350px]">
        <div class="mb-4 lg:hidden md:hidden block">
          <p>Emali: info@hevolve.org</p>
          <p>Phone: +234 8124 900 0000</p>
        </div>

        <h3 class="text-mh_h6">Got a request?</h3>
        <p>Send us a message and we will contact you as soon as possible.</p>

        <div class="input_field flex items-center h-[50px] w-full mt-6">
          <input
            class="h-full w-full pl-2 placeholder:text-mh_dark_text outline-none border-none bg-[#F5EADF]"
            type="text"
            name="message"
            id="message"
            required
            placeholder="Message"
          />
          <button
            class="w-[150px] capitalize rounded-r-[8px] h-full bg-[#E2C2A1] font-[500] text-mh_light"
          >
            send
          </button>
        </div>
      </div>
    </div>

    <div class="socials lg:hidden md:hidden flex gap-4 mt-8">
      <RouterLink
        class="bg-mh_light rounded-full w-[35px] h-[35px] p-2"
        v-for="(social, index) in socials"
        :key="index"
        :to="social.link"
      >
        <img class="" :src="social.icon" :alt="social.name" />
      </RouterLink>
    </div>

    <div class="footer_copywrites border-t mt-8 py-10 w-[90%]">
      <p>2024 HEvolve. All Rights Reserved. Provacy Policy</p>
    </div>
  </footer>
</template>
