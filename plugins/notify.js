// import Vue from 'vue'
// import VueNotify from '~/components/base/Notify.vue'
//
// Vue.use(VueNotify)
// export default ({ app,options }, inject) => {
//   let Constr = Vue.extend(VueNotify)
//   let Notify = new Constr()
//   Notify.options = Object.assign(Notify.options, options)
//   let vm = Notify.$mount()
//   document.querySelector('body').appendChild(vm.$el)
//   const notify= (type = 'success', title=type, message=type, options ={
//     duration: 3000,
//     permanent: false
//   }) => {
//     Notify.addItem(type, $nuxt.$t(title), $nuxt.$t(message), options)
//   }
//   inject( 'notify', notify);
// }
