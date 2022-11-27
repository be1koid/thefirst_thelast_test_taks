

const outputDir = 'public'



module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/my-project/'
      : '/',
  outputDir,
  indexPath: 'index_bundled.html',
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
        .rule("vue")
        .use("vue-svg-inline-loader")
        .loader("vue-svg-inline-loader")
        .options({ /* ... */ });
  },

}

