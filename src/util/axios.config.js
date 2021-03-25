// 封装axios
import axios from 'axios'
import {useRouter} from 'vue-router'
const router = useRouter()


const service = axios.create({
  timeout: 20000,
  withCredentials: true,
  baseURL: '/api',
  headers: {
    'token': sessionStorage.getItem("token")
  }
})

service.interceptors.request.use(config => {
  console.log('请求拦截', config)
  // if(config.url !== '/user/login') {
  //   config.headers.token =  sessionStorage.getItem('token')
  // }
  return config
})

service.interceptors.response.use(response => {
  const { data } = response
  console.log('response', data, data.code === 1002)
  switch(data.code) {
    case 0: 
      return Promise.resolve(data)
    case 1001:
      console.log('状态码1001')
      setTimeout(() => {
        router.push({path: '/login'})
      }, 200)
      break
    case 1002:
      console.log('没有权限访问')
      setTimeout(() => {
        console.log('这里走没走')
        router.push({path: '/login'})
      })
      break
    default:
      console.log('其他')
  }
}, error => {
  console.log(error)
})

export default service