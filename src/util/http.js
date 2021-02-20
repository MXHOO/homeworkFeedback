import axios from '@/util/axios.config.js'
function get(url, param) {
  axios.get(url, param)
}
function post(url, param) {
  axios.post(url, param)
}
export {get, post}