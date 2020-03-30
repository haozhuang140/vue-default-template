/*
 * @Description:
 * @Version: 1.0
 * @Autor: haozhuang
 * @Date: 2020-03-26 16:25:11
 * @LastEditors: haozhuang
 * @LastEditTime: 2020-03-30 11:39:02
 */
import Vue from "vue";
import Router from "vue-router";

const HelloWorld = () =>
  import(/* webpackChunkName: "home" */ "@/components/HelloWorld");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
      meta: { title: "HelloWorld" }
    }
  ]
});
