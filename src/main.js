import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueScrollTo from "vue-scrollto";
import YmapPlugin from "vue-yandex-maps";
import yall from "yall-js";

import "material-icons/iconfont/material-icons.scss";
import "./styles.scss";

Vue.config.productionTip = false;

export default function(Vue, appOptions) {
  if (appOptions.isClient) {
    document.addEventListener("DOMContentLoaded", () =>
      yall({
        observeChanges: true,
      })
    );
  }

  Vue.use(YmapPlugin, {
    apiKey: "e037fe7c-71f4-40ba-adfa-a0943ab32f82",
    lang: "ru_RU",
    coordorder: "latlong",
    version: "2.1",
  });

  Vue.use(VueScrollTo, {
    container: "body",
    duration: 200,
    offset: -100,
    easing: "linear",
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true,
  });
  router.afterEach((to, from) => {
    if (to.hash && to.path !== from.path)
      Vue.nextTick().then(() => VueScrollTo.scrollTo(to.hash, 700));
  });
}
