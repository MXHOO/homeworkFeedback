// 封装axios
import axios from 'axios'

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
    // setTimeout(() => {ctx.push({path: '/login'})})
  }
  return config
})

service.interceptors.response.use(response => {
  const { data } = response
  if(data.code === 0) {
    return Promise.resolve(data)
  } else {
    // console.log('router', ctx)
    // router.push({path: '/login'})
  }
}, error => {
  console.log(error)
})

export default service