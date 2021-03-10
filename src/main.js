import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(VueLazyload)

const loadimage = require('@/assets/images/logo.png')
const errorimage = require('@/assets/images/logo.png')

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1,
  lazyComponent: true
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
