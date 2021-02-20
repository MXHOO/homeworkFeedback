import http from '@/util/axios.config.js'

export function loginHandler(param = {}) {
  return http.post('login', param)
}