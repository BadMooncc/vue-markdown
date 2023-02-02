const path = require("path");
module.exports = {
  chainWebpack: (config) => {
    config.externals({})
    // 使用自定义 loader
    config.module
      .rule("md-loader")
      .test(/\.md$/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("md-loader")
      .loader(path.join(__dirname, "./md-loader/index.js"))
      .end();
  },
}
