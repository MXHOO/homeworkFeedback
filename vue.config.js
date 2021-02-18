const { resolve }  = require('path')
const configureWebpack = {
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  }
}
module.exports = {
  publicPath: '/',
  devServer: {
    port: 8888,
    open: true
  },
  configureWebpack
}
