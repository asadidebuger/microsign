(window.webpackJsonp=window.webpackJsonp||[]).push([[49,19],{440:function(t,e,n){"use strict";n.r(e);var r=n(0),o={name:"card",props:{type:{type:String,description:"Card type"},gradient:{type:String,description:"Card background gradient type (warning,danger etc)"},hover:{type:Boolean,description:"Whether card should move on hover"},shadow:{type:Boolean,description:"Whether card has shadow"},shadowSize:{type:String,description:"Card shadow size"},noBody:{type:Boolean,default:!1,description:"Whether card should have wrapper body class"},bodyClasses:{type:[String,Object,Array],description:"Card body css classes"},headerClasses:{type:[String,Object,Array],description:"Card header css classes"},footerClasses:{type:[String,Object,Array],description:"Card footer css classes"}}},c=n(31),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card",class:[{"card-lift--hover":t.hover},{shadow:t.shadow},Object(r.a)({},"shadow-".concat(t.shadowSize),t.shadowSize),Object(r.a)({},"bg-gradient-".concat(t.gradient),t.gradient),Object(r.a)({},"bg-".concat(t.type),t.type)]},[t.$slots.header?e("div",{staticClass:"card-header",class:t.headerClasses},[t._t("header")],2):t._e(),t._v(" "),t.noBody?t._e():e("div",{staticClass:"card-body",class:t.bodyClasses},[t._t("default")],2),t._v(" "),t.noBody?t._t("default"):t._e(),t._v(" "),t.$slots.footer?e("div",{staticClass:"card-footer",class:t.footerClasses},[t._t("footer")],2):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},476:function(t,e,n){var content=n(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("543156cd",content,!0,{sourceMap:!1})},507:function(t,e,n){"use strict";n(476)},508:function(t,e,n){var r=n(56)(!1);r.push([t.i,".toc{list-style:none;padding:0;line-height:2;font-size:85%}.rtl .toc-container{border-left:1px solid #d9d9d9}.rtl .depth-2{font-weight:700}.rtl .depth-3{padding-right:10px}.ltr .toc-container{border-right:1px solid #d9d9d9}.ltr .depth-2{font-weight:700}.ltr .depth-3{padding-left:10px}",""]),t.exports=r},531:function(t,e,n){"use strict";n.r(e);n(13),n(4),n(50),n(5),n(2),n(1),n(6),n(3),n(7);var r=n(0),o=n(14);n(45);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"profile",data:function(){return{key:""}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,content,o,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$content,t.query,r=t.params,content=null,o=null,c=r.category,l=r.content,d=r.lang||$nuxt.$locale().code,!l){e.next=12;break}return e.next=9,n("".concat(c,"/").concat(l,"/").concat(d)).fetch();case 9:content=e.sent,e.next=15;break;case 12:return e.next=14,n(c,{deep:!0}).without(["body"]).where({slug:d}).sortBy("order","asc").fetch();case 14:o=e.sent;case 15:return e.abrupt("return",{$content:n,category:c,filename:l,contents:o,content:content,lang:d});case 16:case"end":return e.stop()}}),e)})))()},watch:{key:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={slug:e.lang},t&&(r.title={$contains:t.split(" ")}),o=e.category,n.next=5,e.$content(o,{deep:!0}).without(["body"]).where(r).sortBy("order","asc").fetch();case 5:e.contents=n.sent;case 6:case"end":return n.stop()}}),n)})))()}},head:function(){return l(l({},this.$nuxtI18nHead({addDirAttribute:!0,addSeoAttributes:!0})),{},{title:this.title,meta:[{property:"og:description",name:"description",content:this.description},{property:"og:title",name:"title",content:this.title}]})},methods:{getContentName:function(t){var e=this.category;return t.substring(t.indexOf(e)+e.length+1)}},computed:{title:function(){return this.content?this.content&&this.content.title||"":this.category?this.$t(this.category):""},prefix:function(){return this.$locale().code},description:function(){return this.content?this.content&&this.content.description||"":this.category?this.$t(this.category):""}}},h=(n(507),n(31)),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"profile-page"},[t._m(0),t._v(" "),e("section",{staticClass:"section section-skew"},[e("div",{staticClass:"container"},[t.content?e("card",{staticStyle:{"margin-top":"-400px"},attrs:{shadow:"","no-body":""}},[e("div",{staticClass:"px-4"},[e("div",{staticClass:"py-3"},[e("span",[t._v(t._s(t.$t("in category"))+":")]),t._v(" "),e("router-link",{attrs:{to:"/".concat(t.prefix,"/").concat(t.category)}},[t._v(t._s(t.$t(t.category)))]),t._v(" "),e("h1",{staticClass:"text-center br"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"row justify-content-center border-top"},[e("aside",{staticClass:"toc-container col-lg-3 mt-5"},[e("div",{staticClass:"sticky top-16"},[e("h4",{staticClass:"uppercase text-black font-h2 text-lg lg:mt-16 tracking-wider"},[t._v("\n                                "+t._s(t.$t("Table of contents"))+"\n                              ")]),t._v(" "),e("nav",{staticClass:"mt-4"},[e("ul",{staticClass:"toc"},t._l(t.content.toc,(function(link){return e("li",{key:link.id,class:"depth-"+link.depth},[e("a",{staticClass:"transition-colors duration-75 text-base mb-2 block",attrs:{role:"button",href:"#".concat(link.id)}},[t._v(t._s(link.text))])])})),0)])])]),t._v(" "),e("div",{staticClass:"content-container col-lg-9 mt-5"},[e("nuxt-content",{attrs:{document:t.content,tag:"article"}})],1)])],1)])]):t.contents?e("card",{staticStyle:{"margin-top":"-400px"},attrs:{shadow:"","no-body":""}},[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],staticClass:"form-control",attrs:{type:"search",placeholder:t.$t("Filter")},domProps:{value:t.key},on:{input:function(e){e.target.composing||(t.key=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"px-4"},[e("div",{staticClass:"py-3"},[e("span",[t._v(t._s(t.$t("in category"))+": "+t._s(t.$t(t.category)))]),t._v(" "),e("h1",{staticClass:"text-center br"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"row justify-content-center border-top"},[e("ul",{staticClass:"content-container col-lg-9 mt-5 list-unstyled"},t._l(t.contents,(function(n,i){return e("li",{key:"item"+i},[e("router-link",{attrs:{to:"/"+t.prefix+"/"+t.category+"/"+t.getContentName(n.dir)}},[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.description))]),t._v(" "),e("hr")])],1)})),0)])])])]):t._e()],1)])])}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"section-profile-cover section-shaped my-0"},[e("div",{staticClass:"shape shape-style-1 shape-primary shape-skew alpha-4"},[e("span"),t._v(" "),e("span"),t._v(" "),e("span"),t._v(" "),e("span"),t._v(" "),e("span"),t._v(" "),e("span"),t._v(" "),e("span")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:n(440).default})}}]);