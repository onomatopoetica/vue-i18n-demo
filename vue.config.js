module.exports = {
  chainWebpack: config => {
    config.plugins.delete("prefetch")
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  },
    publicPath: 
      process.env.NODE_ENV === 'production' ? '/vue-i18n-demo/' : '/'
}
