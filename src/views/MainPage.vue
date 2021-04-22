<template>
  <v-app>
    <main-navigation :menuItems="menuItems"></main-navigation>
    <main-section></main-section>
    <working-process-section></working-process-section>
    <Footer></Footer>
  </v-app>
</template>

<script>

import MainNavigation from '@/components/MainNavigation.vue'
import MainSection from '@/components/MainSection.vue'
import WorkingProcessSection from '@/components/WorkingProcessSection.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',

  components: {
    MainNavigation,
    Footer,
    MainSection,
    WorkingProcessSection
  },
  computed:{
    menuItems(){
      return [
        {
          title: 'Статистика: Мир',
          route: '/world'
        },
        {
          title: 'Статистика: Россия',
          route: '/russia'
        },
        {
          title: 'О нас',
          route: '/about'
        },
        {
          title: 'Телефон',
          route: '/login'
        }
      ]
    },
  }
}

</script>
