<template>
  <div class="main-page">
    <ClientOnly>
      <main-navigation :is-menu-visible.sync="isMenuVisible" />
    </ClientOnly>
    <main-section></main-section>
    <working-process-section />
    <constructing-section />
    <works-section></works-section>
    <materials-section></materials-section>
    <about-section />
    <benefits-section />
    <contacts-section />
    <!--    <Footer></Footer>-->
  </div>
</template>

<script>
import MainNavigation from "@/components/MainNavigation.vue";
import MainSection from "@/components/MainSection.vue";
import WorkingProcessSection from "@/components/WorkingProcessSection.vue";
import ConstructingSection from "@/components/ConstructingSection.vue";
import WorksSection from "@/components/WorksSection.vue";
import MaterialsSection from "@/components/MaterialsSection.vue";
import ContactsSection from "@/components/ContactsSection";
import AboutSection from "@/components/AboutSection.vue";
import BenefitsSection from "@/components/BenefitsSection";
// import Footer from '@/components/Footer.vue'

export default {
  name: "App",
  data() {
    return {
      sections: null,
      isMenuVisible: false,
    };
  },
  components: {
    BenefitsSection,
    MainNavigation,
    // Footer,
    MainSection,
    WorkingProcessSection,
    ConstructingSection,
    WorksSection,
    MaterialsSection,
    AboutSection,
    ContactsSection,
  },
};
</script>

<style lang="scss">
section {
  display: flex;
  padding: 12vh 8vw;
}

.decorationTree {
  position: absolute;
  z-index: 0;
  mix-blend-mode: multiply;
}

@media screen and (min-width: 959px) and (max-width: 1280px) {
  section {
    padding: 12vh 8vw;
  }
}

@media screen and (min-width: 600px) and (max-width: 959px) {
  section {
    padding: 9vh 7vw;
  }
}

@media screen and (max-width: 599px) {
  section {
    padding: 10vh 6vw;
  }
}
</style>
