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

import "@/permission"; // permission control

// rem h5 适配
import "amfe-flexible/index.js";

// 根据路由设置标题
router.beforeEach((to, from, next) => {
  /*路由发生改变修改页面的title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
