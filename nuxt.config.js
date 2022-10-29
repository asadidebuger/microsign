require('dotenv').config();
const locales=[
  { code: 'en', iso: 'en-US', file: 'en.json', dir: 'ltr',name:'English' },
  { code: 'fa', iso: 'fa-IR', file: 'fa.json', dir: 'rtl',name:'فارسی' }
]
const path = require('path');
const appDir =path.join(__dirname,'content');
const fs = require('fs');
// console.log(appDir)

const routes=[];
const cats=fs.readdirSync(appDir);
cats.forEach(cat=>{
  if (cat.startsWith('_'))return;
  let d=path.join(appDir,cat);
  let contents= fs.readdirSync(d);
  locales.forEach(l=>{
    routes.push(l.code+'/'+cat)
  })
  contents.forEach(c=>{

    let p=cat+'/'+c;
    // routes.push(p)
    locales.forEach(l=>{
      routes.push(l.code+'/'+p)
    })
  })
})
// const files=cats.map(r=>{
//
// })
console.log(routes)

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
    'nuxt-moment-jalaali',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-154135892-1' // Use as fallback if no runtime config is provided
  },
  // publicRuntimeConfig: {
  //   googleAnalytics: {
  //     id: process.env.GOOGLE_ANALYTICS_ID
  //   }
  // },

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
    'nuxt-i18n',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://microsign.ir',
    // shortcut notation (basic)
    i18n: true,
    exclude: [
    ],
    gzip: true,
    // nuxt-i18n notation (advanced)
    // i18n: {
    //   locales: ['en', 'es',],
    //   routesNameSeparator: '___'
    // }
  },

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
    locales
    ,
    strategy: 'prefix',//no_prefix , prefix , prefix_and_default ,prefix_except_default
    // skipSettingLocaleOnNavigate: false,
    vueI18nLoader: true,
    defaultLocale: process.env.LOCALE_DEFAULT||'en',
    langDir: '~/locales/',
    vueI18n: {
      // fallbackLocale: process.env.LOCALE_FALLBACK||'en',
      // messages,
      silentTranslationWarn: true
    },
    detectBrowserLanguage: false
    // detectBrowserLanguage: {
    //   // If enabled, a cookie is set once a user has been redirected to his
    //   // preferred language to prevent subsequent redirections
    //   // Set to false to redirect every time
    //   useCookie: false,
    //   // Set `SameSite=None; Secure` to allow cross-domain use of the cookie (required when app is
    //   // embedded in an iframe).
    //   cookieCrossOrigin: false,
    //   // Set to override the default domain of the cookie. Defaults to host of the site.
    //   cookieDomain: null,
    //   // Cookie name
    //   cookieKey: 'lang',
    //   // Sets the `Secure` flag for the cookie.
    //   cookieSecure: false,
    //   // Set to always redirect to value stored in the cookie, not just once
    //   alwaysRedirect: false,
    //   // If no locale for the browsers locale is a match, use this one as a fallback
    //   // fallbackLocale: process.env.LOCALE_FALLBACK||'en'
    // }

  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: {
    routes,
    exclude: []
  }
}
