export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'chatBoth',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/icon2.png" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '~/assets/css/style.css',
    '~/assets/css/theme.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // buildModules: [
  //   '@nuxtjs/tailwindcss',
  //   '@nuxt/postcss8',
  // ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  
  buildModules: [
    '@nuxtjs/moment'
  ],

  server:{
    host: "0.0.0.0",
    port : 7000
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
