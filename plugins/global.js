import Vue from 'vue'
// import vuePerfectScrollbar from 'vue-perfect-scrollbar'
// import contentmenu from 'v-contextmenu'
// import VueLineClamp from 'vue-line-clamp'
// import VCalendar from 'v-calendar'
// import 'v-calendar/lib/v-calendar.min.css'
// import VueScrollTo from 'vue-scrollto'
// import Switches from "vue-switches";
// import InfiniteLoading from "vue-infinite-loading";
// import { Form,FormBuilder } from 'vue-formio';
// import microFormio from 'micro-formio';
// Formio.use(microFormio);
// const url = process.env.BASE_URL + '/api';
// Formio.setBaseUrl(url);
// Formio.setApiUrl(url);
// Formio.setProjectUrl(url);
// Formio.projectId='111111111111111111111111';


import "@/assets/css/nucleo/nucleo.css";
import "@/assets/css/font-awesome/font-awesome.css";
import "@/assets/scss/argon.scss";
import clickOutside from "../utils/click-ouside.js";
// import globalComponents from "./globalComponents";
// import globalDirectives from "./globalDirectives";
import VueLazyload from "vue-lazyload";
// Vue.use(globalComponents);
// Vue.use(globalDirectives);
Vue.use(VueLazyload);
Vue.directive("click-outside", clickOutside);
// Vue.component('vue-perfect-scrollbar', vuePerfectScrollbar);
// Vue.component('switches', Switches);
// Vue.component("infinite-loading", InfiniteLoading);
// // Vue.component("formio", Form);
// // Vue.component("form-builder", FormBuilder);
// Vue.use(require('vue-shortkey'));
// Vue.use(contentmenu);
// Vue.use(VueLineClamp, {importCss: true})
// Vue.use(VueScrollTo);
// // Vue.use(Formio);
// import { defaultColor } from "../constants/config";
// var color = defaultColor;

// if (localStorage.getItem("themeColor")) {
// 	color = localStorage.getItem("themeColor");
// }
// console.log(this)
import("@/assets/scss/_font.scss")



