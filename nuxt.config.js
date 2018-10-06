const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'},
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~plugins/vee-validate.js', ssr: true},
    '~plugins/vue-awesome.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
    //  not use
    // '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-awesome'],
    // vendor: [
    //   '~plugins/vuetifyPlugin.js'
    // ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  script: [
    { src: '~/plugins/js/helper/api.js' },
    { src: '~/plugins/js/interface/CreateRoom.js' },
    { src: '~/plugins/js/interface/Detail.js' },
    { src: '~/plugins/js/interface/JoinRoom.js' },
    { src: '~/plugins/js/interface/Login.js' },
    { src: '~/plugins/js/interface/Place.js' },
    { src: '~/plugins/js/interface/Result.js' },
    { src: '~/plugins/js/interface/history/HistoryCheckin.js' },
    { src: '~/plugins/js/interface/history/HistoryJoinRoom.js' },
    { src: '~/plugins/js/interface/history/HistoryResult.js' },
  ],

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8090',
    API_URL: process.env.BASE_URL || 'http://localhost:8090'
  },
  vuetify: {
    iconfont: 'mdi',
    theme: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    }
  }
}
