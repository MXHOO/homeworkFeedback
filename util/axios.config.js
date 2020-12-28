// 封装axios
import axios from 'axios'


const service = axios.create({
  baseURL: ''
})

service.interceptors.request.use(config => {
  console.log(config)
})

service.interceptors.response.use(response => {
  console.log(response)
})

export default service