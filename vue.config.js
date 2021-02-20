const {
  resolve
} = require('path')
const configureWebpack = {
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  }
}
const url = '10.3.16.185:8080'
module.exports = {
  publicPath: '/',
  devServer: {
    port: 8888,
    open: true,
    proxy: {
      '/api': {
        target: url,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  configureWebpack
}