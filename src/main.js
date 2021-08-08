import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueLazyload from 'vue-lazyload'
import  VueScrollTo from 'vue-scrollto';
import YmapPlugin from 'vue-yandex-maps';

import 'material-icons/iconfont/material-icons.css';
import './styles.scss';

Vue.config.productionTip = false


const loadimage = require('@/assets/images/logo.png')
const errorimage = require('@/assets/images/logo.png')

Vue.use(YmapPlugin, {
  apiKey: 'e037fe7c-71f4-40ba-adfa-a0943ab32f82',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'

})

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1,
  lazyComponent: true
})

Vue.use(VueScrollTo, {
  container: "body",
  duration: 200,
  offset: -100,
  easing: 'linear',
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

router.afterEach((to, from) => {
  if (to.hash && to.path !== from.path)
    Vue.nextTick().then(() => VueScrollTo.scrollTo(to.hash, 700));
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
