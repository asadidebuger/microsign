
export default function({ app }, inject) {
  // app.nuxt.defaultTransition.beforeEnter = () => {
  //   app.i18n.finalizePendingLocaleChange()
  // }
  //
  // // Optional: wait for locale before scrolling for a smoother transition
  // app.router.options.scrollBehavior = async (to, from, savedPosition) => {
  //   // Make sure the route has changed
  //   if (to.name !== from.name) {
  //     await app.i18n.waitForPendingLocaleChange()
  //   }
  //   return savedPosition || { x: 0, y: 0 }
  // }
  const locale = (code=app.i18n.locale) =>{
    code=code.code||code;
    if ((app.i18n.locale?.code)===code)return app.i18n.locale;
    return app.i18n.locales.find((x) => x.code === code);
  }
  const setLocale=(code)=>{
    app.i18n.setLocale(code);
  }
  inject( 'locale', locale);
  inject( 'setLocale', setLocale);
}
