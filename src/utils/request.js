/*
 * @Description:
 * @Version: 1.0
 * @Autor: haozhuang
 * @Date: 2020-03-30 12:47:48
 * @LastEditors: haozhuang
 * @LastEditTime: 2020-04-27 17:50:55
 */
import axios from "axios";

// 创建axios实例
let service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // 跨域请求时发送cookies
  timeout: 5000 // 请求超时
});

// post请求头
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = null;
    token && (config.headers.Authorization = token);
    return config;
  },
  error => {
    // 处理请求错误
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (response.status == 200) {
      return res;
    } else {
      console.log(res);
      return Promise.reject(new Error(res.message || "Error"));
    }
  },
  error => {
    var config = error.config;
    console.log(service.defaults);
    console.log(config);
    console.log(error.message);
    if (error.message.includes("timeout")) {
      // 判断请求异常信息中是否含有超时timeout字符串
      console.log("错误回调", error);
      alert("网络超时");
    }
    return Promise.reject(error); // reject这个错误信息
  }
);

export default service;
