// 封装axios
import axios from 'axios'
console.log(window.app)
const router = window.app.config.globalProperties.$router
const $notification = window.app.config.globalProperties.$notification
const service = axios.create({
  timeout: 20000,
  withCredentials: true,
  baseURL: '/api',
  headers: {
    'token': sessionStorage.getItem("token")
  }
})

service.interceptors.request.use(config => {
  if(!config.headers.token) {
    setTimeout(() => {router.push({path: '/login'})})
  }
  return config
}, error => {
  $notification.error({
    message: '请求错误',
    description: error
  })
})

service.interceptors.response.use(response => {
  console.log('走这里了吗')
  const { data } = response
  if(data.code === 0) {
    return Promise.resolve(data)
  } else {
    $notification.error({
      message: '错误',
      description: '发生了错误'
    })
    sessionStorage.removeItem('token')
    // router.push({path: '/login'})
    
  }
}, error => {
  $notification.error({
    message: '响应错误',
    description: error
  })
})

export default service