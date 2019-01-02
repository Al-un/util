// https://cli.vuejs.org/config/
const path = require('path');

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/utils/' : '/',
  /**
   * Webpack configuration!
   */
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue'],
      // https://webpack.js.org/configuration/resolve/
      alias: {
        Components: path.resolve(__dirname, 'src/components'),
        Router: path.resolve(__dirname, 'src/router'),
        Services: path.resolve(__dirname, 'src/services'),
        Store: path.resolve(__dirname, 'src/store')
      }
    }
  }
};
