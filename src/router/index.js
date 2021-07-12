import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/ServiceUnavailable'
import Home from '@/views/MainPage'
//import Store from '@/store'
//import MainSection from '@/components/MainSection'
//import WorkingProcessSection from '@/components/WorkingProcessSection'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: function(to,from, savedPosition) {
    if (savedPosition){
      return savedPosition
    }else{
      const position = {}
      if (to.hash) {
        position.selector = to.hash
        if(to.hash !== '#home'){
          position.offset = {y:100}
        }
        if(document.querySelector(to.hash)){
          return position
        }
        return false;
      }
    }
  },
  routes
})

export default router

