<template>
  <div class="main-page" v-bind:style="mainStyle">
    <main-navigation :is-menu-visible.sync="isMenuVisible"/>
    <main-section></main-section>
    <working-process-section/>
    <constructing-section/>
    <!--    <works-section></works-section>-->
    <!--    <materials-section></materials-section>-->
    <!--    <about-section/>-->
    <!--    <contacts-section/>-->
    <!--    <Footer></Footer>-->
  </div>
</template>

<script>

import MainNavigation from '@/components/MainNavigation.vue'
import MainSection from '@/components/MainSection.vue'
import WorkingProcessSection from '@/components/WorkingProcessSection.vue'
import ConstructingSection from '@/components/ConstructingSection.vue'
// import WorksSection from '@/components/WorksSection.vue'
// import MaterialsSection from '@/components/MaterialsSection.vue'
// import AboutSection from '@/components/AboutSection.vue'
// import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  data() {
    return {
      sections: null,
      isMenuVisible: false,
    }
  },
  computed: {
    mainStyle() {
      return this.isMenuVisible ? 'overflow-y: hidden' : 'overflow-y: scroll';
    }
  },
  components: {
    MainNavigation,
    // Footer,
    MainSection,
    WorkingProcessSection,
    ConstructingSection,
    // WorksSection,
    // MaterialsSection,
    // AboutSection,
    // ContactsSection,

  },
}

</script>
<style lang="scss">

.main-page {
  height: 100vh;
}

section {
  display: flex;
  padding: 12vh 8vw;
}

h2 {
  font-family: Montserrat, serif;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1vw;
}

h3 {
  font-family: "Yeseva One", serif;
  font-size: 2vw;
  letter-spacing: 0.05vw;
}

p {
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 1.2vw;
  letter-spacing: -0.01vw;
  line-height: 155%;
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

.moreButton:hover {
  background-color: #033319;
}

.decorationTree {
  position: absolute;
  z-index: 0;
  mix-blend-mode: multiply;
}

@media screen and (min-width: 959px) and (max-width: 1280px) {
  section {
    padding: 10vh 9vw;
  }
}

@media screen and (min-width: 600px) and (max-width: 959px) {
  section {
    padding: 12vh 4vw;
  }
}

@media screen and (max-width: 599px) {
  section {
    padding: 12vh 4vw;
  }
}
</style>
