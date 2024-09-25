<script setup lang="ts">
import { reactive } from "vue";

const questions = reactive([
  {
    id: 1,
    question: "What is HEvolve about?",
    answer:
      "HEvolve is a licensed non-profit organization dedicated to helping men overcome mental health challenges.",
    active: false,
  },
  {
    id: 2,
    question: "Can I get specialized mental help?",
    answer:
      "HEvolve is a licensed non-profit organization dedicated to helping men overcome mental health challenges.",
    active: false,
  },
  {
    id: 3,
    question: "Is online therapy effective?",
    answer:
      "HEvolve is a licensed non-profit organization dedicated to helping men overcome mental health challenges.",
    active: false,
  },
  {
    id: 4,
    question: "How do I get involved?",
    answer:
      "HEvolve is a licensed non-profit organization dedicated to helping men overcome mental health challenges.",
    active: false,
  },
]);
</script>

<template>
  <section class="flex flex-wrap flex-col gap-4 py-20 justify-center items-center lg:px-20 md:px-12 px-4">
    <header class="flex flex-col items-center gap-4">
      <h2 class="lg:text-mh_h2 md:text-mh_h3 text-mh_h4 font-[600] text-center">Frequently Asked Questions</h2>
    </header>

    <div class="question_container mt-16 flex flex-wrap items-start justify-center w-full gap-x-32 gap-y-6">
      <div v-for="question in questions" :key="question.id"
        class="question w-full p-6 rounded-xl flex flex-col transition-all duration-300"
        :class="{ 'bg-[#DBB38A]': question.active, 'bg-[#F5EADF]': !question.active }">
        <div class="question_header w-full flex items-center justify-between">
          <h3 class="text-[22px] font-[500] leading-normal">{{ question.question }}</h3>
          <div class="bg-mh_dark_text rounded-[8px]">
            <svg @click="question.active = !question.active" :class="{ rotate: question.active }"
              xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M6.5144 9.26953L12.5144 15.2695L18.5144 9.26953" stroke="#fff" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <p class="answer w-full text-custom_card_button text-[18px]" :class="{ dropdown: question.active }">
          {{ question.answer }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.question_header {
  gap: 4px;
  align-items: flex-start;
}

.answer {
  padding: 0px;
  max-height: 0px;
  overflow: hidden;
  transition: all 0.3s linear;
}

.dropdown {
  max-height: 270px;
  padding-top: 20px;
}

svg {
  cursor: pointer;
  transition: all 0.3s linear;
}

.rotate {
  transform: rotate(-180deg);
}
</style>
