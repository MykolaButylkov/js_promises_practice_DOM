parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=!1,e=!1,t=new Promise(function(e,t){var i=function(t){n=t,e("First promise was resolved")};document.body.addEventListener("click",i),setTimeout(function(){!1===n&&(t("First promise was rejected"),document.body.removeEventListener("click",i))},3e3)}),i=new Promise(function(t){document.body.addEventListener("contextmenu",function(i){e=i,i.preventDefault(),!1===n&&!1===e||t("Second promise was resolved")})}),o=new Promise(function(t){document.body.addEventListener("click",function(i){!1!==(n=i)&&!1!==e&&t("Third promise was resolved")}),document.body.addEventListener("contextmenu",function(i){e=i,!1!==n&&!1!==e&&t("Third promise was resolved")})});t.then(function(n){document.body.insertAdjacentHTML("afterbegin",'\n    <div data-qa="notification" class="warning">'.concat(n,"</div>"))}).catch(function(n){document.body.insertAdjacentHTML("afterbegin",'\n    <div data-qa="notification" class="succes">'.concat(n,"</div>"))}),i.then(function(n){document.body.insertAdjacentHTML("beforeend",'\n  <div data-qa="notification" class="warning">'.concat(n,"</div>"))}),o.then(function(n){document.body.insertAdjacentHTML("beforeend",'\n  <div data-qa="notification" class="warning">'.concat(n,"</div>"))});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.5741800a.js.map