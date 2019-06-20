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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZC5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9Ad2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvd2ViY29tcG9uZW50cy1idW5kbGUuanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9zcmMvQmFzZS5zY3NzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9zcmMvQmFzZS5zY3NzPzdiNzgiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9zcmMvQmFzZS50cyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy9CdXR0b24udHMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9zcmMvQ2hhbmdlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9zcmMvRGlhbC50cyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy9NZXRlci50cyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy9OdW1ib3gudHMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9zcmMvU2xpZGVyLnRzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL1RhYi50cyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy9UZXh0LnRzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL1RvZ2dsZS50cyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6WyJMaXZlQmFzZUNvbXBvbmVudCIsIkhUTUxFbGVtZW50IiwiY29uc3RydWN0b3IiLCJyb290IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImlubmVySFRNTCIsInJlbmRlciIsIkxpdmVDb21wb25lbnQiLCJvYnNlcnZlZEF0dHJpYnV0ZXMiLCJPYmplY3QiLCJrZXlzIiwicHJvcHMiLCJjYW52YXMiLCJjdHgiLCJpc0Nvbm5lY3RlZFBvbHlmaWxsIiwiaGFuZGxlS2V5RG93biIsImUiLCJoYW5kbGVLZXlVcCIsImhhbmRsZVRvdWNoU3RhcnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvY3VzIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInByZXZYIiwidG91Y2hlcyIsInBhZ2VYIiwicHJldlkiLCJwYWdlWSIsImZyb21YIiwibGVmdCIsImZyb21ZIiwidG9wIiwicHJldlZhbHVlIiwidmFsdWUiLCJoYW5kbGVQb2ludGVyRG93biIsIngiLCJ5Iiwib3JpZ2luYWxFdmVudCIsImhhbmRsZVRvdWNoTW92ZSIsImNoYW5nZWRUb3VjaGVzIiwibW92ZW1lbnRYIiwibW92ZW1lbnRZIiwiaGFuZGxlUG9pbnRlckRyYWciLCJoYW5kbGVUb3VjaEVuZCIsImhhbmRsZVBvaW50ZXJVcCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwiaGFuZGxlV2hlZWwiLCJoYW5kbGVDbGljayIsImhhbmRsZU1vdXNlRG93biIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZU92ZXIiLCJoYW5kbGVNb3VzZU91dCIsImhhbmRsZUNvbnRleHRNZW51IiwiaGFuZGxlRm9jdXNJbiIsInBhaW50IiwiaGFuZGxlRm9jdXNPdXQiLCJjaGlsZHJlbiIsImdldENvbnRleHQiLCJkaXNwbGF5VmFsdWUiLCJ0eXBlIiwidW5pdHN0eWxlIiwidW5pdHMiLCJlbnVtIiwidG9GaXhlZCIsIk1hdGgiLCJhYnMiLCJ0b01JREkiLCJmZXRjaEF0dHJpYnV0ZSIsImkiLCJob3N0IiwiYXR0cmlidXRlcyIsImxlbmd0aCIsImF0dHIiLCJuYW1lIiwibWF0Y2giLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJrZXkiLCJvbGRWYWx1ZSIsInNldFBhcmFtVmFsdWUiLCJjb25uZWN0ZWRDYWxsYmFjayIsImNoYW5nZSIsInNldFZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsIkxpdmVDb21wb25lbnRDaGFuZ2VFdmVudCIsImRldGFpbCIsImFjdGl2ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2hvcnRuYW1lIiwibG9uZ25hbWUiLCJvcmRlciIsImxpbmtuYW1lcyIsIm1taW4iLCJtbWF4IiwiZW51bV9pY29ucyIsIm1vZG1vZGUiLCJpbml0aWFsX2VuYWJsZSIsImluaXRpYWwiLCJleHBvbmVudCIsInN0ZXAiLCJzdGVwcyIsInNwZWVkbGltIiwiZGVmZXIiLCJpbnZpc2libGUiLCJtYXBwYWJsZSIsIkxpdmVCdXR0b24iLCJfaW5Ub3VjaCIsImFjdGl2ZWJnY29sb3IiLCJhY3RpdmViZ29uY29sb3IiLCJiZ2NvbG9yIiwiYmdvbmNvbG9yIiwiYm9yZGVyY29sb3IiLCJmb2N1c2JvcmRlcmNvbG9yIiwiYm9yZGVyV2lkdGgiLCJzdHlsZSIsImxpbmVXaWR0aCIsImJ1dHRvbkJnQ29sb3IiLCJidXR0b25Cb3JkZXJDb2xvciIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImVsbGlwc2UiLCJQSSIsImZpbGwiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInNldFRpbWVvdXQiLCJyZXNldFBvaW50ZXJzIiwiQ3VzdG9tRXZlbnQiLCJMaXZlRGlhbCIsImludGVyYWN0aW9uUmVjdCIsIm5ld1ZhbHVlIiwiZ2V0VmFsdWVGcm9tRGVsdGEiLCJmb250bmFtZSIsImZvbnRzaXplIiwiZm9udGZhY2UiLCJhcHBlYXJhbmNlIiwidHJpYW5nbGUiLCJzaG93bmFtZSIsInNob3dudW1iZXIiLCJhY3RpdmVkaWFsY29sb3IiLCJkaWFsY29sb3IiLCJhY3RpdmVuZWVkbGVjb2xvciIsIm5lZWRsZWNvbG9yIiwicGFuZWxjb2xvciIsInRleHRjb2xvciIsInRyaWJvcmRlcmNvbG9yIiwidHJpY29sb3IiLCJ0cnVlU3RlcHMiLCJmdWxsIiwibWF4U3RlcHMiLCJtaW4iLCJmbG9vciIsInJvdW5kIiwiZGlzdGFuY2UiLCJzdGVwUmFuZ2UiLCJ0cmlhbmdsZUhlaWdodCIsInRyaWFuZ2xlTGluZVdpZHRoIiwic3RhcnQiLCJlbmQiLCJ2YWxQb3MiLCJkaWFsSGVpZ2h0IiwidG9SYWQiLCJkaWFsUmFkaXVzIiwiZGlhbENlbnRlclgiLCJkaWFsQ2VudGVyWSIsImFyY1N0YXJ0WCIsImNvcyIsImFyY1N0YXJ0WSIsInNpbiIsImFyY0VuZFgiLCJhcmNFbmRZIiwidmFsdWVQb3NYIiwidmFsdWVQb3NZIiwiZW5kQ2FwUmFkaXVzIiwicGFuZWxPZmZzZXQiLCJyb3VuZGVkUmVjdCIsImZpbGxSb3VuZGVkUmVjdCIsImFyYyIsIm1pZHBvaW50IiwibW92ZVRvIiwibGluZVRvIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwidGlueU9mZnNldCIsInRpcFBvc2l0aW9uWCIsInRpcFBvc2l0aW9uWSIsInByZXZTdGVwcyIsImRTdGVwcyIsIm1heCIsIkxpdmVNZXRlciIsInBhaW50VmFsdWUiLCJtYXhWYWx1ZSIsInBhaW50VGltZXIiLCJtYXhUaW1lciIsImNsaXBfc2l6ZSIsImludGVydmFsIiwib3JpZW50YXRpb24iLCJpbmFjdGl2ZWNvbGRjb2xvciIsImluYWN0aXZld2FybWNvbG9yIiwiY29sZGNvbG9yIiwid2FybWNvbG9yIiwiaG90Y29sb3IiLCJvdmVybG9hZGNvbG9yIiwiYXRvZGIiLCJwYWludEluIiwidW5kZWZpbmVkIiwiY2xpcCIsImNsZWFyVGltZW91dCIsIndhcm1TdG9wIiwiaG90U3RvcCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJmaWxsUmVjdCIsImRyYXdIZWlnaHQiLCJMaXZlTnVtYm94IiwiYWN0aXZldHJpY29sb3IiLCJ0cmljb2xvcjIiLCJhY3RpdmV0cmljb2xvcjIiLCJhY3RpdmVzbGlkZXJjb2xvciIsImNsb3NlUGF0aCIsInRleHRCYXNlbGluZSIsIkxpdmVTbGlkZXIiLCJnZXRWYWx1ZUZyb21Qb3MiLCJzbGlkZXJjb2xvciIsInRyaW9uY29sb3IiLCJyZWxhdGl2ZSIsInBhZGRpbmciLCJpbnRlcmFjdGlvbldpZHRoIiwidHJpT3JpZ2luIiwiTGl2ZVRhYiIsInRhYlJlY3RzIiwidGV4dG9uY29sb3IiLCJhY3RpdmV0ZXh0Y29sb3IiLCJhY3RpdmV0ZXh0b25jb2xvciIsInNwYWNpbmdfeCIsInNwYWNpbmdfeSIsIm11bHRpbGluZSIsImdldFRhYlJlY3RzIiwiZW51bXMiLCJtYXJnaW4iLCJtaW5IZWlnaHQiLCJjb3VudCIsImNvdW50UGVyTGluZSIsImxpbmVzIiwicmVjdFdpZHRoIiwic3BhY2luZ1giLCJzcGFjaW5nWSIsImNlaWwiLCJ0ZXh0V2lkdGhzIiwidG90YWwiLCJzcGFjZSIsImoiLCJ0ZXh0RGltZW5zaW9ucyIsIm1lYXN1cmVUZXh0IiwidXNlZCIsInJlY3RTcGFjZSIsIkxpdmVUZXh0IiwidGV4dCIsInRleHRvbiIsIkxpdmVUb2dnbGUiLCJ3aW5kb3ciLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsImYiLCJkZWdyZWVzIiwiYSIsImxvZzEwIiwiZGJ0b2EiLCJkYiIsInJhZGl1cyIsInJhZGlpIiwiZm9yRWFjaCIsInYiLCJxdWFkcmF0aWNDdXJ2ZVRvIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsc0JBQXNCLEVBQUU7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6TEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsdURBQVE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztB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Q0F2USxLQUFHLENBQUMwUSxnQkFBSixDQUFxQnBQLENBQUMsR0FBR3VELEtBQXpCLEVBQWdDdEQsQ0FBQyxHQUFHdUQsTUFBcEMsRUFBNEN4RCxDQUFDLEdBQUd1RCxLQUFKLEdBQVkwTCxLQUFLLENBQUMsQ0FBRCxDQUE3RCxFQUFrRWhQLENBQUMsR0FBR3VELE1BQXRFO0FBQ0E5RSxLQUFHLENBQUMySyxNQUFKLENBQVdySixDQUFDLEdBQUdpUCxLQUFLLENBQUMsQ0FBRCxDQUFwQixFQUF5QmhQLENBQUMsR0FBR3VELE1BQTdCO0FBQ0E5RSxLQUFHLENBQUMwUSxnQkFBSixDQUFxQnBQLENBQXJCLEVBQXdCQyxDQUFDLEdBQUd1RCxNQUE1QixFQUFvQ3hELENBQXBDLEVBQXVDQyxDQUFDLEdBQUd1RCxNQUFKLEdBQWF5TCxLQUFLLENBQUMsQ0FBRCxDQUF6RDtBQUNBdlEsS0FBRyxDQUFDMkssTUFBSixDQUFXckosQ0FBWCxFQUFjQyxDQUFDLEdBQUdnUCxLQUFLLENBQUMsQ0FBRCxDQUF2QjtBQUNBdlEsS0FBRyxDQUFDMFEsZ0JBQUosQ0FBcUJwUCxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkJELENBQUMsR0FBR2lQLEtBQUssQ0FBQyxDQUFELENBQXBDLEVBQXlDaFAsQ0FBekM7QUFDQXZCLEtBQUcsQ0FBQ29OLFNBQUo7QUFDQXBOLEtBQUcsQ0FBQ2lILElBQUo7QUFDSCxDQWhCTSxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTGl2ZUNvbXBvbmVudHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTGl2ZUNvbXBvbmVudHNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCIvKipcbkBsaWNlbnNlIEBub2NvbXBpbGVcbkNvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4oZnVuY3Rpb24oKXsvKlxuXG4gQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuJ3VzZSBzdHJpY3QnO3ZhciByLHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93PT09dGhpcz90aGlzOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJm51bGwhPWdsb2JhbD9nbG9iYWw6dGhpcyxjYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcz9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oYSxiLGMpe2EhPUFycmF5LnByb3RvdHlwZSYmYSE9T2JqZWN0LnByb3RvdHlwZSYmKGFbYl09Yy52YWx1ZSl9O2Z1bmN0aW9uIGRhKCl7ZGE9ZnVuY3Rpb24oKXt9O3QuU3ltYm9sfHwodC5TeW1ib2w9ZWEpfXZhciBlYT1mdW5jdGlvbigpe3ZhciBhPTA7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVyblwianNjb21wX3N5bWJvbF9cIisoYnx8XCJcIikrYSsrfX0oKTtcbmZ1bmN0aW9uIGZhKCl7ZGEoKTt2YXIgYT10LlN5bWJvbC5pdGVyYXRvcjthfHwoYT10LlN5bWJvbC5pdGVyYXRvcj10LlN5bWJvbChcIml0ZXJhdG9yXCIpKTtcImZ1bmN0aW9uXCIhPXR5cGVvZiBBcnJheS5wcm90b3R5cGVbYV0mJmNhKEFycmF5LnByb3RvdHlwZSxhLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gaGEodGhpcyl9fSk7ZmE9ZnVuY3Rpb24oKXt9fWZ1bmN0aW9uIGhhKGEpe3ZhciBiPTA7cmV0dXJuIGlhKGZ1bmN0aW9uKCl7cmV0dXJuIGI8YS5sZW5ndGg/e2RvbmU6ITEsdmFsdWU6YVtiKytdfTp7ZG9uZTohMH19KX1mdW5jdGlvbiBpYShhKXtmYSgpO2E9e25leHQ6YX07YVt0LlN5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307cmV0dXJuIGF9ZnVuY3Rpb24gamEoYSl7ZmEoKTt2YXIgYj1hW1N5bWJvbC5pdGVyYXRvcl07cmV0dXJuIGI/Yi5jYWxsKGEpOmhhKGEpfVxuZnVuY3Rpb24ga2EoYSl7Zm9yKHZhciBiLGM9W107IShiPWEubmV4dCgpKS5kb25lOyljLnB1c2goYi52YWx1ZSk7cmV0dXJuIGN9dmFyIGxhO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5zZXRQcm90b3R5cGVPZilsYT1PYmplY3Quc2V0UHJvdG90eXBlT2Y7ZWxzZXt2YXIgbWE7YTp7dmFyIG5hPXtHYTohMH0sb2E9e307dHJ5e29hLl9fcHJvdG9fXz1uYTttYT1vYS5HYTticmVhayBhfWNhdGNoKGEpe31tYT0hMX1sYT1tYT9mdW5jdGlvbihhLGIpe2EuX19wcm90b19fPWI7aWYoYS5fX3Byb3RvX18hPT1iKXRocm93IG5ldyBUeXBlRXJyb3IoYStcIiBpcyBub3QgZXh0ZW5zaWJsZVwiKTtyZXR1cm4gYX06bnVsbH12YXIgcGE9bGE7ZnVuY3Rpb24gcWEoKXt0aGlzLmY9ITE7dGhpcy5iPW51bGw7dGhpcy5hYT12b2lkIDA7dGhpcy5hPTE7dGhpcy5GPTA7dGhpcy5jPW51bGx9XG5mdW5jdGlvbiByYShhKXtpZihhLmYpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7YS5mPSEwfXFhLnByb3RvdHlwZS51PWZ1bmN0aW9uKGEpe3RoaXMuYWE9YX07ZnVuY3Rpb24gc2EoYSxiKXthLmM9e0phOmIsTmE6ITB9O2EuYT1hLkZ9cWEucHJvdG90eXBlLnJldHVybj1mdW5jdGlvbihhKXt0aGlzLmM9e3JldHVybjphfTt0aGlzLmE9dGhpcy5GfTtmdW5jdGlvbiB0YShhLGIpe2EuYT0zO3JldHVybnt2YWx1ZTpifX1mdW5jdGlvbiB1YShhKXt0aGlzLmE9bmV3IHFhO3RoaXMuYj1hfWZ1bmN0aW9uIHZhKGEsYil7cmEoYS5hKTt2YXIgYz1hLmEuYjtpZihjKXJldHVybiB3YShhLFwicmV0dXJuXCJpbiBjP2NbXCJyZXR1cm5cIl06ZnVuY3Rpb24oYSl7cmV0dXJue3ZhbHVlOmEsZG9uZTohMH19LGIsYS5hLnJldHVybik7YS5hLnJldHVybihiKTtyZXR1cm4geGEoYSl9XG5mdW5jdGlvbiB3YShhLGIsYyxkKXt0cnl7dmFyIGU9Yi5jYWxsKGEuYS5iLGMpO2lmKCEoZSBpbnN0YW5jZW9mIE9iamVjdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkl0ZXJhdG9yIHJlc3VsdCBcIitlK1wiIGlzIG5vdCBhbiBvYmplY3RcIik7aWYoIWUuZG9uZSlyZXR1cm4gYS5hLmY9ITEsZTt2YXIgZj1lLnZhbHVlfWNhdGNoKGcpe3JldHVybiBhLmEuYj1udWxsLHNhKGEuYSxnKSx4YShhKX1hLmEuYj1udWxsO2QuY2FsbChhLmEsZik7cmV0dXJuIHhhKGEpfWZ1bmN0aW9uIHhhKGEpe2Zvcig7YS5hLmE7KXRyeXt2YXIgYj1hLmIoYS5hKTtpZihiKXJldHVybiBhLmEuZj0hMSx7dmFsdWU6Yi52YWx1ZSxkb25lOiExfX1jYXRjaChjKXthLmEuYWE9dm9pZCAwLHNhKGEuYSxjKX1hLmEuZj0hMTtpZihhLmEuYyl7Yj1hLmEuYzthLmEuYz1udWxsO2lmKGIuTmEpdGhyb3cgYi5KYTtyZXR1cm57dmFsdWU6Yi5yZXR1cm4sZG9uZTohMH19cmV0dXJue3ZhbHVlOnZvaWQgMCxkb25lOiEwfX1cbmZ1bmN0aW9uIHlhKGEpe3RoaXMubmV4dD1mdW5jdGlvbihiKXtyYShhLmEpO2EuYS5iP2I9d2EoYSxhLmEuYi5uZXh0LGIsYS5hLnUpOihhLmEudShiKSxiPXhhKGEpKTtyZXR1cm4gYn07dGhpcy50aHJvdz1mdW5jdGlvbihiKXtyYShhLmEpO2EuYS5iP2I9d2EoYSxhLmEuYltcInRocm93XCJdLGIsYS5hLnUpOihzYShhLmEsYiksYj14YShhKSk7cmV0dXJuIGJ9O3RoaXMucmV0dXJuPWZ1bmN0aW9uKGIpe3JldHVybiB2YShhLGIpfTtmYSgpO3RoaXNbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfX1mdW5jdGlvbiBCYShhLGIpe2I9bmV3IHlhKG5ldyB1YShiKSk7cGEmJnBhKGIsYS5wcm90b3R5cGUpO3JldHVybiBifVxuKGZ1bmN0aW9uKCl7aWYoIWZ1bmN0aW9uKCl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTthLmluaXRFdmVudChcImZvb1wiLCEwLCEwKTthLnByZXZlbnREZWZhdWx0KCk7cmV0dXJuIGEuZGVmYXVsdFByZXZlbnRlZH0oKSl7dmFyIGE9RXZlbnQucHJvdG90eXBlLnByZXZlbnREZWZhdWx0O0V2ZW50LnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe3RoaXMuY2FuY2VsYWJsZSYmKGEuY2FsbCh0aGlzKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImRlZmF1bHRQcmV2ZW50ZWRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuITB9LGNvbmZpZ3VyYWJsZTohMH0pKX19dmFyIGI9L1RyaWRlbnQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7aWYoIXdpbmRvdy5FdmVudHx8YiYmXCJmdW5jdGlvblwiIT09dHlwZW9mIHdpbmRvdy5FdmVudCl7dmFyIGM9d2luZG93LkV2ZW50O3dpbmRvdy5FdmVudD1mdW5jdGlvbihhLGIpe2I9Ynx8e307dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbmMuaW5pdEV2ZW50KGEsISFiLmJ1YmJsZXMsISFiLmNhbmNlbGFibGUpO3JldHVybiBjfTtpZihjKXtmb3IodmFyIGQgaW4gYyl3aW5kb3cuRXZlbnRbZF09Y1tkXTt3aW5kb3cuRXZlbnQucHJvdG90eXBlPWMucHJvdG90eXBlfX1pZighd2luZG93LkN1c3RvbUV2ZW50fHxiJiZcImZ1bmN0aW9uXCIhPT10eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50KXdpbmRvdy5DdXN0b21FdmVudD1mdW5jdGlvbihhLGIpe2I9Ynx8e307dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtjLmluaXRDdXN0b21FdmVudChhLCEhYi5idWJibGVzLCEhYi5jYW5jZWxhYmxlLGIuZGV0YWlsKTtyZXR1cm4gY30sd2luZG93LkN1c3RvbUV2ZW50LnByb3RvdHlwZT13aW5kb3cuRXZlbnQucHJvdG90eXBlO2lmKCF3aW5kb3cuTW91c2VFdmVudHx8YiYmXCJmdW5jdGlvblwiIT09dHlwZW9mIHdpbmRvdy5Nb3VzZUV2ZW50KXtiPXdpbmRvdy5Nb3VzZUV2ZW50O3dpbmRvdy5Nb3VzZUV2ZW50PVxuZnVuY3Rpb24oYSxiKXtiPWJ8fHt9O3ZhciBjPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudFwiKTtjLmluaXRNb3VzZUV2ZW50KGEsISFiLmJ1YmJsZXMsISFiLmNhbmNlbGFibGUsYi52aWV3fHx3aW5kb3csYi5kZXRhaWwsYi5zY3JlZW5YLGIuc2NyZWVuWSxiLmNsaWVudFgsYi5jbGllbnRZLGIuY3RybEtleSxiLmFsdEtleSxiLnNoaWZ0S2V5LGIubWV0YUtleSxiLmJ1dHRvbixiLnJlbGF0ZWRUYXJnZXQpO3JldHVybiBjfTtpZihiKWZvcihkIGluIGIpd2luZG93Lk1vdXNlRXZlbnRbZF09YltkXTt3aW5kb3cuTW91c2VFdmVudC5wcm90b3R5cGU9Yi5wcm90b3R5cGV9QXJyYXkuZnJvbXx8KEFycmF5LmZyb209ZnVuY3Rpb24oYSl7cmV0dXJuW10uc2xpY2UuY2FsbChhKX0pO09iamVjdC5hc3NpZ258fChPYmplY3QuYXNzaWduPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpLGQ9MCxlO2Q8Yy5sZW5ndGg7ZCsrKWlmKGU9Y1tkXSlmb3IodmFyIGY9XG5hLG49ZSxxPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG4pLEk9MDtJPHEubGVuZ3RoO0krKyllPXFbSV0sZltlXT1uW2VdO3JldHVybiBhfSl9KSgpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXt9ZnVuY3Rpb24gYihhLGIpe2lmKCFhLmNoaWxkTm9kZXMubGVuZ3RoKXJldHVybltdO3N3aXRjaChhLm5vZGVUeXBlKXtjYXNlIE5vZGUuRE9DVU1FTlRfTk9ERTpyZXR1cm4gUS5jYWxsKGEsYik7Y2FzZSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREU6cmV0dXJuIEViLmNhbGwoYSxiKTtkZWZhdWx0OnJldHVybiB4LmNhbGwoYSxiKX19dmFyIGM9XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBIVE1MVGVtcGxhdGVFbGVtZW50LGQ9IShkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkuY2xvbmVOb2RlKClpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpLGU9ITE7L1RyaWRlbnQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJmZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhLGIpe2lmKGEgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KWZvcih2YXIgZDtkPWEuZmlyc3RDaGlsZDspYy5jYWxsKHRoaXMsZCxiKTtlbHNlIGMuY2FsbCh0aGlzLFxuYSxiKTtyZXR1cm4gYX1lPSEwO3ZhciBiPU5vZGUucHJvdG90eXBlLmNsb25lTm9kZTtOb2RlLnByb3RvdHlwZS5jbG9uZU5vZGU9ZnVuY3Rpb24oYSl7YT1iLmNhbGwodGhpcyxhKTt0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCYmKGEuX19wcm90b19fPURvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlKTtyZXR1cm4gYX07RG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbD1IVE1MRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbDtEb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yPUhUTUxFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKERvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLHtub2RlVHlwZTp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERX0sY29uZmlndXJhYmxlOiEwfSxsb2NhbE5hbWU6e2dldDpmdW5jdGlvbigpe30sXG5jb25maWd1cmFibGU6ITB9LG5vZGVOYW1lOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm5cIiNkb2N1bWVudC1mcmFnbWVudFwifSxjb25maWd1cmFibGU6ITB9fSk7dmFyIGM9Tm9kZS5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlO05vZGUucHJvdG90eXBlLmluc2VydEJlZm9yZT1hO3ZhciBkPU5vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkO05vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkPWZ1bmN0aW9uKGIpe2IgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50P2EuY2FsbCh0aGlzLGIsbnVsbCk6ZC5jYWxsKHRoaXMsYik7cmV0dXJuIGJ9O3ZhciBmPU5vZGUucHJvdG90eXBlLnJlbW92ZUNoaWxkLGc9Tm9kZS5wcm90b3R5cGUucmVwbGFjZUNoaWxkO05vZGUucHJvdG90eXBlLnJlcGxhY2VDaGlsZD1mdW5jdGlvbihiLGMpe2IgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50PyhhLmNhbGwodGhpcyxiLGMpLGYuY2FsbCh0aGlzLGMpKTpnLmNhbGwodGhpcyxiLGMpO3JldHVybiBjfTtEb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRG9jdW1lbnRGcmFnbWVudD1cbmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jcmVhdGVFbGVtZW50KFwiZGZcIik7YS5fX3Byb3RvX189RG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGU7cmV0dXJuIGF9O3ZhciBoPURvY3VtZW50LnByb3RvdHlwZS5pbXBvcnROb2RlO0RvY3VtZW50LnByb3RvdHlwZS5pbXBvcnROb2RlPWZ1bmN0aW9uKGEsYil7Yj1oLmNhbGwodGhpcyxhLGJ8fCExKTthIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCYmKGIuX19wcm90b19fPURvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlKTtyZXR1cm4gYn19KCk7dmFyIGY9Tm9kZS5wcm90b3R5cGUuY2xvbmVOb2RlLGc9RG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQsaD1Eb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZSxrPU5vZGUucHJvdG90eXBlLnJlbW92ZUNoaWxkLGw9Tm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQsbj1Ob2RlLnByb3RvdHlwZS5yZXBsYWNlQ2hpbGQscT1ET01QYXJzZXIucHJvdG90eXBlLnBhcnNlRnJvbVN0cmluZyxcbkk9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuSFRNTEVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIpfHx7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5uZXJIVE1MfSxzZXQ6ZnVuY3Rpb24oYSl7dGhpcy5pbm5lckhUTUw9YX19LHY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW5kb3cuTm9kZS5wcm90b3R5cGUsXCJjaGlsZE5vZGVzXCIpfHx7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hpbGROb2Rlc319LHg9RWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbCxRPURvY3VtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLEViPURvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwsRmI9ZnVuY3Rpb24oKXtpZighYyl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpLGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO2IuY29udGVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbmEuY29udGVudC5hcHBlbmRDaGlsZChiKTthPWEuY2xvbmVOb2RlKCEwKTtyZXR1cm4gMD09PWEuY29udGVudC5jaGlsZE5vZGVzLmxlbmd0aHx8MD09PWEuY29udGVudC5maXJzdENoaWxkLmNvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGh8fGR9fSgpO2lmKGMpe3ZhciBUPWRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcInRlbXBsYXRlXCIpLEphPSEwLHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3AudGV4dENvbnRlbnQ9XCJ0ZW1wbGF0ZXtkaXNwbGF5Om5vbmU7fVwiO3ZhciB6YT1kb2N1bWVudC5oZWFkO3phLmluc2VydEJlZm9yZShwLHphLmZpcnN0RWxlbWVudENoaWxkKTthLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEhUTUxFbGVtZW50LnByb3RvdHlwZSk7dmFyIGFhPSFkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLmhhc093blByb3BlcnR5KFwiaW5uZXJIVE1MXCIpO2EuUz1mdW5jdGlvbihiKXtpZighYi5jb250ZW50JiZiLm5hbWVzcGFjZVVSST09PVxuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm5hbWVzcGFjZVVSSSl7Yi5jb250ZW50PVQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2Zvcih2YXIgYztjPWIuZmlyc3RDaGlsZDspbC5jYWxsKGIuY29udGVudCxjKTtpZihhYSliLl9fcHJvdG9fXz1hLnByb3RvdHlwZTtlbHNlIGlmKGIuY2xvbmVOb2RlPWZ1bmN0aW9uKGIpe3JldHVybiBhLmIodGhpcyxiKX0sSmEpdHJ5e20oYikseShiKX1jYXRjaCh2aCl7SmE9ITF9YS5hKGIuY29udGVudCl9fTt2YXIgWD17b3B0aW9uOltcInNlbGVjdFwiXSx0aGVhZDpbXCJ0YWJsZVwiXSxjb2w6W1wiY29sZ3JvdXBcIixcInRhYmxlXCJdLHRyOltcInRib2R5XCIsXCJ0YWJsZVwiXSx0aDpbXCJ0clwiLFwidGJvZHlcIixcInRhYmxlXCJdLHRkOltcInRyXCIsXCJ0Ym9keVwiLFwidGFibGVcIl19LG09ZnVuY3Rpb24oYil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGIsXCJpbm5lckhUTUxcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGJhKHRoaXMpfSxzZXQ6ZnVuY3Rpb24oYil7dmFyIGM9WFsoLzwoW2Etel1bXi9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKykvaS5leGVjKGIpfHxcbltcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXTtpZihjKWZvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCsrKWI9XCI8XCIrY1tkXStcIj5cIitiK1wiPC9cIitjW2RdK1wiPlwiO1QuYm9keS5pbm5lckhUTUw9Yjtmb3IoYS5hKFQpO3RoaXMuY29udGVudC5maXJzdENoaWxkOylrLmNhbGwodGhpcy5jb250ZW50LHRoaXMuY29udGVudC5maXJzdENoaWxkKTtiPVQuYm9keTtpZihjKWZvcihkPTA7ZDxjLmxlbmd0aDtkKyspYj1iLmxhc3RDaGlsZDtmb3IoO2IuZmlyc3RDaGlsZDspbC5jYWxsKHRoaXMuY29udGVudCxiLmZpcnN0Q2hpbGQpfSxjb25maWd1cmFibGU6ITB9KX0seT1mdW5jdGlvbihhKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcIm91dGVySFRNTFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm5cIjx0ZW1wbGF0ZT5cIit0aGlzLmlubmVySFRNTCtcIjwvdGVtcGxhdGU+XCJ9LHNldDpmdW5jdGlvbihhKXtpZih0aGlzLnBhcmVudE5vZGUpe1QuYm9keS5pbm5lckhUTUw9YTtmb3IoYT10aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1QuYm9keS5maXJzdENoaWxkOylsLmNhbGwoYSxcblQuYm9keS5maXJzdENoaWxkKTtuLmNhbGwodGhpcy5wYXJlbnROb2RlLGEsdGhpcyl9ZWxzZSB0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBzZXQgdGhlICdvdXRlckhUTUwnIHByb3BlcnR5IG9uICdFbGVtZW50JzogVGhpcyBlbGVtZW50IGhhcyBubyBwYXJlbnQgbm9kZS5cIik7fSxjb25maWd1cmFibGU6ITB9KX07bShhLnByb3RvdHlwZSk7eShhLnByb3RvdHlwZSk7YS5hPWZ1bmN0aW9uKGMpe2M9YihjLFwidGVtcGxhdGVcIik7Zm9yKHZhciBkPTAsZT1jLmxlbmd0aCxmO2Q8ZSYmKGY9Y1tkXSk7ZCsrKWEuUyhmKX07ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixmdW5jdGlvbigpe2EuYShkb2N1bWVudCl9KTtEb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudD1mdW5jdGlvbigpe3ZhciBiPWcuYXBwbHkodGhpcyxhcmd1bWVudHMpO1widGVtcGxhdGVcIj09PWIubG9jYWxOYW1lJiZhLlMoYik7cmV0dXJuIGJ9O0RPTVBhcnNlci5wcm90b3R5cGUucGFyc2VGcm9tU3RyaW5nPVxuZnVuY3Rpb24oKXt2YXIgYj1xLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthLmEoYik7cmV0dXJuIGJ9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGJhKHRoaXMpfSxzZXQ6ZnVuY3Rpb24oYil7SS5zZXQuY2FsbCh0aGlzLGIpO2EuYSh0aGlzKX0sY29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITB9KTt2YXIgWT0vWyZcXHUwMEEwXCJdL2csR2I9L1smXFx1MDBBMDw+XS9nLEthPWZ1bmN0aW9uKGEpe3N3aXRjaChhKXtjYXNlIFwiJlwiOnJldHVyblwiJmFtcDtcIjtjYXNlIFwiPFwiOnJldHVyblwiJmx0O1wiO2Nhc2UgXCI+XCI6cmV0dXJuXCImZ3Q7XCI7Y2FzZSAnXCInOnJldHVyblwiJnF1b3Q7XCI7Y2FzZSBcIlxcdTAwYTBcIjpyZXR1cm5cIiZuYnNwO1wifX07cD1mdW5jdGlvbihhKXtmb3IodmFyIGI9e30sYz0wO2M8YS5sZW5ndGg7YysrKWJbYVtjXV09ITA7cmV0dXJuIGJ9O3ZhciBBYT1wKFwiYXJlYSBiYXNlIGJyIGNvbCBjb21tYW5kIGVtYmVkIGhyIGltZyBpbnB1dCBrZXlnZW4gbGluayBtZXRhIHBhcmFtIHNvdXJjZSB0cmFjayB3YnJcIi5zcGxpdChcIiBcIikpLFxuTGE9cChcInN0eWxlIHNjcmlwdCB4bXAgaWZyYW1lIG5vZW1iZWQgbm9mcmFtZXMgcGxhaW50ZXh0IG5vc2NyaXB0XCIuc3BsaXQoXCIgXCIpKSxiYT1mdW5jdGlvbihhLGIpe1widGVtcGxhdGVcIj09PWEubG9jYWxOYW1lJiYoYT1hLmNvbnRlbnQpO2Zvcih2YXIgYz1cIlwiLGQ9Yj9iKGEpOnYuZ2V0LmNhbGwoYSksZT0wLGY9ZC5sZW5ndGgsZztlPGYmJihnPWRbZV0pO2UrKyl7YTp7dmFyIGg9Zzt2YXIgaz1hO3ZhciBsPWI7c3dpdGNoKGgubm9kZVR5cGUpe2Nhc2UgTm9kZS5FTEVNRU5UX05PREU6Zm9yKHZhciBuPWgubG9jYWxOYW1lLG09XCI8XCIrbixxPWguYXR0cmlidXRlcyx4PTA7az1xW3hdO3grKyltKz1cIiBcIitrLm5hbWUrJz1cIicray52YWx1ZS5yZXBsYWNlKFksS2EpKydcIic7bSs9XCI+XCI7aD1BYVtuXT9tOm0rYmEoaCxsKStcIjwvXCIrbitcIj5cIjticmVhayBhO2Nhc2UgTm9kZS5URVhUX05PREU6aD1oLmRhdGE7aD1rJiZMYVtrLmxvY2FsTmFtZV0/aDpoLnJlcGxhY2UoR2IsS2EpO2JyZWFrIGE7XG5jYXNlIE5vZGUuQ09NTUVOVF9OT0RFOmg9XCJcXHgzYyEtLVwiK2guZGF0YStcIi0tXFx4M2VcIjticmVhayBhO2RlZmF1bHQ6dGhyb3cgd2luZG93LmNvbnNvbGUuZXJyb3IoaCksRXJyb3IoXCJub3QgaW1wbGVtZW50ZWRcIik7fX1jKz1ofXJldHVybiBjfX1pZihjfHxGYil7YS5iPWZ1bmN0aW9uKGEsYil7dmFyIGM9Zi5jYWxsKGEsITEpO3RoaXMuUyYmdGhpcy5TKGMpO2ImJihsLmNhbGwoYy5jb250ZW50LGYuY2FsbChhLmNvbnRlbnQsITApKSxNYShjLmNvbnRlbnQsYS5jb250ZW50KSk7cmV0dXJuIGN9O3ZhciBNYT1mdW5jdGlvbihjLGQpe2lmKGQucXVlcnlTZWxlY3RvckFsbCYmKGQ9YihkLFwidGVtcGxhdGVcIiksMCE9PWQubGVuZ3RoKSl7Yz1iKGMsXCJ0ZW1wbGF0ZVwiKTtmb3IodmFyIGU9MCxmPWMubGVuZ3RoLGcsaDtlPGY7ZSsrKWg9ZFtlXSxnPWNbZV0sYSYmYS5TJiZhLlMoaCksbi5jYWxsKGcucGFyZW50Tm9kZSxzZi5jYWxsKGgsITApLGcpfX0sc2Y9Tm9kZS5wcm90b3R5cGUuY2xvbmVOb2RlPVxuZnVuY3Rpb24oYil7aWYoIWUmJmQmJnRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KWlmKGIpdmFyIGM9dGYuY2FsbCh0aGlzLm93bmVyRG9jdW1lbnQsdGhpcywhMCk7ZWxzZSByZXR1cm4gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtlbHNlIHRoaXMubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSYmXCJ0ZW1wbGF0ZVwiPT09dGhpcy5sb2NhbE5hbWUmJnRoaXMubmFtZXNwYWNlVVJJPT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubmFtZXNwYWNlVVJJP2M9YS5iKHRoaXMsYik6Yz1mLmNhbGwodGhpcyxiKTtiJiZNYShjLHRoaXMpO3JldHVybiBjfSx0Zj1Eb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZT1mdW5jdGlvbihjLGQpe2Q9ZHx8ITE7aWYoXCJ0ZW1wbGF0ZVwiPT09Yy5sb2NhbE5hbWUpcmV0dXJuIGEuYihjLGQpO3ZhciBlPWguY2FsbCh0aGlzLGMsZCk7aWYoZCl7TWEoZSxjKTtjPWIoZSwnc2NyaXB0Om5vdChbdHlwZV0pLHNjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwiXSxzY3JpcHRbdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXScpO1xuZm9yKHZhciBmLGs9MDtrPGMubGVuZ3RoO2srKyl7Zj1jW2tdO2Q9Zy5jYWxsKGRvY3VtZW50LFwic2NyaXB0XCIpO2QudGV4dENvbnRlbnQ9Zi50ZXh0Q29udGVudDtmb3IodmFyIGw9Zi5hdHRyaWJ1dGVzLG09MCxxO208bC5sZW5ndGg7bSsrKXE9bFttXSxkLnNldEF0dHJpYnV0ZShxLm5hbWUscS52YWx1ZSk7bi5jYWxsKGYucGFyZW50Tm9kZSxkLGYpfX1yZXR1cm4gZX19YyYmKHdpbmRvdy5IVE1MVGVtcGxhdGVFbGVtZW50PWEpfSkoKTt2YXIgQ2E9c2V0VGltZW91dDtmdW5jdGlvbiBEYSgpe31mdW5jdGlvbiBFYShhLGIpe3JldHVybiBmdW5jdGlvbigpe2EuYXBwbHkoYixhcmd1bWVudHMpfX1mdW5jdGlvbiB1KGEpe2lmKCEodGhpcyBpbnN0YW5jZW9mIHUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXdcIik7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGEpdGhyb3cgbmV3IFR5cGVFcnJvcihcIm5vdCBhIGZ1bmN0aW9uXCIpO3RoaXMuST0wO3RoaXMub2E9ITE7dGhpcy53PXZvaWQgMDt0aGlzLlU9W107RmEoYSx0aGlzKX1cbmZ1bmN0aW9uIEdhKGEsYil7Zm9yKDszPT09YS5JOylhPWEudzswPT09YS5JP2EuVS5wdXNoKGIpOihhLm9hPSEwLEhhKGZ1bmN0aW9uKCl7dmFyIGM9MT09PWEuST9iLlBhOmIuUWE7aWYobnVsbD09PWMpKDE9PT1hLkk/SWE6TmEpKGIubWEsYS53KTtlbHNle3RyeXt2YXIgZD1jKGEudyl9Y2F0Y2goZSl7TmEoYi5tYSxlKTtyZXR1cm59SWEoYi5tYSxkKX19KSl9ZnVuY3Rpb24gSWEoYSxiKXt0cnl7aWYoYj09PWEpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuXCIpO2lmKGImJihcIm9iamVjdFwiPT09dHlwZW9mIGJ8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKSl7dmFyIGM9Yi50aGVuO2lmKGIgaW5zdGFuY2VvZiB1KXthLkk9MzthLnc9YjtPYShhKTtyZXR1cm59aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGMpe0ZhKEVhKGMsYiksYSk7cmV0dXJufX1hLkk9MTthLnc9YjtPYShhKX1jYXRjaChkKXtOYShhLGQpfX1cbmZ1bmN0aW9uIE5hKGEsYil7YS5JPTI7YS53PWI7T2EoYSl9ZnVuY3Rpb24gT2EoYSl7Mj09PWEuSSYmMD09PWEuVS5sZW5ndGgmJkhhKGZ1bmN0aW9uKCl7YS5vYXx8XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjb25zb2xlJiZjb25zb2xlJiZjb25zb2xlLndhcm4oXCJQb3NzaWJsZSBVbmhhbmRsZWQgUHJvbWlzZSBSZWplY3Rpb246XCIsYS53KX0pO2Zvcih2YXIgYj0wLGM9YS5VLmxlbmd0aDtiPGM7YisrKUdhKGEsYS5VW2JdKTthLlU9bnVsbH1mdW5jdGlvbiBQYShhLGIsYyl7dGhpcy5QYT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hOm51bGw7dGhpcy5RYT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iOm51bGw7dGhpcy5tYT1jfWZ1bmN0aW9uIEZhKGEsYil7dmFyIGM9ITE7dHJ5e2EoZnVuY3Rpb24oYSl7Y3x8KGM9ITAsSWEoYixhKSl9LGZ1bmN0aW9uKGEpe2N8fChjPSEwLE5hKGIsYSkpfSl9Y2F0Y2goZCl7Y3x8KGM9ITAsTmEoYixkKSl9fVxudS5wcm90b3R5cGVbXCJjYXRjaFwiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy50aGVuKG51bGwsYSl9O3UucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oYSxiKXt2YXIgYz1uZXcgdGhpcy5jb25zdHJ1Y3RvcihEYSk7R2EodGhpcyxuZXcgUGEoYSxiLGMpKTtyZXR1cm4gY307dS5wcm90b3R5cGVbXCJmaW5hbGx5XCJdPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuY29uc3RydWN0b3I7cmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbihjKXtyZXR1cm4gYi5yZXNvbHZlKGEoKSkudGhlbihmdW5jdGlvbigpe3JldHVybiBjfSl9LGZ1bmN0aW9uKGMpe3JldHVybiBiLnJlc29sdmUoYSgpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGIucmVqZWN0KGMpfSl9KX07XG5mdW5jdGlvbiBRYShhKXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYixjKXtmdW5jdGlvbiBkKGEsZyl7dHJ5e2lmKGcmJihcIm9iamVjdFwiPT09dHlwZW9mIGd8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnKSl7dmFyIGg9Zy50aGVuO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBoKXtoLmNhbGwoZyxmdW5jdGlvbihiKXtkKGEsYil9LGMpO3JldHVybn19ZVthXT1nOzA9PT0tLWYmJmIoZSl9Y2F0Y2gobil7YyhuKX19aWYoIWF8fFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYS5sZW5ndGgpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2UuYWxsIGFjY2VwdHMgYW4gYXJyYXlcIik7dmFyIGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSk7aWYoMD09PWUubGVuZ3RoKXJldHVybiBiKFtdKTtmb3IodmFyIGY9ZS5sZW5ndGgsZz0wO2c8ZS5sZW5ndGg7ZysrKWQoZyxlW2ddKX0pfVxuZnVuY3Rpb24gUmEoYSl7cmV0dXJuIGEmJlwib2JqZWN0XCI9PT10eXBlb2YgYSYmYS5jb25zdHJ1Y3Rvcj09PXU/YTpuZXcgdShmdW5jdGlvbihiKXtiKGEpfSl9ZnVuY3Rpb24gU2EoYSl7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGIsYyl7YyhhKX0pfWZ1bmN0aW9uIFRhKGEpe3JldHVybiBuZXcgdShmdW5jdGlvbihiLGMpe2Zvcih2YXIgZD0wLGU9YS5sZW5ndGg7ZDxlO2QrKylhW2RdLnRoZW4oYixjKX0pfXZhciBIYT1cImZ1bmN0aW9uXCI9PT10eXBlb2Ygc2V0SW1tZWRpYXRlJiZmdW5jdGlvbihhKXtzZXRJbW1lZGlhdGUoYSl9fHxmdW5jdGlvbihhKXtDYShhLDApfTsvKlxuXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaWYoIXdpbmRvdy5Qcm9taXNlKXt3aW5kb3cuUHJvbWlzZT11O3UucHJvdG90eXBlLnRoZW49dS5wcm90b3R5cGUudGhlbjt1LmFsbD1RYTt1LnJhY2U9VGE7dS5yZXNvbHZlPVJhO3UucmVqZWN0PVNhO3ZhciBVYT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSxWYT1bXTsobmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGE9VmEubGVuZ3RoLGI9MDtiPGE7YisrKVZhW2JdKCk7VmEuc3BsaWNlKDAsYSl9KSkub2JzZXJ2ZShVYSx7Y2hhcmFjdGVyRGF0YTohMH0pO0hhPWZ1bmN0aW9uKGEpe1ZhLnB1c2goYSk7VWEudGV4dENvbnRlbnQ9MDxVYS50ZXh0Q29udGVudC5sZW5ndGg/XCJcIjpcImFcIn19Oy8qXG4gQ29weXJpZ2h0IChDKSAyMDE1IGJ5IFdlYlJlZmxlY3Rpb25cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuXG4qL1xuKGZ1bmN0aW9uKGEsYil7aWYoIShiIGluIGEpKXt2YXIgYz10eXBlb2YgZ2xvYmFsPT09dHlwZW9mIGM/d2luZG93Omdsb2JhbCxkPTAsZT1cIlwiK01hdGgucmFuZG9tKCksZj1cIl9fXFx1MDAwMXN5bWJvbEBAXCIrZSxnPWEuZ2V0T3duUHJvcGVydHlOYW1lcyxoPWEuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLGs9YS5jcmVhdGUsbD1hLmtleXMsbj1hLmZyZWV6ZXx8YSxxPWEuZGVmaW5lUHJvcGVydHksST1hLmRlZmluZVByb3BlcnRpZXMsdj1oKGEsXCJnZXRPd25Qcm9wZXJ0eU5hbWVzXCIpLHg9YS5wcm90b3R5cGUsUT14Lmhhc093blByb3BlcnR5LEViPXgucHJvcGVydHlJc0VudW1lcmFibGUsRmI9eC50b1N0cmluZyxUPWZ1bmN0aW9uKGEsYixjKXtRLmNhbGwoYSxmKXx8cShhLGYse2VudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiExLHdyaXRhYmxlOiExLHZhbHVlOnt9fSk7YVtmXVtcIkBAXCIrYl09Y30sSmE9ZnVuY3Rpb24oYSxiKXt2YXIgYz1rKGEpO2coYikuZm9yRWFjaChmdW5jdGlvbihhKXtYLmNhbGwoYixcbmEpJiZBYShjLGEsYlthXSl9KTtyZXR1cm4gY30scD1mdW5jdGlvbigpe30semE9ZnVuY3Rpb24oYSl7cmV0dXJuIGEhPWYmJiFRLmNhbGwoWSxhKX0sYWE9ZnVuY3Rpb24oYSl7cmV0dXJuIGEhPWYmJlEuY2FsbChZLGEpfSxYPWZ1bmN0aW9uKGEpe3ZhciBiPVwiXCIrYTtyZXR1cm4gYWEoYik/US5jYWxsKHRoaXMsYikmJnRoaXNbZl1bXCJAQFwiK2JdOkViLmNhbGwodGhpcyxhKX0sbT1mdW5jdGlvbihiKXtxKHgsYix7ZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsZ2V0OnAsc2V0OmZ1bmN0aW9uKGEpe2JhKHRoaXMsYix7ZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6YX0pO1QodGhpcyxiLCEwKX19KTtyZXR1cm4gbihZW2JdPXEoYShiKSxcImNvbnN0cnVjdG9yXCIsR2IpKX0seT1mdW5jdGlvbihhKXtpZih0aGlzJiZ0aGlzIT09Yyl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yXCIpO3JldHVybiBtKFwiX19cXHUwMDAxc3ltYm9sOlwiLmNvbmNhdChhfHxcblwiXCIsZSwrK2QpKX0sWT1rKG51bGwpLEdiPXt2YWx1ZTp5fSxLYT1mdW5jdGlvbihhKXtyZXR1cm4gWVthXX0sQWE9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVwiXCIrYjtpZihhYShkKSl7Yj1iYTtpZihjLmVudW1lcmFibGUpe3ZhciBlPWsoYyk7ZS5lbnVtZXJhYmxlPSExfWVsc2UgZT1jO2IoYSxkLGUpO1QoYSxkLCEhYy5lbnVtZXJhYmxlKX1lbHNlIHEoYSxiLGMpO3JldHVybiBhfSxMYT1mdW5jdGlvbihhKXtyZXR1cm4gZyhhKS5maWx0ZXIoYWEpLm1hcChLYSl9O3YudmFsdWU9QWE7cShhLFwiZGVmaW5lUHJvcGVydHlcIix2KTt2LnZhbHVlPUxhO3EoYSxiLHYpO3YudmFsdWU9ZnVuY3Rpb24oYSl7cmV0dXJuIGcoYSkuZmlsdGVyKHphKX07cShhLFwiZ2V0T3duUHJvcGVydHlOYW1lc1wiLHYpO3YudmFsdWU9ZnVuY3Rpb24oYSxiKXt2YXIgYz1MYShiKTtjLmxlbmd0aD9sKGIpLmNvbmNhdChjKS5mb3JFYWNoKGZ1bmN0aW9uKGMpe1guY2FsbChiLGMpJiZBYShhLGMsYltjXSl9KTpJKGEsXG5iKTtyZXR1cm4gYX07cShhLFwiZGVmaW5lUHJvcGVydGllc1wiLHYpO3YudmFsdWU9WDtxKHgsXCJwcm9wZXJ0eUlzRW51bWVyYWJsZVwiLHYpO3YudmFsdWU9eTtxKGMsXCJTeW1ib2xcIix2KTt2LnZhbHVlPWZ1bmN0aW9uKGEpe2E9XCJfX1xcdTAwMDFzeW1ib2w6XCIuY29uY2F0KFwiX19cXHUwMDAxc3ltYm9sOlwiLGEsZSk7cmV0dXJuIGEgaW4geD9ZW2FdOm0oYSl9O3EoeSxcImZvclwiLHYpO3YudmFsdWU9ZnVuY3Rpb24oYSl7aWYoemEoYSkpdGhyb3cgbmV3IFR5cGVFcnJvcihhK1wiIGlzIG5vdCBhIHN5bWJvbFwiKTtyZXR1cm4gUS5jYWxsKFksYSk/YS5zbGljZSgyMCwtZS5sZW5ndGgpOnZvaWQgMH07cSh5LFwia2V5Rm9yXCIsdik7di52YWx1ZT1mdW5jdGlvbihhLGIpe3ZhciBjPWgoYSxiKTtjJiZhYShiKSYmKGMuZW51bWVyYWJsZT1YLmNhbGwoYSxiKSk7cmV0dXJuIGN9O3EoYSxcImdldE93blByb3BlcnR5RGVzY3JpcHRvclwiLHYpO3YudmFsdWU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/XG5rKGEpOkphKGEsYil9O3EoYSxcImNyZWF0ZVwiLHYpO3YudmFsdWU9ZnVuY3Rpb24oKXt2YXIgYT1GYi5jYWxsKHRoaXMpO3JldHVyblwiW29iamVjdCBTdHJpbmddXCI9PT1hJiZhYSh0aGlzKT9cIltvYmplY3QgU3ltYm9sXVwiOmF9O3EoeCxcInRvU3RyaW5nXCIsdik7dHJ5e3ZhciBiYT1rKHEoe30sXCJfX1xcdTAwMDFzeW1ib2w6XCIse2dldDpmdW5jdGlvbigpe3JldHVybiBxKHRoaXMsXCJfX1xcdTAwMDFzeW1ib2w6XCIse3ZhbHVlOiExfSlbXCJfX1xcdTAwMDFzeW1ib2w6XCJdfX0pKVtcIl9fXFx1MDAwMXN5bWJvbDpcIl18fHF9Y2F0Y2goTWEpe2JhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1oKHgsYik7ZGVsZXRlIHhbYl07cShhLGIsYyk7cSh4LGIsZCl9fX19KShPYmplY3QsXCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcIik7XG4oZnVuY3Rpb24oYSl7dmFyIGI9YS5kZWZpbmVQcm9wZXJ0eSxjPWEucHJvdG90eXBlLGQ9Yy50b1N0cmluZyxlO1wiaXRlcmF0b3IgbWF0Y2ggcmVwbGFjZSBzZWFyY2ggc3BsaXQgaGFzSW5zdGFuY2UgaXNDb25jYXRTcHJlYWRhYmxlIHVuc2NvcGFibGVzIHNwZWNpZXMgdG9QcmltaXRpdmUgdG9TdHJpbmdUYWdcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihmKXtpZighKGYgaW4gU3ltYm9sKSlzd2l0Y2goYihTeW1ib2wsZix7dmFsdWU6U3ltYm9sKGYpfSksZil7Y2FzZSBcInRvU3RyaW5nVGFnXCI6ZT1hLmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjLFwidG9TdHJpbmdcIiksZS52YWx1ZT1mdW5jdGlvbigpe3ZhciBhPWQuY2FsbCh0aGlzKSxiPXRoaXNbU3ltYm9sLnRvU3RyaW5nVGFnXTtyZXR1cm5cInVuZGVmaW5lZFwiPT09dHlwZW9mIGI/YTpcIltvYmplY3QgXCIrYitcIl1cIn0sYihjLFwidG9TdHJpbmdcIixlKX19KX0pKE9iamVjdCxTeW1ib2wpO1xuKGZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKCl7cmV0dXJuIHRoaXN9YlthXXx8KGJbYV09ZnVuY3Rpb24oKXt2YXIgYj0wLGM9dGhpcyxnPXtuZXh0OmZ1bmN0aW9uKCl7dmFyIGE9Yy5sZW5ndGg8PWI7cmV0dXJuIGE/e2RvbmU6YX06e2RvbmU6YSx2YWx1ZTpjW2IrK119fX07Z1thXT1kO3JldHVybiBnfSk7Y1thXXx8KGNbYV09ZnVuY3Rpb24oKXt2YXIgYj1TdHJpbmcuZnJvbUNvZGVQb2ludCxjPXRoaXMsZz0wLGg9Yy5sZW5ndGgsaz17bmV4dDpmdW5jdGlvbigpe3ZhciBhPWg8PWcsZD1hP1wiXCI6YihjLmNvZGVQb2ludEF0KGcpKTtnKz1kLmxlbmd0aDtyZXR1cm4gYT97ZG9uZTphfTp7ZG9uZTphLHZhbHVlOmR9fX07a1thXT1kO3JldHVybiBrfSl9KShTeW1ib2wuaXRlcmF0b3IsQXJyYXkucHJvdG90eXBlLFN0cmluZy5wcm90b3R5cGUpOy8qXG5cbkNvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG52YXIgV2E9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMD09PXRoaXM/XCJbb2JqZWN0IFVuZGVmaW5lZF1cIjpudWxsPT09dGhpcz9cIltvYmplY3QgTnVsbF1cIjpXYS5jYWxsKHRoaXMpfTtPYmplY3Qua2V5cz1mdW5jdGlvbihhKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYSkuZmlsdGVyKGZ1bmN0aW9uKGIpe3JldHVybihiPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSxiKSkmJmIuZW51bWVyYWJsZX0pfTt2YXIgWGE9d2luZG93LlN5bWJvbC5pdGVyYXRvcjtcblN0cmluZy5wcm90b3R5cGVbWGFdJiZTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0fHwoU3RyaW5nLnByb3RvdHlwZVtYYV09ZnVuY3Rpb24gWWEoKXt2YXIgYixjPXRoaXM7cmV0dXJuIEJhKFlhLGZ1bmN0aW9uKGQpezE9PWQuYSYmKGI9MCk7aWYoMyE9ZC5hKXJldHVybiBiPGMubGVuZ3RoP2Q9dGEoZCxjW2JdKTooZC5hPTAsZD12b2lkIDApLGQ7YisrO2QuYT0yfSl9KTtTZXQucHJvdG90eXBlW1hhXXx8KFNldC5wcm90b3R5cGVbWGFdPWZ1bmN0aW9uIFphKCl7dmFyIGIsYz10aGlzLGQ7cmV0dXJuIEJhKFphLGZ1bmN0aW9uKGUpezE9PWUuYSYmKGI9W10sYy5mb3JFYWNoKGZ1bmN0aW9uKGMpe2IucHVzaChjKX0pLGQ9MCk7aWYoMyE9ZS5hKXJldHVybiBkPGIubGVuZ3RoP2U9dGEoZSxiW2RdKTooZS5hPTAsZT12b2lkIDApLGU7ZCsrO2UuYT0yfSl9KTtcbk1hcC5wcm90b3R5cGVbWGFdfHwoTWFwLnByb3RvdHlwZVtYYV09ZnVuY3Rpb24gJGEoKXt2YXIgYixjPXRoaXMsZDtyZXR1cm4gQmEoJGEsZnVuY3Rpb24oZSl7MT09ZS5hJiYoYj1bXSxjLmZvckVhY2goZnVuY3Rpb24oYyxkKXtiLnB1c2goW2QsY10pfSksZD0wKTtpZigzIT1lLmEpcmV0dXJuIGQ8Yi5sZW5ndGg/ZT10YShlLGJbZF0pOihlLmE9MCxlPXZvaWQgMCksZTtkKys7ZS5hPTJ9KX0pOy8qXG5cbiBDb3B5cmlnaHQgKGMpIDIwMTQgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG53aW5kb3cuV2ViQ29tcG9uZW50cz13aW5kb3cuV2ViQ29tcG9uZW50c3x8e2ZsYWdzOnt9fTt2YXIgYWI9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJ3ZWJjb21wb25lbnRzLWJ1bmRsZVwiXScpLGJiPS93Yy0oLispLyx3PXt9O2lmKCF3Lm5vT3B0cyl7bG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpLnNwbGl0KFwiJlwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2E9YS5zcGxpdChcIj1cIik7dmFyIGI7YVswXSYmKGI9YVswXS5tYXRjaChiYikpJiYod1tiWzFdXT1hWzFdfHwhMCl9KTtpZihhYilmb3IodmFyIGNiPTAsZGI9dm9pZCAwO2RiPWFiLmF0dHJpYnV0ZXNbY2JdO2NiKyspXCJzcmNcIiE9PWRiLm5hbWUmJih3W2RiLm5hbWVdPWRiLnZhbHVlfHwhMCk7aWYody5sb2cmJncubG9nLnNwbGl0KXt2YXIgZWI9dy5sb2cuc3BsaXQoXCIsXCIpO3cubG9nPXt9O2ViLmZvckVhY2goZnVuY3Rpb24oYSl7dy5sb2dbYV09ITB9KX1lbHNlIHcubG9nPXt9fVxud2luZG93LldlYkNvbXBvbmVudHMuZmxhZ3M9dzt2YXIgZmI9dy5zaGFkeWRvbTtmYiYmKHdpbmRvdy5TaGFkeURPTT13aW5kb3cuU2hhZHlET018fHt9LHdpbmRvdy5TaGFkeURPTS5mb3JjZT1mYik7dmFyIGdiPXcucmVnaXN0ZXJ8fHcuY2U7Z2ImJndpbmRvdy5jdXN0b21FbGVtZW50cyYmKHdpbmRvdy5jdXN0b21FbGVtZW50cy5mb3JjZVBvbHlmaWxsPWdiKTsvKlxuXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuZnVuY3Rpb24gaGIoKXt9aGIucHJvdG90eXBlLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybnt9fTtmdW5jdGlvbiB6KGEpe2EuX19zaGFkeXx8KGEuX19zaGFkeT1uZXcgaGIpO3JldHVybiBhLl9fc2hhZHl9ZnVuY3Rpb24gQShhKXtyZXR1cm4gYSYmYS5fX3NoYWR5fTt2YXIgQj13aW5kb3cuU2hhZHlET018fHt9O0IuTGE9ISghRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93fHwhTm9kZS5wcm90b3R5cGUuZ2V0Um9vdE5vZGUpO3ZhciBpYj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5vZGUucHJvdG90eXBlLFwiZmlyc3RDaGlsZFwiKTtCLkQ9ISEoaWImJmliLmNvbmZpZ3VyYWJsZSYmaWIuZ2V0KTtCLmthPUIuZm9yY2V8fCFCLkxhO0IuTT1CLm5vUGF0Y2h8fCExO0IudGE9Qi5wcmVmZXJQZXJmb3JtYW5jZTt2YXIgamI9bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChcIlRyaWRlbnRcIik7Qi55YT1qYjtmdW5jdGlvbiBrYihhKXtyZXR1cm4oYT1BKGEpKSYmdm9pZCAwIT09YS5maXJzdENoaWxkfWZ1bmN0aW9uIEMoYSl7cmV0dXJuXCJTaGFkeVJvb3RcIj09PWEuRGF9ZnVuY3Rpb24gbGIoYSl7cmV0dXJuKGE9KGE9QShhKSkmJmEucm9vdCkmJm1iKGEpfVxudmFyIG5iPUVsZW1lbnQucHJvdG90eXBlLG9iPW5iLm1hdGNoZXN8fG5iLm1hdGNoZXNTZWxlY3Rvcnx8bmIubW96TWF0Y2hlc1NlbGVjdG9yfHxuYi5tc01hdGNoZXNTZWxlY3Rvcnx8bmIub01hdGNoZXNTZWxlY3Rvcnx8bmIud2Via2l0TWF0Y2hlc1NlbGVjdG9yLHBiPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpLHFiPTAscmI9W107KG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKCl7Zm9yKDtyYi5sZW5ndGg7KXRyeXtyYi5zaGlmdCgpKCl9Y2F0Y2goYSl7dGhyb3cgcGIudGV4dENvbnRlbnQ9cWIrKyxhO319KSkub2JzZXJ2ZShwYix7Y2hhcmFjdGVyRGF0YTohMH0pO2Z1bmN0aW9uIHNiKGEpe3JiLnB1c2goYSk7cGIudGV4dENvbnRlbnQ9cWIrK312YXIgdGI9ISFkb2N1bWVudC5jb250YWlucztmdW5jdGlvbiB1YihhLGIpe2Zvcig7Yjspe2lmKGI9PWEpcmV0dXJuITA7Yj1iLl9fc2hhZHlfcGFyZW50Tm9kZX1yZXR1cm4hMX1cbmZ1bmN0aW9uIHZiKGEpe2Zvcih2YXIgYj1hLmxlbmd0aC0xOzA8PWI7Yi0tKXt2YXIgYz1hW2JdLGQ9Yy5nZXRBdHRyaWJ1dGUoXCJpZFwiKXx8Yy5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpO2QmJlwibGVuZ3RoXCIhPT1kJiZpc05hTihkKSYmKGFbZF09Yyl9YS5pdGVtPWZ1bmN0aW9uKGIpe3JldHVybiBhW2JdfTthLm5hbWVkSXRlbT1mdW5jdGlvbihiKXtpZihcImxlbmd0aFwiIT09YiYmaXNOYU4oYikmJmFbYl0pcmV0dXJuIGFbYl07Zm9yKHZhciBjPWphKGEpLGQ9Yy5uZXh0KCk7IWQuZG9uZTtkPWMubmV4dCgpKWlmKGQ9ZC52YWx1ZSwoZC5nZXRBdHRyaWJ1dGUoXCJpZFwiKXx8ZC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpKT09YilyZXR1cm4gZDtyZXR1cm4gbnVsbH07cmV0dXJuIGF9ZnVuY3Rpb24gd2IoYSl7dmFyIGI9W107Zm9yKGE9YS5fX3NoYWR5X25hdGl2ZV9maXJzdENoaWxkO2E7YT1hLl9fc2hhZHlfbmF0aXZlX25leHRTaWJsaW5nKWIucHVzaChhKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIHhiKGEpe3ZhciBiPVtdO2ZvcihhPWEuX19zaGFkeV9maXJzdENoaWxkO2E7YT1hLl9fc2hhZHlfbmV4dFNpYmxpbmcpYi5wdXNoKGEpO3JldHVybiBifWZ1bmN0aW9uIEQoYSxiLGMsZCl7Yz12b2lkIDA9PT1jP1wiXCI6Yztmb3IodmFyIGUgaW4gYil7dmFyIGY9YltlXTtpZighKGQmJjA8PWQuaW5kZXhPZihlKSkpe2YuY29uZmlndXJhYmxlPSEwO3ZhciBnPWMrZTtpZihmLnZhbHVlKWFbZ109Zi52YWx1ZTtlbHNlIHRyeXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxnLGYpfWNhdGNoKGgpe319fX1mdW5jdGlvbiBFKGEpe3ZhciBiPXt9O09iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGEpLmZvckVhY2goZnVuY3Rpb24oYyl7YltjXT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEsYyl9KTtyZXR1cm4gYn07dmFyIHliPVtdLHpiO2Z1bmN0aW9uIEFiKGEpe3pifHwoemI9ITAsc2IoQmIpKTt5Yi5wdXNoKGEpfWZ1bmN0aW9uIEJiKCl7emI9ITE7Zm9yKHZhciBhPSEheWIubGVuZ3RoO3liLmxlbmd0aDspeWIuc2hpZnQoKSgpO3JldHVybiBhfUJiLmxpc3Q9eWI7ZnVuY3Rpb24gQ2IoKXt0aGlzLmE9ITE7dGhpcy5hZGRlZE5vZGVzPVtdO3RoaXMucmVtb3ZlZE5vZGVzPVtdO3RoaXMuJD1uZXcgU2V0fWZ1bmN0aW9uIERiKGEpe2EuYXx8KGEuYT0hMCxzYihmdW5jdGlvbigpe2EuZmx1c2goKX0pKX1DYi5wcm90b3R5cGUuZmx1c2g9ZnVuY3Rpb24oKXtpZih0aGlzLmEpe3RoaXMuYT0hMTt2YXIgYT10aGlzLnRha2VSZWNvcmRzKCk7YS5sZW5ndGgmJnRoaXMuJC5mb3JFYWNoKGZ1bmN0aW9uKGIpe2IoYSl9KX19O0NiLnByb3RvdHlwZS50YWtlUmVjb3Jkcz1mdW5jdGlvbigpe2lmKHRoaXMuYWRkZWROb2Rlcy5sZW5ndGh8fHRoaXMucmVtb3ZlZE5vZGVzLmxlbmd0aCl7dmFyIGE9W3thZGRlZE5vZGVzOnRoaXMuYWRkZWROb2RlcyxyZW1vdmVkTm9kZXM6dGhpcy5yZW1vdmVkTm9kZXN9XTt0aGlzLmFkZGVkTm9kZXM9W107dGhpcy5yZW1vdmVkTm9kZXM9W107cmV0dXJuIGF9cmV0dXJuW119O1xuZnVuY3Rpb24gSGIoYSxiKXt2YXIgYz16KGEpO2MuVnx8KGMuVj1uZXcgQ2IpO2MuVi4kLmFkZChiKTt2YXIgZD1jLlY7cmV0dXJue0NhOmIsUDpkLEVhOmEsdGFrZVJlY29yZHM6ZnVuY3Rpb24oKXtyZXR1cm4gZC50YWtlUmVjb3JkcygpfX19ZnVuY3Rpb24gSWIoYSl7dmFyIGI9YSYmYS5QO2ImJihiLiQuZGVsZXRlKGEuQ2EpLGIuJC5zaXplfHwoeihhLkVhKS5WPW51bGwpKX1cbmZ1bmN0aW9uIEpiKGEsYil7dmFyIGM9Yi5nZXRSb290Tm9kZSgpO3JldHVybiBhLm1hcChmdW5jdGlvbihhKXt2YXIgYj1jPT09YS50YXJnZXQuZ2V0Um9vdE5vZGUoKTtpZihiJiZhLmFkZGVkTm9kZXMpe2lmKGI9QXJyYXkuZnJvbShhLmFkZGVkTm9kZXMpLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gYz09PWEuZ2V0Um9vdE5vZGUoKX0pLGIubGVuZ3RoKXJldHVybiBhPU9iamVjdC5jcmVhdGUoYSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJhZGRlZE5vZGVzXCIse3ZhbHVlOmIsY29uZmlndXJhYmxlOiEwfSksYX1lbHNlIGlmKGIpcmV0dXJuIGF9KS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGF9KX07dmFyIEtiPS9bJlxcdTAwQTBcIl0vZyxMYj0vWyZcXHUwMEEwPD5dL2c7ZnVuY3Rpb24gTWIoYSl7c3dpdGNoKGEpe2Nhc2UgXCImXCI6cmV0dXJuXCImYW1wO1wiO2Nhc2UgXCI8XCI6cmV0dXJuXCImbHQ7XCI7Y2FzZSBcIj5cIjpyZXR1cm5cIiZndDtcIjtjYXNlICdcIic6cmV0dXJuXCImcXVvdDtcIjtjYXNlIFwiXFx1MDBhMFwiOnJldHVyblwiJm5ic3A7XCJ9fWZ1bmN0aW9uIE5iKGEpe2Zvcih2YXIgYj17fSxjPTA7YzxhLmxlbmd0aDtjKyspYlthW2NdXT0hMDtyZXR1cm4gYn12YXIgT2I9TmIoXCJhcmVhIGJhc2UgYnIgY29sIGNvbW1hbmQgZW1iZWQgaHIgaW1nIGlucHV0IGtleWdlbiBsaW5rIG1ldGEgcGFyYW0gc291cmNlIHRyYWNrIHdiclwiLnNwbGl0KFwiIFwiKSksUGI9TmIoXCJzdHlsZSBzY3JpcHQgeG1wIGlmcmFtZSBub2VtYmVkIG5vZnJhbWVzIHBsYWludGV4dCBub3NjcmlwdFwiLnNwbGl0KFwiIFwiKSk7XG5mdW5jdGlvbiBRYihhLGIpe1widGVtcGxhdGVcIj09PWEubG9jYWxOYW1lJiYoYT1hLmNvbnRlbnQpO2Zvcih2YXIgYz1cIlwiLGQ9Yj9iKGEpOmEuY2hpbGROb2RlcyxlPTAsZj1kLmxlbmd0aCxnPXZvaWQgMDtlPGYmJihnPWRbZV0pO2UrKyl7YTp7dmFyIGg9Zzt2YXIgaz1hLGw9Yjtzd2l0Y2goaC5ub2RlVHlwZSl7Y2FzZSBOb2RlLkVMRU1FTlRfTk9ERTprPWgubG9jYWxOYW1lO2Zvcih2YXIgbj1cIjxcIitrLHE9aC5hdHRyaWJ1dGVzLEk9MCx2O3Y9cVtJXTtJKyspbis9XCIgXCIrdi5uYW1lKyc9XCInK3YudmFsdWUucmVwbGFjZShLYixNYikrJ1wiJztuKz1cIj5cIjtoPU9iW2tdP246bitRYihoLGwpK1wiPC9cIitrK1wiPlwiO2JyZWFrIGE7Y2FzZSBOb2RlLlRFWFRfTk9ERTpoPWguZGF0YTtoPWsmJlBiW2subG9jYWxOYW1lXT9oOmgucmVwbGFjZShMYixNYik7YnJlYWsgYTtjYXNlIE5vZGUuQ09NTUVOVF9OT0RFOmg9XCJcXHgzYyEtLVwiK2guZGF0YStcIi0tXFx4M2VcIjticmVhayBhO2RlZmF1bHQ6dGhyb3cgd2luZG93LmNvbnNvbGUuZXJyb3IoaCksXG5FcnJvcihcIm5vdCBpbXBsZW1lbnRlZFwiKTt9fWMrPWh9cmV0dXJuIGN9O3ZhciBSYj1CLkQsU2I9e3F1ZXJ5U2VsZWN0b3I6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX19zaGFkeV9uYXRpdmVfcXVlcnlTZWxlY3RvcihhKX0scXVlcnlTZWxlY3RvckFsbDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fX3NoYWR5X25hdGl2ZV9xdWVyeVNlbGVjdG9yQWxsKGEpfX0sVGI9e307ZnVuY3Rpb24gVWIoYSl7VGJbYV09ZnVuY3Rpb24oYil7cmV0dXJuIGJbXCJfX3NoYWR5X25hdGl2ZV9cIithXX19ZnVuY3Rpb24gVmIoYSxiKXtEKGEsYixcIl9fc2hhZHlfbmF0aXZlX1wiKTtmb3IodmFyIGMgaW4gYilVYihjKX1mdW5jdGlvbiBGKGEsYil7Yj12b2lkIDA9PT1iP1tdOmI7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspe3ZhciBkPWJbY10sZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEsZCk7ZSYmKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwiX19zaGFkeV9uYXRpdmVfXCIrZCxlKSxlLnZhbHVlP1NiW2RdfHwoU2JbZF09ZS52YWx1ZSk6VWIoZCkpfX1cbnZhciBHPWRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZG9jdW1lbnQsTm9kZUZpbHRlci5TSE9XX0FMTCxudWxsLCExKSxIPWRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZG9jdW1lbnQsTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsbnVsbCwhMSksV2I9ZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiaW5lcnRcIik7ZnVuY3Rpb24gWGIoYSl7Zm9yKHZhciBiO2I9YS5fX3NoYWR5X25hdGl2ZV9maXJzdENoaWxkOylhLl9fc2hhZHlfbmF0aXZlX3JlbW92ZUNoaWxkKGIpfXZhciBZYj1bXCJmaXJzdEVsZW1lbnRDaGlsZFwiLFwibGFzdEVsZW1lbnRDaGlsZFwiLFwiY2hpbGRyZW5cIixcImNoaWxkRWxlbWVudENvdW50XCJdLFpiPVtcInF1ZXJ5U2VsZWN0b3JcIixcInF1ZXJ5U2VsZWN0b3JBbGxcIl07XG5mdW5jdGlvbiAkYigpe3ZhciBhPVtcImRpc3BhdGNoRXZlbnRcIixcImFkZEV2ZW50TGlzdGVuZXJcIixcInJlbW92ZUV2ZW50TGlzdGVuZXJcIl07d2luZG93LkV2ZW50VGFyZ2V0P0Yod2luZG93LkV2ZW50VGFyZ2V0LnByb3RvdHlwZSxhKTooRihOb2RlLnByb3RvdHlwZSxhKSxGKFdpbmRvdy5wcm90b3R5cGUsYSkpO1JiP0YoTm9kZS5wcm90b3R5cGUsXCJwYXJlbnROb2RlIGZpcnN0Q2hpbGQgbGFzdENoaWxkIHByZXZpb3VzU2libGluZyBuZXh0U2libGluZyBjaGlsZE5vZGVzIHBhcmVudEVsZW1lbnQgdGV4dENvbnRlbnRcIi5zcGxpdChcIiBcIikpOlZiKE5vZGUucHJvdG90eXBlLHtwYXJlbnROb2RlOntnZXQ6ZnVuY3Rpb24oKXtHLmN1cnJlbnROb2RlPXRoaXM7cmV0dXJuIEcucGFyZW50Tm9kZSgpfX0sZmlyc3RDaGlsZDp7Z2V0OmZ1bmN0aW9uKCl7Ry5jdXJyZW50Tm9kZT10aGlzO3JldHVybiBHLmZpcnN0Q2hpbGQoKX19LGxhc3RDaGlsZDp7Z2V0OmZ1bmN0aW9uKCl7Ry5jdXJyZW50Tm9kZT1cbnRoaXM7cmV0dXJuIEcubGFzdENoaWxkKCl9fSxwcmV2aW91c1NpYmxpbmc6e2dldDpmdW5jdGlvbigpe0cuY3VycmVudE5vZGU9dGhpcztyZXR1cm4gRy5wcmV2aW91c1NpYmxpbmcoKX19LG5leHRTaWJsaW5nOntnZXQ6ZnVuY3Rpb24oKXtHLmN1cnJlbnROb2RlPXRoaXM7cmV0dXJuIEcubmV4dFNpYmxpbmcoKX19LGNoaWxkTm9kZXM6e2dldDpmdW5jdGlvbigpe3ZhciBhPVtdO0cuY3VycmVudE5vZGU9dGhpcztmb3IodmFyIGM9Ry5maXJzdENoaWxkKCk7YzspYS5wdXNoKGMpLGM9Ry5uZXh0U2libGluZygpO3JldHVybiBhfX0scGFyZW50RWxlbWVudDp7Z2V0OmZ1bmN0aW9uKCl7SC5jdXJyZW50Tm9kZT10aGlzO3JldHVybiBILnBhcmVudE5vZGUoKX19LHRleHRDb250ZW50OntnZXQ6ZnVuY3Rpb24oKXtzd2l0Y2godGhpcy5ub2RlVHlwZSl7Y2FzZSBOb2RlLkVMRU1FTlRfTk9ERTpjYXNlIE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpmb3IodmFyIGE9ZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcih0aGlzLFxuTm9kZUZpbHRlci5TSE9XX1RFWFQsbnVsbCwhMSksYz1cIlwiLGQ7ZD1hLm5leHROb2RlKCk7KWMrPWQubm9kZVZhbHVlO3JldHVybiBjO2RlZmF1bHQ6cmV0dXJuIHRoaXMubm9kZVZhbHVlfX0sc2V0OmZ1bmN0aW9uKGEpe2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYXx8bnVsbD09PWEpYT1cIlwiO3N3aXRjaCh0aGlzLm5vZGVUeXBlKXtjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOmNhc2UgTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFOlhiKHRoaXMpOygwPGEubGVuZ3RofHx0aGlzLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUpJiZ0aGlzLl9fc2hhZHlfbmF0aXZlX2luc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSx2b2lkIDApO2JyZWFrO2RlZmF1bHQ6dGhpcy5ub2RlVmFsdWU9YX19fX0pO0YoTm9kZS5wcm90b3R5cGUsXCJhcHBlbmRDaGlsZCBpbnNlcnRCZWZvcmUgcmVtb3ZlQ2hpbGQgcmVwbGFjZUNoaWxkIGNsb25lTm9kZSBjb250YWluc1wiLnNwbGl0KFwiIFwiKSk7XG5GKEhUTUxFbGVtZW50LnByb3RvdHlwZSxbXCJwYXJlbnRFbGVtZW50XCIsXCJjb250YWluc1wiXSk7YT17Zmlyc3RFbGVtZW50Q2hpbGQ6e2dldDpmdW5jdGlvbigpe0guY3VycmVudE5vZGU9dGhpcztyZXR1cm4gSC5maXJzdENoaWxkKCl9fSxsYXN0RWxlbWVudENoaWxkOntnZXQ6ZnVuY3Rpb24oKXtILmN1cnJlbnROb2RlPXRoaXM7cmV0dXJuIEgubGFzdENoaWxkKCl9fSxjaGlsZHJlbjp7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9W107SC5jdXJyZW50Tm9kZT10aGlzO2Zvcih2YXIgYz1ILmZpcnN0Q2hpbGQoKTtjOylhLnB1c2goYyksYz1ILm5leHRTaWJsaW5nKCk7cmV0dXJuIHZiKGEpfX0sY2hpbGRFbGVtZW50Q291bnQ6e2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNoaWxkcmVuP3RoaXMuY2hpbGRyZW4ubGVuZ3RoOjB9fX07UmI/KEYoRWxlbWVudC5wcm90b3R5cGUsWWIpLEYoRWxlbWVudC5wcm90b3R5cGUsW1wicHJldmlvdXNFbGVtZW50U2libGluZ1wiLFwibmV4dEVsZW1lbnRTaWJsaW5nXCIsXG5cImlubmVySFRNTFwiLFwiY2xhc3NOYW1lXCJdKSxGKEhUTUxFbGVtZW50LnByb3RvdHlwZSxbXCJjaGlsZHJlblwiLFwiaW5uZXJIVE1MXCIsXCJjbGFzc05hbWVcIl0pKTooVmIoRWxlbWVudC5wcm90b3R5cGUsYSksVmIoRWxlbWVudC5wcm90b3R5cGUse3ByZXZpb3VzRWxlbWVudFNpYmxpbmc6e2dldDpmdW5jdGlvbigpe0guY3VycmVudE5vZGU9dGhpcztyZXR1cm4gSC5wcmV2aW91c1NpYmxpbmcoKX19LG5leHRFbGVtZW50U2libGluZzp7Z2V0OmZ1bmN0aW9uKCl7SC5jdXJyZW50Tm9kZT10aGlzO3JldHVybiBILm5leHRTaWJsaW5nKCl9fSxpbm5lckhUTUw6e2dldDpmdW5jdGlvbigpe3JldHVybiBRYih0aGlzLHdiKX0sc2V0OmZ1bmN0aW9uKGEpe3ZhciBiPVwidGVtcGxhdGVcIj09PXRoaXMubG9jYWxOYW1lP3RoaXMuY29udGVudDp0aGlzO1hiKGIpO3ZhciBkPXRoaXMubG9jYWxOYW1lfHxcImRpdlwiO2Q9dGhpcy5uYW1lc3BhY2VVUkkmJnRoaXMubmFtZXNwYWNlVVJJIT09V2IubmFtZXNwYWNlVVJJP1xuV2IuY3JlYXRlRWxlbWVudE5TKHRoaXMubmFtZXNwYWNlVVJJLGQpOldiLmNyZWF0ZUVsZW1lbnQoZCk7ZC5pbm5lckhUTUw9YTtmb3IoYT1cInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZT9kLmNvbnRlbnQ6ZDtkPWEuX19zaGFkeV9uYXRpdmVfZmlyc3RDaGlsZDspYi5fX3NoYWR5X25hdGl2ZV9pbnNlcnRCZWZvcmUoZCx2b2lkIDApfX0sY2xhc3NOYW1lOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn0sc2V0OmZ1bmN0aW9uKGEpe3RoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixhKX19fSkpO0YoRWxlbWVudC5wcm90b3R5cGUsXCJzZXRBdHRyaWJ1dGUgZ2V0QXR0cmlidXRlIGhhc0F0dHJpYnV0ZSByZW1vdmVBdHRyaWJ1dGUgZm9jdXMgYmx1clwiLnNwbGl0KFwiIFwiKSk7RihFbGVtZW50LnByb3RvdHlwZSxaYik7RihIVE1MRWxlbWVudC5wcm90b3R5cGUsW1wiZm9jdXNcIixcImJsdXJcIl0pO3dpbmRvdy5IVE1MVGVtcGxhdGVFbGVtZW50JiZcbkYod2luZG93LkhUTUxUZW1wbGF0ZUVsZW1lbnQucHJvdG90eXBlLFtcImlubmVySFRNTFwiXSk7UmI/RihEb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSxZYik6VmIoRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUsYSk7RihEb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSxaYik7UmI/KEYoRG9jdW1lbnQucHJvdG90eXBlLFliKSxGKERvY3VtZW50LnByb3RvdHlwZSxbXCJhY3RpdmVFbGVtZW50XCJdKSk6VmIoRG9jdW1lbnQucHJvdG90eXBlLGEpO0YoRG9jdW1lbnQucHJvdG90eXBlLFtcImltcG9ydE5vZGVcIixcImdldEVsZW1lbnRCeUlkXCJdKTtGKERvY3VtZW50LnByb3RvdHlwZSxaYil9O3ZhciBhYz1FKHtnZXQgY2hpbGROb2Rlcygpe3JldHVybiB0aGlzLl9fc2hhZHlfY2hpbGROb2Rlc30sZ2V0IGZpcnN0Q2hpbGQoKXtyZXR1cm4gdGhpcy5fX3NoYWR5X2ZpcnN0Q2hpbGR9LGdldCBsYXN0Q2hpbGQoKXtyZXR1cm4gdGhpcy5fX3NoYWR5X2xhc3RDaGlsZH0sZ2V0IGNoaWxkRWxlbWVudENvdW50KCl7cmV0dXJuIHRoaXMuX19zaGFkeV9jaGlsZEVsZW1lbnRDb3VudH0sZ2V0IGNoaWxkcmVuKCl7cmV0dXJuIHRoaXMuX19zaGFkeV9jaGlsZHJlbn0sZ2V0IGZpcnN0RWxlbWVudENoaWxkKCl7cmV0dXJuIHRoaXMuX19zaGFkeV9maXJzdEVsZW1lbnRDaGlsZH0sZ2V0IGxhc3RFbGVtZW50Q2hpbGQoKXtyZXR1cm4gdGhpcy5fX3NoYWR5X2xhc3RFbGVtZW50Q2hpbGR9LGdldCBzaGFkb3dSb290KCl7cmV0dXJuIHRoaXMuX19zaGFkeV9zaGFkb3dSb290fX0pLGJjPUUoe2dldCB0ZXh0Q29udGVudCgpe3JldHVybiB0aGlzLl9fc2hhZHlfdGV4dENvbnRlbnR9LHNldCB0ZXh0Q29udGVudChhKXt0aGlzLl9fc2hhZHlfdGV4dENvbnRlbnQ9XG5hfSxnZXQgaW5uZXJIVE1MKCl7cmV0dXJuIHRoaXMuX19zaGFkeV9pbm5lckhUTUx9LHNldCBpbm5lckhUTUwoYSl7cmV0dXJuIHRoaXMuX19zaGFkeV9pbm5lckhUTUw9YX19KSxjYz1FKHtnZXQgcGFyZW50RWxlbWVudCgpe3JldHVybiB0aGlzLl9fc2hhZHlfcGFyZW50RWxlbWVudH0sZ2V0IHBhcmVudE5vZGUoKXtyZXR1cm4gdGhpcy5fX3NoYWR5X3BhcmVudE5vZGV9LGdldCBuZXh0U2libGluZygpe3JldHVybiB0aGlzLl9fc2hhZHlfbmV4dFNpYmxpbmd9LGdldCBwcmV2aW91c1NpYmxpbmcoKXtyZXR1cm4gdGhpcy5fX3NoYWR5X3ByZXZpb3VzU2libGluZ30sZ2V0IG5leHRFbGVtZW50U2libGluZygpe3JldHVybiB0aGlzLl9fc2hhZHlfbmV4dEVsZW1lbnRTaWJsaW5nfSxnZXQgcHJldmlvdXNFbGVtZW50U2libGluZygpe3JldHVybiB0aGlzLl9fc2hhZHlfcHJldmlvdXNFbGVtZW50U2libGluZ30sZ2V0IGNsYXNzTmFtZSgpe3JldHVybiB0aGlzLl9fc2hhZHlfY2xhc3NOYW1lfSxcbnNldCBjbGFzc05hbWUoYSl7cmV0dXJuIHRoaXMuX19zaGFkeV9jbGFzc05hbWU9YX19KSxkYztmb3IoZGMgaW4gYWMpYWNbZGNdLmVudW1lcmFibGU9ITE7Zm9yKHZhciBlYyBpbiBiYyliY1tlY10uZW51bWVyYWJsZT0hMTtmb3IodmFyIGZjIGluIGNjKWNjW2ZjXS5lbnVtZXJhYmxlPSExO3ZhciBnYz1CLkR8fEIuTSxoYz1nYz9mdW5jdGlvbigpe306ZnVuY3Rpb24oYSl7dmFyIGI9eihhKTtiLkFhfHwoYi5BYT0hMCxEKGEsY2MpKX0saWM9Z2M/ZnVuY3Rpb24oKXt9OmZ1bmN0aW9uKGEpe3ZhciBiPXooYSk7Yi56YXx8KGIuemE9ITAsRChhLGFjKSx3aW5kb3cuY3VzdG9tRWxlbWVudHMmJiFCLk18fEQoYSxiYykpfTt2YXIgamM9XCJfX2V2ZW50V3JhcHBlcnNcIitEYXRlLm5vdygpLGtjPWZ1bmN0aW9uKCl7dmFyIGE9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihFdmVudC5wcm90b3R5cGUsXCJjb21wb3NlZFwiKTtyZXR1cm4gYT9mdW5jdGlvbihiKXtyZXR1cm4gYS5nZXQuY2FsbChiKX06bnVsbH0oKSxsYz1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXt9dmFyIGI9ITEsYz17Z2V0IGNhcHR1cmUoKXtiPSEwfX07d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsYSxjKTt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRlc3RcIixhLGMpO3JldHVybiBifSgpO2Z1bmN0aW9uIG1jKGEpe2lmKGEmJlwib2JqZWN0XCI9PT10eXBlb2YgYSl7dmFyIGI9ISFhLmNhcHR1cmU7dmFyIGM9ISFhLm9uY2U7dmFyIGQ9ISFhLnBhc3NpdmU7dmFyIGU9YS5PfWVsc2UgYj0hIWEsZD1jPSExO3JldHVybnt1YTplLGNhcHR1cmU6YixvbmNlOmMscGFzc2l2ZTpkLHNhOmxjP2E6Yn19XG52YXIgbmM9e2JsdXI6ITAsZm9jdXM6ITAsZm9jdXNpbjohMCxmb2N1c291dDohMCxjbGljazohMCxkYmxjbGljazohMCxtb3VzZWRvd246ITAsbW91c2VlbnRlcjohMCxtb3VzZWxlYXZlOiEwLG1vdXNlbW92ZTohMCxtb3VzZW91dDohMCxtb3VzZW92ZXI6ITAsbW91c2V1cDohMCx3aGVlbDohMCxiZWZvcmVpbnB1dDohMCxpbnB1dDohMCxrZXlkb3duOiEwLGtleXVwOiEwLGNvbXBvc2l0aW9uc3RhcnQ6ITAsY29tcG9zaXRpb251cGRhdGU6ITAsY29tcG9zaXRpb25lbmQ6ITAsdG91Y2hzdGFydDohMCx0b3VjaGVuZDohMCx0b3VjaG1vdmU6ITAsdG91Y2hjYW5jZWw6ITAscG9pbnRlcm92ZXI6ITAscG9pbnRlcmVudGVyOiEwLHBvaW50ZXJkb3duOiEwLHBvaW50ZXJtb3ZlOiEwLHBvaW50ZXJ1cDohMCxwb2ludGVyY2FuY2VsOiEwLHBvaW50ZXJvdXQ6ITAscG9pbnRlcmxlYXZlOiEwLGdvdHBvaW50ZXJjYXB0dXJlOiEwLGxvc3Rwb2ludGVyY2FwdHVyZTohMCxkcmFnc3RhcnQ6ITAsXG5kcmFnOiEwLGRyYWdlbnRlcjohMCxkcmFnbGVhdmU6ITAsZHJhZ292ZXI6ITAsZHJvcDohMCxkcmFnZW5kOiEwLERPTUFjdGl2YXRlOiEwLERPTUZvY3VzSW46ITAsRE9NRm9jdXNPdXQ6ITAsa2V5cHJlc3M6ITB9LG9jPXtET01BdHRyTW9kaWZpZWQ6ITAsRE9NQXR0cmlidXRlTmFtZUNoYW5nZWQ6ITAsRE9NQ2hhcmFjdGVyRGF0YU1vZGlmaWVkOiEwLERPTUVsZW1lbnROYW1lQ2hhbmdlZDohMCxET01Ob2RlSW5zZXJ0ZWQ6ITAsRE9NTm9kZUluc2VydGVkSW50b0RvY3VtZW50OiEwLERPTU5vZGVSZW1vdmVkOiEwLERPTU5vZGVSZW1vdmVkRnJvbURvY3VtZW50OiEwLERPTVN1YnRyZWVNb2RpZmllZDohMH07ZnVuY3Rpb24gcGMoYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBOb2RlP2EuX19zaGFkeV9nZXRSb290Tm9kZSgpOmF9XG5mdW5jdGlvbiBxYyhhLGIpe3ZhciBjPVtdLGQ9YTtmb3IoYT1wYyhhKTtkOyljLnB1c2goZCksZC5fX3NoYWR5X2Fzc2lnbmVkU2xvdD9kPWQuX19zaGFkeV9hc3NpZ25lZFNsb3Q6ZC5ub2RlVHlwZT09PU5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSYmZC5ob3N0JiYoYnx8ZCE9PWEpP2Q9ZC5ob3N0OmQ9ZC5fX3NoYWR5X3BhcmVudE5vZGU7Y1tjLmxlbmd0aC0xXT09PWRvY3VtZW50JiZjLnB1c2god2luZG93KTtyZXR1cm4gY31mdW5jdGlvbiByYyhhKXthLl9fY29tcG9zZWRQYXRofHwoYS5fX2NvbXBvc2VkUGF0aD1xYyhhLnRhcmdldCwhMCkpO3JldHVybiBhLl9fY29tcG9zZWRQYXRofWZ1bmN0aW9uIHNjKGEsYil7aWYoIUMpcmV0dXJuIGE7YT1xYyhhLCEwKTtmb3IodmFyIGM9MCxkLGU9dm9pZCAwLGYsZz12b2lkIDA7YzxiLmxlbmd0aDtjKyspaWYoZD1iW2NdLGY9cGMoZCksZiE9PWUmJihnPWEuaW5kZXhPZihmKSxlPWYpLCFDKGYpfHwtMTxnKXJldHVybiBkfVxuZnVuY3Rpb24gdGMoYSl7ZnVuY3Rpb24gYihiLGQpe2I9bmV3IGEoYixkKTtiLl9fY29tcG9zZWQ9ZCYmISFkLmNvbXBvc2VkO3JldHVybiBifWIuX19wcm90b19fPWE7Yi5wcm90b3R5cGU9YS5wcm90b3R5cGU7cmV0dXJuIGJ9dmFyIHVjPXtmb2N1czohMCxibHVyOiEwfTtmdW5jdGlvbiB2YyhhKXtyZXR1cm4gYS5fX3RhcmdldCE9PWEudGFyZ2V0fHxhLl9fcmVsYXRlZFRhcmdldCE9PWEucmVsYXRlZFRhcmdldH1mdW5jdGlvbiB3YyhhLGIsYyl7aWYoYz1iLl9faGFuZGxlcnMmJmIuX19oYW5kbGVyc1thLnR5cGVdJiZiLl9faGFuZGxlcnNbYS50eXBlXVtjXSlmb3IodmFyIGQ9MCxlOyhlPWNbZF0pJiYoIXZjKGEpfHxhLnRhcmdldCE9PWEucmVsYXRlZFRhcmdldCkmJihlLmNhbGwoYixhKSwhYS5fX2ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCk7ZCsrKTt9XG5mdW5jdGlvbiB4YyhhKXt2YXIgYj1hLmNvbXBvc2VkUGF0aCgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwiY3VycmVudFRhcmdldFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sY29uZmlndXJhYmxlOiEwfSk7Zm9yKHZhciBjPWIubGVuZ3RoLTE7MDw9YztjLS0pe3ZhciBkPWJbY107d2MoYSxkLFwiY2FwdHVyZVwiKTtpZihhLmdhKXJldHVybn1PYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImV2ZW50UGhhc2VcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEV2ZW50LkFUX1RBUkdFVH19KTt2YXIgZTtmb3IoYz0wO2M8Yi5sZW5ndGg7YysrKXtkPWJbY107dmFyIGY9QShkKTtmPWYmJmYucm9vdDtpZigwPT09Y3x8ZiYmZj09PWUpaWYod2MoYSxkLFwiYnViYmxlXCIpLGQhPT13aW5kb3cmJihlPWQuX19zaGFkeV9nZXRSb290Tm9kZSgpKSxhLmdhKWJyZWFrfX1cbmZ1bmN0aW9uIHljKGEsYixjLGQsZSxmKXtmb3IodmFyIGc9MDtnPGEubGVuZ3RoO2crKyl7dmFyIGg9YVtnXSxrPWgudHlwZSxsPWguY2FwdHVyZSxuPWgub25jZSxxPWgucGFzc2l2ZTtpZihiPT09aC5ub2RlJiZjPT09ayYmZD09PWwmJmU9PT1uJiZmPT09cSlyZXR1cm4gZ31yZXR1cm4tMX1cbmZ1bmN0aW9uIHpjKGEsYixjKXt2YXIgZD1tYyhjKSxlPWQuY2FwdHVyZSxmPWQub25jZSxnPWQucGFzc2l2ZSxoPWQudWE7ZD1kLnNhO2lmKGIpe3ZhciBrPXR5cGVvZiBiO2lmKFwiZnVuY3Rpb25cIj09PWt8fFwib2JqZWN0XCI9PT1rKWlmKFwib2JqZWN0XCIhPT1rfHxiLmhhbmRsZUV2ZW50JiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5oYW5kbGVFdmVudCl7aWYob2NbYV0pcmV0dXJuIHRoaXMuX19zaGFkeV9uYXRpdmVfYWRkRXZlbnRMaXN0ZW5lcihhLGIsZCk7dmFyIGw9aHx8dGhpcztpZihoPWJbamNdKXtpZigtMTx5YyhoLGwsYSxlLGYsZykpcmV0dXJufWVsc2UgYltqY109W107aD1mdW5jdGlvbihkKXtmJiZ0aGlzLl9fc2hhZHlfcmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGIsYyk7ZC5fX3RhcmdldHx8QWMoZCk7aWYobCE9PXRoaXMpe3ZhciBlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZCxcImN1cnJlbnRUYXJnZXRcIik7T2JqZWN0LmRlZmluZVByb3BlcnR5KGQsXCJjdXJyZW50VGFyZ2V0XCIsXG57Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGx9LGNvbmZpZ3VyYWJsZTohMH0pfWQuX19wcmV2aW91c0N1cnJlbnRUYXJnZXQ9ZC5jdXJyZW50VGFyZ2V0O2lmKCFDKGwpJiZcInNsb3RcIiE9PWwubG9jYWxOYW1lfHwtMSE9ZC5jb21wb3NlZFBhdGgoKS5pbmRleE9mKGwpKWlmKGQuY29tcG9zZWR8fC0xPGQuY29tcG9zZWRQYXRoKCkuaW5kZXhPZihsKSlpZih2YyhkKSYmZC50YXJnZXQ9PT1kLnJlbGF0ZWRUYXJnZXQpZC5ldmVudFBoYXNlPT09RXZlbnQuQlVCQkxJTkdfUEhBU0UmJmQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7ZWxzZSBpZihkLmV2ZW50UGhhc2U9PT1FdmVudC5DQVBUVVJJTkdfUEhBU0V8fGQuYnViYmxlc3x8ZC50YXJnZXQ9PT1sfHxsIGluc3RhbmNlb2YgV2luZG93KXt2YXIgZz1cImZ1bmN0aW9uXCI9PT1rP2IuY2FsbChsLGQpOmIuaGFuZGxlRXZlbnQmJmIuaGFuZGxlRXZlbnQoZCk7bCE9PXRoaXMmJihlPyhPYmplY3QuZGVmaW5lUHJvcGVydHkoZCxcImN1cnJlbnRUYXJnZXRcIixcbmUpLGU9bnVsbCk6ZGVsZXRlIGQuY3VycmVudFRhcmdldCk7cmV0dXJuIGd9fTtiW2pjXS5wdXNoKHtub2RlOmwsdHlwZTphLGNhcHR1cmU6ZSxvbmNlOmYscGFzc2l2ZTpnLGFiOmh9KTt1Y1thXT8odGhpcy5fX2hhbmRsZXJzPXRoaXMuX19oYW5kbGVyc3x8e30sdGhpcy5fX2hhbmRsZXJzW2FdPXRoaXMuX19oYW5kbGVyc1thXXx8e2NhcHR1cmU6W10sYnViYmxlOltdfSx0aGlzLl9faGFuZGxlcnNbYV1bZT9cImNhcHR1cmVcIjpcImJ1YmJsZVwiXS5wdXNoKGgpKTp0aGlzLl9fc2hhZHlfbmF0aXZlX2FkZEV2ZW50TGlzdGVuZXIoYSxoLGQpfX19XG5mdW5jdGlvbiBCYyhhLGIsYyl7aWYoYil7dmFyIGQ9bWMoYyk7Yz1kLmNhcHR1cmU7dmFyIGU9ZC5vbmNlLGY9ZC5wYXNzaXZlLGc9ZC51YTtkPWQuc2E7aWYob2NbYV0pcmV0dXJuIHRoaXMuX19zaGFkeV9uYXRpdmVfcmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGIsZCk7dmFyIGg9Z3x8dGhpcztnPXZvaWQgMDt2YXIgaz1udWxsO3RyeXtrPWJbamNdfWNhdGNoKGwpe31rJiYoZT15YyhrLGgsYSxjLGUsZiksLTE8ZSYmKGc9ay5zcGxpY2UoZSwxKVswXS5hYixrLmxlbmd0aHx8KGJbamNdPXZvaWQgMCkpKTt0aGlzLl9fc2hhZHlfbmF0aXZlX3JlbW92ZUV2ZW50TGlzdGVuZXIoYSxnfHxiLGQpO2cmJnVjW2FdJiZ0aGlzLl9faGFuZGxlcnMmJnRoaXMuX19oYW5kbGVyc1thXSYmKGE9dGhpcy5fX2hhbmRsZXJzW2FdW2M/XCJjYXB0dXJlXCI6XCJidWJibGVcIl0sYj1hLmluZGV4T2YoZyksLTE8YiYmYS5zcGxpY2UoYiwxKSl9fVxuZnVuY3Rpb24gQ2MoKXtmb3IodmFyIGEgaW4gdWMpd2luZG93Ll9fc2hhZHlfbmF0aXZlX2FkZEV2ZW50TGlzdGVuZXIoYSxmdW5jdGlvbihhKXthLl9fdGFyZ2V0fHwoQWMoYSkseGMoYSkpfSwhMCl9XG52YXIgRGM9RSh7Z2V0IGNvbXBvc2VkKCl7dm9pZCAwPT09dGhpcy5fX2NvbXBvc2VkJiYoa2M/dGhpcy5fX2NvbXBvc2VkPVwiZm9jdXNpblwiPT09dGhpcy50eXBlfHxcImZvY3Vzb3V0XCI9PT10aGlzLnR5cGV8fGtjKHRoaXMpOiExIT09dGhpcy5pc1RydXN0ZWQmJih0aGlzLl9fY29tcG9zZWQ9bmNbdGhpcy50eXBlXSkpO3JldHVybiB0aGlzLl9fY29tcG9zZWR8fCExfSxjb21wb3NlZFBhdGg6ZnVuY3Rpb24oKXt0aGlzLl9fY29tcG9zZWRQYXRofHwodGhpcy5fX2NvbXBvc2VkUGF0aD1xYyh0aGlzLl9fdGFyZ2V0LHRoaXMuY29tcG9zZWQpKTtyZXR1cm4gdGhpcy5fX2NvbXBvc2VkUGF0aH0sZ2V0IHRhcmdldCgpe3JldHVybiBzYyh0aGlzLmN1cnJlbnRUYXJnZXR8fHRoaXMuX19wcmV2aW91c0N1cnJlbnRUYXJnZXQsdGhpcy5jb21wb3NlZFBhdGgoKSl9LGdldCByZWxhdGVkVGFyZ2V0KCl7aWYoIXRoaXMuX19yZWxhdGVkVGFyZ2V0KXJldHVybiBudWxsO3RoaXMuX19yZWxhdGVkVGFyZ2V0Q29tcG9zZWRQYXRofHxcbih0aGlzLl9fcmVsYXRlZFRhcmdldENvbXBvc2VkUGF0aD1xYyh0aGlzLl9fcmVsYXRlZFRhcmdldCwhMCkpO3JldHVybiBzYyh0aGlzLmN1cnJlbnRUYXJnZXR8fHRoaXMuX19wcmV2aW91c0N1cnJlbnRUYXJnZXQsdGhpcy5fX3JlbGF0ZWRUYXJnZXRDb21wb3NlZFBhdGgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXtFdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uLmNhbGwodGhpcyk7dGhpcy5nYT0hMH0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7RXZlbnQucHJvdG90eXBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbi5jYWxsKHRoaXMpO3RoaXMuZ2E9dGhpcy5fX2ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD0hMH19KTtcbmZ1bmN0aW9uIEFjKGEpe2EuX190YXJnZXQ9YS50YXJnZXQ7YS5fX3JlbGF0ZWRUYXJnZXQ9YS5yZWxhdGVkVGFyZ2V0O2lmKEIuRCl7dmFyIGI9T2JqZWN0LmdldFByb3RvdHlwZU9mKGEpO2lmKCFPYmplY3QuaGFzT3duUHJvcGVydHkoYixcIl9fc2hhZHlfcGF0Y2hlZFByb3RvXCIpKXt2YXIgYz1PYmplY3QuY3JlYXRlKGIpO2MuX19zaGFkeV9zb3VyY2VQcm90bz1iO0QoYyxEYyk7Yi5fX3NoYWR5X3BhdGNoZWRQcm90bz1jfWEuX19wcm90b19fPWIuX19zaGFkeV9wYXRjaGVkUHJvdG99ZWxzZSBEKGEsRGMpfXZhciBFYz10YyhFdmVudCksRmM9dGMoQ3VzdG9tRXZlbnQpLEdjPXRjKE1vdXNlRXZlbnQpO1xuZnVuY3Rpb24gSGMoKXtpZigha2MmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRXZlbnQucHJvdG90eXBlLFwiaXNUcnVzdGVkXCIpKXt2YXIgYT1mdW5jdGlvbigpe3ZhciBhPW5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIix7YnViYmxlczohMCxjYW5jZWxhYmxlOiEwLGNvbXBvc2VkOiEwfSk7dGhpcy5fX3NoYWR5X2Rpc3BhdGNoRXZlbnQoYSl9O0VsZW1lbnQucHJvdG90eXBlLmNsaWNrP0VsZW1lbnQucHJvdG90eXBlLmNsaWNrPWE6SFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrJiYoSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrPWEpfX12YXIgSWM9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoRG9jdW1lbnQucHJvdG90eXBlKS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuXCJvblwiPT09YS5zdWJzdHJpbmcoMCwyKX0pO2Z1bmN0aW9uIEpjKGEsYil7cmV0dXJue2luZGV4OmEsVzpbXSxaOmJ9fVxuZnVuY3Rpb24gS2MoYSxiLGMsZCl7dmFyIGU9MCxmPTAsZz0wLGg9MCxrPU1hdGgubWluKGItZSxkLWYpO2lmKDA9PWUmJjA9PWYpYTp7Zm9yKGc9MDtnPGs7ZysrKWlmKGFbZ10hPT1jW2ddKWJyZWFrIGE7Zz1rfWlmKGI9PWEubGVuZ3RoJiZkPT1jLmxlbmd0aCl7aD1hLmxlbmd0aDtmb3IodmFyIGw9Yy5sZW5ndGgsbj0wO248ay1nJiZMYyhhWy0taF0sY1stLWxdKTspbisrO2g9bn1lKz1nO2YrPWc7Yi09aDtkLT1oO2lmKDA9PWItZSYmMD09ZC1mKXJldHVybltdO2lmKGU9PWIpe2ZvcihiPUpjKGUsMCk7ZjxkOyliLlcucHVzaChjW2YrK10pO3JldHVybltiXX1pZihmPT1kKXJldHVybltKYyhlLGItZSldO2s9ZTtnPWY7ZD1kLWcrMTtoPWItaysxO2I9QXJyYXkoZCk7Zm9yKGw9MDtsPGQ7bCsrKWJbbF09QXJyYXkoaCksYltsXVswXT1sO2ZvcihsPTA7bDxoO2wrKyliWzBdW2xdPWw7Zm9yKGw9MTtsPGQ7bCsrKWZvcihuPTE7bjxoO24rKylpZihhW2srbi0xXT09PWNbZytsLTFdKWJbbF1bbl09XG5iW2wtMV1bbi0xXTtlbHNle3ZhciBxPWJbbC0xXVtuXSsxLEk9YltsXVtuLTFdKzE7YltsXVtuXT1xPEk/cTpJfWs9Yi5sZW5ndGgtMTtnPWJbMF0ubGVuZ3RoLTE7ZD1iW2tdW2ddO2ZvcihhPVtdOzA8a3x8MDxnOykwPT1rPyhhLnB1c2goMiksZy0tKTowPT1nPyhhLnB1c2goMyksay0tKTooaD1iW2stMV1bZy0xXSxsPWJbay0xXVtnXSxuPWJba11bZy0xXSxxPWw8bj9sPGg/bDpoOm48aD9uOmgscT09aD8oaD09ZD9hLnB1c2goMCk6KGEucHVzaCgxKSxkPWgpLGstLSxnLS0pOnE9PWw/KGEucHVzaCgzKSxrLS0sZD1sKTooYS5wdXNoKDIpLGctLSxkPW4pKTthLnJldmVyc2UoKTtiPXZvaWQgMDtrPVtdO2ZvcihnPTA7ZzxhLmxlbmd0aDtnKyspc3dpdGNoKGFbZ10pe2Nhc2UgMDpiJiYoay5wdXNoKGIpLGI9dm9pZCAwKTtlKys7ZisrO2JyZWFrO2Nhc2UgMTpifHwoYj1KYyhlLDApKTtiLlorKztlKys7Yi5XLnB1c2goY1tmXSk7ZisrO2JyZWFrO2Nhc2UgMjpifHwoYj1KYyhlLDApKTtcbmIuWisrO2UrKzticmVhaztjYXNlIDM6Ynx8KGI9SmMoZSwwKSksYi5XLnB1c2goY1tmXSksZisrfWImJmsucHVzaChiKTtyZXR1cm4ga31mdW5jdGlvbiBMYyhhLGIpe3JldHVybiBhPT09Yn07ZnVuY3Rpb24gTWMoYSxiLGMsZCl7aGMoYSk7ZD1kfHxudWxsO3ZhciBlPXooYSksZj1kP3ooZCk6bnVsbDtlLnByZXZpb3VzU2libGluZz1kP2YucHJldmlvdXNTaWJsaW5nOmIuX19zaGFkeV9sYXN0Q2hpbGQ7aWYoZj1BKGUucHJldmlvdXNTaWJsaW5nKSlmLm5leHRTaWJsaW5nPWE7aWYoZj1BKGUubmV4dFNpYmxpbmc9ZCkpZi5wcmV2aW91c1NpYmxpbmc9YTtlLnBhcmVudE5vZGU9YjtkP2Q9PT1jLmZpcnN0Q2hpbGQmJihjLmZpcnN0Q2hpbGQ9YSk6KGMubGFzdENoaWxkPWEsYy5maXJzdENoaWxkfHwoYy5maXJzdENoaWxkPWEpKTtjLmNoaWxkTm9kZXM9bnVsbH1cbmZ1bmN0aW9uIE5jKGEsYixjKXtpYyhiKTt2YXIgZD16KGIpO3ZvaWQgMCE9PWQuZmlyc3RDaGlsZCYmKGQuY2hpbGROb2Rlcz1udWxsKTtpZihhLm5vZGVUeXBlPT09Tm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKWZvcihhPWEuX19zaGFkeV9uYXRpdmVfZmlyc3RDaGlsZDthO2E9YS5fX3NoYWR5X25hdGl2ZV9uZXh0U2libGluZylNYyhhLGIsZCxjKTtlbHNlIE1jKGEsYixkLGMpfVxuZnVuY3Rpb24gT2MoYSxiKXt2YXIgYz16KGEpO2I9eihiKTthPT09Yi5maXJzdENoaWxkJiYoYi5maXJzdENoaWxkPWMubmV4dFNpYmxpbmcpO2E9PT1iLmxhc3RDaGlsZCYmKGIubGFzdENoaWxkPWMucHJldmlvdXNTaWJsaW5nKTthPWMucHJldmlvdXNTaWJsaW5nO3ZhciBkPWMubmV4dFNpYmxpbmc7YSYmKHooYSkubmV4dFNpYmxpbmc9ZCk7ZCYmKHooZCkucHJldmlvdXNTaWJsaW5nPWEpO2MucGFyZW50Tm9kZT1jLnByZXZpb3VzU2libGluZz1jLm5leHRTaWJsaW5nPXZvaWQgMDt2b2lkIDAhPT1iLmNoaWxkTm9kZXMmJihiLmNoaWxkTm9kZXM9bnVsbCl9XG5mdW5jdGlvbiBQYyhhLGIpe3ZhciBjPXooYSk7aWYoYnx8dm9pZCAwPT09Yy5maXJzdENoaWxkKXtjLmNoaWxkTm9kZXM9bnVsbDt2YXIgZD1jLmZpcnN0Q2hpbGQ9YS5fX3NoYWR5X25hdGl2ZV9maXJzdENoaWxkO2MubGFzdENoaWxkPWEuX19zaGFkeV9uYXRpdmVfbGFzdENoaWxkO2ljKGEpO2M9ZDtmb3IoZD12b2lkIDA7YztjPWMuX19zaGFkeV9uYXRpdmVfbmV4dFNpYmxpbmcpe3ZhciBlPXooYyk7ZS5wYXJlbnROb2RlPWJ8fGE7ZS5uZXh0U2libGluZz1jLl9fc2hhZHlfbmF0aXZlX25leHRTaWJsaW5nO2UucHJldmlvdXNTaWJsaW5nPWR8fG51bGw7ZD1jO2hjKGMpfX19O3ZhciBRYz1udWxsO2Z1bmN0aW9uIFJjKCl7UWN8fChRYz13aW5kb3cuU2hhZHlDU1MmJndpbmRvdy5TaGFkeUNTUy5TY29waW5nU2hpbSk7cmV0dXJuIFFjfHxudWxsfWZ1bmN0aW9uIFNjKGEsYil7dmFyIGM9UmMoKTtjJiZjLnVuc2NvcGVOb2RlKGEsYil9ZnVuY3Rpb24gVGMoYSxiKXt2YXIgYz1SYygpO2lmKCFjKXJldHVybiEwO2lmKGEubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpe2M9ITA7Zm9yKGE9YS5fX3NoYWR5X2ZpcnN0Q2hpbGQ7YTthPWEuX19zaGFkeV9uZXh0U2libGluZyljPWMmJlRjKGEsYik7cmV0dXJuIGN9cmV0dXJuIGEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERT8hMDpjLmN1cnJlbnRTY29wZUZvck5vZGUoYSk9PT1ifWZ1bmN0aW9uIFVjKGEpe2lmKGEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERSlyZXR1cm5cIlwiO3ZhciBiPVJjKCk7cmV0dXJuIGI/Yi5jdXJyZW50U2NvcGVGb3JOb2RlKGEpOlwiXCJ9XG5mdW5jdGlvbiBWYyhhLGIpe2lmKGEpZm9yKGEubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSYmYihhKSxhPWEuX19zaGFkeV9maXJzdENoaWxkO2E7YT1hLl9fc2hhZHlfbmV4dFNpYmxpbmcpYS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFJiZWYyhhLGIpfTt2YXIgV2M9d2luZG93LmRvY3VtZW50LFhjPUIudGEsWWM9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihOb2RlLnByb3RvdHlwZSxcImlzQ29ubmVjdGVkXCIpLFpjPVljJiZZYy5nZXQ7ZnVuY3Rpb24gJGMoYSl7Zm9yKHZhciBiO2I9YS5fX3NoYWR5X2ZpcnN0Q2hpbGQ7KWEuX19zaGFkeV9yZW1vdmVDaGlsZChiKX1mdW5jdGlvbiBhZChhKXt2YXIgYj1BKGEpO2lmKGImJnZvaWQgMCE9PWIuY2EpZm9yKGI9YS5fX3NoYWR5X2ZpcnN0Q2hpbGQ7YjtiPWIuX19zaGFkeV9uZXh0U2libGluZylhZChiKTtpZihhPUEoYSkpYS5jYT12b2lkIDB9ZnVuY3Rpb24gYmQoYSl7dmFyIGI9YTthJiZcInNsb3RcIj09PWEubG9jYWxOYW1lJiYoYj0oYj0oYj1BKGEpKSYmYi5UKSYmYi5sZW5ndGg/YlswXTpiZChhLl9fc2hhZHlfbmV4dFNpYmxpbmcpKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGNkKGEsYixjKXtpZihhPShhPUEoYSkpJiZhLlYpYiYmYS5hZGRlZE5vZGVzLnB1c2goYiksYyYmYS5yZW1vdmVkTm9kZXMucHVzaChjKSxEYihhKX1cbnZhciBnZD1FKHtnZXQgcGFyZW50Tm9kZSgpe3ZhciBhPUEodGhpcyk7YT1hJiZhLnBhcmVudE5vZGU7cmV0dXJuIHZvaWQgMCE9PWE/YTp0aGlzLl9fc2hhZHlfbmF0aXZlX3BhcmVudE5vZGV9LGdldCBmaXJzdENoaWxkKCl7dmFyIGE9QSh0aGlzKTthPWEmJmEuZmlyc3RDaGlsZDtyZXR1cm4gdm9pZCAwIT09YT9hOnRoaXMuX19zaGFkeV9uYXRpdmVfZmlyc3RDaGlsZH0sZ2V0IGxhc3RDaGlsZCgpe3ZhciBhPUEodGhpcyk7YT1hJiZhLmxhc3RDaGlsZDtyZXR1cm4gdm9pZCAwIT09YT9hOnRoaXMuX19zaGFkeV9uYXRpdmVfbGFzdENoaWxkfSxnZXQgbmV4dFNpYmxpbmcoKXt2YXIgYT1BKHRoaXMpO2E9YSYmYS5uZXh0U2libGluZztyZXR1cm4gdm9pZCAwIT09YT9hOnRoaXMuX19zaGFkeV9uYXRpdmVfbmV4dFNpYmxpbmd9LGdldCBwcmV2aW91c1NpYmxpbmcoKXt2YXIgYT1BKHRoaXMpO2E9YSYmYS5wcmV2aW91c1NpYmxpbmc7cmV0dXJuIHZvaWQgMCE9PWE/YTp0aGlzLl9fc2hhZHlfbmF0aXZlX3ByZXZpb3VzU2libGluZ30sXG5nZXQgY2hpbGROb2Rlcygpe2lmKGtiKHRoaXMpKXt2YXIgYT1BKHRoaXMpO2lmKCFhLmNoaWxkTm9kZXMpe2EuY2hpbGROb2Rlcz1bXTtmb3IodmFyIGI9dGhpcy5fX3NoYWR5X2ZpcnN0Q2hpbGQ7YjtiPWIuX19zaGFkeV9uZXh0U2libGluZylhLmNoaWxkTm9kZXMucHVzaChiKX12YXIgYz1hLmNoaWxkTm9kZXN9ZWxzZSBjPXRoaXMuX19zaGFkeV9uYXRpdmVfY2hpbGROb2RlcztjLml0ZW09ZnVuY3Rpb24oYSl7cmV0dXJuIGNbYV19O3JldHVybiBjfSxnZXQgcGFyZW50RWxlbWVudCgpe3ZhciBhPUEodGhpcyk7KGE9YSYmYS5wYXJlbnROb2RlKSYmYS5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFJiYoYT1udWxsKTtyZXR1cm4gdm9pZCAwIT09YT9hOnRoaXMuX19zaGFkeV9uYXRpdmVfcGFyZW50RWxlbWVudH0sZ2V0IGlzQ29ubmVjdGVkKCl7aWYoWmMmJlpjLmNhbGwodGhpcykpcmV0dXJuITA7aWYodGhpcy5ub2RlVHlwZT09Tm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKXJldHVybiExO1xudmFyIGE9dGhpcy5vd25lckRvY3VtZW50O2lmKHRiKXtpZihhLl9fc2hhZHlfbmF0aXZlX2NvbnRhaW5zKHRoaXMpKXJldHVybiEwfWVsc2UgaWYoYS5kb2N1bWVudEVsZW1lbnQmJmEuZG9jdW1lbnRFbGVtZW50Ll9fc2hhZHlfbmF0aXZlX2NvbnRhaW5zKHRoaXMpKXJldHVybiEwO2ZvcihhPXRoaXM7YSYmIShhIGluc3RhbmNlb2YgRG9jdW1lbnQpOylhPWEuX19zaGFkeV9wYXJlbnROb2RlfHwoQyhhKT9hLmhvc3Q6dm9pZCAwKTtyZXR1cm4hIShhJiZhIGluc3RhbmNlb2YgRG9jdW1lbnQpfSxnZXQgdGV4dENvbnRlbnQoKXtpZihrYih0aGlzKSl7Zm9yKHZhciBhPVtdLGI9dGhpcy5fX3NoYWR5X2ZpcnN0Q2hpbGQ7YjtiPWIuX19zaGFkeV9uZXh0U2libGluZyliLm5vZGVUeXBlIT09Tm9kZS5DT01NRU5UX05PREUmJmEucHVzaChiLl9fc2hhZHlfdGV4dENvbnRlbnQpO3JldHVybiBhLmpvaW4oXCJcIil9cmV0dXJuIHRoaXMuX19zaGFkeV9uYXRpdmVfdGV4dENvbnRlbnR9LHNldCB0ZXh0Q29udGVudChhKXtpZihcInVuZGVmaW5lZFwiPT09XG50eXBlb2YgYXx8bnVsbD09PWEpYT1cIlwiO3N3aXRjaCh0aGlzLm5vZGVUeXBlKXtjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOmNhc2UgTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFOmlmKCFrYih0aGlzKSYmQi5EKXt2YXIgYj10aGlzLl9fc2hhZHlfZmlyc3RDaGlsZDsoYiE9dGhpcy5fX3NoYWR5X2xhc3RDaGlsZHx8YiYmYi5ub2RlVHlwZSE9Tm9kZS5URVhUX05PREUpJiYkYyh0aGlzKTt0aGlzLl9fc2hhZHlfbmF0aXZlX3RleHRDb250ZW50PWF9ZWxzZSAkYyh0aGlzKSwoMDxhLmxlbmd0aHx8dGhpcy5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKSYmdGhpcy5fX3NoYWR5X2luc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSk7YnJlYWs7ZGVmYXVsdDp0aGlzLm5vZGVWYWx1ZT1hfX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKGEsYil7aWYodGhpcy5vd25lckRvY3VtZW50IT09V2MmJmEub3duZXJEb2N1bWVudCE9PVdjKXJldHVybiB0aGlzLl9fc2hhZHlfbmF0aXZlX2luc2VydEJlZm9yZShhLFxuYiksYTtpZihhPT09dGhpcyl0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdhcHBlbmRDaGlsZCcgb24gJ05vZGUnOiBUaGUgbmV3IGNoaWxkIGVsZW1lbnQgY29udGFpbnMgdGhlIHBhcmVudC5cIik7aWYoYil7dmFyIGM9QShiKTtjPWMmJmMucGFyZW50Tm9kZTtpZih2b2lkIDAhPT1jJiZjIT09dGhpc3x8dm9pZCAwPT09YyYmYi5fX3NoYWR5X25hdGl2ZV9wYXJlbnROb2RlIT09dGhpcyl0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdpbnNlcnRCZWZvcmUnIG9uICdOb2RlJzogVGhlIG5vZGUgYmVmb3JlIHdoaWNoIHRoZSBuZXcgbm9kZSBpcyB0byBiZSBpbnNlcnRlZCBpcyBub3QgYSBjaGlsZCBvZiB0aGlzIG5vZGUuXCIpO31pZihiPT09YSlyZXR1cm4gYTt2YXIgZD1bXSxlPShjPWRkKHRoaXMpKT9jLmhvc3QubG9jYWxOYW1lOlVjKHRoaXMpLGY9YS5fX3NoYWR5X3BhcmVudE5vZGU7aWYoZil7dmFyIGc9VWMoYSk7dmFyIGg9ISFjfHwhZGQoYSl8fFhjJiZ2b2lkIDAhPT1cbnRoaXMuX19ub0luc2VydGlvblBvaW50O2YuX19zaGFkeV9yZW1vdmVDaGlsZChhLGgpfWY9ITA7dmFyIGs9KCFYY3x8dm9pZCAwPT09YS5fX25vSW5zZXJ0aW9uUG9pbnQmJnZvaWQgMD09PXRoaXMuX19ub0luc2VydGlvblBvaW50KSYmIVRjKGEsZSksbD1jJiYhYS5fX25vSW5zZXJ0aW9uUG9pbnQmJighWGN8fGEubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpO2lmKGx8fGspayYmKGc9Z3x8VWMoYSkpLFZjKGEsZnVuY3Rpb24oYSl7bCYmXCJzbG90XCI9PT1hLmxvY2FsTmFtZSYmZC5wdXNoKGEpO2lmKGspe3ZhciBiPWc7UmMoKSYmKGImJlNjKGEsYiksKGI9UmMoKSkmJmIuc2NvcGVOb2RlKGEsZSkpfX0pO2QubGVuZ3RoJiYoZWQoYyksYy5jLnB1c2guYXBwbHkoYy5jLGQgaW5zdGFuY2VvZiBBcnJheT9kOmthKGphKGQpKSksSihjKSk7a2IodGhpcykmJihOYyhhLHRoaXMsYiksYz1BKHRoaXMpLGxiKHRoaXMpPyhKKGMucm9vdCksZj0hMSk6Yy5yb290JiYoZj1cbiExKSk7Zj8oYz1DKHRoaXMpP3RoaXMuaG9zdDp0aGlzLGI/KGI9YmQoYiksYy5fX3NoYWR5X25hdGl2ZV9pbnNlcnRCZWZvcmUoYSxiKSk6Yy5fX3NoYWR5X25hdGl2ZV9hcHBlbmRDaGlsZChhKSk6YS5vd25lckRvY3VtZW50IT09dGhpcy5vd25lckRvY3VtZW50JiZ0aGlzLm93bmVyRG9jdW1lbnQuYWRvcHROb2RlKGEpO2NkKHRoaXMsYSk7cmV0dXJuIGF9LGFwcGVuZENoaWxkOmZ1bmN0aW9uKGEpe2lmKHRoaXMhPWF8fCFDKGEpKXJldHVybiB0aGlzLl9fc2hhZHlfaW5zZXJ0QmVmb3JlKGEpfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihhLGIpe2I9dm9pZCAwPT09Yj8hMTpiO2lmKHRoaXMub3duZXJEb2N1bWVudCE9PVdjKXJldHVybiB0aGlzLl9fc2hhZHlfbmF0aXZlX3JlbW92ZUNoaWxkKGEpO2lmKGEuX19zaGFkeV9wYXJlbnROb2RlIT09dGhpcyl0aHJvdyBFcnJvcihcIlRoZSBub2RlIHRvIGJlIHJlbW92ZWQgaXMgbm90IGEgY2hpbGQgb2YgdGhpcyBub2RlOiBcIithKTt2YXIgYz1cbmRkKGEpLGQ9YyYmZmQoYyxhKSxlPUEodGhpcyk7aWYoa2IodGhpcykmJihPYyhhLHRoaXMpLGxiKHRoaXMpKSl7SihlLnJvb3QpO3ZhciBmPSEwfWlmKFJjKCkmJiFiJiZjJiZhLm5vZGVUeXBlIT09Tm9kZS5URVhUX05PREUpe3ZhciBnPVVjKGEpO1ZjKGEsZnVuY3Rpb24oYSl7U2MoYSxnKX0pfWFkKGEpO2MmJigoYj10aGlzJiZcInNsb3RcIj09PXRoaXMubG9jYWxOYW1lKSYmKGY9ITApLChkfHxiKSYmSihjKSk7Znx8KGY9Qyh0aGlzKT90aGlzLmhvc3Q6dGhpcywoIWUucm9vdCYmXCJzbG90XCIhPT1hLmxvY2FsTmFtZXx8Zj09PWEuX19zaGFkeV9uYXRpdmVfcGFyZW50Tm9kZSkmJmYuX19zaGFkeV9uYXRpdmVfcmVtb3ZlQ2hpbGQoYSkpO2NkKHRoaXMsbnVsbCxhKTtyZXR1cm4gYX0scmVwbGFjZUNoaWxkOmZ1bmN0aW9uKGEsYil7dGhpcy5fX3NoYWR5X2luc2VydEJlZm9yZShhLGIpO3RoaXMuX19zaGFkeV9yZW1vdmVDaGlsZChiKTtyZXR1cm4gYX0sY2xvbmVOb2RlOmZ1bmN0aW9uKGEpe2lmKFwidGVtcGxhdGVcIj09XG50aGlzLmxvY2FsTmFtZSlyZXR1cm4gdGhpcy5fX3NoYWR5X25hdGl2ZV9jbG9uZU5vZGUoYSk7dmFyIGI9dGhpcy5fX3NoYWR5X25hdGl2ZV9jbG9uZU5vZGUoITEpO2lmKGEmJmIubm9kZVR5cGUhPT1Ob2RlLkFUVFJJQlVURV9OT0RFKXthPXRoaXMuX19zaGFkeV9maXJzdENoaWxkO2Zvcih2YXIgYzthO2E9YS5fX3NoYWR5X25leHRTaWJsaW5nKWM9YS5fX3NoYWR5X2Nsb25lTm9kZSghMCksYi5fX3NoYWR5X2FwcGVuZENoaWxkKGMpfXJldHVybiBifSxnZXRSb290Tm9kZTpmdW5jdGlvbihhKXtpZih0aGlzJiZ0aGlzLm5vZGVUeXBlKXt2YXIgYj16KHRoaXMpLGM9Yi5jYTt2b2lkIDA9PT1jJiYoQyh0aGlzKT8oYz10aGlzLGIuY2E9Yyk6KGM9KGM9dGhpcy5fX3NoYWR5X3BhcmVudE5vZGUpP2MuX19zaGFkeV9nZXRSb290Tm9kZShhKTp0aGlzLGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5fX3NoYWR5X25hdGl2ZV9jb250YWlucyh0aGlzKSYmKGIuY2E9YykpKTtyZXR1cm4gY319LFxuY29udGFpbnM6ZnVuY3Rpb24oYSl7cmV0dXJuIHViKHRoaXMsYSl9fSk7ZnVuY3Rpb24gaGQoYSxiLGMpe3ZhciBkPVtdO2lkKGEsYixjLGQpO3JldHVybiBkfWZ1bmN0aW9uIGlkKGEsYixjLGQpe2ZvcihhPWEuX19zaGFkeV9maXJzdENoaWxkO2E7YT1hLl9fc2hhZHlfbmV4dFNpYmxpbmcpe3ZhciBlO2lmKGU9YS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXtlPWE7dmFyIGY9YixnPWMsaD1kLGs9ZihlKTtrJiZoLnB1c2goZSk7ZyYmZyhrKT9lPWs6KGlkKGUsZixnLGgpLGU9dm9pZCAwKX1pZihlKWJyZWFrfX1cbnZhciBqZD1FKHtnZXQgZmlyc3RFbGVtZW50Q2hpbGQoKXt2YXIgYT1BKHRoaXMpO2lmKGEmJnZvaWQgMCE9PWEuZmlyc3RDaGlsZCl7Zm9yKGE9dGhpcy5fX3NoYWR5X2ZpcnN0Q2hpbGQ7YSYmYS5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFOylhPWEuX19zaGFkeV9uZXh0U2libGluZztyZXR1cm4gYX1yZXR1cm4gdGhpcy5fX3NoYWR5X25hdGl2ZV9maXJzdEVsZW1lbnRDaGlsZH0sZ2V0IGxhc3RFbGVtZW50Q2hpbGQoKXt2YXIgYT1BKHRoaXMpO2lmKGEmJnZvaWQgMCE9PWEubGFzdENoaWxkKXtmb3IoYT10aGlzLl9fc2hhZHlfbGFzdENoaWxkO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERTspYT1hLl9fc2hhZHlfcHJldmlvdXNTaWJsaW5nO3JldHVybiBhfXJldHVybiB0aGlzLl9fc2hhZHlfbmF0aXZlX2xhc3RFbGVtZW50Q2hpbGR9LGdldCBjaGlsZHJlbigpe3JldHVybiBrYih0aGlzKT92YihBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoeGIodGhpcyksXG5mdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFfSkpOnRoaXMuX19zaGFkeV9uYXRpdmVfY2hpbGRyZW59LGdldCBjaGlsZEVsZW1lbnRDb3VudCgpe3ZhciBhPXRoaXMuX19zaGFkeV9jaGlsZHJlbjtyZXR1cm4gYT9hLmxlbmd0aDowfX0pLGtkPUUoe3F1ZXJ5U2VsZWN0b3I6ZnVuY3Rpb24oYSl7cmV0dXJuIGhkKHRoaXMsZnVuY3Rpb24oYil7cmV0dXJuIG9iLmNhbGwoYixhKX0sZnVuY3Rpb24oYSl7cmV0dXJuISFhfSlbMF18fG51bGx9LHF1ZXJ5U2VsZWN0b3JBbGw6ZnVuY3Rpb24oYSxiKXtpZihiKXtiPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX19zaGFkeV9uYXRpdmVfcXVlcnlTZWxlY3RvckFsbChhKSk7dmFyIGM9dGhpcy5fX3NoYWR5X2dldFJvb3ROb2RlKCk7cmV0dXJuIGIuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBhLl9fc2hhZHlfZ2V0Um9vdE5vZGUoKT09Y30pfXJldHVybiBoZCh0aGlzLGZ1bmN0aW9uKGIpe3JldHVybiBvYi5jYWxsKGIsXG5hKX0pfX0pLGxkPUIudGEmJiFCLk0/T2JqZWN0LmFzc2lnbih7fSxqZCk6amQ7T2JqZWN0LmFzc2lnbihqZCxrZCk7dmFyIG1kPUUoe2dldEVsZW1lbnRCeUlkOmZ1bmN0aW9uKGEpe3JldHVyblwiXCI9PT1hP251bGw6aGQodGhpcyxmdW5jdGlvbihiKXtyZXR1cm4gYi5pZD09YX0sZnVuY3Rpb24oYSl7cmV0dXJuISFhfSlbMF18fG51bGx9fSk7dmFyIG5kPUUoe2dldCBhY3RpdmVFbGVtZW50KCl7dmFyIGE9Qi5EP2RvY3VtZW50Ll9fc2hhZHlfbmF0aXZlX2FjdGl2ZUVsZW1lbnQ6ZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtpZighYXx8IWEubm9kZVR5cGUpcmV0dXJuIG51bGw7dmFyIGI9ISFDKHRoaXMpO2lmKCEodGhpcz09PWRvY3VtZW50fHxiJiZ0aGlzLmhvc3QhPT1hJiZ0aGlzLmhvc3QuX19zaGFkeV9uYXRpdmVfY29udGFpbnMoYSkpKXJldHVybiBudWxsO2ZvcihiPWRkKGEpO2ImJmIhPT10aGlzOylhPWIuaG9zdCxiPWRkKGEpO3JldHVybiB0aGlzPT09ZG9jdW1lbnQ/Yj9udWxsOmE6Yj09PXRoaXM/YTpudWxsfX0pO3ZhciBvZD1kb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJpbmVydFwiKSxwZD1FKHtnZXQgaW5uZXJIVE1MKCl7cmV0dXJuIGtiKHRoaXMpP1FiKFwidGVtcGxhdGVcIj09PXRoaXMubG9jYWxOYW1lP3RoaXMuY29udGVudDp0aGlzLHhiKTp0aGlzLl9fc2hhZHlfbmF0aXZlX2lubmVySFRNTH0sc2V0IGlubmVySFRNTChhKXtpZihcInRlbXBsYXRlXCI9PT10aGlzLmxvY2FsTmFtZSl0aGlzLl9fc2hhZHlfbmF0aXZlX2lubmVySFRNTD1hO2Vsc2V7JGModGhpcyk7dmFyIGI9dGhpcy5sb2NhbE5hbWV8fFwiZGl2XCI7Yj10aGlzLm5hbWVzcGFjZVVSSSYmdGhpcy5uYW1lc3BhY2VVUkkhPT1vZC5uYW1lc3BhY2VVUkk/b2QuY3JlYXRlRWxlbWVudE5TKHRoaXMubmFtZXNwYWNlVVJJLGIpOm9kLmNyZWF0ZUVsZW1lbnQoYik7Zm9yKEIuRD9iLl9fc2hhZHlfbmF0aXZlX2lubmVySFRNTD1hOmIuaW5uZXJIVE1MPWE7YT1iLl9fc2hhZHlfZmlyc3RDaGlsZDspdGhpcy5fX3NoYWR5X2luc2VydEJlZm9yZShhKX19fSk7dmFyIHFkPUUoe2FkZEV2ZW50TGlzdGVuZXI6ZnVuY3Rpb24oYSxiLGMpe1wib2JqZWN0XCIhPT10eXBlb2YgYyYmKGM9e2NhcHR1cmU6ISFjfSk7Yy5PPWMuT3x8dGhpczt0aGlzLmhvc3QuX19zaGFkeV9hZGRFdmVudExpc3RlbmVyKGEsYixjKX0scmVtb3ZlRXZlbnRMaXN0ZW5lcjpmdW5jdGlvbihhLGIsYyl7XCJvYmplY3RcIiE9PXR5cGVvZiBjJiYoYz17Y2FwdHVyZTohIWN9KTtjLk89Yy5PfHx0aGlzO3RoaXMuaG9zdC5fX3NoYWR5X3JlbW92ZUV2ZW50TGlzdGVuZXIoYSxiLGMpfX0pO2Z1bmN0aW9uIHJkKGEsYil7RChhLHFkLGIpO0QoYSxuZCxiKTtEKGEscGQsYik7RChhLGpkLGIpO0IuTSYmIWI/KEQoYSxnZCxiKSxEKGEsbWQsYikpOkIuRHx8KEQoYSxjYyksRChhLGFjKSxEKGEsYmMpKX07dmFyIHNkPXt9LHRkPUIuZGVmZXJDb25uZWN0aW9uQ2FsbGJhY2tzJiZcImxvYWRpbmdcIj09PWRvY3VtZW50LnJlYWR5U3RhdGUsdWQ7ZnVuY3Rpb24gdmQoYSl7dmFyIGI9W107ZG8gYi51bnNoaWZ0KGEpO3doaWxlKGE9YS5fX3NoYWR5X3BhcmVudE5vZGUpO3JldHVybiBifWZ1bmN0aW9uIHdkKGEsYixjKXtpZihhIT09c2QpdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgY29uc3RydWN0b3JcIik7dGhpcy5hPW51bGw7eGQodGhpcyxiLGMpfVxuZnVuY3Rpb24geGQoYSxiLGMpe2EuRGE9XCJTaGFkeVJvb3RcIjthLmhvc3Q9YjthLm1vZGU9YyYmYy5tb2RlO1BjKGEuaG9zdCk7Yj16KGEuaG9zdCk7Yi5yb290PWE7Yi5UYT1cImNsb3NlZFwiIT09YS5tb2RlP2E6bnVsbDtiPXooYSk7Yi5maXJzdENoaWxkPWIubGFzdENoaWxkPWIucGFyZW50Tm9kZT1iLm5leHRTaWJsaW5nPWIucHJldmlvdXNTaWJsaW5nPW51bGw7aWYoQi5wcmVmZXJQZXJmb3JtYW5jZSlmb3IoO2I9YS5ob3N0Ll9fc2hhZHlfbmF0aXZlX2ZpcnN0Q2hpbGQ7KWEuaG9zdC5fX3NoYWR5X25hdGl2ZV9yZW1vdmVDaGlsZChiKTtlbHNlIEooYSl9ZnVuY3Rpb24gSihhKXthLlJ8fChhLlI9ITAsQWIoZnVuY3Rpb24oKXtyZXR1cm4geWQoYSl9KSl9XG5mdW5jdGlvbiB5ZChhKXt2YXIgYjtpZihiPWEuUil7Zm9yKHZhciBjO2E7KWE6e2EuUiYmKGM9YSksYj1hO2E9Yi5ob3N0Ll9fc2hhZHlfZ2V0Um9vdE5vZGUoKTtpZihDKGEpJiYoYj1BKGIuaG9zdCkpJiYwPGIuWSlicmVhayBhO2E9dm9pZCAwfWI9Y30oYz1iKSYmYy5fcmVuZGVyU2VsZigpfVxud2QucHJvdG90eXBlLl9yZW5kZXJTZWxmPWZ1bmN0aW9uKCl7dmFyIGE9dGQ7dGQ9ITA7dGhpcy5SPSExO2lmKHRoaXMuYSl7emQodGhpcyk7Zm9yKHZhciBiPTAsYztiPHRoaXMuYS5sZW5ndGg7YisrKXtjPXRoaXMuYVtiXTt2YXIgZD1BKGMpLGU9ZC5hc3NpZ25lZE5vZGVzO2QuYXNzaWduZWROb2Rlcz1bXTtkLlQ9W107aWYoZC5xYT1lKWZvcihkPTA7ZDxlLmxlbmd0aDtkKyspe3ZhciBmPUEoZVtkXSk7Zi5oYT1mLmFzc2lnbmVkU2xvdDtmLmFzc2lnbmVkU2xvdD09PWMmJihmLmFzc2lnbmVkU2xvdD1udWxsKX19Zm9yKGI9dGhpcy5ob3N0Ll9fc2hhZHlfZmlyc3RDaGlsZDtiO2I9Yi5fX3NoYWR5X25leHRTaWJsaW5nKUFkKHRoaXMsYik7Zm9yKGI9MDtiPHRoaXMuYS5sZW5ndGg7YisrKXtjPXRoaXMuYVtiXTtlPUEoYyk7aWYoIWUuYXNzaWduZWROb2Rlcy5sZW5ndGgpZm9yKGQ9Yy5fX3NoYWR5X2ZpcnN0Q2hpbGQ7ZDtkPWQuX19zaGFkeV9uZXh0U2libGluZylBZCh0aGlzLFxuZCxjKTsoZD0oZD1BKGMuX19zaGFkeV9wYXJlbnROb2RlKSkmJmQucm9vdCkmJihtYihkKXx8ZC5SKSYmZC5fcmVuZGVyU2VsZigpO0JkKHRoaXMsZS5ULGUuYXNzaWduZWROb2Rlcyk7aWYoZD1lLnFhKXtmb3IoZj0wO2Y8ZC5sZW5ndGg7ZisrKUEoZFtmXSkuaGE9bnVsbDtlLnFhPW51bGw7ZC5sZW5ndGg+ZS5hc3NpZ25lZE5vZGVzLmxlbmd0aCYmKGUuamE9ITApfWUuamEmJihlLmphPSExLENkKHRoaXMsYykpfWM9dGhpcy5hO2I9W107Zm9yKGU9MDtlPGMubGVuZ3RoO2UrKylkPWNbZV0uX19zaGFkeV9wYXJlbnROb2RlLChmPUEoZCkpJiZmLnJvb3R8fCEoMD5iLmluZGV4T2YoZCkpfHxiLnB1c2goZCk7Zm9yKGM9MDtjPGIubGVuZ3RoO2MrKyl7Zj1iW2NdO2U9Zj09PXRoaXM/dGhpcy5ob3N0OmY7ZD1bXTtmb3IoZj1mLl9fc2hhZHlfZmlyc3RDaGlsZDtmO2Y9Zi5fX3NoYWR5X25leHRTaWJsaW5nKWlmKFwic2xvdFwiPT1mLmxvY2FsTmFtZSlmb3IodmFyIGc9QShmKS5ULGg9MDtoPFxuZy5sZW5ndGg7aCsrKWQucHVzaChnW2hdKTtlbHNlIGQucHVzaChmKTtmPXdiKGUpO2c9S2MoZCxkLmxlbmd0aCxmLGYubGVuZ3RoKTtmb3IodmFyIGs9aD0wLGw9dm9pZCAwO2g8Zy5sZW5ndGgmJihsPWdbaF0pO2grKyl7Zm9yKHZhciBuPTAscT12b2lkIDA7bjxsLlcubGVuZ3RoJiYocT1sLldbbl0pO24rKylxLl9fc2hhZHlfbmF0aXZlX3BhcmVudE5vZGU9PT1lJiZlLl9fc2hhZHlfbmF0aXZlX3JlbW92ZUNoaWxkKHEpLGYuc3BsaWNlKGwuaW5kZXgraywxKTtrLT1sLlp9az0wO2ZvcihsPXZvaWQgMDtrPGcubGVuZ3RoJiYobD1nW2tdKTtrKyspZm9yKGg9ZltsLmluZGV4XSxuPWwuaW5kZXg7bjxsLmluZGV4K2wuWjtuKyspcT1kW25dLGUuX19zaGFkeV9uYXRpdmVfaW5zZXJ0QmVmb3JlKHEsaCksZi5zcGxpY2UobiwwLHEpfX1pZighQi5wcmVmZXJQZXJmb3JtYW5jZSYmIXRoaXMucGEpZm9yKGI9dGhpcy5ob3N0Ll9fc2hhZHlfZmlyc3RDaGlsZDtiO2I9Yi5fX3NoYWR5X25leHRTaWJsaW5nKWM9XG5BKGIpLGIuX19zaGFkeV9uYXRpdmVfcGFyZW50Tm9kZSE9PXRoaXMuaG9zdHx8XCJzbG90XCIhPT1iLmxvY2FsTmFtZSYmYy5hc3NpZ25lZFNsb3R8fHRoaXMuaG9zdC5fX3NoYWR5X25hdGl2ZV9yZW1vdmVDaGlsZChiKTt0aGlzLnBhPSEwO3RkPWE7dWQmJnVkKCl9O2Z1bmN0aW9uIEFkKGEsYixjKXt2YXIgZD16KGIpLGU9ZC5oYTtkLmhhPW51bGw7Y3x8KGM9KGE9YS5iW2IuX19zaGFkeV9zbG90fHxcIl9fY2F0Y2hhbGxcIl0pJiZhWzBdKTtjPyh6KGMpLmFzc2lnbmVkTm9kZXMucHVzaChiKSxkLmFzc2lnbmVkU2xvdD1jKTpkLmFzc2lnbmVkU2xvdD12b2lkIDA7ZSE9PWQuYXNzaWduZWRTbG90JiZkLmFzc2lnbmVkU2xvdCYmKHooZC5hc3NpZ25lZFNsb3QpLmphPSEwKX1cbmZ1bmN0aW9uIEJkKGEsYixjKXtmb3IodmFyIGQ9MCxlPXZvaWQgMDtkPGMubGVuZ3RoJiYoZT1jW2RdKTtkKyspaWYoXCJzbG90XCI9PWUubG9jYWxOYW1lKXt2YXIgZj1BKGUpLmFzc2lnbmVkTm9kZXM7ZiYmZi5sZW5ndGgmJkJkKGEsYixmKX1lbHNlIGIucHVzaChjW2RdKX1mdW5jdGlvbiBDZChhLGIpe2IuX19zaGFkeV9uYXRpdmVfZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJzbG90Y2hhbmdlXCIpKTtiPUEoYik7Yi5hc3NpZ25lZFNsb3QmJkNkKGEsYi5hc3NpZ25lZFNsb3QpfWZ1bmN0aW9uIGVkKGEpe2EuYz1hLmN8fFtdO2EuYT1hLmF8fFtdO2EuYj1hLmJ8fHt9fVxuZnVuY3Rpb24gemQoYSl7aWYoYS5jJiZhLmMubGVuZ3RoKXtmb3IodmFyIGI9YS5jLGMsZD0wO2Q8Yi5sZW5ndGg7ZCsrKXt2YXIgZT1iW2RdO1BjKGUpO3ZhciBmPWUuX19zaGFkeV9wYXJlbnROb2RlO1BjKGYpO2Y9QShmKTtmLlk9KGYuWXx8MCkrMTtmPURkKGUpO2EuYltmXT8oYz1jfHx7fSxjW2ZdPSEwLGEuYltmXS5wdXNoKGUpKTphLmJbZl09W2VdO2EuYS5wdXNoKGUpfWlmKGMpZm9yKHZhciBnIGluIGMpYS5iW2ddPUVkKGEuYltnXSk7YS5jPVtdfX1mdW5jdGlvbiBEZChhKXt2YXIgYj1hLm5hbWV8fGEuZ2V0QXR0cmlidXRlKFwibmFtZVwiKXx8XCJfX2NhdGNoYWxsXCI7cmV0dXJuIGEuQmE9Yn1cbmZ1bmN0aW9uIEVkKGEpe3JldHVybiBhLnNvcnQoZnVuY3Rpb24oYSxjKXthPXZkKGEpO2Zvcih2YXIgYj12ZChjKSxlPTA7ZTxhLmxlbmd0aDtlKyspe2M9YVtlXTt2YXIgZj1iW2VdO2lmKGMhPT1mKXJldHVybiBhPXhiKGMuX19zaGFkeV9wYXJlbnROb2RlKSxhLmluZGV4T2YoYyktYS5pbmRleE9mKGYpfX0pfVxuZnVuY3Rpb24gZmQoYSxiKXtpZihhLmEpe3pkKGEpO3ZhciBjPWEuYixkO2ZvcihkIGluIGMpZm9yKHZhciBlPWNbZF0sZj0wO2Y8ZS5sZW5ndGg7ZisrKXt2YXIgZz1lW2ZdO2lmKHViKGIsZykpe2Uuc3BsaWNlKGYsMSk7dmFyIGg9YS5hLmluZGV4T2YoZyk7MDw9aCYmKGEuYS5zcGxpY2UoaCwxKSwoaD1BKGcuX19zaGFkeV9wYXJlbnROb2RlKSkmJmguWSYmaC5ZLS0pO2YtLTtnPUEoZyk7aWYoaD1nLlQpZm9yKHZhciBrPTA7azxoLmxlbmd0aDtrKyspe3ZhciBsPWhba10sbj1sLl9fc2hhZHlfbmF0aXZlX3BhcmVudE5vZGU7biYmbi5fX3NoYWR5X25hdGl2ZV9yZW1vdmVDaGlsZChsKX1nLlQ9W107Zy5hc3NpZ25lZE5vZGVzPVtdO2g9ITB9fXJldHVybiBofX1mdW5jdGlvbiBtYihhKXt6ZChhKTtyZXR1cm4hKCFhLmF8fCFhLmEubGVuZ3RoKX1cbihmdW5jdGlvbihhKXthLl9fcHJvdG9fXz1Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZTtyZChhLFwiX19zaGFkeV9cIik7cmQoYSk7T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYSx7bm9kZVR5cGU6e3ZhbHVlOk5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSxjb25maWd1cmFibGU6ITB9LG5vZGVOYW1lOnt2YWx1ZTpcIiNkb2N1bWVudC1mcmFnbWVudFwiLGNvbmZpZ3VyYWJsZTohMH0sbm9kZVZhbHVlOnt2YWx1ZTpudWxsLGNvbmZpZ3VyYWJsZTohMH19KTtbXCJsb2NhbE5hbWVcIixcIm5hbWVzcGFjZVVSSVwiLFwicHJlZml4XCJdLmZvckVhY2goZnVuY3Rpb24oYil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7dmFsdWU6dm9pZCAwLGNvbmZpZ3VyYWJsZTohMH0pfSk7W1wib3duZXJEb2N1bWVudFwiLFwiYmFzZVVSSVwiLFwiaXNDb25uZWN0ZWRcIl0uZm9yRWFjaChmdW5jdGlvbihiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ob3N0W2JdfSxcbmNvbmZpZ3VyYWJsZTohMH0pfSl9KSh3ZC5wcm90b3R5cGUpO1xuaWYod2luZG93LmN1c3RvbUVsZW1lbnRzJiZCLmthJiYhQi5wcmVmZXJQZXJmb3JtYW5jZSl7dmFyIEZkPW5ldyBNYXA7dWQ9ZnVuY3Rpb24oKXt2YXIgYT1bXTtGZC5mb3JFYWNoKGZ1bmN0aW9uKGIsYyl7YS5wdXNoKFtjLGJdKX0pO0ZkLmNsZWFyKCk7Zm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPWFbYl1bMF07YVtiXVsxXT9jLl9fc2hhZHlkb21fY29ubmVjdGVkQ2FsbGJhY2soKTpjLl9fc2hhZHlkb21fZGlzY29ubmVjdGVkQ2FsbGJhY2soKX19O3RkJiZkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGZ1bmN0aW9uKCl7dGQ9ITE7dWQoKX0se29uY2U6ITB9KTt2YXIgR2Q9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPTAsZT1cIl9faXNDb25uZWN0ZWRcIitkKys7aWYoYnx8YylhLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaz1hLnByb3RvdHlwZS5fX3NoYWR5ZG9tX2Nvbm5lY3RlZENhbGxiYWNrPWZ1bmN0aW9uKCl7dGQ/RmQuc2V0KHRoaXMsXG4hMCk6dGhpc1tlXXx8KHRoaXNbZV09ITAsYiYmYi5jYWxsKHRoaXMpKX0sYS5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2s9YS5wcm90b3R5cGUuX19zaGFkeWRvbV9kaXNjb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbigpe3RkP3RoaXMuaXNDb25uZWN0ZWR8fEZkLnNldCh0aGlzLCExKTp0aGlzW2VdJiYodGhpc1tlXT0hMSxjJiZjLmNhbGwodGhpcykpfTtyZXR1cm4gYX0sSGQ9d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSxkZWZpbmU9ZnVuY3Rpb24oYSxiKXt2YXIgYz1iLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayxkPWIucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrO0hkLmNhbGwod2luZG93LmN1c3RvbUVsZW1lbnRzLGEsR2QoYixjLGQpKTtiLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaz1jO2IucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrPWR9O3dpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmU9ZGVmaW5lO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5LnByb3RvdHlwZSxcblwiZGVmaW5lXCIse3ZhbHVlOmRlZmluZSxjb25maWd1cmFibGU6ITB9KX1mdW5jdGlvbiBkZChhKXthPWEuX19zaGFkeV9nZXRSb290Tm9kZSgpO2lmKEMoYSkpcmV0dXJuIGF9O2Z1bmN0aW9uIElkKGEpe3RoaXMubm9kZT1hfXI9SWQucHJvdG90eXBlO3IuYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2FkZEV2ZW50TGlzdGVuZXIoYSxiLGMpfTtyLnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9yZW1vdmVFdmVudExpc3RlbmVyKGEsYixjKX07ci5hcHBlbmRDaGlsZD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfYXBwZW5kQ2hpbGQoYSl9O3IuaW5zZXJ0QmVmb3JlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2luc2VydEJlZm9yZShhLGIpfTtyLnJlbW92ZUNoaWxkPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9yZW1vdmVDaGlsZChhKX07ci5yZXBsYWNlQ2hpbGQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfcmVwbGFjZUNoaWxkKGEsYil9O1xuci5jbG9uZU5vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2Nsb25lTm9kZShhKX07ci5nZXRSb290Tm9kZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfZ2V0Um9vdE5vZGUoYSl9O3IuY29udGFpbnM9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2NvbnRhaW5zKGEpfTtyLmRpc3BhdGNoRXZlbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2Rpc3BhdGNoRXZlbnQoYSl9O3Iuc2V0QXR0cmlidXRlPWZ1bmN0aW9uKGEsYil7dGhpcy5ub2RlLl9fc2hhZHlfc2V0QXR0cmlidXRlKGEsYil9O3IuZ2V0QXR0cmlidXRlPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9uYXRpdmVfZ2V0QXR0cmlidXRlKGEpfTtyLmhhc0F0dHJpYnV0ZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfbmF0aXZlX2hhc0F0dHJpYnV0ZShhKX07ci5yZW1vdmVBdHRyaWJ1dGU9ZnVuY3Rpb24oYSl7dGhpcy5ub2RlLl9fc2hhZHlfcmVtb3ZlQXR0cmlidXRlKGEpfTtcbnIuYXR0YWNoU2hhZG93PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9hdHRhY2hTaGFkb3coYSl9O3IuZm9jdXM9ZnVuY3Rpb24oKXt0aGlzLm5vZGUuX19zaGFkeV9uYXRpdmVfZm9jdXMoKX07ci5ibHVyPWZ1bmN0aW9uKCl7dGhpcy5ub2RlLl9fc2hhZHlfYmx1cigpfTtyLmltcG9ydE5vZGU9ZnVuY3Rpb24oYSxiKXtpZih0aGlzLm5vZGUubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX05PREUpcmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2ltcG9ydE5vZGUoYSxiKX07ci5nZXRFbGVtZW50QnlJZD1mdW5jdGlvbihhKXtpZih0aGlzLm5vZGUubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX05PREUpcmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2dldEVsZW1lbnRCeUlkKGEpfTtyLnF1ZXJ5U2VsZWN0b3I9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X3F1ZXJ5U2VsZWN0b3IoYSl9O1xuci5xdWVyeVNlbGVjdG9yQWxsPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X3F1ZXJ5U2VsZWN0b3JBbGwoYSxiKX07ci5hc3NpZ25lZE5vZGVzPWZ1bmN0aW9uKGEpe2lmKFwic2xvdFwiPT09dGhpcy5ub2RlLmxvY2FsTmFtZSlyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfYXNzaWduZWROb2RlcyhhKX07XG50Lk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKElkLnByb3RvdHlwZSx7YWN0aXZlRWxlbWVudDp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7aWYoQyh0aGlzLm5vZGUpfHx0aGlzLm5vZGUubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX05PREUpcmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2FjdGl2ZUVsZW1lbnR9fSxfYWN0aXZlRWxlbWVudDp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYWN0aXZlRWxlbWVudH19LGhvc3Q6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe2lmKEModGhpcy5ub2RlKSlyZXR1cm4gdGhpcy5ub2RlLmhvc3R9fSxwYXJlbnROb2RlOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfcGFyZW50Tm9kZX19LGZpcnN0Q2hpbGQ6e2NvbmZpZ3VyYWJsZTohMCxcbmVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2ZpcnN0Q2hpbGR9fSxsYXN0Q2hpbGQ6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9sYXN0Q2hpbGR9fSxuZXh0U2libGluZzp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X25leHRTaWJsaW5nfX0scHJldmlvdXNTaWJsaW5nOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfcHJldmlvdXNTaWJsaW5nfX0sY2hpbGROb2Rlczp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2NoaWxkTm9kZXN9fSxwYXJlbnRFbGVtZW50Ontjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxcbmdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9wYXJlbnRFbGVtZW50fX0sZmlyc3RFbGVtZW50Q2hpbGQ6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9maXJzdEVsZW1lbnRDaGlsZH19LGxhc3RFbGVtZW50Q2hpbGQ6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9sYXN0RWxlbWVudENoaWxkfX0sbmV4dEVsZW1lbnRTaWJsaW5nOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfbmV4dEVsZW1lbnRTaWJsaW5nfX0scHJldmlvdXNFbGVtZW50U2libGluZzp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X3ByZXZpb3VzRWxlbWVudFNpYmxpbmd9fSxcbmNoaWxkcmVuOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfY2hpbGRyZW59fSxjaGlsZEVsZW1lbnRDb3VudDp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2NoaWxkRWxlbWVudENvdW50fX0sc2hhZG93Um9vdDp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X3NoYWRvd1Jvb3R9fSxhc3NpZ25lZFNsb3Q6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9hc3NpZ25lZFNsb3R9fSxpc0Nvbm5lY3RlZDp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X2lzQ29ubmVjdGVkfX0saW5uZXJIVE1MOntjb25maWd1cmFibGU6ITAsXG5lbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9pbm5lckhUTUx9LHNldDpmdW5jdGlvbihhKXt0aGlzLm5vZGUuX19zaGFkeV9pbm5lckhUTUw9YX19LHRleHRDb250ZW50Ontjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfdGV4dENvbnRlbnR9LHNldDpmdW5jdGlvbihhKXt0aGlzLm5vZGUuX19zaGFkeV90ZXh0Q29udGVudD1hfX0sc2xvdDp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubm9kZS5fX3NoYWR5X3Nsb3R9LHNldDpmdW5jdGlvbihhKXt0aGlzLm5vZGUuX19zaGFkeV9zbG90PWF9fSxjbGFzc05hbWU6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGUuX19zaGFkeV9jbGFzc05hbWV9LHNldDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5ub2RlLl9fc2hhZHlfY2xhc3NOYW1lPVxuYX19fSk7SWMuZm9yRWFjaChmdW5jdGlvbihhKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoSWQucHJvdG90eXBlLGEse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm5vZGVbXCJfX3NoYWR5X1wiK2FdfSxzZXQ6ZnVuY3Rpb24oYil7dGhpcy5ub2RlW1wiX19zaGFkeV9cIithXT1ifSxjb25maWd1cmFibGU6ITB9KX0pO3ZhciBKZD1uZXcgV2Vha01hcDtmdW5jdGlvbiBLZChhKXtpZihDKGEpfHxhIGluc3RhbmNlb2YgSWQpcmV0dXJuIGE7dmFyIGI9SmQuZ2V0KGEpO2J8fChiPW5ldyBJZChhKSxKZC5zZXQoYSxiKSk7cmV0dXJuIGJ9O3ZhciBMZD1FKHtkaXNwYXRjaEV2ZW50OmZ1bmN0aW9uKGEpe0JiKCk7cmV0dXJuIHRoaXMuX19zaGFkeV9uYXRpdmVfZGlzcGF0Y2hFdmVudChhKX0sYWRkRXZlbnRMaXN0ZW5lcjp6YyxyZW1vdmVFdmVudExpc3RlbmVyOkJjfSk7dmFyIE1kPUUoe2dldCBhc3NpZ25lZFNsb3QoKXt2YXIgYT10aGlzLl9fc2hhZHlfcGFyZW50Tm9kZTsoYT1hJiZhLl9fc2hhZHlfc2hhZG93Um9vdCkmJnlkKGEpO3JldHVybihhPUEodGhpcykpJiZhLmFzc2lnbmVkU2xvdHx8bnVsbH19KTt2YXIgTmQ9d2luZG93LmRvY3VtZW50O2Z1bmN0aW9uIE9kKGEsYil7aWYoXCJzbG90XCI9PT1iKWE9YS5fX3NoYWR5X3BhcmVudE5vZGUsbGIoYSkmJkooQShhKS5yb290KTtlbHNlIGlmKFwic2xvdFwiPT09YS5sb2NhbE5hbWUmJlwibmFtZVwiPT09YiYmKGI9ZGQoYSkpKXtpZihiLmEpe3pkKGIpO3ZhciBjPWEuQmEsZD1EZChhKTtpZihkIT09Yyl7Yz1iLmJbY107dmFyIGU9Yy5pbmRleE9mKGEpOzA8PWUmJmMuc3BsaWNlKGUsMSk7Yz1iLmJbZF18fChiLmJbZF09W10pO2MucHVzaChhKTsxPGMubGVuZ3RoJiYoYi5iW2RdPUVkKGMpKX19SihiKX19XG52YXIgUGQ9RSh7Z2V0IHByZXZpb3VzRWxlbWVudFNpYmxpbmcoKXt2YXIgYT1BKHRoaXMpO2lmKGEmJnZvaWQgMCE9PWEucHJldmlvdXNTaWJsaW5nKXtmb3IoYT10aGlzLl9fc2hhZHlfcHJldmlvdXNTaWJsaW5nO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERTspYT1hLl9fc2hhZHlfcHJldmlvdXNTaWJsaW5nO3JldHVybiBhfXJldHVybiB0aGlzLl9fc2hhZHlfbmF0aXZlX3ByZXZpb3VzRWxlbWVudFNpYmxpbmd9LGdldCBuZXh0RWxlbWVudFNpYmxpbmcoKXt2YXIgYT1BKHRoaXMpO2lmKGEmJnZvaWQgMCE9PWEubmV4dFNpYmxpbmcpe2ZvcihhPXRoaXMuX19zaGFkeV9uZXh0U2libGluZzthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5fX3NoYWR5X25leHRTaWJsaW5nO3JldHVybiBhfXJldHVybiB0aGlzLl9fc2hhZHlfbmF0aXZlX25leHRFbGVtZW50U2libGluZ30sZ2V0IHNsb3QoKXtyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJzbG90XCIpfSxcbnNldCBzbG90KGEpe3RoaXMuX19zaGFkeV9zZXRBdHRyaWJ1dGUoXCJzbG90XCIsYSl9LGdldCBzaGFkb3dSb290KCl7dmFyIGE9QSh0aGlzKTtyZXR1cm4gYSYmYS5UYXx8bnVsbH0sZ2V0IGNsYXNzTmFtZSgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifSxzZXQgY2xhc3NOYW1lKGEpe3RoaXMuX19zaGFkeV9zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGEpfSxzZXRBdHRyaWJ1dGU6ZnVuY3Rpb24oYSxiKXtpZih0aGlzLm93bmVyRG9jdW1lbnQhPT1OZCl0aGlzLl9fc2hhZHlfbmF0aXZlX3NldEF0dHJpYnV0ZShhLGIpO2Vsc2V7dmFyIGM7KGM9UmMoKSkmJlwiY2xhc3NcIj09PWE/KGMuc2V0RWxlbWVudENsYXNzKHRoaXMsYiksYz0hMCk6Yz0hMTtjfHwodGhpcy5fX3NoYWR5X25hdGl2ZV9zZXRBdHRyaWJ1dGUoYSxiKSxPZCh0aGlzLGEpKX19LHJlbW92ZUF0dHJpYnV0ZTpmdW5jdGlvbihhKXt0aGlzLl9fc2hhZHlfbmF0aXZlX3JlbW92ZUF0dHJpYnV0ZShhKTtPZCh0aGlzLFxuYSl9LGF0dGFjaFNoYWRvdzpmdW5jdGlvbihhKXtpZighdGhpcyl0aHJvdyBFcnJvcihcIk11c3QgcHJvdmlkZSBhIGhvc3QuXCIpO2lmKCFhKXRocm93IEVycm9yKFwiTm90IGVub3VnaCBhcmd1bWVudHMuXCIpO2lmKGEuc2hhZHlVcGdyYWRlRnJhZ21lbnQmJiFCLnlhKXt2YXIgYj1hLnNoYWR5VXBncmFkZUZyYWdtZW50O2IuX19wcm90b19fPVNoYWRvd1Jvb3QucHJvdG90eXBlO3hkKGIsdGhpcyxhKTtQYyhiLGIpO2E9Yi5fX25vSW5zZXJ0aW9uUG9pbnQ/bnVsbDpiLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzbG90XCIpO2IuX19ub0luc2VydGlvblBvaW50PXZvaWQgMDtpZihhJiZhLmxlbmd0aCl7dmFyIGM9YjtlZChjKTtjLmMucHVzaC5hcHBseShjLmMsYSBpbnN0YW5jZW9mIEFycmF5P2E6a2EoamEoYSkpKTtKKGIpfWIuaG9zdC5fX3NoYWR5X25hdGl2ZV9hcHBlbmRDaGlsZChiKX1lbHNlIGI9bmV3IHdkKHNkLHRoaXMsYSk7cmV0dXJuIGJ9fSk7dmFyIFFkPUUoe2JsdXI6ZnVuY3Rpb24oKXt2YXIgYT1BKHRoaXMpOyhhPShhPWEmJmEucm9vdCkmJmEuYWN0aXZlRWxlbWVudCk/YS5fX3NoYWR5X2JsdXIoKTp0aGlzLl9fc2hhZHlfbmF0aXZlX2JsdXIoKX19KTtJYy5mb3JFYWNoKGZ1bmN0aW9uKGEpe1FkW2FdPXtzZXQ6ZnVuY3Rpb24oYil7dmFyIGM9eih0aGlzKSxkPWEuc3Vic3RyaW5nKDIpO2MuTnx8KGMuTj17fSk7Yy5OW2FdJiZ0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZCxjLk5bYV0pO3RoaXMuX19zaGFkeV9hZGRFdmVudExpc3RlbmVyKGQsYik7Yy5OW2FdPWJ9LGdldDpmdW5jdGlvbigpe3ZhciBiPUEodGhpcyk7cmV0dXJuIGImJmIuTiYmYi5OW2FdfSxjb25maWd1cmFibGU6ITB9fSk7dmFyIFJkPUUoe2Fzc2lnbmVkTm9kZXM6ZnVuY3Rpb24oYSl7aWYoXCJzbG90XCI9PT10aGlzLmxvY2FsTmFtZSl7dmFyIGI9dGhpcy5fX3NoYWR5X2dldFJvb3ROb2RlKCk7YiYmQyhiKSYmeWQoYik7cmV0dXJuKGI9QSh0aGlzKSk/KGEmJmEuZmxhdHRlbj9iLlQ6Yi5hc3NpZ25lZE5vZGVzKXx8W106W119fSxhZGRFdmVudExpc3RlbmVyOmZ1bmN0aW9uKGEsYixjKXtpZihcInNsb3RcIiE9PXRoaXMubG9jYWxOYW1lfHxcInNsb3RjaGFuZ2VcIj09PWEpemMuY2FsbCh0aGlzLGEsYixjKTtlbHNle1wib2JqZWN0XCIhPT10eXBlb2YgYyYmKGM9e2NhcHR1cmU6ISFjfSk7dmFyIGQ9dGhpcy5fX3NoYWR5X3BhcmVudE5vZGU7aWYoIWQpdGhyb3cgRXJyb3IoXCJTaGFkeURPTSBjYW5ub3QgYXR0YWNoIGV2ZW50IHRvIHNsb3QgdW5sZXNzIGl0IGhhcyBhIGBwYXJlbnROb2RlYFwiKTtjLk89dGhpcztkLl9fc2hhZHlfYWRkRXZlbnRMaXN0ZW5lcihhLGIsYyl9fSxyZW1vdmVFdmVudExpc3RlbmVyOmZ1bmN0aW9uKGEsXG5iLGMpe2lmKFwic2xvdFwiIT09dGhpcy5sb2NhbE5hbWV8fFwic2xvdGNoYW5nZVwiPT09YSlCYy5jYWxsKHRoaXMsYSxiLGMpO2Vsc2V7XCJvYmplY3RcIiE9PXR5cGVvZiBjJiYoYz17Y2FwdHVyZTohIWN9KTt2YXIgZD10aGlzLl9fc2hhZHlfcGFyZW50Tm9kZTtpZighZCl0aHJvdyBFcnJvcihcIlNoYWR5RE9NIGNhbm5vdCBhdHRhY2ggZXZlbnQgdG8gc2xvdCB1bmxlc3MgaXQgaGFzIGEgYHBhcmVudE5vZGVgXCIpO2MuTz10aGlzO2QuX19zaGFkeV9yZW1vdmVFdmVudExpc3RlbmVyKGEsYixjKX19fSk7dmFyIFNkPXdpbmRvdy5kb2N1bWVudCxUZD1FKHtpbXBvcnROb2RlOmZ1bmN0aW9uKGEsYil7aWYoYS5vd25lckRvY3VtZW50IT09U2R8fFwidGVtcGxhdGVcIj09PWEubG9jYWxOYW1lKXJldHVybiB0aGlzLl9fc2hhZHlfbmF0aXZlX2ltcG9ydE5vZGUoYSxiKTt2YXIgYz10aGlzLl9fc2hhZHlfbmF0aXZlX2ltcG9ydE5vZGUoYSwhMSk7aWYoYilmb3IoYT1hLl9fc2hhZHlfZmlyc3RDaGlsZDthO2E9YS5fX3NoYWR5X25leHRTaWJsaW5nKWI9dGhpcy5fX3NoYWR5X2ltcG9ydE5vZGUoYSwhMCksYy5fX3NoYWR5X2FwcGVuZENoaWxkKGIpO3JldHVybiBjfX0pO3ZhciBVZD1FKHthZGRFdmVudExpc3RlbmVyOnpjLmJpbmQod2luZG93KSxyZW1vdmVFdmVudExpc3RlbmVyOkJjLmJpbmQod2luZG93KX0pO3ZhciBWZD17fTtPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxFbGVtZW50LnByb3RvdHlwZSxcInBhcmVudEVsZW1lbnRcIikmJihWZC5wYXJlbnRFbGVtZW50PWdkLnBhcmVudEVsZW1lbnQpO09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEVsZW1lbnQucHJvdG90eXBlLFwiY29udGFpbnNcIikmJihWZC5jb250YWlucz1nZC5jb250YWlucyk7T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRWxlbWVudC5wcm90b3R5cGUsXCJjaGlsZHJlblwiKSYmKFZkLmNoaWxkcmVuPWpkLmNoaWxkcmVuKTtPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxFbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKSYmKFZkLmlubmVySFRNTD1wZC5pbm5lckhUTUwpO09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEVsZW1lbnQucHJvdG90eXBlLFwiY2xhc3NOYW1lXCIpJiYoVmQuY2xhc3NOYW1lPVBkLmNsYXNzTmFtZSk7XG52YXIgV2Q9e0V2ZW50VGFyZ2V0OltMZF0sTm9kZTpbZ2Qsd2luZG93LkV2ZW50VGFyZ2V0P251bGw6TGRdLFRleHQ6W01kXSxFbGVtZW50OltQZCxqZCxNZCwhQi5EfHxcImlubmVySFRNTFwiaW4gRWxlbWVudC5wcm90b3R5cGU/cGQ6bnVsbCx3aW5kb3cuSFRNTFNsb3RFbGVtZW50P251bGw6UmRdLEhUTUxFbGVtZW50OltRZCxWZF0sSFRNTFNsb3RFbGVtZW50OltSZF0sRG9jdW1lbnRGcmFnbWVudDpbbGQsbWRdLERvY3VtZW50OltUZCxsZCxtZCxuZF0sV2luZG93OltVZF19LFhkPUIuRD9udWxsOltcImlubmVySFRNTFwiLFwidGV4dENvbnRlbnRcIl07ZnVuY3Rpb24gWWQoYSl7dmFyIGI9YT9udWxsOlhkLGM9e30sZDtmb3IoZCBpbiBXZCljLmVhPXdpbmRvd1tkXSYmd2luZG93W2RdLnByb3RvdHlwZSxXZFtkXS5mb3JFYWNoKGZ1bmN0aW9uKGMpe3JldHVybiBmdW5jdGlvbihkKXtyZXR1cm4gYy5lYSYmZCYmRChjLmVhLGQsYSxiKX19KGMpKSxjPXtlYTpjLmVhfX07aWYoQi5rYSl7dmFyIFNoYWR5RE9NPXtpblVzZTpCLmthLHBhdGNoOmZ1bmN0aW9uKGEpe2ljKGEpO2hjKGEpO3JldHVybiBhfSxpc1NoYWR5Um9vdDpDLGVucXVldWU6QWIsZmx1c2g6QmIsZmx1c2hJbml0aWFsOmZ1bmN0aW9uKGEpeyFhLnBhJiZhLlImJnlkKGEpfSxzZXR0aW5nczpCLGZpbHRlck11dGF0aW9uczpKYixvYnNlcnZlQ2hpbGRyZW46SGIsdW5vYnNlcnZlQ2hpbGRyZW46SWIsZGVmZXJDb25uZWN0aW9uQ2FsbGJhY2tzOkIuZGVmZXJDb25uZWN0aW9uQ2FsbGJhY2tzLHByZWZlclBlcmZvcm1hbmNlOkIucHJlZmVyUGVyZm9ybWFuY2UsaGFuZGxlc0R5bmFtaWNTY29waW5nOiEwLHdyYXA6Qi5NP0tkOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxXcmFwcGVyOklkLGNvbXBvc2VkUGF0aDpyYyxub1BhdGNoOkIuTSxuYXRpdmVNZXRob2RzOlNiLG5hdGl2ZVRyZWU6VGJ9O3dpbmRvdy5TaGFkeURPTT1TaGFkeURPTTskYigpO1lkKFwiX19zaGFkeV9cIik7T2JqZWN0LmRlZmluZVByb3BlcnR5KGRvY3VtZW50LFxuXCJfYWN0aXZlRWxlbWVudFwiLG5kLmFjdGl2ZUVsZW1lbnQpO0QoV2luZG93LnByb3RvdHlwZSxVZCxcIl9fc2hhZHlfXCIpO0IuTXx8KFlkKCksSGMoKSk7Q2MoKTt3aW5kb3cuRXZlbnQ9RWM7d2luZG93LkN1c3RvbUV2ZW50PUZjO3dpbmRvdy5Nb3VzZUV2ZW50PUdjO3dpbmRvdy5TaGFkb3dSb290PXdkfTt2YXIgWmQ9bmV3IFNldChcImFubm90YXRpb24teG1sIGNvbG9yLXByb2ZpbGUgZm9udC1mYWNlIGZvbnQtZmFjZS1zcmMgZm9udC1mYWNlLXVyaSBmb250LWZhY2UtZm9ybWF0IGZvbnQtZmFjZS1uYW1lIG1pc3NpbmctZ2x5cGhcIi5zcGxpdChcIiBcIikpO2Z1bmN0aW9uICRkKGEpe3ZhciBiPVpkLmhhcyhhKTthPS9eW2Etel1bLjAtOV9hLXpdKi1bXFwtLjAtOV9hLXpdKiQvLnRlc3QoYSk7cmV0dXJuIWImJmF9ZnVuY3Rpb24gSyhhKXt2YXIgYj1hLmlzQ29ubmVjdGVkO2lmKHZvaWQgMCE9PWIpcmV0dXJuIGI7Zm9yKDthJiYhKGEuX19DRV9pc0ltcG9ydERvY3VtZW50fHxhIGluc3RhbmNlb2YgRG9jdW1lbnQpOylhPWEucGFyZW50Tm9kZXx8KHdpbmRvdy5TaGFkb3dSb290JiZhIGluc3RhbmNlb2YgU2hhZG93Um9vdD9hLmhvc3Q6dm9pZCAwKTtyZXR1cm4hKCFhfHwhKGEuX19DRV9pc0ltcG9ydERvY3VtZW50fHxhIGluc3RhbmNlb2YgRG9jdW1lbnQpKX1cbmZ1bmN0aW9uIGFlKGEsYil7Zm9yKDtiJiZiIT09YSYmIWIubmV4dFNpYmxpbmc7KWI9Yi5wYXJlbnROb2RlO3JldHVybiBiJiZiIT09YT9iLm5leHRTaWJsaW5nOm51bGx9XG5mdW5jdGlvbiBiZShhLGIsYyl7Yz12b2lkIDA9PT1jP25ldyBTZXQ6Yztmb3IodmFyIGQ9YTtkOyl7aWYoZC5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXt2YXIgZT1kO2IoZSk7dmFyIGY9ZS5sb2NhbE5hbWU7aWYoXCJsaW5rXCI9PT1mJiZcImltcG9ydFwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJyZWxcIikpe2Q9ZS5pbXBvcnQ7aWYoZCBpbnN0YW5jZW9mIE5vZGUmJiFjLmhhcyhkKSlmb3IoYy5hZGQoZCksZD1kLmZpcnN0Q2hpbGQ7ZDtkPWQubmV4dFNpYmxpbmcpYmUoZCxiLGMpO2Q9YWUoYSxlKTtjb250aW51ZX1lbHNlIGlmKFwidGVtcGxhdGVcIj09PWYpe2Q9YWUoYSxlKTtjb250aW51ZX1pZihlPWUuX19DRV9zaGFkb3dSb290KWZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZyliZShlLGIsYyl9ZD1kLmZpcnN0Q2hpbGQ/ZC5maXJzdENoaWxkOmFlKGEsZCl9fWZ1bmN0aW9uIEwoYSxiLGMpe2FbYl09Y307ZnVuY3Rpb24gY2UoKXt0aGlzLmE9bmV3IE1hcDt0aGlzLnU9bmV3IE1hcDt0aGlzLmM9W107dGhpcy5mPVtdO3RoaXMuYj0hMX1mdW5jdGlvbiBkZShhLGIsYyl7YS5hLnNldChiLGMpO2EudS5zZXQoYy5jb25zdHJ1Y3RvckZ1bmN0aW9uLGMpfWZ1bmN0aW9uIGVlKGEsYil7YS5iPSEwO2EuYy5wdXNoKGIpfWZ1bmN0aW9uIGZlKGEsYil7YS5iPSEwO2EuZi5wdXNoKGIpfWZ1bmN0aW9uIGdlKGEsYil7YS5iJiZiZShiLGZ1bmN0aW9uKGIpe3JldHVybiBoZShhLGIpfSl9ZnVuY3Rpb24gaGUoYSxiKXtpZihhLmImJiFiLl9fQ0VfcGF0Y2hlZCl7Yi5fX0NFX3BhdGNoZWQ9ITA7Zm9yKHZhciBjPTA7YzxhLmMubGVuZ3RoO2MrKylhLmNbY10oYik7Zm9yKGM9MDtjPGEuZi5sZW5ndGg7YysrKWEuZltjXShiKX19XG5mdW5jdGlvbiBNKGEsYil7dmFyIGM9W107YmUoYixmdW5jdGlvbihhKXtyZXR1cm4gYy5wdXNoKGEpfSk7Zm9yKGI9MDtiPGMubGVuZ3RoO2IrKyl7dmFyIGQ9Y1tiXTsxPT09ZC5fX0NFX3N0YXRlP2EuY29ubmVjdGVkQ2FsbGJhY2soZCk6aWUoYSxkKX19ZnVuY3Rpb24gTihhLGIpe3ZhciBjPVtdO2JlKGIsZnVuY3Rpb24oYSl7cmV0dXJuIGMucHVzaChhKX0pO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBkPWNbYl07MT09PWQuX19DRV9zdGF0ZSYmYS5kaXNjb25uZWN0ZWRDYWxsYmFjayhkKX19XG5mdW5jdGlvbiBPKGEsYixjKXtjPXZvaWQgMD09PWM/e306Yzt2YXIgZD1jLiRhfHxuZXcgU2V0LGU9Yy5mYXx8ZnVuY3Rpb24oYil7cmV0dXJuIGllKGEsYil9LGY9W107YmUoYixmdW5jdGlvbihiKXtpZihcImxpbmtcIj09PWIubG9jYWxOYW1lJiZcImltcG9ydFwiPT09Yi5nZXRBdHRyaWJ1dGUoXCJyZWxcIikpe3ZhciBjPWIuaW1wb3J0O2MgaW5zdGFuY2VvZiBOb2RlJiYoYy5fX0NFX2lzSW1wb3J0RG9jdW1lbnQ9ITAsYy5fX0NFX2hhc1JlZ2lzdHJ5PSEwKTtjJiZcImNvbXBsZXRlXCI9PT1jLnJlYWR5U3RhdGU/Yy5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQ9ITA6Yi5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7dmFyIGM9Yi5pbXBvcnQ7aWYoIWMuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkKXtjLl9fQ0VfZG9jdW1lbnRMb2FkSGFuZGxlZD0hMDt2YXIgZj1uZXcgU2V0KGQpO2YuZGVsZXRlKGMpO08oYSxjLHskYTpmLGZhOmV9KX19KX1lbHNlIGYucHVzaChiKX0sZCk7XG5pZihhLmIpZm9yKGI9MDtiPGYubGVuZ3RoO2IrKyloZShhLGZbYl0pO2ZvcihiPTA7YjxmLmxlbmd0aDtiKyspZShmW2JdKX1cbmZ1bmN0aW9uIGllKGEsYil7aWYodm9pZCAwPT09Yi5fX0NFX3N0YXRlKXt2YXIgYz1iLm93bmVyRG9jdW1lbnQ7aWYoYy5kZWZhdWx0Vmlld3x8Yy5fX0NFX2lzSW1wb3J0RG9jdW1lbnQmJmMuX19DRV9oYXNSZWdpc3RyeSlpZihjPWEuYS5nZXQoYi5sb2NhbE5hbWUpKXtjLmNvbnN0cnVjdGlvblN0YWNrLnB1c2goYik7dmFyIGQ9Yy5jb25zdHJ1Y3RvckZ1bmN0aW9uO3RyeXt0cnl7aWYobmV3IGQhPT1iKXRocm93IEVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9yIGRpZCBub3QgcHJvZHVjZSB0aGUgZWxlbWVudCBiZWluZyB1cGdyYWRlZC5cIik7fWZpbmFsbHl7Yy5jb25zdHJ1Y3Rpb25TdGFjay5wb3AoKX19Y2F0Y2goZyl7dGhyb3cgYi5fX0NFX3N0YXRlPTIsZzt9Yi5fX0NFX3N0YXRlPTE7Yi5fX0NFX2RlZmluaXRpb249YztpZihjLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaylmb3IoYz1jLm9ic2VydmVkQXR0cmlidXRlcyxkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPVxuY1tkXSxmPWIuZ2V0QXR0cmlidXRlKGUpO251bGwhPT1mJiZhLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhiLGUsbnVsbCxmLG51bGwpfUsoYikmJmEuY29ubmVjdGVkQ2FsbGJhY2soYil9fX1jZS5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9YS5fX0NFX2RlZmluaXRpb247Yi5jb25uZWN0ZWRDYWxsYmFjayYmYi5jb25uZWN0ZWRDYWxsYmFjay5jYWxsKGEpfTtjZS5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9YS5fX0NFX2RlZmluaXRpb247Yi5kaXNjb25uZWN0ZWRDYWxsYmFjayYmYi5kaXNjb25uZWN0ZWRDYWxsYmFjay5jYWxsKGEpfTtcbmNlLnByb3RvdHlwZS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1hLl9fQ0VfZGVmaW5pdGlvbjtmLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayYmLTE8Zi5vYnNlcnZlZEF0dHJpYnV0ZXMuaW5kZXhPZihiKSYmZi5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2suY2FsbChhLGIsYyxkLGUpfTtmdW5jdGlvbiBqZShhKXt2YXIgYj1kb2N1bWVudDt0aGlzLmI9YTt0aGlzLmE9Yjt0aGlzLlA9dm9pZCAwO08odGhpcy5iLHRoaXMuYSk7XCJsb2FkaW5nXCI9PT10aGlzLmEucmVhZHlTdGF0ZSYmKHRoaXMuUD1uZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmMuYmluZCh0aGlzKSksdGhpcy5QLm9ic2VydmUodGhpcy5hLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pKX1mdW5jdGlvbiBrZShhKXthLlAmJmEuUC5kaXNjb25uZWN0KCl9amUucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hLnJlYWR5U3RhdGU7XCJpbnRlcmFjdGl2ZVwiIT09YiYmXCJjb21wbGV0ZVwiIT09Ynx8a2UodGhpcyk7Zm9yKGI9MDtiPGEubGVuZ3RoO2IrKylmb3IodmFyIGM9YVtiXS5hZGRlZE5vZGVzLGQ9MDtkPGMubGVuZ3RoO2QrKylPKHRoaXMuYixjW2RdKX07ZnVuY3Rpb24gbGUoKXt2YXIgYT10aGlzO3RoaXMuYT10aGlzLnc9dm9pZCAwO3RoaXMuYj1uZXcgUHJvbWlzZShmdW5jdGlvbihiKXthLmE9YjthLncmJmIoYS53KX0pfWxlLnByb3RvdHlwZS5yZXNvbHZlPWZ1bmN0aW9uKGEpe2lmKHRoaXMudyl0aHJvdyBFcnJvcihcIkFscmVhZHkgcmVzb2x2ZWQuXCIpO3RoaXMudz1hO3RoaXMuYSYmdGhpcy5hKGEpfTtmdW5jdGlvbiBQKGEpe3RoaXMuYz0hMTt0aGlzLmE9YTt0aGlzLkY9bmV3IE1hcDt0aGlzLmY9ZnVuY3Rpb24oYSl7cmV0dXJuIGEoKX07dGhpcy5iPSExO3RoaXMudT1bXTt0aGlzLmFhPW5ldyBqZShhKX1yPVAucHJvdG90eXBlO1xuci53YT1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7aWYoIShiIGluc3RhbmNlb2YgRnVuY3Rpb24pKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcnMgbXVzdCBiZSBmdW5jdGlvbnMuXCIpO2lmKCEkZChhKSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJUaGUgZWxlbWVudCBuYW1lICdcIithK1wiJyBpcyBub3QgdmFsaWQuXCIpO2lmKHRoaXMuYS5hLmdldChhKSl0aHJvdyBFcnJvcihcIkEgY3VzdG9tIGVsZW1lbnQgd2l0aCBuYW1lICdcIithK1wiJyBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuXCIpO2lmKHRoaXMuYyl0aHJvdyBFcnJvcihcIkEgY3VzdG9tIGVsZW1lbnQgaXMgYWxyZWFkeSBiZWluZyBkZWZpbmVkLlwiKTt0aGlzLmM9ITA7dHJ5e3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiPWVbYV07aWYodm9pZCAwIT09YiYmIShiIGluc3RhbmNlb2YgRnVuY3Rpb24pKXRocm93IEVycm9yKFwiVGhlICdcIithK1wiJyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO1xucmV0dXJuIGJ9LGU9Yi5wcm90b3R5cGU7aWYoIShlIGluc3RhbmNlb2YgT2JqZWN0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9yJ3MgcHJvdG90eXBlIGlzIG5vdCBhbiBvYmplY3QuXCIpO3ZhciBmPWQoXCJjb25uZWN0ZWRDYWxsYmFja1wiKTt2YXIgZz1kKFwiZGlzY29ubmVjdGVkQ2FsbGJhY2tcIik7dmFyIGg9ZChcImFkb3B0ZWRDYWxsYmFja1wiKTt2YXIgaz1kKFwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXCIpO3ZhciBsPWIub2JzZXJ2ZWRBdHRyaWJ1dGVzfHxbXX1jYXRjaChuKXtyZXR1cm59ZmluYWxseXt0aGlzLmM9ITF9Yj17bG9jYWxOYW1lOmEsY29uc3RydWN0b3JGdW5jdGlvbjpiLGNvbm5lY3RlZENhbGxiYWNrOmYsZGlzY29ubmVjdGVkQ2FsbGJhY2s6ZyxhZG9wdGVkQ2FsbGJhY2s6aCxhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2s6ayxvYnNlcnZlZEF0dHJpYnV0ZXM6bCxjb25zdHJ1Y3Rpb25TdGFjazpbXX07ZGUodGhpcy5hLFxuYSxiKTt0aGlzLnUucHVzaChiKTt0aGlzLmJ8fCh0aGlzLmI9ITAsdGhpcy5mKGZ1bmN0aW9uKCl7cmV0dXJuIG1lKGMpfSkpfTtyLmZhPWZ1bmN0aW9uKGEpe08odGhpcy5hLGEpfTtcbmZ1bmN0aW9uIG1lKGEpe2lmKCExIT09YS5iKXthLmI9ITE7Zm9yKHZhciBiPWEudSxjPVtdLGQ9bmV3IE1hcCxlPTA7ZTxiLmxlbmd0aDtlKyspZC5zZXQoYltlXS5sb2NhbE5hbWUsW10pO08oYS5hLGRvY3VtZW50LHtmYTpmdW5jdGlvbihiKXtpZih2b2lkIDA9PT1iLl9fQ0Vfc3RhdGUpe3ZhciBlPWIubG9jYWxOYW1lLGY9ZC5nZXQoZSk7Zj9mLnB1c2goYik6YS5hLmEuZ2V0KGUpJiZjLnB1c2goYil9fX0pO2ZvcihlPTA7ZTxjLmxlbmd0aDtlKyspaWUoYS5hLGNbZV0pO2Zvcig7MDxiLmxlbmd0aDspe3ZhciBmPWIuc2hpZnQoKTtlPWYubG9jYWxOYW1lO2Y9ZC5nZXQoZi5sb2NhbE5hbWUpO2Zvcih2YXIgZz0wO2c8Zi5sZW5ndGg7ZysrKWllKGEuYSxmW2ddKTsoZT1hLkYuZ2V0KGUpKSYmZS5yZXNvbHZlKHZvaWQgMCl9fX1yLmdldD1mdW5jdGlvbihhKXtpZihhPXRoaXMuYS5hLmdldChhKSlyZXR1cm4gYS5jb25zdHJ1Y3RvckZ1bmN0aW9ufTtcbnIueGE9ZnVuY3Rpb24oYSl7aWYoISRkKGEpKXJldHVybiBQcm9taXNlLnJlamVjdChuZXcgU3ludGF4RXJyb3IoXCInXCIrYStcIicgaXMgbm90IGEgdmFsaWQgY3VzdG9tIGVsZW1lbnQgbmFtZS5cIikpO3ZhciBiPXRoaXMuRi5nZXQoYSk7aWYoYilyZXR1cm4gYi5iO2I9bmV3IGxlO3RoaXMuRi5zZXQoYSxiKTt0aGlzLmEuYS5nZXQoYSkmJiF0aGlzLnUuc29tZShmdW5jdGlvbihiKXtyZXR1cm4gYi5sb2NhbE5hbWU9PT1hfSkmJmIucmVzb2x2ZSh2b2lkIDApO3JldHVybiBiLmJ9O3IuUmE9ZnVuY3Rpb24oYSl7a2UodGhpcy5hYSk7dmFyIGI9dGhpcy5mO3RoaXMuZj1mdW5jdGlvbihjKXtyZXR1cm4gYShmdW5jdGlvbigpe3JldHVybiBiKGMpfSl9fTt3aW5kb3cuQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5PVA7UC5wcm90b3R5cGUuZGVmaW5lPVAucHJvdG90eXBlLndhO1AucHJvdG90eXBlLnVwZ3JhZGU9UC5wcm90b3R5cGUuZmE7UC5wcm90b3R5cGUuZ2V0PVAucHJvdG90eXBlLmdldDtcblAucHJvdG90eXBlLndoZW5EZWZpbmVkPVAucHJvdG90eXBlLnhhO1AucHJvdG90eXBlLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2s9UC5wcm90b3R5cGUuUmE7dmFyIG5lPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCxvZT13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnROUyxwZT13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLmltcG9ydE5vZGUscWU9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5wcmVwZW5kLHJlPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuYXBwZW5kLHNlPXdpbmRvdy5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5wcmVwZW5kLHRlPXdpbmRvdy5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5hcHBlbmQsdWU9d2luZG93Lk5vZGUucHJvdG90eXBlLmNsb25lTm9kZSx2ZT13aW5kb3cuTm9kZS5wcm90b3R5cGUuYXBwZW5kQ2hpbGQsd2U9d2luZG93Lk5vZGUucHJvdG90eXBlLmluc2VydEJlZm9yZSx4ZT13aW5kb3cuTm9kZS5wcm90b3R5cGUucmVtb3ZlQ2hpbGQseWU9d2luZG93Lk5vZGUucHJvdG90eXBlLnJlcGxhY2VDaGlsZCx6ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5Ob2RlLnByb3RvdHlwZSxcblwidGV4dENvbnRlbnRcIiksQWU9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFNoYWRvdyxCZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5FbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKSxDZT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuZ2V0QXR0cmlidXRlLERlPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUsRWU9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZSxGZT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuZ2V0QXR0cmlidXRlTlMsR2U9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZU5TLEhlPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGVOUyxJZT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50LEplPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEhUTUwsS2U9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnByZXBlbmQsXG5MZT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kLE1lPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5iZWZvcmUsTmU9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFmdGVyLE9lPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlV2l0aCxQZT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLFFlPXdpbmRvdy5IVE1MRWxlbWVudCxSZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5IVE1MRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIiksU2U9d2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQsVGU9d2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEhUTUw7dmFyIFVlPW5ldyBmdW5jdGlvbigpe307ZnVuY3Rpb24gVmUoKXt2YXIgYT1XZTt3aW5kb3cuSFRNTEVsZW1lbnQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKCl7dmFyIGI9dGhpcy5jb25zdHJ1Y3RvcixkPWEudS5nZXQoYik7aWYoIWQpdGhyb3cgRXJyb3IoXCJUaGUgY3VzdG9tIGVsZW1lbnQgYmVpbmcgY29uc3RydWN0ZWQgd2FzIG5vdCByZWdpc3RlcmVkIHdpdGggYGN1c3RvbUVsZW1lbnRzYC5cIik7dmFyIGU9ZC5jb25zdHJ1Y3Rpb25TdGFjaztpZigwPT09ZS5sZW5ndGgpcmV0dXJuIGU9bmUuY2FsbChkb2N1bWVudCxkLmxvY2FsTmFtZSksT2JqZWN0LnNldFByb3RvdHlwZU9mKGUsYi5wcm90b3R5cGUpLGUuX19DRV9zdGF0ZT0xLGUuX19DRV9kZWZpbml0aW9uPWQsaGUoYSxlKSxlO2Q9ZS5sZW5ndGgtMTt2YXIgZj1lW2RdO2lmKGY9PT1VZSl0aHJvdyBFcnJvcihcIlRoZSBIVE1MRWxlbWVudCBjb25zdHJ1Y3RvciB3YXMgZWl0aGVyIGNhbGxlZCByZWVudHJhbnRseSBmb3IgdGhpcyBjb25zdHJ1Y3RvciBvciBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXCIpO1xuZVtkXT1VZTtPYmplY3Quc2V0UHJvdG90eXBlT2YoZixiLnByb3RvdHlwZSk7aGUoYSxmKTtyZXR1cm4gZn1iLnByb3RvdHlwZT1RZS5wcm90b3R5cGU7T2JqZWN0LmRlZmluZVByb3BlcnR5KGIucHJvdG90eXBlLFwiY29uc3RydWN0b3JcIix7d3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITEsdmFsdWU6Yn0pO3JldHVybiBifSgpfTtmdW5jdGlvbiBYZShhLGIsYyl7ZnVuY3Rpb24gZChiKXtyZXR1cm4gZnVuY3Rpb24oYyl7Zm9yKHZhciBkPVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7KytlKWRbZV09YXJndW1lbnRzW2VdO2U9W107Zm9yKHZhciBmPVtdLGw9MDtsPGQubGVuZ3RoO2wrKyl7dmFyIG49ZFtsXTtuIGluc3RhbmNlb2YgRWxlbWVudCYmSyhuKSYmZi5wdXNoKG4pO2lmKG4gaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KWZvcihuPW4uZmlyc3RDaGlsZDtuO249bi5uZXh0U2libGluZyllLnB1c2gobik7ZWxzZSBlLnB1c2gobil9Yi5hcHBseSh0aGlzLGQpO2ZvcihkPTA7ZDxmLmxlbmd0aDtkKyspTihhLGZbZF0pO2lmKEsodGhpcykpZm9yKGQ9MDtkPGUubGVuZ3RoO2QrKylmPWVbZF0sZiBpbnN0YW5jZW9mIEVsZW1lbnQmJk0oYSxmKX19dm9pZCAwIT09Yy5kYSYmKGIucHJlcGVuZD1kKGMuZGEpKTt2b2lkIDAhPT1jLmFwcGVuZCYmKGIuYXBwZW5kPWQoYy5hcHBlbmQpKX07ZnVuY3Rpb24gWWUoKXt2YXIgYT1XZTtMKERvY3VtZW50LnByb3RvdHlwZSxcImNyZWF0ZUVsZW1lbnRcIixmdW5jdGlvbihiKXtpZih0aGlzLl9fQ0VfaGFzUmVnaXN0cnkpe3ZhciBjPWEuYS5nZXQoYik7aWYoYylyZXR1cm4gbmV3IGMuY29uc3RydWN0b3JGdW5jdGlvbn1iPW5lLmNhbGwodGhpcyxiKTtoZShhLGIpO3JldHVybiBifSk7TChEb2N1bWVudC5wcm90b3R5cGUsXCJpbXBvcnROb2RlXCIsZnVuY3Rpb24oYixjKXtiPXBlLmNhbGwodGhpcyxiLCEhYyk7dGhpcy5fX0NFX2hhc1JlZ2lzdHJ5P08oYSxiKTpnZShhLGIpO3JldHVybiBifSk7TChEb2N1bWVudC5wcm90b3R5cGUsXCJjcmVhdGVFbGVtZW50TlNcIixmdW5jdGlvbihiLGMpe2lmKHRoaXMuX19DRV9oYXNSZWdpc3RyeSYmKG51bGw9PT1ifHxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj09PWIpKXt2YXIgZD1hLmEuZ2V0KGMpO2lmKGQpcmV0dXJuIG5ldyBkLmNvbnN0cnVjdG9yRnVuY3Rpb259Yj1vZS5jYWxsKHRoaXMsXG5iLGMpO2hlKGEsYik7cmV0dXJuIGJ9KTtYZShhLERvY3VtZW50LnByb3RvdHlwZSx7ZGE6cWUsYXBwZW5kOnJlfSl9O2Z1bmN0aW9uIFplKCl7ZnVuY3Rpb24gYShhLGQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwidGV4dENvbnRlbnRcIix7ZW51bWVyYWJsZTpkLmVudW1lcmFibGUsY29uZmlndXJhYmxlOiEwLGdldDpkLmdldCxzZXQ6ZnVuY3Rpb24oYSl7aWYodGhpcy5ub2RlVHlwZT09PU5vZGUuVEVYVF9OT0RFKWQuc2V0LmNhbGwodGhpcyxhKTtlbHNle3ZhciBjPXZvaWQgMDtpZih0aGlzLmZpcnN0Q2hpbGQpe3ZhciBlPXRoaXMuY2hpbGROb2RlcyxoPWUubGVuZ3RoO2lmKDA8aCYmSyh0aGlzKSl7Yz1BcnJheShoKTtmb3IodmFyIGs9MDtrPGg7aysrKWNba109ZVtrXX19ZC5zZXQuY2FsbCh0aGlzLGEpO2lmKGMpZm9yKGE9MDthPGMubGVuZ3RoO2ErKylOKGIsY1thXSl9fX0pfXZhciBiPVdlO0woTm9kZS5wcm90b3R5cGUsXCJpbnNlcnRCZWZvcmVcIixmdW5jdGlvbihhLGQpe2lmKGEgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYS5jaGlsZE5vZGVzKTtcbmE9d2UuY2FsbCh0aGlzLGEsZCk7aWYoSyh0aGlzKSlmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKU0oYixjW2RdKTtyZXR1cm4gYX1jPUsoYSk7ZD13ZS5jYWxsKHRoaXMsYSxkKTtjJiZOKGIsYSk7Syh0aGlzKSYmTShiLGEpO3JldHVybiBkfSk7TChOb2RlLnByb3RvdHlwZSxcImFwcGVuZENoaWxkXCIsZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShhLmNoaWxkTm9kZXMpO2E9dmUuY2FsbCh0aGlzLGEpO2lmKEsodGhpcykpZm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspTShiLGNbZV0pO3JldHVybiBhfWM9SyhhKTtlPXZlLmNhbGwodGhpcyxhKTtjJiZOKGIsYSk7Syh0aGlzKSYmTShiLGEpO3JldHVybiBlfSk7TChOb2RlLnByb3RvdHlwZSxcImNsb25lTm9kZVwiLGZ1bmN0aW9uKGEpe2E9dWUuY2FsbCh0aGlzLCEhYSk7dGhpcy5vd25lckRvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnk/TyhiLGEpOlxuZ2UoYixhKTtyZXR1cm4gYX0pO0woTm9kZS5wcm90b3R5cGUsXCJyZW1vdmVDaGlsZFwiLGZ1bmN0aW9uKGEpe3ZhciBjPUsoYSksZT14ZS5jYWxsKHRoaXMsYSk7YyYmTihiLGEpO3JldHVybiBlfSk7TChOb2RlLnByb3RvdHlwZSxcInJlcGxhY2VDaGlsZFwiLGZ1bmN0aW9uKGEsZCl7aWYoYSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShhLmNoaWxkTm9kZXMpO2E9eWUuY2FsbCh0aGlzLGEsZCk7aWYoSyh0aGlzKSlmb3IoTihiLGQpLGQ9MDtkPGMubGVuZ3RoO2QrKylNKGIsY1tkXSk7cmV0dXJuIGF9Yz1LKGEpO3ZhciBmPXllLmNhbGwodGhpcyxhLGQpLGc9Syh0aGlzKTtnJiZOKGIsZCk7YyYmTihiLGEpO2cmJk0oYixhKTtyZXR1cm4gZn0pO3plJiZ6ZS5nZXQ/YShOb2RlLnByb3RvdHlwZSx6ZSk6ZWUoYixmdW5jdGlvbihiKXthKGIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe2Zvcih2YXIgYT1cbltdLGI9MDtiPHRoaXMuY2hpbGROb2Rlcy5sZW5ndGg7YisrKXt2YXIgYz10aGlzLmNoaWxkTm9kZXNbYl07Yy5ub2RlVHlwZSE9PU5vZGUuQ09NTUVOVF9OT0RFJiZhLnB1c2goYy50ZXh0Q29udGVudCl9cmV0dXJuIGEuam9pbihcIlwiKX0sc2V0OmZ1bmN0aW9uKGEpe2Zvcig7dGhpcy5maXJzdENoaWxkOyl4ZS5jYWxsKHRoaXMsdGhpcy5maXJzdENoaWxkKTtudWxsIT1hJiZcIlwiIT09YSYmdmUuY2FsbCh0aGlzLGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpKX19KX0pfTtmdW5jdGlvbiAkZShhKXtmdW5jdGlvbiBiKGIpe3JldHVybiBmdW5jdGlvbihjKXtmb3IodmFyIGQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDsrK2UpZFtlXT1hcmd1bWVudHNbZV07ZT1bXTtmb3IodmFyIGg9W10saz0wO2s8ZC5sZW5ndGg7aysrKXt2YXIgbD1kW2tdO2wgaW5zdGFuY2VvZiBFbGVtZW50JiZLKGwpJiZoLnB1c2gobCk7aWYobCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKGw9bC5maXJzdENoaWxkO2w7bD1sLm5leHRTaWJsaW5nKWUucHVzaChsKTtlbHNlIGUucHVzaChsKX1iLmFwcGx5KHRoaXMsZCk7Zm9yKGQ9MDtkPGgubGVuZ3RoO2QrKylOKGEsaFtkXSk7aWYoSyh0aGlzKSlmb3IoZD0wO2Q8ZS5sZW5ndGg7ZCsrKWg9ZVtkXSxoIGluc3RhbmNlb2YgRWxlbWVudCYmTShhLGgpfX12YXIgYz1FbGVtZW50LnByb3RvdHlwZTt2b2lkIDAhPT1NZSYmKGMuYmVmb3JlPWIoTWUpKTt2b2lkIDAhPT1NZSYmKGMuYWZ0ZXI9YihOZSkpO3ZvaWQgMCE9PU9lJiZcbkwoYyxcInJlcGxhY2VXaXRoXCIsZnVuY3Rpb24oYil7Zm9yKHZhciBjPVtdLGQ9MDtkPGFyZ3VtZW50cy5sZW5ndGg7KytkKWNbZF09YXJndW1lbnRzW2RdO2Q9W107Zm9yKHZhciBnPVtdLGg9MDtoPGMubGVuZ3RoO2grKyl7dmFyIGs9Y1toXTtrIGluc3RhbmNlb2YgRWxlbWVudCYmSyhrKSYmZy5wdXNoKGspO2lmKGsgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KWZvcihrPWsuZmlyc3RDaGlsZDtrO2s9ay5uZXh0U2libGluZylkLnB1c2goayk7ZWxzZSBkLnB1c2goayl9aD1LKHRoaXMpO09lLmFwcGx5KHRoaXMsYyk7Zm9yKGM9MDtjPGcubGVuZ3RoO2MrKylOKGEsZ1tjXSk7aWYoaClmb3IoTihhLHRoaXMpLGM9MDtjPGQubGVuZ3RoO2MrKylnPWRbY10sZyBpbnN0YW5jZW9mIEVsZW1lbnQmJk0oYSxnKX0pO3ZvaWQgMCE9PVBlJiZMKGMsXCJyZW1vdmVcIixmdW5jdGlvbigpe3ZhciBiPUsodGhpcyk7UGUuY2FsbCh0aGlzKTtiJiZOKGEsdGhpcyl9KX07ZnVuY3Rpb24gYWYoKXtmdW5jdGlvbiBhKGEsYil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJpbm5lckhUTUxcIix7ZW51bWVyYWJsZTpiLmVudW1lcmFibGUsY29uZmlndXJhYmxlOiEwLGdldDpiLmdldCxzZXQ6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcyxlPXZvaWQgMDtLKHRoaXMpJiYoZT1bXSxiZSh0aGlzLGZ1bmN0aW9uKGEpe2EhPT1jJiZlLnB1c2goYSl9KSk7Yi5zZXQuY2FsbCh0aGlzLGEpO2lmKGUpZm9yKHZhciBmPTA7ZjxlLmxlbmd0aDtmKyspe3ZhciBnPWVbZl07MT09PWcuX19DRV9zdGF0ZSYmZC5kaXNjb25uZWN0ZWRDYWxsYmFjayhnKX10aGlzLm93bmVyRG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT9PKGQsdGhpcyk6Z2UoZCx0aGlzKTtyZXR1cm4gYX19KX1mdW5jdGlvbiBiKGEsYil7TChhLFwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50XCIsZnVuY3Rpb24oYSxjKXt2YXIgZT1LKGMpO2E9Yi5jYWxsKHRoaXMsYSxjKTtlJiZOKGQsYyk7SyhhKSYmTShkLGMpO3JldHVybiBhfSl9XG5mdW5jdGlvbiBjKGEsYil7ZnVuY3Rpb24gYyhhLGIpe2Zvcih2YXIgYz1bXTthIT09YjthPWEubmV4dFNpYmxpbmcpYy5wdXNoKGEpO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspTyhkLGNbYl0pfUwoYSxcImluc2VydEFkamFjZW50SFRNTFwiLGZ1bmN0aW9uKGEsZCl7YT1hLnRvTG93ZXJDYXNlKCk7aWYoXCJiZWZvcmViZWdpblwiPT09YSl7dmFyIGU9dGhpcy5wcmV2aW91c1NpYmxpbmc7Yi5jYWxsKHRoaXMsYSxkKTtjKGV8fHRoaXMucGFyZW50Tm9kZS5maXJzdENoaWxkLHRoaXMpfWVsc2UgaWYoXCJhZnRlcmJlZ2luXCI9PT1hKWU9dGhpcy5maXJzdENoaWxkLGIuY2FsbCh0aGlzLGEsZCksYyh0aGlzLmZpcnN0Q2hpbGQsZSk7ZWxzZSBpZihcImJlZm9yZWVuZFwiPT09YSllPXRoaXMubGFzdENoaWxkLGIuY2FsbCh0aGlzLGEsZCksYyhlfHx0aGlzLmZpcnN0Q2hpbGQsbnVsbCk7ZWxzZSBpZihcImFmdGVyZW5kXCI9PT1hKWU9dGhpcy5uZXh0U2libGluZyxiLmNhbGwodGhpcyxhLGQpLGModGhpcy5uZXh0U2libGluZyxcbmUpO2Vsc2UgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVGhlIHZhbHVlIHByb3ZpZGVkIChcIitTdHJpbmcoYSkrXCIpIGlzIG5vdCBvbmUgb2YgJ2JlZm9yZWJlZ2luJywgJ2FmdGVyYmVnaW4nLCAnYmVmb3JlZW5kJywgb3IgJ2FmdGVyZW5kJy5cIik7fSl9dmFyIGQ9V2U7QWUmJkwoRWxlbWVudC5wcm90b3R5cGUsXCJhdHRhY2hTaGFkb3dcIixmdW5jdGlvbihhKXthPUFlLmNhbGwodGhpcyxhKTt2YXIgYj1kO2lmKGIuYiYmIWEuX19DRV9wYXRjaGVkKXthLl9fQ0VfcGF0Y2hlZD0hMDtmb3IodmFyIGM9MDtjPGIuYy5sZW5ndGg7YysrKWIuY1tjXShhKX1yZXR1cm4gdGhpcy5fX0NFX3NoYWRvd1Jvb3Q9YX0pO0JlJiZCZS5nZXQ/YShFbGVtZW50LnByb3RvdHlwZSxCZSk6UmUmJlJlLmdldD9hKEhUTUxFbGVtZW50LnByb3RvdHlwZSxSZSk6ZmUoZCxmdW5jdGlvbihiKXthKGIse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB1ZS5jYWxsKHRoaXMsXG4hMCkuaW5uZXJIVE1MfSxzZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9XCJ0ZW1wbGF0ZVwiPT09dGhpcy5sb2NhbE5hbWUsYz1iP3RoaXMuY29udGVudDp0aGlzLGQ9b2UuY2FsbChkb2N1bWVudCx0aGlzLm5hbWVzcGFjZVVSSSx0aGlzLmxvY2FsTmFtZSk7Zm9yKGQuaW5uZXJIVE1MPWE7MDxjLmNoaWxkTm9kZXMubGVuZ3RoOyl4ZS5jYWxsKGMsYy5jaGlsZE5vZGVzWzBdKTtmb3IoYT1iP2QuY29udGVudDpkOzA8YS5jaGlsZE5vZGVzLmxlbmd0aDspdmUuY2FsbChjLGEuY2hpbGROb2Rlc1swXSl9fSl9KTtMKEVsZW1lbnQucHJvdG90eXBlLFwic2V0QXR0cmlidXRlXCIsZnVuY3Rpb24oYSxiKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBEZS5jYWxsKHRoaXMsYSxiKTt2YXIgYz1DZS5jYWxsKHRoaXMsYSk7RGUuY2FsbCh0aGlzLGEsYik7Yj1DZS5jYWxsKHRoaXMsYSk7ZC5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxhLGMsYixudWxsKX0pO0woRWxlbWVudC5wcm90b3R5cGUsXG5cInNldEF0dHJpYnV0ZU5TXCIsZnVuY3Rpb24oYSxiLGMpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIEdlLmNhbGwodGhpcyxhLGIsYyk7dmFyIGU9RmUuY2FsbCh0aGlzLGEsYik7R2UuY2FsbCh0aGlzLGEsYixjKTtjPUZlLmNhbGwodGhpcyxhLGIpO2QuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYixlLGMsYSl9KTtMKEVsZW1lbnQucHJvdG90eXBlLFwicmVtb3ZlQXR0cmlidXRlXCIsZnVuY3Rpb24oYSl7aWYoMSE9PXRoaXMuX19DRV9zdGF0ZSlyZXR1cm4gRWUuY2FsbCh0aGlzLGEpO3ZhciBiPUNlLmNhbGwodGhpcyxhKTtFZS5jYWxsKHRoaXMsYSk7bnVsbCE9PWImJmQuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYSxiLG51bGwsbnVsbCl9KTtMKEVsZW1lbnQucHJvdG90eXBlLFwicmVtb3ZlQXR0cmlidXRlTlNcIixmdW5jdGlvbihhLGIpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIEhlLmNhbGwodGhpcyxhLGIpO3ZhciBjPUZlLmNhbGwodGhpcyxcbmEsYik7SGUuY2FsbCh0aGlzLGEsYik7dmFyIGU9RmUuY2FsbCh0aGlzLGEsYik7YyE9PWUmJmQuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYixjLGUsYSl9KTtTZT9iKEhUTUxFbGVtZW50LnByb3RvdHlwZSxTZSk6SWU/YihFbGVtZW50LnByb3RvdHlwZSxJZSk6Y29uc29sZS53YXJuKFwiQ3VzdG9tIEVsZW1lbnRzOiBgRWxlbWVudCNpbnNlcnRBZGphY2VudEVsZW1lbnRgIHdhcyBub3QgcGF0Y2hlZC5cIik7VGU/YyhIVE1MRWxlbWVudC5wcm90b3R5cGUsVGUpOkplP2MoRWxlbWVudC5wcm90b3R5cGUsSmUpOmNvbnNvbGUud2FybihcIkN1c3RvbSBFbGVtZW50czogYEVsZW1lbnQjaW5zZXJ0QWRqYWNlbnRIVE1MYCB3YXMgbm90IHBhdGNoZWQuXCIpO1hlKGQsRWxlbWVudC5wcm90b3R5cGUse2RhOktlLGFwcGVuZDpMZX0pOyRlKGQpfTt2YXIgYmY9d2luZG93LmN1c3RvbUVsZW1lbnRzO2lmKCFiZnx8YmYuZm9yY2VQb2x5ZmlsbHx8XCJmdW5jdGlvblwiIT10eXBlb2YgYmYuZGVmaW5lfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBiZi5nZXQpe3ZhciBXZT1uZXcgY2U7VmUoKTtZZSgpO1hlKFdlLERvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLHtkYTpzZSxhcHBlbmQ6dGV9KTtaZSgpO2FmKCk7ZG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT0hMDt2YXIgY3VzdG9tRWxlbWVudHM9bmV3IFAoV2UpO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csXCJjdXN0b21FbGVtZW50c1wiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZTpjdXN0b21FbGVtZW50c30pfTtmdW5jdGlvbiBjZigpe3RoaXMuZW5kPXRoaXMuc3RhcnQ9MDt0aGlzLnJ1bGVzPXRoaXMucGFyZW50PXRoaXMucHJldmlvdXM9bnVsbDt0aGlzLmNzc1RleHQ9dGhpcy5wYXJzZWRDc3NUZXh0PVwiXCI7dGhpcy5hdFJ1bGU9ITE7dGhpcy50eXBlPTA7dGhpcy5wYXJzZWRTZWxlY3Rvcj10aGlzLnNlbGVjdG9yPXRoaXMua2V5ZnJhbWVzTmFtZT1cIlwifVxuZnVuY3Rpb24gZGYoYSl7YT1hLnJlcGxhY2UoZWYsXCJcIikucmVwbGFjZShmZixcIlwiKTt2YXIgYj1nZixjPWEsZD1uZXcgY2Y7ZC5zdGFydD0wO2QuZW5kPWMubGVuZ3RoO2Zvcih2YXIgZT1kLGY9MCxnPWMubGVuZ3RoO2Y8ZztmKyspaWYoXCJ7XCI9PT1jW2ZdKXtlLnJ1bGVzfHwoZS5ydWxlcz1bXSk7dmFyIGg9ZSxrPWgucnVsZXNbaC5ydWxlcy5sZW5ndGgtMV18fG51bGw7ZT1uZXcgY2Y7ZS5zdGFydD1mKzE7ZS5wYXJlbnQ9aDtlLnByZXZpb3VzPWs7aC5ydWxlcy5wdXNoKGUpfWVsc2VcIn1cIj09PWNbZl0mJihlLmVuZD1mKzEsZT1lLnBhcmVudHx8ZCk7cmV0dXJuIGIoZCxhKX1cbmZ1bmN0aW9uIGdmKGEsYil7dmFyIGM9Yi5zdWJzdHJpbmcoYS5zdGFydCxhLmVuZC0xKTthLnBhcnNlZENzc1RleHQ9YS5jc3NUZXh0PWMudHJpbSgpO2EucGFyZW50JiYoYz1iLnN1YnN0cmluZyhhLnByZXZpb3VzP2EucHJldmlvdXMuZW5kOmEucGFyZW50LnN0YXJ0LGEuc3RhcnQtMSksYz1oZihjKSxjPWMucmVwbGFjZShqZixcIiBcIiksYz1jLnN1YnN0cmluZyhjLmxhc3RJbmRleE9mKFwiO1wiKSsxKSxjPWEucGFyc2VkU2VsZWN0b3I9YS5zZWxlY3Rvcj1jLnRyaW0oKSxhLmF0UnVsZT0wPT09Yy5pbmRleE9mKFwiQFwiKSxhLmF0UnVsZT8wPT09Yy5pbmRleE9mKFwiQG1lZGlhXCIpP2EudHlwZT1rZjpjLm1hdGNoKGxmKSYmKGEudHlwZT1tZixhLmtleWZyYW1lc05hbWU9YS5zZWxlY3Rvci5zcGxpdChqZikucG9wKCkpOmEudHlwZT0wPT09Yy5pbmRleE9mKFwiLS1cIik/bmY6b2YpO2lmKGM9YS5ydWxlcylmb3IodmFyIGQ9MCxlPWMubGVuZ3RoLGY9dm9pZCAwO2Q8ZSYmKGY9Y1tkXSk7ZCsrKWdmKGYsXG5iKTtyZXR1cm4gYX1mdW5jdGlvbiBoZihhKXtyZXR1cm4gYS5yZXBsYWNlKC9cXFxcKFswLTlhLWZdezEsNn0pXFxzL2dpLGZ1bmN0aW9uKGEsYyl7YT1jO2ZvcihjPTYtYS5sZW5ndGg7Yy0tOylhPVwiMFwiK2E7cmV0dXJuXCJcXFxcXCIrYX0pfVxuZnVuY3Rpb24gcGYoYSxiLGMpe2M9dm9pZCAwPT09Yz9cIlwiOmM7dmFyIGQ9XCJcIjtpZihhLmNzc1RleHR8fGEucnVsZXMpe3ZhciBlPWEucnVsZXMsZjtpZihmPWUpZj1lWzBdLGY9IShmJiZmLnNlbGVjdG9yJiYwPT09Zi5zZWxlY3Rvci5pbmRleE9mKFwiLS1cIikpO2lmKGYpe2Y9MDtmb3IodmFyIGc9ZS5sZW5ndGgsaD12b2lkIDA7ZjxnJiYoaD1lW2ZdKTtmKyspZD1wZihoLGIsZCl9ZWxzZSBiP2I9YS5jc3NUZXh0OihiPWEuY3NzVGV4dCxiPWIucmVwbGFjZShxZixcIlwiKS5yZXBsYWNlKHJmLFwiXCIpLGI9Yi5yZXBsYWNlKHVmLFwiXCIpLnJlcGxhY2UodmYsXCJcIikpLChkPWIudHJpbSgpKSYmKGQ9XCIgIFwiK2QrXCJcXG5cIil9ZCYmKGEuc2VsZWN0b3ImJihjKz1hLnNlbGVjdG9yK1wiIHtcXG5cIiksYys9ZCxhLnNlbGVjdG9yJiYoYys9XCJ9XFxuXFxuXCIpKTtyZXR1cm4gY31cbnZhciBvZj0xLG1mPTcsa2Y9NCxuZj0xRTMsZWY9L1xcL1xcKlteKl0qXFwqKyhbXi8qXVteKl0qXFwqKykqXFwvL2dpbSxmZj0vQGltcG9ydFteO10qOy9naW0scWY9Lyg/Ol5bXjtcXC1cXHN9XSspPy0tW147e31dKj86W157fTtdKj8oPzpbO1xcbl18JCkvZ2ltLHJmPS8oPzpeW147XFwtXFxzfV0rKT8tLVteO3t9XSo/Oltee307XSo/e1tefV0qP30oPzpbO1xcbl18JCk/L2dpbSx1Zj0vQGFwcGx5XFxzKlxcKD9bXik7XSpcXCk/XFxzKig/Ols7XFxuXXwkKT8vZ2ltLHZmPS9bXjs6XSo/OlteO10qP3ZhclxcKFteO10qXFwpKD86WztcXG5dfCQpPy9naW0sbGY9L15AW15cXHNdKmtleWZyYW1lcy8samY9L1xccysvZzt2YXIgUj0hKHdpbmRvdy5TaGFkeURPTSYmd2luZG93LlNoYWR5RE9NLmluVXNlKSx3ZjtmdW5jdGlvbiB4ZihhKXt3Zj1hJiZhLnNoaW1jc3Nwcm9wZXJ0aWVzPyExOlJ8fCEobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQXBwbGVXZWJLaXRcXC82MDF8RWRnZVxcLzE1Lyl8fCF3aW5kb3cuQ1NTfHwhQ1NTLnN1cHBvcnRzfHwhQ1NTLnN1cHBvcnRzKFwiYm94LXNoYWRvd1wiLFwiMCAwIDAgdmFyKC0tZm9vKVwiKSl9dmFyIHlmO3dpbmRvdy5TaGFkeUNTUyYmdm9pZCAwIT09d2luZG93LlNoYWR5Q1NTLmNzc0J1aWxkJiYoeWY9d2luZG93LlNoYWR5Q1NTLmNzc0J1aWxkKTt2YXIgemY9ISghd2luZG93LlNoYWR5Q1NTfHwhd2luZG93LlNoYWR5Q1NTLmRpc2FibGVSdW50aW1lKTtcbndpbmRvdy5TaGFkeUNTUyYmdm9pZCAwIT09d2luZG93LlNoYWR5Q1NTLm5hdGl2ZUNzcz93Zj13aW5kb3cuU2hhZHlDU1MubmF0aXZlQ3NzOndpbmRvdy5TaGFkeUNTUz8oeGYod2luZG93LlNoYWR5Q1NTKSx3aW5kb3cuU2hhZHlDU1M9dm9pZCAwKTp4Zih3aW5kb3cuV2ViQ29tcG9uZW50cyYmd2luZG93LldlYkNvbXBvbmVudHMuZmxhZ3MpO3ZhciBTPXdmLEFmPXlmO3ZhciBCZj0vKD86XnxbO1xcc3tdXFxzKikoLS1bXFx3LV0qPylcXHMqOlxccyooPzooKD86Jyg/OlxcXFwnfC4pKj8nfFwiKD86XFxcXFwifC4pKj9cInxcXChbXildKj9cXCl8W159O3tdKSspfFxceyhbXn1dKilcXH0oPzooPz1bO1xcc31dKXwkKSkvZ2ksQ2Y9Lyg/Ol58XFxXKylAYXBwbHlcXHMqXFwoPyhbXik7XFxuXSopXFwpPy9naSxEZj0vKC0tW1xcdy1dKylcXHMqKFs6LDspXXwkKS9naSxFZj0vKGFuaW1hdGlvblxccyo6KXwoYW5pbWF0aW9uLW5hbWVcXHMqOikvLEZmPS9AbWVkaWFcXHMoLiopLyxHZj0vXFx7W159XSpcXH0vZzt2YXIgSGY9bmV3IFNldDtmdW5jdGlvbiBJZihhLGIpe2lmKCFhKXJldHVyblwiXCI7XCJzdHJpbmdcIj09PXR5cGVvZiBhJiYoYT1kZihhKSk7YiYmSmYoYSxiKTtyZXR1cm4gcGYoYSxTKX1mdW5jdGlvbiBLZihhKXshYS5fX2Nzc1J1bGVzJiZhLnRleHRDb250ZW50JiYoYS5fX2Nzc1J1bGVzPWRmKGEudGV4dENvbnRlbnQpKTtyZXR1cm4gYS5fX2Nzc1J1bGVzfHxudWxsfWZ1bmN0aW9uIExmKGEpe3JldHVybiEhYS5wYXJlbnQmJmEucGFyZW50LnR5cGU9PT1tZn1mdW5jdGlvbiBKZihhLGIsYyxkKXtpZihhKXt2YXIgZT0hMSxmPWEudHlwZTtpZihkJiZmPT09a2Ype3ZhciBnPWEuc2VsZWN0b3IubWF0Y2goRmYpO2cmJih3aW5kb3cubWF0Y2hNZWRpYShnWzFdKS5tYXRjaGVzfHwoZT0hMCkpfWY9PT1vZj9iKGEpOmMmJmY9PT1tZj9jKGEpOmY9PT1uZiYmKGU9ITApO2lmKChhPWEucnVsZXMpJiYhZSlmb3IoZT0wLGY9YS5sZW5ndGgsZz12b2lkIDA7ZTxmJiYoZz1hW2VdKTtlKyspSmYoZyxiLGMsZCl9fVxuZnVuY3Rpb24gTWYoYSxiLGMsZCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2ImJmUuc2V0QXR0cmlidXRlKFwic2NvcGVcIixiKTtlLnRleHRDb250ZW50PWE7TmYoZSxjLGQpO3JldHVybiBlfXZhciBPZj1udWxsO2Z1bmN0aW9uIFBmKGEpe2E9ZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcIiBTaGFkeSBET00gc3R5bGVzIGZvciBcIithK1wiIFwiKTt2YXIgYj1kb2N1bWVudC5oZWFkO2IuaW5zZXJ0QmVmb3JlKGEsKE9mP09mLm5leHRTaWJsaW5nOm51bGwpfHxiLmZpcnN0Q2hpbGQpO3JldHVybiBPZj1hfWZ1bmN0aW9uIE5mKGEsYixjKXtiPWJ8fGRvY3VtZW50LmhlYWQ7Yi5pbnNlcnRCZWZvcmUoYSxjJiZjLm5leHRTaWJsaW5nfHxiLmZpcnN0Q2hpbGQpO09mP2EuY29tcGFyZURvY3VtZW50UG9zaXRpb24oT2YpPT09Tm9kZS5ET0NVTUVOVF9QT1NJVElPTl9QUkVDRURJTkcmJihPZj1hKTpPZj1hfVxuZnVuY3Rpb24gUWYoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2I8ZDtiKyspaWYoXCIoXCI9PT1hW2JdKWMrKztlbHNlIGlmKFwiKVwiPT09YVtiXSYmMD09PS0tYylyZXR1cm4gYjtyZXR1cm4tMX1mdW5jdGlvbiBSZihhLGIpe3ZhciBjPWEuaW5kZXhPZihcInZhcihcIik7aWYoLTE9PT1jKXJldHVybiBiKGEsXCJcIixcIlwiLFwiXCIpO3ZhciBkPVFmKGEsYyszKSxlPWEuc3Vic3RyaW5nKGMrNCxkKTtjPWEuc3Vic3RyaW5nKDAsYyk7YT1SZihhLnN1YnN0cmluZyhkKzEpLGIpO2Q9ZS5pbmRleE9mKFwiLFwiKTtyZXR1cm4tMT09PWQ/YihjLGUudHJpbSgpLFwiXCIsYSk6YihjLGUuc3Vic3RyaW5nKDAsZCkudHJpbSgpLGUuc3Vic3RyaW5nKGQrMSkudHJpbSgpLGEpfWZ1bmN0aW9uIFNmKGEsYil7Uj9hLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYik6d2luZG93LlNoYWR5RE9NLm5hdGl2ZU1ldGhvZHMuc2V0QXR0cmlidXRlLmNhbGwoYSxcImNsYXNzXCIsYil9XG52YXIgVGY9d2luZG93LlNoYWR5RE9NJiZ3aW5kb3cuU2hhZHlET00ud3JhcHx8ZnVuY3Rpb24oYSl7cmV0dXJuIGF9O2Z1bmN0aW9uIFVmKGEpe3ZhciBiPWEubG9jYWxOYW1lLGM9XCJcIjtiPy0xPGIuaW5kZXhPZihcIi1cIil8fChjPWIsYj1hLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJpc1wiKXx8XCJcIik6KGI9YS5pcyxjPWEuZXh0ZW5kcyk7cmV0dXJue2lzOmIsWDpjfX1mdW5jdGlvbiBWZihhKXtmb3IodmFyIGI9W10sYz1cIlwiLGQ9MDswPD1kJiZkPGEubGVuZ3RoO2QrKylpZihcIihcIj09PWFbZF0pe3ZhciBlPVFmKGEsZCk7Yys9YS5zbGljZShkLGUrMSk7ZD1lfWVsc2VcIixcIj09PWFbZF0/KGIucHVzaChjKSxjPVwiXCIpOmMrPWFbZF07YyYmYi5wdXNoKGMpO3JldHVybiBifVxuZnVuY3Rpb24gV2YoYSl7aWYodm9pZCAwIT09QWYpcmV0dXJuIEFmO2lmKHZvaWQgMD09PWEuX19jc3NCdWlsZCl7dmFyIGI9YS5nZXRBdHRyaWJ1dGUoXCJjc3MtYnVpbGRcIik7aWYoYilhLl9fY3NzQnVpbGQ9YjtlbHNle2E6e2I9XCJ0ZW1wbGF0ZVwiPT09YS5sb2NhbE5hbWU/YS5jb250ZW50LmZpcnN0Q2hpbGQ6YS5maXJzdENoaWxkO2lmKGIgaW5zdGFuY2VvZiBDb21tZW50JiYoYj1iLnRleHRDb250ZW50LnRyaW0oKS5zcGxpdChcIjpcIiksXCJjc3MtYnVpbGRcIj09PWJbMF0pKXtiPWJbMV07YnJlYWsgYX1iPVwiXCJ9aWYoXCJcIiE9PWIpe3ZhciBjPVwidGVtcGxhdGVcIj09PWEubG9jYWxOYW1lP2EuY29udGVudC5maXJzdENoaWxkOmEuZmlyc3RDaGlsZDtjLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYyl9YS5fX2Nzc0J1aWxkPWJ9fXJldHVybiBhLl9fY3NzQnVpbGR8fFwiXCJ9XG5mdW5jdGlvbiBYZihhKXthPXZvaWQgMD09PWE/XCJcIjphO3JldHVyblwiXCIhPT1hJiZTP1I/XCJzaGFkb3dcIj09PWE6XCJzaGFkeVwiPT09YTohMX07ZnVuY3Rpb24gWWYoKXt9ZnVuY3Rpb24gWmYoYSxiKXskZihVLGEsZnVuY3Rpb24oYSl7YWcoYSxifHxcIlwiKX0pfWZ1bmN0aW9uICRmKGEsYixjKXtiLm5vZGVUeXBlPT09Tm9kZS5FTEVNRU5UX05PREUmJmMoYik7dmFyIGQ7XCJ0ZW1wbGF0ZVwiPT09Yi5sb2NhbE5hbWU/ZD0oYi5jb250ZW50fHxiLl9jb250ZW50fHxiKS5jaGlsZE5vZGVzOmQ9Yi5jaGlsZHJlbnx8Yi5jaGlsZE5vZGVzO2lmKGQpZm9yKGI9MDtiPGQubGVuZ3RoO2IrKykkZihhLGRbYl0sYyl9XG5mdW5jdGlvbiBhZyhhLGIsYyl7aWYoYilpZihhLmNsYXNzTGlzdCljPyhhLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHlsZS1zY29wZVwiKSxhLmNsYXNzTGlzdC5yZW1vdmUoYikpOihhLmNsYXNzTGlzdC5hZGQoXCJzdHlsZS1zY29wZVwiKSxhLmNsYXNzTGlzdC5hZGQoYikpO2Vsc2UgaWYoYS5nZXRBdHRyaWJ1dGUpe3ZhciBkPWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7Yz9kJiYoYj1kLnJlcGxhY2UoXCJzdHlsZS1zY29wZVwiLFwiXCIpLnJlcGxhY2UoYixcIlwiKSxTZihhLGIpKTpTZihhLChkP2QrXCIgXCI6XCJcIikrXCJzdHlsZS1zY29wZSBcIitiKX19ZnVuY3Rpb24gYmcoYSxiLGMpeyRmKFUsYSxmdW5jdGlvbihhKXthZyhhLGIsITApO2FnKGEsYyl9KX1mdW5jdGlvbiBjZyhhLGIpeyRmKFUsYSxmdW5jdGlvbihhKXthZyhhLGJ8fFwiXCIsITApfSl9XG5mdW5jdGlvbiBkZyhhLGIsYyxkLGUpe3ZhciBmPVU7ZT12b2lkIDA9PT1lP1wiXCI6ZTtcIlwiPT09ZSYmKFJ8fFwic2hhZHlcIj09PSh2b2lkIDA9PT1kP1wiXCI6ZCk/ZT1JZihiLGMpOihhPVVmKGEpLGU9ZWcoZixiLGEuaXMsYS5YLGMpK1wiXFxuXFxuXCIpKTtyZXR1cm4gZS50cmltKCl9ZnVuY3Rpb24gZWcoYSxiLGMsZCxlKXt2YXIgZj1mZyhjLGQpO2M9Yz9cIi5cIitjOlwiXCI7cmV0dXJuIElmKGIsZnVuY3Rpb24oYil7Yi5jfHwoYi5zZWxlY3Rvcj1iLkM9Z2coYSxiLGEuYixjLGYpLGIuYz0hMCk7ZSYmZShiLGMsZil9KX1mdW5jdGlvbiBmZyhhLGIpe3JldHVybiBiP1wiW2lzPVwiK2ErXCJdXCI6YX1cbmZ1bmN0aW9uIGdnKGEsYixjLGQsZSl7dmFyIGY9VmYoYi5zZWxlY3Rvcik7aWYoIUxmKGIpKXtiPTA7Zm9yKHZhciBnPWYubGVuZ3RoLGg9dm9pZCAwO2I8ZyYmKGg9ZltiXSk7YisrKWZbYl09Yy5jYWxsKGEsaCxkLGUpfXJldHVybiBmLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4hIWF9KS5qb2luKFwiLFwiKX1mdW5jdGlvbiBoZyhhKXtyZXR1cm4gYS5yZXBsYWNlKGlnLGZ1bmN0aW9uKGEsYyxkKXstMTxkLmluZGV4T2YoXCIrXCIpP2Q9ZC5yZXBsYWNlKC9cXCsvZyxcIl9fX1wiKTotMTxkLmluZGV4T2YoXCJfX19cIikmJihkPWQucmVwbGFjZSgvX19fL2csXCIrXCIpKTtyZXR1cm5cIjpcIitjK1wiKFwiK2QrXCIpXCJ9KX1cbmZ1bmN0aW9uIGpnKGEpe2Zvcih2YXIgYj1bXSxjO2M9YS5tYXRjaChrZyk7KXt2YXIgZD1jLmluZGV4LGU9UWYoYSxkKTtpZigtMT09PWUpdGhyb3cgRXJyb3IoYy5pbnB1dCtcIiBzZWxlY3RvciBtaXNzaW5nICcpJ1wiKTtjPWEuc2xpY2UoZCxlKzEpO2E9YS5yZXBsYWNlKGMsXCJcXHVlMDAwXCIpO2IucHVzaChjKX1yZXR1cm57bmE6YSxtYXRjaGVzOmJ9fWZ1bmN0aW9uIGxnKGEsYil7dmFyIGM9YS5zcGxpdChcIlxcdWUwMDBcIik7cmV0dXJuIGIucmVkdWNlKGZ1bmN0aW9uKGEsYixmKXtyZXR1cm4gYStiK2NbZisxXX0sY1swXSl9XG5ZZi5wcm90b3R5cGUuYj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9ITE7YT1hLnRyaW0oKTt2YXIgZT1pZy50ZXN0KGEpO2UmJihhPWEucmVwbGFjZShpZyxmdW5jdGlvbihhLGIsYyl7cmV0dXJuXCI6XCIrYitcIihcIitjLnJlcGxhY2UoL1xccy9nLFwiXCIpK1wiKVwifSksYT1oZyhhKSk7dmFyIGY9a2cudGVzdChhKTtpZihmKXt2YXIgZz1qZyhhKTthPWcubmE7Zz1nLm1hdGNoZXN9YT1hLnJlcGxhY2UobWcsXCI6aG9zdCAkMVwiKTthPWEucmVwbGFjZShuZyxmdW5jdGlvbihhLGUsZil7ZHx8KGE9b2coZixlLGIsYyksZD1kfHxhLnN0b3AsZT1hLkhhLGY9YS52YWx1ZSk7cmV0dXJuIGUrZn0pO2YmJihhPWxnKGEsZykpO2UmJihhPWhnKGEpKTtyZXR1cm4gYT1hLnJlcGxhY2UocGcsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuJ1tkaXI9XCInK2MrJ1wiXSAnK2IrZCtcIiwgXCIrYisnW2Rpcj1cIicrYysnXCJdJytkfSl9O1xuZnVuY3Rpb24gb2coYSxiLGMsZCl7dmFyIGU9YS5pbmRleE9mKFwiOjpzbG90dGVkXCIpOzA8PWEuaW5kZXhPZihcIjpob3N0XCIpP2E9cWcoYSxkKTowIT09ZSYmKGE9Yz9yZyhhLGMpOmEpO2M9ITE7MDw9ZSYmKGI9XCJcIixjPSEwKTtpZihjKXt2YXIgZj0hMDtjJiYoYT1hLnJlcGxhY2Uoc2csZnVuY3Rpb24oYSxiKXtyZXR1cm5cIiA+IFwiK2J9KSl9cmV0dXJue3ZhbHVlOmEsSGE6YixzdG9wOmZ9fWZ1bmN0aW9uIHJnKGEsYil7YT1hLnNwbGl0KC8oXFxbLis/XFxdKS8pO2Zvcih2YXIgYz1bXSxkPTA7ZDxhLmxlbmd0aDtkKyspaWYoMT09PWQlMiljLnB1c2goYVtkXSk7ZWxzZXt2YXIgZT1hW2RdO2lmKFwiXCIhPT1lfHxkIT09YS5sZW5ndGgtMSllPWUuc3BsaXQoXCI6XCIpLGVbMF0rPWIsYy5wdXNoKGUuam9pbihcIjpcIikpfXJldHVybiBjLmpvaW4oXCJcIil9XG5mdW5jdGlvbiBxZyhhLGIpe3ZhciBjPWEubWF0Y2godGcpO3JldHVybihjPWMmJmNbMl0udHJpbSgpfHxcIlwiKT9jWzBdLm1hdGNoKHVnKT9hLnJlcGxhY2UodGcsZnVuY3Rpb24oYSxjLGYpe3JldHVybiBiK2Z9KTpjLnNwbGl0KHVnKVswXT09PWI/YzpcInNob3VsZF9ub3RfbWF0Y2hcIjphLnJlcGxhY2UoXCI6aG9zdFwiLGIpfWZ1bmN0aW9uIHZnKGEpe1wiOnJvb3RcIj09PWEuc2VsZWN0b3ImJihhLnNlbGVjdG9yPVwiaHRtbFwiKX1ZZi5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXtyZXR1cm4gYS5tYXRjaChcIjpob3N0XCIpP1wiXCI6YS5tYXRjaChcIjo6c2xvdHRlZFwiKT90aGlzLmIoYSxcIjpub3QoLnN0eWxlLXNjb3BlKVwiKTpyZyhhLnRyaW0oKSxcIjpub3QoLnN0eWxlLXNjb3BlKVwiKX07dC5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhZZi5wcm90b3R5cGUse2E6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVyblwic3R5bGUtc2NvcGVcIn19fSk7XG52YXIgaWc9LzoobnRoWy1cXHddKylcXCgoW14pXSspXFwpLyxuZz0vKF58W1xccz4rfl0rKSgoPzpcXFsuKz9cXF18W15cXHM+K349W10pKykvZyx1Zz0vW1suOiMqXS8sbWc9L14oOjpzbG90dGVkKS8sdGc9Lyg6aG9zdCkoPzpcXCgoKD86XFwoW14pKF0qXFwpfFteKShdKikrPylcXCkpLyxzZz0vKD86OjpzbG90dGVkKSg/OlxcKCgoPzpcXChbXikoXSpcXCl8W14pKF0qKSs/KVxcKSkvLHBnPS8oLiopOmRpclxcKCg/OihsdHJ8cnRsKSlcXCkoLiopLyxrZz0vOig/Om1hdGNoZXN8YW55fC0oPzp3ZWJraXR8bW96KS1hbnkpLyxVPW5ldyBZZjtmdW5jdGlvbiB3ZyhhLGIsYyxkLGUpe3RoaXMuTD1hfHxudWxsO3RoaXMuYj1ifHxudWxsO3RoaXMubGE9Y3x8W107dGhpcy5HPW51bGw7dGhpcy5jc3NCdWlsZD1lfHxcIlwiO3RoaXMuWD1kfHxcIlwiO3RoaXMuYT10aGlzLkg9dGhpcy5LPW51bGx9ZnVuY3Rpb24gVihhKXtyZXR1cm4gYT9hLl9fc3R5bGVJbmZvOm51bGx9ZnVuY3Rpb24geGcoYSxiKXtyZXR1cm4gYS5fX3N0eWxlSW5mbz1ifXdnLnByb3RvdHlwZS5jPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuTH07d2cucHJvdG90eXBlLl9nZXRTdHlsZVJ1bGVzPXdnLnByb3RvdHlwZS5jO2Z1bmN0aW9uIHlnKGEpe3ZhciBiPXRoaXMubWF0Y2hlc3x8dGhpcy5tYXRjaGVzU2VsZWN0b3J8fHRoaXMubW96TWF0Y2hlc1NlbGVjdG9yfHx0aGlzLm1zTWF0Y2hlc1NlbGVjdG9yfHx0aGlzLm9NYXRjaGVzU2VsZWN0b3J8fHRoaXMud2Via2l0TWF0Y2hlc1NlbGVjdG9yO3JldHVybiBiJiZiLmNhbGwodGhpcyxhKX12YXIgemc9bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChcIlRyaWRlbnRcIik7ZnVuY3Rpb24gQWcoKXt9ZnVuY3Rpb24gQmcoYSl7dmFyIGI9e30sYz1bXSxkPTA7SmYoYSxmdW5jdGlvbihhKXtDZyhhKTthLmluZGV4PWQrKzthPWEuQS5jc3NUZXh0O2Zvcih2YXIgYztjPURmLmV4ZWMoYSk7KXt2YXIgZT1jWzFdO1wiOlwiIT09Y1syXSYmKGJbZV09ITApfX0sZnVuY3Rpb24oYSl7Yy5wdXNoKGEpfSk7YS5iPWM7YT1bXTtmb3IodmFyIGUgaW4gYilhLnB1c2goZSk7cmV0dXJuIGF9XG5mdW5jdGlvbiBDZyhhKXtpZighYS5BKXt2YXIgYj17fSxjPXt9O0RnKGEsYykmJihiLko9YyxhLnJ1bGVzPW51bGwpO2IuY3NzVGV4dD1hLnBhcnNlZENzc1RleHQucmVwbGFjZShHZixcIlwiKS5yZXBsYWNlKEJmLFwiXCIpO2EuQT1ifX1mdW5jdGlvbiBEZyhhLGIpe3ZhciBjPWEuQTtpZihjKXtpZihjLkopcmV0dXJuIE9iamVjdC5hc3NpZ24oYixjLkopLCEwfWVsc2V7Yz1hLnBhcnNlZENzc1RleHQ7Zm9yKHZhciBkO2E9QmYuZXhlYyhjKTspe2Q9KGFbMl18fGFbM10pLnRyaW0oKTtpZihcImluaGVyaXRcIiE9PWR8fFwidW5zZXRcIiE9PWQpYlthWzFdLnRyaW0oKV09ZDtkPSEwfXJldHVybiBkfX1cbmZ1bmN0aW9uIEVnKGEsYixjKXtiJiYoYj0wPD1iLmluZGV4T2YoXCI7XCIpP0ZnKGEsYixjKTpSZihiLGZ1bmN0aW9uKGIsZSxmLGcpe2lmKCFlKXJldHVybiBiK2c7KGU9RWcoYSxjW2VdLGMpKSYmXCJpbml0aWFsXCIhPT1lP1wiYXBwbHktc2hpbS1pbmhlcml0XCI9PT1lJiYoZT1cImluaGVyaXRcIik6ZT1FZyhhLGNbZl18fGYsYyl8fGY7cmV0dXJuIGIrKGV8fFwiXCIpK2d9KSk7cmV0dXJuIGImJmIudHJpbSgpfHxcIlwifVxuZnVuY3Rpb24gRmcoYSxiLGMpe2I9Yi5zcGxpdChcIjtcIik7Zm9yKHZhciBkPTAsZSxmO2Q8Yi5sZW5ndGg7ZCsrKWlmKGU9YltkXSl7Q2YubGFzdEluZGV4PTA7aWYoZj1DZi5leGVjKGUpKWU9RWcoYSxjW2ZbMV1dLGMpO2Vsc2UgaWYoZj1lLmluZGV4T2YoXCI6XCIpLC0xIT09Zil7dmFyIGc9ZS5zdWJzdHJpbmcoZik7Zz1nLnRyaW0oKTtnPUVnKGEsZyxjKXx8ZztlPWUuc3Vic3RyaW5nKDAsZikrZ31iW2RdPWUmJmUubGFzdEluZGV4T2YoXCI7XCIpPT09ZS5sZW5ndGgtMT9lLnNsaWNlKDAsLTEpOmV8fFwiXCJ9cmV0dXJuIGIuam9pbihcIjtcIil9XG5mdW5jdGlvbiBHZyhhLGIpe3ZhciBjPXt9LGQ9W107SmYoYSxmdW5jdGlvbihhKXthLkF8fENnKGEpO3ZhciBlPWEuQ3x8YS5wYXJzZWRTZWxlY3RvcjtiJiZhLkEuSiYmZSYmeWcuY2FsbChiLGUpJiYoRGcoYSxjKSxhPWEuaW5kZXgsZT1wYXJzZUludChhLzMyLDEwKSxkW2VdPShkW2VdfHwwKXwxPDxhJTMyKX0sbnVsbCwhMCk7cmV0dXJue0o6YyxrZXk6ZH19XG5mdW5jdGlvbiBIZyhhLGIsYyxkKXtiLkF8fENnKGIpO2lmKGIuQS5KKXt2YXIgZT1VZihhKTthPWUuaXM7ZT1lLlg7ZT1hP2ZnKGEsZSk6XCJodG1sXCI7dmFyIGY9Yi5wYXJzZWRTZWxlY3RvcixnPVwiOmhvc3QgPiAqXCI9PT1mfHxcImh0bWxcIj09PWYsaD0wPT09Zi5pbmRleE9mKFwiOmhvc3RcIikmJiFnO1wic2hhZHlcIj09PWMmJihnPWY9PT1lK1wiID4gKi5cIitlfHwtMSE9PWYuaW5kZXhPZihcImh0bWxcIiksaD0hZyYmMD09PWYuaW5kZXhPZihlKSk7aWYoZ3x8aCljPWUsaCYmKGIuQ3x8KGIuQz1nZyhVLGIsVS5iLGE/XCIuXCIrYTpcIlwiLGUpKSxjPWIuQ3x8ZSksZCh7bmE6YyxPYTpoLGJiOmd9KX19ZnVuY3Rpb24gSWcoYSxiLGMpe3ZhciBkPXt9LGU9e307SmYoYixmdW5jdGlvbihiKXtIZyhhLGIsYyxmdW5jdGlvbihjKXt5Zy5jYWxsKGEuX2VsZW1lbnR8fGEsYy5uYSkmJihjLk9hP0RnKGIsZCk6RGcoYixlKSl9KX0sbnVsbCwhMCk7cmV0dXJue1VhOmUsTWE6ZH19XG5mdW5jdGlvbiBKZyhhLGIsYyxkKXt2YXIgZT1VZihiKSxmPWZnKGUuaXMsZS5YKSxnPW5ldyBSZWdFeHAoXCIoPzpefFteLiNbOl0pXCIrKGIuZXh0ZW5kcz9cIlxcXFxcIitmLnNsaWNlKDAsLTEpK1wiXFxcXF1cIjpmKStcIigkfFsuOltcXFxccz4rfl0pXCIpLGg9VihiKTtlPWguTDtoPWguY3NzQnVpbGQ7dmFyIGs9S2coZSxkKTtyZXR1cm4gZGcoYixlLGZ1bmN0aW9uKGIpe3ZhciBlPVwiXCI7Yi5BfHxDZyhiKTtiLkEuY3NzVGV4dCYmKGU9RmcoYSxiLkEuY3NzVGV4dCxjKSk7Yi5jc3NUZXh0PWU7aWYoIVImJiFMZihiKSYmYi5jc3NUZXh0KXt2YXIgaD1lPWIuY3NzVGV4dDtudWxsPT1iLnJhJiYoYi5yYT1FZi50ZXN0KGUpKTtpZihiLnJhKWlmKG51bGw9PWIuYmEpe2IuYmE9W107Zm9yKHZhciBsIGluIGspaD1rW2xdLGg9aChlKSxlIT09aCYmKGU9aCxiLmJhLnB1c2gobCkpfWVsc2V7Zm9yKGw9MDtsPGIuYmEubGVuZ3RoOysrbCloPWtbYi5iYVtsXV0sZT1oKGUpO2g9ZX1iLmNzc1RleHQ9aDtiLkM9XG5iLkN8fGIuc2VsZWN0b3I7ZT1cIi5cIitkO2w9VmYoYi5DKTtoPTA7Zm9yKHZhciB2PWwubGVuZ3RoLHg9dm9pZCAwO2g8diYmKHg9bFtoXSk7aCsrKWxbaF09eC5tYXRjaChnKT94LnJlcGxhY2UoZixlKTplK1wiIFwiK3g7Yi5zZWxlY3Rvcj1sLmpvaW4oXCIsXCIpfX0saCl9ZnVuY3Rpb24gS2coYSxiKXthPWEuYjt2YXIgYz17fTtpZighUiYmYSlmb3IodmFyIGQ9MCxlPWFbZF07ZDxhLmxlbmd0aDtlPWFbKytkXSl7dmFyIGY9ZSxnPWI7Zi5mPW5ldyBSZWdFeHAoXCJcXFxcYlwiK2Yua2V5ZnJhbWVzTmFtZStcIig/IVxcXFxCfC0pXCIsXCJnXCIpO2YuYT1mLmtleWZyYW1lc05hbWUrXCItXCIrZztmLkM9Zi5DfHxmLnNlbGVjdG9yO2Yuc2VsZWN0b3I9Zi5DLnJlcGxhY2UoZi5rZXlmcmFtZXNOYW1lLGYuYSk7Y1tlLmtleWZyYW1lc05hbWVdPUxnKGUpfXJldHVybiBjfWZ1bmN0aW9uIExnKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gYi5yZXBsYWNlKGEuZixhLmEpfX1cbmZ1bmN0aW9uIE1nKGEsYil7dmFyIGM9TmcsZD1LZihhKTthLnRleHRDb250ZW50PUlmKGQsZnVuY3Rpb24oYSl7dmFyIGQ9YS5jc3NUZXh0PWEucGFyc2VkQ3NzVGV4dDthLkEmJmEuQS5jc3NUZXh0JiYoZD1kLnJlcGxhY2UocWYsXCJcIikucmVwbGFjZShyZixcIlwiKSxhLmNzc1RleHQ9RmcoYyxkLGIpKX0pfXQuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQWcucHJvdG90eXBlLHthOntjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm5cIngtc2NvcGVcIn19fSk7dmFyIE5nPW5ldyBBZzt2YXIgT2c9e30sUGc9d2luZG93LmN1c3RvbUVsZW1lbnRzO2lmKFBnJiYhUiYmIXpmKXt2YXIgUWc9UGcuZGVmaW5lO1BnLmRlZmluZT1mdW5jdGlvbihhLGIsYyl7T2dbYV18fChPZ1thXT1QZihhKSk7UWcuY2FsbChQZyxhLGIsYyl9fTtmdW5jdGlvbiBSZygpe3RoaXMuY2FjaGU9e319UmcucHJvdG90eXBlLnN0b3JlPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXRoaXMuY2FjaGVbYV18fFtdO2UucHVzaCh7SjpiLHN0eWxlRWxlbWVudDpjLEg6ZH0pOzEwMDxlLmxlbmd0aCYmZS5zaGlmdCgpO3RoaXMuY2FjaGVbYV09ZX07ZnVuY3Rpb24gU2coKXt9dmFyIFRnPW5ldyBSZWdFeHAoVS5hK1wiXFxcXHMqKFteXFxcXHNdKilcIik7ZnVuY3Rpb24gVWcoYSl7cmV0dXJuKGE9KGEuY2xhc3NMaXN0JiZhLmNsYXNzTGlzdC52YWx1ZT9hLmNsYXNzTGlzdC52YWx1ZTphLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKS5tYXRjaChUZykpP2FbMV06XCJcIn1mdW5jdGlvbiBWZyhhKXt2YXIgYj1UZihhKS5nZXRSb290Tm9kZSgpO3JldHVybiBiPT09YXx8Yj09PWEub3duZXJEb2N1bWVudD9cIlwiOihhPWIuaG9zdCk/VWYoYSkuaXM6XCJcIn1cbmZ1bmN0aW9uIFdnKGEpe2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO2lmKGMudGFyZ2V0IT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiZjLnRhcmdldCE9PWRvY3VtZW50LmhlYWQpZm9yKHZhciBkPTA7ZDxjLmFkZGVkTm9kZXMubGVuZ3RoO2QrKyl7dmFyIGU9Yy5hZGRlZE5vZGVzW2RdO2lmKGUubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7dmFyIGY9ZS5nZXRSb290Tm9kZSgpLGc9VWcoZSk7aWYoZyYmZj09PWUub3duZXJEb2N1bWVudCYmKFwic3R5bGVcIiE9PWUubG9jYWxOYW1lJiZcInRlbXBsYXRlXCIhPT1lLmxvY2FsTmFtZXx8XCJcIj09PVdmKGUpKSljZyhlLGcpO2Vsc2UgaWYoZiBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpZm9yKGY9VmcoZSksZiE9PWcmJmJnKGUsZyxmKSxlPXdpbmRvdy5TaGFkeURPTS5uYXRpdmVNZXRob2RzLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlLFwiOm5vdCguXCIrVS5hK1wiKVwiKSxnPTA7ZzxlLmxlbmd0aDtnKyspe2Y9ZVtnXTtcbnZhciBoPVZnKGYpO2gmJmFnKGYsaCl9fX19fVxuaWYoIShSfHx3aW5kb3cuU2hhZHlET00mJndpbmRvdy5TaGFkeURPTS5oYW5kbGVzRHluYW1pY1Njb3BpbmcpKXt2YXIgWGc9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoV2cpLFlnPWZ1bmN0aW9uKGEpe1hnLm9ic2VydmUoYSx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KX07aWYod2luZG93LmN1c3RvbUVsZW1lbnRzJiYhd2luZG93LmN1c3RvbUVsZW1lbnRzLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2spWWcoZG9jdW1lbnQpO2Vsc2V7dmFyIFpnPWZ1bmN0aW9uKCl7WWcoZG9jdW1lbnQuYm9keSl9O3dpbmRvdy5IVE1MSW1wb3J0cz93aW5kb3cuSFRNTEltcG9ydHMud2hlblJlYWR5KFpnKTpyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtpZihcImxvYWRpbmdcIj09PWRvY3VtZW50LnJlYWR5U3RhdGUpe3ZhciBhPWZ1bmN0aW9uKCl7WmcoKTtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGEpfTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLFxuYSl9ZWxzZSBaZygpfSl9U2c9ZnVuY3Rpb24oKXtXZyhYZy50YWtlUmVjb3JkcygpKX19dmFyICRnPVNnO3ZhciBhaD17fTt2YXIgYmg9UHJvbWlzZS5yZXNvbHZlKCk7ZnVuY3Rpb24gY2goYSl7aWYoYT1haFthXSlhLl9hcHBseVNoaW1DdXJyZW50VmVyc2lvbj1hLl9hcHBseVNoaW1DdXJyZW50VmVyc2lvbnx8MCxhLl9hcHBseVNoaW1WYWxpZGF0aW5nVmVyc2lvbj1hLl9hcHBseVNoaW1WYWxpZGF0aW5nVmVyc2lvbnx8MCxhLl9hcHBseVNoaW1OZXh0VmVyc2lvbj0oYS5fYXBwbHlTaGltTmV4dFZlcnNpb258fDApKzF9ZnVuY3Rpb24gZGgoYSl7cmV0dXJuIGEuX2FwcGx5U2hpbUN1cnJlbnRWZXJzaW9uPT09YS5fYXBwbHlTaGltTmV4dFZlcnNpb259ZnVuY3Rpb24gZWgoYSl7YS5fYXBwbHlTaGltVmFsaWRhdGluZ1ZlcnNpb249YS5fYXBwbHlTaGltTmV4dFZlcnNpb247YS5fdmFsaWRhdGluZ3x8KGEuX3ZhbGlkYXRpbmc9ITAsYmgudGhlbihmdW5jdGlvbigpe2EuX2FwcGx5U2hpbUN1cnJlbnRWZXJzaW9uPWEuX2FwcGx5U2hpbU5leHRWZXJzaW9uO2EuX3ZhbGlkYXRpbmc9ITF9KSl9O3ZhciBmaD17fSxnaD1uZXcgUmc7ZnVuY3Rpb24gVygpe3RoaXMuRj17fTt0aGlzLmM9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O3ZhciBhPW5ldyBjZjthLnJ1bGVzPVtdO3RoaXMuZj14Zyh0aGlzLmMsbmV3IHdnKGEpKTt0aGlzLnU9ITE7dGhpcy5iPXRoaXMuYT1udWxsfXI9Vy5wcm90b3R5cGU7ci5mbHVzaD1mdW5jdGlvbigpeyRnKCl9O3IuS2E9ZnVuY3Rpb24oYSl7cmV0dXJuIEtmKGEpfTtyLllhPWZ1bmN0aW9uKGEpe3JldHVybiBJZihhKX07ci5wcmVwYXJlVGVtcGxhdGU9ZnVuY3Rpb24oYSxiLGMpe3RoaXMucHJlcGFyZVRlbXBsYXRlRG9tKGEsYik7dGhpcy5wcmVwYXJlVGVtcGxhdGVTdHlsZXMoYSxiLGMpfTtcbnIucHJlcGFyZVRlbXBsYXRlU3R5bGVzPWZ1bmN0aW9uKGEsYixjKXtpZighYS5fcHJlcGFyZWQmJiF6Zil7Unx8T2dbYl18fChPZ1tiXT1QZihiKSk7YS5fcHJlcGFyZWQ9ITA7YS5uYW1lPWI7YS5leHRlbmRzPWM7YWhbYl09YTt2YXIgZD1XZihhKSxlPVhmKGQpO2M9e2lzOmIsZXh0ZW5kczpjfTtmb3IodmFyIGY9W10sZz1hLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcInN0eWxlXCIpLGg9MDtoPGcubGVuZ3RoO2grKyl7dmFyIGs9Z1toXTtpZihrLmhhc0F0dHJpYnV0ZShcInNoYWR5LXVuc2NvcGVkXCIpKXtpZighUil7dmFyIGw9ay50ZXh0Q29udGVudDtIZi5oYXMobCl8fChIZi5hZGQobCksbD1rLmNsb25lTm9kZSghMCksZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsKSk7ay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGspfX1lbHNlIGYucHVzaChrLnRleHRDb250ZW50KSxrLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoayl9Zj1mLmpvaW4oXCJcIikudHJpbSgpKyhmaFtiXXx8XCJcIik7XG5oaCh0aGlzKTtpZighZSl7aWYoZz0hZClnPUNmLnRlc3QoZil8fEJmLnRlc3QoZiksQ2YubGFzdEluZGV4PTAsQmYubGFzdEluZGV4PTA7aD1kZihmKTtnJiZTJiZ0aGlzLmEmJnRoaXMuYS50cmFuc2Zvcm1SdWxlcyhoLGIpO2EuX3N0eWxlQXN0PWh9Zz1bXTtTfHwoZz1CZyhhLl9zdHlsZUFzdCkpO2lmKCFnLmxlbmd0aHx8UyloPVI/YS5jb250ZW50Om51bGwsYj1PZ1tiXXx8bnVsbCxkPWRnKGMsYS5fc3R5bGVBc3QsbnVsbCxkLGU/ZjpcIlwiKSxkPWQubGVuZ3RoP01mKGQsYy5pcyxoLGIpOm51bGwsYS5fc3R5bGU9ZDthLmE9Z319O3IuU2E9ZnVuY3Rpb24oYSxiKXtmaFtiXT1hLmpvaW4oXCIgXCIpfTtyLnByZXBhcmVUZW1wbGF0ZURvbT1mdW5jdGlvbihhLGIpe2lmKCF6Zil7dmFyIGM9V2YoYSk7Unx8XCJzaGFkeVwiPT09Y3x8YS5fZG9tUHJlcGFyZWR8fChhLl9kb21QcmVwYXJlZD0hMCxaZihhLmNvbnRlbnQsYikpfX07XG5mdW5jdGlvbiBpaChhKXt2YXIgYj1VZihhKSxjPWIuaXM7Yj1iLlg7dmFyIGQ9T2dbY118fG51bGwsZT1haFtjXTtpZihlKXtjPWUuX3N0eWxlQXN0O3ZhciBmPWUuYTtlPVdmKGUpO2I9bmV3IHdnKGMsZCxmLGIsZSk7eGcoYSxiKTtyZXR1cm4gYn19ZnVuY3Rpb24gamgoYSl7IWEuYiYmd2luZG93LlNoYWR5Q1NTJiZ3aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2UmJihhLmI9d2luZG93LlNoYWR5Q1NTLkN1c3RvbVN0eWxlSW50ZXJmYWNlLGEuYi50cmFuc2Zvcm1DYWxsYmFjaz1mdW5jdGlvbihiKXthLnZhKGIpfSxhLmIudmFsaWRhdGVDYWxsYmFjaz1mdW5jdGlvbigpe3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpeyhhLmIuZW5xdWV1ZWR8fGEudSkmJmEuZmx1c2hDdXN0b21TdHlsZXMoKX0pfSl9XG5mdW5jdGlvbiBoaChhKXshYS5hJiZ3aW5kb3cuU2hhZHlDU1MmJndpbmRvdy5TaGFkeUNTUy5BcHBseVNoaW0mJihhLmE9d2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbSxhLmEuaW52YWxpZENhbGxiYWNrPWNoKTtqaChhKX1cbnIuZmx1c2hDdXN0b21TdHlsZXM9ZnVuY3Rpb24oKXtpZighemYmJihoaCh0aGlzKSx0aGlzLmIpKXt2YXIgYT10aGlzLmIucHJvY2Vzc1N0eWxlcygpO2lmKHRoaXMuYi5lbnF1ZXVlZCYmIVhmKHRoaXMuZi5jc3NCdWlsZCkpe2lmKFMpe2lmKCF0aGlzLmYuY3NzQnVpbGQpZm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPXRoaXMuYi5nZXRTdHlsZUZvckN1c3RvbVN0eWxlKGFbYl0pO2lmKGMmJlMmJnRoaXMuYSl7dmFyIGQ9S2YoYyk7aGgodGhpcyk7dGhpcy5hLnRyYW5zZm9ybVJ1bGVzKGQpO2MudGV4dENvbnRlbnQ9SWYoZCl9fX1lbHNle2toKHRoaXMsdGhpcy5jLHRoaXMuZik7Zm9yKGI9MDtiPGEubGVuZ3RoO2IrKykoYz10aGlzLmIuZ2V0U3R5bGVGb3JDdXN0b21TdHlsZShhW2JdKSkmJk1nKGMsdGhpcy5mLkspO3RoaXMudSYmdGhpcy5zdHlsZURvY3VtZW50KCl9dGhpcy5iLmVucXVldWVkPSExfX19O1xuci5zdHlsZUVsZW1lbnQ9ZnVuY3Rpb24oYSxiKXtpZih6Zil7aWYoYil7VihhKXx8eGcoYSxuZXcgd2cobnVsbCkpO3ZhciBjPVYoYSk7Yy5HPWMuR3x8e307T2JqZWN0LmFzc2lnbihjLkcsYik7bGgodGhpcyxhLGMpfX1lbHNlIGlmKGM9VihhKXx8aWgoYSkpaWYoYSE9PXRoaXMuYyYmKHRoaXMudT0hMCksYiYmKGMuRz1jLkd8fHt9LE9iamVjdC5hc3NpZ24oYy5HLGIpKSxTKWxoKHRoaXMsYSxjKTtlbHNlIGlmKHRoaXMuZmx1c2goKSxraCh0aGlzLGEsYyksYy5sYSYmYy5sYS5sZW5ndGgpe2I9VWYoYSkuaXM7dmFyIGQ7YTp7aWYoZD1naC5jYWNoZVtiXSlmb3IodmFyIGU9ZC5sZW5ndGgtMTswPD1lO2UtLSl7dmFyIGY9ZFtlXTtiOnt2YXIgZz1jLmxhO2Zvcih2YXIgaD0wO2g8Zy5sZW5ndGg7aCsrKXt2YXIgaz1nW2hdO2lmKGYuSltrXSE9PWMuS1trXSl7Zz0hMTticmVhayBifX1nPSEwfWlmKGcpe2Q9ZjticmVhayBhfX1kPXZvaWQgMH1nPWQ/ZC5zdHlsZUVsZW1lbnQ6bnVsbDtcbmU9Yy5IOyhmPWQmJmQuSCl8fChmPXRoaXMuRltiXT0odGhpcy5GW2JdfHwwKSsxLGY9YitcIi1cIitmKTtjLkg9ZjtmPWMuSDtoPU5nO2g9Zz9nLnRleHRDb250ZW50fHxcIlwiOkpnKGgsYSxjLkssZik7az1WKGEpO3ZhciBsPWsuYTtsJiYhUiYmbCE9PWcmJihsLl91c2VDb3VudC0tLDA+PWwuX3VzZUNvdW50JiZsLnBhcmVudE5vZGUmJmwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsKSk7Uj9rLmE/KGsuYS50ZXh0Q29udGVudD1oLGc9ay5hKTpoJiYoZz1NZihoLGYsYS5zaGFkb3dSb290LGsuYikpOmc/Zy5wYXJlbnROb2RlfHwoemcmJi0xPGguaW5kZXhPZihcIkBtZWRpYVwiKSYmKGcudGV4dENvbnRlbnQ9aCksTmYoZyxudWxsLGsuYikpOmgmJihnPU1mKGgsZixudWxsLGsuYikpO2cmJihnLl91c2VDb3VudD1nLl91c2VDb3VudHx8MCxrLmEhPWcmJmcuX3VzZUNvdW50Kyssay5hPWcpO2Y9ZztSfHwoZz1jLkgsaz1oPWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIsZSYmKGs9aC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxccyp4LXNjb3BlXFxcXHMqXCIrXG5lK1wiXFxcXHMqXCIsXCJnXCIpLFwiIFwiKSksays9KGs/XCIgXCI6XCJcIikrXCJ4LXNjb3BlIFwiK2csaCE9PWsmJlNmKGEsaykpO2R8fGdoLnN0b3JlKGIsYy5LLGYsYy5IKX19O1xuZnVuY3Rpb24gbGgoYSxiLGMpe3ZhciBkPVVmKGIpLmlzO2lmKGMuRyl7dmFyIGU9Yy5HLGY7Zm9yKGYgaW4gZSludWxsPT09Zj9iLnN0eWxlLnJlbW92ZVByb3BlcnR5KGYpOmIuc3R5bGUuc2V0UHJvcGVydHkoZixlW2ZdKX1lPWFoW2RdO2lmKCEoIWUmJmIhPT1hLmN8fGUmJlwiXCIhPT1XZihlKSkmJmUmJmUuX3N0eWxlJiYhZGgoZSkpe2lmKGRoKGUpfHxlLl9hcHBseVNoaW1WYWxpZGF0aW5nVmVyc2lvbiE9PWUuX2FwcGx5U2hpbU5leHRWZXJzaW9uKWhoKGEpLGEuYSYmYS5hLnRyYW5zZm9ybVJ1bGVzKGUuX3N0eWxlQXN0LGQpLGUuX3N0eWxlLnRleHRDb250ZW50PWRnKGIsYy5MKSxlaChlKTtSJiYoYT1iLnNoYWRvd1Jvb3QpJiYoYT1hLnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVwiKSkmJihhLnRleHRDb250ZW50PWRnKGIsYy5MKSk7Yy5MPWUuX3N0eWxlQXN0fX1cbmZ1bmN0aW9uIG1oKGEsYil7cmV0dXJuKGI9VGYoYikuZ2V0Um9vdE5vZGUoKS5ob3N0KT9WKGIpfHxpaChiKT9iOm1oKGEsYik6YS5jfWZ1bmN0aW9uIGtoKGEsYixjKXt2YXIgZD1taChhLGIpLGU9VihkKSxmPWUuSztkPT09YS5jfHxmfHwoa2goYSxkLGUpLGY9ZS5LKTthPU9iamVjdC5jcmVhdGUoZnx8bnVsbCk7ZD1JZyhiLGMuTCxjLmNzc0J1aWxkKTtiPUdnKGUuTCxiKS5KO09iamVjdC5hc3NpZ24oYSxkLk1hLGIsZC5VYSk7Yj1jLkc7Zm9yKHZhciBnIGluIGIpaWYoKGU9YltnXSl8fDA9PT1lKWFbZ109ZTtnPU5nO2I9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYSk7Zm9yKGU9MDtlPGIubGVuZ3RoO2UrKylkPWJbZV0sYVtkXT1FZyhnLGFbZF0sYSk7Yy5LPWF9ci5zdHlsZURvY3VtZW50PWZ1bmN0aW9uKGEpe3RoaXMuc3R5bGVTdWJ0cmVlKHRoaXMuYyxhKX07XG5yLnN0eWxlU3VidHJlZT1mdW5jdGlvbihhLGIpe3ZhciBjPVRmKGEpLGQ9Yy5zaGFkb3dSb290OyhkfHxhPT09dGhpcy5jKSYmdGhpcy5zdHlsZUVsZW1lbnQoYSxiKTtpZihhPWQmJihkLmNoaWxkcmVufHxkLmNoaWxkTm9kZXMpKWZvcihjPTA7YzxhLmxlbmd0aDtjKyspdGhpcy5zdHlsZVN1YnRyZWUoYVtjXSk7ZWxzZSBpZihjPWMuY2hpbGRyZW58fGMuY2hpbGROb2Rlcylmb3IoYT0wO2E8Yy5sZW5ndGg7YSsrKXRoaXMuc3R5bGVTdWJ0cmVlKGNbYV0pfTtcbnIudmE9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPVdmKGEpO2MhPT10aGlzLmYuY3NzQnVpbGQmJih0aGlzLmYuY3NzQnVpbGQ9Yyk7aWYoIVhmKGMpKXt2YXIgZD1LZihhKTtKZihkLGZ1bmN0aW9uKGEpe2lmKFIpdmcoYSk7ZWxzZXt2YXIgZD1VO2Euc2VsZWN0b3I9YS5wYXJzZWRTZWxlY3Rvcjt2ZyhhKTthLnNlbGVjdG9yPWEuQz1nZyhkLGEsZC5jLHZvaWQgMCx2b2lkIDApfVMmJlwiXCI9PT1jJiYoaGgoYiksYi5hJiZiLmEudHJhbnNmb3JtUnVsZShhKSl9KTtTP2EudGV4dENvbnRlbnQ9SWYoZCk6dGhpcy5mLkwucnVsZXMucHVzaChkKX19O3IuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlPWZ1bmN0aW9uKGEsYil7dmFyIGM7U3x8KGM9KFYoYSl8fFYobWgodGhpcyxhKSkpLktbYl0pO3JldHVybihjPWN8fHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGEpLmdldFByb3BlcnR5VmFsdWUoYikpP2MudHJpbSgpOlwiXCJ9O1xuci5YYT1mdW5jdGlvbihhLGIpe3ZhciBjPVRmKGEpLmdldFJvb3ROb2RlKCk7Yj1iP2Iuc3BsaXQoL1xccy8pOltdO2M9Yy5ob3N0JiZjLmhvc3QubG9jYWxOYW1lO2lmKCFjKXt2YXIgZD1hLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpO2lmKGQpe2Q9ZC5zcGxpdCgvXFxzLyk7Zm9yKHZhciBlPTA7ZTxkLmxlbmd0aDtlKyspaWYoZFtlXT09PVUuYSl7Yz1kW2UrMV07YnJlYWt9fX1jJiZiLnB1c2goVS5hLGMpO1N8fChjPVYoYSkpJiZjLkgmJmIucHVzaChOZy5hLGMuSCk7U2YoYSxiLmpvaW4oXCIgXCIpKX07ci5GYT1mdW5jdGlvbihhKXtyZXR1cm4gVihhKX07ci5XYT1mdW5jdGlvbihhLGIpe2FnKGEsYil9O3IuWmE9ZnVuY3Rpb24oYSxiKXthZyhhLGIsITApfTtyLlZhPWZ1bmN0aW9uKGEpe3JldHVybiBWZyhhKX07ci5JYT1mdW5jdGlvbihhKXtyZXR1cm4gVWcoYSl9O1cucHJvdG90eXBlLmZsdXNoPVcucHJvdG90eXBlLmZsdXNoO1cucHJvdG90eXBlLnByZXBhcmVUZW1wbGF0ZT1XLnByb3RvdHlwZS5wcmVwYXJlVGVtcGxhdGU7XG5XLnByb3RvdHlwZS5zdHlsZUVsZW1lbnQ9Vy5wcm90b3R5cGUuc3R5bGVFbGVtZW50O1cucHJvdG90eXBlLnN0eWxlRG9jdW1lbnQ9Vy5wcm90b3R5cGUuc3R5bGVEb2N1bWVudDtXLnByb3RvdHlwZS5zdHlsZVN1YnRyZWU9Vy5wcm90b3R5cGUuc3R5bGVTdWJ0cmVlO1cucHJvdG90eXBlLmdldENvbXB1dGVkU3R5bGVWYWx1ZT1XLnByb3RvdHlwZS5nZXRDb21wdXRlZFN0eWxlVmFsdWU7Vy5wcm90b3R5cGUuc2V0RWxlbWVudENsYXNzPVcucHJvdG90eXBlLlhhO1cucHJvdG90eXBlLl9zdHlsZUluZm9Gb3JOb2RlPVcucHJvdG90eXBlLkZhO1cucHJvdG90eXBlLnRyYW5zZm9ybUN1c3RvbVN0eWxlRm9yRG9jdW1lbnQ9Vy5wcm90b3R5cGUudmE7Vy5wcm90b3R5cGUuZ2V0U3R5bGVBc3Q9Vy5wcm90b3R5cGUuS2E7Vy5wcm90b3R5cGUuc3R5bGVBc3RUb1N0cmluZz1XLnByb3RvdHlwZS5ZYTtXLnByb3RvdHlwZS5mbHVzaEN1c3RvbVN0eWxlcz1XLnByb3RvdHlwZS5mbHVzaEN1c3RvbVN0eWxlcztcblcucHJvdG90eXBlLnNjb3BlTm9kZT1XLnByb3RvdHlwZS5XYTtXLnByb3RvdHlwZS51bnNjb3BlTm9kZT1XLnByb3RvdHlwZS5aYTtXLnByb3RvdHlwZS5zY29wZUZvck5vZGU9Vy5wcm90b3R5cGUuVmE7Vy5wcm90b3R5cGUuY3VycmVudFNjb3BlRm9yTm9kZT1XLnByb3RvdHlwZS5JYTtXLnByb3RvdHlwZS5wcmVwYXJlQWRvcHRlZENzc1RleHQ9Vy5wcm90b3R5cGUuU2E7T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoVy5wcm90b3R5cGUse25hdGl2ZVNoYWRvdzp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFJ9fSxuYXRpdmVDc3M6e2dldDpmdW5jdGlvbigpe3JldHVybiBTfX19KTt2YXIgWj1uZXcgVyxuaCxvaDt3aW5kb3cuU2hhZHlDU1MmJihuaD13aW5kb3cuU2hhZHlDU1MuQXBwbHlTaGltLG9oPXdpbmRvdy5TaGFkeUNTUy5DdXN0b21TdHlsZUludGVyZmFjZSk7XG53aW5kb3cuU2hhZHlDU1M9e1Njb3BpbmdTaGltOloscHJlcGFyZVRlbXBsYXRlOmZ1bmN0aW9uKGEsYixjKXtaLmZsdXNoQ3VzdG9tU3R5bGVzKCk7Wi5wcmVwYXJlVGVtcGxhdGUoYSxiLGMpfSxwcmVwYXJlVGVtcGxhdGVEb206ZnVuY3Rpb24oYSxiKXtaLnByZXBhcmVUZW1wbGF0ZURvbShhLGIpfSxwcmVwYXJlVGVtcGxhdGVTdHlsZXM6ZnVuY3Rpb24oYSxiLGMpe1ouZmx1c2hDdXN0b21TdHlsZXMoKTtaLnByZXBhcmVUZW1wbGF0ZVN0eWxlcyhhLGIsYyl9LHN0eWxlU3VidHJlZTpmdW5jdGlvbihhLGIpe1ouZmx1c2hDdXN0b21TdHlsZXMoKTtaLnN0eWxlU3VidHJlZShhLGIpfSxzdHlsZUVsZW1lbnQ6ZnVuY3Rpb24oYSl7Wi5mbHVzaEN1c3RvbVN0eWxlcygpO1ouc3R5bGVFbGVtZW50KGEpfSxzdHlsZURvY3VtZW50OmZ1bmN0aW9uKGEpe1ouZmx1c2hDdXN0b21TdHlsZXMoKTtaLnN0eWxlRG9jdW1lbnQoYSl9LGZsdXNoQ3VzdG9tU3R5bGVzOmZ1bmN0aW9uKCl7Wi5mbHVzaEN1c3RvbVN0eWxlcygpfSxcbmdldENvbXB1dGVkU3R5bGVWYWx1ZTpmdW5jdGlvbihhLGIpe3JldHVybiBaLmdldENvbXB1dGVkU3R5bGVWYWx1ZShhLGIpfSxuYXRpdmVDc3M6UyxuYXRpdmVTaGFkb3c6Uixjc3NCdWlsZDpBZixkaXNhYmxlUnVudGltZTp6Zn07bmgmJih3aW5kb3cuU2hhZHlDU1MuQXBwbHlTaGltPW5oKTtvaCYmKHdpbmRvdy5TaGFkeUNTUy5DdXN0b21TdHlsZUludGVyZmFjZT1vaCk7KGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7XCJcIj09YSYmKGYuY2FsbCh0aGlzKSx0aGlzLmk9ITApO3JldHVybiBhLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gYyhhKXt2YXIgYj1hLmNoYXJDb2RlQXQoMCk7cmV0dXJuIDMyPGImJjEyNz5iJiYtMT09WzM0LDM1LDYwLDYyLDYzLDk2XS5pbmRleE9mKGIpP2E6ZW5jb2RlVVJJQ29tcG9uZW50KGEpfWZ1bmN0aW9uIGQoYSl7dmFyIGI9YS5jaGFyQ29kZUF0KDApO3JldHVybiAzMjxiJiYxMjc+YiYmLTE9PVszNCwzNSw2MCw2Miw5Nl0uaW5kZXhPZihiKT9hOmVuY29kZVVSSUNvbXBvbmVudChhKX1mdW5jdGlvbiBlKGEsZSxnKXtmdW5jdGlvbiBoKGEpe1gucHVzaChhKX12YXIgaz1lfHxcInNjaGVtZSBzdGFydFwiLHg9MCxwPVwiXCIsdj0hMSxRPSExLFg9W107YTpmb3IoOyh2b2lkIDAhPWFbeC0xXXx8MD09eCkmJiF0aGlzLmk7KXt2YXIgbT1hW3hdO3N3aXRjaChrKXtjYXNlIFwic2NoZW1lIHN0YXJ0XCI6aWYobSYmcS50ZXN0KG0pKXArPW0udG9Mb3dlckNhc2UoKSxcbms9XCJzY2hlbWVcIjtlbHNlIGlmKGUpe2goXCJJbnZhbGlkIHNjaGVtZS5cIik7YnJlYWsgYX1lbHNle3A9XCJcIjtrPVwibm8gc2NoZW1lXCI7Y29udGludWV9YnJlYWs7Y2FzZSBcInNjaGVtZVwiOmlmKG0mJkkudGVzdChtKSlwKz1tLnRvTG93ZXJDYXNlKCk7ZWxzZSBpZihcIjpcIj09bSl7dGhpcy5oPXA7cD1cIlwiO2lmKGUpYnJlYWsgYTt2b2lkIDAhPT1sW3RoaXMuaF0mJih0aGlzLkI9ITApO2s9XCJmaWxlXCI9PXRoaXMuaD9cInJlbGF0aXZlXCI6dGhpcy5CJiZnJiZnLmg9PXRoaXMuaD9cInJlbGF0aXZlIG9yIGF1dGhvcml0eVwiOnRoaXMuQj9cImF1dGhvcml0eSBmaXJzdCBzbGFzaFwiOlwic2NoZW1lIGRhdGFcIn1lbHNlIGlmKGUpe3ZvaWQgMCE9bSYmaChcIkNvZGUgcG9pbnQgbm90IGFsbG93ZWQgaW4gc2NoZW1lOiBcIittKTticmVhayBhfWVsc2V7cD1cIlwiO3g9MDtrPVwibm8gc2NoZW1lXCI7Y29udGludWV9YnJlYWs7Y2FzZSBcInNjaGVtZSBkYXRhXCI6XCI/XCI9PW0/KHRoaXMubz1cIj9cIixrPVwicXVlcnlcIik6XCIjXCI9PVxubT8odGhpcy52PVwiI1wiLGs9XCJmcmFnbWVudFwiKTp2b2lkIDAhPW0mJlwiXFx0XCIhPW0mJlwiXFxuXCIhPW0mJlwiXFxyXCIhPW0mJih0aGlzLmlhKz1jKG0pKTticmVhaztjYXNlIFwibm8gc2NoZW1lXCI6aWYoZyYmdm9pZCAwIT09bFtnLmhdKXtrPVwicmVsYXRpdmVcIjtjb250aW51ZX1lbHNlIGgoXCJNaXNzaW5nIHNjaGVtZS5cIiksZi5jYWxsKHRoaXMpLHRoaXMuaT0hMDticmVhaztjYXNlIFwicmVsYXRpdmUgb3IgYXV0aG9yaXR5XCI6aWYoXCIvXCI9PW0mJlwiL1wiPT1hW3grMV0paz1cImF1dGhvcml0eSBpZ25vcmUgc2xhc2hlc1wiO2Vsc2V7aChcIkV4cGVjdGVkIC8sIGdvdDogXCIrbSk7az1cInJlbGF0aXZlXCI7Y29udGludWV9YnJlYWs7Y2FzZSBcInJlbGF0aXZlXCI6dGhpcy5CPSEwO1wiZmlsZVwiIT10aGlzLmgmJih0aGlzLmg9Zy5oKTtpZih2b2lkIDA9PW0pe3RoaXMuaj1nLmo7dGhpcy5tPWcubTt0aGlzLmw9Zy5sLnNsaWNlKCk7dGhpcy5vPWcubzt0aGlzLnM9Zy5zO3RoaXMuZz1nLmc7YnJlYWsgYX1lbHNlIGlmKFwiL1wiPT1cbm18fFwiXFxcXFwiPT1tKVwiXFxcXFwiPT1tJiZoKFwiXFxcXCBpcyBhbiBpbnZhbGlkIGNvZGUgcG9pbnQuXCIpLGs9XCJyZWxhdGl2ZSBzbGFzaFwiO2Vsc2UgaWYoXCI/XCI9PW0pdGhpcy5qPWcuaix0aGlzLm09Zy5tLHRoaXMubD1nLmwuc2xpY2UoKSx0aGlzLm89XCI/XCIsdGhpcy5zPWcucyx0aGlzLmc9Zy5nLGs9XCJxdWVyeVwiO2Vsc2UgaWYoXCIjXCI9PW0pdGhpcy5qPWcuaix0aGlzLm09Zy5tLHRoaXMubD1nLmwuc2xpY2UoKSx0aGlzLm89Zy5vLHRoaXMudj1cIiNcIix0aGlzLnM9Zy5zLHRoaXMuZz1nLmcsaz1cImZyYWdtZW50XCI7ZWxzZXtrPWFbeCsxXTt2YXIgeT1hW3grMl07aWYoXCJmaWxlXCIhPXRoaXMuaHx8IXEudGVzdChtKXx8XCI6XCIhPWsmJlwifFwiIT1rfHx2b2lkIDAhPXkmJlwiL1wiIT15JiZcIlxcXFxcIiE9eSYmXCI/XCIhPXkmJlwiI1wiIT15KXRoaXMuaj1nLmosdGhpcy5tPWcubSx0aGlzLnM9Zy5zLHRoaXMuZz1nLmcsdGhpcy5sPWcubC5zbGljZSgpLHRoaXMubC5wb3AoKTtrPVwicmVsYXRpdmUgcGF0aFwiO2NvbnRpbnVlfWJyZWFrO1xuY2FzZSBcInJlbGF0aXZlIHNsYXNoXCI6aWYoXCIvXCI9PW18fFwiXFxcXFwiPT1tKVwiXFxcXFwiPT1tJiZoKFwiXFxcXCBpcyBhbiBpbnZhbGlkIGNvZGUgcG9pbnQuXCIpLGs9XCJmaWxlXCI9PXRoaXMuaD9cImZpbGUgaG9zdFwiOlwiYXV0aG9yaXR5IGlnbm9yZSBzbGFzaGVzXCI7ZWxzZXtcImZpbGVcIiE9dGhpcy5oJiYodGhpcy5qPWcuaix0aGlzLm09Zy5tLHRoaXMucz1nLnMsdGhpcy5nPWcuZyk7az1cInJlbGF0aXZlIHBhdGhcIjtjb250aW51ZX1icmVhaztjYXNlIFwiYXV0aG9yaXR5IGZpcnN0IHNsYXNoXCI6aWYoXCIvXCI9PW0paz1cImF1dGhvcml0eSBzZWNvbmQgc2xhc2hcIjtlbHNle2goXCJFeHBlY3RlZCAnLycsIGdvdDogXCIrbSk7az1cImF1dGhvcml0eSBpZ25vcmUgc2xhc2hlc1wiO2NvbnRpbnVlfWJyZWFrO2Nhc2UgXCJhdXRob3JpdHkgc2Vjb25kIHNsYXNoXCI6az1cImF1dGhvcml0eSBpZ25vcmUgc2xhc2hlc1wiO2lmKFwiL1wiIT1tKXtoKFwiRXhwZWN0ZWQgJy8nLCBnb3Q6IFwiK20pO2NvbnRpbnVlfWJyZWFrO2Nhc2UgXCJhdXRob3JpdHkgaWdub3JlIHNsYXNoZXNcIjppZihcIi9cIiE9XG5tJiZcIlxcXFxcIiE9bSl7az1cImF1dGhvcml0eVwiO2NvbnRpbnVlfWVsc2UgaChcIkV4cGVjdGVkIGF1dGhvcml0eSwgZ290OiBcIittKTticmVhaztjYXNlIFwiYXV0aG9yaXR5XCI6aWYoXCJAXCI9PW0pe3YmJihoKFwiQCBhbHJlYWR5IHNlZW4uXCIpLHArPVwiJTQwXCIpO3Y9ITA7Zm9yKG09MDttPHAubGVuZ3RoO20rKyl5PXBbbV0sXCJcXHRcIj09eXx8XCJcXG5cIj09eXx8XCJcXHJcIj09eT9oKFwiSW52YWxpZCB3aGl0ZXNwYWNlIGluIGF1dGhvcml0eS5cIik6XCI6XCI9PXkmJm51bGw9PT10aGlzLmc/dGhpcy5nPVwiXCI6KHk9Yyh5KSxudWxsIT09dGhpcy5nP3RoaXMuZys9eTp0aGlzLnMrPXkpO3A9XCJcIn1lbHNlIGlmKHZvaWQgMD09bXx8XCIvXCI9PW18fFwiXFxcXFwiPT1tfHxcIj9cIj09bXx8XCIjXCI9PW0pe3gtPXAubGVuZ3RoO3A9XCJcIjtrPVwiaG9zdFwiO2NvbnRpbnVlfWVsc2UgcCs9bTticmVhaztjYXNlIFwiZmlsZSBob3N0XCI6aWYodm9pZCAwPT1tfHxcIi9cIj09bXx8XCJcXFxcXCI9PW18fFwiP1wiPT1tfHxcIiNcIj09bSl7MiE9cC5sZW5ndGh8fFxuIXEudGVzdChwWzBdKXx8XCI6XCIhPXBbMV0mJlwifFwiIT1wWzFdPygwIT1wLmxlbmd0aCYmKHRoaXMuaj1iLmNhbGwodGhpcyxwKSxwPVwiXCIpLGs9XCJyZWxhdGl2ZSBwYXRoIHN0YXJ0XCIpOms9XCJyZWxhdGl2ZSBwYXRoXCI7Y29udGludWV9ZWxzZVwiXFx0XCI9PW18fFwiXFxuXCI9PW18fFwiXFxyXCI9PW0/aChcIkludmFsaWQgd2hpdGVzcGFjZSBpbiBmaWxlIGhvc3QuXCIpOnArPW07YnJlYWs7Y2FzZSBcImhvc3RcIjpjYXNlIFwiaG9zdG5hbWVcIjppZihcIjpcIiE9bXx8USlpZih2b2lkIDA9PW18fFwiL1wiPT1tfHxcIlxcXFxcIj09bXx8XCI/XCI9PW18fFwiI1wiPT1tKXt0aGlzLmo9Yi5jYWxsKHRoaXMscCk7cD1cIlwiO2s9XCJyZWxhdGl2ZSBwYXRoIHN0YXJ0XCI7aWYoZSlicmVhayBhO2NvbnRpbnVlfWVsc2VcIlxcdFwiIT1tJiZcIlxcblwiIT1tJiZcIlxcclwiIT1tPyhcIltcIj09bT9RPSEwOlwiXVwiPT1tJiYoUT0hMSkscCs9bSk6aChcIkludmFsaWQgY29kZSBwb2ludCBpbiBob3N0L2hvc3RuYW1lOiBcIittKTtlbHNlIGlmKHRoaXMuaj1iLmNhbGwodGhpcyxcbnApLHA9XCJcIixrPVwicG9ydFwiLFwiaG9zdG5hbWVcIj09ZSlicmVhayBhO2JyZWFrO2Nhc2UgXCJwb3J0XCI6aWYoL1swLTldLy50ZXN0KG0pKXArPW07ZWxzZSBpZih2b2lkIDA9PW18fFwiL1wiPT1tfHxcIlxcXFxcIj09bXx8XCI/XCI9PW18fFwiI1wiPT1tfHxlKXtcIlwiIT1wJiYocD1wYXJzZUludChwLDEwKSxwIT1sW3RoaXMuaF0mJih0aGlzLm09cCtcIlwiKSxwPVwiXCIpO2lmKGUpYnJlYWsgYTtrPVwicmVsYXRpdmUgcGF0aCBzdGFydFwiO2NvbnRpbnVlfWVsc2VcIlxcdFwiPT1tfHxcIlxcblwiPT1tfHxcIlxcclwiPT1tP2goXCJJbnZhbGlkIGNvZGUgcG9pbnQgaW4gcG9ydDogXCIrbSk6KGYuY2FsbCh0aGlzKSx0aGlzLmk9ITApO2JyZWFrO2Nhc2UgXCJyZWxhdGl2ZSBwYXRoIHN0YXJ0XCI6XCJcXFxcXCI9PW0mJmgoXCInXFxcXCcgbm90IGFsbG93ZWQgaW4gcGF0aC5cIik7az1cInJlbGF0aXZlIHBhdGhcIjtpZihcIi9cIiE9bSYmXCJcXFxcXCIhPW0pY29udGludWU7YnJlYWs7Y2FzZSBcInJlbGF0aXZlIHBhdGhcIjppZih2b2lkIDAhPW0mJlwiL1wiIT1tJiZcIlxcXFxcIiE9XG5tJiYoZXx8XCI/XCIhPW0mJlwiI1wiIT1tKSlcIlxcdFwiIT1tJiZcIlxcblwiIT1tJiZcIlxcclwiIT1tJiYocCs9YyhtKSk7ZWxzZXtcIlxcXFxcIj09bSYmaChcIlxcXFwgbm90IGFsbG93ZWQgaW4gcmVsYXRpdmUgcGF0aC5cIik7aWYoeT1uW3AudG9Mb3dlckNhc2UoKV0pcD15O1wiLi5cIj09cD8odGhpcy5sLnBvcCgpLFwiL1wiIT1tJiZcIlxcXFxcIiE9bSYmdGhpcy5sLnB1c2goXCJcIikpOlwiLlwiPT1wJiZcIi9cIiE9bSYmXCJcXFxcXCIhPW0/dGhpcy5sLnB1c2goXCJcIik6XCIuXCIhPXAmJihcImZpbGVcIj09dGhpcy5oJiYwPT10aGlzLmwubGVuZ3RoJiYyPT1wLmxlbmd0aCYmcS50ZXN0KHBbMF0pJiZcInxcIj09cFsxXSYmKHA9cFswXStcIjpcIiksdGhpcy5sLnB1c2gocCkpO3A9XCJcIjtcIj9cIj09bT8odGhpcy5vPVwiP1wiLGs9XCJxdWVyeVwiKTpcIiNcIj09bSYmKHRoaXMudj1cIiNcIixrPVwiZnJhZ21lbnRcIil9YnJlYWs7Y2FzZSBcInF1ZXJ5XCI6ZXx8XCIjXCIhPW0/dm9pZCAwIT1tJiZcIlxcdFwiIT1tJiZcIlxcblwiIT1tJiZcIlxcclwiIT1tJiYodGhpcy5vKz1kKG0pKToodGhpcy52PVxuXCIjXCIsaz1cImZyYWdtZW50XCIpO2JyZWFrO2Nhc2UgXCJmcmFnbWVudFwiOnZvaWQgMCE9bSYmXCJcXHRcIiE9bSYmXCJcXG5cIiE9bSYmXCJcXHJcIiE9bSYmKHRoaXMudis9bSl9eCsrfX1mdW5jdGlvbiBmKCl7dGhpcy5zPXRoaXMuaWE9dGhpcy5oPVwiXCI7dGhpcy5nPW51bGw7dGhpcy5tPXRoaXMuaj1cIlwiO3RoaXMubD1bXTt0aGlzLnY9dGhpcy5vPVwiXCI7dGhpcy5CPXRoaXMuaT0hMX1mdW5jdGlvbiBnKGEsYil7dm9pZCAwPT09Ynx8YiBpbnN0YW5jZW9mIGd8fChiPW5ldyBnKFN0cmluZyhiKSkpO3RoaXMuYT1hO2YuY2FsbCh0aGlzKTthPXRoaXMuYS5yZXBsYWNlKC9eWyBcXHRcXHJcXG5cXGZdK3xbIFxcdFxcclxcblxcZl0rJC9nLFwiXCIpO2UuY2FsbCh0aGlzLGEsbnVsbCxiKX12YXIgaD0hMTt0cnl7dmFyIGs9bmV3IFVSTChcImJcIixcImh0dHA6Ly9hXCIpO2sucGF0aG5hbWU9XCJjJTIwZFwiO2g9XCJodHRwOi8vYS9jJTIwZFwiPT09ay5ocmVmfWNhdGNoKHgpe31pZighaCl7dmFyIGw9T2JqZWN0LmNyZWF0ZShudWxsKTtsLmZ0cD1cbjIxO2wuZmlsZT0wO2wuZ29waGVyPTcwO2wuaHR0cD04MDtsLmh0dHBzPTQ0MztsLndzPTgwO2wud3NzPTQ0Mzt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO25bXCIlMmVcIl09XCIuXCI7bltcIi4lMmVcIl09XCIuLlwiO25bXCIlMmUuXCJdPVwiLi5cIjtuW1wiJTJlJTJlXCJdPVwiLi5cIjt2YXIgcT0vW2EtekEtWl0vLEk9L1thLXpBLVowLTlcXCtcXC1cXC5dLztnLnByb3RvdHlwZT17dG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ocmVmfSxnZXQgaHJlZigpe2lmKHRoaXMuaSlyZXR1cm4gdGhpcy5hO3ZhciBhPVwiXCI7aWYoXCJcIiE9dGhpcy5zfHxudWxsIT10aGlzLmcpYT10aGlzLnMrKG51bGwhPXRoaXMuZz9cIjpcIit0aGlzLmc6XCJcIikrXCJAXCI7cmV0dXJuIHRoaXMucHJvdG9jb2wrKHRoaXMuQj9cIi8vXCIrYSt0aGlzLmhvc3Q6XCJcIikrdGhpcy5wYXRobmFtZSt0aGlzLm8rdGhpcy52fSxzZXQgaHJlZihhKXtmLmNhbGwodGhpcyk7ZS5jYWxsKHRoaXMsYSl9LGdldCBwcm90b2NvbCgpe3JldHVybiB0aGlzLmgrXG5cIjpcIn0sc2V0IHByb3RvY29sKGEpe3RoaXMuaXx8ZS5jYWxsKHRoaXMsYStcIjpcIixcInNjaGVtZSBzdGFydFwiKX0sZ2V0IGhvc3QoKXtyZXR1cm4gdGhpcy5pP1wiXCI6dGhpcy5tP3RoaXMuaitcIjpcIit0aGlzLm06dGhpcy5qfSxzZXQgaG9zdChhKXshdGhpcy5pJiZ0aGlzLkImJmUuY2FsbCh0aGlzLGEsXCJob3N0XCIpfSxnZXQgaG9zdG5hbWUoKXtyZXR1cm4gdGhpcy5qfSxzZXQgaG9zdG5hbWUoYSl7IXRoaXMuaSYmdGhpcy5CJiZlLmNhbGwodGhpcyxhLFwiaG9zdG5hbWVcIil9LGdldCBwb3J0KCl7cmV0dXJuIHRoaXMubX0sc2V0IHBvcnQoYSl7IXRoaXMuaSYmdGhpcy5CJiZlLmNhbGwodGhpcyxhLFwicG9ydFwiKX0sZ2V0IHBhdGhuYW1lKCl7cmV0dXJuIHRoaXMuaT9cIlwiOnRoaXMuQj9cIi9cIit0aGlzLmwuam9pbihcIi9cIik6dGhpcy5pYX0sc2V0IHBhdGhuYW1lKGEpeyF0aGlzLmkmJnRoaXMuQiYmKHRoaXMubD1bXSxlLmNhbGwodGhpcyxhLFwicmVsYXRpdmUgcGF0aCBzdGFydFwiKSl9LGdldCBzZWFyY2goKXtyZXR1cm4gdGhpcy5pfHxcbiF0aGlzLm98fFwiP1wiPT10aGlzLm8/XCJcIjp0aGlzLm99LHNldCBzZWFyY2goYSl7IXRoaXMuaSYmdGhpcy5CJiYodGhpcy5vPVwiP1wiLFwiP1wiPT1hWzBdJiYoYT1hLnNsaWNlKDEpKSxlLmNhbGwodGhpcyxhLFwicXVlcnlcIikpfSxnZXQgaGFzaCgpe3JldHVybiB0aGlzLml8fCF0aGlzLnZ8fFwiI1wiPT10aGlzLnY/XCJcIjp0aGlzLnZ9LHNldCBoYXNoKGEpe3RoaXMuaXx8KGE/KHRoaXMudj1cIiNcIixcIiNcIj09YVswXSYmKGE9YS5zbGljZSgxKSksZS5jYWxsKHRoaXMsYSxcImZyYWdtZW50XCIpKTp0aGlzLnY9XCJcIil9LGdldCBvcmlnaW4oKXt2YXIgYTtpZih0aGlzLml8fCF0aGlzLmgpcmV0dXJuXCJcIjtzd2l0Y2godGhpcy5oKXtjYXNlIFwiZGF0YVwiOmNhc2UgXCJmaWxlXCI6Y2FzZSBcImphdmFzY3JpcHRcIjpjYXNlIFwibWFpbHRvXCI6cmV0dXJuXCJudWxsXCJ9cmV0dXJuKGE9dGhpcy5ob3N0KT90aGlzLmgrXCI6Ly9cIithOlwiXCJ9fTt2YXIgdj1hLlVSTDt2JiYoZy5jcmVhdGVPYmplY3RVUkw9ZnVuY3Rpb24oYSl7cmV0dXJuIHYuY3JlYXRlT2JqZWN0VVJMLmFwcGx5KHYsXG5hcmd1bWVudHMpfSxnLnJldm9rZU9iamVjdFVSTD1mdW5jdGlvbihhKXt2LnJldm9rZU9iamVjdFVSTChhKX0pO2EuVVJMPWd9fSkod2luZG93KTtPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5vZGUucHJvdG90eXBlLFwiYmFzZVVSSVwiKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGUucHJvdG90eXBlLFwiYmFzZVVSSVwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgYT0odGhpcy5vd25lckRvY3VtZW50fHx0aGlzKS5xdWVyeVNlbGVjdG9yKFwiYmFzZVtocmVmXVwiKTtyZXR1cm4gYSYmYS5ocmVmfHx3aW5kb3cubG9jYXRpb24uaHJlZn0sY29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITB9KTt2YXIgcGg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3BoLnRleHRDb250ZW50PVwiYm9keSB7dHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluIDAuMnM7IH0gXFxuYm9keVt1bnJlc29sdmVkXSB7b3BhY2l0eTogMDsgZGlzcGxheTogYmxvY2s7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsgfSBcXG5cIjt2YXIgcWg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7cWguaW5zZXJ0QmVmb3JlKHBoLHFoLmZpcnN0Q2hpbGQpO3ZhciByaD13aW5kb3cuY3VzdG9tRWxlbWVudHMsc2g9ITEsdGg9bnVsbDtyaC5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrJiZyaC5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrKGZ1bmN0aW9uKGEpe3RoPWE7c2gmJmEoKX0pO2Z1bmN0aW9uIHVoKCl7d2luZG93LkhUTUxUZW1wbGF0ZUVsZW1lbnQuYm9vdHN0cmFwJiZ3aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudC5ib290c3RyYXAod2luZG93LmRvY3VtZW50KTt0aCYmdGgoKTtzaD0hMDt3aW5kb3cuV2ViQ29tcG9uZW50cy5yZWFkeT0hMDtkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIldlYkNvbXBvbmVudHNSZWFkeVwiLHtidWJibGVzOiEwfSkpfVxuXCJjb21wbGV0ZVwiIT09ZG9jdW1lbnQucmVhZHlTdGF0ZT8od2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsdWgpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsdWgpO3VoKCl9KSk6dWgoKTt9KS5jYWxsKHRoaXMpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13ZWJjb21wb25lbnRzLWJ1bmRsZS5qcy5tYXBcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGl2ZS1idXR0b24sIGxpdmUtc2xpZGVyLCBsaXZlLWRpYWwsIGxpdmUtdG9nZ2xlLCBsaXZlLXRleHQsIGxpdmUtbnVtYm94LCBsaXZlLXRhYiwgbGl2ZS1tZXRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9CYXNlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQmFzZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9CYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBcIi4vQmFzZS5zY3NzXCI7XG5pbXBvcnQgeyB0b01JREkgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgTGl2ZUNvbXBvbmVudENoYW5nZUV2ZW50IH0gZnJvbSBcIi4vQ2hhbmdlRXZlbnRcIjtcblxuZXhwb3J0IGNsYXNzIExpdmVCYXNlQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHJvb3Q6IFNoYWRvd1Jvb3Q7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcbiAgICAgICAgdGhpcy5yb290LmlubmVySFRNTCA9IHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZUNvbXBvbmVudDxUIGV4dGVuZHMgTGl2ZVByb3BzPiBleHRlbmRzIExpdmVCYXNlQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcHM6IExpdmVQcm9wcyA9IHtcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgZm9jdXM6IGZhbHNlLFxuICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgIGhlaWdodDogMTUsXG4gICAgICAgIHNob3J0bmFtZTogXCJcIixcbiAgICAgICAgbG9uZ25hbWU6IFwiXCIsXG4gICAgICAgIG9yZGVyOiAwLFxuICAgICAgICBsaW5rbmFtZXM6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcImZsb2F0XCIsXG4gICAgICAgIG1taW46IDAsXG4gICAgICAgIG1tYXg6IDEsXG4gICAgICAgIGVudW06IFtdLFxuICAgICAgICBlbnVtX2ljb25zOiBbXSxcbiAgICAgICAgbW9kbW9kZTogXCJub25lXCIsXG4gICAgICAgIGluaXRpYWxfZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgaW5pdGlhbDogWzBdLFxuICAgICAgICB1bml0c3R5bGU6IFwiZmxvYXRcIixcbiAgICAgICAgdW5pdHM6IFwiXCIsXG4gICAgICAgIGV4cG9uZW50OiAxLFxuICAgICAgICBzdGVwOiAwLFxuICAgICAgICBzdGVwczogMCxcbiAgICAgICAgc3BlZWRsaW06IDUsXG4gICAgICAgIGRlZmVyOiBmYWxzZSxcbiAgICAgICAgaW52aXNpYmxlOiBcImF1dG9tYXRlZFwiLFxuICAgICAgICBtYXBwYWJsZTogdHJ1ZVxuICAgIH1cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIGlzQ29ubmVjdGVkUG9seWZpbGw6IGJvb2xlYW47XG4gICAgcHJvcHM6IFQ7XG5cbiAgICBoYW5kbGVLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZUtleVVwID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVRvdWNoU3RhcnQgPSAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2FudmFzLmZvY3VzKCk7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IHByZXZYID0gZS50b3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICBsZXQgcHJldlkgPSBlLnRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgIGNvbnN0IGZyb21YID0gcHJldlggLSByZWN0LmxlZnQ7XG4gICAgICAgIGNvbnN0IGZyb21ZID0gcHJldlkgLSByZWN0LnRvcDtcbiAgICAgICAgY29uc3QgcHJldlZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyRG93bih7IHg6IGZyb21YLCB5OiBmcm9tWSwgb3JpZ2luYWxFdmVudDogZSB9KTtcbiAgICAgICAgY29uc3QgaGFuZGxlVG91Y2hNb3ZlID0gKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVtZW50WCA9IHBhZ2VYIC0gcHJldlg7XG4gICAgICAgICAgICBjb25zdCBtb3ZlbWVudFkgPSBwYWdlWSAtIHByZXZZO1xuICAgICAgICAgICAgcHJldlggPSBwYWdlWDtcbiAgICAgICAgICAgIHByZXZZID0gcGFnZVk7XG4gICAgICAgICAgICBjb25zdCB4ID0gcGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gcGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlckRyYWcoeyBwcmV2VmFsdWUsIHgsIHksIGZyb21YLCBmcm9tWSwgbW92ZW1lbnRYLCBtb3ZlbWVudFksIG9yaWdpbmFsRXZlbnQ6IGUgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZVRvdWNoRW5kID0gKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlclVwKHsgeCwgeSwgb3JpZ2luYWxFdmVudDogZSB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBoYW5kbGVUb3VjaEVuZCk7XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgaGFuZGxlVG91Y2hNb3ZlLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgaGFuZGxlVG91Y2hFbmQsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgfTtcbiAgICBoYW5kbGVXaGVlbCA9IChlOiBXaGVlbEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVDbGljayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVNb3VzZURvd24gPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2FudmFzLmZvY3VzKCk7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgZnJvbVggPSBlLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICBjb25zdCBmcm9tWSA9IGUucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgY29uc3QgcHJldlZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyRG93bih7IHg6IGZyb21YLCB5OiBmcm9tWSwgb3JpZ2luYWxFdmVudDogZSB9KTtcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBlLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGUucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlckRyYWcoeyBwcmV2VmFsdWUsIHgsIHksIGZyb21YLCBmcm9tWSwgbW92ZW1lbnRYOiBlLm1vdmVtZW50WCwgbW92ZW1lbnRZOiBlLm1vdmVtZW50WSwgb3JpZ2luYWxFdmVudDogZSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VVcCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBlLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJVcCh7IHgsIHksIG9yaWdpbmFsRXZlbnQ6IGUgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcbiAgICB9O1xuICAgIGhhbmRsZU1vdXNlT3ZlciA9IChlOiBNb3VzZUV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVNb3VzZU91dCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVDb250ZXh0TWVudSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVQb2ludGVyRG93biA9IChlOiBQb2ludGVyRG93bkV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoZTogUG9pbnRlclVwRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZUZvY3VzSW4gPSAoZTogRm9jdXNFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmZvY3VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWludCgpO1xuICAgIH1cbiAgICBoYW5kbGVGb2N1c091dCA9IChlOiBGb2N1c0V2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuZm9jdXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYWludCgpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuaGFuZGxlS2V5VXApO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuaGFuZGxlVG91Y2hTdGFydCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcy5oYW5kbGVXaGVlbCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2spO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5oYW5kbGVNb3VzZURvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCB0aGlzLmhhbmRsZU1vdXNlT3Zlcik7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIHRoaXMuaGFuZGxlTW91c2VPdXQpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIHRoaXMuaGFuZGxlRm9jdXNJbik7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIHRoaXMuaGFuZGxlRm9jdXNPdXQpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMucm9vdC5jaGlsZHJlblswXSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMucHJvcHMgPSAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgTGl2ZUNvbXBvbmVudCkucHJvcHMgYXMgVDtcbiAgICB9XG4gICAgZ2V0IGRpc3BsYXlWYWx1ZSgpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgdHlwZSwgdW5pdHN0eWxlLCB1bml0cyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gdGhpcy5wcm9wcy5lbnVtW3ZhbHVlXTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJpbnRcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQoMCk7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiZmxvYXRcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwidGltZVwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgbXNcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJoZXJ0elwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgSHpcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJkZWNpYmVsXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiBkQlwiO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcIiVcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiICVcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJwYW5cIikgcmV0dXJuIHZhbHVlID09PSAwID8gXCJDXCIgOiAodHlwZSA9PT0gXCJpbnRcIiA/IE1hdGguYWJzKHZhbHVlKSA6IE1hdGguYWJzKHZhbHVlKS50b0ZpeGVkKDIpKSArICh2YWx1ZSA8IDAgPyBcIiBMXCIgOiBcIiBSXCIpO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcInNlbWl0b25lc1wiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgc3RcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJtaWRpXCIpIHJldHVybiB0b01JREkodmFsdWUpO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcImN1c3RvbVwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgXCIgKyB1bml0cztcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJuYXRpdmVcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKTtcbiAgICAgICAgcmV0dXJuIFwiTi9BXCI7XG4gICAgfVxuICAgIGZldGNoQXR0cmlidXRlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vdC5ob3N0LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLnJvb3QuaG9zdC5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gYXR0cjtcbiAgICAgICAgICAgICh0aGlzLnByb3BzIGFzIGFueSlbbmFtZV0gPSB2YWx1ZS5tYXRjaCgvXlsrLV0/KFxcZCpcXC4pP1xcZCskLykgPyArdmFsdWUgOiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soa2V5OiBzdHJpbmcsIG9sZFZhbHVlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkUG9seWZpbGwpIHJldHVybjtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnNldFBhcmFtVmFsdWUoa2V5LCB2YWx1ZS5tYXRjaCgvXlsrLV0/KFxcZCpcXC4pP1xcZCskLykgPyArdmFsdWUgOiB2YWx1ZSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmZldGNoQXR0cmlidXRlKCk7XG4gICAgICAgIHRoaXMucGFpbnQoKTtcbiAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZFBvbHlmaWxsID0gdHJ1ZTtcbiAgICB9XG4gICAgc2V0UGFyYW1WYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgICAgICBpZiAoIShrZXkgaW4gdGhpcy5wcm9wcykpIHJldHVybjtcbiAgICAgICAgKHRoaXMucHJvcHMgYXMgYW55KVtrZXldID0gdmFsdWU7XG4gICAgICAgIGlmIChrZXkgPT09IFwidmFsdWVcIikgdGhpcy5jaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5wYWludCgpO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIHZhbHVlKTtcbiAgICB9XG4gICAgY2hhbmdlKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IExpdmVDb21wb25lbnRDaGFuZ2VFdmVudChcImNoYW5nZVwiLCB7IGRldGFpbDogeyB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSwgZGlzcGxheVZhbHVlOiB0aGlzLmRpc3BsYXlWYWx1ZSB9IH0pKTtcbiAgICB9XG4gICAgcGFpbnQoKSB7fVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICc8Y2FudmFzIHRhYmluZGV4PVwiMVwiIHN0eWxlPVwib3V0bGluZTogbm9uZTtcIj48L2NhbnZhcz4nO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5cbmludGVyZmFjZSBMaXZlQnV0dG9uUHJvcHMgZXh0ZW5kcyBMaXZlUHJvcHMge1xuICAgIGFjdGl2ZWJnY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmViZ29uY29sb3I6IHN0cmluZztcbiAgICBiZ2NvbG9yOiBzdHJpbmc7XG4gICAgYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVCdXR0b24gZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVCdXR0b25Qcm9wcz4ge1xuICAgIHN0YXRpYyBnZXQgcHJvcHMoKTogTGl2ZUJ1dHRvblByb3BzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnByb3BzLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUuYnV0dG9uXCIsXG4gICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICBoZWlnaHQ6IDE1LFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcjogXCJyZ2JhKDkwLCA5MCwgOTAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3I6IFwicmdiYSgxMDksIDIxNSwgMjU1LCAxKVwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDkwLCA5MCwgOTAsIDEpXCIsXG4gICAgICAgICAgICBiZ29uY29sb3I6IFwicmdiYSgxOTUsIDE5NSwgMTk1LCAxKVwiLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3IsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgYmdvbmNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cbiAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSAwLjU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkJnQ29sb3IgPSBhY3RpdmUgPyAodmFsdWUgPyBhY3RpdmViZ29uY29sb3IgOiBhY3RpdmViZ2NvbG9yKSA6ICh2YWx1ZSA/IGJnb25jb2xvciA6IGJnY29sb3IpO1xuICAgICAgICBjb25zdCBidXR0b25Cb3JkZXJDb2xvciA9IGZvY3VzID8gZm9jdXNib3JkZXJjb2xvciA6IGJvcmRlcmNvbG9yO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBidXR0b25CZ0NvbG9yO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5lbGxpcHNlKHdpZHRoICogMC41LCBoZWlnaHQgKiAwLjUsIHdpZHRoICogMC41IC0gMiAqIGJvcmRlcldpZHRoLCBoZWlnaHQgKiAwLjUgLSAyICogYm9yZGVyV2lkdGgsIDAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYnV0dG9uQm9yZGVyQ29sb3I7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgIXRoaXMuX2luVG91Y2gpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRWYWx1ZSgwKSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoMSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldFZhbHVlKDApO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIExpdmVDb21wb25lbnRDaGFuZ2VFdmVudCBleHRlbmRzIEN1c3RvbUV2ZW50PHsgdmFsdWU6IG51bWJlcjsgZGlzcGxheVZhbHVlOiBzdHJpbmcgfT4ge31cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5pbXBvcnQgeyB0b1JhZCwgcm91bmRlZFJlY3QsIGZpbGxSb3VuZGVkUmVjdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmludGVyZmFjZSBMaXZlRGlhbFByb3BzIGV4dGVuZHMgTGl2ZVByb3BzIHtcbiAgICBmb250bmFtZTogc3RyaW5nO1xuICAgIGZvbnRzaXplOiBudW1iZXI7XG4gICAgZm9udGZhY2U6IFwicmVndWxhclwiIHwgXCJib2xkXCIgfCBcIml0YWxpY1wiIHwgXCJib2xkIGl0YWxpY1wiO1xuICAgIHNob3duYW1lOiBib29sZWFuO1xuICAgIHNob3dudW1iZXI6IGJvb2xlYW47XG4gICAgYXBwZWFyYW5jZTogXCJ2ZXJ0aWNhbFwiIHwgXCJ0aW55XCIgfCBcInBhbmVsXCI7XG4gICAgdHJpYW5nbGU6IGJvb2xlYW47XG4gICAgYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZlZGlhbGNvbG9yOiBzdHJpbmc7XG4gICAgZGlhbGNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZlbmVlZGxlY29sb3I6IHN0cmluZztcbiAgICBuZWVkbGVjb2xvcjogc3RyaW5nO1xuICAgIHBhbmVsY29sb3I6IHN0cmluZztcbiAgICB0ZXh0Y29sb3I6IHN0cmluZztcbiAgICB0cmlib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRyaWNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVEaWFsIGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlRGlhbFByb3BzPiB7XG4gICAgc3RhdGljIGdldCBwcm9wcygpOiBMaXZlRGlhbFByb3BzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnByb3BzLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUuZGlhbFwiLFxuICAgICAgICAgICAgd2lkdGg6IDQ1LFxuICAgICAgICAgICAgaGVpZ2h0OiA0NSxcbiAgICAgICAgICAgIGZvbnRuYW1lOiBcIkFyaWFsXCIsXG4gICAgICAgICAgICBmb250c2l6ZTogMTIsXG4gICAgICAgICAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIsXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICB0cmlhbmdsZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93bmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dudW1iZXI6IHRydWUsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJyZ2JhKDkwLCA5MCwgOTAsIDEpXCIsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZWRpYWxjb2xvcjogXCJyZ2JhKDEwOSwgMjE1LCAyNTUsIDEpXCIsXG4gICAgICAgICAgICBkaWFsY29sb3I6IFwicmdiYSgxOTUsIDE5NSwgMTk1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlbmVlZGxlY29sb3I6IFwicmdiYSg0MCwgNDAsIDQwLCAxKVwiLFxuICAgICAgICAgICAgbmVlZGxlY29sb3I6IFwicmdiYSgxMDUsIDEwNSwgMTA1LCAxKVwiLFxuICAgICAgICAgICAgcGFuZWxjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0Y29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3I6IFwicmdiYSg1MCwgNTAsIDUwLCAxKVwiLFxuICAgICAgICAgICAgdHJpY29sb3I6IFwicmdiYSg0MCwgNDAsIDQwLCAxKVwiLFxuICAgICAgICAgICAgbW1pbjogMCxcbiAgICAgICAgICAgIG1tYXg6IDEyNyxcbiAgICAgICAgICAgIHR5cGU6IFwiaW50XCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpbnRlcmFjdGlvblJlY3Q6IG51bWJlcltdID0gWzAsIDAsIDAsIDBdO1xuXG4gICAgZ2V0IHRydWVTdGVwcygpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCBzdGVwcywgc3RlcCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZnVsbCA9IDEwMDtcbiAgICAgICAgY29uc3QgbWF4U3RlcHMgPSB0eXBlID09PSBcImVudW1cIiA/IHRoaXMucHJvcHMuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gbW1heCAtIG1taW4gOiBmdWxsO1xuICAgICAgICBpZiAoc3RlcCkge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gdGhpcy5wcm9wcy5lbnVtLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5taW4oTWF0aC5mbG9vcigobW1heCAtIG1taW4pIC8gTWF0aC5yb3VuZChzdGVwKSksIG1heFN0ZXBzKTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBzdGVwKSwgbWF4U3RlcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGVwcykgcmV0dXJuIE1hdGgubWluKHN0ZXBzLCBtYXhTdGVwcyk7XG4gICAgICAgIHJldHVybiBtYXhTdGVwcztcbiAgICB9XG4gICAgZ2V0IGRpc3RhbmNlKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gXCJlbnVtXCIgPyB2YWx1ZSAvIHRoaXMucHJvcHMuZW51bS5sZW5ndGggOiAodmFsdWUgLSBtbWluKSAvIChtbWF4IC0gbW1pbik7XG4gICAgfVxuICAgIGdldCBzdGVwUmFuZ2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgc3RlcCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZnVsbCA9IDEwMDtcbiAgICAgICAgaWYgKHN0ZXApIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IGZ1bGwgLyB0aGlzLnByb3BzLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IE1hdGgucm91bmQoc3RlcCkgLyAobW1heCAtIG1taW4pICogZnVsbCA6IHN0ZXAgLyAobW1heCAtIG1taW4pICogZnVsbDtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIHJldHVybiBmdWxsIC8gdHJ1ZVN0ZXBzO1xuICAgIH1cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIGFwcGVhcmFuY2UsXG4gICAgICAgICAgICB0cmlhbmdsZSxcbiAgICAgICAgICAgIHNob3duYW1lLFxuICAgICAgICAgICAgc2hvd251bWJlcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHBhbmVsY29sb3IsXG4gICAgICAgICAgICBhY3RpdmVuZWVkbGVjb2xvcixcbiAgICAgICAgICAgIG5lZWRsZWNvbG9yLFxuICAgICAgICAgICAgYWN0aXZlZGlhbGNvbG9yLFxuICAgICAgICAgICAgZGlhbGNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0cmljb2xvcixcbiAgICAgICAgICAgIHNob3J0bmFtZVxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG5cbiAgICAgICAgY29uc3QgdHJpYW5nbGVIZWlnaHQgPSA0O1xuICAgICAgICBjb25zdCB0cmlhbmdsZUxpbmVXaWR0aCA9IDAuNjtcblxuICAgICAgICBsZXQgc3RhcnQ6IG51bWJlcjtcbiAgICAgICAgbGV0IGVuZDogbnVtYmVyO1xuICAgICAgICBsZXQgdmFsUG9zOiBudW1iZXI7XG4gICAgICAgIGxldCBkaWFsSGVpZ2h0OiBudW1iZXI7XG5cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICBkaWFsSGVpZ2h0ID0gMTg7XG4gICAgICAgICAgICBzdGFydCA9IC0zICogTWF0aC5QSSAqIDAuNTtcbiAgICAgICAgICAgIGVuZCA9IDA7XG4gICAgICAgICAgICB2YWxQb3MgPSBzdGFydCArIHRvUmFkKHRoaXMuZGlzdGFuY2UgKiAyNzApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlhbEhlaWdodCA9IDI1O1xuICAgICAgICAgICAgc3RhcnQgPSBNYXRoLlBJIC0gMyAqIE1hdGguUEkgLyA4O1xuICAgICAgICAgICAgZW5kID0gMiAqIE1hdGguUEkgKyAzICogTWF0aC5QSSAvIDg7XG4gICAgICAgICAgICB2YWxQb3MgPSBzdGFydCArIHRvUmFkKHRoaXMuZGlzdGFuY2UgKiAzMTUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpYWxSYWRpdXMgPSBkaWFsSGVpZ2h0ICogMC41O1xuXG4gICAgICAgIGxldCBkaWFsQ2VudGVyWCA9IHdpZHRoICogMC41O1xuICAgICAgICBsZXQgZGlhbENlbnRlclkgPSBoZWlnaHQgKiAwLjUgKyAxO1xuICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJwYW5lbFwiKSB7XG4gICAgICAgICAgICBkaWFsQ2VudGVyWSArPSAxMDtcbiAgICAgICAgfSBlbHNlIGlmIChhcHBlYXJhbmNlID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIGlmIChzaG93bnVtYmVyKSBkaWFsQ2VudGVyWSAtPSBmb250c2l6ZSAtIDU7XG4gICAgICAgICAgICBpZiAoc2hvd25hbWUpIGRpYWxDZW50ZXJZICs9IGZvbnRzaXplIC0gNTtcbiAgICAgICAgICAgIGlmICh0cmlhbmdsZSkgZGlhbENlbnRlclkgKz0gdHJpYW5nbGVIZWlnaHQgLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICBpZiAoc2hvd25hbWUpIHtcbiAgICAgICAgICAgICAgICBkaWFsQ2VudGVyWSArPSA2O1xuICAgICAgICAgICAgICAgIGRpYWxDZW50ZXJYID0gMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3QgPSBbMCwgZGlhbENlbnRlclkgLSBkaWFsSGVpZ2h0ICogMC41LCB3aWR0aCwgZGlhbEhlaWdodF07XG4gICAgICAgIGNvbnN0IGFyY1N0YXJ0WCA9IGRpYWxDZW50ZXJYICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLmNvcyhzdGFydCkpO1xuICAgICAgICBjb25zdCBhcmNTdGFydFkgPSBkaWFsQ2VudGVyWSArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5zaW4oc3RhcnQpKTtcbiAgICAgICAgY29uc3QgYXJjRW5kWCA9IGRpYWxDZW50ZXJYICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLmNvcyhlbmQpKTtcbiAgICAgICAgY29uc3QgYXJjRW5kWSA9IGRpYWxDZW50ZXJZICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLnNpbihlbmQpKTtcbiAgICAgICAgY29uc3QgdmFsdWVQb3NYID0gZGlhbENlbnRlclggKyAoZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguY29zKHZhbFBvcykpO1xuICAgICAgICBjb25zdCB2YWx1ZVBvc1kgPSBkaWFsQ2VudGVyWSArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5zaW4odmFsUG9zKSk7XG4gICAgICAgIGNvbnN0IGVuZENhcFJhZGl1cyA9IDE7XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGxldCBwYW5lbE9mZnNldCA9IDA7XG5cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwicGFuZWxcIikge1xuICAgICAgICAgICAgcGFuZWxPZmZzZXQgPSA1O1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMC40O1xuICAgICAgICAgICAgcm91bmRlZFJlY3QoY3R4LCAxLCAxLCB3aWR0aCAtIDIsIGhlaWdodCAtIDIsIDUpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHBhbmVsY29sb3I7XG4gICAgICAgICAgICBmaWxsUm91bmRlZFJlY3QoY3R4LCAxLjIsIDEuMiwgd2lkdGggLSAyLjQsIDMwIC0gMC40LCBbNSwgNSwgMCwgMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYWN0aXZlID8gYWN0aXZlbmVlZGxlY29sb3IgOiBuZWVkbGVjb2xvcjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGN0eC5zdHJva2VTdHlsZTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kIGFyYyBlbmRjYXBzXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhhcmNTdGFydFgsIGFyY1N0YXJ0WSwgZW5kQ2FwUmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhhcmNFbmRYLCBhcmNFbmRZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kIGFyY1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBkaWFsUmFkaXVzLCBzdGFydCwgZW5kKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIGRyYXcgdmFsdWUgYXJjLCB3aGljaCBjaGFuZ2VzIGlmIHRyaWFuZ2xlIGlzIGVuYWJsZWRcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYWN0aXZlID8gYWN0aXZlZGlhbGNvbG9yIDogZGlhbGNvbG9yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3R4LnN0cm9rZVN0eWxlO1xuICAgICAgICBpZiAodHJpYW5nbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pZHBvaW50ID0gKHN0YXJ0ICsgZW5kKSAqIDAuNTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGFjdGl2ZSA/IGFjdGl2ZWRpYWxjb2xvciA6IGRpYWxjb2xvcjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IDAuNSkgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGRpYWxSYWRpdXMsIG1pZHBvaW50LCB2YWxQb3MpO1xuICAgICAgICAgICAgZWxzZSBjdHguYXJjKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSwgZGlhbFJhZGl1cywgdmFsUG9zLCBtaWRwb2ludCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkcmF3IHZhbHVlIGFyYyBlbmRjYXBcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMoYXJjU3RhcnRYLCBhcmNTdGFydFksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIC8vIGRyYXcgdmFsdWUgYXJjXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSwgZGlhbFJhZGl1cywgc3RhcnQsIHZhbFBvcyk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZHJhdyBkaWFsXG4gICAgICAgIC8vIGRyYXcgZGlhbCByb3VuZCBlbmRjYXBzXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGFjdGl2ZSA/IGFjdGl2ZW5lZWRsZWNvbG9yIDogbmVlZGxlY29sb3I7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjdHguc3Ryb2tlU3R5bGU7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModmFsdWVQb3NYLCB2YWx1ZVBvc1ksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAvLyBkcmF3IGRpYWwgbGluZVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZKTtcbiAgICAgICAgY3R4LmxpbmVUbyh2YWx1ZVBvc1gsIHZhbHVlUG9zWSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gYWRkIHRleHQgaWYgaXQgaXMgZW5hYmxlZFxuICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlID09PSBcInJlZ3VsYXJcIiA/IFwiXCIgOiBmb250ZmFjZX0gJHtmb250c2l6ZX1weCAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0ZXh0Y29sb3I7XG4gICAgICAgIGlmIChzaG93bmFtZSkge1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChzaG9ydG5hbWUsIDAsIHBhbmVsT2Zmc2V0ICsgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHNob3J0bmFtZSwgd2lkdGggKiAwLjUsIHBhbmVsT2Zmc2V0ICsgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd251bWJlcikge1xuICAgICAgICAgICAgY29uc3QgdGlueU9mZnNldCA9IGFwcGVhcmFuY2UgPT09IFwidGlueVwiID8gMTIgOiAwO1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmRpc3BsYXlWYWx1ZSwgdGlueU9mZnNldCwgaGVpZ2h0IC0gcGFuZWxPZmZzZXQsIHdpZHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuZGlzcGxheVZhbHVlLCB3aWR0aCAqIDAuNSwgaGVpZ2h0IC0gcGFuZWxPZmZzZXQsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3IHRyaWFuZ2xlIGlmIGl0IGlzIGVuYWJsZWRcbiAgICAgICAgaWYgKHRyaWFuZ2xlKSB7XG4gICAgICAgICAgICBpZiAoIWRpc3RhbmNlKSBjdHguZmlsbFN0eWxlID0gdHJpY29sb3I7XG4gICAgICAgICAgICBlbHNlIGlmICghYWN0aXZlKSBjdHguZmlsbFN0eWxlID0gZGlhbGNvbG9yO1xuICAgICAgICAgICAgZWxzZSBjdHguZmlsbFN0eWxlID0gYWN0aXZlZGlhbGNvbG9yO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlwUG9zaXRpb25YID0gZGlhbENlbnRlclggKyBkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5jb3MoLTMgKiBNYXRoLlBJIC8gNCkgLSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpcFBvc2l0aW9uWSA9IGRpYWxDZW50ZXJZICsgZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguc2luKC0zICogTWF0aC5QSSAvIDQpIC0gMTtcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHRpcFBvc2l0aW9uWCwgdGlwUG9zaXRpb25ZKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHRpcFBvc2l0aW9uWCAtIHRyaWFuZ2xlSGVpZ2h0LCB0aXBQb3NpdGlvblkpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odGlwUG9zaXRpb25YLCB0aXBQb3NpdGlvblkgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh0aXBQb3NpdGlvblgsIHRpcFBvc2l0aW9uWSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oZGlhbENlbnRlclggLSB0cmlhbmdsZUhlaWdodCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSAtIHRyaWFuZ2xlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKGRpYWxDZW50ZXJYICsgdHJpYW5nbGVIZWlnaHQsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJpYm9yZGVyY29sb3IgfHwgXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRyaWFuZ2xlTGluZVdpZHRoO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFZhbHVlRnJvbURlbHRhKGU6IFBvaW50ZXJEcmFnRXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWluLCBtbWF4IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBzdGVwUmFuZ2UgPSB0aGlzLnN0ZXBSYW5nZTtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSB0eXBlID09PSBcImVudW1cIiA/IDEgOiAodGhpcy5wcm9wcy5zdGVwIHx8IChtbWF4IC0gbW1pbikgLyB0cnVlU3RlcHMpO1xuICAgICAgICBjb25zdCBwcmV2U3RlcHMgPSB0eXBlID09PSBcImVudW1cIiA/IGUucHJldlZhbHVlIDogZS5wcmV2VmFsdWUgLyBzdGVwO1xuICAgICAgICBjb25zdCBkU3RlcHMgPSBNYXRoLnJvdW5kKChlLmZyb21ZIC0gZS55KSAvIHN0ZXBSYW5nZSk7XG4gICAgICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5taW4odHJ1ZVN0ZXBzLCBNYXRoLm1heCgwLCBwcmV2U3RlcHMgKyBkU3RlcHMpKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gc3RlcHM7XG4gICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5yb3VuZChzdGVwcyAqIHN0ZXAgKyBtbWluKTtcbiAgICAgICAgcmV0dXJuIHN0ZXBzICogc3RlcCArIG1taW47XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZS54IDwgdGhpcy5pbnRlcmFjdGlvblJlY3RbMF1cbiAgICAgICAgICAgIHx8IGUueCA+IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl1cbiAgICAgICAgICAgIHx8IGUueSA8IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdXG4gICAgICAgICAgICB8fCBlLnkgPiB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdXG4gICAgICAgICkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlckRyYWdFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2luVG91Y2gpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbURlbHRhKGUpO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUpIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5pbXBvcnQgeyBhdG9kYiB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmludGVyZmFjZSBMaXZlTWV0ZXJQcm9wcyBleHRlbmRzIExpdmVQcm9wcyB7XG4gICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB8IFwiaG9yaXpvbnRhbFwiO1xuICAgIG1vZGU6IFwiZGVjaWJlbFwiIHwgXCJsaW5lYXJcIjtcbiAgICBjbGlwX3NpemU6IFwibm9ybWFsXCIgfCBcImV4dGVuZGVkXCI7XG4gICAgaW50ZXJ2YWw6IG51bWJlcjtcbiAgICBiZ2NvbG9yOiBzdHJpbmc7XG4gICAgaW5hY3RpdmVjb2xkY29sb3I6IHN0cmluZztcbiAgICBpbmFjdGl2ZXdhcm1jb2xvcjogc3RyaW5nO1xuICAgIGNvbGRjb2xvcjogc3RyaW5nO1xuICAgIHdhcm1jb2xvcjogc3RyaW5nO1xuICAgIGhvdGNvbG9yOiBzdHJpbmc7XG4gICAgb3ZlcmxvYWRjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlTWV0ZXIgZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVNZXRlclByb3BzPiB7XG4gICAgc3RhdGljIGdldCBwcm9wcygpOiBMaXZlTWV0ZXJQcm9wcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wcm9wcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLm1ldGVyflwiLFxuICAgICAgICAgICAgd2lkdGg6IDEyMCxcbiAgICAgICAgICAgIGhlaWdodDogMTUsXG4gICAgICAgICAgICBtb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgY2xpcF9zaXplOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IDIwLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIGJnY29sb3I6IFwicmdiYSg0MCwgNDAsIDQwLCAxKVwiLFxuICAgICAgICAgICAgaW5hY3RpdmVjb2xkY29sb3I6IFwicmdiYSgxMzAsIDEzMCwgMTMwLCAxKVwiLFxuICAgICAgICAgICAgaW5hY3RpdmV3YXJtY29sb3I6IFwicmdiYSgxNDksIDE0OSwgMTQ5LCAxKVwiLFxuICAgICAgICAgICAgY29sZGNvbG9yOiBcInJnYmEoMTIsIDI0OCwgMTAwLCAxKVwiLFxuICAgICAgICAgICAgd2FybWNvbG9yOiBcInJnYmEoMTk1LCAyNDgsIDEwMCwgMSlcIixcbiAgICAgICAgICAgIGhvdGNvbG9yOiBcInJnYmEoMjU1LCAxOTMsIDEwLCAxKVwiLFxuICAgICAgICAgICAgb3ZlcmxvYWRjb2xvcjogXCJyZ2JhKDI1NSwgMTAsIDEwLCAxKVwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIHBhaW50VmFsdWU6IG51bWJlciA9IDA7XG4gICAgbWF4VmFsdWU6IG51bWJlciA9IDA7XG4gICAgcGFpbnRUaW1lcjogbnVtYmVyO1xuICAgIG1heFRpbWVyOiBudW1iZXI7XG4gICAgZ2V0IGRpc3RhbmNlKCkge1xuICAgICAgICBjb25zdCB7IG1vZGUsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKG1vZGUgPT09IFwiZGVjaWJlbFwiID8gTWF0aC5tYXgoLTcwLCB2YWx1ZSkgOiBhdG9kYihNYXRoLmFicyh2YWx1ZSkpKSAvIDcwICsgMTtcbiAgICB9XG5cbiAgICBwYWludChwYWludEluPzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnBhaW50VmFsdWUgPSBNYXRoLm1heCh0aGlzLnBhaW50VmFsdWUsIHRoaXMuZGlzdGFuY2UpO1xuICAgICAgICBpZiAoIXBhaW50SW4pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYWludFRpbWVyKSB0aGlzLnBhaW50VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucGFpbnQodHJ1ZSksIHRoaXMucHJvcHMuaW50ZXJ2YWwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFpbnRUaW1lciA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgICAgIGNsaXBfc2l6ZSxcbiAgICAgICAgICAgIGJnY29sb3IsXG4gICAgICAgICAgICBpbmFjdGl2ZWNvbGRjb2xvcixcbiAgICAgICAgICAgIGluYWN0aXZld2FybWNvbG9yLFxuICAgICAgICAgICAgY29sZGNvbG9yLFxuICAgICAgICAgICAgd2FybWNvbG9yLFxuICAgICAgICAgICAgaG90Y29sb3IsXG4gICAgICAgICAgICBvdmVybG9hZGNvbG9yXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcblxuICAgICAgICBjb25zdCBjbGlwID0gY2xpcF9zaXplID09PSBcIm5vcm1hbFwiID8gMTAgOiAyMDtcbiAgICAgICAgY29uc3QgcGFpbnRWYWx1ZSA9IHRoaXMucGFpbnRWYWx1ZTtcbiAgICAgICAgaWYgKHBhaW50VmFsdWUgPiB0aGlzLm1heFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1heFZhbHVlID0gcGFpbnRWYWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1heFRpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5tYXhUaW1lcik7XG4gICAgICAgICAgICB0aGlzLm1heFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLm1heFZhbHVlID0gdGhpcy5wYWludFZhbHVlLCAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXhWYWx1ZSA9IHRoaXMubWF4VmFsdWU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICBjb25zdCB3YXJtU3RvcCA9IHdpZHRoIC0gY2xpcCAtIDE7XG4gICAgICAgICAgICBjb25zdCBob3RTdG9wID0gd2lkdGggLSBjbGlwO1xuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgd2lkdGgsIDApO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGFjdGl2ZSA/IGNvbGRjb2xvciA6IGluYWN0aXZlY29sZGNvbG9yKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCh3YXJtU3RvcCAvIHdpZHRoLCBhY3RpdmUgPyB3YXJtY29sb3IgOiBpbmFjdGl2ZXdhcm1jb2xvcik7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoaG90U3RvcCAvIHdpZHRoLCBhY3RpdmUgPyBob3Rjb2xvciA6IGluYWN0aXZld2FybWNvbG9yKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBhY3RpdmUgPyBvdmVybG9hZGNvbG9yIDogaW5hY3RpdmV3YXJtY29sb3IpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJnY29sb3I7XG4gICAgICAgICAgICBpZiAocGFpbnRWYWx1ZSA8IDEpIGN0eC5maWxsUmVjdCgwLCAwLCB3YXJtU3RvcCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGlmIChwYWludFZhbHVlIDwgMikgY3R4LmZpbGxSZWN0KGhvdFN0b3AsIDAsIGNsaXAsIGhlaWdodCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgICAgICAgICBpZiAocGFpbnRWYWx1ZSA+IDApIGN0eC5maWxsUmVjdCgwLCAwLCBNYXRoLm1pbigxLCBwYWludFZhbHVlKSAqIHdhcm1TdG9wLCBoZWlnaHQpO1xuICAgICAgICAgICAgaWYgKHBhaW50VmFsdWUgPiAxKSBjdHguZmlsbFJlY3QoaG90U3RvcCwgMCwgTWF0aC5taW4oMSwgKHBhaW50VmFsdWUgLSAxKSAqIDEwKSAqIGNsaXAsIGhlaWdodCk7XG4gICAgICAgICAgICBpZiAobWF4VmFsdWUgPiBwYWludFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heFZhbHVlIDw9IDEpIGN0eC5maWxsUmVjdChNYXRoLm1pbih3YXJtU3RvcCAtIDEsIG1heFZhbHVlICogd2FybVN0b3ApLCAwLCAxLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgIGlmIChtYXhWYWx1ZSA+IDEpIGN0eC5maWxsUmVjdChNYXRoLm1pbih3aWR0aCAtIDEsIGhvdFN0b3AgKyAobWF4VmFsdWUgLSAxKSAqIDEwICogY2xpcCksIDAsIDEsIGhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB3YXJtU3RvcCA9IGNsaXAgKyAxO1xuICAgICAgICAgICAgY29uc3QgaG90U3RvcCA9IGNsaXA7XG4gICAgICAgICAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBoZWlnaHQsIDAsIDApO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGFjdGl2ZSA/IGNvbGRjb2xvciA6IGluYWN0aXZlY29sZGNvbG9yKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgoaGVpZ2h0IC0gd2FybVN0b3ApIC8gaGVpZ2h0LCBhY3RpdmUgPyB3YXJtY29sb3IgOiBpbmFjdGl2ZXdhcm1jb2xvcik7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoKGhlaWdodCAtIGhvdFN0b3ApIC8gaGVpZ2h0LCBhY3RpdmUgPyBob3Rjb2xvciA6IGluYWN0aXZld2FybWNvbG9yKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBhY3RpdmUgPyBvdmVybG9hZGNvbG9yIDogaW5hY3RpdmV3YXJtY29sb3IpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJnY29sb3I7XG4gICAgICAgICAgICBpZiAocGFpbnRWYWx1ZSA8IDEpIGN0eC5maWxsUmVjdCgwLCB3YXJtU3RvcCwgd2lkdGgsIGhlaWdodCAtIHdhcm1TdG9wKTtcbiAgICAgICAgICAgIGlmIChwYWludFZhbHVlIDwgMikgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBob3RTdG9wKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICAgICAgICAgIGlmIChwYWludFZhbHVlID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdIZWlnaHQgPSBNYXRoLm1pbigxLCBwYWludFZhbHVlKSAqIChoZWlnaHQgLSB3YXJtU3RvcCk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIGhlaWdodCAtIGRyYXdIZWlnaHQsIHdpZHRoLCBkcmF3SGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYWludFZhbHVlID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdIZWlnaHQgPSBNYXRoLm1pbigxLCAocGFpbnRWYWx1ZSAtIDEpICogMTApICogY2xpcDtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgaG90U3RvcCAtIGRyYXdIZWlnaHQsIHdpZHRoLCBkcmF3SGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXhWYWx1ZSA+IHBhaW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4VmFsdWUgPD0gMSkgY3R4LmZpbGxSZWN0KDAsIGhlaWdodCAtIG1heFZhbHVlICogKGhlaWdodCAtIHdhcm1TdG9wKSwgd2lkdGgsIDEpO1xuICAgICAgICAgICAgICAgIGlmIChtYXhWYWx1ZSA+IDEpIGN0eC5maWxsUmVjdCgwLCBNYXRoLm1heCgwLCBob3RTdG9wIC0gKG1heFZhbHVlIC0gMSkgKiAxMCAqIGNsaXApLCB3aWR0aCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYWludFZhbHVlID0gMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZU51bWJveFByb3BzIGV4dGVuZHMgTGl2ZVByb3BzIHtcbiAgICBmb250bmFtZTogc3RyaW5nO1xuICAgIGZvbnRzaXplOiBudW1iZXI7XG4gICAgZm9udGZhY2U6IFwicmVndWxhclwiIHwgXCJib2xkXCIgfCBcIml0YWxpY1wiIHwgXCJib2xkIGl0YWxpY1wiO1xuICAgIGFwcGVhcmFuY2U6IFwic2xpZGVyXCIgfCBcInRyaWFuZ2xlXCIgfCBcImRlZmF1bHRcIjtcbiAgICBhY3RpdmViZ2NvbG9yOiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dGNvbG9yOiBzdHJpbmc7XG4gICAgdHJpY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmV0cmljb2xvcjogc3RyaW5nO1xuICAgIHRyaWNvbG9yMjogc3RyaW5nO1xuICAgIGFjdGl2ZXRyaWNvbG9yMjogc3RyaW5nO1xuICAgIGFjdGl2ZXNsaWRlcmNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVOdW1ib3ggZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVOdW1ib3hQcm9wcz4ge1xuICAgIHN0YXRpYyBnZXQgcHJvcHMoKTogTGl2ZU51bWJveFByb3BzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnByb3BzLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUubnVtYm94XCIsXG4gICAgICAgICAgICB3aWR0aDogNDUsXG4gICAgICAgICAgICBoZWlnaHQ6IDE1LFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMCxcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0cmljb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjI6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZldHJpY29sb3IyOiBcInJnYmEoMTA5LCAyMTUsIDI1NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXNsaWRlcmNvbG9yOiBcInJnYmEoMTA5LCAyMTUsIDI1NSwgMSlcIixcbiAgICAgICAgICAgIG1taW46IDAsXG4gICAgICAgICAgICBtbWF4OiAxMjcsXG4gICAgICAgICAgICB0eXBlOiBcImludFwiLFxuICAgICAgICAgICAgdW5pdHN0eWxlOiBcImludFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBnZXQgdHJ1ZVN0ZXBzKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHN0ZXBzLCBzdGVwIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBmdWxsID0gMTAwO1xuICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gdGhpcy5wcm9wcy5lbnVtLmxlbmd0aCA6IHR5cGUgPT09IFwiaW50XCIgPyBtbWF4IC0gbW1pbiA6IGZ1bGw7XG4gICAgICAgIGlmIChzdGVwKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiB0aGlzLnByb3BzLmVudW0ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBNYXRoLnJvdW5kKHN0ZXApKSwgbWF4U3RlcHMpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIHN0ZXApLCBtYXhTdGVwcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ZXBzKSByZXR1cm4gTWF0aC5taW4oc3RlcHMsIG1heFN0ZXBzKTtcbiAgICAgICAgcmV0dXJuIG1heFN0ZXBzO1xuICAgIH1cbiAgICBnZXQgZGlzdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IHZhbHVlIC8gdGhpcy5wcm9wcy5lbnVtLmxlbmd0aCA6ICh2YWx1ZSAtIG1taW4pIC8gKG1tYXggLSBtbWluKTtcbiAgICB9XG4gICAgZ2V0IHN0ZXBSYW5nZSgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCBzdGVwIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBmdWxsID0gMTAwO1xuICAgICAgICBpZiAoc3RlcCkgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gZnVsbCAvIHRoaXMucHJvcHMuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gTWF0aC5yb3VuZChzdGVwKSAvIChtbWF4IC0gbW1pbikgKiBmdWxsIDogc3RlcCAvIChtbWF4IC0gbW1pbikgKiBmdWxsO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgcmV0dXJuIGZ1bGwgLyB0cnVlU3RlcHM7XG4gICAgfVxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgIGZvY3VzLFxuICAgICAgICAgICAgZm9udG5hbWUsXG4gICAgICAgICAgICBmb250c2l6ZSxcbiAgICAgICAgICAgIGZvbnRmYWNlLFxuICAgICAgICAgICAgYXBwZWFyYW5jZSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBib3JkZXJjb2xvcixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0ZXh0Y29sb3IsXG4gICAgICAgICAgICB0cmljb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZXRyaWNvbG9yLFxuICAgICAgICAgICAgdHJpY29sb3IyLFxuICAgICAgICAgICAgYWN0aXZldHJpY29sb3IyLFxuICAgICAgICAgICAgYWN0aXZlc2xpZGVyY29sb3JcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2U7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IHRoaXMuZGlzcGxheVZhbHVlO1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBhY3RpdmViZ2NvbG9yO1xuICAgICAgICBjdHgucmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAvLyBkcmF3IGJvcmRlciAoZXZlbnR1YWxseSB3ZSBtaWdodCBuZWVkIHRvIHJlZGVmaW5lIHRoZSBzaGFwZSlcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGZvY3VzID8gZm9jdXNib3JkZXJjb2xvciA6IGJvcmRlcmNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwic2xpZGVyXCIgJiYgYWN0aXZlICYmIGRpc3RhbmNlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYWN0aXZlc2xpZGVyY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoMC41LCAwLjUsIGRpc3RhbmNlICogd2lkdGggLSAxLCBoZWlnaHQgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJ0cmlhbmdsZVwiKSB7XG4gICAgICAgICAgICBjb25zdCB0cmlhbmdsZUhlaWdodCA9IDg7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYWN0aXZlID8gKGRpc3RhbmNlID8gYWN0aXZldHJpY29sb3IyIDogYWN0aXZldHJpY29sb3IpIDogKGRpc3RhbmNlID8gdHJpY29sb3IyIDogdHJpY29sb3IpO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh3aWR0aCAtIHRyaWFuZ2xlSGVpZ2h0IC0gMC41LCBoZWlnaHQgKiAwLjUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCAtIDAuNSwgMC41KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8od2lkdGggLSAwLjUsIGhlaWdodCAtIDAuNSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRpc3BsYXkgdGhlIHRleHRcbiAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dChkaXNwbGF5VmFsdWUsIHdpZHRoICogMC41LCBoZWlnaHQgKiAwLjUsIHdpZHRoKTtcbiAgICB9XG4gICAgZ2V0VmFsdWVGcm9tRGVsdGEoZTogUG9pbnRlckRyYWdFdmVudCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1taW4sIG1tYXggfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHN0ZXBSYW5nZSA9IHRoaXMuc3RlcFJhbmdlO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgY29uc3Qgc3RlcCA9IHR5cGUgPT09IFwiZW51bVwiID8gMSA6ICh0aGlzLnByb3BzLnN0ZXAgfHwgKG1tYXggLSBtbWluKSAvIHRydWVTdGVwcyk7XG4gICAgICAgIGNvbnN0IHByZXZTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gZS5wcmV2VmFsdWUgOiBlLnByZXZWYWx1ZSAvIHN0ZXA7XG4gICAgICAgIGNvbnN0IGRTdGVwcyA9IE1hdGgucm91bmQoKGUuZnJvbVkgLSBlLnkpIC8gc3RlcFJhbmdlKTtcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBNYXRoLm1pbih0cnVlU3RlcHMsIE1hdGgubWF4KDAsIHByZXZTdGVwcyArIGRTdGVwcykpO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiBzdGVwcztcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLnJvdW5kKHN0ZXBzICogc3RlcCArIG1taW4pO1xuICAgICAgICByZXR1cm4gc3RlcHMgKiBzdGVwICsgbW1pbjtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5faW5Ub3VjaCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tRGVsdGEoZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcblxuaW50ZXJmYWNlIExpdmVTbGlkZXJQcm9wcyBleHRlbmRzIExpdmVQcm9wcyB7XG4gICAgcmVsYXRpdmU6IGJvb2xlYW47XG4gICAgZm9udG5hbWU6IHN0cmluZztcbiAgICBmb250c2l6ZTogbnVtYmVyO1xuICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIHwgXCJob3Jpem9udGFsXCI7XG4gICAgc2hvd25hbWU6IGJvb2xlYW47XG4gICAgc2hvd251bWJlcjogYm9vbGVhbjtcbiAgICBzbGlkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRleHRjb2xvcjogc3RyaW5nO1xuICAgIHRyaWJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgdHJpb25jb2xvcjogc3RyaW5nO1xuICAgIHRyaWNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVTbGlkZXIgZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVTbGlkZXJQcm9wcz4ge1xuICAgIHN0YXRpYyBnZXQgcHJvcHMoKTogTGl2ZVNsaWRlclByb3BzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnByb3BzLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUuc2xpZGVyXCIsXG4gICAgICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDkwLFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMixcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICBzaG93bmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dudW1iZXI6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXJjb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0Y29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgdHJpb25jb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICByZWxhdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBtbWluOiAwLFxuICAgICAgICAgICAgbW1heDogMTI3LFxuICAgICAgICAgICAgdHlwZTogXCJpbnRcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBfaW5Ub3VjaDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGludGVyYWN0aW9uUmVjdDogbnVtYmVyW10gPSBbMCwgMCwgMCwgMF07XG5cbiAgICBnZXQgdHJ1ZVN0ZXBzKCkge1xuICAgICAgICBjb25zdCB7IG9yaWVudGF0aW9uLCB0eXBlLCBtbWF4LCBtbWluLCBzdGVwcywgc3RlcCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZnVsbCA9IHRoaXMuaW50ZXJhY3Rpb25SZWN0W29yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyAzIDogMl07XG4gICAgICAgIGNvbnN0IG1heFN0ZXBzID0gdHlwZSA9PT0gXCJlbnVtXCIgPyB0aGlzLnByb3BzLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IG1tYXggLSBtbWluIDogZnVsbDtcbiAgICAgICAgaWYgKHN0ZXApIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHRoaXMucHJvcHMuZW51bS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIE1hdGgucm91bmQoc3RlcCkpLCBtYXhTdGVwcyk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5mbG9vcigobW1heCAtIG1taW4pIC8gc3RlcCksIG1heFN0ZXBzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RlcHMpIHJldHVybiBNYXRoLm1pbihzdGVwcywgbWF4U3RlcHMpO1xuICAgICAgICByZXR1cm4gbWF4U3RlcHM7XG4gICAgfVxuICAgIGdldCBkaXN0YW5jZSgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gdmFsdWUgLyB0aGlzLnByb3BzLmVudW0ubGVuZ3RoIDogKHZhbHVlIC0gbW1pbikgLyAobW1heCAtIG1taW4pO1xuICAgIH1cbiAgICBnZXQgc3RlcFJhbmdlKCkge1xuICAgICAgICBjb25zdCB7IG9yaWVudGF0aW9uLCB0eXBlLCBtbWF4LCBtbWluLCBzdGVwIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBmdWxsID0gdGhpcy5pbnRlcmFjdGlvblJlY3Rbb3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IDMgOiAyXTtcbiAgICAgICAgaWYgKHN0ZXApIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IGZ1bGwgLyB0aGlzLnByb3BzLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IE1hdGgucm91bmQoc3RlcCkgLyAobW1heCAtIG1taW4pICogZnVsbCA6IHN0ZXAgLyAobW1heCAtIG1taW4pICogZnVsbDtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIHJldHVybiBmdWxsIC8gdHJ1ZVN0ZXBzO1xuICAgIH1cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBmb250bmFtZSxcbiAgICAgICAgICAgIGZvbnRzaXplLFxuICAgICAgICAgICAgZm9udGZhY2UsXG4gICAgICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgICAgIHNob3duYW1lLFxuICAgICAgICAgICAgc2hvd251bWJlcixcbiAgICAgICAgICAgIHNsaWRlcmNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0cmlvbmNvbG9yLFxuICAgICAgICAgICAgdHJpY29sb3IsXG4gICAgICAgICAgICBzaG9ydG5hbWVcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBjb25zdCBsaW5lV2lkdGggPSAwLjU7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSA4O1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2U7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IHRoaXMuZGlzcGxheVZhbHVlO1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc2xpZGVyY29sb3I7XG5cbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8od2lkdGggKiAwLjUsIGZvbnRzaXplICsgcGFkZGluZyk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoICogMC41LCBoZWlnaHQgLSAoZm9udHNpemUgKyBwYWRkaW5nKSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uV2lkdGggPSB3aWR0aCAqIDAuNTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0ID0gW1xuICAgICAgICAgICAgICAgIHdpZHRoICogMC41IC0gaW50ZXJhY3Rpb25XaWR0aCAqIDAuNSxcbiAgICAgICAgICAgICAgICBmb250c2l6ZSArIHBhZGRpbmcsXG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25XaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQgLSAyICogKGZvbnRzaXplICsgcGFkZGluZylcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJpYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBjb25zdCB0cmlPcmlnaW46IFtudW1iZXIsIG51bWJlcl0gPSBbXG4gICAgICAgICAgICAgICAgd2lkdGggKiAwLjUgKyBsaW5lV2lkdGggKiAwLjUgKyAwLjUsXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3RbMV0gLSA0ICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbM10gKiAoMSAtIGRpc3RhbmNlKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odHJpT3JpZ2luWzBdLCB0cmlPcmlnaW5bMV0gKyA0KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgOCwgdHJpT3JpZ2luWzFdKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgOCwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgNCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLl9pblRvdWNoID8gdHJpb25jb2xvciA6IHRyaWNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICAgICAgaWYgKHNob3duYW1lKSBjdHguZmlsbFRleHQoc2hvcnRuYW1lLCB3aWR0aCAqIDAuNSwgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIGlmIChzaG93bnVtYmVyKSBjdHguZmlsbFRleHQoZGlzcGxheVZhbHVlLCB3aWR0aCAqIDAuNSwgaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHBhZGRpbmcsIGhlaWdodCAqIDAuNSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoIC0gcGFkZGluZywgaGVpZ2h0ICogMC41KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25XaWR0aCA9IGhlaWdodCAqIDAuNTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0ID0gW1xuICAgICAgICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICogMC41IC0gaW50ZXJhY3Rpb25XaWR0aCAqIDAuNSxcbiAgICAgICAgICAgICAgICB3aWR0aCAtIDIgKiBwYWRkaW5nLFxuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uV2lkdGhcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJpYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBjb25zdCB0cmlPcmlnaW46IFtudW1iZXIsIG51bWJlcl0gPSBbXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3RbMF0gKyB0aGlzLmludGVyYWN0aW9uUmVjdFsyXSAqIGRpc3RhbmNlIC0gNCxcbiAgICAgICAgICAgICAgICBoZWlnaHQgKiAwLjUgKyBsaW5lV2lkdGggKiAwLjUgKyAyXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0cmlPcmlnaW5bMF0sIHRyaU9yaWdpblsxXSArIDgpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0gKyA0LCB0cmlPcmlnaW5bMV0pO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0gKyA4LCB0cmlPcmlnaW5bMV0gKyA4KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdLCB0cmlPcmlnaW5bMV0gKyA4KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuX2luVG91Y2ggPyB0cmlvbmNvbG9yIDogdHJpY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlID09PSBcInJlZ3VsYXJcIiA/IFwiXCIgOiBmb250ZmFjZX0gJHtmb250c2l6ZX1weCAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0ZXh0Y29sb3I7XG4gICAgICAgICAgICBpZiAoc2hvd25hbWUpIGN0eC5maWxsVGV4dChzaG9ydG5hbWUsIHdpZHRoICogMC41LCBmb250c2l6ZSwgd2lkdGgpO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgaWYgKHNob3dudW1iZXIpIGN0eC5maWxsVGV4dChkaXNwbGF5VmFsdWUsIDQsIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFZhbHVlRnJvbVBvcyhlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcbiAgICAgICAgY29uc3QgeyBvcmllbnRhdGlvbiwgdHlwZSwgbW1pbiwgbW1heCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgc3RlcFJhbmdlID0gdGhpcy5zdGVwUmFuZ2U7XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICBjb25zdCBzdGVwID0gdGhpcy5wcm9wcy5zdGVwIHx8IChtbWF4IC0gbW1pbikgLyB0cnVlU3RlcHM7XG4gICAgICAgIGxldCBzdGVwcyA9IE1hdGgucm91bmQoKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyB0aGlzLmludGVyYWN0aW9uUmVjdFszXSAtIChlLnkgLSB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSkgOiBlLnggLSB0aGlzLmludGVyYWN0aW9uUmVjdFswXSkgLyBzdGVwUmFuZ2UpO1xuICAgICAgICBzdGVwcyA9IE1hdGgubWluKHRydWVTdGVwcywgTWF0aC5tYXgoMCwgc3RlcHMpKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gc3RlcHM7XG4gICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5yb3VuZChzdGVwcyAqIHN0ZXAgKyBtbWluKTtcbiAgICAgICAgcmV0dXJuIHN0ZXBzICogc3RlcCArIG1taW47XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZS54IDwgdGhpcy5pbnRlcmFjdGlvblJlY3RbMF1cbiAgICAgICAgICAgIHx8IGUueCA+IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl1cbiAgICAgICAgICAgIHx8IGUueSA8IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdXG4gICAgICAgICAgICB8fCBlLnkgPiB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdXG4gICAgICAgICkgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tUG9zKGUpO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHZhbHVlKSB0aGlzLnNldFZhbHVlKHRoaXMuZ2V0VmFsdWVGcm9tUG9zKGUpKTtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEcmFnID0gKGU6IFBvaW50ZXJEcmFnRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9pblRvdWNoKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRWYWx1ZUZyb21Qb3MoZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcblxuaW50ZXJmYWNlIExpdmVUYWJQcm9wcyBleHRlbmRzIExpdmVQcm9wcyB7XG4gICAgZm9udG5hbWU6IHN0cmluZztcbiAgICBmb250c2l6ZTogbnVtYmVyO1xuICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBhY3RpdmViZ2NvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZlYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYmdjb2xvcjogc3RyaW5nO1xuICAgIGJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRleHRjb2xvcjogc3RyaW5nO1xuICAgIHRleHRvbmNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZldGV4dGNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZldGV4dG9uY29sb3I6IHN0cmluZztcbiAgICBtb2RlOiBcImVxdWFsXCIgfCBcInByb3BvcnRpb25hbFwiO1xuICAgIHNwYWNpbmdfeDogbnVtYmVyO1xuICAgIHNwYWNpbmdfeTogbnVtYmVyO1xuICAgIG11bHRpbGluZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVRhYiBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZVRhYlByb3BzPiB7XG4gICAgc3RhdGljIGdldCBwcm9wcygpOiBMaXZlVGFiUHJvcHMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucHJvcHMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS50YWJcIixcbiAgICAgICAgICAgIHdpZHRoOiA5MCxcbiAgICAgICAgICAgIGhlaWdodDogNDUsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEwLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3I6IFwicmdiYSgyNTUsIDE4MSwgNTAsIDEpXCIsXG4gICAgICAgICAgICBiZ2NvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIGJnb25jb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDkwLCA5MCwgOTAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0b25jb2xvcjogXCJyZ2JhKDkwLCA5MCwgOTAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0Y29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZldGV4dG9uY29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuICAgICAgICAgICAgbW9kZTogXCJlcXVhbFwiLFxuICAgICAgICAgICAgZW51bTogW1wib25lXCIsIFwidHdvXCIsIFwidGhyZWVcIl0sXG4gICAgICAgICAgICBzcGFjaW5nX3g6IDYsXG4gICAgICAgICAgICBzcGFjaW5nX3k6IDYsXG4gICAgICAgICAgICBtdWx0aWxpbmU6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB0YWJSZWN0czogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl1bXSA9IFtdO1xuXG4gICAgZ2V0VGFiUmVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgbXVsdGlsaW5lLFxuICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgIHNwYWNpbmdfeCxcbiAgICAgICAgICAgIHNwYWNpbmdfeVxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZW51bXMgPSB0aGlzLnByb3BzLmVudW07XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IDQ7XG4gICAgICAgIGNvbnN0IG1pbkhlaWdodCA9IDEwO1xuICAgICAgICBjb25zdCBjb3VudCA9IGVudW1zLmxlbmd0aDtcbiAgICAgICAgbGV0IGNvdW50UGVyTGluZSA9IGNvdW50O1xuICAgICAgICBsZXQgbGluZXMgPSAxO1xuICAgICAgICBsZXQgc3RlcCA9IGhlaWdodCAvIGxpbmVzO1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSAwO1xuICAgICAgICBsZXQgcmVjdFdpZHRoID0gMDtcbiAgICAgICAgY29uc3Qgc3BhY2luZ1ggPSBzcGFjaW5nX3ggKiAwLjU7XG4gICAgICAgIGNvbnN0IHNwYWNpbmdZID0gc3BhY2luZ195ICogMC41O1xuXG4gICAgICAgIGlmIChtdWx0aWxpbmUgJiYgaGVpZ2h0ID49IDIgKiBtaW5IZWlnaHQpIHtcbiAgICAgICAgICAgIGxpbmVzID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oY291bnQsIE1hdGguZmxvb3IoaGVpZ2h0IC8gbWluSGVpZ2h0KSkpO1xuICAgICAgICAgICAgY291bnRQZXJMaW5lID0gTWF0aC5jZWlsKGNvdW50IC8gbGluZXMpO1xuICAgICAgICAgICAgLy8gaWYgdGhlcmUncyBub3QgZW5vdWdoIGhlaWdodCwgaW5jcmVhc2UgdGhlIG51bWJlciBvZiB0YWJzIHBlciByb3dcbiAgICAgICAgICAgIHdoaWxlIChsaW5lcyAqIGNvdW50UGVyTGluZSA8IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgY291bnRQZXJMaW5lKys7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmVzID4gMSkgbGluZXMtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3MgZXh0cmEgaGVpZ2h0LCByZWR1Y2UgdGhlIG51bWJlciBvZiByb3dzXG4gICAgICAgICAgICB3aGlsZSAobGluZXMgKiBjb3VudFBlckxpbmUgPiBjb3VudCAmJiAobGluZXMgLSAxKSAqIGNvdW50UGVyTGluZSA+PSBjb3VudCkge1xuICAgICAgICAgICAgICAgIGxpbmVzLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGVwID0gaGVpZ2h0IC8gbGluZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vZGUgPT09IFwiZXF1YWxcIikge1xuICAgICAgICAgICAgaW50ZXJ2YWwgPSB3aWR0aCAvIGNvdW50UGVyTGluZTtcbiAgICAgICAgICAgIHJlY3RXaWR0aCA9IGludGVydmFsIC0gc3BhY2luZ1g7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlJlY3RzW2ldID0gW1xuICAgICAgICAgICAgICAgICAgICAoaSAlIGNvdW50UGVyTGluZSkgKiBpbnRlcnZhbCArIHNwYWNpbmdYICogMC41LFxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGkgLyBjb3VudFBlckxpbmUpICogc3RlcCArIHNwYWNpbmdZICogMC41LFxuICAgICAgICAgICAgICAgICAgICByZWN0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIChoZWlnaHQgLyBsaW5lcykgLSBzcGFjaW5nWVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0V2lkdGhzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBzcGFjZSA9IHdpZHRoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpICogY291bnRQZXJMaW5lOyBqIDwgTWF0aC5taW4oKGkgKyAxKSAqIGNvdW50UGVyTGluZSwgY291bnQpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dERpbWVuc2lvbnMgPSB0aGlzLmN0eC5tZWFzdXJlVGV4dChlbnVtc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgIHRleHRXaWR0aHNbal0gPSB0ZXh0RGltZW5zaW9ucy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgKz0gdGV4dFdpZHRoc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgc3BhY2UgLT0gMiAqIG1hcmdpbiArIHNwYWNpbmdYO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdXNlZCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKiBjb3VudFBlckxpbmU7IGogPCBNYXRoLm1pbigoaSArIDEpICogY291bnRQZXJMaW5lLCBjb3VudCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWN0U3BhY2UgPSB0ZXh0V2lkdGhzW2pdIC8gdG90YWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiUmVjdHNbal0gPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VkICsgc3BhY2luZ1ggKiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpICogc3RlcCArIHNwYWNpbmdZICogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2UgKiByZWN0U3BhY2UgKyAyICogbWFyZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IC8gbGluZXMgLSBzcGFjaW5nWVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB1c2VkICs9IHRoaXMudGFiUmVjdHNbal1bMl0gKyBzcGFjaW5nWDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudGFiUmVjdHM7XG4gICAgfVxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3IsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgYmdvbmNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdGV4dG9uY29sb3IsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0Y29sb3IsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0b25jb2xvcixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGVudW1zID0gdGhpcy5wcm9wcy5lbnVtO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY29uc3QgdGFiUmVjdHMgPSB0aGlzLmdldFRhYlJlY3RzKCk7XG5cbiAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSAwLjU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkJvcmRlckNvbG9yID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW51bXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkJnQ29sb3IgPSBhY3RpdmUgPyAodmFsdWUgPT09IGkgPyBhY3RpdmViZ29uY29sb3IgOiBhY3RpdmViZ2NvbG9yKSA6ICh2YWx1ZSA9PT0gaSA/IGJnb25jb2xvciA6IGJnY29sb3IpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJ1dHRvbkJnQ29sb3I7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgucmVjdCguLi50YWJSZWN0c1tpXSk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYnV0dG9uQm9yZGVyQ29sb3I7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Zm9udGZhY2UgPT09IFwicmVndWxhclwiID8gXCJcIiA6IGZvbnRmYWNlfSAke2ZvbnRzaXplfXB4ICR7Zm9udG5hbWV9LCBzYW5zLXNlcmlmYDtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYWN0aXZlID8gKHZhbHVlID09PSBpID8gYWN0aXZldGV4dG9uY29sb3IgOiBhY3RpdmV0ZXh0Y29sb3IpIDogKHZhbHVlID09PSBpID8gdGV4dG9uY29sb3IgOiB0ZXh0Y29sb3IpO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGVudW1zW2ldLCB0YWJSZWN0c1tpXVswXSArIHRhYlJlY3RzW2ldWzJdICogMC41LCB0YWJSZWN0c1tpXVsxXSArIHRhYlJlY3RzW2ldWzNdICogMC41KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9IChlOiBQb2ludGVyRG93bkV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiUmVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLnRhYlJlY3RzW2ldO1xuICAgICAgICAgICAgaWYgKGUueCA+PSByZWN0WzBdICYmIGUueCA8PSByZWN0WzJdICsgcmVjdFswXSAmJiBlLnkgPj0gcmVjdFsxXSAmJiBlLnkgPD0gcmVjdFszXSArIHJlY3RbMV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKGkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlckRvd24oZSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcbmltcG9ydCB7IGZpbGxSb3VuZGVkUmVjdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmludGVyZmFjZSBMaXZlVGV4dFByb3BzIGV4dGVuZHMgTGl2ZVByb3BzIHtcbiAgICBmb250bmFtZTogc3RyaW5nO1xuICAgIGZvbnRzaXplOiBudW1iZXI7XG4gICAgZm9udGZhY2U6IFwicmVndWxhclwiIHwgXCJib2xkXCIgfCBcIml0YWxpY1wiIHwgXCJib2xkIGl0YWxpY1wiO1xuICAgIGFjdGl2ZWJnY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmViZ29uY29sb3I6IHN0cmluZztcbiAgICBiZ2NvbG9yOiBzdHJpbmc7XG4gICAgYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dGNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dG9uY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmV0ZXh0Y29sb3I6IHN0cmluZztcbiAgICBhY3RpdmV0ZXh0b25jb2xvcjogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICB0ZXh0b246IHN0cmluZztcbiAgICBtb2RlOiBcImJ1dHRvblwiIHwgXCJ0b2dnbGVcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVRleHQgZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVUZXh0UHJvcHM+IHtcbiAgICBzdGF0aWMgZ2V0IHByb3BzKCk6IExpdmVUZXh0UHJvcHMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucHJvcHMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS50ZXh0XCIsXG4gICAgICAgICAgICB3aWR0aDogOTAsXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1LFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMCxcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yOiBcInJnYmEoMjU1LCAxODEsIDUwLCAxKVwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBiZ29uY29sb3I6IFwicmdiYSgxOTUsIDE5NSwgMTk1LCAxKVwiLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0Y29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dG9uY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZldGV4dGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRvbmNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRleHQ6IFwiQVwiLFxuICAgICAgICAgICAgdGV4dG9uOiBcIkJcIixcbiAgICAgICAgICAgIG1vZGU6IFwidG9nZ2xlXCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICB0ZXh0b24sXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHRleHRjb2xvcixcbiAgICAgICAgICAgIHRleHRvbmNvbG9yLFxuICAgICAgICAgICAgYWN0aXZldGV4dGNvbG9yLFxuICAgICAgICAgICAgYWN0aXZldGV4dG9uY29sb3IsXG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cbiAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSAwLjU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkJnQ29sb3IgPSBhY3RpdmUgPyAodmFsdWUgPyBhY3RpdmViZ29uY29sb3IgOiBhY3RpdmViZ2NvbG9yKSA6ICh2YWx1ZSA/IGJnb25jb2xvciA6IGJnY29sb3IpO1xuICAgICAgICBjb25zdCBidXR0b25Cb3JkZXJDb2xvciA9IGZvY3VzID8gZm9jdXNib3JkZXJjb2xvciA6IGJvcmRlcmNvbG9yO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBidXR0b25CZ0NvbG9yO1xuICAgICAgICBpZiAobW9kZSA9PT0gXCJidXR0b25cIikge1xuICAgICAgICAgICAgZmlsbFJvdW5kZWRSZWN0KGN0eCwgMC41LCAwLjUsIHdpZHRoIC0gMSwgaGVpZ2h0IC0gMSwgaGVpZ2h0ICogMC41IC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgucmVjdCgwLjUsIDAuNSwgd2lkdGggLSAxLCBoZWlnaHQgLSAxKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDAuNTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYnV0dG9uQm9yZGVyQ29sb3I7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlID09PSBcInJlZ3VsYXJcIiA/IFwiXCIgOiBmb250ZmFjZX0gJHtmb250c2l6ZX1weCAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGFjdGl2ZSA/ICh2YWx1ZSA/IGFjdGl2ZXRleHRvbmNvbG9yIDogYWN0aXZldGV4dGNvbG9yKSA6ICh2YWx1ZSA/IHRleHRvbmNvbG9yIDogdGV4dGNvbG9yKTtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHZhbHVlICYmIG1vZGUgPT09IFwidG9nZ2xlXCIgPyB0ZXh0b24gOiB0ZXh0LCB3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41KTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIG1vZGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgICAgICB0aGlzLnNldFZhbHVlKG1vZGUgPT09IFwiYnV0dG9uXCIgPyAxIDogMSAtIHZhbHVlKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwiYnV0dG9uXCIpIHRoaXMuc2V0VmFsdWUoMCk7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZVRvZ2dsZVByb3BzIGV4dGVuZHMgTGl2ZVByb3BzIHtcbiAgICBhY3RpdmViZ2NvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZlYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYmdjb2xvcjogc3RyaW5nO1xuICAgIGJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlVG9nZ2xlIGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlVG9nZ2xlUHJvcHM+IHtcbiAgICBzdGF0aWMgZ2V0IHByb3BzKCk6IExpdmVUb2dnbGVQcm9wcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wcm9wcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLnRvZ2dsZVwiLFxuICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgaGVpZ2h0OiAxNSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yOiBcInJnYmEoMjU1LCAxODEsIDUwLCAxKVwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBiZ29uY29sb3I6IFwicmdiYSgxOTUsIDE5NSwgMTk1LCAxKVwiLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgZm9jdXMsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMC41O1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcblxuICAgICAgICBjb25zdCBidXR0b25CZ0NvbG9yID0gYWN0aXZlID8gKHZhbHVlID8gYWN0aXZlYmdvbmNvbG9yIDogYWN0aXZlYmdjb2xvcikgOiAodmFsdWUgPyBiZ29uY29sb3IgOiBiZ2NvbG9yKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQm9yZGVyQ29sb3IgPSBmb2N1cyA/IGZvY3VzYm9yZGVyY29sb3IgOiBib3JkZXJjb2xvcjtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uQmdDb2xvcjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgucmVjdChib3JkZXJXaWR0aCwgYm9yZGVyV2lkdGgsIHdpZHRoIC0gMiAqIGJvcmRlcldpZHRoLCBoZWlnaHQgLSAyICogYm9yZGVyV2lkdGgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBidXR0b25Cb3JkZXJDb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSgxIC0gdmFsdWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBcIkB3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcy93ZWJjb21wb25lbnRzLWJ1bmRsZVwiO1xuaW1wb3J0IExpdmVCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgTGl2ZVNsaWRlciBmcm9tIFwiLi9TbGlkZXJcIjtcbmltcG9ydCBMaXZlRGlhbCBmcm9tIFwiLi9EaWFsXCI7XG5pbXBvcnQgTGl2ZVRvZ2dsZSBmcm9tIFwiLi9Ub2dnbGVcIjtcbmltcG9ydCBMaXZlVGV4dCBmcm9tIFwiLi9UZXh0XCI7XG5pbXBvcnQgTGl2ZU51bWJveCBmcm9tIFwiLi9OdW1ib3hcIjtcbmltcG9ydCBMaXZlVGFiIGZyb20gXCIuL1RhYlwiO1xuaW1wb3J0IExpdmVNZXRlciBmcm9tIFwiLi9NZXRlclwiO1xuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1idXR0b25cIiwgTGl2ZUJ1dHRvbik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS10b2dnbGVcIiwgTGl2ZVRvZ2dsZSk7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1zbGlkZXJcIiwgTGl2ZVNsaWRlcik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1kaWFsXCIsIExpdmVEaWFsKTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXZlLXRleHRcIiwgTGl2ZVRleHQpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdmUtbnVtYm94XCIsIExpdmVOdW1ib3gpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdmUtdGFiXCIsIExpdmVUYWIpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdmUtbWV0ZXJcIiwgTGl2ZU1ldGVyKTtcbiIsImV4cG9ydCBjb25zdCB0b01JREkgPSAoZjogbnVtYmVyKSA9PiBbXCJDXCIsIFwiQyNcIiwgXCJEXCIsIFwiRCNcIiwgXCJFXCIsIFwiRlwiLCBcIkYjXCIsIFwiR1wiLCBcIkcjXCIsIFwiQVwiLCBcIkEjXCIsIFwiQlwiXVsoZiAlIDEyICsgMTIpICUgMTJdICsgTWF0aC5yb3VuZChmIC8gMTIgLSAyKTtcbmV4cG9ydCBjb25zdCB0b1JhZCA9IChkZWdyZWVzOiBudW1iZXIpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuZXhwb3J0IGNvbnN0IGF0b2RiID0gKGE6IG51bWJlcikgPT4gMjAgKiBNYXRoLmxvZzEwKGEpO1xuZXhwb3J0IGNvbnN0IGRidG9hID0gKGRiOiBudW1iZXIpID0+IDEwICoqIChkYiAvIDIwKTtcbmV4cG9ydCBjb25zdCByb3VuZGVkUmVjdCA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCByYWRpdXM6IG51bWJlciB8IG51bWJlcltdKSA9PiB7XG4gICAgY29uc3QgcmFkaWkgPSBbMCwgMCwgMCwgMF07XG4gICAgaWYgKHR5cGVvZiByYWRpdXMgPT09IFwibnVtYmVyXCIpIHJhZGlpLmZpbGwocmFkaXVzKTtcbiAgICBlbHNlIHJhZGl1cy5mb3JFYWNoKCh2LCBpKSA9PiByYWRpaVtpXSA9IHYpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHggKyByYWRpaVswXSwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpaVsxXSwgeSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpaVsxXSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpaVsyXSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpaVsyXSwgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaWlbM10sIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByYWRpaVszXSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaWlbMF0pO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpaVswXSwgeSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5zdHJva2UoKTtcbn07XG5leHBvcnQgY29uc3QgZmlsbFJvdW5kZWRSZWN0ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJhZGl1czogbnVtYmVyIHwgbnVtYmVyW10pID0+IHtcbiAgICBjb25zdCByYWRpaSA9IFswLCAwLCAwLCAwXTtcbiAgICBpZiAodHlwZW9mIHJhZGl1cyA9PT0gXCJudW1iZXJcIikgcmFkaWkuZmlsbChyYWRpdXMpO1xuICAgIGVsc2UgcmFkaXVzLmZvckVhY2goKHYsIGkpID0+IHJhZGlpW2ldID0gdik7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHJhZGlpWzBdLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGlpWzFdLCB5KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGlpWzFdKTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGlpWzJdKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGlpWzJdLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKHggKyByYWRpaVszXSwgeSArIGhlaWdodCk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGlpWzNdKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpaVswXSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGlpWzBdLCB5KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9