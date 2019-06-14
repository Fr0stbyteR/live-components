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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Base.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Base.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "live-button, live-slider, live-dial, live-toggle, live-text, live-numbox {\n  display: inline-flex; }\n", ""]);



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
    if (!this.isConnected) return;
    if (typeof value === "undefined" || value === null) return;
    this.setParamValue(key, value.match(/^[+-]?(\d*\.)?\d+$/) ? +value : value);
  }

  connectedCallback() {
    this.fetchAttribute();
    this.paint();
  }

  setParamValue(key, value) {
    this.params[key] = value;
    this.paint();
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
      start = -3 * Math.PI / 2;
      end = 0;
      valPos = start + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["toRad"])(this.distance * 270);
    } else {
      dialHeight = 25;
      start = Math.PI - 3 * Math.PI / 8;
      end = 2 * Math.PI + 3 * Math.PI / 8;
      valPos = start + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["toRad"])(this.distance * 315);
    }

    var dialRadius = dialHeight / 2;
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

    this.interactionRect = [0, dialCenterY - dialHeight / 2, width, dialHeight];
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
      var midpoint = (start + end) / 2;
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
        ctx.fillText(shortname, width / 2, panelOffset + fontsize, width);
      }
    }

    if (shownumber) {
      var tinyOffset = appearance === "tiny" ? 12 : 0;

      if (appearance === "tiny") {
        ctx.textAlign = "left";
        ctx.fillText(this.displayValue, tinyOffset, height - panelOffset, width);
      } else {
        ctx.textAlign = "center";
        ctx.fillText(this.displayValue, width / 2, height - panelOffset, width);
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
      ctx.moveTo(width - triangleHeight - 0.5, height / 2);
      ctx.lineTo(width - 0.5, 0.5);
      ctx.lineTo(width - 0.5, height - 0.5);
      ctx.closePath();
      ctx.fill();
    } // display the text


    ctx.font = "".concat(fontface === "regular" ? "" : fontface, " ").concat(fontsize, "px ").concat(fontname, ", sans-serif");
    ctx.fillStyle = textcolor;
    ctx.textAlign = "center";
    ctx.fillText(displayValue, width / 2, (height + fontsize) * 0.5, width);
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
      var _this$params = this.params,
          relative = _this$params.relative,
          value = _this$params.value;
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
    var _this$params2 = this.params,
        orientation = _this$params2.orientation,
        type = _this$params2.type,
        mmax = _this$params2.mmax,
        mmin = _this$params2.mmin,
        steps = _this$params2.steps,
        step = _this$params2.step;
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
    var _this$params3 = this.params,
        type = _this$params3.type,
        mmax = _this$params3.mmax,
        mmin = _this$params3.mmin,
        value = _this$params3.value;
    return type === "enum" ? value / this.params.enum.length : (value - mmin) / (mmax - mmin);
  }

  get stepRange() {
    var _this$params4 = this.params,
        orientation = _this$params4.orientation,
        type = _this$params4.type,
        mmax = _this$params4.mmax,
        mmin = _this$params4.mmin,
        step = _this$params4.step;
    var full = this.interactionRect[orientation === "vertical" ? 3 : 2];
    if (step) return type === "enum" ? full / this.params.enum.length : type === "int" ? Math.round(step) / (mmax - mmin) * full : step / (mmax - mmin) * full;
    var trueSteps = this.trueSteps;
    return full / trueSteps;
  }

  paint() {
    var _this$params5 = this.params,
        width = _this$params5.width,
        height = _this$params5.height,
        fontname = _this$params5.fontname,
        fontsize = _this$params5.fontsize,
        fontface = _this$params5.fontface,
        orientation = _this$params5.orientation,
        showname = _this$params5.showname,
        shownumber = _this$params5.shownumber,
        slidercolor = _this$params5.slidercolor,
        textcolor = _this$params5.textcolor,
        tribordercolor = _this$params5.tribordercolor,
        trioncolor = _this$params5.trioncolor,
        tricolor = _this$params5.tricolor,
        shortname = _this$params5.shortname;
    var ctx = this.ctx;
    var lineWidth = 0.5;
    var padding = 8;
    var popoverType = "VALUE_LABEL";
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
      this.interactionRect = [width * 0.5 - interactionWidth / 2, fontsize + padding, interactionWidth, height - 2 * (fontsize + padding)];
      ctx.lineWidth = 1;
      ctx.strokeStyle = tribordercolor;
      var triOrigin = [width * 0.5 + lineWidth / 2 + 0.5, this.interactionRect[1] - 4 + this.interactionRect[3] * (1 - distance)];
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
      if (showname) ctx.fillText(shortname, width / 2, fontsize, width);
      if (shownumber) ctx.fillText(displayValue, width / 2, height, width);
    } else {
      ctx.beginPath();
      ctx.moveTo(padding, height * 0.5);
      ctx.lineTo(width - padding, height * 0.5);
      ctx.stroke();

      var _interactionWidth = height * 0.5;

      this.interactionRect = [padding, height * 0.5 - _interactionWidth / 2, width - 2 * padding, _interactionWidth];
      ctx.lineWidth = 1;
      ctx.strokeStyle = tribordercolor;
      var _triOrigin = [this.interactionRect[0] + this.interactionRect[2] * distance - 4, height * 0.5 + lineWidth / 2 + 2];
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
      if (showname) ctx.fillText(shortname, width / 2, fontsize, width);
      ctx.textAlign = "left";
      if (shownumber) ctx.fillText(displayValue, 4, height, width);
    }
  }

  getValueFromPos(e) {
    var _this$params6 = this.params,
        orientation = _this$params6.orientation,
        type = _this$params6.type,
        mmin = _this$params6.mmin,
        mmax = _this$params6.mmax;
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
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["fillRoundedRect"])(ctx, 0.5, 0.5, width - 1, height - 1, height / 2 - 1);
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
    ctx.fillStyle = active ? value ? activetextoncolor : activetextcolor : value ? textoncolor : textcolor;
    ctx.fillText(value && mode === "toggle" ? texton : text, width * 0.5, (height + fontsize) * 0.5);
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
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/Button.ts");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ "./src/Slider.ts");
/* harmony import */ var _Dial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dial */ "./src/Dial.ts");
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toggle */ "./src/Toggle.ts");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Text */ "./src/Text.ts");
/* harmony import */ var _Numbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Numbox */ "./src/Numbox.ts");






