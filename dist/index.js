/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var r,t="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function da(){da=function(){};t.Symbol||(t.Symbol=ea)}var ea=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function fa(){da();var a=t.Symbol.iterator;a||(a=t.Symbol.iterator=t.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ca(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(this)}});fa=function(){}}function ha(a){var b=0;return ia(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ia(a){fa();a={next:a};a[t.Symbol.iterator]=function(){return this};return a}function ja(a){fa();var b=a[Symbol.iterator];return b?b.call(a):ha(a)}
function ka(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var la;if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={Ga:!0},oa={};try{oa.__proto__=na;ma=oa.Ga;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la;function qa(){this.f=!1;this.b=null;this.aa=void 0;this.a=1;this.F=0;this.c=null}
function ra(a){if(a.f)throw new TypeError("Generator is already running");a.f=!0}qa.prototype.u=function(a){this.aa=a};function sa(a,b){a.c={Ja:b,Na:!0};a.a=a.F}qa.prototype.return=function(a){this.c={return:a};this.a=this.F};function ta(a,b){a.a=3;return{value:b}}function ua(a){this.a=new qa;this.b=a}function va(a,b){ra(a.a);var c=a.a.b;if(c)return wa(a,"return"in c?c["return"]:function(a){return{value:a,done:!0}},b,a.a.return);a.a.return(b);return xa(a)}
function wa(a,b,c,d){try{var e=b.call(a.a.b,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.f=!1,e;var f=e.value}catch(g){return a.a.b=null,sa(a.a,g),xa(a)}a.a.b=null;d.call(a.a,f);return xa(a)}function xa(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.f=!1,{value:b.value,done:!1}}catch(c){a.a.aa=void 0,sa(a.a,c)}a.a.f=!1;if(a.a.c){b=a.a.c;a.a.c=null;if(b.Na)throw b.Ja;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ya(a){this.next=function(b){ra(a.a);a.a.b?b=wa(a,a.a.b.next,b,a.a.u):(a.a.u(b),b=xa(a));return b};this.throw=function(b){ra(a.a);a.a.b?b=wa(a,a.a.b["throw"],b,a.a.u):(sa(a.a,b),b=xa(a));return b};this.return=function(b){return va(a,b)};fa();this[Symbol.iterator]=function(){return this}}function Ba(a,b){b=new ya(new ua(b));pa&&pa(b,a.prototype);return b}
(function(){if(!function(){var a=document.createEvent("Event");a.initEvent("foo",!0,!0);a.preventDefault();return a.defaultPrevented}()){var a=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(a.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}var b=/Trident/.test(navigator.userAgent);if(!window.Event||b&&"function"!==typeof window.Event){var c=window.Event;window.Event=function(a,b){b=b||{};var c=document.createEvent("Event");
c.initEvent(a,!!b.bubbles,!!b.cancelable);return c};if(c){for(var d in c)window.Event[d]=c[d];window.Event.prototype=c.prototype}}if(!window.CustomEvent||b&&"function"!==typeof window.CustomEvent)window.CustomEvent=function(a,b){b=b||{};var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c},window.CustomEvent.prototype=window.Event.prototype;if(!window.MouseEvent||b&&"function"!==typeof window.MouseEvent){b=window.MouseEvent;window.MouseEvent=
function(a,b){b=b||{};var c=document.createEvent("MouseEvent");c.initMouseEvent(a,!!b.bubbles,!!b.cancelable,b.view||window,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget);return c};if(b)for(d in b)window.MouseEvent[d]=b[d];window.MouseEvent.prototype=b.prototype}Array.from||(Array.from=function(a){return[].slice.call(a)});Object.assign||(Object.assign=function(a,b){for(var c=[].slice.call(arguments,1),d=0,e;d<c.length;d++)if(e=c[d])for(var f=
a,n=e,q=Object.getOwnPropertyNames(n),I=0;I<q.length;I++)e=q[I],f[e]=n[e];return a})})();(function(){function a(){}function b(a,b){if(!a.childNodes.length)return[];switch(a.nodeType){case Node.DOCUMENT_NODE:return Q.call(a,b);case Node.DOCUMENT_FRAGMENT_NODE:return Eb.call(a,b);default:return x.call(a,b)}}var c="undefined"===typeof HTMLTemplateElement,d=!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment),e=!1;/Trident/.test(navigator.userAgent)&&function(){function a(a,b){if(a instanceof DocumentFragment)for(var d;d=a.firstChild;)c.call(this,d,b);else c.call(this,
a,b);return a}e=!0;var b=Node.prototype.cloneNode;Node.prototype.cloneNode=function(a){a=b.call(this,a);this instanceof DocumentFragment&&(a.__proto__=DocumentFragment.prototype);return a};DocumentFragment.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll;DocumentFragment.prototype.querySelector=HTMLElement.prototype.querySelector;Object.defineProperties(DocumentFragment.prototype,{nodeType:{get:function(){return Node.DOCUMENT_FRAGMENT_NODE},configurable:!0},localName:{get:function(){},
configurable:!0},nodeName:{get:function(){return"#document-fragment"},configurable:!0}});var c=Node.prototype.insertBefore;Node.prototype.insertBefore=a;var d=Node.prototype.appendChild;Node.prototype.appendChild=function(b){b instanceof DocumentFragment?a.call(this,b,null):d.call(this,b);return b};var f=Node.prototype.removeChild,g=Node.prototype.replaceChild;Node.prototype.replaceChild=function(b,c){b instanceof DocumentFragment?(a.call(this,b,c),f.call(this,c)):g.call(this,b,c);return c};Document.prototype.createDocumentFragment=
function(){var a=this.createElement("df");a.__proto__=DocumentFragment.prototype;return a};var h=Document.prototype.importNode;Document.prototype.importNode=function(a,b){b=h.call(this,a,b||!1);a instanceof DocumentFragment&&(b.__proto__=DocumentFragment.prototype);return b}}();var f=Node.prototype.cloneNode,g=Document.prototype.createElement,h=Document.prototype.importNode,k=Node.prototype.removeChild,l=Node.prototype.appendChild,n=Node.prototype.replaceChild,q=DOMParser.prototype.parseFromString,
I=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML")||{get:function(){return this.innerHTML},set:function(a){this.innerHTML=a}},v=Object.getOwnPropertyDescriptor(window.Node.prototype,"childNodes")||{get:function(){return this.childNodes}},x=Element.prototype.querySelectorAll,Q=Document.prototype.querySelectorAll,Eb=DocumentFragment.prototype.querySelectorAll,Fb=function(){if(!c){var a=document.createElement("template"),b=document.createElement("template");b.content.appendChild(document.createElement("div"));
a.content.appendChild(b);a=a.cloneNode(!0);return 0===a.content.childNodes.length||0===a.content.firstChild.content.childNodes.length||d}}();if(c){var T=document.implementation.createHTMLDocument("template"),Ja=!0,p=document.createElement("style");p.textContent="template{display:none;}";var za=document.head;za.insertBefore(p,za.firstElementChild);a.prototype=Object.create(HTMLElement.prototype);var aa=!document.createElement("div").hasOwnProperty("innerHTML");a.S=function(b){if(!b.content&&b.namespaceURI===
document.documentElement.namespaceURI){b.content=T.createDocumentFragment();for(var c;c=b.firstChild;)l.call(b.content,c);if(aa)b.__proto__=a.prototype;else if(b.cloneNode=function(b){return a.b(this,b)},Ja)try{m(b),y(b)}catch(vh){Ja=!1}a.a(b.content)}};var X={option:["select"],thead:["table"],col:["colgroup","table"],tr:["tbody","table"],th:["tr","tbody","table"],td:["tr","tbody","table"]},m=function(b){Object.defineProperty(b,"innerHTML",{get:function(){return ba(this)},set:function(b){var c=X[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(b)||
["",""])[1].toLowerCase()];if(c)for(var d=0;d<c.length;d++)b="<"+c[d]+">"+b+"</"+c[d]+">";T.body.innerHTML=b;for(a.a(T);this.content.firstChild;)k.call(this.content,this.content.firstChild);b=T.body;if(c)for(d=0;d<c.length;d++)b=b.lastChild;for(;b.firstChild;)l.call(this.content,b.firstChild)},configurable:!0})},y=function(a){Object.defineProperty(a,"outerHTML",{get:function(){return"<template>"+this.innerHTML+"</template>"},set:function(a){if(this.parentNode){T.body.innerHTML=a;for(a=this.ownerDocument.createDocumentFragment();T.body.firstChild;)l.call(a,
T.body.firstChild);n.call(this.parentNode,a,this)}else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");},configurable:!0})};m(a.prototype);y(a.prototype);a.a=function(c){c=b(c,"template");for(var d=0,e=c.length,f;d<e&&(f=c[d]);d++)a.S(f)};document.addEventListener("DOMContentLoaded",function(){a.a(document)});Document.prototype.createElement=function(){var b=g.apply(this,arguments);"template"===b.localName&&a.S(b);return b};DOMParser.prototype.parseFromString=
function(){var b=q.apply(this,arguments);a.a(b);return b};Object.defineProperty(HTMLElement.prototype,"innerHTML",{get:function(){return ba(this)},set:function(b){I.set.call(this,b);a.a(this)},configurable:!0,enumerable:!0});var Y=/[&\u00A0"]/g,Gb=/[&\u00A0<>]/g,Ka=function(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}};p=function(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b};var Aa=p("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
La=p("style script xmp iframe noembed noframes plaintext noscript".split(" ")),ba=function(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):v.get.call(a),e=0,f=d.length,g;e<f&&(g=d[e]);e++){a:{var h=g;var k=a;var l=b;switch(h.nodeType){case Node.ELEMENT_NODE:for(var n=h.localName,m="<"+n,q=h.attributes,x=0;k=q[x];x++)m+=" "+k.name+'="'+k.value.replace(Y,Ka)+'"';m+=">";h=Aa[n]?m:m+ba(h,l)+"</"+n+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&La[k.localName]?h:h.replace(Gb,Ka);break a;
case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),Error("not implemented");}}c+=h}return c}}if(c||Fb){a.b=function(a,b){var c=f.call(a,!1);this.S&&this.S(c);b&&(l.call(c.content,f.call(a.content,!0)),Ma(c.content,a.content));return c};var Ma=function(c,d){if(d.querySelectorAll&&(d=b(d,"template"),0!==d.length)){c=b(c,"template");for(var e=0,f=c.length,g,h;e<f;e++)h=d[e],g=c[e],a&&a.S&&a.S(h),n.call(g.parentNode,sf.call(h,!0),g)}},sf=Node.prototype.cloneNode=
function(b){if(!e&&d&&this instanceof DocumentFragment)if(b)var c=tf.call(this.ownerDocument,this,!0);else return this.ownerDocument.createDocumentFragment();else this.nodeType===Node.ELEMENT_NODE&&"template"===this.localName&&this.namespaceURI==document.documentElement.namespaceURI?c=a.b(this,b):c=f.call(this,b);b&&Ma(c,this);return c},tf=Document.prototype.importNode=function(c,d){d=d||!1;if("template"===c.localName)return a.b(c,d);var e=h.call(this,c,d);if(d){Ma(e,c);c=b(e,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
for(var f,k=0;k<c.length;k++){f=c[k];d=g.call(document,"script");d.textContent=f.textContent;for(var l=f.attributes,m=0,q;m<l.length;m++)q=l[m],d.setAttribute(q.name,q.value);n.call(f.parentNode,d,f)}}return e}}c&&(window.HTMLTemplateElement=a)})();var Ca=setTimeout;function Da(){}function Ea(a,b){return function(){a.apply(b,arguments)}}function u(a){if(!(this instanceof u))throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this.I=0;this.oa=!1;this.w=void 0;this.U=[];Fa(a,this)}
function Ga(a,b){for(;3===a.I;)a=a.w;0===a.I?a.U.push(b):(a.oa=!0,Ha(function(){var c=1===a.I?b.Pa:b.Qa;if(null===c)(1===a.I?Ia:Na)(b.ma,a.w);else{try{var d=c(a.w)}catch(e){Na(b.ma,e);return}Ia(b.ma,d)}}))}function Ia(a,b){try{if(b===a)throw new TypeError("A promise cannot be resolved with itself.");if(b&&("object"===typeof b||"function"===typeof b)){var c=b.then;if(b instanceof u){a.I=3;a.w=b;Oa(a);return}if("function"===typeof c){Fa(Ea(c,b),a);return}}a.I=1;a.w=b;Oa(a)}catch(d){Na(a,d)}}
function Na(a,b){a.I=2;a.w=b;Oa(a)}function Oa(a){2===a.I&&0===a.U.length&&Ha(function(){a.oa||"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",a.w)});for(var b=0,c=a.U.length;b<c;b++)Ga(a,a.U[b]);a.U=null}function Pa(a,b,c){this.Pa="function"===typeof a?a:null;this.Qa="function"===typeof b?b:null;this.ma=c}function Fa(a,b){var c=!1;try{a(function(a){c||(c=!0,Ia(b,a))},function(a){c||(c=!0,Na(b,a))})}catch(d){c||(c=!0,Na(b,d))}}
u.prototype["catch"]=function(a){return this.then(null,a)};u.prototype.then=function(a,b){var c=new this.constructor(Da);Ga(this,new Pa(a,b,c));return c};u.prototype["finally"]=function(a){var b=this.constructor;return this.then(function(c){return b.resolve(a()).then(function(){return c})},function(c){return b.resolve(a()).then(function(){return b.reject(c)})})};
function Qa(a){return new u(function(b,c){function d(a,g){try{if(g&&("object"===typeof g||"function"===typeof g)){var h=g.then;if("function"===typeof h){h.call(g,function(b){d(a,b)},c);return}}e[a]=g;0===--f&&b(e)}catch(n){c(n)}}if(!a||"undefined"===typeof a.length)throw new TypeError("Promise.all accepts an array");var e=Array.prototype.slice.call(a);if(0===e.length)return b([]);for(var f=e.length,g=0;g<e.length;g++)d(g,e[g])})}
function Ra(a){return a&&"object"===typeof a&&a.constructor===u?a:new u(function(b){b(a)})}function Sa(a){return new u(function(b,c){c(a)})}function Ta(a){return new u(function(b,c){for(var d=0,e=a.length;d<e;d++)a[d].then(b,c)})}var Ha="function"===typeof setImmediate&&function(a){setImmediate(a)}||function(a){Ca(a,0)};/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
if(!window.Promise){window.Promise=u;u.prototype.then=u.prototype.then;u.all=Qa;u.race=Ta;u.resolve=Ra;u.reject=Sa;var Ua=document.createTextNode(""),Va=[];(new MutationObserver(function(){for(var a=Va.length,b=0;b<a;b++)Va[b]();Va.splice(0,a)})).observe(Ua,{characterData:!0});Ha=function(a){Va.push(a);Ua.textContent=0<Ua.textContent.length?"":"a"}};/*
 Copyright (C) 2015 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function(a,b){if(!(b in a)){var c=typeof global===typeof c?window:global,d=0,e=""+Math.random(),f="__\u0001symbol@@"+e,g=a.getOwnPropertyNames,h=a.getOwnPropertyDescriptor,k=a.create,l=a.keys,n=a.freeze||a,q=a.defineProperty,I=a.defineProperties,v=h(a,"getOwnPropertyNames"),x=a.prototype,Q=x.hasOwnProperty,Eb=x.propertyIsEnumerable,Fb=x.toString,T=function(a,b,c){Q.call(a,f)||q(a,f,{enumerable:!1,configurable:!1,writable:!1,value:{}});a[f]["@@"+b]=c},Ja=function(a,b){var c=k(a);g(b).forEach(function(a){X.call(b,
a)&&Aa(c,a,b[a])});return c},p=function(){},za=function(a){return a!=f&&!Q.call(Y,a)},aa=function(a){return a!=f&&Q.call(Y,a)},X=function(a){var b=""+a;return aa(b)?Q.call(this,b)&&this[f]["@@"+b]:Eb.call(this,a)},m=function(b){q(x,b,{enumerable:!1,configurable:!0,get:p,set:function(a){ba(this,b,{enumerable:!1,configurable:!0,writable:!0,value:a});T(this,b,!0)}});return n(Y[b]=q(a(b),"constructor",Gb))},y=function(a){if(this&&this!==c)throw new TypeError("Symbol is not a constructor");return m("__\u0001symbol:".concat(a||
"",e,++d))},Y=k(null),Gb={value:y},Ka=function(a){return Y[a]},Aa=function(a,b,c){var d=""+b;if(aa(d)){b=ba;if(c.enumerable){var e=k(c);e.enumerable=!1}else e=c;b(a,d,e);T(a,d,!!c.enumerable)}else q(a,b,c);return a},La=function(a){return g(a).filter(aa).map(Ka)};v.value=Aa;q(a,"defineProperty",v);v.value=La;q(a,b,v);v.value=function(a){return g(a).filter(za)};q(a,"getOwnPropertyNames",v);v.value=function(a,b){var c=La(b);c.length?l(b).concat(c).forEach(function(c){X.call(b,c)&&Aa(a,c,b[c])}):I(a,
b);return a};q(a,"defineProperties",v);v.value=X;q(x,"propertyIsEnumerable",v);v.value=y;q(c,"Symbol",v);v.value=function(a){a="__\u0001symbol:".concat("__\u0001symbol:",a,e);return a in x?Y[a]:m(a)};q(y,"for",v);v.value=function(a){if(za(a))throw new TypeError(a+" is not a symbol");return Q.call(Y,a)?a.slice(20,-e.length):void 0};q(y,"keyFor",v);v.value=function(a,b){var c=h(a,b);c&&aa(b)&&(c.enumerable=X.call(a,b));return c};q(a,"getOwnPropertyDescriptor",v);v.value=function(a,b){return 1===arguments.length?
k(a):Ja(a,b)};q(a,"create",v);v.value=function(){var a=Fb.call(this);return"[object String]"===a&&aa(this)?"[object Symbol]":a};q(x,"toString",v);try{var ba=k(q({},"__\u0001symbol:",{get:function(){return q(this,"__\u0001symbol:",{value:!1})["__\u0001symbol:"]}}))["__\u0001symbol:"]||q}catch(Ma){ba=function(a,b,c){var d=h(x,b);delete x[b];q(a,b,c);q(x,b,d)}}}})(Object,"getOwnPropertySymbols");
(function(a){var b=a.defineProperty,c=a.prototype,d=c.toString,e;"iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(f){if(!(f in Symbol))switch(b(Symbol,f,{value:Symbol(f)}),f){case "toStringTag":e=a.getOwnPropertyDescriptor(c,"toString"),e.value=function(){var a=d.call(this),b=this[Symbol.toStringTag];return"undefined"===typeof b?a:"[object "+b+"]"},b(c,"toString",e)}})})(Object,Symbol);
(function(a,b,c){function d(){return this}b[a]||(b[a]=function(){var b=0,c=this,g={next:function(){var a=c.length<=b;return a?{done:a}:{done:a,value:c[b++]}}};g[a]=d;return g});c[a]||(c[a]=function(){var b=String.fromCodePoint,c=this,g=0,h=c.length,k={next:function(){var a=h<=g,d=a?"":b(c.codePointAt(g));g+=d.length;return a?{done:a}:{done:a,value:d}}};k[a]=d;return k})})(Symbol.iterator,Array.prototype,String.prototype);/*

Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Wa=Object.prototype.toString;Object.prototype.toString=function(){return void 0===this?"[object Undefined]":null===this?"[object Null]":Wa.call(this)};Object.keys=function(a){return Object.getOwnPropertyNames(a).filter(function(b){return(b=Object.getOwnPropertyDescriptor(a,b))&&b.enumerable})};var Xa=window.Symbol.iterator;
String.prototype[Xa]&&String.prototype.codePointAt||(String.prototype[Xa]=function Ya(){var b,c=this;return Ba(Ya,function(d){1==d.a&&(b=0);if(3!=d.a)return b<c.length?d=ta(d,c[b]):(d.a=0,d=void 0),d;b++;d.a=2})});Set.prototype[Xa]||(Set.prototype[Xa]=function Za(){var b,c=this,d;return Ba(Za,function(e){1==e.a&&(b=[],c.forEach(function(c){b.push(c)}),d=0);if(3!=e.a)return d<b.length?e=ta(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2})});
Map.prototype[Xa]||(Map.prototype[Xa]=function $a(){var b,c=this,d;return Ba($a,function(e){1==e.a&&(b=[],c.forEach(function(c,d){b.push([d,c])}),d=0);if(3!=e.a)return d<b.length?e=ta(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2})});/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.WebComponents=window.WebComponents||{flags:{}};var ab=document.querySelector('script[src*="webcomponents-bundle"]'),bb=/wc-(.+)/,w={};if(!w.noOpts){location.search.slice(1).split("&").forEach(function(a){a=a.split("=");var b;a[0]&&(b=a[0].match(bb))&&(w[b[1]]=a[1]||!0)});if(ab)for(var cb=0,db=void 0;db=ab.attributes[cb];cb++)"src"!==db.name&&(w[db.name]=db.value||!0);if(w.log&&w.log.split){var eb=w.log.split(",");w.log={};eb.forEach(function(a){w.log[a]=!0})}else w.log={}}
window.WebComponents.flags=w;var fb=w.shadydom;fb&&(window.ShadyDOM=window.ShadyDOM||{},window.ShadyDOM.force=fb);var gb=w.register||w.ce;gb&&window.customElements&&(window.customElements.forcePolyfill=gb);/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function hb(){}hb.prototype.toJSON=function(){return{}};function z(a){a.__shady||(a.__shady=new hb);return a.__shady}function A(a){return a&&a.__shady};var B=window.ShadyDOM||{};B.La=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var ib=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");B.D=!!(ib&&ib.configurable&&ib.get);B.ka=B.force||!B.La;B.M=B.noPatch||!1;B.ta=B.preferPerformance;var jb=navigator.userAgent.match("Trident");B.ya=jb;function kb(a){return(a=A(a))&&void 0!==a.firstChild}function C(a){return"ShadyRoot"===a.Da}function lb(a){return(a=(a=A(a))&&a.root)&&mb(a)}
var nb=Element.prototype,ob=nb.matches||nb.matchesSelector||nb.mozMatchesSelector||nb.msMatchesSelector||nb.oMatchesSelector||nb.webkitMatchesSelector,pb=document.createTextNode(""),qb=0,rb=[];(new MutationObserver(function(){for(;rb.length;)try{rb.shift()()}catch(a){throw pb.textContent=qb++,a;}})).observe(pb,{characterData:!0});function sb(a){rb.push(a);pb.textContent=qb++}var tb=!!document.contains;function ub(a,b){for(;b;){if(b==a)return!0;b=b.__shady_parentNode}return!1}
function vb(a){for(var b=a.length-1;0<=b;b--){var c=a[b],d=c.getAttribute("id")||c.getAttribute("name");d&&"length"!==d&&isNaN(d)&&(a[d]=c)}a.item=function(b){return a[b]};a.namedItem=function(b){if("length"!==b&&isNaN(b)&&a[b])return a[b];for(var c=ja(a),d=c.next();!d.done;d=c.next())if(d=d.value,(d.getAttribute("id")||d.getAttribute("name"))==b)return d;return null};return a}function wb(a){var b=[];for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)b.push(a);return b}
function xb(a){var b=[];for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b.push(a);return b}function D(a,b,c,d){c=void 0===c?"":c;for(var e in b){var f=b[e];if(!(d&&0<=d.indexOf(e))){f.configurable=!0;var g=c+e;if(f.value)a[g]=f.value;else try{Object.defineProperty(a,g,f)}catch(h){}}}}function E(a){var b={};Object.getOwnPropertyNames(a).forEach(function(c){b[c]=Object.getOwnPropertyDescriptor(a,c)});return b};var yb=[],zb;function Ab(a){zb||(zb=!0,sb(Bb));yb.push(a)}function Bb(){zb=!1;for(var a=!!yb.length;yb.length;)yb.shift()();return a}Bb.list=yb;function Cb(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.$=new Set}function Db(a){a.a||(a.a=!0,sb(function(){a.flush()}))}Cb.prototype.flush=function(){if(this.a){this.a=!1;var a=this.takeRecords();a.length&&this.$.forEach(function(b){b(a)})}};Cb.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
function Hb(a,b){var c=z(a);c.V||(c.V=new Cb);c.V.$.add(b);var d=c.V;return{Ca:b,P:d,Ea:a,takeRecords:function(){return d.takeRecords()}}}function Ib(a){var b=a&&a.P;b&&(b.$.delete(a.Ca),b.$.size||(z(a.Ea).V=null))}
function Jb(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode()}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a}else if(b)return a}).filter(function(a){return a})};var Kb=/[&\u00A0"]/g,Lb=/[&\u00A0<>]/g;function Mb(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}function Nb(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var Ob=Nb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),Pb=Nb("style script xmp iframe noembed noframes plaintext noscript".split(" "));
function Qb(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,g=void 0;e<f&&(g=d[e]);e++){a:{var h=g;var k=a,l=b;switch(h.nodeType){case Node.ELEMENT_NODE:k=h.localName;for(var n="<"+k,q=h.attributes,I=0,v;v=q[I];I++)n+=" "+v.name+'="'+v.value.replace(Kb,Mb)+'"';n+=">";h=Ob[k]?n:n+Qb(h,l)+"</"+k+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&Pb[k.localName]?h:h.replace(Lb,Mb);break a;case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),
Error("not implemented");}}c+=h}return c};var Rb=B.D,Sb={querySelector:function(a){return this.__shady_native_querySelector(a)},querySelectorAll:function(a){return this.__shady_native_querySelectorAll(a)}},Tb={};function Ub(a){Tb[a]=function(b){return b["__shady_native_"+a]}}function Vb(a,b){D(a,b,"__shady_native_");for(var c in b)Ub(c)}function F(a,b){b=void 0===b?[]:b;for(var c=0;c<b.length;c++){var d=b[c],e=Object.getOwnPropertyDescriptor(a,d);e&&(Object.defineProperty(a,"__shady_native_"+d,e),e.value?Sb[d]||(Sb[d]=e.value):Ub(d))}}
var G=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),H=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1),Wb=document.implementation.createHTMLDocument("inert");function Xb(a){for(var b;b=a.__shady_native_firstChild;)a.__shady_native_removeChild(b)}var Yb=["firstElementChild","lastElementChild","children","childElementCount"],Zb=["querySelector","querySelectorAll"];
function $b(){var a=["dispatchEvent","addEventListener","removeEventListener"];window.EventTarget?F(window.EventTarget.prototype,a):(F(Node.prototype,a),F(Window.prototype,a));Rb?F(Node.prototype,"parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")):Vb(Node.prototype,{parentNode:{get:function(){G.currentNode=this;return G.parentNode()}},firstChild:{get:function(){G.currentNode=this;return G.firstChild()}},lastChild:{get:function(){G.currentNode=
this;return G.lastChild()}},previousSibling:{get:function(){G.currentNode=this;return G.previousSibling()}},nextSibling:{get:function(){G.currentNode=this;return G.nextSibling()}},childNodes:{get:function(){var a=[];G.currentNode=this;for(var c=G.firstChild();c;)a.push(c),c=G.nextSibling();return a}},parentElement:{get:function(){H.currentNode=this;return H.parentNode()}},textContent:{get:function(){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(var a=document.createTreeWalker(this,
NodeFilter.SHOW_TEXT,null,!1),c="",d;d=a.nextNode();)c+=d.nodeValue;return c;default:return this.nodeValue}},set:function(a){if("undefined"===typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:Xb(this);(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_native_insertBefore(document.createTextNode(a),void 0);break;default:this.nodeValue=a}}}});F(Node.prototype,"appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
F(HTMLElement.prototype,["parentElement","contains"]);a={firstElementChild:{get:function(){H.currentNode=this;return H.firstChild()}},lastElementChild:{get:function(){H.currentNode=this;return H.lastChild()}},children:{get:function(){var a=[];H.currentNode=this;for(var c=H.firstChild();c;)a.push(c),c=H.nextSibling();return vb(a)}},childElementCount:{get:function(){return this.children?this.children.length:0}}};Rb?(F(Element.prototype,Yb),F(Element.prototype,["previousElementSibling","nextElementSibling",
"innerHTML","className"]),F(HTMLElement.prototype,["children","innerHTML","className"])):(Vb(Element.prototype,a),Vb(Element.prototype,{previousElementSibling:{get:function(){H.currentNode=this;return H.previousSibling()}},nextElementSibling:{get:function(){H.currentNode=this;return H.nextSibling()}},innerHTML:{get:function(){return Qb(this,wb)},set:function(a){var b="template"===this.localName?this.content:this;Xb(b);var d=this.localName||"div";d=this.namespaceURI&&this.namespaceURI!==Wb.namespaceURI?
Wb.createElementNS(this.namespaceURI,d):Wb.createElement(d);d.innerHTML=a;for(a="template"===this.localName?d.content:d;d=a.__shady_native_firstChild;)b.__shady_native_insertBefore(d,void 0)}},className:{get:function(){return this.getAttribute("class")||""},set:function(a){this.setAttribute("class",a)}}}));F(Element.prototype,"setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));F(Element.prototype,Zb);F(HTMLElement.prototype,["focus","blur"]);window.HTMLTemplateElement&&
F(window.HTMLTemplateElement.prototype,["innerHTML"]);Rb?F(DocumentFragment.prototype,Yb):Vb(DocumentFragment.prototype,a);F(DocumentFragment.prototype,Zb);Rb?(F(Document.prototype,Yb),F(Document.prototype,["activeElement"])):Vb(Document.prototype,a);F(Document.prototype,["importNode","getElementById"]);F(Document.prototype,Zb)};var ac=E({get childNodes(){return this.__shady_childNodes},get firstChild(){return this.__shady_firstChild},get lastChild(){return this.__shady_lastChild},get childElementCount(){return this.__shady_childElementCount},get children(){return this.__shady_children},get firstElementChild(){return this.__shady_firstElementChild},get lastElementChild(){return this.__shady_lastElementChild},get shadowRoot(){return this.__shady_shadowRoot}}),bc=E({get textContent(){return this.__shady_textContent},set textContent(a){this.__shady_textContent=
a},get innerHTML(){return this.__shady_innerHTML},set innerHTML(a){return this.__shady_innerHTML=a}}),cc=E({get parentElement(){return this.__shady_parentElement},get parentNode(){return this.__shady_parentNode},get nextSibling(){return this.__shady_nextSibling},get previousSibling(){return this.__shady_previousSibling},get nextElementSibling(){return this.__shady_nextElementSibling},get previousElementSibling(){return this.__shady_previousElementSibling},get className(){return this.__shady_className},
set className(a){return this.__shady_className=a}}),dc;for(dc in ac)ac[dc].enumerable=!1;for(var ec in bc)bc[ec].enumerable=!1;for(var fc in cc)cc[fc].enumerable=!1;var gc=B.D||B.M,hc=gc?function(){}:function(a){var b=z(a);b.Aa||(b.Aa=!0,D(a,cc))},ic=gc?function(){}:function(a){var b=z(a);b.za||(b.za=!0,D(a,ac),window.customElements&&!B.M||D(a,bc))};var jc="__eventWrappers"+Date.now(),kc=function(){var a=Object.getOwnPropertyDescriptor(Event.prototype,"composed");return a?function(b){return a.get.call(b)}:null}(),lc=function(){function a(){}var b=!1,c={get capture(){b=!0}};window.addEventListener("test",a,c);window.removeEventListener("test",a,c);return b}();function mc(a){if(a&&"object"===typeof a){var b=!!a.capture;var c=!!a.once;var d=!!a.passive;var e=a.O}else b=!!a,d=c=!1;return{ua:e,capture:b,once:c,passive:d,sa:lc?a:b}}
var nc={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,
drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},oc={DOMAttrModified:!0,DOMAttributeNameChanged:!0,DOMCharacterDataModified:!0,DOMElementNameChanged:!0,DOMNodeInserted:!0,DOMNodeInsertedIntoDocument:!0,DOMNodeRemoved:!0,DOMNodeRemovedFromDocument:!0,DOMSubtreeModified:!0};function pc(a){return a instanceof Node?a.__shady_getRootNode():a}
function qc(a,b){var c=[],d=a;for(a=pc(a);d;)c.push(d),d.__shady_assignedSlot?d=d.__shady_assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d=d.host:d=d.__shady_parentNode;c[c.length-1]===document&&c.push(window);return c}function rc(a){a.__composedPath||(a.__composedPath=qc(a.target,!0));return a.__composedPath}function sc(a,b){if(!C)return a;a=qc(a,!0);for(var c=0,d,e=void 0,f,g=void 0;c<b.length;c++)if(d=b[c],f=pc(d),f!==e&&(g=a.indexOf(f),e=f),!C(f)||-1<g)return d}
function tc(a){function b(b,d){b=new a(b,d);b.__composed=d&&!!d.composed;return b}b.__proto__=a;b.prototype=a.prototype;return b}var uc={focus:!0,blur:!0};function vc(a){return a.__target!==a.target||a.__relatedTarget!==a.relatedTarget}function wc(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&(!vc(a)||a.target!==a.relatedTarget)&&(e.call(b,a),!a.__immediatePropagationStopped);d++);}
function xc(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];wc(a,d,"capture");if(a.ga)return}Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var f=A(d);f=f&&f.root;if(0===c||f&&f===e)if(wc(a,d,"bubble"),d!==window&&(e=d.__shady_getRootNode()),a.ga)break}}
function yc(a,b,c,d,e,f){for(var g=0;g<a.length;g++){var h=a[g],k=h.type,l=h.capture,n=h.once,q=h.passive;if(b===h.node&&c===k&&d===l&&e===n&&f===q)return g}return-1}
function zc(a,b,c){var d=mc(c),e=d.capture,f=d.once,g=d.passive,h=d.ua;d=d.sa;if(b){var k=typeof b;if("function"===k||"object"===k)if("object"!==k||b.handleEvent&&"function"===typeof b.handleEvent){if(oc[a])return this.__shady_native_addEventListener(a,b,d);var l=h||this;if(h=b[jc]){if(-1<yc(h,l,a,e,f,g))return}else b[jc]=[];h=function(d){f&&this.__shady_removeEventListener(a,b,c);d.__target||Ac(d);if(l!==this){var e=Object.getOwnPropertyDescriptor(d,"currentTarget");Object.defineProperty(d,"currentTarget",
{get:function(){return l},configurable:!0})}d.__previousCurrentTarget=d.currentTarget;if(!C(l)&&"slot"!==l.localName||-1!=d.composedPath().indexOf(l))if(d.composed||-1<d.composedPath().indexOf(l))if(vc(d)&&d.target===d.relatedTarget)d.eventPhase===Event.BUBBLING_PHASE&&d.stopImmediatePropagation();else if(d.eventPhase===Event.CAPTURING_PHASE||d.bubbles||d.target===l||l instanceof Window){var g="function"===k?b.call(l,d):b.handleEvent&&b.handleEvent(d);l!==this&&(e?(Object.defineProperty(d,"currentTarget",
e),e=null):delete d.currentTarget);return g}};b[jc].push({node:l,type:a,capture:e,once:f,passive:g,ab:h});uc[a]?(this.__handlers=this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][e?"capture":"bubble"].push(h)):this.__shady_native_addEventListener(a,h,d)}}}
function Bc(a,b,c){if(b){var d=mc(c);c=d.capture;var e=d.once,f=d.passive,g=d.ua;d=d.sa;if(oc[a])return this.__shady_native_removeEventListener(a,b,d);var h=g||this;g=void 0;var k=null;try{k=b[jc]}catch(l){}k&&(e=yc(k,h,a,c,e,f),-1<e&&(g=k.splice(e,1)[0].ab,k.length||(b[jc]=void 0)));this.__shady_native_removeEventListener(a,g||b,d);g&&uc[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][c?"capture":"bubble"],b=a.indexOf(g),-1<b&&a.splice(b,1))}}
function Cc(){for(var a in uc)window.__shady_native_addEventListener(a,function(a){a.__target||(Ac(a),xc(a))},!0)}
var Dc=E({get composed(){void 0===this.__composed&&(kc?this.__composed="focusin"===this.type||"focusout"===this.type||kc(this):!1!==this.isTrusted&&(this.__composed=nc[this.type]));return this.__composed||!1},composedPath:function(){this.__composedPath||(this.__composedPath=qc(this.__target,this.composed));return this.__composedPath},get target(){return sc(this.currentTarget||this.__previousCurrentTarget,this.composedPath())},get relatedTarget(){if(!this.__relatedTarget)return null;this.__relatedTargetComposedPath||
(this.__relatedTargetComposedPath=qc(this.__relatedTarget,!0));return sc(this.currentTarget||this.__previousCurrentTarget,this.__relatedTargetComposedPath)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.ga=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);this.ga=this.__immediatePropagationStopped=!0}});
function Ac(a){a.__target=a.target;a.__relatedTarget=a.relatedTarget;if(B.D){var b=Object.getPrototypeOf(a);if(!Object.hasOwnProperty(b,"__shady_patchedProto")){var c=Object.create(b);c.__shady_sourceProto=b;D(c,Dc);b.__shady_patchedProto=c}a.__proto__=b.__shady_patchedProto}else D(a,Dc)}var Ec=tc(Event),Fc=tc(CustomEvent),Gc=tc(MouseEvent);
function Hc(){if(!kc&&Object.getOwnPropertyDescriptor(Event.prototype,"isTrusted")){var a=function(){var a=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0});this.__shady_dispatchEvent(a)};Element.prototype.click?Element.prototype.click=a:HTMLElement.prototype.click&&(HTMLElement.prototype.click=a)}}var Ic=Object.getOwnPropertyNames(Document.prototype).filter(function(a){return"on"===a.substring(0,2)});function Jc(a,b){return{index:a,W:[],Z:b}}
function Kc(a,b,c,d){var e=0,f=0,g=0,h=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(g=0;g<k;g++)if(a[g]!==c[g])break a;g=k}if(b==a.length&&d==c.length){h=a.length;for(var l=c.length,n=0;n<k-g&&Lc(a[--h],c[--l]);)n++;h=n}e+=g;f+=g;b-=h;d-=h;if(0==b-e&&0==d-f)return[];if(e==b){for(b=Jc(e,0);f<d;)b.W.push(c[f++]);return[b]}if(f==d)return[Jc(e,b-e)];k=e;g=f;d=d-g+1;h=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(h),b[l][0]=l;for(l=0;l<h;l++)b[0][l]=l;for(l=1;l<d;l++)for(n=1;n<h;n++)if(a[k+n-1]===c[g+l-1])b[l][n]=
b[l-1][n-1];else{var q=b[l-1][n]+1,I=b[l][n-1]+1;b[l][n]=q<I?q:I}k=b.length-1;g=b[0].length-1;d=b[k][g];for(a=[];0<k||0<g;)0==k?(a.push(2),g--):0==g?(a.push(3),k--):(h=b[k-1][g-1],l=b[k-1][g],n=b[k][g-1],q=l<n?l<h?l:h:n<h?n:h,q==h?(h==d?a.push(0):(a.push(1),d=h),k--,g--):q==l?(a.push(3),k--,d=l):(a.push(2),g--,d=n));a.reverse();b=void 0;k=[];for(g=0;g<a.length;g++)switch(a[g]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=Jc(e,0));b.Z++;e++;b.W.push(c[f]);f++;break;case 2:b||(b=Jc(e,0));
b.Z++;e++;break;case 3:b||(b=Jc(e,0)),b.W.push(c[f]),f++}b&&k.push(b);return k}function Lc(a,b){return a===b};function Mc(a,b,c,d){hc(a);d=d||null;var e=z(a),f=d?z(d):null;e.previousSibling=d?f.previousSibling:b.__shady_lastChild;if(f=A(e.previousSibling))f.nextSibling=a;if(f=A(e.nextSibling=d))f.previousSibling=a;e.parentNode=b;d?d===c.firstChild&&(c.firstChild=a):(c.lastChild=a,c.firstChild||(c.firstChild=a));c.childNodes=null}
function Nc(a,b,c){ic(b);var d=z(b);void 0!==d.firstChild&&(d.childNodes=null);if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE)for(a=a.__shady_native_firstChild;a;a=a.__shady_native_nextSibling)Mc(a,b,d,c);else Mc(a,b,d,c)}
function Oc(a,b){var c=z(a);b=z(b);a===b.firstChild&&(b.firstChild=c.nextSibling);a===b.lastChild&&(b.lastChild=c.previousSibling);a=c.previousSibling;var d=c.nextSibling;a&&(z(a).nextSibling=d);d&&(z(d).previousSibling=a);c.parentNode=c.previousSibling=c.nextSibling=void 0;void 0!==b.childNodes&&(b.childNodes=null)}
function Pc(a,b){var c=z(a);if(b||void 0===c.firstChild){c.childNodes=null;var d=c.firstChild=a.__shady_native_firstChild;c.lastChild=a.__shady_native_lastChild;ic(a);c=d;for(d=void 0;c;c=c.__shady_native_nextSibling){var e=z(c);e.parentNode=b||a;e.nextSibling=c.__shady_native_nextSibling;e.previousSibling=d||null;d=c;hc(c)}}};var Qc=null;function Rc(){Qc||(Qc=window.ShadyCSS&&window.ShadyCSS.ScopingShim);return Qc||null}function Sc(a,b){var c=Rc();c&&c.unscopeNode(a,b)}function Tc(a,b){var c=Rc();if(!c)return!0;if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){c=!0;for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)c=c&&Tc(a,b);return c}return a.nodeType!==Node.ELEMENT_NODE?!0:c.currentScopeForNode(a)===b}function Uc(a){if(a.nodeType!==Node.ELEMENT_NODE)return"";var b=Rc();return b?b.currentScopeForNode(a):""}
function Vc(a,b){if(a)for(a.nodeType===Node.ELEMENT_NODE&&b(a),a=a.__shady_firstChild;a;a=a.__shady_nextSibling)a.nodeType===Node.ELEMENT_NODE&&Vc(a,b)};var Wc=window.document,Xc=B.ta,Yc=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected"),Zc=Yc&&Yc.get;function $c(a){for(var b;b=a.__shady_firstChild;)a.__shady_removeChild(b)}function ad(a){var b=A(a);if(b&&void 0!==b.ca)for(b=a.__shady_firstChild;b;b=b.__shady_nextSibling)ad(b);if(a=A(a))a.ca=void 0}function bd(a){var b=a;a&&"slot"===a.localName&&(b=(b=(b=A(a))&&b.T)&&b.length?b[0]:bd(a.__shady_nextSibling));return b}
function cd(a,b,c){if(a=(a=A(a))&&a.V)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),Db(a)}
var gd=E({get parentNode(){var a=A(this);a=a&&a.parentNode;return void 0!==a?a:this.__shady_native_parentNode},get firstChild(){var a=A(this);a=a&&a.firstChild;return void 0!==a?a:this.__shady_native_firstChild},get lastChild(){var a=A(this);a=a&&a.lastChild;return void 0!==a?a:this.__shady_native_lastChild},get nextSibling(){var a=A(this);a=a&&a.nextSibling;return void 0!==a?a:this.__shady_native_nextSibling},get previousSibling(){var a=A(this);a=a&&a.previousSibling;return void 0!==a?a:this.__shady_native_previousSibling},
get childNodes(){if(kb(this)){var a=A(this);if(!a.childNodes){a.childNodes=[];for(var b=this.__shady_firstChild;b;b=b.__shady_nextSibling)a.childNodes.push(b)}var c=a.childNodes}else c=this.__shady_native_childNodes;c.item=function(a){return c[a]};return c},get parentElement(){var a=A(this);(a=a&&a.parentNode)&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:this.__shady_native_parentElement},get isConnected(){if(Zc&&Zc.call(this))return!0;if(this.nodeType==Node.DOCUMENT_FRAGMENT_NODE)return!1;
var a=this.ownerDocument;if(tb){if(a.__shady_native_contains(this))return!0}else if(a.documentElement&&a.documentElement.__shady_native_contains(this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.__shady_parentNode||(C(a)?a.host:void 0);return!!(a&&a instanceof Document)},get textContent(){if(kb(this)){for(var a=[],b=this.__shady_firstChild;b;b=b.__shady_nextSibling)b.nodeType!==Node.COMMENT_NODE&&a.push(b.__shady_textContent);return a.join("")}return this.__shady_native_textContent},set textContent(a){if("undefined"===
typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:if(!kb(this)&&B.D){var b=this.__shady_firstChild;(b!=this.__shady_lastChild||b&&b.nodeType!=Node.TEXT_NODE)&&$c(this);this.__shady_native_textContent=a}else $c(this),(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_insertBefore(document.createTextNode(a));break;default:this.nodeValue=a}},insertBefore:function(a,b){if(this.ownerDocument!==Wc&&a.ownerDocument!==Wc)return this.__shady_native_insertBefore(a,
b),a;if(a===this)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(b){var c=A(b);c=c&&c.parentNode;if(void 0!==c&&c!==this||void 0===c&&b.__shady_native_parentNode!==this)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(b===a)return a;var d=[],e=(c=dd(this))?c.host.localName:Uc(this),f=a.__shady_parentNode;if(f){var g=Uc(a);var h=!!c||!dd(a)||Xc&&void 0!==
this.__noInsertionPoint;f.__shady_removeChild(a,h)}f=!0;var k=(!Xc||void 0===a.__noInsertionPoint&&void 0===this.__noInsertionPoint)&&!Tc(a,e),l=c&&!a.__noInsertionPoint&&(!Xc||a.nodeType===Node.DOCUMENT_FRAGMENT_NODE);if(l||k)k&&(g=g||Uc(a)),Vc(a,function(a){l&&"slot"===a.localName&&d.push(a);if(k){var b=g;Rc()&&(b&&Sc(a,b),(b=Rc())&&b.scopeNode(a,e))}});d.length&&(ed(c),c.c.push.apply(c.c,d instanceof Array?d:ka(ja(d))),J(c));kb(this)&&(Nc(a,this,b),c=A(this),lb(this)?(J(c.root),f=!1):c.root&&(f=
!1));f?(c=C(this)?this.host:this,b?(b=bd(b),c.__shady_native_insertBefore(a,b)):c.__shady_native_appendChild(a)):a.ownerDocument!==this.ownerDocument&&this.ownerDocument.adoptNode(a);cd(this,a);return a},appendChild:function(a){if(this!=a||!C(a))return this.__shady_insertBefore(a)},removeChild:function(a,b){b=void 0===b?!1:b;if(this.ownerDocument!==Wc)return this.__shady_native_removeChild(a);if(a.__shady_parentNode!==this)throw Error("The node to be removed is not a child of this node: "+a);var c=
dd(a),d=c&&fd(c,a),e=A(this);if(kb(this)&&(Oc(a,this),lb(this))){J(e.root);var f=!0}if(Rc()&&!b&&c&&a.nodeType!==Node.TEXT_NODE){var g=Uc(a);Vc(a,function(a){Sc(a,g)})}ad(a);c&&((b=this&&"slot"===this.localName)&&(f=!0),(d||b)&&J(c));f||(f=C(this)?this.host:this,(!e.root&&"slot"!==a.localName||f===a.__shady_native_parentNode)&&f.__shady_native_removeChild(a));cd(this,null,a);return a},replaceChild:function(a,b){this.__shady_insertBefore(a,b);this.__shady_removeChild(b);return a},cloneNode:function(a){if("template"==
this.localName)return this.__shady_native_cloneNode(a);var b=this.__shady_native_cloneNode(!1);if(a&&b.nodeType!==Node.ATTRIBUTE_NODE){a=this.__shady_firstChild;for(var c;a;a=a.__shady_nextSibling)c=a.__shady_cloneNode(!0),b.__shady_appendChild(c)}return b},getRootNode:function(a){if(this&&this.nodeType){var b=z(this),c=b.ca;void 0===c&&(C(this)?(c=this,b.ca=c):(c=(c=this.__shady_parentNode)?c.__shady_getRootNode(a):this,document.documentElement.__shady_native_contains(this)&&(b.ca=c)));return c}},
contains:function(a){return ub(this,a)}});function hd(a,b,c){var d=[];id(a,b,c,d);return d}function id(a,b,c,d){for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling){var e;if(e=a.nodeType===Node.ELEMENT_NODE){e=a;var f=b,g=c,h=d,k=f(e);k&&h.push(e);g&&g(k)?e=k:(id(e,f,g,h),e=void 0)}if(e)break}}
var jd=E({get firstElementChild(){var a=A(this);if(a&&void 0!==a.firstChild){for(a=this.__shady_firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_firstElementChild},get lastElementChild(){var a=A(this);if(a&&void 0!==a.lastChild){for(a=this.__shady_lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_lastElementChild},get children(){return kb(this)?vb(Array.prototype.filter.call(xb(this),
function(a){return a.nodeType===Node.ELEMENT_NODE})):this.__shady_native_children},get childElementCount(){var a=this.__shady_children;return a?a.length:0}}),kd=E({querySelector:function(a){return hd(this,function(b){return ob.call(b,a)},function(a){return!!a})[0]||null},querySelectorAll:function(a,b){if(b){b=Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));var c=this.__shady_getRootNode();return b.filter(function(a){return a.__shady_getRootNode()==c})}return hd(this,function(b){return ob.call(b,
a)})}}),ld=B.ta&&!B.M?Object.assign({},jd):jd;Object.assign(jd,kd);var md=E({getElementById:function(a){return""===a?null:hd(this,function(b){return b.id==a},function(a){return!!a})[0]||null}});var nd=E({get activeElement(){var a=B.D?document.__shady_native_activeElement:document.activeElement;if(!a||!a.nodeType)return null;var b=!!C(this);if(!(this===document||b&&this.host!==a&&this.host.__shady_native_contains(a)))return null;for(b=dd(a);b&&b!==this;)a=b.host,b=dd(a);return this===document?b?null:a:b===this?a:null}});var od=document.implementation.createHTMLDocument("inert"),pd=E({get innerHTML(){return kb(this)?Qb("template"===this.localName?this.content:this,xb):this.__shady_native_innerHTML},set innerHTML(a){if("template"===this.localName)this.__shady_native_innerHTML=a;else{$c(this);var b=this.localName||"div";b=this.namespaceURI&&this.namespaceURI!==od.namespaceURI?od.createElementNS(this.namespaceURI,b):od.createElement(b);for(B.D?b.__shady_native_innerHTML=a:b.innerHTML=a;a=b.__shady_firstChild;)this.__shady_insertBefore(a)}}});var qd=E({addEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.O=c.O||this;this.host.__shady_addEventListener(a,b,c)},removeEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.O=c.O||this;this.host.__shady_removeEventListener(a,b,c)}});function rd(a,b){D(a,qd,b);D(a,nd,b);D(a,pd,b);D(a,jd,b);B.M&&!b?(D(a,gd,b),D(a,md,b)):B.D||(D(a,cc),D(a,ac),D(a,bc))};var sd={},td=B.deferConnectionCallbacks&&"loading"===document.readyState,ud;function vd(a){var b=[];do b.unshift(a);while(a=a.__shady_parentNode);return b}function wd(a,b,c){if(a!==sd)throw new TypeError("Illegal constructor");this.a=null;xd(this,b,c)}
function xd(a,b,c){a.Da="ShadyRoot";a.host=b;a.mode=c&&c.mode;Pc(a.host);b=z(a.host);b.root=a;b.Ta="closed"!==a.mode?a:null;b=z(a);b.firstChild=b.lastChild=b.parentNode=b.nextSibling=b.previousSibling=null;if(B.preferPerformance)for(;b=a.host.__shady_native_firstChild;)a.host.__shady_native_removeChild(b);else J(a)}function J(a){a.R||(a.R=!0,Ab(function(){return yd(a)}))}
function yd(a){var b;if(b=a.R){for(var c;a;)a:{a.R&&(c=a),b=a;a=b.host.__shady_getRootNode();if(C(a)&&(b=A(b.host))&&0<b.Y)break a;a=void 0}b=c}(c=b)&&c._renderSelf()}
wd.prototype._renderSelf=function(){var a=td;td=!0;this.R=!1;if(this.a){zd(this);for(var b=0,c;b<this.a.length;b++){c=this.a[b];var d=A(c),e=d.assignedNodes;d.assignedNodes=[];d.T=[];if(d.qa=e)for(d=0;d<e.length;d++){var f=A(e[d]);f.ha=f.assignedSlot;f.assignedSlot===c&&(f.assignedSlot=null)}}for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)Ad(this,b);for(b=0;b<this.a.length;b++){c=this.a[b];e=A(c);if(!e.assignedNodes.length)for(d=c.__shady_firstChild;d;d=d.__shady_nextSibling)Ad(this,
d,c);(d=(d=A(c.__shady_parentNode))&&d.root)&&(mb(d)||d.R)&&d._renderSelf();Bd(this,e.T,e.assignedNodes);if(d=e.qa){for(f=0;f<d.length;f++)A(d[f]).ha=null;e.qa=null;d.length>e.assignedNodes.length&&(e.ja=!0)}e.ja&&(e.ja=!1,Cd(this,c))}c=this.a;b=[];for(e=0;e<c.length;e++)d=c[e].__shady_parentNode,(f=A(d))&&f.root||!(0>b.indexOf(d))||b.push(d);for(c=0;c<b.length;c++){f=b[c];e=f===this?this.host:f;d=[];for(f=f.__shady_firstChild;f;f=f.__shady_nextSibling)if("slot"==f.localName)for(var g=A(f).T,h=0;h<
g.length;h++)d.push(g[h]);else d.push(f);f=wb(e);g=Kc(d,d.length,f,f.length);for(var k=h=0,l=void 0;h<g.length&&(l=g[h]);h++){for(var n=0,q=void 0;n<l.W.length&&(q=l.W[n]);n++)q.__shady_native_parentNode===e&&e.__shady_native_removeChild(q),f.splice(l.index+k,1);k-=l.Z}k=0;for(l=void 0;k<g.length&&(l=g[k]);k++)for(h=f[l.index],n=l.index;n<l.index+l.Z;n++)q=d[n],e.__shady_native_insertBefore(q,h),f.splice(n,0,q)}}if(!B.preferPerformance&&!this.pa)for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)c=
A(b),b.__shady_native_parentNode!==this.host||"slot"!==b.localName&&c.assignedSlot||this.host.__shady_native_removeChild(b);this.pa=!0;td=a;ud&&ud()};function Ad(a,b,c){var d=z(b),e=d.ha;d.ha=null;c||(c=(a=a.b[b.__shady_slot||"__catchall"])&&a[0]);c?(z(c).assignedNodes.push(b),d.assignedSlot=c):d.assignedSlot=void 0;e!==d.assignedSlot&&d.assignedSlot&&(z(d.assignedSlot).ja=!0)}
function Bd(a,b,c){for(var d=0,e=void 0;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=A(e).assignedNodes;f&&f.length&&Bd(a,b,f)}else b.push(c[d])}function Cd(a,b){b.__shady_native_dispatchEvent(new Event("slotchange"));b=A(b);b.assignedSlot&&Cd(a,b.assignedSlot)}function ed(a){a.c=a.c||[];a.a=a.a||[];a.b=a.b||{}}
function zd(a){if(a.c&&a.c.length){for(var b=a.c,c,d=0;d<b.length;d++){var e=b[d];Pc(e);var f=e.__shady_parentNode;Pc(f);f=A(f);f.Y=(f.Y||0)+1;f=Dd(e);a.b[f]?(c=c||{},c[f]=!0,a.b[f].push(e)):a.b[f]=[e];a.a.push(e)}if(c)for(var g in c)a.b[g]=Ed(a.b[g]);a.c=[]}}function Dd(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.Ba=b}
function Ed(a){return a.sort(function(a,c){a=vd(a);for(var b=vd(c),e=0;e<a.length;e++){c=a[e];var f=b[e];if(c!==f)return a=xb(c.__shady_parentNode),a.indexOf(c)-a.indexOf(f)}})}
function fd(a,b){if(a.a){zd(a);var c=a.b,d;for(d in c)for(var e=c[d],f=0;f<e.length;f++){var g=e[f];if(ub(b,g)){e.splice(f,1);var h=a.a.indexOf(g);0<=h&&(a.a.splice(h,1),(h=A(g.__shady_parentNode))&&h.Y&&h.Y--);f--;g=A(g);if(h=g.T)for(var k=0;k<h.length;k++){var l=h[k],n=l.__shady_native_parentNode;n&&n.__shady_native_removeChild(l)}g.T=[];g.assignedNodes=[];h=!0}}return h}}function mb(a){zd(a);return!(!a.a||!a.a.length)}
(function(a){a.__proto__=DocumentFragment.prototype;rd(a,"__shady_");rd(a);Object.defineProperties(a,{nodeType:{value:Node.DOCUMENT_FRAGMENT_NODE,configurable:!0},nodeName:{value:"#document-fragment",configurable:!0},nodeValue:{value:null,configurable:!0}});["localName","namespaceURI","prefix"].forEach(function(b){Object.defineProperty(a,b,{value:void 0,configurable:!0})});["ownerDocument","baseURI","isConnected"].forEach(function(b){Object.defineProperty(a,b,{get:function(){return this.host[b]},
configurable:!0})})})(wd.prototype);
if(window.customElements&&B.ka&&!B.preferPerformance){var Fd=new Map;ud=function(){var a=[];Fd.forEach(function(b,c){a.push([c,b])});Fd.clear();for(var b=0;b<a.length;b++){var c=a[b][0];a[b][1]?c.__shadydom_connectedCallback():c.__shadydom_disconnectedCallback()}};td&&document.addEventListener("readystatechange",function(){td=!1;ud()},{once:!0});var Gd=function(a,b,c){var d=0,e="__isConnected"+d++;if(b||c)a.prototype.connectedCallback=a.prototype.__shadydom_connectedCallback=function(){td?Fd.set(this,
!0):this[e]||(this[e]=!0,b&&b.call(this))},a.prototype.disconnectedCallback=a.prototype.__shadydom_disconnectedCallback=function(){td?this.isConnected||Fd.set(this,!1):this[e]&&(this[e]=!1,c&&c.call(this))};return a},Hd=window.customElements.define,define=function(a,b){var c=b.prototype.connectedCallback,d=b.prototype.disconnectedCallback;Hd.call(window.customElements,a,Gd(b,c,d));b.prototype.connectedCallback=c;b.prototype.disconnectedCallback=d};window.customElements.define=define;Object.defineProperty(window.CustomElementRegistry.prototype,
"define",{value:define,configurable:!0})}function dd(a){a=a.__shady_getRootNode();if(C(a))return a};function Id(a){this.node=a}r=Id.prototype;r.addEventListener=function(a,b,c){return this.node.__shady_addEventListener(a,b,c)};r.removeEventListener=function(a,b,c){return this.node.__shady_removeEventListener(a,b,c)};r.appendChild=function(a){return this.node.__shady_appendChild(a)};r.insertBefore=function(a,b){return this.node.__shady_insertBefore(a,b)};r.removeChild=function(a){return this.node.__shady_removeChild(a)};r.replaceChild=function(a,b){return this.node.__shady_replaceChild(a,b)};
r.cloneNode=function(a){return this.node.__shady_cloneNode(a)};r.getRootNode=function(a){return this.node.__shady_getRootNode(a)};r.contains=function(a){return this.node.__shady_contains(a)};r.dispatchEvent=function(a){return this.node.__shady_dispatchEvent(a)};r.setAttribute=function(a,b){this.node.__shady_setAttribute(a,b)};r.getAttribute=function(a){return this.node.__shady_native_getAttribute(a)};r.hasAttribute=function(a){return this.node.__shady_native_hasAttribute(a)};r.removeAttribute=function(a){this.node.__shady_removeAttribute(a)};
r.attachShadow=function(a){return this.node.__shady_attachShadow(a)};r.focus=function(){this.node.__shady_native_focus()};r.blur=function(){this.node.__shady_blur()};r.importNode=function(a,b){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_importNode(a,b)};r.getElementById=function(a){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_getElementById(a)};r.querySelector=function(a){return this.node.__shady_querySelector(a)};
r.querySelectorAll=function(a,b){return this.node.__shady_querySelectorAll(a,b)};r.assignedNodes=function(a){if("slot"===this.node.localName)return this.node.__shady_assignedNodes(a)};
t.Object.defineProperties(Id.prototype,{activeElement:{configurable:!0,enumerable:!0,get:function(){if(C(this.node)||this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_activeElement}},_activeElement:{configurable:!0,enumerable:!0,get:function(){return this.activeElement}},host:{configurable:!0,enumerable:!0,get:function(){if(C(this.node))return this.node.host}},parentNode:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_parentNode}},firstChild:{configurable:!0,
enumerable:!0,get:function(){return this.node.__shady_firstChild}},lastChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastChild}},nextSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextSibling}},previousSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousSibling}},childNodes:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childNodes}},parentElement:{configurable:!0,enumerable:!0,
get:function(){return this.node.__shady_parentElement}},firstElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_firstElementChild}},lastElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastElementChild}},nextElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextElementSibling}},previousElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousElementSibling}},
children:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_children}},childElementCount:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childElementCount}},shadowRoot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_shadowRoot}},assignedSlot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_assignedSlot}},isConnected:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_isConnected}},innerHTML:{configurable:!0,
enumerable:!0,get:function(){return this.node.__shady_innerHTML},set:function(a){this.node.__shady_innerHTML=a}},textContent:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_textContent},set:function(a){this.node.__shady_textContent=a}},slot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_slot},set:function(a){this.node.__shady_slot=a}},className:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_className},set:function(a){return this.node.__shady_className=
a}}});Ic.forEach(function(a){Object.defineProperty(Id.prototype,a,{get:function(){return this.node["__shady_"+a]},set:function(b){this.node["__shady_"+a]=b},configurable:!0})});var Jd=new WeakMap;function Kd(a){if(C(a)||a instanceof Id)return a;var b=Jd.get(a);b||(b=new Id(a),Jd.set(a,b));return b};var Ld=E({dispatchEvent:function(a){Bb();return this.__shady_native_dispatchEvent(a)},addEventListener:zc,removeEventListener:Bc});var Md=E({get assignedSlot(){var a=this.__shady_parentNode;(a=a&&a.__shady_shadowRoot)&&yd(a);return(a=A(this))&&a.assignedSlot||null}});var Nd=window.document;function Od(a,b){if("slot"===b)a=a.__shady_parentNode,lb(a)&&J(A(a).root);else if("slot"===a.localName&&"name"===b&&(b=dd(a))){if(b.a){zd(b);var c=a.Ba,d=Dd(a);if(d!==c){c=b.b[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.b[d]||(b.b[d]=[]);c.push(a);1<c.length&&(b.b[d]=Ed(c))}}J(b)}}
var Pd=E({get previousElementSibling(){var a=A(this);if(a&&void 0!==a.previousSibling){for(a=this.__shady_previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_previousElementSibling},get nextElementSibling(){var a=A(this);if(a&&void 0!==a.nextSibling){for(a=this.__shady_nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_nextElementSibling},get slot(){return this.getAttribute("slot")},
set slot(a){this.__shady_setAttribute("slot",a)},get shadowRoot(){var a=A(this);return a&&a.Ta||null},get className(){return this.getAttribute("class")||""},set className(a){this.__shady_setAttribute("class",a)},setAttribute:function(a,b){if(this.ownerDocument!==Nd)this.__shady_native_setAttribute(a,b);else{var c;(c=Rc())&&"class"===a?(c.setElementClass(this,b),c=!0):c=!1;c||(this.__shady_native_setAttribute(a,b),Od(this,a))}},removeAttribute:function(a){this.__shady_native_removeAttribute(a);Od(this,
a)},attachShadow:function(a){if(!this)throw Error("Must provide a host.");if(!a)throw Error("Not enough arguments.");if(a.shadyUpgradeFragment&&!B.ya){var b=a.shadyUpgradeFragment;b.__proto__=ShadowRoot.prototype;xd(b,this,a);Pc(b,b);a=b.__noInsertionPoint?null:b.querySelectorAll("slot");b.__noInsertionPoint=void 0;if(a&&a.length){var c=b;ed(c);c.c.push.apply(c.c,a instanceof Array?a:ka(ja(a)));J(b)}b.host.__shady_native_appendChild(b)}else b=new wd(sd,this,a);return b}});var Qd=E({blur:function(){var a=A(this);(a=(a=a&&a.root)&&a.activeElement)?a.__shady_blur():this.__shady_native_blur()}});Ic.forEach(function(a){Qd[a]={set:function(b){var c=z(this),d=a.substring(2);c.N||(c.N={});c.N[a]&&this.removeEventListener(d,c.N[a]);this.__shady_addEventListener(d,b);c.N[a]=b},get:function(){var b=A(this);return b&&b.N&&b.N[a]},configurable:!0}});var Rd=E({assignedNodes:function(a){if("slot"===this.localName){var b=this.__shady_getRootNode();b&&C(b)&&yd(b);return(b=A(this))?(a&&a.flatten?b.T:b.assignedNodes)||[]:[]}},addEventListener:function(a,b,c){if("slot"!==this.localName||"slotchange"===a)zc.call(this,a,b,c);else{"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.O=this;d.__shady_addEventListener(a,b,c)}},removeEventListener:function(a,
b,c){if("slot"!==this.localName||"slotchange"===a)Bc.call(this,a,b,c);else{"object"!==typeof c&&(c={capture:!!c});var d=this.__shady_parentNode;if(!d)throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.O=this;d.__shady_removeEventListener(a,b,c)}}});var Sd=window.document,Td=E({importNode:function(a,b){if(a.ownerDocument!==Sd||"template"===a.localName)return this.__shady_native_importNode(a,b);var c=this.__shady_native_importNode(a,!1);if(b)for(a=a.__shady_firstChild;a;a=a.__shady_nextSibling)b=this.__shady_importNode(a,!0),c.__shady_appendChild(b);return c}});var Ud=E({addEventListener:zc.bind(window),removeEventListener:Bc.bind(window)});var Vd={};Object.getOwnPropertyDescriptor(HTMLElement.prototype,"parentElement")&&(Vd.parentElement=gd.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"contains")&&(Vd.contains=gd.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"children")&&(Vd.children=jd.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML")&&(Vd.innerHTML=pd.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"className")&&(Vd.className=Pd.className);
var Wd={EventTarget:[Ld],Node:[gd,window.EventTarget?null:Ld],Text:[Md],Element:[Pd,jd,Md,!B.D||"innerHTML"in Element.prototype?pd:null,window.HTMLSlotElement?null:Rd],HTMLElement:[Qd,Vd],HTMLSlotElement:[Rd],DocumentFragment:[ld,md],Document:[Td,ld,md,nd],Window:[Ud]},Xd=B.D?null:["innerHTML","textContent"];function Yd(a){var b=a?null:Xd,c={},d;for(d in Wd)c.ea=window[d]&&window[d].prototype,Wd[d].forEach(function(c){return function(d){return c.ea&&d&&D(c.ea,d,a,b)}}(c)),c={ea:c.ea}};if(B.ka){var ShadyDOM={inUse:B.ka,patch:function(a){ic(a);hc(a);return a},isShadyRoot:C,enqueue:Ab,flush:Bb,flushInitial:function(a){!a.pa&&a.R&&yd(a)},settings:B,filterMutations:Jb,observeChildren:Hb,unobserveChildren:Ib,deferConnectionCallbacks:B.deferConnectionCallbacks,preferPerformance:B.preferPerformance,handlesDynamicScoping:!0,wrap:B.M?Kd:function(a){return a},Wrapper:Id,composedPath:rc,noPatch:B.M,nativeMethods:Sb,nativeTree:Tb};window.ShadyDOM=ShadyDOM;$b();Yd("__shady_");Object.defineProperty(document,
"_activeElement",nd.activeElement);D(Window.prototype,Ud,"__shady_");B.M||(Yd(),Hc());Cc();window.Event=Ec;window.CustomEvent=Fc;window.MouseEvent=Gc;window.ShadowRoot=wd};var Zd=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function $d(a){var b=Zd.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return!b&&a}function K(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}
function ae(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function be(a,b,c){c=void 0===c?new Set:c;for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)be(d,b,c);d=ae(a,e);continue}else if("template"===f){d=ae(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)be(e,b,c)}d=d.firstChild?d.firstChild:ae(a,d)}}function L(a,b,c){a[b]=c};function ce(){this.a=new Map;this.u=new Map;this.c=[];this.f=[];this.b=!1}function de(a,b,c){a.a.set(b,c);a.u.set(c.constructorFunction,c)}function ee(a,b){a.b=!0;a.c.push(b)}function fe(a,b){a.b=!0;a.f.push(b)}function ge(a,b){a.b&&be(b,function(b){return he(a,b)})}function he(a,b){if(a.b&&!b.__CE_patched){b.__CE_patched=!0;for(var c=0;c<a.c.length;c++)a.c[c](b);for(c=0;c<a.f.length;c++)a.f[c](b)}}
function M(a,b){var c=[];be(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):ie(a,d)}}function N(a,b){var c=[];be(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d)}}
function O(a,b,c){c=void 0===c?{}:c;var d=c.$a||new Set,e=c.fa||function(b){return ie(a,b)},f=[];be(b,function(b){if("link"===b.localName&&"import"===b.getAttribute("rel")){var c=b.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0);c&&"complete"===c.readyState?c.__CE_documentLoadHandled=!0:b.addEventListener("load",function(){var c=b.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var f=new Set(d);f.delete(c);O(a,c,{$a:f,fa:e})}})}else f.push(b)},d);
if(a.b)for(b=0;b<f.length;b++)he(a,f[b]);for(b=0;b<f.length;b++)e(f[b])}
function ie(a,b){if(void 0===b.__CE_state){var c=b.ownerDocument;if(c.defaultView||c.__CE_isImportDocument&&c.__CE_hasRegistry)if(c=a.a.get(b.localName)){c.constructionStack.push(b);var d=c.constructorFunction;try{try{if(new d!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop()}}catch(g){throw b.__CE_state=2,g;}b.__CE_state=1;b.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=
c[d],f=b.getAttribute(e);null!==f&&a.attributeChangedCallback(b,e,null,f,null)}K(b)&&a.connectedCallback(b)}}}ce.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a)};ce.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a)};
ce.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,c,d,e)};function je(a){var b=document;this.b=a;this.a=b;this.P=void 0;O(this.b,this.a);"loading"===this.a.readyState&&(this.P=new MutationObserver(this.c.bind(this)),this.P.observe(this.a,{childList:!0,subtree:!0}))}function ke(a){a.P&&a.P.disconnect()}je.prototype.c=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||ke(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)O(this.b,c[d])};function le(){var a=this;this.a=this.w=void 0;this.b=new Promise(function(b){a.a=b;a.w&&b(a.w)})}le.prototype.resolve=function(a){if(this.w)throw Error("Already resolved.");this.w=a;this.a&&this.a(a)};function P(a){this.c=!1;this.a=a;this.F=new Map;this.f=function(a){return a()};this.b=!1;this.u=[];this.aa=new je(a)}r=P.prototype;
r.wa=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!$d(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.a.a.get(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var d=function(a){var b=e[a];if(void 0!==b&&!(b instanceof Function))throw Error("The '"+a+"' callback must be a function.");
return b},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=d("connectedCallback");var g=d("disconnectedCallback");var h=d("adoptedCallback");var k=d("attributeChangedCallback");var l=b.observedAttributes||[]}catch(n){return}finally{this.c=!1}b={localName:a,constructorFunction:b,connectedCallback:f,disconnectedCallback:g,adoptedCallback:h,attributeChangedCallback:k,observedAttributes:l,constructionStack:[]};de(this.a,
a,b);this.u.push(b);this.b||(this.b=!0,this.f(function(){return me(c)}))};r.fa=function(a){O(this.a,a)};
function me(a){if(!1!==a.b){a.b=!1;for(var b=a.u,c=[],d=new Map,e=0;e<b.length;e++)d.set(b[e].localName,[]);O(a.a,document,{fa:function(b){if(void 0===b.__CE_state){var e=b.localName,f=d.get(e);f?f.push(b):a.a.a.get(e)&&c.push(b)}}});for(e=0;e<c.length;e++)ie(a.a,c[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=d.get(f.localName);for(var g=0;g<f.length;g++)ie(a.a,f[g]);(e=a.F.get(e))&&e.resolve(void 0)}}}r.get=function(a){if(a=this.a.a.get(a))return a.constructorFunction};
r.xa=function(a){if(!$d(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.F.get(a);if(b)return b.b;b=new le;this.F.set(a,b);this.a.a.get(a)&&!this.u.some(function(b){return b.localName===a})&&b.resolve(void 0);return b.b};r.Ra=function(a){ke(this.aa);var b=this.f;this.f=function(c){return a(function(){return b(c)})}};window.CustomElementRegistry=P;P.prototype.define=P.prototype.wa;P.prototype.upgrade=P.prototype.fa;P.prototype.get=P.prototype.get;
P.prototype.whenDefined=P.prototype.xa;P.prototype.polyfillWrapFlushCallback=P.prototype.Ra;var ne=window.Document.prototype.createElement,oe=window.Document.prototype.createElementNS,pe=window.Document.prototype.importNode,qe=window.Document.prototype.prepend,re=window.Document.prototype.append,se=window.DocumentFragment.prototype.prepend,te=window.DocumentFragment.prototype.append,ue=window.Node.prototype.cloneNode,ve=window.Node.prototype.appendChild,we=window.Node.prototype.insertBefore,xe=window.Node.prototype.removeChild,ye=window.Node.prototype.replaceChild,ze=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),Ae=window.Element.prototype.attachShadow,Be=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Ce=window.Element.prototype.getAttribute,De=window.Element.prototype.setAttribute,Ee=window.Element.prototype.removeAttribute,Fe=window.Element.prototype.getAttributeNS,Ge=window.Element.prototype.setAttributeNS,He=window.Element.prototype.removeAttributeNS,Ie=window.Element.prototype.insertAdjacentElement,Je=window.Element.prototype.insertAdjacentHTML,Ke=window.Element.prototype.prepend,
Le=window.Element.prototype.append,Me=window.Element.prototype.before,Ne=window.Element.prototype.after,Oe=window.Element.prototype.replaceWith,Pe=window.Element.prototype.remove,Qe=window.HTMLElement,Re=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),Se=window.HTMLElement.prototype.insertAdjacentElement,Te=window.HTMLElement.prototype.insertAdjacentHTML;var Ue=new function(){};function Ve(){var a=We;window.HTMLElement=function(){function b(){var b=this.constructor,d=a.u.get(b);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=ne.call(document,d.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=d,he(a,e),e;d=e.length-1;var f=e[d];if(f===Ue)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[d]=Ue;Object.setPrototypeOf(f,b.prototype);he(a,f);return f}b.prototype=Qe.prototype;Object.defineProperty(b.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});return b}()};function Xe(a,b,c){function d(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var f=[],l=0;l<d.length;l++){var n=d[l];n instanceof Element&&K(n)&&f.push(n);if(n instanceof DocumentFragment)for(n=n.firstChild;n;n=n.nextSibling)e.push(n);else e.push(n)}b.apply(this,d);for(d=0;d<f.length;d++)N(a,f[d]);if(K(this))for(d=0;d<e.length;d++)f=e[d],f instanceof Element&&M(a,f)}}void 0!==c.da&&(b.prepend=d(c.da));void 0!==c.append&&(b.append=d(c.append))};function Ye(){var a=We;L(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var c=a.a.get(b);if(c)return new c.constructorFunction}b=ne.call(this,b);he(a,b);return b});L(Document.prototype,"importNode",function(b,c){b=pe.call(this,b,!!c);this.__CE_hasRegistry?O(a,b):ge(a,b);return b});L(Document.prototype,"createElementNS",function(b,c){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var d=a.a.get(c);if(d)return new d.constructorFunction}b=oe.call(this,
b,c);he(a,b);return b});Xe(a,Document.prototype,{da:qe,append:re})};function Ze(){function a(a,d){Object.defineProperty(a,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,a);else{var c=void 0;if(this.firstChild){var e=this.childNodes,h=e.length;if(0<h&&K(this)){c=Array(h);for(var k=0;k<h;k++)c[k]=e[k]}}d.set.call(this,a);if(c)for(a=0;a<c.length;a++)N(b,c[a])}}})}var b=We;L(Node.prototype,"insertBefore",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);
a=we.call(this,a,d);if(K(this))for(d=0;d<c.length;d++)M(b,c[d]);return a}c=K(a);d=we.call(this,a,d);c&&N(b,a);K(this)&&M(b,a);return d});L(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=ve.call(this,a);if(K(this))for(var e=0;e<c.length;e++)M(b,c[e]);return a}c=K(a);e=ve.call(this,a);c&&N(b,a);K(this)&&M(b,a);return e});L(Node.prototype,"cloneNode",function(a){a=ue.call(this,!!a);this.ownerDocument.__CE_hasRegistry?O(b,a):
ge(b,a);return a});L(Node.prototype,"removeChild",function(a){var c=K(a),e=xe.call(this,a);c&&N(b,a);return e});L(Node.prototype,"replaceChild",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=ye.call(this,a,d);if(K(this))for(N(b,d),d=0;d<c.length;d++)M(b,c[d]);return a}c=K(a);var f=ye.call(this,a,d),g=K(this);g&&N(b,d);c&&N(b,a);g&&M(b,a);return f});ze&&ze.get?a(Node.prototype,ze):ee(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=
[],b=0;b<this.childNodes.length;b++){var c=this.childNodes[b];c.nodeType!==Node.COMMENT_NODE&&a.push(c.textContent)}return a.join("")},set:function(a){for(;this.firstChild;)xe.call(this,this.firstChild);null!=a&&""!==a&&ve.call(this,document.createTextNode(a))}})})};function $e(a){function b(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var h=[],k=0;k<d.length;k++){var l=d[k];l instanceof Element&&K(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)e.push(l);else e.push(l)}b.apply(this,d);for(d=0;d<h.length;d++)N(a,h[d]);if(K(this))for(d=0;d<e.length;d++)h=e[d],h instanceof Element&&M(a,h)}}var c=Element.prototype;void 0!==Me&&(c.before=b(Me));void 0!==Me&&(c.after=b(Ne));void 0!==Oe&&
L(c,"replaceWith",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=[];for(var g=[],h=0;h<c.length;h++){var k=c[h];k instanceof Element&&K(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)d.push(k);else d.push(k)}h=K(this);Oe.apply(this,c);for(c=0;c<g.length;c++)N(a,g[c]);if(h)for(N(a,this),c=0;c<d.length;c++)g=d[c],g instanceof Element&&M(a,g)});void 0!==Pe&&L(c,"remove",function(){var b=K(this);Pe.call(this);b&&N(a,this)})};function af(){function a(a,b){Object.defineProperty(a,"innerHTML",{enumerable:b.enumerable,configurable:!0,get:b.get,set:function(a){var c=this,e=void 0;K(this)&&(e=[],be(this,function(a){a!==c&&e.push(a)}));b.set.call(this,a);if(e)for(var f=0;f<e.length;f++){var g=e[f];1===g.__CE_state&&d.disconnectedCallback(g)}this.ownerDocument.__CE_hasRegistry?O(d,this):ge(d,this);return a}})}function b(a,b){L(a,"insertAdjacentElement",function(a,c){var e=K(c);a=b.call(this,a,c);e&&N(d,c);K(a)&&M(d,c);return a})}
function c(a,b){function c(a,b){for(var c=[];a!==b;a=a.nextSibling)c.push(a);for(b=0;b<c.length;b++)O(d,c[b])}L(a,"insertAdjacentHTML",function(a,d){a=a.toLowerCase();if("beforebegin"===a){var e=this.previousSibling;b.call(this,a,d);c(e||this.parentNode.firstChild,this)}else if("afterbegin"===a)e=this.firstChild,b.call(this,a,d),c(this.firstChild,e);else if("beforeend"===a)e=this.lastChild,b.call(this,a,d),c(e||this.firstChild,null);else if("afterend"===a)e=this.nextSibling,b.call(this,a,d),c(this.nextSibling,
e);else throw new SyntaxError("The value provided ("+String(a)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");})}var d=We;Ae&&L(Element.prototype,"attachShadow",function(a){a=Ae.call(this,a);var b=d;if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var c=0;c<b.c.length;c++)b.c[c](a)}return this.__CE_shadowRoot=a});Be&&Be.get?a(Element.prototype,Be):Re&&Re.get?a(HTMLElement.prototype,Re):fe(d,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return ue.call(this,
!0).innerHTML},set:function(a){var b="template"===this.localName,c=b?this.content:this,d=oe.call(document,this.namespaceURI,this.localName);for(d.innerHTML=a;0<c.childNodes.length;)xe.call(c,c.childNodes[0]);for(a=b?d.content:d;0<a.childNodes.length;)ve.call(c,a.childNodes[0])}})});L(Element.prototype,"setAttribute",function(a,b){if(1!==this.__CE_state)return De.call(this,a,b);var c=Ce.call(this,a);De.call(this,a,b);b=Ce.call(this,a);d.attributeChangedCallback(this,a,c,b,null)});L(Element.prototype,
"setAttributeNS",function(a,b,c){if(1!==this.__CE_state)return Ge.call(this,a,b,c);var e=Fe.call(this,a,b);Ge.call(this,a,b,c);c=Fe.call(this,a,b);d.attributeChangedCallback(this,b,e,c,a)});L(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return Ee.call(this,a);var b=Ce.call(this,a);Ee.call(this,a);null!==b&&d.attributeChangedCallback(this,a,b,null,null)});L(Element.prototype,"removeAttributeNS",function(a,b){if(1!==this.__CE_state)return He.call(this,a,b);var c=Fe.call(this,
a,b);He.call(this,a,b);var e=Fe.call(this,a,b);c!==e&&d.attributeChangedCallback(this,b,c,e,a)});Se?b(HTMLElement.prototype,Se):Ie?b(Element.prototype,Ie):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");Te?c(HTMLElement.prototype,Te):Je?c(Element.prototype,Je):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");Xe(d,Element.prototype,{da:Ke,append:Le});$e(d)};var bf=window.customElements;if(!bf||bf.forcePolyfill||"function"!=typeof bf.define||"function"!=typeof bf.get){var We=new ce;Ve();Ye();Xe(We,DocumentFragment.prototype,{da:se,append:te});Ze();af();document.__CE_hasRegistry=!0;var customElements=new P(We);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};function cf(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName=""}
function df(a){a=a.replace(ef,"").replace(ff,"");var b=gf,c=a,d=new cf;d.start=0;d.end=c.length;for(var e=d,f=0,g=c.length;f<g;f++)if("{"===c[f]){e.rules||(e.rules=[]);var h=e,k=h.rules[h.rules.length-1]||null;e=new cf;e.start=f+1;e.parent=h;e.previous=k;h.rules.push(e)}else"}"===c[f]&&(e.end=f+1,e=e.parent||d);return b(d,a)}
function gf(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=hf(c),c=c.replace(jf," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=kf:c.match(lf)&&(a.type=mf,a.keyframesName=a.selector.split(jf).pop()):a.type=0===c.indexOf("--")?nf:of);if(c=a.rules)for(var d=0,e=c.length,f=void 0;d<e&&(f=c[d]);d++)gf(f,
b);return a}function hf(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(a,c){a=c;for(c=6-a.length;c--;)a="0"+a;return"\\"+a})}
function pf(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var g=e.length,h=void 0;f<g&&(h=e[f]);f++)d=pf(h,b,d)}else b?b=a.cssText:(b=a.cssText,b=b.replace(qf,"").replace(rf,""),b=b.replace(uf,"").replace(vf,"")),(d=b.trim())&&(d="  "+d+"\n")}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}
var of=1,mf=7,kf=4,nf=1E3,ef=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,ff=/@import[^;]*;/gim,qf=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,rf=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,uf=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,vf=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,lf=/^@[^\s]*keyframes/,jf=/\s+/g;var R=!(window.ShadyDOM&&window.ShadyDOM.inUse),wf;function xf(a){wf=a&&a.shimcssproperties?!1:R||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"))}var yf;window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(yf=window.ShadyCSS.cssBuild);var zf=!(!window.ShadyCSS||!window.ShadyCSS.disableRuntime);
window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?wf=window.ShadyCSS.nativeCss:window.ShadyCSS?(xf(window.ShadyCSS),window.ShadyCSS=void 0):xf(window.WebComponents&&window.WebComponents.flags);var S=wf,Af=yf;var Bf=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Cf=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Df=/(--[\w-]+)\s*([:,;)]|$)/gi,Ef=/(animation\s*:)|(animation-name\s*:)/,Ff=/@media\s(.*)/,Gf=/\{[^}]*\}/g;var Hf=new Set;function If(a,b){if(!a)return"";"string"===typeof a&&(a=df(a));b&&Jf(a,b);return pf(a,S)}function Kf(a){!a.__cssRules&&a.textContent&&(a.__cssRules=df(a.textContent));return a.__cssRules||null}function Lf(a){return!!a.parent&&a.parent.type===mf}function Jf(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===kf){var g=a.selector.match(Ff);g&&(window.matchMedia(g[1]).matches||(e=!0))}f===of?b(a):c&&f===mf?c(a):f===nf&&(e=!0);if((a=a.rules)&&!e)for(e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++)Jf(g,b,c,d)}}
function Mf(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;Nf(e,c,d);return e}var Of=null;function Pf(a){a=document.createComment(" Shady DOM styles for "+a+" ");var b=document.head;b.insertBefore(a,(Of?Of.nextSibling:null)||b.firstChild);return Of=a}function Nf(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);Of?a.compareDocumentPosition(Of)===Node.DOCUMENT_POSITION_PRECEDING&&(Of=a):Of=a}
function Qf(a,b){for(var c=0,d=a.length;b<d;b++)if("("===a[b])c++;else if(")"===a[b]&&0===--c)return b;return-1}function Rf(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");var d=Qf(a,c+3),e=a.substring(c+4,d);c=a.substring(0,c);a=Rf(a.substring(d+1),b);d=e.indexOf(",");return-1===d?b(c,e.trim(),"",a):b(c,e.substring(0,d).trim(),e.substring(d+1).trim(),a)}function Sf(a,b){R?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b)}
var Tf=window.ShadyDOM&&window.ShadyDOM.wrap||function(a){return a};function Uf(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return{is:b,X:c}}function Vf(a){for(var b=[],c="",d=0;0<=d&&d<a.length;d++)if("("===a[d]){var e=Qf(a,d);c+=a.slice(d,e+1);d=e}else","===a[d]?(b.push(c),c=""):c+=a[d];c&&b.push(c);return b}
function Wf(a){if(void 0!==Af)return Af;if(void 0===a.__cssBuild){var b=a.getAttribute("css-build");if(b)a.__cssBuild=b;else{a:{b="template"===a.localName?a.content.firstChild:a.firstChild;if(b instanceof Comment&&(b=b.textContent.trim().split(":"),"css-build"===b[0])){b=b[1];break a}b=""}if(""!==b){var c="template"===a.localName?a.content.firstChild:a.firstChild;c.parentNode.removeChild(c)}a.__cssBuild=b}}return a.__cssBuild||""}
function Xf(a){a=void 0===a?"":a;return""!==a&&S?R?"shadow"===a:"shady"===a:!1};function Yf(){}function Zf(a,b){$f(U,a,function(a){ag(a,b||"")})}function $f(a,b,c){b.nodeType===Node.ELEMENT_NODE&&c(b);var d;"template"===b.localName?d=(b.content||b._content||b).childNodes:d=b.children||b.childNodes;if(d)for(b=0;b<d.length;b++)$f(a,d[b],c)}
function ag(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute("class");c?d&&(b=d.replace("style-scope","").replace(b,""),Sf(a,b)):Sf(a,(d?d+" ":"")+"style-scope "+b)}}function bg(a,b,c){$f(U,a,function(a){ag(a,b,!0);ag(a,c)})}function cg(a,b){$f(U,a,function(a){ag(a,b||"",!0)})}
function dg(a,b,c,d,e){var f=U;e=void 0===e?"":e;""===e&&(R||"shady"===(void 0===d?"":d)?e=If(b,c):(a=Uf(a),e=eg(f,b,a.is,a.X,c)+"\n\n"));return e.trim()}function eg(a,b,c,d,e){var f=fg(c,d);c=c?"."+c:"";return If(b,function(b){b.c||(b.selector=b.C=gg(a,b,a.b,c,f),b.c=!0);e&&e(b,c,f)})}function fg(a,b){return b?"[is="+a+"]":a}
function gg(a,b,c,d,e){var f=Vf(b.selector);if(!Lf(b)){b=0;for(var g=f.length,h=void 0;b<g&&(h=f[b]);b++)f[b]=c.call(a,h,d,e)}return f.filter(function(a){return!!a}).join(",")}function hg(a){return a.replace(ig,function(a,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return":"+c+"("+d+")"})}
function jg(a){for(var b=[],c;c=a.match(kg);){var d=c.index,e=Qf(a,d);if(-1===e)throw Error(c.input+" selector missing ')'");c=a.slice(d,e+1);a=a.replace(c,"\ue000");b.push(c)}return{na:a,matches:b}}function lg(a,b){var c=a.split("\ue000");return b.reduce(function(a,b,f){return a+b+c[f+1]},c[0])}
Yf.prototype.b=function(a,b,c){var d=!1;a=a.trim();var e=ig.test(a);e&&(a=a.replace(ig,function(a,b,c){return":"+b+"("+c.replace(/\s/g,"")+")"}),a=hg(a));var f=kg.test(a);if(f){var g=jg(a);a=g.na;g=g.matches}a=a.replace(mg,":host $1");a=a.replace(ng,function(a,e,f){d||(a=og(f,e,b,c),d=d||a.stop,e=a.Ha,f=a.value);return e+f});f&&(a=lg(a,g));e&&(a=hg(a));return a=a.replace(pg,function(a,b,c,d){return'[dir="'+c+'"] '+b+d+", "+b+'[dir="'+c+'"]'+d})};
function og(a,b,c,d){var e=a.indexOf("::slotted");0<=a.indexOf(":host")?a=qg(a,d):0!==e&&(a=c?rg(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(sg,function(a,b){return" > "+b}))}return{value:a,Ha:b,stop:f}}function rg(a,b){a=a.split(/(\[.+?\])/);for(var c=[],d=0;d<a.length;d++)if(1===d%2)c.push(a[d]);else{var e=a[d];if(""!==e||d!==a.length-1)e=e.split(":"),e[0]+=b,c.push(e.join(":"))}return c.join("")}
function qg(a,b){var c=a.match(tg);return(c=c&&c[2].trim()||"")?c[0].match(ug)?a.replace(tg,function(a,c,f){return b+f}):c.split(ug)[0]===b?c:"should_not_match":a.replace(":host",b)}function vg(a){":root"===a.selector&&(a.selector="html")}Yf.prototype.c=function(a){return a.match(":host")?"":a.match("::slotted")?this.b(a,":not(.style-scope)"):rg(a.trim(),":not(.style-scope)")};t.Object.defineProperties(Yf.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});
var ig=/:(nth[-\w]+)\(([^)]+)\)/,ng=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,ug=/[[.:#*]/,mg=/^(::slotted)/,tg=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,sg=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,pg=/(.*):dir\((?:(ltr|rtl))\)(.*)/,kg=/:(?:matches|any|-(?:webkit|moz)-any)/,U=new Yf;function wg(a,b,c,d,e){this.L=a||null;this.b=b||null;this.la=c||[];this.G=null;this.cssBuild=e||"";this.X=d||"";this.a=this.H=this.K=null}function V(a){return a?a.__styleInfo:null}function xg(a,b){return a.__styleInfo=b}wg.prototype.c=function(){return this.L};wg.prototype._getStyleRules=wg.prototype.c;function yg(a){var b=this.matches||this.matchesSelector||this.mozMatchesSelector||this.msMatchesSelector||this.oMatchesSelector||this.webkitMatchesSelector;return b&&b.call(this,a)}var zg=navigator.userAgent.match("Trident");function Ag(){}function Bg(a){var b={},c=[],d=0;Jf(a,function(a){Cg(a);a.index=d++;a=a.A.cssText;for(var c;c=Df.exec(a);){var e=c[1];":"!==c[2]&&(b[e]=!0)}},function(a){c.push(a)});a.b=c;a=[];for(var e in b)a.push(e);return a}
function Cg(a){if(!a.A){var b={},c={};Dg(a,c)&&(b.J=c,a.rules=null);b.cssText=a.parsedCssText.replace(Gf,"").replace(Bf,"");a.A=b}}function Dg(a,b){var c=a.A;if(c){if(c.J)return Object.assign(b,c.J),!0}else{c=a.parsedCssText;for(var d;a=Bf.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0}return d}}
function Eg(a,b,c){b&&(b=0<=b.indexOf(";")?Fg(a,b,c):Rf(b,function(b,e,f,g){if(!e)return b+g;(e=Eg(a,c[e],c))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=Eg(a,c[f]||f,c)||f;return b+(e||"")+g}));return b&&b.trim()||""}
function Fg(a,b,c){b=b.split(";");for(var d=0,e,f;d<b.length;d++)if(e=b[d]){Cf.lastIndex=0;if(f=Cf.exec(e))e=Eg(a,c[f[1]],c);else if(f=e.indexOf(":"),-1!==f){var g=e.substring(f);g=g.trim();g=Eg(a,g,c)||g;e=e.substring(0,f)+g}b[d]=e&&e.lastIndexOf(";")===e.length-1?e.slice(0,-1):e||""}return b.join(";")}
function Gg(a,b){var c={},d=[];Jf(a,function(a){a.A||Cg(a);var e=a.C||a.parsedSelector;b&&a.A.J&&e&&yg.call(b,e)&&(Dg(a,c),a=a.index,e=parseInt(a/32,10),d[e]=(d[e]||0)|1<<a%32)},null,!0);return{J:c,key:d}}
function Hg(a,b,c,d){b.A||Cg(b);if(b.A.J){var e=Uf(a);a=e.is;e=e.X;e=a?fg(a,e):"html";var f=b.parsedSelector,g=":host > *"===f||"html"===f,h=0===f.indexOf(":host")&&!g;"shady"===c&&(g=f===e+" > *."+e||-1!==f.indexOf("html"),h=!g&&0===f.indexOf(e));if(g||h)c=e,h&&(b.C||(b.C=gg(U,b,U.b,a?"."+a:"",e)),c=b.C||e),d({na:c,Oa:h,bb:g})}}function Ig(a,b,c){var d={},e={};Jf(b,function(b){Hg(a,b,c,function(c){yg.call(a._element||a,c.na)&&(c.Oa?Dg(b,d):Dg(b,e))})},null,!0);return{Ua:e,Ma:d}}
function Jg(a,b,c,d){var e=Uf(b),f=fg(e.is,e.X),g=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])"),h=V(b);e=h.L;h=h.cssBuild;var k=Kg(e,d);return dg(b,e,function(b){var e="";b.A||Cg(b);b.A.cssText&&(e=Fg(a,b.A.cssText,c));b.cssText=e;if(!R&&!Lf(b)&&b.cssText){var h=e=b.cssText;null==b.ra&&(b.ra=Ef.test(e));if(b.ra)if(null==b.ba){b.ba=[];for(var l in k)h=k[l],h=h(e),e!==h&&(e=h,b.ba.push(l))}else{for(l=0;l<b.ba.length;++l)h=k[b.ba[l]],e=h(e);h=e}b.cssText=h;b.C=
b.C||b.selector;e="."+d;l=Vf(b.C);h=0;for(var v=l.length,x=void 0;h<v&&(x=l[h]);h++)l[h]=x.match(g)?x.replace(f,e):e+" "+x;b.selector=l.join(",")}},h)}function Kg(a,b){a=a.b;var c={};if(!R&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){var f=e,g=b;f.f=new RegExp("\\b"+f.keyframesName+"(?!\\B|-)","g");f.a=f.keyframesName+"-"+g;f.C=f.C||f.selector;f.selector=f.C.replace(f.keyframesName,f.a);c[e.keyframesName]=Lg(e)}return c}function Lg(a){return function(b){return b.replace(a.f,a.a)}}
function Mg(a,b){var c=Ng,d=Kf(a);a.textContent=If(d,function(a){var d=a.cssText=a.parsedCssText;a.A&&a.A.cssText&&(d=d.replace(qf,"").replace(rf,""),a.cssText=Fg(c,d,b))})}t.Object.defineProperties(Ag.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var Ng=new Ag;var Og={},Pg=window.customElements;if(Pg&&!R&&!zf){var Qg=Pg.define;Pg.define=function(a,b,c){Og[a]||(Og[a]=Pf(a));Qg.call(Pg,a,b,c)}};function Rg(){this.cache={}}Rg.prototype.store=function(a,b,c,d){var e=this.cache[a]||[];e.push({J:b,styleElement:c,H:d});100<e.length&&e.shift();this.cache[a]=e};function Sg(){}var Tg=new RegExp(U.a+"\\s*([^\\s]*)");function Ug(a){return(a=(a.classList&&a.classList.value?a.classList.value:a.getAttribute("class")||"").match(Tg))?a[1]:""}function Vg(a){var b=Tf(a).getRootNode();return b===a||b===a.ownerDocument?"":(a=b.host)?Uf(a).is:""}
function Wg(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode(),g=Ug(e);if(g&&f===e.ownerDocument&&("style"!==e.localName&&"template"!==e.localName||""===Wf(e)))cg(e,g);else if(f instanceof ShadowRoot)for(f=Vg(e),f!==g&&bg(e,g,f),e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+U.a+")"),g=0;g<e.length;g++){f=e[g];
var h=Vg(f);h&&ag(f,h)}}}}}
if(!(R||window.ShadyDOM&&window.ShadyDOM.handlesDynamicScoping)){var Xg=new MutationObserver(Wg),Yg=function(a){Xg.observe(a,{childList:!0,subtree:!0})};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)Yg(document);else{var Zg=function(){Yg(document.body)};window.HTMLImports?window.HTMLImports.whenReady(Zg):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){Zg();document.removeEventListener("readystatechange",a)};document.addEventListener("readystatechange",
a)}else Zg()})}Sg=function(){Wg(Xg.takeRecords())}}var $g=Sg;var ah={};var bh=Promise.resolve();function ch(a){if(a=ah[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1}function dh(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}function eh(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a._validating||(a._validating=!0,bh.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a._validating=!1}))};var fh={},gh=new Rg;function W(){this.F={};this.c=document.documentElement;var a=new cf;a.rules=[];this.f=xg(this.c,new wg(a));this.u=!1;this.b=this.a=null}r=W.prototype;r.flush=function(){$g()};r.Ka=function(a){return Kf(a)};r.Ya=function(a){return If(a)};r.prepareTemplate=function(a,b,c){this.prepareTemplateDom(a,b);this.prepareTemplateStyles(a,b,c)};
r.prepareTemplateStyles=function(a,b,c){if(!a._prepared&&!zf){R||Og[b]||(Og[b]=Pf(b));a._prepared=!0;a.name=b;a.extends=c;ah[b]=a;var d=Wf(a),e=Xf(d);c={is:b,extends:c};for(var f=[],g=a.content.querySelectorAll("style"),h=0;h<g.length;h++){var k=g[h];if(k.hasAttribute("shady-unscoped")){if(!R){var l=k.textContent;Hf.has(l)||(Hf.add(l),l=k.cloneNode(!0),document.head.appendChild(l));k.parentNode.removeChild(k)}}else f.push(k.textContent),k.parentNode.removeChild(k)}f=f.join("").trim()+(fh[b]||"");
hh(this);if(!e){if(g=!d)g=Cf.test(f)||Bf.test(f),Cf.lastIndex=0,Bf.lastIndex=0;h=df(f);g&&S&&this.a&&this.a.transformRules(h,b);a._styleAst=h}g=[];S||(g=Bg(a._styleAst));if(!g.length||S)h=R?a.content:null,b=Og[b]||null,d=dg(c,a._styleAst,null,d,e?f:""),d=d.length?Mf(d,c.is,h,b):null,a._style=d;a.a=g}};r.Sa=function(a,b){fh[b]=a.join(" ")};r.prepareTemplateDom=function(a,b){if(!zf){var c=Wf(a);R||"shady"===c||a._domPrepared||(a._domPrepared=!0,Zf(a.content,b))}};
function ih(a){var b=Uf(a),c=b.is;b=b.X;var d=Og[c]||null,e=ah[c];if(e){c=e._styleAst;var f=e.a;e=Wf(e);b=new wg(c,d,f,b,e);xg(a,b);return b}}function jh(a){!a.b&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(a.b=window.ShadyCSS.CustomStyleInterface,a.b.transformCallback=function(b){a.va(b)},a.b.validateCallback=function(){requestAnimationFrame(function(){(a.b.enqueued||a.u)&&a.flushCustomStyles()})})}
function hh(a){!a.a&&window.ShadyCSS&&window.ShadyCSS.ApplyShim&&(a.a=window.ShadyCSS.ApplyShim,a.a.invalidCallback=ch);jh(a)}
r.flushCustomStyles=function(){if(!zf&&(hh(this),this.b)){var a=this.b.processStyles();if(this.b.enqueued&&!Xf(this.f.cssBuild)){if(S){if(!this.f.cssBuild)for(var b=0;b<a.length;b++){var c=this.b.getStyleForCustomStyle(a[b]);if(c&&S&&this.a){var d=Kf(c);hh(this);this.a.transformRules(d);c.textContent=If(d)}}}else{kh(this,this.c,this.f);for(b=0;b<a.length;b++)(c=this.b.getStyleForCustomStyle(a[b]))&&Mg(c,this.f.K);this.u&&this.styleDocument()}this.b.enqueued=!1}}};
r.styleElement=function(a,b){if(zf){if(b){V(a)||xg(a,new wg(null));var c=V(a);c.G=c.G||{};Object.assign(c.G,b);lh(this,a,c)}}else if(c=V(a)||ih(a))if(a!==this.c&&(this.u=!0),b&&(c.G=c.G||{},Object.assign(c.G,b)),S)lh(this,a,c);else if(this.flush(),kh(this,a,c),c.la&&c.la.length){b=Uf(a).is;var d;a:{if(d=gh.cache[b])for(var e=d.length-1;0<=e;e--){var f=d[e];b:{var g=c.la;for(var h=0;h<g.length;h++){var k=g[h];if(f.J[k]!==c.K[k]){g=!1;break b}}g=!0}if(g){d=f;break a}}d=void 0}g=d?d.styleElement:null;
e=c.H;(f=d&&d.H)||(f=this.F[b]=(this.F[b]||0)+1,f=b+"-"+f);c.H=f;f=c.H;h=Ng;h=g?g.textContent||"":Jg(h,a,c.K,f);k=V(a);var l=k.a;l&&!R&&l!==g&&(l._useCount--,0>=l._useCount&&l.parentNode&&l.parentNode.removeChild(l));R?k.a?(k.a.textContent=h,g=k.a):h&&(g=Mf(h,f,a.shadowRoot,k.b)):g?g.parentNode||(zg&&-1<h.indexOf("@media")&&(g.textContent=h),Nf(g,null,k.b)):h&&(g=Mf(h,f,null,k.b));g&&(g._useCount=g._useCount||0,k.a!=g&&g._useCount++,k.a=g);f=g;R||(g=c.H,k=h=a.getAttribute("class")||"",e&&(k=h.replace(new RegExp("\\s*x-scope\\s*"+
e+"\\s*","g")," ")),k+=(k?" ":"")+"x-scope "+g,h!==k&&Sf(a,k));d||gh.store(b,c.K,f,c.H)}};
function lh(a,b,c){var d=Uf(b).is;if(c.G){var e=c.G,f;for(f in e)null===f?b.style.removeProperty(f):b.style.setProperty(f,e[f])}e=ah[d];if(!(!e&&b!==a.c||e&&""!==Wf(e))&&e&&e._style&&!dh(e)){if(dh(e)||e._applyShimValidatingVersion!==e._applyShimNextVersion)hh(a),a.a&&a.a.transformRules(e._styleAst,d),e._style.textContent=dg(b,c.L),eh(e);R&&(a=b.shadowRoot)&&(a=a.querySelector("style"))&&(a.textContent=dg(b,c.L));c.L=e._styleAst}}
function mh(a,b){return(b=Tf(b).getRootNode().host)?V(b)||ih(b)?b:mh(a,b):a.c}function kh(a,b,c){var d=mh(a,b),e=V(d),f=e.K;d===a.c||f||(kh(a,d,e),f=e.K);a=Object.create(f||null);d=Ig(b,c.L,c.cssBuild);b=Gg(e.L,b).J;Object.assign(a,d.Ma,b,d.Ua);b=c.G;for(var g in b)if((e=b[g])||0===e)a[g]=e;g=Ng;b=Object.getOwnPropertyNames(a);for(e=0;e<b.length;e++)d=b[e],a[d]=Eg(g,a[d],a);c.K=a}r.styleDocument=function(a){this.styleSubtree(this.c,a)};
r.styleSubtree=function(a,b){var c=Tf(a),d=c.shadowRoot;(d||a===this.c)&&this.styleElement(a,b);if(a=d&&(d.children||d.childNodes))for(c=0;c<a.length;c++)this.styleSubtree(a[c]);else if(c=c.children||c.childNodes)for(a=0;a<c.length;a++)this.styleSubtree(c[a])};
r.va=function(a){var b=this,c=Wf(a);c!==this.f.cssBuild&&(this.f.cssBuild=c);if(!Xf(c)){var d=Kf(a);Jf(d,function(a){if(R)vg(a);else{var d=U;a.selector=a.parsedSelector;vg(a);a.selector=a.C=gg(d,a,d.c,void 0,void 0)}S&&""===c&&(hh(b),b.a&&b.a.transformRule(a))});S?a.textContent=If(d):this.f.L.rules.push(d)}};r.getComputedStyleValue=function(a,b){var c;S||(c=(V(a)||V(mh(this,a))).K[b]);return(c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};
r.Xa=function(a,b){var c=Tf(a).getRootNode();b=b?b.split(/\s/):[];c=c.host&&c.host.localName;if(!c){var d=a.getAttribute("class");if(d){d=d.split(/\s/);for(var e=0;e<d.length;e++)if(d[e]===U.a){c=d[e+1];break}}}c&&b.push(U.a,c);S||(c=V(a))&&c.H&&b.push(Ng.a,c.H);Sf(a,b.join(" "))};r.Fa=function(a){return V(a)};r.Wa=function(a,b){ag(a,b)};r.Za=function(a,b){ag(a,b,!0)};r.Va=function(a){return Vg(a)};r.Ia=function(a){return Ug(a)};W.prototype.flush=W.prototype.flush;W.prototype.prepareTemplate=W.prototype.prepareTemplate;
W.prototype.styleElement=W.prototype.styleElement;W.prototype.styleDocument=W.prototype.styleDocument;W.prototype.styleSubtree=W.prototype.styleSubtree;W.prototype.getComputedStyleValue=W.prototype.getComputedStyleValue;W.prototype.setElementClass=W.prototype.Xa;W.prototype._styleInfoForNode=W.prototype.Fa;W.prototype.transformCustomStyleForDocument=W.prototype.va;W.prototype.getStyleAst=W.prototype.Ka;W.prototype.styleAstToString=W.prototype.Ya;W.prototype.flushCustomStyles=W.prototype.flushCustomStyles;
W.prototype.scopeNode=W.prototype.Wa;W.prototype.unscopeNode=W.prototype.Za;W.prototype.scopeForNode=W.prototype.Va;W.prototype.currentScopeForNode=W.prototype.Ia;W.prototype.prepareAdoptedCssText=W.prototype.Sa;Object.defineProperties(W.prototype,{nativeShadow:{get:function(){return R}},nativeCss:{get:function(){return S}}});var Z=new W,nh,oh;window.ShadyCSS&&(nh=window.ShadyCSS.ApplyShim,oh=window.ShadyCSS.CustomStyleInterface);
window.ShadyCSS={ScopingShim:Z,prepareTemplate:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplate(a,b,c)},prepareTemplateDom:function(a,b){Z.prepareTemplateDom(a,b)},prepareTemplateStyles:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplateStyles(a,b,c)},styleSubtree:function(a,b){Z.flushCustomStyles();Z.styleSubtree(a,b)},styleElement:function(a){Z.flushCustomStyles();Z.styleElement(a)},styleDocument:function(a){Z.flushCustomStyles();Z.styleDocument(a)},flushCustomStyles:function(){Z.flushCustomStyles()},
getComputedStyleValue:function(a,b){return Z.getComputedStyleValue(a,b)},nativeCss:S,nativeShadow:R,cssBuild:Af,disableRuntime:zf};nh&&(window.ShadyCSS.ApplyShim=nh);oh&&(window.ShadyCSS.CustomStyleInterface=oh);(function(a){function b(a){""==a&&(f.call(this),this.i=!0);return a.toLowerCase()}function c(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,63,96].indexOf(b)?a:encodeURIComponent(a)}function d(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,96].indexOf(b)?a:encodeURIComponent(a)}function e(a,e,g){function h(a){X.push(a)}var k=e||"scheme start",x=0,p="",v=!1,Q=!1,X=[];a:for(;(void 0!=a[x-1]||0==x)&&!this.i;){var m=a[x];switch(k){case "scheme start":if(m&&q.test(m))p+=m.toLowerCase(),
k="scheme";else if(e){h("Invalid scheme.");break a}else{p="";k="no scheme";continue}break;case "scheme":if(m&&I.test(m))p+=m.toLowerCase();else if(":"==m){this.h=p;p="";if(e)break a;void 0!==l[this.h]&&(this.B=!0);k="file"==this.h?"relative":this.B&&g&&g.h==this.h?"relative or authority":this.B?"authority first slash":"scheme data"}else if(e){void 0!=m&&h("Code point not allowed in scheme: "+m);break a}else{p="";x=0;k="no scheme";continue}break;case "scheme data":"?"==m?(this.o="?",k="query"):"#"==
m?(this.v="#",k="fragment"):void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.ia+=c(m));break;case "no scheme":if(g&&void 0!==l[g.h]){k="relative";continue}else h("Missing scheme."),f.call(this),this.i=!0;break;case "relative or authority":if("/"==m&&"/"==a[x+1])k="authority ignore slashes";else{h("Expected /, got: "+m);k="relative";continue}break;case "relative":this.B=!0;"file"!=this.h&&(this.h=g.h);if(void 0==m){this.j=g.j;this.m=g.m;this.l=g.l.slice();this.o=g.o;this.s=g.s;this.g=g.g;break a}else if("/"==
m||"\\"==m)"\\"==m&&h("\\ is an invalid code point."),k="relative slash";else if("?"==m)this.j=g.j,this.m=g.m,this.l=g.l.slice(),this.o="?",this.s=g.s,this.g=g.g,k="query";else if("#"==m)this.j=g.j,this.m=g.m,this.l=g.l.slice(),this.o=g.o,this.v="#",this.s=g.s,this.g=g.g,k="fragment";else{k=a[x+1];var y=a[x+2];if("file"!=this.h||!q.test(m)||":"!=k&&"|"!=k||void 0!=y&&"/"!=y&&"\\"!=y&&"?"!=y&&"#"!=y)this.j=g.j,this.m=g.m,this.s=g.s,this.g=g.g,this.l=g.l.slice(),this.l.pop();k="relative path";continue}break;
case "relative slash":if("/"==m||"\\"==m)"\\"==m&&h("\\ is an invalid code point."),k="file"==this.h?"file host":"authority ignore slashes";else{"file"!=this.h&&(this.j=g.j,this.m=g.m,this.s=g.s,this.g=g.g);k="relative path";continue}break;case "authority first slash":if("/"==m)k="authority second slash";else{h("Expected '/', got: "+m);k="authority ignore slashes";continue}break;case "authority second slash":k="authority ignore slashes";if("/"!=m){h("Expected '/', got: "+m);continue}break;case "authority ignore slashes":if("/"!=
m&&"\\"!=m){k="authority";continue}else h("Expected authority, got: "+m);break;case "authority":if("@"==m){v&&(h("@ already seen."),p+="%40");v=!0;for(m=0;m<p.length;m++)y=p[m],"\t"==y||"\n"==y||"\r"==y?h("Invalid whitespace in authority."):":"==y&&null===this.g?this.g="":(y=c(y),null!==this.g?this.g+=y:this.s+=y);p=""}else if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){x-=p.length;p="";k="host";continue}else p+=m;break;case "file host":if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){2!=p.length||
!q.test(p[0])||":"!=p[1]&&"|"!=p[1]?(0!=p.length&&(this.j=b.call(this,p),p=""),k="relative path start"):k="relative path";continue}else"\t"==m||"\n"==m||"\r"==m?h("Invalid whitespace in file host."):p+=m;break;case "host":case "hostname":if(":"!=m||Q)if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){this.j=b.call(this,p);p="";k="relative path start";if(e)break a;continue}else"\t"!=m&&"\n"!=m&&"\r"!=m?("["==m?Q=!0:"]"==m&&(Q=!1),p+=m):h("Invalid code point in host/hostname: "+m);else if(this.j=b.call(this,
p),p="",k="port","hostname"==e)break a;break;case "port":if(/[0-9]/.test(m))p+=m;else if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m||e){""!=p&&(p=parseInt(p,10),p!=l[this.h]&&(this.m=p+""),p="");if(e)break a;k="relative path start";continue}else"\t"==m||"\n"==m||"\r"==m?h("Invalid code point in port: "+m):(f.call(this),this.i=!0);break;case "relative path start":"\\"==m&&h("'\\' not allowed in path.");k="relative path";if("/"!=m&&"\\"!=m)continue;break;case "relative path":if(void 0!=m&&"/"!=m&&"\\"!=
m&&(e||"?"!=m&&"#"!=m))"\t"!=m&&"\n"!=m&&"\r"!=m&&(p+=c(m));else{"\\"==m&&h("\\ not allowed in relative path.");if(y=n[p.toLowerCase()])p=y;".."==p?(this.l.pop(),"/"!=m&&"\\"!=m&&this.l.push("")):"."==p&&"/"!=m&&"\\"!=m?this.l.push(""):"."!=p&&("file"==this.h&&0==this.l.length&&2==p.length&&q.test(p[0])&&"|"==p[1]&&(p=p[0]+":"),this.l.push(p));p="";"?"==m?(this.o="?",k="query"):"#"==m&&(this.v="#",k="fragment")}break;case "query":e||"#"!=m?void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.o+=d(m)):(this.v=
"#",k="fragment");break;case "fragment":void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.v+=m)}x++}}function f(){this.s=this.ia=this.h="";this.g=null;this.m=this.j="";this.l=[];this.v=this.o="";this.B=this.i=!1}function g(a,b){void 0===b||b instanceof g||(b=new g(String(b)));this.a=a;f.call(this);a=this.a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");e.call(this,a,null,b)}var h=!1;try{var k=new URL("b","http://a");k.pathname="c%20d";h="http://a/c%20d"===k.href}catch(x){}if(!h){var l=Object.create(null);l.ftp=
21;l.file=0;l.gopher=70;l.http=80;l.https=443;l.ws=80;l.wss=443;var n=Object.create(null);n["%2e"]=".";n[".%2e"]="..";n["%2e."]="..";n["%2e%2e"]="..";var q=/[a-zA-Z]/,I=/[a-zA-Z0-9\+\-\.]/;g.prototype={toString:function(){return this.href},get href(){if(this.i)return this.a;var a="";if(""!=this.s||null!=this.g)a=this.s+(null!=this.g?":"+this.g:"")+"@";return this.protocol+(this.B?"//"+a+this.host:"")+this.pathname+this.o+this.v},set href(a){f.call(this);e.call(this,a)},get protocol(){return this.h+
":"},set protocol(a){this.i||e.call(this,a+":","scheme start")},get host(){return this.i?"":this.m?this.j+":"+this.m:this.j},set host(a){!this.i&&this.B&&e.call(this,a,"host")},get hostname(){return this.j},set hostname(a){!this.i&&this.B&&e.call(this,a,"hostname")},get port(){return this.m},set port(a){!this.i&&this.B&&e.call(this,a,"port")},get pathname(){return this.i?"":this.B?"/"+this.l.join("/"):this.ia},set pathname(a){!this.i&&this.B&&(this.l=[],e.call(this,a,"relative path start"))},get search(){return this.i||
!this.o||"?"==this.o?"":this.o},set search(a){!this.i&&this.B&&(this.o="?","?"==a[0]&&(a=a.slice(1)),e.call(this,a,"query"))},get hash(){return this.i||!this.v||"#"==this.v?"":this.v},set hash(a){this.i||(a?(this.v="#","#"==a[0]&&(a=a.slice(1)),e.call(this,a,"fragment")):this.v="")},get origin(){var a;if(this.i||!this.h)return"";switch(this.h){case "data":case "file":case "javascript":case "mailto":return"null"}return(a=this.host)?this.h+"://"+a:""}};var v=a.URL;v&&(g.createObjectURL=function(a){return v.createObjectURL.apply(v,
arguments)},g.revokeObjectURL=function(a){v.revokeObjectURL(a)});a.URL=g}})(window);Object.getOwnPropertyDescriptor(Node.prototype,"baseURI")||Object.defineProperty(Node.prototype,"baseURI",{get:function(){var a=(this.ownerDocument||this).querySelector("base[href]");return a&&a.href||window.location.href},configurable:!0,enumerable:!0});var ph=document.createElement("style");ph.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var qh=document.querySelector("head");qh.insertBefore(ph,qh.firstChild);var rh=window.customElements,sh=!1,th=null;rh.polyfillWrapFlushCallback&&rh.polyfillWrapFlushCallback(function(a){th=a;sh&&a()});function uh(){window.HTMLTemplateElement.bootstrap&&window.HTMLTemplateElement.bootstrap(window.document);th&&th();sh=!0;window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}
"complete"!==document.readyState?(window.addEventListener("load",uh),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",uh);uh()})):uh();}).call(this);

//# sourceMappingURL=webcomponents-bundle.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Base.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Base.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "live-button, live-slider, live-dial, live-toggle, live-text, live-numbox, live-tab, live-meter {\n  display: inline-flex; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Base.scss":
/*!***********************!*\
  !*** ./src/Base.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./Base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/Base.ts":
/*!*********************!*\
  !*** ./src/Base.ts ***!
  \*********************/
/*! exports provided: LiveBaseComponent, LiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveBaseComponent", function() { return LiveBaseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveComponent", function() { return LiveComponent; });
/* harmony import */ var _Base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.scss */ "./src/Base.scss");
/* harmony import */ var _Base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _ChangeEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChangeEvent */ "./src/ChangeEvent.ts");
/* eslint-disable @typescript-eslint/no-unused-vars */



class LiveBaseComponent extends HTMLElement {
  constructor() {
    super();
    this.root = void 0;
    this.root = this.attachShadow({
      mode: "open"
    });
    this.root.innerHTML = this.render();
  }

  render() {
    return "";
  }

}
class LiveComponent extends LiveBaseComponent {
  static get observedAttributes() {
    return Object.keys(this.params);
  }

  constructor() {
    super();
    this.canvas = void 0;
    this.ctx = void 0;
    this.isConnectedPolyfill = void 0;
    this.params = void 0;

    this.handleKeyDown = e => {};

    this.handleKeyUp = e => {};

    this.handleTouchStart = e => {};

    this.handleWheel = e => {};

    this.handleClick = e => {};

    this.handleMouseDown = e => {
      e.preventDefault();
      this.canvas.focus();
      var rect = this.canvas.getBoundingClientRect();
      var fromX = e.pageX - rect.left;
      var fromY = e.pageY - rect.top;
      var prevValue = this.params.value;
      this.handlePointerDown({
        x: fromX,
        y: fromY,
        originalEvent: e
      });

      var handleMouseMove = e => {
        e.preventDefault();
        var x = e.pageX - rect.left;
        var y = e.pageY - rect.top;
        this.handlePointerDrag({
          prevValue,
          x,
          y,
          fromX,
          fromY,
          movementX: e.movementX,
          movementY: e.movementY,
          originalEvent: e
        });
      };

      var handleMouseUp = e => {
        e.preventDefault();
        var x = e.pageX - rect.left;
        var y = e.pageY - rect.top;
        this.handlePointerUp({
          x,
          y,
          originalEvent: e
        });
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    this.handleMouseOver = e => {};

    this.handleMouseOut = e => {};

    this.handleContextMenu = e => {};

    this.handlePointerDown = e => {};

    this.handlePointerDrag = e => {};

    this.handlePointerUp = e => {};

    this.handleFocusIn = e => {
      this.params.focus = true;
      this.paint();
    };

    this.handleFocusOut = e => {
      this.params.focus = false;
      this.paint();
    };

    this.addEventListener("keydown", this.handleKeyDown);
    this.addEventListener("keyup", this.handleKeyUp);
    this.addEventListener("touchstart", this.handleTouchStart, {
      passive: false
    });
    this.addEventListener("wheel", this.handleWheel);
    this.addEventListener("click", this.handleClick);
    this.addEventListener("mousedown", this.handleMouseDown, {
      passive: false
    });
    this.addEventListener("mouseover", this.handleMouseOver);
    this.addEventListener("mouseout", this.handleMouseOut);
    this.addEventListener("focusin", this.handleFocusIn);
    this.addEventListener("focusout", this.handleFocusOut);
    this.canvas = this.root.children[0];
    this.ctx = this.canvas.getContext("2d");
    this.params = this.constructor.params;
  }

  get displayValue() {
    var _this$params = this.params,
        value = _this$params.value,
        type = _this$params.type,
        unitstyle = _this$params.unitstyle,
        units = _this$params.units;
    if (type === "enum") return this.params.enum[value];
    if (unitstyle === "int") return value.toFixed(0);
    if (unitstyle === "float") return value.toFixed(2);
    if (unitstyle === "time") return value.toFixed(type === "int" ? 0 : 2) + " ms";
    if (unitstyle === "hertz") return value.toFixed(type === "int" ? 0 : 2) + " Hz";
    if (unitstyle === "decibel") return value.toFixed(type === "int" ? 0 : 2) + " dB";
    if (unitstyle === "%") return value.toFixed(type === "int" ? 0 : 2) + " %";
    if (unitstyle === "pan") return value === 0 ? "C" : (type === "int" ? Math.abs(value) : Math.abs(value).toFixed(2)) + (value < 0 ? " L" : " R");
    if (unitstyle === "semitones") return value.toFixed(type === "int" ? 0 : 2) + " st";
    if (unitstyle === "midi") return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["toMIDI"])(value);
    if (unitstyle === "custom") return value.toFixed(type === "int" ? 0 : 2) + " " + units;
    if (unitstyle === "native") return value.toFixed(type === "int" ? 0 : 2);
    return "N/A";
  }

  fetchAttribute() {
    for (var i = 0; i < this.root.host.attributes.length; i++) {
      var attr = this.root.host.attributes[i];
      var name = attr.name,
          value = attr.value;
      this.params[name] = value.match(/^[+-]?(\d*\.)?\d+$/) ? +value : value;
    }
  }

  attributeChangedCallback(key, oldValue, value) {
    if (!this.isConnectedPolyfill) return;
    if (typeof value === "undefined" || value === null) return;
    this.setParamValue(key, value.match(/^[+-]?(\d*\.)?\d+$/) ? +value : value);
  }

  connectedCallback() {
    this.fetchAttribute();
    this.paint();
    this.isConnectedPolyfill = true;
  }

  setParamValue(key, value) {
    if (!(key in this.params)) return;
    this.params[key] = value;
    if (key === "value") this.change();
    this.paint();
  }

  setValue(value) {
    this.setParamValue("value", value);
  }

  change() {
    this.dispatchEvent(new _ChangeEvent__WEBPACK_IMPORTED_MODULE_2__["LiveComponentChangeEvent"]("change", {
      detail: {
        value: this.params.value,
        displayValue: this.displayValue
      }
    }));
  }

  paint() {}

  render() {
    return '<canvas tabindex="1" style="outline: none;"></canvas>';
  }

}
LiveComponent.params = {
  value: 0,
  active: true,
  focus: false,
  width: 15,
  height: 15,
  shortname: "",
  longname: "",
  order: 0,
  linknames: false,
  type: "float",
  mmin: 0,
  mmax: 1,
  enum: [],
  enum_icons: [],
  modmode: "none",
  initial_enable: false,
  initial: [0],
  unitstyle: "float",
  units: "",
  exponent: 1,
  step: 0,
  steps: 0,
  speedlim: 5,
  defer: false,
  invisible: "automated",
  mappable: true
};

/***/ }),

/***/ "./src/Button.ts":
/*!***********************!*\
  !*** ./src/Button.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LiveButton; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base */ "./src/Base.ts");


class LiveButton extends _Base__WEBPACK_IMPORTED_MODULE_1__["LiveComponent"] {
  constructor() {
    super(...arguments);
    this._inTouch = false;

    this.handlePointerDown = () => {
      this._inTouch = true;
      this.setParamValue("value", 1);
    };

    this.handlePointerUp = () => {
      this._inTouch = false;
      this.setParamValue("value", 0);
    };
  }

  static get params() {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, super.params, {
      shortname: "live.button",
      width: 15,
      height: 15,
      activebgcolor: "rgba(90, 90, 90, 1)",
      activebgoncolor: "rgba(109, 215, 255, 1)",
      bgcolor: "rgba(90, 90, 90, 1)",
      bgoncolor: "rgba(195, 195, 195, 1)",
      bordercolor: "rgba(80, 80, 80, 1)",
      focusbordercolor: "rgba(80, 80, 80, 1)"
    });
  }

  paint() {
    var _this$params = this.params,
        active = _this$params.active,
        focus = _this$params.focus,
        activebgcolor = _this$params.activebgcolor,
        activebgoncolor = _this$params.activebgoncolor,
        bgcolor = _this$params.bgcolor,
        bgoncolor = _this$params.bgoncolor,
        bordercolor = _this$params.bordercolor,
        focusbordercolor = _this$params.focusbordercolor,
        value = _this$params.value,
        width = _this$params.width,
        height = _this$params.height;
    var ctx = this.ctx;
    var borderWidth = 0.5;
    ctx.canvas.style.width = width + "px";
    ctx.canvas.style.height = height + "px";
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.lineWidth = borderWidth;
    var buttonBgColor = active ? value ? activebgoncolor : activebgcolor : value ? bgoncolor : bgcolor;
    var buttonBorderColor = focus ? focusbordercolor : bordercolor;
    ctx.fillStyle = buttonBgColor;
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * 0.5, width * 0.5 - 2 * borderWidth, height * 0.5 - 2 * borderWidth, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = buttonBorderColor;
    ctx.stroke();

    if (value && !this._inTouch) {
      setTimeout(() => this.setParamValue("value", 0), 100);
    }
  }

  resetPointers() {
    this._inTouch = false;
  }

}

/***/ }),

/***/ "./src/ChangeEvent.ts":
/*!****************************!*\
  !*** ./src/ChangeEvent.ts ***!
  \****************************/
/*! exports provided: LiveComponentChangeEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveComponentChangeEvent", function() { return LiveComponentChangeEvent; });
class LiveComponentChangeEvent extends CustomEvent {}

/***/ }),

/***/ "./src/Dial.ts":
/*!*********************!*\
  !*** ./src/Dial.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LiveDial; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base */ "./src/Base.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");



class LiveDial extends _Base__WEBPACK_IMPORTED_MODULE_1__["LiveComponent"] {
  constructor() {
    super(...arguments);
    this._inTouch = false;
    this.interactionRect = [0, 0, 0, 0];

    this.handlePointerDown = e => {
      if (e.x < this.interactionRect[0] || e.x > this.interactionRect[0] + this.interactionRect[2] || e.y < this.interactionRect[1] || e.y > this.interactionRect[1] + this.interactionRect[3]) return;
      this._inTouch = true;
    };

    this.handlePointerDrag = e => {
      if (!this._inTouch) return;
      var newValue = this.getValueFromDelta(e);
      if (newValue !== this.params.value) this.setParamValue("value", newValue);
    };

    this.handlePointerUp = () => {
      this._inTouch = false;
    };
  }

  static get params() {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, super.params, {
      shortname: "live.dial",
      width: 45,
      height: 45,
      fontname: "Arial",
      fontsize: 12,
      fontface: "regular",
      appearance: "vertical",
      triangle: false,
      showname: true,
      shownumber: true,
      bordercolor: "rgba(90, 90, 90, 1)",
      focusbordercolor: "rgba(80, 80, 80, 1)",
      activedialcolor: "rgba(109, 215, 255, 1)",
      dialcolor: "rgba(195, 195, 195, 1)",
      activeneedlecolor: "rgba(40, 40, 40, 1)",
      needlecolor: "rgba(105, 105, 105, 1)",
      panelcolor: "rgba(165, 165, 165, 1)",
      textcolor: "rgba(0, 0, 0, 1)",
      tribordercolor: "rgba(50, 50, 50, 1)",
      tricolor: "rgba(40, 40, 40, 1)",
      mmin: 0,
      mmax: 127,
      type: "int"
    });
  }

  get trueSteps() {
    var _this$params = this.params,
        type = _this$params.type,
        mmax = _this$params.mmax,
        mmin = _this$params.mmin,
        steps = _this$params.steps,
        step = _this$params.step;
    var full = 100;
    var maxSteps = type === "enum" ? this.params.enum.length : type === "int" ? mmax - mmin : full;

    if (step) {
      if (type === "enum") return this.params.enum.length;
      if (type === "int") return Math.min(Math.floor((mmax - mmin) / Math.round(step)), maxSteps);
      return Math.min(Math.floor((mmax - mmin) / step), maxSteps);
    }

    if (steps) return Math.min(steps, maxSteps);
    return maxSteps;
  }

  get distance() {
    var _this$params2 = this.params,
        type = _this$params2.type,
        mmax = _this$params2.mmax,
        mmin = _this$params2.mmin,
        value = _this$params2.value;
    return type === "enum" ? value / this.params.enum.length : (value - mmin) / (mmax - mmin);
  }

  get stepRange() {
    var _this$params3 = this.params,
        type = _this$params3.type,
        mmax = _this$params3.mmax,
        mmin = _this$params3.mmin,
        step = _this$params3.step;
    var full = 100;
    if (step) return type === "enum" ? full / this.params.enum.length : type === "int" ? Math.round(step) / (mmax - mmin) * full : step / (mmax - mmin) * full;
    var trueSteps = this.trueSteps;
    return full / trueSteps;
  }

  paint() {
    var _this$params4 = this.params,
        width = _this$params4.width,
        height = _this$params4.height,
        active = _this$params4.active,
        focus = _this$params4.focus,
        fontname = _this$params4.fontname,
        fontsize = _this$params4.fontsize,
        fontface = _this$params4.fontface,
        appearance = _this$params4.appearance,
        triangle = _this$params4.triangle,
        showname = _this$params4.showname,
        shownumber = _this$params4.shownumber,
        bordercolor = _this$params4.bordercolor,
        focusbordercolor = _this$params4.focusbordercolor,
        panelcolor = _this$params4.panelcolor,
        activeneedlecolor = _this$params4.activeneedlecolor,
        needlecolor = _this$params4.needlecolor,
        activedialcolor = _this$params4.activedialcolor,
        dialcolor = _this$params4.dialcolor,
        textcolor = _this$params4.textcolor,
        tribordercolor = _this$params4.tribordercolor,
        tricolor = _this$params4.tricolor,
        shortname = _this$params4.shortname;
    var ctx = this.ctx;
    var distance = this.distance;
    ctx.canvas.style.width = width + "px";
    ctx.canvas.style.height = height + "px";
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    var triangleHeight = 4;
    var triangleLineWidth = 0.6;
    var start;
    var end;
    var valPos;
    var dialHeight;

    if (appearance === "tiny") {
      dialHeight = 18;
      start = -3 * Math.PI * 0.5;
      end = 0;
      valPos = start + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["toRad"])(this.distance * 270);
    } else {
      dialHeight = 25;
      start = Math.PI - 3 * Math.PI / 8;
      end = 2 * Math.PI + 3 * Math.PI / 8;
      valPos = start + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["toRad"])(this.distance * 315);
    }

    var dialRadius = dialHeight * 0.5;
    var dialCenterX = width * 0.5;
    var dialCenterY = height * 0.5 + 1;

    if (appearance === "panel") {
      dialCenterY += 10;
    } else if (appearance === "vertical") {
      if (shownumber) dialCenterY -= fontsize - 5;
      if (showname) dialCenterY += fontsize - 5;
      if (triangle) dialCenterY += triangleHeight - 1;
    } else if (appearance === "tiny") {
      if (showname) {
        dialCenterY += 6;
        dialCenterX = 10;
      }
    }

    this.interactionRect = [0, dialCenterY - dialHeight * 0.5, width, dialHeight];
    var arcStartX = dialCenterX + dialHeight * 0.5 * Math.cos(start);
    var arcStartY = dialCenterY + dialHeight * 0.5 * Math.sin(start);
    var arcEndX = dialCenterX + dialHeight * 0.5 * Math.cos(end);
    var arcEndY = dialCenterY + dialHeight * 0.5 * Math.sin(end);
    var valuePosX = dialCenterX + dialHeight * 0.5 * Math.cos(valPos);
    var valuePosY = dialCenterY + dialHeight * 0.5 * Math.sin(valPos);
    var endCapRadius = 1;
    var lineWidth = 2;
    var panelOffset = 0;

    if (appearance === "panel") {
      panelOffset = 5;
      ctx.strokeStyle = focus ? focusbordercolor : bordercolor;
      ctx.lineWidth = 0.4;
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["roundedRect"])(ctx, 1, 1, width - 2, height - 2, 5);
      ctx.fillStyle = panelcolor;
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["fillRoundedRect"])(ctx, 1.2, 1.2, width - 2.4, 30 - 0.4, [5, 5, 0, 0]);
    }

    ctx.strokeStyle = active ? activeneedlecolor : needlecolor;
    ctx.fillStyle = ctx.strokeStyle;
    ctx.lineWidth = lineWidth; // draw background arc endcaps

    ctx.beginPath();
    ctx.arc(arcStartX, arcStartY, endCapRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(arcEndX, arcEndY, endCapRadius, 0, 2 * Math.PI);
    ctx.fill(); // draw background arc

    ctx.beginPath();
    ctx.arc(dialCenterX, dialCenterY, dialRadius, start, end);
    ctx.stroke(); // draw value arc, which changes if triangle is enabled

    ctx.strokeStyle = active ? activedialcolor : dialcolor;
    ctx.fillStyle = ctx.strokeStyle;

    if (triangle) {
      var midpoint = (start + end) * 0.5;
      ctx.strokeStyle = active ? activedialcolor : dialcolor;
      ctx.beginPath();
      if (distance > 0.5) ctx.arc(dialCenterX, dialCenterY, dialRadius, midpoint, valPos);else ctx.arc(dialCenterX, dialCenterY, dialRadius, valPos, midpoint);
      ctx.stroke();
    } else {
      // draw value arc endcap
      ctx.beginPath();
      ctx.arc(arcStartX, arcStartY, endCapRadius, 0, 2 * Math.PI);
      ctx.fill(); // draw value arc

      ctx.beginPath();
      ctx.arc(dialCenterX, dialCenterY, dialRadius, start, valPos);
      ctx.stroke();
    } // draw dial
    // draw dial round endcaps


    ctx.strokeStyle = active ? activeneedlecolor : needlecolor;
    ctx.fillStyle = ctx.strokeStyle;
    ctx.beginPath();
    ctx.arc(dialCenterX, dialCenterY, endCapRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(valuePosX, valuePosY, endCapRadius, 0, 2 * Math.PI);
    ctx.fill(); // draw dial line

    ctx.beginPath();
    ctx.moveTo(dialCenterX, dialCenterY);
    ctx.lineTo(valuePosX, valuePosY);
    ctx.stroke(); // add text if it is enabled

    ctx.font = "".concat(fontface === "regular" ? "" : fontface, " ").concat(fontsize, "px ").concat(fontname, ", sans-serif");
    ctx.fillStyle = textcolor;

    if (showname) {
      if (appearance === "tiny") {
        ctx.textAlign = "left";
        ctx.fillText(shortname, 0, panelOffset + fontsize, width);
      } else {
        ctx.textAlign = "center";
        ctx.fillText(shortname, width * 0.5, panelOffset + fontsize, width);
      }
    }

    if (shownumber) {
      var tinyOffset = appearance === "tiny" ? 12 : 0;

      if (appearance === "tiny") {
        ctx.textAlign = "left";
        ctx.fillText(this.displayValue, tinyOffset, height - panelOffset, width);
      } else {
        ctx.textAlign = "center";
        ctx.fillText(this.displayValue, width * 0.5, height - panelOffset, width);
      }
    } // draw triangle if it is enabled


    if (triangle) {
      if (!distance) ctx.fillStyle = tricolor;else if (!active) ctx.fillStyle = dialcolor;else ctx.fillStyle = activedialcolor;
      ctx.beginPath();

      if (appearance === "tiny") {
        var tipPositionX = dialCenterX + dialHeight * 0.5 * Math.cos(-3 * Math.PI / 4) - 1;
        var tipPositionY = dialCenterY + dialHeight * 0.5 * Math.sin(-3 * Math.PI / 4) - 1;
        ctx.moveTo(tipPositionX, tipPositionY);
        ctx.lineTo(tipPositionX - triangleHeight, tipPositionY);
        ctx.lineTo(tipPositionX, tipPositionY - triangleHeight);
        ctx.lineTo(tipPositionX, tipPositionY);
      } else {
        ctx.moveTo(dialCenterX, dialCenterY - dialRadius - 1);
        ctx.lineTo(dialCenterX - triangleHeight, dialCenterY - dialRadius - 1 - triangleHeight);
        ctx.lineTo(dialCenterX + triangleHeight, dialCenterY - dialRadius - 1 - triangleHeight);
        ctx.lineTo(dialCenterX, dialCenterY - dialRadius - 1);
      }

      ctx.fill();
      ctx.strokeStyle = tribordercolor || "transparent";
      ctx.lineWidth = triangleLineWidth;
      ctx.stroke();
    }
  }

  getValueFromDelta(e) {
    var _this$params5 = this.params,
        type = _this$params5.type,
        mmin = _this$params5.mmin,
        mmax = _this$params5.mmax;
    var stepRange = this.stepRange;
    var trueSteps = this.trueSteps;
    var step = type === "enum" ? 1 : this.params.step || (mmax - mmin) / trueSteps;
    var prevSteps = type === "enum" ? e.prevValue : e.prevValue / step;
    var dSteps = Math.round((e.fromY - e.y) / stepRange);
    var steps = Math.min(trueSteps, Math.max(0, prevSteps + dSteps));
    if (type === "enum") return steps;
    if (type === "int") return Math.round(steps * step + mmin);
    return steps * step + mmin;
  }

  resetPointers() {
    this._inTouch = false;
  }

}

/***/ }),

/***/ "./src/Meter.ts":
/*!**********************!*\
  !*** ./src/Meter.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LiveMeter; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base */ "./src/Base.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");



class LiveMeter extends _Base__WEBPACK_IMPORTED_MODULE_1__["LiveComponent"] {
  constructor() {
    super(...arguments);
    this.paintValue = 0;
    this.maxValue = 0;
    this.paintTimer = void 0;
    this.maxTimer = void 0;
  }

  static get params() {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, super.params, {
      shortname: "live.meter~",
      width: 120,
      height: 15,
      mode: "linear",
      clip_size: "normal",
      interval: 20,
      orientation: "vertical",
      bgcolor: "rgba(40, 40, 40, 1)",
      inactivecoldcolor: "rgba(130, 130, 130, 1)",
      inactivewarmcolor: "rgba(149, 149, 149, 1)",
      coldcolor: "rgba(12, 248, 100, 1)",
      warmcolor: "rgba(195, 248, 100, 1)",
      hotcolor: "rgba(255, 193, 10, 1)",
      overloadcolor: "rgba(255, 10, 10, 1)"
    });
  }

  get distance() {
    var _this$params = this.params,
        mode = _this$params.mode,
        value = _this$params.value;
    return (mode === "decibel" ? Math.max(-70, value) : Object(_utils__WEBPACK_IMPORTED_MODULE_2__["atodb"])(Math.abs(value))) / 70 + 1;
  }

  paint(paintIn) {
    this.paintValue = Math.max(this.paintValue, this.distance);

    if (!paintIn) {
      if (!this.paintTimer) this.paintTimer = setTimeout(() => this.paint(true), this.params.interval);
      return;
    }

    this.paintTimer = undefined;
    var _this$params2 = this.params,
        active = _this$params2.active,
        width = _this$params2.width,
        height = _this$params2.height,
        orientation = _this$params2.orientation,
        clip_size = _this$params2.clip_size,
        bgcolor = _this$params2.bgcolor,
        inactivecoldcolor = _this$params2.inactivecoldcolor,
        inactivewarmcolor = _this$params2.inactivewarmcolor,
        coldcolor = _this$params2.coldcolor,
        warmcolor = _this$params2.warmcolor,
        hotcolor = _this$params2.hotcolor,
        overloadcolor = _this$params2.overloadcolor;
    var ctx = this.ctx;
    var clip = clip_size === "normal" ? 10 : 20;
    var paintValue = this.paintValue;

    if (paintValue > this.maxValue) {
      this.maxValue = paintValue;
      if (this.maxTimer) clearTimeout(this.maxTimer);
      this.maxTimer = setTimeout(() => this.maxValue = this.paintValue, 1000);
    }

    var maxValue = this.maxValue;
    ctx.canvas.style.width = width + "px";
    ctx.canvas.style.height = height + "px";
    ctx.canvas.width = width;
    ctx.canvas.height = height;

    if (orientation === "horizontal") {
      var warmStop = width - clip - 1;
      var hotStop = width - clip;
      var gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, active ? coldcolor : inactivecoldcolor);
      gradient.addColorStop(warmStop / width, active ? warmcolor : inactivewarmcolor);
      gradient.addColorStop(hotStop / width, active ? hotcolor : inactivewarmcolor);
      gradient.addColorStop(1, active ? overloadcolor : inactivewarmcolor);
      ctx.fillStyle = bgcolor;
      if (paintValue < 1) ctx.fillRect(0, 0, warmStop, height);
      if (paintValue < 2) ctx.fillRect(hotStop, 0, clip, height);
      ctx.fillStyle = gradient;
      if (paintValue > 0) ctx.fillRect(0, 0, Math.min(1, paintValue) * warmStop, height);
      if (paintValue > 1) ctx.fillRect(hotStop, 0, Math.min(1, (paintValue - 1) * 10) * clip, height);

      if (maxValue > paintValue) {
        if (maxValue <= 1) ctx.fillRect(Math.min(warmStop - 1, maxValue * warmStop), 0, 1, height);
        if (maxValue > 1) ctx.fillRect(Math.min(width - 1, hotStop + (maxValue - 1) * 10 * clip), 0, 1, height);
      }
    } else {
      var _warmStop = clip + 1;

      var _hotStop = clip;

      var _gradient = ctx.createLinearGradient(0, height, 0, 0);

      _gradient.addColorStop(0, active ? coldcolor : inactivecoldcolor);

      _gradient.addColorStop((height - _warmStop) / height, active ? warmcolor : inactivewarmcolor);

      _gradient.addColorStop((height - _hotStop) / height, active ? hotcolor : inactivewarmcolor);

      _gradient.addColorStop(1, active ? overloadcolor : inactivewarmcolor);

      ctx.fillStyle = bgcolor;
      if (paintValue < 1) ctx.fillRect(0, _warmStop, width, height - _warmStop);
      if (paintValue < 2) ctx.fillRect(0, 0, width, _hotStop);
      ctx.fillStyle = _gradient;

      if (paintValue > 0) {
        var drawHeight = Math.min(1, paintValue) * (height - _warmStop);

        ctx.fillRect(0, height - drawHeight, width, drawHeight);
      }

      if (paintValue > 1) {
        var _drawHeight = Math.min(1, (paintValue - 1) * 10) * clip;

        ctx.fillRect(0, _hotStop - _drawHeight, width, _drawHeight);
      }

      if (maxValue > paintValue) {
        if (maxValue <= 1) ctx.fillRect(0, height - maxValue * (height - _warmStop), width, 1);
        if (maxValue > 1) ctx.fillRect(0, Math.max(0, _hotStop - (maxValue - 1) * 10 * clip), width, 1);
      }
    }

    this.paintValue = 0;
  }

}

/***/ }),

/***/ "./src/Numbox.ts":
/*!***********************!*\
  !*** ./src/Numbox.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LiveNumbox; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base */ "./src/Base.ts");


class LiveNumbox extends _Base__WEBPACK_IMPORTED_MODULE_1__["LiveComponent"] {
  constructor() {
    super(...arguments);
    this._inTouch = false;

    this.handlePointerDown = () => {
      this._inTouch = true;
    };

    this.handlePointerDrag = e => {
      if (!this._inTouch) return;
      var newValue = this.getValueFromDelta(e);
      if (newValue !== this.params.value) this.setParamValue("value", newValue);
    };

    this.handlePointerUp = () => {
      this._inTouch = false;
    };
  }

  static get params() {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, super.params, {
      shortname: "live.numbox",
      width: 45,
      height: 15,
      fontname: "Arial",
      fontsize: 10,
      fontface: "regular",
      appearance: "default",
      activebgcolor: "rgba(195, 195, 195, 1)",
      bordercolor: "rgba(80, 80, 80, 1)",
      focusbordercolor: "rgba(80, 80, 80, 1)",
      textcolor: "rgba(0, 0, 0, 1)",
      tricolor: "rgba(195, 195, 195, 1)",
      activetricolor: "rgba(165, 165, 165, 1)",
      tricolor2: "rgba(165, 165, 165, 1)",
      activetricolor2: "rgba(109, 215, 255, 1)",
      activeslidercolor: "rgba(109, 215, 255, 1)",
      mmin: 0,
      mmax: 127,
      type: "int",
      unitstyle: "int"
    });
  }

  get trueSteps() {
    var _this$params = this.params,
        type = _this$params.type,
        mmax = _this$params.mmax,
        mmin = _this$params.mmin,
        steps = _this$params.steps,
        step = _this$params.step;
    var full = 100;
    var maxSteps = type === "enum" ? this.params.enum.length : type === "int" ? mmax - mmin : full;

    if (step) {
      if (type === "enum") return this.params.enum.length;
      if (type === "int") return Math.min(Math.floor((mmax - mmin) / Math.round(step)), maxSteps);
      return Math.min(Math.floor((mmax - mmin) / step), maxSteps);
    }

    if (steps) return Math.min(steps, maxSteps);
    return maxSteps;
  }

  get distance() {
    var _this$params2 = this.params,
        type = _this$params2.type,
        mmax = _this$params2.mmax,
        mmin = _this$params2.mmin,
        value = _this$params2.value;
    return type === "enum" ? value / this.params.enum.length : (value - mmin) / (mmax - mmin);
  }

  get stepRange() {
    var _this$params3 = this.params,
        type = _this$params3.type,
        mmax = _this$params3.mmax,
        mmin = _this$params3.mmin,
        step = _this$params3.step;
    var full = 100;
    if (step) return type === "enum" ? full / this.params.enum.length : type === "int" ? Math.round(step) / (mmax - mmin) * full : step / (mmax - mmin) * full;
    var trueSteps = this.trueSteps;
    return full / trueSteps;
  }

  paint() {
    var _this$params4 = this.params,
        width = _this$params4.width,
        height = _this$params4.height,
        active = _this$params4.active,
        focus = _this$params4.focus,
        fontname = _this$params4.fontname,
        fontsize = _this$params4.fontsize,
        fontface = _this$params4.fontface,
        appearance = _this$params4.appearance,
        activebgcolor = _this$params4.activebgcolor,
        bordercolor = _this$params4.bordercolor,
        focusbordercolor = _this$params4.focusbordercolor,
        textcolor = _this$params4.textcolor,
        tricolor = _this$params4.tricolor,
        activetricolor = _this$params4.activetricolor,
        tricolor2 = _this$params4.tricolor2,
        activetricolor2 = _this$params4.activetricolor2,
        activeslidercolor = _this$params4.activeslidercolor;
    var ctx = this.ctx;
    var distance = this.distance;
    var displayValue = this.displayValue;
    ctx.canvas.style.width = width + "px";
    ctx.canvas.style.height = height + "px";
    ctx.canvas.width = width;
    ctx.canvas.height = height; // draw background

    ctx.fillStyle = activebgcolor;
    ctx.rect(0, 0, width, height);
    ctx.fill(); // draw border (eventually we might need to redefine the shape)

    ctx.lineWidth = 1;
    ctx.strokeStyle = focus ? focusbordercolor : bordercolor;
    ctx.stroke();

    if (appearance === "slider" && active && distance) {
      ctx.fillStyle = activeslidercolor;
      ctx.fillRect(0.5, 0.5, distance * width - 1, height - 1);
    }

    if (appearance === "triangle") {
      var triangleHeight = 8;
      ctx.fillStyle = active ? distance ? activetricolor2 : activetricolor : distance ? tricolor2 : tricolor;
      ctx.beginPath();
      ctx.moveTo(width - triangleHeight - 0.5, height * 0.5);
      ctx.lineTo(width - 0.5, 0.5);
      ctx.lineTo(width - 0.5, height - 0.5);
      ctx.closePath();
      ctx.fill();
    } // display the text


    ctx.font = "".concat(fontface === "regular" ? "" : fontface, " ").concat(fontsize, "px ").concat(fontname, ", sans-serif");
    ctx.fillStyle = textcolor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(displayValue, width * 0.5, height * 0.5, width);
  }

  getValueFromDelta(e) {
    var _this$params5 = this.params,
        type = _this$params5.type,
        mmin = _this$params5.mmin,
        mmax = _this$params5.mmax;
    var stepRange = this.stepRange;
    var trueSteps = this.trueSteps;
    var step = type === "enum" ? 1 : this.params.step || (mmax - mmin) / trueSteps;
    var prevSteps = type === "enum" ? e.prevValue : e.prevValue / step;
    var dSteps = Math.round((e.fromY - e.y) / stepRange);
    var steps = Math.min(trueSteps, Math.max(0, prevSteps + dSteps));
    if (type === "enum") return steps;
    if (type === "int") return Math.round(steps * step + mmin);
    return steps * step + mmin;
  }

  resetPointers() {
    this._inTouch = false;
  }

}

/***/ }),

/***/ "./src/Slider.ts":
/*!***********************!*\
  !*** ./src/Slider.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LiveSlider; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base */ "./src/Base.ts");


class LiveSlider extends _Base__WEBPACK_IMPORTED_MODULE_1__["LiveComponent"] {
  constructor() {
    super(...arguments);
    this._inTouch = false;
    this.interactionRect = [0, 0, 0, 0];

    this.handlePointerDown = e => {
      var value = this.params.value;
      if (e.x < this.interactionRect[0] || e.x > this.interactionRect[0] + this.interactionRect[2] || e.y < this.interactionRect[1] || e.y > this.interactionRect[1] + this.interactionRect[3]) return;
      var newValue = this.getValueFromPos(e);
      if (newValue !== value) this.setParamValue("value", this.getValueFromPos(e));
      this._inTouch = true;
    };

    this.handlePointerDrag = e => {
      if (!this._inTouch) return;
      var newValue = this.getValueFromPos(e);
      if (newValue !== this.params.value) this.setParamValue("value", newValue);
    };

    this.handlePointerUp = () => {
      this._inTouch = false;
    };
  }

  static get params() {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, super.params, {
      shortname: "live.slider",
      width: 40,
      height: 90,
      fontname: "Arial",
      fontsize: 12,
      fontface: "regular",
      orientation: "vertical",
      showname: true,
      shownumber: true,
      slidercolor: "rgba(40, 40, 40, 1)",
      textcolor: "rgba(0, 0, 0, 1)",
      tribordercolor: "rgba(80, 80, 80, 1)",
      trioncolor: "rgba(0, 0, 0, 1)",
      tricolor: "rgba(165, 165, 165, 1)",
      relative: false,
      mmin: 0,
      mmax: 127,
      type: "int"
    });
  }

  get trueSteps() {
    var _this$params = this.params,
        orientation = _this$params.orientation,
        type = _this$params.type,
        mmax = _this$params.mmax,
        mmin = _this$params.mmin,
        steps = _this$params.steps,
        step = _this$params.step;
    var full = this.interactionRect[orientation === "vertical" ? 3 : 2];
    var maxSteps = type === "enum" ? this.params.enum.length : type === "int" ? mmax - mmin : full;

    if (step) {
      if (type === "enum") return this.params.enum.length;
      if (type === "int") return Math.min(Math.floor((mmax - mmin) / Math.round(step)), maxSteps);
      return Math.min(Math.floor((mmax - mmin) / step), maxSteps);
    }

    if (steps) return Math.min(steps, maxSteps);
    return maxSteps;
  }

  get distance() {
    var _this$params2 = this.params,
        type = _this$params2.type,
        mmax = _this$params2.mmax,
        mmin = _this$params2.mmin,
        value = _this$params2.value;
    return type === "enum" ? value / this.params.enum.length : (value - mmin) / (mmax - mmin);
  }

  get stepRange() {
    var _this$params3 = this.params,
        orientation = _this$params3.orientation,
        type = _this$params3.type,
        mmax = _this$params3.mmax,
        mmin = _this$params3.mmin,
        step = _this$params3.step;
    var full = this.interactionRect[orientation === "vertical" ? 3 : 2];
    if (step) return type === "enum" ? full / this.params.enum.length : type === "int" ? Math.round(step) / (mmax - mmin) * full : step / (mmax - mmin) * full;
    var trueSteps = this.trueSteps;
    return full / trueSteps;
  }

  paint() {
    var _this$params4 = this.params,
        width = _this$params4.width,
        height = _this$params4.height,
        fontname = _this$params4.fontname,
        fontsize = _this$params4.fontsize,
        fontface = _this$params4.fontface,
        orientation = _this$params4.orientation,
        showname = _this$params4.showname,
        shownumber = _this$params4.shownumber,
        slidercolor = _this$params4.slidercolor,
        textcolor = _this$params4.textcolor,
        tribordercolor = _this$params4.tribordercolor,
        trioncolor = _this$params4.trioncolor,
        tricolor = _this$params4.tricolor,
        shortname = _this$params4.shortname;
    var ctx = this.ctx;
    var lineWidth = 0.5;
    var padding = 8;
    var distance = this.distance;
    var displayValue = this.displayValue;
    ctx.canvas.style.width = width + "px";
    ctx.canvas.style.height = height + "px";
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = slidercolor;

    if (orientation === "vertical") {
      ctx.beginPath();
      ctx.moveTo(width * 0.5, fontsize + padding);
      ctx.lineTo(width * 0.5, height - (fontsize + padding));
      ctx.stroke();
      var interactionWidth = width * 0.5;
      this.interactionRect = [width * 0.5 - interactionWidth * 0.5, fontsize + padding, interactionWidth, height - 2 * (fontsize + padding)];
      ctx.lineWidth = 1;
      ctx.strokeStyle = tribordercolor;
      var triOrigin = [width * 0.5 + lineWidth * 0.5 + 0.5, this.interactionRect[1] - 4 + this.interactionRect[3] * (1 - distance)];
      ctx.beginPath();
      ctx.moveTo(triOrigin[0], triOrigin[1] + 4);
      ctx.lineTo(triOrigin[0] + 8, triOrigin[1]);
      ctx.lineTo(triOrigin[0] + 8, triOrigin[1] + 8);
      ctx.lineTo(triOrigin[0], triOrigin[1] + 4);
      ctx.stroke();
      ctx.fillStyle = this._inTouch ? trioncolor : tricolor;
      ctx.fill();
      ctx.font = "".concat(fontface === "regular" ? "" : fontface, " ").concat(fontsize, "px ").concat(fontname, ", sans-serif");
      ctx.textAlign = "center";
      ctx.fillStyle = textcolor;
      if (showname) ctx.fillText(shortname, width * 0.5, fontsize, width);
      if (shownumber) ctx.fillText(displayValue, width * 0.5, height, width);
    } else {
      ctx.beginPath();
      ctx.moveTo(padding, height * 0.5);
      ctx.lineTo(width - padding, height * 0.5);
      ctx.stroke();

      var _interactionWidth = height * 0.5;

      this.interactionRect = [padding, height * 0.5 - _interactionWidth * 0.5, width - 2 * padding, _interactionWidth];
      ctx.lineWidth = 1;
      ctx.strokeStyle = tribordercolor;
      var _triOrigin = [this.interactionRect[0] + this.interactionRect[2] * distance - 4, height * 0.5 + lineWidth * 0.5 + 2];
      ctx.beginPath();
      ctx.moveTo(_triOrigin[0], _triOrigin[1] + 8);
      ctx.lineTo(_triOrigin[0] + 4, _triOrigin[1]);
      ctx.lineTo(_triOrigin[0] + 8, _triOrigin[1] + 8);
      ctx.lineTo(_triOrigin[0], _triOrigin[1] + 8);
      ctx.stroke();
      ctx.fillStyle = this._inTouch ? trioncolor : tricolor;
      ctx.fill();
      ctx.font = "".concat(fontface === "regular" ? "" : fontface, " ").concat(fontsize, "px ").concat(fontname, ", sans-serif");
      ctx.textAlign = "center";
      ctx.fillStyle = textcolor;
      if (showname) ctx.fillText(shortname, width * 0.5, fontsize, width);
      ctx.textAlign = "left";
      if (shownumber) ctx.fillText(displayValue, 4, height, width);
    }
  }

  getValueFromPos(e) {
    var _this$params5 = this.params,
        orientation = _this$params5.orientation,
        type = _this$params5.type,
        mmin = _this$params5.mmin,
        mmax = _this$params5.mmax;
    var stepRange = this.stepRange;
    var trueSteps = this.trueSteps;
    var step = this.params.step || (mmax - mmin) / trueSteps;
    var steps = Math.round((orientation === "vertical" ? this.interactionRect[3] - (e.y - this.interactionRect[1]) : e.x - this.interactionRect[0]) / stepRange);
    steps = Math.min(trueSteps, Math.max(0, steps));
    if (type === "enum") return steps;
    if (type === "int") return Math.round(steps * step + mmin);
    return steps * step + mmin;
  }

  resetPointers() {
    this._inTouch = false;
  }

}

/***/ }),

/***/ "./src/Tab.ts":
/*!********************!*\
  !*** ./src/Tab.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LiveTab; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base */ "./src/Base.ts");


class LiveTab extends _Base__WEBPACK_IMPORTED_MODULE_1__["LiveComponent"] {
  constructor() {
    super(...arguments);
    this._inTouch = false;
    this.tabRects = [];

    this.handlePointerDown = e => {
      this._inTouch = true;

      for (var i = 0; i < this.tabRects.length; i++) {
        var rect = this.tabRects[i];

        if (e.x >= rect[0] && e.x <= rect[2] + rect[0] && e.y >= rect[1] && e.y <= rect[3] + rect[1]) {
          this.setParamValue("value", i);
          return;
        }
      }
    };

    this.handlePointerDrag = e => {
      this.handlePointerDown(e);
    };

    this.handlePointerUp = () => {
      this._inTouch = false;
    };
  }

  static get params() {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, super.params, {
      shortname: "live.tab",
      width: 90,
      height: 45,
      fontname: "Arial",
      fontsize: 10,
      fontface: "regular",
      activebgcolor: "rgba(165, 165, 165, 1)",
      activebgoncolor: "rgba(255, 181, 50, 1)",
      bgcolor: "rgba(165, 165, 165, 1)",
      bgoncolor: "rgba(195, 195, 195, 1)",
      bordercolor: "rgba(80, 80, 80, 1)",
      focusbordercolor: "rgba(80, 80, 80, 1)",
      textcolor: "rgba(90, 90, 90, 1)",
      textoncolor: "rgba(90, 90, 90, 1)",
      activetextcolor: "rgba(0, 0, 0, 1)",
      activetextoncolor: "rgba(0, 0, 0, 1)",
      mode: "equal",
      enum: ["one", "two", "three"],
      spacing_x: 6,
      spacing_y: 6,
      multiline: true
    });
  }

  getTabRects() {
    var _this$params = this.params,
        width = _this$params.width,
        height = _this$params.height,
        multiline = _this$params.multiline,
        mode = _this$params.mode,
        spacing_x = _this$params.spacing_x,
        spacing_y = _this$params.spacing_y;
    var enums = this.params.enum;
    var margin = 4;
    var minHeight = 10;
    var count = enums.length;
    var countPerLine = count;
    var lines = 1;
    var step = height / lines;
    var interval = 0;
    var rectWidth = 0;
    var spacingX = spacing_x * 0.5;
    var spacingY = spacing_y * 0.5;

    if (multiline && height >= 2 * minHeight) {
      lines = Math.max(1, Math.min(count, Math.floor(height / minHeight)));
      countPerLine = Math.ceil(count / lines); // if there's not enough height, increase the number of tabs per row

      while (lines * countPerLine < count) {
        countPerLine++;
        if (lines > 1) lines--;
      } // if there's extra height, reduce the number of rows


      while (lines * countPerLine > count && (lines - 1) * countPerLine >= count) {
        lines--;
      }

      step = height / lines;
    }

    if (mode === "equal") {
      interval = width / countPerLine;
      rectWidth = interval - spacingX;

      for (var i = 0; i < count; i++) {
        this.tabRects[i] = [i % countPerLine * interval + spacingX * 0.5, Math.floor(i / countPerLine) * step + spacingY * 0.5, rectWidth, height / lines - spacingY];
      }
    } else {
      var textWidths = [];

      for (var _i = 0; _i < lines; _i++) {
        var total = 0;
        var space = width;

        for (var j = _i * countPerLine; j < Math.min((_i + 1) * countPerLine, count); j++) {
          var textDimensions = this.ctx.measureText(enums[j]);
          textWidths[j] = textDimensions.width;
          total += textWidths[j];
          space -= 2 * margin + spacingX;
        }

        var used = 0;

        for (var _j = _i * countPerLine; _j < Math.min((_i + 1) * countPerLine, count); _j++) {
          var rectSpace = textWidths[_j] / total;
          this.tabRects[_j] = [used + spacingX * 0.5, _i * step + spacingY * 0.5, space * rectSpace + 2 * margin, height / lines - spacingY];
          used += this.tabRects[_j][2] + spacingX;
        }
      }
    }

    return this.tabRects;
  }

  paint() {
    var _this$params2 = this.params,
        active = _this$params2.active,
        focus = _this$params2.focus,
        fontname = _this$params2.fontname,
        fontsize = _this$params2.fontsize,
        fontface = _this$params2.fontface,
        activebgcolor = _this$params2.activebgcolor,
        activebgoncolor = _this$params2.activebgoncolor,
        bgcolor = _this$params2.bgcolor,
        bgoncolor = _this$params2.bgoncolor,
        bordercolor = _this$params2.bordercolor,
        focusbordercolor = _this$params2.focusbordercolor,
        textcolor = _this$params2.textcolor,
        textoncolor = _this$params2.textoncolor,
        activetextcolor = _this$params2.activetextcolor,
        activetextoncolor = _this$params2.activetextoncolor,
        value = _this$params2.value,
        width = _this$params2.width,
        height = _this$params2.height;
    var enums = this.params.enum;
    var ctx = this.ctx;
    var tabRects = this.getTabRects();
    var borderWidth = 0.5;
    ctx.canvas.style.width = width + "px";
    ctx.canvas.style.height = height + "px";
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.lineWidth = borderWidth;
    var buttonBorderColor = focus ? focusbordercolor : bordercolor;

    for (var i = 0; i < enums.length; i++) {
      var buttonBgColor = active ? value === i ? activebgoncolor : activebgcolor : value === i ? bgoncolor : bgcolor;
      ctx.fillStyle = buttonBgColor;
      ctx.beginPath();
      ctx.rect(...tabRects[i]);
      ctx.fill();
      ctx.strokeStyle = buttonBorderColor;
      ctx.stroke();
      ctx.font = "".concat(fontface === "regular" ? "" : fontface, " ").concat(fontsize, "px ").concat(fontname, ", sans-serif");
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = active ? value === i ? activetextoncolor : activetextcolor : value === i ? textoncolor : textcolor;
      ctx.fillText(enums[i], tabRects[i][0] + tabRects[i][2] * 0.5, tabRects[i][1] + tabRects[i][3] * 0.5);
    }
  }

  resetPointers() {
    this._inTouch = false;
  }

}

/***/ }),

/***/ "./src/Text.ts":
/*!*********************!*\
  !*** ./src/Text.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LiveText; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base */ "./src/Base.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");



class LiveText extends _Base__WEBPACK_IMPORTED_MODULE_1__["LiveComponent"] {
  constructor() {
    super(...arguments);
    this._inTouch = false;

    this.handlePointerDown = () => {
      var _this$params = this.params,
          value = _this$params.value,
          mode = _this$params.mode;
      this._inTouch = true;
      this.setParamValue("value", mode === "button" ? 1 : 1 - value);
    };

    this.handlePointerUp = () => {
      this._inTouch = false;
      if (this.params.mode === "button") this.setParamValue("value", 0);
    };
  }

  static get params() {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, super.params, {
      shortname: "live.text",
      width: 90,
      height: 45,
      fontname: "Arial",
      fontsize: 10,
      fontface: "regular",
      activebgcolor: "rgba(165, 165, 165, 1)",
      activebgoncolor: "rgba(255, 181, 50, 1)",
      bgcolor: "rgba(165, 165, 165, 1)",
      bgoncolor: "rgba(195, 195, 195, 1)",
      bordercolor: "rgba(80, 80, 80, 1)",
      focusbordercolor: "rgba(80, 80, 80, 1)",
      textcolor: "rgba(90, 90, 90, 1)",
      textoncolor: "rgba(90, 90, 90, 1)",
      activetextcolor: "rgba(0, 0, 0, 1)",
      activetextoncolor: "rgba(0, 0, 0, 1)",
      text: "A",
      texton: "B",
      mode: "toggle"
    });
  }

  paint() {
    var _this$params2 = this.params,
        active = _this$params2.active,
        focus = _this$params2.focus,
        fontname = _this$params2.fontname,
        fontsize = _this$params2.fontsize,
        fontface = _this$params2.fontface,
        text = _this$params2.text,
        texton = _this$params2.texton,
        activebgcolor = _this$params2.activebgcolor,
        activebgoncolor = _this$params2.activebgoncolor,
        bgcolor = _this$params2.bgcolor,
        bgoncolor = _this$params2.bgoncolor,
        bordercolor = _this$params2.bordercolor,
        focusbordercolor = _this$params2.focusbordercolor,
        textcolor = _this$params2.textcolor,
        textoncolor = _this$params2.textoncolor,
        activetextcolor = _this$params2.activetextcolor,
        activetextoncolor = _this$params2.activetextoncolor,
        mode = _this$params2.mode,
        value = _this$params2.value,
        width = _this$params2.width,
        height = _this$params2.height;
    var ctx = this.ctx;
    var borderWidth = 0.5;
    ctx.canvas.style.width = width + "px";
    ctx.canvas.style.height = height + "px";
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.lineWidth = borderWidth;
    var buttonBgColor = active ? value ? activebgoncolor : activebgcolor : value ? bgoncolor : bgcolor;
    var buttonBorderColor = focus ? focusbordercolor : bordercolor;
    ctx.fillStyle = buttonBgColor;

    if (mode === "button") {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["fillRoundedRect"])(ctx, 0.5, 0.5, width - 1, height - 1, height * 0.5 - 1);
    } else {
      ctx.beginPath();
      ctx.rect(0.5, 0.5, width - 1, height - 1);
      ctx.fill();
    }

    ctx.lineWidth = 0.5;
    ctx.strokeStyle = buttonBorderColor;
    ctx.stroke();
    ctx.font = "".concat(fontface === "regular" ? "" : fontface, " ").concat(fontsize, "px ").concat(fontname, ", sans-serif");
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = active ? value ? activetextoncolor : activetextcolor : value ? textoncolor : textcolor;
    ctx.fillText(value && mode === "toggle" ? texton : text, width * 0.5, height * 0.5);
  }

  resetPointers() {
    this._inTouch = false;
  }

}

/***/ }),

/***/ "./src/Toggle.ts":
/*!***********************!*\
  !*** ./src/Toggle.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LiveToggle; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base */ "./src/Base.ts");


class LiveToggle extends _Base__WEBPACK_IMPORTED_MODULE_1__["LiveComponent"] {
  constructor() {
    super(...arguments);

    this.handlePointerDown = () => {
      var value = this.params.value;
      this.setParamValue("value", 1 - value);
    };
  }

  static get params() {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, super.params, {
      shortname: "live.toggle",
      width: 15,
      height: 15,
      activebgcolor: "rgba(165, 165, 165, 1)",
      activebgoncolor: "rgba(255, 181, 50, 1)",
      bgcolor: "rgba(165, 165, 165, 1)",
      bgoncolor: "rgba(195, 195, 195, 1)",
      bordercolor: "rgba(80, 80, 80, 1)",
      focusbordercolor: "rgba(80, 80, 80, 1)"
    });
  }

  paint() {
    var _this$params = this.params,
        active = _this$params.active,
        focus = _this$params.focus,
        activebgcolor = _this$params.activebgcolor,
        activebgoncolor = _this$params.activebgoncolor,
        bgcolor = _this$params.bgcolor,
        bgoncolor = _this$params.bgoncolor,
        bordercolor = _this$params.bordercolor,
        focusbordercolor = _this$params.focusbordercolor,
        value = _this$params.value,
        width = _this$params.width,
        height = _this$params.height;
    var ctx = this.ctx;
    var borderWidth = 0.5;
    ctx.canvas.style.width = width + "px";
    ctx.canvas.style.height = height + "px";
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.lineWidth = borderWidth;
    var buttonBgColor = active ? value ? activebgoncolor : activebgcolor : value ? bgoncolor : bgcolor;
    var buttonBorderColor = focus ? focusbordercolor : bordercolor;
    ctx.fillStyle = buttonBgColor;
    ctx.beginPath();
    ctx.rect(borderWidth, borderWidth, width - 2 * borderWidth, height - 2 * borderWidth);
    ctx.fill();
    ctx.strokeStyle = buttonBorderColor;
    ctx.stroke();
  }

}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webcomponents_webcomponentsjs_webcomponents_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @webcomponents/webcomponentsjs/webcomponents-bundle */ "./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js");
/* harmony import */ var _webcomponents_webcomponentsjs_webcomponents_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_webcomponents_webcomponentsjs_webcomponents_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/Button.ts");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider */ "./src/Slider.ts");
/* harmony import */ var _Dial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dial */ "./src/Dial.ts");
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Toggle */ "./src/Toggle.ts");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Text */ "./src/Text.ts");
/* harmony import */ var _Numbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Numbox */ "./src/Numbox.ts");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tab */ "./src/Tab.ts");
/* harmony import */ var _Meter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Meter */ "./src/Meter.ts");









window.customElements.define("live-button", _Button__WEBPACK_IMPORTED_MODULE_1__["default"]);
window.customElements.define("live-toggle", _Toggle__WEBPACK_IMPORTED_MODULE_4__["default"]);
window.customElements.define("live-slider", _Slider__WEBPACK_IMPORTED_MODULE_2__["default"]);
window.customElements.define("live-dial", _Dial__WEBPACK_IMPORTED_MODULE_3__["default"]);
window.customElements.define("live-text", _Text__WEBPACK_IMPORTED_MODULE_5__["default"]);
window.customElements.define("live-numbox", _Numbox__WEBPACK_IMPORTED_MODULE_6__["default"]);
window.customElements.define("live-tab", _Tab__WEBPACK_IMPORTED_MODULE_7__["default"]);
window.customElements.define("live-meter", _Meter__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: toMIDI, toRad, atodb, dbtoa, roundedRect, fillRoundedRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMIDI", function() { return toMIDI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRad", function() { return toRad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atodb", function() { return atodb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbtoa", function() { return dbtoa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundedRect", function() { return roundedRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillRoundedRect", function() { return fillRoundedRect; });
var toMIDI = f => ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"][(f % 12 + 12) % 12] + Math.round(f / 12 - 2);
var toRad = degrees => degrees * Math.PI / 180;
var atodb = a => 20 * Math.log10(a);
var dbtoa = db => Math.pow(10, db / 20);
var roundedRect = (ctx, x, y, width, height, radius) => {
  var radii = [0, 0, 0, 0];
  if (typeof radius === "number") radii.fill(radius);else radius.forEach((v, i) => radii[i] = v);
  ctx.beginPath();
  ctx.moveTo(x + radii[0], y);
  ctx.lineTo(x + width - radii[1], y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radii[1]);
  ctx.lineTo(x + width, y + height - radii[2]);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radii[2], y + height);
  ctx.lineTo(x + radii[3], y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radii[3]);
  ctx.lineTo(x, y + radii[0]);
  ctx.quadraticCurveTo(x, y, x + radii[0], y);
  ctx.closePath();
  ctx.stroke();
};
var fillRoundedRect = (ctx, x, y, width, height, radius) => {
  var radii = [0, 0, 0, 0];
  if (typeof radius === "number") radii.fill(radius);else radius.forEach((v, i) => radii[i] = v);
  ctx.beginPath();
  ctx.moveTo(x + radii[0], y);
  ctx.lineTo(x + width - radii[1], y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radii[1]);
  ctx.lineTo(x + width, y + height - radii[2]);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radii[2], y + height);
  ctx.lineTo(x + radii[3], y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radii[3]);
  ctx.lineTo(x, y + radii[0]);
  ctx.quadraticCurveTo(x, y, x + radii[0], y);
  ctx.closePath();
  ctx.fill();
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvd2ViY29tcG9uZW50cy1idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQmFzZS5zY3NzPzdiNzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2hhbmdlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RpYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01ldGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9OdW1ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NsaWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFiLnRzIiwid2VicGFjazovLy8uL3NyYy9UZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9Ub2dnbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6WyJMaXZlQmFzZUNvbXBvbmVudCIsIkhUTUxFbGVtZW50IiwiY29uc3RydWN0b3IiLCJyb290IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImlubmVySFRNTCIsInJlbmRlciIsIkxpdmVDb21wb25lbnQiLCJvYnNlcnZlZEF0dHJpYnV0ZXMiLCJPYmplY3QiLCJrZXlzIiwicGFyYW1zIiwiY2FudmFzIiwiY3R4IiwiaXNDb25uZWN0ZWRQb2x5ZmlsbCIsImhhbmRsZUtleURvd24iLCJlIiwiaGFuZGxlS2V5VXAiLCJoYW5kbGVUb3VjaFN0YXJ0IiwiaGFuZGxlV2hlZWwiLCJoYW5kbGVDbGljayIsImhhbmRsZU1vdXNlRG93biIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZnJvbVgiLCJwYWdlWCIsImxlZnQiLCJmcm9tWSIsInBhZ2VZIiwidG9wIiwicHJldlZhbHVlIiwidmFsdWUiLCJoYW5kbGVQb2ludGVyRG93biIsIngiLCJ5Iiwib3JpZ2luYWxFdmVudCIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZVBvaW50ZXJEcmFnIiwibW92ZW1lbnRYIiwibW92ZW1lbnRZIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZVBvaW50ZXJVcCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNb3VzZU92ZXIiLCJoYW5kbGVNb3VzZU91dCIsImhhbmRsZUNvbnRleHRNZW51IiwiaGFuZGxlRm9jdXNJbiIsInBhaW50IiwiaGFuZGxlRm9jdXNPdXQiLCJwYXNzaXZlIiwiY2hpbGRyZW4iLCJnZXRDb250ZXh0IiwiZGlzcGxheVZhbHVlIiwidHlwZSIsInVuaXRzdHlsZSIsInVuaXRzIiwiZW51bSIsInRvRml4ZWQiLCJNYXRoIiwiYWJzIiwidG9NSURJIiwiZmV0Y2hBdHRyaWJ1dGUiLCJpIiwiaG9zdCIsImF0dHJpYnV0ZXMiLCJsZW5ndGgiLCJhdHRyIiwibmFtZSIsIm1hdGNoIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwia2V5Iiwib2xkVmFsdWUiLCJzZXRQYXJhbVZhbHVlIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJjaGFuZ2UiLCJzZXRWYWx1ZSIsImRpc3BhdGNoRXZlbnQiLCJMaXZlQ29tcG9uZW50Q2hhbmdlRXZlbnQiLCJkZXRhaWwiLCJhY3RpdmUiLCJ3aWR0aCIsImhlaWdodCIsInNob3J0bmFtZSIsImxvbmduYW1lIiwib3JkZXIiLCJsaW5rbmFtZXMiLCJtbWluIiwibW1heCIsImVudW1faWNvbnMiLCJtb2Rtb2RlIiwiaW5pdGlhbF9lbmFibGUiLCJpbml0aWFsIiwiZXhwb25lbnQiLCJzdGVwIiwic3RlcHMiLCJzcGVlZGxpbSIsImRlZmVyIiwiaW52aXNpYmxlIiwibWFwcGFibGUiLCJMaXZlQnV0dG9uIiwiX2luVG91Y2giLCJhY3RpdmViZ2NvbG9yIiwiYWN0aXZlYmdvbmNvbG9yIiwiYmdjb2xvciIsImJnb25jb2xvciIsImJvcmRlcmNvbG9yIiwiZm9jdXNib3JkZXJjb2xvciIsImJvcmRlcldpZHRoIiwic3R5bGUiLCJsaW5lV2lkdGgiLCJidXR0b25CZ0NvbG9yIiwiYnV0dG9uQm9yZGVyQ29sb3IiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJlbGxpcHNlIiwiUEkiLCJmaWxsIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJzZXRUaW1lb3V0IiwicmVzZXRQb2ludGVycyIsIkN1c3RvbUV2ZW50IiwiTGl2ZURpYWwiLCJpbnRlcmFjdGlvblJlY3QiLCJuZXdWYWx1ZSIsImdldFZhbHVlRnJvbURlbHRhIiwiZm9udG5hbWUiLCJmb250c2l6ZSIsImZvbnRmYWNlIiwiYXBwZWFyYW5jZSIsInRyaWFuZ2xlIiwic2hvd25hbWUiLCJzaG93bnVtYmVyIiwiYWN0aXZlZGlhbGNvbG9yIiwiZGlhbGNvbG9yIiwiYWN0aXZlbmVlZGxlY29sb3IiLCJuZWVkbGVjb2xvciIsInBhbmVsY29sb3IiLCJ0ZXh0Y29sb3IiLCJ0cmlib3JkZXJjb2xvciIsInRyaWNvbG9yIiwidHJ1ZVN0ZXBzIiwiZnVsbCIsIm1heFN0ZXBzIiwibWluIiwiZmxvb3IiLCJyb3VuZCIsImRpc3RhbmNlIiwic3RlcFJhbmdlIiwidHJpYW5nbGVIZWlnaHQiLCJ0cmlhbmdsZUxpbmVXaWR0aCIsInN0YXJ0IiwiZW5kIiwidmFsUG9zIiwiZGlhbEhlaWdodCIsInRvUmFkIiwiZGlhbFJhZGl1cyIsImRpYWxDZW50ZXJYIiwiZGlhbENlbnRlclkiLCJhcmNTdGFydFgiLCJjb3MiLCJhcmNTdGFydFkiLCJzaW4iLCJhcmNFbmRYIiwiYXJjRW5kWSIsInZhbHVlUG9zWCIsInZhbHVlUG9zWSIsImVuZENhcFJhZGl1cyIsInBhbmVsT2Zmc2V0Iiwicm91bmRlZFJlY3QiLCJmaWxsUm91bmRlZFJlY3QiLCJhcmMiLCJtaWRwb2ludCIsIm1vdmVUbyIsImxpbmVUbyIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsInRpbnlPZmZzZXQiLCJ0aXBQb3NpdGlvblgiLCJ0aXBQb3NpdGlvblkiLCJwcmV2U3RlcHMiLCJkU3RlcHMiLCJtYXgiLCJMaXZlTWV0ZXIiLCJwYWludFZhbHVlIiwibWF4VmFsdWUiLCJwYWludFRpbWVyIiwibWF4VGltZXIiLCJjbGlwX3NpemUiLCJpbnRlcnZhbCIsIm9yaWVudGF0aW9uIiwiaW5hY3RpdmVjb2xkY29sb3IiLCJpbmFjdGl2ZXdhcm1jb2xvciIsImNvbGRjb2xvciIsIndhcm1jb2xvciIsImhvdGNvbG9yIiwib3ZlcmxvYWRjb2xvciIsImF0b2RiIiwicGFpbnRJbiIsInVuZGVmaW5lZCIsImNsaXAiLCJjbGVhclRpbWVvdXQiLCJ3YXJtU3RvcCIsImhvdFN0b3AiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZmlsbFJlY3QiLCJkcmF3SGVpZ2h0IiwiTGl2ZU51bWJveCIsImFjdGl2ZXRyaWNvbG9yIiwidHJpY29sb3IyIiwiYWN0aXZldHJpY29sb3IyIiwiYWN0aXZlc2xpZGVyY29sb3IiLCJjbG9zZVBhdGgiLCJ0ZXh0QmFzZWxpbmUiLCJMaXZlU2xpZGVyIiwiZ2V0VmFsdWVGcm9tUG9zIiwic2xpZGVyY29sb3IiLCJ0cmlvbmNvbG9yIiwicmVsYXRpdmUiLCJwYWRkaW5nIiwiaW50ZXJhY3Rpb25XaWR0aCIsInRyaU9yaWdpbiIsIkxpdmVUYWIiLCJ0YWJSZWN0cyIsInRleHRvbmNvbG9yIiwiYWN0aXZldGV4dGNvbG9yIiwiYWN0aXZldGV4dG9uY29sb3IiLCJzcGFjaW5nX3giLCJzcGFjaW5nX3kiLCJtdWx0aWxpbmUiLCJnZXRUYWJSZWN0cyIsImVudW1zIiwibWFyZ2luIiwibWluSGVpZ2h0IiwiY291bnQiLCJjb3VudFBlckxpbmUiLCJsaW5lcyIsInJlY3RXaWR0aCIsInNwYWNpbmdYIiwic3BhY2luZ1kiLCJjZWlsIiwidGV4dFdpZHRocyIsInRvdGFsIiwic3BhY2UiLCJqIiwidGV4dERpbWVuc2lvbnMiLCJtZWFzdXJlVGV4dCIsInVzZWQiLCJyZWN0U3BhY2UiLCJMaXZlVGV4dCIsInRleHQiLCJ0ZXh0b24iLCJMaXZlVG9nZ2xlIiwid2luZG93IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJmIiwiZGVncmVlcyIsImEiLCJsb2cxMCIsImRidG9hIiwiZGIiLCJyYWRpdXMiLCJyYWRpaSIsImZvckVhY2giLCJ2IiwicXVhZHJhdGljQ3VydmVUbyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FB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QSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsc0JBQXNCLEVBQUU7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6TEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsdURBQVE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztB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QXRFO0FBQ0F4RSxLQUFHLENBQUNxSyxNQUFKLENBQVcvSSxDQUFDLEdBQUcyTyxLQUFLLENBQUMsQ0FBRCxDQUFwQixFQUF5QjFPLENBQUMsR0FBR2lELE1BQTdCO0FBQ0F4RSxLQUFHLENBQUNvUSxnQkFBSixDQUFxQjlPLENBQXJCLEVBQXdCQyxDQUFDLEdBQUdpRCxNQUE1QixFQUFvQ2xELENBQXBDLEVBQXVDQyxDQUFDLEdBQUdpRCxNQUFKLEdBQWF5TCxLQUFLLENBQUMsQ0FBRCxDQUF6RDtBQUNBalEsS0FBRyxDQUFDcUssTUFBSixDQUFXL0ksQ0FBWCxFQUFjQyxDQUFDLEdBQUcwTyxLQUFLLENBQUMsQ0FBRCxDQUF2QjtBQUNBalEsS0FBRyxDQUFDb1EsZ0JBQUosQ0FBcUI5TyxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkJELENBQUMsR0FBRzJPLEtBQUssQ0FBQyxDQUFELENBQXBDLEVBQXlDMU8sQ0FBekM7QUFDQXZCLEtBQUcsQ0FBQzhNLFNBQUo7QUFDQTlNLEtBQUcsQ0FBQzJHLElBQUo7QUFDSCxDQWhCTSxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkOyIsIi8qKlxuQGxpY2Vuc2UgQG5vY29tcGlsZVxuQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbihmdW5jdGlvbigpey8qXG5cbiBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4ndXNlIHN0cmljdCc7dmFyIHIsdD1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3c9PT10aGlzP3RoaXM6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmbnVsbCE9Z2xvYmFsP2dsb2JhbDp0aGlzLGNhPVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbihhLGIsYyl7YSE9QXJyYXkucHJvdG90eXBlJiZhIT1PYmplY3QucHJvdG90eXBlJiYoYVtiXT1jLnZhbHVlKX07ZnVuY3Rpb24gZGEoKXtkYT1mdW5jdGlvbigpe307dC5TeW1ib2x8fCh0LlN5bWJvbD1lYSl9dmFyIGVhPWZ1bmN0aW9uKCl7dmFyIGE9MDtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuXCJqc2NvbXBfc3ltYm9sX1wiKyhifHxcIlwiKSthKyt9fSgpO1xuZnVuY3Rpb24gZmEoKXtkYSgpO3ZhciBhPXQuU3ltYm9sLml0ZXJhdG9yO2F8fChhPXQuU3ltYm9sLml0ZXJhdG9yPXQuU3ltYm9sKFwiaXRlcmF0b3JcIikpO1wiZnVuY3Rpb25cIiE9dHlwZW9mIEFycmF5LnByb3RvdHlwZVthXSYmY2EoQXJyYXkucHJvdG90eXBlLGEse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBoYSh0aGlzKX19KTtmYT1mdW5jdGlvbigpe319ZnVuY3Rpb24gaGEoYSl7dmFyIGI9MDtyZXR1cm4gaWEoZnVuY3Rpb24oKXtyZXR1cm4gYjxhLmxlbmd0aD97ZG9uZTohMSx2YWx1ZTphW2IrK119Ontkb25lOiEwfX0pfWZ1bmN0aW9uIGlhKGEpe2ZhKCk7YT17bmV4dDphfTthW3QuU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtyZXR1cm4gYX1mdW5jdGlvbiBqYShhKXtmYSgpO3ZhciBiPWFbU3ltYm9sLml0ZXJhdG9yXTtyZXR1cm4gYj9iLmNhbGwoYSk6aGEoYSl9XG5mdW5jdGlvbiBrYShhKXtmb3IodmFyIGIsYz1bXTshKGI9YS5uZXh0KCkpLmRvbmU7KWMucHVzaChiLnZhbHVlKTtyZXR1cm4gY312YXIgbGE7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LnNldFByb3RvdHlwZU9mKWxhPU9iamVjdC5zZXRQcm90b3R5cGVPZjtlbHNle3ZhciBtYTthOnt2YXIgbmE9e0dhOiEwfSxvYT17fTt0cnl7b2EuX19wcm90b19fPW5hO21hPW9hLkdhO2JyZWFrIGF9Y2F0Y2goYSl7fW1hPSExfWxhPW1hP2Z1bmN0aW9uKGEsYil7YS5fX3Byb3RvX189YjtpZihhLl9fcHJvdG9fXyE9PWIpdGhyb3cgbmV3IFR5cGVFcnJvcihhK1wiIGlzIG5vdCBleHRlbnNpYmxlXCIpO3JldHVybiBhfTpudWxsfXZhciBwYT1sYTtmdW5jdGlvbiBxYSgpe3RoaXMuZj0hMTt0aGlzLmI9bnVsbDt0aGlzLmFhPXZvaWQgMDt0aGlzLmE9MTt0aGlzLkY9MDt0aGlzLmM9bnVsbH1cbmZ1bmN0aW9uIHJhKGEpe2lmKGEuZil0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTthLmY9ITB9cWEucHJvdG90eXBlLnU9ZnVuY3Rpb24oYSl7dGhpcy5hYT1hfTtmdW5jdGlvbiBzYShhLGIpe2EuYz17SmE6YixOYTohMH07YS5hPWEuRn1xYS5wcm90b3R5cGUucmV0dXJuPWZ1bmN0aW9uKGEpe3RoaXMuYz17cmV0dXJuOmF9O3RoaXMuYT10aGlzLkZ9O2Z1bmN0aW9uIHRhKGEsYil7YS5hPTM7cmV0dXJue3ZhbHVlOmJ9fWZ1bmN0aW9uIHVhKGEpe3RoaXMuYT1uZXcgcWE7dGhpcy5iPWF9ZnVuY3Rpb24gdmEoYSxiKXtyYShhLmEpO3ZhciBjPWEuYS5iO2lmKGMpcmV0dXJuIHdhKGEsXCJyZXR1cm5cImluIGM/Y1tcInJldHVyblwiXTpmdW5jdGlvbihhKXtyZXR1cm57dmFsdWU6YSxkb25lOiEwfX0sYixhLmEucmV0dXJuKTthLmEucmV0dXJuKGIpO3JldHVybiB4YShhKX1cbmZ1bmN0aW9uIHdhKGEsYixjLGQpe3RyeXt2YXIgZT1iLmNhbGwoYS5hLmIsYyk7aWYoIShlIGluc3RhbmNlb2YgT2JqZWN0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiSXRlcmF0b3IgcmVzdWx0IFwiK2UrXCIgaXMgbm90IGFuIG9iamVjdFwiKTtpZighZS5kb25lKXJldHVybiBhLmEuZj0hMSxlO3ZhciBmPWUudmFsdWV9Y2F0Y2goZyl7cmV0dXJuIGEuYS5iPW51bGwsc2EoYS5hLGcpLHhhKGEpfWEuYS5iPW51bGw7ZC5jYWxsKGEuYSxmKTtyZXR1cm4geGEoYSl9ZnVuY3Rpb24geGEoYSl7Zm9yKDthLmEuYTspdHJ5e3ZhciBiPWEuYihhLmEpO2lmKGIpcmV0dXJuIGEuYS5mPSExLHt2YWx1ZTpiLnZhbHVlLGRvbmU6ITF9fWNhdGNoKGMpe2EuYS5hYT12b2lkIDAsc2EoYS5hLGMpfWEuYS5mPSExO2lmKGEuYS5jKXtiPWEuYS5jO2EuYS5jPW51bGw7aWYoYi5OYSl0aHJvdyBiLkphO3JldHVybnt2YWx1ZTpiLnJldHVybixkb25lOiEwfX1yZXR1cm57dmFsdWU6dm9pZCAwLGRvbmU6ITB9fVxuZnVuY3Rpb24geWEoYSl7dGhpcy5uZXh0PWZ1bmN0aW9uKGIpe3JhKGEuYSk7YS5hLmI/Yj13YShhLGEuYS5iLm5leHQsYixhLmEudSk6KGEuYS51KGIpLGI9eGEoYSkpO3JldHVybiBifTt0aGlzLnRocm93PWZ1bmN0aW9uKGIpe3JhKGEuYSk7YS5hLmI/Yj13YShhLGEuYS5iW1widGhyb3dcIl0sYixhLmEudSk6KHNhKGEuYSxiKSxiPXhhKGEpKTtyZXR1cm4gYn07dGhpcy5yZXR1cm49ZnVuY3Rpb24oYil7cmV0dXJuIHZhKGEsYil9O2ZhKCk7dGhpc1tTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9fWZ1bmN0aW9uIEJhKGEsYil7Yj1uZXcgeWEobmV3IHVhKGIpKTtwYSYmcGEoYixhLnByb3RvdHlwZSk7cmV0dXJuIGJ9XG4oZnVuY3Rpb24oKXtpZighZnVuY3Rpb24oKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO2EuaW5pdEV2ZW50KFwiZm9vXCIsITAsITApO2EucHJldmVudERlZmF1bHQoKTtyZXR1cm4gYS5kZWZhdWx0UHJldmVudGVkfSgpKXt2YXIgYT1FdmVudC5wcm90b3R5cGUucHJldmVudERlZmF1bHQ7RXZlbnQucHJvdG90eXBlLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7dGhpcy5jYW5jZWxhYmxlJiYoYS5jYWxsKHRoaXMpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiZGVmYXVsdFByZXZlbnRlZFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4hMH0sY29uZmlndXJhYmxlOiEwfSkpfX12YXIgYj0vVHJpZGVudC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtpZighd2luZG93LkV2ZW50fHxiJiZcImZ1bmN0aW9uXCIhPT10eXBlb2Ygd2luZG93LkV2ZW50KXt2YXIgYz13aW5kb3cuRXZlbnQ7d2luZG93LkV2ZW50PWZ1bmN0aW9uKGEsYil7Yj1ifHx7fTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xuYy5pbml0RXZlbnQoYSwhIWIuYnViYmxlcywhIWIuY2FuY2VsYWJsZSk7cmV0dXJuIGN9O2lmKGMpe2Zvcih2YXIgZCBpbiBjKXdpbmRvdy5FdmVudFtkXT1jW2RdO3dpbmRvdy5FdmVudC5wcm90b3R5cGU9Yy5wcm90b3R5cGV9fWlmKCF3aW5kb3cuQ3VzdG9tRXZlbnR8fGImJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQpd2luZG93LkN1c3RvbUV2ZW50PWZ1bmN0aW9uKGEsYil7Yj1ifHx7fTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO2MuaW5pdEN1c3RvbUV2ZW50KGEsISFiLmJ1YmJsZXMsISFiLmNhbmNlbGFibGUsYi5kZXRhaWwpO3JldHVybiBjfSx3aW5kb3cuQ3VzdG9tRXZlbnQucHJvdG90eXBlPXdpbmRvdy5FdmVudC5wcm90b3R5cGU7aWYoIXdpbmRvdy5Nb3VzZUV2ZW50fHxiJiZcImZ1bmN0aW9uXCIhPT10eXBlb2Ygd2luZG93Lk1vdXNlRXZlbnQpe2I9d2luZG93Lk1vdXNlRXZlbnQ7d2luZG93Lk1vdXNlRXZlbnQ9XG5mdW5jdGlvbihhLGIpe2I9Ynx8e307dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50XCIpO2MuaW5pdE1vdXNlRXZlbnQoYSwhIWIuYnViYmxlcywhIWIuY2FuY2VsYWJsZSxiLnZpZXd8fHdpbmRvdyxiLmRldGFpbCxiLnNjcmVlblgsYi5zY3JlZW5ZLGIuY2xpZW50WCxiLmNsaWVudFksYi5jdHJsS2V5LGIuYWx0S2V5LGIuc2hpZnRLZXksYi5tZXRhS2V5LGIuYnV0dG9uLGIucmVsYXRlZFRhcmdldCk7cmV0dXJuIGN9O2lmKGIpZm9yKGQgaW4gYil3aW5kb3cuTW91c2VFdmVudFtkXT1iW2RdO3dpbmRvdy5Nb3VzZUV2ZW50LnByb3RvdHlwZT1iLnByb3RvdHlwZX1BcnJheS5mcm9tfHwoQXJyYXkuZnJvbT1mdW5jdGlvbihhKXtyZXR1cm5bXS5zbGljZS5jYWxsKGEpfSk7T2JqZWN0LmFzc2lnbnx8KE9iamVjdC5hc3NpZ249ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9W10uc2xpY2UuY2FsbChhcmd1bWVudHMsMSksZD0wLGU7ZDxjLmxlbmd0aDtkKyspaWYoZT1jW2RdKWZvcih2YXIgZj1cbmEsbj1lLHE9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobiksST0wO0k8cS5sZW5ndGg7SSsrKWU9cVtJXSxmW2VdPW5bZV07cmV0dXJuIGF9KX0pKCk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe31mdW5jdGlvbiBiKGEsYil7aWYoIWEuY2hpbGROb2Rlcy5sZW5ndGgpcmV0dXJuW107c3dpdGNoKGEubm9kZVR5cGUpe2Nhc2UgTm9kZS5ET0NVTUVOVF9OT0RFOnJldHVybiBRLmNhbGwoYSxiKTtjYXNlIE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpyZXR1cm4gRWIuY2FsbChhLGIpO2RlZmF1bHQ6cmV0dXJuIHguY2FsbChhLGIpfX12YXIgYz1cInVuZGVmaW5lZFwiPT09dHlwZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQsZD0hKGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKS5jbG9uZU5vZGUoKWluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCksZT0hMTsvVHJpZGVudC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEsYil7aWYoYSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKHZhciBkO2Q9YS5maXJzdENoaWxkOyljLmNhbGwodGhpcyxkLGIpO2Vsc2UgYy5jYWxsKHRoaXMsXG5hLGIpO3JldHVybiBhfWU9ITA7dmFyIGI9Tm9kZS5wcm90b3R5cGUuY2xvbmVOb2RlO05vZGUucHJvdG90eXBlLmNsb25lTm9kZT1mdW5jdGlvbihhKXthPWIuY2FsbCh0aGlzLGEpO3RoaXMgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50JiYoYS5fX3Byb3RvX189RG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUpO3JldHVybiBhfTtEb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsPUhUTUxFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsO0RvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3I9SFRNTEVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3I7T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUse25vZGVUeXBlOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFfSxjb25maWd1cmFibGU6ITB9LGxvY2FsTmFtZTp7Z2V0OmZ1bmN0aW9uKCl7fSxcbmNvbmZpZ3VyYWJsZTohMH0sbm9kZU5hbWU6e2dldDpmdW5jdGlvbigpe3JldHVyblwiI2RvY3VtZW50LWZyYWdtZW50XCJ9LGNvbmZpZ3VyYWJsZTohMH19KTt2YXIgYz1Ob2RlLnByb3RvdHlwZS5pbnNlcnRCZWZvcmU7Tm9kZS5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlPWE7dmFyIGQ9Tm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQ7Tm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQ9ZnVuY3Rpb24oYil7YiBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQ/YS5jYWxsKHRoaXMsYixudWxsKTpkLmNhbGwodGhpcyxiKTtyZXR1cm4gYn07dmFyIGY9Tm9kZS5wcm90b3R5cGUucmVtb3ZlQ2hpbGQsZz1Ob2RlLnByb3RvdHlwZS5yZXBsYWNlQ2hpbGQ7Tm9kZS5wcm90b3R5cGUucmVwbGFjZUNoaWxkPWZ1bmN0aW9uKGIsYyl7YiBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQ/KGEuY2FsbCh0aGlzLGIsYyksZi5jYWxsKHRoaXMsYykpOmcuY2FsbCh0aGlzLGIsYyk7cmV0dXJuIGN9O0RvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVEb2N1bWVudEZyYWdtZW50PVxuZnVuY3Rpb24oKXt2YXIgYT10aGlzLmNyZWF0ZUVsZW1lbnQoXCJkZlwiKTthLl9fcHJvdG9fXz1Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZTtyZXR1cm4gYX07dmFyIGg9RG9jdW1lbnQucHJvdG90eXBlLmltcG9ydE5vZGU7RG9jdW1lbnQucHJvdG90eXBlLmltcG9ydE5vZGU9ZnVuY3Rpb24oYSxiKXtiPWguY2FsbCh0aGlzLGEsYnx8ITEpO2EgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50JiYoYi5fX3Byb3RvX189RG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUpO3JldHVybiBifX0oKTt2YXIgZj1Ob2RlLnByb3RvdHlwZS5jbG9uZU5vZGUsZz1Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCxoPURvY3VtZW50LnByb3RvdHlwZS5pbXBvcnROb2RlLGs9Tm9kZS5wcm90b3R5cGUucmVtb3ZlQ2hpbGQsbD1Ob2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZCxuPU5vZGUucHJvdG90eXBlLnJlcGxhY2VDaGlsZCxxPURPTVBhcnNlci5wcm90b3R5cGUucGFyc2VGcm9tU3RyaW5nLFxuST1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5IVE1MRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIil8fHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbm5lckhUTUx9LHNldDpmdW5jdGlvbihhKXt0aGlzLmlubmVySFRNTD1hfX0sdj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5Ob2RlLnByb3RvdHlwZSxcImNoaWxkTm9kZXNcIil8fHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGlsZE5vZGVzfX0seD1FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLFE9RG9jdW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwsRWI9RG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbCxGYj1mdW5jdGlvbigpe2lmKCFjKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIiksYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7Yi5jb250ZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuYS5jb250ZW50LmFwcGVuZENoaWxkKGIpO2E9YS5jbG9uZU5vZGUoITApO3JldHVybiAwPT09YS5jb250ZW50LmNoaWxkTm9kZXMubGVuZ3RofHwwPT09YS5jb250ZW50LmZpcnN0Q2hpbGQuY29udGVudC5jaGlsZE5vZGVzLmxlbmd0aHx8ZH19KCk7aWYoYyl7dmFyIFQ9ZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwidGVtcGxhdGVcIiksSmE9ITAscD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7cC50ZXh0Q29udGVudD1cInRlbXBsYXRle2Rpc3BsYXk6bm9uZTt9XCI7dmFyIHphPWRvY3VtZW50LmhlYWQ7emEuaW5zZXJ0QmVmb3JlKHAsemEuZmlyc3RFbGVtZW50Q2hpbGQpO2EucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoSFRNTEVsZW1lbnQucHJvdG90eXBlKTt2YXIgYWE9IWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuaGFzT3duUHJvcGVydHkoXCJpbm5lckhUTUxcIik7YS5TPWZ1bmN0aW9uKGIpe2lmKCFiLmNvbnRlbnQmJmIubmFtZXNwYWNlVVJJPT09XG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubmFtZXNwYWNlVVJJKXtiLmNvbnRlbnQ9VC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Zm9yKHZhciBjO2M9Yi5maXJzdENoaWxkOylsLmNhbGwoYi5jb250ZW50LGMpO2lmKGFhKWIuX19wcm90b19fPWEucHJvdG90eXBlO2Vsc2UgaWYoYi5jbG9uZU5vZGU9ZnVuY3Rpb24oYil7cmV0dXJuIGEuYih0aGlzLGIpfSxKYSl0cnl7bShiKSx5KGIpfWNhdGNoKHZoKXtKYT0hMX1hLmEoYi5jb250ZW50KX19O3ZhciBYPXtvcHRpb246W1wic2VsZWN0XCJdLHRoZWFkOltcInRhYmxlXCJdLGNvbDpbXCJjb2xncm91cFwiLFwidGFibGVcIl0sdHI6W1widGJvZHlcIixcInRhYmxlXCJdLHRoOltcInRyXCIsXCJ0Ym9keVwiLFwidGFibGVcIl0sdGQ6W1widHJcIixcInRib2R5XCIsXCJ0YWJsZVwiXX0sbT1mdW5jdGlvbihiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYixcImlubmVySFRNTFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYmEodGhpcyl9LHNldDpmdW5jdGlvbihiKXt2YXIgYz1YWygvPChbYS16XVteL1xcMD5cXHgyMFxcdFxcclxcblxcZl0rKS9pLmV4ZWMoYil8fFxuW1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldO2lmKGMpZm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKyspYj1cIjxcIitjW2RdK1wiPlwiK2IrXCI8L1wiK2NbZF0rXCI+XCI7VC5ib2R5LmlubmVySFRNTD1iO2ZvcihhLmEoVCk7dGhpcy5jb250ZW50LmZpcnN0Q2hpbGQ7KWsuY2FsbCh0aGlzLmNvbnRlbnQsdGhpcy5jb250ZW50LmZpcnN0Q2hpbGQpO2I9VC5ib2R5O2lmKGMpZm9yKGQ9MDtkPGMubGVuZ3RoO2QrKyliPWIubGFzdENoaWxkO2Zvcig7Yi5maXJzdENoaWxkOylsLmNhbGwodGhpcy5jb250ZW50LGIuZmlyc3RDaGlsZCl9LGNvbmZpZ3VyYWJsZTohMH0pfSx5PWZ1bmN0aW9uKGEpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwib3V0ZXJIVE1MXCIse2dldDpmdW5jdGlvbigpe3JldHVyblwiPHRlbXBsYXRlPlwiK3RoaXMuaW5uZXJIVE1MK1wiPC90ZW1wbGF0ZT5cIn0sc2V0OmZ1bmN0aW9uKGEpe2lmKHRoaXMucGFyZW50Tm9kZSl7VC5ib2R5LmlubmVySFRNTD1hO2ZvcihhPXRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7VC5ib2R5LmZpcnN0Q2hpbGQ7KWwuY2FsbChhLFxuVC5ib2R5LmZpcnN0Q2hpbGQpO24uY2FsbCh0aGlzLnBhcmVudE5vZGUsYSx0aGlzKX1lbHNlIHRocm93IEVycm9yKFwiRmFpbGVkIHRvIHNldCB0aGUgJ291dGVySFRNTCcgcHJvcGVydHkgb24gJ0VsZW1lbnQnOiBUaGlzIGVsZW1lbnQgaGFzIG5vIHBhcmVudCBub2RlLlwiKTt9LGNvbmZpZ3VyYWJsZTohMH0pfTttKGEucHJvdG90eXBlKTt5KGEucHJvdG90eXBlKTthLmE9ZnVuY3Rpb24oYyl7Yz1iKGMsXCJ0ZW1wbGF0ZVwiKTtmb3IodmFyIGQ9MCxlPWMubGVuZ3RoLGY7ZDxlJiYoZj1jW2RdKTtkKyspYS5TKGYpfTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uKCl7YS5hKGRvY3VtZW50KX0pO0RvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50PWZ1bmN0aW9uKCl7dmFyIGI9Zy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7XCJ0ZW1wbGF0ZVwiPT09Yi5sb2NhbE5hbWUmJmEuUyhiKTtyZXR1cm4gYn07RE9NUGFyc2VyLnByb3RvdHlwZS5wYXJzZUZyb21TdHJpbmc9XG5mdW5jdGlvbigpe3ZhciBiPXEuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EuYShiKTtyZXR1cm4gYn07T2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYmEodGhpcyl9LHNldDpmdW5jdGlvbihiKXtJLnNldC5jYWxsKHRoaXMsYik7YS5hKHRoaXMpfSxjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMH0pO3ZhciBZPS9bJlxcdTAwQTBcIl0vZyxHYj0vWyZcXHUwMEEwPD5dL2csS2E9ZnVuY3Rpb24oYSl7c3dpdGNoKGEpe2Nhc2UgXCImXCI6cmV0dXJuXCImYW1wO1wiO2Nhc2UgXCI8XCI6cmV0dXJuXCImbHQ7XCI7Y2FzZSBcIj5cIjpyZXR1cm5cIiZndDtcIjtjYXNlICdcIic6cmV0dXJuXCImcXVvdDtcIjtjYXNlIFwiXFx1MDBhMFwiOnJldHVyblwiJm5ic3A7XCJ9fTtwPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj17fSxjPTA7YzxhLmxlbmd0aDtjKyspYlthW2NdXT0hMDtyZXR1cm4gYn07dmFyIEFhPXAoXCJhcmVhIGJhc2UgYnIgY29sIGNvbW1hbmQgZW1iZWQgaHIgaW1nIGlucHV0IGtleWdlbiBsaW5rIG1ldGEgcGFyYW0gc291cmNlIHRyYWNrIHdiclwiLnNwbGl0KFwiIFwiKSksXG5MYT1wKFwic3R5bGUgc2NyaXB0IHhtcCBpZnJhbWUgbm9lbWJlZCBub2ZyYW1lcyBwbGFpbnRleHQgbm9zY3JpcHRcIi5zcGxpdChcIiBcIikpLGJhPWZ1bmN0aW9uKGEsYil7XCJ0ZW1wbGF0ZVwiPT09YS5sb2NhbE5hbWUmJihhPWEuY29udGVudCk7Zm9yKHZhciBjPVwiXCIsZD1iP2IoYSk6di5nZXQuY2FsbChhKSxlPTAsZj1kLmxlbmd0aCxnO2U8ZiYmKGc9ZFtlXSk7ZSsrKXthOnt2YXIgaD1nO3ZhciBrPWE7dmFyIGw9Yjtzd2l0Y2goaC5ub2RlVHlwZSl7Y2FzZSBOb2RlLkVMRU1FTlRfTk9ERTpmb3IodmFyIG49aC5sb2NhbE5hbWUsbT1cIjxcIituLHE9aC5hdHRyaWJ1dGVzLHg9MDtrPXFbeF07eCsrKW0rPVwiIFwiK2submFtZSsnPVwiJytrLnZhbHVlLnJlcGxhY2UoWSxLYSkrJ1wiJzttKz1cIj5cIjtoPUFhW25dP206bStiYShoLGwpK1wiPC9cIituK1wiPlwiO2JyZWFrIGE7Y2FzZSBOb2RlLlRFWFRfTk9ERTpoPWguZGF0YTtoPWsmJkxhW2subG9jYWxOYW1lXT9oOmgucmVwbGFjZShHYixLYSk7YnJlYWsgYTtcbmNhc2UgTm9kZS5DT01NRU5UX05PREU6aD1cIlxceDNjIS0tXCIraC5kYXRhK1wiLS1cXHgzZVwiO2JyZWFrIGE7ZGVmYXVsdDp0aHJvdyB3aW5kb3cuY29uc29sZS5lcnJvcihoKSxFcnJvcihcIm5vdCBpbXBsZW1lbnRlZFwiKTt9fWMrPWh9cmV0dXJuIGN9fWlmKGN8fEZiKXthLmI9ZnVuY3Rpb24oYSxiKXt2YXIgYz1mLmNhbGwoYSwhMSk7dGhpcy5TJiZ0aGlzLlMoYyk7YiYmKGwuY2FsbChjLmNvbnRlbnQsZi5jYWxsKGEuY29udGVudCwhMCkpLE1hKGMuY29udGVudCxhLmNvbnRlbnQpKTtyZXR1cm4gY307dmFyIE1hPWZ1bmN0aW9uKGMsZCl7aWYoZC5xdWVyeVNlbGVjdG9yQWxsJiYoZD1iKGQsXCJ0ZW1wbGF0ZVwiKSwwIT09ZC5sZW5ndGgpKXtjPWIoYyxcInRlbXBsYXRlXCIpO2Zvcih2YXIgZT0wLGY9Yy5sZW5ndGgsZyxoO2U8ZjtlKyspaD1kW2VdLGc9Y1tlXSxhJiZhLlMmJmEuUyhoKSxuLmNhbGwoZy5wYXJlbnROb2RlLHNmLmNhbGwoaCwhMCksZyl9fSxzZj1Ob2RlLnByb3RvdHlwZS5jbG9uZU5vZGU9XG5mdW5jdGlvbihiKXtpZighZSYmZCYmdGhpcyBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpaWYoYil2YXIgYz10Zi5jYWxsKHRoaXMub3duZXJEb2N1bWVudCx0aGlzLCEwKTtlbHNlIHJldHVybiB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2Vsc2UgdGhpcy5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFJiZcInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZSYmdGhpcy5uYW1lc3BhY2VVUkk9PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5uYW1lc3BhY2VVUkk/Yz1hLmIodGhpcyxiKTpjPWYuY2FsbCh0aGlzLGIpO2ImJk1hKGMsdGhpcyk7cmV0dXJuIGN9LHRmPURvY3VtZW50LnByb3RvdHlwZS5pbXBvcnROb2RlPWZ1bmN0aW9uKGMsZCl7ZD1kfHwhMTtpZihcInRlbXBsYXRlXCI9PT1jLmxvY2FsTmFtZSlyZXR1cm4gYS5iKGMsZCk7dmFyIGU9aC5jYWxsKHRoaXMsYyxkKTtpZihkKXtNYShlLGMpO2M9YihlLCdzY3JpcHQ6bm90KFt0eXBlXSksc2NyaXB0W3R5cGU9XCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCJdLHNjcmlwdFt0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJdJyk7XG5mb3IodmFyIGYsaz0wO2s8Yy5sZW5ndGg7aysrKXtmPWNba107ZD1nLmNhbGwoZG9jdW1lbnQsXCJzY3JpcHRcIik7ZC50ZXh0Q29udGVudD1mLnRleHRDb250ZW50O2Zvcih2YXIgbD1mLmF0dHJpYnV0ZXMsbT0wLHE7bTxsLmxlbmd0aDttKyspcT1sW21dLGQuc2V0QXR0cmlidXRlKHEubmFtZSxxLnZhbHVlKTtuLmNhbGwoZi5wYXJlbnROb2RlLGQsZil9fXJldHVybiBlfX1jJiYod2luZG93LkhUTUxUZW1wbGF0ZUVsZW1lbnQ9YSl9KSgpO3ZhciBDYT1zZXRUaW1lb3V0O2Z1bmN0aW9uIERhKCl7fWZ1bmN0aW9uIEVhKGEsYil7cmV0dXJuIGZ1bmN0aW9uKCl7YS5hcHBseShiLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIHUoYSl7aWYoISh0aGlzIGluc3RhbmNlb2YgdSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ld1wiKTtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSl0aHJvdyBuZXcgVHlwZUVycm9yKFwibm90IGEgZnVuY3Rpb25cIik7dGhpcy5JPTA7dGhpcy5vYT0hMTt0aGlzLnc9dm9pZCAwO3RoaXMuVT1bXTtGYShhLHRoaXMpfVxuZnVuY3Rpb24gR2EoYSxiKXtmb3IoOzM9PT1hLkk7KWE9YS53OzA9PT1hLkk/YS5VLnB1c2goYik6KGEub2E9ITAsSGEoZnVuY3Rpb24oKXt2YXIgYz0xPT09YS5JP2IuUGE6Yi5RYTtpZihudWxsPT09YykoMT09PWEuST9JYTpOYSkoYi5tYSxhLncpO2Vsc2V7dHJ5e3ZhciBkPWMoYS53KX1jYXRjaChlKXtOYShiLm1hLGUpO3JldHVybn1JYShiLm1hLGQpfX0pKX1mdW5jdGlvbiBJYShhLGIpe3RyeXtpZihiPT09YSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi5cIik7aWYoYiYmKFwib2JqZWN0XCI9PT10eXBlb2YgYnx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGIpKXt2YXIgYz1iLnRoZW47aWYoYiBpbnN0YW5jZW9mIHUpe2EuST0zO2Eudz1iO09hKGEpO3JldHVybn1pZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYyl7RmEoRWEoYyxiKSxhKTtyZXR1cm59fWEuST0xO2Eudz1iO09hKGEpfWNhdGNoKGQpe05hKGEsZCl9fVxuZnVuY3Rpb24gTmEoYSxiKXthLkk9MjthLnc9YjtPYShhKX1mdW5jdGlvbiBPYShhKXsyPT09YS5JJiYwPT09YS5VLmxlbmd0aCYmSGEoZnVuY3Rpb24oKXthLm9hfHxcInVuZGVmaW5lZFwiIT09dHlwZW9mIGNvbnNvbGUmJmNvbnNvbGUmJmNvbnNvbGUud2FybihcIlBvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjpcIixhLncpfSk7Zm9yKHZhciBiPTAsYz1hLlUubGVuZ3RoO2I8YztiKyspR2EoYSxhLlVbYl0pO2EuVT1udWxsfWZ1bmN0aW9uIFBhKGEsYixjKXt0aGlzLlBhPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbDt0aGlzLlFhPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2I6bnVsbDt0aGlzLm1hPWN9ZnVuY3Rpb24gRmEoYSxiKXt2YXIgYz0hMTt0cnl7YShmdW5jdGlvbihhKXtjfHwoYz0hMCxJYShiLGEpKX0sZnVuY3Rpb24oYSl7Y3x8KGM9ITAsTmEoYixhKSl9KX1jYXRjaChkKXtjfHwoYz0hMCxOYShiLGQpKX19XG51LnByb3RvdHlwZVtcImNhdGNoXCJdPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnRoZW4obnVsbCxhKX07dS5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihhLGIpe3ZhciBjPW5ldyB0aGlzLmNvbnN0cnVjdG9yKERhKTtHYSh0aGlzLG5ldyBQYShhLGIsYykpO3JldHVybiBjfTt1LnByb3RvdHlwZVtcImZpbmFsbHlcIl09ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5jb25zdHJ1Y3RvcjtyZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiBiLnJlc29sdmUoYSgpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGN9KX0sZnVuY3Rpb24oYyl7cmV0dXJuIGIucmVzb2x2ZShhKCkpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYi5yZWplY3QoYyl9KX0pfTtcbmZ1bmN0aW9uIFFhKGEpe3JldHVybiBuZXcgdShmdW5jdGlvbihiLGMpe2Z1bmN0aW9uIGQoYSxnKXt0cnl7aWYoZyYmKFwib2JqZWN0XCI9PT10eXBlb2YgZ3x8XCJmdW5jdGlvblwiPT09dHlwZW9mIGcpKXt2YXIgaD1nLnRoZW47aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGgpe2guY2FsbChnLGZ1bmN0aW9uKGIpe2QoYSxiKX0sYyk7cmV0dXJufX1lW2FdPWc7MD09PS0tZiYmYihlKX1jYXRjaChuKXtjKG4pfX1pZighYXx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhLmxlbmd0aCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZS5hbGwgYWNjZXB0cyBhbiBhcnJheVwiKTt2YXIgZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhKTtpZigwPT09ZS5sZW5ndGgpcmV0dXJuIGIoW10pO2Zvcih2YXIgZj1lLmxlbmd0aCxnPTA7ZzxlLmxlbmd0aDtnKyspZChnLGVbZ10pfSl9XG5mdW5jdGlvbiBSYShhKXtyZXR1cm4gYSYmXCJvYmplY3RcIj09PXR5cGVvZiBhJiZhLmNvbnN0cnVjdG9yPT09dT9hOm5ldyB1KGZ1bmN0aW9uKGIpe2IoYSl9KX1mdW5jdGlvbiBTYShhKXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYixjKXtjKGEpfSl9ZnVuY3Rpb24gVGEoYSl7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKWFbZF0udGhlbihiLGMpfSl9dmFyIEhhPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBzZXRJbW1lZGlhdGUmJmZ1bmN0aW9uKGEpe3NldEltbWVkaWF0ZShhKX18fGZ1bmN0aW9uKGEpe0NhKGEsMCl9Oy8qXG5cbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pZighd2luZG93LlByb21pc2Upe3dpbmRvdy5Qcm9taXNlPXU7dS5wcm90b3R5cGUudGhlbj11LnByb3RvdHlwZS50aGVuO3UuYWxsPVFhO3UucmFjZT1UYTt1LnJlc29sdmU9UmE7dS5yZWplY3Q9U2E7dmFyIFVhPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpLFZhPVtdOyhuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbigpe2Zvcih2YXIgYT1WYS5sZW5ndGgsYj0wO2I8YTtiKyspVmFbYl0oKTtWYS5zcGxpY2UoMCxhKX0pKS5vYnNlcnZlKFVhLHtjaGFyYWN0ZXJEYXRhOiEwfSk7SGE9ZnVuY3Rpb24oYSl7VmEucHVzaChhKTtVYS50ZXh0Q29udGVudD0wPFVhLnRleHRDb250ZW50Lmxlbmd0aD9cIlwiOlwiYVwifX07LypcbiBDb3B5cmlnaHQgKEMpIDIwMTUgYnkgV2ViUmVmbGVjdGlvblxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG5cbiovXG4oZnVuY3Rpb24oYSxiKXtpZighKGIgaW4gYSkpe3ZhciBjPXR5cGVvZiBnbG9iYWw9PT10eXBlb2YgYz93aW5kb3c6Z2xvYmFsLGQ9MCxlPVwiXCIrTWF0aC5yYW5kb20oKSxmPVwiX19cXHUwMDAxc3ltYm9sQEBcIitlLGc9YS5nZXRPd25Qcm9wZXJ0eU5hbWVzLGg9YS5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Isaz1hLmNyZWF0ZSxsPWEua2V5cyxuPWEuZnJlZXplfHxhLHE9YS5kZWZpbmVQcm9wZXJ0eSxJPWEuZGVmaW5lUHJvcGVydGllcyx2PWgoYSxcImdldE93blByb3BlcnR5TmFtZXNcIikseD1hLnByb3RvdHlwZSxRPXguaGFzT3duUHJvcGVydHksRWI9eC5wcm9wZXJ0eUlzRW51bWVyYWJsZSxGYj14LnRvU3RyaW5nLFQ9ZnVuY3Rpb24oYSxiLGMpe1EuY2FsbChhLGYpfHxxKGEsZix7ZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITEsd3JpdGFibGU6ITEsdmFsdWU6e319KTthW2ZdW1wiQEBcIitiXT1jfSxKYT1mdW5jdGlvbihhLGIpe3ZhciBjPWsoYSk7ZyhiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe1guY2FsbChiLFxuYSkmJkFhKGMsYSxiW2FdKX0pO3JldHVybiBjfSxwPWZ1bmN0aW9uKCl7fSx6YT1mdW5jdGlvbihhKXtyZXR1cm4gYSE9ZiYmIVEuY2FsbChZLGEpfSxhYT1mdW5jdGlvbihhKXtyZXR1cm4gYSE9ZiYmUS5jYWxsKFksYSl9LFg9ZnVuY3Rpb24oYSl7dmFyIGI9XCJcIithO3JldHVybiBhYShiKT9RLmNhbGwodGhpcyxiKSYmdGhpc1tmXVtcIkBAXCIrYl06RWIuY2FsbCh0aGlzLGEpfSxtPWZ1bmN0aW9uKGIpe3EoeCxiLHtlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCxnZXQ6cCxzZXQ6ZnVuY3Rpb24oYSl7YmEodGhpcyxiLHtlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTphfSk7VCh0aGlzLGIsITApfX0pO3JldHVybiBuKFlbYl09cShhKGIpLFwiY29uc3RydWN0b3JcIixHYikpfSx5PWZ1bmN0aW9uKGEpe2lmKHRoaXMmJnRoaXMhPT1jKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3JcIik7cmV0dXJuIG0oXCJfX1xcdTAwMDFzeW1ib2w6XCIuY29uY2F0KGF8fFxuXCJcIixlLCsrZCkpfSxZPWsobnVsbCksR2I9e3ZhbHVlOnl9LEthPWZ1bmN0aW9uKGEpe3JldHVybiBZW2FdfSxBYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCJcIitiO2lmKGFhKGQpKXtiPWJhO2lmKGMuZW51bWVyYWJsZSl7dmFyIGU9ayhjKTtlLmVudW1lcmFibGU9ITF9ZWxzZSBlPWM7YihhLGQsZSk7VChhLGQsISFjLmVudW1lcmFibGUpfWVsc2UgcShhLGIsYyk7cmV0dXJuIGF9LExhPWZ1bmN0aW9uKGEpe3JldHVybiBnKGEpLmZpbHRlcihhYSkubWFwKEthKX07di52YWx1ZT1BYTtxKGEsXCJkZWZpbmVQcm9wZXJ0eVwiLHYpO3YudmFsdWU9TGE7cShhLGIsdik7di52YWx1ZT1mdW5jdGlvbihhKXtyZXR1cm4gZyhhKS5maWx0ZXIoemEpfTtxKGEsXCJnZXRPd25Qcm9wZXJ0eU5hbWVzXCIsdik7di52YWx1ZT1mdW5jdGlvbihhLGIpe3ZhciBjPUxhKGIpO2MubGVuZ3RoP2woYikuY29uY2F0KGMpLmZvckVhY2goZnVuY3Rpb24oYyl7WC5jYWxsKGIsYykmJkFhKGEsYyxiW2NdKX0pOkkoYSxcbmIpO3JldHVybiBhfTtxKGEsXCJkZWZpbmVQcm9wZXJ0aWVzXCIsdik7di52YWx1ZT1YO3EoeCxcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsdik7di52YWx1ZT15O3EoYyxcIlN5bWJvbFwiLHYpO3YudmFsdWU9ZnVuY3Rpb24oYSl7YT1cIl9fXFx1MDAwMXN5bWJvbDpcIi5jb25jYXQoXCJfX1xcdTAwMDFzeW1ib2w6XCIsYSxlKTtyZXR1cm4gYSBpbiB4P1lbYV06bShhKX07cSh5LFwiZm9yXCIsdik7di52YWx1ZT1mdW5jdGlvbihhKXtpZih6YShhKSl0aHJvdyBuZXcgVHlwZUVycm9yKGErXCIgaXMgbm90IGEgc3ltYm9sXCIpO3JldHVybiBRLmNhbGwoWSxhKT9hLnNsaWNlKDIwLC1lLmxlbmd0aCk6dm9pZCAwfTtxKHksXCJrZXlGb3JcIix2KTt2LnZhbHVlPWZ1bmN0aW9uKGEsYil7dmFyIGM9aChhLGIpO2MmJmFhKGIpJiYoYy5lbnVtZXJhYmxlPVguY2FsbChhLGIpKTtyZXR1cm4gY307cShhLFwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yXCIsdik7di52YWx1ZT1mdW5jdGlvbihhLGIpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD9cbmsoYSk6SmEoYSxiKX07cShhLFwiY3JlYXRlXCIsdik7di52YWx1ZT1mdW5jdGlvbigpe3ZhciBhPUZiLmNhbGwodGhpcyk7cmV0dXJuXCJbb2JqZWN0IFN0cmluZ11cIj09PWEmJmFhKHRoaXMpP1wiW29iamVjdCBTeW1ib2xdXCI6YX07cSh4LFwidG9TdHJpbmdcIix2KTt0cnl7dmFyIGJhPWsocSh7fSxcIl9fXFx1MDAwMXN5bWJvbDpcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHEodGhpcyxcIl9fXFx1MDAwMXN5bWJvbDpcIix7dmFsdWU6ITF9KVtcIl9fXFx1MDAwMXN5bWJvbDpcIl19fSkpW1wiX19cXHUwMDAxc3ltYm9sOlwiXXx8cX1jYXRjaChNYSl7YmE9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWgoeCxiKTtkZWxldGUgeFtiXTtxKGEsYixjKTtxKHgsYixkKX19fX0pKE9iamVjdCxcImdldE93blByb3BlcnR5U3ltYm9sc1wiKTtcbihmdW5jdGlvbihhKXt2YXIgYj1hLmRlZmluZVByb3BlcnR5LGM9YS5wcm90b3R5cGUsZD1jLnRvU3RyaW5nLGU7XCJpdGVyYXRvciBtYXRjaCByZXBsYWNlIHNlYXJjaCBzcGxpdCBoYXNJbnN0YW5jZSBpc0NvbmNhdFNwcmVhZGFibGUgdW5zY29wYWJsZXMgc3BlY2llcyB0b1ByaW1pdGl2ZSB0b1N0cmluZ1RhZ1wiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGYpe2lmKCEoZiBpbiBTeW1ib2wpKXN3aXRjaChiKFN5bWJvbCxmLHt2YWx1ZTpTeW1ib2woZil9KSxmKXtjYXNlIFwidG9TdHJpbmdUYWdcIjplPWEuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGMsXCJ0b1N0cmluZ1wiKSxlLnZhbHVlPWZ1bmN0aW9uKCl7dmFyIGE9ZC5jYWxsKHRoaXMpLGI9dGhpc1tTeW1ib2wudG9TdHJpbmdUYWddO3JldHVyblwidW5kZWZpbmVkXCI9PT10eXBlb2YgYj9hOlwiW29iamVjdCBcIitiK1wiXVwifSxiKGMsXCJ0b1N0cmluZ1wiLGUpfX0pfSkoT2JqZWN0LFN5bWJvbCk7XG4oZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGQoKXtyZXR1cm4gdGhpc31iW2FdfHwoYlthXT1mdW5jdGlvbigpe3ZhciBiPTAsYz10aGlzLGc9e25leHQ6ZnVuY3Rpb24oKXt2YXIgYT1jLmxlbmd0aDw9YjtyZXR1cm4gYT97ZG9uZTphfTp7ZG9uZTphLHZhbHVlOmNbYisrXX19fTtnW2FdPWQ7cmV0dXJuIGd9KTtjW2FdfHwoY1thXT1mdW5jdGlvbigpe3ZhciBiPVN0cmluZy5mcm9tQ29kZVBvaW50LGM9dGhpcyxnPTAsaD1jLmxlbmd0aCxrPXtuZXh0OmZ1bmN0aW9uKCl7dmFyIGE9aDw9ZyxkPWE/XCJcIjpiKGMuY29kZVBvaW50QXQoZykpO2crPWQubGVuZ3RoO3JldHVybiBhP3tkb25lOmF9Ontkb25lOmEsdmFsdWU6ZH19fTtrW2FdPWQ7cmV0dXJuIGt9KX0pKFN5bWJvbC5pdGVyYXRvcixBcnJheS5wcm90b3R5cGUsU3RyaW5nLnByb3RvdHlwZSk7LypcblxuQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbnZhciBXYT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO09iamVjdC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwPT09dGhpcz9cIltvYmplY3QgVW5kZWZpbmVkXVwiOm51bGw9PT10aGlzP1wiW29iamVjdCBOdWxsXVwiOldhLmNhbGwodGhpcyl9O09iamVjdC5rZXlzPWZ1bmN0aW9uKGEpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhKS5maWx0ZXIoZnVuY3Rpb24oYil7cmV0dXJuKGI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLGIpKSYmYi5lbnVtZXJhYmxlfSl9O3ZhciBYYT13aW5kb3cuU3ltYm9sLml0ZXJhdG9yO1xuU3RyaW5nLnByb3RvdHlwZVtYYV0mJlN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXR8fChTdHJpbmcucHJvdG90eXBlW1hhXT1mdW5jdGlvbiBZYSgpe3ZhciBiLGM9dGhpcztyZXR1cm4gQmEoWWEsZnVuY3Rpb24oZCl7MT09ZC5hJiYoYj0wKTtpZigzIT1kLmEpcmV0dXJuIGI8Yy5sZW5ndGg/ZD10YShkLGNbYl0pOihkLmE9MCxkPXZvaWQgMCksZDtiKys7ZC5hPTJ9KX0pO1NldC5wcm90b3R5cGVbWGFdfHwoU2V0LnByb3RvdHlwZVtYYV09ZnVuY3Rpb24gWmEoKXt2YXIgYixjPXRoaXMsZDtyZXR1cm4gQmEoWmEsZnVuY3Rpb24oZSl7MT09ZS5hJiYoYj1bXSxjLmZvckVhY2goZnVuY3Rpb24oYyl7Yi5wdXNoKGMpfSksZD0wKTtpZigzIT1lLmEpcmV0dXJuIGQ8Yi5sZW5ndGg/ZT10YShlLGJbZF0pOihlLmE9MCxlPXZvaWQgMCksZTtkKys7ZS5hPTJ9KX0pO1xuTWFwLnByb3RvdHlwZVtYYV18fChNYXAucHJvdG90eXBlW1hhXT1mdW5jdGlvbiAkYSgpe3ZhciBiLGM9dGhpcyxkO3JldHVybiBCYSgkYSxmdW5jdGlvbihlKXsxPT1lLmEmJihiPVtdLGMuZm9yRWFjaChmdW5jdGlvbihjLGQpe2IucHVzaChbZCxjXSl9KSxkPTApO2lmKDMhPWUuYSlyZXR1cm4gZDxiLmxlbmd0aD9lPXRhKGUsYltkXSk6KGUuYT0wLGU9dm9pZCAwKSxlO2QrKztlLmE9Mn0pfSk7LypcblxuIENvcHlyaWdodCAoYykgMjAxNCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbndpbmRvdy5XZWJDb21wb25lbnRzPXdpbmRvdy5XZWJDb21wb25lbnRzfHx7ZmxhZ3M6e319O3ZhciBhYj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cIndlYmNvbXBvbmVudHMtYnVuZGxlXCJdJyksYmI9L3djLSguKykvLHc9e307aWYoIXcubm9PcHRzKXtsb2NhdGlvbi5zZWFyY2guc2xpY2UoMSkuc3BsaXQoXCImXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7YT1hLnNwbGl0KFwiPVwiKTt2YXIgYjthWzBdJiYoYj1hWzBdLm1hdGNoKGJiKSkmJih3W2JbMV1dPWFbMV18fCEwKX0pO2lmKGFiKWZvcih2YXIgY2I9MCxkYj12b2lkIDA7ZGI9YWIuYXR0cmlidXRlc1tjYl07Y2IrKylcInNyY1wiIT09ZGIubmFtZSYmKHdbZGIubmFtZV09ZGIudmFsdWV8fCEwKTtpZih3LmxvZyYmdy5sb2cuc3BsaXQpe3ZhciBlYj13LmxvZy5zcGxpdChcIixcIik7dy5sb2c9e307ZWIuZm9yRWFjaChmdW5jdGlvbihhKXt3LmxvZ1thXT0hMH0pfWVsc2Ugdy5sb2c9e319XG53aW5kb3cuV2ViQ29tcG9uZW50cy5mbGFncz13O3ZhciBmYj13LnNoYWR5ZG9tO2ZiJiYod2luZG93LlNoYWR5RE9NPXdpbmRvdy5TaGFkeURPTXx8e30sd2luZG93LlNoYWR5RE9NLmZvcmNlPWZiKTt2YXIgZ2I9dy5yZWdpc3Rlcnx8dy5jZTtnYiYmd2luZG93LmN1c3RvbUVsZW1lbnRzJiYod2luZG93LmN1c3RvbUVsZW1lbnRzLmZvcmNlUG9seWZpbGw9Z2IpOy8qXG5cbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5mdW5jdGlvbiBoYigpe31oYi5wcm90b3R5cGUudG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJue319O2Z1bmN0aW9uIHooYSl7YS5fX3NoYWR5fHwoYS5fX3NoYWR5PW5ldyBoYik7cmV0dXJuIGEuX19zaGFkeX1mdW5jdGlvbiBBKGEpe3JldHVybiBhJiZhLl9fc2hhZHl9O3ZhciBCPXdpbmRvdy5TaGFkeURPTXx8e307Qi5MYT0hKCFFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3d8fCFOb2RlLnByb3RvdHlwZS5nZXRSb290Tm9kZSk7dmFyIGliPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTm9kZS5wcm90b3R5cGUsXCJmaXJzdENoaWxkXCIpO0IuRD0hIShpYiYmaWIuY29uZmlndXJhYmxlJiZpYi5nZXQpO0Iua2E9Qi5mb3JjZXx8IUIuTGE7Qi5NPUIubm9QYXRjaHx8ITE7Qi50YT1CLnByZWZlclBlcmZvcm1hbmNlO3ZhciBqYj1uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKFwiVHJpZGVudFwiKTtCLnlhPWpiO2Z1bmN0aW9uIGtiKGEpe3JldHVybihhPUEoYSkpJiZ2b2lkIDAhPT1hLmZpcnN0Q2hpbGR9ZnVuY3Rpb24gQyhhKXtyZXR1cm5cIlNoYWR5Um9vdFwiPT09YS5EYX1mdW5jdGlvbiBsYihhKXtyZXR1cm4oYT0oYT1BKGEpKSYmYS5yb290KSYmbWIoYSl9XG52YXIgbmI9RWxlbWVudC5wcm90b3R5cGUsb2I9bmIubWF0Y2hlc3x8bmIubWF0Y2hlc1NlbGVjdG9yfHxuYi5tb3pNYXRjaGVzU2VsZWN0b3J8fG5iLm1zTWF0Y2hlc1NlbGVjdG9yfHxuYi5vTWF0Y2hlc1NlbGVjdG9yfHxuYi53ZWJraXRNYXRjaGVzU2VsZWN0b3IscGI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikscWI9MCxyYj1bXTsobmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oKXtmb3IoO3JiLmxlbmd0aDspdHJ5e3JiLnNoaWZ0KCkoKX1jYXRjaChhKXt0aHJvdyBwYi50ZXh0Q29udGVudD1xYisrLGE7fX0pKS5vYnNlcnZlKHBiLHtjaGFyYWN0ZXJEYXRhOiEwfSk7ZnVuY3Rpb24gc2IoYSl7cmIucHVzaChhKTtwYi50ZXh0Q29udGVudD1xYisrfXZhciB0Yj0hIWRvY3VtZW50LmNvbnRhaW5zO2Z1bmN0aW9uIHViKGEsYil7Zm9yKDtiOyl7aWYoYj09YSlyZXR1cm4hMDtiPWIuX19zaGFkeV9wYXJlbnROb2RlfXJldHVybiExfVxuZnVuY3Rpb24gdmIoYSl7Zm9yKHZhciBiPWEubGVuZ3RoLTE7MDw9YjtiLS0pe3ZhciBjPWFbYl0sZD1jLmdldEF0dHJpYnV0ZShcImlkXCIpfHxjLmdldEF0dHJpYnV0ZShcIm5hbWVcIik7ZCYmXCJsZW5ndGhcIiE9PWQmJmlzTmFOKGQpJiYoYVtkXT1jKX1hLml0ZW09ZnVuY3Rpb24oYil7cmV0dXJuIGFbYl19O2EubmFtZWRJdGVtPWZ1bmN0aW9uKGIpe2lmKFwibGVuZ3RoXCIhPT1iJiZpc05hTihiKSYmYVtiXSlyZXR1cm4gYVtiXTtmb3IodmFyIGM9amEoYSksZD1jLm5leHQoKTshZC5kb25lO2Q9Yy5uZXh0KCkpaWYoZD1kLnZhbHVlLChkLmdldEF0dHJpYnV0ZShcImlkXCIpfHxkLmdldEF0dHJpYnV0ZShcIm5hbWVcIikpPT1iKXJldHVybiBkO3JldHVybiBudWxsfTtyZXR1cm4gYX1mdW5jdGlvbiB3YihhKXt2YXIgYj1bXTtmb3IoYT1hLl9fc2hhZHlfbmF0aXZlX2ZpcnN0Q2hpbGQ7YTthPWEuX19zaGFkeV9uYXRpdmVfbmV4dFNpYmxpbmcpYi5wdXNoKGEpO3JldHVybiBifVxuZnVuY3Rpb24geGIoYSl7dmFyIGI9W107Zm9yKGE9YS5fX3NoYWR5X2ZpcnN0Q2hpbGQ7YTthPWEuX19zaGFkeV9uZXh0U2libGluZyliLnB1c2goYSk7cmV0dXJuIGJ9ZnVuY3Rpb24gRChhLGIsYyxkKXtjPXZvaWQgMD09PWM/XCJcIjpjO2Zvcih2YXIgZSBpbiBiKXt2YXIgZj1iW2VdO2lmKCEoZCYmMDw9ZC5pbmRleE9mKGUpKSl7Zi5jb25maWd1cmFibGU9ITA7dmFyIGc9YytlO2lmKGYudmFsdWUpYVtnXT1mLnZhbHVlO2Vsc2UgdHJ5e09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGcsZil9Y2F0Y2goaCl7fX19fWZ1bmN0aW9uIEUoYSl7dmFyIGI9e307T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYSkuZm9yRWFjaChmdW5jdGlvbihjKXtiW2NdPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSxjKX0pO3JldHVybiBifTt2YXIgeWI9W10semI7ZnVuY3Rpb24gQWIoYSl7emJ8fCh6Yj0hMCxzYihCYikpO3liLnB1c2goYSl9ZnVuY3Rpb24gQmIoKXt6Yj0hMTtmb3IodmFyIGE9ISF5Yi5sZW5ndGg7eWIubGVuZ3RoOyl5Yi5zaGlmdCgpKCk7cmV0dXJuIGF9QmIubGlzdD15YjtmdW5jdGlvbiBDYigpe3RoaXMuYT0hMTt0aGlzLmFkZGVkTm9kZXM9W107dGhpcy5yZW1vdmVkTm9kZXM9W107dGhpcy4kPW5ldyBTZXR9ZnVuY3Rpb24gRGIoYSl7YS5hfHwoYS5hPSEwLHNiKGZ1bmN0aW9uKCl7YS5mbHVzaCgpfSkpfUNiLnByb3RvdHlwZS5mbHVzaD1mdW5jdGlvbigpe2lmKHRoaXMuYSl7dGhpcy5hPSExO3ZhciBhPXRoaXMudGFrZVJlY29yZHMoKTthLmxlbmd0aCYmdGhpcy4kLmZvckVhY2goZnVuY3Rpb24oYil7YihhKX0pfX07Q2IucHJvdG90eXBlLnRha2VSZWNvcmRzPWZ1bmN0aW9uKCl7aWYodGhpcy5hZGRlZE5vZGVzLmxlbmd0aHx8dGhpcy5yZW1vdmVkTm9kZXMubGVuZ3RoKXt2YXIgYT1be2FkZGVkTm9kZXM6dGhpcy5hZGRlZE5vZGVzLHJlbW92ZWROb2Rlczp0aGlzLnJlbW92ZWROb2Rlc31dO3RoaXMuYWRkZWROb2Rlcz1bXTt0aGlzLnJlbW92ZWROb2Rlcz1bXTtyZXR1cm4gYX1yZXR1cm5bXX07XG5mdW5jdGlvbiBIYihhLGIpe3ZhciBjPXooYSk7Yy5WfHwoYy5WPW5ldyBDYik7Yy5WLiQuYWRkKGIpO3ZhciBkPWMuVjtyZXR1cm57Q2E6YixQOmQsRWE6YSx0YWtlUmVjb3JkczpmdW5jdGlvbigpe3JldHVybiBkLnRha2VSZWNvcmRzKCl9fX1mdW5jdGlvbiBJYihhKXt2YXIgYj1hJiZhLlA7YiYmKGIuJC5kZWxldGUoYS5DYSksYi4kLnNpemV8fCh6KGEuRWEpLlY9bnVsbCkpfVxuZnVuY3Rpb24gSmIoYSxiKXt2YXIgYz1iLmdldFJvb3ROb2RlKCk7cmV0dXJuIGEubWFwKGZ1bmN0aW9uKGEpe3ZhciBiPWM9PT1hLnRhcmdldC5nZXRSb290Tm9kZSgpO2lmKGImJmEuYWRkZWROb2Rlcyl7aWYoYj1BcnJheS5mcm9tKGEuYWRkZWROb2RlcykuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBjPT09YS5nZXRSb290Tm9kZSgpfSksYi5sZW5ndGgpcmV0dXJuIGE9T2JqZWN0LmNyZWF0ZShhKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImFkZGVkTm9kZXNcIix7dmFsdWU6Yixjb25maWd1cmFibGU6ITB9KSxhfWVsc2UgaWYoYilyZXR1cm4gYX0pLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gYX0pfTt2YXIgS2I9L1smXFx1MDBBMFwiXS9nLExiPS9bJlxcdTAwQTA8Pl0vZztmdW5jdGlvbiBNYihhKXtzd2l0Y2goYSl7Y2FzZSBcIiZcIjpyZXR1cm5cIiZhbXA7XCI7Y2FzZSBcIjxcIjpyZXR1cm5cIiZsdDtcIjtjYXNlIFwiPlwiOnJldHVyblwiJmd0O1wiO2Nhc2UgJ1wiJzpyZXR1cm5cIiZxdW90O1wiO2Nhc2UgXCJcXHUwMGEwXCI6cmV0dXJuXCImbmJzcDtcIn19ZnVuY3Rpb24gTmIoYSl7Zm9yKHZhciBiPXt9LGM9MDtjPGEubGVuZ3RoO2MrKyliW2FbY11dPSEwO3JldHVybiBifXZhciBPYj1OYihcImFyZWEgYmFzZSBiciBjb2wgY29tbWFuZCBlbWJlZCBociBpbWcgaW5wdXQga2V5Z2VuIGxpbmsgbWV0YSBwYXJhbSBzb3VyY2UgdHJhY2sgd2JyXCIuc3BsaXQoXCIgXCIpKSxQYj1OYihcInN0eWxlIHNjcmlwdCB4bXAgaWZyYW1lIG5vZW1iZWQgbm9mcmFtZXMgcGxhaW50ZXh0IG5vc2NyaXB0XCIuc3BsaXQoXCIgXCIpKTtcbmZ1bmN0aW9uIFFiKGEsYil7XCJ0ZW1wbGF0ZVwiPT09YS5sb2NhbE5hbWUmJihhPWEuY29udGVudCk7Zm9yKHZhciBjPVwiXCIsZD1iP2IoYSk6YS5jaGlsZE5vZGVzLGU9MCxmPWQubGVuZ3RoLGc9dm9pZCAwO2U8ZiYmKGc9ZFtlXSk7ZSsrKXthOnt2YXIgaD1nO3ZhciBrPWEsbD1iO3N3aXRjaChoLm5vZGVUeXBlKXtjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOms9aC5sb2NhbE5hbWU7Zm9yKHZhciBuPVwiPFwiK2sscT1oLmF0dHJpYnV0ZXMsST0wLHY7dj1xW0ldO0krKyluKz1cIiBcIit2Lm5hbWUrJz1cIicrdi52YWx1ZS5yZXBsYWNlKEtiLE1iKSsnXCInO24rPVwiPlwiO2g9T2Jba10/bjpuK1FiKGgsbCkrXCI8L1wiK2srXCI+XCI7YnJlYWsgYTtjYXNlIE5vZGUuVEVYVF9OT0RFOmg9aC5kYXRhO2g9ayYmUGJbay5sb2NhbE5hbWVdP2g6aC5yZXBsYWNlKExiLE1iKTticmVhayBhO2Nhc2UgTm9kZS5DT01NRU5UX05PREU6aD1cIlxceDNjIS0tXCIraC5kYXRhK1wiLS1cXHgzZVwiO2JyZWFrIGE7ZGVmYXVsdDp0aHJvdyB3aW5kb3cuY29uc29sZS5lcnJvcihoKSxcbkVycm9yKFwibm90IGltcGxlbWVudGVkXCIpO319Yys9aH1yZXR1cm4gY307dmFyIFJiPUIuRCxTYj17cXVlcnlTZWxlY3RvcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fX3NoYWR5X25hdGl2ZV9xdWVyeVNlbGVjdG9yKGEpfSxxdWVyeVNlbGVjdG9yQWxsOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9fc2hhZHlfbmF0aXZlX3F1ZXJ5U2VsZWN0b3JBbGwoYSl9fSxUYj17fTtmdW5jdGlvbiBVYihhKXtUYlthXT1mdW5jdGlvbihiKXtyZXR1cm4gYltcIl9fc2hhZHlfbmF0aXZlX1wiK2FdfX1mdW5jdGlvbiBWYihhLGIpe0QoYSxiLFwiX19zaGFkeV9uYXRpdmVfXCIpO2Zvcih2YXIgYyBpbiBiKVViKGMpfWZ1bmN0aW9uIEYoYSxiKXtiPXZvaWQgMD09PWI/W106Yjtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9YltjXSxlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSxkKTtlJiYoT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJfX3NoYWR5X25hdGl2ZV9cIitkLGUpLGUudmFsdWU/U2JbZF18fChTYltkXT1lLnZhbHVlKTpVYihkKSl9fVxudmFyIEc9ZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihkb2N1bWVudCxOb2RlRmlsdGVyLlNIT1dfQUxMLG51bGwsITEpLEg9ZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihkb2N1bWVudCxOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCxudWxsLCExKSxXYj1kb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJpbmVydFwiKTtmdW5jdGlvbiBYYihhKXtmb3IodmFyIGI7Yj1hLl9fc2hhZHlfbmF0aXZlX2ZpcnN0Q2hpbGQ7KWEuX19zaGFkeV9uYXRpdmVfcmVtb3ZlQ2hpbGQoYil9dmFyIFliPVtcImZpcnN0RWxlbWVudENoaWxkXCIsXCJsYXN0RWxlbWVudENoaWxkXCIsXCJjaGlsZHJlblwiLFwiY2hpbGRFbGVtZW50Q291bnRcIl0sWmI9W1wicXVlcnlTZWxlY3RvclwiLFwicXVlcnlTZWxlY3RvckFsbFwiXTtcbmZ1bmN0aW9uICRiKCl7dmFyIGE9W1wiZGlzcGF0Y2hFdmVudFwiLFwiYWRkRXZlbnRMaXN0ZW5lclwiLFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiXTt3aW5kb3cuRXZlbnRUYXJnZXQ/Rih3aW5kb3cuRXZlbnRUYXJnZXQucHJvdG90eXBlLGEpOihGKE5vZGUucHJvdG90eXBlLGEpLEYoV2luZG93LnByb3RvdHlwZSxhKSk7UmI/RihOb2RlLnByb3RvdHlwZSxcInBhcmVudE5vZGUgZmlyc3RDaGlsZCBsYXN0Q2hpbGQgcHJldmlvdXNTaWJsaW5nIG5leHRTaWJsaW5nIGNoaWxkTm9kZXMgcGFyZW50RWxlbWVudCB0ZXh0Q29udGVudFwiLnNwbGl0KFwiIFwiKSk6VmIoTm9kZS5wcm90b3R5cGUse3BhcmVudE5vZGU6e2dldDpmdW5jdGlvbigpe0cuY3VycmVudE5vZGU9dGhpcztyZXR1cm4gRy5wYXJlbnROb2RlKCl9fSxmaXJzdENoaWxkOntnZXQ6ZnVuY3Rpb24oKXtHLmN1cnJlbnROb2RlPXRoaXM7cmV0dXJuIEcuZmlyc3RDaGlsZCgpfX0sbGFzdENoaWxkOntnZXQ6ZnVuY3Rpb24oKXtHLmN1cnJlbnROb2RlPVxudGhpcztyZXR1cm4gRy5sYXN0Q2hpbGQoKX19LHByZXZpb3VzU2libGluZzp7Z2V0OmZ1bmN0aW9uKCl7Ry5jdXJyZW50Tm9kZT10aGlzO3JldHVybiBHLnByZXZpb3VzU2libGluZygpfX0sbmV4dFNpYmxpbmc6e2dldDpmdW5jdGlvbigpe0cuY3VycmVudE5vZGU9dGhpcztyZXR1cm4gRy5uZXh0U2libGluZygpfX0sY2hpbGROb2Rlczp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9W107Ry5jdXJyZW50Tm9kZT10aGlzO2Zvcih2YXIgYz1HLmZpcnN0Q2hpbGQoKTtjOylhLnB1c2goYyksYz1HLm5leHRTaWJsaW5nKCk7cmV0dXJuIGF9fSxwYXJlbnRFbGVtZW50OntnZXQ6ZnVuY3Rpb24oKXtILmN1cnJlbnROb2RlPXRoaXM7cmV0dXJuIEgucGFyZW50Tm9kZSgpfX0sdGV4dENvbnRlbnQ6e2dldDpmdW5jdGlvbigpe3N3aXRjaCh0aGlzLm5vZGVUeXBlKXtjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOmNhc2UgTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFOmZvcih2YXIgYT1kb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKHRoaXMsXG5Ob2RlRmlsdGVyLlNIT1dfVEVYVCxudWxsLCExKSxjPVwiXCIsZDtkPWEubmV4dE5vZGUoKTspYys9ZC5ub2RlVmFsdWU7cmV0dXJuIGM7ZGVmYXVsdDpyZXR1cm4gdGhpcy5ub2RlVmFsdWV9fSxzZXQ6ZnVuY3Rpb24oYSl7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhfHxudWxsPT09YSlhPVwiXCI7c3dpdGNoKHRoaXMubm9kZVR5cGUpe2Nhc2UgTm9kZS5FTEVNRU5UX05PREU6Y2FzZSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREU6WGIodGhpcyk7KDA8YS5sZW5ndGh8fHRoaXMubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSkmJnRoaXMuX19zaGFkeV9uYXRpdmVfaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpLHZvaWQgMCk7YnJlYWs7ZGVmYXVsdDp0aGlzLm5vZGVWYWx1ZT1hfX19fSk7RihOb2RlLnByb3RvdHlwZSxcImFwcGVuZENoaWxkIGluc2VydEJlZm9yZSByZW1vdmVDaGlsZCByZXBsYWNlQ2hpbGQgY2xvbmVOb2RlIGNvbnRhaW5zXCIuc3BsaXQoXCIgXCIpKTtcbkYoSFRNTEVsZW1lbnQucHJvdG90eXBlLFtcInBhcmVudEVsZW1lbnRcIixcImNvbnRhaW5zXCJdKTthPXtmaXJzdEVsZW1lbnRDaGlsZDp7Z2V0OmZ1bmN0aW9uKCl7SC5jdXJyZW50Tm9kZT10aGlzO3JldHVybiBILmZpcnN0Q2hpbGQoKX19LGxhc3RFbGVtZW50Q2hpbGQ6e2dldDpmdW5jdGlvbigpe0guY3VycmVudE5vZGU9dGhpcztyZXR1cm4gSC5sYXN0Q2hpbGQoKX19LGNoaWxkcmVuOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT1bXTtILmN1cnJlbnROb2RlPXRoaXM7Zm9yKHZhciBjPUguZmlyc3RDaGlsZCgpO2M7KWEucHVzaChjKSxjPUgubmV4dFNpYmxpbmcoKTtyZXR1cm4gdmIoYSl9fSxjaGlsZEVsZW1lbnRDb3VudDp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hpbGRyZW4/dGhpcy5jaGlsZHJlbi5sZW5ndGg6MH19fTtSYj8oRihFbGVtZW50LnByb3RvdHlwZSxZYiksRihFbGVtZW50LnByb3RvdHlwZSxbXCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nXCIsXCJuZXh0RWxlbWVudFNpYmxpbmdcIixcblwiaW5uZXJIVE1MXCIsXCJjbGFzc05hbWVcIl0pLEYoSFRNTEVsZW1lbnQucHJvdG90eXBlLFtcImNoaWxkcmVuXCIsXCJpbm5lckhUTUxcIixcImNsYXNzTmFtZVwiXSkpOihWYihFbGVtZW50LnByb3RvdHlwZSxhKSxWYihFbGVtZW50LnByb3RvdHlwZSx7cHJldmlvdXNFbGVtZW50U2libGluZzp7Z2V0OmZ1bmN0aW9uKCl7SC5jdXJyZW50Tm9kZT10aGlzO3JldHVybiBILnByZXZpb3VzU2libGluZygpfX0sbmV4dEVsZW1lbnRTaWJsaW5nOntnZXQ6ZnVuY3Rpb24oKXtILmN1cnJlbnROb2RlPXRoaXM7cmV0dXJuIEgubmV4dFNpYmxpbmcoKX19LGlubmVySFRNTDp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFFiKHRoaXMsd2IpfSxzZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9XCJ0ZW1wbGF0ZVwiPT09dGhpcy5sb2NhbE5hbWU/dGhpcy5jb250ZW50OnRoaXM7WGIoYik7dmFyIGQ9dGhpcy5sb2NhbE5hbWV8fFwiZGl2XCI7ZD10aGlzLm5hbWVzcGFjZVVSSSYmdGhpcy5uYW1lc3BhY2VVUkkhPT1XYi5uYW1lc3BhY2VVUkk/XG5XYi5jcmVhdGVFbGVtZW50TlModGhpcy5uYW1lc3BhY2VVUkksZCk6V2IuY3JlYXRlRWxlbWVudChkKTtkLmlubmVySFRNTD1hO2ZvcihhPVwidGVtcGxhdGVcIj09PXRoaXMubG9jYWxOYW1lP2QuY29udGVudDpkO2Q9YS5fX3NoYWR5X25hdGl2ZV9maXJzdENoaWxkOyliLl9fc2hhZHlfbmF0aXZlX2luc2VydEJlZm9yZShkLHZvaWQgMCl9fSxjbGFzc05hbWU6e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifSxzZXQ6ZnVuY3Rpb24oYSl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGEpfX19KSk7RihFbGVtZW50LnByb3RvdHlwZSxcInNldEF0dHJpYnV0ZSBnZXRBdHRyaWJ1dGUgaGFzQXR0cmlidXRlIHJlbW92ZUF0dHJpYnV0ZSBmb2N1cyBibHVyXCIuc3BsaXQoXCIgXCIpKTtGKEVsZW1lbnQucHJvdG90eXBlLFpiKTtGKEhUTUxFbGVtZW50LnByb3RvdHlwZSxbXCJmb2N1c1wiLFwiYmx1clwiXSk7d2luZG93LkhUTUxUZW1wbGF0ZUVsZW1lbnQmJlxuRih3aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudC5wcm90b3R5cGUsW1wiaW5uZXJIVE1MXCJdKTtSYj9GKERvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLFliKTpWYihEb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSxhKTtGKERvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLFpiKTtSYj8oRihEb2N1bWVudC5wcm90b3R5cGUsWWIpLEYoRG9jdW1lbnQucHJvdG90eXBlLFtcImFjdGl2ZUVsZW1lbnRcIl0pKTpWYihEb2N1bWVudC5wcm90b3R5cGUsYSk7RihEb2N1bWVudC5wcm90b3R5cGUsW1wiaW1wb3J0Tm9kZVwiLFwiZ2V0RWxlbWVudEJ5SWRcIl0pO0YoRG9jdW1lbnQucHJvdG90eXBlLFpiKX07dmFyIGFjPUUoe2dldCBjaGlsZE5vZGVzKCl7cmV0dXJuIHRoaXMuX19zaGFkeV9jaGlsZE5vZGVzfSxnZXQgZmlyc3RDaGlsZCgpe3JldHVybiB0aGlzLl9fc2hhZHlfZmlyc3RDaGlsZH0sZ2V0IGxhc3RDaGlsZCgpe3JldHVybiB0aGlzLl9fc2hhZHlfbGFzdENoaWxkfSxnZXQgY2hpbGRFbGVtZW50Q291bnQoKXtyZXR1cm4gdGhpcy5fX3NoYWR5X2NoaWxkRWxlbWVudENvdW50fSxnZXQgY2hpbGRyZW4oKXtyZXR1cm4gdGhpcy5fX3NoYWR5X2NoaWxkcmVufSxnZXQgZmlyc3RFbGVtZW50Q2hpbGQoKXtyZXR1cm4gdGhpcy5fX3NoYWR5X2ZpcnN0RWxlbWVudENoaWxkfSxnZXQgbGFzdEVsZW1lbnRDaGlsZCgpe3JldHVybiB0aGlzLl9fc2hhZHlfbGFzdEVsZW1lbnRDaGlsZH0sZ2V0IHNoYWRvd1Jvb3QoKXtyZXR1cm4gdGhpcy5fX3NoYWR5X3NoYWRvd1Jvb3R9fSksYmM9RSh7Z2V0IHRleHRDb250ZW50KCl7cmV0dXJuIHRoaXMuX19zaGFkeV90ZXh0Q29udGVudH0sc2V0IHRleHRDb250ZW50KGEpe3RoaXMuX19zaGFkeV90ZXh0Q29udGVudD1cbmF9LGdldCBpbm5lckhUTUwoKXtyZXR1cm4gdGhpcy5fX3NoYWR5X2lubmVySFRNTH0sc2V0IGlubmVySFRNTChhKXtyZXR1cm4gdGhpcy5fX3NoYWR5X2lubmVySFRNTD1hfX0pLGNjPUUoe2dldCBwYXJlbnRFbGVtZW50KCl7cmV0dXJuIHRoaXMuX19zaGFkeV9wYXJlbnRFbGVtZW50fSxnZXQgcGFyZW50Tm9kZSgpe3JldHVybiB0aGlzLl9fc2hhZHlfcGFyZW50Tm9kZX0sZ2V0IG5leHRTaWJsaW5nKCl7cmV0dXJuIHRoaXMuX19zaGFkeV9uZXh0U2libGluZ30sZ2V0IHByZXZpb3VzU2libGluZygpe3JldHVybiB0aGlzLl9fc2hhZHlfcHJldmlvdXNTaWJsaW5nfSxnZXQgbmV4dEVsZW1lbnRTaWJsaW5nKCl7cmV0dXJuIHRoaXMuX19zaGFkeV9uZXh0RWxlbWVudFNpYmxpbmd9LGdldCBwcmV2aW91c0VsZW1lbnRTaWJsaW5nKCl7cmV0dXJuIHRoaXMuX19zaGFkeV9wcmV2aW91c0VsZW1lbnRTaWJsaW5nfSxnZXQgY2xhc3NOYW1lKCl7cmV0dXJuIHRoaXMuX19zaGFkeV9jbGFzc05hbWV9LFxuc2V0IGNsYXNzTmFtZShhKXtyZXR1cm4gdGhpcy5fX3NoYWR5X2NsYXNzTmFtZT1hfX0pLGRjO2ZvcihkYyBpbiBhYylhY1tkY10uZW51bWVyYWJsZT0hMTtmb3IodmFyIGVjIGluIGJjKWJjW2VjXS5lbnVtZXJhYmxlPSExO2Zvcih2YXIgZmMgaW4gY2MpY2NbZmNdLmVudW1lcmFibGU9ITE7dmFyIGdjPUIuRHx8Qi5NLGhjPWdjP2Z1bmN0aW9uKCl7fTpmdW5jdGlvbihhKXt2YXIgYj16KGEpO2IuQWF8fChiLkFhPSEwLEQoYSxjYykpfSxpYz1nYz9mdW5jdGlvbigpe306ZnVuY3Rpb24oYSl7dmFyIGI9eihhKTtiLnphfHwoYi56YT0hMCxEKGEsYWMpLHdpbmRvdy5jdXN0b21FbGVtZW50cyYmIUIuTXx8RChhLGJjKSl9O3ZhciBqYz1cIl9fZXZlbnRXcmFwcGVyc1wiK0RhdGUubm93KCksa2M9ZnVuY3Rpb24oKXt2YXIgYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV2ZW50LnByb3RvdHlwZSxcImNvbXBvc2VkXCIpO3JldHVybiBhP2Z1bmN0aW9uKGIpe3JldHVybiBhLmdldC5jYWxsKGIpfTpudWxsfSgpLGxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe312YXIgYj0hMSxjPXtnZXQgY2FwdHVyZSgpe2I9ITB9fTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIixhLGMpO3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidGVzdFwiLGEsYyk7cmV0dXJuIGJ9KCk7ZnVuY3Rpb24gbWMoYSl7aWYoYSYmXCJvYmplY3RcIj09PXR5cGVvZiBhKXt2YXIgYj0hIWEuY2FwdHVyZTt2YXIgYz0hIWEub25jZTt2YXIgZD0hIWEucGFzc2l2ZTt2YXIgZT1hLk99ZWxzZSBiPSEhYSxkPWM9ITE7cmV0dXJue3VhOmUsY2FwdHVyZTpiLG9uY2U6YyxwYXNzaXZlOmQsc2E6bGM/YTpifX1cbnZhciBuYz17Ymx1cjohMCxmb2N1czohMCxmb2N1c2luOiEwLGZvY3Vzb3V0OiEwLGNsaWNrOiEwLGRibGNsaWNrOiEwLG1vdXNlZG93bjohMCxtb3VzZWVudGVyOiEwLG1vdXNlbGVhdmU6ITAsbW91c2Vtb3ZlOiEwLG1vdXNlb3V0OiEwLG1vdXNlb3ZlcjohMCxtb3VzZXVwOiEwLHdoZWVsOiEwLGJlZm9yZWlucHV0OiEwLGlucHV0OiEwLGtleWRvd246ITAsa2V5dXA6ITAsY29tcG9zaXRpb25zdGFydDohMCxjb21wb3NpdGlvbnVwZGF0ZTohMCxjb21wb3NpdGlvbmVuZDohMCx0b3VjaHN0YXJ0OiEwLHRvdWNoZW5kOiEwLHRvdWNobW92ZTohMCx0b3VjaGNhbmNlbDohMCxwb2ludGVyb3ZlcjohMCxwb2ludGVyZW50ZXI6ITAscG9pbnRlcmRvd246ITAscG9pbnRlcm1vdmU6ITAscG9pbnRlcnVwOiEwLHBvaW50ZXJjYW5jZWw6ITAscG9pbnRlcm91dDohMCxwb2ludGVybGVhdmU6ITAsZ290cG9pbnRlcmNhcHR1cmU6ITAsbG9zdHBvaW50ZXJjYXB0dXJlOiEwLGRyYWdzdGFydDohMCxcbmRyYWc6ITAsZHJhZ2VudGVyOiEwLGRyYWdsZWF2ZTohMCxkcmFnb3ZlcjohMCxkcm9wOiEwLGRyYWdlbmQ6ITAsRE9NQWN0aXZhdGU6ITAsRE9NRm9jdXNJbjohMCxET01Gb2N1c091dDohMCxrZXlwcmVzczohMH0sb2M9e0RPTUF0dHJNb2RpZmllZDohMCxET01BdHRyaWJ1dGVOYW1lQ2hhbmdlZDohMCxET01DaGFyYWN0ZXJEYXRhTW9kaWZpZWQ6ITAsRE9NRWxlbWVudE5hbWVDaGFuZ2VkOiEwLERPTU5vZGVJbnNlcnRlZDohMCxET01Ob2RlSW5zZXJ0ZWRJbnRvRG9jdW1lbnQ6ITAsRE9NTm9kZVJlbW92ZWQ6ITAsRE9NTm9kZVJlbW92ZWRGcm9tRG9jdW1lbnQ6ITAsRE9NU3VidHJlZU1vZGlmaWVkOiEwfTtmdW5jdGlvbiBwYyhhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIE5vZGU/YS5fX3NoYWR5X2dldFJvb3ROb2RlKCk6YX1cbmZ1bmN0aW9uIHFjKGEsYil7dmFyIGM9W10sZD1hO2ZvcihhPXBjKGEpO2Q7KWMucHVzaChkKSxkLl9fc2hhZHlfYXNzaWduZWRTbG90P2Q9ZC5fX3NoYWR5X2Fzc2lnbmVkU2xvdDpkLm5vZGVUeXBlPT09Tm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFJiZkLmhvc3QmJihifHxkIT09YSk/ZD1kLmhvc3Q6ZD1kLl9fc2hhZHlfcGFyZW50Tm9kZTtjW2MubGVuZ3RoLTFdPT09ZG9jdW1lbnQmJmMucHVzaCh3aW5kb3cpO3JldHVybiBjfWZ1bmN0aW9uIHJjKGEpe2EuX19jb21wb3NlZFBhdGh8fChhLl9fY29tcG9zZWRQYXRoPXFjKGEudGFyZ2V0LCEwKSk7cmV0dXJuIGEuX19jb21wb3NlZFBhdGh9ZnVuY3Rpb24gc2MoYSxiKXtpZighQylyZXR1cm4gYTthPXFjKGEsITApO2Zvcih2YXIgYz0wLGQsZT12b2lkIDAsZixnPXZvaWQgMDtjPGIubGVuZ3RoO2MrKylpZihkPWJbY10sZj1wYyhkKSxmIT09ZSYmKGc9YS5pbmRleE9mKGYpLGU9ZiksIUMoZil8fC0xPGcpcmV0dXJuIGR9XG5mdW5jdGlvbiB0YyhhKXtmdW5jdGlvbiBiKGIsZCl7Yj1uZXcgYShiLGQpO2IuX19jb21wb3NlZD1kJiYhIWQuY29tcG9zZWQ7cmV0dXJuIGJ9Yi5fX3Byb3RvX189YTtiLnByb3RvdHlwZT1hLnByb3RvdHlwZTtyZXR1cm4gYn12YXIgdWM9e2ZvY3VzOiEwLGJsdXI6ITB9O2Z1bmN0aW9uIHZjKGEpe3JldHVybiBhLl9fdGFyZ2V0IT09YS50YXJnZXR8fGEuX19yZWxhdGVkVGFyZ2V0IT09YS5yZWxhdGVkVGFyZ2V0fWZ1bmN0aW9uIHdjKGEsYixjKXtpZihjPWIuX19oYW5kbGVycyYmYi5fX2hhbmRsZXJzW2EudHlwZV0mJmIuX19oYW5kbGVyc1thLnR5cGVdW2NdKWZvcih2YXIgZD0wLGU7KGU9Y1tkXSkmJighdmMoYSl8fGEudGFyZ2V0IT09YS5yZWxhdGVkVGFyZ2V0KSYmKGUuY2FsbChiLGEpLCFhLl9faW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKTtkKyspO31cbmZ1bmN0aW9uIHhjKGEpe3ZhciBiPWEuY29tcG9zZWRQYXRoKCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJjdXJyZW50VGFyZ2V0XCIse2dldDpmdW5jdGlvbigpe3JldHVybiBkfSxjb25maWd1cmFibGU6ITB9KTtmb3IodmFyIGM9Yi5sZW5ndGgtMTswPD1jO2MtLSl7dmFyIGQ9YltjXTt3YyhhLGQsXCJjYXB0dXJlXCIpO2lmKGEuZ2EpcmV0dXJufU9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwiZXZlbnRQaGFzZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gRXZlbnQuQVRfVEFSR0VUfX0pO3ZhciBlO2ZvcihjPTA7YzxiLmxlbmd0aDtjKyspe2Q9YltjXTt2YXIgZj1BKGQpO2Y9ZiYmZi5yb290O2lmKDA9PT1jfHxmJiZmPT09ZSlpZih3YyhhLGQsXCJidWJibGVcIiksZCE9PXdpbmRvdyYmKGU9ZC5fX3NoYWR5X2dldFJvb3ROb2RlKCkpLGEuZ2EpYnJlYWt9fVxuZnVuY3Rpb24geWMoYSxiLGMsZCxlLGYpe2Zvcih2YXIgZz0wO2c8YS5sZW5ndGg7ZysrKXt2YXIgaD1hW2ddLGs9aC50eXBlLGw9aC5jYXB0dXJlLG49aC5vbmNlLHE9aC5wYXNzaXZlO2lmKGI9PT1oLm5vZGUmJmM9PT1rJiZkPT09bCYmZT09PW4mJmY9PT1xKXJldHVybiBnfXJldHVybi0xfVxuZnVuY3Rpb24gemMoYSxiLGMpe3ZhciBkPW1jKGMpLGU9ZC5jYXB0dXJlLGY9ZC5vbmNlLGc9ZC5wYXNzaXZlLGg9ZC51YTtkPWQuc2E7aWYoYil7dmFyIGs9dHlwZW9mIGI7aWYoXCJmdW5jdGlvblwiPT09a3x8XCJvYmplY3RcIj09PWspaWYoXCJvYmplY3RcIiE9PWt8fGIuaGFuZGxlRXZlbnQmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmhhbmRsZUV2ZW50KXtpZihvY1thXSlyZXR1cm4gdGhpcy5fX3NoYWR5X25hdGl2ZV9hZGRFdmVudExpc3RlbmVyKGEsYixkKTt2YXIgbD1ofHx0aGlzO2lmKGg9YltqY10pe2lmKC0xPHljKGgsbCxhLGUsZixnKSlyZXR1cm59ZWxzZSBiW2pjXT1bXTtoPWZ1bmN0aW9uKGQpe2YmJnRoaXMuX19zaGFkeV9yZW1vdmVFdmVudExpc3RlbmVyKGEsYixjKTtkLl9fdGFyZ2V0fHxBYyhkKTtpZihsIT09dGhpcyl7dmFyIGU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkLFwiY3VycmVudFRhcmdldFwiKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZCxcImN1cnJlbnRUYXJnZXRcIixcbntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbH0sY29uZmlndXJhYmxlOiEwfSl9ZC5fX3ByZXZpb3VzQ3VycmVudFRhcmdldD1kLmN1cnJlbnRUYXJnZXQ7aWYoIUMobCkmJlwic2xvdFwiIT09bC5sb2NhbE5hbWV8fC0xIT1kLmNvbXBvc2VkUGF0aCgpLmluZGV4T2YobCkpaWYoZC5jb21wb3NlZHx8LTE8ZC5jb21wb3NlZFBhdGgoKS5pbmRleE9mKGwpKWlmKHZjKGQpJiZkLnRhcmdldD09PWQucmVsYXRlZFRhcmdldClkLmV2ZW50UGhhc2U9PT1FdmVudC5CVUJCTElOR19QSEFTRSYmZC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtlbHNlIGlmKGQuZXZlbnRQaGFzZT09PUV2ZW50LkNBUFRVUklOR19QSEFTRXx8ZC5idWJibGVzfHxkLnRhcmdldD09PWx8fGwgaW5zdGFuY2VvZiBXaW5kb3cpe3ZhciBnPVwiZnVuY3Rpb25cIj09PWs/Yi5jYWxsKGwsZCk6Yi5oYW5kbGVFdmVudCYmYi5oYW5kbGVFdmVudChkKTtsIT09dGhpcyYmKGU/KE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLFwiY3VycmVudFRhcmdldFwiLFxuZSksZT1udWxsKTpkZWxldGUgZC5jdXJyZW50VGFyZ2V0KTtyZXR1cm4gZ319O2JbamNdLnB1c2goe25vZGU6bCx0eXBlOmEsY2FwdHVyZTplLG9uY2U6ZixwYXNzaXZlOmcsYWI6aH0pO3VjW2FdPyh0aGlzLl9faGFuZGxlcnM9dGhpcy5fX2hhbmRsZXJzfHx7fSx0aGlzLl9faGFuZGxlcnNbYV09dGhpcy5fX2hhbmRsZXJzW2FdfHx7Y2FwdHVyZTpbXSxidWJibGU6W119LHRoaXMuX19oYW5kbGVyc1thXVtlP1wiY2FwdHVyZVwiOlwiYnViYmxlXCJdLnB1c2goaCkpOnRoaXMuX19zaGFkeV9uYXRpdmVfYWRkRXZlbnRMaXN0ZW5lcihhLGgsZCl9fX1cbmZ1bmN0aW9uIEJjKGEsYixjKXtpZihiKXt2YXIgZD1tYyhjKTtjPWQuY2FwdHVyZTt2YXIgZT1kLm9uY2UsZj1kLnBhc3NpdmUsZz1kLnVhO2Q9ZC5zYTtpZihvY1thXSlyZXR1cm4gdGhpcy5fX3NoYWR5X25hdGl2ZV9yZW1vdmVFdmVudExpc3RlbmVyKGEsYixkKTt2YXIgaD1nfHx0aGlzO2c9dm9pZCAwO3ZhciBrPW51bGw7dHJ5e2s9YltqY119Y2F0Y2gobCl7fWsmJihlPXljKGssaCxhLGMsZSxmKSwtMTxlJiYoZz1rLnNwbGljZShlLDEpWzBdLmFiLGsubGVuZ3RofHwoYltqY109dm9pZCAwKSkpO3RoaXMuX19zaGFkeV9uYXRpdmVfcmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGd8fGIsZCk7ZyYmdWNbYV0mJnRoaXMuX19oYW5kbGVycyYmdGhpcy5fX2hhbmRsZXJzW2FdJiYoYT10aGlzLl9faGFuZGxlcnNbYV1bYz9cImNhcHR1cmVcIjpcImJ1YmJsZVwiXSxiPWEuaW5kZXhPZihnKSwtMTxiJiZhLnNwbGljZShiLDEpKX19XG5mdW5jdGlvbiBDYygpe2Zvcih2YXIgYSBpbiB1Yyl3aW5kb3cuX19zaGFkeV9uYXRpdmVfYWRkRXZlbnRMaXN0ZW5lcihhLGZ1bmN0aW9uKGEpe2EuX190YXJnZXR8fChBYyhhKSx4YyhhKSl9LCEwKX1cbnZhciBEYz1FKHtnZXQgY29tcG9zZWQoKXt2b2lkIDA9PT10aGlzLl9fY29tcG9zZWQmJihrYz90aGlzLl9fY29tcG9zZWQ9XCJmb2N1c2luXCI9PT10aGlzLnR5cGV8fFwiZm9jdXNvdXRcIj09PXRoaXMudHlwZXx8a2ModGhpcyk6ITEhPT10aGlzLmlzVHJ1c3RlZCYmKHRoaXMuX19jb21wb3NlZD1uY1t0aGlzLnR5cGVdKSk7cmV0dXJuIHRoaXMuX19jb21wb3NlZHx8ITF9LGNvbXBvc2VkUGF0aDpmdW5jdGlvbigpe3RoaXMuX19jb21wb3NlZFBhdGh8fCh0aGlzLl9fY29tcG9zZWRQYXRoPXFjKHRoaXMuX190YXJnZXQsdGhpcy5jb21wb3NlZCkpO3JldHVybiB0aGlzLl9fY29tcG9zZWRQYXRofSxnZXQgdGFyZ2V0KCl7cmV0dXJuIHNjKHRoaXMuY3VycmVudFRhcmdldHx8dGhpcy5fX3ByZXZpb3VzQ3VycmVudFRhcmdldCx0aGlzLmNvbXBvc2VkUGF0aCgpKX0sZ2V0IHJlbGF0ZWRUYXJnZXQoKXtpZighdGhpcy5fX3JlbGF0ZWRUYXJnZXQpcmV0dXJuIG51bGw7dGhpcy5fX3JlbGF0ZWRUYXJnZXRDb21wb3NlZFBhdGh8fFxuKHRoaXMuX19yZWxhdGVkVGFyZ2V0Q29tcG9zZWRQYXRoPXFjKHRoaXMuX19yZWxhdGVkVGFyZ2V0LCEwKSk7cmV0dXJuIHNjKHRoaXMuY3VycmVudFRhcmdldHx8dGhpcy5fX3ByZXZpb3VzQ3VycmVudFRhcmdldCx0aGlzLl9fcmVsYXRlZFRhcmdldENvbXBvc2VkUGF0aCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe0V2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24uY2FsbCh0aGlzKTt0aGlzLmdhPSEwfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXtFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uLmNhbGwodGhpcyk7dGhpcy5nYT10aGlzLl9faW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPSEwfX0pO1xuZnVuY3Rpb24gQWMoYSl7YS5fX3RhcmdldD1hLnRhcmdldDthLl9fcmVsYXRlZFRhcmdldD1hLnJlbGF0ZWRUYXJnZXQ7aWYoQi5EKXt2YXIgYj1PYmplY3QuZ2V0UHJvdG90eXBlT2YoYSk7aWYoIU9iamVjdC5oYXNPd25Qcm9wZXJ0eShiLFwiX19zaGFkeV9wYXRjaGVkUHJvdG9cIikpe3ZhciBjPU9iamVjdC5jcmVhdGUoYik7Yy5fX3NoYWR5X3NvdXJjZVByb3RvPWI7RChjLERjKTtiLl9fc2hhZHlfcGF0Y2hlZFByb3RvPWN9YS5fX3Byb3RvX189Yi5fX3NoYWR5X3BhdGNoZWRQcm90b31lbHNlIEQoYSxEYyl9dmFyIEVjPXRjKEV2ZW50KSxGYz10YyhDdXN0b21FdmVudCksR2M9dGMoTW91c2VFdmVudCk7XG5mdW5jdGlvbiBIYygpe2lmKCFrYyYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihFdmVudC5wcm90b3R5cGUsXCJpc1RydXN0ZWRcIikpe3ZhciBhPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY29tcG9zZWQ6ITB9KTt0aGlzLl9fc2hhZHlfZGlzcGF0Y2hFdmVudChhKX07RWxlbWVudC5wcm90b3R5cGUuY2xpY2s/RWxlbWVudC5wcm90b3R5cGUuY2xpY2s9YTpIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2smJihIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2s9YSl9fXZhciBJYz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhEb2N1bWVudC5wcm90b3R5cGUpLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm5cIm9uXCI9PT1hLnN1YnN0cmluZygwLDIpfSk7ZnVuY3Rpb24gSmMoYSxiKXtyZXR1cm57aW5kZXg6YSxXOltdLFo6Yn19XG5mdW5jdGlvbiBLYyhhLGIsYyxkKXt2YXIgZT0wLGY9MCxnPTAsaD0wLGs9TWF0aC5taW4oYi1lLGQtZik7aWYoMD09ZSYmMD09ZilhOntmb3IoZz0wO2c8aztnKyspaWYoYVtnXSE9PWNbZ10pYnJlYWsgYTtnPWt9aWYoYj09YS5sZW5ndGgmJmQ9PWMubGVuZ3RoKXtoPWEubGVuZ3RoO2Zvcih2YXIgbD1jLmxlbmd0aCxuPTA7bjxrLWcmJkxjKGFbLS1oXSxjWy0tbF0pOyluKys7aD1ufWUrPWc7Zis9ZztiLT1oO2QtPWg7aWYoMD09Yi1lJiYwPT1kLWYpcmV0dXJuW107aWYoZT09Yil7Zm9yKGI9SmMoZSwwKTtmPGQ7KWIuVy5wdXNoKGNbZisrXSk7cmV0dXJuW2JdfWlmKGY9PWQpcmV0dXJuW0pjKGUsYi1lKV07az1lO2c9ZjtkPWQtZysxO2g9Yi1rKzE7Yj1BcnJheShkKTtmb3IobD0wO2w8ZDtsKyspYltsXT1BcnJheShoKSxiW2xdWzBdPWw7Zm9yKGw9MDtsPGg7bCsrKWJbMF1bbF09bDtmb3IobD0xO2w8ZDtsKyspZm9yKG49MTtuPGg7bisrKWlmKGFbaytuLTFdPT09Y1tnK2wtMV0pYltsXVtuXT1cbmJbbC0xXVtuLTFdO2Vsc2V7dmFyIHE9YltsLTFdW25dKzEsST1iW2xdW24tMV0rMTtiW2xdW25dPXE8ST9xOkl9az1iLmxlbmd0aC0xO2c9YlswXS5sZW5ndGgtMTtkPWJba11bZ107Zm9yKGE9W107MDxrfHwwPGc7KTA9PWs/KGEucHVzaCgyKSxnLS0pOjA9PWc/KGEucHVzaCgzKSxrLS0pOihoPWJbay0xXVtnLTFdLGw9YltrLTFdW2ddLG49YltrXVtnLTFdLHE9bDxuP2w8aD9sOmg6bjxoP246aCxxPT1oPyhoPT1kP2EucHVzaCgwKTooYS5wdXNoKDEpLGQ9aCksay0tLGctLSk6cT09bD8oYS5wdXNoKDMpLGstLSxkPWwpOihhLnB1c2goMiksZy0tLGQ9bikpO2EucmV2ZXJzZSgpO2I9dm9pZCAwO2s9W107Zm9yKGc9MDtnPGEubGVuZ3RoO2crKylzd2l0Y2goYVtnXSl7Y2FzZSAwOmImJihrLnB1c2goYiksYj12b2lkIDApO2UrKztmKys7YnJlYWs7Y2FzZSAxOmJ8fChiPUpjKGUsMCkpO2IuWisrO2UrKztiLlcucHVzaChjW2ZdKTtmKys7YnJlYWs7Y2FzZSAyOmJ8fChiPUpjKGUsMCkpO1xuYi5aKys7ZSsrO2JyZWFrO2Nhc2UgMzpifHwoYj1KYyhlLDApKSxiLlcucHVzaChjW2ZdKSxmKyt9YiYmay5wdXNoKGIpO3JldHVybiBrfWZ1bmN0aW9uIExjKGEsYil7cmV0dXJuIGE9PT1ifTtmdW5jdGlvbiBNYyhhLGIsYyxkKXtoYyhhKTtkPWR8fG51bGw7dmFyIGU9eihhKSxmPWQ/eihkKTpudWxsO2UucHJldmlvdXNTaWJsaW5nPWQ/Zi5wcmV2aW91c1NpYmxpbmc6Yi5fX3NoYWR5X2xhc3RDaGlsZDtpZihmPUEoZS5wcmV2aW91c1NpYmxpbmcpKWYubmV4dFNpYmxpbmc9YTtpZihmPUEoZS5uZXh0U2libGluZz1kKSlmLnByZXZpb3VzU2libGluZz1hO2UucGFyZW50Tm9kZT1iO2Q/ZD09PWMuZmlyc3RDaGlsZCYmKGMuZmlyc3RDaGlsZD1hKTooYy5sYXN0Q2hpbGQ9YSxjLmZpcnN0Q2hpbGR8fChjLmZpcnN0Q2hpbGQ9YSkpO2MuY2hpbGROb2Rlcz1udWxsfVxuZnVuY3Rpb24gTmMoYSxiLGMpe2ljKGIpO3ZhciBkPXooYik7dm9pZCAwIT09ZC5maXJzdENoaWxkJiYoZC5jaGlsZE5vZGVzPW51bGwpO2lmKGEubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpZm9yKGE9YS5fX3NoYWR5X25hdGl2ZV9maXJzdENoaWxkO2E7YT1hLl9fc2hhZHlfbmF0aXZlX25leHRTaWJsaW5nKU1jKGEsYixkLGMpO2Vsc2UgTWMoYSxiLGQsYyl9XG5mdW5jdGlvbiBPYyhhLGIpe3ZhciBjPXooYSk7Yj16KGIpO2E9PT1iLmZpcnN0Q2hpbGQmJihiLmZpcnN0Q2hpbGQ9Yy5uZXh0U2libGluZyk7YT09PWIubGFzdENoaWxkJiYoYi5sYXN0Q2hpbGQ9Yy5wcmV2aW91c1NpYmxpbmcpO2E9Yy5wcmV2aW91c1NpYmxpbmc7dmFyIGQ9Yy5uZXh0U2libGluZzthJiYoeihhKS5uZXh0U2libGluZz1kKTtkJiYoeihkKS5wcmV2aW91c1NpYmxpbmc9YSk7Yy5wYXJlbnROb2RlPWMucHJldmlvdXNTaWJsaW5nPWMubmV4dFNpYmxpbmc9dm9pZCAwO3ZvaWQgMCE9PWIuY2hpbGROb2RlcyYmKGIuY2hpbGROb2Rlcz1udWxsKX1cbmZ1bmN0aW9uIFBjKGEsYil7dmFyIGM9eihhKTtpZihifHx2b2lkIDA9PT1jLmZpcnN0Q2hpbGQpe2MuY2hpbGROb2Rlcz1udWxsO3ZhciBkPWMuZmlyc3RDaGlsZD1hLl9fc2hhZHlfbmF0aXZlX2ZpcnN0Q2hpbGQ7Yy5sYXN0Q2hpbGQ9YS5fX3NoYWR5X25hdGl2ZV9sYXN0Q2hpbGQ7aWMoYSk7Yz1kO2ZvcihkPXZvaWQgMDtjO2M9Yy5fX3NoYWR5X25hdGl2ZV9uZXh0U2libGluZyl7dmFyIGU9eihjKTtlLnBhcmVudE5vZGU9Ynx8YTtlLm5leHRTaWJsaW5nPWMuX19zaGFkeV9uYXRpdmVfbmV4dFNpYmxpbmc7ZS5wcmV2aW91c1NpYmxpbmc9ZHx8bnVsbDtkPWM7aGMoYyl9fX07dmFyIFFjPW51bGw7ZnVuY3Rpb24gUmMoKXtRY3x8KFFjPXdpbmRvdy5TaGFkeUNTUyYmd2luZG93LlNoYWR5Q1NTLlNjb3BpbmdTaGltKTtyZXR1cm4gUWN8fG51bGx9ZnVuY3Rpb24gU2MoYSxiKXt2YXIgYz1SYygpO2MmJmMudW5zY29wZU5vZGUoYSxiKX1mdW5jdGlvbiBUYyhhLGIpe3ZhciBjPVJjKCk7aWYoIWMpcmV0dXJuITA7aWYoYS5ub2RlVHlwZT09PU5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSl7Yz0hMDtmb3IoYT1hLl9fc2hhZHlfZmlyc3RDaGlsZDthO2E9YS5fX3NoYWR5X25leHRTaWJsaW5nKWM9YyYmVGMoYSxiKTtyZXR1cm4gY31yZXR1cm4gYS5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFPyEwOmMuY3VycmVudFNjb3BlRm9yTm9kZShhKT09PWJ9ZnVuY3Rpb24gVWMoYSl7aWYoYS5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFKXJldHVyblwiXCI7dmFyIGI9UmMoKTtyZXR1cm4gYj9iLmN1cnJlbnRTY29wZUZvck5vZGUoYSk6XCJcIn1cbmZ1bmN0aW9uIFZjKGEsYil7aWYoYSlmb3IoYS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFJiZiKGEpLGE9YS5fX3NoYWR5X2ZpcnN0Q2hpbGQ7YTthPWEuX19zaGFkeV9uZXh0U2libGluZylhLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUmJlZjKGEsYil9O3ZhciBXYz13aW5kb3cuZG9jdW1lbnQsWGM9Qi50YSxZYz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5vZGUucHJvdG90eXBlLFwiaXNDb25uZWN0ZWRcIiksWmM9WWMmJlljLmdldDtmdW5jdGlvbiAkYyhhKXtmb3IodmFyIGI7Yj1hLl9fc2hhZHlfZmlyc3RDaGlsZDspYS5fX3NoYWR5X3JlbW92ZUNoaWxkKGIpfWZ1bmN0aW9uIGFkKGEpe3ZhciBiPUEoYSk7aWYoYiYmdm9pZCAwIT09Yi5jYSlmb3IoYj1hLl9fc2hhZHlfZmlyc3RDaGlsZDtiO2I9Yi5fX3NoYWR5X25leHRTaWJsaW5nKWFkKGIpO2lmKGE9QShhKSlhLmNhPXZvaWQgMH1mdW5jdGlvbiBiZChhKXt2YXIgYj1hO2EmJlwic2xvdFwiPT09YS5sb2NhbE5hbWUmJihiPShiPShiPUEoYSkpJiZiLlQpJiZiLmxlbmd0aD9iWzBdOmJkKGEuX19zaGFkeV9uZXh0U2libGluZykpO3JldHVybiBifVxuZnVuY3Rpb24gY2QoYSxiLGMpe2lmKGE9KGE9QShhKSkmJmEuViliJiZhLmFkZGVkTm9kZXMucHVzaChiKSxjJiZhLnJlbW92ZWROb2Rlcy5wdXNoKGMpLERiKGEpfVxudmFyIGdkPUUoe2dldCBwYXJlbnROb2RlKCl7dmFyIGE9QSh0aGlzKTthPWEmJmEucGFyZW50Tm9kZTtyZXR1cm4gdm9pZCAwIT09YT9hOnRoaXMuX19zaGFkeV9uYXRpdmVfcGFyZW50Tm9kZX0sZ2V0IGZpcnN0Q2hpbGQoKXt2YXIgYT1BKHRoaXMpO2E9YSYmYS5maXJzdENoaWxkO3JldHVybiB2b2lkIDAhPT1hP2E6dGhpcy5fX3NoYWR5X25hdGl2ZV9maXJzdENoaWxkfSxnZXQgbGFzdENoaWxkKCl7dmFyIGE9QSh0aGlzKTthPWEmJmEubGFzdENoaWxkO3JldHVybiB2b2lkIDAhPT1hP2E6dGhpcy5fX3NoYWR5X25hdGl2ZV9sYXN0Q2hpbGR9LGdldCBuZXh0U2libGluZygpe3ZhciBhPUEodGhpcyk7YT1hJiZhLm5leHRTaWJsaW5nO3JldHVybiB2b2lkIDAhPT1hP2E6dGhpcy5fX3NoYWR5X25hdGl2ZV9uZXh0U2libGluZ30sZ2V0IHByZXZpb3VzU2libGluZygpe3ZhciBhPUEodGhpcyk7YT1hJiZhLnByZXZpb3VzU2libGluZztyZXR1cm4gdm9pZCAwIT09YT9hOnRoaXMuX19zaGFkeV9uYXRpdmVfcHJldmlvdXNTaWJsaW5nfSxcbmdldCBjaGlsZE5vZGVzKCl7aWYoa2IodGhpcykpe3ZhciBhPUEodGhpcyk7aWYoIWEuY2hpbGROb2Rlcyl7YS5jaGlsZE5vZGVzPVtdO2Zvcih2YXIgYj10aGlzLl9fc2hhZHlfZmlyc3RDaGlsZDtiO2I9Yi5fX3NoYWR5X25leHRTaWJsaW5nKWEuY2hpbGROb2Rlcy5wdXNoKGIpfXZhciBjPWEuY2hpbGROb2Rlc31lbHNlIGM9dGhpcy5fX3NoYWR5X25hdGl2ZV9jaGlsZE5vZGVzO2MuaXRlbT1mdW5jdGlvbihhKXtyZXR1cm4gY1thXX07cmV0dXJuIGN9LGdldCBwYXJlbnRFbGVtZW50KCl7dmFyIGE9QSh0aGlzKTsoYT1hJiZhLnBhcmVudE5vZGUpJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREUmJihhPW51bGwpO3JldHVybiB2b2lkIDAhPT1hP2E6dGhpcy5fX3NoYWR5X25hdGl2ZV9wYXJlbnRFbGVtZW50fSxnZXQgaXNDb25uZWN0ZWQoKXtpZihaYyYmWmMuY2FsbCh0aGlzKSlyZXR1cm4hMDtpZih0aGlzLm5vZGVUeXBlPT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpcmV0dXJuITE7XG52YXIgYT10aGlzLm93bmVyRG9jdW1lbnQ7aWYodGIpe2lmKGEuX19zaGFkeV9uYXRpdmVfY29udGFpbnModGhpcykpcmV0dXJuITB9ZWxzZSBpZihhLmRvY3VtZW50RWxlbWVudCYmYS5kb2N1bWVudEVsZW1lbnQuX19zaGFkeV9uYXRpdmVfY29udGFpbnModGhpcykpcmV0dXJuITA7Zm9yKGE9dGhpczthJiYhKGEgaW5zdGFuY2VvZiBEb2N1bWVudCk7KWE9YS5fX3NoYWR5X3BhcmVudE5vZGV8fChDKGEpP2EuaG9zdDp2b2lkIDApO3JldHVybiEhKGEmJmEgaW5zdGFuY2VvZiBEb2N1bWVudCl9LGdldCB0ZXh0Q29udGVudCgpe2lmKGtiKHRoaXMpKXtmb3IodmFyIGE9W10sYj10aGlzLl9fc2hhZHlfZmlyc3RDaGlsZDtiO2I9Yi5fX3NoYWR5X25leHRTaWJsaW5nKWIubm9kZVR5cGUhPT1Ob2RlLkNPTU1FTlRfTk9ERSYmYS5wdXNoKGIuX19zaGFkeV90ZXh0Q29udGVudCk7cmV0dXJuIGEuam9pbihcIlwiKX1yZXR1cm4gdGhpcy5fX3NoYWR5X25hdGl2ZV90ZXh0Q29udGVudH0sc2V0IHRleHRDb250ZW50KGEpe2lmKFwidW5kZWZpbmVkXCI9PT1cbnR5cGVvZiBhfHxudWxsPT09YSlhPVwiXCI7c3dpdGNoKHRoaXMubm9kZVR5cGUpe2Nhc2UgTm9kZS5FTEVNRU5UX05PREU6Y2FzZSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREU6aWYoIWtiKHRoaXMpJiZCLkQpe3ZhciBiPXRoaXMuX19zaGFkeV9maXJzdENoaWxkOyhiIT10aGlzLl9fc2hhZHlfbGFzdENoaWxkfHxiJiZiLm5vZGVUeXBlIT1Ob2RlLlRFWFRfTk9ERSkmJiRjKHRoaXMpO3RoaXMuX19zaGFkeV9uYXRpdmVfdGV4dENvbnRlbnQ9YX1lbHNlICRjKHRoaXMpLCgwPGEubGVuZ3RofHx0aGlzLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpJiZ0aGlzLl9fc2hhZHlfaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKTticmVhaztkZWZhdWx0OnRoaXMubm9kZVZhbHVlPWF9fSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24oYSxiKXtpZih0aGlzLm93bmVyRG9jdW1lbnQhPT1XYyYmYS5vd25lckRvY3VtZW50IT09V2MpcmV0dXJuIHRoaXMuX19zaGFkeV9uYXRpdmVfaW5zZXJ0QmVmb3JlKGEsXG5iKSxhO2lmKGE9PT10aGlzKXRocm93IEVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ2FwcGVuZENoaWxkJyBvbiAnTm9kZSc6IFRoZSBuZXcgY2hpbGQgZWxlbWVudCBjb250YWlucyB0aGUgcGFyZW50LlwiKTtpZihiKXt2YXIgYz1BKGIpO2M9YyYmYy5wYXJlbnROb2RlO2lmKHZvaWQgMCE9PWMmJmMhPT10aGlzfHx2b2lkIDA9PT1jJiZiLl9fc2hhZHlfbmF0aXZlX3BhcmVudE5vZGUhPT10aGlzKXRocm93IEVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ2luc2VydEJlZm9yZScgb24gJ05vZGUnOiBUaGUgbm9kZSBiZWZvcmUgd2hpY2ggdGhlIG5ldyBub2RlIGlzIHRvIGJlIGluc2VydGVkIGlzIG5vdCBhIGNoaWxkIG9mIHRoaXMgbm9kZS5cIik7fWlmKGI9PT1hKXJldHVybiBhO3ZhciBkPVtdLGU9KGM9ZGQodGhpcykpP2MuaG9zdC5sb2NhbE5hbWU6VWModGhpcyksZj1hLl9fc2hhZHlfcGFyZW50Tm9kZTtpZihmKXt2YXIgZz1VYyhhKTt2YXIgaD0hIWN8fCFkZChhKXx8WGMmJnZvaWQgMCE9PVxudGhpcy5fX25vSW5zZXJ0aW9uUG9pbnQ7Zi5fX3NoYWR5X3JlbW92ZUNoaWxkKGEsaCl9Zj0hMDt2YXIgaz0oIVhjfHx2b2lkIDA9PT1hLl9fbm9JbnNlcnRpb25Qb2ludCYmdm9pZCAwPT09dGhpcy5fX25vSW5zZXJ0aW9uUG9pbnQpJiYhVGMoYSxlKSxsPWMmJiFhLl9fbm9JbnNlcnRpb25Qb2ludCYmKCFYY3x8YS5ub2RlVHlwZT09PU5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSk7aWYobHx8aylrJiYoZz1nfHxVYyhhKSksVmMoYSxmdW5jdGlvbihhKXtsJiZcInNsb3RcIj09PWEubG9jYWxOYW1lJiZkLnB1c2goYSk7aWYoayl7dmFyIGI9ZztSYygpJiYoYiYmU2MoYSxiKSwoYj1SYygpKSYmYi5zY29wZU5vZGUoYSxlKSl9fSk7ZC5sZW5ndGgmJihlZChjKSxjLmMucHVzaC5hcHBseShjLmMsZCBpbnN0YW5jZW9mIEFycmF5P2Q6a2EoamEoZCkpKSxKKGMpKTtrYih0aGlzKSYmKE5jKGEsdGhpcyxiKSxjPUEodGhpcyksbGIodGhpcyk/KEooYy5yb290KSxmPSExKTpjLnJvb3QmJihmPVxuITEpKTtmPyhjPUModGhpcyk/dGhpcy5ob3N0OnRoaXMsYj8oYj1iZChiKSxjLl9fc2hhZHlfbmF0aXZlX2luc2VydEJlZm9yZShhLGIpKTpjLl9fc2hhZHlfbmF0aXZlX2FwcGVuZENoaWxkKGEpKTphLm93bmVyRG9jdW1lbnQhPT10aGlzLm93bmVyRG9jdW1lbnQmJnRoaXMub3duZXJEb2N1bWVudC5hZG9wdE5vZGUoYSk7Y2QodGhpcyxhKTtyZXR1cm4gYX0sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24oYSl7aWYodGhpcyE9YXx8IUMoYSkpcmV0dXJuIHRoaXMuX19zaGFkeV9pbnNlcnRCZWZvcmUoYSl9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKGEsYil7Yj12b2lkIDA9PT1iPyExOmI7aWYodGhpcy5vd25lckRvY3VtZW50IT09V2MpcmV0dXJuIHRoaXMuX19zaGFkeV9uYXRpdmVfcmVtb3ZlQ2hpbGQoYSk7aWYoYS5fX3NoYWR5X3BhcmVudE5vZGUhPT10aGlzKXRocm93IEVycm9yKFwiVGhlIG5vZGUgdG8gYmUgcmVtb3ZlZCBpcyBub3QgYSBjaGlsZCBvZiB0aGlzIG5vZGU6IFwiK2EpO3ZhciBjPVxuZGQoYSksZD1jJiZmZChjLGEpLGU9QSh0aGlzKTtpZihrYih0aGlzKSYmKE9jKGEsdGhpcyksbGIodGhpcykpKXtKKGUucm9vdCk7dmFyIGY9ITB9aWYoUmMoKSYmIWImJmMmJmEubm9kZVR5cGUhPT1Ob2RlLlRFWFRfTk9ERSl7dmFyIGc9VWMoYSk7VmMoYSxmdW5jdGlvbihhKXtTYyhhLGcpfSl9YWQoYSk7YyYmKChiPXRoaXMmJlwic2xvdFwiPT09dGhpcy5sb2NhbE5hbWUpJiYoZj0hMCksKGR8fGIpJiZKKGMpKTtmfHwoZj1DKHRoaXMpP3RoaXMuaG9zdDp0aGlzLCghZS5yb290JiZcInNsb3RcIiE9PWEubG9jYWxOYW1lfHxmPT09YS5fX3NoYWR5X25hdGl2ZV9wYXJlbnROb2RlKSYmZi5fX3NoYWR5X25hdGl2ZV9yZW1vdmVDaGlsZChhKSk7Y2QodGhpcyxudWxsLGEpO3JldHVybiBhfSxyZXBsYWNlQ2hpbGQ6ZnVuY3Rpb24oYSxiKXt0aGlzLl9fc2hhZHlfaW5zZXJ0QmVmb3JlKGEsYik7dGhpcy5fX3NoYWR5X3JlbW92ZUNoaWxkKGIpO3JldHVybiBhfSxjbG9uZU5vZGU6ZnVuY3Rpb24oYSl7aWYoXCJ0ZW1wbGF0ZVwiPT1cbnRoaXMubG9jYWxOYW1lKXJldHVybiB0aGlzLl9fc2hhZHlfbmF0aXZlX2Nsb25lTm9kZShhKTt2YXIgYj10aGlzLl9fc2hhZHlfbmF0aXZlX2Nsb25lTm9kZSghMSk7aWYoYSYmYi5ub2RlVHlwZSE9PU5vZGUuQVRUUklCVVRFX05PREUpe2E9dGhpcy5fX3NoYWR5X2ZpcnN0Q2hpbGQ7Zm9yKHZhciBjO2E7YT1hLl9fc2hhZHlfbmV4dFNpYmxpbmcpYz1hLl9fc2hhZHlfY2xvbmVOb2RlKCEwKSxiLl9fc2hhZHlfYXBwZW5kQ2hpbGQoYyl9cmV0dXJuIGJ9LGdldFJvb3ROb2RlOmZ1bmN0aW9uKGEpe2lmKHRoaXMmJnRoaXMubm9kZVR5cGUpe3ZhciBiPXoodGhpcyksYz1iLmNhO3ZvaWQgMD09PWMmJihDKHRoaXMpPyhjPXRoaXMsYi5jYT1jKTooYz0oYz10aGlzLl9fc2hhZHlfcGFyZW50Tm9kZSk/Yy5fX3NoYWR5X2dldFJvb3ROb2RlKGEpOnRoaXMsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Ll9fc2hhZHlfbmF0aXZlX2NvbnRhaW5zKHRoaXMpJiYoYi5jYT1jKSkpO3JldHVybiBjfX0sXG5jb250YWluczpmdW5jdGlvbihhKXtyZXR1cm4gdWIodGhpcyxhKX19KTtmdW5jdGlvbiBoZChhLGIsYyl7dmFyIGQ9W107aWQoYSxiLGMsZCk7cmV0dXJuIGR9ZnVuY3Rpb24gaWQoYSxiLGMsZCl7Zm9yKGE9YS5fX3NoYWR5X2ZpcnN0Q2hpbGQ7YTthPWEuX19zaGFkeV9uZXh0U2libGluZyl7dmFyIGU7aWYoZT1hLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpe2U9YTt2YXIgZj1iLGc9YyxoPWQsaz1mKGUpO2smJmgucHVzaChlKTtnJiZnKGspP2U9azooaWQoZSxmLGcsaCksZT12b2lkIDApfWlmKGUpYnJlYWt9fVxudmFyIGpkPUUoe2dldCBmaXJzdEVsZW1lbnRDaGlsZCgpe3ZhciBhPUEodGhpcyk7aWYoYSYmdm9pZCAwIT09YS5maXJzdENoaWxkKXtmb3IoYT10aGlzLl9fc2hhZHlfZmlyc3RDaGlsZDthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5fX3NoYWR5X25leHRTaWJsaW5nO3JldHVybiBhfXJldHVybiB0aGlzLl9fc2hhZHlfbmF0aXZlX2ZpcnN0RWxlbWVudENoaWxkfSxnZXQgbGFzdEVsZW1lbnRDaGlsZCgpe3ZhciBhPUEodGhpcyk7aWYoYSYmdm9pZCAwIT09YS5sYXN0Q2hpbGQpe2ZvcihhPXRoaXMuX19zaGFkeV9sYXN0Q2hpbGQ7YSYmYS5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFOylhPWEuX19zaGFkeV9wcmV2aW91c1NpYmxpbmc7cmV0dXJuIGF9cmV0dXJuIHRoaXMuX19zaGFkeV9uYXRpdmVfbGFzdEVsZW1lbnRDaGlsZH0sZ2V0IGNoaWxkcmVuKCl7cmV0dXJuIGtiKHRoaXMpP3ZiKEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCh4Yih0aGlzKSxcbmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREV9KSk6dGhpcy5fX3NoYWR5X25hdGl2ZV9jaGlsZHJlbn0sZ2V0IGNoaWxkRWxlbWVudENvdW50KCl7dmFyIGE9dGhpcy5fX3NoYWR5X2NoaWxkcmVuO3JldHVybiBhP2EubGVuZ3RoOjB9fSksa2Q9RSh7cXVlcnlTZWxlY3RvcjpmdW5jdGlvbihhKXtyZXR1cm4gaGQodGhpcyxmdW5jdGlvbihiKXtyZXR1cm4gb2IuY2FsbChiLGEpfSxmdW5jdGlvbihhKXtyZXR1cm4hIWF9KVswXXx8bnVsbH0scXVlcnlTZWxlY3RvckFsbDpmdW5jdGlvbihhLGIpe2lmKGIpe2I9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fX3NoYWR5X25hdGl2ZV9xdWVyeVNlbGVjdG9yQWxsKGEpKTt2YXIgYz10aGlzLl9fc2hhZHlfZ2V0Um9vdE5vZGUoKTtyZXR1cm4gYi5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGEuX19zaGFkeV9nZXRSb290Tm9kZSgpPT1jfSl9cmV0dXJuIGhkKHRoaXMsZnVuY3Rpb24oYil7cmV0dXJuIG9iLmNhbGwoYixcbmEpfSl9fSksbGQ9Qi50YSYmIUIuTT9PYmplY3QuYXNzaWduKHt9LGpkKTpqZDtPYmplY3QuYXNzaWduKGpkLGtkKTt2YXIgbWQ9RSh7Z2V0RWxlbWVudEJ5SWQ6ZnVuY3Rpb24oYSl7cmV0dXJuXCJcIj09PWE/bnVsbDpoZCh0aGlzLGZ1bmN0aW9uKGIpe3JldHVybiBiLmlkPT1hfSxmdW5jdGlvbihhKXtyZXR1cm4hIWF9KVswXXx8bnVsbH19KTt2YXIgbmQ9RSh7Z2V0IGFjdGl2ZUVsZW1lbnQoKXt2YXIgYT1CLkQ/ZG9jdW1lbnQuX19zaGFkeV9uYXRpdmVfYWN0aXZlRWxlbWVudDpkb2N1bWVudC5hY3RpdmVFbGVtZW50O2lmKCFhfHwhYS5ub2RlVHlwZSlyZXR1cm4gbnVsbDt2YXIgYj0hIUModGhpcyk7aWYoISh0aGlzPT09ZG9jdW1lbnR8fGImJnRoaXMuaG9zdCE9PWEmJnRoaXMuaG9zdC5fX3NoYWR5X25hdGl2ZV9jb250YWlucyhhKSkpcmV0dXJuIG51bGw7Zm9yKGI9ZGQoYSk7YiYmYiE9PXRoaXM7KWE9Yi5ob3N0LGI9ZGQoYSk7cmV0dXJuIHRoaXM9PT1kb2N1bWVudD9iP251bGw6YTpiPT09dGhpcz9hOm51bGx9fSk7dmFyIG9kPWRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcImluZXJ0XCIpLHBkPUUoe2dldCBpbm5lckhUTUwoKXtyZXR1cm4ga2IodGhpcyk/UWIoXCJ0ZW1wbGF0ZVwiPT09dGhpcy5sb2NhbE5hbWU/dGhpcy5jb250ZW50OnRoaXMseGIpOnRoaXMuX19zaGFkeV9uYXRpdmVfaW5uZXJIVE1MfSxzZXQgaW5uZXJIVE1MKGEpe2lmKFwidGVtcGxhdGVcIj09PXRoaXMubG9jYWxOYW1lKXRoaXMuX19zaGFkeV9uYXRpdmVfaW5uZXJIVE1MPWE7ZWxzZXskYyh0aGlzKTt2YXIgYj10aGlzLmxvY2FsTmFtZXx8XCJkaXZcIjtiPXRoaXMubmFtZXNwYWNlVVJJJiZ0aGlzLm5hbWVzcGFjZVVSSSE9PW9kLm5hbWVzcGFjZVVSST9vZC5jcmVhdGVFbGVtZW50TlModGhpcy5uYW1lc3BhY2VVUkksYik6b2QuY3JlYXRlRWxlbWVudChiKTtmb3IoQi5EP2IuX19zaGFkeV9uYXRpdmVfaW5uZXJIVE1MPWE6Yi5pbm5lckhUTUw9YTthPWIuX19zaGFkeV9maXJzdENoaWxkOyl0aGlzLl9fc2hhZHlfaW5zZXJ0QmVmb3JlKGEpfX19KTt2YXIgcWQ9RSh7YWRkRXZlbnRMaXN0ZW5lcjpmdW5jdGlvbihhLGIsYyl7XCJvYmplY3RcIiE9PXR5cGVvZiBjJiYoYz17Y2FwdHVyZTohIWN9KTtjLk89Yy5PfHx0aGlzO3RoaXMuaG9zdC5fX3NoYWR5X2FkZEV2ZW50TGlzdGVuZXIoYSxiLGMpfSxyZW1vdmVFdmVudExpc3RlbmVyOmZ1bmN0aW9uKGEsYixjKXtcIm9iamVjdFwiIT09dHlwZW9mIGMmJihjPXtjYXB0dXJlOiEhY30pO2MuTz1jLk98fHRoaXM7dGhpcy5ob3N0Ll9fc2hhZHlfcmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGIsYyl9fSk7ZnVuY3Rpb24gcmQoYSxiKXtEKGEscWQsYik7RChhLG5kLGIpO0QoYSxwZCxiKTtEKGEsamQsYik7Qi5NJiYhYj8oRChhLGdkLGIpLEQoYSxtZCxiKSk6Qi5EfHwoRChhLGNjKSxEKGEsYWMpLEQoYSxiYykpfTt2YXIgc2Q9e30sdGQ9Qi5kZWZlckNvbm5lY3Rpb25DYWxsYmFja3MmJlwibG9hZGluZ1wiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZSx1ZDtmdW5jdGlvbiB2ZChhKXt2YXIgYj1bXTtkbyBiLnVuc2hpZnQoYSk7d2hpbGUoYT1hLl9fc2hhZHlfcGFyZW50Tm9kZSk7cmV0dXJuIGJ9ZnVuY3Rpb24gd2QoYSxiLGMpe2lmKGEhPT1zZCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiSWxsZWdhbCBjb25zdHJ1Y3RvclwiKTt0aGlzLmE9bnVsbDt4ZCh0aGlzLGIsYyl9XG5mdW5jdGlvbiB4ZChhLGIsYyl7YS5EYT1cIlNoYWR5Um9vdFwiO2EuaG9zdD1iO2EubW9kZT1jJiZjLm1vZGU7UGMoYS5ob3N0KTtiPXooYS5ob3N0KTtiLnJvb3Q9YTtiLlRhPVwiY2xvc2VkXCIhPT1hLm1vZGU/YTpudWxsO2I9eihhKTtiLmZpcnN0Q2hpbGQ9Yi5sYXN0Q2hpbGQ9Yi5wYXJlbnROb2RlPWIubmV4dFNpYmxpbmc9Yi5wcmV2aW91c1NpYmxpbmc9bnVsbDtpZihCLnByZWZlclBlcmZvcm1hbmNlKWZvcig7Yj1hLmhvc3QuX19zaGFkeV9uYXRpdmVfZmlyc3RDaGlsZDspYS5ob3N0Ll9fc2hhZHlfbmF0aXZlX3JlbW92ZUNoaWxkKGIpO2Vsc2UgSihhKX1mdW5jdGlvbiBKKGEpe2EuUnx8KGEuUj0hMCxBYihmdW5jdGlvbigpe3JldHVybiB5ZChhKX0pKX1cbmZ1bmN0aW9uIHlkKGEpe3ZhciBiO2lmKGI9YS5SKXtmb3IodmFyIGM7YTspYTp7YS5SJiYoYz1hKSxiPWE7YT1iLmhvc3QuX19zaGFkeV9nZXRSb290Tm9kZSgpO2lmKEMoYSkmJihiPUEoYi5ob3N0KSkmJjA8Yi5ZKWJyZWFrIGE7YT12b2lkIDB9Yj1jfShjPWIpJiZjLl9yZW5kZXJTZWxmKCl9XG53ZC5wcm90b3R5cGUuX3JlbmRlclNlbGY9ZnVuY3Rpb24oKXt2YXIgYT10ZDt0ZD0hMDt0aGlzLlI9ITE7aWYodGhpcy5hKXt6ZCh0aGlzKTtmb3IodmFyIGI9MCxjO2I8dGhpcy5hLmxlbmd0aDtiKyspe2M9dGhpcy5hW2JdO3ZhciBkPUEoYyksZT1kLmFzc2lnbmVkTm9kZXM7ZC5hc3NpZ25lZE5vZGVzPVtdO2QuVD1bXTtpZihkLnFhPWUpZm9yKGQ9MDtkPGUubGVuZ3RoO2QrKyl7dmFyIGY9QShlW2RdKTtmLmhhPWYuYXNzaWduZWRTbG90O2YuYXNzaWduZWRTbG90PT09YyYmKGYuYXNzaWduZWRTbG90PW51bGwpfX1mb3IoYj10aGlzLmhvc3QuX19zaGFkeV9maXJzdENoaWxkO2I7Yj1iLl9fc2hhZHlfbmV4dFNpYmxpbmcpQWQodGhpcyxiKTtmb3IoYj0wO2I8dGhpcy5hLmxlbmd0aDtiKyspe2M9dGhpcy5hW2JdO2U9QShjKTtpZighZS5hc3NpZ25lZE5vZGVzLmxlbmd0aClmb3IoZD1jLl9fc2hhZHlfZmlyc3RDaGlsZDtkO2Q9ZC5fX3NoYWR5X25leHRTaWJsaW5nKUFkKHRoaXMsXG5kLGMpOyhkPShkPUEoYy5fX3NoYWR5X3BhcmVudE5vZGUpKSYmZC5yb290KSYmKG1iKGQpfHxkLlIpJiZkLl9yZW5kZXJTZWxmKCk7QmQodGhpcyxlLlQsZS5hc3NpZ25lZE5vZGVzKTtpZihkPWUucWEpe2ZvcihmPTA7ZjxkLmxlbmd0aDtmKyspQShkW2ZdKS5oYT1udWxsO2UucWE9bnVsbDtkLmxlbmd0aD5lLmFzc2lnbmVkTm9kZXMubGVuZ3RoJiYoZS5qYT0hMCl9ZS5qYSYmKGUuamE9ITEsQ2QodGhpcyxjKSl9Yz10aGlzLmE7Yj1bXTtmb3IoZT0wO2U8Yy5sZW5ndGg7ZSsrKWQ9Y1tlXS5fX3NoYWR5X3BhcmVudE5vZGUsKGY9QShkKSkmJmYucm9vdHx8ISgwPmIuaW5kZXhPZihkKSl8fGIucHVzaChkKTtmb3IoYz0wO2M8Yi5sZW5ndGg7YysrKXtmPWJbY107ZT1mPT09dGhpcz90aGlzLmhvc3Q6ZjtkPVtdO2ZvcihmPWYuX19zaGFkeV9maXJzdENoaWxkO2Y7Zj1mLl9fc2hhZHlfbmV4dFNpYmxpbmcpaWYoXCJzbG90XCI9PWYubG9jYWxOYW1lKWZvcih2YXIgZz1BKGYpLlQsaD0wO2g8XG5nLmxlbmd0aDtoKyspZC5wdXNoKGdbaF0pO2Vsc2UgZC5wdXNoKGYpO2Y9d2IoZSk7Zz1LYyhkLGQubGVuZ3RoLGYsZi5sZW5ndGgpO2Zvcih2YXIgaz1oPTAsbD12b2lkIDA7aDxnLmxlbmd0aCYmKGw9Z1toXSk7aCsrKXtmb3IodmFyIG49MCxxPXZvaWQgMDtuPGwuVy5sZW5ndGgmJihxPWwuV1tuXSk7bisrKXEuX19zaGFkeV9uYXRpdmVfcGFyZW50Tm9kZT09PWUmJmUuX19zaGFkeV9uYXRpdmVfcmVtb3ZlQ2hpbGQocSksZi5zcGxpY2UobC5pbmRleCtrLDEpO2stPWwuWn1rPTA7Zm9yKGw9dm9pZCAwO2s8Zy5sZW5ndGgmJihsPWdba10pO2srKylmb3IoaD1mW2wuaW5kZXhdLG49bC5pbmRleDtuPGwuaW5kZXgrbC5aO24rKylxPWRbbl0sZS5fX3NoYWR5X25hdGl2ZV9pbnNlcnRCZWZvcmUocSxoKSxmLnNwbGljZShuLDAscSl9fWlmKCFCLnByZWZlclBlcmZvcm1hbmNlJiYhdGhpcy5wYSlmb3IoYj10aGlzLmhvc3QuX19zaGFkeV9maXJzdENoaWxkO2I7Yj1iLl9fc2hhZHlfbmV4dFNpYmxpbmcpYz1cbkEoYiksYi5fX3NoYWR5X25hdGl2ZV9wYXJlbnROb2RlIT09dGhpcy5ob3N0fHxcInNsb3RcIiE9PWIubG9jYWxOYW1lJiZjLmFzc2lnbmVkU2xvdHx8dGhpcy5ob3N0Ll9fc2hhZHlfbmF0aXZlX3JlbW92ZUNoaWxkKGIpO3RoaXMucGE9ITA7dGQ9YTt1ZCYmdWQoKX07ZnVuY3Rpb24gQWQoYSxiLGMpe3ZhciBkPXooYiksZT1kLmhhO2QuaGE9bnVsbDtjfHwoYz0oYT1hLmJbYi5fX3NoYWR5X3Nsb3R8fFwiX19jYXRjaGFsbFwiXSkmJmFbMF0pO2M/KHooYykuYXNzaWduZWROb2Rlcy5wdXNoKGIpLGQuYXNzaWduZWRTbG90PWMpOmQuYXNzaWduZWRTbG90PXZvaWQgMDtlIT09ZC5hc3NpZ25lZFNsb3QmJmQuYXNzaWduZWRTbG90JiYoeihkLmFzc2lnbmVkU2xvdCkuamE9ITApfVxuZnVuY3Rpb24gQmQoYSxiLGMpe2Zvcih2YXIgZD0wLGU9dm9pZCAwO2Q8Yy5sZW5ndGgmJihlPWNbZF0pO2QrKylpZihcInNsb3RcIj09ZS5sb2NhbE5hbWUpe3ZhciBmPUEoZSkuYXNzaWduZWROb2RlcztmJiZmLmxlbmd0aCYmQmQoYSxiLGYpfWVsc2UgYi5wdXNoKGNbZF0pfWZ1bmN0aW9uIENkKGEsYil7Yi5fX3NoYWR5X25hdGl2ZV9kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInNsb3RjaGFuZ2VcIikpO2I9QShiKTtiLmFzc2lnbmVkU2xvdCYmQ2QoYSxiLmFzc2lnbmVkU2xvdCl9ZnVuY3Rpb24gZWQoYSl7YS5jPWEuY3x8W107YS5hPWEuYXx8W107YS5iPWEuYnx8e319XG5mdW5jdGlvbiB6ZChhKXtpZihhLmMmJmEuYy5sZW5ndGgpe2Zvcih2YXIgYj1hLmMsYyxkPTA7ZDxiLmxlbmd0aDtkKyspe3ZhciBlPWJbZF07UGMoZSk7dmFyIGY9ZS5fX3NoYWR5X3BhcmVudE5vZGU7UGMoZik7Zj1BKGYpO2YuWT0oZi5ZfHwwKSsxO2Y9RGQoZSk7YS5iW2ZdPyhjPWN8fHt9LGNbZl09ITAsYS5iW2ZdLnB1c2goZSkpOmEuYltmXT1bZV07YS5hLnB1c2goZSl9aWYoYylmb3IodmFyIGcgaW4gYylhLmJbZ109RWQoYS5iW2ddKTthLmM9W119fWZ1bmN0aW9uIERkKGEpe3ZhciBiPWEubmFtZXx8YS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpfHxcIl9fY2F0Y2hhbGxcIjtyZXR1cm4gYS5CYT1ifVxuZnVuY3Rpb24gRWQoYSl7cmV0dXJuIGEuc29ydChmdW5jdGlvbihhLGMpe2E9dmQoYSk7Zm9yKHZhciBiPXZkKGMpLGU9MDtlPGEubGVuZ3RoO2UrKyl7Yz1hW2VdO3ZhciBmPWJbZV07aWYoYyE9PWYpcmV0dXJuIGE9eGIoYy5fX3NoYWR5X3BhcmVudE5vZGUpLGEuaW5kZXhPZihjKS1hLmluZGV4T2YoZil9fSl9XG5mdW5jdGlvbiBmZChhLGIpe2lmKGEuYSl7emQoYSk7dmFyIGM9YS5iLGQ7Zm9yKGQgaW4gYylmb3IodmFyIGU9Y1tkXSxmPTA7ZjxlLmxlbmd0aDtmKyspe3ZhciBnPWVbZl07aWYodWIoYixnKSl7ZS5zcGxpY2UoZiwxKTt2YXIgaD1hLmEuaW5kZXhPZihnKTswPD1oJiYoYS5hLnNwbGljZShoLDEpLChoPUEoZy5fX3NoYWR5X3BhcmVudE5vZGUpKSYmaC5ZJiZoLlktLSk7Zi0tO2c9QShnKTtpZihoPWcuVClmb3IodmFyIGs9MDtrPGgubGVuZ3RoO2srKyl7dmFyIGw9aFtrXSxuPWwuX19zaGFkeV9uYXRpdmVfcGFyZW50Tm9kZTtuJiZuLl9fc2hhZHlfbmF0aXZlX3JlbW92ZUNoaWxkKGwpfWcuVD1bXTtnLmFzc2lnbmVkTm9kZXM9W107aD0hMH19cmV0dXJuIGh9fWZ1bmN0aW9uIG1iKGEpe3pkKGEpO3JldHVybiEoIWEuYXx8IWEuYS5sZW5ndGgpfVxuKGZ1bmN0aW9uKGEpe2EuX19wcm90b19fPURvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlO3JkKGEsXCJfX3NoYWR5X1wiKTtyZChhKTtPYmplY3QuZGVmaW5lUHJvcGVydGllcyhhLHtub2RlVHlwZTp7dmFsdWU6Tm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFLGNvbmZpZ3VyYWJsZTohMH0sbm9kZU5hbWU6e3ZhbHVlOlwiI2RvY3VtZW50LWZyYWdtZW50XCIsY29uZmlndXJhYmxlOiEwfSxub2RlVmFsdWU6e3ZhbHVlOm51bGwsY29uZmlndXJhYmxlOiEwfX0pO1tcImxvY2FsTmFtZVwiLFwibmFtZXNwYWNlVVJJXCIsXCJwcmVmaXhcIl0uZm9yRWFjaChmdW5jdGlvbihiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHt2YWx1ZTp2b2lkIDAsY29uZmlndXJhYmxlOiEwfSl9KTtbXCJvd25lckRvY3VtZW50XCIsXCJiYXNlVVJJXCIsXCJpc0Nvbm5lY3RlZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmhvc3RbYl19LFxuY29uZmlndXJhYmxlOiEwfSl9KX0pKHdkLnByb3RvdHlwZSk7XG5pZih3aW5kb3cuY3VzdG9tRWxlbWVudHMmJkIua2EmJiFCLnByZWZlclBlcmZvcm1hbmNlKXt2YXIgRmQ9bmV3IE1hcDt1ZD1mdW5jdGlvbigpe3ZhciBhPVtdO0ZkLmZvckVhY2goZnVuY3Rpb24oYixjKXthLnB1c2goW2MsYl0pfSk7RmQuY2xlYXIoKTtmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXVswXTthW2JdWzFdP2MuX19zaGFkeWRvbV9jb25uZWN0ZWRDYWxsYmFjaygpOmMuX19zaGFkeWRvbV9kaXNjb25uZWN0ZWRDYWxsYmFjaygpfX07dGQmJmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsZnVuY3Rpb24oKXt0ZD0hMTt1ZCgpfSx7b25jZTohMH0pO3ZhciBHZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9MCxlPVwiX19pc0Nvbm5lY3RlZFwiK2QrKztpZihifHxjKWEucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrPWEucHJvdG90eXBlLl9fc2hhZHlkb21fY29ubmVjdGVkQ2FsbGJhY2s9ZnVuY3Rpb24oKXt0ZD9GZC5zZXQodGhpcyxcbiEwKTp0aGlzW2VdfHwodGhpc1tlXT0hMCxiJiZiLmNhbGwodGhpcykpfSxhLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjaz1hLnByb3RvdHlwZS5fX3NoYWR5ZG9tX2Rpc2Nvbm5lY3RlZENhbGxiYWNrPWZ1bmN0aW9uKCl7dGQ/dGhpcy5pc0Nvbm5lY3RlZHx8RmQuc2V0KHRoaXMsITEpOnRoaXNbZV0mJih0aGlzW2VdPSExLGMmJmMuY2FsbCh0aGlzKSl9O3JldHVybiBhfSxIZD13aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lLGRlZmluZT1mdW5jdGlvbihhLGIpe3ZhciBjPWIucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrLGQ9Yi5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2s7SGQuY2FsbCh3aW5kb3cuY3VzdG9tRWxlbWVudHMsYSxHZChiLGMsZCkpO2IucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrPWM7Yi5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2s9ZH07d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZT1kZWZpbmU7T2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5DdXN0b21FbGVtZW50UmVnaXN0cnkucHJvdG90eXBlLFxuXCJkZWZpbmVcIix7dmFsdWU6ZGVmaW5lLGNvbmZpZ3VyYWJsZTohMH0pfWZ1bmN0aW9uIGRkKGEpe2E9YS5fX3NoYWR5X2dldFJvb3ROb2RlKCk7aWYoQyhhKSlyZXR1cm4gYX07ZnVuY3Rpb24gSWQoYSl7dGhpcy5ub2RlPWF9cj1JZC5wcm90b3R5cGU7ci5hZGRFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfYWRkRXZlbnRMaXN0ZW5lcihhLGIsYyl9O3IucmVtb3ZlRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X3JlbW92ZUV2ZW50TGlzdGVuZXIoYSxiLGMpfTtyLmFwcGVuZENoaWxkPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9hcHBlbmRDaGlsZChhKX07ci5pbnNlcnRCZWZvcmU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfaW5zZXJ0QmVmb3JlKGEsYil9O3IucmVtb3ZlQ2hpbGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X3JlbW92ZUNoaWxkKGEpfTtyLnJlcGxhY2VDaGlsZD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9yZXBsYWNlQ2hpbGQoYSxiKX07XG5yLmNsb25lTm9kZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfY2xvbmVOb2RlKGEpfTtyLmdldFJvb3ROb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9nZXRSb290Tm9kZShhKX07ci5jb250YWlucz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfY29udGFpbnMoYSl9O3IuZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfZGlzcGF0Y2hFdmVudChhKX07ci5zZXRBdHRyaWJ1dGU9ZnVuY3Rpb24oYSxiKXt0aGlzLm5vZGUuX19zaGFkeV9zZXRBdHRyaWJ1dGUoYSxiKX07ci5nZXRBdHRyaWJ1dGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X25hdGl2ZV9nZXRBdHRyaWJ1dGUoYSl9O3IuaGFzQXR0cmlidXRlPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9uYXRpdmVfaGFzQXR0cmlidXRlKGEpfTtyLnJlbW92ZUF0dHJpYnV0ZT1mdW5jdGlvbihhKXt0aGlzLm5vZGUuX19zaGFkeV9yZW1vdmVBdHRyaWJ1dGUoYSl9O1xuci5hdHRhY2hTaGFkb3c9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2F0dGFjaFNoYWRvdyhhKX07ci5mb2N1cz1mdW5jdGlvbigpe3RoaXMubm9kZS5fX3NoYWR5X25hdGl2ZV9mb2N1cygpfTtyLmJsdXI9ZnVuY3Rpb24oKXt0aGlzLm5vZGUuX19zaGFkeV9ibHVyKCl9O3IuaW1wb3J0Tm9kZT1mdW5jdGlvbihhLGIpe2lmKHRoaXMubm9kZS5ub2RlVHlwZT09PU5vZGUuRE9DVU1FTlRfTk9ERSlyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfaW1wb3J0Tm9kZShhLGIpfTtyLmdldEVsZW1lbnRCeUlkPWZ1bmN0aW9uKGEpe2lmKHRoaXMubm9kZS5ub2RlVHlwZT09PU5vZGUuRE9DVU1FTlRfTk9ERSlyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfZ2V0RWxlbWVudEJ5SWQoYSl9O3IucXVlcnlTZWxlY3Rvcj1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfcXVlcnlTZWxlY3RvcihhKX07XG5yLnF1ZXJ5U2VsZWN0b3JBbGw9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfcXVlcnlTZWxlY3RvckFsbChhLGIpfTtyLmFzc2lnbmVkTm9kZXM9ZnVuY3Rpb24oYSl7aWYoXCJzbG90XCI9PT10aGlzLm5vZGUubG9jYWxOYW1lKXJldHVybiB0aGlzLm5vZGUuX19zaGFkeV9hc3NpZ25lZE5vZGVzKGEpfTtcbnQuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoSWQucHJvdG90eXBlLHthY3RpdmVFbGVtZW50Ontjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtpZihDKHRoaXMubm9kZSl8fHRoaXMubm9kZS5ub2RlVHlwZT09PU5vZGUuRE9DVU1FTlRfTk9ERSlyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfYWN0aXZlRWxlbWVudH19LF9hY3RpdmVFbGVtZW50Ontjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hY3RpdmVFbGVtZW50fX0saG9zdDp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7aWYoQyh0aGlzLm5vZGUpKXJldHVybiB0aGlzLm5vZGUuaG9zdH19LHBhcmVudE5vZGU6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9wYXJlbnROb2RlfX0sZmlyc3RDaGlsZDp7Y29uZmlndXJhYmxlOiEwLFxuZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfZmlyc3RDaGlsZH19LGxhc3RDaGlsZDp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2xhc3RDaGlsZH19LG5leHRTaWJsaW5nOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfbmV4dFNpYmxpbmd9fSxwcmV2aW91c1NpYmxpbmc6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9wcmV2aW91c1NpYmxpbmd9fSxjaGlsZE5vZGVzOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfY2hpbGROb2Rlc319LHBhcmVudEVsZW1lbnQ6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLFxuZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X3BhcmVudEVsZW1lbnR9fSxmaXJzdEVsZW1lbnRDaGlsZDp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2ZpcnN0RWxlbWVudENoaWxkfX0sbGFzdEVsZW1lbnRDaGlsZDp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2xhc3RFbGVtZW50Q2hpbGR9fSxuZXh0RWxlbWVudFNpYmxpbmc6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9uZXh0RWxlbWVudFNpYmxpbmd9fSxwcmV2aW91c0VsZW1lbnRTaWJsaW5nOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfcHJldmlvdXNFbGVtZW50U2libGluZ319LFxuY2hpbGRyZW46e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9jaGlsZHJlbn19LGNoaWxkRWxlbWVudENvdW50Ontjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfY2hpbGRFbGVtZW50Q291bnR9fSxzaGFkb3dSb290Ontjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfc2hhZG93Um9vdH19LGFzc2lnbmVkU2xvdDp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2Fzc2lnbmVkU2xvdH19LGlzQ29ubmVjdGVkOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfaXNDb25uZWN0ZWR9fSxpbm5lckhUTUw6e2NvbmZpZ3VyYWJsZTohMCxcbmVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2lubmVySFRNTH0sc2V0OmZ1bmN0aW9uKGEpe3RoaXMubm9kZS5fX3NoYWR5X2lubmVySFRNTD1hfX0sdGV4dENvbnRlbnQ6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV90ZXh0Q29udGVudH0sc2V0OmZ1bmN0aW9uKGEpe3RoaXMubm9kZS5fX3NoYWR5X3RleHRDb250ZW50PWF9fSxzbG90Ontjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfc2xvdH0sc2V0OmZ1bmN0aW9uKGEpe3RoaXMubm9kZS5fX3NoYWR5X3Nsb3Q9YX19LGNsYXNzTmFtZTp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2NsYXNzTmFtZX0sc2V0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9jbGFzc05hbWU9XG5hfX19KTtJYy5mb3JFYWNoKGZ1bmN0aW9uKGEpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShJZC5wcm90b3R5cGUsYSx7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZVtcIl9fc2hhZHlfXCIrYV19LHNldDpmdW5jdGlvbihiKXt0aGlzLm5vZGVbXCJfX3NoYWR5X1wiK2FdPWJ9LGNvbmZpZ3VyYWJsZTohMH0pfSk7dmFyIEpkPW5ldyBXZWFrTWFwO2Z1bmN0aW9uIEtkKGEpe2lmKEMoYSl8fGEgaW5zdGFuY2VvZiBJZClyZXR1cm4gYTt2YXIgYj1KZC5nZXQoYSk7Ynx8KGI9bmV3IElkKGEpLEpkLnNldChhLGIpKTtyZXR1cm4gYn07dmFyIExkPUUoe2Rpc3BhdGNoRXZlbnQ6ZnVuY3Rpb24oYSl7QmIoKTtyZXR1cm4gdGhpcy5fX3NoYWR5X25hdGl2ZV9kaXNwYXRjaEV2ZW50KGEpfSxhZGRFdmVudExpc3RlbmVyOnpjLHJlbW92ZUV2ZW50TGlzdGVuZXI6QmN9KTt2YXIgTWQ9RSh7Z2V0IGFzc2lnbmVkU2xvdCgpe3ZhciBhPXRoaXMuX19zaGFkeV9wYXJlbnROb2RlOyhhPWEmJmEuX19zaGFkeV9zaGFkb3dSb290KSYmeWQoYSk7cmV0dXJuKGE9QSh0aGlzKSkmJmEuYXNzaWduZWRTbG90fHxudWxsfX0pO3ZhciBOZD13aW5kb3cuZG9jdW1lbnQ7ZnVuY3Rpb24gT2QoYSxiKXtpZihcInNsb3RcIj09PWIpYT1hLl9fc2hhZHlfcGFyZW50Tm9kZSxsYihhKSYmSihBKGEpLnJvb3QpO2Vsc2UgaWYoXCJzbG90XCI9PT1hLmxvY2FsTmFtZSYmXCJuYW1lXCI9PT1iJiYoYj1kZChhKSkpe2lmKGIuYSl7emQoYik7dmFyIGM9YS5CYSxkPURkKGEpO2lmKGQhPT1jKXtjPWIuYltjXTt2YXIgZT1jLmluZGV4T2YoYSk7MDw9ZSYmYy5zcGxpY2UoZSwxKTtjPWIuYltkXXx8KGIuYltkXT1bXSk7Yy5wdXNoKGEpOzE8Yy5sZW5ndGgmJihiLmJbZF09RWQoYykpfX1KKGIpfX1cbnZhciBQZD1FKHtnZXQgcHJldmlvdXNFbGVtZW50U2libGluZygpe3ZhciBhPUEodGhpcyk7aWYoYSYmdm9pZCAwIT09YS5wcmV2aW91c1NpYmxpbmcpe2ZvcihhPXRoaXMuX19zaGFkeV9wcmV2aW91c1NpYmxpbmc7YSYmYS5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFOylhPWEuX19zaGFkeV9wcmV2aW91c1NpYmxpbmc7cmV0dXJuIGF9cmV0dXJuIHRoaXMuX19zaGFkeV9uYXRpdmVfcHJldmlvdXNFbGVtZW50U2libGluZ30sZ2V0IG5leHRFbGVtZW50U2libGluZygpe3ZhciBhPUEodGhpcyk7aWYoYSYmdm9pZCAwIT09YS5uZXh0U2libGluZyl7Zm9yKGE9dGhpcy5fX3NoYWR5X25leHRTaWJsaW5nO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERTspYT1hLl9fc2hhZHlfbmV4dFNpYmxpbmc7cmV0dXJuIGF9cmV0dXJuIHRoaXMuX19zaGFkeV9uYXRpdmVfbmV4dEVsZW1lbnRTaWJsaW5nfSxnZXQgc2xvdCgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcInNsb3RcIil9LFxuc2V0IHNsb3QoYSl7dGhpcy5fX3NoYWR5X3NldEF0dHJpYnV0ZShcInNsb3RcIixhKX0sZ2V0IHNoYWRvd1Jvb3QoKXt2YXIgYT1BKHRoaXMpO3JldHVybiBhJiZhLlRhfHxudWxsfSxnZXQgY2xhc3NOYW1lKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9LHNldCBjbGFzc05hbWUoYSl7dGhpcy5fX3NoYWR5X3NldEF0dHJpYnV0ZShcImNsYXNzXCIsYSl9LHNldEF0dHJpYnV0ZTpmdW5jdGlvbihhLGIpe2lmKHRoaXMub3duZXJEb2N1bWVudCE9PU5kKXRoaXMuX19zaGFkeV9uYXRpdmVfc2V0QXR0cmlidXRlKGEsYik7ZWxzZXt2YXIgYzsoYz1SYygpKSYmXCJjbGFzc1wiPT09YT8oYy5zZXRFbGVtZW50Q2xhc3ModGhpcyxiKSxjPSEwKTpjPSExO2N8fCh0aGlzLl9fc2hhZHlfbmF0aXZlX3NldEF0dHJpYnV0ZShhLGIpLE9kKHRoaXMsYSkpfX0scmVtb3ZlQXR0cmlidXRlOmZ1bmN0aW9uKGEpe3RoaXMuX19zaGFkeV9uYXRpdmVfcmVtb3ZlQXR0cmlidXRlKGEpO09kKHRoaXMsXG5hKX0sYXR0YWNoU2hhZG93OmZ1bmN0aW9uKGEpe2lmKCF0aGlzKXRocm93IEVycm9yKFwiTXVzdCBwcm92aWRlIGEgaG9zdC5cIik7aWYoIWEpdGhyb3cgRXJyb3IoXCJOb3QgZW5vdWdoIGFyZ3VtZW50cy5cIik7aWYoYS5zaGFkeVVwZ3JhZGVGcmFnbWVudCYmIUIueWEpe3ZhciBiPWEuc2hhZHlVcGdyYWRlRnJhZ21lbnQ7Yi5fX3Byb3RvX189U2hhZG93Um9vdC5wcm90b3R5cGU7eGQoYix0aGlzLGEpO1BjKGIsYik7YT1iLl9fbm9JbnNlcnRpb25Qb2ludD9udWxsOmIucXVlcnlTZWxlY3RvckFsbChcInNsb3RcIik7Yi5fX25vSW5zZXJ0aW9uUG9pbnQ9dm9pZCAwO2lmKGEmJmEubGVuZ3RoKXt2YXIgYz1iO2VkKGMpO2MuYy5wdXNoLmFwcGx5KGMuYyxhIGluc3RhbmNlb2YgQXJyYXk/YTprYShqYShhKSkpO0ooYil9Yi5ob3N0Ll9fc2hhZHlfbmF0aXZlX2FwcGVuZENoaWxkKGIpfWVsc2UgYj1uZXcgd2Qoc2QsdGhpcyxhKTtyZXR1cm4gYn19KTt2YXIgUWQ9RSh7Ymx1cjpmdW5jdGlvbigpe3ZhciBhPUEodGhpcyk7KGE9KGE9YSYmYS5yb290KSYmYS5hY3RpdmVFbGVtZW50KT9hLl9fc2hhZHlfYmx1cigpOnRoaXMuX19zaGFkeV9uYXRpdmVfYmx1cigpfX0pO0ljLmZvckVhY2goZnVuY3Rpb24oYSl7UWRbYV09e3NldDpmdW5jdGlvbihiKXt2YXIgYz16KHRoaXMpLGQ9YS5zdWJzdHJpbmcoMik7Yy5OfHwoYy5OPXt9KTtjLk5bYV0mJnRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihkLGMuTlthXSk7dGhpcy5fX3NoYWR5X2FkZEV2ZW50TGlzdGVuZXIoZCxiKTtjLk5bYV09Yn0sZ2V0OmZ1bmN0aW9uKCl7dmFyIGI9QSh0aGlzKTtyZXR1cm4gYiYmYi5OJiZiLk5bYV19LGNvbmZpZ3VyYWJsZTohMH19KTt2YXIgUmQ9RSh7YXNzaWduZWROb2RlczpmdW5jdGlvbihhKXtpZihcInNsb3RcIj09PXRoaXMubG9jYWxOYW1lKXt2YXIgYj10aGlzLl9fc2hhZHlfZ2V0Um9vdE5vZGUoKTtiJiZDKGIpJiZ5ZChiKTtyZXR1cm4oYj1BKHRoaXMpKT8oYSYmYS5mbGF0dGVuP2IuVDpiLmFzc2lnbmVkTm9kZXMpfHxbXTpbXX19LGFkZEV2ZW50TGlzdGVuZXI6ZnVuY3Rpb24oYSxiLGMpe2lmKFwic2xvdFwiIT09dGhpcy5sb2NhbE5hbWV8fFwic2xvdGNoYW5nZVwiPT09YSl6Yy5jYWxsKHRoaXMsYSxiLGMpO2Vsc2V7XCJvYmplY3RcIiE9PXR5cGVvZiBjJiYoYz17Y2FwdHVyZTohIWN9KTt2YXIgZD10aGlzLl9fc2hhZHlfcGFyZW50Tm9kZTtpZighZCl0aHJvdyBFcnJvcihcIlNoYWR5RE9NIGNhbm5vdCBhdHRhY2ggZXZlbnQgdG8gc2xvdCB1bmxlc3MgaXQgaGFzIGEgYHBhcmVudE5vZGVgXCIpO2MuTz10aGlzO2QuX19zaGFkeV9hZGRFdmVudExpc3RlbmVyKGEsYixjKX19LHJlbW92ZUV2ZW50TGlzdGVuZXI6ZnVuY3Rpb24oYSxcbmIsYyl7aWYoXCJzbG90XCIhPT10aGlzLmxvY2FsTmFtZXx8XCJzbG90Y2hhbmdlXCI9PT1hKUJjLmNhbGwodGhpcyxhLGIsYyk7ZWxzZXtcIm9iamVjdFwiIT09dHlwZW9mIGMmJihjPXtjYXB0dXJlOiEhY30pO3ZhciBkPXRoaXMuX19zaGFkeV9wYXJlbnROb2RlO2lmKCFkKXRocm93IEVycm9yKFwiU2hhZHlET00gY2Fubm90IGF0dGFjaCBldmVudCB0byBzbG90IHVubGVzcyBpdCBoYXMgYSBgcGFyZW50Tm9kZWBcIik7Yy5PPXRoaXM7ZC5fX3NoYWR5X3JlbW92ZUV2ZW50TGlzdGVuZXIoYSxiLGMpfX19KTt2YXIgU2Q9d2luZG93LmRvY3VtZW50LFRkPUUoe2ltcG9ydE5vZGU6ZnVuY3Rpb24oYSxiKXtpZihhLm93bmVyRG9jdW1lbnQhPT1TZHx8XCJ0ZW1wbGF0ZVwiPT09YS5sb2NhbE5hbWUpcmV0dXJuIHRoaXMuX19zaGFkeV9uYXRpdmVfaW1wb3J0Tm9kZShhLGIpO3ZhciBjPXRoaXMuX19zaGFkeV9uYXRpdmVfaW1wb3J0Tm9kZShhLCExKTtpZihiKWZvcihhPWEuX19zaGFkeV9maXJzdENoaWxkO2E7YT1hLl9fc2hhZHlfbmV4dFNpYmxpbmcpYj10aGlzLl9fc2hhZHlfaW1wb3J0Tm9kZShhLCEwKSxjLl9fc2hhZHlfYXBwZW5kQ2hpbGQoYik7cmV0dXJuIGN9fSk7dmFyIFVkPUUoe2FkZEV2ZW50TGlzdGVuZXI6emMuYmluZCh3aW5kb3cpLHJlbW92ZUV2ZW50TGlzdGVuZXI6QmMuYmluZCh3aW5kb3cpfSk7dmFyIFZkPXt9O09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEVsZW1lbnQucHJvdG90eXBlLFwicGFyZW50RWxlbWVudFwiKSYmKFZkLnBhcmVudEVsZW1lbnQ9Z2QucGFyZW50RWxlbWVudCk7T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRWxlbWVudC5wcm90b3R5cGUsXCJjb250YWluc1wiKSYmKFZkLmNvbnRhaW5zPWdkLmNvbnRhaW5zKTtPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxFbGVtZW50LnByb3RvdHlwZSxcImNoaWxkcmVuXCIpJiYoVmQuY2hpbGRyZW49amQuY2hpbGRyZW4pO09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIpJiYoVmQuaW5uZXJIVE1MPXBkLmlubmVySFRNTCk7T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRWxlbWVudC5wcm90b3R5cGUsXCJjbGFzc05hbWVcIikmJihWZC5jbGFzc05hbWU9UGQuY2xhc3NOYW1lKTtcbnZhciBXZD17RXZlbnRUYXJnZXQ6W0xkXSxOb2RlOltnZCx3aW5kb3cuRXZlbnRUYXJnZXQ/bnVsbDpMZF0sVGV4dDpbTWRdLEVsZW1lbnQ6W1BkLGpkLE1kLCFCLkR8fFwiaW5uZXJIVE1MXCJpbiBFbGVtZW50LnByb3RvdHlwZT9wZDpudWxsLHdpbmRvdy5IVE1MU2xvdEVsZW1lbnQ/bnVsbDpSZF0sSFRNTEVsZW1lbnQ6W1FkLFZkXSxIVE1MU2xvdEVsZW1lbnQ6W1JkXSxEb2N1bWVudEZyYWdtZW50OltsZCxtZF0sRG9jdW1lbnQ6W1RkLGxkLG1kLG5kXSxXaW5kb3c6W1VkXX0sWGQ9Qi5EP251bGw6W1wiaW5uZXJIVE1MXCIsXCJ0ZXh0Q29udGVudFwiXTtmdW5jdGlvbiBZZChhKXt2YXIgYj1hP251bGw6WGQsYz17fSxkO2ZvcihkIGluIFdkKWMuZWE9d2luZG93W2RdJiZ3aW5kb3dbZF0ucHJvdG90eXBlLFdkW2RdLmZvckVhY2goZnVuY3Rpb24oYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe3JldHVybiBjLmVhJiZkJiZEKGMuZWEsZCxhLGIpfX0oYykpLGM9e2VhOmMuZWF9fTtpZihCLmthKXt2YXIgU2hhZHlET009e2luVXNlOkIua2EscGF0Y2g6ZnVuY3Rpb24oYSl7aWMoYSk7aGMoYSk7cmV0dXJuIGF9LGlzU2hhZHlSb290OkMsZW5xdWV1ZTpBYixmbHVzaDpCYixmbHVzaEluaXRpYWw6ZnVuY3Rpb24oYSl7IWEucGEmJmEuUiYmeWQoYSl9LHNldHRpbmdzOkIsZmlsdGVyTXV0YXRpb25zOkpiLG9ic2VydmVDaGlsZHJlbjpIYix1bm9ic2VydmVDaGlsZHJlbjpJYixkZWZlckNvbm5lY3Rpb25DYWxsYmFja3M6Qi5kZWZlckNvbm5lY3Rpb25DYWxsYmFja3MscHJlZmVyUGVyZm9ybWFuY2U6Qi5wcmVmZXJQZXJmb3JtYW5jZSxoYW5kbGVzRHluYW1pY1Njb3Bpbmc6ITAsd3JhcDpCLk0/S2Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LFdyYXBwZXI6SWQsY29tcG9zZWRQYXRoOnJjLG5vUGF0Y2g6Qi5NLG5hdGl2ZU1ldGhvZHM6U2IsbmF0aXZlVHJlZTpUYn07d2luZG93LlNoYWR5RE9NPVNoYWR5RE9NOyRiKCk7WWQoXCJfX3NoYWR5X1wiKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZG9jdW1lbnQsXG5cIl9hY3RpdmVFbGVtZW50XCIsbmQuYWN0aXZlRWxlbWVudCk7RChXaW5kb3cucHJvdG90eXBlLFVkLFwiX19zaGFkeV9cIik7Qi5NfHwoWWQoKSxIYygpKTtDYygpO3dpbmRvdy5FdmVudD1FYzt3aW5kb3cuQ3VzdG9tRXZlbnQ9RmM7d2luZG93Lk1vdXNlRXZlbnQ9R2M7d2luZG93LlNoYWRvd1Jvb3Q9d2R9O3ZhciBaZD1uZXcgU2V0KFwiYW5ub3RhdGlvbi14bWwgY29sb3ItcHJvZmlsZSBmb250LWZhY2UgZm9udC1mYWNlLXNyYyBmb250LWZhY2UtdXJpIGZvbnQtZmFjZS1mb3JtYXQgZm9udC1mYWNlLW5hbWUgbWlzc2luZy1nbHlwaFwiLnNwbGl0KFwiIFwiKSk7ZnVuY3Rpb24gJGQoYSl7dmFyIGI9WmQuaGFzKGEpO2E9L15bYS16XVsuMC05X2Etel0qLVtcXC0uMC05X2Etel0qJC8udGVzdChhKTtyZXR1cm4hYiYmYX1mdW5jdGlvbiBLKGEpe3ZhciBiPWEuaXNDb25uZWN0ZWQ7aWYodm9pZCAwIT09YilyZXR1cm4gYjtmb3IoO2EmJiEoYS5fX0NFX2lzSW1wb3J0RG9jdW1lbnR8fGEgaW5zdGFuY2VvZiBEb2N1bWVudCk7KWE9YS5wYXJlbnROb2RlfHwod2luZG93LlNoYWRvd1Jvb3QmJmEgaW5zdGFuY2VvZiBTaGFkb3dSb290P2EuaG9zdDp2b2lkIDApO3JldHVybiEoIWF8fCEoYS5fX0NFX2lzSW1wb3J0RG9jdW1lbnR8fGEgaW5zdGFuY2VvZiBEb2N1bWVudCkpfVxuZnVuY3Rpb24gYWUoYSxiKXtmb3IoO2ImJmIhPT1hJiYhYi5uZXh0U2libGluZzspYj1iLnBhcmVudE5vZGU7cmV0dXJuIGImJmIhPT1hP2IubmV4dFNpYmxpbmc6bnVsbH1cbmZ1bmN0aW9uIGJlKGEsYixjKXtjPXZvaWQgMD09PWM/bmV3IFNldDpjO2Zvcih2YXIgZD1hO2Q7KXtpZihkLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpe3ZhciBlPWQ7YihlKTt2YXIgZj1lLmxvY2FsTmFtZTtpZihcImxpbmtcIj09PWYmJlwiaW1wb3J0XCI9PT1lLmdldEF0dHJpYnV0ZShcInJlbFwiKSl7ZD1lLmltcG9ydDtpZihkIGluc3RhbmNlb2YgTm9kZSYmIWMuaGFzKGQpKWZvcihjLmFkZChkKSxkPWQuZmlyc3RDaGlsZDtkO2Q9ZC5uZXh0U2libGluZyliZShkLGIsYyk7ZD1hZShhLGUpO2NvbnRpbnVlfWVsc2UgaWYoXCJ0ZW1wbGF0ZVwiPT09Zil7ZD1hZShhLGUpO2NvbnRpbnVlfWlmKGU9ZS5fX0NFX3NoYWRvd1Jvb3QpZm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKWJlKGUsYixjKX1kPWQuZmlyc3RDaGlsZD9kLmZpcnN0Q2hpbGQ6YWUoYSxkKX19ZnVuY3Rpb24gTChhLGIsYyl7YVtiXT1jfTtmdW5jdGlvbiBjZSgpe3RoaXMuYT1uZXcgTWFwO3RoaXMudT1uZXcgTWFwO3RoaXMuYz1bXTt0aGlzLmY9W107dGhpcy5iPSExfWZ1bmN0aW9uIGRlKGEsYixjKXthLmEuc2V0KGIsYyk7YS51LnNldChjLmNvbnN0cnVjdG9yRnVuY3Rpb24sYyl9ZnVuY3Rpb24gZWUoYSxiKXthLmI9ITA7YS5jLnB1c2goYil9ZnVuY3Rpb24gZmUoYSxiKXthLmI9ITA7YS5mLnB1c2goYil9ZnVuY3Rpb24gZ2UoYSxiKXthLmImJmJlKGIsZnVuY3Rpb24oYil7cmV0dXJuIGhlKGEsYil9KX1mdW5jdGlvbiBoZShhLGIpe2lmKGEuYiYmIWIuX19DRV9wYXRjaGVkKXtiLl9fQ0VfcGF0Y2hlZD0hMDtmb3IodmFyIGM9MDtjPGEuYy5sZW5ndGg7YysrKWEuY1tjXShiKTtmb3IoYz0wO2M8YS5mLmxlbmd0aDtjKyspYS5mW2NdKGIpfX1cbmZ1bmN0aW9uIE0oYSxiKXt2YXIgYz1bXTtiZShiLGZ1bmN0aW9uKGEpe3JldHVybiBjLnB1c2goYSl9KTtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKXt2YXIgZD1jW2JdOzE9PT1kLl9fQ0Vfc3RhdGU/YS5jb25uZWN0ZWRDYWxsYmFjayhkKTppZShhLGQpfX1mdW5jdGlvbiBOKGEsYil7dmFyIGM9W107YmUoYixmdW5jdGlvbihhKXtyZXR1cm4gYy5wdXNoKGEpfSk7Zm9yKGI9MDtiPGMubGVuZ3RoO2IrKyl7dmFyIGQ9Y1tiXTsxPT09ZC5fX0NFX3N0YXRlJiZhLmRpc2Nvbm5lY3RlZENhbGxiYWNrKGQpfX1cbmZ1bmN0aW9uIE8oYSxiLGMpe2M9dm9pZCAwPT09Yz97fTpjO3ZhciBkPWMuJGF8fG5ldyBTZXQsZT1jLmZhfHxmdW5jdGlvbihiKXtyZXR1cm4gaWUoYSxiKX0sZj1bXTtiZShiLGZ1bmN0aW9uKGIpe2lmKFwibGlua1wiPT09Yi5sb2NhbE5hbWUmJlwiaW1wb3J0XCI9PT1iLmdldEF0dHJpYnV0ZShcInJlbFwiKSl7dmFyIGM9Yi5pbXBvcnQ7YyBpbnN0YW5jZW9mIE5vZGUmJihjLl9fQ0VfaXNJbXBvcnREb2N1bWVudD0hMCxjLl9fQ0VfaGFzUmVnaXN0cnk9ITApO2MmJlwiY29tcGxldGVcIj09PWMucmVhZHlTdGF0ZT9jLl9fQ0VfZG9jdW1lbnRMb2FkSGFuZGxlZD0hMDpiLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXt2YXIgYz1iLmltcG9ydDtpZighYy5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQpe2MuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkPSEwO3ZhciBmPW5ldyBTZXQoZCk7Zi5kZWxldGUoYyk7TyhhLGMseyRhOmYsZmE6ZX0pfX0pfWVsc2UgZi5wdXNoKGIpfSxkKTtcbmlmKGEuYilmb3IoYj0wO2I8Zi5sZW5ndGg7YisrKWhlKGEsZltiXSk7Zm9yKGI9MDtiPGYubGVuZ3RoO2IrKyllKGZbYl0pfVxuZnVuY3Rpb24gaWUoYSxiKXtpZih2b2lkIDA9PT1iLl9fQ0Vfc3RhdGUpe3ZhciBjPWIub3duZXJEb2N1bWVudDtpZihjLmRlZmF1bHRWaWV3fHxjLl9fQ0VfaXNJbXBvcnREb2N1bWVudCYmYy5fX0NFX2hhc1JlZ2lzdHJ5KWlmKGM9YS5hLmdldChiLmxvY2FsTmFtZSkpe2MuY29uc3RydWN0aW9uU3RhY2sucHVzaChiKTt2YXIgZD1jLmNvbnN0cnVjdG9yRnVuY3Rpb247dHJ5e3RyeXtpZihuZXcgZCE9PWIpdGhyb3cgRXJyb3IoXCJUaGUgY3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3IgZGlkIG5vdCBwcm9kdWNlIHRoZSBlbGVtZW50IGJlaW5nIHVwZ3JhZGVkLlwiKTt9ZmluYWxseXtjLmNvbnN0cnVjdGlvblN0YWNrLnBvcCgpfX1jYXRjaChnKXt0aHJvdyBiLl9fQ0Vfc3RhdGU9MixnO31iLl9fQ0Vfc3RhdGU9MTtiLl9fQ0VfZGVmaW5pdGlvbj1jO2lmKGMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKWZvcihjPWMub2JzZXJ2ZWRBdHRyaWJ1dGVzLGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGU9XG5jW2RdLGY9Yi5nZXRBdHRyaWJ1dGUoZSk7bnVsbCE9PWYmJmEuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGIsZSxudWxsLGYsbnVsbCl9SyhiKSYmYS5jb25uZWN0ZWRDYWxsYmFjayhiKX19fWNlLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1hLl9fQ0VfZGVmaW5pdGlvbjtiLmNvbm5lY3RlZENhbGxiYWNrJiZiLmNvbm5lY3RlZENhbGxiYWNrLmNhbGwoYSl9O2NlLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1hLl9fQ0VfZGVmaW5pdGlvbjtiLmRpc2Nvbm5lY3RlZENhbGxiYWNrJiZiLmRpc2Nvbm5lY3RlZENhbGxiYWNrLmNhbGwoYSl9O1xuY2UucHJvdG90eXBlLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaz1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPWEuX19DRV9kZWZpbml0aW9uO2YuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJiYtMTxmLm9ic2VydmVkQXR0cmlidXRlcy5pbmRleE9mKGIpJiZmLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjay5jYWxsKGEsYixjLGQsZSl9O2Z1bmN0aW9uIGplKGEpe3ZhciBiPWRvY3VtZW50O3RoaXMuYj1hO3RoaXMuYT1iO3RoaXMuUD12b2lkIDA7Tyh0aGlzLmIsdGhpcy5hKTtcImxvYWRpbmdcIj09PXRoaXMuYS5yZWFkeVN0YXRlJiYodGhpcy5QPW5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuYy5iaW5kKHRoaXMpKSx0aGlzLlAub2JzZXJ2ZSh0aGlzLmEse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSkpfWZ1bmN0aW9uIGtlKGEpe2EuUCYmYS5QLmRpc2Nvbm5lY3QoKX1qZS5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmEucmVhZHlTdGF0ZTtcImludGVyYWN0aXZlXCIhPT1iJiZcImNvbXBsZXRlXCIhPT1ifHxrZSh0aGlzKTtmb3IoYj0wO2I8YS5sZW5ndGg7YisrKWZvcih2YXIgYz1hW2JdLmFkZGVkTm9kZXMsZD0wO2Q8Yy5sZW5ndGg7ZCsrKU8odGhpcy5iLGNbZF0pfTtmdW5jdGlvbiBsZSgpe3ZhciBhPXRoaXM7dGhpcy5hPXRoaXMudz12b2lkIDA7dGhpcy5iPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGIpe2EuYT1iO2EudyYmYihhLncpfSl9bGUucHJvdG90eXBlLnJlc29sdmU9ZnVuY3Rpb24oYSl7aWYodGhpcy53KXRocm93IEVycm9yKFwiQWxyZWFkeSByZXNvbHZlZC5cIik7dGhpcy53PWE7dGhpcy5hJiZ0aGlzLmEoYSl9O2Z1bmN0aW9uIFAoYSl7dGhpcy5jPSExO3RoaXMuYT1hO3RoaXMuRj1uZXcgTWFwO3RoaXMuZj1mdW5jdGlvbihhKXtyZXR1cm4gYSgpfTt0aGlzLmI9ITE7dGhpcy51PVtdO3RoaXMuYWE9bmV3IGplKGEpfXI9UC5wcm90b3R5cGU7XG5yLndhPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztpZighKGIgaW5zdGFuY2VvZiBGdW5jdGlvbikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9ycyBtdXN0IGJlIGZ1bmN0aW9ucy5cIik7aWYoISRkKGEpKXRocm93IG5ldyBTeW50YXhFcnJvcihcIlRoZSBlbGVtZW50IG5hbWUgJ1wiK2ErXCInIGlzIG5vdCB2YWxpZC5cIik7aWYodGhpcy5hLmEuZ2V0KGEpKXRocm93IEVycm9yKFwiQSBjdXN0b20gZWxlbWVudCB3aXRoIG5hbWUgJ1wiK2ErXCInIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZC5cIik7aWYodGhpcy5jKXRocm93IEVycm9yKFwiQSBjdXN0b20gZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIGRlZmluZWQuXCIpO3RoaXMuYz0hMDt0cnl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9ZVthXTtpZih2b2lkIDAhPT1iJiYhKGIgaW5zdGFuY2VvZiBGdW5jdGlvbikpdGhyb3cgRXJyb3IoXCJUaGUgJ1wiK2ErXCInIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbi5cIik7XG5yZXR1cm4gYn0sZT1iLnByb3RvdHlwZTtpZighKGUgaW5zdGFuY2VvZiBPYmplY3QpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgY3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3IncyBwcm90b3R5cGUgaXMgbm90IGFuIG9iamVjdC5cIik7dmFyIGY9ZChcImNvbm5lY3RlZENhbGxiYWNrXCIpO3ZhciBnPWQoXCJkaXNjb25uZWN0ZWRDYWxsYmFja1wiKTt2YXIgaD1kKFwiYWRvcHRlZENhbGxiYWNrXCIpO3ZhciBrPWQoXCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIik7dmFyIGw9Yi5vYnNlcnZlZEF0dHJpYnV0ZXN8fFtdfWNhdGNoKG4pe3JldHVybn1maW5hbGx5e3RoaXMuYz0hMX1iPXtsb2NhbE5hbWU6YSxjb25zdHJ1Y3RvckZ1bmN0aW9uOmIsY29ubmVjdGVkQ2FsbGJhY2s6ZixkaXNjb25uZWN0ZWRDYWxsYmFjazpnLGFkb3B0ZWRDYWxsYmFjazpoLGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjazprLG9ic2VydmVkQXR0cmlidXRlczpsLGNvbnN0cnVjdGlvblN0YWNrOltdfTtkZSh0aGlzLmEsXG5hLGIpO3RoaXMudS5wdXNoKGIpO3RoaXMuYnx8KHRoaXMuYj0hMCx0aGlzLmYoZnVuY3Rpb24oKXtyZXR1cm4gbWUoYyl9KSl9O3IuZmE9ZnVuY3Rpb24oYSl7Tyh0aGlzLmEsYSl9O1xuZnVuY3Rpb24gbWUoYSl7aWYoITEhPT1hLmIpe2EuYj0hMTtmb3IodmFyIGI9YS51LGM9W10sZD1uZXcgTWFwLGU9MDtlPGIubGVuZ3RoO2UrKylkLnNldChiW2VdLmxvY2FsTmFtZSxbXSk7TyhhLmEsZG9jdW1lbnQse2ZhOmZ1bmN0aW9uKGIpe2lmKHZvaWQgMD09PWIuX19DRV9zdGF0ZSl7dmFyIGU9Yi5sb2NhbE5hbWUsZj1kLmdldChlKTtmP2YucHVzaChiKTphLmEuYS5nZXQoZSkmJmMucHVzaChiKX19fSk7Zm9yKGU9MDtlPGMubGVuZ3RoO2UrKylpZShhLmEsY1tlXSk7Zm9yKDswPGIubGVuZ3RoOyl7dmFyIGY9Yi5zaGlmdCgpO2U9Zi5sb2NhbE5hbWU7Zj1kLmdldChmLmxvY2FsTmFtZSk7Zm9yKHZhciBnPTA7ZzxmLmxlbmd0aDtnKyspaWUoYS5hLGZbZ10pOyhlPWEuRi5nZXQoZSkpJiZlLnJlc29sdmUodm9pZCAwKX19fXIuZ2V0PWZ1bmN0aW9uKGEpe2lmKGE9dGhpcy5hLmEuZ2V0KGEpKXJldHVybiBhLmNvbnN0cnVjdG9yRnVuY3Rpb259O1xuci54YT1mdW5jdGlvbihhKXtpZighJGQoYSkpcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBTeW50YXhFcnJvcihcIidcIithK1wiJyBpcyBub3QgYSB2YWxpZCBjdXN0b20gZWxlbWVudCBuYW1lLlwiKSk7dmFyIGI9dGhpcy5GLmdldChhKTtpZihiKXJldHVybiBiLmI7Yj1uZXcgbGU7dGhpcy5GLnNldChhLGIpO3RoaXMuYS5hLmdldChhKSYmIXRoaXMudS5zb21lKGZ1bmN0aW9uKGIpe3JldHVybiBiLmxvY2FsTmFtZT09PWF9KSYmYi5yZXNvbHZlKHZvaWQgMCk7cmV0dXJuIGIuYn07ci5SYT1mdW5jdGlvbihhKXtrZSh0aGlzLmFhKTt2YXIgYj10aGlzLmY7dGhpcy5mPWZ1bmN0aW9uKGMpe3JldHVybiBhKGZ1bmN0aW9uKCl7cmV0dXJuIGIoYyl9KX19O3dpbmRvdy5DdXN0b21FbGVtZW50UmVnaXN0cnk9UDtQLnByb3RvdHlwZS5kZWZpbmU9UC5wcm90b3R5cGUud2E7UC5wcm90b3R5cGUudXBncmFkZT1QLnByb3RvdHlwZS5mYTtQLnByb3RvdHlwZS5nZXQ9UC5wcm90b3R5cGUuZ2V0O1xuUC5wcm90b3R5cGUud2hlbkRlZmluZWQ9UC5wcm90b3R5cGUueGE7UC5wcm90b3R5cGUucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaz1QLnByb3RvdHlwZS5SYTt2YXIgbmU9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50LG9lPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudE5TLHBlPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZSxxZT13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLnByZXBlbmQscmU9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5hcHBlbmQsc2U9d2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLnByZXBlbmQsdGU9d2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLmFwcGVuZCx1ZT13aW5kb3cuTm9kZS5wcm90b3R5cGUuY2xvbmVOb2RlLHZlPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZCx3ZT13aW5kb3cuTm9kZS5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlLHhlPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCx5ZT13aW5kb3cuTm9kZS5wcm90b3R5cGUucmVwbGFjZUNoaWxkLHplPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93Lk5vZGUucHJvdG90eXBlLFxuXCJ0ZXh0Q29udGVudFwiKSxBZT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93LEJlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIpLENlPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGUsRGU9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSxFZT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlLEZlPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVOUyxHZT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlTlMsSGU9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZU5TLEllPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQsSmU9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50SFRNTCxLZT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucHJlcGVuZCxcbkxlPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hcHBlbmQsTWU9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmJlZm9yZSxOZT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWZ0ZXIsT2U9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlcGxhY2VXaXRoLFBlPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmUsUWU9d2luZG93LkhUTUxFbGVtZW50LFJlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKSxTZT13aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50RWxlbWVudCxUZT13aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50SFRNTDt2YXIgVWU9bmV3IGZ1bmN0aW9uKCl7fTtmdW5jdGlvbiBWZSgpe3ZhciBhPVdlO3dpbmRvdy5IVE1MRWxlbWVudD1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXt2YXIgYj10aGlzLmNvbnN0cnVjdG9yLGQ9YS51LmdldChiKTtpZighZCl0aHJvdyBFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBiZWluZyBjb25zdHJ1Y3RlZCB3YXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBgY3VzdG9tRWxlbWVudHNgLlwiKTt2YXIgZT1kLmNvbnN0cnVjdGlvblN0YWNrO2lmKDA9PT1lLmxlbmd0aClyZXR1cm4gZT1uZS5jYWxsKGRvY3VtZW50LGQubG9jYWxOYW1lKSxPYmplY3Quc2V0UHJvdG90eXBlT2YoZSxiLnByb3RvdHlwZSksZS5fX0NFX3N0YXRlPTEsZS5fX0NFX2RlZmluaXRpb249ZCxoZShhLGUpLGU7ZD1lLmxlbmd0aC0xO3ZhciBmPWVbZF07aWYoZj09PVVlKXRocm93IEVycm9yKFwiVGhlIEhUTUxFbGVtZW50IGNvbnN0cnVjdG9yIHdhcyBlaXRoZXIgY2FsbGVkIHJlZW50cmFudGx5IGZvciB0aGlzIGNvbnN0cnVjdG9yIG9yIGNhbGxlZCBtdWx0aXBsZSB0aW1lcy5cIik7XG5lW2RdPVVlO09iamVjdC5zZXRQcm90b3R5cGVPZihmLGIucHJvdG90eXBlKTtoZShhLGYpO3JldHVybiBmfWIucHJvdG90eXBlPVFlLnByb3RvdHlwZTtPYmplY3QuZGVmaW5lUHJvcGVydHkoYi5wcm90b3R5cGUsXCJjb25zdHJ1Y3RvclwiLHt3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMSx2YWx1ZTpifSk7cmV0dXJuIGJ9KCl9O2Z1bmN0aW9uIFhlKGEsYixjKXtmdW5jdGlvbiBkKGIpe3JldHVybiBmdW5jdGlvbihjKXtmb3IodmFyIGQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDsrK2UpZFtlXT1hcmd1bWVudHNbZV07ZT1bXTtmb3IodmFyIGY9W10sbD0wO2w8ZC5sZW5ndGg7bCsrKXt2YXIgbj1kW2xdO24gaW5zdGFuY2VvZiBFbGVtZW50JiZLKG4pJiZmLnB1c2gobik7aWYobiBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKG49bi5maXJzdENoaWxkO247bj1uLm5leHRTaWJsaW5nKWUucHVzaChuKTtlbHNlIGUucHVzaChuKX1iLmFwcGx5KHRoaXMsZCk7Zm9yKGQ9MDtkPGYubGVuZ3RoO2QrKylOKGEsZltkXSk7aWYoSyh0aGlzKSlmb3IoZD0wO2Q8ZS5sZW5ndGg7ZCsrKWY9ZVtkXSxmIGluc3RhbmNlb2YgRWxlbWVudCYmTShhLGYpfX12b2lkIDAhPT1jLmRhJiYoYi5wcmVwZW5kPWQoYy5kYSkpO3ZvaWQgMCE9PWMuYXBwZW5kJiYoYi5hcHBlbmQ9ZChjLmFwcGVuZCkpfTtmdW5jdGlvbiBZZSgpe3ZhciBhPVdlO0woRG9jdW1lbnQucHJvdG90eXBlLFwiY3JlYXRlRWxlbWVudFwiLGZ1bmN0aW9uKGIpe2lmKHRoaXMuX19DRV9oYXNSZWdpc3RyeSl7dmFyIGM9YS5hLmdldChiKTtpZihjKXJldHVybiBuZXcgYy5jb25zdHJ1Y3RvckZ1bmN0aW9ufWI9bmUuY2FsbCh0aGlzLGIpO2hlKGEsYik7cmV0dXJuIGJ9KTtMKERvY3VtZW50LnByb3RvdHlwZSxcImltcG9ydE5vZGVcIixmdW5jdGlvbihiLGMpe2I9cGUuY2FsbCh0aGlzLGIsISFjKTt0aGlzLl9fQ0VfaGFzUmVnaXN0cnk/TyhhLGIpOmdlKGEsYik7cmV0dXJuIGJ9KTtMKERvY3VtZW50LnByb3RvdHlwZSxcImNyZWF0ZUVsZW1lbnROU1wiLGZ1bmN0aW9uKGIsYyl7aWYodGhpcy5fX0NFX2hhc1JlZ2lzdHJ5JiYobnVsbD09PWJ8fFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09Yikpe3ZhciBkPWEuYS5nZXQoYyk7aWYoZClyZXR1cm4gbmV3IGQuY29uc3RydWN0b3JGdW5jdGlvbn1iPW9lLmNhbGwodGhpcyxcbmIsYyk7aGUoYSxiKTtyZXR1cm4gYn0pO1hlKGEsRG9jdW1lbnQucHJvdG90eXBlLHtkYTpxZSxhcHBlbmQ6cmV9KX07ZnVuY3Rpb24gWmUoKXtmdW5jdGlvbiBhKGEsZCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJ0ZXh0Q29udGVudFwiLHtlbnVtZXJhYmxlOmQuZW51bWVyYWJsZSxjb25maWd1cmFibGU6ITAsZ2V0OmQuZ2V0LHNldDpmdW5jdGlvbihhKXtpZih0aGlzLm5vZGVUeXBlPT09Tm9kZS5URVhUX05PREUpZC5zZXQuY2FsbCh0aGlzLGEpO2Vsc2V7dmFyIGM9dm9pZCAwO2lmKHRoaXMuZmlyc3RDaGlsZCl7dmFyIGU9dGhpcy5jaGlsZE5vZGVzLGg9ZS5sZW5ndGg7aWYoMDxoJiZLKHRoaXMpKXtjPUFycmF5KGgpO2Zvcih2YXIgaz0wO2s8aDtrKyspY1trXT1lW2tdfX1kLnNldC5jYWxsKHRoaXMsYSk7aWYoYylmb3IoYT0wO2E8Yy5sZW5ndGg7YSsrKU4oYixjW2FdKX19fSl9dmFyIGI9V2U7TChOb2RlLnByb3RvdHlwZSxcImluc2VydEJlZm9yZVwiLGZ1bmN0aW9uKGEsZCl7aWYoYSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShhLmNoaWxkTm9kZXMpO1xuYT13ZS5jYWxsKHRoaXMsYSxkKTtpZihLKHRoaXMpKWZvcihkPTA7ZDxjLmxlbmd0aDtkKyspTShiLGNbZF0pO3JldHVybiBhfWM9SyhhKTtkPXdlLmNhbGwodGhpcyxhLGQpO2MmJk4oYixhKTtLKHRoaXMpJiZNKGIsYSk7cmV0dXJuIGR9KTtMKE5vZGUucHJvdG90eXBlLFwiYXBwZW5kQ2hpbGRcIixmdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGEuY2hpbGROb2Rlcyk7YT12ZS5jYWxsKHRoaXMsYSk7aWYoSyh0aGlzKSlmb3IodmFyIGU9MDtlPGMubGVuZ3RoO2UrKylNKGIsY1tlXSk7cmV0dXJuIGF9Yz1LKGEpO2U9dmUuY2FsbCh0aGlzLGEpO2MmJk4oYixhKTtLKHRoaXMpJiZNKGIsYSk7cmV0dXJuIGV9KTtMKE5vZGUucHJvdG90eXBlLFwiY2xvbmVOb2RlXCIsZnVuY3Rpb24oYSl7YT11ZS5jYWxsKHRoaXMsISFhKTt0aGlzLm93bmVyRG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT9PKGIsYSk6XG5nZShiLGEpO3JldHVybiBhfSk7TChOb2RlLnByb3RvdHlwZSxcInJlbW92ZUNoaWxkXCIsZnVuY3Rpb24oYSl7dmFyIGM9SyhhKSxlPXhlLmNhbGwodGhpcyxhKTtjJiZOKGIsYSk7cmV0dXJuIGV9KTtMKE5vZGUucHJvdG90eXBlLFwicmVwbGFjZUNoaWxkXCIsZnVuY3Rpb24oYSxkKXtpZihhIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGEuY2hpbGROb2Rlcyk7YT15ZS5jYWxsKHRoaXMsYSxkKTtpZihLKHRoaXMpKWZvcihOKGIsZCksZD0wO2Q8Yy5sZW5ndGg7ZCsrKU0oYixjW2RdKTtyZXR1cm4gYX1jPUsoYSk7dmFyIGY9eWUuY2FsbCh0aGlzLGEsZCksZz1LKHRoaXMpO2cmJk4oYixkKTtjJiZOKGIsYSk7ZyYmTShiLGEpO3JldHVybiBmfSk7emUmJnplLmdldD9hKE5vZGUucHJvdG90eXBlLHplKTplZShiLGZ1bmN0aW9uKGIpe2EoYix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7Zm9yKHZhciBhPVxuW10sYj0wO2I8dGhpcy5jaGlsZE5vZGVzLmxlbmd0aDtiKyspe3ZhciBjPXRoaXMuY2hpbGROb2Rlc1tiXTtjLm5vZGVUeXBlIT09Tm9kZS5DT01NRU5UX05PREUmJmEucHVzaChjLnRleHRDb250ZW50KX1yZXR1cm4gYS5qb2luKFwiXCIpfSxzZXQ6ZnVuY3Rpb24oYSl7Zm9yKDt0aGlzLmZpcnN0Q2hpbGQ7KXhlLmNhbGwodGhpcyx0aGlzLmZpcnN0Q2hpbGQpO251bGwhPWEmJlwiXCIhPT1hJiZ2ZS5jYWxsKHRoaXMsZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSkpfX0pfSl9O2Z1bmN0aW9uICRlKGEpe2Z1bmN0aW9uIGIoYil7cmV0dXJuIGZ1bmN0aW9uKGMpe2Zvcih2YXIgZD1bXSxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoOysrZSlkW2VdPWFyZ3VtZW50c1tlXTtlPVtdO2Zvcih2YXIgaD1bXSxrPTA7azxkLmxlbmd0aDtrKyspe3ZhciBsPWRba107bCBpbnN0YW5jZW9mIEVsZW1lbnQmJksobCkmJmgucHVzaChsKTtpZihsIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClmb3IobD1sLmZpcnN0Q2hpbGQ7bDtsPWwubmV4dFNpYmxpbmcpZS5wdXNoKGwpO2Vsc2UgZS5wdXNoKGwpfWIuYXBwbHkodGhpcyxkKTtmb3IoZD0wO2Q8aC5sZW5ndGg7ZCsrKU4oYSxoW2RdKTtpZihLKHRoaXMpKWZvcihkPTA7ZDxlLmxlbmd0aDtkKyspaD1lW2RdLGggaW5zdGFuY2VvZiBFbGVtZW50JiZNKGEsaCl9fXZhciBjPUVsZW1lbnQucHJvdG90eXBlO3ZvaWQgMCE9PU1lJiYoYy5iZWZvcmU9YihNZSkpO3ZvaWQgMCE9PU1lJiYoYy5hZnRlcj1iKE5lKSk7dm9pZCAwIT09T2UmJlxuTChjLFwicmVwbGFjZVdpdGhcIixmdW5jdGlvbihiKXtmb3IodmFyIGM9W10sZD0wO2Q8YXJndW1lbnRzLmxlbmd0aDsrK2QpY1tkXT1hcmd1bWVudHNbZF07ZD1bXTtmb3IodmFyIGc9W10saD0wO2g8Yy5sZW5ndGg7aCsrKXt2YXIgaz1jW2hdO2sgaW5zdGFuY2VvZiBFbGVtZW50JiZLKGspJiZnLnB1c2goayk7aWYoayBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKGs9ay5maXJzdENoaWxkO2s7az1rLm5leHRTaWJsaW5nKWQucHVzaChrKTtlbHNlIGQucHVzaChrKX1oPUsodGhpcyk7T2UuYXBwbHkodGhpcyxjKTtmb3IoYz0wO2M8Zy5sZW5ndGg7YysrKU4oYSxnW2NdKTtpZihoKWZvcihOKGEsdGhpcyksYz0wO2M8ZC5sZW5ndGg7YysrKWc9ZFtjXSxnIGluc3RhbmNlb2YgRWxlbWVudCYmTShhLGcpfSk7dm9pZCAwIT09UGUmJkwoYyxcInJlbW92ZVwiLGZ1bmN0aW9uKCl7dmFyIGI9Syh0aGlzKTtQZS5jYWxsKHRoaXMpO2ImJk4oYSx0aGlzKX0pfTtmdW5jdGlvbiBhZigpe2Z1bmN0aW9uIGEoYSxiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImlubmVySFRNTFwiLHtlbnVtZXJhYmxlOmIuZW51bWVyYWJsZSxjb25maWd1cmFibGU6ITAsZ2V0OmIuZ2V0LHNldDpmdW5jdGlvbihhKXt2YXIgYz10aGlzLGU9dm9pZCAwO0sodGhpcykmJihlPVtdLGJlKHRoaXMsZnVuY3Rpb24oYSl7YSE9PWMmJmUucHVzaChhKX0pKTtiLnNldC5jYWxsKHRoaXMsYSk7aWYoZSlmb3IodmFyIGY9MDtmPGUubGVuZ3RoO2YrKyl7dmFyIGc9ZVtmXTsxPT09Zy5fX0NFX3N0YXRlJiZkLmRpc2Nvbm5lY3RlZENhbGxiYWNrKGcpfXRoaXMub3duZXJEb2N1bWVudC5fX0NFX2hhc1JlZ2lzdHJ5P08oZCx0aGlzKTpnZShkLHRoaXMpO3JldHVybiBhfX0pfWZ1bmN0aW9uIGIoYSxiKXtMKGEsXCJpbnNlcnRBZGphY2VudEVsZW1lbnRcIixmdW5jdGlvbihhLGMpe3ZhciBlPUsoYyk7YT1iLmNhbGwodGhpcyxhLGMpO2UmJk4oZCxjKTtLKGEpJiZNKGQsYyk7cmV0dXJuIGF9KX1cbmZ1bmN0aW9uIGMoYSxiKXtmdW5jdGlvbiBjKGEsYil7Zm9yKHZhciBjPVtdO2EhPT1iO2E9YS5uZXh0U2libGluZyljLnB1c2goYSk7Zm9yKGI9MDtiPGMubGVuZ3RoO2IrKylPKGQsY1tiXSl9TChhLFwiaW5zZXJ0QWRqYWNlbnRIVE1MXCIsZnVuY3Rpb24oYSxkKXthPWEudG9Mb3dlckNhc2UoKTtpZihcImJlZm9yZWJlZ2luXCI9PT1hKXt2YXIgZT10aGlzLnByZXZpb3VzU2libGluZztiLmNhbGwodGhpcyxhLGQpO2MoZXx8dGhpcy5wYXJlbnROb2RlLmZpcnN0Q2hpbGQsdGhpcyl9ZWxzZSBpZihcImFmdGVyYmVnaW5cIj09PWEpZT10aGlzLmZpcnN0Q2hpbGQsYi5jYWxsKHRoaXMsYSxkKSxjKHRoaXMuZmlyc3RDaGlsZCxlKTtlbHNlIGlmKFwiYmVmb3JlZW5kXCI9PT1hKWU9dGhpcy5sYXN0Q2hpbGQsYi5jYWxsKHRoaXMsYSxkKSxjKGV8fHRoaXMuZmlyc3RDaGlsZCxudWxsKTtlbHNlIGlmKFwiYWZ0ZXJlbmRcIj09PWEpZT10aGlzLm5leHRTaWJsaW5nLGIuY2FsbCh0aGlzLGEsZCksYyh0aGlzLm5leHRTaWJsaW5nLFxuZSk7ZWxzZSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJUaGUgdmFsdWUgcHJvdmlkZWQgKFwiK1N0cmluZyhhKStcIikgaXMgbm90IG9uZSBvZiAnYmVmb3JlYmVnaW4nLCAnYWZ0ZXJiZWdpbicsICdiZWZvcmVlbmQnLCBvciAnYWZ0ZXJlbmQnLlwiKTt9KX12YXIgZD1XZTtBZSYmTChFbGVtZW50LnByb3RvdHlwZSxcImF0dGFjaFNoYWRvd1wiLGZ1bmN0aW9uKGEpe2E9QWUuY2FsbCh0aGlzLGEpO3ZhciBiPWQ7aWYoYi5iJiYhYS5fX0NFX3BhdGNoZWQpe2EuX19DRV9wYXRjaGVkPSEwO2Zvcih2YXIgYz0wO2M8Yi5jLmxlbmd0aDtjKyspYi5jW2NdKGEpfXJldHVybiB0aGlzLl9fQ0Vfc2hhZG93Um9vdD1hfSk7QmUmJkJlLmdldD9hKEVsZW1lbnQucHJvdG90eXBlLEJlKTpSZSYmUmUuZ2V0P2EoSFRNTEVsZW1lbnQucHJvdG90eXBlLFJlKTpmZShkLGZ1bmN0aW9uKGIpe2EoYix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHVlLmNhbGwodGhpcyxcbiEwKS5pbm5lckhUTUx9LHNldDpmdW5jdGlvbihhKXt2YXIgYj1cInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZSxjPWI/dGhpcy5jb250ZW50OnRoaXMsZD1vZS5jYWxsKGRvY3VtZW50LHRoaXMubmFtZXNwYWNlVVJJLHRoaXMubG9jYWxOYW1lKTtmb3IoZC5pbm5lckhUTUw9YTswPGMuY2hpbGROb2Rlcy5sZW5ndGg7KXhlLmNhbGwoYyxjLmNoaWxkTm9kZXNbMF0pO2ZvcihhPWI/ZC5jb250ZW50OmQ7MDxhLmNoaWxkTm9kZXMubGVuZ3RoOyl2ZS5jYWxsKGMsYS5jaGlsZE5vZGVzWzBdKX19KX0pO0woRWxlbWVudC5wcm90b3R5cGUsXCJzZXRBdHRyaWJ1dGVcIixmdW5jdGlvbihhLGIpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIERlLmNhbGwodGhpcyxhLGIpO3ZhciBjPUNlLmNhbGwodGhpcyxhKTtEZS5jYWxsKHRoaXMsYSxiKTtiPUNlLmNhbGwodGhpcyxhKTtkLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGEsYyxiLG51bGwpfSk7TChFbGVtZW50LnByb3RvdHlwZSxcblwic2V0QXR0cmlidXRlTlNcIixmdW5jdGlvbihhLGIsYyl7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4gR2UuY2FsbCh0aGlzLGEsYixjKTt2YXIgZT1GZS5jYWxsKHRoaXMsYSxiKTtHZS5jYWxsKHRoaXMsYSxiLGMpO2M9RmUuY2FsbCh0aGlzLGEsYik7ZC5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxiLGUsYyxhKX0pO0woRWxlbWVudC5wcm90b3R5cGUsXCJyZW1vdmVBdHRyaWJ1dGVcIixmdW5jdGlvbihhKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBFZS5jYWxsKHRoaXMsYSk7dmFyIGI9Q2UuY2FsbCh0aGlzLGEpO0VlLmNhbGwodGhpcyxhKTtudWxsIT09YiYmZC5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxhLGIsbnVsbCxudWxsKX0pO0woRWxlbWVudC5wcm90b3R5cGUsXCJyZW1vdmVBdHRyaWJ1dGVOU1wiLGZ1bmN0aW9uKGEsYil7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4gSGUuY2FsbCh0aGlzLGEsYik7dmFyIGM9RmUuY2FsbCh0aGlzLFxuYSxiKTtIZS5jYWxsKHRoaXMsYSxiKTt2YXIgZT1GZS5jYWxsKHRoaXMsYSxiKTtjIT09ZSYmZC5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxiLGMsZSxhKX0pO1NlP2IoSFRNTEVsZW1lbnQucHJvdG90eXBlLFNlKTpJZT9iKEVsZW1lbnQucHJvdG90eXBlLEllKTpjb25zb2xlLndhcm4oXCJDdXN0b20gRWxlbWVudHM6IGBFbGVtZW50I2luc2VydEFkamFjZW50RWxlbWVudGAgd2FzIG5vdCBwYXRjaGVkLlwiKTtUZT9jKEhUTUxFbGVtZW50LnByb3RvdHlwZSxUZSk6SmU/YyhFbGVtZW50LnByb3RvdHlwZSxKZSk6Y29uc29sZS53YXJuKFwiQ3VzdG9tIEVsZW1lbnRzOiBgRWxlbWVudCNpbnNlcnRBZGphY2VudEhUTUxgIHdhcyBub3QgcGF0Y2hlZC5cIik7WGUoZCxFbGVtZW50LnByb3RvdHlwZSx7ZGE6S2UsYXBwZW5kOkxlfSk7JGUoZCl9O3ZhciBiZj13aW5kb3cuY3VzdG9tRWxlbWVudHM7aWYoIWJmfHxiZi5mb3JjZVBvbHlmaWxsfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBiZi5kZWZpbmV8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIGJmLmdldCl7dmFyIFdlPW5ldyBjZTtWZSgpO1llKCk7WGUoV2UsRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUse2RhOnNlLGFwcGVuZDp0ZX0pO1plKCk7YWYoKTtkb2N1bWVudC5fX0NFX2hhc1JlZ2lzdHJ5PSEwO3ZhciBjdXN0b21FbGVtZW50cz1uZXcgUChXZSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdyxcImN1c3RvbUVsZW1lbnRzXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHZhbHVlOmN1c3RvbUVsZW1lbnRzfSl9O2Z1bmN0aW9uIGNmKCl7dGhpcy5lbmQ9dGhpcy5zdGFydD0wO3RoaXMucnVsZXM9dGhpcy5wYXJlbnQ9dGhpcy5wcmV2aW91cz1udWxsO3RoaXMuY3NzVGV4dD10aGlzLnBhcnNlZENzc1RleHQ9XCJcIjt0aGlzLmF0UnVsZT0hMTt0aGlzLnR5cGU9MDt0aGlzLnBhcnNlZFNlbGVjdG9yPXRoaXMuc2VsZWN0b3I9dGhpcy5rZXlmcmFtZXNOYW1lPVwiXCJ9XG5mdW5jdGlvbiBkZihhKXthPWEucmVwbGFjZShlZixcIlwiKS5yZXBsYWNlKGZmLFwiXCIpO3ZhciBiPWdmLGM9YSxkPW5ldyBjZjtkLnN0YXJ0PTA7ZC5lbmQ9Yy5sZW5ndGg7Zm9yKHZhciBlPWQsZj0wLGc9Yy5sZW5ndGg7ZjxnO2YrKylpZihcIntcIj09PWNbZl0pe2UucnVsZXN8fChlLnJ1bGVzPVtdKTt2YXIgaD1lLGs9aC5ydWxlc1toLnJ1bGVzLmxlbmd0aC0xXXx8bnVsbDtlPW5ldyBjZjtlLnN0YXJ0PWYrMTtlLnBhcmVudD1oO2UucHJldmlvdXM9aztoLnJ1bGVzLnB1c2goZSl9ZWxzZVwifVwiPT09Y1tmXSYmKGUuZW5kPWYrMSxlPWUucGFyZW50fHxkKTtyZXR1cm4gYihkLGEpfVxuZnVuY3Rpb24gZ2YoYSxiKXt2YXIgYz1iLnN1YnN0cmluZyhhLnN0YXJ0LGEuZW5kLTEpO2EucGFyc2VkQ3NzVGV4dD1hLmNzc1RleHQ9Yy50cmltKCk7YS5wYXJlbnQmJihjPWIuc3Vic3RyaW5nKGEucHJldmlvdXM/YS5wcmV2aW91cy5lbmQ6YS5wYXJlbnQuc3RhcnQsYS5zdGFydC0xKSxjPWhmKGMpLGM9Yy5yZXBsYWNlKGpmLFwiIFwiKSxjPWMuc3Vic3RyaW5nKGMubGFzdEluZGV4T2YoXCI7XCIpKzEpLGM9YS5wYXJzZWRTZWxlY3Rvcj1hLnNlbGVjdG9yPWMudHJpbSgpLGEuYXRSdWxlPTA9PT1jLmluZGV4T2YoXCJAXCIpLGEuYXRSdWxlPzA9PT1jLmluZGV4T2YoXCJAbWVkaWFcIik/YS50eXBlPWtmOmMubWF0Y2gobGYpJiYoYS50eXBlPW1mLGEua2V5ZnJhbWVzTmFtZT1hLnNlbGVjdG9yLnNwbGl0KGpmKS5wb3AoKSk6YS50eXBlPTA9PT1jLmluZGV4T2YoXCItLVwiKT9uZjpvZik7aWYoYz1hLnJ1bGVzKWZvcih2YXIgZD0wLGU9Yy5sZW5ndGgsZj12b2lkIDA7ZDxlJiYoZj1jW2RdKTtkKyspZ2YoZixcbmIpO3JldHVybiBhfWZ1bmN0aW9uIGhmKGEpe3JldHVybiBhLnJlcGxhY2UoL1xcXFwoWzAtOWEtZl17MSw2fSlcXHMvZ2ksZnVuY3Rpb24oYSxjKXthPWM7Zm9yKGM9Ni1hLmxlbmd0aDtjLS07KWE9XCIwXCIrYTtyZXR1cm5cIlxcXFxcIithfSl9XG5mdW5jdGlvbiBwZihhLGIsYyl7Yz12b2lkIDA9PT1jP1wiXCI6Yzt2YXIgZD1cIlwiO2lmKGEuY3NzVGV4dHx8YS5ydWxlcyl7dmFyIGU9YS5ydWxlcyxmO2lmKGY9ZSlmPWVbMF0sZj0hKGYmJmYuc2VsZWN0b3ImJjA9PT1mLnNlbGVjdG9yLmluZGV4T2YoXCItLVwiKSk7aWYoZil7Zj0wO2Zvcih2YXIgZz1lLmxlbmd0aCxoPXZvaWQgMDtmPGcmJihoPWVbZl0pO2YrKylkPXBmKGgsYixkKX1lbHNlIGI/Yj1hLmNzc1RleHQ6KGI9YS5jc3NUZXh0LGI9Yi5yZXBsYWNlKHFmLFwiXCIpLnJlcGxhY2UocmYsXCJcIiksYj1iLnJlcGxhY2UodWYsXCJcIikucmVwbGFjZSh2ZixcIlwiKSksKGQ9Yi50cmltKCkpJiYoZD1cIiAgXCIrZCtcIlxcblwiKX1kJiYoYS5zZWxlY3RvciYmKGMrPWEuc2VsZWN0b3IrXCIge1xcblwiKSxjKz1kLGEuc2VsZWN0b3ImJihjKz1cIn1cXG5cXG5cIikpO3JldHVybiBjfVxudmFyIG9mPTEsbWY9NyxrZj00LG5mPTFFMyxlZj0vXFwvXFwqW14qXSpcXCorKFteLypdW14qXSpcXCorKSpcXC8vZ2ltLGZmPS9AaW1wb3J0W147XSo7L2dpbSxxZj0vKD86XlteO1xcLVxcc31dKyk/LS1bXjt7fV0qPzpbXnt9O10qPyg/Ols7XFxuXXwkKS9naW0scmY9Lyg/Ol5bXjtcXC1cXHN9XSspPy0tW147e31dKj86W157fTtdKj97W159XSo/fSg/Ols7XFxuXXwkKT8vZ2ltLHVmPS9AYXBwbHlcXHMqXFwoP1teKTtdKlxcKT9cXHMqKD86WztcXG5dfCQpPy9naW0sdmY9L1teOzpdKj86W147XSo/dmFyXFwoW147XSpcXCkoPzpbO1xcbl18JCk/L2dpbSxsZj0vXkBbXlxcc10qa2V5ZnJhbWVzLyxqZj0vXFxzKy9nO3ZhciBSPSEod2luZG93LlNoYWR5RE9NJiZ3aW5kb3cuU2hhZHlET00uaW5Vc2UpLHdmO2Z1bmN0aW9uIHhmKGEpe3dmPWEmJmEuc2hpbWNzc3Byb3BlcnRpZXM/ITE6Unx8IShuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BcHBsZVdlYktpdFxcLzYwMXxFZGdlXFwvMTUvKXx8IXdpbmRvdy5DU1N8fCFDU1Muc3VwcG9ydHN8fCFDU1Muc3VwcG9ydHMoXCJib3gtc2hhZG93XCIsXCIwIDAgMCB2YXIoLS1mb28pXCIpKX12YXIgeWY7d2luZG93LlNoYWR5Q1NTJiZ2b2lkIDAhPT13aW5kb3cuU2hhZHlDU1MuY3NzQnVpbGQmJih5Zj13aW5kb3cuU2hhZHlDU1MuY3NzQnVpbGQpO3ZhciB6Zj0hKCF3aW5kb3cuU2hhZHlDU1N8fCF3aW5kb3cuU2hhZHlDU1MuZGlzYWJsZVJ1bnRpbWUpO1xud2luZG93LlNoYWR5Q1NTJiZ2b2lkIDAhPT13aW5kb3cuU2hhZHlDU1MubmF0aXZlQ3NzP3dmPXdpbmRvdy5TaGFkeUNTUy5uYXRpdmVDc3M6d2luZG93LlNoYWR5Q1NTPyh4Zih3aW5kb3cuU2hhZHlDU1MpLHdpbmRvdy5TaGFkeUNTUz12b2lkIDApOnhmKHdpbmRvdy5XZWJDb21wb25lbnRzJiZ3aW5kb3cuV2ViQ29tcG9uZW50cy5mbGFncyk7dmFyIFM9d2YsQWY9eWY7dmFyIEJmPS8oPzpefFs7XFxze11cXHMqKSgtLVtcXHctXSo/KVxccyo6XFxzKig/OigoPzonKD86XFxcXCd8LikqPyd8XCIoPzpcXFxcXCJ8LikqP1wifFxcKFteKV0qP1xcKXxbXn07e10pKyl8XFx7KFtefV0qKVxcfSg/Oig/PVs7XFxzfV0pfCQpKS9naSxDZj0vKD86XnxcXFcrKUBhcHBseVxccypcXCg/KFteKTtcXG5dKilcXCk/L2dpLERmPS8oLS1bXFx3LV0rKVxccyooWzosOyldfCQpL2dpLEVmPS8oYW5pbWF0aW9uXFxzKjopfChhbmltYXRpb24tbmFtZVxccyo6KS8sRmY9L0BtZWRpYVxccyguKikvLEdmPS9cXHtbXn1dKlxcfS9nO3ZhciBIZj1uZXcgU2V0O2Z1bmN0aW9uIElmKGEsYil7aWYoIWEpcmV0dXJuXCJcIjtcInN0cmluZ1wiPT09dHlwZW9mIGEmJihhPWRmKGEpKTtiJiZKZihhLGIpO3JldHVybiBwZihhLFMpfWZ1bmN0aW9uIEtmKGEpeyFhLl9fY3NzUnVsZXMmJmEudGV4dENvbnRlbnQmJihhLl9fY3NzUnVsZXM9ZGYoYS50ZXh0Q29udGVudCkpO3JldHVybiBhLl9fY3NzUnVsZXN8fG51bGx9ZnVuY3Rpb24gTGYoYSl7cmV0dXJuISFhLnBhcmVudCYmYS5wYXJlbnQudHlwZT09PW1mfWZ1bmN0aW9uIEpmKGEsYixjLGQpe2lmKGEpe3ZhciBlPSExLGY9YS50eXBlO2lmKGQmJmY9PT1rZil7dmFyIGc9YS5zZWxlY3Rvci5tYXRjaChGZik7ZyYmKHdpbmRvdy5tYXRjaE1lZGlhKGdbMV0pLm1hdGNoZXN8fChlPSEwKSl9Zj09PW9mP2IoYSk6YyYmZj09PW1mP2MoYSk6Zj09PW5mJiYoZT0hMCk7aWYoKGE9YS5ydWxlcykmJiFlKWZvcihlPTAsZj1hLmxlbmd0aCxnPXZvaWQgMDtlPGYmJihnPWFbZV0pO2UrKylKZihnLGIsYyxkKX19XG5mdW5jdGlvbiBNZihhLGIsYyxkKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7YiYmZS5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLGIpO2UudGV4dENvbnRlbnQ9YTtOZihlLGMsZCk7cmV0dXJuIGV9dmFyIE9mPW51bGw7ZnVuY3Rpb24gUGYoYSl7YT1kb2N1bWVudC5jcmVhdGVDb21tZW50KFwiIFNoYWR5IERPTSBzdHlsZXMgZm9yIFwiK2ErXCIgXCIpO3ZhciBiPWRvY3VtZW50LmhlYWQ7Yi5pbnNlcnRCZWZvcmUoYSwoT2Y/T2YubmV4dFNpYmxpbmc6bnVsbCl8fGIuZmlyc3RDaGlsZCk7cmV0dXJuIE9mPWF9ZnVuY3Rpb24gTmYoYSxiLGMpe2I9Ynx8ZG9jdW1lbnQuaGVhZDtiLmluc2VydEJlZm9yZShhLGMmJmMubmV4dFNpYmxpbmd8fGIuZmlyc3RDaGlsZCk7T2Y/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihPZik9PT1Ob2RlLkRPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElORyYmKE9mPWEpOk9mPWF9XG5mdW5jdGlvbiBRZihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7YjxkO2IrKylpZihcIihcIj09PWFbYl0pYysrO2Vsc2UgaWYoXCIpXCI9PT1hW2JdJiYwPT09LS1jKXJldHVybiBiO3JldHVybi0xfWZ1bmN0aW9uIFJmKGEsYil7dmFyIGM9YS5pbmRleE9mKFwidmFyKFwiKTtpZigtMT09PWMpcmV0dXJuIGIoYSxcIlwiLFwiXCIsXCJcIik7dmFyIGQ9UWYoYSxjKzMpLGU9YS5zdWJzdHJpbmcoYys0LGQpO2M9YS5zdWJzdHJpbmcoMCxjKTthPVJmKGEuc3Vic3RyaW5nKGQrMSksYik7ZD1lLmluZGV4T2YoXCIsXCIpO3JldHVybi0xPT09ZD9iKGMsZS50cmltKCksXCJcIixhKTpiKGMsZS5zdWJzdHJpbmcoMCxkKS50cmltKCksZS5zdWJzdHJpbmcoZCsxKS50cmltKCksYSl9ZnVuY3Rpb24gU2YoYSxiKXtSP2Euc2V0QXR0cmlidXRlKFwiY2xhc3NcIixiKTp3aW5kb3cuU2hhZHlET00ubmF0aXZlTWV0aG9kcy5zZXRBdHRyaWJ1dGUuY2FsbChhLFwiY2xhc3NcIixiKX1cbnZhciBUZj13aW5kb3cuU2hhZHlET00mJndpbmRvdy5TaGFkeURPTS53cmFwfHxmdW5jdGlvbihhKXtyZXR1cm4gYX07ZnVuY3Rpb24gVWYoYSl7dmFyIGI9YS5sb2NhbE5hbWUsYz1cIlwiO2I/LTE8Yi5pbmRleE9mKFwiLVwiKXx8KGM9YixiPWEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImlzXCIpfHxcIlwiKTooYj1hLmlzLGM9YS5leHRlbmRzKTtyZXR1cm57aXM6YixYOmN9fWZ1bmN0aW9uIFZmKGEpe2Zvcih2YXIgYj1bXSxjPVwiXCIsZD0wOzA8PWQmJmQ8YS5sZW5ndGg7ZCsrKWlmKFwiKFwiPT09YVtkXSl7dmFyIGU9UWYoYSxkKTtjKz1hLnNsaWNlKGQsZSsxKTtkPWV9ZWxzZVwiLFwiPT09YVtkXT8oYi5wdXNoKGMpLGM9XCJcIik6Yys9YVtkXTtjJiZiLnB1c2goYyk7cmV0dXJuIGJ9XG5mdW5jdGlvbiBXZihhKXtpZih2b2lkIDAhPT1BZilyZXR1cm4gQWY7aWYodm9pZCAwPT09YS5fX2Nzc0J1aWxkKXt2YXIgYj1hLmdldEF0dHJpYnV0ZShcImNzcy1idWlsZFwiKTtpZihiKWEuX19jc3NCdWlsZD1iO2Vsc2V7YTp7Yj1cInRlbXBsYXRlXCI9PT1hLmxvY2FsTmFtZT9hLmNvbnRlbnQuZmlyc3RDaGlsZDphLmZpcnN0Q2hpbGQ7aWYoYiBpbnN0YW5jZW9mIENvbW1lbnQmJihiPWIudGV4dENvbnRlbnQudHJpbSgpLnNwbGl0KFwiOlwiKSxcImNzcy1idWlsZFwiPT09YlswXSkpe2I9YlsxXTticmVhayBhfWI9XCJcIn1pZihcIlwiIT09Yil7dmFyIGM9XCJ0ZW1wbGF0ZVwiPT09YS5sb2NhbE5hbWU/YS5jb250ZW50LmZpcnN0Q2hpbGQ6YS5maXJzdENoaWxkO2MucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKX1hLl9fY3NzQnVpbGQ9Yn19cmV0dXJuIGEuX19jc3NCdWlsZHx8XCJcIn1cbmZ1bmN0aW9uIFhmKGEpe2E9dm9pZCAwPT09YT9cIlwiOmE7cmV0dXJuXCJcIiE9PWEmJlM/Uj9cInNoYWRvd1wiPT09YTpcInNoYWR5XCI9PT1hOiExfTtmdW5jdGlvbiBZZigpe31mdW5jdGlvbiBaZihhLGIpeyRmKFUsYSxmdW5jdGlvbihhKXthZyhhLGJ8fFwiXCIpfSl9ZnVuY3Rpb24gJGYoYSxiLGMpe2Iubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSYmYyhiKTt2YXIgZDtcInRlbXBsYXRlXCI9PT1iLmxvY2FsTmFtZT9kPShiLmNvbnRlbnR8fGIuX2NvbnRlbnR8fGIpLmNoaWxkTm9kZXM6ZD1iLmNoaWxkcmVufHxiLmNoaWxkTm9kZXM7aWYoZClmb3IoYj0wO2I8ZC5sZW5ndGg7YisrKSRmKGEsZFtiXSxjKX1cbmZ1bmN0aW9uIGFnKGEsYixjKXtpZihiKWlmKGEuY2xhc3NMaXN0KWM/KGEuY2xhc3NMaXN0LnJlbW92ZShcInN0eWxlLXNjb3BlXCIpLGEuY2xhc3NMaXN0LnJlbW92ZShiKSk6KGEuY2xhc3NMaXN0LmFkZChcInN0eWxlLXNjb3BlXCIpLGEuY2xhc3NMaXN0LmFkZChiKSk7ZWxzZSBpZihhLmdldEF0dHJpYnV0ZSl7dmFyIGQ9YS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKTtjP2QmJihiPWQucmVwbGFjZShcInN0eWxlLXNjb3BlXCIsXCJcIikucmVwbGFjZShiLFwiXCIpLFNmKGEsYikpOlNmKGEsKGQ/ZCtcIiBcIjpcIlwiKStcInN0eWxlLXNjb3BlIFwiK2IpfX1mdW5jdGlvbiBiZyhhLGIsYyl7JGYoVSxhLGZ1bmN0aW9uKGEpe2FnKGEsYiwhMCk7YWcoYSxjKX0pfWZ1bmN0aW9uIGNnKGEsYil7JGYoVSxhLGZ1bmN0aW9uKGEpe2FnKGEsYnx8XCJcIiwhMCl9KX1cbmZ1bmN0aW9uIGRnKGEsYixjLGQsZSl7dmFyIGY9VTtlPXZvaWQgMD09PWU/XCJcIjplO1wiXCI9PT1lJiYoUnx8XCJzaGFkeVwiPT09KHZvaWQgMD09PWQ/XCJcIjpkKT9lPUlmKGIsYyk6KGE9VWYoYSksZT1lZyhmLGIsYS5pcyxhLlgsYykrXCJcXG5cXG5cIikpO3JldHVybiBlLnRyaW0oKX1mdW5jdGlvbiBlZyhhLGIsYyxkLGUpe3ZhciBmPWZnKGMsZCk7Yz1jP1wiLlwiK2M6XCJcIjtyZXR1cm4gSWYoYixmdW5jdGlvbihiKXtiLmN8fChiLnNlbGVjdG9yPWIuQz1nZyhhLGIsYS5iLGMsZiksYi5jPSEwKTtlJiZlKGIsYyxmKX0pfWZ1bmN0aW9uIGZnKGEsYil7cmV0dXJuIGI/XCJbaXM9XCIrYStcIl1cIjphfVxuZnVuY3Rpb24gZ2coYSxiLGMsZCxlKXt2YXIgZj1WZihiLnNlbGVjdG9yKTtpZighTGYoYikpe2I9MDtmb3IodmFyIGc9Zi5sZW5ndGgsaD12b2lkIDA7YjxnJiYoaD1mW2JdKTtiKyspZltiXT1jLmNhbGwoYSxoLGQsZSl9cmV0dXJuIGYuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiEhYX0pLmpvaW4oXCIsXCIpfWZ1bmN0aW9uIGhnKGEpe3JldHVybiBhLnJlcGxhY2UoaWcsZnVuY3Rpb24oYSxjLGQpey0xPGQuaW5kZXhPZihcIitcIik/ZD1kLnJlcGxhY2UoL1xcKy9nLFwiX19fXCIpOi0xPGQuaW5kZXhPZihcIl9fX1wiKSYmKGQ9ZC5yZXBsYWNlKC9fX18vZyxcIitcIikpO3JldHVyblwiOlwiK2MrXCIoXCIrZCtcIilcIn0pfVxuZnVuY3Rpb24gamcoYSl7Zm9yKHZhciBiPVtdLGM7Yz1hLm1hdGNoKGtnKTspe3ZhciBkPWMuaW5kZXgsZT1RZihhLGQpO2lmKC0xPT09ZSl0aHJvdyBFcnJvcihjLmlucHV0K1wiIHNlbGVjdG9yIG1pc3NpbmcgJyknXCIpO2M9YS5zbGljZShkLGUrMSk7YT1hLnJlcGxhY2UoYyxcIlxcdWUwMDBcIik7Yi5wdXNoKGMpfXJldHVybntuYTphLG1hdGNoZXM6Yn19ZnVuY3Rpb24gbGcoYSxiKXt2YXIgYz1hLnNwbGl0KFwiXFx1ZTAwMFwiKTtyZXR1cm4gYi5yZWR1Y2UoZnVuY3Rpb24oYSxiLGYpe3JldHVybiBhK2IrY1tmKzFdfSxjWzBdKX1cbllmLnByb3RvdHlwZS5iPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD0hMTthPWEudHJpbSgpO3ZhciBlPWlnLnRlc3QoYSk7ZSYmKGE9YS5yZXBsYWNlKGlnLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5cIjpcIitiK1wiKFwiK2MucmVwbGFjZSgvXFxzL2csXCJcIikrXCIpXCJ9KSxhPWhnKGEpKTt2YXIgZj1rZy50ZXN0KGEpO2lmKGYpe3ZhciBnPWpnKGEpO2E9Zy5uYTtnPWcubWF0Y2hlc31hPWEucmVwbGFjZShtZyxcIjpob3N0ICQxXCIpO2E9YS5yZXBsYWNlKG5nLGZ1bmN0aW9uKGEsZSxmKXtkfHwoYT1vZyhmLGUsYixjKSxkPWR8fGEuc3RvcCxlPWEuSGEsZj1hLnZhbHVlKTtyZXR1cm4gZStmfSk7ZiYmKGE9bGcoYSxnKSk7ZSYmKGE9aGcoYSkpO3JldHVybiBhPWEucmVwbGFjZShwZyxmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4nW2Rpcj1cIicrYysnXCJdICcrYitkK1wiLCBcIitiKydbZGlyPVwiJytjKydcIl0nK2R9KX07XG5mdW5jdGlvbiBvZyhhLGIsYyxkKXt2YXIgZT1hLmluZGV4T2YoXCI6OnNsb3R0ZWRcIik7MDw9YS5pbmRleE9mKFwiOmhvc3RcIik/YT1xZyhhLGQpOjAhPT1lJiYoYT1jP3JnKGEsYyk6YSk7Yz0hMTswPD1lJiYoYj1cIlwiLGM9ITApO2lmKGMpe3ZhciBmPSEwO2MmJihhPWEucmVwbGFjZShzZyxmdW5jdGlvbihhLGIpe3JldHVyblwiID4gXCIrYn0pKX1yZXR1cm57dmFsdWU6YSxIYTpiLHN0b3A6Zn19ZnVuY3Rpb24gcmcoYSxiKXthPWEuc3BsaXQoLyhcXFsuKz9cXF0pLyk7Zm9yKHZhciBjPVtdLGQ9MDtkPGEubGVuZ3RoO2QrKylpZigxPT09ZCUyKWMucHVzaChhW2RdKTtlbHNle3ZhciBlPWFbZF07aWYoXCJcIiE9PWV8fGQhPT1hLmxlbmd0aC0xKWU9ZS5zcGxpdChcIjpcIiksZVswXSs9YixjLnB1c2goZS5qb2luKFwiOlwiKSl9cmV0dXJuIGMuam9pbihcIlwiKX1cbmZ1bmN0aW9uIHFnKGEsYil7dmFyIGM9YS5tYXRjaCh0Zyk7cmV0dXJuKGM9YyYmY1syXS50cmltKCl8fFwiXCIpP2NbMF0ubWF0Y2godWcpP2EucmVwbGFjZSh0ZyxmdW5jdGlvbihhLGMsZil7cmV0dXJuIGIrZn0pOmMuc3BsaXQodWcpWzBdPT09Yj9jOlwic2hvdWxkX25vdF9tYXRjaFwiOmEucmVwbGFjZShcIjpob3N0XCIsYil9ZnVuY3Rpb24gdmcoYSl7XCI6cm9vdFwiPT09YS5zZWxlY3RvciYmKGEuc2VsZWN0b3I9XCJodG1sXCIpfVlmLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEpe3JldHVybiBhLm1hdGNoKFwiOmhvc3RcIik/XCJcIjphLm1hdGNoKFwiOjpzbG90dGVkXCIpP3RoaXMuYihhLFwiOm5vdCguc3R5bGUtc2NvcGUpXCIpOnJnKGEudHJpbSgpLFwiOm5vdCguc3R5bGUtc2NvcGUpXCIpfTt0Lk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFlmLnByb3RvdHlwZSx7YTp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHlsZS1zY29wZVwifX19KTtcbnZhciBpZz0vOihudGhbLVxcd10rKVxcKChbXildKylcXCkvLG5nPS8oXnxbXFxzPit+XSspKCg/OlxcWy4rP1xcXXxbXlxccz4rfj1bXSkrKS9nLHVnPS9bWy46IypdLyxtZz0vXig6OnNsb3R0ZWQpLyx0Zz0vKDpob3N0KSg/OlxcKCgoPzpcXChbXikoXSpcXCl8W14pKF0qKSs/KVxcKSkvLHNnPS8oPzo6OnNsb3R0ZWQpKD86XFwoKCg/OlxcKFteKShdKlxcKXxbXikoXSopKz8pXFwpKS8scGc9LyguKik6ZGlyXFwoKD86KGx0cnxydGwpKVxcKSguKikvLGtnPS86KD86bWF0Y2hlc3xhbnl8LSg/OndlYmtpdHxtb3opLWFueSkvLFU9bmV3IFlmO2Z1bmN0aW9uIHdnKGEsYixjLGQsZSl7dGhpcy5MPWF8fG51bGw7dGhpcy5iPWJ8fG51bGw7dGhpcy5sYT1jfHxbXTt0aGlzLkc9bnVsbDt0aGlzLmNzc0J1aWxkPWV8fFwiXCI7dGhpcy5YPWR8fFwiXCI7dGhpcy5hPXRoaXMuSD10aGlzLks9bnVsbH1mdW5jdGlvbiBWKGEpe3JldHVybiBhP2EuX19zdHlsZUluZm86bnVsbH1mdW5jdGlvbiB4ZyhhLGIpe3JldHVybiBhLl9fc3R5bGVJbmZvPWJ9d2cucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5MfTt3Zy5wcm90b3R5cGUuX2dldFN0eWxlUnVsZXM9d2cucHJvdG90eXBlLmM7ZnVuY3Rpb24geWcoYSl7dmFyIGI9dGhpcy5tYXRjaGVzfHx0aGlzLm1hdGNoZXNTZWxlY3Rvcnx8dGhpcy5tb3pNYXRjaGVzU2VsZWN0b3J8fHRoaXMubXNNYXRjaGVzU2VsZWN0b3J8fHRoaXMub01hdGNoZXNTZWxlY3Rvcnx8dGhpcy53ZWJraXRNYXRjaGVzU2VsZWN0b3I7cmV0dXJuIGImJmIuY2FsbCh0aGlzLGEpfXZhciB6Zz1uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKFwiVHJpZGVudFwiKTtmdW5jdGlvbiBBZygpe31mdW5jdGlvbiBCZyhhKXt2YXIgYj17fSxjPVtdLGQ9MDtKZihhLGZ1bmN0aW9uKGEpe0NnKGEpO2EuaW5kZXg9ZCsrO2E9YS5BLmNzc1RleHQ7Zm9yKHZhciBjO2M9RGYuZXhlYyhhKTspe3ZhciBlPWNbMV07XCI6XCIhPT1jWzJdJiYoYltlXT0hMCl9fSxmdW5jdGlvbihhKXtjLnB1c2goYSl9KTthLmI9YzthPVtdO2Zvcih2YXIgZSBpbiBiKWEucHVzaChlKTtyZXR1cm4gYX1cbmZ1bmN0aW9uIENnKGEpe2lmKCFhLkEpe3ZhciBiPXt9LGM9e307RGcoYSxjKSYmKGIuSj1jLGEucnVsZXM9bnVsbCk7Yi5jc3NUZXh0PWEucGFyc2VkQ3NzVGV4dC5yZXBsYWNlKEdmLFwiXCIpLnJlcGxhY2UoQmYsXCJcIik7YS5BPWJ9fWZ1bmN0aW9uIERnKGEsYil7dmFyIGM9YS5BO2lmKGMpe2lmKGMuSilyZXR1cm4gT2JqZWN0LmFzc2lnbihiLGMuSiksITB9ZWxzZXtjPWEucGFyc2VkQ3NzVGV4dDtmb3IodmFyIGQ7YT1CZi5leGVjKGMpOyl7ZD0oYVsyXXx8YVszXSkudHJpbSgpO2lmKFwiaW5oZXJpdFwiIT09ZHx8XCJ1bnNldFwiIT09ZCliW2FbMV0udHJpbSgpXT1kO2Q9ITB9cmV0dXJuIGR9fVxuZnVuY3Rpb24gRWcoYSxiLGMpe2ImJihiPTA8PWIuaW5kZXhPZihcIjtcIik/RmcoYSxiLGMpOlJmKGIsZnVuY3Rpb24oYixlLGYsZyl7aWYoIWUpcmV0dXJuIGIrZzsoZT1FZyhhLGNbZV0sYykpJiZcImluaXRpYWxcIiE9PWU/XCJhcHBseS1zaGltLWluaGVyaXRcIj09PWUmJihlPVwiaW5oZXJpdFwiKTplPUVnKGEsY1tmXXx8ZixjKXx8ZjtyZXR1cm4gYisoZXx8XCJcIikrZ30pKTtyZXR1cm4gYiYmYi50cmltKCl8fFwiXCJ9XG5mdW5jdGlvbiBGZyhhLGIsYyl7Yj1iLnNwbGl0KFwiO1wiKTtmb3IodmFyIGQ9MCxlLGY7ZDxiLmxlbmd0aDtkKyspaWYoZT1iW2RdKXtDZi5sYXN0SW5kZXg9MDtpZihmPUNmLmV4ZWMoZSkpZT1FZyhhLGNbZlsxXV0sYyk7ZWxzZSBpZihmPWUuaW5kZXhPZihcIjpcIiksLTEhPT1mKXt2YXIgZz1lLnN1YnN0cmluZyhmKTtnPWcudHJpbSgpO2c9RWcoYSxnLGMpfHxnO2U9ZS5zdWJzdHJpbmcoMCxmKStnfWJbZF09ZSYmZS5sYXN0SW5kZXhPZihcIjtcIik9PT1lLmxlbmd0aC0xP2Uuc2xpY2UoMCwtMSk6ZXx8XCJcIn1yZXR1cm4gYi5qb2luKFwiO1wiKX1cbmZ1bmN0aW9uIEdnKGEsYil7dmFyIGM9e30sZD1bXTtKZihhLGZ1bmN0aW9uKGEpe2EuQXx8Q2coYSk7dmFyIGU9YS5DfHxhLnBhcnNlZFNlbGVjdG9yO2ImJmEuQS5KJiZlJiZ5Zy5jYWxsKGIsZSkmJihEZyhhLGMpLGE9YS5pbmRleCxlPXBhcnNlSW50KGEvMzIsMTApLGRbZV09KGRbZV18fDApfDE8PGElMzIpfSxudWxsLCEwKTtyZXR1cm57SjpjLGtleTpkfX1cbmZ1bmN0aW9uIEhnKGEsYixjLGQpe2IuQXx8Q2coYik7aWYoYi5BLkope3ZhciBlPVVmKGEpO2E9ZS5pcztlPWUuWDtlPWE/ZmcoYSxlKTpcImh0bWxcIjt2YXIgZj1iLnBhcnNlZFNlbGVjdG9yLGc9XCI6aG9zdCA+ICpcIj09PWZ8fFwiaHRtbFwiPT09ZixoPTA9PT1mLmluZGV4T2YoXCI6aG9zdFwiKSYmIWc7XCJzaGFkeVwiPT09YyYmKGc9Zj09PWUrXCIgPiAqLlwiK2V8fC0xIT09Zi5pbmRleE9mKFwiaHRtbFwiKSxoPSFnJiYwPT09Zi5pbmRleE9mKGUpKTtpZihnfHxoKWM9ZSxoJiYoYi5DfHwoYi5DPWdnKFUsYixVLmIsYT9cIi5cIithOlwiXCIsZSkpLGM9Yi5DfHxlKSxkKHtuYTpjLE9hOmgsYmI6Z30pfX1mdW5jdGlvbiBJZyhhLGIsYyl7dmFyIGQ9e30sZT17fTtKZihiLGZ1bmN0aW9uKGIpe0hnKGEsYixjLGZ1bmN0aW9uKGMpe3lnLmNhbGwoYS5fZWxlbWVudHx8YSxjLm5hKSYmKGMuT2E/RGcoYixkKTpEZyhiLGUpKX0pfSxudWxsLCEwKTtyZXR1cm57VWE6ZSxNYTpkfX1cbmZ1bmN0aW9uIEpnKGEsYixjLGQpe3ZhciBlPVVmKGIpLGY9ZmcoZS5pcyxlLlgpLGc9bmV3IFJlZ0V4cChcIig/Ol58W14uI1s6XSlcIisoYi5leHRlbmRzP1wiXFxcXFwiK2Yuc2xpY2UoMCwtMSkrXCJcXFxcXVwiOmYpK1wiKCR8Wy46W1xcXFxzPit+XSlcIiksaD1WKGIpO2U9aC5MO2g9aC5jc3NCdWlsZDt2YXIgaz1LZyhlLGQpO3JldHVybiBkZyhiLGUsZnVuY3Rpb24oYil7dmFyIGU9XCJcIjtiLkF8fENnKGIpO2IuQS5jc3NUZXh0JiYoZT1GZyhhLGIuQS5jc3NUZXh0LGMpKTtiLmNzc1RleHQ9ZTtpZighUiYmIUxmKGIpJiZiLmNzc1RleHQpe3ZhciBoPWU9Yi5jc3NUZXh0O251bGw9PWIucmEmJihiLnJhPUVmLnRlc3QoZSkpO2lmKGIucmEpaWYobnVsbD09Yi5iYSl7Yi5iYT1bXTtmb3IodmFyIGwgaW4gayloPWtbbF0saD1oKGUpLGUhPT1oJiYoZT1oLGIuYmEucHVzaChsKSl9ZWxzZXtmb3IobD0wO2w8Yi5iYS5sZW5ndGg7KytsKWg9a1tiLmJhW2xdXSxlPWgoZSk7aD1lfWIuY3NzVGV4dD1oO2IuQz1cbmIuQ3x8Yi5zZWxlY3RvcjtlPVwiLlwiK2Q7bD1WZihiLkMpO2g9MDtmb3IodmFyIHY9bC5sZW5ndGgseD12b2lkIDA7aDx2JiYoeD1sW2hdKTtoKyspbFtoXT14Lm1hdGNoKGcpP3gucmVwbGFjZShmLGUpOmUrXCIgXCIreDtiLnNlbGVjdG9yPWwuam9pbihcIixcIil9fSxoKX1mdW5jdGlvbiBLZyhhLGIpe2E9YS5iO3ZhciBjPXt9O2lmKCFSJiZhKWZvcih2YXIgZD0wLGU9YVtkXTtkPGEubGVuZ3RoO2U9YVsrK2RdKXt2YXIgZj1lLGc9YjtmLmY9bmV3IFJlZ0V4cChcIlxcXFxiXCIrZi5rZXlmcmFtZXNOYW1lK1wiKD8hXFxcXEJ8LSlcIixcImdcIik7Zi5hPWYua2V5ZnJhbWVzTmFtZStcIi1cIitnO2YuQz1mLkN8fGYuc2VsZWN0b3I7Zi5zZWxlY3Rvcj1mLkMucmVwbGFjZShmLmtleWZyYW1lc05hbWUsZi5hKTtjW2Uua2V5ZnJhbWVzTmFtZV09TGcoZSl9cmV0dXJuIGN9ZnVuY3Rpb24gTGcoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBiLnJlcGxhY2UoYS5mLGEuYSl9fVxuZnVuY3Rpb24gTWcoYSxiKXt2YXIgYz1OZyxkPUtmKGEpO2EudGV4dENvbnRlbnQ9SWYoZCxmdW5jdGlvbihhKXt2YXIgZD1hLmNzc1RleHQ9YS5wYXJzZWRDc3NUZXh0O2EuQSYmYS5BLmNzc1RleHQmJihkPWQucmVwbGFjZShxZixcIlwiKS5yZXBsYWNlKHJmLFwiXCIpLGEuY3NzVGV4dD1GZyhjLGQsYikpfSl9dC5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhBZy5wcm90b3R5cGUse2E6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVyblwieC1zY29wZVwifX19KTt2YXIgTmc9bmV3IEFnO3ZhciBPZz17fSxQZz13aW5kb3cuY3VzdG9tRWxlbWVudHM7aWYoUGcmJiFSJiYhemYpe3ZhciBRZz1QZy5kZWZpbmU7UGcuZGVmaW5lPWZ1bmN0aW9uKGEsYixjKXtPZ1thXXx8KE9nW2FdPVBmKGEpKTtRZy5jYWxsKFBnLGEsYixjKX19O2Z1bmN0aW9uIFJnKCl7dGhpcy5jYWNoZT17fX1SZy5wcm90b3R5cGUuc3RvcmU9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9dGhpcy5jYWNoZVthXXx8W107ZS5wdXNoKHtKOmIsc3R5bGVFbGVtZW50OmMsSDpkfSk7MTAwPGUubGVuZ3RoJiZlLnNoaWZ0KCk7dGhpcy5jYWNoZVthXT1lfTtmdW5jdGlvbiBTZygpe312YXIgVGc9bmV3IFJlZ0V4cChVLmErXCJcXFxccyooW15cXFxcc10qKVwiKTtmdW5jdGlvbiBVZyhhKXtyZXR1cm4oYT0oYS5jbGFzc0xpc3QmJmEuY2xhc3NMaXN0LnZhbHVlP2EuY2xhc3NMaXN0LnZhbHVlOmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpLm1hdGNoKFRnKSk/YVsxXTpcIlwifWZ1bmN0aW9uIFZnKGEpe3ZhciBiPVRmKGEpLmdldFJvb3ROb2RlKCk7cmV0dXJuIGI9PT1hfHxiPT09YS5vd25lckRvY3VtZW50P1wiXCI6KGE9Yi5ob3N0KT9VZihhKS5pczpcIlwifVxuZnVuY3Rpb24gV2coYSl7Zm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPWFbYl07aWYoYy50YXJnZXQhPT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQmJmMudGFyZ2V0IT09ZG9jdW1lbnQuaGVhZClmb3IodmFyIGQ9MDtkPGMuYWRkZWROb2Rlcy5sZW5ndGg7ZCsrKXt2YXIgZT1jLmFkZGVkTm9kZXNbZF07aWYoZS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXt2YXIgZj1lLmdldFJvb3ROb2RlKCksZz1VZyhlKTtpZihnJiZmPT09ZS5vd25lckRvY3VtZW50JiYoXCJzdHlsZVwiIT09ZS5sb2NhbE5hbWUmJlwidGVtcGxhdGVcIiE9PWUubG9jYWxOYW1lfHxcIlwiPT09V2YoZSkpKWNnKGUsZyk7ZWxzZSBpZihmIGluc3RhbmNlb2YgU2hhZG93Um9vdClmb3IoZj1WZyhlKSxmIT09ZyYmYmcoZSxnLGYpLGU9d2luZG93LlNoYWR5RE9NLm5hdGl2ZU1ldGhvZHMucXVlcnlTZWxlY3RvckFsbC5jYWxsKGUsXCI6bm90KC5cIitVLmErXCIpXCIpLGc9MDtnPGUubGVuZ3RoO2crKyl7Zj1lW2ddO1xudmFyIGg9VmcoZik7aCYmYWcoZixoKX19fX19XG5pZighKFJ8fHdpbmRvdy5TaGFkeURPTSYmd2luZG93LlNoYWR5RE9NLmhhbmRsZXNEeW5hbWljU2NvcGluZykpe3ZhciBYZz1uZXcgTXV0YXRpb25PYnNlcnZlcihXZyksWWc9ZnVuY3Rpb24oYSl7WGcub2JzZXJ2ZShhLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pfTtpZih3aW5kb3cuY3VzdG9tRWxlbWVudHMmJiF3aW5kb3cuY3VzdG9tRWxlbWVudHMucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaylZZyhkb2N1bWVudCk7ZWxzZXt2YXIgWmc9ZnVuY3Rpb24oKXtZZyhkb2N1bWVudC5ib2R5KX07d2luZG93LkhUTUxJbXBvcnRzP3dpbmRvdy5IVE1MSW1wb3J0cy53aGVuUmVhZHkoWmcpOnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2lmKFwibG9hZGluZ1wiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZSl7dmFyIGE9ZnVuY3Rpb24oKXtaZygpO2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsYSl9O2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsXG5hKX1lbHNlIFpnKCl9KX1TZz1mdW5jdGlvbigpe1dnKFhnLnRha2VSZWNvcmRzKCkpfX12YXIgJGc9U2c7dmFyIGFoPXt9O3ZhciBiaD1Qcm9taXNlLnJlc29sdmUoKTtmdW5jdGlvbiBjaChhKXtpZihhPWFoW2FdKWEuX2FwcGx5U2hpbUN1cnJlbnRWZXJzaW9uPWEuX2FwcGx5U2hpbUN1cnJlbnRWZXJzaW9ufHwwLGEuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9uPWEuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9ufHwwLGEuX2FwcGx5U2hpbU5leHRWZXJzaW9uPShhLl9hcHBseVNoaW1OZXh0VmVyc2lvbnx8MCkrMX1mdW5jdGlvbiBkaChhKXtyZXR1cm4gYS5fYXBwbHlTaGltQ3VycmVudFZlcnNpb249PT1hLl9hcHBseVNoaW1OZXh0VmVyc2lvbn1mdW5jdGlvbiBlaChhKXthLl9hcHBseVNoaW1WYWxpZGF0aW5nVmVyc2lvbj1hLl9hcHBseVNoaW1OZXh0VmVyc2lvbjthLl92YWxpZGF0aW5nfHwoYS5fdmFsaWRhdGluZz0hMCxiaC50aGVuKGZ1bmN0aW9uKCl7YS5fYXBwbHlTaGltQ3VycmVudFZlcnNpb249YS5fYXBwbHlTaGltTmV4dFZlcnNpb247YS5fdmFsaWRhdGluZz0hMX0pKX07dmFyIGZoPXt9LGdoPW5ldyBSZztmdW5jdGlvbiBXKCl7dGhpcy5GPXt9O3RoaXMuYz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7dmFyIGE9bmV3IGNmO2EucnVsZXM9W107dGhpcy5mPXhnKHRoaXMuYyxuZXcgd2coYSkpO3RoaXMudT0hMTt0aGlzLmI9dGhpcy5hPW51bGx9cj1XLnByb3RvdHlwZTtyLmZsdXNoPWZ1bmN0aW9uKCl7JGcoKX07ci5LYT1mdW5jdGlvbihhKXtyZXR1cm4gS2YoYSl9O3IuWWE9ZnVuY3Rpb24oYSl7cmV0dXJuIElmKGEpfTtyLnByZXBhcmVUZW1wbGF0ZT1mdW5jdGlvbihhLGIsYyl7dGhpcy5wcmVwYXJlVGVtcGxhdGVEb20oYSxiKTt0aGlzLnByZXBhcmVUZW1wbGF0ZVN0eWxlcyhhLGIsYyl9O1xuci5wcmVwYXJlVGVtcGxhdGVTdHlsZXM9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhLl9wcmVwYXJlZCYmIXpmKXtSfHxPZ1tiXXx8KE9nW2JdPVBmKGIpKTthLl9wcmVwYXJlZD0hMDthLm5hbWU9YjthLmV4dGVuZHM9YzthaFtiXT1hO3ZhciBkPVdmKGEpLGU9WGYoZCk7Yz17aXM6YixleHRlbmRzOmN9O2Zvcih2YXIgZj1bXSxnPWEuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVcIiksaD0wO2g8Zy5sZW5ndGg7aCsrKXt2YXIgaz1nW2hdO2lmKGsuaGFzQXR0cmlidXRlKFwic2hhZHktdW5zY29wZWRcIikpe2lmKCFSKXt2YXIgbD1rLnRleHRDb250ZW50O0hmLmhhcyhsKXx8KEhmLmFkZChsKSxsPWsuY2xvbmVOb2RlKCEwKSxkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGwpKTtrLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoayl9fWVsc2UgZi5wdXNoKGsudGV4dENvbnRlbnQpLGsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChrKX1mPWYuam9pbihcIlwiKS50cmltKCkrKGZoW2JdfHxcIlwiKTtcbmhoKHRoaXMpO2lmKCFlKXtpZihnPSFkKWc9Q2YudGVzdChmKXx8QmYudGVzdChmKSxDZi5sYXN0SW5kZXg9MCxCZi5sYXN0SW5kZXg9MDtoPWRmKGYpO2cmJlMmJnRoaXMuYSYmdGhpcy5hLnRyYW5zZm9ybVJ1bGVzKGgsYik7YS5fc3R5bGVBc3Q9aH1nPVtdO1N8fChnPUJnKGEuX3N0eWxlQXN0KSk7aWYoIWcubGVuZ3RofHxTKWg9Uj9hLmNvbnRlbnQ6bnVsbCxiPU9nW2JdfHxudWxsLGQ9ZGcoYyxhLl9zdHlsZUFzdCxudWxsLGQsZT9mOlwiXCIpLGQ9ZC5sZW5ndGg/TWYoZCxjLmlzLGgsYik6bnVsbCxhLl9zdHlsZT1kO2EuYT1nfX07ci5TYT1mdW5jdGlvbihhLGIpe2ZoW2JdPWEuam9pbihcIiBcIil9O3IucHJlcGFyZVRlbXBsYXRlRG9tPWZ1bmN0aW9uKGEsYil7aWYoIXpmKXt2YXIgYz1XZihhKTtSfHxcInNoYWR5XCI9PT1jfHxhLl9kb21QcmVwYXJlZHx8KGEuX2RvbVByZXBhcmVkPSEwLFpmKGEuY29udGVudCxiKSl9fTtcbmZ1bmN0aW9uIGloKGEpe3ZhciBiPVVmKGEpLGM9Yi5pcztiPWIuWDt2YXIgZD1PZ1tjXXx8bnVsbCxlPWFoW2NdO2lmKGUpe2M9ZS5fc3R5bGVBc3Q7dmFyIGY9ZS5hO2U9V2YoZSk7Yj1uZXcgd2coYyxkLGYsYixlKTt4ZyhhLGIpO3JldHVybiBifX1mdW5jdGlvbiBqaChhKXshYS5iJiZ3aW5kb3cuU2hhZHlDU1MmJndpbmRvdy5TaGFkeUNTUy5DdXN0b21TdHlsZUludGVyZmFjZSYmKGEuYj13aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2UsYS5iLnRyYW5zZm9ybUNhbGxiYWNrPWZ1bmN0aW9uKGIpe2EudmEoYil9LGEuYi52YWxpZGF0ZUNhbGxiYWNrPWZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7KGEuYi5lbnF1ZXVlZHx8YS51KSYmYS5mbHVzaEN1c3RvbVN0eWxlcygpfSl9KX1cbmZ1bmN0aW9uIGhoKGEpeyFhLmEmJndpbmRvdy5TaGFkeUNTUyYmd2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbSYmKGEuYT13aW5kb3cuU2hhZHlDU1MuQXBwbHlTaGltLGEuYS5pbnZhbGlkQ2FsbGJhY2s9Y2gpO2poKGEpfVxuci5mbHVzaEN1c3RvbVN0eWxlcz1mdW5jdGlvbigpe2lmKCF6ZiYmKGhoKHRoaXMpLHRoaXMuYikpe3ZhciBhPXRoaXMuYi5wcm9jZXNzU3R5bGVzKCk7aWYodGhpcy5iLmVucXVldWVkJiYhWGYodGhpcy5mLmNzc0J1aWxkKSl7aWYoUyl7aWYoIXRoaXMuZi5jc3NCdWlsZClmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9dGhpcy5iLmdldFN0eWxlRm9yQ3VzdG9tU3R5bGUoYVtiXSk7aWYoYyYmUyYmdGhpcy5hKXt2YXIgZD1LZihjKTtoaCh0aGlzKTt0aGlzLmEudHJhbnNmb3JtUnVsZXMoZCk7Yy50ZXh0Q29udGVudD1JZihkKX19fWVsc2V7a2godGhpcyx0aGlzLmMsdGhpcy5mKTtmb3IoYj0wO2I8YS5sZW5ndGg7YisrKShjPXRoaXMuYi5nZXRTdHlsZUZvckN1c3RvbVN0eWxlKGFbYl0pKSYmTWcoYyx0aGlzLmYuSyk7dGhpcy51JiZ0aGlzLnN0eWxlRG9jdW1lbnQoKX10aGlzLmIuZW5xdWV1ZWQ9ITF9fX07XG5yLnN0eWxlRWxlbWVudD1mdW5jdGlvbihhLGIpe2lmKHpmKXtpZihiKXtWKGEpfHx4ZyhhLG5ldyB3ZyhudWxsKSk7dmFyIGM9VihhKTtjLkc9Yy5HfHx7fTtPYmplY3QuYXNzaWduKGMuRyxiKTtsaCh0aGlzLGEsYyl9fWVsc2UgaWYoYz1WKGEpfHxpaChhKSlpZihhIT09dGhpcy5jJiYodGhpcy51PSEwKSxiJiYoYy5HPWMuR3x8e30sT2JqZWN0LmFzc2lnbihjLkcsYikpLFMpbGgodGhpcyxhLGMpO2Vsc2UgaWYodGhpcy5mbHVzaCgpLGtoKHRoaXMsYSxjKSxjLmxhJiZjLmxhLmxlbmd0aCl7Yj1VZihhKS5pczt2YXIgZDthOntpZihkPWdoLmNhY2hlW2JdKWZvcih2YXIgZT1kLmxlbmd0aC0xOzA8PWU7ZS0tKXt2YXIgZj1kW2VdO2I6e3ZhciBnPWMubGE7Zm9yKHZhciBoPTA7aDxnLmxlbmd0aDtoKyspe3ZhciBrPWdbaF07aWYoZi5KW2tdIT09Yy5LW2tdKXtnPSExO2JyZWFrIGJ9fWc9ITB9aWYoZyl7ZD1mO2JyZWFrIGF9fWQ9dm9pZCAwfWc9ZD9kLnN0eWxlRWxlbWVudDpudWxsO1xuZT1jLkg7KGY9ZCYmZC5IKXx8KGY9dGhpcy5GW2JdPSh0aGlzLkZbYl18fDApKzEsZj1iK1wiLVwiK2YpO2MuSD1mO2Y9Yy5IO2g9Tmc7aD1nP2cudGV4dENvbnRlbnR8fFwiXCI6SmcoaCxhLGMuSyxmKTtrPVYoYSk7dmFyIGw9ay5hO2wmJiFSJiZsIT09ZyYmKGwuX3VzZUNvdW50LS0sMD49bC5fdXNlQ291bnQmJmwucGFyZW50Tm9kZSYmbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGwpKTtSP2suYT8oay5hLnRleHRDb250ZW50PWgsZz1rLmEpOmgmJihnPU1mKGgsZixhLnNoYWRvd1Jvb3Qsay5iKSk6Zz9nLnBhcmVudE5vZGV8fCh6ZyYmLTE8aC5pbmRleE9mKFwiQG1lZGlhXCIpJiYoZy50ZXh0Q29udGVudD1oKSxOZihnLG51bGwsay5iKSk6aCYmKGc9TWYoaCxmLG51bGwsay5iKSk7ZyYmKGcuX3VzZUNvdW50PWcuX3VzZUNvdW50fHwwLGsuYSE9ZyYmZy5fdXNlQ291bnQrKyxrLmE9Zyk7Zj1nO1J8fChnPWMuSCxrPWg9YS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIixlJiYoaz1oLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxzKngtc2NvcGVcXFxccypcIitcbmUrXCJcXFxccypcIixcImdcIiksXCIgXCIpKSxrKz0oaz9cIiBcIjpcIlwiKStcIngtc2NvcGUgXCIrZyxoIT09ayYmU2YoYSxrKSk7ZHx8Z2guc3RvcmUoYixjLkssZixjLkgpfX07XG5mdW5jdGlvbiBsaChhLGIsYyl7dmFyIGQ9VWYoYikuaXM7aWYoYy5HKXt2YXIgZT1jLkcsZjtmb3IoZiBpbiBlKW51bGw9PT1mP2Iuc3R5bGUucmVtb3ZlUHJvcGVydHkoZik6Yi5zdHlsZS5zZXRQcm9wZXJ0eShmLGVbZl0pfWU9YWhbZF07aWYoISghZSYmYiE9PWEuY3x8ZSYmXCJcIiE9PVdmKGUpKSYmZSYmZS5fc3R5bGUmJiFkaChlKSl7aWYoZGgoZSl8fGUuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9uIT09ZS5fYXBwbHlTaGltTmV4dFZlcnNpb24paGgoYSksYS5hJiZhLmEudHJhbnNmb3JtUnVsZXMoZS5fc3R5bGVBc3QsZCksZS5fc3R5bGUudGV4dENvbnRlbnQ9ZGcoYixjLkwpLGVoKGUpO1ImJihhPWIuc2hhZG93Um9vdCkmJihhPWEucXVlcnlTZWxlY3RvcihcInN0eWxlXCIpKSYmKGEudGV4dENvbnRlbnQ9ZGcoYixjLkwpKTtjLkw9ZS5fc3R5bGVBc3R9fVxuZnVuY3Rpb24gbWgoYSxiKXtyZXR1cm4oYj1UZihiKS5nZXRSb290Tm9kZSgpLmhvc3QpP1YoYil8fGloKGIpP2I6bWgoYSxiKTphLmN9ZnVuY3Rpb24ga2goYSxiLGMpe3ZhciBkPW1oKGEsYiksZT1WKGQpLGY9ZS5LO2Q9PT1hLmN8fGZ8fChraChhLGQsZSksZj1lLkspO2E9T2JqZWN0LmNyZWF0ZShmfHxudWxsKTtkPUlnKGIsYy5MLGMuY3NzQnVpbGQpO2I9R2coZS5MLGIpLko7T2JqZWN0LmFzc2lnbihhLGQuTWEsYixkLlVhKTtiPWMuRztmb3IodmFyIGcgaW4gYilpZigoZT1iW2ddKXx8MD09PWUpYVtnXT1lO2c9Tmc7Yj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhKTtmb3IoZT0wO2U8Yi5sZW5ndGg7ZSsrKWQ9YltlXSxhW2RdPUVnKGcsYVtkXSxhKTtjLks9YX1yLnN0eWxlRG9jdW1lbnQ9ZnVuY3Rpb24oYSl7dGhpcy5zdHlsZVN1YnRyZWUodGhpcy5jLGEpfTtcbnIuc3R5bGVTdWJ0cmVlPWZ1bmN0aW9uKGEsYil7dmFyIGM9VGYoYSksZD1jLnNoYWRvd1Jvb3Q7KGR8fGE9PT10aGlzLmMpJiZ0aGlzLnN0eWxlRWxlbWVudChhLGIpO2lmKGE9ZCYmKGQuY2hpbGRyZW58fGQuY2hpbGROb2RlcykpZm9yKGM9MDtjPGEubGVuZ3RoO2MrKyl0aGlzLnN0eWxlU3VidHJlZShhW2NdKTtlbHNlIGlmKGM9Yy5jaGlsZHJlbnx8Yy5jaGlsZE5vZGVzKWZvcihhPTA7YTxjLmxlbmd0aDthKyspdGhpcy5zdHlsZVN1YnRyZWUoY1thXSl9O1xuci52YT1mdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9V2YoYSk7YyE9PXRoaXMuZi5jc3NCdWlsZCYmKHRoaXMuZi5jc3NCdWlsZD1jKTtpZighWGYoYykpe3ZhciBkPUtmKGEpO0pmKGQsZnVuY3Rpb24oYSl7aWYoUil2ZyhhKTtlbHNle3ZhciBkPVU7YS5zZWxlY3Rvcj1hLnBhcnNlZFNlbGVjdG9yO3ZnKGEpO2Euc2VsZWN0b3I9YS5DPWdnKGQsYSxkLmMsdm9pZCAwLHZvaWQgMCl9UyYmXCJcIj09PWMmJihoaChiKSxiLmEmJmIuYS50cmFuc2Zvcm1SdWxlKGEpKX0pO1M/YS50ZXh0Q29udGVudD1JZihkKTp0aGlzLmYuTC5ydWxlcy5wdXNoKGQpfX07ci5nZXRDb21wdXRlZFN0eWxlVmFsdWU9ZnVuY3Rpb24oYSxiKXt2YXIgYztTfHwoYz0oVihhKXx8VihtaCh0aGlzLGEpKSkuS1tiXSk7cmV0dXJuKGM9Y3x8d2luZG93LmdldENvbXB1dGVkU3R5bGUoYSkuZ2V0UHJvcGVydHlWYWx1ZShiKSk/Yy50cmltKCk6XCJcIn07XG5yLlhhPWZ1bmN0aW9uKGEsYil7dmFyIGM9VGYoYSkuZ2V0Um9vdE5vZGUoKTtiPWI/Yi5zcGxpdCgvXFxzLyk6W107Yz1jLmhvc3QmJmMuaG9zdC5sb2NhbE5hbWU7aWYoIWMpe3ZhciBkPWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7aWYoZCl7ZD1kLnNwbGl0KC9cXHMvKTtmb3IodmFyIGU9MDtlPGQubGVuZ3RoO2UrKylpZihkW2VdPT09VS5hKXtjPWRbZSsxXTticmVha319fWMmJmIucHVzaChVLmEsYyk7U3x8KGM9VihhKSkmJmMuSCYmYi5wdXNoKE5nLmEsYy5IKTtTZihhLGIuam9pbihcIiBcIikpfTtyLkZhPWZ1bmN0aW9uKGEpe3JldHVybiBWKGEpfTtyLldhPWZ1bmN0aW9uKGEsYil7YWcoYSxiKX07ci5aYT1mdW5jdGlvbihhLGIpe2FnKGEsYiwhMCl9O3IuVmE9ZnVuY3Rpb24oYSl7cmV0dXJuIFZnKGEpfTtyLklhPWZ1bmN0aW9uKGEpe3JldHVybiBVZyhhKX07Vy5wcm90b3R5cGUuZmx1c2g9Vy5wcm90b3R5cGUuZmx1c2g7Vy5wcm90b3R5cGUucHJlcGFyZVRlbXBsYXRlPVcucHJvdG90eXBlLnByZXBhcmVUZW1wbGF0ZTtcblcucHJvdG90eXBlLnN0eWxlRWxlbWVudD1XLnByb3RvdHlwZS5zdHlsZUVsZW1lbnQ7Vy5wcm90b3R5cGUuc3R5bGVEb2N1bWVudD1XLnByb3RvdHlwZS5zdHlsZURvY3VtZW50O1cucHJvdG90eXBlLnN0eWxlU3VidHJlZT1XLnByb3RvdHlwZS5zdHlsZVN1YnRyZWU7Vy5wcm90b3R5cGUuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlPVcucHJvdG90eXBlLmdldENvbXB1dGVkU3R5bGVWYWx1ZTtXLnByb3RvdHlwZS5zZXRFbGVtZW50Q2xhc3M9Vy5wcm90b3R5cGUuWGE7Vy5wcm90b3R5cGUuX3N0eWxlSW5mb0Zvck5vZGU9Vy5wcm90b3R5cGUuRmE7Vy5wcm90b3R5cGUudHJhbnNmb3JtQ3VzdG9tU3R5bGVGb3JEb2N1bWVudD1XLnByb3RvdHlwZS52YTtXLnByb3RvdHlwZS5nZXRTdHlsZUFzdD1XLnByb3RvdHlwZS5LYTtXLnByb3RvdHlwZS5zdHlsZUFzdFRvU3RyaW5nPVcucHJvdG90eXBlLllhO1cucHJvdG90eXBlLmZsdXNoQ3VzdG9tU3R5bGVzPVcucHJvdG90eXBlLmZsdXNoQ3VzdG9tU3R5bGVzO1xuVy5wcm90b3R5cGUuc2NvcGVOb2RlPVcucHJvdG90eXBlLldhO1cucHJvdG90eXBlLnVuc2NvcGVOb2RlPVcucHJvdG90eXBlLlphO1cucHJvdG90eXBlLnNjb3BlRm9yTm9kZT1XLnByb3RvdHlwZS5WYTtXLnByb3RvdHlwZS5jdXJyZW50U2NvcGVGb3JOb2RlPVcucHJvdG90eXBlLklhO1cucHJvdG90eXBlLnByZXBhcmVBZG9wdGVkQ3NzVGV4dD1XLnByb3RvdHlwZS5TYTtPYmplY3QuZGVmaW5lUHJvcGVydGllcyhXLnByb3RvdHlwZSx7bmF0aXZlU2hhZG93OntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gUn19LG5hdGl2ZUNzczp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFN9fX0pO3ZhciBaPW5ldyBXLG5oLG9oO3dpbmRvdy5TaGFkeUNTUyYmKG5oPXdpbmRvdy5TaGFkeUNTUy5BcHBseVNoaW0sb2g9d2luZG93LlNoYWR5Q1NTLkN1c3RvbVN0eWxlSW50ZXJmYWNlKTtcbndpbmRvdy5TaGFkeUNTUz17U2NvcGluZ1NoaW06WixwcmVwYXJlVGVtcGxhdGU6ZnVuY3Rpb24oYSxiLGMpe1ouZmx1c2hDdXN0b21TdHlsZXMoKTtaLnByZXBhcmVUZW1wbGF0ZShhLGIsYyl9LHByZXBhcmVUZW1wbGF0ZURvbTpmdW5jdGlvbihhLGIpe1oucHJlcGFyZVRlbXBsYXRlRG9tKGEsYil9LHByZXBhcmVUZW1wbGF0ZVN0eWxlczpmdW5jdGlvbihhLGIsYyl7Wi5mbHVzaEN1c3RvbVN0eWxlcygpO1oucHJlcGFyZVRlbXBsYXRlU3R5bGVzKGEsYixjKX0sc3R5bGVTdWJ0cmVlOmZ1bmN0aW9uKGEsYil7Wi5mbHVzaEN1c3RvbVN0eWxlcygpO1ouc3R5bGVTdWJ0cmVlKGEsYil9LHN0eWxlRWxlbWVudDpmdW5jdGlvbihhKXtaLmZsdXNoQ3VzdG9tU3R5bGVzKCk7Wi5zdHlsZUVsZW1lbnQoYSl9LHN0eWxlRG9jdW1lbnQ6ZnVuY3Rpb24oYSl7Wi5mbHVzaEN1c3RvbVN0eWxlcygpO1ouc3R5bGVEb2N1bWVudChhKX0sZmx1c2hDdXN0b21TdHlsZXM6ZnVuY3Rpb24oKXtaLmZsdXNoQ3VzdG9tU3R5bGVzKCl9LFxuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFouZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKGEsYil9LG5hdGl2ZUNzczpTLG5hdGl2ZVNoYWRvdzpSLGNzc0J1aWxkOkFmLGRpc2FibGVSdW50aW1lOnpmfTtuaCYmKHdpbmRvdy5TaGFkeUNTUy5BcHBseVNoaW09bmgpO29oJiYod2luZG93LlNoYWR5Q1NTLkN1c3RvbVN0eWxlSW50ZXJmYWNlPW9oKTsoZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhKXtcIlwiPT1hJiYoZi5jYWxsKHRoaXMpLHRoaXMuaT0hMCk7cmV0dXJuIGEudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiBjKGEpe3ZhciBiPWEuY2hhckNvZGVBdCgwKTtyZXR1cm4gMzI8YiYmMTI3PmImJi0xPT1bMzQsMzUsNjAsNjIsNjMsOTZdLmluZGV4T2YoYik/YTplbmNvZGVVUklDb21wb25lbnQoYSl9ZnVuY3Rpb24gZChhKXt2YXIgYj1hLmNoYXJDb2RlQXQoMCk7cmV0dXJuIDMyPGImJjEyNz5iJiYtMT09WzM0LDM1LDYwLDYyLDk2XS5pbmRleE9mKGIpP2E6ZW5jb2RlVVJJQ29tcG9uZW50KGEpfWZ1bmN0aW9uIGUoYSxlLGcpe2Z1bmN0aW9uIGgoYSl7WC5wdXNoKGEpfXZhciBrPWV8fFwic2NoZW1lIHN0YXJ0XCIseD0wLHA9XCJcIix2PSExLFE9ITEsWD1bXTthOmZvcig7KHZvaWQgMCE9YVt4LTFdfHwwPT14KSYmIXRoaXMuaTspe3ZhciBtPWFbeF07c3dpdGNoKGspe2Nhc2UgXCJzY2hlbWUgc3RhcnRcIjppZihtJiZxLnRlc3QobSkpcCs9bS50b0xvd2VyQ2FzZSgpLFxuaz1cInNjaGVtZVwiO2Vsc2UgaWYoZSl7aChcIkludmFsaWQgc2NoZW1lLlwiKTticmVhayBhfWVsc2V7cD1cIlwiO2s9XCJubyBzY2hlbWVcIjtjb250aW51ZX1icmVhaztjYXNlIFwic2NoZW1lXCI6aWYobSYmSS50ZXN0KG0pKXArPW0udG9Mb3dlckNhc2UoKTtlbHNlIGlmKFwiOlwiPT1tKXt0aGlzLmg9cDtwPVwiXCI7aWYoZSlicmVhayBhO3ZvaWQgMCE9PWxbdGhpcy5oXSYmKHRoaXMuQj0hMCk7az1cImZpbGVcIj09dGhpcy5oP1wicmVsYXRpdmVcIjp0aGlzLkImJmcmJmcuaD09dGhpcy5oP1wicmVsYXRpdmUgb3IgYXV0aG9yaXR5XCI6dGhpcy5CP1wiYXV0aG9yaXR5IGZpcnN0IHNsYXNoXCI6XCJzY2hlbWUgZGF0YVwifWVsc2UgaWYoZSl7dm9pZCAwIT1tJiZoKFwiQ29kZSBwb2ludCBub3QgYWxsb3dlZCBpbiBzY2hlbWU6IFwiK20pO2JyZWFrIGF9ZWxzZXtwPVwiXCI7eD0wO2s9XCJubyBzY2hlbWVcIjtjb250aW51ZX1icmVhaztjYXNlIFwic2NoZW1lIGRhdGFcIjpcIj9cIj09bT8odGhpcy5vPVwiP1wiLGs9XCJxdWVyeVwiKTpcIiNcIj09XG5tPyh0aGlzLnY9XCIjXCIsaz1cImZyYWdtZW50XCIpOnZvaWQgMCE9bSYmXCJcXHRcIiE9bSYmXCJcXG5cIiE9bSYmXCJcXHJcIiE9bSYmKHRoaXMuaWErPWMobSkpO2JyZWFrO2Nhc2UgXCJubyBzY2hlbWVcIjppZihnJiZ2b2lkIDAhPT1sW2cuaF0pe2s9XCJyZWxhdGl2ZVwiO2NvbnRpbnVlfWVsc2UgaChcIk1pc3Npbmcgc2NoZW1lLlwiKSxmLmNhbGwodGhpcyksdGhpcy5pPSEwO2JyZWFrO2Nhc2UgXCJyZWxhdGl2ZSBvciBhdXRob3JpdHlcIjppZihcIi9cIj09bSYmXCIvXCI9PWFbeCsxXSlrPVwiYXV0aG9yaXR5IGlnbm9yZSBzbGFzaGVzXCI7ZWxzZXtoKFwiRXhwZWN0ZWQgLywgZ290OiBcIittKTtrPVwicmVsYXRpdmVcIjtjb250aW51ZX1icmVhaztjYXNlIFwicmVsYXRpdmVcIjp0aGlzLkI9ITA7XCJmaWxlXCIhPXRoaXMuaCYmKHRoaXMuaD1nLmgpO2lmKHZvaWQgMD09bSl7dGhpcy5qPWcuajt0aGlzLm09Zy5tO3RoaXMubD1nLmwuc2xpY2UoKTt0aGlzLm89Zy5vO3RoaXMucz1nLnM7dGhpcy5nPWcuZzticmVhayBhfWVsc2UgaWYoXCIvXCI9PVxubXx8XCJcXFxcXCI9PW0pXCJcXFxcXCI9PW0mJmgoXCJcXFxcIGlzIGFuIGludmFsaWQgY29kZSBwb2ludC5cIiksaz1cInJlbGF0aXZlIHNsYXNoXCI7ZWxzZSBpZihcIj9cIj09bSl0aGlzLmo9Zy5qLHRoaXMubT1nLm0sdGhpcy5sPWcubC5zbGljZSgpLHRoaXMubz1cIj9cIix0aGlzLnM9Zy5zLHRoaXMuZz1nLmcsaz1cInF1ZXJ5XCI7ZWxzZSBpZihcIiNcIj09bSl0aGlzLmo9Zy5qLHRoaXMubT1nLm0sdGhpcy5sPWcubC5zbGljZSgpLHRoaXMubz1nLm8sdGhpcy52PVwiI1wiLHRoaXMucz1nLnMsdGhpcy5nPWcuZyxrPVwiZnJhZ21lbnRcIjtlbHNle2s9YVt4KzFdO3ZhciB5PWFbeCsyXTtpZihcImZpbGVcIiE9dGhpcy5ofHwhcS50ZXN0KG0pfHxcIjpcIiE9ayYmXCJ8XCIhPWt8fHZvaWQgMCE9eSYmXCIvXCIhPXkmJlwiXFxcXFwiIT15JiZcIj9cIiE9eSYmXCIjXCIhPXkpdGhpcy5qPWcuaix0aGlzLm09Zy5tLHRoaXMucz1nLnMsdGhpcy5nPWcuZyx0aGlzLmw9Zy5sLnNsaWNlKCksdGhpcy5sLnBvcCgpO2s9XCJyZWxhdGl2ZSBwYXRoXCI7Y29udGludWV9YnJlYWs7XG5jYXNlIFwicmVsYXRpdmUgc2xhc2hcIjppZihcIi9cIj09bXx8XCJcXFxcXCI9PW0pXCJcXFxcXCI9PW0mJmgoXCJcXFxcIGlzIGFuIGludmFsaWQgY29kZSBwb2ludC5cIiksaz1cImZpbGVcIj09dGhpcy5oP1wiZmlsZSBob3N0XCI6XCJhdXRob3JpdHkgaWdub3JlIHNsYXNoZXNcIjtlbHNle1wiZmlsZVwiIT10aGlzLmgmJih0aGlzLmo9Zy5qLHRoaXMubT1nLm0sdGhpcy5zPWcucyx0aGlzLmc9Zy5nKTtrPVwicmVsYXRpdmUgcGF0aFwiO2NvbnRpbnVlfWJyZWFrO2Nhc2UgXCJhdXRob3JpdHkgZmlyc3Qgc2xhc2hcIjppZihcIi9cIj09bSlrPVwiYXV0aG9yaXR5IHNlY29uZCBzbGFzaFwiO2Vsc2V7aChcIkV4cGVjdGVkICcvJywgZ290OiBcIittKTtrPVwiYXV0aG9yaXR5IGlnbm9yZSBzbGFzaGVzXCI7Y29udGludWV9YnJlYWs7Y2FzZSBcImF1dGhvcml0eSBzZWNvbmQgc2xhc2hcIjprPVwiYXV0aG9yaXR5IGlnbm9yZSBzbGFzaGVzXCI7aWYoXCIvXCIhPW0pe2goXCJFeHBlY3RlZCAnLycsIGdvdDogXCIrbSk7Y29udGludWV9YnJlYWs7Y2FzZSBcImF1dGhvcml0eSBpZ25vcmUgc2xhc2hlc1wiOmlmKFwiL1wiIT1cbm0mJlwiXFxcXFwiIT1tKXtrPVwiYXV0aG9yaXR5XCI7Y29udGludWV9ZWxzZSBoKFwiRXhwZWN0ZWQgYXV0aG9yaXR5LCBnb3Q6IFwiK20pO2JyZWFrO2Nhc2UgXCJhdXRob3JpdHlcIjppZihcIkBcIj09bSl7diYmKGgoXCJAIGFscmVhZHkgc2Vlbi5cIikscCs9XCIlNDBcIik7dj0hMDtmb3IobT0wO208cC5sZW5ndGg7bSsrKXk9cFttXSxcIlxcdFwiPT15fHxcIlxcblwiPT15fHxcIlxcclwiPT15P2goXCJJbnZhbGlkIHdoaXRlc3BhY2UgaW4gYXV0aG9yaXR5LlwiKTpcIjpcIj09eSYmbnVsbD09PXRoaXMuZz90aGlzLmc9XCJcIjooeT1jKHkpLG51bGwhPT10aGlzLmc/dGhpcy5nKz15OnRoaXMucys9eSk7cD1cIlwifWVsc2UgaWYodm9pZCAwPT1tfHxcIi9cIj09bXx8XCJcXFxcXCI9PW18fFwiP1wiPT1tfHxcIiNcIj09bSl7eC09cC5sZW5ndGg7cD1cIlwiO2s9XCJob3N0XCI7Y29udGludWV9ZWxzZSBwKz1tO2JyZWFrO2Nhc2UgXCJmaWxlIGhvc3RcIjppZih2b2lkIDA9PW18fFwiL1wiPT1tfHxcIlxcXFxcIj09bXx8XCI/XCI9PW18fFwiI1wiPT1tKXsyIT1wLmxlbmd0aHx8XG4hcS50ZXN0KHBbMF0pfHxcIjpcIiE9cFsxXSYmXCJ8XCIhPXBbMV0/KDAhPXAubGVuZ3RoJiYodGhpcy5qPWIuY2FsbCh0aGlzLHApLHA9XCJcIiksaz1cInJlbGF0aXZlIHBhdGggc3RhcnRcIik6az1cInJlbGF0aXZlIHBhdGhcIjtjb250aW51ZX1lbHNlXCJcXHRcIj09bXx8XCJcXG5cIj09bXx8XCJcXHJcIj09bT9oKFwiSW52YWxpZCB3aGl0ZXNwYWNlIGluIGZpbGUgaG9zdC5cIik6cCs9bTticmVhaztjYXNlIFwiaG9zdFwiOmNhc2UgXCJob3N0bmFtZVwiOmlmKFwiOlwiIT1tfHxRKWlmKHZvaWQgMD09bXx8XCIvXCI9PW18fFwiXFxcXFwiPT1tfHxcIj9cIj09bXx8XCIjXCI9PW0pe3RoaXMuaj1iLmNhbGwodGhpcyxwKTtwPVwiXCI7az1cInJlbGF0aXZlIHBhdGggc3RhcnRcIjtpZihlKWJyZWFrIGE7Y29udGludWV9ZWxzZVwiXFx0XCIhPW0mJlwiXFxuXCIhPW0mJlwiXFxyXCIhPW0/KFwiW1wiPT1tP1E9ITA6XCJdXCI9PW0mJihRPSExKSxwKz1tKTpoKFwiSW52YWxpZCBjb2RlIHBvaW50IGluIGhvc3QvaG9zdG5hbWU6IFwiK20pO2Vsc2UgaWYodGhpcy5qPWIuY2FsbCh0aGlzLFxucCkscD1cIlwiLGs9XCJwb3J0XCIsXCJob3N0bmFtZVwiPT1lKWJyZWFrIGE7YnJlYWs7Y2FzZSBcInBvcnRcIjppZigvWzAtOV0vLnRlc3QobSkpcCs9bTtlbHNlIGlmKHZvaWQgMD09bXx8XCIvXCI9PW18fFwiXFxcXFwiPT1tfHxcIj9cIj09bXx8XCIjXCI9PW18fGUpe1wiXCIhPXAmJihwPXBhcnNlSW50KHAsMTApLHAhPWxbdGhpcy5oXSYmKHRoaXMubT1wK1wiXCIpLHA9XCJcIik7aWYoZSlicmVhayBhO2s9XCJyZWxhdGl2ZSBwYXRoIHN0YXJ0XCI7Y29udGludWV9ZWxzZVwiXFx0XCI9PW18fFwiXFxuXCI9PW18fFwiXFxyXCI9PW0/aChcIkludmFsaWQgY29kZSBwb2ludCBpbiBwb3J0OiBcIittKTooZi5jYWxsKHRoaXMpLHRoaXMuaT0hMCk7YnJlYWs7Y2FzZSBcInJlbGF0aXZlIHBhdGggc3RhcnRcIjpcIlxcXFxcIj09bSYmaChcIidcXFxcJyBub3QgYWxsb3dlZCBpbiBwYXRoLlwiKTtrPVwicmVsYXRpdmUgcGF0aFwiO2lmKFwiL1wiIT1tJiZcIlxcXFxcIiE9bSljb250aW51ZTticmVhaztjYXNlIFwicmVsYXRpdmUgcGF0aFwiOmlmKHZvaWQgMCE9bSYmXCIvXCIhPW0mJlwiXFxcXFwiIT1cbm0mJihlfHxcIj9cIiE9bSYmXCIjXCIhPW0pKVwiXFx0XCIhPW0mJlwiXFxuXCIhPW0mJlwiXFxyXCIhPW0mJihwKz1jKG0pKTtlbHNle1wiXFxcXFwiPT1tJiZoKFwiXFxcXCBub3QgYWxsb3dlZCBpbiByZWxhdGl2ZSBwYXRoLlwiKTtpZih5PW5bcC50b0xvd2VyQ2FzZSgpXSlwPXk7XCIuLlwiPT1wPyh0aGlzLmwucG9wKCksXCIvXCIhPW0mJlwiXFxcXFwiIT1tJiZ0aGlzLmwucHVzaChcIlwiKSk6XCIuXCI9PXAmJlwiL1wiIT1tJiZcIlxcXFxcIiE9bT90aGlzLmwucHVzaChcIlwiKTpcIi5cIiE9cCYmKFwiZmlsZVwiPT10aGlzLmgmJjA9PXRoaXMubC5sZW5ndGgmJjI9PXAubGVuZ3RoJiZxLnRlc3QocFswXSkmJlwifFwiPT1wWzFdJiYocD1wWzBdK1wiOlwiKSx0aGlzLmwucHVzaChwKSk7cD1cIlwiO1wiP1wiPT1tPyh0aGlzLm89XCI/XCIsaz1cInF1ZXJ5XCIpOlwiI1wiPT1tJiYodGhpcy52PVwiI1wiLGs9XCJmcmFnbWVudFwiKX1icmVhaztjYXNlIFwicXVlcnlcIjplfHxcIiNcIiE9bT92b2lkIDAhPW0mJlwiXFx0XCIhPW0mJlwiXFxuXCIhPW0mJlwiXFxyXCIhPW0mJih0aGlzLm8rPWQobSkpOih0aGlzLnY9XG5cIiNcIixrPVwiZnJhZ21lbnRcIik7YnJlYWs7Y2FzZSBcImZyYWdtZW50XCI6dm9pZCAwIT1tJiZcIlxcdFwiIT1tJiZcIlxcblwiIT1tJiZcIlxcclwiIT1tJiYodGhpcy52Kz1tKX14Kyt9fWZ1bmN0aW9uIGYoKXt0aGlzLnM9dGhpcy5pYT10aGlzLmg9XCJcIjt0aGlzLmc9bnVsbDt0aGlzLm09dGhpcy5qPVwiXCI7dGhpcy5sPVtdO3RoaXMudj10aGlzLm89XCJcIjt0aGlzLkI9dGhpcy5pPSExfWZ1bmN0aW9uIGcoYSxiKXt2b2lkIDA9PT1ifHxiIGluc3RhbmNlb2YgZ3x8KGI9bmV3IGcoU3RyaW5nKGIpKSk7dGhpcy5hPWE7Zi5jYWxsKHRoaXMpO2E9dGhpcy5hLnJlcGxhY2UoL15bIFxcdFxcclxcblxcZl0rfFsgXFx0XFxyXFxuXFxmXSskL2csXCJcIik7ZS5jYWxsKHRoaXMsYSxudWxsLGIpfXZhciBoPSExO3RyeXt2YXIgaz1uZXcgVVJMKFwiYlwiLFwiaHR0cDovL2FcIik7ay5wYXRobmFtZT1cImMlMjBkXCI7aD1cImh0dHA6Ly9hL2MlMjBkXCI9PT1rLmhyZWZ9Y2F0Y2goeCl7fWlmKCFoKXt2YXIgbD1PYmplY3QuY3JlYXRlKG51bGwpO2wuZnRwPVxuMjE7bC5maWxlPTA7bC5nb3BoZXI9NzA7bC5odHRwPTgwO2wuaHR0cHM9NDQzO2wud3M9ODA7bC53c3M9NDQzO3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7bltcIiUyZVwiXT1cIi5cIjtuW1wiLiUyZVwiXT1cIi4uXCI7bltcIiUyZS5cIl09XCIuLlwiO25bXCIlMmUlMmVcIl09XCIuLlwiO3ZhciBxPS9bYS16QS1aXS8sST0vW2EtekEtWjAtOVxcK1xcLVxcLl0vO2cucHJvdG90eXBlPXt0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiB0aGlzLmhyZWZ9LGdldCBocmVmKCl7aWYodGhpcy5pKXJldHVybiB0aGlzLmE7dmFyIGE9XCJcIjtpZihcIlwiIT10aGlzLnN8fG51bGwhPXRoaXMuZylhPXRoaXMucysobnVsbCE9dGhpcy5nP1wiOlwiK3RoaXMuZzpcIlwiKStcIkBcIjtyZXR1cm4gdGhpcy5wcm90b2NvbCsodGhpcy5CP1wiLy9cIithK3RoaXMuaG9zdDpcIlwiKSt0aGlzLnBhdGhuYW1lK3RoaXMubyt0aGlzLnZ9LHNldCBocmVmKGEpe2YuY2FsbCh0aGlzKTtlLmNhbGwodGhpcyxhKX0sZ2V0IHByb3RvY29sKCl7cmV0dXJuIHRoaXMuaCtcblwiOlwifSxzZXQgcHJvdG9jb2woYSl7dGhpcy5pfHxlLmNhbGwodGhpcyxhK1wiOlwiLFwic2NoZW1lIHN0YXJ0XCIpfSxnZXQgaG9zdCgpe3JldHVybiB0aGlzLmk/XCJcIjp0aGlzLm0/dGhpcy5qK1wiOlwiK3RoaXMubTp0aGlzLmp9LHNldCBob3N0KGEpeyF0aGlzLmkmJnRoaXMuQiYmZS5jYWxsKHRoaXMsYSxcImhvc3RcIil9LGdldCBob3N0bmFtZSgpe3JldHVybiB0aGlzLmp9LHNldCBob3N0bmFtZShhKXshdGhpcy5pJiZ0aGlzLkImJmUuY2FsbCh0aGlzLGEsXCJob3N0bmFtZVwiKX0sZ2V0IHBvcnQoKXtyZXR1cm4gdGhpcy5tfSxzZXQgcG9ydChhKXshdGhpcy5pJiZ0aGlzLkImJmUuY2FsbCh0aGlzLGEsXCJwb3J0XCIpfSxnZXQgcGF0aG5hbWUoKXtyZXR1cm4gdGhpcy5pP1wiXCI6dGhpcy5CP1wiL1wiK3RoaXMubC5qb2luKFwiL1wiKTp0aGlzLmlhfSxzZXQgcGF0aG5hbWUoYSl7IXRoaXMuaSYmdGhpcy5CJiYodGhpcy5sPVtdLGUuY2FsbCh0aGlzLGEsXCJyZWxhdGl2ZSBwYXRoIHN0YXJ0XCIpKX0sZ2V0IHNlYXJjaCgpe3JldHVybiB0aGlzLml8fFxuIXRoaXMub3x8XCI/XCI9PXRoaXMubz9cIlwiOnRoaXMub30sc2V0IHNlYXJjaChhKXshdGhpcy5pJiZ0aGlzLkImJih0aGlzLm89XCI/XCIsXCI/XCI9PWFbMF0mJihhPWEuc2xpY2UoMSkpLGUuY2FsbCh0aGlzLGEsXCJxdWVyeVwiKSl9LGdldCBoYXNoKCl7cmV0dXJuIHRoaXMuaXx8IXRoaXMudnx8XCIjXCI9PXRoaXMudj9cIlwiOnRoaXMudn0sc2V0IGhhc2goYSl7dGhpcy5pfHwoYT8odGhpcy52PVwiI1wiLFwiI1wiPT1hWzBdJiYoYT1hLnNsaWNlKDEpKSxlLmNhbGwodGhpcyxhLFwiZnJhZ21lbnRcIikpOnRoaXMudj1cIlwiKX0sZ2V0IG9yaWdpbigpe3ZhciBhO2lmKHRoaXMuaXx8IXRoaXMuaClyZXR1cm5cIlwiO3N3aXRjaCh0aGlzLmgpe2Nhc2UgXCJkYXRhXCI6Y2FzZSBcImZpbGVcIjpjYXNlIFwiamF2YXNjcmlwdFwiOmNhc2UgXCJtYWlsdG9cIjpyZXR1cm5cIm51bGxcIn1yZXR1cm4oYT10aGlzLmhvc3QpP3RoaXMuaCtcIjovL1wiK2E6XCJcIn19O3ZhciB2PWEuVVJMO3YmJihnLmNyZWF0ZU9iamVjdFVSTD1mdW5jdGlvbihhKXtyZXR1cm4gdi5jcmVhdGVPYmplY3RVUkwuYXBwbHkodixcbmFyZ3VtZW50cyl9LGcucmV2b2tlT2JqZWN0VVJMPWZ1bmN0aW9uKGEpe3YucmV2b2tlT2JqZWN0VVJMKGEpfSk7YS5VUkw9Z319KSh3aW5kb3cpO09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTm9kZS5wcm90b3R5cGUsXCJiYXNlVVJJXCIpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsXCJiYXNlVVJJXCIse2dldDpmdW5jdGlvbigpe3ZhciBhPSh0aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMpLnF1ZXJ5U2VsZWN0b3IoXCJiYXNlW2hyZWZdXCIpO3JldHVybiBhJiZhLmhyZWZ8fHdpbmRvdy5sb2NhdGlvbi5ocmVmfSxjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMH0pO3ZhciBwaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7cGgudGV4dENvbnRlbnQ9XCJib2R5IHt0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UtaW4gMC4yczsgfSBcXG5ib2R5W3VucmVzb2x2ZWRdIHtvcGFjaXR5OiAwOyBkaXNwbGF5OiBibG9jazsgb3ZlcmZsb3c6IGhpZGRlbjsgcG9zaXRpb246IHJlbGF0aXZlOyB9IFxcblwiO3ZhciBxaD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKTtxaC5pbnNlcnRCZWZvcmUocGgscWguZmlyc3RDaGlsZCk7dmFyIHJoPXdpbmRvdy5jdXN0b21FbGVtZW50cyxzaD0hMSx0aD1udWxsO3JoLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2smJnJoLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2soZnVuY3Rpb24oYSl7dGg9YTtzaCYmYSgpfSk7ZnVuY3Rpb24gdWgoKXt3aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudC5ib290c3RyYXAmJndpbmRvdy5IVE1MVGVtcGxhdGVFbGVtZW50LmJvb3RzdHJhcCh3aW5kb3cuZG9jdW1lbnQpO3RoJiZ0aCgpO3NoPSEwO3dpbmRvdy5XZWJDb21wb25lbnRzLnJlYWR5PSEwO2RvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiV2ViQ29tcG9uZW50c1JlYWR5XCIse2J1YmJsZXM6ITB9KSl9XG5cImNvbXBsZXRlXCIhPT1kb2N1bWVudC5yZWFkeVN0YXRlPyh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIix1aCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIix1aCk7dWgoKX0pKTp1aCgpO30pLmNhbGwodGhpcyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdlYmNvbXBvbmVudHMtYnVuZGxlLmpzLm1hcFxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaXZlLWJ1dHRvbiwgbGl2ZS1zbGlkZXIsIGxpdmUtZGlhbCwgbGl2ZS10b2dnbGUsIGxpdmUtdGV4dCwgbGl2ZS1udW1ib3gsIGxpdmUtdGFiLCBsaXZlLW1ldGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0Jhc2Uuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9CYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0Jhc2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IFwiLi9CYXNlLnNjc3NcIjtcbmltcG9ydCB7IHRvTUlESSB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBMaXZlQ29tcG9uZW50Q2hhbmdlRXZlbnQgfSBmcm9tIFwiLi9DaGFuZ2VFdmVudFwiO1xuXG5leHBvcnQgY2xhc3MgTGl2ZUJhc2VDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgcm9vdDogU2hhZG93Um9vdDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xuICAgICAgICB0aGlzLnJvb3QuaW5uZXJIVE1MID0gdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlQ29tcG9uZW50PFQgZXh0ZW5kcyBMaXZlUGFyYW1zPiBleHRlbmRzIExpdmVCYXNlQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcGFyYW1zOiBMaXZlUGFyYW1zID0ge1xuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICBmb2N1czogZmFsc2UsXG4gICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgaGVpZ2h0OiAxNSxcbiAgICAgICAgc2hvcnRuYW1lOiBcIlwiLFxuICAgICAgICBsb25nbmFtZTogXCJcIixcbiAgICAgICAgb3JkZXI6IDAsXG4gICAgICAgIGxpbmtuYW1lczogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwiZmxvYXRcIixcbiAgICAgICAgbW1pbjogMCxcbiAgICAgICAgbW1heDogMSxcbiAgICAgICAgZW51bTogW10sXG4gICAgICAgIGVudW1faWNvbnM6IFtdLFxuICAgICAgICBtb2Rtb2RlOiBcIm5vbmVcIixcbiAgICAgICAgaW5pdGlhbF9lbmFibGU6IGZhbHNlLFxuICAgICAgICBpbml0aWFsOiBbMF0sXG4gICAgICAgIHVuaXRzdHlsZTogXCJmbG9hdFwiLFxuICAgICAgICB1bml0czogXCJcIixcbiAgICAgICAgZXhwb25lbnQ6IDEsXG4gICAgICAgIHN0ZXA6IDAsXG4gICAgICAgIHN0ZXBzOiAwLFxuICAgICAgICBzcGVlZGxpbTogNSxcbiAgICAgICAgZGVmZXI6IGZhbHNlLFxuICAgICAgICBpbnZpc2libGU6IFwiYXV0b21hdGVkXCIsXG4gICAgICAgIG1hcHBhYmxlOiB0cnVlXG4gICAgfVxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5wYXJhbXMpO1xuICAgIH1cbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIGlzQ29ubmVjdGVkUG9seWZpbGw6IGJvb2xlYW47XG4gICAgcGFyYW1zOiBUO1xuXG4gICAgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVLZXlVcCA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVUb3VjaFN0YXJ0ID0gKGU6IFRvdWNoRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVdoZWVsID0gKGU6IFdoZWVsRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZUNsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZU1vdXNlRG93biA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jYW52YXMuZm9jdXMoKTtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBmcm9tWCA9IGUucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgIGNvbnN0IGZyb21ZID0gZS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzLnBhcmFtcy52YWx1ZTtcbiAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyRG93bih7IHg6IGZyb21YLCB5OiBmcm9tWSwgb3JpZ2luYWxFdmVudDogZSB9KTtcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBlLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGUucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlckRyYWcoeyBwcmV2VmFsdWUsIHgsIHksIGZyb21YLCBmcm9tWSwgbW92ZW1lbnRYOiBlLm1vdmVtZW50WCwgbW92ZW1lbnRZOiBlLm1vdmVtZW50WSwgb3JpZ2luYWxFdmVudDogZSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VVcCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBlLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJVcCh7IHgsIHksIG9yaWdpbmFsRXZlbnQ6IGUgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcbiAgICB9O1xuICAgIGhhbmRsZU1vdXNlT3ZlciA9IChlOiBNb3VzZUV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVNb3VzZU91dCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVDb250ZXh0TWVudSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVQb2ludGVyRG93biA9IChlOiBQb2ludGVyRG93bkV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoZTogUG9pbnRlclVwRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZUZvY3VzSW4gPSAoZTogRm9jdXNFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLnBhcmFtcy5mb2N1cyA9IHRydWU7XG4gICAgICAgIHRoaXMucGFpbnQoKTtcbiAgICB9XG4gICAgaGFuZGxlRm9jdXNPdXQgPSAoZTogRm9jdXNFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLnBhcmFtcy5mb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhaW50KCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5oYW5kbGVLZXlVcCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCB0aGlzLmhhbmRsZVdoZWVsKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljayk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmhhbmRsZU1vdXNlRG93biwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHRoaXMuaGFuZGxlTW91c2VPdmVyKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgdGhpcy5oYW5kbGVNb3VzZU91dCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgdGhpcy5oYW5kbGVGb2N1c0luKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgdGhpcy5oYW5kbGVGb2N1c091dCk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5yb290LmNoaWxkcmVuWzBdIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgTGl2ZUNvbXBvbmVudCkucGFyYW1zIGFzIFQ7XG4gICAgfVxuICAgIGdldCBkaXNwbGF5VmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIHR5cGUsIHVuaXRzdHlsZSwgdW5pdHMgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiB0aGlzLnBhcmFtcy5lbnVtW3ZhbHVlXTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJpbnRcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQoMCk7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiZmxvYXRcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwidGltZVwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgbXNcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJoZXJ0elwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgSHpcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJkZWNpYmVsXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiBkQlwiO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcIiVcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiICVcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJwYW5cIikgcmV0dXJuIHZhbHVlID09PSAwID8gXCJDXCIgOiAodHlwZSA9PT0gXCJpbnRcIiA/IE1hdGguYWJzKHZhbHVlKSA6IE1hdGguYWJzKHZhbHVlKS50b0ZpeGVkKDIpKSArICh2YWx1ZSA8IDAgPyBcIiBMXCIgOiBcIiBSXCIpO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcInNlbWl0b25lc1wiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgc3RcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJtaWRpXCIpIHJldHVybiB0b01JREkodmFsdWUpO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcImN1c3RvbVwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgXCIgKyB1bml0cztcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJuYXRpdmVcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKTtcbiAgICAgICAgcmV0dXJuIFwiTi9BXCI7XG4gICAgfVxuICAgIGZldGNoQXR0cmlidXRlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vdC5ob3N0LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLnJvb3QuaG9zdC5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gYXR0cjtcbiAgICAgICAgICAgICh0aGlzLnBhcmFtcyBhcyBhbnkpW25hbWVdID0gdmFsdWUubWF0Y2goL15bKy1dPyhcXGQqXFwuKT9cXGQrJC8pID8gK3ZhbHVlIDogdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGtleTogc3RyaW5nLCBvbGRWYWx1ZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZFBvbHlmaWxsKSByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgfHwgdmFsdWUgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRQYXJhbVZhbHVlKGtleSwgdmFsdWUubWF0Y2goL15bKy1dPyhcXGQqXFwuKT9cXGQrJC8pID8gK3ZhbHVlIDogdmFsdWUpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5mZXRjaEF0dHJpYnV0ZSgpO1xuICAgICAgICB0aGlzLnBhaW50KCk7XG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWRQb2x5ZmlsbCA9IHRydWU7XG4gICAgfVxuICAgIHNldFBhcmFtVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIHRoaXMucGFyYW1zKSkgcmV0dXJuO1xuICAgICAgICAodGhpcy5wYXJhbXMgYXMgYW55KVtrZXldID0gdmFsdWU7XG4gICAgICAgIGlmIChrZXkgPT09IFwidmFsdWVcIikgdGhpcy5jaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5wYWludCgpO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIHZhbHVlKTtcbiAgICB9XG4gICAgY2hhbmdlKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IExpdmVDb21wb25lbnRDaGFuZ2VFdmVudChcImNoYW5nZVwiLCB7IGRldGFpbDogeyB2YWx1ZTogdGhpcy5wYXJhbXMudmFsdWUsIGRpc3BsYXlWYWx1ZTogdGhpcy5kaXNwbGF5VmFsdWUgfSB9KSk7XG4gICAgfVxuICAgIHBhaW50KCkge31cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAnPGNhbnZhcyB0YWJpbmRleD1cIjFcIiBzdHlsZT1cIm91dGxpbmU6IG5vbmU7XCI+PC9jYW52YXM+JztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZUJ1dHRvblBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIGFjdGl2ZWJnY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmViZ29uY29sb3I6IHN0cmluZztcbiAgICBiZ2NvbG9yOiBzdHJpbmc7XG4gICAgYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVCdXR0b24gZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVCdXR0b25QYXJhbXM+IHtcbiAgICBzdGF0aWMgZ2V0IHBhcmFtcygpOiBMaXZlQnV0dG9uUGFyYW1zIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnBhcmFtcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLmJ1dHRvblwiLFxuICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgaGVpZ2h0OiAxNSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yOiBcInJnYmEoMTA5LCAyMTUsIDI1NSwgMSlcIixcbiAgICAgICAgICAgIGJnY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgYmdvbmNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgZm9jdXMsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcblxuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IDAuNTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjdHgubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQmdDb2xvciA9IGFjdGl2ZSA/ICh2YWx1ZSA/IGFjdGl2ZWJnb25jb2xvciA6IGFjdGl2ZWJnY29sb3IpIDogKHZhbHVlID8gYmdvbmNvbG9yIDogYmdjb2xvcik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkJvcmRlckNvbG9yID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJ1dHRvbkJnQ29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmVsbGlwc2Uod2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNSwgd2lkdGggKiAwLjUgLSAyICogYm9yZGVyV2lkdGgsIGhlaWdodCAqIDAuNSAtIDIgKiBib3JkZXJXaWR0aCwgMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBidXR0b25Cb3JkZXJDb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiAhdGhpcy5faW5Ub3VjaCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCAwKSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIDEpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgMCk7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgTGl2ZUNvbXBvbmVudENoYW5nZUV2ZW50IGV4dGVuZHMgQ3VzdG9tRXZlbnQ8eyB2YWx1ZTogbnVtYmVyOyBkaXNwbGF5VmFsdWU6IHN0cmluZyB9PiB7fVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcbmltcG9ydCB7IHRvUmFkLCByb3VuZGVkUmVjdCwgZmlsbFJvdW5kZWRSZWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuaW50ZXJmYWNlIExpdmVEaWFsUGFyYW1zIGV4dGVuZHMgTGl2ZVBhcmFtcyB7XG4gICAgZm9udG5hbWU6IHN0cmluZztcbiAgICBmb250c2l6ZTogbnVtYmVyO1xuICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBzaG93bmFtZTogYm9vbGVhbjtcbiAgICBzaG93bnVtYmVyOiBib29sZWFuO1xuICAgIGFwcGVhcmFuY2U6IFwidmVydGljYWxcIiB8IFwidGlueVwiIHwgXCJwYW5lbFwiO1xuICAgIHRyaWFuZ2xlOiBib29sZWFuO1xuICAgIGJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZWRpYWxjb2xvcjogc3RyaW5nO1xuICAgIGRpYWxjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZW5lZWRsZWNvbG9yOiBzdHJpbmc7XG4gICAgbmVlZGxlY29sb3I6IHN0cmluZztcbiAgICBwYW5lbGNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dGNvbG9yOiBzdHJpbmc7XG4gICAgdHJpYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICB0cmljb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlRGlhbCBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZURpYWxQYXJhbXM+IHtcbiAgICBzdGF0aWMgZ2V0IHBhcmFtcygpOiBMaXZlRGlhbFBhcmFtcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wYXJhbXMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS5kaWFsXCIsXG4gICAgICAgICAgICB3aWR0aDogNDUsXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1LFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMixcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIHRyaWFuZ2xlOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3duYW1lOiB0cnVlLFxuICAgICAgICAgICAgc2hvd251bWJlcjogdHJ1ZSxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlZGlhbGNvbG9yOiBcInJnYmEoMTA5LCAyMTUsIDI1NSwgMSlcIixcbiAgICAgICAgICAgIGRpYWxjb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmVuZWVkbGVjb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICBuZWVkbGVjb2xvcjogXCJyZ2JhKDEwNSwgMTA1LCAxMDUsIDEpXCIsXG4gICAgICAgICAgICBwYW5lbGNvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmlib3JkZXJjb2xvcjogXCJyZ2JhKDUwLCA1MCwgNTAsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICBtbWluOiAwLFxuICAgICAgICAgICAgbW1heDogMTI3LFxuICAgICAgICAgICAgdHlwZTogXCJpbnRcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBfaW5Ub3VjaDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGludGVyYWN0aW9uUmVjdDogbnVtYmVyW10gPSBbMCwgMCwgMCwgMF07XG5cbiAgICBnZXQgdHJ1ZVN0ZXBzKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHN0ZXBzLCBzdGVwIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgZnVsbCA9IDEwMDtcbiAgICAgICAgY29uc3QgbWF4U3RlcHMgPSB0eXBlID09PSBcImVudW1cIiA/IHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IG1tYXggLSBtbWluIDogZnVsbDtcbiAgICAgICAgaWYgKHN0ZXApIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBNYXRoLnJvdW5kKHN0ZXApKSwgbWF4U3RlcHMpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIHN0ZXApLCBtYXhTdGVwcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ZXBzKSByZXR1cm4gTWF0aC5taW4oc3RlcHMsIG1heFN0ZXBzKTtcbiAgICAgICAgcmV0dXJuIG1heFN0ZXBzO1xuICAgIH1cbiAgICBnZXQgZGlzdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgdmFsdWUgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gXCJlbnVtXCIgPyB2YWx1ZSAvIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogKHZhbHVlIC0gbW1pbikgLyAobW1heCAtIG1taW4pO1xuICAgIH1cbiAgICBnZXQgc3RlcFJhbmdlKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHN0ZXAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBmdWxsID0gMTAwO1xuICAgICAgICBpZiAoc3RlcCkgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gZnVsbCAvIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IE1hdGgucm91bmQoc3RlcCkgLyAobW1heCAtIG1taW4pICogZnVsbCA6IHN0ZXAgLyAobW1heCAtIG1taW4pICogZnVsbDtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIHJldHVybiBmdWxsIC8gdHJ1ZVN0ZXBzO1xuICAgIH1cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIGFwcGVhcmFuY2UsXG4gICAgICAgICAgICB0cmlhbmdsZSxcbiAgICAgICAgICAgIHNob3duYW1lLFxuICAgICAgICAgICAgc2hvd251bWJlcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHBhbmVsY29sb3IsXG4gICAgICAgICAgICBhY3RpdmVuZWVkbGVjb2xvcixcbiAgICAgICAgICAgIG5lZWRsZWNvbG9yLFxuICAgICAgICAgICAgYWN0aXZlZGlhbGNvbG9yLFxuICAgICAgICAgICAgZGlhbGNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0cmljb2xvcixcbiAgICAgICAgICAgIHNob3J0bmFtZVxuICAgICAgICB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2U7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcblxuXG4gICAgICAgIGNvbnN0IHRyaWFuZ2xlSGVpZ2h0ID0gNDtcbiAgICAgICAgY29uc3QgdHJpYW5nbGVMaW5lV2lkdGggPSAwLjY7XG5cbiAgICAgICAgbGV0IHN0YXJ0OiBudW1iZXI7XG4gICAgICAgIGxldCBlbmQ6IG51bWJlcjtcbiAgICAgICAgbGV0IHZhbFBvczogbnVtYmVyO1xuICAgICAgICBsZXQgZGlhbEhlaWdodDogbnVtYmVyO1xuXG4gICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInRpbnlcIikge1xuICAgICAgICAgICAgZGlhbEhlaWdodCA9IDE4O1xuICAgICAgICAgICAgc3RhcnQgPSAtMyAqIE1hdGguUEkgKiAwLjU7XG4gICAgICAgICAgICBlbmQgPSAwO1xuICAgICAgICAgICAgdmFsUG9zID0gc3RhcnQgKyB0b1JhZCh0aGlzLmRpc3RhbmNlICogMjcwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpYWxIZWlnaHQgPSAyNTtcbiAgICAgICAgICAgIHN0YXJ0ID0gTWF0aC5QSSAtIDMgKiBNYXRoLlBJIC8gODtcbiAgICAgICAgICAgIGVuZCA9IDIgKiBNYXRoLlBJICsgMyAqIE1hdGguUEkgLyA4O1xuICAgICAgICAgICAgdmFsUG9zID0gc3RhcnQgKyB0b1JhZCh0aGlzLmRpc3RhbmNlICogMzE1KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkaWFsUmFkaXVzID0gZGlhbEhlaWdodCAqIDAuNTtcblxuICAgICAgICBsZXQgZGlhbENlbnRlclggPSB3aWR0aCAqIDAuNTtcbiAgICAgICAgbGV0IGRpYWxDZW50ZXJZID0gaGVpZ2h0ICogMC41ICsgMTtcbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwicGFuZWxcIikge1xuICAgICAgICAgICAgZGlhbENlbnRlclkgKz0gMTA7XG4gICAgICAgIH0gZWxzZSBpZiAoYXBwZWFyYW5jZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICBpZiAoc2hvd251bWJlcikgZGlhbENlbnRlclkgLT0gZm9udHNpemUgLSA1O1xuICAgICAgICAgICAgaWYgKHNob3duYW1lKSBkaWFsQ2VudGVyWSArPSBmb250c2l6ZSAtIDU7XG4gICAgICAgICAgICBpZiAodHJpYW5nbGUpIGRpYWxDZW50ZXJZICs9IHRyaWFuZ2xlSGVpZ2h0IC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChhcHBlYXJhbmNlID09PSBcInRpbnlcIikge1xuICAgICAgICAgICAgaWYgKHNob3duYW1lKSB7XG4gICAgICAgICAgICAgICAgZGlhbENlbnRlclkgKz0gNjtcbiAgICAgICAgICAgICAgICBkaWFsQ2VudGVyWCA9IDEwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0ID0gWzAsIGRpYWxDZW50ZXJZIC0gZGlhbEhlaWdodCAqIDAuNSwgd2lkdGgsIGRpYWxIZWlnaHRdO1xuICAgICAgICBjb25zdCBhcmNTdGFydFggPSBkaWFsQ2VudGVyWCArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5jb3Moc3RhcnQpKTtcbiAgICAgICAgY29uc3QgYXJjU3RhcnRZID0gZGlhbENlbnRlclkgKyAoZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguc2luKHN0YXJ0KSk7XG4gICAgICAgIGNvbnN0IGFyY0VuZFggPSBkaWFsQ2VudGVyWCArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5jb3MoZW5kKSk7XG4gICAgICAgIGNvbnN0IGFyY0VuZFkgPSBkaWFsQ2VudGVyWSArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5zaW4oZW5kKSk7XG4gICAgICAgIGNvbnN0IHZhbHVlUG9zWCA9IGRpYWxDZW50ZXJYICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLmNvcyh2YWxQb3MpKTtcbiAgICAgICAgY29uc3QgdmFsdWVQb3NZID0gZGlhbENlbnRlclkgKyAoZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguc2luKHZhbFBvcykpO1xuICAgICAgICBjb25zdCBlbmRDYXBSYWRpdXMgPSAxO1xuICAgICAgICBjb25zdCBsaW5lV2lkdGggPSAyO1xuICAgICAgICBsZXQgcGFuZWxPZmZzZXQgPSAwO1xuXG4gICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInBhbmVsXCIpIHtcbiAgICAgICAgICAgIHBhbmVsT2Zmc2V0ID0gNTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGZvY3VzID8gZm9jdXNib3JkZXJjb2xvciA6IGJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDAuNDtcbiAgICAgICAgICAgIHJvdW5kZWRSZWN0KGN0eCwgMSwgMSwgd2lkdGggLSAyLCBoZWlnaHQgLSAyLCA1KTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBwYW5lbGNvbG9yO1xuICAgICAgICAgICAgZmlsbFJvdW5kZWRSZWN0KGN0eCwgMS4yLCAxLjIsIHdpZHRoIC0gMi40LCAzMCAtIDAuNCwgWzUsIDUsIDAsIDBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGFjdGl2ZSA/IGFjdGl2ZW5lZWRsZWNvbG9yIDogbmVlZGxlY29sb3I7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjdHguc3Ryb2tlU3R5bGU7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgIC8vIGRyYXcgYmFja2dyb3VuZCBhcmMgZW5kY2Fwc1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoYXJjU3RhcnRYLCBhcmNTdGFydFksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoYXJjRW5kWCwgYXJjRW5kWSwgZW5kQ2FwUmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIC8vIGRyYXcgYmFja2dyb3VuZCBhcmNcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSwgZGlhbFJhZGl1cywgc3RhcnQsIGVuZCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAvLyBkcmF3IHZhbHVlIGFyYywgd2hpY2ggY2hhbmdlcyBpZiB0cmlhbmdsZSBpcyBlbmFibGVkXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGFjdGl2ZSA/IGFjdGl2ZWRpYWxjb2xvciA6IGRpYWxjb2xvcjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGN0eC5zdHJva2VTdHlsZTtcbiAgICAgICAgaWYgKHRyaWFuZ2xlKSB7XG4gICAgICAgICAgICBjb25zdCBtaWRwb2ludCA9IChzdGFydCArIGVuZCkgKiAwLjU7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBhY3RpdmUgPyBhY3RpdmVkaWFsY29sb3IgOiBkaWFsY29sb3I7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiAwLjUpIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBkaWFsUmFkaXVzLCBtaWRwb2ludCwgdmFsUG9zKTtcbiAgICAgICAgICAgIGVsc2UgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGRpYWxSYWRpdXMsIHZhbFBvcywgbWlkcG9pbnQpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZHJhdyB2YWx1ZSBhcmMgZW5kY2FwXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKGFyY1N0YXJ0WCwgYXJjU3RhcnRZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAvLyBkcmF3IHZhbHVlIGFyY1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGRpYWxSYWRpdXMsIHN0YXJ0LCB2YWxQb3MpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXcgZGlhbFxuICAgICAgICAvLyBkcmF3IGRpYWwgcm91bmQgZW5kY2Fwc1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBhY3RpdmUgPyBhY3RpdmVuZWVkbGVjb2xvciA6IG5lZWRsZWNvbG9yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3R4LnN0cm9rZVN0eWxlO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHZhbHVlUG9zWCwgdmFsdWVQb3NZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gZHJhdyBkaWFsIGxpbmVcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSk7XG4gICAgICAgIGN0eC5saW5lVG8odmFsdWVQb3NYLCB2YWx1ZVBvc1kpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIGFkZCB0ZXh0IGlmIGl0IGlzIGVuYWJsZWRcbiAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICBpZiAoc2hvd25hbWUpIHtcbiAgICAgICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInRpbnlcIikge1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoc2hvcnRuYW1lLCAwLCBwYW5lbE9mZnNldCArIGZvbnRzaXplLCB3aWR0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChzaG9ydG5hbWUsIHdpZHRoICogMC41LCBwYW5lbE9mZnNldCArIGZvbnRzaXplLCB3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dudW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbnlPZmZzZXQgPSBhcHBlYXJhbmNlID09PSBcInRpbnlcIiA/IDEyIDogMDtcbiAgICAgICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInRpbnlcIikge1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5kaXNwbGF5VmFsdWUsIHRpbnlPZmZzZXQsIGhlaWdodCAtIHBhbmVsT2Zmc2V0LCB3aWR0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmRpc3BsYXlWYWx1ZSwgd2lkdGggKiAwLjUsIGhlaWdodCAtIHBhbmVsT2Zmc2V0LCB3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZHJhdyB0cmlhbmdsZSBpZiBpdCBpcyBlbmFibGVkXG4gICAgICAgIGlmICh0cmlhbmdsZSkge1xuICAgICAgICAgICAgaWYgKCFkaXN0YW5jZSkgY3R4LmZpbGxTdHlsZSA9IHRyaWNvbG9yO1xuICAgICAgICAgICAgZWxzZSBpZiAoIWFjdGl2ZSkgY3R4LmZpbGxTdHlsZSA9IGRpYWxjb2xvcjtcbiAgICAgICAgICAgIGVsc2UgY3R4LmZpbGxTdHlsZSA9IGFjdGl2ZWRpYWxjb2xvcjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInRpbnlcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpcFBvc2l0aW9uWCA9IGRpYWxDZW50ZXJYICsgZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguY29zKC0zICogTWF0aC5QSSAvIDQpIC0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXBQb3NpdGlvblkgPSBkaWFsQ2VudGVyWSArIGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLnNpbigtMyAqIE1hdGguUEkgLyA0KSAtIDE7XG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aXBQb3NpdGlvblgsIHRpcFBvc2l0aW9uWSk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh0aXBQb3NpdGlvblggLSB0cmlhbmdsZUhlaWdodCwgdGlwUG9zaXRpb25ZKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHRpcFBvc2l0aW9uWCwgdGlwUG9zaXRpb25ZIC0gdHJpYW5nbGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odGlwUG9zaXRpb25YLCB0aXBQb3NpdGlvblkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSAtIGRpYWxSYWRpdXMgLSAxKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKGRpYWxDZW50ZXJYIC0gdHJpYW5nbGVIZWlnaHQsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhkaWFsQ2VudGVyWCArIHRyaWFuZ2xlSGVpZ2h0LCBkaWFsQ2VudGVyWSAtIGRpYWxSYWRpdXMgLSAxIC0gdHJpYW5nbGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRyaWJvcmRlcmNvbG9yIHx8IFwidHJhbnNwYXJlbnRcIjtcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSB0cmlhbmdsZUxpbmVXaWR0aDtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRWYWx1ZUZyb21EZWx0YShlOiBQb2ludGVyRHJhZ0V2ZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1pbiwgbW1heCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IHN0ZXBSYW5nZSA9IHRoaXMuc3RlcFJhbmdlO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgY29uc3Qgc3RlcCA9IHR5cGUgPT09IFwiZW51bVwiID8gMSA6ICh0aGlzLnBhcmFtcy5zdGVwIHx8IChtbWF4IC0gbW1pbikgLyB0cnVlU3RlcHMpO1xuICAgICAgICBjb25zdCBwcmV2U3RlcHMgPSB0eXBlID09PSBcImVudW1cIiA/IGUucHJldlZhbHVlIDogZS5wcmV2VmFsdWUgLyBzdGVwO1xuICAgICAgICBjb25zdCBkU3RlcHMgPSBNYXRoLnJvdW5kKChlLmZyb21ZIC0gZS55KSAvIHN0ZXBSYW5nZSk7XG4gICAgICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5taW4odHJ1ZVN0ZXBzLCBNYXRoLm1heCgwLCBwcmV2U3RlcHMgKyBkU3RlcHMpKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gc3RlcHM7XG4gICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5yb3VuZChzdGVwcyAqIHN0ZXAgKyBtbWluKTtcbiAgICAgICAgcmV0dXJuIHN0ZXBzICogc3RlcCArIG1taW47XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZS54IDwgdGhpcy5pbnRlcmFjdGlvblJlY3RbMF1cbiAgICAgICAgICAgIHx8IGUueCA+IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl1cbiAgICAgICAgICAgIHx8IGUueSA8IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdXG4gICAgICAgICAgICB8fCBlLnkgPiB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdXG4gICAgICAgICkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlckRyYWdFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2luVG91Y2gpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbURlbHRhKGUpO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMucGFyYW1zLnZhbHVlKSB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCBuZXdWYWx1ZSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcbmltcG9ydCB7IGF0b2RiIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuaW50ZXJmYWNlIExpdmVNZXRlclBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfCBcImhvcml6b250YWxcIjtcbiAgICBtb2RlOiBcImRlY2liZWxcIiB8IFwibGluZWFyXCI7XG4gICAgY2xpcF9zaXplOiBcIm5vcm1hbFwiIHwgXCJleHRlbmRlZFwiO1xuICAgIGludGVydmFsOiBudW1iZXI7XG4gICAgYmdjb2xvcjogc3RyaW5nO1xuICAgIGluYWN0aXZlY29sZGNvbG9yOiBzdHJpbmc7XG4gICAgaW5hY3RpdmV3YXJtY29sb3I6IHN0cmluZztcbiAgICBjb2xkY29sb3I6IHN0cmluZztcbiAgICB3YXJtY29sb3I6IHN0cmluZztcbiAgICBob3Rjb2xvcjogc3RyaW5nO1xuICAgIG92ZXJsb2FkY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZU1ldGVyIGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlTWV0ZXJQYXJhbXM+IHtcbiAgICBzdGF0aWMgZ2V0IHBhcmFtcygpOiBMaXZlTWV0ZXJQYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUubWV0ZXJ+XCIsXG4gICAgICAgICAgICB3aWR0aDogMTIwLFxuICAgICAgICAgICAgaGVpZ2h0OiAxNSxcbiAgICAgICAgICAgIG1vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICBjbGlwX3NpemU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBpbnRlcnZhbDogMjAsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICBpbmFjdGl2ZWNvbGRjb2xvcjogXCJyZ2JhKDEzMCwgMTMwLCAxMzAsIDEpXCIsXG4gICAgICAgICAgICBpbmFjdGl2ZXdhcm1jb2xvcjogXCJyZ2JhKDE0OSwgMTQ5LCAxNDksIDEpXCIsXG4gICAgICAgICAgICBjb2xkY29sb3I6IFwicmdiYSgxMiwgMjQ4LCAxMDAsIDEpXCIsXG4gICAgICAgICAgICB3YXJtY29sb3I6IFwicmdiYSgxOTUsIDI0OCwgMTAwLCAxKVwiLFxuICAgICAgICAgICAgaG90Y29sb3I6IFwicmdiYSgyNTUsIDE5MywgMTAsIDEpXCIsXG4gICAgICAgICAgICBvdmVybG9hZGNvbG9yOiBcInJnYmEoMjU1LCAxMCwgMTAsIDEpXCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcGFpbnRWYWx1ZTogbnVtYmVyID0gMDtcbiAgICBtYXhWYWx1ZTogbnVtYmVyID0gMDtcbiAgICBwYWludFRpbWVyOiBudW1iZXI7XG4gICAgbWF4VGltZXI6IG51bWJlcjtcbiAgICBnZXQgZGlzdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHsgbW9kZSwgdmFsdWUgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICByZXR1cm4gKG1vZGUgPT09IFwiZGVjaWJlbFwiID8gTWF0aC5tYXgoLTcwLCB2YWx1ZSkgOiBhdG9kYihNYXRoLmFicyh2YWx1ZSkpKSAvIDcwICsgMTtcbiAgICB9XG5cbiAgICBwYWludChwYWludEluPzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnBhaW50VmFsdWUgPSBNYXRoLm1heCh0aGlzLnBhaW50VmFsdWUsIHRoaXMuZGlzdGFuY2UpO1xuICAgICAgICBpZiAoIXBhaW50SW4pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYWludFRpbWVyKSB0aGlzLnBhaW50VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucGFpbnQodHJ1ZSksIHRoaXMucGFyYW1zLmludGVydmFsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhaW50VGltZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgICAgICBjbGlwX3NpemUsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgaW5hY3RpdmVjb2xkY29sb3IsXG4gICAgICAgICAgICBpbmFjdGl2ZXdhcm1jb2xvcixcbiAgICAgICAgICAgIGNvbGRjb2xvcixcbiAgICAgICAgICAgIHdhcm1jb2xvcixcbiAgICAgICAgICAgIGhvdGNvbG9yLFxuICAgICAgICAgICAgb3ZlcmxvYWRjb2xvclxuICAgICAgICB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIGNvbnN0IGNsaXAgPSBjbGlwX3NpemUgPT09IFwibm9ybWFsXCIgPyAxMCA6IDIwO1xuICAgICAgICBjb25zdCBwYWludFZhbHVlID0gdGhpcy5wYWludFZhbHVlO1xuICAgICAgICBpZiAocGFpbnRWYWx1ZSA+IHRoaXMubWF4VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubWF4VmFsdWUgPSBwYWludFZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMubWF4VGltZXIpIGNsZWFyVGltZW91dCh0aGlzLm1heFRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMubWF4VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMubWF4VmFsdWUgPSB0aGlzLnBhaW50VmFsdWUsIDEwMDApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1heFZhbHVlID0gdGhpcy5tYXhWYWx1ZTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHdhcm1TdG9wID0gd2lkdGggLSBjbGlwIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IGhvdFN0b3AgPSB3aWR0aCAtIGNsaXA7XG4gICAgICAgICAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCB3aWR0aCwgMCk7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgYWN0aXZlID8gY29sZGNvbG9yIDogaW5hY3RpdmVjb2xkY29sb3IpO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKHdhcm1TdG9wIC8gd2lkdGgsIGFjdGl2ZSA/IHdhcm1jb2xvciA6IGluYWN0aXZld2FybWNvbG9yKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChob3RTdG9wIC8gd2lkdGgsIGFjdGl2ZSA/IGhvdGNvbG9yIDogaW5hY3RpdmV3YXJtY29sb3IpO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGFjdGl2ZSA/IG92ZXJsb2FkY29sb3IgOiBpbmFjdGl2ZXdhcm1jb2xvcik7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYmdjb2xvcjtcbiAgICAgICAgICAgIGlmIChwYWludFZhbHVlIDwgMSkgY3R4LmZpbGxSZWN0KDAsIDAsIHdhcm1TdG9wLCBoZWlnaHQpO1xuICAgICAgICAgICAgaWYgKHBhaW50VmFsdWUgPCAyKSBjdHguZmlsbFJlY3QoaG90U3RvcCwgMCwgY2xpcCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICAgICAgICAgIGlmIChwYWludFZhbHVlID4gMCkgY3R4LmZpbGxSZWN0KDAsIDAsIE1hdGgubWluKDEsIHBhaW50VmFsdWUpICogd2FybVN0b3AsIGhlaWdodCk7XG4gICAgICAgICAgICBpZiAocGFpbnRWYWx1ZSA+IDEpIGN0eC5maWxsUmVjdChob3RTdG9wLCAwLCBNYXRoLm1pbigxLCAocGFpbnRWYWx1ZSAtIDEpICogMTApICogY2xpcCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGlmIChtYXhWYWx1ZSA+IHBhaW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4VmFsdWUgPD0gMSkgY3R4LmZpbGxSZWN0KE1hdGgubWluKHdhcm1TdG9wIC0gMSwgbWF4VmFsdWUgKiB3YXJtU3RvcCksIDAsIDEsIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgaWYgKG1heFZhbHVlID4gMSkgY3R4LmZpbGxSZWN0KE1hdGgubWluKHdpZHRoIC0gMSwgaG90U3RvcCArIChtYXhWYWx1ZSAtIDEpICogMTAgKiBjbGlwKSwgMCwgMSwgaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHdhcm1TdG9wID0gY2xpcCArIDE7XG4gICAgICAgICAgICBjb25zdCBob3RTdG9wID0gY2xpcDtcbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIGhlaWdodCwgMCwgMCk7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgYWN0aXZlID8gY29sZGNvbG9yIDogaW5hY3RpdmVjb2xkY29sb3IpO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKChoZWlnaHQgLSB3YXJtU3RvcCkgLyBoZWlnaHQsIGFjdGl2ZSA/IHdhcm1jb2xvciA6IGluYWN0aXZld2FybWNvbG9yKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgoaGVpZ2h0IC0gaG90U3RvcCkgLyBoZWlnaHQsIGFjdGl2ZSA/IGhvdGNvbG9yIDogaW5hY3RpdmV3YXJtY29sb3IpO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGFjdGl2ZSA/IG92ZXJsb2FkY29sb3IgOiBpbmFjdGl2ZXdhcm1jb2xvcik7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYmdjb2xvcjtcbiAgICAgICAgICAgIGlmIChwYWludFZhbHVlIDwgMSkgY3R4LmZpbGxSZWN0KDAsIHdhcm1TdG9wLCB3aWR0aCwgaGVpZ2h0IC0gd2FybVN0b3ApO1xuICAgICAgICAgICAgaWYgKHBhaW50VmFsdWUgPCAyKSBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhvdFN0b3ApO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgICAgICAgaWYgKHBhaW50VmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZHJhd0hlaWdodCA9IE1hdGgubWluKDEsIHBhaW50VmFsdWUpICogKGhlaWdodCAtIHdhcm1TdG9wKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgaGVpZ2h0IC0gZHJhd0hlaWdodCwgd2lkdGgsIGRyYXdIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhaW50VmFsdWUgPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZHJhd0hlaWdodCA9IE1hdGgubWluKDEsIChwYWludFZhbHVlIC0gMSkgKiAxMCkgKiBjbGlwO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCBob3RTdG9wIC0gZHJhd0hlaWdodCwgd2lkdGgsIGRyYXdIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1heFZhbHVlID4gcGFpbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChtYXhWYWx1ZSA8PSAxKSBjdHguZmlsbFJlY3QoMCwgaGVpZ2h0IC0gbWF4VmFsdWUgKiAoaGVpZ2h0IC0gd2FybVN0b3ApLCB3aWR0aCwgMSk7XG4gICAgICAgICAgICAgICAgaWYgKG1heFZhbHVlID4gMSkgY3R4LmZpbGxSZWN0KDAsIE1hdGgubWF4KDAsIGhvdFN0b3AgLSAobWF4VmFsdWUgLSAxKSAqIDEwICogY2xpcCksIHdpZHRoLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhaW50VmFsdWUgPSAwO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5cbmludGVyZmFjZSBMaXZlTnVtYm94UGFyYW1zIGV4dGVuZHMgTGl2ZVBhcmFtcyB7XG4gICAgZm9udG5hbWU6IHN0cmluZztcbiAgICBmb250c2l6ZTogbnVtYmVyO1xuICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBhcHBlYXJhbmNlOiBcInNsaWRlclwiIHwgXCJ0cmlhbmdsZVwiIHwgXCJkZWZhdWx0XCI7XG4gICAgYWN0aXZlYmdjb2xvcjogc3RyaW5nO1xuICAgIGJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRleHRjb2xvcjogc3RyaW5nO1xuICAgIHRyaWNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZldHJpY29sb3I6IHN0cmluZztcbiAgICB0cmljb2xvcjI6IHN0cmluZztcbiAgICBhY3RpdmV0cmljb2xvcjI6IHN0cmluZztcbiAgICBhY3RpdmVzbGlkZXJjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlTnVtYm94IGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlTnVtYm94UGFyYW1zPiB7XG4gICAgc3RhdGljIGdldCBwYXJhbXMoKTogTGl2ZU51bWJveFBhcmFtcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wYXJhbXMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS5udW1ib3hcIixcbiAgICAgICAgICAgIHdpZHRoOiA0NSxcbiAgICAgICAgICAgIGhlaWdodDogMTUsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEwLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgYXBwZWFyYW5jZTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXRyaWNvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yMjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0cmljb2xvcjI6IFwicmdiYSgxMDksIDIxNSwgMjU1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlc2xpZGVyY29sb3I6IFwicmdiYSgxMDksIDIxNSwgMjU1LCAxKVwiLFxuICAgICAgICAgICAgbW1pbjogMCxcbiAgICAgICAgICAgIG1tYXg6IDEyNyxcbiAgICAgICAgICAgIHR5cGU6IFwiaW50XCIsXG4gICAgICAgICAgICB1bml0c3R5bGU6IFwiaW50XCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGdldCB0cnVlU3RlcHMoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgc3RlcHMsIHN0ZXAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBmdWxsID0gMTAwO1xuICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gbW1heCAtIG1taW4gOiBmdWxsO1xuICAgICAgICBpZiAoc3RlcCkge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIE1hdGgucm91bmQoc3RlcCkpLCBtYXhTdGVwcyk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5mbG9vcigobW1heCAtIG1taW4pIC8gc3RlcCksIG1heFN0ZXBzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RlcHMpIHJldHVybiBNYXRoLm1pbihzdGVwcywgbWF4U3RlcHMpO1xuICAgICAgICByZXR1cm4gbWF4U3RlcHM7XG4gICAgfVxuICAgIGdldCBkaXN0YW5jZSgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCB2YWx1ZSB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IHZhbHVlIC8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiAodmFsdWUgLSBtbWluKSAvIChtbWF4IC0gbW1pbik7XG4gICAgfVxuICAgIGdldCBzdGVwUmFuZ2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgc3RlcCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGZ1bGwgPSAxMDA7XG4gICAgICAgIGlmIChzdGVwKSByZXR1cm4gdHlwZSA9PT0gXCJlbnVtXCIgPyBmdWxsIC8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gTWF0aC5yb3VuZChzdGVwKSAvIChtbWF4IC0gbW1pbikgKiBmdWxsIDogc3RlcCAvIChtbWF4IC0gbW1pbikgKiBmdWxsO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgcmV0dXJuIGZ1bGwgLyB0cnVlU3RlcHM7XG4gICAgfVxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgIGZvY3VzLFxuICAgICAgICAgICAgZm9udG5hbWUsXG4gICAgICAgICAgICBmb250c2l6ZSxcbiAgICAgICAgICAgIGZvbnRmYWNlLFxuICAgICAgICAgICAgYXBwZWFyYW5jZSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBib3JkZXJjb2xvcixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0ZXh0Y29sb3IsXG4gICAgICAgICAgICB0cmljb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZXRyaWNvbG9yLFxuICAgICAgICAgICAgdHJpY29sb3IyLFxuICAgICAgICAgICAgYWN0aXZldHJpY29sb3IyLFxuICAgICAgICAgICAgYWN0aXZlc2xpZGVyY29sb3JcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlO1xuICAgICAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSB0aGlzLmRpc3BsYXlWYWx1ZTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIC8vIGRyYXcgYmFja2dyb3VuZFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYWN0aXZlYmdjb2xvcjtcbiAgICAgICAgY3R4LnJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgLy8gZHJhdyBib3JkZXIgKGV2ZW50dWFsbHkgd2UgbWlnaHQgbmVlZCB0byByZWRlZmluZSB0aGUgc2hhcGUpXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBmb2N1cyA/IGZvY3VzYm9yZGVyY29sb3IgOiBib3JkZXJjb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInNsaWRlclwiICYmIGFjdGl2ZSAmJiBkaXN0YW5jZSkge1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGFjdGl2ZXNsaWRlcmNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAuNSwgMC41LCBkaXN0YW5jZSAqIHdpZHRoIC0gMSwgaGVpZ2h0IC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidHJpYW5nbGVcIikge1xuICAgICAgICAgICAgY29uc3QgdHJpYW5nbGVIZWlnaHQgPSA4O1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGFjdGl2ZSA/IChkaXN0YW5jZSA/IGFjdGl2ZXRyaWNvbG9yMiA6IGFjdGl2ZXRyaWNvbG9yKSA6IChkaXN0YW5jZSA/IHRyaWNvbG9yMiA6IHRyaWNvbG9yKTtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8od2lkdGggLSB0cmlhbmdsZUhlaWdodCAtIDAuNSwgaGVpZ2h0ICogMC41KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8od2lkdGggLSAwLjUsIDAuNSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoIC0gMC41LCBoZWlnaHQgLSAwLjUpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkaXNwbGF5IHRoZSB0ZXh0XG4gICAgICAgIGN0eC5mb250ID0gYCR7Zm9udGZhY2UgPT09IFwicmVndWxhclwiID8gXCJcIiA6IGZvbnRmYWNlfSAke2ZvbnRzaXplfXB4ICR7Zm9udG5hbWV9LCBzYW5zLXNlcmlmYDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRleHRjb2xvcjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICBjdHguZmlsbFRleHQoZGlzcGxheVZhbHVlLCB3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41LCB3aWR0aCk7XG4gICAgfVxuICAgIGdldFZhbHVlRnJvbURlbHRhKGU6IFBvaW50ZXJEcmFnRXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWluLCBtbWF4IH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3Qgc3RlcFJhbmdlID0gdGhpcy5zdGVwUmFuZ2U7XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICBjb25zdCBzdGVwID0gdHlwZSA9PT0gXCJlbnVtXCIgPyAxIDogKHRoaXMucGFyYW1zLnN0ZXAgfHwgKG1tYXggLSBtbWluKSAvIHRydWVTdGVwcyk7XG4gICAgICAgIGNvbnN0IHByZXZTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gZS5wcmV2VmFsdWUgOiBlLnByZXZWYWx1ZSAvIHN0ZXA7XG4gICAgICAgIGNvbnN0IGRTdGVwcyA9IE1hdGgucm91bmQoKGUuZnJvbVkgLSBlLnkpIC8gc3RlcFJhbmdlKTtcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBNYXRoLm1pbih0cnVlU3RlcHMsIE1hdGgubWF4KDAsIHByZXZTdGVwcyArIGRTdGVwcykpO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiBzdGVwcztcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLnJvdW5kKHN0ZXBzICogc3RlcCArIG1taW4pO1xuICAgICAgICByZXR1cm4gc3RlcHMgKiBzdGVwICsgbW1pbjtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5faW5Ub3VjaCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tRGVsdGEoZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5wYXJhbXMudmFsdWUpIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZVNsaWRlclBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIHJlbGF0aXZlOiBib29sZWFuO1xuICAgIGZvbnRuYW1lOiBzdHJpbmc7XG4gICAgZm9udHNpemU6IG51bWJlcjtcbiAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIgfCBcImJvbGRcIiB8IFwiaXRhbGljXCIgfCBcImJvbGQgaXRhbGljXCI7XG4gICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB8IFwiaG9yaXpvbnRhbFwiO1xuICAgIHNob3duYW1lOiBib29sZWFuO1xuICAgIHNob3dudW1iZXI6IGJvb2xlYW47XG4gICAgc2xpZGVyY29sb3I6IHN0cmluZztcbiAgICB0ZXh0Y29sb3I6IHN0cmluZztcbiAgICB0cmlib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRyaW9uY29sb3I6IHN0cmluZztcbiAgICB0cmljb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlU2xpZGVyIGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlU2xpZGVyUGFyYW1zPiB7XG4gICAgc3RhdGljIGdldCBwYXJhbXMoKTogTGl2ZVNsaWRlclBhcmFtcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wYXJhbXMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS5zbGlkZXJcIixcbiAgICAgICAgICAgIHdpZHRoOiA0MCxcbiAgICAgICAgICAgIGhlaWdodDogOTAsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEyLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIHNob3duYW1lOiB0cnVlLFxuICAgICAgICAgICAgc2hvd251bWJlcjogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlcmNvbG9yOiBcInJnYmEoNDAsIDQwLCA0MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmlib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICB0cmlvbmNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIHJlbGF0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1taW46IDAsXG4gICAgICAgICAgICBtbWF4OiAxMjcsXG4gICAgICAgICAgICB0eXBlOiBcImludFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG4gICAgaW50ZXJhY3Rpb25SZWN0OiBudW1iZXJbXSA9IFswLCAwLCAwLCAwXTtcblxuICAgIGdldCB0cnVlU3RlcHMoKSB7XG4gICAgICAgIGNvbnN0IHsgb3JpZW50YXRpb24sIHR5cGUsIG1tYXgsIG1taW4sIHN0ZXBzLCBzdGVwIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgZnVsbCA9IHRoaXMuaW50ZXJhY3Rpb25SZWN0W29yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyAzIDogMl07XG4gICAgICAgIGNvbnN0IG1heFN0ZXBzID0gdHlwZSA9PT0gXCJlbnVtXCIgPyB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aCA6IHR5cGUgPT09IFwiaW50XCIgPyBtbWF4IC0gbW1pbiA6IGZ1bGw7XG4gICAgICAgIGlmIChzdGVwKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5taW4oTWF0aC5mbG9vcigobW1heCAtIG1taW4pIC8gTWF0aC5yb3VuZChzdGVwKSksIG1heFN0ZXBzKTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBzdGVwKSwgbWF4U3RlcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGVwcykgcmV0dXJuIE1hdGgubWluKHN0ZXBzLCBtYXhTdGVwcyk7XG4gICAgICAgIHJldHVybiBtYXhTdGVwcztcbiAgICB9XG4gICAgZ2V0IGRpc3RhbmNlKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHZhbHVlIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gdmFsdWUgLyB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aCA6ICh2YWx1ZSAtIG1taW4pIC8gKG1tYXggLSBtbWluKTtcbiAgICB9XG4gICAgZ2V0IHN0ZXBSYW5nZSgpIHtcbiAgICAgICAgY29uc3QgeyBvcmllbnRhdGlvbiwgdHlwZSwgbW1heCwgbW1pbiwgc3RlcCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGZ1bGwgPSB0aGlzLmludGVyYWN0aW9uUmVjdFtvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gMyA6IDJdO1xuICAgICAgICBpZiAoc3RlcCkgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gZnVsbCAvIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IE1hdGgucm91bmQoc3RlcCkgLyAobW1heCAtIG1taW4pICogZnVsbCA6IHN0ZXAgLyAobW1heCAtIG1taW4pICogZnVsbDtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIHJldHVybiBmdWxsIC8gdHJ1ZVN0ZXBzO1xuICAgIH1cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBmb250bmFtZSxcbiAgICAgICAgICAgIGZvbnRzaXplLFxuICAgICAgICAgICAgZm9udGZhY2UsXG4gICAgICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgICAgIHNob3duYW1lLFxuICAgICAgICAgICAgc2hvd251bWJlcixcbiAgICAgICAgICAgIHNsaWRlcmNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0cmlvbmNvbG9yLFxuICAgICAgICAgICAgdHJpY29sb3IsXG4gICAgICAgICAgICBzaG9ydG5hbWVcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gMC41O1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gODtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlO1xuICAgICAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSB0aGlzLmRpc3BsYXlWYWx1ZTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHNsaWRlcmNvbG9yO1xuXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHdpZHRoICogMC41LCBmb250c2l6ZSArIHBhZGRpbmcpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCAqIDAuNSwgaGVpZ2h0IC0gKGZvbnRzaXplICsgcGFkZGluZykpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbldpZHRoID0gd2lkdGggKiAwLjU7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdCA9IFtcbiAgICAgICAgICAgICAgICB3aWR0aCAqIDAuNSAtIGludGVyYWN0aW9uV2lkdGggKiAwLjUsXG4gICAgICAgICAgICAgICAgZm9udHNpemUgKyBwYWRkaW5nLFxuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uV2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0IC0gMiAqIChmb250c2l6ZSArIHBhZGRpbmcpXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRyaWJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgY29uc3QgdHJpT3JpZ2luOiBbbnVtYmVyLCBudW1iZXJdID0gW1xuICAgICAgICAgICAgICAgIHdpZHRoICogMC41ICsgbGluZVdpZHRoICogMC41ICsgMC41LFxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdIC0gNCArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdICogKDEgLSBkaXN0YW5jZSlcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgNCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDgsIHRyaU9yaWdpblsxXSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDgsIHRyaU9yaWdpblsxXSArIDgpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0sIHRyaU9yaWdpblsxXSArIDQpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5faW5Ub3VjaCA/IHRyaW9uY29sb3IgOiB0cmljb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Zm9udGZhY2UgPT09IFwicmVndWxhclwiID8gXCJcIiA6IGZvbnRmYWNlfSAke2ZvbnRzaXplfXB4ICR7Zm9udG5hbWV9LCBzYW5zLXNlcmlmYDtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRleHRjb2xvcjtcbiAgICAgICAgICAgIGlmIChzaG93bmFtZSkgY3R4LmZpbGxUZXh0KHNob3J0bmFtZSwgd2lkdGggKiAwLjUsIGZvbnRzaXplLCB3aWR0aCk7XG4gICAgICAgICAgICBpZiAoc2hvd251bWJlcikgY3R4LmZpbGxUZXh0KGRpc3BsYXlWYWx1ZSwgd2lkdGggKiAwLjUsIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhwYWRkaW5nLCBoZWlnaHQgKiAwLjUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCAtIHBhZGRpbmcsIGhlaWdodCAqIDAuNSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uV2lkdGggPSBoZWlnaHQgKiAwLjU7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdCA9IFtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgICAgICAgIGhlaWdodCAqIDAuNSAtIGludGVyYWN0aW9uV2lkdGggKiAwLjUsXG4gICAgICAgICAgICAgICAgd2lkdGggLSAyICogcGFkZGluZyxcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbldpZHRoXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRyaWJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgY29uc3QgdHJpT3JpZ2luOiBbbnVtYmVyLCBudW1iZXJdID0gW1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl0gKiBkaXN0YW5jZSAtIDQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICogMC41ICsgbGluZVdpZHRoICogMC41ICsgMlxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odHJpT3JpZ2luWzBdLCB0cmlPcmlnaW5bMV0gKyA4KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgNCwgdHJpT3JpZ2luWzFdKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgOCwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLl9pblRvdWNoID8gdHJpb25jb2xvciA6IHRyaWNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICAgICAgaWYgKHNob3duYW1lKSBjdHguZmlsbFRleHQoc2hvcnRuYW1lLCB3aWR0aCAqIDAuNSwgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgIGlmIChzaG93bnVtYmVyKSBjdHguZmlsbFRleHQoZGlzcGxheVZhbHVlLCA0LCBoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRWYWx1ZUZyb21Qb3MoZTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XG4gICAgICAgIGNvbnN0IHsgb3JpZW50YXRpb24sIHR5cGUsIG1taW4sIG1tYXggfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBzdGVwUmFuZ2UgPSB0aGlzLnN0ZXBSYW5nZTtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSB0aGlzLnBhcmFtcy5zdGVwIHx8IChtbWF4IC0gbW1pbikgLyB0cnVlU3RlcHM7XG4gICAgICAgIGxldCBzdGVwcyA9IE1hdGgucm91bmQoKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyB0aGlzLmludGVyYWN0aW9uUmVjdFszXSAtIChlLnkgLSB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSkgOiBlLnggLSB0aGlzLmludGVyYWN0aW9uUmVjdFswXSkgLyBzdGVwUmFuZ2UpO1xuICAgICAgICBzdGVwcyA9IE1hdGgubWluKHRydWVTdGVwcywgTWF0aC5tYXgoMCwgc3RlcHMpKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gc3RlcHM7XG4gICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5yb3VuZChzdGVwcyAqIHN0ZXAgKyBtbWluKTtcbiAgICAgICAgcmV0dXJuIHN0ZXBzICogc3RlcCArIG1taW47XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGUueCA8IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdXG4gICAgICAgICAgICB8fCBlLnggPiB0aGlzLmludGVyYWN0aW9uUmVjdFswXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzJdXG4gICAgICAgICAgICB8fCBlLnkgPCB0aGlzLmludGVyYWN0aW9uUmVjdFsxXVxuICAgICAgICAgICAgfHwgZS55ID4gdGhpcy5pbnRlcmFjdGlvblJlY3RbMV0gKyB0aGlzLmludGVyYWN0aW9uUmVjdFszXVxuICAgICAgICApIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbVBvcyhlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB2YWx1ZSkgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgdGhpcy5nZXRWYWx1ZUZyb21Qb3MoZSkpO1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlckRyYWdFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2luVG91Y2gpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbVBvcyhlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLnBhcmFtcy52YWx1ZSkgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgbmV3VmFsdWUpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5cbmludGVyZmFjZSBMaXZlVGFiUGFyYW1zIGV4dGVuZHMgTGl2ZVBhcmFtcyB7XG4gICAgZm9udG5hbWU6IHN0cmluZztcbiAgICBmb250c2l6ZTogbnVtYmVyO1xuICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBhY3RpdmViZ2NvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZlYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYmdjb2xvcjogc3RyaW5nO1xuICAgIGJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRleHRjb2xvcjogc3RyaW5nO1xuICAgIHRleHRvbmNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZldGV4dGNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZldGV4dG9uY29sb3I6IHN0cmluZztcbiAgICBtb2RlOiBcImVxdWFsXCIgfCBcInByb3BvcnRpb25hbFwiO1xuICAgIHNwYWNpbmdfeDogbnVtYmVyO1xuICAgIHNwYWNpbmdfeTogbnVtYmVyO1xuICAgIG11bHRpbGluZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVRhYiBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZVRhYlBhcmFtcz4ge1xuICAgIHN0YXRpYyBnZXQgcGFyYW1zKCk6IExpdmVUYWJQYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUudGFiXCIsXG4gICAgICAgICAgICB3aWR0aDogOTAsXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1LFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMCxcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yOiBcInJnYmEoMjU1LCAxODEsIDUwLCAxKVwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBiZ29uY29sb3I6IFwicmdiYSgxOTUsIDE5NSwgMTk1LCAxKVwiLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0Y29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dG9uY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZldGV4dGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRvbmNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIG1vZGU6IFwiZXF1YWxcIixcbiAgICAgICAgICAgIGVudW06IFtcIm9uZVwiLCBcInR3b1wiLCBcInRocmVlXCJdLFxuICAgICAgICAgICAgc3BhY2luZ194OiA2LFxuICAgICAgICAgICAgc3BhY2luZ195OiA2LFxuICAgICAgICAgICAgbXVsdGlsaW5lOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG4gICAgdGFiUmVjdHM6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdW10gPSBbXTtcblxuICAgIGdldFRhYlJlY3RzKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIG11bHRpbGluZSxcbiAgICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgICBzcGFjaW5nX3gsXG4gICAgICAgICAgICBzcGFjaW5nX3lcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBlbnVtcyA9IHRoaXMucGFyYW1zLmVudW07XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IDQ7XG4gICAgICAgIGNvbnN0IG1pbkhlaWdodCA9IDEwO1xuICAgICAgICBjb25zdCBjb3VudCA9IGVudW1zLmxlbmd0aDtcbiAgICAgICAgbGV0IGNvdW50UGVyTGluZSA9IGNvdW50O1xuICAgICAgICBsZXQgbGluZXMgPSAxO1xuICAgICAgICBsZXQgc3RlcCA9IGhlaWdodCAvIGxpbmVzO1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSAwO1xuICAgICAgICBsZXQgcmVjdFdpZHRoID0gMDtcbiAgICAgICAgY29uc3Qgc3BhY2luZ1ggPSBzcGFjaW5nX3ggKiAwLjU7XG4gICAgICAgIGNvbnN0IHNwYWNpbmdZID0gc3BhY2luZ195ICogMC41O1xuXG4gICAgICAgIGlmIChtdWx0aWxpbmUgJiYgaGVpZ2h0ID49IDIgKiBtaW5IZWlnaHQpIHtcbiAgICAgICAgICAgIGxpbmVzID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oY291bnQsIE1hdGguZmxvb3IoaGVpZ2h0IC8gbWluSGVpZ2h0KSkpO1xuICAgICAgICAgICAgY291bnRQZXJMaW5lID0gTWF0aC5jZWlsKGNvdW50IC8gbGluZXMpO1xuICAgICAgICAgICAgLy8gaWYgdGhlcmUncyBub3QgZW5vdWdoIGhlaWdodCwgaW5jcmVhc2UgdGhlIG51bWJlciBvZiB0YWJzIHBlciByb3dcbiAgICAgICAgICAgIHdoaWxlIChsaW5lcyAqIGNvdW50UGVyTGluZSA8IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgY291bnRQZXJMaW5lKys7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmVzID4gMSkgbGluZXMtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3MgZXh0cmEgaGVpZ2h0LCByZWR1Y2UgdGhlIG51bWJlciBvZiByb3dzXG4gICAgICAgICAgICB3aGlsZSAobGluZXMgKiBjb3VudFBlckxpbmUgPiBjb3VudCAmJiAobGluZXMgLSAxKSAqIGNvdW50UGVyTGluZSA+PSBjb3VudCkge1xuICAgICAgICAgICAgICAgIGxpbmVzLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGVwID0gaGVpZ2h0IC8gbGluZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vZGUgPT09IFwiZXF1YWxcIikge1xuICAgICAgICAgICAgaW50ZXJ2YWwgPSB3aWR0aCAvIGNvdW50UGVyTGluZTtcbiAgICAgICAgICAgIHJlY3RXaWR0aCA9IGludGVydmFsIC0gc3BhY2luZ1g7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlJlY3RzW2ldID0gW1xuICAgICAgICAgICAgICAgICAgICAoaSAlIGNvdW50UGVyTGluZSkgKiBpbnRlcnZhbCArIHNwYWNpbmdYICogMC41LFxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGkgLyBjb3VudFBlckxpbmUpICogc3RlcCArIHNwYWNpbmdZICogMC41LFxuICAgICAgICAgICAgICAgICAgICByZWN0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIChoZWlnaHQgLyBsaW5lcykgLSBzcGFjaW5nWVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0V2lkdGhzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBzcGFjZSA9IHdpZHRoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpICogY291bnRQZXJMaW5lOyBqIDwgTWF0aC5taW4oKGkgKyAxKSAqIGNvdW50UGVyTGluZSwgY291bnQpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dERpbWVuc2lvbnMgPSB0aGlzLmN0eC5tZWFzdXJlVGV4dChlbnVtc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgIHRleHRXaWR0aHNbal0gPSB0ZXh0RGltZW5zaW9ucy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgKz0gdGV4dFdpZHRoc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgc3BhY2UgLT0gMiAqIG1hcmdpbiArIHNwYWNpbmdYO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdXNlZCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKiBjb3VudFBlckxpbmU7IGogPCBNYXRoLm1pbigoaSArIDEpICogY291bnRQZXJMaW5lLCBjb3VudCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWN0U3BhY2UgPSB0ZXh0V2lkdGhzW2pdIC8gdG90YWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiUmVjdHNbal0gPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VkICsgc3BhY2luZ1ggKiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpICogc3RlcCArIHNwYWNpbmdZICogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2UgKiByZWN0U3BhY2UgKyAyICogbWFyZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IC8gbGluZXMgLSBzcGFjaW5nWVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB1c2VkICs9IHRoaXMudGFiUmVjdHNbal1bMl0gKyBzcGFjaW5nWDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudGFiUmVjdHM7XG4gICAgfVxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3IsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgYmdvbmNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdGV4dG9uY29sb3IsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0Y29sb3IsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0b25jb2xvcixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBlbnVtcyA9IHRoaXMucGFyYW1zLmVudW07XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBjb25zdCB0YWJSZWN0cyA9IHRoaXMuZ2V0VGFiUmVjdHMoKTtcblxuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IDAuNTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjdHgubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQm9yZGVyQ29sb3IgPSBmb2N1cyA/IGZvY3VzYm9yZGVyY29sb3IgOiBib3JkZXJjb2xvcjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uQmdDb2xvciA9IGFjdGl2ZSA/ICh2YWx1ZSA9PT0gaSA/IGFjdGl2ZWJnb25jb2xvciA6IGFjdGl2ZWJnY29sb3IpIDogKHZhbHVlID09PSBpID8gYmdvbmNvbG9yIDogYmdjb2xvcik7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uQmdDb2xvcjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5yZWN0KC4uLnRhYlJlY3RzW2ldKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBidXR0b25Cb3JkZXJDb2xvcjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBhY3RpdmUgPyAodmFsdWUgPT09IGkgPyBhY3RpdmV0ZXh0b25jb2xvciA6IGFjdGl2ZXRleHRjb2xvcikgOiAodmFsdWUgPT09IGkgPyB0ZXh0b25jb2xvciA6IHRleHRjb2xvcik7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoZW51bXNbaV0sIHRhYlJlY3RzW2ldWzBdICsgdGFiUmVjdHNbaV1bMl0gKiAwLjUsIHRhYlJlY3RzW2ldWzFdICsgdGFiUmVjdHNbaV1bM10gKiAwLjUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJSZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMudGFiUmVjdHNbaV07XG4gICAgICAgICAgICBpZiAoZS54ID49IHJlY3RbMF0gJiYgZS54IDw9IHJlY3RbMl0gKyByZWN0WzBdICYmIGUueSA+PSByZWN0WzFdICYmIGUueSA8PSByZWN0WzNdICsgcmVjdFsxXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIGkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlckRvd24oZSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcbmltcG9ydCB7IGZpbGxSb3VuZGVkUmVjdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmludGVyZmFjZSBMaXZlVGV4dFBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIGZvbnRuYW1lOiBzdHJpbmc7XG4gICAgZm9udHNpemU6IG51bWJlcjtcbiAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIgfCBcImJvbGRcIiB8IFwiaXRhbGljXCIgfCBcImJvbGQgaXRhbGljXCI7XG4gICAgYWN0aXZlYmdjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZWJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJnY29sb3I6IHN0cmluZztcbiAgICBiZ29uY29sb3I6IHN0cmluZztcbiAgICBib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIGZvY3VzYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICB0ZXh0Y29sb3I6IHN0cmluZztcbiAgICB0ZXh0b25jb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZXRleHRjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZXRleHRvbmNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIHRleHRvbjogc3RyaW5nO1xuICAgIG1vZGU6IFwiYnV0dG9uXCIgfCBcInRvZ2dsZVwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlVGV4dCBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZVRleHRQYXJhbXM+IHtcbiAgICBzdGF0aWMgZ2V0IHBhcmFtcygpOiBMaXZlVGV4dFBhcmFtcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wYXJhbXMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS50ZXh0XCIsXG4gICAgICAgICAgICB3aWR0aDogOTAsXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1LFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMCxcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yOiBcInJnYmEoMjU1LCAxODEsIDUwLCAxKVwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBiZ29uY29sb3I6IFwicmdiYSgxOTUsIDE5NSwgMTk1LCAxKVwiLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0Y29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dG9uY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZldGV4dGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRvbmNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRleHQ6IFwiQVwiLFxuICAgICAgICAgICAgdGV4dG9uOiBcIkJcIixcbiAgICAgICAgICAgIG1vZGU6IFwidG9nZ2xlXCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICB0ZXh0b24sXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHRleHRjb2xvcixcbiAgICAgICAgICAgIHRleHRvbmNvbG9yLFxuICAgICAgICAgICAgYWN0aXZldGV4dGNvbG9yLFxuICAgICAgICAgICAgYWN0aXZldGV4dG9uY29sb3IsXG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMC41O1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcblxuICAgICAgICBjb25zdCBidXR0b25CZ0NvbG9yID0gYWN0aXZlID8gKHZhbHVlID8gYWN0aXZlYmdvbmNvbG9yIDogYWN0aXZlYmdjb2xvcikgOiAodmFsdWUgPyBiZ29uY29sb3IgOiBiZ2NvbG9yKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQm9yZGVyQ29sb3IgPSBmb2N1cyA/IGZvY3VzYm9yZGVyY29sb3IgOiBib3JkZXJjb2xvcjtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uQmdDb2xvcjtcbiAgICAgICAgaWYgKG1vZGUgPT09IFwiYnV0dG9uXCIpIHtcbiAgICAgICAgICAgIGZpbGxSb3VuZGVkUmVjdChjdHgsIDAuNSwgMC41LCB3aWR0aCAtIDEsIGhlaWdodCAtIDEsIGhlaWdodCAqIDAuNSAtIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LnJlY3QoMC41LCAwLjUsIHdpZHRoIC0gMSwgaGVpZ2h0IC0gMSk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAwLjU7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGJ1dHRvbkJvcmRlckNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBhY3RpdmUgPyAodmFsdWUgPyBhY3RpdmV0ZXh0b25jb2xvciA6IGFjdGl2ZXRleHRjb2xvcikgOiAodmFsdWUgPyB0ZXh0b25jb2xvciA6IHRleHRjb2xvcik7XG4gICAgICAgIGN0eC5maWxsVGV4dCh2YWx1ZSAmJiBtb2RlID09PSBcInRvZ2dsZVwiID8gdGV4dG9uIDogdGV4dCwgd2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHZhbHVlLCBtb2RlIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIG1vZGUgPT09IFwiYnV0dG9uXCIgPyAxIDogMSAtIHZhbHVlKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5tb2RlID09PSBcImJ1dHRvblwiKSB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCAwKTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5cbmludGVyZmFjZSBMaXZlVG9nZ2xlUGFyYW1zIGV4dGVuZHMgTGl2ZVBhcmFtcyB7XG4gICAgYWN0aXZlYmdjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZWJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJnY29sb3I6IHN0cmluZztcbiAgICBiZ29uY29sb3I6IHN0cmluZztcbiAgICBib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIGZvY3VzYm9yZGVyY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVRvZ2dsZSBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZVRvZ2dsZVBhcmFtcz4ge1xuICAgIHN0YXRpYyBnZXQgcGFyYW1zKCk6IExpdmVUb2dnbGVQYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUudG9nZ2xlXCIsXG4gICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICBoZWlnaHQ6IDE1LFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3I6IFwicmdiYSgyNTUsIDE4MSwgNTAsIDEpXCIsXG4gICAgICAgICAgICBiZ2NvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIGJnb25jb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3IsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgYmdvbmNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMC41O1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcblxuICAgICAgICBjb25zdCBidXR0b25CZ0NvbG9yID0gYWN0aXZlID8gKHZhbHVlID8gYWN0aXZlYmdvbmNvbG9yIDogYWN0aXZlYmdjb2xvcikgOiAodmFsdWUgPyBiZ29uY29sb3IgOiBiZ2NvbG9yKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQm9yZGVyQ29sb3IgPSBmb2N1cyA/IGZvY3VzYm9yZGVyY29sb3IgOiBib3JkZXJjb2xvcjtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uQmdDb2xvcjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgucmVjdChib3JkZXJXaWR0aCwgYm9yZGVyV2lkdGgsIHdpZHRoIC0gMiAqIGJvcmRlcldpZHRoLCBoZWlnaHQgLSAyICogYm9yZGVyV2lkdGgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBidXR0b25Cb3JkZXJDb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIDEgLSB2YWx1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFwiQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL3dlYmNvbXBvbmVudHMtYnVuZGxlXCI7XG5pbXBvcnQgTGl2ZUJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBMaXZlU2xpZGVyIGZyb20gXCIuL1NsaWRlclwiO1xuaW1wb3J0IExpdmVEaWFsIGZyb20gXCIuL0RpYWxcIjtcbmltcG9ydCBMaXZlVG9nZ2xlIGZyb20gXCIuL1RvZ2dsZVwiO1xuaW1wb3J0IExpdmVUZXh0IGZyb20gXCIuL1RleHRcIjtcbmltcG9ydCBMaXZlTnVtYm94IGZyb20gXCIuL051bWJveFwiO1xuaW1wb3J0IExpdmVUYWIgZnJvbSBcIi4vVGFiXCI7XG5pbXBvcnQgTGl2ZU1ldGVyIGZyb20gXCIuL01ldGVyXCI7XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXZlLWJ1dHRvblwiLCBMaXZlQnV0dG9uKTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXZlLXRvZ2dsZVwiLCBMaXZlVG9nZ2xlKTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXZlLXNsaWRlclwiLCBMaXZlU2xpZGVyKTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXZlLWRpYWxcIiwgTGl2ZURpYWwpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdmUtdGV4dFwiLCBMaXZlVGV4dCk7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1udW1ib3hcIiwgTGl2ZU51bWJveCk7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS10YWJcIiwgTGl2ZVRhYik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1tZXRlclwiLCBMaXZlTWV0ZXIpO1xuIiwiZXhwb3J0IGNvbnN0IHRvTUlESSA9IChmOiBudW1iZXIpID0+IFtcIkNcIiwgXCJDI1wiLCBcIkRcIiwgXCJEI1wiLCBcIkVcIiwgXCJGXCIsIFwiRiNcIiwgXCJHXCIsIFwiRyNcIiwgXCJBXCIsIFwiQSNcIiwgXCJCXCJdWyhmICUgMTIgKyAxMikgJSAxMl0gKyBNYXRoLnJvdW5kKGYgLyAxMiAtIDIpO1xuZXhwb3J0IGNvbnN0IHRvUmFkID0gKGRlZ3JlZXM6IG51bWJlcikgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG5leHBvcnQgY29uc3QgYXRvZGIgPSAoYTogbnVtYmVyKSA9PiAyMCAqIE1hdGgubG9nMTAoYSk7XG5leHBvcnQgY29uc3QgZGJ0b2EgPSAoZGI6IG51bWJlcikgPT4gMTAgKiogKGRiIC8gMjApO1xuZXhwb3J0IGNvbnN0IHJvdW5kZWRSZWN0ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJhZGl1czogbnVtYmVyIHwgbnVtYmVyW10pID0+IHtcbiAgICBjb25zdCByYWRpaSA9IFswLCAwLCAwLCAwXTtcbiAgICBpZiAodHlwZW9mIHJhZGl1cyA9PT0gXCJudW1iZXJcIikgcmFkaWkuZmlsbChyYWRpdXMpO1xuICAgIGVsc2UgcmFkaXVzLmZvckVhY2goKHYsIGkpID0+IHJhZGlpW2ldID0gdik7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHJhZGlpWzBdLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGlpWzFdLCB5KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGlpWzFdKTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGlpWzJdKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGlpWzJdLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKHggKyByYWRpaVszXSwgeSArIGhlaWdodCk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGlpWzNdKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpaVswXSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGlpWzBdLCB5KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xufTtcbmV4cG9ydCBjb25zdCBmaWxsUm91bmRlZFJlY3QgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmFkaXVzOiBudW1iZXIgfCBudW1iZXJbXSkgPT4ge1xuICAgIGNvbnN0IHJhZGlpID0gWzAsIDAsIDAsIDBdO1xuICAgIGlmICh0eXBlb2YgcmFkaXVzID09PSBcIm51bWJlclwiKSByYWRpaS5maWxsKHJhZGl1cyk7XG4gICAgZWxzZSByYWRpdXMuZm9yRWFjaCgodiwgaSkgPT4gcmFkaWlbaV0gPSB2KTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaWlbMF0sIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaWlbMV0sIHkpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaWlbMV0pO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaWlbMl0pO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoIC0gcmFkaWlbMl0sIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCArIHJhZGlpWzNdLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaWlbM10pO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHJhZGlpWzBdKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaWlbMF0sIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=