(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{471:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t&&t.$options._scopeId||e}},479:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(450),o=n(445),c=function(a,b){if(a.length!==b.length)return!1;for(var t=!0,i=0;t&&i<a.length;i++)t=l(a[i],b[i]);return t},l=function t(a,b){if(a===b)return!0;var e=Object(o.b)(a),n=Object(o.b)(b);if(e||n)return!(!e||!n)&&a.getTime()===b.getTime();if(e=Object(o.a)(a),n=Object(o.a)(b),e||n)return!(!e||!n)&&c(a,b);if(e=Object(o.f)(a),n=Object(o.f)(b),e||n){if(!e||!n)return!1;if(Object(r.g)(a).length!==Object(r.g)(b).length)return!1;for(var l in a){var h=Object(r.f)(a,l),d=Object(r.f)(b,l);if(h&&!d||!h&&d||!t(a[l],b[l]))return!1}}return String(a)===String(b)}},491:function(t,e,n){"use strict";n.d(e,"a",(function(){return M}));var r=n(451),o=n(456),c=n(454),l=n(457),h=n(481),d=n(471),f=n(459),v=n(445),O=n(479),m=n(460),j=n(450),T=n(508);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){w(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var P="__BV_Tooltip__",_={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},E=/^html$/i,C=/^noninteractive$/i,S=/^nofade$/i,D=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,L=/^(window|viewport|scrollParent)$/i,k=/^d\d+$/i,I=/^ds\d+$/i,A=/^dh\d+$/i,H=/^o-?\d+$/i,x=/^v-.+$/i,R=/\s+/,F=function(t,e,n){if(o.h){var y=function(t,e){var n={title:void 0,trigger:"",placement:"top",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,id:null,html:!1,interactive:!0,disabled:!1,delay:Object(h.a)(r.i,"delay",50),boundary:String(Object(h.a)(r.i,"boundary","scrollParent")),boundaryPadding:Object(m.b)(Object(h.a)(r.i,"boundaryPadding",5),0),variant:Object(h.a)(r.i,"variant"),customClass:Object(h.a)(r.i,"customClass")};if(Object(v.h)(t.value)||Object(v.e)(t.value)||Object(v.c)(t.value)?n.title=t.value:Object(v.g)(t.value)&&(n=$($({},n),t.value)),Object(v.i)(n.title)){var data=e.data||{};n.title=data.attrs&&!Object(v.j)(data.attrs.title)?data.attrs.title:void 0}Object(v.g)(n.delay)||(n.delay={show:Object(m.b)(n.delay,0),hide:Object(m.b)(n.delay,0)}),t.arg&&(n.container="#".concat(t.arg)),Object(j.g)(t.modifiers).forEach((function(t){if(E.test(t))n.html=!0;else if(C.test(t))n.interactive=!1;else if(S.test(t))n.animation=!1;else if(D.test(t))n.placement=t;else if(L.test(t))t="scrollparent"===t?"scrollParent":t,n.boundary=t;else if(k.test(t)){var e=Object(m.b)(t.slice(1),0);n.delay.show=e,n.delay.hide=e}else I.test(t)?n.delay.show=Object(m.b)(t.slice(2),0):A.test(t)?n.delay.hide=Object(m.b)(t.slice(2),0):H.test(t)?n.offset=Object(m.b)(t.slice(1),0):x.test(t)&&(n.variant=t.slice(2)||null)}));var o={};return Object(l.b)(n.trigger||"").filter(f.a).join(" ").trim().toLowerCase().split(R).forEach((function(t){_[t]&&(o[t]=!0)})),Object(j.g)(t.modifiers).forEach((function(t){t=t.toLowerCase(),_[t]&&(o[t]=!0)})),n.trigger=Object(j.g)(o).join(" "),"blur"===n.trigger&&(n.trigger="focus"),n.trigger||(n.trigger="hover focus"),n}(e,n);if(!t[P]){var w=n.context;t[P]=new T.a({parent:w,_scopeId:Object(d.a)(w,void 0)}),t[P].__bv_prev_data__={},t[P].$on(c.m,(function(){Object(v.c)(y.title)&&t[P].updateData({title:y.title(t)})}))}var data={title:y.title,triggers:y.trigger,placement:y.placement,fallbackPlacement:y.fallbackPlacement,variant:y.variant,customClass:y.customClass,container:y.container,boundary:y.boundary,delay:y.delay,offset:y.offset,noFade:!y.animation,id:y.id,interactive:y.interactive,disabled:y.disabled,html:y.html},F=t[P].__bv_prev_data__;if(t[P].__bv_prev_data__=data,!Object(O.a)(data,F)){var M={target:t};Object(j.g)(data).forEach((function(e){data[e]!==F[e]&&(M[e]="title"===e&&Object(v.c)(data[e])?data[e](t):data[e])})),t[P].updateData(M)}}},M={bind:function(t,e,n){F(t,e,n)},componentUpdated:function(t,e,n){n.context.$nextTick((function(){F(t,e,n)}))},unbind:function(t){!function(t){t[P]&&(t[P].$destroy(),t[P]=null),delete t[P]}(t)}}},506:function(t,e,n){"use strict";n.d(e,"a",(function(){return F}));var r=n(8),o=n(451),c=n(454),l=n(453),h=n(445),d=n(455),f=n(471);var v=r.default.extend({computed:{scopedStyleAttrs:function(){var t,e,n,r=Object(f.a)(this.$parent);return r?(n="",(e=r)in(t={})?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t):{}}}}),O=n(119),m=n(475),j=n(470),T=n(460),y=n(200);function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){P(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _={name:"",enterClass:"",enterActiveClass:"",enterToClass:"show",leaveClass:"show",leaveActiveClass:"",leaveToClass:""},E=w(w({},_),{},{enterActiveClass:"fade",leaveActiveClass:"fade"}),C={appear:Object(d.a)(l.c,!1),mode:Object(d.a)(l.h),noFade:Object(d.a)(l.c,!1),transProps:Object(d.a)(l.g)},S=r.default.extend({name:o.l,functional:!0,props:C,render:function(t,e){var n=e.children,data=e.data,r=e.props,o=r.transProps;return Object(h.g)(o)||(o=r.noFade?_:E,r.appear&&(o=w(w({},o),{},{appear:!0,appearClass:o.enterClass,appearActiveClass:o.enterActiveClass,appearToClass:o.enterToClass}))),o=w(w({mode:r.mode},o),{},{css:!0}),t("transition",Object(y.a)(data,{props:o}),n)}}),D={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left",TOPLEFT:"top",TOPRIGHT:"top",RIGHTTOP:"right",RIGHTBOTTOM:"right",BOTTOMLEFT:"bottom",BOTTOMRIGHT:"bottom",LEFTTOP:"left",LEFTBOTTOM:"left"},L={AUTO:0,TOPLEFT:-1,TOP:0,TOPRIGHT:1,RIGHTTOP:-1,RIGHT:0,RIGHTBOTTOM:1,BOTTOMLEFT:-1,BOTTOM:0,BOTTOMRIGHT:1,LEFTTOP:-1,LEFT:0,LEFTBOTTOM:1},k={arrowPadding:Object(d.a)(l.f,6),boundary:Object(d.a)([m.c,l.h],"scrollParent"),boundaryPadding:Object(d.a)(l.f,5),fallbackPlacement:Object(d.a)(l.b,"flip"),offset:Object(d.a)(l.f,0),placement:Object(d.a)(l.h,"top"),target:Object(d.a)([m.c,m.d])},I=r.default.extend({name:o.h,props:k,data:function(){return{noFade:!1,localShow:!0,attachment:this.getAttachment(this.placement)}},computed:{templateType:function(){return"unknown"},popperConfig:function(){var t=this,e=this.placement;return{placement:this.getAttachment(e),modifiers:{offset:{offset:this.getOffset(e)},flip:{behavior:this.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{padding:this.boundaryPadding,boundariesElement:this.boundary}},onCreate:function(data){data.originalPlacement!==data.placement&&t.popperPlacementChange(data)},onUpdate:function(data){t.popperPlacementChange(data)}}}},created:function(){var t=this;this.$_popper=null,this.localShow=!0,this.$on(c.m,(function(e){t.popperCreate(e)}));var e=function(){t.$nextTick((function(){Object(j.r)((function(){t.$destroy()}))}))};this.$parent.$once(c.t,e),this.$once(c.g,e)},beforeMount:function(){this.attachment=this.getAttachment(this.placement)},updated:function(){this.updatePopper()},beforeDestroy:function(){this.destroyPopper()},destroyed:function(){var t=this.$el;t&&t.parentNode&&t.parentNode.removeChild(t)},methods:{hide:function(){this.localShow=!1},getAttachment:function(t){return D[String(t).toUpperCase()]||"auto"},getOffset:function(t){if(!this.offset){var e=this.$refs.arrow||Object(j.s)(".arrow",this.$el),n=Object(T.a)(Object(j.i)(e).width,0)+Object(T.a)(this.arrowPadding,0);switch(L[String(t).toUpperCase()]||0){case 1:return"+50%p - ".concat(n,"px");case-1:return"-50%p + ".concat(n,"px");default:return 0}}return this.offset},popperCreate:function(t){this.destroyPopper(),this.$_popper=new O.a(this.target,t,this.popperConfig)},destroyPopper:function(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},updatePopper:function(){this.$_popper&&this.$_popper.scheduleUpdate()},popperPlacementChange:function(data){this.attachment=this.getAttachment(data.placement)},renderTemplate:function(t){return t("div")}},render:function(t){var e=this,n=this.noFade;return t(S,{props:{appear:!0,noFade:n},on:{beforeEnter:function(t){return e.$emit(c.m,t)},afterEnter:function(t){return e.$emit(c.n,t)},beforeLeave:function(t){return e.$emit(c.h,t)},afterLeave:function(t){return e.$emit(c.g,t)}}},[this.localShow?this.renderTemplate(t):t()])}});function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function H(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){x(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var R={html:Object(d.a)(l.c,!1),id:Object(d.a)(l.h)},F=r.default.extend({name:o.k,extends:I,mixins:[v],props:R,data:function(){return{title:"",content:"",variant:null,customClass:null,interactive:!0}},computed:{templateType:function(){return"tooltip"},templateClasses:function(){var t,e=this.variant,n=this.attachment,r=this.templateType;return[(t={noninteractive:!this.interactive},x(t,"b-".concat(r,"-").concat(e),e),x(t,"bs-".concat(r,"-").concat(n),n),t),this.customClass]},templateAttributes:function(){var t=this.id;return H(H({},this.$parent.$parent.$attrs),{},{id:t,role:"tooltip",tabindex:"-1"},this.scopedStyleAttrs)},templateListeners:function(){var t=this;return{mouseenter:function(e){t.$emit(c.j,e)},mouseleave:function(e){t.$emit(c.k,e)},focusin:function(e){t.$emit(c.e,e)},focusout:function(e){t.$emit(c.f,e)}}}},methods:{renderTemplate:function(t){var title=this.title,e=Object(h.c)(title)?title({}):title,n=this.html&&!Object(h.c)(title)?{innerHTML:title}:{};return t("div",{staticClass:"tooltip b-tooltip",class:this.templateClasses,attrs:this.templateAttributes,on:this.templateListeners},[t("div",{staticClass:"arrow",ref:"arrow"}),t("div",{staticClass:"tooltip-inner",domProps:n},[e])])}}})},507:function(t,e,n){"use strict";n.d(e,"a",(function(){return U}));var r=n(451),o=n(456),c=n(454),l=n(457),h=n(481),d=n(471),f=n(459),v=n(445),O=n(479),m=n(460),object=n(450),j=n(8),T=n(508),y=n(506),$=j.default.extend({name:r.g,extends:y.a,computed:{templateType:function(){return"popover"}},methods:{renderTemplate:function(t){var title=this.title,content=this.content,e=Object(v.c)(title)?title({}):title,n=Object(v.c)(content)?content({}):content,r=this.html&&!Object(v.c)(title)?{innerHTML:title}:{},o=this.html&&!Object(v.c)(content)?{innerHTML:content}:{};return t("div",{staticClass:"popover b-popover",class:this.templateClasses,attrs:this.templateAttributes,on:this.templateListeners},[t("div",{staticClass:"arrow",ref:"arrow"}),Object(v.j)(e)||""===e?t():t("h3",{staticClass:"popover-header",domProps:r},[e]),Object(v.j)(n)||""===n?t():t("div",{staticClass:"popover-body",domProps:o},[n])])}}}),w=j.default.extend({name:r.f,extends:T.a,computed:{templateType:function(){return"popover"}},methods:{getTemplate:function(){return $}}});function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){E(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C="__BV_Popover__",S={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},D=/^html$/i,L=/^nofade$/i,k=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,I=/^(window|viewport|scrollParent)$/i,A=/^d\d+$/i,H=/^ds\d+$/i,x=/^dh\d+$/i,R=/^o-?\d+$/i,F=/^v-.+$/i,M=/\s+/,B=function(t,e,n){if(o.h){var j=function(t,e){var n={title:void 0,content:void 0,trigger:"",placement:"right",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,disabled:!1,id:null,html:!1,delay:Object(h.a)(r.e,"delay",50),boundary:String(Object(h.a)(r.e,"boundary","scrollParent")),boundaryPadding:Object(m.b)(Object(h.a)(r.e,"boundaryPadding",5),0),variant:Object(h.a)(r.e,"variant"),customClass:Object(h.a)(r.e,"customClass")};if(Object(v.h)(t.value)||Object(v.e)(t.value)||Object(v.c)(t.value)?n.content=t.value:Object(v.g)(t.value)&&(n=_(_({},n),t.value)),t.arg&&(n.container="#".concat(t.arg)),Object(v.i)(n.title)){var data=e.data||{};n.title=data.attrs&&!Object(v.j)(data.attrs.title)?data.attrs.title:void 0}Object(v.g)(n.delay)||(n.delay={show:Object(m.b)(n.delay,0),hide:Object(m.b)(n.delay,0)}),Object(object.g)(t.modifiers).forEach((function(t){if(D.test(t))n.html=!0;else if(L.test(t))n.animation=!1;else if(k.test(t))n.placement=t;else if(I.test(t))t="scrollparent"===t?"scrollParent":t,n.boundary=t;else if(A.test(t)){var e=Object(m.b)(t.slice(1),0);n.delay.show=e,n.delay.hide=e}else H.test(t)?n.delay.show=Object(m.b)(t.slice(2),0):x.test(t)?n.delay.hide=Object(m.b)(t.slice(2),0):R.test(t)?n.offset=Object(m.b)(t.slice(1),0):F.test(t)&&(n.variant=t.slice(2)||null)}));var o={};return Object(l.b)(n.trigger||"").filter(f.a).join(" ").trim().toLowerCase().split(M).forEach((function(t){S[t]&&(o[t]=!0)})),Object(object.g)(t.modifiers).forEach((function(t){t=t.toLowerCase(),S[t]&&(o[t]=!0)})),n.trigger=Object(object.g)(o).join(" "),"blur"===n.trigger&&(n.trigger="focus"),n.trigger||(n.trigger="click"),n}(e,n);if(!t[C]){var T=n.context;t[C]=new w({parent:T,_scopeId:Object(d.a)(T,void 0)}),t[C].__bv_prev_data__={},t[C].$on(c.m,(function(){var data={};Object(v.c)(j.title)&&(data.title=j.title(t)),Object(v.c)(j.content)&&(data.content=j.content(t)),Object(object.g)(data).length>0&&t[C].updateData(data)}))}var data={title:j.title,content:j.content,triggers:j.trigger,placement:j.placement,fallbackPlacement:j.fallbackPlacement,variant:j.variant,customClass:j.customClass,container:j.container,boundary:j.boundary,delay:j.delay,offset:j.offset,noFade:!j.animation,id:j.id,disabled:j.disabled,html:j.html},y=t[C].__bv_prev_data__;if(t[C].__bv_prev_data__=data,!Object(O.a)(data,y)){var $={target:t};Object(object.g)(data).forEach((function(e){data[e]!==y[e]&&($[e]="title"!==e&&"content"!==e||!Object(v.c)(data[e])?data[e]:data[e](t))})),t[C].updateData($)}}},U={bind:function(t,e,n){B(t,e,n)},componentUpdated:function(t,e,n){n.context.$nextTick((function(){B(t,e,n)}))},unbind:function(t){!function(t){t[C]&&(t[C].$destroy(),t[C]=null),delete t[C]}(t)}}},508:function(t,e,n){"use strict";n.d(e,"a",(function(){return M}));var r=n(8),o=n(446),c=n(451),l=n(454),h=n(457),d=n(470),f=n(476),v=n(471),O=n(459),m=n(445),j=n(479),T=n(487),y=n(488),$=n(460),object=n(450),w=n(486);function P(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var E=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(P(this,t),!e)throw new TypeError("Failed to construct '".concat(this.constructor.name,"'. 1 argument required, ").concat(arguments.length," given."));Object(object.a)(this,t.Defaults,this.constructor.Defaults,n,{type:e}),Object(object.d)(this,{type:Object(object.h)(),cancelable:Object(object.h)(),nativeEvent:Object(object.h)(),target:Object(object.h)(),relatedTarget:Object(object.h)(),vueTarget:Object(object.h)(),componentId:Object(object.h)()});var r=!1;this.preventDefault=function(){this.cancelable&&(r=!0)},Object(object.e)(this,"defaultPrevented",{enumerable:!0,get:function(){return r}})}var e,n,r;return e=t,r=[{key:"Defaults",get:function(){return{type:"",cancelable:!0,nativeEvent:null,target:null,relatedTarget:null,vueTarget:null,componentId:null}}}],(n=null)&&_(e.prototype,n),r&&_(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),C="$_rootListeners",S=r.default.extend({created:function(){this[C]={}},beforeDestroy:function(){var t=this;Object(object.g)(this[C]||{}).forEach((function(e){t[C][e].forEach((function(n){t.listenOffRoot(e,n)}))})),this[C]=null},methods:{registerRootListener:function(t,e){this[C]&&(this[C][t]=this[C][t]||[],Object(h.a)(this[C][t],e)||this[C][t].push(e))},unregisterRootListener:function(t,e){this[C]&&this[C][t]&&(this[C][t]=this[C][t].filter((function(t){return t!==e})))},listenOnRoot:function(t,e){this.$root&&(this.$root.$on(t,e),this.registerRootListener(t,e))},listenOnRootOnce:function(t,e){var n=this;if(this.$root){var r=function t(){n.unregisterRootListener(t),e.apply(void 0,arguments)};this.$root.$once(t,r),this.registerRootListener(t,r)}},listenOffRoot:function(t,e){this.unregisterRootListener(t,e),this.$root&&this.$root.$off(t,e)},emitOnRoot:function(t){if(this.$root){for(var e,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(e=this.$root).$emit.apply(e,[t].concat(r))}}}}),D=n(506);function L(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?L(Object(source),!0).forEach((function(e){I(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):L(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var A=".modal-content",H=Object(f.e)(c.d,l.g),x=[A,".b-sidebar"].join(", "),R="data-original-title",F={title:"",content:"",variant:null,customClass:null,triggers:"",placement:"auto",fallbackPlacement:"flip",target:null,container:null,noFade:!1,boundary:"scrollParent",boundaryPadding:5,offset:0,delay:0,arrowPadding:6,interactive:!0,disabled:!1,id:null,html:!1},M=r.default.extend({name:c.j,mixins:[S],data:function(){return k(k({},F),{},{activeTrigger:{hover:!1,click:!1,focus:!1},localShow:!1})},computed:{templateType:function(){return"tooltip"},computedId:function(){return this.id||"__bv_".concat(this.templateType,"_").concat(this[o.a],"__")},computedDelay:function(){var t={show:0,hide:0};return Object(m.g)(this.delay)?(t.show=Object(T.c)(Object($.b)(this.delay.show,0),0),t.hide=Object(T.c)(Object($.b)(this.delay.hide,0),0)):(Object(m.e)(this.delay)||Object(m.h)(this.delay))&&(t.show=t.hide=Object(T.c)(Object($.b)(this.delay,0),0)),t},computedTriggers:function(){return Object(h.b)(this.triggers).filter(O.a).join(" ").trim().toLowerCase().split(/\s+/).sort()},isWithActiveTrigger:function(){for(var t in this.activeTrigger)if(this.activeTrigger[t])return!0;return!1},computedTemplateData:function(){return{title:this.title,content:this.content,variant:this.variant,customClass:this.customClass,noFade:this.noFade,interactive:this.interactive}}},watch:{computedTriggers:function(t,e){var n=this;Object(j.a)(t,e)||this.$nextTick((function(){n.unListen(),e.forEach((function(e){Object(h.a)(t,e)||n.activeTrigger[e]&&(n.activeTrigger[e]=!1)})),n.listen()}))},computedTemplateData:function(){this.handleTemplateUpdate()},title:function(t,e){t===e||t||this.hide()},disabled:function(t){t?this.disable():this.enable()}},created:function(){var t=this;this.$_tip=null,this.$_hoverTimeout=null,this.$_hoverState="",this.$_visibleInterval=null,this.$_enabled=!this.disabled,this.$_noop=y.a.bind(this),this.$parent&&this.$parent.$once(l.s,(function(){t.$nextTick((function(){Object(d.r)((function(){t.$destroy()}))}))})),this.$nextTick((function(){var e=t.getTarget();e&&Object(d.e)(document.body,e)?(t.scopeId=Object(v.a)(t.$parent),t.listen()):Object(w.a)(Object(m.h)(t.target)?'Unable to find target element by ID "#'.concat(t.target,'" in document.'):"The provided target is no valid HTML element.",t.templateType)}))},updated:function(){this.$nextTick(this.handleTemplateUpdate)},deactivated:function(){this.forceHide()},beforeDestroy:function(){this.unListen(),this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.clearVisibilityInterval(),this.destroyTemplate(),this.$_noop=null},methods:{getTemplate:function(){return D.a},updateData:function(){var t=this,data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=!1;Object(object.g)(F).forEach((function(n){Object(m.i)(data[n])||t[n]===data[n]||(t[n]=data[n],"title"===n&&(e=!0))})),e&&this.localShow&&this.fixTitle()},createTemplateAndShow:function(){var t=this.getContainer(),e=this.getTemplate(),n=this.$_tip=new e({parent:this,propsData:{id:this.computedId,html:this.html,placement:this.placement,fallbackPlacement:this.fallbackPlacement,target:this.getPlacementTarget(),boundary:this.getBoundary(),offset:Object($.b)(this.offset,0),arrowPadding:Object($.b)(this.arrowPadding,0),boundaryPadding:Object($.b)(this.boundaryPadding,0)}});this.handleTemplateUpdate(),n.$once(l.m,this.onTemplateShow),n.$once(l.n,this.onTemplateShown),n.$once(l.h,this.onTemplateHide),n.$once(l.g,this.onTemplateHidden),n.$once(l.t,this.destroyTemplate),n.$on(l.e,this.handleEvent),n.$on(l.f,this.handleEvent),n.$on(l.j,this.handleEvent),n.$on(l.k,this.handleEvent),n.$mount(t.appendChild(document.createElement("div")))},hideTemplate:function(){this.$_tip&&this.$_tip.hide(),this.clearActiveTriggers(),this.$_hoverState=""},destroyTemplate:function(){this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.$_hoverState="",this.clearActiveTriggers(),this.localPlacementTarget=null;try{this.$_tip.$destroy()}catch(t){}this.$_tip=null,this.removeAriaDescribedby(),this.restoreTitle(),this.localShow=!1},getTemplateElement:function(){return this.$_tip?this.$_tip.$el:null},handleTemplateUpdate:function(){var t=this,e=this.$_tip;if(e){["title","content","variant","customClass","noFade","interactive"].forEach((function(n){e[n]!==t[n]&&(e[n]=t[n])}))}},show:function(){var t=this.getTarget();if(t&&Object(d.e)(document.body,t)&&Object(d.n)(t)&&!this.dropdownOpen()&&(!Object(m.j)(this.title)&&""!==this.title||!Object(m.j)(this.content)&&""!==this.content)&&!this.$_tip&&!this.localShow){this.localShow=!0;var e=this.buildEvent(l.m,{cancelable:!0});this.emitEvent(e),e.defaultPrevented?this.destroyTemplate():(this.fixTitle(),this.addAriaDescribedby(),this.createTemplateAndShow())}},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.getTemplateElement();if(e&&this.localShow){var n=this.buildEvent(l.h,{cancelable:!t});this.emitEvent(n),n.defaultPrevented||this.hideTemplate()}else this.restoreTitle()},forceHide:function(){this.getTemplateElement()&&this.localShow&&(this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.$_hoverState="",this.clearActiveTriggers(),this.$_tip&&(this.$_tip.noFade=!0),this.hide(!0))},enable:function(){this.$_enabled=!0,this.emitEvent(this.buildEvent(l.d))},disable:function(){this.$_enabled=!1,this.emitEvent(this.buildEvent(l.b))},onTemplateShow:function(){this.setWhileOpenListeners(!0)},onTemplateShown:function(){var t=this.$_hoverState;this.$_hoverState="","out"===t&&this.leave(null),this.emitEvent(this.buildEvent(l.n))},onTemplateHide:function(){this.setWhileOpenListeners(!1)},onTemplateHidden:function(){this.destroyTemplate(),this.emitEvent(this.buildEvent(l.g))},getTarget:function(){var t=this.target;return Object(m.h)(t)?t=Object(d.h)(t.replace(/^#/,"")):Object(m.c)(t)?t=t():t&&(t=t.$el||t),Object(d.m)(t)?t:null},getPlacementTarget:function(){return this.getTarget()},getTargetId:function(){var t=this.getTarget();return t&&t.id?t.id:null},getContainer:function(){var t=!!this.container&&(this.container.$el||this.container),body=document.body,e=this.getTarget();return!1===t?Object(d.d)(x,e)||body:Object(m.h)(t)&&Object(d.h)(t.replace(/^#/,""))||body},getBoundary:function(){return this.boundary?this.boundary.$el||this.boundary:"scrollParent"},isInModal:function(){var t=this.getTarget();return t&&Object(d.d)(A,t)},isDropdown:function(){var t=this.getTarget();return t&&Object(d.k)(t,"dropdown")},dropdownOpen:function(){var t=this.getTarget();return this.isDropdown()&&t&&Object(d.s)(".dropdown-menu.show",t)},clearHoverTimeout:function(){clearTimeout(this.$_hoverTimeout),this.$_hoverTimeout=null},clearVisibilityInterval:function(){clearInterval(this.$_visibleInterval),this.$_visibleInterval=null},clearActiveTriggers:function(){for(var t in this.activeTrigger)this.activeTrigger[t]=!1},addAriaDescribedby:function(){var t=this.getTarget(),desc=Object(d.g)(t,"aria-describedby")||"";desc=desc.split(/\s+/).concat(this.computedId).join(" ").trim(),Object(d.u)(t,"aria-describedby",desc)},removeAriaDescribedby:function(){var t=this,e=this.getTarget(),desc=Object(d.g)(e,"aria-describedby")||"";(desc=desc.split(/\s+/).filter((function(e){return e!==t.computedId})).join(" ").trim())?Object(d.u)(e,"aria-describedby",desc):Object(d.p)(e,"aria-describedby")},fixTitle:function(){var t=this.getTarget();if(Object(d.j)(t,"title")){var title=Object(d.g)(t,"title");Object(d.u)(t,"title",""),title&&Object(d.u)(t,R,title)}},restoreTitle:function(){var t=this.getTarget();if(Object(d.j)(t,R)){var title=Object(d.g)(t,R);Object(d.p)(t,R),title&&Object(d.u)(t,"title",title)}},buildEvent:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new E(t,k({cancelable:!1,target:this.getTarget(),relatedTarget:this.getTemplateElement()||null,componentId:this.computedId,vueTarget:this},e))},emitEvent:function(t){var e=t.type;this.emitOnRoot(Object(f.e)(this.templateType,e),t),this.$emit(e,t)},listen:function(){var t=this,e=this.getTarget();e&&(this.setRootListener(!0),this.computedTriggers.forEach((function(n){"click"===n?Object(f.b)(e,"click",t.handleEvent,l.r):"focus"===n?(Object(f.b)(e,"focusin",t.handleEvent,l.r),Object(f.b)(e,"focusout",t.handleEvent,l.r)):"blur"===n?Object(f.b)(e,"focusout",t.handleEvent,l.r):"hover"===n&&(Object(f.b)(e,"mouseenter",t.handleEvent,l.r),Object(f.b)(e,"mouseleave",t.handleEvent,l.r))}),this))},unListen:function(){var t=this,e=this.getTarget();this.setRootListener(!1),["click","focusin","focusout","mouseenter","mouseleave"].forEach((function(n){e&&Object(f.a)(e,n,t.handleEvent,l.r)}),this)},setRootListener:function(t){var e=this.$root;if(e){var n=t?"$on":"$off",r=this.templateType;e[n](Object(f.d)(r,l.h),this.doHide),e[n](Object(f.d)(r,l.m),this.doShow),e[n](Object(f.d)(r,l.a),this.doDisable),e[n](Object(f.d)(r,l.c),this.doEnable)}},setWhileOpenListeners:function(t){this.setModalListener(t),this.setDropdownListener(t),this.visibleCheck(t),this.setOnTouchStartListener(t)},visibleCheck:function(t){var e=this;this.clearVisibilityInterval();var n=this.getTarget();t&&(this.$_visibleInterval=setInterval((function(){!e.getTemplateElement()||!e.localShow||n.parentNode&&Object(d.n)(n)||e.forceHide()}),100))},setModalListener:function(t){this.isInModal()&&this.$root[t?"$on":"$off"](H,this.forceHide)},setOnTouchStartListener:function(t){var e=this;"ontouchstart"in document.documentElement&&Object(h.c)(document.body.children).forEach((function(n){Object(f.c)(t,n,"mouseover",e.$_noop)}))},setDropdownListener:function(t){var e=this.getTarget();e&&this.$root&&this.isDropdown&&e.__vue__&&e.__vue__[t?"$on":"$off"](l.n,this.forceHide)},handleEvent:function(t){var e=this.getTarget();if(e&&!Object(d.l)(e)&&this.$_enabled&&!this.dropdownOpen()){var n=t.type,r=this.computedTriggers;if("click"===n&&Object(h.a)(r,"click"))this.click(t);else if("mouseenter"===n&&Object(h.a)(r,"hover"))this.enter(t);else if("focusin"===n&&Object(h.a)(r,"focus"))this.enter(t);else if("focusout"===n&&(Object(h.a)(r,"focus")||Object(h.a)(r,"blur"))||"mouseleave"===n&&Object(h.a)(r,"hover")){var o=this.getTemplateElement(),c=t.target,l=t.relatedTarget;if(o&&Object(d.e)(o,c)&&Object(d.e)(e,l)||o&&Object(d.e)(e,c)&&Object(d.e)(o,l)||o&&Object(d.e)(o,c)&&Object(d.e)(o,l)||Object(d.e)(e,c)&&Object(d.e)(e,l))return;this.leave(t)}}},doHide:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.forceHide()},doShow:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.show()},doDisable:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.disable()},doEnable:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.enable()},click:function(t){this.$_enabled&&!this.dropdownOpen()&&(Object(d.c)(t.currentTarget),this.activeTrigger.click=!this.activeTrigger.click,this.isWithActiveTrigger?this.enter(null):this.leave(null))},toggle:function(){this.$_enabled&&!this.dropdownOpen()&&(this.localShow?this.leave(null):this.enter(null))},enter:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&(this.activeTrigger["focusin"===e.type?"focus":"hover"]=!0),this.localShow||"in"===this.$_hoverState?this.$_hoverState="in":(this.clearHoverTimeout(),this.$_hoverState="in",this.computedDelay.show?(this.fixTitle(),this.$_hoverTimeout=setTimeout((function(){"in"===t.$_hoverState?t.show():t.localShow||t.restoreTitle()}),this.computedDelay.show)):this.show())},leave:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&(this.activeTrigger["focusout"===e.type?"focus":"hover"]=!1,"focusout"===e.type&&Object(h.a)(this.computedTriggers,"blur")&&(this.activeTrigger.click=!1,this.activeTrigger.hover=!1)),this.isWithActiveTrigger||(this.clearHoverTimeout(),this.$_hoverState="out",this.computedDelay.hide?this.$_hoverTimeout=setTimeout((function(){"out"===t.$_hoverState&&t.hide()}),this.computedDelay.hide):this.hide())}}})}}]);