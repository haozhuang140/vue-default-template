/*
 * @Description:
 * @Version: 1.0
 * @Autor: haozhuang
 * @Date: 2020-03-30 11:29:28
 * @LastEditors: haozhuang
 * @LastEditTime: 2020-03-30 11:43:48
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from './store'


import "@/permission"; // permission control

// rem h5 适配
import "amfe-flexible/index.js";


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
