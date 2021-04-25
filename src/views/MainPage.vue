<template>
  <v-app>
    <main-navigation/>
    <main-section></main-section>
    <working-process-section></working-process-section>
    <div class="sectionInfoImgDiv">
      <img class="sectionInfoImg" src="../assets/images/processImg2.jpg" alt="">
      <img class="sectionInfoImg" src="../assets/images/textures/processImgDecoration.jpg" alt="">
    </div>
    <constructing-section></constructing-section>
    <works-section></works-section>
    <materials-section></materials-section>
    <about-section/>
    <contacts-section/>
    <Footer></Footer>
  </v-app>
</template>

<script>

import MainNavigation from '@/components/MainNavigation.vue'
import MainSection from '@/components/MainSection.vue'
import WorkingProcessSection from '@/components/WorkingProcessSection.vue'
import ConstructingSection from '@/components/ConstructingSection.vue'
import WorksSection from '@/components/WorksSection.vue'
import MaterialsSection from '@/components/MaterialsSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactsSection from '@/components/ContactsSection.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  data() {
    return {
      sections: null
    }
  },
  components: {
    MainNavigation,
    Footer,
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
  h2{
    font-family: Montserrat, serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1vw;
  }
  h3{
    font-family: "Yeseva One", serif;
    font-size: 2vw;
    letter-spacing: 0.05vw;
  }
  p{
    font-family: Montserrat, serif;
    font-weight: 500;
    font-size: 1.2vw;
    letter-spacing: -0.01vw;
    line-height: 155%;
  }
  .moreButton{
    font-family: Montserrat, serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1vw;
    color: #FDFDF9;
    background-color: #195131;
    text-decoration: none;
    padding: 1vw 2vw;
    width: fit-content;
    transition: 0.2s;
  }
  .moreButton:hover{
    background-color: #033319;
  }





  .sectionInfoImgDiv{
    position: absolute;
    display: flex;
  }
  .sectionInfoImg{

    width: 35vw;
  }
</style>
