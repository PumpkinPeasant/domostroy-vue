import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/MainPage'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Домострой | Каркасное строительство',
      content: 'Каркасное строительство "ДОМОСТРОЙ" СЕВЕРОДВИНСК\n' +
          'КАРКАСНО-ПАНЕЛЬНОЕ СТРОИТЕЛЬСТВО ,\n' +
          'КАРКАСНЫЕ ДОМА , ДОМА , САЙДИНГ , КРОВЛЯ , ЗАБОРЫ , ДОМА ИЗ БРУСА , ДОМА ИЗ ОЦИЛИНДРОВАННОГО БРЕВНА',
    }
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
});


export default router

