const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description},
      {name: 'apple-mobile-web-app-capable', content: "yes"},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/tmp_favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'},
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/appTest.styl',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~plugins/vee-validate.js', ssr: false},
    '~plugins/vue-awesome.js',
    '~plugins/vuetify.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        }, {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ],
    },
    ],
    //  not use
    // '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  vuetify: {
    // Vuetify の設定はここに書く
    theme: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#ffea00',
      error: '#b71c1c'
    }
  },
  workbox: {
    dev: true,
  },
  manifest: {
    name: 'BoardGameManagement',
    lang: 'ja',
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }, {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ],
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-awesome', 'vuetify', 'vee-validate'],
    // vendor: [
    //   '~plugins/vuetifyPlugin.js'
    // ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  },
  script: [
    {src: '~/plugins/js/helper/api.js'},
    {src: '~/plugins/js/interface/Detail.js'},
    {src: '~/plugins/js/interface/Login.js'},
    {src: '~/plugins/js/interface/Place.js'},
    {src: '~/plugins/js/interface/Result.js'},
    {src: '~/plugins/js/interface/history/HistoryCheckin.js'},
    {src: '~/plugins/js/interface/history/HistoryResult.js'},
  ],

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8090',
    API_URL: process.env.BASE_URL || 'http://localhost:8090'
  },
}
