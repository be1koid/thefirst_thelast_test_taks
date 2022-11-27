
const outputDir = 'docs'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/test_task_first_last/'
      : '/',
  outputDir,
  indexPath: 'index.html',
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
        .rule("vue")
        .use("vue-svg-inline-loader")
        .loader("vue-svg-inline-loader")
        .options({ /* ... */ });
  },

}

