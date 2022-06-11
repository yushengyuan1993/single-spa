module.exports = {
  chainWebpack: config => {
    config.externals(['vue', 'vue-router'])
  },
  devServer: {
    port: 9002
  }
}