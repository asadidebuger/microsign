(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{495:function(e,t,l){"use strict";l.r(t);l(13),l(17);var o={name:"base-switch",inheritAttrs:!1,props:{value:{type:Boolean,default:!1,description:"Switch value"}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},n=l(30),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("label",{staticClass:"custom-toggle"},[t("input",e._g(e._b({directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e.model},on:{change:function(t){var l=e.model,o=t.target,n=!!o.checked;if(Array.isArray(l)){var c=e._i(l,null);o.checked?c<0&&(e.model=l.concat([null])):c>-1&&(e.model=l.slice(0,c).concat(l.slice(c+1)))}else e.model=n}}},"input",e.$attrs,!1),e.$listeners)),e._v(" "),t("span",{staticClass:"custom-toggle-slider rounded-circle"})])}),[],!1,null,null,null);t.default=component.exports}}]);