<script setup lang="ts">
import { RouterLink } from "vue-router";
import LogoComponent from "./LogoComponent.vue";
import { ref } from "vue";

const navLinks = [
  {
    name: "about",
    path: "/about",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resources",
    path: "/resources",
  },
  {
    name: "stories",
    path: "/stories",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

// Refs
const show_navbar = ref(false);
</script>

<template>
  <nav class="bg-gray-50 lg:px-20 md:px-12 px-4 h-[90px] fixed flex justify-between items-center w-full z-10">
    <LogoComponent @click="show_navbar = false" component="navbar" />
    <!-- Desktop Navigation -->
    <div class="navlinks hidden lg:block md:block">
      <ul
        class="flex gap-4 capitalize p-1 bg-[#F8F5F0] rounded-md text-mh_subtle_text font-[600] text-mh_body_big border-2 border-mh_accent/25">
        <RouterLink class="p-[10px] w-fit" router-link-active :to="link.path" v-for="(link, index) in navLinks"
          :key="index">{{ link.name }}
        </RouterLink>
      </ul>
    </div>

    <div class="signup_btn hidden lg:block md:block">
      <a
        class="p-[10px] w-[120px] h-[50px] py-2 test-center flex items-center justify-center rounded-[10px] bg-[#271a0c] text-mh_light capitalize"
        href="https://docs.google.com/forms/d/e/1FAIpQLSedVspZOoKKj8VMzOTGI_F4HYmwarDmoG9fEDFY4PSejEZupA/viewform?usp=sf_link"
        target="_blank"
        >Sign up
      </a>
    </div>

    <!-- Mobile Navigation -->
    <div class="lg:hidden md:hidden">
      <img @click="show_navbar = !show_navbar" class="w-[30px] h-[30px] cursor-pointer" :class="{ hidden: show_navbar }"
        src="https://img.icons8.com/ios-filled/50/menu--v6.png" alt="menu--v6" />

      <img @click="show_navbar = !show_navbar" class="w-[30px] h-[30px] cursor-pointer"
        src="https://img.icons8.com/material-rounded/48/delete-sign.png" :class="{ hidden: !show_navbar }"
        alt="delete-sign" />

      <div class="navlinks absolute top-[90px] transition-all duration-300 z-10 bg-[#e3e3e3] shadow-md overflow-hidden w-full h-[100vh]"
        :class="{
          'right-0 w-[100%]': show_navbar,
          'right-0 w-[0%]': !show_navbar,
        }">
        <ul
          class="flex flex-col items-center justify-center gap-4 capitalize p-1 rounded-l-md text-mh_subtle_text font-[600] text-mh_body_big border-2 border-mh_accent/25">
          <RouterLink class="p-[10px] w-fit" router-link-active :to="link.path" v-for="(link, index) in navLinks"
            :key="index" @click="show_navbar = !show_navbar">
            {{ link.name }}
          </RouterLink>
        </ul>
        <RouterLink
          class="font-[600] w-full h-[50px] py-2 flex items-center justify-center text-mh_subtle_text capitalize"
          to="https://docs.google.com/forms/d/e/1FAIpQLSedVspZOoKKj8VMzOTGI_F4HYmwarDmoG9fEDFY4PSejEZupA/viewform?usp=sf_link" @click="show_navbar = !show_navbar">Sign up
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
