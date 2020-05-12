/*
 * @Description:
 * @Version: 1.0
 * @Autor: haozhuang
 * @Date: 2020-03-30 11:43:31
 * @LastEditors: haozhuang
 * @LastEditTime: 2020-04-10 17:06:45
 */
import router from "./router";

router.beforeEach(async (to, from, next) => {
  // set page title
  document.title = to.meta.title;

  next();
});

router.afterEach(() => {
  // finish progress bar
});
