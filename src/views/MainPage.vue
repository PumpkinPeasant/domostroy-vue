<template>
  <div class="main-page">
    <main-navigation :is-menu-visible.sync="isMenuVisible"/>
    <main-section></main-section>
    <working-process-section/>
    <constructing-section/>
    <works-section></works-section>
    <materials-section></materials-section>
    <about-section/>
    <benefits-section/>
    <contacts-section/>
<!--    <Footer></Footer>-->
  </div>
</template>

<script>

import MainNavigation from '@/components/MainNavigation.vue'
import MainSection from '@/components/MainSection.vue'
import WorkingProcessSection from '@/components/WorkingProcessSection.vue'
import ConstructingSection from '@/components/ConstructingSection.vue'
import WorksSection from '@/components/WorksSection.vue'
import MaterialsSection from '@/components/MaterialsSection.vue'
import ContactsSection from "@/components/ContactsSection";
import AboutSection from '@/components/AboutSection.vue'
import BenefitsSection from "@/components/BenefitsSection";
// import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  data() {
    return {
      sections: null,
      isMenuVisible: false,
    }
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
}

</script>

<style lang="scss">

section {
  display: flex;
  padding: 12vh 8vw;
}

.moreButton {
  font-family: Montserrat, serif;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1vw;
  color: #FDFDF9;
  background-color: #195131;
  text-decoration: none;
  padding: 1vw 3vw;
  width: fit-content;
  transition: 0.2s;
}

.moreTextButton {
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.6rem;
  text-decoration: none;
  color: white;
  border-bottom: 2px solid #D68C45;
  width: fit-content;
  transition: 0.2s;
  cursor: pointer;
  user-select: none;
  &:hover{
    padding-bottom: 3px;
  }
}

.moreButton:hover {
  background-color: #033319;
}

.moreButton:active {
  background-color: #022411;
}


.decorationTree {
  position: absolute;
  z-index: 0;
  mix-blend-mode: multiply;
}

@media screen and (min-width: 959px) and (max-width: 1280px) {
  section {
    padding: 10vh 8vw;
  }
  .moreTextButton {
    font-size: 1.2rem;
  }
}

@media screen and (min-width: 600px) and (max-width: 959px) {
  section {
    padding: 9vh 7vw;
  }
  .moreTextButton {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 599px) {
  section {

    padding: 10vh 6vw;

    p {
      font-size: 1.6rem;
      line-height: 1.8em;
    }

    .moreButton {
      font-size: 1.5rem;
      padding: 0.8em 2em;
    }

    .moreTextButton {
      font-size: 0.8rem;
    }
  }

}
</style>
