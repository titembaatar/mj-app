import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyD6bcHI_2bkGKcG-1A0usFwJ-aVi-N_cbY',
          authDomain: 'momotarojeanspaint.firebaseapp.com',
          databaseURL: 'https://momotarojeanspaint.firebaseio.com',
          projectId: 'momotarojeanspaint',
          storageBucket: 'momotarojeanspaint.appspot.com',
          messagingSenderId: '758411193582',
          appId: '1:758411193582:web:bb8239cfbd9f984d2217ff'
        },
        services: {
          auth: true,
          firestore: true
        }
      }
    ]
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#24292E',
          accent: '#90A4AE',
          secondary: '#808890',
          success: '#77DD77',
          info: '#779ECB',
          warning: '#F8C050',
          error: '#FE6B64'
        },
        light: {
          primary: '#24292E',
          accent: '#607D8B',
          secondary: '#404448',
          success: '#77DD77',
          info: '#779ECB',
          warning: '#F8C050',
          error: '#FE6B64'
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
