module.exports = {
  devServer: {
    port: 8000,
    open: true,
    proxy: {
      '/php': {
        target: 'http://localhost:9909/php/interface/',
        changeOrigin: true,
        pathRewrite: {
          '^/php': ''
        }
      },
      '/elem': {
        target: 'https://elm.cangdu.org',
        changeOrigin: true,
        pathRewrite: {
          '^/elem': ''
        }
      },
      '/douban': {
        target: 'https://douban.uieee.com/v2',
        changeOrigin: true,
        pathRewrite: {
          '^/douban': ''
        }
      },
      '/qishitong': {
        target: 'http://m.qstjt.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/qishitong': ''
        }
      },
      '/qishitongtwo': {
        target: 'http://qstscoa.qstjt.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/qishitongtwo': ''
        }
      }
    }
  }
}
