!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-material-checkbox"]=t():e["vue-material-checkbox"]=t()}(this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function o(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=i[0],c={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(c):n.push(o[a]={id:a,parts:[c]})}return n}n.r(t),n.d(t,"default",function(){return h});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),c=null,s=0,u=!1,l=function(){},d=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,r){u=n,d=r||{};var a=o(e,t);return v(a),function(t){for(var n=[],r=0;r<a.length;r++){var c=a[r];(s=i[c.id]).refs--,n.push(s)}t?v(a=o(e,t)):a=[];for(r=0;r<n.length;r++){var s;if(0===(s=n[r]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],o=i[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(m(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var a=[];for(r=0;r<n.parts.length;r++)a.push(m(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:a}}}}function b(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function m(e){var t,n,o=document.querySelector("style["+p+'~="'+e.id+'"]');if(o){if(u)return l;o.parentNode.removeChild(o)}if(f){var r=s++;o=c||(c=b()),t=_.bind(null,o,r,!1),n=_.bind(null,o,r,!0)}else o=b(),t=function(e,t){var n=t.css,o=t.media,r=t.sourceMap;o&&e.setAttribute("media",o);d.ssrId&&e.setAttribute(p,t.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}var g,x=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function _(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t,n){"use strict";function o(e,t){e.style.transform=t,e.style.webkitTransform=t}n.r(t);var r="data-ripple",i=function(e,t,n){var i=n.value,a=void 0===i?{}:i;if("true"===t.getAttribute(r)){var c=document.createElement("span"),s=document.createElement("span");c.appendChild(s),c.className="__ripple__container",a.class&&(c.className+=" "+a.class);var u=t.clientWidth>t.clientHeight?t.clientWidth:t.clientHeight;s.className="__ripple__animation",s.style.width=u*(a.center?1:2)+"px",s.style.height=s.style.width,t.appendChild(c);var l=window.getComputedStyle(t);"absolute"!==l.position&&"fixed"!==l.position&&(t.style.position="relative");var d=t.getBoundingClientRect(),p=a.center?"50%":e.clientX-d.left+"px",f=a.center?"50%":e.clientY-d.top+"px";s.classList.add("__ripple__animation--enter"),s.classList.add("__ripple__animation--visible"),o(s,"translate(-50%, -50%) translate("+p+", "+f+") scale3d(0.01,0.01,0.01)"),s.dataset.activated=Date.now(),setTimeout(function(){s.classList.remove("__ripple__animation--enter"),o(s,"translate(-50%, -50%) translate("+p+", "+f+")  scale3d(0.99,0.99,0.99)")},0)}},a=function(e){if("true"===e.getAttribute(r)){var t=e.getElementsByClassName("__ripple__animation");if(0!==t.length){var n=t[t.length-1],o=400-(Date.now()-Number(n.dataset.activated));o=o<0?0:o,setTimeout(function(){n.classList.remove("__ripple__animation--visible"),setTimeout(function(){try{t.length<1&&(e.style.position=null),n.parentNode&&e.removeChild(n.parentNode)}catch(e){}},100)},o)}}};function c(e){return void 0===e.value||!!e.value}var s={name:"ripple",bind:function(e,t){e.setAttribute(r,c(t)),"ontouchstart"in window&&(e.addEventListener("touchend",function(){return a(e)},!1),e.addEventListener("touchcancel",function(){return a(e)},!1)),e.addEventListener("mousedown",function(n){return i(n,e,t)},!1),e.addEventListener("mouseup",function(){return a(e)},!1),e.addEventListener("mouseleave",function(){return a(e)},!1),e.addEventListener("dragstart",function(){return a(e)},!1)},unbind:function(e,t){e.removeEventListener("touchstart",function(n){return i(n,e,t)},!1),e.removeEventListener("mousedown",function(n){return i(n,e,t)},!1),e.removeEventListener("touchend",function(){return a(e)},!1),e.removeEventListener("touchcancel",function(){return a(e)},!1),e.removeEventListener("mouseup",function(){return a(e)},!1),e.removeEventListener("mouseleave",function(){return a(e)},!1),e.removeEventListener("dragstart",function(){return a(e)},!1)},update:function(e,t){t.value!==t.oldValue&&e.setAttribute(r,c(t))}},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var l=function(e,t,n,o,r,i,a,c){var s=typeof(e=e||{}).default;"object"!==s&&"function"!==s||(e=e.default);var u,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId=i),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=u):r&&(u=c?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(l.functional){l._injectStyles=u;var d=l.render;l.render=function(e,t){return u.call(t),d(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,u):[u]}return{exports:e,options:l}}({directives:{ripple:s},model:{prop:"model",event:"change"},props:{id:{type:String,default:void 0},model:{type:String|Array,default:void 0},checked:Boolean,value:String,name:String,required:Boolean,disabled:Boolean,color:String},data:function(){return{uniqueId:""}},computed:{checkboxState:function(){return void 0===this.model?this.checked:Array.isArray(this.model)?-1!==this.model.indexOf(this.value):this.model},classes:function(){return{"checkbox-disabled":this.disabled,"checkbox-active":this.checkboxState}}},methods:{toggle:function(){if(!this.disabled){var e=this.model;if(Array.isArray(e)){var t=(e=e.slice()).indexOf(this.value);-1===t?e.push(this.value):e.splice(t,1)}else e=!this.checkboxState;this.$emit("change",e)}},genId:function(){void 0===this.id||"undefined"==typeof String||u(String)?this.uniqueId="m-checkbox--"+Math.random().toString(36).substring(2,10):this.uniqueId=this.id}},watch:{checked:function(e){e!==this.checkboxState&&this.toggle()}},mounted:function(){this.genId(),this.checked&&!this.checkboxState&&this.toggle()}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"checkbox-container",class:[e.classes]},[n("div",{staticClass:"checkbox-group",style:e.checkboxState?e.color&&"background-color: "+e.color+"; border-color: "+e.color+";":null,on:{click:function(t){e.toggle()}}},[n("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"checkbox-ripple-container",on:{click:function(t){e.toggle()}}},[n("input",{attrs:{type:"checkbox",id:e.id||e.uniqueId,name:e.name,disabled:e.disabled,required:e.required,color:e.color},domProps:{value:e.value,checked:e.checkboxState},on:{change:function(t){e.toggle()}}})])]),e._v(" "),n("label",{staticClass:"checkbox_label",attrs:{for:e.id||e.uniqueId}},[e._t("default")],2)])},[],!1,function(e){n(4)},null,null).exports;function d(e){e.component("checkbox",l)}n.d(t,"default",function(){return d}),n.d(t,"VueCheckbox",function(){return l})},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,'.__ripple__container{border-radius:inherit;width:100%;height:100%;z-index:0;contain:strict}.__ripple__animation,.__ripple__container{color:inherit;position:absolute;left:0;top:0;overflow:hidden;pointer-events:none}.__ripple__animation{border-radius:50%;background:currentColor;opacity:0;transition:.4s cubic-bezier(0,0,.2,1);will-change:transform,opacity}.__ripple__animation--enter{transition:none}.__ripple__animation--visible{opacity:.15}.checkbox-ripple-container{z-index:1;position:absolute;width:48px;height:48px;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%}.checkbox-container{box-sizing:border-box;display:inline-flex;position:relative;margin:1rem 0;margin-right:1rem;width:100%;line-height:20px;cursor:pointer}.checkbox-container .checkbox_label{position:relative;padding-left:1rem;cursor:pointer}.checkbox-container .checkbox-group{position:relative;border-radius:2px;border:2px solid rgba(0,0,0,.54);height:20px;width:20px;min-width:20px;transition:.4s cubic-bezier(.25,.8,.25,1)}.checkbox-container .checkbox-group input[type=checkbox]{position:absolute;-webkit-appearance:none;appearance:none;left:-999rem}.checkbox-container:after{content:"";position:absolute;transition:transform .25s ease;width:6px;height:13px;top:0;left:5px;z-index:6;border:2px solid #fff;border-top:0;border-left:0;opacity:0;transform:rotate(45deg) scale3D(.1,.1,.1)}.checkbox-container.checkbox-active .checkbox-group{background-color:#009688;border-color:#009688}.checkbox-container.checkbox-active .checkbox-group:after{opacity:1;transform:rotate(45deg) scale3D(1,1,1)}.checkbox-disabled{cursor:not-allowed}.checkbox-disabled .checkbox-group{opacity:.14}.checkbox-disabled .checkbox_label{opacity:.24;cursor:not-allowed}',""])},function(e,t,n){var o=n(3);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(0).default)("1f75dcf8",o,!0,{})}])});