(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LiveComponents"] = factory();
	else
		root["LiveComponents"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
    return Object.keys(this.props);
  }

  constructor() {
    super();
    this.canvas = void 0;
    this.ctx = void 0;
    this.isConnectedPolyfill = void 0;
    this.props = void 0;

    this.handleKeyDown = e => {};

    this.handleKeyUp = e => {};

    this.handleTouchStart = e => {
      e.preventDefault();
      this.canvas.focus();
      var rect = this.canvas.getBoundingClientRect();
      var prevX = e.touches[0].pageX;
      var prevY = e.touches[0].pageY;
      var fromX = prevX - rect.left;
      var fromY = prevY - rect.top;
      var prevValue = this.props.value;
      this.handlePointerDown({
        x: fromX,
        y: fromY,
        originalEvent: e
      });

      var handleTouchMove = e => {
        e.preventDefault();
        var pageX = e.changedTouches[0].pageX;
        var pageY = e.changedTouches[0].pageY;
        var movementX = pageX - prevX;
        var movementY = pageY - prevY;
        prevX = pageX;
        prevY = pageY;
        var x = pageX - rect.left;
        var y = pageY - rect.top;
        this.handlePointerDrag({
          prevValue,
          x,
          y,
          fromX,
          fromY,
          movementX,
          movementY,
          originalEvent: e
        });
      };

      var handleTouchEnd = e => {
        e.preventDefault();
        var x = e.changedTouches[0].pageX - rect.left;
        var y = e.changedTouches[0].pageY - rect.top;
        this.handlePointerUp({
          x,
          y,
          originalEvent: e
        });
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };

      document.addEventListener("touchmove", handleTouchMove, {
        passive: false
      });
      document.addEventListener("touchend", handleTouchEnd, {
        passive: false
      });
    };

    this.handleWheel = e => {};

    this.handleClick = e => {};

    this.handleMouseDown = e => {
      e.preventDefault();
      this.canvas.focus();
      var rect = this.canvas.getBoundingClientRect();
      var fromX = e.pageX - rect.left;
      var fromY = e.pageY - rect.top;
      var prevValue = this.props.value;
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
      this.props.focus = true;
      this.paint();
    };

    this.handleFocusOut = e => {
      this.props.focus = false;
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
    this.props = this.constructor.props;
  }

  get displayValue() {
    var _this$props = this.props,
        value = _this$props.value,
        type = _this$props.type,
        unitstyle = _this$props.unitstyle,
        units = _this$props.units;
    if (type === "enum") return this.props.enum[value];
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
      this.props[name] = value.match(/^[+-]?(\d*\.)?\d+$/) ? +value : value;
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
    if (!(key in this.props)) return;
    this.props[key] = value;
    if (key === "value") this.change();
    this.paint();
  }

  setValue(value) {
    this.setParamValue("value", value);
  }

  change() {
    this.dispatchEvent(new _ChangeEvent__WEBPACK_IMPORTED_MODULE_2__["LiveComponentChangeEvent"]("change", {
      detail: {
        value: this.props.value,
        displayValue: this.displayValue
      }
    }));
  }

  paint() {}

  render() {
    return '<canvas tabindex="1" style="outline: none;"></canvas>';
  }

}
LiveComponent.props = {
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
      this.setValue(1);
    };

    this.handlePointerUp = () => {
      this._inTouch = false;
      this.setValue(0);
    };
  }

  static get props() {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, super.props, {
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
    var _this$props = this.props,
        active = _this$props.active,
        focus = _this$props.focus,
        activebgcolor = _this$props.activebgcolor,
        activebgoncolor = _this$props.activebgoncolor,
        bgcolor = _this$props.bgcolor,
        bgoncolor = _this$props.bgoncolor,
        bordercolor = _this$props.bordercolor,
        focusbordercolor = _this$props.focusbordercolor,
        value = _this$props.value,
        width = _this$props.width,
        height = _this$props.height;
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
      setTimeout(() => this.setValue(0), 100);
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
      if (newValue !== this.props.value) this.setValue(newValue);
    };

    this.handlePointerUp = () => {
      this._inTouch = false;
    };
  }

  static get props() {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, super.props, {
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
    var _this$props = this.props,
        type = _this$props.type,
        mmax = _this$props.mmax,
        mmin = _this$props.mmin,
        steps = _this$props.steps,
        step = _this$props.step;
    var full = 100;
    var maxSteps = type === "enum" ? this.props.enum.length : type === "int" ? mmax - mmin : full;

    if (step) {
      if (type === "enum") return this.props.enum.length;
      if (type === "int") return Math.min(Math.floor((mmax - mmin) / (Math.round(step) || 1)), maxSteps);
      return Math.min(Math.floor((mmax - mmin) / step), maxSteps);
    }

    if (steps) return Math.min(steps, maxSteps);
    return maxSteps;
  }

  get distance() {
    var _this$props2 = this.props,
        type = _this$props2.type,
        mmax = _this$props2.mmax,
        mmin = _this$props2.mmin,
        value = _this$props2.value;
    return type === "enum" ? value / this.props.enum.length : (value - mmin) / (mmax - mmin);
  }

  get stepRange() {
    var _this$props3 = this.props,
        type = _this$props3.type,
        mmax = _this$props3.mmax,
        mmin = _this$props3.mmin,
        step = _this$props3.step;
    var full = 100;
    if (step) return type === "enum" ? full / this.props.enum.length : type === "int" ? (Math.round(step) || 1) / (mmax - mmin) * full : step / (mmax - mmin) * full;
    var trueSteps = this.trueSteps;
    return full / trueSteps;
  }

  paint() {
    var _this$props4 = this.props,
        width = _this$props4.width,
        height = _this$props4.height,
        active = _this$props4.active,
        focus = _this$props4.focus,
        fontname = _this$props4.fontname,
        fontsize = _this$props4.fontsize,
        fontface = _this$props4.fontface,
        appearance = _this$props4.appearance,
        triangle = _this$props4.triangle,
        showname = _this$props4.showname,
        shownumber = _this$props4.shownumber,
        bordercolor = _this$props4.bordercolor,
        focusbordercolor = _this$props4.focusbordercolor,
        panelcolor = _this$props4.panelcolor,
        activeneedlecolor = _this$props4.activeneedlecolor,
        needlecolor = _this$props4.needlecolor,
        activedialcolor = _this$props4.activedialcolor,
        dialcolor = _this$props4.dialcolor,
        textcolor = _this$props4.textcolor,
        tribordercolor = _this$props4.tribordercolor,
        tricolor = _this$props4.tricolor,
        shortname = _this$props4.shortname;
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
    var _this$props5 = this.props,
        type = _this$props5.type,
        mmin = _this$props5.mmin,
        mmax = _this$props5.mmax;
    var stepRange = this.stepRange;
    var trueSteps = this.trueSteps;
    var step = type === "enum" ? 1 : (mmax - mmin) / trueSteps;
    var prevSteps = type === "enum" ? e.prevValue : (e.prevValue - mmin) / step;
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

  static get props() {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, super.props, {
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
    var _this$props = this.props,
        mode = _this$props.mode,
        value = _this$props.value;
    return (mode === "decibel" ? Math.max(-70, value) : Object(_utils__WEBPACK_IMPORTED_MODULE_2__["atodb"])(Math.abs(value))) / 70 + 1;
  }

  paint(paintIn) {
    this.paintValue = Math.max(this.paintValue, this.distance);

    if (!paintIn) {
      if (!this.paintTimer) this.paintTimer = setTimeout(() => this.paint(true), this.props.interval);
      return;
    }

    this.paintTimer = undefined;
    var _this$props2 = this.props,
        active = _this$props2.active,
        width = _this$props2.width,
        height = _this$props2.height,
        orientation = _this$props2.orientation,
        clip_size = _this$props2.clip_size,
        bgcolor = _this$props2.bgcolor,
        inactivecoldcolor = _this$props2.inactivecoldcolor,
        inactivewarmcolor = _this$props2.inactivewarmcolor,
        coldcolor = _this$props2.coldcolor,
        warmcolor = _this$props2.warmcolor,
        hotcolor = _this$props2.hotcolor,
        overloadcolor = _this$props2.overloadcolor;
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
      if (newValue !== this.props.value) this.setValue(newValue);
    };

    this.handlePointerUp = () => {
      this._inTouch = false;
    };
  }

  static get props() {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, super.props, {
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
    var _this$props = this.props,
        type = _this$props.type,
        mmax = _this$props.mmax,
        mmin = _this$props.mmin,
        steps = _this$props.steps,
        step = _this$props.step;
    var full = 100;
    var maxSteps = type === "enum" ? this.props.enum.length : type === "int" ? mmax - mmin : full;

    if (step) {
      if (type === "enum") return this.props.enum.length;
      if (type === "int") return Math.min(Math.floor((mmax - mmin) / Math.round(step)), maxSteps);
      return Math.min(Math.floor((mmax - mmin) / step), maxSteps);
    }

    if (steps) return Math.min(steps, maxSteps);
    return maxSteps;
  }

  get distance() {
    var _this$props2 = this.props,
        type = _this$props2.type,
        mmax = _this$props2.mmax,
        mmin = _this$props2.mmin,
        value = _this$props2.value;
    return type === "enum" ? value / this.props.enum.length : (value - mmin) / (mmax - mmin);
  }

  get stepRange() {
    var _this$props3 = this.props,
        type = _this$props3.type,
        mmax = _this$props3.mmax,
        mmin = _this$props3.mmin,
        step = _this$props3.step;
    var full = 100;
    if (step) return type === "enum" ? full / this.props.enum.length : type === "int" ? Math.round(step) / (mmax - mmin) * full : step / (mmax - mmin) * full;
    var trueSteps = this.trueSteps;
    return full / trueSteps;
  }

  paint() {
    var _this$props4 = this.props,
        width = _this$props4.width,
        height = _this$props4.height,
        active = _this$props4.active,
        focus = _this$props4.focus,
        fontname = _this$props4.fontname,
        fontsize = _this$props4.fontsize,
        fontface = _this$props4.fontface,
        appearance = _this$props4.appearance,
        activebgcolor = _this$props4.activebgcolor,
        bordercolor = _this$props4.bordercolor,
        focusbordercolor = _this$props4.focusbordercolor,
        textcolor = _this$props4.textcolor,
        tricolor = _this$props4.tricolor,
        activetricolor = _this$props4.activetricolor,
        tricolor2 = _this$props4.tricolor2,
        activetricolor2 = _this$props4.activetricolor2,
        activeslidercolor = _this$props4.activeslidercolor;
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
    var _this$props5 = this.props,
        type = _this$props5.type,
        mmin = _this$props5.mmin,
        mmax = _this$props5.mmax;
    var stepRange = this.stepRange;
    var trueSteps = this.trueSteps;
    var step = type === "enum" ? 1 : this.props.step || (mmax - mmin) / trueSteps;
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
      var value = this.props.value;
      if (e.x < this.interactionRect[0] || e.x > this.interactionRect[0] + this.interactionRect[2] || e.y < this.interactionRect[1] || e.y > this.interactionRect[1] + this.interactionRect[3]) return;
      var newValue = this.getValueFromPos(e);
      if (newValue !== value) this.setValue(this.getValueFromPos(e));
      this._inTouch = true;
    };

    this.handlePointerDrag = e => {
      if (!this._inTouch) return;
      var newValue = this.getValueFromPos(e);
      if (newValue !== this.props.value) this.setValue(newValue);
    };

    this.handlePointerUp = () => {
      this._inTouch = false;
    };
  }

  static get props() {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, super.props, {
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
    var _this$props = this.props,
        orientation = _this$props.orientation,
        type = _this$props.type,
        mmax = _this$props.mmax,
        mmin = _this$props.mmin,
        steps = _this$props.steps,
        step = _this$props.step;
    var full = this.interactionRect[orientation === "vertical" ? 3 : 2];
    var maxSteps = type === "enum" ? this.props.enum.length : type === "int" ? mmax - mmin : full;

    if (step) {
      if (type === "enum") return this.props.enum.length;
      if (type === "int") return Math.min(Math.floor((mmax - mmin) / Math.round(step)), maxSteps);
      return Math.min(Math.floor((mmax - mmin) / step), maxSteps);
    }

    if (steps) return Math.min(steps, maxSteps);
    return maxSteps;
  }

  get distance() {
    var _this$props2 = this.props,
        type = _this$props2.type,
        mmax = _this$props2.mmax,
        mmin = _this$props2.mmin,
        value = _this$props2.value;
    return type === "enum" ? value / this.props.enum.length : (value - mmin) / (mmax - mmin);
  }

  get stepRange() {
    var _this$props3 = this.props,
        orientation = _this$props3.orientation,
        type = _this$props3.type,
        mmax = _this$props3.mmax,
        mmin = _this$props3.mmin,
        step = _this$props3.step;
    var full = this.interactionRect[orientation === "vertical" ? 3 : 2];
    if (step) return type === "enum" ? full / this.props.enum.length : type === "int" ? Math.round(step) / (mmax - mmin) * full : step / (mmax - mmin) * full;
    var trueSteps = this.trueSteps;
    return full / trueSteps;
  }

  paint() {
    var _this$props4 = this.props,
        width = _this$props4.width,
        height = _this$props4.height,
        fontname = _this$props4.fontname,
        fontsize = _this$props4.fontsize,
        fontface = _this$props4.fontface,
        orientation = _this$props4.orientation,
        showname = _this$props4.showname,
        shownumber = _this$props4.shownumber,
        slidercolor = _this$props4.slidercolor,
        textcolor = _this$props4.textcolor,
        tribordercolor = _this$props4.tribordercolor,
        trioncolor = _this$props4.trioncolor,
        tricolor = _this$props4.tricolor,
        shortname = _this$props4.shortname;
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
    var _this$props5 = this.props,
        orientation = _this$props5.orientation,
        type = _this$props5.type,
        mmin = _this$props5.mmin,
        mmax = _this$props5.mmax;
    var stepRange = this.stepRange;
    var trueSteps = this.trueSteps;
    var step = this.props.step || (mmax - mmin) / trueSteps;
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
          this.setValue(i);
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

  static get props() {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, super.props, {
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
    var _this$props = this.props,
        width = _this$props.width,
        height = _this$props.height,
        multiline = _this$props.multiline,
        mode = _this$props.mode,
        spacing_x = _this$props.spacing_x,
        spacing_y = _this$props.spacing_y;
    var enums = this.props.enum;
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
    var _this$props2 = this.props,
        active = _this$props2.active,
        focus = _this$props2.focus,
        fontname = _this$props2.fontname,
        fontsize = _this$props2.fontsize,
        fontface = _this$props2.fontface,
        activebgcolor = _this$props2.activebgcolor,
        activebgoncolor = _this$props2.activebgoncolor,
        bgcolor = _this$props2.bgcolor,
        bgoncolor = _this$props2.bgoncolor,
        bordercolor = _this$props2.bordercolor,
        focusbordercolor = _this$props2.focusbordercolor,
        textcolor = _this$props2.textcolor,
        textoncolor = _this$props2.textoncolor,
        activetextcolor = _this$props2.activetextcolor,
        activetextoncolor = _this$props2.activetextoncolor,
        value = _this$props2.value,
        width = _this$props2.width,
        height = _this$props2.height;
    var enums = this.props.enum;
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
      var _this$props = this.props,
          value = _this$props.value,
          mode = _this$props.mode;
      this._inTouch = true;
      this.setValue(mode === "button" ? 1 : 1 - value);
    };

    this.handlePointerUp = () => {
      this._inTouch = false;
      if (this.props.mode === "button") this.setValue(0);
    };
  }

  static get props() {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, super.props, {
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
    var _this$props2 = this.props,
        active = _this$props2.active,
        focus = _this$props2.focus,
        fontname = _this$props2.fontname,
        fontsize = _this$props2.fontsize,
        fontface = _this$props2.fontface,
        text = _this$props2.text,
        texton = _this$props2.texton,
        activebgcolor = _this$props2.activebgcolor,
        activebgoncolor = _this$props2.activebgoncolor,
        bgcolor = _this$props2.bgcolor,
        bgoncolor = _this$props2.bgoncolor,
        bordercolor = _this$props2.bordercolor,
        focusbordercolor = _this$props2.focusbordercolor,
        textcolor = _this$props2.textcolor,
        textoncolor = _this$props2.textoncolor,
        activetextcolor = _this$props2.activetextcolor,
        activetextoncolor = _this$props2.activetextoncolor,
        mode = _this$props2.mode,
        value = _this$props2.value,
        width = _this$props2.width,
        height = _this$props2.height;
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
      var value = this.props.value;
      this.setValue(1 - value);
    };
  }

  static get props() {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, super.props, {
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
    var _this$props = this.props,
        active = _this$props.active,
        focus = _this$props.focus,
        activebgcolor = _this$props.activebgcolor,
        activebgoncolor = _this$props.activebgoncolor,
        bgcolor = _this$props.bgcolor,
        bgoncolor = _this$props.bgoncolor,
        bordercolor = _this$props.bordercolor,
        focusbordercolor = _this$props.focusbordercolor,
        value = _this$props.value,
        width = _this$props.width,
        height = _this$props.height;
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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZC5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9Ad2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvd2ViY29tcG9uZW50cy1idW5kbGUuanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9zcmMvQmFzZS5zY3NzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9zcmMvQmFzZS5zY3NzPzdiNzgiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9zcmMvQmFzZS50cyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy9CdXR0b24udHMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9zcmMvQ2hhbmdlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9zcmMvRGlhbC50cyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy9NZXRlci50cyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy9OdW1ib3gudHMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9zcmMvU2xpZGVyLnRzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL1RhYi50cyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy9UZXh0LnRzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL1RvZ2dsZS50cyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6WyJMaXZlQmFzZUNvbXBvbmVudCIsIkhUTUxFbGVtZW50IiwiY29uc3RydWN0b3IiLCJyb290IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImlubmVySFRNTCIsInJlbmRlciIsIkxpdmVDb21wb25lbnQiLCJvYnNlcnZlZEF0dHJpYnV0ZXMiLCJPYmplY3QiLCJrZXlzIiwicHJvcHMiLCJjYW52YXMiLCJjdHgiLCJpc0Nvbm5lY3RlZFBvbHlmaWxsIiwiaGFuZGxlS2V5RG93biIsImUiLCJoYW5kbGVLZXlVcCIsImhhbmRsZVRvdWNoU3RhcnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvY3VzIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInByZXZYIiwidG91Y2hlcyIsInBhZ2VYIiwicHJldlkiLCJwYWdlWSIsImZyb21YIiwibGVmdCIsImZyb21ZIiwidG9wIiwicHJldlZhbHVlIiwidmFsdWUiLCJoYW5kbGVQb2ludGVyRG93biIsIngiLCJ5Iiwib3JpZ2luYWxFdmVudCIsImhhbmRsZVRvdWNoTW92ZSIsImNoYW5nZWRUb3VjaGVzIiwibW92ZW1lbnRYIiwibW92ZW1lbnRZIiwiaGFuZGxlUG9pbnRlckRyYWciLCJoYW5kbGVUb3VjaEVuZCIsImhhbmRsZVBvaW50ZXJVcCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwiaGFuZGxlV2hlZWwiLCJoYW5kbGVDbGljayIsImhhbmRsZU1vdXNlRG93biIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZU92ZXIiLCJoYW5kbGVNb3VzZU91dCIsImhhbmRsZUNvbnRleHRNZW51IiwiaGFuZGxlRm9jdXNJbiIsInBhaW50IiwiaGFuZGxlRm9jdXNPdXQiLCJjaGlsZHJlbiIsImdldENvbnRleHQiLCJkaXNwbGF5VmFsdWUiLCJ0eXBlIiwidW5pdHN0eWxlIiwidW5pdHMiLCJlbnVtIiwidG9GaXhlZCIsIk1hdGgiLCJhYnMiLCJ0b01JREkiLCJmZXRjaEF0dHJpYnV0ZSIsImkiLCJob3N0IiwiYXR0cmlidXRlcyIsImxlbmd0aCIsImF0dHIiLCJuYW1lIiwibWF0Y2giLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJrZXkiLCJvbGRWYWx1ZSIsInNldFBhcmFtVmFsdWUiLCJjb25uZWN0ZWRDYWxsYmFjayIsImNoYW5nZSIsInNldFZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsIkxpdmVDb21wb25lbnRDaGFuZ2VFdmVudCIsImRldGFpbCIsImFjdGl2ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2hvcnRuYW1lIiwibG9uZ25hbWUiLCJvcmRlciIsImxpbmtuYW1lcyIsIm1taW4iLCJtbWF4IiwiZW51bV9pY29ucyIsIm1vZG1vZGUiLCJpbml0aWFsX2VuYWJsZSIsImluaXRpYWwiLCJleHBvbmVudCIsInN0ZXAiLCJzdGVwcyIsInNwZWVkbGltIiwiZGVmZXIiLCJpbnZpc2libGUiLCJtYXBwYWJsZSIsIkxpdmVCdXR0b24iLCJfaW5Ub3VjaCIsImFjdGl2ZWJnY29sb3IiLCJhY3RpdmViZ29uY29sb3IiLCJiZ2NvbG9yIiwiYmdvbmNvbG9yIiwiYm9yZGVyY29sb3IiLCJmb2N1c2JvcmRlcmNvbG9yIiwiYm9yZGVyV2lkdGgiLCJzdHlsZSIsImxpbmVXaWR0aCIsImJ1dHRvbkJnQ29sb3IiLCJidXR0b25Cb3JkZXJDb2xvciIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImVsbGlwc2UiLCJQSSIsImZpbGwiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInNldFRpbWVvdXQiLCJyZXNldFBvaW50ZXJzIiwiQ3VzdG9tRXZlbnQiLCJMaXZlRGlhbCIsImludGVyYWN0aW9uUmVjdCIsIm5ld1ZhbHVlIiwiZ2V0VmFsdWVGcm9tRGVsdGEiLCJmb250bmFtZSIsImZvbnRzaXplIiwiZm9udGZhY2UiLCJhcHBlYXJhbmNlIiwidHJpYW5nbGUiLCJzaG93bmFtZSIsInNob3dudW1iZXIiLCJhY3RpdmVkaWFsY29sb3IiLCJkaWFsY29sb3IiLCJhY3RpdmVuZWVkbGVjb2xvciIsIm5lZWRsZWNvbG9yIiwicGFuZWxjb2xvciIsInRleHRjb2xvciIsInRyaWJvcmRlcmNvbG9yIiwidHJpY29sb3IiLCJ0cnVlU3RlcHMiLCJmdWxsIiwibWF4U3RlcHMiLCJtaW4iLCJmbG9vciIsInJvdW5kIiwiZGlzdGFuY2UiLCJzdGVwUmFuZ2UiLCJ0cmlhbmdsZUhlaWdodCIsInRyaWFuZ2xlTGluZVdpZHRoIiwic3RhcnQiLCJlbmQiLCJ2YWxQb3MiLCJkaWFsSGVpZ2h0IiwidG9SYWQiLCJkaWFsUmFkaXVzIiwiZGlhbENlbnRlclgiLCJkaWFsQ2VudGVyWSIsImFyY1N0YXJ0WCIsImNvcyIsImFyY1N0YXJ0WSIsInNpbiIsImFyY0VuZFgiLCJhcmNFbmRZIiwidmFsdWVQb3NYIiwidmFsdWVQb3NZIiwiZW5kQ2FwUmFkaXVzIiwicGFuZWxPZmZzZXQiLCJyb3VuZGVkUmVjdCIsImZpbGxSb3VuZGVkUmVjdCIsImFyYyIsIm1pZHBvaW50IiwibW92ZVRvIiwibGluZVRvIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwidGlueU9mZnNldCIsInRpcFBvc2l0aW9uWCIsInRpcFBvc2l0aW9uWSIsInByZXZTdGVwcyIsImRTdGVwcyIsIm1heCIsIkxpdmVNZXRlciIsInBhaW50VmFsdWUiLCJtYXhWYWx1ZSIsInBhaW50VGltZXIiLCJtYXhUaW1lciIsImNsaXBfc2l6ZSIsImludGVydmFsIiwib3JpZW50YXRpb24iLCJpbmFjdGl2ZWNvbGRjb2xvciIsImluYWN0aXZld2FybWNvbG9yIiwiY29sZGNvbG9yIiwid2FybWNvbG9yIiwiaG90Y29sb3IiLCJvdmVybG9hZGNvbG9yIiwiYXRvZGIiLCJwYWludEluIiwidW5kZWZpbmVkIiwiY2xpcCIsImNsZWFyVGltZW91dCIsIndhcm1TdG9wIiwiaG90U3RvcCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJmaWxsUmVjdCIsImRyYXdIZWlnaHQiLCJMaXZlTnVtYm94IiwiYWN0aXZldHJpY29sb3IiLCJ0cmljb2xvcjIiLCJhY3RpdmV0cmljb2xvcjIiLCJhY3RpdmVzbGlkZXJjb2xvciIsImNsb3NlUGF0aCIsInRleHRCYXNlbGluZSIsIkxpdmVTbGlkZXIiLCJnZXRWYWx1ZUZyb21Qb3MiLCJzbGlkZXJjb2xvciIsInRyaW9uY29sb3IiLCJyZWxhdGl2ZSIsInBhZGRpbmciLCJpbnRlcmFjdGlvbldpZHRoIiwidHJpT3JpZ2luIiwiTGl2ZVRhYiIsInRhYlJlY3RzIiwidGV4dG9uY29sb3IiLCJhY3RpdmV0ZXh0Y29sb3IiLCJhY3RpdmV0ZXh0b25jb2xvciIsInNwYWNpbmdfeCIsInNwYWNpbmdfeSIsIm11bHRpbGluZSIsImdldFRhYlJlY3RzIiwiZW51bXMiLCJtYXJnaW4iLCJtaW5IZWlnaHQiLCJjb3VudCIsImNvdW50UGVyTGluZSIsImxpbmVzIiwicmVjdFdpZHRoIiwic3BhY2luZ1giLCJzcGFjaW5nWSIsImNlaWwiLCJ0ZXh0V2lkdGhzIiwidG90YWwiLCJzcGFjZSIsImoiLCJ0ZXh0RGltZW5zaW9ucyIsIm1lYXN1cmVUZXh0IiwidXNlZCIsInJlY3RTcGFjZSIsIkxpdmVUZXh0IiwidGV4dCIsInRleHRvbiIsIkxpdmVUb2dnbGUiLCJ3aW5kb3ciLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsImYiLCJkZWdyZWVzIiwiYSIsImxvZzEwIiwiZGJ0b2EiLCJkYiIsInJhZGl1cyIsInJhZGlpIiwiZm9yRWFjaCIsInYiLCJxdWFkcmF0aWNDdXJ2ZVRvIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsc0JBQXNCLEVBQUU7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6TEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsdURBQVE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztB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QUMsQ0FBRCxDQUF4QztBQUNBdlEsS0FBRyxDQUFDMFEsZ0JBQUosQ0FBcUJwUCxDQUFDLEdBQUd1RCxLQUF6QixFQUFnQ3RELENBQUMsR0FBR3VELE1BQXBDLEVBQTRDeEQsQ0FBQyxHQUFHdUQsS0FBSixHQUFZMEwsS0FBSyxDQUFDLENBQUQsQ0FBN0QsRUFBa0VoUCxDQUFDLEdBQUd1RCxNQUF0RTtBQUNBOUUsS0FBRyxDQUFDMkssTUFBSixDQUFXckosQ0FBQyxHQUFHaVAsS0FBSyxDQUFDLENBQUQsQ0FBcEIsRUFBeUJoUCxDQUFDLEdBQUd1RCxNQUE3QjtBQUNBOUUsS0FBRyxDQUFDMFEsZ0JBQUosQ0FBcUJwUCxDQUFyQixFQUF3QkMsQ0FBQyxHQUFHdUQsTUFBNUIsRUFBb0N4RCxDQUFwQyxFQUF1Q0MsQ0FBQyxHQUFHdUQsTUFBSixHQUFheUwsS0FBSyxDQUFDLENBQUQsQ0FBekQ7QUFDQXZRLEtBQUcsQ0FBQzJLLE1BQUosQ0FBV3JKLENBQVgsRUFBY0MsQ0FBQyxHQUFHZ1AsS0FBSyxDQUFDLENBQUQsQ0FBdkI7QUFDQXZRLEtBQUcsQ0FBQzBRLGdCQUFKLENBQXFCcFAsQ0FBckIsRUFBd0JDLENBQXhCLEVBQTJCRCxDQUFDLEdBQUdpUCxLQUFLLENBQUMsQ0FBRCxDQUFwQyxFQUF5Q2hQLENBQXpDO0FBQ0F2QixLQUFHLENBQUNvTixTQUFKO0FBQ0FwTixLQUFHLENBQUNpSCxJQUFKO0FBQ0gsQ0FoQk0sQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkxpdmVDb21wb25lbnRzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkxpdmVDb21wb25lbnRzXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQ7IiwiLyoqXG5AbGljZW5zZSBAbm9jb21waWxlXG5Db3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuKGZ1bmN0aW9uKCl7LypcblxuIENvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbid1c2Ugc3RyaWN0Jzt2YXIgcix0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdz09PXRoaXM/dGhpczpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiZudWxsIT1nbG9iYWw/Z2xvYmFsOnRoaXMsY2E9XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnRpZXM/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKGEsYixjKXthIT1BcnJheS5wcm90b3R5cGUmJmEhPU9iamVjdC5wcm90b3R5cGUmJihhW2JdPWMudmFsdWUpfTtmdW5jdGlvbiBkYSgpe2RhPWZ1bmN0aW9uKCl7fTt0LlN5bWJvbHx8KHQuU3ltYm9sPWVhKX12YXIgZWE9ZnVuY3Rpb24oKXt2YXIgYT0wO3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm5cImpzY29tcF9zeW1ib2xfXCIrKGJ8fFwiXCIpK2ErK319KCk7XG5mdW5jdGlvbiBmYSgpe2RhKCk7dmFyIGE9dC5TeW1ib2wuaXRlcmF0b3I7YXx8KGE9dC5TeW1ib2wuaXRlcmF0b3I9dC5TeW1ib2woXCJpdGVyYXRvclwiKSk7XCJmdW5jdGlvblwiIT10eXBlb2YgQXJyYXkucHJvdG90eXBlW2FdJiZjYShBcnJheS5wcm90b3R5cGUsYSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGhhKHRoaXMpfX0pO2ZhPWZ1bmN0aW9uKCl7fX1mdW5jdGlvbiBoYShhKXt2YXIgYj0wO3JldHVybiBpYShmdW5jdGlvbigpe3JldHVybiBiPGEubGVuZ3RoP3tkb25lOiExLHZhbHVlOmFbYisrXX06e2RvbmU6ITB9fSl9ZnVuY3Rpb24gaWEoYSl7ZmEoKTthPXtuZXh0OmF9O2FbdC5TeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3JldHVybiBhfWZ1bmN0aW9uIGphKGEpe2ZhKCk7dmFyIGI9YVtTeW1ib2wuaXRlcmF0b3JdO3JldHVybiBiP2IuY2FsbChhKTpoYShhKX1cbmZ1bmN0aW9uIGthKGEpe2Zvcih2YXIgYixjPVtdOyEoYj1hLm5leHQoKSkuZG9uZTspYy5wdXNoKGIudmFsdWUpO3JldHVybiBjfXZhciBsYTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3Quc2V0UHJvdG90eXBlT2YpbGE9T2JqZWN0LnNldFByb3RvdHlwZU9mO2Vsc2V7dmFyIG1hO2E6e3ZhciBuYT17R2E6ITB9LG9hPXt9O3RyeXtvYS5fX3Byb3RvX189bmE7bWE9b2EuR2E7YnJlYWsgYX1jYXRjaChhKXt9bWE9ITF9bGE9bWE/ZnVuY3Rpb24oYSxiKXthLl9fcHJvdG9fXz1iO2lmKGEuX19wcm90b19fIT09Yil0aHJvdyBuZXcgVHlwZUVycm9yKGErXCIgaXMgbm90IGV4dGVuc2libGVcIik7cmV0dXJuIGF9Om51bGx9dmFyIHBhPWxhO2Z1bmN0aW9uIHFhKCl7dGhpcy5mPSExO3RoaXMuYj1udWxsO3RoaXMuYWE9dm9pZCAwO3RoaXMuYT0xO3RoaXMuRj0wO3RoaXMuYz1udWxsfVxuZnVuY3Rpb24gcmEoYSl7aWYoYS5mKXRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO2EuZj0hMH1xYS5wcm90b3R5cGUudT1mdW5jdGlvbihhKXt0aGlzLmFhPWF9O2Z1bmN0aW9uIHNhKGEsYil7YS5jPXtKYTpiLE5hOiEwfTthLmE9YS5GfXFhLnByb3RvdHlwZS5yZXR1cm49ZnVuY3Rpb24oYSl7dGhpcy5jPXtyZXR1cm46YX07dGhpcy5hPXRoaXMuRn07ZnVuY3Rpb24gdGEoYSxiKXthLmE9MztyZXR1cm57dmFsdWU6Yn19ZnVuY3Rpb24gdWEoYSl7dGhpcy5hPW5ldyBxYTt0aGlzLmI9YX1mdW5jdGlvbiB2YShhLGIpe3JhKGEuYSk7dmFyIGM9YS5hLmI7aWYoYylyZXR1cm4gd2EoYSxcInJldHVyblwiaW4gYz9jW1wicmV0dXJuXCJdOmZ1bmN0aW9uKGEpe3JldHVybnt2YWx1ZTphLGRvbmU6ITB9fSxiLGEuYS5yZXR1cm4pO2EuYS5yZXR1cm4oYik7cmV0dXJuIHhhKGEpfVxuZnVuY3Rpb24gd2EoYSxiLGMsZCl7dHJ5e3ZhciBlPWIuY2FsbChhLmEuYixjKTtpZighKGUgaW5zdGFuY2VvZiBPYmplY3QpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJdGVyYXRvciByZXN1bHQgXCIrZStcIiBpcyBub3QgYW4gb2JqZWN0XCIpO2lmKCFlLmRvbmUpcmV0dXJuIGEuYS5mPSExLGU7dmFyIGY9ZS52YWx1ZX1jYXRjaChnKXtyZXR1cm4gYS5hLmI9bnVsbCxzYShhLmEsZykseGEoYSl9YS5hLmI9bnVsbDtkLmNhbGwoYS5hLGYpO3JldHVybiB4YShhKX1mdW5jdGlvbiB4YShhKXtmb3IoO2EuYS5hOyl0cnl7dmFyIGI9YS5iKGEuYSk7aWYoYilyZXR1cm4gYS5hLmY9ITEse3ZhbHVlOmIudmFsdWUsZG9uZTohMX19Y2F0Y2goYyl7YS5hLmFhPXZvaWQgMCxzYShhLmEsYyl9YS5hLmY9ITE7aWYoYS5hLmMpe2I9YS5hLmM7YS5hLmM9bnVsbDtpZihiLk5hKXRocm93IGIuSmE7cmV0dXJue3ZhbHVlOmIucmV0dXJuLGRvbmU6ITB9fXJldHVybnt2YWx1ZTp2b2lkIDAsZG9uZTohMH19XG5mdW5jdGlvbiB5YShhKXt0aGlzLm5leHQ9ZnVuY3Rpb24oYil7cmEoYS5hKTthLmEuYj9iPXdhKGEsYS5hLmIubmV4dCxiLGEuYS51KTooYS5hLnUoYiksYj14YShhKSk7cmV0dXJuIGJ9O3RoaXMudGhyb3c9ZnVuY3Rpb24oYil7cmEoYS5hKTthLmEuYj9iPXdhKGEsYS5hLmJbXCJ0aHJvd1wiXSxiLGEuYS51KTooc2EoYS5hLGIpLGI9eGEoYSkpO3JldHVybiBifTt0aGlzLnJldHVybj1mdW5jdGlvbihiKXtyZXR1cm4gdmEoYSxiKX07ZmEoKTt0aGlzW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc319ZnVuY3Rpb24gQmEoYSxiKXtiPW5ldyB5YShuZXcgdWEoYikpO3BhJiZwYShiLGEucHJvdG90eXBlKTtyZXR1cm4gYn1cbihmdW5jdGlvbigpe2lmKCFmdW5jdGlvbigpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7YS5pbml0RXZlbnQoXCJmb29cIiwhMCwhMCk7YS5wcmV2ZW50RGVmYXVsdCgpO3JldHVybiBhLmRlZmF1bHRQcmV2ZW50ZWR9KCkpe3ZhciBhPUV2ZW50LnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdDtFdmVudC5wcm90b3R5cGUucHJldmVudERlZmF1bHQ9ZnVuY3Rpb24oKXt0aGlzLmNhbmNlbGFibGUmJihhLmNhbGwodGhpcyksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJkZWZhdWx0UHJldmVudGVkXCIse2dldDpmdW5jdGlvbigpe3JldHVybiEwfSxjb25maWd1cmFibGU6ITB9KSl9fXZhciBiPS9UcmlkZW50Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2lmKCF3aW5kb3cuRXZlbnR8fGImJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiB3aW5kb3cuRXZlbnQpe3ZhciBjPXdpbmRvdy5FdmVudDt3aW5kb3cuRXZlbnQ9ZnVuY3Rpb24oYSxiKXtiPWJ8fHt9O3ZhciBjPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XG5jLmluaXRFdmVudChhLCEhYi5idWJibGVzLCEhYi5jYW5jZWxhYmxlKTtyZXR1cm4gY307aWYoYyl7Zm9yKHZhciBkIGluIGMpd2luZG93LkV2ZW50W2RdPWNbZF07d2luZG93LkV2ZW50LnByb3RvdHlwZT1jLnByb3RvdHlwZX19aWYoIXdpbmRvdy5DdXN0b21FdmVudHx8YiYmXCJmdW5jdGlvblwiIT09dHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCl3aW5kb3cuQ3VzdG9tRXZlbnQ9ZnVuY3Rpb24oYSxiKXtiPWJ8fHt9O3ZhciBjPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7Yy5pbml0Q3VzdG9tRXZlbnQoYSwhIWIuYnViYmxlcywhIWIuY2FuY2VsYWJsZSxiLmRldGFpbCk7cmV0dXJuIGN9LHdpbmRvdy5DdXN0b21FdmVudC5wcm90b3R5cGU9d2luZG93LkV2ZW50LnByb3RvdHlwZTtpZighd2luZG93Lk1vdXNlRXZlbnR8fGImJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiB3aW5kb3cuTW91c2VFdmVudCl7Yj13aW5kb3cuTW91c2VFdmVudDt3aW5kb3cuTW91c2VFdmVudD1cbmZ1bmN0aW9uKGEsYil7Yj1ifHx7fTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRcIik7Yy5pbml0TW91c2VFdmVudChhLCEhYi5idWJibGVzLCEhYi5jYW5jZWxhYmxlLGIudmlld3x8d2luZG93LGIuZGV0YWlsLGIuc2NyZWVuWCxiLnNjcmVlblksYi5jbGllbnRYLGIuY2xpZW50WSxiLmN0cmxLZXksYi5hbHRLZXksYi5zaGlmdEtleSxiLm1ldGFLZXksYi5idXR0b24sYi5yZWxhdGVkVGFyZ2V0KTtyZXR1cm4gY307aWYoYilmb3IoZCBpbiBiKXdpbmRvdy5Nb3VzZUV2ZW50W2RdPWJbZF07d2luZG93Lk1vdXNlRXZlbnQucHJvdG90eXBlPWIucHJvdG90eXBlfUFycmF5LmZyb218fChBcnJheS5mcm9tPWZ1bmN0aW9uKGEpe3JldHVybltdLnNsaWNlLmNhbGwoYSl9KTtPYmplY3QuYXNzaWdufHwoT2JqZWN0LmFzc2lnbj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSxkPTAsZTtkPGMubGVuZ3RoO2QrKylpZihlPWNbZF0pZm9yKHZhciBmPVxuYSxuPWUscT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhuKSxJPTA7STxxLmxlbmd0aDtJKyspZT1xW0ldLGZbZV09bltlXTtyZXR1cm4gYX0pfSkoKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7fWZ1bmN0aW9uIGIoYSxiKXtpZighYS5jaGlsZE5vZGVzLmxlbmd0aClyZXR1cm5bXTtzd2l0Y2goYS5ub2RlVHlwZSl7Y2FzZSBOb2RlLkRPQ1VNRU5UX05PREU6cmV0dXJuIFEuY2FsbChhLGIpO2Nhc2UgTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFOnJldHVybiBFYi5jYWxsKGEsYik7ZGVmYXVsdDpyZXR1cm4geC5jYWxsKGEsYil9fXZhciBjPVwidW5kZWZpbmVkXCI9PT10eXBlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCxkPSEoZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLmNsb25lTm9kZSgpaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSxlPSExOy9UcmlkZW50Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiZmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSxiKXtpZihhIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClmb3IodmFyIGQ7ZD1hLmZpcnN0Q2hpbGQ7KWMuY2FsbCh0aGlzLGQsYik7ZWxzZSBjLmNhbGwodGhpcyxcbmEsYik7cmV0dXJuIGF9ZT0hMDt2YXIgYj1Ob2RlLnByb3RvdHlwZS5jbG9uZU5vZGU7Tm9kZS5wcm90b3R5cGUuY2xvbmVOb2RlPWZ1bmN0aW9uKGEpe2E9Yi5jYWxsKHRoaXMsYSk7dGhpcyBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQmJihhLl9fcHJvdG9fXz1Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSk7cmV0dXJuIGF9O0RvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGw9SFRNTEVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGw7RG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvcj1IVE1MRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvcjtPYmplY3QuZGVmaW5lUHJvcGVydGllcyhEb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSx7bm9kZVR5cGU6e2dldDpmdW5jdGlvbigpe3JldHVybiBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREV9LGNvbmZpZ3VyYWJsZTohMH0sbG9jYWxOYW1lOntnZXQ6ZnVuY3Rpb24oKXt9LFxuY29uZmlndXJhYmxlOiEwfSxub2RlTmFtZTp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCIjZG9jdW1lbnQtZnJhZ21lbnRcIn0sY29uZmlndXJhYmxlOiEwfX0pO3ZhciBjPU5vZGUucHJvdG90eXBlLmluc2VydEJlZm9yZTtOb2RlLnByb3RvdHlwZS5pbnNlcnRCZWZvcmU9YTt2YXIgZD1Ob2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZDtOb2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZD1mdW5jdGlvbihiKXtiIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudD9hLmNhbGwodGhpcyxiLG51bGwpOmQuY2FsbCh0aGlzLGIpO3JldHVybiBifTt2YXIgZj1Ob2RlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCxnPU5vZGUucHJvdG90eXBlLnJlcGxhY2VDaGlsZDtOb2RlLnByb3RvdHlwZS5yZXBsYWNlQ2hpbGQ9ZnVuY3Rpb24oYixjKXtiIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudD8oYS5jYWxsKHRoaXMsYixjKSxmLmNhbGwodGhpcyxjKSk6Zy5jYWxsKHRoaXMsYixjKTtyZXR1cm4gY307RG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ9XG5mdW5jdGlvbigpe3ZhciBhPXRoaXMuY3JlYXRlRWxlbWVudChcImRmXCIpO2EuX19wcm90b19fPURvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlO3JldHVybiBhfTt2YXIgaD1Eb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZTtEb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZT1mdW5jdGlvbihhLGIpe2I9aC5jYWxsKHRoaXMsYSxifHwhMSk7YSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQmJihiLl9fcHJvdG9fXz1Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSk7cmV0dXJuIGJ9fSgpO3ZhciBmPU5vZGUucHJvdG90eXBlLmNsb25lTm9kZSxnPURvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50LGg9RG9jdW1lbnQucHJvdG90eXBlLmltcG9ydE5vZGUsaz1Ob2RlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCxsPU5vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkLG49Tm9kZS5wcm90b3R5cGUucmVwbGFjZUNoaWxkLHE9RE9NUGFyc2VyLnByb3RvdHlwZS5wYXJzZUZyb21TdHJpbmcsXG5JPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKXx8e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmlubmVySFRNTH0sc2V0OmZ1bmN0aW9uKGEpe3RoaXMuaW5uZXJIVE1MPWF9fSx2PU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93Lk5vZGUucHJvdG90eXBlLFwiY2hpbGROb2Rlc1wiKXx8e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNoaWxkTm9kZXN9fSx4PUVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwsUT1Eb2N1bWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbCxFYj1Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLEZiPWZ1bmN0aW9uKCl7aWYoIWMpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKSxiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtiLmNvbnRlbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG5hLmNvbnRlbnQuYXBwZW5kQ2hpbGQoYik7YT1hLmNsb25lTm9kZSghMCk7cmV0dXJuIDA9PT1hLmNvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGh8fDA9PT1hLmNvbnRlbnQuZmlyc3RDaGlsZC5jb250ZW50LmNoaWxkTm9kZXMubGVuZ3RofHxkfX0oKTtpZihjKXt2YXIgVD1kb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJ0ZW1wbGF0ZVwiKSxKYT0hMCxwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtwLnRleHRDb250ZW50PVwidGVtcGxhdGV7ZGlzcGxheTpub25lO31cIjt2YXIgemE9ZG9jdW1lbnQuaGVhZDt6YS5pbnNlcnRCZWZvcmUocCx6YS5maXJzdEVsZW1lbnRDaGlsZCk7YS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShIVE1MRWxlbWVudC5wcm90b3R5cGUpO3ZhciBhYT0hZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5oYXNPd25Qcm9wZXJ0eShcImlubmVySFRNTFwiKTthLlM9ZnVuY3Rpb24oYil7aWYoIWIuY29udGVudCYmYi5uYW1lc3BhY2VVUkk9PT1cbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5uYW1lc3BhY2VVUkkpe2IuY29udGVudD1ULmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtmb3IodmFyIGM7Yz1iLmZpcnN0Q2hpbGQ7KWwuY2FsbChiLmNvbnRlbnQsYyk7aWYoYWEpYi5fX3Byb3RvX189YS5wcm90b3R5cGU7ZWxzZSBpZihiLmNsb25lTm9kZT1mdW5jdGlvbihiKXtyZXR1cm4gYS5iKHRoaXMsYil9LEphKXRyeXttKGIpLHkoYil9Y2F0Y2godmgpe0phPSExfWEuYShiLmNvbnRlbnQpfX07dmFyIFg9e29wdGlvbjpbXCJzZWxlY3RcIl0sdGhlYWQ6W1widGFibGVcIl0sY29sOltcImNvbGdyb3VwXCIsXCJ0YWJsZVwiXSx0cjpbXCJ0Ym9keVwiLFwidGFibGVcIl0sdGg6W1widHJcIixcInRib2R5XCIsXCJ0YWJsZVwiXSx0ZDpbXCJ0clwiLFwidGJvZHlcIixcInRhYmxlXCJdfSxtPWZ1bmN0aW9uKGIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShiLFwiaW5uZXJIVE1MXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBiYSh0aGlzKX0sc2V0OmZ1bmN0aW9uKGIpe3ZhciBjPVhbKC88KFthLXpdW14vXFwwPlxceDIwXFx0XFxyXFxuXFxmXSspL2kuZXhlYyhiKXx8XG5bXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV07aWYoYylmb3IodmFyIGQ9MDtkPGMubGVuZ3RoO2QrKyliPVwiPFwiK2NbZF0rXCI+XCIrYitcIjwvXCIrY1tkXStcIj5cIjtULmJvZHkuaW5uZXJIVE1MPWI7Zm9yKGEuYShUKTt0aGlzLmNvbnRlbnQuZmlyc3RDaGlsZDspay5jYWxsKHRoaXMuY29udGVudCx0aGlzLmNvbnRlbnQuZmlyc3RDaGlsZCk7Yj1ULmJvZHk7aWYoYylmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKWI9Yi5sYXN0Q2hpbGQ7Zm9yKDtiLmZpcnN0Q2hpbGQ7KWwuY2FsbCh0aGlzLmNvbnRlbnQsYi5maXJzdENoaWxkKX0sY29uZmlndXJhYmxlOiEwfSl9LHk9ZnVuY3Rpb24oYSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJvdXRlckhUTUxcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCI8dGVtcGxhdGU+XCIrdGhpcy5pbm5lckhUTUwrXCI8L3RlbXBsYXRlPlwifSxzZXQ6ZnVuY3Rpb24oYSl7aWYodGhpcy5wYXJlbnROb2RlKXtULmJvZHkuaW5uZXJIVE1MPWE7Zm9yKGE9dGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtULmJvZHkuZmlyc3RDaGlsZDspbC5jYWxsKGEsXG5ULmJvZHkuZmlyc3RDaGlsZCk7bi5jYWxsKHRoaXMucGFyZW50Tm9kZSxhLHRoaXMpfWVsc2UgdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gc2V0IHRoZSAnb3V0ZXJIVE1MJyBwcm9wZXJ0eSBvbiAnRWxlbWVudCc6IFRoaXMgZWxlbWVudCBoYXMgbm8gcGFyZW50IG5vZGUuXCIpO30sY29uZmlndXJhYmxlOiEwfSl9O20oYS5wcm90b3R5cGUpO3koYS5wcm90b3R5cGUpO2EuYT1mdW5jdGlvbihjKXtjPWIoYyxcInRlbXBsYXRlXCIpO2Zvcih2YXIgZD0wLGU9Yy5sZW5ndGgsZjtkPGUmJihmPWNbZF0pO2QrKylhLlMoZil9O2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oKXthLmEoZG9jdW1lbnQpfSk7RG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24oKXt2YXIgYj1nLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtcInRlbXBsYXRlXCI9PT1iLmxvY2FsTmFtZSYmYS5TKGIpO3JldHVybiBifTtET01QYXJzZXIucHJvdG90eXBlLnBhcnNlRnJvbVN0cmluZz1cbmZ1bmN0aW9uKCl7dmFyIGI9cS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7YS5hKGIpO3JldHVybiBifTtPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBiYSh0aGlzKX0sc2V0OmZ1bmN0aW9uKGIpe0kuc2V0LmNhbGwodGhpcyxiKTthLmEodGhpcyl9LGNvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwfSk7dmFyIFk9L1smXFx1MDBBMFwiXS9nLEdiPS9bJlxcdTAwQTA8Pl0vZyxLYT1mdW5jdGlvbihhKXtzd2l0Y2goYSl7Y2FzZSBcIiZcIjpyZXR1cm5cIiZhbXA7XCI7Y2FzZSBcIjxcIjpyZXR1cm5cIiZsdDtcIjtjYXNlIFwiPlwiOnJldHVyblwiJmd0O1wiO2Nhc2UgJ1wiJzpyZXR1cm5cIiZxdW90O1wiO2Nhc2UgXCJcXHUwMGEwXCI6cmV0dXJuXCImbmJzcDtcIn19O3A9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPXt9LGM9MDtjPGEubGVuZ3RoO2MrKyliW2FbY11dPSEwO3JldHVybiBifTt2YXIgQWE9cChcImFyZWEgYmFzZSBiciBjb2wgY29tbWFuZCBlbWJlZCBociBpbWcgaW5wdXQga2V5Z2VuIGxpbmsgbWV0YSBwYXJhbSBzb3VyY2UgdHJhY2sgd2JyXCIuc3BsaXQoXCIgXCIpKSxcbkxhPXAoXCJzdHlsZSBzY3JpcHQgeG1wIGlmcmFtZSBub2VtYmVkIG5vZnJhbWVzIHBsYWludGV4dCBub3NjcmlwdFwiLnNwbGl0KFwiIFwiKSksYmE9ZnVuY3Rpb24oYSxiKXtcInRlbXBsYXRlXCI9PT1hLmxvY2FsTmFtZSYmKGE9YS5jb250ZW50KTtmb3IodmFyIGM9XCJcIixkPWI/YihhKTp2LmdldC5jYWxsKGEpLGU9MCxmPWQubGVuZ3RoLGc7ZTxmJiYoZz1kW2VdKTtlKyspe2E6e3ZhciBoPWc7dmFyIGs9YTt2YXIgbD1iO3N3aXRjaChoLm5vZGVUeXBlKXtjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOmZvcih2YXIgbj1oLmxvY2FsTmFtZSxtPVwiPFwiK24scT1oLmF0dHJpYnV0ZXMseD0wO2s9cVt4XTt4KyspbSs9XCIgXCIray5uYW1lKyc9XCInK2sudmFsdWUucmVwbGFjZShZLEthKSsnXCInO20rPVwiPlwiO2g9QWFbbl0/bTptK2JhKGgsbCkrXCI8L1wiK24rXCI+XCI7YnJlYWsgYTtjYXNlIE5vZGUuVEVYVF9OT0RFOmg9aC5kYXRhO2g9ayYmTGFbay5sb2NhbE5hbWVdP2g6aC5yZXBsYWNlKEdiLEthKTticmVhayBhO1xuY2FzZSBOb2RlLkNPTU1FTlRfTk9ERTpoPVwiXFx4M2MhLS1cIitoLmRhdGErXCItLVxceDNlXCI7YnJlYWsgYTtkZWZhdWx0OnRocm93IHdpbmRvdy5jb25zb2xlLmVycm9yKGgpLEVycm9yKFwibm90IGltcGxlbWVudGVkXCIpO319Yys9aH1yZXR1cm4gY319aWYoY3x8RmIpe2EuYj1mdW5jdGlvbihhLGIpe3ZhciBjPWYuY2FsbChhLCExKTt0aGlzLlMmJnRoaXMuUyhjKTtiJiYobC5jYWxsKGMuY29udGVudCxmLmNhbGwoYS5jb250ZW50LCEwKSksTWEoYy5jb250ZW50LGEuY29udGVudCkpO3JldHVybiBjfTt2YXIgTWE9ZnVuY3Rpb24oYyxkKXtpZihkLnF1ZXJ5U2VsZWN0b3JBbGwmJihkPWIoZCxcInRlbXBsYXRlXCIpLDAhPT1kLmxlbmd0aCkpe2M9YihjLFwidGVtcGxhdGVcIik7Zm9yKHZhciBlPTAsZj1jLmxlbmd0aCxnLGg7ZTxmO2UrKyloPWRbZV0sZz1jW2VdLGEmJmEuUyYmYS5TKGgpLG4uY2FsbChnLnBhcmVudE5vZGUsc2YuY2FsbChoLCEwKSxnKX19LHNmPU5vZGUucHJvdG90eXBlLmNsb25lTm9kZT1cbmZ1bmN0aW9uKGIpe2lmKCFlJiZkJiZ0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClpZihiKXZhciBjPXRmLmNhbGwodGhpcy5vd25lckRvY3VtZW50LHRoaXMsITApO2Vsc2UgcmV0dXJuIHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7ZWxzZSB0aGlzLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUmJlwidGVtcGxhdGVcIj09PXRoaXMubG9jYWxOYW1lJiZ0aGlzLm5hbWVzcGFjZVVSST09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm5hbWVzcGFjZVVSST9jPWEuYih0aGlzLGIpOmM9Zi5jYWxsKHRoaXMsYik7YiYmTWEoYyx0aGlzKTtyZXR1cm4gY30sdGY9RG9jdW1lbnQucHJvdG90eXBlLmltcG9ydE5vZGU9ZnVuY3Rpb24oYyxkKXtkPWR8fCExO2lmKFwidGVtcGxhdGVcIj09PWMubG9jYWxOYW1lKXJldHVybiBhLmIoYyxkKTt2YXIgZT1oLmNhbGwodGhpcyxjLGQpO2lmKGQpe01hKGUsYyk7Yz1iKGUsJ3NjcmlwdDpub3QoW3R5cGVdKSxzY3JpcHRbdHlwZT1cImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIl0sc2NyaXB0W3R5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIl0nKTtcbmZvcih2YXIgZixrPTA7azxjLmxlbmd0aDtrKyspe2Y9Y1trXTtkPWcuY2FsbChkb2N1bWVudCxcInNjcmlwdFwiKTtkLnRleHRDb250ZW50PWYudGV4dENvbnRlbnQ7Zm9yKHZhciBsPWYuYXR0cmlidXRlcyxtPTAscTttPGwubGVuZ3RoO20rKylxPWxbbV0sZC5zZXRBdHRyaWJ1dGUocS5uYW1lLHEudmFsdWUpO24uY2FsbChmLnBhcmVudE5vZGUsZCxmKX19cmV0dXJuIGV9fWMmJih3aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudD1hKX0pKCk7dmFyIENhPXNldFRpbWVvdXQ7ZnVuY3Rpb24gRGEoKXt9ZnVuY3Rpb24gRWEoYSxiKXtyZXR1cm4gZnVuY3Rpb24oKXthLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gdShhKXtpZighKHRoaXMgaW5zdGFuY2VvZiB1KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3XCIpO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhKXRocm93IG5ldyBUeXBlRXJyb3IoXCJub3QgYSBmdW5jdGlvblwiKTt0aGlzLkk9MDt0aGlzLm9hPSExO3RoaXMudz12b2lkIDA7dGhpcy5VPVtdO0ZhKGEsdGhpcyl9XG5mdW5jdGlvbiBHYShhLGIpe2Zvcig7Mz09PWEuSTspYT1hLnc7MD09PWEuST9hLlUucHVzaChiKTooYS5vYT0hMCxIYShmdW5jdGlvbigpe3ZhciBjPTE9PT1hLkk/Yi5QYTpiLlFhO2lmKG51bGw9PT1jKSgxPT09YS5JP0lhOk5hKShiLm1hLGEudyk7ZWxzZXt0cnl7dmFyIGQ9YyhhLncpfWNhdGNoKGUpe05hKGIubWEsZSk7cmV0dXJufUlhKGIubWEsZCl9fSkpfWZ1bmN0aW9uIElhKGEsYil7dHJ5e2lmKGI9PT1hKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLlwiKTtpZihiJiYoXCJvYmplY3RcIj09PXR5cGVvZiBifHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYikpe3ZhciBjPWIudGhlbjtpZihiIGluc3RhbmNlb2YgdSl7YS5JPTM7YS53PWI7T2EoYSk7cmV0dXJufWlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBjKXtGYShFYShjLGIpLGEpO3JldHVybn19YS5JPTE7YS53PWI7T2EoYSl9Y2F0Y2goZCl7TmEoYSxkKX19XG5mdW5jdGlvbiBOYShhLGIpe2EuST0yO2Eudz1iO09hKGEpfWZ1bmN0aW9uIE9hKGEpezI9PT1hLkkmJjA9PT1hLlUubGVuZ3RoJiZIYShmdW5jdGlvbigpe2Eub2F8fFwidW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZSYmY29uc29sZSYmY29uc29sZS53YXJuKFwiUG9zc2libGUgVW5oYW5kbGVkIFByb21pc2UgUmVqZWN0aW9uOlwiLGEudyl9KTtmb3IodmFyIGI9MCxjPWEuVS5sZW5ndGg7YjxjO2IrKylHYShhLGEuVVtiXSk7YS5VPW51bGx9ZnVuY3Rpb24gUGEoYSxiLGMpe3RoaXMuUGE9XCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsO3RoaXMuUWE9XCJmdW5jdGlvblwiPT09dHlwZW9mIGI/YjpudWxsO3RoaXMubWE9Y31mdW5jdGlvbiBGYShhLGIpe3ZhciBjPSExO3RyeXthKGZ1bmN0aW9uKGEpe2N8fChjPSEwLElhKGIsYSkpfSxmdW5jdGlvbihhKXtjfHwoYz0hMCxOYShiLGEpKX0pfWNhdGNoKGQpe2N8fChjPSEwLE5hKGIsZCkpfX1cbnUucHJvdG90eXBlW1wiY2F0Y2hcIl09ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMudGhlbihudWxsLGEpfTt1LnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGEsYil7dmFyIGM9bmV3IHRoaXMuY29uc3RydWN0b3IoRGEpO0dhKHRoaXMsbmV3IFBhKGEsYixjKSk7cmV0dXJuIGN9O3UucHJvdG90eXBlW1wiZmluYWxseVwiXT1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmNvbnN0cnVjdG9yO3JldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24oYyl7cmV0dXJuIGIucmVzb2x2ZShhKCkpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gY30pfSxmdW5jdGlvbihjKXtyZXR1cm4gYi5yZXNvbHZlKGEoKSkudGhlbihmdW5jdGlvbigpe3JldHVybiBiLnJlamVjdChjKX0pfSl9O1xuZnVuY3Rpb24gUWEoYSl7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGIsYyl7ZnVuY3Rpb24gZChhLGcpe3RyeXtpZihnJiYoXCJvYmplY3RcIj09PXR5cGVvZiBnfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZykpe3ZhciBoPWcudGhlbjtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgaCl7aC5jYWxsKGcsZnVuY3Rpb24oYil7ZChhLGIpfSxjKTtyZXR1cm59fWVbYV09ZzswPT09LS1mJiZiKGUpfWNhdGNoKG4pe2Mobil9fWlmKCFhfHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIGEubGVuZ3RoKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlLmFsbCBhY2NlcHRzIGFuIGFycmF5XCIpO3ZhciBlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEpO2lmKDA9PT1lLmxlbmd0aClyZXR1cm4gYihbXSk7Zm9yKHZhciBmPWUubGVuZ3RoLGc9MDtnPGUubGVuZ3RoO2crKylkKGcsZVtnXSl9KX1cbmZ1bmN0aW9uIFJhKGEpe3JldHVybiBhJiZcIm9iamVjdFwiPT09dHlwZW9mIGEmJmEuY29uc3RydWN0b3I9PT11P2E6bmV3IHUoZnVuY3Rpb24oYil7YihhKX0pfWZ1bmN0aW9uIFNhKGEpe3JldHVybiBuZXcgdShmdW5jdGlvbihiLGMpe2MoYSl9KX1mdW5jdGlvbiBUYShhKXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYixjKXtmb3IodmFyIGQ9MCxlPWEubGVuZ3RoO2Q8ZTtkKyspYVtkXS50aGVuKGIsYyl9KX12YXIgSGE9XCJmdW5jdGlvblwiPT09dHlwZW9mIHNldEltbWVkaWF0ZSYmZnVuY3Rpb24oYSl7c2V0SW1tZWRpYXRlKGEpfXx8ZnVuY3Rpb24oYSl7Q2EoYSwwKX07LypcblxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmlmKCF3aW5kb3cuUHJvbWlzZSl7d2luZG93LlByb21pc2U9dTt1LnByb3RvdHlwZS50aGVuPXUucHJvdG90eXBlLnRoZW47dS5hbGw9UWE7dS5yYWNlPVRhO3UucmVzb2x2ZT1SYTt1LnJlamVjdD1TYTt2YXIgVWE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIiksVmE9W107KG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBhPVZhLmxlbmd0aCxiPTA7YjxhO2IrKylWYVtiXSgpO1ZhLnNwbGljZSgwLGEpfSkpLm9ic2VydmUoVWEse2NoYXJhY3RlckRhdGE6ITB9KTtIYT1mdW5jdGlvbihhKXtWYS5wdXNoKGEpO1VhLnRleHRDb250ZW50PTA8VWEudGV4dENvbnRlbnQubGVuZ3RoP1wiXCI6XCJhXCJ9fTsvKlxuIENvcHlyaWdodCAoQykgMjAxNSBieSBXZWJSZWZsZWN0aW9uXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cblxuKi9cbihmdW5jdGlvbihhLGIpe2lmKCEoYiBpbiBhKSl7dmFyIGM9dHlwZW9mIGdsb2JhbD09PXR5cGVvZiBjP3dpbmRvdzpnbG9iYWwsZD0wLGU9XCJcIitNYXRoLnJhbmRvbSgpLGY9XCJfX1xcdTAwMDFzeW1ib2xAQFwiK2UsZz1hLmdldE93blByb3BlcnR5TmFtZXMsaD1hLmdldE93blByb3BlcnR5RGVzY3JpcHRvcixrPWEuY3JlYXRlLGw9YS5rZXlzLG49YS5mcmVlemV8fGEscT1hLmRlZmluZVByb3BlcnR5LEk9YS5kZWZpbmVQcm9wZXJ0aWVzLHY9aChhLFwiZ2V0T3duUHJvcGVydHlOYW1lc1wiKSx4PWEucHJvdG90eXBlLFE9eC5oYXNPd25Qcm9wZXJ0eSxFYj14LnByb3BlcnR5SXNFbnVtZXJhYmxlLEZiPXgudG9TdHJpbmcsVD1mdW5jdGlvbihhLGIsYyl7US5jYWxsKGEsZil8fHEoYSxmLHtlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMSx3cml0YWJsZTohMSx2YWx1ZTp7fX0pO2FbZl1bXCJAQFwiK2JdPWN9LEphPWZ1bmN0aW9uKGEsYil7dmFyIGM9ayhhKTtnKGIpLmZvckVhY2goZnVuY3Rpb24oYSl7WC5jYWxsKGIsXG5hKSYmQWEoYyxhLGJbYV0pfSk7cmV0dXJuIGN9LHA9ZnVuY3Rpb24oKXt9LHphPWZ1bmN0aW9uKGEpe3JldHVybiBhIT1mJiYhUS5jYWxsKFksYSl9LGFhPWZ1bmN0aW9uKGEpe3JldHVybiBhIT1mJiZRLmNhbGwoWSxhKX0sWD1mdW5jdGlvbihhKXt2YXIgYj1cIlwiK2E7cmV0dXJuIGFhKGIpP1EuY2FsbCh0aGlzLGIpJiZ0aGlzW2ZdW1wiQEBcIitiXTpFYi5jYWxsKHRoaXMsYSl9LG09ZnVuY3Rpb24oYil7cSh4LGIse2VudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLGdldDpwLHNldDpmdW5jdGlvbihhKXtiYSh0aGlzLGIse2VudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmF9KTtUKHRoaXMsYiwhMCl9fSk7cmV0dXJuIG4oWVtiXT1xKGEoYiksXCJjb25zdHJ1Y3RvclwiLEdiKSl9LHk9ZnVuY3Rpb24oYSl7aWYodGhpcyYmdGhpcyE9PWMpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvclwiKTtyZXR1cm4gbShcIl9fXFx1MDAwMXN5bWJvbDpcIi5jb25jYXQoYXx8XG5cIlwiLGUsKytkKSl9LFk9ayhudWxsKSxHYj17dmFsdWU6eX0sS2E9ZnVuY3Rpb24oYSl7cmV0dXJuIFlbYV19LEFhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1cIlwiK2I7aWYoYWEoZCkpe2I9YmE7aWYoYy5lbnVtZXJhYmxlKXt2YXIgZT1rKGMpO2UuZW51bWVyYWJsZT0hMX1lbHNlIGU9YztiKGEsZCxlKTtUKGEsZCwhIWMuZW51bWVyYWJsZSl9ZWxzZSBxKGEsYixjKTtyZXR1cm4gYX0sTGE9ZnVuY3Rpb24oYSl7cmV0dXJuIGcoYSkuZmlsdGVyKGFhKS5tYXAoS2EpfTt2LnZhbHVlPUFhO3EoYSxcImRlZmluZVByb3BlcnR5XCIsdik7di52YWx1ZT1MYTtxKGEsYix2KTt2LnZhbHVlPWZ1bmN0aW9uKGEpe3JldHVybiBnKGEpLmZpbHRlcih6YSl9O3EoYSxcImdldE93blByb3BlcnR5TmFtZXNcIix2KTt2LnZhbHVlPWZ1bmN0aW9uKGEsYil7dmFyIGM9TGEoYik7Yy5sZW5ndGg/bChiKS5jb25jYXQoYykuZm9yRWFjaChmdW5jdGlvbihjKXtYLmNhbGwoYixjKSYmQWEoYSxjLGJbY10pfSk6SShhLFxuYik7cmV0dXJuIGF9O3EoYSxcImRlZmluZVByb3BlcnRpZXNcIix2KTt2LnZhbHVlPVg7cSh4LFwicHJvcGVydHlJc0VudW1lcmFibGVcIix2KTt2LnZhbHVlPXk7cShjLFwiU3ltYm9sXCIsdik7di52YWx1ZT1mdW5jdGlvbihhKXthPVwiX19cXHUwMDAxc3ltYm9sOlwiLmNvbmNhdChcIl9fXFx1MDAwMXN5bWJvbDpcIixhLGUpO3JldHVybiBhIGluIHg/WVthXTptKGEpfTtxKHksXCJmb3JcIix2KTt2LnZhbHVlPWZ1bmN0aW9uKGEpe2lmKHphKGEpKXRocm93IG5ldyBUeXBlRXJyb3IoYStcIiBpcyBub3QgYSBzeW1ib2xcIik7cmV0dXJuIFEuY2FsbChZLGEpP2Euc2xpY2UoMjAsLWUubGVuZ3RoKTp2b2lkIDB9O3EoeSxcImtleUZvclwiLHYpO3YudmFsdWU9ZnVuY3Rpb24oYSxiKXt2YXIgYz1oKGEsYik7YyYmYWEoYikmJihjLmVudW1lcmFibGU9WC5jYWxsKGEsYikpO3JldHVybiBjfTtxKGEsXCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JcIix2KTt2LnZhbHVlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP1xuayhhKTpKYShhLGIpfTtxKGEsXCJjcmVhdGVcIix2KTt2LnZhbHVlPWZ1bmN0aW9uKCl7dmFyIGE9RmIuY2FsbCh0aGlzKTtyZXR1cm5cIltvYmplY3QgU3RyaW5nXVwiPT09YSYmYWEodGhpcyk/XCJbb2JqZWN0IFN5bWJvbF1cIjphfTtxKHgsXCJ0b1N0cmluZ1wiLHYpO3RyeXt2YXIgYmE9ayhxKHt9LFwiX19cXHUwMDAxc3ltYm9sOlwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcSh0aGlzLFwiX19cXHUwMDAxc3ltYm9sOlwiLHt2YWx1ZTohMX0pW1wiX19cXHUwMDAxc3ltYm9sOlwiXX19KSlbXCJfX1xcdTAwMDFzeW1ib2w6XCJdfHxxfWNhdGNoKE1hKXtiYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9aCh4LGIpO2RlbGV0ZSB4W2JdO3EoYSxiLGMpO3EoeCxiLGQpfX19fSkoT2JqZWN0LFwiZ2V0T3duUHJvcGVydHlTeW1ib2xzXCIpO1xuKGZ1bmN0aW9uKGEpe3ZhciBiPWEuZGVmaW5lUHJvcGVydHksYz1hLnByb3RvdHlwZSxkPWMudG9TdHJpbmcsZTtcIml0ZXJhdG9yIG1hdGNoIHJlcGxhY2Ugc2VhcmNoIHNwbGl0IGhhc0luc3RhbmNlIGlzQ29uY2F0U3ByZWFkYWJsZSB1bnNjb3BhYmxlcyBzcGVjaWVzIHRvUHJpbWl0aXZlIHRvU3RyaW5nVGFnXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oZil7aWYoIShmIGluIFN5bWJvbCkpc3dpdGNoKGIoU3ltYm9sLGYse3ZhbHVlOlN5bWJvbChmKX0pLGYpe2Nhc2UgXCJ0b1N0cmluZ1RhZ1wiOmU9YS5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYyxcInRvU3RyaW5nXCIpLGUudmFsdWU9ZnVuY3Rpb24oKXt2YXIgYT1kLmNhbGwodGhpcyksYj10aGlzW1N5bWJvbC50b1N0cmluZ1RhZ107cmV0dXJuXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBiP2E6XCJbb2JqZWN0IFwiK2IrXCJdXCJ9LGIoYyxcInRvU3RyaW5nXCIsZSl9fSl9KShPYmplY3QsU3ltYm9sKTtcbihmdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZCgpe3JldHVybiB0aGlzfWJbYV18fChiW2FdPWZ1bmN0aW9uKCl7dmFyIGI9MCxjPXRoaXMsZz17bmV4dDpmdW5jdGlvbigpe3ZhciBhPWMubGVuZ3RoPD1iO3JldHVybiBhP3tkb25lOmF9Ontkb25lOmEsdmFsdWU6Y1tiKytdfX19O2dbYV09ZDtyZXR1cm4gZ30pO2NbYV18fChjW2FdPWZ1bmN0aW9uKCl7dmFyIGI9U3RyaW5nLmZyb21Db2RlUG9pbnQsYz10aGlzLGc9MCxoPWMubGVuZ3RoLGs9e25leHQ6ZnVuY3Rpb24oKXt2YXIgYT1oPD1nLGQ9YT9cIlwiOmIoYy5jb2RlUG9pbnRBdChnKSk7Zys9ZC5sZW5ndGg7cmV0dXJuIGE/e2RvbmU6YX06e2RvbmU6YSx2YWx1ZTpkfX19O2tbYV09ZDtyZXR1cm4ga30pfSkoU3ltYm9sLml0ZXJhdG9yLEFycmF5LnByb3RvdHlwZSxTdHJpbmcucHJvdG90eXBlKTsvKlxuXG5Db3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xudmFyIFdhPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT10aGlzP1wiW29iamVjdCBVbmRlZmluZWRdXCI6bnVsbD09PXRoaXM/XCJbb2JqZWN0IE51bGxdXCI6V2EuY2FsbCh0aGlzKX07T2JqZWN0LmtleXM9ZnVuY3Rpb24oYSl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGEpLmZpbHRlcihmdW5jdGlvbihiKXtyZXR1cm4oYj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEsYikpJiZiLmVudW1lcmFibGV9KX07dmFyIFhhPXdpbmRvdy5TeW1ib2wuaXRlcmF0b3I7XG5TdHJpbmcucHJvdG90eXBlW1hhXSYmU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdHx8KFN0cmluZy5wcm90b3R5cGVbWGFdPWZ1bmN0aW9uIFlhKCl7dmFyIGIsYz10aGlzO3JldHVybiBCYShZYSxmdW5jdGlvbihkKXsxPT1kLmEmJihiPTApO2lmKDMhPWQuYSlyZXR1cm4gYjxjLmxlbmd0aD9kPXRhKGQsY1tiXSk6KGQuYT0wLGQ9dm9pZCAwKSxkO2IrKztkLmE9Mn0pfSk7U2V0LnByb3RvdHlwZVtYYV18fChTZXQucHJvdG90eXBlW1hhXT1mdW5jdGlvbiBaYSgpe3ZhciBiLGM9dGhpcyxkO3JldHVybiBCYShaYSxmdW5jdGlvbihlKXsxPT1lLmEmJihiPVtdLGMuZm9yRWFjaChmdW5jdGlvbihjKXtiLnB1c2goYyl9KSxkPTApO2lmKDMhPWUuYSlyZXR1cm4gZDxiLmxlbmd0aD9lPXRhKGUsYltkXSk6KGUuYT0wLGU9dm9pZCAwKSxlO2QrKztlLmE9Mn0pfSk7XG5NYXAucHJvdG90eXBlW1hhXXx8KE1hcC5wcm90b3R5cGVbWGFdPWZ1bmN0aW9uICRhKCl7dmFyIGIsYz10aGlzLGQ7cmV0dXJuIEJhKCRhLGZ1bmN0aW9uKGUpezE9PWUuYSYmKGI9W10sYy5mb3JFYWNoKGZ1bmN0aW9uKGMsZCl7Yi5wdXNoKFtkLGNdKX0pLGQ9MCk7aWYoMyE9ZS5hKXJldHVybiBkPGIubGVuZ3RoP2U9dGEoZSxiW2RdKTooZS5hPTAsZT12b2lkIDApLGU7ZCsrO2UuYT0yfSl9KTsvKlxuXG4gQ29weXJpZ2h0IChjKSAyMDE0IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xud2luZG93LldlYkNvbXBvbmVudHM9d2luZG93LldlYkNvbXBvbmVudHN8fHtmbGFnczp7fX07dmFyIGFiPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtzcmMqPVwid2ViY29tcG9uZW50cy1idW5kbGVcIl0nKSxiYj0vd2MtKC4rKS8sdz17fTtpZighdy5ub09wdHMpe2xvY2F0aW9uLnNlYXJjaC5zbGljZSgxKS5zcGxpdChcIiZcIikuZm9yRWFjaChmdW5jdGlvbihhKXthPWEuc3BsaXQoXCI9XCIpO3ZhciBiO2FbMF0mJihiPWFbMF0ubWF0Y2goYmIpKSYmKHdbYlsxXV09YVsxXXx8ITApfSk7aWYoYWIpZm9yKHZhciBjYj0wLGRiPXZvaWQgMDtkYj1hYi5hdHRyaWJ1dGVzW2NiXTtjYisrKVwic3JjXCIhPT1kYi5uYW1lJiYod1tkYi5uYW1lXT1kYi52YWx1ZXx8ITApO2lmKHcubG9nJiZ3LmxvZy5zcGxpdCl7dmFyIGViPXcubG9nLnNwbGl0KFwiLFwiKTt3LmxvZz17fTtlYi5mb3JFYWNoKGZ1bmN0aW9uKGEpe3cubG9nW2FdPSEwfSl9ZWxzZSB3LmxvZz17fX1cbndpbmRvdy5XZWJDb21wb25lbnRzLmZsYWdzPXc7dmFyIGZiPXcuc2hhZHlkb207ZmImJih3aW5kb3cuU2hhZHlET009d2luZG93LlNoYWR5RE9NfHx7fSx3aW5kb3cuU2hhZHlET00uZm9yY2U9ZmIpO3ZhciBnYj13LnJlZ2lzdGVyfHx3LmNlO2diJiZ3aW5kb3cuY3VzdG9tRWxlbWVudHMmJih3aW5kb3cuY3VzdG9tRWxlbWVudHMuZm9yY2VQb2x5ZmlsbD1nYik7LypcblxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmZ1bmN0aW9uIGhiKCl7fWhiLnByb3RvdHlwZS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm57fX07ZnVuY3Rpb24geihhKXthLl9fc2hhZHl8fChhLl9fc2hhZHk9bmV3IGhiKTtyZXR1cm4gYS5fX3NoYWR5fWZ1bmN0aW9uIEEoYSl7cmV0dXJuIGEmJmEuX19zaGFkeX07dmFyIEI9d2luZG93LlNoYWR5RE9NfHx7fTtCLkxhPSEoIUVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFNoYWRvd3x8IU5vZGUucHJvdG90eXBlLmdldFJvb3ROb2RlKTt2YXIgaWI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihOb2RlLnByb3RvdHlwZSxcImZpcnN0Q2hpbGRcIik7Qi5EPSEhKGliJiZpYi5jb25maWd1cmFibGUmJmliLmdldCk7Qi5rYT1CLmZvcmNlfHwhQi5MYTtCLk09Qi5ub1BhdGNofHwhMTtCLnRhPUIucHJlZmVyUGVyZm9ybWFuY2U7dmFyIGpiPW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goXCJUcmlkZW50XCIpO0IueWE9amI7ZnVuY3Rpb24ga2IoYSl7cmV0dXJuKGE9QShhKSkmJnZvaWQgMCE9PWEuZmlyc3RDaGlsZH1mdW5jdGlvbiBDKGEpe3JldHVyblwiU2hhZHlSb290XCI9PT1hLkRhfWZ1bmN0aW9uIGxiKGEpe3JldHVybihhPShhPUEoYSkpJiZhLnJvb3QpJiZtYihhKX1cbnZhciBuYj1FbGVtZW50LnByb3RvdHlwZSxvYj1uYi5tYXRjaGVzfHxuYi5tYXRjaGVzU2VsZWN0b3J8fG5iLm1vek1hdGNoZXNTZWxlY3Rvcnx8bmIubXNNYXRjaGVzU2VsZWN0b3J8fG5iLm9NYXRjaGVzU2VsZWN0b3J8fG5iLndlYmtpdE1hdGNoZXNTZWxlY3RvcixwYj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSxxYj0wLHJiPVtdOyhuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbigpe2Zvcig7cmIubGVuZ3RoOyl0cnl7cmIuc2hpZnQoKSgpfWNhdGNoKGEpe3Rocm93IHBiLnRleHRDb250ZW50PXFiKyssYTt9fSkpLm9ic2VydmUocGIse2NoYXJhY3RlckRhdGE6ITB9KTtmdW5jdGlvbiBzYihhKXtyYi5wdXNoKGEpO3BiLnRleHRDb250ZW50PXFiKyt9dmFyIHRiPSEhZG9jdW1lbnQuY29udGFpbnM7ZnVuY3Rpb24gdWIoYSxiKXtmb3IoO2I7KXtpZihiPT1hKXJldHVybiEwO2I9Yi5fX3NoYWR5X3BhcmVudE5vZGV9cmV0dXJuITF9XG5mdW5jdGlvbiB2YihhKXtmb3IodmFyIGI9YS5sZW5ndGgtMTswPD1iO2ItLSl7dmFyIGM9YVtiXSxkPWMuZ2V0QXR0cmlidXRlKFwiaWRcIil8fGMuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtkJiZcImxlbmd0aFwiIT09ZCYmaXNOYU4oZCkmJihhW2RdPWMpfWEuaXRlbT1mdW5jdGlvbihiKXtyZXR1cm4gYVtiXX07YS5uYW1lZEl0ZW09ZnVuY3Rpb24oYil7aWYoXCJsZW5ndGhcIiE9PWImJmlzTmFOKGIpJiZhW2JdKXJldHVybiBhW2JdO2Zvcih2YXIgYz1qYShhKSxkPWMubmV4dCgpOyFkLmRvbmU7ZD1jLm5leHQoKSlpZihkPWQudmFsdWUsKGQuZ2V0QXR0cmlidXRlKFwiaWRcIil8fGQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSk9PWIpcmV0dXJuIGQ7cmV0dXJuIG51bGx9O3JldHVybiBhfWZ1bmN0aW9uIHdiKGEpe3ZhciBiPVtdO2ZvcihhPWEuX19zaGFkeV9uYXRpdmVfZmlyc3RDaGlsZDthO2E9YS5fX3NoYWR5X25hdGl2ZV9uZXh0U2libGluZyliLnB1c2goYSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiB4YihhKXt2YXIgYj1bXTtmb3IoYT1hLl9fc2hhZHlfZmlyc3RDaGlsZDthO2E9YS5fX3NoYWR5X25leHRTaWJsaW5nKWIucHVzaChhKTtyZXR1cm4gYn1mdW5jdGlvbiBEKGEsYixjLGQpe2M9dm9pZCAwPT09Yz9cIlwiOmM7Zm9yKHZhciBlIGluIGIpe3ZhciBmPWJbZV07aWYoIShkJiYwPD1kLmluZGV4T2YoZSkpKXtmLmNvbmZpZ3VyYWJsZT0hMDt2YXIgZz1jK2U7aWYoZi52YWx1ZSlhW2ddPWYudmFsdWU7ZWxzZSB0cnl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsZyxmKX1jYXRjaChoKXt9fX19ZnVuY3Rpb24gRShhKXt2YXIgYj17fTtPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhKS5mb3JFYWNoKGZ1bmN0aW9uKGMpe2JbY109T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLGMpfSk7cmV0dXJuIGJ9O3ZhciB5Yj1bXSx6YjtmdW5jdGlvbiBBYihhKXt6Ynx8KHpiPSEwLHNiKEJiKSk7eWIucHVzaChhKX1mdW5jdGlvbiBCYigpe3piPSExO2Zvcih2YXIgYT0hIXliLmxlbmd0aDt5Yi5sZW5ndGg7KXliLnNoaWZ0KCkoKTtyZXR1cm4gYX1CYi5saXN0PXliO2Z1bmN0aW9uIENiKCl7dGhpcy5hPSExO3RoaXMuYWRkZWROb2Rlcz1bXTt0aGlzLnJlbW92ZWROb2Rlcz1bXTt0aGlzLiQ9bmV3IFNldH1mdW5jdGlvbiBEYihhKXthLmF8fChhLmE9ITAsc2IoZnVuY3Rpb24oKXthLmZsdXNoKCl9KSl9Q2IucHJvdG90eXBlLmZsdXNoPWZ1bmN0aW9uKCl7aWYodGhpcy5hKXt0aGlzLmE9ITE7dmFyIGE9dGhpcy50YWtlUmVjb3JkcygpO2EubGVuZ3RoJiZ0aGlzLiQuZm9yRWFjaChmdW5jdGlvbihiKXtiKGEpfSl9fTtDYi5wcm90b3R5cGUudGFrZVJlY29yZHM9ZnVuY3Rpb24oKXtpZih0aGlzLmFkZGVkTm9kZXMubGVuZ3RofHx0aGlzLnJlbW92ZWROb2Rlcy5sZW5ndGgpe3ZhciBhPVt7YWRkZWROb2Rlczp0aGlzLmFkZGVkTm9kZXMscmVtb3ZlZE5vZGVzOnRoaXMucmVtb3ZlZE5vZGVzfV07dGhpcy5hZGRlZE5vZGVzPVtdO3RoaXMucmVtb3ZlZE5vZGVzPVtdO3JldHVybiBhfXJldHVybltdfTtcbmZ1bmN0aW9uIEhiKGEsYil7dmFyIGM9eihhKTtjLlZ8fChjLlY9bmV3IENiKTtjLlYuJC5hZGQoYik7dmFyIGQ9Yy5WO3JldHVybntDYTpiLFA6ZCxFYTphLHRha2VSZWNvcmRzOmZ1bmN0aW9uKCl7cmV0dXJuIGQudGFrZVJlY29yZHMoKX19fWZ1bmN0aW9uIEliKGEpe3ZhciBiPWEmJmEuUDtiJiYoYi4kLmRlbGV0ZShhLkNhKSxiLiQuc2l6ZXx8KHooYS5FYSkuVj1udWxsKSl9XG5mdW5jdGlvbiBKYihhLGIpe3ZhciBjPWIuZ2V0Um9vdE5vZGUoKTtyZXR1cm4gYS5tYXAoZnVuY3Rpb24oYSl7dmFyIGI9Yz09PWEudGFyZ2V0LmdldFJvb3ROb2RlKCk7aWYoYiYmYS5hZGRlZE5vZGVzKXtpZihiPUFycmF5LmZyb20oYS5hZGRlZE5vZGVzKS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGM9PT1hLmdldFJvb3ROb2RlKCl9KSxiLmxlbmd0aClyZXR1cm4gYT1PYmplY3QuY3JlYXRlKGEpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwiYWRkZWROb2Rlc1wiLHt2YWx1ZTpiLGNvbmZpZ3VyYWJsZTohMH0pLGF9ZWxzZSBpZihiKXJldHVybiBhfSkuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBhfSl9O3ZhciBLYj0vWyZcXHUwMEEwXCJdL2csTGI9L1smXFx1MDBBMDw+XS9nO2Z1bmN0aW9uIE1iKGEpe3N3aXRjaChhKXtjYXNlIFwiJlwiOnJldHVyblwiJmFtcDtcIjtjYXNlIFwiPFwiOnJldHVyblwiJmx0O1wiO2Nhc2UgXCI+XCI6cmV0dXJuXCImZ3Q7XCI7Y2FzZSAnXCInOnJldHVyblwiJnF1b3Q7XCI7Y2FzZSBcIlxcdTAwYTBcIjpyZXR1cm5cIiZuYnNwO1wifX1mdW5jdGlvbiBOYihhKXtmb3IodmFyIGI9e30sYz0wO2M8YS5sZW5ndGg7YysrKWJbYVtjXV09ITA7cmV0dXJuIGJ9dmFyIE9iPU5iKFwiYXJlYSBiYXNlIGJyIGNvbCBjb21tYW5kIGVtYmVkIGhyIGltZyBpbnB1dCBrZXlnZW4gbGluayBtZXRhIHBhcmFtIHNvdXJjZSB0cmFjayB3YnJcIi5zcGxpdChcIiBcIikpLFBiPU5iKFwic3R5bGUgc2NyaXB0IHhtcCBpZnJhbWUgbm9lbWJlZCBub2ZyYW1lcyBwbGFpbnRleHQgbm9zY3JpcHRcIi5zcGxpdChcIiBcIikpO1xuZnVuY3Rpb24gUWIoYSxiKXtcInRlbXBsYXRlXCI9PT1hLmxvY2FsTmFtZSYmKGE9YS5jb250ZW50KTtmb3IodmFyIGM9XCJcIixkPWI/YihhKTphLmNoaWxkTm9kZXMsZT0wLGY9ZC5sZW5ndGgsZz12b2lkIDA7ZTxmJiYoZz1kW2VdKTtlKyspe2E6e3ZhciBoPWc7dmFyIGs9YSxsPWI7c3dpdGNoKGgubm9kZVR5cGUpe2Nhc2UgTm9kZS5FTEVNRU5UX05PREU6az1oLmxvY2FsTmFtZTtmb3IodmFyIG49XCI8XCIrayxxPWguYXR0cmlidXRlcyxJPTAsdjt2PXFbSV07SSsrKW4rPVwiIFwiK3YubmFtZSsnPVwiJyt2LnZhbHVlLnJlcGxhY2UoS2IsTWIpKydcIic7bis9XCI+XCI7aD1PYltrXT9uOm4rUWIoaCxsKStcIjwvXCIraytcIj5cIjticmVhayBhO2Nhc2UgTm9kZS5URVhUX05PREU6aD1oLmRhdGE7aD1rJiZQYltrLmxvY2FsTmFtZV0/aDpoLnJlcGxhY2UoTGIsTWIpO2JyZWFrIGE7Y2FzZSBOb2RlLkNPTU1FTlRfTk9ERTpoPVwiXFx4M2MhLS1cIitoLmRhdGErXCItLVxceDNlXCI7YnJlYWsgYTtkZWZhdWx0OnRocm93IHdpbmRvdy5jb25zb2xlLmVycm9yKGgpLFxuRXJyb3IoXCJub3QgaW1wbGVtZW50ZWRcIik7fX1jKz1ofXJldHVybiBjfTt2YXIgUmI9Qi5ELFNiPXtxdWVyeVNlbGVjdG9yOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9fc2hhZHlfbmF0aXZlX3F1ZXJ5U2VsZWN0b3IoYSl9LHF1ZXJ5U2VsZWN0b3JBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX19zaGFkeV9uYXRpdmVfcXVlcnlTZWxlY3RvckFsbChhKX19LFRiPXt9O2Z1bmN0aW9uIFViKGEpe1RiW2FdPWZ1bmN0aW9uKGIpe3JldHVybiBiW1wiX19zaGFkeV9uYXRpdmVfXCIrYV19fWZ1bmN0aW9uIFZiKGEsYil7RChhLGIsXCJfX3NoYWR5X25hdGl2ZV9cIik7Zm9yKHZhciBjIGluIGIpVWIoYyl9ZnVuY3Rpb24gRihhLGIpe2I9dm9pZCAwPT09Yj9bXTpiO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXt2YXIgZD1iW2NdLGU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLGQpO2UmJihPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcIl9fc2hhZHlfbmF0aXZlX1wiK2QsZSksZS52YWx1ZT9TYltkXXx8KFNiW2RdPWUudmFsdWUpOlViKGQpKX19XG52YXIgRz1kb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGRvY3VtZW50LE5vZGVGaWx0ZXIuU0hPV19BTEwsbnVsbCwhMSksSD1kb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGRvY3VtZW50LE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULG51bGwsITEpLFdiPWRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcImluZXJ0XCIpO2Z1bmN0aW9uIFhiKGEpe2Zvcih2YXIgYjtiPWEuX19zaGFkeV9uYXRpdmVfZmlyc3RDaGlsZDspYS5fX3NoYWR5X25hdGl2ZV9yZW1vdmVDaGlsZChiKX12YXIgWWI9W1wiZmlyc3RFbGVtZW50Q2hpbGRcIixcImxhc3RFbGVtZW50Q2hpbGRcIixcImNoaWxkcmVuXCIsXCJjaGlsZEVsZW1lbnRDb3VudFwiXSxaYj1bXCJxdWVyeVNlbGVjdG9yXCIsXCJxdWVyeVNlbGVjdG9yQWxsXCJdO1xuZnVuY3Rpb24gJGIoKXt2YXIgYT1bXCJkaXNwYXRjaEV2ZW50XCIsXCJhZGRFdmVudExpc3RlbmVyXCIsXCJyZW1vdmVFdmVudExpc3RlbmVyXCJdO3dpbmRvdy5FdmVudFRhcmdldD9GKHdpbmRvdy5FdmVudFRhcmdldC5wcm90b3R5cGUsYSk6KEYoTm9kZS5wcm90b3R5cGUsYSksRihXaW5kb3cucHJvdG90eXBlLGEpKTtSYj9GKE5vZGUucHJvdG90eXBlLFwicGFyZW50Tm9kZSBmaXJzdENoaWxkIGxhc3RDaGlsZCBwcmV2aW91c1NpYmxpbmcgbmV4dFNpYmxpbmcgY2hpbGROb2RlcyBwYXJlbnRFbGVtZW50IHRleHRDb250ZW50XCIuc3BsaXQoXCIgXCIpKTpWYihOb2RlLnByb3RvdHlwZSx7cGFyZW50Tm9kZTp7Z2V0OmZ1bmN0aW9uKCl7Ry5jdXJyZW50Tm9kZT10aGlzO3JldHVybiBHLnBhcmVudE5vZGUoKX19LGZpcnN0Q2hpbGQ6e2dldDpmdW5jdGlvbigpe0cuY3VycmVudE5vZGU9dGhpcztyZXR1cm4gRy5maXJzdENoaWxkKCl9fSxsYXN0Q2hpbGQ6e2dldDpmdW5jdGlvbigpe0cuY3VycmVudE5vZGU9XG50aGlzO3JldHVybiBHLmxhc3RDaGlsZCgpfX0scHJldmlvdXNTaWJsaW5nOntnZXQ6ZnVuY3Rpb24oKXtHLmN1cnJlbnROb2RlPXRoaXM7cmV0dXJuIEcucHJldmlvdXNTaWJsaW5nKCl9fSxuZXh0U2libGluZzp7Z2V0OmZ1bmN0aW9uKCl7Ry5jdXJyZW50Tm9kZT10aGlzO3JldHVybiBHLm5leHRTaWJsaW5nKCl9fSxjaGlsZE5vZGVzOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT1bXTtHLmN1cnJlbnROb2RlPXRoaXM7Zm9yKHZhciBjPUcuZmlyc3RDaGlsZCgpO2M7KWEucHVzaChjKSxjPUcubmV4dFNpYmxpbmcoKTtyZXR1cm4gYX19LHBhcmVudEVsZW1lbnQ6e2dldDpmdW5jdGlvbigpe0guY3VycmVudE5vZGU9dGhpcztyZXR1cm4gSC5wYXJlbnROb2RlKCl9fSx0ZXh0Q29udGVudDp7Z2V0OmZ1bmN0aW9uKCl7c3dpdGNoKHRoaXMubm9kZVR5cGUpe2Nhc2UgTm9kZS5FTEVNRU5UX05PREU6Y2FzZSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREU6Zm9yKHZhciBhPWRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIodGhpcyxcbk5vZGVGaWx0ZXIuU0hPV19URVhULG51bGwsITEpLGM9XCJcIixkO2Q9YS5uZXh0Tm9kZSgpOyljKz1kLm5vZGVWYWx1ZTtyZXR1cm4gYztkZWZhdWx0OnJldHVybiB0aGlzLm5vZGVWYWx1ZX19LHNldDpmdW5jdGlvbihhKXtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGF8fG51bGw9PT1hKWE9XCJcIjtzd2l0Y2godGhpcy5ub2RlVHlwZSl7Y2FzZSBOb2RlLkVMRU1FTlRfTk9ERTpjYXNlIE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpYYih0aGlzKTsoMDxhLmxlbmd0aHx8dGhpcy5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKSYmdGhpcy5fX3NoYWR5X25hdGl2ZV9pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSksdm9pZCAwKTticmVhaztkZWZhdWx0OnRoaXMubm9kZVZhbHVlPWF9fX19KTtGKE5vZGUucHJvdG90eXBlLFwiYXBwZW5kQ2hpbGQgaW5zZXJ0QmVmb3JlIHJlbW92ZUNoaWxkIHJlcGxhY2VDaGlsZCBjbG9uZU5vZGUgY29udGFpbnNcIi5zcGxpdChcIiBcIikpO1xuRihIVE1MRWxlbWVudC5wcm90b3R5cGUsW1wicGFyZW50RWxlbWVudFwiLFwiY29udGFpbnNcIl0pO2E9e2ZpcnN0RWxlbWVudENoaWxkOntnZXQ6ZnVuY3Rpb24oKXtILmN1cnJlbnROb2RlPXRoaXM7cmV0dXJuIEguZmlyc3RDaGlsZCgpfX0sbGFzdEVsZW1lbnRDaGlsZDp7Z2V0OmZ1bmN0aW9uKCl7SC5jdXJyZW50Tm9kZT10aGlzO3JldHVybiBILmxhc3RDaGlsZCgpfX0sY2hpbGRyZW46e2dldDpmdW5jdGlvbigpe3ZhciBhPVtdO0guY3VycmVudE5vZGU9dGhpcztmb3IodmFyIGM9SC5maXJzdENoaWxkKCk7YzspYS5wdXNoKGMpLGM9SC5uZXh0U2libGluZygpO3JldHVybiB2YihhKX19LGNoaWxkRWxlbWVudENvdW50OntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGlsZHJlbj90aGlzLmNoaWxkcmVuLmxlbmd0aDowfX19O1JiPyhGKEVsZW1lbnQucHJvdG90eXBlLFliKSxGKEVsZW1lbnQucHJvdG90eXBlLFtcInByZXZpb3VzRWxlbWVudFNpYmxpbmdcIixcIm5leHRFbGVtZW50U2libGluZ1wiLFxuXCJpbm5lckhUTUxcIixcImNsYXNzTmFtZVwiXSksRihIVE1MRWxlbWVudC5wcm90b3R5cGUsW1wiY2hpbGRyZW5cIixcImlubmVySFRNTFwiLFwiY2xhc3NOYW1lXCJdKSk6KFZiKEVsZW1lbnQucHJvdG90eXBlLGEpLFZiKEVsZW1lbnQucHJvdG90eXBlLHtwcmV2aW91c0VsZW1lbnRTaWJsaW5nOntnZXQ6ZnVuY3Rpb24oKXtILmN1cnJlbnROb2RlPXRoaXM7cmV0dXJuIEgucHJldmlvdXNTaWJsaW5nKCl9fSxuZXh0RWxlbWVudFNpYmxpbmc6e2dldDpmdW5jdGlvbigpe0guY3VycmVudE5vZGU9dGhpcztyZXR1cm4gSC5uZXh0U2libGluZygpfX0saW5uZXJIVE1MOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gUWIodGhpcyx3Yil9LHNldDpmdW5jdGlvbihhKXt2YXIgYj1cInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZT90aGlzLmNvbnRlbnQ6dGhpcztYYihiKTt2YXIgZD10aGlzLmxvY2FsTmFtZXx8XCJkaXZcIjtkPXRoaXMubmFtZXNwYWNlVVJJJiZ0aGlzLm5hbWVzcGFjZVVSSSE9PVdiLm5hbWVzcGFjZVVSST9cbldiLmNyZWF0ZUVsZW1lbnROUyh0aGlzLm5hbWVzcGFjZVVSSSxkKTpXYi5jcmVhdGVFbGVtZW50KGQpO2QuaW5uZXJIVE1MPWE7Zm9yKGE9XCJ0ZW1wbGF0ZVwiPT09dGhpcy5sb2NhbE5hbWU/ZC5jb250ZW50OmQ7ZD1hLl9fc2hhZHlfbmF0aXZlX2ZpcnN0Q2hpbGQ7KWIuX19zaGFkeV9uYXRpdmVfaW5zZXJ0QmVmb3JlKGQsdm9pZCAwKX19LGNsYXNzTmFtZTp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9LHNldDpmdW5jdGlvbihhKXt0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYSl9fX0pKTtGKEVsZW1lbnQucHJvdG90eXBlLFwic2V0QXR0cmlidXRlIGdldEF0dHJpYnV0ZSBoYXNBdHRyaWJ1dGUgcmVtb3ZlQXR0cmlidXRlIGZvY3VzIGJsdXJcIi5zcGxpdChcIiBcIikpO0YoRWxlbWVudC5wcm90b3R5cGUsWmIpO0YoSFRNTEVsZW1lbnQucHJvdG90eXBlLFtcImZvY3VzXCIsXCJibHVyXCJdKTt3aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudCYmXG5GKHdpbmRvdy5IVE1MVGVtcGxhdGVFbGVtZW50LnByb3RvdHlwZSxbXCJpbm5lckhUTUxcIl0pO1JiP0YoRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUsWWIpOlZiKERvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLGEpO0YoRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUsWmIpO1JiPyhGKERvY3VtZW50LnByb3RvdHlwZSxZYiksRihEb2N1bWVudC5wcm90b3R5cGUsW1wiYWN0aXZlRWxlbWVudFwiXSkpOlZiKERvY3VtZW50LnByb3RvdHlwZSxhKTtGKERvY3VtZW50LnByb3RvdHlwZSxbXCJpbXBvcnROb2RlXCIsXCJnZXRFbGVtZW50QnlJZFwiXSk7RihEb2N1bWVudC5wcm90b3R5cGUsWmIpfTt2YXIgYWM9RSh7Z2V0IGNoaWxkTm9kZXMoKXtyZXR1cm4gdGhpcy5fX3NoYWR5X2NoaWxkTm9kZXN9LGdldCBmaXJzdENoaWxkKCl7cmV0dXJuIHRoaXMuX19zaGFkeV9maXJzdENoaWxkfSxnZXQgbGFzdENoaWxkKCl7cmV0dXJuIHRoaXMuX19zaGFkeV9sYXN0Q2hpbGR9LGdldCBjaGlsZEVsZW1lbnRDb3VudCgpe3JldHVybiB0aGlzLl9fc2hhZHlfY2hpbGRFbGVtZW50Q291bnR9LGdldCBjaGlsZHJlbigpe3JldHVybiB0aGlzLl9fc2hhZHlfY2hpbGRyZW59LGdldCBmaXJzdEVsZW1lbnRDaGlsZCgpe3JldHVybiB0aGlzLl9fc2hhZHlfZmlyc3RFbGVtZW50Q2hpbGR9LGdldCBsYXN0RWxlbWVudENoaWxkKCl7cmV0dXJuIHRoaXMuX19zaGFkeV9sYXN0RWxlbWVudENoaWxkfSxnZXQgc2hhZG93Um9vdCgpe3JldHVybiB0aGlzLl9fc2hhZHlfc2hhZG93Um9vdH19KSxiYz1FKHtnZXQgdGV4dENvbnRlbnQoKXtyZXR1cm4gdGhpcy5fX3NoYWR5X3RleHRDb250ZW50fSxzZXQgdGV4dENvbnRlbnQoYSl7dGhpcy5fX3NoYWR5X3RleHRDb250ZW50PVxuYX0sZ2V0IGlubmVySFRNTCgpe3JldHVybiB0aGlzLl9fc2hhZHlfaW5uZXJIVE1MfSxzZXQgaW5uZXJIVE1MKGEpe3JldHVybiB0aGlzLl9fc2hhZHlfaW5uZXJIVE1MPWF9fSksY2M9RSh7Z2V0IHBhcmVudEVsZW1lbnQoKXtyZXR1cm4gdGhpcy5fX3NoYWR5X3BhcmVudEVsZW1lbnR9LGdldCBwYXJlbnROb2RlKCl7cmV0dXJuIHRoaXMuX19zaGFkeV9wYXJlbnROb2RlfSxnZXQgbmV4dFNpYmxpbmcoKXtyZXR1cm4gdGhpcy5fX3NoYWR5X25leHRTaWJsaW5nfSxnZXQgcHJldmlvdXNTaWJsaW5nKCl7cmV0dXJuIHRoaXMuX19zaGFkeV9wcmV2aW91c1NpYmxpbmd9LGdldCBuZXh0RWxlbWVudFNpYmxpbmcoKXtyZXR1cm4gdGhpcy5fX3NoYWR5X25leHRFbGVtZW50U2libGluZ30sZ2V0IHByZXZpb3VzRWxlbWVudFNpYmxpbmcoKXtyZXR1cm4gdGhpcy5fX3NoYWR5X3ByZXZpb3VzRWxlbWVudFNpYmxpbmd9LGdldCBjbGFzc05hbWUoKXtyZXR1cm4gdGhpcy5fX3NoYWR5X2NsYXNzTmFtZX0sXG5zZXQgY2xhc3NOYW1lKGEpe3JldHVybiB0aGlzLl9fc2hhZHlfY2xhc3NOYW1lPWF9fSksZGM7Zm9yKGRjIGluIGFjKWFjW2RjXS5lbnVtZXJhYmxlPSExO2Zvcih2YXIgZWMgaW4gYmMpYmNbZWNdLmVudW1lcmFibGU9ITE7Zm9yKHZhciBmYyBpbiBjYyljY1tmY10uZW51bWVyYWJsZT0hMTt2YXIgZ2M9Qi5EfHxCLk0saGM9Z2M/ZnVuY3Rpb24oKXt9OmZ1bmN0aW9uKGEpe3ZhciBiPXooYSk7Yi5BYXx8KGIuQWE9ITAsRChhLGNjKSl9LGljPWdjP2Z1bmN0aW9uKCl7fTpmdW5jdGlvbihhKXt2YXIgYj16KGEpO2IuemF8fChiLnphPSEwLEQoYSxhYyksd2luZG93LmN1c3RvbUVsZW1lbnRzJiYhQi5NfHxEKGEsYmMpKX07dmFyIGpjPVwiX19ldmVudFdyYXBwZXJzXCIrRGF0ZS5ub3coKSxrYz1mdW5jdGlvbigpe3ZhciBhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRXZlbnQucHJvdG90eXBlLFwiY29tcG9zZWRcIik7cmV0dXJuIGE/ZnVuY3Rpb24oYil7cmV0dXJuIGEuZ2V0LmNhbGwoYil9Om51bGx9KCksbGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7fXZhciBiPSExLGM9e2dldCBjYXB0dXJlKCl7Yj0hMH19O3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLGEsYyk7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsYSxjKTtyZXR1cm4gYn0oKTtmdW5jdGlvbiBtYyhhKXtpZihhJiZcIm9iamVjdFwiPT09dHlwZW9mIGEpe3ZhciBiPSEhYS5jYXB0dXJlO3ZhciBjPSEhYS5vbmNlO3ZhciBkPSEhYS5wYXNzaXZlO3ZhciBlPWEuT31lbHNlIGI9ISFhLGQ9Yz0hMTtyZXR1cm57dWE6ZSxjYXB0dXJlOmIsb25jZTpjLHBhc3NpdmU6ZCxzYTpsYz9hOmJ9fVxudmFyIG5jPXtibHVyOiEwLGZvY3VzOiEwLGZvY3VzaW46ITAsZm9jdXNvdXQ6ITAsY2xpY2s6ITAsZGJsY2xpY2s6ITAsbW91c2Vkb3duOiEwLG1vdXNlZW50ZXI6ITAsbW91c2VsZWF2ZTohMCxtb3VzZW1vdmU6ITAsbW91c2VvdXQ6ITAsbW91c2VvdmVyOiEwLG1vdXNldXA6ITAsd2hlZWw6ITAsYmVmb3JlaW5wdXQ6ITAsaW5wdXQ6ITAsa2V5ZG93bjohMCxrZXl1cDohMCxjb21wb3NpdGlvbnN0YXJ0OiEwLGNvbXBvc2l0aW9udXBkYXRlOiEwLGNvbXBvc2l0aW9uZW5kOiEwLHRvdWNoc3RhcnQ6ITAsdG91Y2hlbmQ6ITAsdG91Y2htb3ZlOiEwLHRvdWNoY2FuY2VsOiEwLHBvaW50ZXJvdmVyOiEwLHBvaW50ZXJlbnRlcjohMCxwb2ludGVyZG93bjohMCxwb2ludGVybW92ZTohMCxwb2ludGVydXA6ITAscG9pbnRlcmNhbmNlbDohMCxwb2ludGVyb3V0OiEwLHBvaW50ZXJsZWF2ZTohMCxnb3Rwb2ludGVyY2FwdHVyZTohMCxsb3N0cG9pbnRlcmNhcHR1cmU6ITAsZHJhZ3N0YXJ0OiEwLFxuZHJhZzohMCxkcmFnZW50ZXI6ITAsZHJhZ2xlYXZlOiEwLGRyYWdvdmVyOiEwLGRyb3A6ITAsZHJhZ2VuZDohMCxET01BY3RpdmF0ZTohMCxET01Gb2N1c0luOiEwLERPTUZvY3VzT3V0OiEwLGtleXByZXNzOiEwfSxvYz17RE9NQXR0ck1vZGlmaWVkOiEwLERPTUF0dHJpYnV0ZU5hbWVDaGFuZ2VkOiEwLERPTUNoYXJhY3RlckRhdGFNb2RpZmllZDohMCxET01FbGVtZW50TmFtZUNoYW5nZWQ6ITAsRE9NTm9kZUluc2VydGVkOiEwLERPTU5vZGVJbnNlcnRlZEludG9Eb2N1bWVudDohMCxET01Ob2RlUmVtb3ZlZDohMCxET01Ob2RlUmVtb3ZlZEZyb21Eb2N1bWVudDohMCxET01TdWJ0cmVlTW9kaWZpZWQ6ITB9O2Z1bmN0aW9uIHBjKGEpe3JldHVybiBhIGluc3RhbmNlb2YgTm9kZT9hLl9fc2hhZHlfZ2V0Um9vdE5vZGUoKTphfVxuZnVuY3Rpb24gcWMoYSxiKXt2YXIgYz1bXSxkPWE7Zm9yKGE9cGMoYSk7ZDspYy5wdXNoKGQpLGQuX19zaGFkeV9hc3NpZ25lZFNsb3Q/ZD1kLl9fc2hhZHlfYXNzaWduZWRTbG90OmQubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUmJmQuaG9zdCYmKGJ8fGQhPT1hKT9kPWQuaG9zdDpkPWQuX19zaGFkeV9wYXJlbnROb2RlO2NbYy5sZW5ndGgtMV09PT1kb2N1bWVudCYmYy5wdXNoKHdpbmRvdyk7cmV0dXJuIGN9ZnVuY3Rpb24gcmMoYSl7YS5fX2NvbXBvc2VkUGF0aHx8KGEuX19jb21wb3NlZFBhdGg9cWMoYS50YXJnZXQsITApKTtyZXR1cm4gYS5fX2NvbXBvc2VkUGF0aH1mdW5jdGlvbiBzYyhhLGIpe2lmKCFDKXJldHVybiBhO2E9cWMoYSwhMCk7Zm9yKHZhciBjPTAsZCxlPXZvaWQgMCxmLGc9dm9pZCAwO2M8Yi5sZW5ndGg7YysrKWlmKGQ9YltjXSxmPXBjKGQpLGYhPT1lJiYoZz1hLmluZGV4T2YoZiksZT1mKSwhQyhmKXx8LTE8ZylyZXR1cm4gZH1cbmZ1bmN0aW9uIHRjKGEpe2Z1bmN0aW9uIGIoYixkKXtiPW5ldyBhKGIsZCk7Yi5fX2NvbXBvc2VkPWQmJiEhZC5jb21wb3NlZDtyZXR1cm4gYn1iLl9fcHJvdG9fXz1hO2IucHJvdG90eXBlPWEucHJvdG90eXBlO3JldHVybiBifXZhciB1Yz17Zm9jdXM6ITAsYmx1cjohMH07ZnVuY3Rpb24gdmMoYSl7cmV0dXJuIGEuX190YXJnZXQhPT1hLnRhcmdldHx8YS5fX3JlbGF0ZWRUYXJnZXQhPT1hLnJlbGF0ZWRUYXJnZXR9ZnVuY3Rpb24gd2MoYSxiLGMpe2lmKGM9Yi5fX2hhbmRsZXJzJiZiLl9faGFuZGxlcnNbYS50eXBlXSYmYi5fX2hhbmRsZXJzW2EudHlwZV1bY10pZm9yKHZhciBkPTAsZTsoZT1jW2RdKSYmKCF2YyhhKXx8YS50YXJnZXQhPT1hLnJlbGF0ZWRUYXJnZXQpJiYoZS5jYWxsKGIsYSksIWEuX19pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQpO2QrKyk7fVxuZnVuY3Rpb24geGMoYSl7dmFyIGI9YS5jb21wb3NlZFBhdGgoKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImN1cnJlbnRUYXJnZXRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGR9LGNvbmZpZ3VyYWJsZTohMH0pO2Zvcih2YXIgYz1iLmxlbmd0aC0xOzA8PWM7Yy0tKXt2YXIgZD1iW2NdO3djKGEsZCxcImNhcHR1cmVcIik7aWYoYS5nYSlyZXR1cm59T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJldmVudFBoYXNlXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBFdmVudC5BVF9UQVJHRVR9fSk7dmFyIGU7Zm9yKGM9MDtjPGIubGVuZ3RoO2MrKyl7ZD1iW2NdO3ZhciBmPUEoZCk7Zj1mJiZmLnJvb3Q7aWYoMD09PWN8fGYmJmY9PT1lKWlmKHdjKGEsZCxcImJ1YmJsZVwiKSxkIT09d2luZG93JiYoZT1kLl9fc2hhZHlfZ2V0Um9vdE5vZGUoKSksYS5nYSlicmVha319XG5mdW5jdGlvbiB5YyhhLGIsYyxkLGUsZil7Zm9yKHZhciBnPTA7ZzxhLmxlbmd0aDtnKyspe3ZhciBoPWFbZ10saz1oLnR5cGUsbD1oLmNhcHR1cmUsbj1oLm9uY2UscT1oLnBhc3NpdmU7aWYoYj09PWgubm9kZSYmYz09PWsmJmQ9PT1sJiZlPT09biYmZj09PXEpcmV0dXJuIGd9cmV0dXJuLTF9XG5mdW5jdGlvbiB6YyhhLGIsYyl7dmFyIGQ9bWMoYyksZT1kLmNhcHR1cmUsZj1kLm9uY2UsZz1kLnBhc3NpdmUsaD1kLnVhO2Q9ZC5zYTtpZihiKXt2YXIgaz10eXBlb2YgYjtpZihcImZ1bmN0aW9uXCI9PT1rfHxcIm9iamVjdFwiPT09aylpZihcIm9iamVjdFwiIT09a3x8Yi5oYW5kbGVFdmVudCYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGIuaGFuZGxlRXZlbnQpe2lmKG9jW2FdKXJldHVybiB0aGlzLl9fc2hhZHlfbmF0aXZlX2FkZEV2ZW50TGlzdGVuZXIoYSxiLGQpO3ZhciBsPWh8fHRoaXM7aWYoaD1iW2pjXSl7aWYoLTE8eWMoaCxsLGEsZSxmLGcpKXJldHVybn1lbHNlIGJbamNdPVtdO2g9ZnVuY3Rpb24oZCl7ZiYmdGhpcy5fX3NoYWR5X3JlbW92ZUV2ZW50TGlzdGVuZXIoYSxiLGMpO2QuX190YXJnZXR8fEFjKGQpO2lmKGwhPT10aGlzKXt2YXIgZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGQsXCJjdXJyZW50VGFyZ2V0XCIpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShkLFwiY3VycmVudFRhcmdldFwiLFxue2dldDpmdW5jdGlvbigpe3JldHVybiBsfSxjb25maWd1cmFibGU6ITB9KX1kLl9fcHJldmlvdXNDdXJyZW50VGFyZ2V0PWQuY3VycmVudFRhcmdldDtpZighQyhsKSYmXCJzbG90XCIhPT1sLmxvY2FsTmFtZXx8LTEhPWQuY29tcG9zZWRQYXRoKCkuaW5kZXhPZihsKSlpZihkLmNvbXBvc2VkfHwtMTxkLmNvbXBvc2VkUGF0aCgpLmluZGV4T2YobCkpaWYodmMoZCkmJmQudGFyZ2V0PT09ZC5yZWxhdGVkVGFyZ2V0KWQuZXZlbnRQaGFzZT09PUV2ZW50LkJVQkJMSU5HX1BIQVNFJiZkLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO2Vsc2UgaWYoZC5ldmVudFBoYXNlPT09RXZlbnQuQ0FQVFVSSU5HX1BIQVNFfHxkLmJ1YmJsZXN8fGQudGFyZ2V0PT09bHx8bCBpbnN0YW5jZW9mIFdpbmRvdyl7dmFyIGc9XCJmdW5jdGlvblwiPT09az9iLmNhbGwobCxkKTpiLmhhbmRsZUV2ZW50JiZiLmhhbmRsZUV2ZW50KGQpO2whPT10aGlzJiYoZT8oT2JqZWN0LmRlZmluZVByb3BlcnR5KGQsXCJjdXJyZW50VGFyZ2V0XCIsXG5lKSxlPW51bGwpOmRlbGV0ZSBkLmN1cnJlbnRUYXJnZXQpO3JldHVybiBnfX07YltqY10ucHVzaCh7bm9kZTpsLHR5cGU6YSxjYXB0dXJlOmUsb25jZTpmLHBhc3NpdmU6ZyxhYjpofSk7dWNbYV0/KHRoaXMuX19oYW5kbGVycz10aGlzLl9faGFuZGxlcnN8fHt9LHRoaXMuX19oYW5kbGVyc1thXT10aGlzLl9faGFuZGxlcnNbYV18fHtjYXB0dXJlOltdLGJ1YmJsZTpbXX0sdGhpcy5fX2hhbmRsZXJzW2FdW2U/XCJjYXB0dXJlXCI6XCJidWJibGVcIl0ucHVzaChoKSk6dGhpcy5fX3NoYWR5X25hdGl2ZV9hZGRFdmVudExpc3RlbmVyKGEsaCxkKX19fVxuZnVuY3Rpb24gQmMoYSxiLGMpe2lmKGIpe3ZhciBkPW1jKGMpO2M9ZC5jYXB0dXJlO3ZhciBlPWQub25jZSxmPWQucGFzc2l2ZSxnPWQudWE7ZD1kLnNhO2lmKG9jW2FdKXJldHVybiB0aGlzLl9fc2hhZHlfbmF0aXZlX3JlbW92ZUV2ZW50TGlzdGVuZXIoYSxiLGQpO3ZhciBoPWd8fHRoaXM7Zz12b2lkIDA7dmFyIGs9bnVsbDt0cnl7az1iW2pjXX1jYXRjaChsKXt9ayYmKGU9eWMoayxoLGEsYyxlLGYpLC0xPGUmJihnPWsuc3BsaWNlKGUsMSlbMF0uYWIsay5sZW5ndGh8fChiW2pjXT12b2lkIDApKSk7dGhpcy5fX3NoYWR5X25hdGl2ZV9yZW1vdmVFdmVudExpc3RlbmVyKGEsZ3x8YixkKTtnJiZ1Y1thXSYmdGhpcy5fX2hhbmRsZXJzJiZ0aGlzLl9faGFuZGxlcnNbYV0mJihhPXRoaXMuX19oYW5kbGVyc1thXVtjP1wiY2FwdHVyZVwiOlwiYnViYmxlXCJdLGI9YS5pbmRleE9mKGcpLC0xPGImJmEuc3BsaWNlKGIsMSkpfX1cbmZ1bmN0aW9uIENjKCl7Zm9yKHZhciBhIGluIHVjKXdpbmRvdy5fX3NoYWR5X25hdGl2ZV9hZGRFdmVudExpc3RlbmVyKGEsZnVuY3Rpb24oYSl7YS5fX3RhcmdldHx8KEFjKGEpLHhjKGEpKX0sITApfVxudmFyIERjPUUoe2dldCBjb21wb3NlZCgpe3ZvaWQgMD09PXRoaXMuX19jb21wb3NlZCYmKGtjP3RoaXMuX19jb21wb3NlZD1cImZvY3VzaW5cIj09PXRoaXMudHlwZXx8XCJmb2N1c291dFwiPT09dGhpcy50eXBlfHxrYyh0aGlzKTohMSE9PXRoaXMuaXNUcnVzdGVkJiYodGhpcy5fX2NvbXBvc2VkPW5jW3RoaXMudHlwZV0pKTtyZXR1cm4gdGhpcy5fX2NvbXBvc2VkfHwhMX0sY29tcG9zZWRQYXRoOmZ1bmN0aW9uKCl7dGhpcy5fX2NvbXBvc2VkUGF0aHx8KHRoaXMuX19jb21wb3NlZFBhdGg9cWModGhpcy5fX3RhcmdldCx0aGlzLmNvbXBvc2VkKSk7cmV0dXJuIHRoaXMuX19jb21wb3NlZFBhdGh9LGdldCB0YXJnZXQoKXtyZXR1cm4gc2ModGhpcy5jdXJyZW50VGFyZ2V0fHx0aGlzLl9fcHJldmlvdXNDdXJyZW50VGFyZ2V0LHRoaXMuY29tcG9zZWRQYXRoKCkpfSxnZXQgcmVsYXRlZFRhcmdldCgpe2lmKCF0aGlzLl9fcmVsYXRlZFRhcmdldClyZXR1cm4gbnVsbDt0aGlzLl9fcmVsYXRlZFRhcmdldENvbXBvc2VkUGF0aHx8XG4odGhpcy5fX3JlbGF0ZWRUYXJnZXRDb21wb3NlZFBhdGg9cWModGhpcy5fX3JlbGF0ZWRUYXJnZXQsITApKTtyZXR1cm4gc2ModGhpcy5jdXJyZW50VGFyZ2V0fHx0aGlzLl9fcHJldmlvdXNDdXJyZW50VGFyZ2V0LHRoaXMuX19yZWxhdGVkVGFyZ2V0Q29tcG9zZWRQYXRoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7RXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbi5jYWxsKHRoaXMpO3RoaXMuZ2E9ITB9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe0V2ZW50LnByb3RvdHlwZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24uY2FsbCh0aGlzKTt0aGlzLmdhPXRoaXMuX19pbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9ITB9fSk7XG5mdW5jdGlvbiBBYyhhKXthLl9fdGFyZ2V0PWEudGFyZ2V0O2EuX19yZWxhdGVkVGFyZ2V0PWEucmVsYXRlZFRhcmdldDtpZihCLkQpe3ZhciBiPU9iamVjdC5nZXRQcm90b3R5cGVPZihhKTtpZighT2JqZWN0Lmhhc093blByb3BlcnR5KGIsXCJfX3NoYWR5X3BhdGNoZWRQcm90b1wiKSl7dmFyIGM9T2JqZWN0LmNyZWF0ZShiKTtjLl9fc2hhZHlfc291cmNlUHJvdG89YjtEKGMsRGMpO2IuX19zaGFkeV9wYXRjaGVkUHJvdG89Y31hLl9fcHJvdG9fXz1iLl9fc2hhZHlfcGF0Y2hlZFByb3RvfWVsc2UgRChhLERjKX12YXIgRWM9dGMoRXZlbnQpLEZjPXRjKEN1c3RvbUV2ZW50KSxHYz10YyhNb3VzZUV2ZW50KTtcbmZ1bmN0aW9uIEhjKCl7aWYoIWtjJiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV2ZW50LnByb3RvdHlwZSxcImlzVHJ1c3RlZFwiKSl7dmFyIGE9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgTW91c2VFdmVudChcImNsaWNrXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxjb21wb3NlZDohMH0pO3RoaXMuX19zaGFkeV9kaXNwYXRjaEV2ZW50KGEpfTtFbGVtZW50LnByb3RvdHlwZS5jbGljaz9FbGVtZW50LnByb3RvdHlwZS5jbGljaz1hOkhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljayYmKEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljaz1hKX19dmFyIEljPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKERvY3VtZW50LnByb3RvdHlwZSkuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVyblwib25cIj09PWEuc3Vic3RyaW5nKDAsMil9KTtmdW5jdGlvbiBKYyhhLGIpe3JldHVybntpbmRleDphLFc6W10sWjpifX1cbmZ1bmN0aW9uIEtjKGEsYixjLGQpe3ZhciBlPTAsZj0wLGc9MCxoPTAsaz1NYXRoLm1pbihiLWUsZC1mKTtpZigwPT1lJiYwPT1mKWE6e2ZvcihnPTA7ZzxrO2crKylpZihhW2ddIT09Y1tnXSlicmVhayBhO2c9a31pZihiPT1hLmxlbmd0aCYmZD09Yy5sZW5ndGgpe2g9YS5sZW5ndGg7Zm9yKHZhciBsPWMubGVuZ3RoLG49MDtuPGstZyYmTGMoYVstLWhdLGNbLS1sXSk7KW4rKztoPW59ZSs9ZztmKz1nO2ItPWg7ZC09aDtpZigwPT1iLWUmJjA9PWQtZilyZXR1cm5bXTtpZihlPT1iKXtmb3IoYj1KYyhlLDApO2Y8ZDspYi5XLnB1c2goY1tmKytdKTtyZXR1cm5bYl19aWYoZj09ZClyZXR1cm5bSmMoZSxiLWUpXTtrPWU7Zz1mO2Q9ZC1nKzE7aD1iLWsrMTtiPUFycmF5KGQpO2ZvcihsPTA7bDxkO2wrKyliW2xdPUFycmF5KGgpLGJbbF1bMF09bDtmb3IobD0wO2w8aDtsKyspYlswXVtsXT1sO2ZvcihsPTE7bDxkO2wrKylmb3Iobj0xO248aDtuKyspaWYoYVtrK24tMV09PT1jW2crbC0xXSliW2xdW25dPVxuYltsLTFdW24tMV07ZWxzZXt2YXIgcT1iW2wtMV1bbl0rMSxJPWJbbF1bbi0xXSsxO2JbbF1bbl09cTxJP3E6SX1rPWIubGVuZ3RoLTE7Zz1iWzBdLmxlbmd0aC0xO2Q9YltrXVtnXTtmb3IoYT1bXTswPGt8fDA8ZzspMD09az8oYS5wdXNoKDIpLGctLSk6MD09Zz8oYS5wdXNoKDMpLGstLSk6KGg9YltrLTFdW2ctMV0sbD1iW2stMV1bZ10sbj1iW2tdW2ctMV0scT1sPG4/bDxoP2w6aDpuPGg/bjpoLHE9PWg/KGg9PWQ/YS5wdXNoKDApOihhLnB1c2goMSksZD1oKSxrLS0sZy0tKTpxPT1sPyhhLnB1c2goMyksay0tLGQ9bCk6KGEucHVzaCgyKSxnLS0sZD1uKSk7YS5yZXZlcnNlKCk7Yj12b2lkIDA7az1bXTtmb3IoZz0wO2c8YS5sZW5ndGg7ZysrKXN3aXRjaChhW2ddKXtjYXNlIDA6YiYmKGsucHVzaChiKSxiPXZvaWQgMCk7ZSsrO2YrKzticmVhaztjYXNlIDE6Ynx8KGI9SmMoZSwwKSk7Yi5aKys7ZSsrO2IuVy5wdXNoKGNbZl0pO2YrKzticmVhaztjYXNlIDI6Ynx8KGI9SmMoZSwwKSk7XG5iLlorKztlKys7YnJlYWs7Y2FzZSAzOmJ8fChiPUpjKGUsMCkpLGIuVy5wdXNoKGNbZl0pLGYrK31iJiZrLnB1c2goYik7cmV0dXJuIGt9ZnVuY3Rpb24gTGMoYSxiKXtyZXR1cm4gYT09PWJ9O2Z1bmN0aW9uIE1jKGEsYixjLGQpe2hjKGEpO2Q9ZHx8bnVsbDt2YXIgZT16KGEpLGY9ZD96KGQpOm51bGw7ZS5wcmV2aW91c1NpYmxpbmc9ZD9mLnByZXZpb3VzU2libGluZzpiLl9fc2hhZHlfbGFzdENoaWxkO2lmKGY9QShlLnByZXZpb3VzU2libGluZykpZi5uZXh0U2libGluZz1hO2lmKGY9QShlLm5leHRTaWJsaW5nPWQpKWYucHJldmlvdXNTaWJsaW5nPWE7ZS5wYXJlbnROb2RlPWI7ZD9kPT09Yy5maXJzdENoaWxkJiYoYy5maXJzdENoaWxkPWEpOihjLmxhc3RDaGlsZD1hLGMuZmlyc3RDaGlsZHx8KGMuZmlyc3RDaGlsZD1hKSk7Yy5jaGlsZE5vZGVzPW51bGx9XG5mdW5jdGlvbiBOYyhhLGIsYyl7aWMoYik7dmFyIGQ9eihiKTt2b2lkIDAhPT1kLmZpcnN0Q2hpbGQmJihkLmNoaWxkTm9kZXM9bnVsbCk7aWYoYS5ub2RlVHlwZT09PU5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSlmb3IoYT1hLl9fc2hhZHlfbmF0aXZlX2ZpcnN0Q2hpbGQ7YTthPWEuX19zaGFkeV9uYXRpdmVfbmV4dFNpYmxpbmcpTWMoYSxiLGQsYyk7ZWxzZSBNYyhhLGIsZCxjKX1cbmZ1bmN0aW9uIE9jKGEsYil7dmFyIGM9eihhKTtiPXooYik7YT09PWIuZmlyc3RDaGlsZCYmKGIuZmlyc3RDaGlsZD1jLm5leHRTaWJsaW5nKTthPT09Yi5sYXN0Q2hpbGQmJihiLmxhc3RDaGlsZD1jLnByZXZpb3VzU2libGluZyk7YT1jLnByZXZpb3VzU2libGluZzt2YXIgZD1jLm5leHRTaWJsaW5nO2EmJih6KGEpLm5leHRTaWJsaW5nPWQpO2QmJih6KGQpLnByZXZpb3VzU2libGluZz1hKTtjLnBhcmVudE5vZGU9Yy5wcmV2aW91c1NpYmxpbmc9Yy5uZXh0U2libGluZz12b2lkIDA7dm9pZCAwIT09Yi5jaGlsZE5vZGVzJiYoYi5jaGlsZE5vZGVzPW51bGwpfVxuZnVuY3Rpb24gUGMoYSxiKXt2YXIgYz16KGEpO2lmKGJ8fHZvaWQgMD09PWMuZmlyc3RDaGlsZCl7Yy5jaGlsZE5vZGVzPW51bGw7dmFyIGQ9Yy5maXJzdENoaWxkPWEuX19zaGFkeV9uYXRpdmVfZmlyc3RDaGlsZDtjLmxhc3RDaGlsZD1hLl9fc2hhZHlfbmF0aXZlX2xhc3RDaGlsZDtpYyhhKTtjPWQ7Zm9yKGQ9dm9pZCAwO2M7Yz1jLl9fc2hhZHlfbmF0aXZlX25leHRTaWJsaW5nKXt2YXIgZT16KGMpO2UucGFyZW50Tm9kZT1ifHxhO2UubmV4dFNpYmxpbmc9Yy5fX3NoYWR5X25hdGl2ZV9uZXh0U2libGluZztlLnByZXZpb3VzU2libGluZz1kfHxudWxsO2Q9YztoYyhjKX19fTt2YXIgUWM9bnVsbDtmdW5jdGlvbiBSYygpe1FjfHwoUWM9d2luZG93LlNoYWR5Q1NTJiZ3aW5kb3cuU2hhZHlDU1MuU2NvcGluZ1NoaW0pO3JldHVybiBRY3x8bnVsbH1mdW5jdGlvbiBTYyhhLGIpe3ZhciBjPVJjKCk7YyYmYy51bnNjb3BlTm9kZShhLGIpfWZ1bmN0aW9uIFRjKGEsYil7dmFyIGM9UmMoKTtpZighYylyZXR1cm4hMDtpZihhLm5vZGVUeXBlPT09Tm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKXtjPSEwO2ZvcihhPWEuX19zaGFkeV9maXJzdENoaWxkO2E7YT1hLl9fc2hhZHlfbmV4dFNpYmxpbmcpYz1jJiZUYyhhLGIpO3JldHVybiBjfXJldHVybiBhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU/ITA6Yy5jdXJyZW50U2NvcGVGb3JOb2RlKGEpPT09Yn1mdW5jdGlvbiBVYyhhKXtpZihhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREUpcmV0dXJuXCJcIjt2YXIgYj1SYygpO3JldHVybiBiP2IuY3VycmVudFNjb3BlRm9yTm9kZShhKTpcIlwifVxuZnVuY3Rpb24gVmMoYSxiKXtpZihhKWZvcihhLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUmJmIoYSksYT1hLl9fc2hhZHlfZmlyc3RDaGlsZDthO2E9YS5fX3NoYWR5X25leHRTaWJsaW5nKWEubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSYmVmMoYSxiKX07dmFyIFdjPXdpbmRvdy5kb2N1bWVudCxYYz1CLnRhLFljPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTm9kZS5wcm90b3R5cGUsXCJpc0Nvbm5lY3RlZFwiKSxaYz1ZYyYmWWMuZ2V0O2Z1bmN0aW9uICRjKGEpe2Zvcih2YXIgYjtiPWEuX19zaGFkeV9maXJzdENoaWxkOylhLl9fc2hhZHlfcmVtb3ZlQ2hpbGQoYil9ZnVuY3Rpb24gYWQoYSl7dmFyIGI9QShhKTtpZihiJiZ2b2lkIDAhPT1iLmNhKWZvcihiPWEuX19zaGFkeV9maXJzdENoaWxkO2I7Yj1iLl9fc2hhZHlfbmV4dFNpYmxpbmcpYWQoYik7aWYoYT1BKGEpKWEuY2E9dm9pZCAwfWZ1bmN0aW9uIGJkKGEpe3ZhciBiPWE7YSYmXCJzbG90XCI9PT1hLmxvY2FsTmFtZSYmKGI9KGI9KGI9QShhKSkmJmIuVCkmJmIubGVuZ3RoP2JbMF06YmQoYS5fX3NoYWR5X25leHRTaWJsaW5nKSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiBjZChhLGIsYyl7aWYoYT0oYT1BKGEpKSYmYS5WKWImJmEuYWRkZWROb2Rlcy5wdXNoKGIpLGMmJmEucmVtb3ZlZE5vZGVzLnB1c2goYyksRGIoYSl9XG52YXIgZ2Q9RSh7Z2V0IHBhcmVudE5vZGUoKXt2YXIgYT1BKHRoaXMpO2E9YSYmYS5wYXJlbnROb2RlO3JldHVybiB2b2lkIDAhPT1hP2E6dGhpcy5fX3NoYWR5X25hdGl2ZV9wYXJlbnROb2RlfSxnZXQgZmlyc3RDaGlsZCgpe3ZhciBhPUEodGhpcyk7YT1hJiZhLmZpcnN0Q2hpbGQ7cmV0dXJuIHZvaWQgMCE9PWE/YTp0aGlzLl9fc2hhZHlfbmF0aXZlX2ZpcnN0Q2hpbGR9LGdldCBsYXN0Q2hpbGQoKXt2YXIgYT1BKHRoaXMpO2E9YSYmYS5sYXN0Q2hpbGQ7cmV0dXJuIHZvaWQgMCE9PWE/YTp0aGlzLl9fc2hhZHlfbmF0aXZlX2xhc3RDaGlsZH0sZ2V0IG5leHRTaWJsaW5nKCl7dmFyIGE9QSh0aGlzKTthPWEmJmEubmV4dFNpYmxpbmc7cmV0dXJuIHZvaWQgMCE9PWE/YTp0aGlzLl9fc2hhZHlfbmF0aXZlX25leHRTaWJsaW5nfSxnZXQgcHJldmlvdXNTaWJsaW5nKCl7dmFyIGE9QSh0aGlzKTthPWEmJmEucHJldmlvdXNTaWJsaW5nO3JldHVybiB2b2lkIDAhPT1hP2E6dGhpcy5fX3NoYWR5X25hdGl2ZV9wcmV2aW91c1NpYmxpbmd9LFxuZ2V0IGNoaWxkTm9kZXMoKXtpZihrYih0aGlzKSl7dmFyIGE9QSh0aGlzKTtpZighYS5jaGlsZE5vZGVzKXthLmNoaWxkTm9kZXM9W107Zm9yKHZhciBiPXRoaXMuX19zaGFkeV9maXJzdENoaWxkO2I7Yj1iLl9fc2hhZHlfbmV4dFNpYmxpbmcpYS5jaGlsZE5vZGVzLnB1c2goYil9dmFyIGM9YS5jaGlsZE5vZGVzfWVsc2UgYz10aGlzLl9fc2hhZHlfbmF0aXZlX2NoaWxkTm9kZXM7Yy5pdGVtPWZ1bmN0aW9uKGEpe3JldHVybiBjW2FdfTtyZXR1cm4gY30sZ2V0IHBhcmVudEVsZW1lbnQoKXt2YXIgYT1BKHRoaXMpOyhhPWEmJmEucGFyZW50Tm9kZSkmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERSYmKGE9bnVsbCk7cmV0dXJuIHZvaWQgMCE9PWE/YTp0aGlzLl9fc2hhZHlfbmF0aXZlX3BhcmVudEVsZW1lbnR9LGdldCBpc0Nvbm5lY3RlZCgpe2lmKFpjJiZaYy5jYWxsKHRoaXMpKXJldHVybiEwO2lmKHRoaXMubm9kZVR5cGU9PU5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSlyZXR1cm4hMTtcbnZhciBhPXRoaXMub3duZXJEb2N1bWVudDtpZih0Yil7aWYoYS5fX3NoYWR5X25hdGl2ZV9jb250YWlucyh0aGlzKSlyZXR1cm4hMH1lbHNlIGlmKGEuZG9jdW1lbnRFbGVtZW50JiZhLmRvY3VtZW50RWxlbWVudC5fX3NoYWR5X25hdGl2ZV9jb250YWlucyh0aGlzKSlyZXR1cm4hMDtmb3IoYT10aGlzO2EmJiEoYSBpbnN0YW5jZW9mIERvY3VtZW50KTspYT1hLl9fc2hhZHlfcGFyZW50Tm9kZXx8KEMoYSk/YS5ob3N0OnZvaWQgMCk7cmV0dXJuISEoYSYmYSBpbnN0YW5jZW9mIERvY3VtZW50KX0sZ2V0IHRleHRDb250ZW50KCl7aWYoa2IodGhpcykpe2Zvcih2YXIgYT1bXSxiPXRoaXMuX19zaGFkeV9maXJzdENoaWxkO2I7Yj1iLl9fc2hhZHlfbmV4dFNpYmxpbmcpYi5ub2RlVHlwZSE9PU5vZGUuQ09NTUVOVF9OT0RFJiZhLnB1c2goYi5fX3NoYWR5X3RleHRDb250ZW50KTtyZXR1cm4gYS5qb2luKFwiXCIpfXJldHVybiB0aGlzLl9fc2hhZHlfbmF0aXZlX3RleHRDb250ZW50fSxzZXQgdGV4dENvbnRlbnQoYSl7aWYoXCJ1bmRlZmluZWRcIj09PVxudHlwZW9mIGF8fG51bGw9PT1hKWE9XCJcIjtzd2l0Y2godGhpcy5ub2RlVHlwZSl7Y2FzZSBOb2RlLkVMRU1FTlRfTk9ERTpjYXNlIE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERTppZigha2IodGhpcykmJkIuRCl7dmFyIGI9dGhpcy5fX3NoYWR5X2ZpcnN0Q2hpbGQ7KGIhPXRoaXMuX19zaGFkeV9sYXN0Q2hpbGR8fGImJmIubm9kZVR5cGUhPU5vZGUuVEVYVF9OT0RFKSYmJGModGhpcyk7dGhpcy5fX3NoYWR5X25hdGl2ZV90ZXh0Q29udGVudD1hfWVsc2UgJGModGhpcyksKDA8YS5sZW5ndGh8fHRoaXMubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSkmJnRoaXMuX19zaGFkeV9pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYSkpO2JyZWFrO2RlZmF1bHQ6dGhpcy5ub2RlVmFsdWU9YX19LGluc2VydEJlZm9yZTpmdW5jdGlvbihhLGIpe2lmKHRoaXMub3duZXJEb2N1bWVudCE9PVdjJiZhLm93bmVyRG9jdW1lbnQhPT1XYylyZXR1cm4gdGhpcy5fX3NoYWR5X25hdGl2ZV9pbnNlcnRCZWZvcmUoYSxcbmIpLGE7aWYoYT09PXRoaXMpdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAnYXBwZW5kQ2hpbGQnIG9uICdOb2RlJzogVGhlIG5ldyBjaGlsZCBlbGVtZW50IGNvbnRhaW5zIHRoZSBwYXJlbnQuXCIpO2lmKGIpe3ZhciBjPUEoYik7Yz1jJiZjLnBhcmVudE5vZGU7aWYodm9pZCAwIT09YyYmYyE9PXRoaXN8fHZvaWQgMD09PWMmJmIuX19zaGFkeV9uYXRpdmVfcGFyZW50Tm9kZSE9PXRoaXMpdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAnaW5zZXJ0QmVmb3JlJyBvbiAnTm9kZSc6IFRoZSBub2RlIGJlZm9yZSB3aGljaCB0aGUgbmV3IG5vZGUgaXMgdG8gYmUgaW5zZXJ0ZWQgaXMgbm90IGEgY2hpbGQgb2YgdGhpcyBub2RlLlwiKTt9aWYoYj09PWEpcmV0dXJuIGE7dmFyIGQ9W10sZT0oYz1kZCh0aGlzKSk/Yy5ob3N0LmxvY2FsTmFtZTpVYyh0aGlzKSxmPWEuX19zaGFkeV9wYXJlbnROb2RlO2lmKGYpe3ZhciBnPVVjKGEpO3ZhciBoPSEhY3x8IWRkKGEpfHxYYyYmdm9pZCAwIT09XG50aGlzLl9fbm9JbnNlcnRpb25Qb2ludDtmLl9fc2hhZHlfcmVtb3ZlQ2hpbGQoYSxoKX1mPSEwO3ZhciBrPSghWGN8fHZvaWQgMD09PWEuX19ub0luc2VydGlvblBvaW50JiZ2b2lkIDA9PT10aGlzLl9fbm9JbnNlcnRpb25Qb2ludCkmJiFUYyhhLGUpLGw9YyYmIWEuX19ub0luc2VydGlvblBvaW50JiYoIVhjfHxhLm5vZGVUeXBlPT09Tm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKTtpZihsfHxrKWsmJihnPWd8fFVjKGEpKSxWYyhhLGZ1bmN0aW9uKGEpe2wmJlwic2xvdFwiPT09YS5sb2NhbE5hbWUmJmQucHVzaChhKTtpZihrKXt2YXIgYj1nO1JjKCkmJihiJiZTYyhhLGIpLChiPVJjKCkpJiZiLnNjb3BlTm9kZShhLGUpKX19KTtkLmxlbmd0aCYmKGVkKGMpLGMuYy5wdXNoLmFwcGx5KGMuYyxkIGluc3RhbmNlb2YgQXJyYXk/ZDprYShqYShkKSkpLEooYykpO2tiKHRoaXMpJiYoTmMoYSx0aGlzLGIpLGM9QSh0aGlzKSxsYih0aGlzKT8oSihjLnJvb3QpLGY9ITEpOmMucm9vdCYmKGY9XG4hMSkpO2Y/KGM9Qyh0aGlzKT90aGlzLmhvc3Q6dGhpcyxiPyhiPWJkKGIpLGMuX19zaGFkeV9uYXRpdmVfaW5zZXJ0QmVmb3JlKGEsYikpOmMuX19zaGFkeV9uYXRpdmVfYXBwZW5kQ2hpbGQoYSkpOmEub3duZXJEb2N1bWVudCE9PXRoaXMub3duZXJEb2N1bWVudCYmdGhpcy5vd25lckRvY3VtZW50LmFkb3B0Tm9kZShhKTtjZCh0aGlzLGEpO3JldHVybiBhfSxhcHBlbmRDaGlsZDpmdW5jdGlvbihhKXtpZih0aGlzIT1hfHwhQyhhKSlyZXR1cm4gdGhpcy5fX3NoYWR5X2luc2VydEJlZm9yZShhKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24oYSxiKXtiPXZvaWQgMD09PWI/ITE6YjtpZih0aGlzLm93bmVyRG9jdW1lbnQhPT1XYylyZXR1cm4gdGhpcy5fX3NoYWR5X25hdGl2ZV9yZW1vdmVDaGlsZChhKTtpZihhLl9fc2hhZHlfcGFyZW50Tm9kZSE9PXRoaXMpdGhyb3cgRXJyb3IoXCJUaGUgbm9kZSB0byBiZSByZW1vdmVkIGlzIG5vdCBhIGNoaWxkIG9mIHRoaXMgbm9kZTogXCIrYSk7dmFyIGM9XG5kZChhKSxkPWMmJmZkKGMsYSksZT1BKHRoaXMpO2lmKGtiKHRoaXMpJiYoT2MoYSx0aGlzKSxsYih0aGlzKSkpe0ooZS5yb290KTt2YXIgZj0hMH1pZihSYygpJiYhYiYmYyYmYS5ub2RlVHlwZSE9PU5vZGUuVEVYVF9OT0RFKXt2YXIgZz1VYyhhKTtWYyhhLGZ1bmN0aW9uKGEpe1NjKGEsZyl9KX1hZChhKTtjJiYoKGI9dGhpcyYmXCJzbG90XCI9PT10aGlzLmxvY2FsTmFtZSkmJihmPSEwKSwoZHx8YikmJkooYykpO2Z8fChmPUModGhpcyk/dGhpcy5ob3N0OnRoaXMsKCFlLnJvb3QmJlwic2xvdFwiIT09YS5sb2NhbE5hbWV8fGY9PT1hLl9fc2hhZHlfbmF0aXZlX3BhcmVudE5vZGUpJiZmLl9fc2hhZHlfbmF0aXZlX3JlbW92ZUNoaWxkKGEpKTtjZCh0aGlzLG51bGwsYSk7cmV0dXJuIGF9LHJlcGxhY2VDaGlsZDpmdW5jdGlvbihhLGIpe3RoaXMuX19zaGFkeV9pbnNlcnRCZWZvcmUoYSxiKTt0aGlzLl9fc2hhZHlfcmVtb3ZlQ2hpbGQoYik7cmV0dXJuIGF9LGNsb25lTm9kZTpmdW5jdGlvbihhKXtpZihcInRlbXBsYXRlXCI9PVxudGhpcy5sb2NhbE5hbWUpcmV0dXJuIHRoaXMuX19zaGFkeV9uYXRpdmVfY2xvbmVOb2RlKGEpO3ZhciBiPXRoaXMuX19zaGFkeV9uYXRpdmVfY2xvbmVOb2RlKCExKTtpZihhJiZiLm5vZGVUeXBlIT09Tm9kZS5BVFRSSUJVVEVfTk9ERSl7YT10aGlzLl9fc2hhZHlfZmlyc3RDaGlsZDtmb3IodmFyIGM7YTthPWEuX19zaGFkeV9uZXh0U2libGluZyljPWEuX19zaGFkeV9jbG9uZU5vZGUoITApLGIuX19zaGFkeV9hcHBlbmRDaGlsZChjKX1yZXR1cm4gYn0sZ2V0Um9vdE5vZGU6ZnVuY3Rpb24oYSl7aWYodGhpcyYmdGhpcy5ub2RlVHlwZSl7dmFyIGI9eih0aGlzKSxjPWIuY2E7dm9pZCAwPT09YyYmKEModGhpcyk/KGM9dGhpcyxiLmNhPWMpOihjPShjPXRoaXMuX19zaGFkeV9wYXJlbnROb2RlKT9jLl9fc2hhZHlfZ2V0Um9vdE5vZGUoYSk6dGhpcyxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuX19zaGFkeV9uYXRpdmVfY29udGFpbnModGhpcykmJihiLmNhPWMpKSk7cmV0dXJuIGN9fSxcbmNvbnRhaW5zOmZ1bmN0aW9uKGEpe3JldHVybiB1Yih0aGlzLGEpfX0pO2Z1bmN0aW9uIGhkKGEsYixjKXt2YXIgZD1bXTtpZChhLGIsYyxkKTtyZXR1cm4gZH1mdW5jdGlvbiBpZChhLGIsYyxkKXtmb3IoYT1hLl9fc2hhZHlfZmlyc3RDaGlsZDthO2E9YS5fX3NoYWR5X25leHRTaWJsaW5nKXt2YXIgZTtpZihlPWEubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7ZT1hO3ZhciBmPWIsZz1jLGg9ZCxrPWYoZSk7ayYmaC5wdXNoKGUpO2cmJmcoayk/ZT1rOihpZChlLGYsZyxoKSxlPXZvaWQgMCl9aWYoZSlicmVha319XG52YXIgamQ9RSh7Z2V0IGZpcnN0RWxlbWVudENoaWxkKCl7dmFyIGE9QSh0aGlzKTtpZihhJiZ2b2lkIDAhPT1hLmZpcnN0Q2hpbGQpe2ZvcihhPXRoaXMuX19zaGFkeV9maXJzdENoaWxkO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERTspYT1hLl9fc2hhZHlfbmV4dFNpYmxpbmc7cmV0dXJuIGF9cmV0dXJuIHRoaXMuX19zaGFkeV9uYXRpdmVfZmlyc3RFbGVtZW50Q2hpbGR9LGdldCBsYXN0RWxlbWVudENoaWxkKCl7dmFyIGE9QSh0aGlzKTtpZihhJiZ2b2lkIDAhPT1hLmxhc3RDaGlsZCl7Zm9yKGE9dGhpcy5fX3NoYWR5X2xhc3RDaGlsZDthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5fX3NoYWR5X3ByZXZpb3VzU2libGluZztyZXR1cm4gYX1yZXR1cm4gdGhpcy5fX3NoYWR5X25hdGl2ZV9sYXN0RWxlbWVudENoaWxkfSxnZXQgY2hpbGRyZW4oKXtyZXR1cm4ga2IodGhpcyk/dmIoQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHhiKHRoaXMpLFxuZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERX0pKTp0aGlzLl9fc2hhZHlfbmF0aXZlX2NoaWxkcmVufSxnZXQgY2hpbGRFbGVtZW50Q291bnQoKXt2YXIgYT10aGlzLl9fc2hhZHlfY2hpbGRyZW47cmV0dXJuIGE/YS5sZW5ndGg6MH19KSxrZD1FKHtxdWVyeVNlbGVjdG9yOmZ1bmN0aW9uKGEpe3JldHVybiBoZCh0aGlzLGZ1bmN0aW9uKGIpe3JldHVybiBvYi5jYWxsKGIsYSl9LGZ1bmN0aW9uKGEpe3JldHVybiEhYX0pWzBdfHxudWxsfSxxdWVyeVNlbGVjdG9yQWxsOmZ1bmN0aW9uKGEsYil7aWYoYil7Yj1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9fc2hhZHlfbmF0aXZlX3F1ZXJ5U2VsZWN0b3JBbGwoYSkpO3ZhciBjPXRoaXMuX19zaGFkeV9nZXRSb290Tm9kZSgpO3JldHVybiBiLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gYS5fX3NoYWR5X2dldFJvb3ROb2RlKCk9PWN9KX1yZXR1cm4gaGQodGhpcyxmdW5jdGlvbihiKXtyZXR1cm4gb2IuY2FsbChiLFxuYSl9KX19KSxsZD1CLnRhJiYhQi5NP09iamVjdC5hc3NpZ24oe30samQpOmpkO09iamVjdC5hc3NpZ24oamQsa2QpO3ZhciBtZD1FKHtnZXRFbGVtZW50QnlJZDpmdW5jdGlvbihhKXtyZXR1cm5cIlwiPT09YT9udWxsOmhkKHRoaXMsZnVuY3Rpb24oYil7cmV0dXJuIGIuaWQ9PWF9LGZ1bmN0aW9uKGEpe3JldHVybiEhYX0pWzBdfHxudWxsfX0pO3ZhciBuZD1FKHtnZXQgYWN0aXZlRWxlbWVudCgpe3ZhciBhPUIuRD9kb2N1bWVudC5fX3NoYWR5X25hdGl2ZV9hY3RpdmVFbGVtZW50OmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7aWYoIWF8fCFhLm5vZGVUeXBlKXJldHVybiBudWxsO3ZhciBiPSEhQyh0aGlzKTtpZighKHRoaXM9PT1kb2N1bWVudHx8YiYmdGhpcy5ob3N0IT09YSYmdGhpcy5ob3N0Ll9fc2hhZHlfbmF0aXZlX2NvbnRhaW5zKGEpKSlyZXR1cm4gbnVsbDtmb3IoYj1kZChhKTtiJiZiIT09dGhpczspYT1iLmhvc3QsYj1kZChhKTtyZXR1cm4gdGhpcz09PWRvY3VtZW50P2I/bnVsbDphOmI9PT10aGlzP2E6bnVsbH19KTt2YXIgb2Q9ZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiaW5lcnRcIikscGQ9RSh7Z2V0IGlubmVySFRNTCgpe3JldHVybiBrYih0aGlzKT9RYihcInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZT90aGlzLmNvbnRlbnQ6dGhpcyx4Yik6dGhpcy5fX3NoYWR5X25hdGl2ZV9pbm5lckhUTUx9LHNldCBpbm5lckhUTUwoYSl7aWYoXCJ0ZW1wbGF0ZVwiPT09dGhpcy5sb2NhbE5hbWUpdGhpcy5fX3NoYWR5X25hdGl2ZV9pbm5lckhUTUw9YTtlbHNleyRjKHRoaXMpO3ZhciBiPXRoaXMubG9jYWxOYW1lfHxcImRpdlwiO2I9dGhpcy5uYW1lc3BhY2VVUkkmJnRoaXMubmFtZXNwYWNlVVJJIT09b2QubmFtZXNwYWNlVVJJP29kLmNyZWF0ZUVsZW1lbnROUyh0aGlzLm5hbWVzcGFjZVVSSSxiKTpvZC5jcmVhdGVFbGVtZW50KGIpO2ZvcihCLkQ/Yi5fX3NoYWR5X25hdGl2ZV9pbm5lckhUTUw9YTpiLmlubmVySFRNTD1hO2E9Yi5fX3NoYWR5X2ZpcnN0Q2hpbGQ7KXRoaXMuX19zaGFkeV9pbnNlcnRCZWZvcmUoYSl9fX0pO3ZhciBxZD1FKHthZGRFdmVudExpc3RlbmVyOmZ1bmN0aW9uKGEsYixjKXtcIm9iamVjdFwiIT09dHlwZW9mIGMmJihjPXtjYXB0dXJlOiEhY30pO2MuTz1jLk98fHRoaXM7dGhpcy5ob3N0Ll9fc2hhZHlfYWRkRXZlbnRMaXN0ZW5lcihhLGIsYyl9LHJlbW92ZUV2ZW50TGlzdGVuZXI6ZnVuY3Rpb24oYSxiLGMpe1wib2JqZWN0XCIhPT10eXBlb2YgYyYmKGM9e2NhcHR1cmU6ISFjfSk7Yy5PPWMuT3x8dGhpczt0aGlzLmhvc3QuX19zaGFkeV9yZW1vdmVFdmVudExpc3RlbmVyKGEsYixjKX19KTtmdW5jdGlvbiByZChhLGIpe0QoYSxxZCxiKTtEKGEsbmQsYik7RChhLHBkLGIpO0QoYSxqZCxiKTtCLk0mJiFiPyhEKGEsZ2QsYiksRChhLG1kLGIpKTpCLkR8fChEKGEsY2MpLEQoYSxhYyksRChhLGJjKSl9O3ZhciBzZD17fSx0ZD1CLmRlZmVyQ29ubmVjdGlvbkNhbGxiYWNrcyYmXCJsb2FkaW5nXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlLHVkO2Z1bmN0aW9uIHZkKGEpe3ZhciBiPVtdO2RvIGIudW5zaGlmdChhKTt3aGlsZShhPWEuX19zaGFkeV9wYXJlbnROb2RlKTtyZXR1cm4gYn1mdW5jdGlvbiB3ZChhLGIsYyl7aWYoYSE9PXNkKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGNvbnN0cnVjdG9yXCIpO3RoaXMuYT1udWxsO3hkKHRoaXMsYixjKX1cbmZ1bmN0aW9uIHhkKGEsYixjKXthLkRhPVwiU2hhZHlSb290XCI7YS5ob3N0PWI7YS5tb2RlPWMmJmMubW9kZTtQYyhhLmhvc3QpO2I9eihhLmhvc3QpO2Iucm9vdD1hO2IuVGE9XCJjbG9zZWRcIiE9PWEubW9kZT9hOm51bGw7Yj16KGEpO2IuZmlyc3RDaGlsZD1iLmxhc3RDaGlsZD1iLnBhcmVudE5vZGU9Yi5uZXh0U2libGluZz1iLnByZXZpb3VzU2libGluZz1udWxsO2lmKEIucHJlZmVyUGVyZm9ybWFuY2UpZm9yKDtiPWEuaG9zdC5fX3NoYWR5X25hdGl2ZV9maXJzdENoaWxkOylhLmhvc3QuX19zaGFkeV9uYXRpdmVfcmVtb3ZlQ2hpbGQoYik7ZWxzZSBKKGEpfWZ1bmN0aW9uIEooYSl7YS5SfHwoYS5SPSEwLEFiKGZ1bmN0aW9uKCl7cmV0dXJuIHlkKGEpfSkpfVxuZnVuY3Rpb24geWQoYSl7dmFyIGI7aWYoYj1hLlIpe2Zvcih2YXIgYzthOylhOnthLlImJihjPWEpLGI9YTthPWIuaG9zdC5fX3NoYWR5X2dldFJvb3ROb2RlKCk7aWYoQyhhKSYmKGI9QShiLmhvc3QpKSYmMDxiLlkpYnJlYWsgYTthPXZvaWQgMH1iPWN9KGM9YikmJmMuX3JlbmRlclNlbGYoKX1cbndkLnByb3RvdHlwZS5fcmVuZGVyU2VsZj1mdW5jdGlvbigpe3ZhciBhPXRkO3RkPSEwO3RoaXMuUj0hMTtpZih0aGlzLmEpe3pkKHRoaXMpO2Zvcih2YXIgYj0wLGM7Yjx0aGlzLmEubGVuZ3RoO2IrKyl7Yz10aGlzLmFbYl07dmFyIGQ9QShjKSxlPWQuYXNzaWduZWROb2RlcztkLmFzc2lnbmVkTm9kZXM9W107ZC5UPVtdO2lmKGQucWE9ZSlmb3IoZD0wO2Q8ZS5sZW5ndGg7ZCsrKXt2YXIgZj1BKGVbZF0pO2YuaGE9Zi5hc3NpZ25lZFNsb3Q7Zi5hc3NpZ25lZFNsb3Q9PT1jJiYoZi5hc3NpZ25lZFNsb3Q9bnVsbCl9fWZvcihiPXRoaXMuaG9zdC5fX3NoYWR5X2ZpcnN0Q2hpbGQ7YjtiPWIuX19zaGFkeV9uZXh0U2libGluZylBZCh0aGlzLGIpO2ZvcihiPTA7Yjx0aGlzLmEubGVuZ3RoO2IrKyl7Yz10aGlzLmFbYl07ZT1BKGMpO2lmKCFlLmFzc2lnbmVkTm9kZXMubGVuZ3RoKWZvcihkPWMuX19zaGFkeV9maXJzdENoaWxkO2Q7ZD1kLl9fc2hhZHlfbmV4dFNpYmxpbmcpQWQodGhpcyxcbmQsYyk7KGQ9KGQ9QShjLl9fc2hhZHlfcGFyZW50Tm9kZSkpJiZkLnJvb3QpJiYobWIoZCl8fGQuUikmJmQuX3JlbmRlclNlbGYoKTtCZCh0aGlzLGUuVCxlLmFzc2lnbmVkTm9kZXMpO2lmKGQ9ZS5xYSl7Zm9yKGY9MDtmPGQubGVuZ3RoO2YrKylBKGRbZl0pLmhhPW51bGw7ZS5xYT1udWxsO2QubGVuZ3RoPmUuYXNzaWduZWROb2Rlcy5sZW5ndGgmJihlLmphPSEwKX1lLmphJiYoZS5qYT0hMSxDZCh0aGlzLGMpKX1jPXRoaXMuYTtiPVtdO2ZvcihlPTA7ZTxjLmxlbmd0aDtlKyspZD1jW2VdLl9fc2hhZHlfcGFyZW50Tm9kZSwoZj1BKGQpKSYmZi5yb290fHwhKDA+Yi5pbmRleE9mKGQpKXx8Yi5wdXNoKGQpO2ZvcihjPTA7YzxiLmxlbmd0aDtjKyspe2Y9YltjXTtlPWY9PT10aGlzP3RoaXMuaG9zdDpmO2Q9W107Zm9yKGY9Zi5fX3NoYWR5X2ZpcnN0Q2hpbGQ7ZjtmPWYuX19zaGFkeV9uZXh0U2libGluZylpZihcInNsb3RcIj09Zi5sb2NhbE5hbWUpZm9yKHZhciBnPUEoZikuVCxoPTA7aDxcbmcubGVuZ3RoO2grKylkLnB1c2goZ1toXSk7ZWxzZSBkLnB1c2goZik7Zj13YihlKTtnPUtjKGQsZC5sZW5ndGgsZixmLmxlbmd0aCk7Zm9yKHZhciBrPWg9MCxsPXZvaWQgMDtoPGcubGVuZ3RoJiYobD1nW2hdKTtoKyspe2Zvcih2YXIgbj0wLHE9dm9pZCAwO248bC5XLmxlbmd0aCYmKHE9bC5XW25dKTtuKyspcS5fX3NoYWR5X25hdGl2ZV9wYXJlbnROb2RlPT09ZSYmZS5fX3NoYWR5X25hdGl2ZV9yZW1vdmVDaGlsZChxKSxmLnNwbGljZShsLmluZGV4K2ssMSk7ay09bC5afWs9MDtmb3IobD12b2lkIDA7azxnLmxlbmd0aCYmKGw9Z1trXSk7aysrKWZvcihoPWZbbC5pbmRleF0sbj1sLmluZGV4O248bC5pbmRleCtsLlo7bisrKXE9ZFtuXSxlLl9fc2hhZHlfbmF0aXZlX2luc2VydEJlZm9yZShxLGgpLGYuc3BsaWNlKG4sMCxxKX19aWYoIUIucHJlZmVyUGVyZm9ybWFuY2UmJiF0aGlzLnBhKWZvcihiPXRoaXMuaG9zdC5fX3NoYWR5X2ZpcnN0Q2hpbGQ7YjtiPWIuX19zaGFkeV9uZXh0U2libGluZyljPVxuQShiKSxiLl9fc2hhZHlfbmF0aXZlX3BhcmVudE5vZGUhPT10aGlzLmhvc3R8fFwic2xvdFwiIT09Yi5sb2NhbE5hbWUmJmMuYXNzaWduZWRTbG90fHx0aGlzLmhvc3QuX19zaGFkeV9uYXRpdmVfcmVtb3ZlQ2hpbGQoYik7dGhpcy5wYT0hMDt0ZD1hO3VkJiZ1ZCgpfTtmdW5jdGlvbiBBZChhLGIsYyl7dmFyIGQ9eihiKSxlPWQuaGE7ZC5oYT1udWxsO2N8fChjPShhPWEuYltiLl9fc2hhZHlfc2xvdHx8XCJfX2NhdGNoYWxsXCJdKSYmYVswXSk7Yz8oeihjKS5hc3NpZ25lZE5vZGVzLnB1c2goYiksZC5hc3NpZ25lZFNsb3Q9Yyk6ZC5hc3NpZ25lZFNsb3Q9dm9pZCAwO2UhPT1kLmFzc2lnbmVkU2xvdCYmZC5hc3NpZ25lZFNsb3QmJih6KGQuYXNzaWduZWRTbG90KS5qYT0hMCl9XG5mdW5jdGlvbiBCZChhLGIsYyl7Zm9yKHZhciBkPTAsZT12b2lkIDA7ZDxjLmxlbmd0aCYmKGU9Y1tkXSk7ZCsrKWlmKFwic2xvdFwiPT1lLmxvY2FsTmFtZSl7dmFyIGY9QShlKS5hc3NpZ25lZE5vZGVzO2YmJmYubGVuZ3RoJiZCZChhLGIsZil9ZWxzZSBiLnB1c2goY1tkXSl9ZnVuY3Rpb24gQ2QoYSxiKXtiLl9fc2hhZHlfbmF0aXZlX2Rpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic2xvdGNoYW5nZVwiKSk7Yj1BKGIpO2IuYXNzaWduZWRTbG90JiZDZChhLGIuYXNzaWduZWRTbG90KX1mdW5jdGlvbiBlZChhKXthLmM9YS5jfHxbXTthLmE9YS5hfHxbXTthLmI9YS5ifHx7fX1cbmZ1bmN0aW9uIHpkKGEpe2lmKGEuYyYmYS5jLmxlbmd0aCl7Zm9yKHZhciBiPWEuYyxjLGQ9MDtkPGIubGVuZ3RoO2QrKyl7dmFyIGU9YltkXTtQYyhlKTt2YXIgZj1lLl9fc2hhZHlfcGFyZW50Tm9kZTtQYyhmKTtmPUEoZik7Zi5ZPShmLll8fDApKzE7Zj1EZChlKTthLmJbZl0/KGM9Y3x8e30sY1tmXT0hMCxhLmJbZl0ucHVzaChlKSk6YS5iW2ZdPVtlXTthLmEucHVzaChlKX1pZihjKWZvcih2YXIgZyBpbiBjKWEuYltnXT1FZChhLmJbZ10pO2EuYz1bXX19ZnVuY3Rpb24gRGQoYSl7dmFyIGI9YS5uYW1lfHxhLmdldEF0dHJpYnV0ZShcIm5hbWVcIil8fFwiX19jYXRjaGFsbFwiO3JldHVybiBhLkJhPWJ9XG5mdW5jdGlvbiBFZChhKXtyZXR1cm4gYS5zb3J0KGZ1bmN0aW9uKGEsYyl7YT12ZChhKTtmb3IodmFyIGI9dmQoYyksZT0wO2U8YS5sZW5ndGg7ZSsrKXtjPWFbZV07dmFyIGY9YltlXTtpZihjIT09ZilyZXR1cm4gYT14YihjLl9fc2hhZHlfcGFyZW50Tm9kZSksYS5pbmRleE9mKGMpLWEuaW5kZXhPZihmKX19KX1cbmZ1bmN0aW9uIGZkKGEsYil7aWYoYS5hKXt6ZChhKTt2YXIgYz1hLmIsZDtmb3IoZCBpbiBjKWZvcih2YXIgZT1jW2RdLGY9MDtmPGUubGVuZ3RoO2YrKyl7dmFyIGc9ZVtmXTtpZih1YihiLGcpKXtlLnNwbGljZShmLDEpO3ZhciBoPWEuYS5pbmRleE9mKGcpOzA8PWgmJihhLmEuc3BsaWNlKGgsMSksKGg9QShnLl9fc2hhZHlfcGFyZW50Tm9kZSkpJiZoLlkmJmguWS0tKTtmLS07Zz1BKGcpO2lmKGg9Zy5UKWZvcih2YXIgaz0wO2s8aC5sZW5ndGg7aysrKXt2YXIgbD1oW2tdLG49bC5fX3NoYWR5X25hdGl2ZV9wYXJlbnROb2RlO24mJm4uX19zaGFkeV9uYXRpdmVfcmVtb3ZlQ2hpbGQobCl9Zy5UPVtdO2cuYXNzaWduZWROb2Rlcz1bXTtoPSEwfX1yZXR1cm4gaH19ZnVuY3Rpb24gbWIoYSl7emQoYSk7cmV0dXJuISghYS5hfHwhYS5hLmxlbmd0aCl9XG4oZnVuY3Rpb24oYSl7YS5fX3Byb3RvX189RG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGU7cmQoYSxcIl9fc2hhZHlfXCIpO3JkKGEpO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGEse25vZGVUeXBlOnt2YWx1ZTpOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUsY29uZmlndXJhYmxlOiEwfSxub2RlTmFtZTp7dmFsdWU6XCIjZG9jdW1lbnQtZnJhZ21lbnRcIixjb25maWd1cmFibGU6ITB9LG5vZGVWYWx1ZTp7dmFsdWU6bnVsbCxjb25maWd1cmFibGU6ITB9fSk7W1wibG9jYWxOYW1lXCIsXCJuYW1lc3BhY2VVUklcIixcInByZWZpeFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse3ZhbHVlOnZvaWQgMCxjb25maWd1cmFibGU6ITB9KX0pO1tcIm93bmVyRG9jdW1lbnRcIixcImJhc2VVUklcIixcImlzQ29ubmVjdGVkXCJdLmZvckVhY2goZnVuY3Rpb24oYil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaG9zdFtiXX0sXG5jb25maWd1cmFibGU6ITB9KX0pfSkod2QucHJvdG90eXBlKTtcbmlmKHdpbmRvdy5jdXN0b21FbGVtZW50cyYmQi5rYSYmIUIucHJlZmVyUGVyZm9ybWFuY2Upe3ZhciBGZD1uZXcgTWFwO3VkPWZ1bmN0aW9uKCl7dmFyIGE9W107RmQuZm9yRWFjaChmdW5jdGlvbihiLGMpe2EucHVzaChbYyxiXSl9KTtGZC5jbGVhcigpO2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdWzBdO2FbYl1bMV0/Yy5fX3NoYWR5ZG9tX2Nvbm5lY3RlZENhbGxiYWNrKCk6Yy5fX3NoYWR5ZG9tX2Rpc2Nvbm5lY3RlZENhbGxiYWNrKCl9fTt0ZCYmZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixmdW5jdGlvbigpe3RkPSExO3VkKCl9LHtvbmNlOiEwfSk7dmFyIEdkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD0wLGU9XCJfX2lzQ29ubmVjdGVkXCIrZCsrO2lmKGJ8fGMpYS5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2s9YS5wcm90b3R5cGUuX19zaGFkeWRvbV9jb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbigpe3RkP0ZkLnNldCh0aGlzLFxuITApOnRoaXNbZV18fCh0aGlzW2VdPSEwLGImJmIuY2FsbCh0aGlzKSl9LGEucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrPWEucHJvdG90eXBlLl9fc2hhZHlkb21fZGlzY29ubmVjdGVkQ2FsbGJhY2s9ZnVuY3Rpb24oKXt0ZD90aGlzLmlzQ29ubmVjdGVkfHxGZC5zZXQodGhpcywhMSk6dGhpc1tlXSYmKHRoaXNbZV09ITEsYyYmYy5jYWxsKHRoaXMpKX07cmV0dXJuIGF9LEhkPXdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUsZGVmaW5lPWZ1bmN0aW9uKGEsYil7dmFyIGM9Yi5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2ssZD1iLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjaztIZC5jYWxsKHdpbmRvdy5jdXN0b21FbGVtZW50cyxhLEdkKGIsYyxkKSk7Yi5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2s9YztiLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjaz1kfTt3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lPWRlZmluZTtPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LkN1c3RvbUVsZW1lbnRSZWdpc3RyeS5wcm90b3R5cGUsXG5cImRlZmluZVwiLHt2YWx1ZTpkZWZpbmUsY29uZmlndXJhYmxlOiEwfSl9ZnVuY3Rpb24gZGQoYSl7YT1hLl9fc2hhZHlfZ2V0Um9vdE5vZGUoKTtpZihDKGEpKXJldHVybiBhfTtmdW5jdGlvbiBJZChhKXt0aGlzLm5vZGU9YX1yPUlkLnByb3RvdHlwZTtyLmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9hZGRFdmVudExpc3RlbmVyKGEsYixjKX07ci5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfcmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGIsYyl9O3IuYXBwZW5kQ2hpbGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2FwcGVuZENoaWxkKGEpfTtyLmluc2VydEJlZm9yZT1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9pbnNlcnRCZWZvcmUoYSxiKX07ci5yZW1vdmVDaGlsZD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfcmVtb3ZlQ2hpbGQoYSl9O3IucmVwbGFjZUNoaWxkPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X3JlcGxhY2VDaGlsZChhLGIpfTtcbnIuY2xvbmVOb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9jbG9uZU5vZGUoYSl9O3IuZ2V0Um9vdE5vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2dldFJvb3ROb2RlKGEpfTtyLmNvbnRhaW5zPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9jb250YWlucyhhKX07ci5kaXNwYXRjaEV2ZW50PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9kaXNwYXRjaEV2ZW50KGEpfTtyLnNldEF0dHJpYnV0ZT1mdW5jdGlvbihhLGIpe3RoaXMubm9kZS5fX3NoYWR5X3NldEF0dHJpYnV0ZShhLGIpfTtyLmdldEF0dHJpYnV0ZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfbmF0aXZlX2dldEF0dHJpYnV0ZShhKX07ci5oYXNBdHRyaWJ1dGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X25hdGl2ZV9oYXNBdHRyaWJ1dGUoYSl9O3IucmVtb3ZlQXR0cmlidXRlPWZ1bmN0aW9uKGEpe3RoaXMubm9kZS5fX3NoYWR5X3JlbW92ZUF0dHJpYnV0ZShhKX07XG5yLmF0dGFjaFNoYWRvdz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfYXR0YWNoU2hhZG93KGEpfTtyLmZvY3VzPWZ1bmN0aW9uKCl7dGhpcy5ub2RlLl9fc2hhZHlfbmF0aXZlX2ZvY3VzKCl9O3IuYmx1cj1mdW5jdGlvbigpe3RoaXMubm9kZS5fX3NoYWR5X2JsdXIoKX07ci5pbXBvcnROb2RlPWZ1bmN0aW9uKGEsYil7aWYodGhpcy5ub2RlLm5vZGVUeXBlPT09Tm9kZS5ET0NVTUVOVF9OT0RFKXJldHVybiB0aGlzLm5vZGUuX19zaGFkeV9pbXBvcnROb2RlKGEsYil9O3IuZ2V0RWxlbWVudEJ5SWQ9ZnVuY3Rpb24oYSl7aWYodGhpcy5ub2RlLm5vZGVUeXBlPT09Tm9kZS5ET0NVTUVOVF9OT0RFKXJldHVybiB0aGlzLm5vZGUuX19zaGFkeV9nZXRFbGVtZW50QnlJZChhKX07ci5xdWVyeVNlbGVjdG9yPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9xdWVyeVNlbGVjdG9yKGEpfTtcbnIucXVlcnlTZWxlY3RvckFsbD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9xdWVyeVNlbGVjdG9yQWxsKGEsYil9O3IuYXNzaWduZWROb2Rlcz1mdW5jdGlvbihhKXtpZihcInNsb3RcIj09PXRoaXMubm9kZS5sb2NhbE5hbWUpcmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2Fzc2lnbmVkTm9kZXMoYSl9O1xudC5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhJZC5wcm90b3R5cGUse2FjdGl2ZUVsZW1lbnQ6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe2lmKEModGhpcy5ub2RlKXx8dGhpcy5ub2RlLm5vZGVUeXBlPT09Tm9kZS5ET0NVTUVOVF9OT0RFKXJldHVybiB0aGlzLm5vZGUuX19zaGFkeV9hY3RpdmVFbGVtZW50fX0sX2FjdGl2ZUVsZW1lbnQ6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmFjdGl2ZUVsZW1lbnR9fSxob3N0Ontjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtpZihDKHRoaXMubm9kZSkpcmV0dXJuIHRoaXMubm9kZS5ob3N0fX0scGFyZW50Tm9kZTp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X3BhcmVudE5vZGV9fSxmaXJzdENoaWxkOntjb25maWd1cmFibGU6ITAsXG5lbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9maXJzdENoaWxkfX0sbGFzdENoaWxkOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfbGFzdENoaWxkfX0sbmV4dFNpYmxpbmc6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9uZXh0U2libGluZ319LHByZXZpb3VzU2libGluZzp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X3ByZXZpb3VzU2libGluZ319LGNoaWxkTm9kZXM6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9jaGlsZE5vZGVzfX0scGFyZW50RWxlbWVudDp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsXG5nZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfcGFyZW50RWxlbWVudH19LGZpcnN0RWxlbWVudENoaWxkOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfZmlyc3RFbGVtZW50Q2hpbGR9fSxsYXN0RWxlbWVudENoaWxkOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfbGFzdEVsZW1lbnRDaGlsZH19LG5leHRFbGVtZW50U2libGluZzp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X25leHRFbGVtZW50U2libGluZ319LHByZXZpb3VzRWxlbWVudFNpYmxpbmc6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9wcmV2aW91c0VsZW1lbnRTaWJsaW5nfX0sXG5jaGlsZHJlbjp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2NoaWxkcmVufX0sY2hpbGRFbGVtZW50Q291bnQ6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9jaGlsZEVsZW1lbnRDb3VudH19LHNoYWRvd1Jvb3Q6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9zaGFkb3dSb290fX0sYXNzaWduZWRTbG90Ontjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfYXNzaWduZWRTbG90fX0saXNDb25uZWN0ZWQ6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9pc0Nvbm5lY3RlZH19LGlubmVySFRNTDp7Y29uZmlndXJhYmxlOiEwLFxuZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfaW5uZXJIVE1MfSxzZXQ6ZnVuY3Rpb24oYSl7dGhpcy5ub2RlLl9fc2hhZHlfaW5uZXJIVE1MPWF9fSx0ZXh0Q29udGVudDp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X3RleHRDb250ZW50fSxzZXQ6ZnVuY3Rpb24oYSl7dGhpcy5ub2RlLl9fc2hhZHlfdGV4dENvbnRlbnQ9YX19LHNsb3Q6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9zbG90fSxzZXQ6ZnVuY3Rpb24oYSl7dGhpcy5ub2RlLl9fc2hhZHlfc2xvdD1hfX0sY2xhc3NOYW1lOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfY2xhc3NOYW1lfSxzZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2NsYXNzTmFtZT1cbmF9fX0pO0ljLmZvckVhY2goZnVuY3Rpb24oYSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KElkLnByb3RvdHlwZSxhLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlW1wiX19zaGFkeV9cIithXX0sc2V0OmZ1bmN0aW9uKGIpe3RoaXMubm9kZVtcIl9fc2hhZHlfXCIrYV09Yn0sY29uZmlndXJhYmxlOiEwfSl9KTt2YXIgSmQ9bmV3IFdlYWtNYXA7ZnVuY3Rpb24gS2QoYSl7aWYoQyhhKXx8YSBpbnN0YW5jZW9mIElkKXJldHVybiBhO3ZhciBiPUpkLmdldChhKTtifHwoYj1uZXcgSWQoYSksSmQuc2V0KGEsYikpO3JldHVybiBifTt2YXIgTGQ9RSh7ZGlzcGF0Y2hFdmVudDpmdW5jdGlvbihhKXtCYigpO3JldHVybiB0aGlzLl9fc2hhZHlfbmF0aXZlX2Rpc3BhdGNoRXZlbnQoYSl9LGFkZEV2ZW50TGlzdGVuZXI6emMscmVtb3ZlRXZlbnRMaXN0ZW5lcjpCY30pO3ZhciBNZD1FKHtnZXQgYXNzaWduZWRTbG90KCl7dmFyIGE9dGhpcy5fX3NoYWR5X3BhcmVudE5vZGU7KGE9YSYmYS5fX3NoYWR5X3NoYWRvd1Jvb3QpJiZ5ZChhKTtyZXR1cm4oYT1BKHRoaXMpKSYmYS5hc3NpZ25lZFNsb3R8fG51bGx9fSk7dmFyIE5kPXdpbmRvdy5kb2N1bWVudDtmdW5jdGlvbiBPZChhLGIpe2lmKFwic2xvdFwiPT09YilhPWEuX19zaGFkeV9wYXJlbnROb2RlLGxiKGEpJiZKKEEoYSkucm9vdCk7ZWxzZSBpZihcInNsb3RcIj09PWEubG9jYWxOYW1lJiZcIm5hbWVcIj09PWImJihiPWRkKGEpKSl7aWYoYi5hKXt6ZChiKTt2YXIgYz1hLkJhLGQ9RGQoYSk7aWYoZCE9PWMpe2M9Yi5iW2NdO3ZhciBlPWMuaW5kZXhPZihhKTswPD1lJiZjLnNwbGljZShlLDEpO2M9Yi5iW2RdfHwoYi5iW2RdPVtdKTtjLnB1c2goYSk7MTxjLmxlbmd0aCYmKGIuYltkXT1FZChjKSl9fUooYil9fVxudmFyIFBkPUUoe2dldCBwcmV2aW91c0VsZW1lbnRTaWJsaW5nKCl7dmFyIGE9QSh0aGlzKTtpZihhJiZ2b2lkIDAhPT1hLnByZXZpb3VzU2libGluZyl7Zm9yKGE9dGhpcy5fX3NoYWR5X3ByZXZpb3VzU2libGluZzthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5fX3NoYWR5X3ByZXZpb3VzU2libGluZztyZXR1cm4gYX1yZXR1cm4gdGhpcy5fX3NoYWR5X25hdGl2ZV9wcmV2aW91c0VsZW1lbnRTaWJsaW5nfSxnZXQgbmV4dEVsZW1lbnRTaWJsaW5nKCl7dmFyIGE9QSh0aGlzKTtpZihhJiZ2b2lkIDAhPT1hLm5leHRTaWJsaW5nKXtmb3IoYT10aGlzLl9fc2hhZHlfbmV4dFNpYmxpbmc7YSYmYS5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFOylhPWEuX19zaGFkeV9uZXh0U2libGluZztyZXR1cm4gYX1yZXR1cm4gdGhpcy5fX3NoYWR5X25hdGl2ZV9uZXh0RWxlbWVudFNpYmxpbmd9LGdldCBzbG90KCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwic2xvdFwiKX0sXG5zZXQgc2xvdChhKXt0aGlzLl9fc2hhZHlfc2V0QXR0cmlidXRlKFwic2xvdFwiLGEpfSxnZXQgc2hhZG93Um9vdCgpe3ZhciBhPUEodGhpcyk7cmV0dXJuIGEmJmEuVGF8fG51bGx9LGdldCBjbGFzc05hbWUoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn0sc2V0IGNsYXNzTmFtZShhKXt0aGlzLl9fc2hhZHlfc2V0QXR0cmlidXRlKFwiY2xhc3NcIixhKX0sc2V0QXR0cmlidXRlOmZ1bmN0aW9uKGEsYil7aWYodGhpcy5vd25lckRvY3VtZW50IT09TmQpdGhpcy5fX3NoYWR5X25hdGl2ZV9zZXRBdHRyaWJ1dGUoYSxiKTtlbHNle3ZhciBjOyhjPVJjKCkpJiZcImNsYXNzXCI9PT1hPyhjLnNldEVsZW1lbnRDbGFzcyh0aGlzLGIpLGM9ITApOmM9ITE7Y3x8KHRoaXMuX19zaGFkeV9uYXRpdmVfc2V0QXR0cmlidXRlKGEsYiksT2QodGhpcyxhKSl9fSxyZW1vdmVBdHRyaWJ1dGU6ZnVuY3Rpb24oYSl7dGhpcy5fX3NoYWR5X25hdGl2ZV9yZW1vdmVBdHRyaWJ1dGUoYSk7T2QodGhpcyxcbmEpfSxhdHRhY2hTaGFkb3c6ZnVuY3Rpb24oYSl7aWYoIXRoaXMpdGhyb3cgRXJyb3IoXCJNdXN0IHByb3ZpZGUgYSBob3N0LlwiKTtpZighYSl0aHJvdyBFcnJvcihcIk5vdCBlbm91Z2ggYXJndW1lbnRzLlwiKTtpZihhLnNoYWR5VXBncmFkZUZyYWdtZW50JiYhQi55YSl7dmFyIGI9YS5zaGFkeVVwZ3JhZGVGcmFnbWVudDtiLl9fcHJvdG9fXz1TaGFkb3dSb290LnByb3RvdHlwZTt4ZChiLHRoaXMsYSk7UGMoYixiKTthPWIuX19ub0luc2VydGlvblBvaW50P251bGw6Yi5xdWVyeVNlbGVjdG9yQWxsKFwic2xvdFwiKTtiLl9fbm9JbnNlcnRpb25Qb2ludD12b2lkIDA7aWYoYSYmYS5sZW5ndGgpe3ZhciBjPWI7ZWQoYyk7Yy5jLnB1c2guYXBwbHkoYy5jLGEgaW5zdGFuY2VvZiBBcnJheT9hOmthKGphKGEpKSk7SihiKX1iLmhvc3QuX19zaGFkeV9uYXRpdmVfYXBwZW5kQ2hpbGQoYil9ZWxzZSBiPW5ldyB3ZChzZCx0aGlzLGEpO3JldHVybiBifX0pO3ZhciBRZD1FKHtibHVyOmZ1bmN0aW9uKCl7dmFyIGE9QSh0aGlzKTsoYT0oYT1hJiZhLnJvb3QpJiZhLmFjdGl2ZUVsZW1lbnQpP2EuX19zaGFkeV9ibHVyKCk6dGhpcy5fX3NoYWR5X25hdGl2ZV9ibHVyKCl9fSk7SWMuZm9yRWFjaChmdW5jdGlvbihhKXtRZFthXT17c2V0OmZ1bmN0aW9uKGIpe3ZhciBjPXoodGhpcyksZD1hLnN1YnN0cmluZygyKTtjLk58fChjLk49e30pO2MuTlthXSYmdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGQsYy5OW2FdKTt0aGlzLl9fc2hhZHlfYWRkRXZlbnRMaXN0ZW5lcihkLGIpO2MuTlthXT1ifSxnZXQ6ZnVuY3Rpb24oKXt2YXIgYj1BKHRoaXMpO3JldHVybiBiJiZiLk4mJmIuTlthXX0sY29uZmlndXJhYmxlOiEwfX0pO3ZhciBSZD1FKHthc3NpZ25lZE5vZGVzOmZ1bmN0aW9uKGEpe2lmKFwic2xvdFwiPT09dGhpcy5sb2NhbE5hbWUpe3ZhciBiPXRoaXMuX19zaGFkeV9nZXRSb290Tm9kZSgpO2ImJkMoYikmJnlkKGIpO3JldHVybihiPUEodGhpcykpPyhhJiZhLmZsYXR0ZW4/Yi5UOmIuYXNzaWduZWROb2Rlcyl8fFtdOltdfX0sYWRkRXZlbnRMaXN0ZW5lcjpmdW5jdGlvbihhLGIsYyl7aWYoXCJzbG90XCIhPT10aGlzLmxvY2FsTmFtZXx8XCJzbG90Y2hhbmdlXCI9PT1hKXpjLmNhbGwodGhpcyxhLGIsYyk7ZWxzZXtcIm9iamVjdFwiIT09dHlwZW9mIGMmJihjPXtjYXB0dXJlOiEhY30pO3ZhciBkPXRoaXMuX19zaGFkeV9wYXJlbnROb2RlO2lmKCFkKXRocm93IEVycm9yKFwiU2hhZHlET00gY2Fubm90IGF0dGFjaCBldmVudCB0byBzbG90IHVubGVzcyBpdCBoYXMgYSBgcGFyZW50Tm9kZWBcIik7Yy5PPXRoaXM7ZC5fX3NoYWR5X2FkZEV2ZW50TGlzdGVuZXIoYSxiLGMpfX0scmVtb3ZlRXZlbnRMaXN0ZW5lcjpmdW5jdGlvbihhLFxuYixjKXtpZihcInNsb3RcIiE9PXRoaXMubG9jYWxOYW1lfHxcInNsb3RjaGFuZ2VcIj09PWEpQmMuY2FsbCh0aGlzLGEsYixjKTtlbHNle1wib2JqZWN0XCIhPT10eXBlb2YgYyYmKGM9e2NhcHR1cmU6ISFjfSk7dmFyIGQ9dGhpcy5fX3NoYWR5X3BhcmVudE5vZGU7aWYoIWQpdGhyb3cgRXJyb3IoXCJTaGFkeURPTSBjYW5ub3QgYXR0YWNoIGV2ZW50IHRvIHNsb3QgdW5sZXNzIGl0IGhhcyBhIGBwYXJlbnROb2RlYFwiKTtjLk89dGhpcztkLl9fc2hhZHlfcmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGIsYyl9fX0pO3ZhciBTZD13aW5kb3cuZG9jdW1lbnQsVGQ9RSh7aW1wb3J0Tm9kZTpmdW5jdGlvbihhLGIpe2lmKGEub3duZXJEb2N1bWVudCE9PVNkfHxcInRlbXBsYXRlXCI9PT1hLmxvY2FsTmFtZSlyZXR1cm4gdGhpcy5fX3NoYWR5X25hdGl2ZV9pbXBvcnROb2RlKGEsYik7dmFyIGM9dGhpcy5fX3NoYWR5X25hdGl2ZV9pbXBvcnROb2RlKGEsITEpO2lmKGIpZm9yKGE9YS5fX3NoYWR5X2ZpcnN0Q2hpbGQ7YTthPWEuX19zaGFkeV9uZXh0U2libGluZyliPXRoaXMuX19zaGFkeV9pbXBvcnROb2RlKGEsITApLGMuX19zaGFkeV9hcHBlbmRDaGlsZChiKTtyZXR1cm4gY319KTt2YXIgVWQ9RSh7YWRkRXZlbnRMaXN0ZW5lcjp6Yy5iaW5kKHdpbmRvdykscmVtb3ZlRXZlbnRMaXN0ZW5lcjpCYy5iaW5kKHdpbmRvdyl9KTt2YXIgVmQ9e307T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRWxlbWVudC5wcm90b3R5cGUsXCJwYXJlbnRFbGVtZW50XCIpJiYoVmQucGFyZW50RWxlbWVudD1nZC5wYXJlbnRFbGVtZW50KTtPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxFbGVtZW50LnByb3RvdHlwZSxcImNvbnRhaW5zXCIpJiYoVmQuY29udGFpbnM9Z2QuY29udGFpbnMpO09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEVsZW1lbnQucHJvdG90eXBlLFwiY2hpbGRyZW5cIikmJihWZC5jaGlsZHJlbj1qZC5jaGlsZHJlbik7T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIikmJihWZC5pbm5lckhUTUw9cGQuaW5uZXJIVE1MKTtPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxFbGVtZW50LnByb3RvdHlwZSxcImNsYXNzTmFtZVwiKSYmKFZkLmNsYXNzTmFtZT1QZC5jbGFzc05hbWUpO1xudmFyIFdkPXtFdmVudFRhcmdldDpbTGRdLE5vZGU6W2dkLHdpbmRvdy5FdmVudFRhcmdldD9udWxsOkxkXSxUZXh0OltNZF0sRWxlbWVudDpbUGQsamQsTWQsIUIuRHx8XCJpbm5lckhUTUxcImluIEVsZW1lbnQucHJvdG90eXBlP3BkOm51bGwsd2luZG93LkhUTUxTbG90RWxlbWVudD9udWxsOlJkXSxIVE1MRWxlbWVudDpbUWQsVmRdLEhUTUxTbG90RWxlbWVudDpbUmRdLERvY3VtZW50RnJhZ21lbnQ6W2xkLG1kXSxEb2N1bWVudDpbVGQsbGQsbWQsbmRdLFdpbmRvdzpbVWRdfSxYZD1CLkQ/bnVsbDpbXCJpbm5lckhUTUxcIixcInRleHRDb250ZW50XCJdO2Z1bmN0aW9uIFlkKGEpe3ZhciBiPWE/bnVsbDpYZCxjPXt9LGQ7Zm9yKGQgaW4gV2QpYy5lYT13aW5kb3dbZF0mJndpbmRvd1tkXS5wcm90b3R5cGUsV2RbZF0uZm9yRWFjaChmdW5jdGlvbihjKXtyZXR1cm4gZnVuY3Rpb24oZCl7cmV0dXJuIGMuZWEmJmQmJkQoYy5lYSxkLGEsYil9fShjKSksYz17ZWE6Yy5lYX19O2lmKEIua2Epe3ZhciBTaGFkeURPTT17aW5Vc2U6Qi5rYSxwYXRjaDpmdW5jdGlvbihhKXtpYyhhKTtoYyhhKTtyZXR1cm4gYX0saXNTaGFkeVJvb3Q6QyxlbnF1ZXVlOkFiLGZsdXNoOkJiLGZsdXNoSW5pdGlhbDpmdW5jdGlvbihhKXshYS5wYSYmYS5SJiZ5ZChhKX0sc2V0dGluZ3M6QixmaWx0ZXJNdXRhdGlvbnM6SmIsb2JzZXJ2ZUNoaWxkcmVuOkhiLHVub2JzZXJ2ZUNoaWxkcmVuOkliLGRlZmVyQ29ubmVjdGlvbkNhbGxiYWNrczpCLmRlZmVyQ29ubmVjdGlvbkNhbGxiYWNrcyxwcmVmZXJQZXJmb3JtYW5jZTpCLnByZWZlclBlcmZvcm1hbmNlLGhhbmRsZXNEeW5hbWljU2NvcGluZzohMCx3cmFwOkIuTT9LZDpmdW5jdGlvbihhKXtyZXR1cm4gYX0sV3JhcHBlcjpJZCxjb21wb3NlZFBhdGg6cmMsbm9QYXRjaDpCLk0sbmF0aXZlTWV0aG9kczpTYixuYXRpdmVUcmVlOlRifTt3aW5kb3cuU2hhZHlET009U2hhZHlET007JGIoKTtZZChcIl9fc2hhZHlfXCIpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShkb2N1bWVudCxcblwiX2FjdGl2ZUVsZW1lbnRcIixuZC5hY3RpdmVFbGVtZW50KTtEKFdpbmRvdy5wcm90b3R5cGUsVWQsXCJfX3NoYWR5X1wiKTtCLk18fChZZCgpLEhjKCkpO0NjKCk7d2luZG93LkV2ZW50PUVjO3dpbmRvdy5DdXN0b21FdmVudD1GYzt3aW5kb3cuTW91c2VFdmVudD1HYzt3aW5kb3cuU2hhZG93Um9vdD13ZH07dmFyIFpkPW5ldyBTZXQoXCJhbm5vdGF0aW9uLXhtbCBjb2xvci1wcm9maWxlIGZvbnQtZmFjZSBmb250LWZhY2Utc3JjIGZvbnQtZmFjZS11cmkgZm9udC1mYWNlLWZvcm1hdCBmb250LWZhY2UtbmFtZSBtaXNzaW5nLWdseXBoXCIuc3BsaXQoXCIgXCIpKTtmdW5jdGlvbiAkZChhKXt2YXIgYj1aZC5oYXMoYSk7YT0vXlthLXpdWy4wLTlfYS16XSotW1xcLS4wLTlfYS16XSokLy50ZXN0KGEpO3JldHVybiFiJiZhfWZ1bmN0aW9uIEsoYSl7dmFyIGI9YS5pc0Nvbm5lY3RlZDtpZih2b2lkIDAhPT1iKXJldHVybiBiO2Zvcig7YSYmIShhLl9fQ0VfaXNJbXBvcnREb2N1bWVudHx8YSBpbnN0YW5jZW9mIERvY3VtZW50KTspYT1hLnBhcmVudE5vZGV8fCh3aW5kb3cuU2hhZG93Um9vdCYmYSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q/YS5ob3N0OnZvaWQgMCk7cmV0dXJuISghYXx8IShhLl9fQ0VfaXNJbXBvcnREb2N1bWVudHx8YSBpbnN0YW5jZW9mIERvY3VtZW50KSl9XG5mdW5jdGlvbiBhZShhLGIpe2Zvcig7YiYmYiE9PWEmJiFiLm5leHRTaWJsaW5nOyliPWIucGFyZW50Tm9kZTtyZXR1cm4gYiYmYiE9PWE/Yi5uZXh0U2libGluZzpudWxsfVxuZnVuY3Rpb24gYmUoYSxiLGMpe2M9dm9pZCAwPT09Yz9uZXcgU2V0OmM7Zm9yKHZhciBkPWE7ZDspe2lmKGQubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7dmFyIGU9ZDtiKGUpO3ZhciBmPWUubG9jYWxOYW1lO2lmKFwibGlua1wiPT09ZiYmXCJpbXBvcnRcIj09PWUuZ2V0QXR0cmlidXRlKFwicmVsXCIpKXtkPWUuaW1wb3J0O2lmKGQgaW5zdGFuY2VvZiBOb2RlJiYhYy5oYXMoZCkpZm9yKGMuYWRkKGQpLGQ9ZC5maXJzdENoaWxkO2Q7ZD1kLm5leHRTaWJsaW5nKWJlKGQsYixjKTtkPWFlKGEsZSk7Y29udGludWV9ZWxzZSBpZihcInRlbXBsYXRlXCI9PT1mKXtkPWFlKGEsZSk7Y29udGludWV9aWYoZT1lLl9fQ0Vfc2hhZG93Um9vdClmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpYmUoZSxiLGMpfWQ9ZC5maXJzdENoaWxkP2QuZmlyc3RDaGlsZDphZShhLGQpfX1mdW5jdGlvbiBMKGEsYixjKXthW2JdPWN9O2Z1bmN0aW9uIGNlKCl7dGhpcy5hPW5ldyBNYXA7dGhpcy51PW5ldyBNYXA7dGhpcy5jPVtdO3RoaXMuZj1bXTt0aGlzLmI9ITF9ZnVuY3Rpb24gZGUoYSxiLGMpe2EuYS5zZXQoYixjKTthLnUuc2V0KGMuY29uc3RydWN0b3JGdW5jdGlvbixjKX1mdW5jdGlvbiBlZShhLGIpe2EuYj0hMDthLmMucHVzaChiKX1mdW5jdGlvbiBmZShhLGIpe2EuYj0hMDthLmYucHVzaChiKX1mdW5jdGlvbiBnZShhLGIpe2EuYiYmYmUoYixmdW5jdGlvbihiKXtyZXR1cm4gaGUoYSxiKX0pfWZ1bmN0aW9uIGhlKGEsYil7aWYoYS5iJiYhYi5fX0NFX3BhdGNoZWQpe2IuX19DRV9wYXRjaGVkPSEwO2Zvcih2YXIgYz0wO2M8YS5jLmxlbmd0aDtjKyspYS5jW2NdKGIpO2ZvcihjPTA7YzxhLmYubGVuZ3RoO2MrKylhLmZbY10oYil9fVxuZnVuY3Rpb24gTShhLGIpe3ZhciBjPVtdO2JlKGIsZnVuY3Rpb24oYSl7cmV0dXJuIGMucHVzaChhKX0pO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBkPWNbYl07MT09PWQuX19DRV9zdGF0ZT9hLmNvbm5lY3RlZENhbGxiYWNrKGQpOmllKGEsZCl9fWZ1bmN0aW9uIE4oYSxiKXt2YXIgYz1bXTtiZShiLGZ1bmN0aW9uKGEpe3JldHVybiBjLnB1c2goYSl9KTtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKXt2YXIgZD1jW2JdOzE9PT1kLl9fQ0Vfc3RhdGUmJmEuZGlzY29ubmVjdGVkQ2FsbGJhY2soZCl9fVxuZnVuY3Rpb24gTyhhLGIsYyl7Yz12b2lkIDA9PT1jP3t9OmM7dmFyIGQ9Yy4kYXx8bmV3IFNldCxlPWMuZmF8fGZ1bmN0aW9uKGIpe3JldHVybiBpZShhLGIpfSxmPVtdO2JlKGIsZnVuY3Rpb24oYil7aWYoXCJsaW5rXCI9PT1iLmxvY2FsTmFtZSYmXCJpbXBvcnRcIj09PWIuZ2V0QXR0cmlidXRlKFwicmVsXCIpKXt2YXIgYz1iLmltcG9ydDtjIGluc3RhbmNlb2YgTm9kZSYmKGMuX19DRV9pc0ltcG9ydERvY3VtZW50PSEwLGMuX19DRV9oYXNSZWdpc3RyeT0hMCk7YyYmXCJjb21wbGV0ZVwiPT09Yy5yZWFkeVN0YXRlP2MuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkPSEwOmIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe3ZhciBjPWIuaW1wb3J0O2lmKCFjLl9fQ0VfZG9jdW1lbnRMb2FkSGFuZGxlZCl7Yy5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQ9ITA7dmFyIGY9bmV3IFNldChkKTtmLmRlbGV0ZShjKTtPKGEsYyx7JGE6ZixmYTplfSl9fSl9ZWxzZSBmLnB1c2goYil9LGQpO1xuaWYoYS5iKWZvcihiPTA7YjxmLmxlbmd0aDtiKyspaGUoYSxmW2JdKTtmb3IoYj0wO2I8Zi5sZW5ndGg7YisrKWUoZltiXSl9XG5mdW5jdGlvbiBpZShhLGIpe2lmKHZvaWQgMD09PWIuX19DRV9zdGF0ZSl7dmFyIGM9Yi5vd25lckRvY3VtZW50O2lmKGMuZGVmYXVsdFZpZXd8fGMuX19DRV9pc0ltcG9ydERvY3VtZW50JiZjLl9fQ0VfaGFzUmVnaXN0cnkpaWYoYz1hLmEuZ2V0KGIubG9jYWxOYW1lKSl7Yy5jb25zdHJ1Y3Rpb25TdGFjay5wdXNoKGIpO3ZhciBkPWMuY29uc3RydWN0b3JGdW5jdGlvbjt0cnl7dHJ5e2lmKG5ldyBkIT09Yil0aHJvdyBFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvciBkaWQgbm90IHByb2R1Y2UgdGhlIGVsZW1lbnQgYmVpbmcgdXBncmFkZWQuXCIpO31maW5hbGx5e2MuY29uc3RydWN0aW9uU3RhY2sucG9wKCl9fWNhdGNoKGcpe3Rocm93IGIuX19DRV9zdGF0ZT0yLGc7fWIuX19DRV9zdGF0ZT0xO2IuX19DRV9kZWZpbml0aW9uPWM7aWYoYy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2spZm9yKGM9Yy5vYnNlcnZlZEF0dHJpYnV0ZXMsZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1cbmNbZF0sZj1iLmdldEF0dHJpYnV0ZShlKTtudWxsIT09ZiYmYS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYixlLG51bGwsZixudWxsKX1LKGIpJiZhLmNvbm5lY3RlZENhbGxiYWNrKGIpfX19Y2UucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPWEuX19DRV9kZWZpbml0aW9uO2IuY29ubmVjdGVkQ2FsbGJhY2smJmIuY29ubmVjdGVkQ2FsbGJhY2suY2FsbChhKX07Y2UucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPWEuX19DRV9kZWZpbml0aW9uO2IuZGlzY29ubmVjdGVkQ2FsbGJhY2smJmIuZGlzY29ubmVjdGVkQ2FsbGJhY2suY2FsbChhKX07XG5jZS5wcm90b3R5cGUuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9YS5fX0NFX2RlZmluaXRpb247Zi5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2smJi0xPGYub2JzZXJ2ZWRBdHRyaWJ1dGVzLmluZGV4T2YoYikmJmYuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrLmNhbGwoYSxiLGMsZCxlKX07ZnVuY3Rpb24gamUoYSl7dmFyIGI9ZG9jdW1lbnQ7dGhpcy5iPWE7dGhpcy5hPWI7dGhpcy5QPXZvaWQgMDtPKHRoaXMuYix0aGlzLmEpO1wibG9hZGluZ1wiPT09dGhpcy5hLnJlYWR5U3RhdGUmJih0aGlzLlA9bmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5jLmJpbmQodGhpcykpLHRoaXMuUC5vYnNlcnZlKHRoaXMuYSx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KSl9ZnVuY3Rpb24ga2UoYSl7YS5QJiZhLlAuZGlzY29ubmVjdCgpfWplLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYS5yZWFkeVN0YXRlO1wiaW50ZXJhY3RpdmVcIiE9PWImJlwiY29tcGxldGVcIiE9PWJ8fGtlKHRoaXMpO2ZvcihiPTA7YjxhLmxlbmd0aDtiKyspZm9yKHZhciBjPWFbYl0uYWRkZWROb2RlcyxkPTA7ZDxjLmxlbmd0aDtkKyspTyh0aGlzLmIsY1tkXSl9O2Z1bmN0aW9uIGxlKCl7dmFyIGE9dGhpczt0aGlzLmE9dGhpcy53PXZvaWQgMDt0aGlzLmI9bmV3IFByb21pc2UoZnVuY3Rpb24oYil7YS5hPWI7YS53JiZiKGEudyl9KX1sZS5wcm90b3R5cGUucmVzb2x2ZT1mdW5jdGlvbihhKXtpZih0aGlzLncpdGhyb3cgRXJyb3IoXCJBbHJlYWR5IHJlc29sdmVkLlwiKTt0aGlzLnc9YTt0aGlzLmEmJnRoaXMuYShhKX07ZnVuY3Rpb24gUChhKXt0aGlzLmM9ITE7dGhpcy5hPWE7dGhpcy5GPW5ldyBNYXA7dGhpcy5mPWZ1bmN0aW9uKGEpe3JldHVybiBhKCl9O3RoaXMuYj0hMTt0aGlzLnU9W107dGhpcy5hYT1uZXcgamUoYSl9cj1QLnByb3RvdHlwZTtcbnIud2E9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO2lmKCEoYiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3JzIG11c3QgYmUgZnVuY3Rpb25zLlwiKTtpZighJGQoYSkpdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVGhlIGVsZW1lbnQgbmFtZSAnXCIrYStcIicgaXMgbm90IHZhbGlkLlwiKTtpZih0aGlzLmEuYS5nZXQoYSkpdGhyb3cgRXJyb3IoXCJBIGN1c3RvbSBlbGVtZW50IHdpdGggbmFtZSAnXCIrYStcIicgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkLlwiKTtpZih0aGlzLmMpdGhyb3cgRXJyb3IoXCJBIGN1c3RvbSBlbGVtZW50IGlzIGFscmVhZHkgYmVpbmcgZGVmaW5lZC5cIik7dGhpcy5jPSEwO3RyeXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgYj1lW2FdO2lmKHZvaWQgMCE9PWImJiEoYiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSl0aHJvdyBFcnJvcihcIlRoZSAnXCIrYStcIicgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uLlwiKTtcbnJldHVybiBifSxlPWIucHJvdG90eXBlO2lmKCEoZSBpbnN0YW5jZW9mIE9iamVjdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcidzIHByb3RvdHlwZSBpcyBub3QgYW4gb2JqZWN0LlwiKTt2YXIgZj1kKFwiY29ubmVjdGVkQ2FsbGJhY2tcIik7dmFyIGc9ZChcImRpc2Nvbm5lY3RlZENhbGxiYWNrXCIpO3ZhciBoPWQoXCJhZG9wdGVkQ2FsbGJhY2tcIik7dmFyIGs9ZChcImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1wiKTt2YXIgbD1iLm9ic2VydmVkQXR0cmlidXRlc3x8W119Y2F0Y2gobil7cmV0dXJufWZpbmFsbHl7dGhpcy5jPSExfWI9e2xvY2FsTmFtZTphLGNvbnN0cnVjdG9yRnVuY3Rpb246Yixjb25uZWN0ZWRDYWxsYmFjazpmLGRpc2Nvbm5lY3RlZENhbGxiYWNrOmcsYWRvcHRlZENhbGxiYWNrOmgsYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrOmssb2JzZXJ2ZWRBdHRyaWJ1dGVzOmwsY29uc3RydWN0aW9uU3RhY2s6W119O2RlKHRoaXMuYSxcbmEsYik7dGhpcy51LnB1c2goYik7dGhpcy5ifHwodGhpcy5iPSEwLHRoaXMuZihmdW5jdGlvbigpe3JldHVybiBtZShjKX0pKX07ci5mYT1mdW5jdGlvbihhKXtPKHRoaXMuYSxhKX07XG5mdW5jdGlvbiBtZShhKXtpZighMSE9PWEuYil7YS5iPSExO2Zvcih2YXIgYj1hLnUsYz1bXSxkPW5ldyBNYXAsZT0wO2U8Yi5sZW5ndGg7ZSsrKWQuc2V0KGJbZV0ubG9jYWxOYW1lLFtdKTtPKGEuYSxkb2N1bWVudCx7ZmE6ZnVuY3Rpb24oYil7aWYodm9pZCAwPT09Yi5fX0NFX3N0YXRlKXt2YXIgZT1iLmxvY2FsTmFtZSxmPWQuZ2V0KGUpO2Y/Zi5wdXNoKGIpOmEuYS5hLmdldChlKSYmYy5wdXNoKGIpfX19KTtmb3IoZT0wO2U8Yy5sZW5ndGg7ZSsrKWllKGEuYSxjW2VdKTtmb3IoOzA8Yi5sZW5ndGg7KXt2YXIgZj1iLnNoaWZ0KCk7ZT1mLmxvY2FsTmFtZTtmPWQuZ2V0KGYubG9jYWxOYW1lKTtmb3IodmFyIGc9MDtnPGYubGVuZ3RoO2crKylpZShhLmEsZltnXSk7KGU9YS5GLmdldChlKSkmJmUucmVzb2x2ZSh2b2lkIDApfX19ci5nZXQ9ZnVuY3Rpb24oYSl7aWYoYT10aGlzLmEuYS5nZXQoYSkpcmV0dXJuIGEuY29uc3RydWN0b3JGdW5jdGlvbn07XG5yLnhhPWZ1bmN0aW9uKGEpe2lmKCEkZChhKSlyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFN5bnRheEVycm9yKFwiJ1wiK2ErXCInIGlzIG5vdCBhIHZhbGlkIGN1c3RvbSBlbGVtZW50IG5hbWUuXCIpKTt2YXIgYj10aGlzLkYuZ2V0KGEpO2lmKGIpcmV0dXJuIGIuYjtiPW5ldyBsZTt0aGlzLkYuc2V0KGEsYik7dGhpcy5hLmEuZ2V0KGEpJiYhdGhpcy51LnNvbWUoZnVuY3Rpb24oYil7cmV0dXJuIGIubG9jYWxOYW1lPT09YX0pJiZiLnJlc29sdmUodm9pZCAwKTtyZXR1cm4gYi5ifTtyLlJhPWZ1bmN0aW9uKGEpe2tlKHRoaXMuYWEpO3ZhciBiPXRoaXMuZjt0aGlzLmY9ZnVuY3Rpb24oYyl7cmV0dXJuIGEoZnVuY3Rpb24oKXtyZXR1cm4gYihjKX0pfX07d2luZG93LkN1c3RvbUVsZW1lbnRSZWdpc3RyeT1QO1AucHJvdG90eXBlLmRlZmluZT1QLnByb3RvdHlwZS53YTtQLnByb3RvdHlwZS51cGdyYWRlPVAucHJvdG90eXBlLmZhO1AucHJvdG90eXBlLmdldD1QLnByb3RvdHlwZS5nZXQ7XG5QLnByb3RvdHlwZS53aGVuRGVmaW5lZD1QLnByb3RvdHlwZS54YTtQLnByb3RvdHlwZS5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrPVAucHJvdG90eXBlLlJhO3ZhciBuZT13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQsb2U9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50TlMscGU9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5pbXBvcnROb2RlLHFlPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUucHJlcGVuZCxyZT13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmFwcGVuZCxzZT13aW5kb3cuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUucHJlcGVuZCx0ZT13aW5kb3cuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUuYXBwZW5kLHVlPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5jbG9uZU5vZGUsdmU9d2luZG93Lk5vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkLHdlPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5pbnNlcnRCZWZvcmUseGU9d2luZG93Lk5vZGUucHJvdG90eXBlLnJlbW92ZUNoaWxkLHllPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5yZXBsYWNlQ2hpbGQsemU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuTm9kZS5wcm90b3R5cGUsXG5cInRleHRDb250ZW50XCIpLEFlPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3csQmU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIiksQ2U9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZSxEZT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlLEVlPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGUsRmU9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEF0dHJpYnV0ZU5TLEdlPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVOUyxIZT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlTlMsSWU9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmluc2VydEFkamFjZW50RWxlbWVudCxKZT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRIVE1MLEtlPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5wcmVwZW5kLFxuTGU9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFwcGVuZCxNZT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYmVmb3JlLE5lPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZnRlcixPZT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVwbGFjZVdpdGgsUGU9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSxRZT13aW5kb3cuSFRNTEVsZW1lbnQsUmU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIpLFNlPXdpbmRvdy5IVE1MRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50LFRlPXdpbmRvdy5IVE1MRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRIVE1MO3ZhciBVZT1uZXcgZnVuY3Rpb24oKXt9O2Z1bmN0aW9uIFZlKCl7dmFyIGE9V2U7d2luZG93LkhUTUxFbGVtZW50PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYigpe3ZhciBiPXRoaXMuY29uc3RydWN0b3IsZD1hLnUuZ2V0KGIpO2lmKCFkKXRocm93IEVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGJlaW5nIGNvbnN0cnVjdGVkIHdhcyBub3QgcmVnaXN0ZXJlZCB3aXRoIGBjdXN0b21FbGVtZW50c2AuXCIpO3ZhciBlPWQuY29uc3RydWN0aW9uU3RhY2s7aWYoMD09PWUubGVuZ3RoKXJldHVybiBlPW5lLmNhbGwoZG9jdW1lbnQsZC5sb2NhbE5hbWUpLE9iamVjdC5zZXRQcm90b3R5cGVPZihlLGIucHJvdG90eXBlKSxlLl9fQ0Vfc3RhdGU9MSxlLl9fQ0VfZGVmaW5pdGlvbj1kLGhlKGEsZSksZTtkPWUubGVuZ3RoLTE7dmFyIGY9ZVtkXTtpZihmPT09VWUpdGhyb3cgRXJyb3IoXCJUaGUgSFRNTEVsZW1lbnQgY29uc3RydWN0b3Igd2FzIGVpdGhlciBjYWxsZWQgcmVlbnRyYW50bHkgZm9yIHRoaXMgY29uc3RydWN0b3Igb3IgY2FsbGVkIG11bHRpcGxlIHRpbWVzLlwiKTtcbmVbZF09VWU7T2JqZWN0LnNldFByb3RvdHlwZU9mKGYsYi5wcm90b3R5cGUpO2hlKGEsZik7cmV0dXJuIGZ9Yi5wcm90b3R5cGU9UWUucHJvdG90eXBlO09iamVjdC5kZWZpbmVQcm9wZXJ0eShiLnByb3RvdHlwZSxcImNvbnN0cnVjdG9yXCIse3dyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiExLHZhbHVlOmJ9KTtyZXR1cm4gYn0oKX07ZnVuY3Rpb24gWGUoYSxiLGMpe2Z1bmN0aW9uIGQoYil7cmV0dXJuIGZ1bmN0aW9uKGMpe2Zvcih2YXIgZD1bXSxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoOysrZSlkW2VdPWFyZ3VtZW50c1tlXTtlPVtdO2Zvcih2YXIgZj1bXSxsPTA7bDxkLmxlbmd0aDtsKyspe3ZhciBuPWRbbF07biBpbnN0YW5jZW9mIEVsZW1lbnQmJksobikmJmYucHVzaChuKTtpZihuIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClmb3Iobj1uLmZpcnN0Q2hpbGQ7bjtuPW4ubmV4dFNpYmxpbmcpZS5wdXNoKG4pO2Vsc2UgZS5wdXNoKG4pfWIuYXBwbHkodGhpcyxkKTtmb3IoZD0wO2Q8Zi5sZW5ndGg7ZCsrKU4oYSxmW2RdKTtpZihLKHRoaXMpKWZvcihkPTA7ZDxlLmxlbmd0aDtkKyspZj1lW2RdLGYgaW5zdGFuY2VvZiBFbGVtZW50JiZNKGEsZil9fXZvaWQgMCE9PWMuZGEmJihiLnByZXBlbmQ9ZChjLmRhKSk7dm9pZCAwIT09Yy5hcHBlbmQmJihiLmFwcGVuZD1kKGMuYXBwZW5kKSl9O2Z1bmN0aW9uIFllKCl7dmFyIGE9V2U7TChEb2N1bWVudC5wcm90b3R5cGUsXCJjcmVhdGVFbGVtZW50XCIsZnVuY3Rpb24oYil7aWYodGhpcy5fX0NFX2hhc1JlZ2lzdHJ5KXt2YXIgYz1hLmEuZ2V0KGIpO2lmKGMpcmV0dXJuIG5ldyBjLmNvbnN0cnVjdG9yRnVuY3Rpb259Yj1uZS5jYWxsKHRoaXMsYik7aGUoYSxiKTtyZXR1cm4gYn0pO0woRG9jdW1lbnQucHJvdG90eXBlLFwiaW1wb3J0Tm9kZVwiLGZ1bmN0aW9uKGIsYyl7Yj1wZS5jYWxsKHRoaXMsYiwhIWMpO3RoaXMuX19DRV9oYXNSZWdpc3RyeT9PKGEsYik6Z2UoYSxiKTtyZXR1cm4gYn0pO0woRG9jdW1lbnQucHJvdG90eXBlLFwiY3JlYXRlRWxlbWVudE5TXCIsZnVuY3Rpb24oYixjKXtpZih0aGlzLl9fQ0VfaGFzUmVnaXN0cnkmJihudWxsPT09Ynx8XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI9PT1iKSl7dmFyIGQ9YS5hLmdldChjKTtpZihkKXJldHVybiBuZXcgZC5jb25zdHJ1Y3RvckZ1bmN0aW9ufWI9b2UuY2FsbCh0aGlzLFxuYixjKTtoZShhLGIpO3JldHVybiBifSk7WGUoYSxEb2N1bWVudC5wcm90b3R5cGUse2RhOnFlLGFwcGVuZDpyZX0pfTtmdW5jdGlvbiBaZSgpe2Z1bmN0aW9uIGEoYSxkKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcInRleHRDb250ZW50XCIse2VudW1lcmFibGU6ZC5lbnVtZXJhYmxlLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZC5nZXQsc2V0OmZ1bmN0aW9uKGEpe2lmKHRoaXMubm9kZVR5cGU9PT1Ob2RlLlRFWFRfTk9ERSlkLnNldC5jYWxsKHRoaXMsYSk7ZWxzZXt2YXIgYz12b2lkIDA7aWYodGhpcy5maXJzdENoaWxkKXt2YXIgZT10aGlzLmNoaWxkTm9kZXMsaD1lLmxlbmd0aDtpZigwPGgmJksodGhpcykpe2M9QXJyYXkoaCk7Zm9yKHZhciBrPTA7azxoO2srKyljW2tdPWVba119fWQuc2V0LmNhbGwodGhpcyxhKTtpZihjKWZvcihhPTA7YTxjLmxlbmd0aDthKyspTihiLGNbYV0pfX19KX12YXIgYj1XZTtMKE5vZGUucHJvdG90eXBlLFwiaW5zZXJ0QmVmb3JlXCIsZnVuY3Rpb24oYSxkKXtpZihhIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGEuY2hpbGROb2Rlcyk7XG5hPXdlLmNhbGwodGhpcyxhLGQpO2lmKEsodGhpcykpZm9yKGQ9MDtkPGMubGVuZ3RoO2QrKylNKGIsY1tkXSk7cmV0dXJuIGF9Yz1LKGEpO2Q9d2UuY2FsbCh0aGlzLGEsZCk7YyYmTihiLGEpO0sodGhpcykmJk0oYixhKTtyZXR1cm4gZH0pO0woTm9kZS5wcm90b3R5cGUsXCJhcHBlbmRDaGlsZFwiLGZ1bmN0aW9uKGEpe2lmKGEgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYS5jaGlsZE5vZGVzKTthPXZlLmNhbGwodGhpcyxhKTtpZihLKHRoaXMpKWZvcih2YXIgZT0wO2U8Yy5sZW5ndGg7ZSsrKU0oYixjW2VdKTtyZXR1cm4gYX1jPUsoYSk7ZT12ZS5jYWxsKHRoaXMsYSk7YyYmTihiLGEpO0sodGhpcykmJk0oYixhKTtyZXR1cm4gZX0pO0woTm9kZS5wcm90b3R5cGUsXCJjbG9uZU5vZGVcIixmdW5jdGlvbihhKXthPXVlLmNhbGwodGhpcywhIWEpO3RoaXMub3duZXJEb2N1bWVudC5fX0NFX2hhc1JlZ2lzdHJ5P08oYixhKTpcbmdlKGIsYSk7cmV0dXJuIGF9KTtMKE5vZGUucHJvdG90eXBlLFwicmVtb3ZlQ2hpbGRcIixmdW5jdGlvbihhKXt2YXIgYz1LKGEpLGU9eGUuY2FsbCh0aGlzLGEpO2MmJk4oYixhKTtyZXR1cm4gZX0pO0woTm9kZS5wcm90b3R5cGUsXCJyZXBsYWNlQ2hpbGRcIixmdW5jdGlvbihhLGQpe2lmKGEgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYS5jaGlsZE5vZGVzKTthPXllLmNhbGwodGhpcyxhLGQpO2lmKEsodGhpcykpZm9yKE4oYixkKSxkPTA7ZDxjLmxlbmd0aDtkKyspTShiLGNbZF0pO3JldHVybiBhfWM9SyhhKTt2YXIgZj15ZS5jYWxsKHRoaXMsYSxkKSxnPUsodGhpcyk7ZyYmTihiLGQpO2MmJk4oYixhKTtnJiZNKGIsYSk7cmV0dXJuIGZ9KTt6ZSYmemUuZ2V0P2EoTm9kZS5wcm90b3R5cGUsemUpOmVlKGIsZnVuY3Rpb24oYil7YShiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtmb3IodmFyIGE9XG5bXSxiPTA7Yjx0aGlzLmNoaWxkTm9kZXMubGVuZ3RoO2IrKyl7dmFyIGM9dGhpcy5jaGlsZE5vZGVzW2JdO2Mubm9kZVR5cGUhPT1Ob2RlLkNPTU1FTlRfTk9ERSYmYS5wdXNoKGMudGV4dENvbnRlbnQpfXJldHVybiBhLmpvaW4oXCJcIil9LHNldDpmdW5jdGlvbihhKXtmb3IoO3RoaXMuZmlyc3RDaGlsZDspeGUuY2FsbCh0aGlzLHRoaXMuZmlyc3RDaGlsZCk7bnVsbCE9YSYmXCJcIiE9PWEmJnZlLmNhbGwodGhpcyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSl9fSl9KX07ZnVuY3Rpb24gJGUoYSl7ZnVuY3Rpb24gYihiKXtyZXR1cm4gZnVuY3Rpb24oYyl7Zm9yKHZhciBkPVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7KytlKWRbZV09YXJndW1lbnRzW2VdO2U9W107Zm9yKHZhciBoPVtdLGs9MDtrPGQubGVuZ3RoO2srKyl7dmFyIGw9ZFtrXTtsIGluc3RhbmNlb2YgRWxlbWVudCYmSyhsKSYmaC5wdXNoKGwpO2lmKGwgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KWZvcihsPWwuZmlyc3RDaGlsZDtsO2w9bC5uZXh0U2libGluZyllLnB1c2gobCk7ZWxzZSBlLnB1c2gobCl9Yi5hcHBseSh0aGlzLGQpO2ZvcihkPTA7ZDxoLmxlbmd0aDtkKyspTihhLGhbZF0pO2lmKEsodGhpcykpZm9yKGQ9MDtkPGUubGVuZ3RoO2QrKyloPWVbZF0saCBpbnN0YW5jZW9mIEVsZW1lbnQmJk0oYSxoKX19dmFyIGM9RWxlbWVudC5wcm90b3R5cGU7dm9pZCAwIT09TWUmJihjLmJlZm9yZT1iKE1lKSk7dm9pZCAwIT09TWUmJihjLmFmdGVyPWIoTmUpKTt2b2lkIDAhPT1PZSYmXG5MKGMsXCJyZXBsYWNlV2l0aFwiLGZ1bmN0aW9uKGIpe2Zvcih2YXIgYz1bXSxkPTA7ZDxhcmd1bWVudHMubGVuZ3RoOysrZCljW2RdPWFyZ3VtZW50c1tkXTtkPVtdO2Zvcih2YXIgZz1bXSxoPTA7aDxjLmxlbmd0aDtoKyspe3ZhciBrPWNbaF07ayBpbnN0YW5jZW9mIEVsZW1lbnQmJksoaykmJmcucHVzaChrKTtpZihrIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClmb3Ioaz1rLmZpcnN0Q2hpbGQ7aztrPWsubmV4dFNpYmxpbmcpZC5wdXNoKGspO2Vsc2UgZC5wdXNoKGspfWg9Syh0aGlzKTtPZS5hcHBseSh0aGlzLGMpO2ZvcihjPTA7YzxnLmxlbmd0aDtjKyspTihhLGdbY10pO2lmKGgpZm9yKE4oYSx0aGlzKSxjPTA7YzxkLmxlbmd0aDtjKyspZz1kW2NdLGcgaW5zdGFuY2VvZiBFbGVtZW50JiZNKGEsZyl9KTt2b2lkIDAhPT1QZSYmTChjLFwicmVtb3ZlXCIsZnVuY3Rpb24oKXt2YXIgYj1LKHRoaXMpO1BlLmNhbGwodGhpcyk7YiYmTihhLHRoaXMpfSl9O2Z1bmN0aW9uIGFmKCl7ZnVuY3Rpb24gYShhLGIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwiaW5uZXJIVE1MXCIse2VudW1lcmFibGU6Yi5lbnVtZXJhYmxlLGNvbmZpZ3VyYWJsZTohMCxnZXQ6Yi5nZXQsc2V0OmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMsZT12b2lkIDA7Syh0aGlzKSYmKGU9W10sYmUodGhpcyxmdW5jdGlvbihhKXthIT09YyYmZS5wdXNoKGEpfSkpO2Iuc2V0LmNhbGwodGhpcyxhKTtpZihlKWZvcih2YXIgZj0wO2Y8ZS5sZW5ndGg7ZisrKXt2YXIgZz1lW2ZdOzE9PT1nLl9fQ0Vfc3RhdGUmJmQuZGlzY29ubmVjdGVkQ2FsbGJhY2soZyl9dGhpcy5vd25lckRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnk/TyhkLHRoaXMpOmdlKGQsdGhpcyk7cmV0dXJuIGF9fSl9ZnVuY3Rpb24gYihhLGIpe0woYSxcImluc2VydEFkamFjZW50RWxlbWVudFwiLGZ1bmN0aW9uKGEsYyl7dmFyIGU9SyhjKTthPWIuY2FsbCh0aGlzLGEsYyk7ZSYmTihkLGMpO0soYSkmJk0oZCxjKTtyZXR1cm4gYX0pfVxuZnVuY3Rpb24gYyhhLGIpe2Z1bmN0aW9uIGMoYSxiKXtmb3IodmFyIGM9W107YSE9PWI7YT1hLm5leHRTaWJsaW5nKWMucHVzaChhKTtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKU8oZCxjW2JdKX1MKGEsXCJpbnNlcnRBZGphY2VudEhUTUxcIixmdW5jdGlvbihhLGQpe2E9YS50b0xvd2VyQ2FzZSgpO2lmKFwiYmVmb3JlYmVnaW5cIj09PWEpe3ZhciBlPXRoaXMucHJldmlvdXNTaWJsaW5nO2IuY2FsbCh0aGlzLGEsZCk7YyhlfHx0aGlzLnBhcmVudE5vZGUuZmlyc3RDaGlsZCx0aGlzKX1lbHNlIGlmKFwiYWZ0ZXJiZWdpblwiPT09YSllPXRoaXMuZmlyc3RDaGlsZCxiLmNhbGwodGhpcyxhLGQpLGModGhpcy5maXJzdENoaWxkLGUpO2Vsc2UgaWYoXCJiZWZvcmVlbmRcIj09PWEpZT10aGlzLmxhc3RDaGlsZCxiLmNhbGwodGhpcyxhLGQpLGMoZXx8dGhpcy5maXJzdENoaWxkLG51bGwpO2Vsc2UgaWYoXCJhZnRlcmVuZFwiPT09YSllPXRoaXMubmV4dFNpYmxpbmcsYi5jYWxsKHRoaXMsYSxkKSxjKHRoaXMubmV4dFNpYmxpbmcsXG5lKTtlbHNlIHRocm93IG5ldyBTeW50YXhFcnJvcihcIlRoZSB2YWx1ZSBwcm92aWRlZCAoXCIrU3RyaW5nKGEpK1wiKSBpcyBub3Qgb25lIG9mICdiZWZvcmViZWdpbicsICdhZnRlcmJlZ2luJywgJ2JlZm9yZWVuZCcsIG9yICdhZnRlcmVuZCcuXCIpO30pfXZhciBkPVdlO0FlJiZMKEVsZW1lbnQucHJvdG90eXBlLFwiYXR0YWNoU2hhZG93XCIsZnVuY3Rpb24oYSl7YT1BZS5jYWxsKHRoaXMsYSk7dmFyIGI9ZDtpZihiLmImJiFhLl9fQ0VfcGF0Y2hlZCl7YS5fX0NFX3BhdGNoZWQ9ITA7Zm9yKHZhciBjPTA7YzxiLmMubGVuZ3RoO2MrKyliLmNbY10oYSl9cmV0dXJuIHRoaXMuX19DRV9zaGFkb3dSb290PWF9KTtCZSYmQmUuZ2V0P2EoRWxlbWVudC5wcm90b3R5cGUsQmUpOlJlJiZSZS5nZXQ/YShIVE1MRWxlbWVudC5wcm90b3R5cGUsUmUpOmZlKGQsZnVuY3Rpb24oYil7YShiLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdWUuY2FsbCh0aGlzLFxuITApLmlubmVySFRNTH0sc2V0OmZ1bmN0aW9uKGEpe3ZhciBiPVwidGVtcGxhdGVcIj09PXRoaXMubG9jYWxOYW1lLGM9Yj90aGlzLmNvbnRlbnQ6dGhpcyxkPW9lLmNhbGwoZG9jdW1lbnQsdGhpcy5uYW1lc3BhY2VVUkksdGhpcy5sb2NhbE5hbWUpO2ZvcihkLmlubmVySFRNTD1hOzA8Yy5jaGlsZE5vZGVzLmxlbmd0aDspeGUuY2FsbChjLGMuY2hpbGROb2Rlc1swXSk7Zm9yKGE9Yj9kLmNvbnRlbnQ6ZDswPGEuY2hpbGROb2Rlcy5sZW5ndGg7KXZlLmNhbGwoYyxhLmNoaWxkTm9kZXNbMF0pfX0pfSk7TChFbGVtZW50LnByb3RvdHlwZSxcInNldEF0dHJpYnV0ZVwiLGZ1bmN0aW9uKGEsYil7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4gRGUuY2FsbCh0aGlzLGEsYik7dmFyIGM9Q2UuY2FsbCh0aGlzLGEpO0RlLmNhbGwodGhpcyxhLGIpO2I9Q2UuY2FsbCh0aGlzLGEpO2QuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYSxjLGIsbnVsbCl9KTtMKEVsZW1lbnQucHJvdG90eXBlLFxuXCJzZXRBdHRyaWJ1dGVOU1wiLGZ1bmN0aW9uKGEsYixjKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBHZS5jYWxsKHRoaXMsYSxiLGMpO3ZhciBlPUZlLmNhbGwodGhpcyxhLGIpO0dlLmNhbGwodGhpcyxhLGIsYyk7Yz1GZS5jYWxsKHRoaXMsYSxiKTtkLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGIsZSxjLGEpfSk7TChFbGVtZW50LnByb3RvdHlwZSxcInJlbW92ZUF0dHJpYnV0ZVwiLGZ1bmN0aW9uKGEpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIEVlLmNhbGwodGhpcyxhKTt2YXIgYj1DZS5jYWxsKHRoaXMsYSk7RWUuY2FsbCh0aGlzLGEpO251bGwhPT1iJiZkLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGEsYixudWxsLG51bGwpfSk7TChFbGVtZW50LnByb3RvdHlwZSxcInJlbW92ZUF0dHJpYnV0ZU5TXCIsZnVuY3Rpb24oYSxiKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBIZS5jYWxsKHRoaXMsYSxiKTt2YXIgYz1GZS5jYWxsKHRoaXMsXG5hLGIpO0hlLmNhbGwodGhpcyxhLGIpO3ZhciBlPUZlLmNhbGwodGhpcyxhLGIpO2MhPT1lJiZkLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGIsYyxlLGEpfSk7U2U/YihIVE1MRWxlbWVudC5wcm90b3R5cGUsU2UpOkllP2IoRWxlbWVudC5wcm90b3R5cGUsSWUpOmNvbnNvbGUud2FybihcIkN1c3RvbSBFbGVtZW50czogYEVsZW1lbnQjaW5zZXJ0QWRqYWNlbnRFbGVtZW50YCB3YXMgbm90IHBhdGNoZWQuXCIpO1RlP2MoSFRNTEVsZW1lbnQucHJvdG90eXBlLFRlKTpKZT9jKEVsZW1lbnQucHJvdG90eXBlLEplKTpjb25zb2xlLndhcm4oXCJDdXN0b20gRWxlbWVudHM6IGBFbGVtZW50I2luc2VydEFkamFjZW50SFRNTGAgd2FzIG5vdCBwYXRjaGVkLlwiKTtYZShkLEVsZW1lbnQucHJvdG90eXBlLHtkYTpLZSxhcHBlbmQ6TGV9KTskZShkKX07dmFyIGJmPXdpbmRvdy5jdXN0b21FbGVtZW50cztpZighYmZ8fGJmLmZvcmNlUG9seWZpbGx8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIGJmLmRlZmluZXx8XCJmdW5jdGlvblwiIT10eXBlb2YgYmYuZ2V0KXt2YXIgV2U9bmV3IGNlO1ZlKCk7WWUoKTtYZShXZSxEb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSx7ZGE6c2UsYXBwZW5kOnRlfSk7WmUoKTthZigpO2RvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnk9ITA7dmFyIGN1c3RvbUVsZW1lbnRzPW5ldyBQKFdlKTtPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LFwiY3VzdG9tRWxlbWVudHNcIix7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsdmFsdWU6Y3VzdG9tRWxlbWVudHN9KX07ZnVuY3Rpb24gY2YoKXt0aGlzLmVuZD10aGlzLnN0YXJ0PTA7dGhpcy5ydWxlcz10aGlzLnBhcmVudD10aGlzLnByZXZpb3VzPW51bGw7dGhpcy5jc3NUZXh0PXRoaXMucGFyc2VkQ3NzVGV4dD1cIlwiO3RoaXMuYXRSdWxlPSExO3RoaXMudHlwZT0wO3RoaXMucGFyc2VkU2VsZWN0b3I9dGhpcy5zZWxlY3Rvcj10aGlzLmtleWZyYW1lc05hbWU9XCJcIn1cbmZ1bmN0aW9uIGRmKGEpe2E9YS5yZXBsYWNlKGVmLFwiXCIpLnJlcGxhY2UoZmYsXCJcIik7dmFyIGI9Z2YsYz1hLGQ9bmV3IGNmO2Quc3RhcnQ9MDtkLmVuZD1jLmxlbmd0aDtmb3IodmFyIGU9ZCxmPTAsZz1jLmxlbmd0aDtmPGc7ZisrKWlmKFwie1wiPT09Y1tmXSl7ZS5ydWxlc3x8KGUucnVsZXM9W10pO3ZhciBoPWUsaz1oLnJ1bGVzW2gucnVsZXMubGVuZ3RoLTFdfHxudWxsO2U9bmV3IGNmO2Uuc3RhcnQ9ZisxO2UucGFyZW50PWg7ZS5wcmV2aW91cz1rO2gucnVsZXMucHVzaChlKX1lbHNlXCJ9XCI9PT1jW2ZdJiYoZS5lbmQ9ZisxLGU9ZS5wYXJlbnR8fGQpO3JldHVybiBiKGQsYSl9XG5mdW5jdGlvbiBnZihhLGIpe3ZhciBjPWIuc3Vic3RyaW5nKGEuc3RhcnQsYS5lbmQtMSk7YS5wYXJzZWRDc3NUZXh0PWEuY3NzVGV4dD1jLnRyaW0oKTthLnBhcmVudCYmKGM9Yi5zdWJzdHJpbmcoYS5wcmV2aW91cz9hLnByZXZpb3VzLmVuZDphLnBhcmVudC5zdGFydCxhLnN0YXJ0LTEpLGM9aGYoYyksYz1jLnJlcGxhY2UoamYsXCIgXCIpLGM9Yy5zdWJzdHJpbmcoYy5sYXN0SW5kZXhPZihcIjtcIikrMSksYz1hLnBhcnNlZFNlbGVjdG9yPWEuc2VsZWN0b3I9Yy50cmltKCksYS5hdFJ1bGU9MD09PWMuaW5kZXhPZihcIkBcIiksYS5hdFJ1bGU/MD09PWMuaW5kZXhPZihcIkBtZWRpYVwiKT9hLnR5cGU9a2Y6Yy5tYXRjaChsZikmJihhLnR5cGU9bWYsYS5rZXlmcmFtZXNOYW1lPWEuc2VsZWN0b3Iuc3BsaXQoamYpLnBvcCgpKTphLnR5cGU9MD09PWMuaW5kZXhPZihcIi0tXCIpP25mOm9mKTtpZihjPWEucnVsZXMpZm9yKHZhciBkPTAsZT1jLmxlbmd0aCxmPXZvaWQgMDtkPGUmJihmPWNbZF0pO2QrKylnZihmLFxuYik7cmV0dXJuIGF9ZnVuY3Rpb24gaGYoYSl7cmV0dXJuIGEucmVwbGFjZSgvXFxcXChbMC05YS1mXXsxLDZ9KVxccy9naSxmdW5jdGlvbihhLGMpe2E9Yztmb3IoYz02LWEubGVuZ3RoO2MtLTspYT1cIjBcIithO3JldHVyblwiXFxcXFwiK2F9KX1cbmZ1bmN0aW9uIHBmKGEsYixjKXtjPXZvaWQgMD09PWM/XCJcIjpjO3ZhciBkPVwiXCI7aWYoYS5jc3NUZXh0fHxhLnJ1bGVzKXt2YXIgZT1hLnJ1bGVzLGY7aWYoZj1lKWY9ZVswXSxmPSEoZiYmZi5zZWxlY3RvciYmMD09PWYuc2VsZWN0b3IuaW5kZXhPZihcIi0tXCIpKTtpZihmKXtmPTA7Zm9yKHZhciBnPWUubGVuZ3RoLGg9dm9pZCAwO2Y8ZyYmKGg9ZVtmXSk7ZisrKWQ9cGYoaCxiLGQpfWVsc2UgYj9iPWEuY3NzVGV4dDooYj1hLmNzc1RleHQsYj1iLnJlcGxhY2UocWYsXCJcIikucmVwbGFjZShyZixcIlwiKSxiPWIucmVwbGFjZSh1ZixcIlwiKS5yZXBsYWNlKHZmLFwiXCIpKSwoZD1iLnRyaW0oKSkmJihkPVwiICBcIitkK1wiXFxuXCIpfWQmJihhLnNlbGVjdG9yJiYoYys9YS5zZWxlY3RvcitcIiB7XFxuXCIpLGMrPWQsYS5zZWxlY3RvciYmKGMrPVwifVxcblxcblwiKSk7cmV0dXJuIGN9XG52YXIgb2Y9MSxtZj03LGtmPTQsbmY9MUUzLGVmPS9cXC9cXCpbXipdKlxcKisoW14vKl1bXipdKlxcKispKlxcLy9naW0sZmY9L0BpbXBvcnRbXjtdKjsvZ2ltLHFmPS8oPzpeW147XFwtXFxzfV0rKT8tLVteO3t9XSo/Oltee307XSo/KD86WztcXG5dfCQpL2dpbSxyZj0vKD86XlteO1xcLVxcc31dKyk/LS1bXjt7fV0qPzpbXnt9O10qP3tbXn1dKj99KD86WztcXG5dfCQpPy9naW0sdWY9L0BhcHBseVxccypcXCg/W14pO10qXFwpP1xccyooPzpbO1xcbl18JCk/L2dpbSx2Zj0vW147Ol0qPzpbXjtdKj92YXJcXChbXjtdKlxcKSg/Ols7XFxuXXwkKT8vZ2ltLGxmPS9eQFteXFxzXSprZXlmcmFtZXMvLGpmPS9cXHMrL2c7dmFyIFI9ISh3aW5kb3cuU2hhZHlET00mJndpbmRvdy5TaGFkeURPTS5pblVzZSksd2Y7ZnVuY3Rpb24geGYoYSl7d2Y9YSYmYS5zaGltY3NzcHJvcGVydGllcz8hMTpSfHwhKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FwcGxlV2ViS2l0XFwvNjAxfEVkZ2VcXC8xNS8pfHwhd2luZG93LkNTU3x8IUNTUy5zdXBwb3J0c3x8IUNTUy5zdXBwb3J0cyhcImJveC1zaGFkb3dcIixcIjAgMCAwIHZhcigtLWZvbylcIikpfXZhciB5Zjt3aW5kb3cuU2hhZHlDU1MmJnZvaWQgMCE9PXdpbmRvdy5TaGFkeUNTUy5jc3NCdWlsZCYmKHlmPXdpbmRvdy5TaGFkeUNTUy5jc3NCdWlsZCk7dmFyIHpmPSEoIXdpbmRvdy5TaGFkeUNTU3x8IXdpbmRvdy5TaGFkeUNTUy5kaXNhYmxlUnVudGltZSk7XG53aW5kb3cuU2hhZHlDU1MmJnZvaWQgMCE9PXdpbmRvdy5TaGFkeUNTUy5uYXRpdmVDc3M/d2Y9d2luZG93LlNoYWR5Q1NTLm5hdGl2ZUNzczp3aW5kb3cuU2hhZHlDU1M/KHhmKHdpbmRvdy5TaGFkeUNTUyksd2luZG93LlNoYWR5Q1NTPXZvaWQgMCk6eGYod2luZG93LldlYkNvbXBvbmVudHMmJndpbmRvdy5XZWJDb21wb25lbnRzLmZsYWdzKTt2YXIgUz13ZixBZj15Zjt2YXIgQmY9Lyg/Ol58WztcXHN7XVxccyopKC0tW1xcdy1dKj8pXFxzKjpcXHMqKD86KCg/OicoPzpcXFxcJ3wuKSo/J3xcIig/OlxcXFxcInwuKSo/XCJ8XFwoW14pXSo/XFwpfFtefTt7XSkrKXxcXHsoW159XSopXFx9KD86KD89WztcXHN9XSl8JCkpL2dpLENmPS8oPzpefFxcVyspQGFwcGx5XFxzKlxcKD8oW14pO1xcbl0qKVxcKT8vZ2ksRGY9LygtLVtcXHctXSspXFxzKihbOiw7KV18JCkvZ2ksRWY9LyhhbmltYXRpb25cXHMqOil8KGFuaW1hdGlvbi1uYW1lXFxzKjopLyxGZj0vQG1lZGlhXFxzKC4qKS8sR2Y9L1xce1tefV0qXFx9L2c7dmFyIEhmPW5ldyBTZXQ7ZnVuY3Rpb24gSWYoYSxiKXtpZighYSlyZXR1cm5cIlwiO1wic3RyaW5nXCI9PT10eXBlb2YgYSYmKGE9ZGYoYSkpO2ImJkpmKGEsYik7cmV0dXJuIHBmKGEsUyl9ZnVuY3Rpb24gS2YoYSl7IWEuX19jc3NSdWxlcyYmYS50ZXh0Q29udGVudCYmKGEuX19jc3NSdWxlcz1kZihhLnRleHRDb250ZW50KSk7cmV0dXJuIGEuX19jc3NSdWxlc3x8bnVsbH1mdW5jdGlvbiBMZihhKXtyZXR1cm4hIWEucGFyZW50JiZhLnBhcmVudC50eXBlPT09bWZ9ZnVuY3Rpb24gSmYoYSxiLGMsZCl7aWYoYSl7dmFyIGU9ITEsZj1hLnR5cGU7aWYoZCYmZj09PWtmKXt2YXIgZz1hLnNlbGVjdG9yLm1hdGNoKEZmKTtnJiYod2luZG93Lm1hdGNoTWVkaWEoZ1sxXSkubWF0Y2hlc3x8KGU9ITApKX1mPT09b2Y/YihhKTpjJiZmPT09bWY/YyhhKTpmPT09bmYmJihlPSEwKTtpZigoYT1hLnJ1bGVzKSYmIWUpZm9yKGU9MCxmPWEubGVuZ3RoLGc9dm9pZCAwO2U8ZiYmKGc9YVtlXSk7ZSsrKUpmKGcsYixjLGQpfX1cbmZ1bmN0aW9uIE1mKGEsYixjLGQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtiJiZlLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsYik7ZS50ZXh0Q29udGVudD1hO05mKGUsYyxkKTtyZXR1cm4gZX12YXIgT2Y9bnVsbDtmdW5jdGlvbiBQZihhKXthPWRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCIgU2hhZHkgRE9NIHN0eWxlcyBmb3IgXCIrYStcIiBcIik7dmFyIGI9ZG9jdW1lbnQuaGVhZDtiLmluc2VydEJlZm9yZShhLChPZj9PZi5uZXh0U2libGluZzpudWxsKXx8Yi5maXJzdENoaWxkKTtyZXR1cm4gT2Y9YX1mdW5jdGlvbiBOZihhLGIsYyl7Yj1ifHxkb2N1bWVudC5oZWFkO2IuaW5zZXJ0QmVmb3JlKGEsYyYmYy5uZXh0U2libGluZ3x8Yi5maXJzdENoaWxkKTtPZj9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKE9mKT09PU5vZGUuRE9DVU1FTlRfUE9TSVRJT05fUFJFQ0VESU5HJiYoT2Y9YSk6T2Y9YX1cbmZ1bmN0aW9uIFFmKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtiPGQ7YisrKWlmKFwiKFwiPT09YVtiXSljKys7ZWxzZSBpZihcIilcIj09PWFbYl0mJjA9PT0tLWMpcmV0dXJuIGI7cmV0dXJuLTF9ZnVuY3Rpb24gUmYoYSxiKXt2YXIgYz1hLmluZGV4T2YoXCJ2YXIoXCIpO2lmKC0xPT09YylyZXR1cm4gYihhLFwiXCIsXCJcIixcIlwiKTt2YXIgZD1RZihhLGMrMyksZT1hLnN1YnN0cmluZyhjKzQsZCk7Yz1hLnN1YnN0cmluZygwLGMpO2E9UmYoYS5zdWJzdHJpbmcoZCsxKSxiKTtkPWUuaW5kZXhPZihcIixcIik7cmV0dXJuLTE9PT1kP2IoYyxlLnRyaW0oKSxcIlwiLGEpOmIoYyxlLnN1YnN0cmluZygwLGQpLnRyaW0oKSxlLnN1YnN0cmluZyhkKzEpLnRyaW0oKSxhKX1mdW5jdGlvbiBTZihhLGIpe1I/YS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGIpOndpbmRvdy5TaGFkeURPTS5uYXRpdmVNZXRob2RzLnNldEF0dHJpYnV0ZS5jYWxsKGEsXCJjbGFzc1wiLGIpfVxudmFyIFRmPXdpbmRvdy5TaGFkeURPTSYmd2luZG93LlNoYWR5RE9NLndyYXB8fGZ1bmN0aW9uKGEpe3JldHVybiBhfTtmdW5jdGlvbiBVZihhKXt2YXIgYj1hLmxvY2FsTmFtZSxjPVwiXCI7Yj8tMTxiLmluZGV4T2YoXCItXCIpfHwoYz1iLGI9YS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiaXNcIil8fFwiXCIpOihiPWEuaXMsYz1hLmV4dGVuZHMpO3JldHVybntpczpiLFg6Y319ZnVuY3Rpb24gVmYoYSl7Zm9yKHZhciBiPVtdLGM9XCJcIixkPTA7MDw9ZCYmZDxhLmxlbmd0aDtkKyspaWYoXCIoXCI9PT1hW2RdKXt2YXIgZT1RZihhLGQpO2MrPWEuc2xpY2UoZCxlKzEpO2Q9ZX1lbHNlXCIsXCI9PT1hW2RdPyhiLnB1c2goYyksYz1cIlwiKTpjKz1hW2RdO2MmJmIucHVzaChjKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIFdmKGEpe2lmKHZvaWQgMCE9PUFmKXJldHVybiBBZjtpZih2b2lkIDA9PT1hLl9fY3NzQnVpbGQpe3ZhciBiPWEuZ2V0QXR0cmlidXRlKFwiY3NzLWJ1aWxkXCIpO2lmKGIpYS5fX2Nzc0J1aWxkPWI7ZWxzZXthOntiPVwidGVtcGxhdGVcIj09PWEubG9jYWxOYW1lP2EuY29udGVudC5maXJzdENoaWxkOmEuZmlyc3RDaGlsZDtpZihiIGluc3RhbmNlb2YgQ29tbWVudCYmKGI9Yi50ZXh0Q29udGVudC50cmltKCkuc3BsaXQoXCI6XCIpLFwiY3NzLWJ1aWxkXCI9PT1iWzBdKSl7Yj1iWzFdO2JyZWFrIGF9Yj1cIlwifWlmKFwiXCIhPT1iKXt2YXIgYz1cInRlbXBsYXRlXCI9PT1hLmxvY2FsTmFtZT9hLmNvbnRlbnQuZmlyc3RDaGlsZDphLmZpcnN0Q2hpbGQ7Yy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpfWEuX19jc3NCdWlsZD1ifX1yZXR1cm4gYS5fX2Nzc0J1aWxkfHxcIlwifVxuZnVuY3Rpb24gWGYoYSl7YT12b2lkIDA9PT1hP1wiXCI6YTtyZXR1cm5cIlwiIT09YSYmUz9SP1wic2hhZG93XCI9PT1hOlwic2hhZHlcIj09PWE6ITF9O2Z1bmN0aW9uIFlmKCl7fWZ1bmN0aW9uIFpmKGEsYil7JGYoVSxhLGZ1bmN0aW9uKGEpe2FnKGEsYnx8XCJcIil9KX1mdW5jdGlvbiAkZihhLGIsYyl7Yi5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFJiZjKGIpO3ZhciBkO1widGVtcGxhdGVcIj09PWIubG9jYWxOYW1lP2Q9KGIuY29udGVudHx8Yi5fY29udGVudHx8YikuY2hpbGROb2RlczpkPWIuY2hpbGRyZW58fGIuY2hpbGROb2RlcztpZihkKWZvcihiPTA7YjxkLmxlbmd0aDtiKyspJGYoYSxkW2JdLGMpfVxuZnVuY3Rpb24gYWcoYSxiLGMpe2lmKGIpaWYoYS5jbGFzc0xpc3QpYz8oYS5jbGFzc0xpc3QucmVtb3ZlKFwic3R5bGUtc2NvcGVcIiksYS5jbGFzc0xpc3QucmVtb3ZlKGIpKTooYS5jbGFzc0xpc3QuYWRkKFwic3R5bGUtc2NvcGVcIiksYS5jbGFzc0xpc3QuYWRkKGIpKTtlbHNlIGlmKGEuZ2V0QXR0cmlidXRlKXt2YXIgZD1hLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpO2M/ZCYmKGI9ZC5yZXBsYWNlKFwic3R5bGUtc2NvcGVcIixcIlwiKS5yZXBsYWNlKGIsXCJcIiksU2YoYSxiKSk6U2YoYSwoZD9kK1wiIFwiOlwiXCIpK1wic3R5bGUtc2NvcGUgXCIrYil9fWZ1bmN0aW9uIGJnKGEsYixjKXskZihVLGEsZnVuY3Rpb24oYSl7YWcoYSxiLCEwKTthZyhhLGMpfSl9ZnVuY3Rpb24gY2coYSxiKXskZihVLGEsZnVuY3Rpb24oYSl7YWcoYSxifHxcIlwiLCEwKX0pfVxuZnVuY3Rpb24gZGcoYSxiLGMsZCxlKXt2YXIgZj1VO2U9dm9pZCAwPT09ZT9cIlwiOmU7XCJcIj09PWUmJihSfHxcInNoYWR5XCI9PT0odm9pZCAwPT09ZD9cIlwiOmQpP2U9SWYoYixjKTooYT1VZihhKSxlPWVnKGYsYixhLmlzLGEuWCxjKStcIlxcblxcblwiKSk7cmV0dXJuIGUudHJpbSgpfWZ1bmN0aW9uIGVnKGEsYixjLGQsZSl7dmFyIGY9ZmcoYyxkKTtjPWM/XCIuXCIrYzpcIlwiO3JldHVybiBJZihiLGZ1bmN0aW9uKGIpe2IuY3x8KGIuc2VsZWN0b3I9Yi5DPWdnKGEsYixhLmIsYyxmKSxiLmM9ITApO2UmJmUoYixjLGYpfSl9ZnVuY3Rpb24gZmcoYSxiKXtyZXR1cm4gYj9cIltpcz1cIithK1wiXVwiOmF9XG5mdW5jdGlvbiBnZyhhLGIsYyxkLGUpe3ZhciBmPVZmKGIuc2VsZWN0b3IpO2lmKCFMZihiKSl7Yj0wO2Zvcih2YXIgZz1mLmxlbmd0aCxoPXZvaWQgMDtiPGcmJihoPWZbYl0pO2IrKylmW2JdPWMuY2FsbChhLGgsZCxlKX1yZXR1cm4gZi5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuISFhfSkuam9pbihcIixcIil9ZnVuY3Rpb24gaGcoYSl7cmV0dXJuIGEucmVwbGFjZShpZyxmdW5jdGlvbihhLGMsZCl7LTE8ZC5pbmRleE9mKFwiK1wiKT9kPWQucmVwbGFjZSgvXFwrL2csXCJfX19cIik6LTE8ZC5pbmRleE9mKFwiX19fXCIpJiYoZD1kLnJlcGxhY2UoL19fXy9nLFwiK1wiKSk7cmV0dXJuXCI6XCIrYytcIihcIitkK1wiKVwifSl9XG5mdW5jdGlvbiBqZyhhKXtmb3IodmFyIGI9W10sYztjPWEubWF0Y2goa2cpOyl7dmFyIGQ9Yy5pbmRleCxlPVFmKGEsZCk7aWYoLTE9PT1lKXRocm93IEVycm9yKGMuaW5wdXQrXCIgc2VsZWN0b3IgbWlzc2luZyAnKSdcIik7Yz1hLnNsaWNlKGQsZSsxKTthPWEucmVwbGFjZShjLFwiXFx1ZTAwMFwiKTtiLnB1c2goYyl9cmV0dXJue25hOmEsbWF0Y2hlczpifX1mdW5jdGlvbiBsZyhhLGIpe3ZhciBjPWEuc3BsaXQoXCJcXHVlMDAwXCIpO3JldHVybiBiLnJlZHVjZShmdW5jdGlvbihhLGIsZil7cmV0dXJuIGErYitjW2YrMV19LGNbMF0pfVxuWWYucHJvdG90eXBlLmI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPSExO2E9YS50cmltKCk7dmFyIGU9aWcudGVzdChhKTtlJiYoYT1hLnJlcGxhY2UoaWcsZnVuY3Rpb24oYSxiLGMpe3JldHVyblwiOlwiK2IrXCIoXCIrYy5yZXBsYWNlKC9cXHMvZyxcIlwiKStcIilcIn0pLGE9aGcoYSkpO3ZhciBmPWtnLnRlc3QoYSk7aWYoZil7dmFyIGc9amcoYSk7YT1nLm5hO2c9Zy5tYXRjaGVzfWE9YS5yZXBsYWNlKG1nLFwiOmhvc3QgJDFcIik7YT1hLnJlcGxhY2UobmcsZnVuY3Rpb24oYSxlLGYpe2R8fChhPW9nKGYsZSxiLGMpLGQ9ZHx8YS5zdG9wLGU9YS5IYSxmPWEudmFsdWUpO3JldHVybiBlK2Z9KTtmJiYoYT1sZyhhLGcpKTtlJiYoYT1oZyhhKSk7cmV0dXJuIGE9YS5yZXBsYWNlKHBnLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybidbZGlyPVwiJytjKydcIl0gJytiK2QrXCIsIFwiK2IrJ1tkaXI9XCInK2MrJ1wiXScrZH0pfTtcbmZ1bmN0aW9uIG9nKGEsYixjLGQpe3ZhciBlPWEuaW5kZXhPZihcIjo6c2xvdHRlZFwiKTswPD1hLmluZGV4T2YoXCI6aG9zdFwiKT9hPXFnKGEsZCk6MCE9PWUmJihhPWM/cmcoYSxjKTphKTtjPSExOzA8PWUmJihiPVwiXCIsYz0hMCk7aWYoYyl7dmFyIGY9ITA7YyYmKGE9YS5yZXBsYWNlKHNnLGZ1bmN0aW9uKGEsYil7cmV0dXJuXCIgPiBcIitifSkpfXJldHVybnt2YWx1ZTphLEhhOmIsc3RvcDpmfX1mdW5jdGlvbiByZyhhLGIpe2E9YS5zcGxpdCgvKFxcWy4rP1xcXSkvKTtmb3IodmFyIGM9W10sZD0wO2Q8YS5sZW5ndGg7ZCsrKWlmKDE9PT1kJTIpYy5wdXNoKGFbZF0pO2Vsc2V7dmFyIGU9YVtkXTtpZihcIlwiIT09ZXx8ZCE9PWEubGVuZ3RoLTEpZT1lLnNwbGl0KFwiOlwiKSxlWzBdKz1iLGMucHVzaChlLmpvaW4oXCI6XCIpKX1yZXR1cm4gYy5qb2luKFwiXCIpfVxuZnVuY3Rpb24gcWcoYSxiKXt2YXIgYz1hLm1hdGNoKHRnKTtyZXR1cm4oYz1jJiZjWzJdLnRyaW0oKXx8XCJcIik/Y1swXS5tYXRjaCh1Zyk/YS5yZXBsYWNlKHRnLGZ1bmN0aW9uKGEsYyxmKXtyZXR1cm4gYitmfSk6Yy5zcGxpdCh1ZylbMF09PT1iP2M6XCJzaG91bGRfbm90X21hdGNoXCI6YS5yZXBsYWNlKFwiOmhvc3RcIixiKX1mdW5jdGlvbiB2ZyhhKXtcIjpyb290XCI9PT1hLnNlbGVjdG9yJiYoYS5zZWxlY3Rvcj1cImh0bWxcIil9WWYucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSl7cmV0dXJuIGEubWF0Y2goXCI6aG9zdFwiKT9cIlwiOmEubWF0Y2goXCI6OnNsb3R0ZWRcIik/dGhpcy5iKGEsXCI6bm90KC5zdHlsZS1zY29wZSlcIik6cmcoYS50cmltKCksXCI6bm90KC5zdHlsZS1zY29wZSlcIil9O3QuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoWWYucHJvdG90eXBlLHthOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm5cInN0eWxlLXNjb3BlXCJ9fX0pO1xudmFyIGlnPS86KG50aFstXFx3XSspXFwoKFteKV0rKVxcKS8sbmc9LyhefFtcXHM+K35dKykoKD86XFxbLis/XFxdfFteXFxzPit+PVtdKSspL2csdWc9L1tbLjojKl0vLG1nPS9eKDo6c2xvdHRlZCkvLHRnPS8oOmhvc3QpKD86XFwoKCg/OlxcKFteKShdKlxcKXxbXikoXSopKz8pXFwpKS8sc2c9Lyg/Ojo6c2xvdHRlZCkoPzpcXCgoKD86XFwoW14pKF0qXFwpfFteKShdKikrPylcXCkpLyxwZz0vKC4qKTpkaXJcXCgoPzoobHRyfHJ0bCkpXFwpKC4qKS8sa2c9LzooPzptYXRjaGVzfGFueXwtKD86d2Via2l0fG1veiktYW55KS8sVT1uZXcgWWY7ZnVuY3Rpb24gd2coYSxiLGMsZCxlKXt0aGlzLkw9YXx8bnVsbDt0aGlzLmI9Ynx8bnVsbDt0aGlzLmxhPWN8fFtdO3RoaXMuRz1udWxsO3RoaXMuY3NzQnVpbGQ9ZXx8XCJcIjt0aGlzLlg9ZHx8XCJcIjt0aGlzLmE9dGhpcy5IPXRoaXMuSz1udWxsfWZ1bmN0aW9uIFYoYSl7cmV0dXJuIGE/YS5fX3N0eWxlSW5mbzpudWxsfWZ1bmN0aW9uIHhnKGEsYil7cmV0dXJuIGEuX19zdHlsZUluZm89Yn13Zy5wcm90b3R5cGUuYz1mdW5jdGlvbigpe3JldHVybiB0aGlzLkx9O3dnLnByb3RvdHlwZS5fZ2V0U3R5bGVSdWxlcz13Zy5wcm90b3R5cGUuYztmdW5jdGlvbiB5ZyhhKXt2YXIgYj10aGlzLm1hdGNoZXN8fHRoaXMubWF0Y2hlc1NlbGVjdG9yfHx0aGlzLm1vek1hdGNoZXNTZWxlY3Rvcnx8dGhpcy5tc01hdGNoZXNTZWxlY3Rvcnx8dGhpcy5vTWF0Y2hlc1NlbGVjdG9yfHx0aGlzLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtyZXR1cm4gYiYmYi5jYWxsKHRoaXMsYSl9dmFyIHpnPW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goXCJUcmlkZW50XCIpO2Z1bmN0aW9uIEFnKCl7fWZ1bmN0aW9uIEJnKGEpe3ZhciBiPXt9LGM9W10sZD0wO0pmKGEsZnVuY3Rpb24oYSl7Q2coYSk7YS5pbmRleD1kKys7YT1hLkEuY3NzVGV4dDtmb3IodmFyIGM7Yz1EZi5leGVjKGEpOyl7dmFyIGU9Y1sxXTtcIjpcIiE9PWNbMl0mJihiW2VdPSEwKX19LGZ1bmN0aW9uKGEpe2MucHVzaChhKX0pO2EuYj1jO2E9W107Zm9yKHZhciBlIGluIGIpYS5wdXNoKGUpO3JldHVybiBhfVxuZnVuY3Rpb24gQ2coYSl7aWYoIWEuQSl7dmFyIGI9e30sYz17fTtEZyhhLGMpJiYoYi5KPWMsYS5ydWxlcz1udWxsKTtiLmNzc1RleHQ9YS5wYXJzZWRDc3NUZXh0LnJlcGxhY2UoR2YsXCJcIikucmVwbGFjZShCZixcIlwiKTthLkE9Yn19ZnVuY3Rpb24gRGcoYSxiKXt2YXIgYz1hLkE7aWYoYyl7aWYoYy5KKXJldHVybiBPYmplY3QuYXNzaWduKGIsYy5KKSwhMH1lbHNle2M9YS5wYXJzZWRDc3NUZXh0O2Zvcih2YXIgZDthPUJmLmV4ZWMoYyk7KXtkPShhWzJdfHxhWzNdKS50cmltKCk7aWYoXCJpbmhlcml0XCIhPT1kfHxcInVuc2V0XCIhPT1kKWJbYVsxXS50cmltKCldPWQ7ZD0hMH1yZXR1cm4gZH19XG5mdW5jdGlvbiBFZyhhLGIsYyl7YiYmKGI9MDw9Yi5pbmRleE9mKFwiO1wiKT9GZyhhLGIsYyk6UmYoYixmdW5jdGlvbihiLGUsZixnKXtpZighZSlyZXR1cm4gYitnOyhlPUVnKGEsY1tlXSxjKSkmJlwiaW5pdGlhbFwiIT09ZT9cImFwcGx5LXNoaW0taW5oZXJpdFwiPT09ZSYmKGU9XCJpbmhlcml0XCIpOmU9RWcoYSxjW2ZdfHxmLGMpfHxmO3JldHVybiBiKyhlfHxcIlwiKStnfSkpO3JldHVybiBiJiZiLnRyaW0oKXx8XCJcIn1cbmZ1bmN0aW9uIEZnKGEsYixjKXtiPWIuc3BsaXQoXCI7XCIpO2Zvcih2YXIgZD0wLGUsZjtkPGIubGVuZ3RoO2QrKylpZihlPWJbZF0pe0NmLmxhc3RJbmRleD0wO2lmKGY9Q2YuZXhlYyhlKSllPUVnKGEsY1tmWzFdXSxjKTtlbHNlIGlmKGY9ZS5pbmRleE9mKFwiOlwiKSwtMSE9PWYpe3ZhciBnPWUuc3Vic3RyaW5nKGYpO2c9Zy50cmltKCk7Zz1FZyhhLGcsYyl8fGc7ZT1lLnN1YnN0cmluZygwLGYpK2d9YltkXT1lJiZlLmxhc3RJbmRleE9mKFwiO1wiKT09PWUubGVuZ3RoLTE/ZS5zbGljZSgwLC0xKTplfHxcIlwifXJldHVybiBiLmpvaW4oXCI7XCIpfVxuZnVuY3Rpb24gR2coYSxiKXt2YXIgYz17fSxkPVtdO0pmKGEsZnVuY3Rpb24oYSl7YS5BfHxDZyhhKTt2YXIgZT1hLkN8fGEucGFyc2VkU2VsZWN0b3I7YiYmYS5BLkomJmUmJnlnLmNhbGwoYixlKSYmKERnKGEsYyksYT1hLmluZGV4LGU9cGFyc2VJbnQoYS8zMiwxMCksZFtlXT0oZFtlXXx8MCl8MTw8YSUzMil9LG51bGwsITApO3JldHVybntKOmMsa2V5OmR9fVxuZnVuY3Rpb24gSGcoYSxiLGMsZCl7Yi5BfHxDZyhiKTtpZihiLkEuSil7dmFyIGU9VWYoYSk7YT1lLmlzO2U9ZS5YO2U9YT9mZyhhLGUpOlwiaHRtbFwiO3ZhciBmPWIucGFyc2VkU2VsZWN0b3IsZz1cIjpob3N0ID4gKlwiPT09Znx8XCJodG1sXCI9PT1mLGg9MD09PWYuaW5kZXhPZihcIjpob3N0XCIpJiYhZztcInNoYWR5XCI9PT1jJiYoZz1mPT09ZStcIiA+ICouXCIrZXx8LTEhPT1mLmluZGV4T2YoXCJodG1sXCIpLGg9IWcmJjA9PT1mLmluZGV4T2YoZSkpO2lmKGd8fGgpYz1lLGgmJihiLkN8fChiLkM9Z2coVSxiLFUuYixhP1wiLlwiK2E6XCJcIixlKSksYz1iLkN8fGUpLGQoe25hOmMsT2E6aCxiYjpnfSl9fWZ1bmN0aW9uIElnKGEsYixjKXt2YXIgZD17fSxlPXt9O0pmKGIsZnVuY3Rpb24oYil7SGcoYSxiLGMsZnVuY3Rpb24oYyl7eWcuY2FsbChhLl9lbGVtZW50fHxhLGMubmEpJiYoYy5PYT9EZyhiLGQpOkRnKGIsZSkpfSl9LG51bGwsITApO3JldHVybntVYTplLE1hOmR9fVxuZnVuY3Rpb24gSmcoYSxiLGMsZCl7dmFyIGU9VWYoYiksZj1mZyhlLmlzLGUuWCksZz1uZXcgUmVnRXhwKFwiKD86XnxbXi4jWzpdKVwiKyhiLmV4dGVuZHM/XCJcXFxcXCIrZi5zbGljZSgwLC0xKStcIlxcXFxdXCI6ZikrXCIoJHxbLjpbXFxcXHM+K35dKVwiKSxoPVYoYik7ZT1oLkw7aD1oLmNzc0J1aWxkO3ZhciBrPUtnKGUsZCk7cmV0dXJuIGRnKGIsZSxmdW5jdGlvbihiKXt2YXIgZT1cIlwiO2IuQXx8Q2coYik7Yi5BLmNzc1RleHQmJihlPUZnKGEsYi5BLmNzc1RleHQsYykpO2IuY3NzVGV4dD1lO2lmKCFSJiYhTGYoYikmJmIuY3NzVGV4dCl7dmFyIGg9ZT1iLmNzc1RleHQ7bnVsbD09Yi5yYSYmKGIucmE9RWYudGVzdChlKSk7aWYoYi5yYSlpZihudWxsPT1iLmJhKXtiLmJhPVtdO2Zvcih2YXIgbCBpbiBrKWg9a1tsXSxoPWgoZSksZSE9PWgmJihlPWgsYi5iYS5wdXNoKGwpKX1lbHNle2ZvcihsPTA7bDxiLmJhLmxlbmd0aDsrK2wpaD1rW2IuYmFbbF1dLGU9aChlKTtoPWV9Yi5jc3NUZXh0PWg7Yi5DPVxuYi5DfHxiLnNlbGVjdG9yO2U9XCIuXCIrZDtsPVZmKGIuQyk7aD0wO2Zvcih2YXIgdj1sLmxlbmd0aCx4PXZvaWQgMDtoPHYmJih4PWxbaF0pO2grKylsW2hdPXgubWF0Y2goZyk/eC5yZXBsYWNlKGYsZSk6ZStcIiBcIit4O2Iuc2VsZWN0b3I9bC5qb2luKFwiLFwiKX19LGgpfWZ1bmN0aW9uIEtnKGEsYil7YT1hLmI7dmFyIGM9e307aWYoIVImJmEpZm9yKHZhciBkPTAsZT1hW2RdO2Q8YS5sZW5ndGg7ZT1hWysrZF0pe3ZhciBmPWUsZz1iO2YuZj1uZXcgUmVnRXhwKFwiXFxcXGJcIitmLmtleWZyYW1lc05hbWUrXCIoPyFcXFxcQnwtKVwiLFwiZ1wiKTtmLmE9Zi5rZXlmcmFtZXNOYW1lK1wiLVwiK2c7Zi5DPWYuQ3x8Zi5zZWxlY3RvcjtmLnNlbGVjdG9yPWYuQy5yZXBsYWNlKGYua2V5ZnJhbWVzTmFtZSxmLmEpO2NbZS5rZXlmcmFtZXNOYW1lXT1MZyhlKX1yZXR1cm4gY31mdW5jdGlvbiBMZyhhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGIucmVwbGFjZShhLmYsYS5hKX19XG5mdW5jdGlvbiBNZyhhLGIpe3ZhciBjPU5nLGQ9S2YoYSk7YS50ZXh0Q29udGVudD1JZihkLGZ1bmN0aW9uKGEpe3ZhciBkPWEuY3NzVGV4dD1hLnBhcnNlZENzc1RleHQ7YS5BJiZhLkEuY3NzVGV4dCYmKGQ9ZC5yZXBsYWNlKHFmLFwiXCIpLnJlcGxhY2UocmYsXCJcIiksYS5jc3NUZXh0PUZnKGMsZCxiKSl9KX10Lk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEFnLnByb3RvdHlwZSx7YTp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCJ4LXNjb3BlXCJ9fX0pO3ZhciBOZz1uZXcgQWc7dmFyIE9nPXt9LFBnPXdpbmRvdy5jdXN0b21FbGVtZW50cztpZihQZyYmIVImJiF6Zil7dmFyIFFnPVBnLmRlZmluZTtQZy5kZWZpbmU9ZnVuY3Rpb24oYSxiLGMpe09nW2FdfHwoT2dbYV09UGYoYSkpO1FnLmNhbGwoUGcsYSxiLGMpfX07ZnVuY3Rpb24gUmcoKXt0aGlzLmNhY2hlPXt9fVJnLnByb3RvdHlwZS5zdG9yZT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT10aGlzLmNhY2hlW2FdfHxbXTtlLnB1c2goe0o6YixzdHlsZUVsZW1lbnQ6YyxIOmR9KTsxMDA8ZS5sZW5ndGgmJmUuc2hpZnQoKTt0aGlzLmNhY2hlW2FdPWV9O2Z1bmN0aW9uIFNnKCl7fXZhciBUZz1uZXcgUmVnRXhwKFUuYStcIlxcXFxzKihbXlxcXFxzXSopXCIpO2Z1bmN0aW9uIFVnKGEpe3JldHVybihhPShhLmNsYXNzTGlzdCYmYS5jbGFzc0xpc3QudmFsdWU/YS5jbGFzc0xpc3QudmFsdWU6YS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikubWF0Y2goVGcpKT9hWzFdOlwiXCJ9ZnVuY3Rpb24gVmcoYSl7dmFyIGI9VGYoYSkuZ2V0Um9vdE5vZGUoKTtyZXR1cm4gYj09PWF8fGI9PT1hLm93bmVyRG9jdW1lbnQ/XCJcIjooYT1iLmhvc3QpP1VmKGEpLmlzOlwiXCJ9XG5mdW5jdGlvbiBXZyhhKXtmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTtpZihjLnRhcmdldCE9PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCYmYy50YXJnZXQhPT1kb2N1bWVudC5oZWFkKWZvcih2YXIgZD0wO2Q8Yy5hZGRlZE5vZGVzLmxlbmd0aDtkKyspe3ZhciBlPWMuYWRkZWROb2Rlc1tkXTtpZihlLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpe3ZhciBmPWUuZ2V0Um9vdE5vZGUoKSxnPVVnKGUpO2lmKGcmJmY9PT1lLm93bmVyRG9jdW1lbnQmJihcInN0eWxlXCIhPT1lLmxvY2FsTmFtZSYmXCJ0ZW1wbGF0ZVwiIT09ZS5sb2NhbE5hbWV8fFwiXCI9PT1XZihlKSkpY2coZSxnKTtlbHNlIGlmKGYgaW5zdGFuY2VvZiBTaGFkb3dSb290KWZvcihmPVZnKGUpLGYhPT1nJiZiZyhlLGcsZiksZT13aW5kb3cuU2hhZHlET00ubmF0aXZlTWV0aG9kcy5xdWVyeVNlbGVjdG9yQWxsLmNhbGwoZSxcIjpub3QoLlwiK1UuYStcIilcIiksZz0wO2c8ZS5sZW5ndGg7ZysrKXtmPWVbZ107XG52YXIgaD1WZyhmKTtoJiZhZyhmLGgpfX19fX1cbmlmKCEoUnx8d2luZG93LlNoYWR5RE9NJiZ3aW5kb3cuU2hhZHlET00uaGFuZGxlc0R5bmFtaWNTY29waW5nKSl7dmFyIFhnPW5ldyBNdXRhdGlvbk9ic2VydmVyKFdnKSxZZz1mdW5jdGlvbihhKXtYZy5vYnNlcnZlKGEse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSl9O2lmKHdpbmRvdy5jdXN0b21FbGVtZW50cyYmIXdpbmRvdy5jdXN0b21FbGVtZW50cy5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrKVlnKGRvY3VtZW50KTtlbHNle3ZhciBaZz1mdW5jdGlvbigpe1lnKGRvY3VtZW50LmJvZHkpfTt3aW5kb3cuSFRNTEltcG9ydHM/d2luZG93LkhUTUxJbXBvcnRzLndoZW5SZWFkeShaZyk6cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7aWYoXCJsb2FkaW5nXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlKXt2YXIgYT1mdW5jdGlvbigpe1pnKCk7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixhKX07ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixcbmEpfWVsc2UgWmcoKX0pfVNnPWZ1bmN0aW9uKCl7V2coWGcudGFrZVJlY29yZHMoKSl9fXZhciAkZz1TZzt2YXIgYWg9e307dmFyIGJoPVByb21pc2UucmVzb2x2ZSgpO2Z1bmN0aW9uIGNoKGEpe2lmKGE9YWhbYV0pYS5fYXBwbHlTaGltQ3VycmVudFZlcnNpb249YS5fYXBwbHlTaGltQ3VycmVudFZlcnNpb258fDAsYS5fYXBwbHlTaGltVmFsaWRhdGluZ1ZlcnNpb249YS5fYXBwbHlTaGltVmFsaWRhdGluZ1ZlcnNpb258fDAsYS5fYXBwbHlTaGltTmV4dFZlcnNpb249KGEuX2FwcGx5U2hpbU5leHRWZXJzaW9ufHwwKSsxfWZ1bmN0aW9uIGRoKGEpe3JldHVybiBhLl9hcHBseVNoaW1DdXJyZW50VmVyc2lvbj09PWEuX2FwcGx5U2hpbU5leHRWZXJzaW9ufWZ1bmN0aW9uIGVoKGEpe2EuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9uPWEuX2FwcGx5U2hpbU5leHRWZXJzaW9uO2EuX3ZhbGlkYXRpbmd8fChhLl92YWxpZGF0aW5nPSEwLGJoLnRoZW4oZnVuY3Rpb24oKXthLl9hcHBseVNoaW1DdXJyZW50VmVyc2lvbj1hLl9hcHBseVNoaW1OZXh0VmVyc2lvbjthLl92YWxpZGF0aW5nPSExfSkpfTt2YXIgZmg9e30sZ2g9bmV3IFJnO2Z1bmN0aW9uIFcoKXt0aGlzLkY9e307dGhpcy5jPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDt2YXIgYT1uZXcgY2Y7YS5ydWxlcz1bXTt0aGlzLmY9eGcodGhpcy5jLG5ldyB3ZyhhKSk7dGhpcy51PSExO3RoaXMuYj10aGlzLmE9bnVsbH1yPVcucHJvdG90eXBlO3IuZmx1c2g9ZnVuY3Rpb24oKXskZygpfTtyLkthPWZ1bmN0aW9uKGEpe3JldHVybiBLZihhKX07ci5ZYT1mdW5jdGlvbihhKXtyZXR1cm4gSWYoYSl9O3IucHJlcGFyZVRlbXBsYXRlPWZ1bmN0aW9uKGEsYixjKXt0aGlzLnByZXBhcmVUZW1wbGF0ZURvbShhLGIpO3RoaXMucHJlcGFyZVRlbXBsYXRlU3R5bGVzKGEsYixjKX07XG5yLnByZXBhcmVUZW1wbGF0ZVN0eWxlcz1mdW5jdGlvbihhLGIsYyl7aWYoIWEuX3ByZXBhcmVkJiYhemYpe1J8fE9nW2JdfHwoT2dbYl09UGYoYikpO2EuX3ByZXBhcmVkPSEwO2EubmFtZT1iO2EuZXh0ZW5kcz1jO2FoW2JdPWE7dmFyIGQ9V2YoYSksZT1YZihkKTtjPXtpczpiLGV4dGVuZHM6Y307Zm9yKHZhciBmPVtdLGc9YS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVwiKSxoPTA7aDxnLmxlbmd0aDtoKyspe3ZhciBrPWdbaF07aWYoay5oYXNBdHRyaWJ1dGUoXCJzaGFkeS11bnNjb3BlZFwiKSl7aWYoIVIpe3ZhciBsPWsudGV4dENvbnRlbnQ7SGYuaGFzKGwpfHwoSGYuYWRkKGwpLGw9ay5jbG9uZU5vZGUoITApLGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobCkpO2sucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChrKX19ZWxzZSBmLnB1c2goay50ZXh0Q29udGVudCksay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGspfWY9Zi5qb2luKFwiXCIpLnRyaW0oKSsoZmhbYl18fFwiXCIpO1xuaGgodGhpcyk7aWYoIWUpe2lmKGc9IWQpZz1DZi50ZXN0KGYpfHxCZi50ZXN0KGYpLENmLmxhc3RJbmRleD0wLEJmLmxhc3RJbmRleD0wO2g9ZGYoZik7ZyYmUyYmdGhpcy5hJiZ0aGlzLmEudHJhbnNmb3JtUnVsZXMoaCxiKTthLl9zdHlsZUFzdD1ofWc9W107U3x8KGc9QmcoYS5fc3R5bGVBc3QpKTtpZighZy5sZW5ndGh8fFMpaD1SP2EuY29udGVudDpudWxsLGI9T2dbYl18fG51bGwsZD1kZyhjLGEuX3N0eWxlQXN0LG51bGwsZCxlP2Y6XCJcIiksZD1kLmxlbmd0aD9NZihkLGMuaXMsaCxiKTpudWxsLGEuX3N0eWxlPWQ7YS5hPWd9fTtyLlNhPWZ1bmN0aW9uKGEsYil7ZmhbYl09YS5qb2luKFwiIFwiKX07ci5wcmVwYXJlVGVtcGxhdGVEb209ZnVuY3Rpb24oYSxiKXtpZighemYpe3ZhciBjPVdmKGEpO1J8fFwic2hhZHlcIj09PWN8fGEuX2RvbVByZXBhcmVkfHwoYS5fZG9tUHJlcGFyZWQ9ITAsWmYoYS5jb250ZW50LGIpKX19O1xuZnVuY3Rpb24gaWgoYSl7dmFyIGI9VWYoYSksYz1iLmlzO2I9Yi5YO3ZhciBkPU9nW2NdfHxudWxsLGU9YWhbY107aWYoZSl7Yz1lLl9zdHlsZUFzdDt2YXIgZj1lLmE7ZT1XZihlKTtiPW5ldyB3ZyhjLGQsZixiLGUpO3hnKGEsYik7cmV0dXJuIGJ9fWZ1bmN0aW9uIGpoKGEpeyFhLmImJndpbmRvdy5TaGFkeUNTUyYmd2luZG93LlNoYWR5Q1NTLkN1c3RvbVN0eWxlSW50ZXJmYWNlJiYoYS5iPXdpbmRvdy5TaGFkeUNTUy5DdXN0b21TdHlsZUludGVyZmFjZSxhLmIudHJhbnNmb3JtQ2FsbGJhY2s9ZnVuY3Rpb24oYil7YS52YShiKX0sYS5iLnZhbGlkYXRlQ2FsbGJhY2s9ZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXsoYS5iLmVucXVldWVkfHxhLnUpJiZhLmZsdXNoQ3VzdG9tU3R5bGVzKCl9KX0pfVxuZnVuY3Rpb24gaGgoYSl7IWEuYSYmd2luZG93LlNoYWR5Q1NTJiZ3aW5kb3cuU2hhZHlDU1MuQXBwbHlTaGltJiYoYS5hPXdpbmRvdy5TaGFkeUNTUy5BcHBseVNoaW0sYS5hLmludmFsaWRDYWxsYmFjaz1jaCk7amgoYSl9XG5yLmZsdXNoQ3VzdG9tU3R5bGVzPWZ1bmN0aW9uKCl7aWYoIXpmJiYoaGgodGhpcyksdGhpcy5iKSl7dmFyIGE9dGhpcy5iLnByb2Nlc3NTdHlsZXMoKTtpZih0aGlzLmIuZW5xdWV1ZWQmJiFYZih0aGlzLmYuY3NzQnVpbGQpKXtpZihTKXtpZighdGhpcy5mLmNzc0J1aWxkKWZvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz10aGlzLmIuZ2V0U3R5bGVGb3JDdXN0b21TdHlsZShhW2JdKTtpZihjJiZTJiZ0aGlzLmEpe3ZhciBkPUtmKGMpO2hoKHRoaXMpO3RoaXMuYS50cmFuc2Zvcm1SdWxlcyhkKTtjLnRleHRDb250ZW50PUlmKGQpfX19ZWxzZXtraCh0aGlzLHRoaXMuYyx0aGlzLmYpO2ZvcihiPTA7YjxhLmxlbmd0aDtiKyspKGM9dGhpcy5iLmdldFN0eWxlRm9yQ3VzdG9tU3R5bGUoYVtiXSkpJiZNZyhjLHRoaXMuZi5LKTt0aGlzLnUmJnRoaXMuc3R5bGVEb2N1bWVudCgpfXRoaXMuYi5lbnF1ZXVlZD0hMX19fTtcbnIuc3R5bGVFbGVtZW50PWZ1bmN0aW9uKGEsYil7aWYoemYpe2lmKGIpe1YoYSl8fHhnKGEsbmV3IHdnKG51bGwpKTt2YXIgYz1WKGEpO2MuRz1jLkd8fHt9O09iamVjdC5hc3NpZ24oYy5HLGIpO2xoKHRoaXMsYSxjKX19ZWxzZSBpZihjPVYoYSl8fGloKGEpKWlmKGEhPT10aGlzLmMmJih0aGlzLnU9ITApLGImJihjLkc9Yy5HfHx7fSxPYmplY3QuYXNzaWduKGMuRyxiKSksUylsaCh0aGlzLGEsYyk7ZWxzZSBpZih0aGlzLmZsdXNoKCksa2godGhpcyxhLGMpLGMubGEmJmMubGEubGVuZ3RoKXtiPVVmKGEpLmlzO3ZhciBkO2E6e2lmKGQ9Z2guY2FjaGVbYl0pZm9yKHZhciBlPWQubGVuZ3RoLTE7MDw9ZTtlLS0pe3ZhciBmPWRbZV07Yjp7dmFyIGc9Yy5sYTtmb3IodmFyIGg9MDtoPGcubGVuZ3RoO2grKyl7dmFyIGs9Z1toXTtpZihmLkpba10hPT1jLktba10pe2c9ITE7YnJlYWsgYn19Zz0hMH1pZihnKXtkPWY7YnJlYWsgYX19ZD12b2lkIDB9Zz1kP2Quc3R5bGVFbGVtZW50Om51bGw7XG5lPWMuSDsoZj1kJiZkLkgpfHwoZj10aGlzLkZbYl09KHRoaXMuRltiXXx8MCkrMSxmPWIrXCItXCIrZik7Yy5IPWY7Zj1jLkg7aD1OZztoPWc/Zy50ZXh0Q29udGVudHx8XCJcIjpKZyhoLGEsYy5LLGYpO2s9VihhKTt2YXIgbD1rLmE7bCYmIVImJmwhPT1nJiYobC5fdXNlQ291bnQtLSwwPj1sLl91c2VDb3VudCYmbC5wYXJlbnROb2RlJiZsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobCkpO1I/ay5hPyhrLmEudGV4dENvbnRlbnQ9aCxnPWsuYSk6aCYmKGc9TWYoaCxmLGEuc2hhZG93Um9vdCxrLmIpKTpnP2cucGFyZW50Tm9kZXx8KHpnJiYtMTxoLmluZGV4T2YoXCJAbWVkaWFcIikmJihnLnRleHRDb250ZW50PWgpLE5mKGcsbnVsbCxrLmIpKTpoJiYoZz1NZihoLGYsbnVsbCxrLmIpKTtnJiYoZy5fdXNlQ291bnQ9Zy5fdXNlQ291bnR8fDAsay5hIT1nJiZnLl91c2VDb3VudCsrLGsuYT1nKTtmPWc7Unx8KGc9Yy5ILGs9aD1hLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiLGUmJihrPWgucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXHMqeC1zY29wZVxcXFxzKlwiK1xuZStcIlxcXFxzKlwiLFwiZ1wiKSxcIiBcIikpLGsrPShrP1wiIFwiOlwiXCIpK1wieC1zY29wZSBcIitnLGghPT1rJiZTZihhLGspKTtkfHxnaC5zdG9yZShiLGMuSyxmLGMuSCl9fTtcbmZ1bmN0aW9uIGxoKGEsYixjKXt2YXIgZD1VZihiKS5pcztpZihjLkcpe3ZhciBlPWMuRyxmO2ZvcihmIGluIGUpbnVsbD09PWY/Yi5zdHlsZS5yZW1vdmVQcm9wZXJ0eShmKTpiLnN0eWxlLnNldFByb3BlcnR5KGYsZVtmXSl9ZT1haFtkXTtpZighKCFlJiZiIT09YS5jfHxlJiZcIlwiIT09V2YoZSkpJiZlJiZlLl9zdHlsZSYmIWRoKGUpKXtpZihkaChlKXx8ZS5fYXBwbHlTaGltVmFsaWRhdGluZ1ZlcnNpb24hPT1lLl9hcHBseVNoaW1OZXh0VmVyc2lvbiloaChhKSxhLmEmJmEuYS50cmFuc2Zvcm1SdWxlcyhlLl9zdHlsZUFzdCxkKSxlLl9zdHlsZS50ZXh0Q29udGVudD1kZyhiLGMuTCksZWgoZSk7UiYmKGE9Yi5zaGFkb3dSb290KSYmKGE9YS5xdWVyeVNlbGVjdG9yKFwic3R5bGVcIikpJiYoYS50ZXh0Q29udGVudD1kZyhiLGMuTCkpO2MuTD1lLl9zdHlsZUFzdH19XG5mdW5jdGlvbiBtaChhLGIpe3JldHVybihiPVRmKGIpLmdldFJvb3ROb2RlKCkuaG9zdCk/VihiKXx8aWgoYik/YjptaChhLGIpOmEuY31mdW5jdGlvbiBraChhLGIsYyl7dmFyIGQ9bWgoYSxiKSxlPVYoZCksZj1lLks7ZD09PWEuY3x8Znx8KGtoKGEsZCxlKSxmPWUuSyk7YT1PYmplY3QuY3JlYXRlKGZ8fG51bGwpO2Q9SWcoYixjLkwsYy5jc3NCdWlsZCk7Yj1HZyhlLkwsYikuSjtPYmplY3QuYXNzaWduKGEsZC5NYSxiLGQuVWEpO2I9Yy5HO2Zvcih2YXIgZyBpbiBiKWlmKChlPWJbZ10pfHwwPT09ZSlhW2ddPWU7Zz1OZztiPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGEpO2ZvcihlPTA7ZTxiLmxlbmd0aDtlKyspZD1iW2VdLGFbZF09RWcoZyxhW2RdLGEpO2MuSz1hfXIuc3R5bGVEb2N1bWVudD1mdW5jdGlvbihhKXt0aGlzLnN0eWxlU3VidHJlZSh0aGlzLmMsYSl9O1xuci5zdHlsZVN1YnRyZWU9ZnVuY3Rpb24oYSxiKXt2YXIgYz1UZihhKSxkPWMuc2hhZG93Um9vdDsoZHx8YT09PXRoaXMuYykmJnRoaXMuc3R5bGVFbGVtZW50KGEsYik7aWYoYT1kJiYoZC5jaGlsZHJlbnx8ZC5jaGlsZE5vZGVzKSlmb3IoYz0wO2M8YS5sZW5ndGg7YysrKXRoaXMuc3R5bGVTdWJ0cmVlKGFbY10pO2Vsc2UgaWYoYz1jLmNoaWxkcmVufHxjLmNoaWxkTm9kZXMpZm9yKGE9MDthPGMubGVuZ3RoO2ErKyl0aGlzLnN0eWxlU3VidHJlZShjW2FdKX07XG5yLnZhPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1XZihhKTtjIT09dGhpcy5mLmNzc0J1aWxkJiYodGhpcy5mLmNzc0J1aWxkPWMpO2lmKCFYZihjKSl7dmFyIGQ9S2YoYSk7SmYoZCxmdW5jdGlvbihhKXtpZihSKXZnKGEpO2Vsc2V7dmFyIGQ9VTthLnNlbGVjdG9yPWEucGFyc2VkU2VsZWN0b3I7dmcoYSk7YS5zZWxlY3Rvcj1hLkM9Z2coZCxhLGQuYyx2b2lkIDAsdm9pZCAwKX1TJiZcIlwiPT09YyYmKGhoKGIpLGIuYSYmYi5hLnRyYW5zZm9ybVJ1bGUoYSkpfSk7Uz9hLnRleHRDb250ZW50PUlmKGQpOnRoaXMuZi5MLnJ1bGVzLnB1c2goZCl9fTtyLmdldENvbXB1dGVkU3R5bGVWYWx1ZT1mdW5jdGlvbihhLGIpe3ZhciBjO1N8fChjPShWKGEpfHxWKG1oKHRoaXMsYSkpKS5LW2JdKTtyZXR1cm4oYz1jfHx3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhKS5nZXRQcm9wZXJ0eVZhbHVlKGIpKT9jLnRyaW0oKTpcIlwifTtcbnIuWGE9ZnVuY3Rpb24oYSxiKXt2YXIgYz1UZihhKS5nZXRSb290Tm9kZSgpO2I9Yj9iLnNwbGl0KC9cXHMvKTpbXTtjPWMuaG9zdCYmYy5ob3N0LmxvY2FsTmFtZTtpZighYyl7dmFyIGQ9YS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKTtpZihkKXtkPWQuc3BsaXQoL1xccy8pO2Zvcih2YXIgZT0wO2U8ZC5sZW5ndGg7ZSsrKWlmKGRbZV09PT1VLmEpe2M9ZFtlKzFdO2JyZWFrfX19YyYmYi5wdXNoKFUuYSxjKTtTfHwoYz1WKGEpKSYmYy5IJiZiLnB1c2goTmcuYSxjLkgpO1NmKGEsYi5qb2luKFwiIFwiKSl9O3IuRmE9ZnVuY3Rpb24oYSl7cmV0dXJuIFYoYSl9O3IuV2E9ZnVuY3Rpb24oYSxiKXthZyhhLGIpfTtyLlphPWZ1bmN0aW9uKGEsYil7YWcoYSxiLCEwKX07ci5WYT1mdW5jdGlvbihhKXtyZXR1cm4gVmcoYSl9O3IuSWE9ZnVuY3Rpb24oYSl7cmV0dXJuIFVnKGEpfTtXLnByb3RvdHlwZS5mbHVzaD1XLnByb3RvdHlwZS5mbHVzaDtXLnByb3RvdHlwZS5wcmVwYXJlVGVtcGxhdGU9Vy5wcm90b3R5cGUucHJlcGFyZVRlbXBsYXRlO1xuVy5wcm90b3R5cGUuc3R5bGVFbGVtZW50PVcucHJvdG90eXBlLnN0eWxlRWxlbWVudDtXLnByb3RvdHlwZS5zdHlsZURvY3VtZW50PVcucHJvdG90eXBlLnN0eWxlRG9jdW1lbnQ7Vy5wcm90b3R5cGUuc3R5bGVTdWJ0cmVlPVcucHJvdG90eXBlLnN0eWxlU3VidHJlZTtXLnByb3RvdHlwZS5nZXRDb21wdXRlZFN0eWxlVmFsdWU9Vy5wcm90b3R5cGUuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlO1cucHJvdG90eXBlLnNldEVsZW1lbnRDbGFzcz1XLnByb3RvdHlwZS5YYTtXLnByb3RvdHlwZS5fc3R5bGVJbmZvRm9yTm9kZT1XLnByb3RvdHlwZS5GYTtXLnByb3RvdHlwZS50cmFuc2Zvcm1DdXN0b21TdHlsZUZvckRvY3VtZW50PVcucHJvdG90eXBlLnZhO1cucHJvdG90eXBlLmdldFN0eWxlQXN0PVcucHJvdG90eXBlLkthO1cucHJvdG90eXBlLnN0eWxlQXN0VG9TdHJpbmc9Vy5wcm90b3R5cGUuWWE7Vy5wcm90b3R5cGUuZmx1c2hDdXN0b21TdHlsZXM9Vy5wcm90b3R5cGUuZmx1c2hDdXN0b21TdHlsZXM7XG5XLnByb3RvdHlwZS5zY29wZU5vZGU9Vy5wcm90b3R5cGUuV2E7Vy5wcm90b3R5cGUudW5zY29wZU5vZGU9Vy5wcm90b3R5cGUuWmE7Vy5wcm90b3R5cGUuc2NvcGVGb3JOb2RlPVcucHJvdG90eXBlLlZhO1cucHJvdG90eXBlLmN1cnJlbnRTY29wZUZvck5vZGU9Vy5wcm90b3R5cGUuSWE7Vy5wcm90b3R5cGUucHJlcGFyZUFkb3B0ZWRDc3NUZXh0PVcucHJvdG90eXBlLlNhO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFcucHJvdG90eXBlLHtuYXRpdmVTaGFkb3c6e2dldDpmdW5jdGlvbigpe3JldHVybiBSfX0sbmF0aXZlQ3NzOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gU319fSk7dmFyIFo9bmV3IFcsbmgsb2g7d2luZG93LlNoYWR5Q1NTJiYobmg9d2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbSxvaD13aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2UpO1xud2luZG93LlNoYWR5Q1NTPXtTY29waW5nU2hpbTpaLHByZXBhcmVUZW1wbGF0ZTpmdW5jdGlvbihhLGIsYyl7Wi5mbHVzaEN1c3RvbVN0eWxlcygpO1oucHJlcGFyZVRlbXBsYXRlKGEsYixjKX0scHJlcGFyZVRlbXBsYXRlRG9tOmZ1bmN0aW9uKGEsYil7Wi5wcmVwYXJlVGVtcGxhdGVEb20oYSxiKX0scHJlcGFyZVRlbXBsYXRlU3R5bGVzOmZ1bmN0aW9uKGEsYixjKXtaLmZsdXNoQ3VzdG9tU3R5bGVzKCk7Wi5wcmVwYXJlVGVtcGxhdGVTdHlsZXMoYSxiLGMpfSxzdHlsZVN1YnRyZWU6ZnVuY3Rpb24oYSxiKXtaLmZsdXNoQ3VzdG9tU3R5bGVzKCk7Wi5zdHlsZVN1YnRyZWUoYSxiKX0sc3R5bGVFbGVtZW50OmZ1bmN0aW9uKGEpe1ouZmx1c2hDdXN0b21TdHlsZXMoKTtaLnN0eWxlRWxlbWVudChhKX0sc3R5bGVEb2N1bWVudDpmdW5jdGlvbihhKXtaLmZsdXNoQ3VzdG9tU3R5bGVzKCk7Wi5zdHlsZURvY3VtZW50KGEpfSxmbHVzaEN1c3RvbVN0eWxlczpmdW5jdGlvbigpe1ouZmx1c2hDdXN0b21TdHlsZXMoKX0sXG5nZXRDb21wdXRlZFN0eWxlVmFsdWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gWi5nZXRDb21wdXRlZFN0eWxlVmFsdWUoYSxiKX0sbmF0aXZlQ3NzOlMsbmF0aXZlU2hhZG93OlIsY3NzQnVpbGQ6QWYsZGlzYWJsZVJ1bnRpbWU6emZ9O25oJiYod2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbT1uaCk7b2gmJih3aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2U9b2gpOyhmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe1wiXCI9PWEmJihmLmNhbGwodGhpcyksdGhpcy5pPSEwKTtyZXR1cm4gYS50b0xvd2VyQ2FzZSgpfWZ1bmN0aW9uIGMoYSl7dmFyIGI9YS5jaGFyQ29kZUF0KDApO3JldHVybiAzMjxiJiYxMjc+YiYmLTE9PVszNCwzNSw2MCw2Miw2Myw5Nl0uaW5kZXhPZihiKT9hOmVuY29kZVVSSUNvbXBvbmVudChhKX1mdW5jdGlvbiBkKGEpe3ZhciBiPWEuY2hhckNvZGVBdCgwKTtyZXR1cm4gMzI8YiYmMTI3PmImJi0xPT1bMzQsMzUsNjAsNjIsOTZdLmluZGV4T2YoYik/YTplbmNvZGVVUklDb21wb25lbnQoYSl9ZnVuY3Rpb24gZShhLGUsZyl7ZnVuY3Rpb24gaChhKXtYLnB1c2goYSl9dmFyIGs9ZXx8XCJzY2hlbWUgc3RhcnRcIix4PTAscD1cIlwiLHY9ITEsUT0hMSxYPVtdO2E6Zm9yKDsodm9pZCAwIT1hW3gtMV18fDA9PXgpJiYhdGhpcy5pOyl7dmFyIG09YVt4XTtzd2l0Y2goayl7Y2FzZSBcInNjaGVtZSBzdGFydFwiOmlmKG0mJnEudGVzdChtKSlwKz1tLnRvTG93ZXJDYXNlKCksXG5rPVwic2NoZW1lXCI7ZWxzZSBpZihlKXtoKFwiSW52YWxpZCBzY2hlbWUuXCIpO2JyZWFrIGF9ZWxzZXtwPVwiXCI7az1cIm5vIHNjaGVtZVwiO2NvbnRpbnVlfWJyZWFrO2Nhc2UgXCJzY2hlbWVcIjppZihtJiZJLnRlc3QobSkpcCs9bS50b0xvd2VyQ2FzZSgpO2Vsc2UgaWYoXCI6XCI9PW0pe3RoaXMuaD1wO3A9XCJcIjtpZihlKWJyZWFrIGE7dm9pZCAwIT09bFt0aGlzLmhdJiYodGhpcy5CPSEwKTtrPVwiZmlsZVwiPT10aGlzLmg/XCJyZWxhdGl2ZVwiOnRoaXMuQiYmZyYmZy5oPT10aGlzLmg/XCJyZWxhdGl2ZSBvciBhdXRob3JpdHlcIjp0aGlzLkI/XCJhdXRob3JpdHkgZmlyc3Qgc2xhc2hcIjpcInNjaGVtZSBkYXRhXCJ9ZWxzZSBpZihlKXt2b2lkIDAhPW0mJmgoXCJDb2RlIHBvaW50IG5vdCBhbGxvd2VkIGluIHNjaGVtZTogXCIrbSk7YnJlYWsgYX1lbHNle3A9XCJcIjt4PTA7az1cIm5vIHNjaGVtZVwiO2NvbnRpbnVlfWJyZWFrO2Nhc2UgXCJzY2hlbWUgZGF0YVwiOlwiP1wiPT1tPyh0aGlzLm89XCI/XCIsaz1cInF1ZXJ5XCIpOlwiI1wiPT1cbm0/KHRoaXMudj1cIiNcIixrPVwiZnJhZ21lbnRcIik6dm9pZCAwIT1tJiZcIlxcdFwiIT1tJiZcIlxcblwiIT1tJiZcIlxcclwiIT1tJiYodGhpcy5pYSs9YyhtKSk7YnJlYWs7Y2FzZSBcIm5vIHNjaGVtZVwiOmlmKGcmJnZvaWQgMCE9PWxbZy5oXSl7az1cInJlbGF0aXZlXCI7Y29udGludWV9ZWxzZSBoKFwiTWlzc2luZyBzY2hlbWUuXCIpLGYuY2FsbCh0aGlzKSx0aGlzLmk9ITA7YnJlYWs7Y2FzZSBcInJlbGF0aXZlIG9yIGF1dGhvcml0eVwiOmlmKFwiL1wiPT1tJiZcIi9cIj09YVt4KzFdKWs9XCJhdXRob3JpdHkgaWdub3JlIHNsYXNoZXNcIjtlbHNle2goXCJFeHBlY3RlZCAvLCBnb3Q6IFwiK20pO2s9XCJyZWxhdGl2ZVwiO2NvbnRpbnVlfWJyZWFrO2Nhc2UgXCJyZWxhdGl2ZVwiOnRoaXMuQj0hMDtcImZpbGVcIiE9dGhpcy5oJiYodGhpcy5oPWcuaCk7aWYodm9pZCAwPT1tKXt0aGlzLmo9Zy5qO3RoaXMubT1nLm07dGhpcy5sPWcubC5zbGljZSgpO3RoaXMubz1nLm87dGhpcy5zPWcuczt0aGlzLmc9Zy5nO2JyZWFrIGF9ZWxzZSBpZihcIi9cIj09XG5tfHxcIlxcXFxcIj09bSlcIlxcXFxcIj09bSYmaChcIlxcXFwgaXMgYW4gaW52YWxpZCBjb2RlIHBvaW50LlwiKSxrPVwicmVsYXRpdmUgc2xhc2hcIjtlbHNlIGlmKFwiP1wiPT1tKXRoaXMuaj1nLmosdGhpcy5tPWcubSx0aGlzLmw9Zy5sLnNsaWNlKCksdGhpcy5vPVwiP1wiLHRoaXMucz1nLnMsdGhpcy5nPWcuZyxrPVwicXVlcnlcIjtlbHNlIGlmKFwiI1wiPT1tKXRoaXMuaj1nLmosdGhpcy5tPWcubSx0aGlzLmw9Zy5sLnNsaWNlKCksdGhpcy5vPWcubyx0aGlzLnY9XCIjXCIsdGhpcy5zPWcucyx0aGlzLmc9Zy5nLGs9XCJmcmFnbWVudFwiO2Vsc2V7az1hW3grMV07dmFyIHk9YVt4KzJdO2lmKFwiZmlsZVwiIT10aGlzLmh8fCFxLnRlc3QobSl8fFwiOlwiIT1rJiZcInxcIiE9a3x8dm9pZCAwIT15JiZcIi9cIiE9eSYmXCJcXFxcXCIhPXkmJlwiP1wiIT15JiZcIiNcIiE9eSl0aGlzLmo9Zy5qLHRoaXMubT1nLm0sdGhpcy5zPWcucyx0aGlzLmc9Zy5nLHRoaXMubD1nLmwuc2xpY2UoKSx0aGlzLmwucG9wKCk7az1cInJlbGF0aXZlIHBhdGhcIjtjb250aW51ZX1icmVhaztcbmNhc2UgXCJyZWxhdGl2ZSBzbGFzaFwiOmlmKFwiL1wiPT1tfHxcIlxcXFxcIj09bSlcIlxcXFxcIj09bSYmaChcIlxcXFwgaXMgYW4gaW52YWxpZCBjb2RlIHBvaW50LlwiKSxrPVwiZmlsZVwiPT10aGlzLmg/XCJmaWxlIGhvc3RcIjpcImF1dGhvcml0eSBpZ25vcmUgc2xhc2hlc1wiO2Vsc2V7XCJmaWxlXCIhPXRoaXMuaCYmKHRoaXMuaj1nLmosdGhpcy5tPWcubSx0aGlzLnM9Zy5zLHRoaXMuZz1nLmcpO2s9XCJyZWxhdGl2ZSBwYXRoXCI7Y29udGludWV9YnJlYWs7Y2FzZSBcImF1dGhvcml0eSBmaXJzdCBzbGFzaFwiOmlmKFwiL1wiPT1tKWs9XCJhdXRob3JpdHkgc2Vjb25kIHNsYXNoXCI7ZWxzZXtoKFwiRXhwZWN0ZWQgJy8nLCBnb3Q6IFwiK20pO2s9XCJhdXRob3JpdHkgaWdub3JlIHNsYXNoZXNcIjtjb250aW51ZX1icmVhaztjYXNlIFwiYXV0aG9yaXR5IHNlY29uZCBzbGFzaFwiOms9XCJhdXRob3JpdHkgaWdub3JlIHNsYXNoZXNcIjtpZihcIi9cIiE9bSl7aChcIkV4cGVjdGVkICcvJywgZ290OiBcIittKTtjb250aW51ZX1icmVhaztjYXNlIFwiYXV0aG9yaXR5IGlnbm9yZSBzbGFzaGVzXCI6aWYoXCIvXCIhPVxubSYmXCJcXFxcXCIhPW0pe2s9XCJhdXRob3JpdHlcIjtjb250aW51ZX1lbHNlIGgoXCJFeHBlY3RlZCBhdXRob3JpdHksIGdvdDogXCIrbSk7YnJlYWs7Y2FzZSBcImF1dGhvcml0eVwiOmlmKFwiQFwiPT1tKXt2JiYoaChcIkAgYWxyZWFkeSBzZWVuLlwiKSxwKz1cIiU0MFwiKTt2PSEwO2ZvcihtPTA7bTxwLmxlbmd0aDttKyspeT1wW21dLFwiXFx0XCI9PXl8fFwiXFxuXCI9PXl8fFwiXFxyXCI9PXk/aChcIkludmFsaWQgd2hpdGVzcGFjZSBpbiBhdXRob3JpdHkuXCIpOlwiOlwiPT15JiZudWxsPT09dGhpcy5nP3RoaXMuZz1cIlwiOih5PWMoeSksbnVsbCE9PXRoaXMuZz90aGlzLmcrPXk6dGhpcy5zKz15KTtwPVwiXCJ9ZWxzZSBpZih2b2lkIDA9PW18fFwiL1wiPT1tfHxcIlxcXFxcIj09bXx8XCI/XCI9PW18fFwiI1wiPT1tKXt4LT1wLmxlbmd0aDtwPVwiXCI7az1cImhvc3RcIjtjb250aW51ZX1lbHNlIHArPW07YnJlYWs7Y2FzZSBcImZpbGUgaG9zdFwiOmlmKHZvaWQgMD09bXx8XCIvXCI9PW18fFwiXFxcXFwiPT1tfHxcIj9cIj09bXx8XCIjXCI9PW0pezIhPXAubGVuZ3RofHxcbiFxLnRlc3QocFswXSl8fFwiOlwiIT1wWzFdJiZcInxcIiE9cFsxXT8oMCE9cC5sZW5ndGgmJih0aGlzLmo9Yi5jYWxsKHRoaXMscCkscD1cIlwiKSxrPVwicmVsYXRpdmUgcGF0aCBzdGFydFwiKTprPVwicmVsYXRpdmUgcGF0aFwiO2NvbnRpbnVlfWVsc2VcIlxcdFwiPT1tfHxcIlxcblwiPT1tfHxcIlxcclwiPT1tP2goXCJJbnZhbGlkIHdoaXRlc3BhY2UgaW4gZmlsZSBob3N0LlwiKTpwKz1tO2JyZWFrO2Nhc2UgXCJob3N0XCI6Y2FzZSBcImhvc3RuYW1lXCI6aWYoXCI6XCIhPW18fFEpaWYodm9pZCAwPT1tfHxcIi9cIj09bXx8XCJcXFxcXCI9PW18fFwiP1wiPT1tfHxcIiNcIj09bSl7dGhpcy5qPWIuY2FsbCh0aGlzLHApO3A9XCJcIjtrPVwicmVsYXRpdmUgcGF0aCBzdGFydFwiO2lmKGUpYnJlYWsgYTtjb250aW51ZX1lbHNlXCJcXHRcIiE9bSYmXCJcXG5cIiE9bSYmXCJcXHJcIiE9bT8oXCJbXCI9PW0/UT0hMDpcIl1cIj09bSYmKFE9ITEpLHArPW0pOmgoXCJJbnZhbGlkIGNvZGUgcG9pbnQgaW4gaG9zdC9ob3N0bmFtZTogXCIrbSk7ZWxzZSBpZih0aGlzLmo9Yi5jYWxsKHRoaXMsXG5wKSxwPVwiXCIsaz1cInBvcnRcIixcImhvc3RuYW1lXCI9PWUpYnJlYWsgYTticmVhaztjYXNlIFwicG9ydFwiOmlmKC9bMC05XS8udGVzdChtKSlwKz1tO2Vsc2UgaWYodm9pZCAwPT1tfHxcIi9cIj09bXx8XCJcXFxcXCI9PW18fFwiP1wiPT1tfHxcIiNcIj09bXx8ZSl7XCJcIiE9cCYmKHA9cGFyc2VJbnQocCwxMCkscCE9bFt0aGlzLmhdJiYodGhpcy5tPXArXCJcIikscD1cIlwiKTtpZihlKWJyZWFrIGE7az1cInJlbGF0aXZlIHBhdGggc3RhcnRcIjtjb250aW51ZX1lbHNlXCJcXHRcIj09bXx8XCJcXG5cIj09bXx8XCJcXHJcIj09bT9oKFwiSW52YWxpZCBjb2RlIHBvaW50IGluIHBvcnQ6IFwiK20pOihmLmNhbGwodGhpcyksdGhpcy5pPSEwKTticmVhaztjYXNlIFwicmVsYXRpdmUgcGF0aCBzdGFydFwiOlwiXFxcXFwiPT1tJiZoKFwiJ1xcXFwnIG5vdCBhbGxvd2VkIGluIHBhdGguXCIpO2s9XCJyZWxhdGl2ZSBwYXRoXCI7aWYoXCIvXCIhPW0mJlwiXFxcXFwiIT1tKWNvbnRpbnVlO2JyZWFrO2Nhc2UgXCJyZWxhdGl2ZSBwYXRoXCI6aWYodm9pZCAwIT1tJiZcIi9cIiE9bSYmXCJcXFxcXCIhPVxubSYmKGV8fFwiP1wiIT1tJiZcIiNcIiE9bSkpXCJcXHRcIiE9bSYmXCJcXG5cIiE9bSYmXCJcXHJcIiE9bSYmKHArPWMobSkpO2Vsc2V7XCJcXFxcXCI9PW0mJmgoXCJcXFxcIG5vdCBhbGxvd2VkIGluIHJlbGF0aXZlIHBhdGguXCIpO2lmKHk9bltwLnRvTG93ZXJDYXNlKCldKXA9eTtcIi4uXCI9PXA/KHRoaXMubC5wb3AoKSxcIi9cIiE9bSYmXCJcXFxcXCIhPW0mJnRoaXMubC5wdXNoKFwiXCIpKTpcIi5cIj09cCYmXCIvXCIhPW0mJlwiXFxcXFwiIT1tP3RoaXMubC5wdXNoKFwiXCIpOlwiLlwiIT1wJiYoXCJmaWxlXCI9PXRoaXMuaCYmMD09dGhpcy5sLmxlbmd0aCYmMj09cC5sZW5ndGgmJnEudGVzdChwWzBdKSYmXCJ8XCI9PXBbMV0mJihwPXBbMF0rXCI6XCIpLHRoaXMubC5wdXNoKHApKTtwPVwiXCI7XCI/XCI9PW0/KHRoaXMubz1cIj9cIixrPVwicXVlcnlcIik6XCIjXCI9PW0mJih0aGlzLnY9XCIjXCIsaz1cImZyYWdtZW50XCIpfWJyZWFrO2Nhc2UgXCJxdWVyeVwiOmV8fFwiI1wiIT1tP3ZvaWQgMCE9bSYmXCJcXHRcIiE9bSYmXCJcXG5cIiE9bSYmXCJcXHJcIiE9bSYmKHRoaXMubys9ZChtKSk6KHRoaXMudj1cblwiI1wiLGs9XCJmcmFnbWVudFwiKTticmVhaztjYXNlIFwiZnJhZ21lbnRcIjp2b2lkIDAhPW0mJlwiXFx0XCIhPW0mJlwiXFxuXCIhPW0mJlwiXFxyXCIhPW0mJih0aGlzLnYrPW0pfXgrK319ZnVuY3Rpb24gZigpe3RoaXMucz10aGlzLmlhPXRoaXMuaD1cIlwiO3RoaXMuZz1udWxsO3RoaXMubT10aGlzLmo9XCJcIjt0aGlzLmw9W107dGhpcy52PXRoaXMubz1cIlwiO3RoaXMuQj10aGlzLmk9ITF9ZnVuY3Rpb24gZyhhLGIpe3ZvaWQgMD09PWJ8fGIgaW5zdGFuY2VvZiBnfHwoYj1uZXcgZyhTdHJpbmcoYikpKTt0aGlzLmE9YTtmLmNhbGwodGhpcyk7YT10aGlzLmEucmVwbGFjZSgvXlsgXFx0XFxyXFxuXFxmXSt8WyBcXHRcXHJcXG5cXGZdKyQvZyxcIlwiKTtlLmNhbGwodGhpcyxhLG51bGwsYil9dmFyIGg9ITE7dHJ5e3ZhciBrPW5ldyBVUkwoXCJiXCIsXCJodHRwOi8vYVwiKTtrLnBhdGhuYW1lPVwiYyUyMGRcIjtoPVwiaHR0cDovL2EvYyUyMGRcIj09PWsuaHJlZn1jYXRjaCh4KXt9aWYoIWgpe3ZhciBsPU9iamVjdC5jcmVhdGUobnVsbCk7bC5mdHA9XG4yMTtsLmZpbGU9MDtsLmdvcGhlcj03MDtsLmh0dHA9ODA7bC5odHRwcz00NDM7bC53cz04MDtsLndzcz00NDM7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtuW1wiJTJlXCJdPVwiLlwiO25bXCIuJTJlXCJdPVwiLi5cIjtuW1wiJTJlLlwiXT1cIi4uXCI7bltcIiUyZSUyZVwiXT1cIi4uXCI7dmFyIHE9L1thLXpBLVpdLyxJPS9bYS16QS1aMC05XFwrXFwtXFwuXS87Zy5wcm90b3R5cGU9e3RvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaHJlZn0sZ2V0IGhyZWYoKXtpZih0aGlzLmkpcmV0dXJuIHRoaXMuYTt2YXIgYT1cIlwiO2lmKFwiXCIhPXRoaXMuc3x8bnVsbCE9dGhpcy5nKWE9dGhpcy5zKyhudWxsIT10aGlzLmc/XCI6XCIrdGhpcy5nOlwiXCIpK1wiQFwiO3JldHVybiB0aGlzLnByb3RvY29sKyh0aGlzLkI/XCIvL1wiK2ErdGhpcy5ob3N0OlwiXCIpK3RoaXMucGF0aG5hbWUrdGhpcy5vK3RoaXMudn0sc2V0IGhyZWYoYSl7Zi5jYWxsKHRoaXMpO2UuY2FsbCh0aGlzLGEpfSxnZXQgcHJvdG9jb2woKXtyZXR1cm4gdGhpcy5oK1xuXCI6XCJ9LHNldCBwcm90b2NvbChhKXt0aGlzLml8fGUuY2FsbCh0aGlzLGErXCI6XCIsXCJzY2hlbWUgc3RhcnRcIil9LGdldCBob3N0KCl7cmV0dXJuIHRoaXMuaT9cIlwiOnRoaXMubT90aGlzLmorXCI6XCIrdGhpcy5tOnRoaXMuan0sc2V0IGhvc3QoYSl7IXRoaXMuaSYmdGhpcy5CJiZlLmNhbGwodGhpcyxhLFwiaG9zdFwiKX0sZ2V0IGhvc3RuYW1lKCl7cmV0dXJuIHRoaXMuan0sc2V0IGhvc3RuYW1lKGEpeyF0aGlzLmkmJnRoaXMuQiYmZS5jYWxsKHRoaXMsYSxcImhvc3RuYW1lXCIpfSxnZXQgcG9ydCgpe3JldHVybiB0aGlzLm19LHNldCBwb3J0KGEpeyF0aGlzLmkmJnRoaXMuQiYmZS5jYWxsKHRoaXMsYSxcInBvcnRcIil9LGdldCBwYXRobmFtZSgpe3JldHVybiB0aGlzLmk/XCJcIjp0aGlzLkI/XCIvXCIrdGhpcy5sLmpvaW4oXCIvXCIpOnRoaXMuaWF9LHNldCBwYXRobmFtZShhKXshdGhpcy5pJiZ0aGlzLkImJih0aGlzLmw9W10sZS5jYWxsKHRoaXMsYSxcInJlbGF0aXZlIHBhdGggc3RhcnRcIikpfSxnZXQgc2VhcmNoKCl7cmV0dXJuIHRoaXMuaXx8XG4hdGhpcy5vfHxcIj9cIj09dGhpcy5vP1wiXCI6dGhpcy5vfSxzZXQgc2VhcmNoKGEpeyF0aGlzLmkmJnRoaXMuQiYmKHRoaXMubz1cIj9cIixcIj9cIj09YVswXSYmKGE9YS5zbGljZSgxKSksZS5jYWxsKHRoaXMsYSxcInF1ZXJ5XCIpKX0sZ2V0IGhhc2goKXtyZXR1cm4gdGhpcy5pfHwhdGhpcy52fHxcIiNcIj09dGhpcy52P1wiXCI6dGhpcy52fSxzZXQgaGFzaChhKXt0aGlzLml8fChhPyh0aGlzLnY9XCIjXCIsXCIjXCI9PWFbMF0mJihhPWEuc2xpY2UoMSkpLGUuY2FsbCh0aGlzLGEsXCJmcmFnbWVudFwiKSk6dGhpcy52PVwiXCIpfSxnZXQgb3JpZ2luKCl7dmFyIGE7aWYodGhpcy5pfHwhdGhpcy5oKXJldHVyblwiXCI7c3dpdGNoKHRoaXMuaCl7Y2FzZSBcImRhdGFcIjpjYXNlIFwiZmlsZVwiOmNhc2UgXCJqYXZhc2NyaXB0XCI6Y2FzZSBcIm1haWx0b1wiOnJldHVyblwibnVsbFwifXJldHVybihhPXRoaXMuaG9zdCk/dGhpcy5oK1wiOi8vXCIrYTpcIlwifX07dmFyIHY9YS5VUkw7diYmKGcuY3JlYXRlT2JqZWN0VVJMPWZ1bmN0aW9uKGEpe3JldHVybiB2LmNyZWF0ZU9iamVjdFVSTC5hcHBseSh2LFxuYXJndW1lbnRzKX0sZy5yZXZva2VPYmplY3RVUkw9ZnVuY3Rpb24oYSl7di5yZXZva2VPYmplY3RVUkwoYSl9KTthLlVSTD1nfX0pKHdpbmRvdyk7T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihOb2RlLnByb3RvdHlwZSxcImJhc2VVUklcIil8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlLnByb3RvdHlwZSxcImJhc2VVUklcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9KHRoaXMub3duZXJEb2N1bWVudHx8dGhpcykucXVlcnlTZWxlY3RvcihcImJhc2VbaHJlZl1cIik7cmV0dXJuIGEmJmEuaHJlZnx8d2luZG93LmxvY2F0aW9uLmhyZWZ9LGNvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwfSk7dmFyIHBoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtwaC50ZXh0Q29udGVudD1cImJvZHkge3RyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbiAwLjJzOyB9IFxcbmJvZHlbdW5yZXNvbHZlZF0ge29wYWNpdHk6IDA7IGRpc3BsYXk6IGJsb2NrOyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7IH0gXFxuXCI7dmFyIHFoPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO3FoLmluc2VydEJlZm9yZShwaCxxaC5maXJzdENoaWxkKTt2YXIgcmg9d2luZG93LmN1c3RvbUVsZW1lbnRzLHNoPSExLHRoPW51bGw7cmgucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayYmcmgucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayhmdW5jdGlvbihhKXt0aD1hO3NoJiZhKCl9KTtmdW5jdGlvbiB1aCgpe3dpbmRvdy5IVE1MVGVtcGxhdGVFbGVtZW50LmJvb3RzdHJhcCYmd2luZG93LkhUTUxUZW1wbGF0ZUVsZW1lbnQuYm9vdHN0cmFwKHdpbmRvdy5kb2N1bWVudCk7dGgmJnRoKCk7c2g9ITA7d2luZG93LldlYkNvbXBvbmVudHMucmVhZHk9ITA7ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJXZWJDb21wb25lbnRzUmVhZHlcIix7YnViYmxlczohMH0pKX1cblwiY29tcGxldGVcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGU/KHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLHVoKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLHVoKTt1aCgpfSkpOnVoKCk7fSkuY2FsbCh0aGlzKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2ViY29tcG9uZW50cy1idW5kbGUuanMubWFwXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxpdmUtYnV0dG9uLCBsaXZlLXNsaWRlciwgbGl2ZS1kaWFsLCBsaXZlLXRvZ2dsZSwgbGl2ZS10ZXh0LCBsaXZlLW51bWJveCwgbGl2ZS10YWIsIGxpdmUtbWV0ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsInZhciBzY29wZSA9ICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbCkgfHxcbiAgICAgICAgICAgICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmKSB8fFxuICAgICAgICAgICAgd2luZG93O1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgc2NvcGUsIGFyZ3VtZW50cyksIGNsZWFySW50ZXJ2YWwpO1xufTtcbmV4cG9ydHMuY2xlYXJUaW1lb3V0ID1cbmV4cG9ydHMuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQpIHtcbiAgICB0aW1lb3V0LmNsb3NlKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIFRpbWVvdXQoaWQsIGNsZWFyRm4pIHtcbiAgdGhpcy5faWQgPSBpZDtcbiAgdGhpcy5fY2xlYXJGbiA9IGNsZWFyRm47XG59XG5UaW1lb3V0LnByb3RvdHlwZS51bnJlZiA9IFRpbWVvdXQucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uKCkge307XG5UaW1lb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9jbGVhckZuLmNhbGwoc2NvcGUsIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuLy8gT24gc29tZSBleG90aWMgZW52aXJvbm1lbnRzLCBpdCdzIG5vdCBjbGVhciB3aGljaCBvYmplY3QgYHNldGltbWVkaWF0ZWAgd2FzXG4vLyBhYmxlIHRvIGluc3RhbGwgb250by4gIFNlYXJjaCBlYWNoIHBvc3NpYmlsaXR5IGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZVxuLy8gYHNldGltbWVkaWF0ZWAgbGlicmFyeS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuc2V0SW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLnNldEltbWVkaWF0ZSk7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuY2xlYXJJbW1lZGlhdGUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQmFzZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0Jhc2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQmFzZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5pbXBvcnQgXCIuL0Jhc2Uuc2Nzc1wiO1xuaW1wb3J0IHsgdG9NSURJIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IExpdmVDb21wb25lbnRDaGFuZ2VFdmVudCB9IGZyb20gXCIuL0NoYW5nZUV2ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBMaXZlQmFzZUNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICByb290OiBTaGFkb3dSb290O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucm9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJvcGVuXCIgfSk7XG4gICAgICAgIHRoaXMucm9vdC5pbm5lckhUTUwgPSB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVDb21wb25lbnQ8VCBleHRlbmRzIExpdmVQcm9wcz4gZXh0ZW5kcyBMaXZlQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BzOiBMaXZlUHJvcHMgPSB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICBoZWlnaHQ6IDE1LFxuICAgICAgICBzaG9ydG5hbWU6IFwiXCIsXG4gICAgICAgIGxvbmduYW1lOiBcIlwiLFxuICAgICAgICBvcmRlcjogMCxcbiAgICAgICAgbGlua25hbWVzOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJmbG9hdFwiLFxuICAgICAgICBtbWluOiAwLFxuICAgICAgICBtbWF4OiAxLFxuICAgICAgICBlbnVtOiBbXSxcbiAgICAgICAgZW51bV9pY29uczogW10sXG4gICAgICAgIG1vZG1vZGU6IFwibm9uZVwiLFxuICAgICAgICBpbml0aWFsX2VuYWJsZTogZmFsc2UsXG4gICAgICAgIGluaXRpYWw6IFswXSxcbiAgICAgICAgdW5pdHN0eWxlOiBcImZsb2F0XCIsXG4gICAgICAgIHVuaXRzOiBcIlwiLFxuICAgICAgICBleHBvbmVudDogMSxcbiAgICAgICAgc3RlcDogMCxcbiAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgIHNwZWVkbGltOiA1LFxuICAgICAgICBkZWZlcjogZmFsc2UsXG4gICAgICAgIGludmlzaWJsZTogXCJhdXRvbWF0ZWRcIixcbiAgICAgICAgbWFwcGFibGU6IHRydWVcbiAgICB9XG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBpc0Nvbm5lY3RlZFBvbHlmaWxsOiBib29sZWFuO1xuICAgIHByb3BzOiBUO1xuXG4gICAgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVLZXlVcCA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVUb3VjaFN0YXJ0ID0gKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNhbnZhcy5mb2N1cygpO1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBwcmV2WCA9IGUudG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgbGV0IHByZXZZID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICBjb25zdCBmcm9tWCA9IHByZXZYIC0gcmVjdC5sZWZ0O1xuICAgICAgICBjb25zdCBmcm9tWSA9IHByZXZZIC0gcmVjdC50b3A7XG4gICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlckRvd24oeyB4OiBmcm9tWCwgeTogZnJvbVksIG9yaWdpbmFsRXZlbnQ6IGUgfSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZVRvdWNoTW92ZSA9IChlOiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBwYWdlWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICBjb25zdCBwYWdlWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICBjb25zdCBtb3ZlbWVudFggPSBwYWdlWCAtIHByZXZYO1xuICAgICAgICAgICAgY29uc3QgbW92ZW1lbnRZID0gcGFnZVkgLSBwcmV2WTtcbiAgICAgICAgICAgIHByZXZYID0gcGFnZVg7XG4gICAgICAgICAgICBwcmV2WSA9IHBhZ2VZO1xuICAgICAgICAgICAgY29uc3QgeCA9IHBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IHBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJEcmFnKHsgcHJldlZhbHVlLCB4LCB5LCBmcm9tWCwgZnJvbVksIG1vdmVtZW50WCwgbW92ZW1lbnRZLCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVUb3VjaEVuZCA9IChlOiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJVcCh7IHgsIHksIG9yaWdpbmFsRXZlbnQ6IGUgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGhhbmRsZVRvdWNoTW92ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgaGFuZGxlVG91Y2hFbmQpO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGhhbmRsZVRvdWNoTW92ZSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGhhbmRsZVRvdWNoRW5kLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgIH07XG4gICAgaGFuZGxlV2hlZWwgPSAoZTogV2hlZWxFdmVudCkgPT4ge307XG4gICAgaGFuZGxlQ2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlTW91c2VEb3duID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNhbnZhcy5mb2N1cygpO1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGZyb21YID0gZS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgY29uc3QgZnJvbVkgPSBlLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlckRvd24oeyB4OiBmcm9tWCwgeTogZnJvbVksIG9yaWdpbmFsRXZlbnQ6IGUgfSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBlLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJEcmFnKHsgcHJldlZhbHVlLCB4LCB5LCBmcm9tWCwgZnJvbVksIG1vdmVtZW50WDogZS5tb3ZlbWVudFgsIG1vdmVtZW50WTogZS5tb3ZlbWVudFksIG9yaWdpbmFsRXZlbnQ6IGUgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGUucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyVXAoeyB4LCB5LCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG4gICAgfTtcbiAgICBoYW5kbGVNb3VzZU92ZXIgPSAoZTogTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlTW91c2VPdXQgPSAoZTogTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlQ29udGV4dE1lbnUgPSAoZTogTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoZTogUG9pbnRlckRvd25FdmVudCkgPT4ge307XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlckRyYWdFdmVudCkgPT4ge307XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKGU6IFBvaW50ZXJVcEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVGb2N1c0luID0gKGU6IEZvY3VzRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5mb2N1cyA9IHRydWU7XG4gICAgICAgIHRoaXMucGFpbnQoKTtcbiAgICB9XG4gICAgaGFuZGxlRm9jdXNPdXQgPSAoZTogRm9jdXNFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmZvY3VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFpbnQoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmhhbmRsZUtleVVwKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHRoaXMuaGFuZGxlV2hlZWwpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuaGFuZGxlTW91c2VEb3duLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgdGhpcy5oYW5kbGVNb3VzZU92ZXIpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCB0aGlzLmhhbmRsZU1vdXNlT3V0KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCB0aGlzLmhhbmRsZUZvY3VzSW4pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCB0aGlzLmhhbmRsZUZvY3VzT3V0KTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLnJvb3QuY2hpbGRyZW5bMF0gYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnByb3BzID0gKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIExpdmVDb21wb25lbnQpLnByb3BzIGFzIFQ7XG4gICAgfVxuICAgIGdldCBkaXNwbGF5VmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIHR5cGUsIHVuaXRzdHlsZSwgdW5pdHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHRoaXMucHJvcHMuZW51bVt2YWx1ZV07XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiaW50XCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKDApO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcImZsb2F0XCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcInRpbWVcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIG1zXCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiaGVydHpcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIEh6XCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiZGVjaWJlbFwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgZEJcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCIlXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiAlXCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwicGFuXCIpIHJldHVybiB2YWx1ZSA9PT0gMCA/IFwiQ1wiIDogKHR5cGUgPT09IFwiaW50XCIgPyBNYXRoLmFicyh2YWx1ZSkgOiBNYXRoLmFicyh2YWx1ZSkudG9GaXhlZCgyKSkgKyAodmFsdWUgPCAwID8gXCIgTFwiIDogXCIgUlwiKTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJzZW1pdG9uZXNcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIHN0XCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwibWlkaVwiKSByZXR1cm4gdG9NSURJKHZhbHVlKTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJjdXN0b21cIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIFwiICsgdW5pdHM7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwibmF0aXZlXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMik7XG4gICAgICAgIHJldHVybiBcIk4vQVwiO1xuICAgIH1cbiAgICBmZXRjaEF0dHJpYnV0ZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvb3QuaG9zdC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5yb290Lmhvc3QuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGF0dHI7XG4gICAgICAgICAgICAodGhpcy5wcm9wcyBhcyBhbnkpW25hbWVdID0gdmFsdWUubWF0Y2goL15bKy1dPyhcXGQqXFwuKT9cXGQrJC8pID8gK3ZhbHVlIDogdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGtleTogc3RyaW5nLCBvbGRWYWx1ZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZFBvbHlmaWxsKSByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgfHwgdmFsdWUgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRQYXJhbVZhbHVlKGtleSwgdmFsdWUubWF0Y2goL15bKy1dPyhcXGQqXFwuKT9cXGQrJC8pID8gK3ZhbHVlIDogdmFsdWUpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5mZXRjaEF0dHJpYnV0ZSgpO1xuICAgICAgICB0aGlzLnBhaW50KCk7XG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWRQb2x5ZmlsbCA9IHRydWU7XG4gICAgfVxuICAgIHNldFBhcmFtVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIHRoaXMucHJvcHMpKSByZXR1cm47XG4gICAgICAgICh0aGlzLnByb3BzIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuICAgICAgICBpZiAoa2V5ID09PSBcInZhbHVlXCIpIHRoaXMuY2hhbmdlKCk7XG4gICAgICAgIHRoaXMucGFpbnQoKTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBMaXZlQ29tcG9uZW50Q2hhbmdlRXZlbnQoXCJjaGFuZ2VcIiwgeyBkZXRhaWw6IHsgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsIGRpc3BsYXlWYWx1ZTogdGhpcy5kaXNwbGF5VmFsdWUgfSB9KSk7XG4gICAgfVxuICAgIHBhaW50KCkge31cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAnPGNhbnZhcyB0YWJpbmRleD1cIjFcIiBzdHlsZT1cIm91dGxpbmU6IG5vbmU7XCI+PC9jYW52YXM+JztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZUJ1dHRvblByb3BzIGV4dGVuZHMgTGl2ZVByb3BzIHtcbiAgICBhY3RpdmViZ2NvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZlYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYmdjb2xvcjogc3RyaW5nO1xuICAgIGJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlQnV0dG9uIGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlQnV0dG9uUHJvcHM+IHtcbiAgICBzdGF0aWMgZ2V0IHByb3BzKCk6IExpdmVCdXR0b25Qcm9wcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wcm9wcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLmJ1dHRvblwiLFxuICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgaGVpZ2h0OiAxNSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yOiBcInJnYmEoMTA5LCAyMTUsIDI1NSwgMSlcIixcbiAgICAgICAgICAgIGJnY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgYmdvbmNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgZm9jdXMsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMC41O1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcblxuICAgICAgICBjb25zdCBidXR0b25CZ0NvbG9yID0gYWN0aXZlID8gKHZhbHVlID8gYWN0aXZlYmdvbmNvbG9yIDogYWN0aXZlYmdjb2xvcikgOiAodmFsdWUgPyBiZ29uY29sb3IgOiBiZ2NvbG9yKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQm9yZGVyQ29sb3IgPSBmb2N1cyA/IGZvY3VzYm9yZGVyY29sb3IgOiBib3JkZXJjb2xvcjtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uQmdDb2xvcjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZWxsaXBzZSh3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41LCB3aWR0aCAqIDAuNSAtIDIgKiBib3JkZXJXaWR0aCwgaGVpZ2h0ICogMC41IC0gMiAqIGJvcmRlcldpZHRoLCAwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGJ1dHRvbkJvcmRlckNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmICF0aGlzLl9pblRvdWNoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0VmFsdWUoMCksIDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgICAgICB0aGlzLnNldFZhbHVlKDEpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSgwKTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBMaXZlQ29tcG9uZW50Q2hhbmdlRXZlbnQgZXh0ZW5kcyBDdXN0b21FdmVudDx7IHZhbHVlOiBudW1iZXI7IGRpc3BsYXlWYWx1ZTogc3RyaW5nIH0+IHt9XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuaW1wb3J0IHsgdG9SYWQsIHJvdW5kZWRSZWN0LCBmaWxsUm91bmRlZFJlY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5pbnRlcmZhY2UgTGl2ZURpYWxQcm9wcyBleHRlbmRzIExpdmVQcm9wcyB7XG4gICAgZm9udG5hbWU6IHN0cmluZztcbiAgICBmb250c2l6ZTogbnVtYmVyO1xuICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBzaG93bmFtZTogYm9vbGVhbjtcbiAgICBzaG93bnVtYmVyOiBib29sZWFuO1xuICAgIGFwcGVhcmFuY2U6IFwidmVydGljYWxcIiB8IFwidGlueVwiIHwgXCJwYW5lbFwiO1xuICAgIHRyaWFuZ2xlOiBib29sZWFuO1xuICAgIGJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZWRpYWxjb2xvcjogc3RyaW5nO1xuICAgIGRpYWxjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZW5lZWRsZWNvbG9yOiBzdHJpbmc7XG4gICAgbmVlZGxlY29sb3I6IHN0cmluZztcbiAgICBwYW5lbGNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dGNvbG9yOiBzdHJpbmc7XG4gICAgdHJpYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICB0cmljb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlRGlhbCBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZURpYWxQcm9wcz4ge1xuICAgIHN0YXRpYyBnZXQgcHJvcHMoKTogTGl2ZURpYWxQcm9wcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wcm9wcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLmRpYWxcIixcbiAgICAgICAgICAgIHdpZHRoOiA0NSxcbiAgICAgICAgICAgIGhlaWdodDogNDUsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEyLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgYXBwZWFyYW5jZTogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgdHJpYW5nbGU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd25hbWU6IHRydWUsXG4gICAgICAgICAgICBzaG93bnVtYmVyOiB0cnVlLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmVkaWFsY29sb3I6IFwicmdiYSgxMDksIDIxNSwgMjU1LCAxKVwiLFxuICAgICAgICAgICAgZGlhbGNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZW5lZWRsZWNvbG9yOiBcInJnYmEoNDAsIDQwLCA0MCwgMSlcIixcbiAgICAgICAgICAgIG5lZWRsZWNvbG9yOiBcInJnYmEoMTA1LCAxMDUsIDEwNSwgMSlcIixcbiAgICAgICAgICAgIHBhbmVsY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRyaWJvcmRlcmNvbG9yOiBcInJnYmEoNTAsIDUwLCA1MCwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yOiBcInJnYmEoNDAsIDQwLCA0MCwgMSlcIixcbiAgICAgICAgICAgIG1taW46IDAsXG4gICAgICAgICAgICBtbWF4OiAxMjcsXG4gICAgICAgICAgICB0eXBlOiBcImludFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG4gICAgaW50ZXJhY3Rpb25SZWN0OiBudW1iZXJbXSA9IFswLCAwLCAwLCAwXTtcblxuICAgIGdldCB0cnVlU3RlcHMoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgc3RlcHMsIHN0ZXAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGZ1bGwgPSAxMDA7XG4gICAgICAgIGNvbnN0IG1heFN0ZXBzID0gdHlwZSA9PT0gXCJlbnVtXCIgPyB0aGlzLnByb3BzLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IG1tYXggLSBtbWluIDogZnVsbDtcbiAgICAgICAgaWYgKHN0ZXApIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHRoaXMucHJvcHMuZW51bS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIChNYXRoLnJvdW5kKHN0ZXApIHx8IDEpKSwgbWF4U3RlcHMpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIHN0ZXApLCBtYXhTdGVwcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ZXBzKSByZXR1cm4gTWF0aC5taW4oc3RlcHMsIG1heFN0ZXBzKTtcbiAgICAgICAgcmV0dXJuIG1heFN0ZXBzO1xuICAgIH1cbiAgICBnZXQgZGlzdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IHZhbHVlIC8gdGhpcy5wcm9wcy5lbnVtLmxlbmd0aCA6ICh2YWx1ZSAtIG1taW4pIC8gKG1tYXggLSBtbWluKTtcbiAgICB9XG4gICAgZ2V0IHN0ZXBSYW5nZSgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCBzdGVwIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBmdWxsID0gMTAwO1xuICAgICAgICBpZiAoc3RlcCkgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gZnVsbCAvIHRoaXMucHJvcHMuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gKE1hdGgucm91bmQoc3RlcCkgfHwgMSkgLyAobW1heCAtIG1taW4pICogZnVsbCA6IHN0ZXAgLyAobW1heCAtIG1taW4pICogZnVsbDtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIHJldHVybiBmdWxsIC8gdHJ1ZVN0ZXBzO1xuICAgIH1cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIGFwcGVhcmFuY2UsXG4gICAgICAgICAgICB0cmlhbmdsZSxcbiAgICAgICAgICAgIHNob3duYW1lLFxuICAgICAgICAgICAgc2hvd251bWJlcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHBhbmVsY29sb3IsXG4gICAgICAgICAgICBhY3RpdmVuZWVkbGVjb2xvcixcbiAgICAgICAgICAgIG5lZWRsZWNvbG9yLFxuICAgICAgICAgICAgYWN0aXZlZGlhbGNvbG9yLFxuICAgICAgICAgICAgZGlhbGNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0cmljb2xvcixcbiAgICAgICAgICAgIHNob3J0bmFtZVxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG5cbiAgICAgICAgY29uc3QgdHJpYW5nbGVIZWlnaHQgPSA0O1xuICAgICAgICBjb25zdCB0cmlhbmdsZUxpbmVXaWR0aCA9IDAuNjtcblxuICAgICAgICBsZXQgc3RhcnQ6IG51bWJlcjtcbiAgICAgICAgbGV0IGVuZDogbnVtYmVyO1xuICAgICAgICBsZXQgdmFsUG9zOiBudW1iZXI7XG4gICAgICAgIGxldCBkaWFsSGVpZ2h0OiBudW1iZXI7XG5cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICBkaWFsSGVpZ2h0ID0gMTg7XG4gICAgICAgICAgICBzdGFydCA9IC0zICogTWF0aC5QSSAqIDAuNTtcbiAgICAgICAgICAgIGVuZCA9IDA7XG4gICAgICAgICAgICB2YWxQb3MgPSBzdGFydCArIHRvUmFkKHRoaXMuZGlzdGFuY2UgKiAyNzApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlhbEhlaWdodCA9IDI1O1xuICAgICAgICAgICAgc3RhcnQgPSBNYXRoLlBJIC0gMyAqIE1hdGguUEkgLyA4O1xuICAgICAgICAgICAgZW5kID0gMiAqIE1hdGguUEkgKyAzICogTWF0aC5QSSAvIDg7XG4gICAgICAgICAgICB2YWxQb3MgPSBzdGFydCArIHRvUmFkKHRoaXMuZGlzdGFuY2UgKiAzMTUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpYWxSYWRpdXMgPSBkaWFsSGVpZ2h0ICogMC41O1xuXG4gICAgICAgIGxldCBkaWFsQ2VudGVyWCA9IHdpZHRoICogMC41O1xuICAgICAgICBsZXQgZGlhbENlbnRlclkgPSBoZWlnaHQgKiAwLjUgKyAxO1xuICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJwYW5lbFwiKSB7XG4gICAgICAgICAgICBkaWFsQ2VudGVyWSArPSAxMDtcbiAgICAgICAgfSBlbHNlIGlmIChhcHBlYXJhbmNlID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIGlmIChzaG93bnVtYmVyKSBkaWFsQ2VudGVyWSAtPSBmb250c2l6ZSAtIDU7XG4gICAgICAgICAgICBpZiAoc2hvd25hbWUpIGRpYWxDZW50ZXJZICs9IGZvbnRzaXplIC0gNTtcbiAgICAgICAgICAgIGlmICh0cmlhbmdsZSkgZGlhbENlbnRlclkgKz0gdHJpYW5nbGVIZWlnaHQgLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICBpZiAoc2hvd25hbWUpIHtcbiAgICAgICAgICAgICAgICBkaWFsQ2VudGVyWSArPSA2O1xuICAgICAgICAgICAgICAgIGRpYWxDZW50ZXJYID0gMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3QgPSBbMCwgZGlhbENlbnRlclkgLSBkaWFsSGVpZ2h0ICogMC41LCB3aWR0aCwgZGlhbEhlaWdodF07XG4gICAgICAgIGNvbnN0IGFyY1N0YXJ0WCA9IGRpYWxDZW50ZXJYICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLmNvcyhzdGFydCkpO1xuICAgICAgICBjb25zdCBhcmNTdGFydFkgPSBkaWFsQ2VudGVyWSArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5zaW4oc3RhcnQpKTtcbiAgICAgICAgY29uc3QgYXJjRW5kWCA9IGRpYWxDZW50ZXJYICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLmNvcyhlbmQpKTtcbiAgICAgICAgY29uc3QgYXJjRW5kWSA9IGRpYWxDZW50ZXJZICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLnNpbihlbmQpKTtcbiAgICAgICAgY29uc3QgdmFsdWVQb3NYID0gZGlhbENlbnRlclggKyAoZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguY29zKHZhbFBvcykpO1xuICAgICAgICBjb25zdCB2YWx1ZVBvc1kgPSBkaWFsQ2VudGVyWSArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5zaW4odmFsUG9zKSk7XG4gICAgICAgIGNvbnN0IGVuZENhcFJhZGl1cyA9IDE7XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGxldCBwYW5lbE9mZnNldCA9IDA7XG5cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwicGFuZWxcIikge1xuICAgICAgICAgICAgcGFuZWxPZmZzZXQgPSA1O1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMC40O1xuICAgICAgICAgICAgcm91bmRlZFJlY3QoY3R4LCAxLCAxLCB3aWR0aCAtIDIsIGhlaWdodCAtIDIsIDUpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHBhbmVsY29sb3I7XG4gICAgICAgICAgICBmaWxsUm91bmRlZFJlY3QoY3R4LCAxLjIsIDEuMiwgd2lkdGggLSAyLjQsIDMwIC0gMC40LCBbNSwgNSwgMCwgMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYWN0aXZlID8gYWN0aXZlbmVlZGxlY29sb3IgOiBuZWVkbGVjb2xvcjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGN0eC5zdHJva2VTdHlsZTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kIGFyYyBlbmRjYXBzXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhhcmNTdGFydFgsIGFyY1N0YXJ0WSwgZW5kQ2FwUmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhhcmNFbmRYLCBhcmNFbmRZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kIGFyY1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBkaWFsUmFkaXVzLCBzdGFydCwgZW5kKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIGRyYXcgdmFsdWUgYXJjLCB3aGljaCBjaGFuZ2VzIGlmIHRyaWFuZ2xlIGlzIGVuYWJsZWRcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYWN0aXZlID8gYWN0aXZlZGlhbGNvbG9yIDogZGlhbGNvbG9yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3R4LnN0cm9rZVN0eWxlO1xuICAgICAgICBpZiAodHJpYW5nbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pZHBvaW50ID0gKHN0YXJ0ICsgZW5kKSAqIDAuNTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGFjdGl2ZSA/IGFjdGl2ZWRpYWxjb2xvciA6IGRpYWxjb2xvcjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IDAuNSkgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGRpYWxSYWRpdXMsIG1pZHBvaW50LCB2YWxQb3MpO1xuICAgICAgICAgICAgZWxzZSBjdHguYXJjKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSwgZGlhbFJhZGl1cywgdmFsUG9zLCBtaWRwb2ludCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkcmF3IHZhbHVlIGFyYyBlbmRjYXBcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMoYXJjU3RhcnRYLCBhcmNTdGFydFksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIC8vIGRyYXcgdmFsdWUgYXJjXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSwgZGlhbFJhZGl1cywgc3RhcnQsIHZhbFBvcyk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZHJhdyBkaWFsXG4gICAgICAgIC8vIGRyYXcgZGlhbCByb3VuZCBlbmRjYXBzXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGFjdGl2ZSA/IGFjdGl2ZW5lZWRsZWNvbG9yIDogbmVlZGxlY29sb3I7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjdHguc3Ryb2tlU3R5bGU7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModmFsdWVQb3NYLCB2YWx1ZVBvc1ksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAvLyBkcmF3IGRpYWwgbGluZVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZKTtcbiAgICAgICAgY3R4LmxpbmVUbyh2YWx1ZVBvc1gsIHZhbHVlUG9zWSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gYWRkIHRleHQgaWYgaXQgaXMgZW5hYmxlZFxuICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlID09PSBcInJlZ3VsYXJcIiA/IFwiXCIgOiBmb250ZmFjZX0gJHtmb250c2l6ZX1weCAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0ZXh0Y29sb3I7XG4gICAgICAgIGlmIChzaG93bmFtZSkge1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChzaG9ydG5hbWUsIDAsIHBhbmVsT2Zmc2V0ICsgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHNob3J0bmFtZSwgd2lkdGggKiAwLjUsIHBhbmVsT2Zmc2V0ICsgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd251bWJlcikge1xuICAgICAgICAgICAgY29uc3QgdGlueU9mZnNldCA9IGFwcGVhcmFuY2UgPT09IFwidGlueVwiID8gMTIgOiAwO1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmRpc3BsYXlWYWx1ZSwgdGlueU9mZnNldCwgaGVpZ2h0IC0gcGFuZWxPZmZzZXQsIHdpZHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuZGlzcGxheVZhbHVlLCB3aWR0aCAqIDAuNSwgaGVpZ2h0IC0gcGFuZWxPZmZzZXQsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3IHRyaWFuZ2xlIGlmIGl0IGlzIGVuYWJsZWRcbiAgICAgICAgaWYgKHRyaWFuZ2xlKSB7XG4gICAgICAgICAgICBpZiAoIWRpc3RhbmNlKSBjdHguZmlsbFN0eWxlID0gdHJpY29sb3I7XG4gICAgICAgICAgICBlbHNlIGlmICghYWN0aXZlKSBjdHguZmlsbFN0eWxlID0gZGlhbGNvbG9yO1xuICAgICAgICAgICAgZWxzZSBjdHguZmlsbFN0eWxlID0gYWN0aXZlZGlhbGNvbG9yO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlwUG9zaXRpb25YID0gZGlhbENlbnRlclggKyBkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5jb3MoLTMgKiBNYXRoLlBJIC8gNCkgLSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpcFBvc2l0aW9uWSA9IGRpYWxDZW50ZXJZICsgZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguc2luKC0zICogTWF0aC5QSSAvIDQpIC0gMTtcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHRpcFBvc2l0aW9uWCwgdGlwUG9zaXRpb25ZKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHRpcFBvc2l0aW9uWCAtIHRyaWFuZ2xlSGVpZ2h0LCB0aXBQb3NpdGlvblkpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odGlwUG9zaXRpb25YLCB0aXBQb3NpdGlvblkgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh0aXBQb3NpdGlvblgsIHRpcFBvc2l0aW9uWSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oZGlhbENlbnRlclggLSB0cmlhbmdsZUhlaWdodCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSAtIHRyaWFuZ2xlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKGRpYWxDZW50ZXJYICsgdHJpYW5nbGVIZWlnaHQsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJpYm9yZGVyY29sb3IgfHwgXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRyaWFuZ2xlTGluZVdpZHRoO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFZhbHVlRnJvbURlbHRhKGU6IFBvaW50ZXJEcmFnRXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWluLCBtbWF4IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBzdGVwUmFuZ2UgPSB0aGlzLnN0ZXBSYW5nZTtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSB0eXBlID09PSBcImVudW1cIiA/IDEgOiAobW1heCAtIG1taW4pIC8gdHJ1ZVN0ZXBzO1xuICAgICAgICBjb25zdCBwcmV2U3RlcHMgPSB0eXBlID09PSBcImVudW1cIiA/IGUucHJldlZhbHVlIDogKGUucHJldlZhbHVlIC0gbW1pbikgLyBzdGVwO1xuICAgICAgICBjb25zdCBkU3RlcHMgPSBNYXRoLnJvdW5kKChlLmZyb21ZIC0gZS55KSAvIHN0ZXBSYW5nZSk7XG4gICAgICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5taW4odHJ1ZVN0ZXBzLCBNYXRoLm1heCgwLCBwcmV2U3RlcHMgKyBkU3RlcHMpKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gc3RlcHM7XG4gICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5yb3VuZChzdGVwcyAqIHN0ZXAgKyBtbWluKTtcbiAgICAgICAgcmV0dXJuIHN0ZXBzICogc3RlcCArIG1taW47XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZS54IDwgdGhpcy5pbnRlcmFjdGlvblJlY3RbMF1cbiAgICAgICAgICAgIHx8IGUueCA+IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl1cbiAgICAgICAgICAgIHx8IGUueSA8IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdXG4gICAgICAgICAgICB8fCBlLnkgPiB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdXG4gICAgICAgICkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlckRyYWdFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2luVG91Y2gpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbURlbHRhKGUpO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUpIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5pbXBvcnQgeyBhdG9kYiB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmludGVyZmFjZSBMaXZlTWV0ZXJQcm9wcyBleHRlbmRzIExpdmVQcm9wcyB7XG4gICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB8IFwiaG9yaXpvbnRhbFwiO1xuICAgIG1vZGU6IFwiZGVjaWJlbFwiIHwgXCJsaW5lYXJcIjtcbiAgICBjbGlwX3NpemU6IFwibm9ybWFsXCIgfCBcImV4dGVuZGVkXCI7XG4gICAgaW50ZXJ2YWw6IG51bWJlcjtcbiAgICBiZ2NvbG9yOiBzdHJpbmc7XG4gICAgaW5hY3RpdmVjb2xkY29sb3I6IHN0cmluZztcbiAgICBpbmFjdGl2ZXdhcm1jb2xvcjogc3RyaW5nO1xuICAgIGNvbGRjb2xvcjogc3RyaW5nO1xuICAgIHdhcm1jb2xvcjogc3RyaW5nO1xuICAgIGhvdGNvbG9yOiBzdHJpbmc7XG4gICAgb3ZlcmxvYWRjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlTWV0ZXIgZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVNZXRlclByb3BzPiB7XG4gICAgc3RhdGljIGdldCBwcm9wcygpOiBMaXZlTWV0ZXJQcm9wcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wcm9wcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLm1ldGVyflwiLFxuICAgICAgICAgICAgd2lkdGg6IDEyMCxcbiAgICAgICAgICAgIGhlaWdodDogMTUsXG4gICAgICAgICAgICBtb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgY2xpcF9zaXplOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IDIwLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIGJnY29sb3I6IFwicmdiYSg0MCwgNDAsIDQwLCAxKVwiLFxuICAgICAgICAgICAgaW5hY3RpdmVjb2xkY29sb3I6IFwicmdiYSgxMzAsIDEzMCwgMTMwLCAxKVwiLFxuICAgICAgICAgICAgaW5hY3RpdmV3YXJtY29sb3I6IFwicmdiYSgxNDksIDE0OSwgMTQ5LCAxKVwiLFxuICAgICAgICAgICAgY29sZGNvbG9yOiBcInJnYmEoMTIsIDI0OCwgMTAwLCAxKVwiLFxuICAgICAgICAgICAgd2FybWNvbG9yOiBcInJnYmEoMTk1LCAyNDgsIDEwMCwgMSlcIixcbiAgICAgICAgICAgIGhvdGNvbG9yOiBcInJnYmEoMjU1LCAxOTMsIDEwLCAxKVwiLFxuICAgICAgICAgICAgb3ZlcmxvYWRjb2xvcjogXCJyZ2JhKDI1NSwgMTAsIDEwLCAxKVwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIHBhaW50VmFsdWU6IG51bWJlciA9IDA7XG4gICAgbWF4VmFsdWU6IG51bWJlciA9IDA7XG4gICAgcGFpbnRUaW1lcjogbnVtYmVyO1xuICAgIG1heFRpbWVyOiBudW1iZXI7XG4gICAgZ2V0IGRpc3RhbmNlKCkge1xuICAgICAgICBjb25zdCB7IG1vZGUsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKG1vZGUgPT09IFwiZGVjaWJlbFwiID8gTWF0aC5tYXgoLTcwLCB2YWx1ZSkgOiBhdG9kYihNYXRoLmFicyh2YWx1ZSkpKSAvIDcwICsgMTtcbiAgICB9XG5cbiAgICBwYWludChwYWludEluPzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnBhaW50VmFsdWUgPSBNYXRoLm1heCh0aGlzLnBhaW50VmFsdWUsIHRoaXMuZGlzdGFuY2UpO1xuICAgICAgICBpZiAoIXBhaW50SW4pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYWludFRpbWVyKSB0aGlzLnBhaW50VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucGFpbnQodHJ1ZSksIHRoaXMucHJvcHMuaW50ZXJ2YWwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFpbnRUaW1lciA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgICAgIGNsaXBfc2l6ZSxcbiAgICAgICAgICAgIGJnY29sb3IsXG4gICAgICAgICAgICBpbmFjdGl2ZWNvbGRjb2xvcixcbiAgICAgICAgICAgIGluYWN0aXZld2FybWNvbG9yLFxuICAgICAgICAgICAgY29sZGNvbG9yLFxuICAgICAgICAgICAgd2FybWNvbG9yLFxuICAgICAgICAgICAgaG90Y29sb3IsXG4gICAgICAgICAgICBvdmVybG9hZGNvbG9yXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcblxuICAgICAgICBjb25zdCBjbGlwID0gY2xpcF9zaXplID09PSBcIm5vcm1hbFwiID8gMTAgOiAyMDtcbiAgICAgICAgY29uc3QgcGFpbnRWYWx1ZSA9IHRoaXMucGFpbnRWYWx1ZTtcbiAgICAgICAgaWYgKHBhaW50VmFsdWUgPiB0aGlzLm1heFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1heFZhbHVlID0gcGFpbnRWYWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1heFRpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5tYXhUaW1lcik7XG4gICAgICAgICAgICB0aGlzLm1heFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLm1heFZhbHVlID0gdGhpcy5wYWludFZhbHVlLCAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXhWYWx1ZSA9IHRoaXMubWF4VmFsdWU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICBjb25zdCB3YXJtU3RvcCA9IHdpZHRoIC0gY2xpcCAtIDE7XG4gICAgICAgICAgICBjb25zdCBob3RTdG9wID0gd2lkdGggLSBjbGlwO1xuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgd2lkdGgsIDApO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGFjdGl2ZSA/IGNvbGRjb2xvciA6IGluYWN0aXZlY29sZGNvbG9yKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCh3YXJtU3RvcCAvIHdpZHRoLCBhY3RpdmUgPyB3YXJtY29sb3IgOiBpbmFjdGl2ZXdhcm1jb2xvcik7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoaG90U3RvcCAvIHdpZHRoLCBhY3RpdmUgPyBob3Rjb2xvciA6IGluYWN0aXZld2FybWNvbG9yKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBhY3RpdmUgPyBvdmVybG9hZGNvbG9yIDogaW5hY3RpdmV3YXJtY29sb3IpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJnY29sb3I7XG4gICAgICAgICAgICBpZiAocGFpbnRWYWx1ZSA8IDEpIGN0eC5maWxsUmVjdCgwLCAwLCB3YXJtU3RvcCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGlmIChwYWludFZhbHVlIDwgMikgY3R4LmZpbGxSZWN0KGhvdFN0b3AsIDAsIGNsaXAsIGhlaWdodCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgICAgICAgICBpZiAocGFpbnRWYWx1ZSA+IDApIGN0eC5maWxsUmVjdCgwLCAwLCBNYXRoLm1pbigxLCBwYWludFZhbHVlKSAqIHdhcm1TdG9wLCBoZWlnaHQpO1xuICAgICAgICAgICAgaWYgKHBhaW50VmFsdWUgPiAxKSBjdHguZmlsbFJlY3QoaG90U3RvcCwgMCwgTWF0aC5taW4oMSwgKHBhaW50VmFsdWUgLSAxKSAqIDEwKSAqIGNsaXAsIGhlaWdodCk7XG4gICAgICAgICAgICBpZiAobWF4VmFsdWUgPiBwYWludFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heFZhbHVlIDw9IDEpIGN0eC5maWxsUmVjdChNYXRoLm1pbih3YXJtU3RvcCAtIDEsIG1heFZhbHVlICogd2FybVN0b3ApLCAwLCAxLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgIGlmIChtYXhWYWx1ZSA+IDEpIGN0eC5maWxsUmVjdChNYXRoLm1pbih3aWR0aCAtIDEsIGhvdFN0b3AgKyAobWF4VmFsdWUgLSAxKSAqIDEwICogY2xpcCksIDAsIDEsIGhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB3YXJtU3RvcCA9IGNsaXAgKyAxO1xuICAgICAgICAgICAgY29uc3QgaG90U3RvcCA9IGNsaXA7XG4gICAgICAgICAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBoZWlnaHQsIDAsIDApO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGFjdGl2ZSA/IGNvbGRjb2xvciA6IGluYWN0aXZlY29sZGNvbG9yKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgoaGVpZ2h0IC0gd2FybVN0b3ApIC8gaGVpZ2h0LCBhY3RpdmUgPyB3YXJtY29sb3IgOiBpbmFjdGl2ZXdhcm1jb2xvcik7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoKGhlaWdodCAtIGhvdFN0b3ApIC8gaGVpZ2h0LCBhY3RpdmUgPyBob3Rjb2xvciA6IGluYWN0aXZld2FybWNvbG9yKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBhY3RpdmUgPyBvdmVybG9hZGNvbG9yIDogaW5hY3RpdmV3YXJtY29sb3IpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJnY29sb3I7XG4gICAgICAgICAgICBpZiAocGFpbnRWYWx1ZSA8IDEpIGN0eC5maWxsUmVjdCgwLCB3YXJtU3RvcCwgd2lkdGgsIGhlaWdodCAtIHdhcm1TdG9wKTtcbiAgICAgICAgICAgIGlmIChwYWludFZhbHVlIDwgMikgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBob3RTdG9wKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICAgICAgICAgIGlmIChwYWludFZhbHVlID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdIZWlnaHQgPSBNYXRoLm1pbigxLCBwYWludFZhbHVlKSAqIChoZWlnaHQgLSB3YXJtU3RvcCk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIGhlaWdodCAtIGRyYXdIZWlnaHQsIHdpZHRoLCBkcmF3SGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYWludFZhbHVlID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdIZWlnaHQgPSBNYXRoLm1pbigxLCAocGFpbnRWYWx1ZSAtIDEpICogMTApICogY2xpcDtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgaG90U3RvcCAtIGRyYXdIZWlnaHQsIHdpZHRoLCBkcmF3SGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXhWYWx1ZSA+IHBhaW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4VmFsdWUgPD0gMSkgY3R4LmZpbGxSZWN0KDAsIGhlaWdodCAtIG1heFZhbHVlICogKGhlaWdodCAtIHdhcm1TdG9wKSwgd2lkdGgsIDEpO1xuICAgICAgICAgICAgICAgIGlmIChtYXhWYWx1ZSA+IDEpIGN0eC5maWxsUmVjdCgwLCBNYXRoLm1heCgwLCBob3RTdG9wIC0gKG1heFZhbHVlIC0gMSkgKiAxMCAqIGNsaXApLCB3aWR0aCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYWludFZhbHVlID0gMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZU51bWJveFByb3BzIGV4dGVuZHMgTGl2ZVByb3BzIHtcbiAgICBmb250bmFtZTogc3RyaW5nO1xuICAgIGZvbnRzaXplOiBudW1iZXI7XG4gICAgZm9udGZhY2U6IFwicmVndWxhclwiIHwgXCJib2xkXCIgfCBcIml0YWxpY1wiIHwgXCJib2xkIGl0YWxpY1wiO1xuICAgIGFwcGVhcmFuY2U6IFwic2xpZGVyXCIgfCBcInRyaWFuZ2xlXCIgfCBcImRlZmF1bHRcIjtcbiAgICBhY3RpdmViZ2NvbG9yOiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dGNvbG9yOiBzdHJpbmc7XG4gICAgdHJpY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmV0cmljb2xvcjogc3RyaW5nO1xuICAgIHRyaWNvbG9yMjogc3RyaW5nO1xuICAgIGFjdGl2ZXRyaWNvbG9yMjogc3RyaW5nO1xuICAgIGFjdGl2ZXNsaWRlcmNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVOdW1ib3ggZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVOdW1ib3hQcm9wcz4ge1xuICAgIHN0YXRpYyBnZXQgcHJvcHMoKTogTGl2ZU51bWJveFByb3BzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnByb3BzLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUubnVtYm94XCIsXG4gICAgICAgICAgICB3aWR0aDogNDUsXG4gICAgICAgICAgICBoZWlnaHQ6IDE1LFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMCxcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0cmljb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjI6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZldHJpY29sb3IyOiBcInJnYmEoMTA5LCAyMTUsIDI1NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXNsaWRlcmNvbG9yOiBcInJnYmEoMTA5LCAyMTUsIDI1NSwgMSlcIixcbiAgICAgICAgICAgIG1taW46IDAsXG4gICAgICAgICAgICBtbWF4OiAxMjcsXG4gICAgICAgICAgICB0eXBlOiBcImludFwiLFxuICAgICAgICAgICAgdW5pdHN0eWxlOiBcImludFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBnZXQgdHJ1ZVN0ZXBzKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHN0ZXBzLCBzdGVwIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBmdWxsID0gMTAwO1xuICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gdGhpcy5wcm9wcy5lbnVtLmxlbmd0aCA6IHR5cGUgPT09IFwiaW50XCIgPyBtbWF4IC0gbW1pbiA6IGZ1bGw7XG4gICAgICAgIGlmIChzdGVwKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiB0aGlzLnByb3BzLmVudW0ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBNYXRoLnJvdW5kKHN0ZXApKSwgbWF4U3RlcHMpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIHN0ZXApLCBtYXhTdGVwcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ZXBzKSByZXR1cm4gTWF0aC5taW4oc3RlcHMsIG1heFN0ZXBzKTtcbiAgICAgICAgcmV0dXJuIG1heFN0ZXBzO1xuICAgIH1cbiAgICBnZXQgZGlzdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IHZhbHVlIC8gdGhpcy5wcm9wcy5lbnVtLmxlbmd0aCA6ICh2YWx1ZSAtIG1taW4pIC8gKG1tYXggLSBtbWluKTtcbiAgICB9XG4gICAgZ2V0IHN0ZXBSYW5nZSgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCBzdGVwIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBmdWxsID0gMTAwO1xuICAgICAgICBpZiAoc3RlcCkgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gZnVsbCAvIHRoaXMucHJvcHMuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gTWF0aC5yb3VuZChzdGVwKSAvIChtbWF4IC0gbW1pbikgKiBmdWxsIDogc3RlcCAvIChtbWF4IC0gbW1pbikgKiBmdWxsO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgcmV0dXJuIGZ1bGwgLyB0cnVlU3RlcHM7XG4gICAgfVxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgIGZvY3VzLFxuICAgICAgICAgICAgZm9udG5hbWUsXG4gICAgICAgICAgICBmb250c2l6ZSxcbiAgICAgICAgICAgIGZvbnRmYWNlLFxuICAgICAgICAgICAgYXBwZWFyYW5jZSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBib3JkZXJjb2xvcixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0ZXh0Y29sb3IsXG4gICAgICAgICAgICB0cmljb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZXRyaWNvbG9yLFxuICAgICAgICAgICAgdHJpY29sb3IyLFxuICAgICAgICAgICAgYWN0aXZldHJpY29sb3IyLFxuICAgICAgICAgICAgYWN0aXZlc2xpZGVyY29sb3JcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2U7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IHRoaXMuZGlzcGxheVZhbHVlO1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBhY3RpdmViZ2NvbG9yO1xuICAgICAgICBjdHgucmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAvLyBkcmF3IGJvcmRlciAoZXZlbnR1YWxseSB3ZSBtaWdodCBuZWVkIHRvIHJlZGVmaW5lIHRoZSBzaGFwZSlcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGZvY3VzID8gZm9jdXNib3JkZXJjb2xvciA6IGJvcmRlcmNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwic2xpZGVyXCIgJiYgYWN0aXZlICYmIGRpc3RhbmNlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYWN0aXZlc2xpZGVyY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoMC41LCAwLjUsIGRpc3RhbmNlICogd2lkdGggLSAxLCBoZWlnaHQgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJ0cmlhbmdsZVwiKSB7XG4gICAgICAgICAgICBjb25zdCB0cmlhbmdsZUhlaWdodCA9IDg7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYWN0aXZlID8gKGRpc3RhbmNlID8gYWN0aXZldHJpY29sb3IyIDogYWN0aXZldHJpY29sb3IpIDogKGRpc3RhbmNlID8gdHJpY29sb3IyIDogdHJpY29sb3IpO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh3aWR0aCAtIHRyaWFuZ2xlSGVpZ2h0IC0gMC41LCBoZWlnaHQgKiAwLjUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCAtIDAuNSwgMC41KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8od2lkdGggLSAwLjUsIGhlaWdodCAtIDAuNSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRpc3BsYXkgdGhlIHRleHRcbiAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dChkaXNwbGF5VmFsdWUsIHdpZHRoICogMC41LCBoZWlnaHQgKiAwLjUsIHdpZHRoKTtcbiAgICB9XG4gICAgZ2V0VmFsdWVGcm9tRGVsdGEoZTogUG9pbnRlckRyYWdFdmVudCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1taW4sIG1tYXggfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHN0ZXBSYW5nZSA9IHRoaXMuc3RlcFJhbmdlO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgY29uc3Qgc3RlcCA9IHR5cGUgPT09IFwiZW51bVwiID8gMSA6ICh0aGlzLnByb3BzLnN0ZXAgfHwgKG1tYXggLSBtbWluKSAvIHRydWVTdGVwcyk7XG4gICAgICAgIGNvbnN0IHByZXZTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gZS5wcmV2VmFsdWUgOiBlLnByZXZWYWx1ZSAvIHN0ZXA7XG4gICAgICAgIGNvbnN0IGRTdGVwcyA9IE1hdGgucm91bmQoKGUuZnJvbVkgLSBlLnkpIC8gc3RlcFJhbmdlKTtcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBNYXRoLm1pbih0cnVlU3RlcHMsIE1hdGgubWF4KDAsIHByZXZTdGVwcyArIGRTdGVwcykpO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiBzdGVwcztcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLnJvdW5kKHN0ZXBzICogc3RlcCArIG1taW4pO1xuICAgICAgICByZXR1cm4gc3RlcHMgKiBzdGVwICsgbW1pbjtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5faW5Ub3VjaCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tRGVsdGEoZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcblxuaW50ZXJmYWNlIExpdmVTbGlkZXJQcm9wcyBleHRlbmRzIExpdmVQcm9wcyB7XG4gICAgcmVsYXRpdmU6IGJvb2xlYW47XG4gICAgZm9udG5hbWU6IHN0cmluZztcbiAgICBmb250c2l6ZTogbnVtYmVyO1xuICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIHwgXCJob3Jpem9udGFsXCI7XG4gICAgc2hvd25hbWU6IGJvb2xlYW47XG4gICAgc2hvd251bWJlcjogYm9vbGVhbjtcbiAgICBzbGlkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRleHRjb2xvcjogc3RyaW5nO1xuICAgIHRyaWJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgdHJpb25jb2xvcjogc3RyaW5nO1xuICAgIHRyaWNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVTbGlkZXIgZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVTbGlkZXJQcm9wcz4ge1xuICAgIHN0YXRpYyBnZXQgcHJvcHMoKTogTGl2ZVNsaWRlclByb3BzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnByb3BzLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUuc2xpZGVyXCIsXG4gICAgICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDkwLFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMixcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICBzaG93bmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dudW1iZXI6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXJjb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0Y29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgdHJpb25jb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICByZWxhdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBtbWluOiAwLFxuICAgICAgICAgICAgbW1heDogMTI3LFxuICAgICAgICAgICAgdHlwZTogXCJpbnRcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBfaW5Ub3VjaDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGludGVyYWN0aW9uUmVjdDogbnVtYmVyW10gPSBbMCwgMCwgMCwgMF07XG5cbiAgICBnZXQgdHJ1ZVN0ZXBzKCkge1xuICAgICAgICBjb25zdCB7IG9yaWVudGF0aW9uLCB0eXBlLCBtbWF4LCBtbWluLCBzdGVwcywgc3RlcCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZnVsbCA9IHRoaXMuaW50ZXJhY3Rpb25SZWN0W29yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyAzIDogMl07XG4gICAgICAgIGNvbnN0IG1heFN0ZXBzID0gdHlwZSA9PT0gXCJlbnVtXCIgPyB0aGlzLnByb3BzLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IG1tYXggLSBtbWluIDogZnVsbDtcbiAgICAgICAgaWYgKHN0ZXApIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHRoaXMucHJvcHMuZW51bS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIE1hdGgucm91bmQoc3RlcCkpLCBtYXhTdGVwcyk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5mbG9vcigobW1heCAtIG1taW4pIC8gc3RlcCksIG1heFN0ZXBzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RlcHMpIHJldHVybiBNYXRoLm1pbihzdGVwcywgbWF4U3RlcHMpO1xuICAgICAgICByZXR1cm4gbWF4U3RlcHM7XG4gICAgfVxuICAgIGdldCBkaXN0YW5jZSgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gdmFsdWUgLyB0aGlzLnByb3BzLmVudW0ubGVuZ3RoIDogKHZhbHVlIC0gbW1pbikgLyAobW1heCAtIG1taW4pO1xuICAgIH1cbiAgICBnZXQgc3RlcFJhbmdlKCkge1xuICAgICAgICBjb25zdCB7IG9yaWVudGF0aW9uLCB0eXBlLCBtbWF4LCBtbWluLCBzdGVwIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBmdWxsID0gdGhpcy5pbnRlcmFjdGlvblJlY3Rbb3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IDMgOiAyXTtcbiAgICAgICAgaWYgKHN0ZXApIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IGZ1bGwgLyB0aGlzLnByb3BzLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IE1hdGgucm91bmQoc3RlcCkgLyAobW1heCAtIG1taW4pICogZnVsbCA6IHN0ZXAgLyAobW1heCAtIG1taW4pICogZnVsbDtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIHJldHVybiBmdWxsIC8gdHJ1ZVN0ZXBzO1xuICAgIH1cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBmb250bmFtZSxcbiAgICAgICAgICAgIGZvbnRzaXplLFxuICAgICAgICAgICAgZm9udGZhY2UsXG4gICAgICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgICAgIHNob3duYW1lLFxuICAgICAgICAgICAgc2hvd251bWJlcixcbiAgICAgICAgICAgIHNsaWRlcmNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0cmlvbmNvbG9yLFxuICAgICAgICAgICAgdHJpY29sb3IsXG4gICAgICAgICAgICBzaG9ydG5hbWVcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBjb25zdCBsaW5lV2lkdGggPSAwLjU7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSA4O1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2U7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IHRoaXMuZGlzcGxheVZhbHVlO1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc2xpZGVyY29sb3I7XG5cbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8od2lkdGggKiAwLjUsIGZvbnRzaXplICsgcGFkZGluZyk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoICogMC41LCBoZWlnaHQgLSAoZm9udHNpemUgKyBwYWRkaW5nKSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uV2lkdGggPSB3aWR0aCAqIDAuNTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0ID0gW1xuICAgICAgICAgICAgICAgIHdpZHRoICogMC41IC0gaW50ZXJhY3Rpb25XaWR0aCAqIDAuNSxcbiAgICAgICAgICAgICAgICBmb250c2l6ZSArIHBhZGRpbmcsXG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25XaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQgLSAyICogKGZvbnRzaXplICsgcGFkZGluZylcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJpYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBjb25zdCB0cmlPcmlnaW46IFtudW1iZXIsIG51bWJlcl0gPSBbXG4gICAgICAgICAgICAgICAgd2lkdGggKiAwLjUgKyBsaW5lV2lkdGggKiAwLjUgKyAwLjUsXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3RbMV0gLSA0ICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbM10gKiAoMSAtIGRpc3RhbmNlKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odHJpT3JpZ2luWzBdLCB0cmlPcmlnaW5bMV0gKyA0KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgOCwgdHJpT3JpZ2luWzFdKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgOCwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgNCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLl9pblRvdWNoID8gdHJpb25jb2xvciA6IHRyaWNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICAgICAgaWYgKHNob3duYW1lKSBjdHguZmlsbFRleHQoc2hvcnRuYW1lLCB3aWR0aCAqIDAuNSwgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIGlmIChzaG93bnVtYmVyKSBjdHguZmlsbFRleHQoZGlzcGxheVZhbHVlLCB3aWR0aCAqIDAuNSwgaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHBhZGRpbmcsIGhlaWdodCAqIDAuNSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoIC0gcGFkZGluZywgaGVpZ2h0ICogMC41KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25XaWR0aCA9IGhlaWdodCAqIDAuNTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0ID0gW1xuICAgICAgICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICogMC41IC0gaW50ZXJhY3Rpb25XaWR0aCAqIDAuNSxcbiAgICAgICAgICAgICAgICB3aWR0aCAtIDIgKiBwYWRkaW5nLFxuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uV2lkdGhcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJpYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBjb25zdCB0cmlPcmlnaW46IFtudW1iZXIsIG51bWJlcl0gPSBbXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3RbMF0gKyB0aGlzLmludGVyYWN0aW9uUmVjdFsyXSAqIGRpc3RhbmNlIC0gNCxcbiAgICAgICAgICAgICAgICBoZWlnaHQgKiAwLjUgKyBsaW5lV2lkdGggKiAwLjUgKyAyXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0cmlPcmlnaW5bMF0sIHRyaU9yaWdpblsxXSArIDgpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0gKyA0LCB0cmlPcmlnaW5bMV0pO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0gKyA4LCB0cmlPcmlnaW5bMV0gKyA4KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdLCB0cmlPcmlnaW5bMV0gKyA4KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuX2luVG91Y2ggPyB0cmlvbmNvbG9yIDogdHJpY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlID09PSBcInJlZ3VsYXJcIiA/IFwiXCIgOiBmb250ZmFjZX0gJHtmb250c2l6ZX1weCAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0ZXh0Y29sb3I7XG4gICAgICAgICAgICBpZiAoc2hvd25hbWUpIGN0eC5maWxsVGV4dChzaG9ydG5hbWUsIHdpZHRoICogMC41LCBmb250c2l6ZSwgd2lkdGgpO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgaWYgKHNob3dudW1iZXIpIGN0eC5maWxsVGV4dChkaXNwbGF5VmFsdWUsIDQsIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFZhbHVlRnJvbVBvcyhlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcbiAgICAgICAgY29uc3QgeyBvcmllbnRhdGlvbiwgdHlwZSwgbW1pbiwgbW1heCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgc3RlcFJhbmdlID0gdGhpcy5zdGVwUmFuZ2U7XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICBjb25zdCBzdGVwID0gdGhpcy5wcm9wcy5zdGVwIHx8IChtbWF4IC0gbW1pbikgLyB0cnVlU3RlcHM7XG4gICAgICAgIGxldCBzdGVwcyA9IE1hdGgucm91bmQoKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyB0aGlzLmludGVyYWN0aW9uUmVjdFszXSAtIChlLnkgLSB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSkgOiBlLnggLSB0aGlzLmludGVyYWN0aW9uUmVjdFswXSkgLyBzdGVwUmFuZ2UpO1xuICAgICAgICBzdGVwcyA9IE1hdGgubWluKHRydWVTdGVwcywgTWF0aC5tYXgoMCwgc3RlcHMpKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gc3RlcHM7XG4gICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5yb3VuZChzdGVwcyAqIHN0ZXAgKyBtbWluKTtcbiAgICAgICAgcmV0dXJuIHN0ZXBzICogc3RlcCArIG1taW47XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZS54IDwgdGhpcy5pbnRlcmFjdGlvblJlY3RbMF1cbiAgICAgICAgICAgIHx8IGUueCA+IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl1cbiAgICAgICAgICAgIHx8IGUueSA8IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdXG4gICAgICAgICAgICB8fCBlLnkgPiB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdXG4gICAgICAgICkgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tUG9zKGUpO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHZhbHVlKSB0aGlzLnNldFZhbHVlKHRoaXMuZ2V0VmFsdWVGcm9tUG9zKGUpKTtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEcmFnID0gKGU6IFBvaW50ZXJEcmFnRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9pblRvdWNoKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRWYWx1ZUZyb21Qb3MoZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcblxuaW50ZXJmYWNlIExpdmVUYWJQcm9wcyBleHRlbmRzIExpdmVQcm9wcyB7XG4gICAgZm9udG5hbWU6IHN0cmluZztcbiAgICBmb250c2l6ZTogbnVtYmVyO1xuICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBhY3RpdmViZ2NvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZlYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYmdjb2xvcjogc3RyaW5nO1xuICAgIGJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRleHRjb2xvcjogc3RyaW5nO1xuICAgIHRleHRvbmNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZldGV4dGNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZldGV4dG9uY29sb3I6IHN0cmluZztcbiAgICBtb2RlOiBcImVxdWFsXCIgfCBcInByb3BvcnRpb25hbFwiO1xuICAgIHNwYWNpbmdfeDogbnVtYmVyO1xuICAgIHNwYWNpbmdfeTogbnVtYmVyO1xuICAgIG11bHRpbGluZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVRhYiBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZVRhYlByb3BzPiB7XG4gICAgc3RhdGljIGdldCBwcm9wcygpOiBMaXZlVGFiUHJvcHMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucHJvcHMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS50YWJcIixcbiAgICAgICAgICAgIHdpZHRoOiA5MCxcbiAgICAgICAgICAgIGhlaWdodDogNDUsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEwLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3I6IFwicmdiYSgyNTUsIDE4MSwgNTAsIDEpXCIsXG4gICAgICAgICAgICBiZ2NvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIGJnb25jb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDkwLCA5MCwgOTAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0b25jb2xvcjogXCJyZ2JhKDkwLCA5MCwgOTAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0Y29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZldGV4dG9uY29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuICAgICAgICAgICAgbW9kZTogXCJlcXVhbFwiLFxuICAgICAgICAgICAgZW51bTogW1wib25lXCIsIFwidHdvXCIsIFwidGhyZWVcIl0sXG4gICAgICAgICAgICBzcGFjaW5nX3g6IDYsXG4gICAgICAgICAgICBzcGFjaW5nX3k6IDYsXG4gICAgICAgICAgICBtdWx0aWxpbmU6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB0YWJSZWN0czogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl1bXSA9IFtdO1xuXG4gICAgZ2V0VGFiUmVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgbXVsdGlsaW5lLFxuICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgIHNwYWNpbmdfeCxcbiAgICAgICAgICAgIHNwYWNpbmdfeVxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZW51bXMgPSB0aGlzLnByb3BzLmVudW07XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IDQ7XG4gICAgICAgIGNvbnN0IG1pbkhlaWdodCA9IDEwO1xuICAgICAgICBjb25zdCBjb3VudCA9IGVudW1zLmxlbmd0aDtcbiAgICAgICAgbGV0IGNvdW50UGVyTGluZSA9IGNvdW50O1xuICAgICAgICBsZXQgbGluZXMgPSAxO1xuICAgICAgICBsZXQgc3RlcCA9IGhlaWdodCAvIGxpbmVzO1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSAwO1xuICAgICAgICBsZXQgcmVjdFdpZHRoID0gMDtcbiAgICAgICAgY29uc3Qgc3BhY2luZ1ggPSBzcGFjaW5nX3ggKiAwLjU7XG4gICAgICAgIGNvbnN0IHNwYWNpbmdZID0gc3BhY2luZ195ICogMC41O1xuXG4gICAgICAgIGlmIChtdWx0aWxpbmUgJiYgaGVpZ2h0ID49IDIgKiBtaW5IZWlnaHQpIHtcbiAgICAgICAgICAgIGxpbmVzID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oY291bnQsIE1hdGguZmxvb3IoaGVpZ2h0IC8gbWluSGVpZ2h0KSkpO1xuICAgICAgICAgICAgY291bnRQZXJMaW5lID0gTWF0aC5jZWlsKGNvdW50IC8gbGluZXMpO1xuICAgICAgICAgICAgLy8gaWYgdGhlcmUncyBub3QgZW5vdWdoIGhlaWdodCwgaW5jcmVhc2UgdGhlIG51bWJlciBvZiB0YWJzIHBlciByb3dcbiAgICAgICAgICAgIHdoaWxlIChsaW5lcyAqIGNvdW50UGVyTGluZSA8IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgY291bnRQZXJMaW5lKys7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmVzID4gMSkgbGluZXMtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3MgZXh0cmEgaGVpZ2h0LCByZWR1Y2UgdGhlIG51bWJlciBvZiByb3dzXG4gICAgICAgICAgICB3aGlsZSAobGluZXMgKiBjb3VudFBlckxpbmUgPiBjb3VudCAmJiAobGluZXMgLSAxKSAqIGNvdW50UGVyTGluZSA+PSBjb3VudCkge1xuICAgICAgICAgICAgICAgIGxpbmVzLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGVwID0gaGVpZ2h0IC8gbGluZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vZGUgPT09IFwiZXF1YWxcIikge1xuICAgICAgICAgICAgaW50ZXJ2YWwgPSB3aWR0aCAvIGNvdW50UGVyTGluZTtcbiAgICAgICAgICAgIHJlY3RXaWR0aCA9IGludGVydmFsIC0gc3BhY2luZ1g7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlJlY3RzW2ldID0gW1xuICAgICAgICAgICAgICAgICAgICAoaSAlIGNvdW50UGVyTGluZSkgKiBpbnRlcnZhbCArIHNwYWNpbmdYICogMC41LFxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGkgLyBjb3VudFBlckxpbmUpICogc3RlcCArIHNwYWNpbmdZICogMC41LFxuICAgICAgICAgICAgICAgICAgICByZWN0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIChoZWlnaHQgLyBsaW5lcykgLSBzcGFjaW5nWVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0V2lkdGhzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBzcGFjZSA9IHdpZHRoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpICogY291bnRQZXJMaW5lOyBqIDwgTWF0aC5taW4oKGkgKyAxKSAqIGNvdW50UGVyTGluZSwgY291bnQpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dERpbWVuc2lvbnMgPSB0aGlzLmN0eC5tZWFzdXJlVGV4dChlbnVtc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgIHRleHRXaWR0aHNbal0gPSB0ZXh0RGltZW5zaW9ucy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgKz0gdGV4dFdpZHRoc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgc3BhY2UgLT0gMiAqIG1hcmdpbiArIHNwYWNpbmdYO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdXNlZCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKiBjb3VudFBlckxpbmU7IGogPCBNYXRoLm1pbigoaSArIDEpICogY291bnRQZXJMaW5lLCBjb3VudCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWN0U3BhY2UgPSB0ZXh0V2lkdGhzW2pdIC8gdG90YWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiUmVjdHNbal0gPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VkICsgc3BhY2luZ1ggKiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpICogc3RlcCArIHNwYWNpbmdZICogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2UgKiByZWN0U3BhY2UgKyAyICogbWFyZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IC8gbGluZXMgLSBzcGFjaW5nWVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB1c2VkICs9IHRoaXMudGFiUmVjdHNbal1bMl0gKyBzcGFjaW5nWDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudGFiUmVjdHM7XG4gICAgfVxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3IsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgYmdvbmNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdGV4dG9uY29sb3IsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0Y29sb3IsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0b25jb2xvcixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGVudW1zID0gdGhpcy5wcm9wcy5lbnVtO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY29uc3QgdGFiUmVjdHMgPSB0aGlzLmdldFRhYlJlY3RzKCk7XG5cbiAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSAwLjU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkJvcmRlckNvbG9yID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW51bXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkJnQ29sb3IgPSBhY3RpdmUgPyAodmFsdWUgPT09IGkgPyBhY3RpdmViZ29uY29sb3IgOiBhY3RpdmViZ2NvbG9yKSA6ICh2YWx1ZSA9PT0gaSA/IGJnb25jb2xvciA6IGJnY29sb3IpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJ1dHRvbkJnQ29sb3I7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgucmVjdCguLi50YWJSZWN0c1tpXSk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYnV0dG9uQm9yZGVyQ29sb3I7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Zm9udGZhY2UgPT09IFwicmVndWxhclwiID8gXCJcIiA6IGZvbnRmYWNlfSAke2ZvbnRzaXplfXB4ICR7Zm9udG5hbWV9LCBzYW5zLXNlcmlmYDtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYWN0aXZlID8gKHZhbHVlID09PSBpID8gYWN0aXZldGV4dG9uY29sb3IgOiBhY3RpdmV0ZXh0Y29sb3IpIDogKHZhbHVlID09PSBpID8gdGV4dG9uY29sb3IgOiB0ZXh0Y29sb3IpO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGVudW1zW2ldLCB0YWJSZWN0c1tpXVswXSArIHRhYlJlY3RzW2ldWzJdICogMC41LCB0YWJSZWN0c1tpXVsxXSArIHRhYlJlY3RzW2ldWzNdICogMC41KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9IChlOiBQb2ludGVyRG93bkV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiUmVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLnRhYlJlY3RzW2ldO1xuICAgICAgICAgICAgaWYgKGUueCA+PSByZWN0WzBdICYmIGUueCA8PSByZWN0WzJdICsgcmVjdFswXSAmJiBlLnkgPj0gcmVjdFsxXSAmJiBlLnkgPD0gcmVjdFszXSArIHJlY3RbMV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKGkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlckRvd24oZSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcbmltcG9ydCB7IGZpbGxSb3VuZGVkUmVjdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmludGVyZmFjZSBMaXZlVGV4dFByb3BzIGV4dGVuZHMgTGl2ZVByb3BzIHtcbiAgICBmb250bmFtZTogc3RyaW5nO1xuICAgIGZvbnRzaXplOiBudW1iZXI7XG4gICAgZm9udGZhY2U6IFwicmVndWxhclwiIHwgXCJib2xkXCIgfCBcIml0YWxpY1wiIHwgXCJib2xkIGl0YWxpY1wiO1xuICAgIGFjdGl2ZWJnY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmViZ29uY29sb3I6IHN0cmluZztcbiAgICBiZ2NvbG9yOiBzdHJpbmc7XG4gICAgYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dGNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dG9uY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmV0ZXh0Y29sb3I6IHN0cmluZztcbiAgICBhY3RpdmV0ZXh0b25jb2xvcjogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICB0ZXh0b246IHN0cmluZztcbiAgICBtb2RlOiBcImJ1dHRvblwiIHwgXCJ0b2dnbGVcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVRleHQgZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVUZXh0UHJvcHM+IHtcbiAgICBzdGF0aWMgZ2V0IHByb3BzKCk6IExpdmVUZXh0UHJvcHMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucHJvcHMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS50ZXh0XCIsXG4gICAgICAgICAgICB3aWR0aDogOTAsXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1LFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMCxcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yOiBcInJnYmEoMjU1LCAxODEsIDUwLCAxKVwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBiZ29uY29sb3I6IFwicmdiYSgxOTUsIDE5NSwgMTk1LCAxKVwiLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0Y29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dG9uY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZldGV4dGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRvbmNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRleHQ6IFwiQVwiLFxuICAgICAgICAgICAgdGV4dG9uOiBcIkJcIixcbiAgICAgICAgICAgIG1vZGU6IFwidG9nZ2xlXCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICB0ZXh0b24sXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHRleHRjb2xvcixcbiAgICAgICAgICAgIHRleHRvbmNvbG9yLFxuICAgICAgICAgICAgYWN0aXZldGV4dGNvbG9yLFxuICAgICAgICAgICAgYWN0aXZldGV4dG9uY29sb3IsXG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cbiAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSAwLjU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkJnQ29sb3IgPSBhY3RpdmUgPyAodmFsdWUgPyBhY3RpdmViZ29uY29sb3IgOiBhY3RpdmViZ2NvbG9yKSA6ICh2YWx1ZSA/IGJnb25jb2xvciA6IGJnY29sb3IpO1xuICAgICAgICBjb25zdCBidXR0b25Cb3JkZXJDb2xvciA9IGZvY3VzID8gZm9jdXNib3JkZXJjb2xvciA6IGJvcmRlcmNvbG9yO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBidXR0b25CZ0NvbG9yO1xuICAgICAgICBpZiAobW9kZSA9PT0gXCJidXR0b25cIikge1xuICAgICAgICAgICAgZmlsbFJvdW5kZWRSZWN0KGN0eCwgMC41LCAwLjUsIHdpZHRoIC0gMSwgaGVpZ2h0IC0gMSwgaGVpZ2h0ICogMC41IC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgucmVjdCgwLjUsIDAuNSwgd2lkdGggLSAxLCBoZWlnaHQgLSAxKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDAuNTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYnV0dG9uQm9yZGVyQ29sb3I7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlID09PSBcInJlZ3VsYXJcIiA/IFwiXCIgOiBmb250ZmFjZX0gJHtmb250c2l6ZX1weCAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGFjdGl2ZSA/ICh2YWx1ZSA/IGFjdGl2ZXRleHRvbmNvbG9yIDogYWN0aXZldGV4dGNvbG9yKSA6ICh2YWx1ZSA/IHRleHRvbmNvbG9yIDogdGV4dGNvbG9yKTtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHZhbHVlICYmIG1vZGUgPT09IFwidG9nZ2xlXCIgPyB0ZXh0b24gOiB0ZXh0LCB3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41KTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIG1vZGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgICAgICB0aGlzLnNldFZhbHVlKG1vZGUgPT09IFwiYnV0dG9uXCIgPyAxIDogMSAtIHZhbHVlKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwiYnV0dG9uXCIpIHRoaXMuc2V0VmFsdWUoMCk7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZVRvZ2dsZVByb3BzIGV4dGVuZHMgTGl2ZVByb3BzIHtcbiAgICBhY3RpdmViZ2NvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZlYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYmdjb2xvcjogc3RyaW5nO1xuICAgIGJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlVG9nZ2xlIGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlVG9nZ2xlUHJvcHM+IHtcbiAgICBzdGF0aWMgZ2V0IHByb3BzKCk6IExpdmVUb2dnbGVQcm9wcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wcm9wcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLnRvZ2dsZVwiLFxuICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgaGVpZ2h0OiAxNSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yOiBcInJnYmEoMjU1LCAxODEsIDUwLCAxKVwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBiZ29uY29sb3I6IFwicmdiYSgxOTUsIDE5NSwgMTk1LCAxKVwiLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgZm9jdXMsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMC41O1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcblxuICAgICAgICBjb25zdCBidXR0b25CZ0NvbG9yID0gYWN0aXZlID8gKHZhbHVlID8gYWN0aXZlYmdvbmNvbG9yIDogYWN0aXZlYmdjb2xvcikgOiAodmFsdWUgPyBiZ29uY29sb3IgOiBiZ2NvbG9yKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQm9yZGVyQ29sb3IgPSBmb2N1cyA/IGZvY3VzYm9yZGVyY29sb3IgOiBib3JkZXJjb2xvcjtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uQmdDb2xvcjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgucmVjdChib3JkZXJXaWR0aCwgYm9yZGVyV2lkdGgsIHdpZHRoIC0gMiAqIGJvcmRlcldpZHRoLCBoZWlnaHQgLSAyICogYm9yZGVyV2lkdGgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBidXR0b25Cb3JkZXJDb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSgxIC0gdmFsdWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBcIkB3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcy93ZWJjb21wb25lbnRzLWJ1bmRsZVwiO1xuaW1wb3J0IExpdmVCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgTGl2ZVNsaWRlciBmcm9tIFwiLi9TbGlkZXJcIjtcbmltcG9ydCBMaXZlRGlhbCBmcm9tIFwiLi9EaWFsXCI7XG5pbXBvcnQgTGl2ZVRvZ2dsZSBmcm9tIFwiLi9Ub2dnbGVcIjtcbmltcG9ydCBMaXZlVGV4dCBmcm9tIFwiLi9UZXh0XCI7XG5pbXBvcnQgTGl2ZU51bWJveCBmcm9tIFwiLi9OdW1ib3hcIjtcbmltcG9ydCBMaXZlVGFiIGZyb20gXCIuL1RhYlwiO1xuaW1wb3J0IExpdmVNZXRlciBmcm9tIFwiLi9NZXRlclwiO1xuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1idXR0b25cIiwgTGl2ZUJ1dHRvbik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS10b2dnbGVcIiwgTGl2ZVRvZ2dsZSk7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1zbGlkZXJcIiwgTGl2ZVNsaWRlcik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1kaWFsXCIsIExpdmVEaWFsKTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXZlLXRleHRcIiwgTGl2ZVRleHQpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdmUtbnVtYm94XCIsIExpdmVOdW1ib3gpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdmUtdGFiXCIsIExpdmVUYWIpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdmUtbWV0ZXJcIiwgTGl2ZU1ldGVyKTtcbiIsImV4cG9ydCBjb25zdCB0b01JREkgPSAoZjogbnVtYmVyKSA9PiBbXCJDXCIsIFwiQyNcIiwgXCJEXCIsIFwiRCNcIiwgXCJFXCIsIFwiRlwiLCBcIkYjXCIsIFwiR1wiLCBcIkcjXCIsIFwiQVwiLCBcIkEjXCIsIFwiQlwiXVsoZiAlIDEyICsgMTIpICUgMTJdICsgTWF0aC5yb3VuZChmIC8gMTIgLSAyKTtcbmV4cG9ydCBjb25zdCB0b1JhZCA9IChkZWdyZWVzOiBudW1iZXIpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuZXhwb3J0IGNvbnN0IGF0b2RiID0gKGE6IG51bWJlcikgPT4gMjAgKiBNYXRoLmxvZzEwKGEpO1xuZXhwb3J0IGNvbnN0IGRidG9hID0gKGRiOiBudW1iZXIpID0+IDEwICoqIChkYiAvIDIwKTtcbmV4cG9ydCBjb25zdCByb3VuZGVkUmVjdCA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCByYWRpdXM6IG51bWJlciB8IG51bWJlcltdKSA9PiB7XG4gICAgY29uc3QgcmFkaWkgPSBbMCwgMCwgMCwgMF07XG4gICAgaWYgKHR5cGVvZiByYWRpdXMgPT09IFwibnVtYmVyXCIpIHJhZGlpLmZpbGwocmFkaXVzKTtcbiAgICBlbHNlIHJhZGl1cy5mb3JFYWNoKCh2LCBpKSA9PiByYWRpaVtpXSA9IHYpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHggKyByYWRpaVswXSwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpaVsxXSwgeSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpaVsxXSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpaVsyXSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpaVsyXSwgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaWlbM10sIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByYWRpaVszXSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaWlbMF0pO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpaVswXSwgeSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5zdHJva2UoKTtcbn07XG5leHBvcnQgY29uc3QgZmlsbFJvdW5kZWRSZWN0ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJhZGl1czogbnVtYmVyIHwgbnVtYmVyW10pID0+IHtcbiAgICBjb25zdCByYWRpaSA9IFswLCAwLCAwLCAwXTtcbiAgICBpZiAodHlwZW9mIHJhZGl1cyA9PT0gXCJudW1iZXJcIikgcmFkaWkuZmlsbChyYWRpdXMpO1xuICAgIGVsc2UgcmFkaXVzLmZvckVhY2goKHYsIGkpID0+IHJhZGlpW2ldID0gdik7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHJhZGlpWzBdLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGlpWzFdLCB5KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGlpWzFdKTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGlpWzJdKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGlpWzJdLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKHggKyByYWRpaVszXSwgeSArIGhlaWdodCk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGlpWzNdKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpaVswXSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGlpWzBdLCB5KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9