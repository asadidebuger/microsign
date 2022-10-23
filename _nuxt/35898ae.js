(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{473:function(t,e,n){"use strict";n.r(e);n(124);var l={name:"base-pagination",props:{pageCount:{type:Number,default:0,description:"Pagination page count. This should be specified in combination with perPage"},perPage:{type:Number,default:10,description:"Pagination per page. Should be specified with total or pageCount"},total:{type:Number,default:0,description:"Can be specified instead of pageCount. The page count in this case will be total/perPage"},value:{type:Number,default:1,description:"Pagination value"},size:{type:String,default:"",description:"Pagination size"},align:{type:String,default:"",description:"Pagination alignment (e.g center|start|end)"}},computed:{totalPages:function(){return this.pageCount>0?this.pageCount:this.total>0?Math.ceil(this.total/this.perPage):1},pagesToDisplay:function(){return this.totalPages>0&&this.totalPages<this.defaultPagesToDisplay?this.totalPages:this.defaultPagesToDisplay},minPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2);return t+this.value>this.totalPages?this.totalPages-this.pagesToDisplay+1:this.value-t}return 1},maxPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2)+this.value;return t<this.totalPages?t:this.totalPages}return this.pagesToDisplay}},data:function(){return{defaultPagesToDisplay:5}},methods:{range:function(t,e){for(var n=[],i=t;i<=e;i++)n.push(i);return n},changePage:function(t){this.$emit("input",t)},nextPage:function(){this.value<this.totalPages&&this.$emit("input",this.value+1)},prevPage:function(){this.value>1&&this.$emit("input",this.value-1)}},watch:{perPage:function(){this.$emit("input",1)},total:function(){this.$emit("input",1)}}},o=n(30),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("ul",{staticClass:"pagination",class:[t.size&&"pagination-".concat(t.size),t.align&&"justify-content-".concat(t.align)]},[e("li",{staticClass:"page-item prev-page",class:{disabled:1===t.value}},[e("a",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{click:t.prevPage}},[t._m(0)])]),t._v(" "),t._l(t.range(t.minPage,t.maxPage),(function(n){return e("li",{key:n,staticClass:"page-item",class:{active:t.value===n}},[e("a",{staticClass:"page-link",on:{click:function(e){return t.changePage(n)}}},[t._v(t._s(n))])])})),t._v(" "),e("li",{staticClass:"page-item next-page",class:{disabled:t.value===t.totalPages}},[e("a",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{click:t.nextPage}},[t._m(1)])])],2)}),[function(){var t=this._self._c;return t("span",{attrs:{"aria-hidden":"true"}},[t("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"}})])},function(){var t=this._self._c;return t("span",{attrs:{"aria-hidden":"true"}},[t("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.default=component.exports}}]);