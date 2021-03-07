<template>
  <v-app>
    <Header></Header>
    <MainSection></MainSection>
    <Footer></Footer>
  </v-app>
</template>

<script>

import Header from '@/components/Header.vue'
import MainSection from '@/components/MainSection.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',

  components: {
    Header,
    Footer,
    MainSection
  }}

</script>
