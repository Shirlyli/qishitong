import axios from 'axios'
import { Indicator } from 'mint-ui'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // // 在打印出来的config中有header的请求头 为它挂载一个令牌
  // config.headers.Authorization = window.sessionStorage.getItem('token')
  Indicator.open({
    text: 'Loading...',
    spinnerType: 'fading-circle'
  })
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  Indicator.close()
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

const axiosGet = (url, params) => {
  return new Promise(function (resolve, reject) {
    // params = qs.stringify(params)
    // 有些接口不需要转字符串 如果要转 ，那在传参数的时候只能使用？start=0&&count=7的方法
    axios.get(url, { params: params })
      .then((res) => {
        resolve(res.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const axiosPost = (url, params) => {
  return new Promise(function (resolve, reject) {
    // params = qs.stringify(params)
    axios.post(url, { params: params })
      .then((res) => {
        resolve(res.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default {
  get: axiosGet,
  post: axiosPost
}
