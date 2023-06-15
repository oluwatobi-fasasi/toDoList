(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #d7d7d7;\n  font-family: sans-serif;\n}\n\n.input-label {\n  display: flex;\n  gap: 1rem;\n}\n\nh4 {\n  padding-left: 1rem;\n  padding-top: 1rem;\n}\n\n.add-list,\n.list {\n  border: none;\n  padding-left: 1rem;\n  width: 100%;\n}\n\n.add-list:focus,\n.list:focus {\n  outline: none;\n}\n\n.submit-form {\n  display: flex;\n  justify-content: space-between;\n  padding-right: 1rem;\n}\n\n.card {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.h4-refresh {\n  display: flex;\n  justify-content: space-between;\n  padding-right: 1rem;\n  padding-top: 1rem;\n}\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.clear {\n  margin-top: 1rem;\n  text-align: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  width: 100%;\n  border: none;\n  background-color: #eee;\n  font-size: 1.1rem;\n}\n\nnav {\n  width: 100%;\n  background-color: black;\n  height: 1rem;\n}\n\nfooter {\n  width: 100%;\n  background-color: black;\n  height: 1rem;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n}\n\n.box {\n  margin-right: 0.3rem;\n}\n\n.to-do-wrapper {\n  margin: 2rem 1rem;\n  background-color: #fff;\n}\n\n.checked {\n  text-decoration: line-through;\n}\n",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=o(e,r),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),s=n(565),c=n.n(s),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;class h{constructor(){this.toDo=JSON.parse(localStorage.getItem("toDo"))||[],this.form=document.getElementById("submit-form"),this.userInput=document.getElementById("add-list")}addToDo(e){const t={description:e,completed:!1,num:this.toDo.length+1};this.toDo.push(t),localStorage.setItem("toDo",JSON.stringify(this.toDo))}activ(){this.userInput.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),this.addToDo(this.userInput.value.trim()),window.location.reload(),this.form.reset())}))}}const g=function(e,t){e.splice(t,1);for(let t=0;t<e.length;t+=1)e[t].num=t+1;return e},v=function(e){!1===e.completed?e.completed=!0:e.completed=!1,localStorage.setItem("toDo",JSON.stringify(this.toDo))};function y(e,t,n){return e[t].description=n,localStorage.setItem("toDo",JSON.stringify(e)),e}(new class{constructor(){this.toDo=JSON.parse(localStorage.getItem("toDo"))||[],this.listContainer=document.getElementById("list-container"),this.clearAllCompleted=document.getElementById("clear")}renderToDo(){this.listContainer.innerHTML="";for(let e=0;e<this.toDo.length;e+=1){const t=this.toDo[e],n=document.createElement("div");n.classList.add("wrapper");const o=document.createElement("hr"),r=document.createElement("div");r.classList.add("card");const i=document.createElement("div");i.classList.add("input-label");const a=document.createElement("input");a.type="checkbox",a.classList.add("box");const s=document.createElement("input");s.value=`${t.description}`,s.classList.add("list");const c=document.createElement("span");c.classList.add("material-symbols-sharp"),c.textContent="more_vert";const d=document.createElement("span");d.classList.add("material-symbols-outlined"),d.textContent="delete",d.style.display="none",i.appendChild(a),i.appendChild(s),r.appendChild(i),r.appendChild(c),r.appendChild(d),n.appendChild(o),n.appendChild(r),this.listContainer.appendChild(n),c.addEventListener("click",(()=>{c.style.display="none",d.style.display="inline",d.addEventListener("click",(()=>{this.toDo=g(this.toDo,e),localStorage.setItem("toDo",JSON.stringify(this.toDo)),window.location.reload(),this.renderToDo()}))})),s.addEventListener("keyup",(n=>{if("Enter"===n.key){const n=s.value.trim();""!==n?(this.toDo=y(this.toDo,e,n),this.renderToDo()):s.value=t.description}})),a.addEventListener("change",(()=>{s.classList.toggle("checked"),v(t)}))}}init(){(new h).activ(),this.clearAllCompleted.addEventListener("click",(()=>{(e=>{e=e.filter((e=>!e.completed));for(let t=0;t<e.length;t+=1)e[t].num=t+1;localStorage.setItem("toDo",JSON.stringify(e)),window.location.reload()})(this.toDo)})),this.renderToDo()}}).init()})()})();