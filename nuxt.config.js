require('dotenv').config();
// const locales=[{code:'fa',file:locale+'.json',dir:'rtl',name:'fa'}]


export default {
  env:process.env,
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // router: {
  //   base: '/microsign/'
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'microsign',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'fontiran.com:license', content: 'Y68A9' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap-vue/dist/bootstrap-vue.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/i18n.js', '~/plugins/notify.js', '~/plugins/utility.js', '~/plugins/global.js'
  ],
  moment: {
    locales: ['fa'],
    // plugins: [
    //   'moment-strftime',
    //   'moment-fquarter'
    // ]
    /* module options */
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-moment-jalaali'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  i18n: {
    locales:[
      { code: 'en', iso: 'en-US', file: 'en.json', dir: 'ltr',name:'English' },
      { code: 'fa', iso: 'fa-IR', file: 'fa.json', dir: 'rtl',name:'فارسی' }
    ]
    ,
    strategy: 'prefix_and_default',//no_prefix , prefix , prefix_and_default ,prefix_except_default
    // skipSettingLocaleOnNavigate: true,
    vueI18nLoader: true,
    defaultLocale: process.env.LOCALE_DEFAULT,
    langDir: '~/locales/',
    vueI18n: {
      fallbackLocale: process.env.LOCALE_FALLBACK,
      // messages,
      silentTranslationWarn: true
    },
    detectBrowserLanguage: {
      // If enabled, a cookie is set once a user has been redirected to his
      // preferred language to prevent subsequent redirections
      // Set to false to redirect every time
      useCookie: true,
      // Set `SameSite=None; Secure` to allow cross-domain use of the cookie (required when app is
      // embedded in an iframe).
      cookieCrossOrigin: false,
      // Set to override the default domain of the cookie. Defaults to host of the site.
      cookieDomain: null,
      // Cookie name
      cookieKey: 'lang',
      // Sets the `Secure` flag for the cookie.
      cookieSecure: false,
      // Set to always redirect to value stored in the cookie, not just once
      alwaysRedirect: false,
      // If no locale for the browsers locale is a match, use this one as a fallback
      fallbackLocale: process.env.LOCALE_FALLBACK
    }

  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
