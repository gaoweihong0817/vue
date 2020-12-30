import axios from 'axios'

let instance = axios.create({
  baseURL: "https://www.365msmk.com/api/app/",
  timeout: 5000
})

//拦截器
instance.interceptors.request.use(
  config => {
    //获取token
    // var data = localStorage.getItem('Login')
    // var token = null
    // token = (data == null ? '' : JSON.parse(data).token)
    // //配置token
    // config.headers[`Authorization`] = token
    return config
  }, error => {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  response => {
    if (response.status == 200) {
      // return response.data
      return response
    }
    return response
  }, error => {
    return Promise.reject(error)
  }
)

export default instance