window.customElements.define("live-button", _Button__WEBPACK_IMPORTED_MODULE_0__["default"]);
window.customElements.define("live-toggle", _Toggle__WEBPACK_IMPORTED_MODULE_3__["default"]);
window.customElements.define("live-slider", _Slider__WEBPACK_IMPORTED_MODULE_1__["default"]);
window.customElements.define("live-dial", _Dial__WEBPACK_IMPORTED_MODULE_2__["default"]);
window.customElements.define("live-text", _Text__WEBPACK_IMPORTED_MODULE_4__["default"]);
window.customElements.define("live-numbox", _Numbox__WEBPACK_IMPORTED_MODULE_5__["default"]);

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: toMIDI, toRad, roundedRect, fillRoundedRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMIDI", function() { return toMIDI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRad", function() { return toRad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundedRect", function() { return roundedRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillRoundedRect", function() { return fillRoundedRect; });
var toMIDI = f => ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"][(f % 12 + 12) % 12] + Math.round(f / 12 - 2);
var toRad = degrees => degrees * Math.PI / 180;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9CYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQmFzZS5zY3NzPzdiNzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGlhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTnVtYm94LnRzIiwid2VicGFjazovLy8uL3NyYy9TbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RvZ2dsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbIkxpdmVCYXNlQ29tcG9uZW50IiwiSFRNTEVsZW1lbnQiLCJjb25zdHJ1Y3RvciIsInJvb3QiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwiaW5uZXJIVE1MIiwicmVuZGVyIiwiTGl2ZUNvbXBvbmVudCIsIm9ic2VydmVkQXR0cmlidXRlcyIsIk9iamVjdCIsImtleXMiLCJwYXJhbXMiLCJjYW52YXMiLCJjdHgiLCJoYW5kbGVLZXlEb3duIiwiZSIsImhhbmRsZUtleVVwIiwiaGFuZGxlVG91Y2hTdGFydCIsImhhbmRsZVdoZWVsIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVNb3VzZURvd24iLCJwcmV2ZW50RGVmYXVsdCIsImZvY3VzIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImZyb21YIiwicGFnZVgiLCJsZWZ0IiwiZnJvbVkiLCJwYWdlWSIsInRvcCIsInByZXZWYWx1ZSIsInZhbHVlIiwiaGFuZGxlUG9pbnRlckRvd24iLCJ4IiwieSIsIm9yaWdpbmFsRXZlbnQiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVQb2ludGVyRHJhZyIsIm1vdmVtZW50WCIsIm1vdmVtZW50WSIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVQb2ludGVyVXAiLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlTW91c2VPdmVyIiwiaGFuZGxlTW91c2VPdXQiLCJoYW5kbGVDb250ZXh0TWVudSIsImhhbmRsZUZvY3VzSW4iLCJwYWludCIsImhhbmRsZUZvY3VzT3V0IiwicGFzc2l2ZSIsImNoaWxkcmVuIiwiZ2V0Q29udGV4dCIsImRpc3BsYXlWYWx1ZSIsInR5cGUiLCJ1bml0c3R5bGUiLCJ1bml0cyIsImVudW0iLCJ0b0ZpeGVkIiwiTWF0aCIsImFicyIsInRvTUlESSIsImZldGNoQXR0cmlidXRlIiwiaSIsImhvc3QiLCJhdHRyaWJ1dGVzIiwibGVuZ3RoIiwiYXR0ciIsIm5hbWUiLCJtYXRjaCIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsImtleSIsIm9sZFZhbHVlIiwiaXNDb25uZWN0ZWQiLCJzZXRQYXJhbVZhbHVlIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJhY3RpdmUiLCJ3aWR0aCIsImhlaWdodCIsInNob3J0bmFtZSIsImxvbmduYW1lIiwib3JkZXIiLCJsaW5rbmFtZXMiLCJtbWluIiwibW1heCIsImVudW1faWNvbnMiLCJtb2Rtb2RlIiwiaW5pdGlhbF9lbmFibGUiLCJpbml0aWFsIiwiZXhwb25lbnQiLCJzdGVwIiwic3RlcHMiLCJzcGVlZGxpbSIsImRlZmVyIiwiaW52aXNpYmxlIiwibWFwcGFibGUiLCJMaXZlQnV0dG9uIiwiX2luVG91Y2giLCJhY3RpdmViZ2NvbG9yIiwiYWN0aXZlYmdvbmNvbG9yIiwiYmdjb2xvciIsImJnb25jb2xvciIsImJvcmRlcmNvbG9yIiwiZm9jdXNib3JkZXJjb2xvciIsImJvcmRlcldpZHRoIiwic3R5bGUiLCJsaW5lV2lkdGgiLCJidXR0b25CZ0NvbG9yIiwiYnV0dG9uQm9yZGVyQ29sb3IiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJlbGxpcHNlIiwiUEkiLCJmaWxsIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJzZXRUaW1lb3V0IiwicmVzZXRQb2ludGVycyIsIkxpdmVEaWFsIiwiaW50ZXJhY3Rpb25SZWN0IiwibmV3VmFsdWUiLCJnZXRWYWx1ZUZyb21EZWx0YSIsImZvbnRuYW1lIiwiZm9udHNpemUiLCJmb250ZmFjZSIsImFwcGVhcmFuY2UiLCJ0cmlhbmdsZSIsInNob3duYW1lIiwic2hvd251bWJlciIsImFjdGl2ZWRpYWxjb2xvciIsImRpYWxjb2xvciIsImFjdGl2ZW5lZWRsZWNvbG9yIiwibmVlZGxlY29sb3IiLCJwYW5lbGNvbG9yIiwidGV4dGNvbG9yIiwidHJpYm9yZGVyY29sb3IiLCJ0cmljb2xvciIsInRydWVTdGVwcyIsImZ1bGwiLCJtYXhTdGVwcyIsIm1pbiIsImZsb29yIiwicm91bmQiLCJkaXN0YW5jZSIsInN0ZXBSYW5nZSIsInRyaWFuZ2xlSGVpZ2h0IiwidHJpYW5nbGVMaW5lV2lkdGgiLCJzdGFydCIsImVuZCIsInZhbFBvcyIsImRpYWxIZWlnaHQiLCJ0b1JhZCIsImRpYWxSYWRpdXMiLCJkaWFsQ2VudGVyWCIsImRpYWxDZW50ZXJZIiwiYXJjU3RhcnRYIiwiY29zIiwiYXJjU3RhcnRZIiwic2luIiwiYXJjRW5kWCIsImFyY0VuZFkiLCJ2YWx1ZVBvc1giLCJ2YWx1ZVBvc1kiLCJlbmRDYXBSYWRpdXMiLCJwYW5lbE9mZnNldCIsInJvdW5kZWRSZWN0IiwiZmlsbFJvdW5kZWRSZWN0IiwiYXJjIiwibWlkcG9pbnQiLCJtb3ZlVG8iLCJsaW5lVG8iLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJ0aW55T2Zmc2V0IiwidGlwUG9zaXRpb25YIiwidGlwUG9zaXRpb25ZIiwicHJldlN0ZXBzIiwiZFN0ZXBzIiwibWF4IiwiTGl2ZU51bWJveCIsImFjdGl2ZXRyaWNvbG9yIiwidHJpY29sb3IyIiwiYWN0aXZldHJpY29sb3IyIiwiYWN0aXZlc2xpZGVyY29sb3IiLCJmaWxsUmVjdCIsImNsb3NlUGF0aCIsIkxpdmVTbGlkZXIiLCJyZWxhdGl2ZSIsImdldFZhbHVlRnJvbVBvcyIsIm9yaWVudGF0aW9uIiwic2xpZGVyY29sb3IiLCJ0cmlvbmNvbG9yIiwicGFkZGluZyIsInBvcG92ZXJUeXBlIiwiaW50ZXJhY3Rpb25XaWR0aCIsInRyaU9yaWdpbiIsIkxpdmVUZXh0IiwidGV4dG9uY29sb3IiLCJhY3RpdmV0ZXh0Y29sb3IiLCJhY3RpdmV0ZXh0b25jb2xvciIsInRleHQiLCJ0ZXh0b24iLCJMaXZlVG9nZ2xlIiwid2luZG93IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJmIiwiZGVncmVlcyIsInJhZGl1cyIsInJhZGlpIiwiZm9yRWFjaCIsInYiLCJxdWFkcmF0aWNDdXJ2ZVRvIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNmQSxxQkFBcUIsbUJBQU8sQ0FBQyxpRkFBa0I7O0FBRS9DO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUEsK0I7Ozs7Ozs7Ozs7O0FDckJBLDJCQUEyQixtQkFBTyxDQUFDLHFHQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUyw2RUFBNkUseUJBQXlCLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0FDRmxIOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLGdCQUFnQjtBQUN2RCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsb0JBQW9CO0FBQ25DLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLHVEQUFROztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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LENBQUMrSixNQUFKLENBQVcxSSxDQUFYLEVBQWNDLENBQUMsR0FBR2lMLEtBQUssQ0FBQyxDQUFELENBQXZCO0FBQ0F2TSxLQUFHLENBQUMwTSxnQkFBSixDQUFxQnJMLENBQXJCLEVBQXdCQyxDQUF4QixFQUEyQkQsQ0FBQyxHQUFHa0wsS0FBSyxDQUFDLENBQUQsQ0FBcEMsRUFBeUNqTCxDQUF6QztBQUNBdEIsS0FBRyxDQUFDK0ssU0FBSjtBQUNBL0ssS0FBRyxDQUFDc0csSUFBSjtBQUNILENBaEJNLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQ7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaXZlLWJ1dHRvbiwgbGl2ZS1zbGlkZXIsIGxpdmUtZGlhbCwgbGl2ZS10b2dnbGUsIGxpdmUtdGV4dCwgbGl2ZS1udW1ib3gge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQmFzZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0Jhc2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQmFzZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5pbXBvcnQgXCIuL0Jhc2Uuc2Nzc1wiO1xuaW1wb3J0IHsgdG9NSURJIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIExpdmVCYXNlQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHJvb3Q6IFNoYWRvd1Jvb3Q7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcbiAgICAgICAgdGhpcy5yb290LmlubmVySFRNTCA9IHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZUNvbXBvbmVudDxUIGV4dGVuZHMgTGl2ZVBhcmFtcz4gZXh0ZW5kcyBMaXZlQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIHBhcmFtczogTGl2ZVBhcmFtcyA9IHtcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgZm9jdXM6IGZhbHNlLFxuICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgIGhlaWdodDogMTUsXG4gICAgICAgIHNob3J0bmFtZTogXCJcIixcbiAgICAgICAgbG9uZ25hbWU6IFwiXCIsXG4gICAgICAgIG9yZGVyOiAwLFxuICAgICAgICBsaW5rbmFtZXM6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcImZsb2F0XCIsXG4gICAgICAgIG1taW46IDAsXG4gICAgICAgIG1tYXg6IDEsXG4gICAgICAgIGVudW06IFtdLFxuICAgICAgICBlbnVtX2ljb25zOiBbXSxcbiAgICAgICAgbW9kbW9kZTogXCJub25lXCIsXG4gICAgICAgIGluaXRpYWxfZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgaW5pdGlhbDogWzBdLFxuICAgICAgICB1bml0c3R5bGU6IFwiZmxvYXRcIixcbiAgICAgICAgdW5pdHM6IFwiXCIsXG4gICAgICAgIGV4cG9uZW50OiAxLFxuICAgICAgICBzdGVwOiAwLFxuICAgICAgICBzdGVwczogMCxcbiAgICAgICAgc3BlZWRsaW06IDUsXG4gICAgICAgIGRlZmVyOiBmYWxzZSxcbiAgICAgICAgaW52aXNpYmxlOiBcImF1dG9tYXRlZFwiLFxuICAgICAgICBtYXBwYWJsZTogdHJ1ZVxuICAgIH1cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMucGFyYW1zKTtcbiAgICB9XG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwYXJhbXM6IFQ7XG5cbiAgICBoYW5kbGVLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZUtleVVwID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVRvdWNoU3RhcnQgPSAoZTogVG91Y2hFdmVudCkgPT4ge307XG4gICAgaGFuZGxlV2hlZWwgPSAoZTogV2hlZWxFdmVudCkgPT4ge307XG4gICAgaGFuZGxlQ2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlTW91c2VEb3duID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNhbnZhcy5mb2N1cygpO1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGZyb21YID0gZS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgY29uc3QgZnJvbVkgPSBlLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMucGFyYW1zLnZhbHVlO1xuICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJEb3duKHsgeDogZnJvbVgsIHk6IGZyb21ZLCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGUucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyRHJhZyh7IHByZXZWYWx1ZSwgeCwgeSwgZnJvbVgsIGZyb21ZLCBtb3ZlbWVudFg6IGUubW92ZW1lbnRYLCBtb3ZlbWVudFk6IGUubW92ZW1lbnRZLCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBlLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGUucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlclVwKHsgeCwgeSwgb3JpZ2luYWxFdmVudDogZSB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXApO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXApO1xuICAgIH07XG4gICAgaGFuZGxlTW91c2VPdmVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZU1vdXNlT3V0ID0gKGU6IE1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZUNvbnRleHRNZW51ID0gKGU6IE1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVBvaW50ZXJEcmFnID0gKGU6IFBvaW50ZXJEcmFnRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVBvaW50ZXJVcCA9IChlOiBQb2ludGVyVXBFdmVudCkgPT4ge307XG4gICAgaGFuZGxlRm9jdXNJbiA9IChlOiBGb2N1c0V2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMucGFyYW1zLmZvY3VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWludCgpO1xuICAgIH1cbiAgICBoYW5kbGVGb2N1c091dCA9IChlOiBGb2N1c0V2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMucGFyYW1zLmZvY3VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFpbnQoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmhhbmRsZUtleVVwKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHRoaXMuaGFuZGxlV2hlZWwpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuaGFuZGxlTW91c2VEb3duLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgdGhpcy5oYW5kbGVNb3VzZU92ZXIpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCB0aGlzLmhhbmRsZU1vdXNlT3V0KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCB0aGlzLmhhbmRsZUZvY3VzSW4pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCB0aGlzLmhhbmRsZUZvY3VzT3V0KTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLnJvb3QuY2hpbGRyZW5bMF0gYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnBhcmFtcyA9ICh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBMaXZlQ29tcG9uZW50KS5wYXJhbXMgYXMgVDtcbiAgICB9XG4gICAgZ2V0IGRpc3BsYXlWYWx1ZSgpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgdHlwZSwgdW5pdHN0eWxlLCB1bml0cyB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHRoaXMucGFyYW1zLmVudW1bdmFsdWVdO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcImludFwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCgwKTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJmbG9hdFwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJ0aW1lXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiBtc1wiO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcImhlcnR6XCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiBIelwiO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcImRlY2liZWxcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIGRCXCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiJVwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgJVwiO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcInBhblwiKSByZXR1cm4gdmFsdWUgPT09IDAgPyBcIkNcIiA6ICh0eXBlID09PSBcImludFwiID8gTWF0aC5hYnModmFsdWUpIDogTWF0aC5hYnModmFsdWUpLnRvRml4ZWQoMikpICsgKHZhbHVlIDwgMCA/IFwiIExcIiA6IFwiIFJcIik7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwic2VtaXRvbmVzXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiBzdFwiO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcIm1pZGlcIikgcmV0dXJuIHRvTUlESSh2YWx1ZSk7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiY3VzdG9tXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiBcIiArIHVuaXRzO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcIm5hdGl2ZVwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpO1xuICAgICAgICByZXR1cm4gXCJOL0FcIjtcbiAgICB9XG4gICAgZmV0Y2hBdHRyaWJ1dGUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb290Lmhvc3QuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMucm9vdC5ob3N0LmF0dHJpYnV0ZXNbaV07XG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBhdHRyO1xuICAgICAgICAgICAgKHRoaXMucGFyYW1zIGFzIGFueSlbbmFtZV0gPSB2YWx1ZS5tYXRjaCgvXlsrLV0/KFxcZCpcXC4pP1xcZCskLykgPyArdmFsdWUgOiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soa2V5OiBzdHJpbmcsIG9sZFZhbHVlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKSByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgfHwgdmFsdWUgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRQYXJhbVZhbHVlKGtleSwgdmFsdWUubWF0Y2goL15bKy1dPyhcXGQqXFwuKT9cXGQrJC8pID8gK3ZhbHVlIDogdmFsdWUpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5mZXRjaEF0dHJpYnV0ZSgpO1xuICAgICAgICB0aGlzLnBhaW50KCk7XG4gICAgfVxuICAgIHNldFBhcmFtVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgKHRoaXMucGFyYW1zIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnBhaW50KCk7XG4gICAgfVxuICAgIHBhaW50KCkge31cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAnPGNhbnZhcyB0YWJpbmRleD1cIjFcIiBzdHlsZT1cIm91dGxpbmU6IG5vbmU7XCI+PC9jYW52YXM+JztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZUJ1dHRvblBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIGFjdGl2ZWJnY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmViZ29uY29sb3I6IHN0cmluZztcbiAgICBiZ2NvbG9yOiBzdHJpbmc7XG4gICAgYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVCdXR0b24gZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVCdXR0b25QYXJhbXM+IHtcbiAgICBzdGF0aWMgZ2V0IHBhcmFtcygpOiBMaXZlQnV0dG9uUGFyYW1zIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnBhcmFtcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLmJ1dHRvblwiLFxuICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgaGVpZ2h0OiAxNSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yOiBcInJnYmEoMTA5LCAyMTUsIDI1NSwgMSlcIixcbiAgICAgICAgICAgIGJnY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgYmdvbmNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgZm9jdXMsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcblxuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IDAuNTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjdHgubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQmdDb2xvciA9IGFjdGl2ZSA/ICh2YWx1ZSA/IGFjdGl2ZWJnb25jb2xvciA6IGFjdGl2ZWJnY29sb3IpIDogKHZhbHVlID8gYmdvbmNvbG9yIDogYmdjb2xvcik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkJvcmRlckNvbG9yID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJ1dHRvbkJnQ29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmVsbGlwc2Uod2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNSwgd2lkdGggKiAwLjUgLSAyICogYm9yZGVyV2lkdGgsIGhlaWdodCAqIDAuNSAtIDIgKiBib3JkZXJXaWR0aCwgMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBidXR0b25Cb3JkZXJDb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiAhdGhpcy5faW5Ub3VjaCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCAwKSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIDEpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgMCk7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuaW1wb3J0IHsgdG9SYWQsIHJvdW5kZWRSZWN0LCBmaWxsUm91bmRlZFJlY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5pbnRlcmZhY2UgTGl2ZURpYWxQYXJhbXMgZXh0ZW5kcyBMaXZlUGFyYW1zIHtcbiAgICBmb250bmFtZTogc3RyaW5nO1xuICAgIGZvbnRzaXplOiBudW1iZXI7XG4gICAgZm9udGZhY2U6IFwicmVndWxhclwiIHwgXCJib2xkXCIgfCBcIml0YWxpY1wiIHwgXCJib2xkIGl0YWxpY1wiO1xuICAgIHNob3duYW1lOiBib29sZWFuO1xuICAgIHNob3dudW1iZXI6IGJvb2xlYW47XG4gICAgYXBwZWFyYW5jZTogXCJ2ZXJ0aWNhbFwiIHwgXCJ0aW55XCIgfCBcInBhbmVsXCI7XG4gICAgdHJpYW5nbGU6IGJvb2xlYW47XG4gICAgYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZlZGlhbGNvbG9yOiBzdHJpbmc7XG4gICAgZGlhbGNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZlbmVlZGxlY29sb3I6IHN0cmluZztcbiAgICBuZWVkbGVjb2xvcjogc3RyaW5nO1xuICAgIHBhbmVsY29sb3I6IHN0cmluZztcbiAgICB0ZXh0Y29sb3I6IHN0cmluZztcbiAgICB0cmlib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRyaWNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVEaWFsIGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlRGlhbFBhcmFtcz4ge1xuICAgIHN0YXRpYyBnZXQgcGFyYW1zKCk6IExpdmVEaWFsUGFyYW1zIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnBhcmFtcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLmRpYWxcIixcbiAgICAgICAgICAgIHdpZHRoOiA0NSxcbiAgICAgICAgICAgIGhlaWdodDogNDUsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEyLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgYXBwZWFyYW5jZTogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgdHJpYW5nbGU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd25hbWU6IHRydWUsXG4gICAgICAgICAgICBzaG93bnVtYmVyOiB0cnVlLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmVkaWFsY29sb3I6IFwicmdiYSgxMDksIDIxNSwgMjU1LCAxKVwiLFxuICAgICAgICAgICAgZGlhbGNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZW5lZWRsZWNvbG9yOiBcInJnYmEoNDAsIDQwLCA0MCwgMSlcIixcbiAgICAgICAgICAgIG5lZWRsZWNvbG9yOiBcInJnYmEoMTA1LCAxMDUsIDEwNSwgMSlcIixcbiAgICAgICAgICAgIHBhbmVsY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRyaWJvcmRlcmNvbG9yOiBcInJnYmEoNTAsIDUwLCA1MCwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yOiBcInJnYmEoNDAsIDQwLCA0MCwgMSlcIixcbiAgICAgICAgICAgIG1taW46IDAsXG4gICAgICAgICAgICBtbWF4OiAxMjcsXG4gICAgICAgICAgICB0eXBlOiBcImludFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG4gICAgaW50ZXJhY3Rpb25SZWN0OiBudW1iZXJbXSA9IFswLCAwLCAwLCAwXTtcblxuICAgIGdldCB0cnVlU3RlcHMoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgc3RlcHMsIHN0ZXAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBmdWxsID0gMTAwO1xuICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gbW1heCAtIG1taW4gOiBmdWxsO1xuICAgICAgICBpZiAoc3RlcCkge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIE1hdGgucm91bmQoc3RlcCkpLCBtYXhTdGVwcyk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5mbG9vcigobW1heCAtIG1taW4pIC8gc3RlcCksIG1heFN0ZXBzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RlcHMpIHJldHVybiBNYXRoLm1pbihzdGVwcywgbWF4U3RlcHMpO1xuICAgICAgICByZXR1cm4gbWF4U3RlcHM7XG4gICAgfVxuICAgIGdldCBkaXN0YW5jZSgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCB2YWx1ZSB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IHZhbHVlIC8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiAodmFsdWUgLSBtbWluKSAvIChtbWF4IC0gbW1pbik7XG4gICAgfVxuICAgIGdldCBzdGVwUmFuZ2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgc3RlcCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGZ1bGwgPSAxMDA7XG4gICAgICAgIGlmIChzdGVwKSByZXR1cm4gdHlwZSA9PT0gXCJlbnVtXCIgPyBmdWxsIC8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gTWF0aC5yb3VuZChzdGVwKSAvIChtbWF4IC0gbW1pbikgKiBmdWxsIDogc3RlcCAvIChtbWF4IC0gbW1pbikgKiBmdWxsO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgcmV0dXJuIGZ1bGwgLyB0cnVlU3RlcHM7XG4gICAgfVxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgIGZvY3VzLFxuICAgICAgICAgICAgZm9udG5hbWUsXG4gICAgICAgICAgICBmb250c2l6ZSxcbiAgICAgICAgICAgIGZvbnRmYWNlLFxuICAgICAgICAgICAgYXBwZWFyYW5jZSxcbiAgICAgICAgICAgIHRyaWFuZ2xlLFxuICAgICAgICAgICAgc2hvd25hbWUsXG4gICAgICAgICAgICBzaG93bnVtYmVyLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgcGFuZWxjb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZW5lZWRsZWNvbG9yLFxuICAgICAgICAgICAgbmVlZGxlY29sb3IsXG4gICAgICAgICAgICBhY3RpdmVkaWFsY29sb3IsXG4gICAgICAgICAgICBkaWFsY29sb3IsXG4gICAgICAgICAgICB0ZXh0Y29sb3IsXG4gICAgICAgICAgICB0cmlib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHRyaWNvbG9yLFxuICAgICAgICAgICAgc2hvcnRuYW1lXG4gICAgICAgIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG5cbiAgICAgICAgY29uc3QgdHJpYW5nbGVIZWlnaHQgPSA0O1xuICAgICAgICBjb25zdCB0cmlhbmdsZUxpbmVXaWR0aCA9IDAuNjtcblxuICAgICAgICBsZXQgc3RhcnQ6IG51bWJlcjtcbiAgICAgICAgbGV0IGVuZDogbnVtYmVyO1xuICAgICAgICBsZXQgdmFsUG9zOiBudW1iZXI7XG4gICAgICAgIGxldCBkaWFsSGVpZ2h0OiBudW1iZXI7XG5cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICBkaWFsSGVpZ2h0ID0gMTg7XG4gICAgICAgICAgICBzdGFydCA9IC0zICogTWF0aC5QSSAvIDI7XG4gICAgICAgICAgICBlbmQgPSAwO1xuICAgICAgICAgICAgdmFsUG9zID0gc3RhcnQgKyB0b1JhZCh0aGlzLmRpc3RhbmNlICogMjcwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpYWxIZWlnaHQgPSAyNTtcbiAgICAgICAgICAgIHN0YXJ0ID0gTWF0aC5QSSAtIDMgKiBNYXRoLlBJIC8gODtcbiAgICAgICAgICAgIGVuZCA9IDIgKiBNYXRoLlBJICsgMyAqIE1hdGguUEkgLyA4O1xuICAgICAgICAgICAgdmFsUG9zID0gc3RhcnQgKyB0b1JhZCh0aGlzLmRpc3RhbmNlICogMzE1KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkaWFsUmFkaXVzID0gZGlhbEhlaWdodCAvIDI7XG5cbiAgICAgICAgbGV0IGRpYWxDZW50ZXJYID0gd2lkdGggKiAwLjU7XG4gICAgICAgIGxldCBkaWFsQ2VudGVyWSA9IGhlaWdodCAqIDAuNSArIDE7XG4gICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInBhbmVsXCIpIHtcbiAgICAgICAgICAgIGRpYWxDZW50ZXJZICs9IDEwO1xuICAgICAgICB9IGVsc2UgaWYgKGFwcGVhcmFuY2UgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgaWYgKHNob3dudW1iZXIpIGRpYWxDZW50ZXJZIC09IGZvbnRzaXplIC0gNTtcbiAgICAgICAgICAgIGlmIChzaG93bmFtZSkgZGlhbENlbnRlclkgKz0gZm9udHNpemUgLSA1O1xuICAgICAgICAgICAgaWYgKHRyaWFuZ2xlKSBkaWFsQ2VudGVyWSArPSB0cmlhbmdsZUhlaWdodCAtIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoYXBwZWFyYW5jZSA9PT0gXCJ0aW55XCIpIHtcbiAgICAgICAgICAgIGlmIChzaG93bmFtZSkge1xuICAgICAgICAgICAgICAgIGRpYWxDZW50ZXJZICs9IDY7XG4gICAgICAgICAgICAgICAgZGlhbENlbnRlclggPSAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdCA9IFswLCBkaWFsQ2VudGVyWSAtIGRpYWxIZWlnaHQgLyAyLCB3aWR0aCwgZGlhbEhlaWdodF07XG4gICAgICAgIGNvbnN0IGFyY1N0YXJ0WCA9IGRpYWxDZW50ZXJYICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLmNvcyhzdGFydCkpO1xuICAgICAgICBjb25zdCBhcmNTdGFydFkgPSBkaWFsQ2VudGVyWSArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5zaW4oc3RhcnQpKTtcbiAgICAgICAgY29uc3QgYXJjRW5kWCA9IGRpYWxDZW50ZXJYICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLmNvcyhlbmQpKTtcbiAgICAgICAgY29uc3QgYXJjRW5kWSA9IGRpYWxDZW50ZXJZICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLnNpbihlbmQpKTtcbiAgICAgICAgY29uc3QgdmFsdWVQb3NYID0gZGlhbENlbnRlclggKyAoZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguY29zKHZhbFBvcykpO1xuICAgICAgICBjb25zdCB2YWx1ZVBvc1kgPSBkaWFsQ2VudGVyWSArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5zaW4odmFsUG9zKSk7XG4gICAgICAgIGNvbnN0IGVuZENhcFJhZGl1cyA9IDE7XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGxldCBwYW5lbE9mZnNldCA9IDA7XG5cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwicGFuZWxcIikge1xuICAgICAgICAgICAgcGFuZWxPZmZzZXQgPSA1O1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMC40O1xuICAgICAgICAgICAgcm91bmRlZFJlY3QoY3R4LCAxLCAxLCB3aWR0aCAtIDIsIGhlaWdodCAtIDIsIDUpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHBhbmVsY29sb3I7XG4gICAgICAgICAgICBmaWxsUm91bmRlZFJlY3QoY3R4LCAxLjIsIDEuMiwgd2lkdGggLSAyLjQsIDMwIC0gMC40LCBbNSwgNSwgMCwgMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYWN0aXZlID8gYWN0aXZlbmVlZGxlY29sb3IgOiBuZWVkbGVjb2xvcjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGN0eC5zdHJva2VTdHlsZTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kIGFyYyBlbmRjYXBzXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhhcmNTdGFydFgsIGFyY1N0YXJ0WSwgZW5kQ2FwUmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhhcmNFbmRYLCBhcmNFbmRZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kIGFyY1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBkaWFsUmFkaXVzLCBzdGFydCwgZW5kKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIGRyYXcgdmFsdWUgYXJjLCB3aGljaCBjaGFuZ2VzIGlmIHRyaWFuZ2xlIGlzIGVuYWJsZWRcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYWN0aXZlID8gYWN0aXZlZGlhbGNvbG9yIDogZGlhbGNvbG9yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3R4LnN0cm9rZVN0eWxlO1xuICAgICAgICBpZiAodHJpYW5nbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pZHBvaW50ID0gKHN0YXJ0ICsgZW5kKSAvIDI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBhY3RpdmUgPyBhY3RpdmVkaWFsY29sb3IgOiBkaWFsY29sb3I7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiAwLjUpIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBkaWFsUmFkaXVzLCBtaWRwb2ludCwgdmFsUG9zKTtcbiAgICAgICAgICAgIGVsc2UgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGRpYWxSYWRpdXMsIHZhbFBvcywgbWlkcG9pbnQpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZHJhdyB2YWx1ZSBhcmMgZW5kY2FwXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKGFyY1N0YXJ0WCwgYXJjU3RhcnRZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAvLyBkcmF3IHZhbHVlIGFyY1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGRpYWxSYWRpdXMsIHN0YXJ0LCB2YWxQb3MpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXcgZGlhbFxuICAgICAgICAvLyBkcmF3IGRpYWwgcm91bmQgZW5kY2Fwc1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBhY3RpdmUgPyBhY3RpdmVuZWVkbGVjb2xvciA6IG5lZWRsZWNvbG9yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3R4LnN0cm9rZVN0eWxlO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHZhbHVlUG9zWCwgdmFsdWVQb3NZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gZHJhdyBkaWFsIGxpbmVcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSk7XG4gICAgICAgIGN0eC5saW5lVG8odmFsdWVQb3NYLCB2YWx1ZVBvc1kpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIGFkZCB0ZXh0IGlmIGl0IGlzIGVuYWJsZWRcbiAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICBpZiAoc2hvd25hbWUpIHtcbiAgICAgICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInRpbnlcIikge1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoc2hvcnRuYW1lLCAwLCBwYW5lbE9mZnNldCArIGZvbnRzaXplLCB3aWR0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChzaG9ydG5hbWUsIHdpZHRoIC8gMiwgcGFuZWxPZmZzZXQgKyBmb250c2l6ZSwgd2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93bnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCB0aW55T2Zmc2V0ID0gYXBwZWFyYW5jZSA9PT0gXCJ0aW55XCIgPyAxMiA6IDA7XG4gICAgICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJ0aW55XCIpIHtcbiAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuZGlzcGxheVZhbHVlLCB0aW55T2Zmc2V0LCBoZWlnaHQgLSBwYW5lbE9mZnNldCwgd2lkdGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5kaXNwbGF5VmFsdWUsIHdpZHRoIC8gMiwgaGVpZ2h0IC0gcGFuZWxPZmZzZXQsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3IHRyaWFuZ2xlIGlmIGl0IGlzIGVuYWJsZWRcbiAgICAgICAgaWYgKHRyaWFuZ2xlKSB7XG4gICAgICAgICAgICBpZiAoIWRpc3RhbmNlKSBjdHguZmlsbFN0eWxlID0gdHJpY29sb3I7XG4gICAgICAgICAgICBlbHNlIGlmICghYWN0aXZlKSBjdHguZmlsbFN0eWxlID0gZGlhbGNvbG9yO1xuICAgICAgICAgICAgZWxzZSBjdHguZmlsbFN0eWxlID0gYWN0aXZlZGlhbGNvbG9yO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlwUG9zaXRpb25YID0gZGlhbENlbnRlclggKyBkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5jb3MoLTMgKiBNYXRoLlBJIC8gNCkgLSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpcFBvc2l0aW9uWSA9IGRpYWxDZW50ZXJZICsgZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguc2luKC0zICogTWF0aC5QSSAvIDQpIC0gMTtcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHRpcFBvc2l0aW9uWCwgdGlwUG9zaXRpb25ZKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHRpcFBvc2l0aW9uWCAtIHRyaWFuZ2xlSGVpZ2h0LCB0aXBQb3NpdGlvblkpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odGlwUG9zaXRpb25YLCB0aXBQb3NpdGlvblkgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh0aXBQb3NpdGlvblgsIHRpcFBvc2l0aW9uWSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oZGlhbENlbnRlclggLSB0cmlhbmdsZUhlaWdodCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSAtIHRyaWFuZ2xlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKGRpYWxDZW50ZXJYICsgdHJpYW5nbGVIZWlnaHQsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJpYm9yZGVyY29sb3IgfHwgXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRyaWFuZ2xlTGluZVdpZHRoO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFZhbHVlRnJvbURlbHRhKGU6IFBvaW50ZXJEcmFnRXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWluLCBtbWF4IH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3Qgc3RlcFJhbmdlID0gdGhpcy5zdGVwUmFuZ2U7XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICBjb25zdCBzdGVwID0gdHlwZSA9PT0gXCJlbnVtXCIgPyAxIDogKHRoaXMucGFyYW1zLnN0ZXAgfHwgKG1tYXggLSBtbWluKSAvIHRydWVTdGVwcyk7XG4gICAgICAgIGNvbnN0IHByZXZTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gZS5wcmV2VmFsdWUgOiBlLnByZXZWYWx1ZSAvIHN0ZXA7XG4gICAgICAgIGNvbnN0IGRTdGVwcyA9IE1hdGgucm91bmQoKGUuZnJvbVkgLSBlLnkpIC8gc3RlcFJhbmdlKTtcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBNYXRoLm1pbih0cnVlU3RlcHMsIE1hdGgubWF4KDAsIHByZXZTdGVwcyArIGRTdGVwcykpO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiBzdGVwcztcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLnJvdW5kKHN0ZXBzICogc3RlcCArIG1taW4pO1xuICAgICAgICByZXR1cm4gc3RlcHMgKiBzdGVwICsgbW1pbjtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoZTogUG9pbnRlckRvd25FdmVudCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBlLnggPCB0aGlzLmludGVyYWN0aW9uUmVjdFswXVxuICAgICAgICAgICAgfHwgZS54ID4gdGhpcy5pbnRlcmFjdGlvblJlY3RbMF0gKyB0aGlzLmludGVyYWN0aW9uUmVjdFsyXVxuICAgICAgICAgICAgfHwgZS55IDwgdGhpcy5pbnRlcmFjdGlvblJlY3RbMV1cbiAgICAgICAgICAgIHx8IGUueSA+IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbM11cbiAgICAgICAgKSByZXR1cm47XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5faW5Ub3VjaCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tRGVsdGEoZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5wYXJhbXMudmFsdWUpIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZU51bWJveFBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIGZvbnRuYW1lOiBzdHJpbmc7XG4gICAgZm9udHNpemU6IG51bWJlcjtcbiAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIgfCBcImJvbGRcIiB8IFwiaXRhbGljXCIgfCBcImJvbGQgaXRhbGljXCI7XG4gICAgYXBwZWFyYW5jZTogXCJzbGlkZXJcIiB8IFwidHJpYW5nbGVcIiB8IFwiZGVmYXVsdFwiO1xuICAgIGFjdGl2ZWJnY29sb3I6IHN0cmluZztcbiAgICBib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIGZvY3VzYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICB0ZXh0Y29sb3I6IHN0cmluZztcbiAgICB0cmljb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZXRyaWNvbG9yOiBzdHJpbmc7XG4gICAgdHJpY29sb3IyOiBzdHJpbmc7XG4gICAgYWN0aXZldHJpY29sb3IyOiBzdHJpbmc7XG4gICAgYWN0aXZlc2xpZGVyY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZU51bWJveCBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZU51bWJveFBhcmFtcz4ge1xuICAgIHN0YXRpYyBnZXQgcGFyYW1zKCk6IExpdmVOdW1ib3hQYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUubnVtYm94XCIsXG4gICAgICAgICAgICB3aWR0aDogNDUsXG4gICAgICAgICAgICBoZWlnaHQ6IDE1LFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMCxcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0cmljb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjI6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZldHJpY29sb3IyOiBcInJnYmEoMTA5LCAyMTUsIDI1NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXNsaWRlcmNvbG9yOiBcInJnYmEoMTA5LCAyMTUsIDI1NSwgMSlcIixcbiAgICAgICAgICAgIG1taW46IDAsXG4gICAgICAgICAgICBtbWF4OiAxMjcsXG4gICAgICAgICAgICB0eXBlOiBcImludFwiLFxuICAgICAgICAgICAgdW5pdHN0eWxlOiBcImludFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBnZXQgdHJ1ZVN0ZXBzKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHN0ZXBzLCBzdGVwIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgZnVsbCA9IDEwMDtcbiAgICAgICAgY29uc3QgbWF4U3RlcHMgPSB0eXBlID09PSBcImVudW1cIiA/IHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IG1tYXggLSBtbWluIDogZnVsbDtcbiAgICAgICAgaWYgKHN0ZXApIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBNYXRoLnJvdW5kKHN0ZXApKSwgbWF4U3RlcHMpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIHN0ZXApLCBtYXhTdGVwcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ZXBzKSByZXR1cm4gTWF0aC5taW4oc3RlcHMsIG1heFN0ZXBzKTtcbiAgICAgICAgcmV0dXJuIG1heFN0ZXBzO1xuICAgIH1cbiAgICBnZXQgZGlzdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgdmFsdWUgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gXCJlbnVtXCIgPyB2YWx1ZSAvIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogKHZhbHVlIC0gbW1pbikgLyAobW1heCAtIG1taW4pO1xuICAgIH1cbiAgICBnZXQgc3RlcFJhbmdlKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHN0ZXAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBmdWxsID0gMTAwO1xuICAgICAgICBpZiAoc3RlcCkgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gZnVsbCAvIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IE1hdGgucm91bmQoc3RlcCkgLyAobW1heCAtIG1taW4pICogZnVsbCA6IHN0ZXAgLyAobW1heCAtIG1taW4pICogZnVsbDtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIHJldHVybiBmdWxsIC8gdHJ1ZVN0ZXBzO1xuICAgIH1cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIGFwcGVhcmFuY2UsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdHJpY29sb3IsXG4gICAgICAgICAgICBhY3RpdmV0cmljb2xvcixcbiAgICAgICAgICAgIHRyaWNvbG9yMixcbiAgICAgICAgICAgIGFjdGl2ZXRyaWNvbG9yMixcbiAgICAgICAgICAgIGFjdGl2ZXNsaWRlcmNvbG9yXG4gICAgICAgIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTtcbiAgICAgICAgY29uc3QgZGlzcGxheVZhbHVlID0gdGhpcy5kaXNwbGF5VmFsdWU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICAvLyBkcmF3IGJhY2tncm91bmRcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGFjdGl2ZWJnY29sb3I7XG4gICAgICAgIGN0eC5yZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIC8vIGRyYXcgYm9yZGVyIChldmVudHVhbGx5IHdlIG1pZ2h0IG5lZWQgdG8gcmVkZWZpbmUgdGhlIHNoYXBlKVxuICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJzbGlkZXJcIiAmJiBhY3RpdmUgJiYgZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBhY3RpdmVzbGlkZXJjb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLjUsIDAuNSwgZGlzdGFuY2UgKiB3aWR0aCAtIDEsIGhlaWdodCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInRyaWFuZ2xlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRyaWFuZ2xlSGVpZ2h0ID0gODtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBhY3RpdmUgPyAoZGlzdGFuY2UgPyBhY3RpdmV0cmljb2xvcjIgOiBhY3RpdmV0cmljb2xvcikgOiAoZGlzdGFuY2UgPyB0cmljb2xvcjIgOiB0cmljb2xvcik7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHdpZHRoIC0gdHJpYW5nbGVIZWlnaHQgLSAwLjUsIGhlaWdodCAvIDIpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCAtIDAuNSwgMC41KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8od2lkdGggLSAwLjUsIGhlaWdodCAtIDAuNSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRpc3BsYXkgdGhlIHRleHRcbiAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGRpc3BsYXlWYWx1ZSwgd2lkdGggLyAyLCAoaGVpZ2h0ICsgZm9udHNpemUpICogMC41LCB3aWR0aCk7XG4gICAgfVxuICAgIGdldFZhbHVlRnJvbURlbHRhKGU6IFBvaW50ZXJEcmFnRXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWluLCBtbWF4IH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3Qgc3RlcFJhbmdlID0gdGhpcy5zdGVwUmFuZ2U7XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICBjb25zdCBzdGVwID0gdHlwZSA9PT0gXCJlbnVtXCIgPyAxIDogKHRoaXMucGFyYW1zLnN0ZXAgfHwgKG1tYXggLSBtbWluKSAvIHRydWVTdGVwcyk7XG4gICAgICAgIGNvbnN0IHByZXZTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gZS5wcmV2VmFsdWUgOiBlLnByZXZWYWx1ZSAvIHN0ZXA7XG4gICAgICAgIGNvbnN0IGRTdGVwcyA9IE1hdGgucm91bmQoKGUuZnJvbVkgLSBlLnkpIC8gc3RlcFJhbmdlKTtcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBNYXRoLm1pbih0cnVlU3RlcHMsIE1hdGgubWF4KDAsIHByZXZTdGVwcyArIGRTdGVwcykpO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiBzdGVwcztcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLnJvdW5kKHN0ZXBzICogc3RlcCArIG1taW4pO1xuICAgICAgICByZXR1cm4gc3RlcHMgKiBzdGVwICsgbW1pbjtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5faW5Ub3VjaCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tRGVsdGEoZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5wYXJhbXMudmFsdWUpIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZVNsaWRlclBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIHJlbGF0aXZlOiBib29sZWFuO1xuICAgIGZvbnRuYW1lOiBzdHJpbmc7XG4gICAgZm9udHNpemU6IG51bWJlcjtcbiAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIgfCBcImJvbGRcIiB8IFwiaXRhbGljXCIgfCBcImJvbGQgaXRhbGljXCI7XG4gICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB8IFwiaG9yaXpvbnRhbFwiO1xuICAgIHNob3duYW1lOiBib29sZWFuO1xuICAgIHNob3dudW1iZXI6IGJvb2xlYW47XG4gICAgc2xpZGVyY29sb3I6IHN0cmluZztcbiAgICB0ZXh0Y29sb3I6IHN0cmluZztcbiAgICB0cmlib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRyaW9uY29sb3I6IHN0cmluZztcbiAgICB0cmljb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlU2xpZGVyIGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlU2xpZGVyUGFyYW1zPiB7XG4gICAgc3RhdGljIGdldCBwYXJhbXMoKTogTGl2ZVNsaWRlclBhcmFtcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wYXJhbXMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS5zbGlkZXJcIixcbiAgICAgICAgICAgIHdpZHRoOiA0MCxcbiAgICAgICAgICAgIGhlaWdodDogOTAsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEyLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIHNob3duYW1lOiB0cnVlLFxuICAgICAgICAgICAgc2hvd251bWJlcjogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlcmNvbG9yOiBcInJnYmEoNDAsIDQwLCA0MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmlib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICB0cmlvbmNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIHJlbGF0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1taW46IDAsXG4gICAgICAgICAgICBtbWF4OiAxMjcsXG4gICAgICAgICAgICB0eXBlOiBcImludFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG4gICAgaW50ZXJhY3Rpb25SZWN0OiBudW1iZXJbXSA9IFswLCAwLCAwLCAwXTtcblxuICAgIGdldCB0cnVlU3RlcHMoKSB7XG4gICAgICAgIGNvbnN0IHsgb3JpZW50YXRpb24sIHR5cGUsIG1tYXgsIG1taW4sIHN0ZXBzLCBzdGVwIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgZnVsbCA9IHRoaXMuaW50ZXJhY3Rpb25SZWN0W29yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyAzIDogMl07XG4gICAgICAgIGNvbnN0IG1heFN0ZXBzID0gdHlwZSA9PT0gXCJlbnVtXCIgPyB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aCA6IHR5cGUgPT09IFwiaW50XCIgPyBtbWF4IC0gbW1pbiA6IGZ1bGw7XG4gICAgICAgIGlmIChzdGVwKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5taW4oTWF0aC5mbG9vcigobW1heCAtIG1taW4pIC8gTWF0aC5yb3VuZChzdGVwKSksIG1heFN0ZXBzKTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBzdGVwKSwgbWF4U3RlcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGVwcykgcmV0dXJuIE1hdGgubWluKHN0ZXBzLCBtYXhTdGVwcyk7XG4gICAgICAgIHJldHVybiBtYXhTdGVwcztcbiAgICB9XG4gICAgZ2V0IGRpc3RhbmNlKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHZhbHVlIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gdmFsdWUgLyB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aCA6ICh2YWx1ZSAtIG1taW4pIC8gKG1tYXggLSBtbWluKTtcbiAgICB9XG4gICAgZ2V0IHN0ZXBSYW5nZSgpIHtcbiAgICAgICAgY29uc3QgeyBvcmllbnRhdGlvbiwgdHlwZSwgbW1heCwgbW1pbiwgc3RlcCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGZ1bGwgPSB0aGlzLmludGVyYWN0aW9uUmVjdFtvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gMyA6IDJdO1xuICAgICAgICBpZiAoc3RlcCkgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gZnVsbCAvIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IE1hdGgucm91bmQoc3RlcCkgLyAobW1heCAtIG1taW4pICogZnVsbCA6IHN0ZXAgLyAobW1heCAtIG1taW4pICogZnVsbDtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIHJldHVybiBmdWxsIC8gdHJ1ZVN0ZXBzO1xuICAgIH1cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBmb250bmFtZSxcbiAgICAgICAgICAgIGZvbnRzaXplLFxuICAgICAgICAgICAgZm9udGZhY2UsXG4gICAgICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgICAgIHNob3duYW1lLFxuICAgICAgICAgICAgc2hvd251bWJlcixcbiAgICAgICAgICAgIHNsaWRlcmNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0cmlvbmNvbG9yLFxuICAgICAgICAgICAgdHJpY29sb3IsXG4gICAgICAgICAgICBzaG9ydG5hbWVcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gMC41O1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gODtcbiAgICAgICAgY29uc3QgcG9wb3ZlclR5cGUgPSBcIlZBTFVFX0xBQkVMXCI7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTtcbiAgICAgICAgY29uc3QgZGlzcGxheVZhbHVlID0gdGhpcy5kaXNwbGF5VmFsdWU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzbGlkZXJjb2xvcjtcblxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh3aWR0aCAqIDAuNSwgZm9udHNpemUgKyBwYWRkaW5nKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8od2lkdGggKiAwLjUsIGhlaWdodCAtIChmb250c2l6ZSArIHBhZGRpbmcpKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25XaWR0aCA9IHdpZHRoICogMC41O1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3QgPSBbXG4gICAgICAgICAgICAgICAgd2lkdGggKiAwLjUgLSBpbnRlcmFjdGlvbldpZHRoIC8gMixcbiAgICAgICAgICAgICAgICBmb250c2l6ZSArIHBhZGRpbmcsXG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25XaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQgLSAyICogKGZvbnRzaXplICsgcGFkZGluZylcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJpYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBjb25zdCB0cmlPcmlnaW46IFtudW1iZXIsIG51bWJlcl0gPSBbXG4gICAgICAgICAgICAgICAgd2lkdGggKiAwLjUgKyBsaW5lV2lkdGggLyAyICsgMC41LFxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdIC0gNCArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdICogKDEgLSBkaXN0YW5jZSlcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgNCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDgsIHRyaU9yaWdpblsxXSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDgsIHRyaU9yaWdpblsxXSArIDgpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0sIHRyaU9yaWdpblsxXSArIDQpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5faW5Ub3VjaCA/IHRyaW9uY29sb3IgOiB0cmljb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Zm9udGZhY2UgPT09IFwicmVndWxhclwiID8gXCJcIiA6IGZvbnRmYWNlfSAke2ZvbnRzaXplfXB4ICR7Zm9udG5hbWV9LCBzYW5zLXNlcmlmYDtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRleHRjb2xvcjtcbiAgICAgICAgICAgIGlmIChzaG93bmFtZSkgY3R4LmZpbGxUZXh0KHNob3J0bmFtZSwgd2lkdGggLyAyLCBmb250c2l6ZSwgd2lkdGgpO1xuICAgICAgICAgICAgaWYgKHNob3dudW1iZXIpIGN0eC5maWxsVGV4dChkaXNwbGF5VmFsdWUsIHdpZHRoIC8gMiwgaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHBhZGRpbmcsIGhlaWdodCAqIDAuNSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoIC0gcGFkZGluZywgaGVpZ2h0ICogMC41KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25XaWR0aCA9IGhlaWdodCAqIDAuNTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0ID0gW1xuICAgICAgICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICogMC41IC0gaW50ZXJhY3Rpb25XaWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgd2lkdGggLSAyICogcGFkZGluZyxcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbldpZHRoXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRyaWJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgY29uc3QgdHJpT3JpZ2luOiBbbnVtYmVyLCBudW1iZXJdID0gW1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl0gKiBkaXN0YW5jZSAtIDQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICogMC41ICsgbGluZVdpZHRoIC8gMiArIDJcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDQsIHRyaU9yaWdpblsxXSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDgsIHRyaU9yaWdpblsxXSArIDgpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0sIHRyaU9yaWdpblsxXSArIDgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5faW5Ub3VjaCA/IHRyaW9uY29sb3IgOiB0cmljb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Zm9udGZhY2UgPT09IFwicmVndWxhclwiID8gXCJcIiA6IGZvbnRmYWNlfSAke2ZvbnRzaXplfXB4ICR7Zm9udG5hbWV9LCBzYW5zLXNlcmlmYDtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRleHRjb2xvcjtcbiAgICAgICAgICAgIGlmIChzaG93bmFtZSkgY3R4LmZpbGxUZXh0KHNob3J0bmFtZSwgd2lkdGggLyAyLCBmb250c2l6ZSwgd2lkdGgpO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgaWYgKHNob3dudW1iZXIpIGN0eC5maWxsVGV4dChkaXNwbGF5VmFsdWUsIDQsIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFZhbHVlRnJvbVBvcyhlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcbiAgICAgICAgY29uc3QgeyBvcmllbnRhdGlvbiwgdHlwZSwgbW1pbiwgbW1heCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IHN0ZXBSYW5nZSA9IHRoaXMuc3RlcFJhbmdlO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgY29uc3Qgc3RlcCA9IHRoaXMucGFyYW1zLnN0ZXAgfHwgKG1tYXggLSBtbWluKSAvIHRydWVTdGVwcztcbiAgICAgICAgbGV0IHN0ZXBzID0gTWF0aC5yb3VuZCgob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdIC0gKGUueSAtIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdKSA6IGUueCAtIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdKSAvIHN0ZXBSYW5nZSk7XG4gICAgICAgIHN0ZXBzID0gTWF0aC5taW4odHJ1ZVN0ZXBzLCBNYXRoLm1heCgwLCBzdGVwcykpO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiBzdGVwcztcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLnJvdW5kKHN0ZXBzICogc3RlcCArIG1taW4pO1xuICAgICAgICByZXR1cm4gc3RlcHMgKiBzdGVwICsgbW1pbjtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoZTogUG9pbnRlckRvd25FdmVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IHJlbGF0aXZlLCB2YWx1ZSB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGUueCA8IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdXG4gICAgICAgICAgICB8fCBlLnggPiB0aGlzLmludGVyYWN0aW9uUmVjdFswXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzJdXG4gICAgICAgICAgICB8fCBlLnkgPCB0aGlzLmludGVyYWN0aW9uUmVjdFsxXVxuICAgICAgICAgICAgfHwgZS55ID4gdGhpcy5pbnRlcmFjdGlvblJlY3RbMV0gKyB0aGlzLmludGVyYWN0aW9uUmVjdFszXVxuICAgICAgICApIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbVBvcyhlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB2YWx1ZSkgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgdGhpcy5nZXRWYWx1ZUZyb21Qb3MoZSkpO1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlckRyYWdFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2luVG91Y2gpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbVBvcyhlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLnBhcmFtcy52YWx1ZSkgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgbmV3VmFsdWUpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5pbXBvcnQgeyBmaWxsUm91bmRlZFJlY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5pbnRlcmZhY2UgTGl2ZVRleHRQYXJhbXMgZXh0ZW5kcyBMaXZlUGFyYW1zIHtcbiAgICBmb250bmFtZTogc3RyaW5nO1xuICAgIGZvbnRzaXplOiBudW1iZXI7XG4gICAgZm9udGZhY2U6IFwicmVndWxhclwiIHwgXCJib2xkXCIgfCBcIml0YWxpY1wiIHwgXCJib2xkIGl0YWxpY1wiO1xuICAgIGFjdGl2ZWJnY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmViZ29uY29sb3I6IHN0cmluZztcbiAgICBiZ2NvbG9yOiBzdHJpbmc7XG4gICAgYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dGNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dG9uY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmV0ZXh0Y29sb3I6IHN0cmluZztcbiAgICBhY3RpdmV0ZXh0b25jb2xvcjogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICB0ZXh0b246IHN0cmluZztcbiAgICBtb2RlOiBcImJ1dHRvblwiIHwgXCJ0b2dnbGVcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVRleHQgZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVUZXh0UGFyYW1zPiB7XG4gICAgc3RhdGljIGdldCBwYXJhbXMoKTogTGl2ZVRleHRQYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUudGV4dFwiLFxuICAgICAgICAgICAgd2lkdGg6IDkwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0NSxcbiAgICAgICAgICAgIGZvbnRuYW1lOiBcIkFyaWFsXCIsXG4gICAgICAgICAgICBmb250c2l6ZTogMTAsXG4gICAgICAgICAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZWJnb25jb2xvcjogXCJyZ2JhKDI1NSwgMTgxLCA1MCwgMSlcIixcbiAgICAgICAgICAgIGJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYmdvbmNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRvbmNvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0b25jb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0OiBcIkFcIixcbiAgICAgICAgICAgIHRleHRvbjogXCJCXCIsXG4gICAgICAgICAgICBtb2RlOiBcInRvZ2dsZVwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgZm9jdXMsXG4gICAgICAgICAgICBmb250bmFtZSxcbiAgICAgICAgICAgIGZvbnRzaXplLFxuICAgICAgICAgICAgZm9udGZhY2UsXG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgdGV4dG9uLFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZWJnb25jb2xvcixcbiAgICAgICAgICAgIGJnY29sb3IsXG4gICAgICAgICAgICBiZ29uY29sb3IsXG4gICAgICAgICAgICBib3JkZXJjb2xvcixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0ZXh0Y29sb3IsXG4gICAgICAgICAgICB0ZXh0b25jb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRjb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRvbmNvbG9yLFxuICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcblxuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IDAuNTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjdHgubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQmdDb2xvciA9IGFjdGl2ZSA/ICh2YWx1ZSA/IGFjdGl2ZWJnb25jb2xvciA6IGFjdGl2ZWJnY29sb3IpIDogKHZhbHVlID8gYmdvbmNvbG9yIDogYmdjb2xvcik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkJvcmRlckNvbG9yID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJ1dHRvbkJnQ29sb3I7XG4gICAgICAgIGlmIChtb2RlID09PSBcImJ1dHRvblwiKSB7XG4gICAgICAgICAgICBmaWxsUm91bmRlZFJlY3QoY3R4LCAwLjUsIDAuNSwgd2lkdGggLSAxLCBoZWlnaHQgLSAxLCBoZWlnaHQgLyAyIC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgucmVjdCgwLjUsIDAuNSwgd2lkdGggLSAxLCBoZWlnaHQgLSAxKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDAuNTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYnV0dG9uQm9yZGVyQ29sb3I7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlID09PSBcInJlZ3VsYXJcIiA/IFwiXCIgOiBmb250ZmFjZX0gJHtmb250c2l6ZX1weCAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYWN0aXZlID8gKHZhbHVlID8gYWN0aXZldGV4dG9uY29sb3IgOiBhY3RpdmV0ZXh0Y29sb3IpIDogKHZhbHVlID8gdGV4dG9uY29sb3IgOiB0ZXh0Y29sb3IpO1xuICAgICAgICBjdHguZmlsbFRleHQodmFsdWUgJiYgbW9kZSA9PT0gXCJ0b2dnbGVcIiA/IHRleHRvbiA6IHRleHQsIHdpZHRoICogMC41LCAoaGVpZ2h0ICsgZm9udHNpemUpICogMC41KTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIG1vZGUgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgbW9kZSA9PT0gXCJidXR0b25cIiA/IDEgOiAxIC0gdmFsdWUpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLm1vZGUgPT09IFwiYnV0dG9uXCIpIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIDApO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcblxuaW50ZXJmYWNlIExpdmVUb2dnbGVQYXJhbXMgZXh0ZW5kcyBMaXZlUGFyYW1zIHtcbiAgICBhY3RpdmViZ2NvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZlYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYmdjb2xvcjogc3RyaW5nO1xuICAgIGJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlVG9nZ2xlIGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlVG9nZ2xlUGFyYW1zPiB7XG4gICAgc3RhdGljIGdldCBwYXJhbXMoKTogTGl2ZVRvZ2dsZVBhcmFtcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wYXJhbXMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS50b2dnbGVcIixcbiAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgIGhlaWdodDogMTUsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZWJnb25jb2xvcjogXCJyZ2JhKDI1NSwgMTgxLCA1MCwgMSlcIixcbiAgICAgICAgICAgIGJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYmdvbmNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcGFpbnQoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgIGZvY3VzLFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZWJnb25jb2xvcixcbiAgICAgICAgICAgIGJnY29sb3IsXG4gICAgICAgICAgICBiZ29uY29sb3IsXG4gICAgICAgICAgICBib3JkZXJjb2xvcixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cbiAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSAwLjU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkJnQ29sb3IgPSBhY3RpdmUgPyAodmFsdWUgPyBhY3RpdmViZ29uY29sb3IgOiBhY3RpdmViZ2NvbG9yKSA6ICh2YWx1ZSA/IGJnb25jb2xvciA6IGJnY29sb3IpO1xuICAgICAgICBjb25zdCBidXR0b25Cb3JkZXJDb2xvciA9IGZvY3VzID8gZm9jdXNib3JkZXJjb2xvciA6IGJvcmRlcmNvbG9yO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBidXR0b25CZ0NvbG9yO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5yZWN0KGJvcmRlcldpZHRoLCBib3JkZXJXaWR0aCwgd2lkdGggLSAyICogYm9yZGVyV2lkdGgsIGhlaWdodCAtIDIgKiBib3JkZXJXaWR0aCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGJ1dHRvbkJvcmRlckNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgMSAtIHZhbHVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgTGl2ZUJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBMaXZlU2xpZGVyIGZyb20gXCIuL1NsaWRlclwiO1xuaW1wb3J0IExpdmVEaWFsIGZyb20gXCIuL0RpYWxcIjtcbmltcG9ydCBMaXZlVG9nZ2xlIGZyb20gXCIuL1RvZ2dsZVwiO1xuaW1wb3J0IExpdmVUZXh0IGZyb20gXCIuL1RleHRcIjtcbmltcG9ydCBMaXZlTnVtYm94IGZyb20gXCIuL051bWJveFwiO1xuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1idXR0b25cIiwgTGl2ZUJ1dHRvbik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS10b2dnbGVcIiwgTGl2ZVRvZ2dsZSk7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1zbGlkZXJcIiwgTGl2ZVNsaWRlcik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1kaWFsXCIsIExpdmVEaWFsKTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXZlLXRleHRcIiwgTGl2ZVRleHQpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdmUtbnVtYm94XCIsIExpdmVOdW1ib3gpO1xuIiwiZXhwb3J0IGNvbnN0IHRvTUlESSA9IChmOiBudW1iZXIpID0+IFtcIkNcIiwgXCJDI1wiLCBcIkRcIiwgXCJEI1wiLCBcIkVcIiwgXCJGXCIsIFwiRiNcIiwgXCJHXCIsIFwiRyNcIiwgXCJBXCIsIFwiQSNcIiwgXCJCXCJdWyhmICUgMTIgKyAxMikgJSAxMl0gKyBNYXRoLnJvdW5kKGYgLyAxMiAtIDIpO1xuZXhwb3J0IGNvbnN0IHRvUmFkID0gKGRlZ3JlZXM6IG51bWJlcikgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG5leHBvcnQgY29uc3Qgcm91bmRlZFJlY3QgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmFkaXVzOiBudW1iZXIgfCBudW1iZXJbXSkgPT4ge1xuICAgIGNvbnN0IHJhZGlpID0gWzAsIDAsIDAsIDBdO1xuICAgIGlmICh0eXBlb2YgcmFkaXVzID09PSBcIm51bWJlclwiKSByYWRpaS5maWxsKHJhZGl1cyk7XG4gICAgZWxzZSByYWRpdXMuZm9yRWFjaCgodiwgaSkgPT4gcmFkaWlbaV0gPSB2KTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaWlbMF0sIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaWlbMV0sIHkpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaWlbMV0pO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaWlbMl0pO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoIC0gcmFkaWlbMl0sIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCArIHJhZGlpWzNdLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaWlbM10pO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHJhZGlpWzBdKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaWlbMF0sIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG59O1xuZXhwb3J0IGNvbnN0IGZpbGxSb3VuZGVkUmVjdCA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCByYWRpdXM6IG51bWJlciB8IG51bWJlcltdKSA9PiB7XG4gICAgY29uc3QgcmFkaWkgPSBbMCwgMCwgMCwgMF07XG4gICAgaWYgKHR5cGVvZiByYWRpdXMgPT09IFwibnVtYmVyXCIpIHJhZGlpLmZpbGwocmFkaXVzKTtcbiAgICBlbHNlIHJhZGl1cy5mb3JFYWNoKCh2LCBpKSA9PiByYWRpaVtpXSA9IHYpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHggKyByYWRpaVswXSwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpaVsxXSwgeSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpaVsxXSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpaVsyXSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpaVsyXSwgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaWlbM10sIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByYWRpaVszXSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaWlbMF0pO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpaVswXSwgeSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==