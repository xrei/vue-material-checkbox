!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-material-checkbox"]=t():e["vue-material-checkbox"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";var r=n(8),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.a={directives:{ripple:r.a},model:{prop:"model",event:"change"},props:{id:{type:String,default:void 0},model:{type:String|Array,default:void 0},checked:Boolean,value:String,name:String,required:Boolean,disabled:Boolean,color:String},data:function(){return{uniqueId:""}},computed:{checkboxState:function(){return void 0===this.model?this.checked:Array.isArray(this.model)?-1!==this.model.indexOf(this.value):this.model},classes:function(){return{"checkbox-disabled":this.disabled,"checkbox-active":this.checkboxState}}},methods:{toggle:function(){if(!this.disabled){var e=this.model;if(Array.isArray(e)){e=e.slice();var t=e.indexOf(this.value);-1===t?e.push(this.value):e.splice(t,1)}else e=!this.checkboxState;this.$emit("change",e)}},genId:function(){void 0===this.id||("undefined"==typeof String?"undefined":o(String))?this.uniqueId="m-checkbox--"+Math.random().toString(36).substring(2,10):this.uniqueId=this.id}},watch:{checked:function(e){e!==this.checkboxState&&this.toggle()}},mounted:function(){this.genId(),this.checked&&!this.checkboxState&&this.toggle()}}},function(e,t,n){"use strict";function r(e){e.component("checkbox",o.a)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(2);n.d(t,"VueCheckbox",function(){return o.a})},function(e,t,n){"use strict";function r(e){n(3)}var o=n(0),i=n(9),a=n(10),c=r,s=Object(a.a)(o.a,i.a,i.b,!1,c,null,null);t.a=s.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n(6).default;o("04a35b36",r,!0,{})},function(e,t,n){t=e.exports=n(5)(),t.push([e.i,'.__ripple__container{border-radius:inherit;width:100%;height:100%;z-index:0;contain:strict}.__ripple__animation,.__ripple__container{color:inherit;position:absolute;left:0;top:0;overflow:hidden;pointer-events:none}.__ripple__animation{border-radius:50%;background:currentColor;opacity:0;transition:.4s cubic-bezier(0,0,.2,1);will-change:transform,opacity}.__ripple__animation--enter{transition:none}.__ripple__animation--visible{opacity:.15}.checkbox-ripple-container{position:absolute;width:48px;height:48px;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%}.checkbox-container{box-sizing:border-box;display:inline-flex;position:relative;margin:1rem 0;margin-right:1rem;width:100%;line-height:20px;cursor:pointer}.checkbox-container .checkbox_label{position:relative;padding-left:1rem;cursor:pointer}.checkbox-container .checkbox-group{position:relative;border-radius:2px;border:2px solid rgba(0,0,0,.54);height:20px;width:20px;min-width:20px;transition:.4s cubic-bezier(.25,.8,.25,1)}.checkbox-container .checkbox-group input[type=checkbox]{position:absolute;-webkit-appearance:none;appearance:none;left:-999rem}.checkbox-container .checkbox-group:after{content:"";position:absolute;transition:transform .25s ease;width:6px;height:13px;top:0;left:5px;z-index:6;border:2px solid #fff;border-top:0;border-left:0;opacity:0;transform:rotate(45deg) scale3D(.1,.1,.1)}.checkbox-container.checkbox-active .checkbox-group{background-color:#009688;border-color:#009688}.checkbox-container.checkbox-active .checkbox-group:after{opacity:1;transform:rotate(45deg) scale3D(1,1,1)}.checkbox-disabled{cursor:not-allowed}.checkbox-disabled .checkbox-group{opacity:.14}.checkbox-disabled .checkbox_label{opacity:.24;cursor:not-allowed}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){"use strict";function r(e,t,n,r){v=n,m=r||{};var i=Object(u.a)(e,t);return o(i),function(t){for(var n=[],r=0;r<i.length;r++){var a=i[r],c=d[a.id];c.refs--,n.push(c)}t?(i=Object(u.a)(e,t),o(i)):i=[];for(var r=0;r<n.length;r++){var c=n[r];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete d[c.id]}}}}function o(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(a(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:i}}}}function i(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function a(e){var t,n,r=document.querySelector("style["+g+'~="'+e.id+'"]');if(r){if(v)return b;r.parentNode.removeChild(r)}if(x){var o=h++;r=f||(f=i()),t=c.bind(null,r,o,!1),n=c.bind(null,r,o,!0)}else r=i(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function c(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),m.ssrId&&e.setAttribute(g,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var u=n(7),l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d={},p=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,v=!1,b=function(){},m=null,g="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),_=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],c=i[1],s=i[2],u=i[3],l={id:e+":"+o,css:c,media:s,sourceMap:u};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}t.a=r},function(e,t,n){"use strict";function r(e,t){e.style.transform=t,e.style.webkitTransform=t}function o(e){return void 0===e.value||!!e.value}function i(e,t){e.setAttribute(s,o(t)),"ontouchstart"in window&&(e.addEventListener("touchend",function(){return l(e)},!1),e.addEventListener("touchcancel",function(){return l(e)},!1)),e.addEventListener("mousedown",function(n){return u(n,e,t)},!1),e.addEventListener("mouseup",function(){return l(e)},!1),e.addEventListener("mouseleave",function(){return l(e)},!1),e.addEventListener("dragstart",function(){return l(e)},!1)}function a(e,t){e.removeEventListener("touchstart",function(n){return u(n,e,t)},!1),e.removeEventListener("mousedown",function(n){return u(n,e,t)},!1),e.removeEventListener("touchend",function(){return l(e)},!1),e.removeEventListener("touchcancel",function(){return l(e)},!1),e.removeEventListener("mouseup",function(){return l(e)},!1),e.removeEventListener("mouseleave",function(){return l(e)},!1),e.removeEventListener("dragstart",function(){return l(e)},!1)}function c(e,t){t.value!==t.oldValue&&e.setAttribute(s,o(t))}var s="data-ripple",u=function(e,t,n){var o=n.value,i=void 0===o?{}:o;if("true"===t.getAttribute(s)){var a=document.createElement("span"),c=document.createElement("span");a.appendChild(c),a.className="__ripple__container",i.class&&(a.className+=" "+i.class);var u=t.clientWidth>t.clientHeight?t.clientWidth:t.clientHeight;c.className="__ripple__animation",c.style.width=u*(i.center?1:2)+"px",c.style.height=c.style.width,t.appendChild(a);var l=window.getComputedStyle(t);"absolute"!==l.position&&"fixed"!==l.position&&(t.style.position="relative");var d=t.getBoundingClientRect(),p=i.center?"50%":e.clientX-d.left+"px",f=i.center?"50%":e.clientY-d.top+"px";c.classList.add("__ripple__animation--enter"),c.classList.add("__ripple__animation--visible"),r(c,"translate(-50%, -50%) translate("+p+", "+f+") scale3d(0.01,0.01,0.01)"),c.dataset.activated=Date.now(),setTimeout(function(){c.classList.remove("__ripple__animation--enter"),r(c,"translate(-50%, -50%) translate("+p+", "+f+")  scale3d(0.99,0.99,0.99)")},0)}},l=function(e){if("true"===e.getAttribute(s)){var t=e.getElementsByClassName("__ripple__animation");if(0!==t.length){var n=t[t.length-1],r=Date.now()-Number(n.dataset.activated),o=400-r;o=o<0?0:o,setTimeout(function(){n.classList.remove("__ripple__animation--visible"),setTimeout(function(){try{t.length<1&&(e.style.position=null),n.parentNode&&e.removeChild(n.parentNode)}catch(e){}},100)},o)}}};t.a={name:"ripple",bind:i,unbind:a,update:c}},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"checkbox-container",class:[e.classes]},[n("div",{staticClass:"checkbox-group",style:e.checkboxState?e.color&&"background-color: "+e.color+"; border-color: "+e.color+";":null,on:{click:function(t){e.toggle()}}},[n("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"checkbox-ripple-container",on:{click:function(t){e.toggle()}}},[n("input",{attrs:{type:"checkbox",id:e.id||e.uniqueId,name:e.name,disabled:e.disabled,required:e.required,color:e.color},domProps:{value:e.value,checked:e.checkboxState},on:{change:function(t){e.toggle()}}})])]),e._v(" "),n("label",{staticClass:"checkbox_label",attrs:{for:e.id||e.uniqueId}},[e._t("default")],2)])},o=[]},function(e,t,n){"use strict";function r(e,t,n,r,o,i,a,c){e=e||{};var s=typeof e.default;"object"!==s&&"function"!==s||(e=e.default);var u="function"==typeof e?e.options:e;t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId=i);var l;if(a?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=l):o&&(l=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(u.functional){u._injectStyles=l;var d=u.render;u.render=function(e,t){return l.call(t),d(e,t)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:u}}t.a=r}])});