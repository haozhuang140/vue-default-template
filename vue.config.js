/*
 * @Description:
 * @Version: 1.0
 * @Autor: haozhuang
 * @Date: 2020-03-26 17:35:06
 * @LastEditors: haozhuang
 * @LastEditTime: 2020-04-01 16:32:08
 */
const Timestamp = new Date().getTime();
module.exports = {
  lintOnSave: false, //禁用eslint
  productionSourceMap: false,
  publicPath: "./",
  assetsDir: "static",
  configureWebpack: {
    // webpack 配置
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `[name].${Timestamp}.js`,
      chunkFilename: `[name].${Timestamp}.js`
    }
  },
  // 设置打包文件相对路径
  devServer: {
    index: "index.html", //默认启动serve 打开page1页面
    open: false, //浏览器自动打开页面
    host: "0.0.0.0", //如果是真机测试，就使用这个IP
    port: 8080,
    https: false,
    proxy: {
      //配置跨域
      "/dev-api": {
        target: "http://vrdev.wanbawanba.com/",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/server": "/"
        }
      }
    }
  }
};
