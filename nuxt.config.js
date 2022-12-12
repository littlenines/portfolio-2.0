export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nemanja Galbinovic',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Nemanja Galbinovic' },
      { hid: 'description', name: 'description', content: 'Web Portfolio' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og-title', property: 'og:title', content: 'Nemanja Galbinovic - Web Portfolio' },
      { hid: 'og-description', property: 'og:description', content: 'Seeking to learn and improve myself as well as meet new people' },
      { hid: 'og-url', property: 'og:url', content: 'https://nemanja-galbinovic.herokuapp.com' },
      { hid: 'og-image', property: 'og:image', content: '/og-image.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Play&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=Russo+One&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],

  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxtjs-mdi-font',
    '@nuxtjs/style-resources'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
