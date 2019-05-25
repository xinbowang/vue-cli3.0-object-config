let pageConfig = {
  display: {
    // entry for the pages
    entry: 'src/views/display/main.js',
    // the source template
    template: 'src/views/display/index.html',
    // output as dist/index.html
    filename: 'index.html',
    // when using title option,
    // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
    title: '首页',
    chunks: ['chunk-vendors', 'chunk-common', 'display']
  },
  energy: {
    // entry for the pages
    entry: 'src/views/energy/main.js',
    // the source template
    template: 'src/views/energy/energy.html',
    // output as dist/index.html
    filename: 'energy.html',
    // when using title option,
    // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
    title: '首页',
    chunks: ['chunk-vendors', 'chunk-common', 'energy']
  }
};
// 打包环境修改输出文件：index.html;
if (process.env.NODE_ENV !== 'development') {
  pageConfig[process.env.VUE_APP_FLAG].filename = 'index.html';
}
pageConfig = process.env.NODE_ENV === 'development' ? pageConfig : Object.assign({}, { index: pageConfig[process.env.VUE_APP_FLAG] });
module.exports = {
  publicPath: './',
  outputDir: `dist/${process.env.VUE_APP_FLAG}`,
  assetsDir: 'static',
  filenameHashing: true,
  // When building in multi-pages mode, the webpack config will contain different plugins
  // (there will be multiple instances of html-webpack-plugin and preload-webpack-plugin).
  // Make sure to run vue inspect if you are trying to modify the options for those plugins.
  pages: pageConfig,

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: false,

  // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
  transpileDependencies: [],

  // 生产环境 sourceMap
  productionSourceMap: false,

  // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
  // corsUseCredentials: false,
  // webpack 配置，键值对象时会合并配置，为方法时会改写配置
  // https://cli.vuejs.org/guide/webpack.html#simple-configuration
  configureWebpack: (config) => {
  },

  // webpack 链接 API，用于生成和修改 webapck 配置
  // https://github.com/mozilla-neutrino/webpack-chain
  chainWebpack: (config) => {
    // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
    // config.optimization.splitChunks({
    //   cacheGroups: {}
    // });

    // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
    // config.module.rule('eslint').exclude.
    //   add('/Users/maybexia/Downloads/FE/community_built-in/src/lib').
    //   end();
  },

  // 配置高于chainWebpack中关于 css loader 的配置
  css: {
    // 是否开启支持 foo.module.css 样式
    modules: false,

    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    extract: true,

    // 是否构建样式地图，false 将提高构建速度
    sourceMap: false,

    // css预设器配置项
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },

      postcss: {
        // options here will be passed to postcss-loader
      }
    }
  },

  // All options for webpack-dev-server are supported
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    open: true,
    port: 3000,
    https: false,
    hotOnly: false,
    proxy: null
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,

  // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // 第三方插件配置
  pluginOptions: {}
};
