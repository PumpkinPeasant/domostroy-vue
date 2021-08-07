<template>
  <div class="main-page">
    <main-navigation :is-menu-visible.sync="isMenuVisible"/>
    <main-section></main-section>
    <working-process-section/>
    <constructing-section/>
    <works-section></works-section>
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
import WorksSection from '@/components/WorksSection.vue'
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
  components: {
    MainNavigation,
    // Footer,
    MainSection,
    WorkingProcessSection,
    ConstructingSection,
    WorksSection,
    // MaterialsSection,
    // AboutSection,
    // ContactsSection,

  },
}

</script>

<style lang="scss">

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

.moreTextButton{
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.2rem;
  text-decoration: none;
  color: white;
  border-bottom: 2px solid #D68C45;
  width: fit-content;
  transition: 0.2s;
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
}

@media screen and (min-width: 600px) and (max-width: 959px) {
  section {
    padding: 9vh 7vw;
  }
}

@media screen and (max-width: 599px) {
  section {

    padding: 10vh 6vw;

    h2 {
      font-size: 1.4rem;
    }

    h3 {
      font-size: 3rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.8em;
    }
    .moreButton {
      font-size: 1.5rem;
      padding: 0.8em 2em;
    }
  }
}
</style>
