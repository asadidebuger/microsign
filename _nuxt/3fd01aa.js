(window.webpackJsonp=window.webpackJsonp||[]).push([[32,9,57],{447:function(t,e,o){"use strict";o.r(e);var n=o(0),r={name:"base-button",props:{tag:{type:String,default:"button",description:"Button tag (default -> button)"},type:{type:String,default:"default",description:"Button type (e,g primary, danger etc)"},size:{type:String,default:"",description:"Button size lg|sm"},textColor:{type:String,default:"",description:"Button text color (e.g primary, danger etc)"},nativeType:{type:String,default:"button",description:"Button native type (e.g submit,button etc)"},icon:{type:String,default:"",description:"Button icon"},text:{type:String,default:"",description:"Button text in case not provided via default slot"},outline:{type:Boolean,default:!1,description:"Whether button style is outline"},rounded:{type:Boolean,default:!1,description:"Whether button style is rounded"},iconOnly:{type:Boolean,default:!1,description:"Whether button contains only an icon"},block:{type:Boolean,default:!1,description:"Whether button is of block type"}},computed:{classes:function(){var t=[{"btn-block":this.block},{"rounded-circle":this.rounded},{"btn-icon-only":this.iconOnly},Object(n.a)({},"text-".concat(this.textColor),this.textColor),{"btn-icon":this.icon||this.$slots.icon},this.type&&!this.outline?"btn-".concat(this.type):"",this.outline?"btn-outline-".concat(this.type):""];return this.size&&t.push("btn-".concat(this.size)),t}},methods:{handleClick:function(t){this.$emit("click",t)}}},l=o(30),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e(t.tag,{tag:"component",staticClass:"btn",class:t.classes,attrs:{type:"button"===t.tag?t.nativeType:""},on:{click:t.handleClick}},[t.$slots.icon||t.icon&&t.$slots.default?e("span",{staticClass:"btn-inner--icon"},[t._t("icon",(function(){return[e("i",{class:t.icon})]}))],2):t._e(),t._v(" "),t.$slots.default?t._e():e("i",{class:t.icon}),t._v(" "),t.$slots.icon||t.icon&&t.$slots.default?e("span",{staticClass:"btn-inner--text"},[t._t("default",(function(){return[t._v("\n        "+t._s(t.text)+"\n      ")]}))],2):t._e(),t._v(" "),t.$slots.icon||t.icon?t._e():t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},525:function(t,e,o){"use strict";o.r(e);var n=o(491),r=o(507),l={directives:{BTooltip:n.a,BPopover:r.a}},c=o(30),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("small",{staticClass:"d-block text-uppercase font-weight-bold mb-3"},[t._v("Tooltips")]),t._v(" "),e("base-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"btn-tooltip",attrs:{size:"sm",type:"primary",title:"Tooltip on left"}},[t._v("On left\n        ")]),t._v(" "),e("base-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",modifiers:{hover:!0,top:!0}}],staticClass:"btn-tooltip",attrs:{size:"sm",type:"primary",title:"Tooltip on top"}},[t._v("On top\n        ")]),t._v(" "),e("base-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],staticClass:"btn-tooltip",attrs:{size:"sm",type:"primary",title:"Tooltip on bottom"}},[t._v("On bottom\n        ")]),t._v(" "),e("base-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",modifiers:{hover:!0,right:!0}}],staticClass:"btn-tooltip",attrs:{size:"sm",type:"primary",title:"Tooltip on right"}},[t._v("On right\n        ")])],1),t._v(" "),e("div",{staticClass:"col-lg-6 mt-4 mt-lg-0"},[e("small",{staticClass:"d-block text-uppercase font-weight-bold mb-3"},[t._v("Popovers")]),t._v(" "),e("base-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.left",value:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",expression:"'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'",modifiers:{hover:!0,left:!0}}],attrs:{size:"sm",type:"default",title:"Popover On Left"}},[t._v("On left\n        ")]),t._v(" "),e("base-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.left",value:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",expression:"'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'",modifiers:{hover:!0,left:!0}}],attrs:{size:"sm",type:"default",title:"Popover On Left"}},[t._v("On left\n        ")]),t._v(" "),e("base-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.top",value:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",expression:"'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'",modifiers:{hover:!0,top:!0}}],attrs:{size:"sm",type:"default",title:"Popover On Top"}},[t._v("On top\n        ")]),t._v(" "),e("base-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.right",value:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",expression:"'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'",modifiers:{hover:!0,right:!0}}],attrs:{size:"sm",type:"default",title:"Popover On right"}},[t._v("On right\n        ")]),t._v(" "),e("base-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.bottom",value:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",expression:"'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'",modifiers:{hover:!0,bottom:!0}}],attrs:{size:"sm",type:"default",title:"Popover On bottom"}},[t._v("On bottom\n        ")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseButton:o(447).default})}}]);