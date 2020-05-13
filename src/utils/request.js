import axios from 'axios'
import store from '@/store'

let loadingRequestCount = 0

const showLoading = () => {
  if (loadingRequestCount === 0) {
    store.commit('showLoading')
  }
  loadingRequestCount++
}

const hideLoading = () => {
  if (loadingRequestCount <= 0) return
  loadingRequestCount--
  if (loadingRequestCount === 0) {
    vue.$nextTick(() => {
      // 以服务的方式调用的 Loading 需要异步关闭
      store.commit('hideLoading')
    })
  }
}

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // 跨域请求时发送cookies
  timeout: 5000 // 请求超时
})

// post请求头
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截器
service.interceptors.request.use(
  config => {
    showLoading()

    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = null
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    setTimeout(() => {
      hideLoading()
    }, 200)

    // 处理请求错误
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    setTimeout(() => {
      hideLoading()
    }, 200)

    const res = response.data
    if (response.status == 200) {
      return res
    } else {
      console.log(res)
      return Promise.reject(new Error(res.message || 'Error'))
    }
  },
  error => {
    setTimeout(() => {
      hideLoading()
    }, 200)

    var config = error.config
    console.log(service.defaults)
    console.log(config)
    console.log(error.message)
    if (error.message.includes('timeout')) {
      // 判断请求异常信息中是否含有超时timeout字符串
      console.log('错误回调', error)
      alert('网络超时')
    }
    return Promise.reject(error) // reject这个错误信息
  }
)

export default service
