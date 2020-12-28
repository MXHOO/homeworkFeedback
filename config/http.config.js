import fetch from './util/axios.config.js'
console.log(fetch)

export function get(url, option) {
  fetch.get(url, option)
}

export function post(url, option) {
  fetch.post(url, option)
}

export function download(url) {
  window.location = url
}