/*
 * @Description:
 * @Version: 1.0
 * @Autor: haozhuang
 * @Date: 2020-03-30 11:29:28
 * @LastEditors: haozhuang
 * @LastEditTime: 2020-03-30 11:38:31
 */
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ["Android >= 4.0", "iOS >= 7"]
    },
    "postcss-pxtorem": {
      rootValue: 75, //结果为：设计稿元素尺寸/32(一般750px的设计稿的根元素大小设置32)，比如元素宽320px,最终页面会换算成 10rem
      propList: ["*"], //属性的选择器，*表示通用
      selectorBlackList: [], //忽略的选择器   .ig-  表示 .ig- 开头的都不会转换
      minPixelValue: 2,
      exclude: /node_modules/i
    }
  }
};
