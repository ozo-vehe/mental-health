<script setup lang="ts">
import ButtonComponent from "../ButtonComponent.vue";
import counseling from "../../assets/icons/counseling.png";
import medication from "../../assets/icons/medication.png";
import support from "../../assets/icons/support.png";
import online from "../../assets/icons/online.png";
import education from "../../assets/icons/education.png";
import self_help from "../../assets/icons/self_help.png";
</script>

<template>
  <section class="home_about">
    <div class="flex flex-wrap items-center bg-[#eeeeee] lg:px-20 md:px-12 px-4 py-20 justify-center gap-x-10 gap-y-6">
      <div class="lg:w-[500px] md:w-[400px] w-full lg:h-[550px] md:h-[500px] h-[400px] lg:order-1 md:order-1 order-2">
        <img class="w-full h-full object-fit" src="../../assets/images/about_image.png" alt="Home about image" />
      </div>

      <div class="max-w-[650px] lg:order-2 md:order-2 order-1 flex flex-col lg:items-start md:items-start items-center">
        <h2
          class="lg:text-mh_h2 md:text-mh_h3 text-mh_h4 lg:text-left md:text-left text-center leading-[1.2] font-[700]">
          We help Men Overcome mental health challenges.
        </h2>
        <p class="leading-[2] my-4 lg:text-mh_h6 md:text-[18px] text-[16px] lg:text-left md:text-left text-center">
          HEvolve is a licensed non-profit organization dedicated to helping men overcome
          mental health challenges. We provide a wide range of services, from counseling
          and consultations to advocacy and education, all designed to meet the unique
          needs of men in underserved communities.
        </p>

        <ButtonComponent text="Learn More" mh_class="px-8 bg-mh_dark_text text-mh_light font-bold mt-8 w-fit" />
      </div>
    </div>

    <div class="lg:px-20 md:px-12 px-4 py-20">
      <h2
        class="font-[600] leading-tight max-w-[750px] lg:text-mh_h2 md:text-mh_h3 text-mh_h4 lg:text-left md:text-left text-center">
        HEvolve offers comprehensive mental health services tailored to men
      </h2>

      <div
        class="flex flex-wrap items-center lg:justify-be md:justify-between justify-center gap-10 my-16 lg:w-[80%] md:w-[90%] w-full mx-auto">
        <div class="max-w-[450px] flex gap-2 justify-center">
          <div class="w-[50px]">
            <img class="w-[35px] rounded-full" :src="counseling" alt="Counseling" />
          </div>
          <div>
            <h3 class="lg:text-mh_h4 md:text-mh_h5 text-[22px] font-[600] leading-[1.2]">
              Counseling & Consultation:
            </h3>
            <p class="lg:text-[16px] md:text-[16px] text-[14px] mt-2">
              Personalized sessions to help man address their mental health issues.
            </p>
          </div>
        </div>

        <div class="max-w-[450px] flex gap-2 justify-center">
          <div class="w-[50px]">
            <img class="w-[35px] rounded-full" :src="medication" alt="Medication" />
          </div>
          <div>
            <h3 class="lg:text-mh_h4 md:text-mh_h5 text-[22px] font-[600] leading-[1.2]">
              Medication Management:
            </h3>
            <p class="lg:text-[16px] md:text-[16px] text-[14px] mt-2">
              Professional guidance on the use of psychiatric medication.
            </p>
          </div>
        </div>

        <div class="max-w-[450px] flex gap-2 justify-center">
          <div class="w-[50px]">
            <img class="w-[35px] rounded-full" :src="support" alt="Support" />
          </div>
          <div>
            <h3 class="lg:text-mh_h4 md:text-mh_h5 text-[22px] font-[600] leading-[1.2]">
              Support Groups:
            </h3>
            <p class="lg:text-[16px] md:text-[16px] text-[14px] mt-2">
              Join others in a safe space to share experiemce and learn from each other.
            </p>
          </div>
        </div>

        <div class="max-w-[450px] flex gap-2 justify-center">
          <div class="w-[50px]">
            <img class="w-[35px] rounded-full" :src="online" alt="Online" />
          </div>
          <div>
            <h3 class="lg:text-mh_h4 md:text-mh_h5 text-[22px] font-[600] leading-[1.2]">
              Online Counseling:
            </h3>
            <p class="lg:text-[16px] md:text-[16px] text-[14px] mt-2">
              Access professional help from the comfort of your home.
            </p>
          </div>
        </div>

        <div class="max-w-[450px] flex gap-2 justify-center">
          <div class="w-[50px]">
            <img class="w-[35px] rounded-full" :src="education" alt="Education" />
          </div>
          <div>
            <h3 class="lg:text-mh_h4 md:text-mh_h5 text-[22px] font-[600] leading-[1.2]">
              Education & Outreach:
            </h3>
            <p class="lg:text-[16px] md:text-[16px] text-[14px] mt-2">
              Training and workshops to promote mental health awareness.
            </p>
          </div>
        </div>

        <div class="max-w-[450px] flex gap-2 justify-center">
          <div class="w-[50px]">
            <img class="w-[35px] rounded-full" :src="self_help" alt="Self Help" />
          </div>
          <div>
            <h3 class="lg:text-mh_h4 md:text-mh_h5 text-[22px] font-[600] leading-[1.2]">
              Self Help Resources:
            </h3>
            <p class="lg:text-[16px] md:text-[16px] text-[14px] mt-2">
              Books and materials to guide you on your mental health journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="home_about_2 relative flex flex-wrap items-center bg-[#eeeeee] lg:px-20 md:px-12 px-4 py-20 justify-end">
    <div class="max-w-[450px] p-8 text-center bg-[#D9D9D9] rounded-[8px] relative z-[1]">
      <h3 class="text-mh_h4 font-[400]">Empowering Men's Mental Health!</h3>
      <p class="lg:text-mh_h6 md:text-[18px] text-[16px] my-4">
        For years men's mental health has long been a silent struggle, overlooked and
        stigmatized in our society. Despite the significant impact of mental health
        challenges on men's libes, many continue to suffer in isolation.
      </p>
      <h3 class="text-mh_h4 font-[700]">HEvolve</h3>
    </div>
  </section>
</template>

<style scoped>
.home_about_2 {
  background-image: url("../../assets/images/home_about.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.home_about_2::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000c4;
}
</style>
