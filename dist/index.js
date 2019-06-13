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
exports.push([module.i, "live-button, live-slider, live-dial, live-toggle {\n  display: inline-flex; }\n", ""]);



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
    return "<canvas></canvas>";
  }

}
LiveComponent.params = {
  value: 0,
  active: true,
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
    var buttonBorderColor = value ? focusbordercolor : bordercolor;
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


/* eslint-disable @typescript-eslint/camelcase */


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
    return type === "enum" ? value / this.params.enum.length : value / (mmax - mmin);
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
        fontname = _this$params4.fontname,
        fontsize = _this$params4.fontsize,
        fontface = _this$params4.fontface,
        appearance = _this$params4.appearance,
        triangle = _this$params4.triangle,
        showname = _this$params4.showname,
        shownumber = _this$params4.shownumber,
        bordercolor = _this$params4.bordercolor,
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
      ctx.strokeStyle = bordercolor;
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


/* eslint-disable @typescript-eslint/camelcase */

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
    return type === "enum" ? value / this.params.enum.length : value / (mmax - mmin);
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
      fontsize: 12,
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
    var buttonBorderColor = value ? focusbordercolor : bordercolor;
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
    var buttonBorderColor = value ? focusbordercolor : bordercolor;
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





window.customElements.define("live-button", _Button__WEBPACK_IMPORTED_MODULE_0__["default"]);
window.customElements.define("live-toggle", _Toggle__WEBPACK_IMPORTED_MODULE_3__["default"]);
window.customElements.define("live-slider", _Slider__WEBPACK_IMPORTED_MODULE_1__["default"]);
window.customElements.define("live-dial", _Dial__WEBPACK_IMPORTED_MODULE_2__["default"]);
window.customElements.define("live-text", _Text__WEBPACK_IMPORTED_MODULE_4__["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9CYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQmFzZS5zY3NzPzdiNzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGlhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2xpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9UZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9Ub2dnbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6WyJMaXZlQmFzZUNvbXBvbmVudCIsIkhUTUxFbGVtZW50IiwiY29uc3RydWN0b3IiLCJyb290IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImlubmVySFRNTCIsInJlbmRlciIsIkxpdmVDb21wb25lbnQiLCJvYnNlcnZlZEF0dHJpYnV0ZXMiLCJPYmplY3QiLCJrZXlzIiwicGFyYW1zIiwiY2FudmFzIiwiY3R4IiwiaGFuZGxlS2V5RG93biIsImUiLCJoYW5kbGVLZXlVcCIsImhhbmRsZVRvdWNoU3RhcnQiLCJoYW5kbGVXaGVlbCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlTW91c2VEb3duIiwicHJldmVudERlZmF1bHQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZnJvbVgiLCJwYWdlWCIsImxlZnQiLCJmcm9tWSIsInBhZ2VZIiwidG9wIiwicHJldlZhbHVlIiwidmFsdWUiLCJoYW5kbGVQb2ludGVyRG93biIsIngiLCJ5Iiwib3JpZ2luYWxFdmVudCIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZVBvaW50ZXJEcmFnIiwibW92ZW1lbnRYIiwibW92ZW1lbnRZIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZVBvaW50ZXJVcCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNb3VzZU92ZXIiLCJoYW5kbGVNb3VzZU91dCIsImhhbmRsZUNvbnRleHRNZW51IiwicGFzc2l2ZSIsImNoaWxkcmVuIiwiZ2V0Q29udGV4dCIsImRpc3BsYXlWYWx1ZSIsInR5cGUiLCJ1bml0c3R5bGUiLCJ1bml0cyIsImVudW0iLCJ0b0ZpeGVkIiwiTWF0aCIsImFicyIsInRvTUlESSIsImZldGNoQXR0cmlidXRlIiwiaSIsImhvc3QiLCJhdHRyaWJ1dGVzIiwibGVuZ3RoIiwiYXR0ciIsIm5hbWUiLCJtYXRjaCIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsImtleSIsIm9sZFZhbHVlIiwiaXNDb25uZWN0ZWQiLCJzZXRQYXJhbVZhbHVlIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJwYWludCIsImFjdGl2ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2hvcnRuYW1lIiwibG9uZ25hbWUiLCJvcmRlciIsImxpbmtuYW1lcyIsIm1taW4iLCJtbWF4IiwiZW51bV9pY29ucyIsIm1vZG1vZGUiLCJpbml0aWFsX2VuYWJsZSIsImluaXRpYWwiLCJleHBvbmVudCIsInN0ZXAiLCJzdGVwcyIsInNwZWVkbGltIiwiZGVmZXIiLCJpbnZpc2libGUiLCJtYXBwYWJsZSIsIkxpdmVCdXR0b24iLCJfaW5Ub3VjaCIsImFjdGl2ZWJnY29sb3IiLCJhY3RpdmViZ29uY29sb3IiLCJiZ2NvbG9yIiwiYmdvbmNvbG9yIiwiYm9yZGVyY29sb3IiLCJmb2N1c2JvcmRlcmNvbG9yIiwiYm9yZGVyV2lkdGgiLCJzdHlsZSIsImxpbmVXaWR0aCIsImJ1dHRvbkJnQ29sb3IiLCJidXR0b25Cb3JkZXJDb2xvciIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImVsbGlwc2UiLCJQSSIsImZpbGwiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInNldFRpbWVvdXQiLCJyZXNldFBvaW50ZXJzIiwiTGl2ZURpYWwiLCJpbnRlcmFjdGlvblJlY3QiLCJuZXdWYWx1ZSIsImdldFZhbHVlRnJvbURlbHRhIiwiZm9udG5hbWUiLCJmb250c2l6ZSIsImZvbnRmYWNlIiwiYXBwZWFyYW5jZSIsInRyaWFuZ2xlIiwic2hvd25hbWUiLCJzaG93bnVtYmVyIiwiYWN0aXZlZGlhbGNvbG9yIiwiZGlhbGNvbG9yIiwiYWN0aXZlbmVlZGxlY29sb3IiLCJuZWVkbGVjb2xvciIsInBhbmVsY29sb3IiLCJ0ZXh0Y29sb3IiLCJ0cmlib3JkZXJjb2xvciIsInRyaWNvbG9yIiwidHJ1ZVN0ZXBzIiwiZnVsbCIsIm1heFN0ZXBzIiwibWluIiwiZmxvb3IiLCJyb3VuZCIsImRpc3RhbmNlIiwic3RlcFJhbmdlIiwidHJpYW5nbGVIZWlnaHQiLCJ0cmlhbmdsZUxpbmVXaWR0aCIsInN0YXJ0IiwiZW5kIiwidmFsUG9zIiwiZGlhbEhlaWdodCIsInRvUmFkIiwiZGlhbFJhZGl1cyIsImRpYWxDZW50ZXJYIiwiZGlhbENlbnRlclkiLCJhcmNTdGFydFgiLCJjb3MiLCJhcmNTdGFydFkiLCJzaW4iLCJhcmNFbmRYIiwiYXJjRW5kWSIsInZhbHVlUG9zWCIsInZhbHVlUG9zWSIsImVuZENhcFJhZGl1cyIsInBhbmVsT2Zmc2V0Iiwicm91bmRlZFJlY3QiLCJmaWxsUm91bmRlZFJlY3QiLCJhcmMiLCJtaWRwb2ludCIsIm1vdmVUbyIsImxpbmVUbyIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsInRpbnlPZmZzZXQiLCJ0aXBQb3NpdGlvblgiLCJ0aXBQb3NpdGlvblkiLCJwcmV2U3RlcHMiLCJkU3RlcHMiLCJtYXgiLCJMaXZlU2xpZGVyIiwicmVsYXRpdmUiLCJnZXRWYWx1ZUZyb21Qb3MiLCJvcmllbnRhdGlvbiIsInNsaWRlcmNvbG9yIiwidHJpb25jb2xvciIsInBhZGRpbmciLCJwb3BvdmVyVHlwZSIsImludGVyYWN0aW9uV2lkdGgiLCJ0cmlPcmlnaW4iLCJMaXZlVGV4dCIsInRleHRvbmNvbG9yIiwiYWN0aXZldGV4dGNvbG9yIiwiYWN0aXZldGV4dG9uY29sb3IiLCJ0ZXh0IiwidGV4dG9uIiwiTGl2ZVRvZ2dsZSIsIndpbmRvdyIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiZiIsImRlZ3JlZXMiLCJyYWRpdXMiLCJyYWRpaSIsImZvckVhY2giLCJ2IiwicXVhZHJhdGljQ3VydmVUbyIsImNsb3NlUGF0aCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDZkEscUJBQXFCLG1CQUFPLENBQUMsaUZBQWtCOztBQUUvQztBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLCtCOzs7Ozs7Ozs7OztBQ3JCQSwyQkFBMkIsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDbkY7QUFDQSxjQUFjLFFBQVMscURBQXFELHlCQUF5QixFQUFFOzs7Ozs7Ozs7Ozs7OztBQ0YxRjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxnQkFBZ0I7QUFDdkQsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLG9CQUFvQjtBQUNuQyw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyx1REFBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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dGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQ7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaXZlLWJ1dHRvbiwgbGl2ZS1zbGlkZXIsIGxpdmUtZGlhbCwgbGl2ZS10b2dnbGUge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQmFzZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0Jhc2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQmFzZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5pbXBvcnQgXCIuL0Jhc2Uuc2Nzc1wiO1xuaW1wb3J0IHsgdG9NSURJIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIExpdmVCYXNlQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHJvb3Q6IFNoYWRvd1Jvb3Q7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcbiAgICAgICAgdGhpcy5yb290LmlubmVySFRNTCA9IHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZUNvbXBvbmVudDxUIGV4dGVuZHMgTGl2ZVBhcmFtcz4gZXh0ZW5kcyBMaXZlQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIHBhcmFtczogTGl2ZVBhcmFtcyA9IHtcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICBoZWlnaHQ6IDE1LFxuICAgICAgICBzaG9ydG5hbWU6IFwiXCIsXG4gICAgICAgIGxvbmduYW1lOiBcIlwiLFxuICAgICAgICBvcmRlcjogMCxcbiAgICAgICAgbGlua25hbWVzOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJmbG9hdFwiLFxuICAgICAgICBtbWluOiAwLFxuICAgICAgICBtbWF4OiAxLFxuICAgICAgICBlbnVtOiBbXSxcbiAgICAgICAgZW51bV9pY29uczogW10sXG4gICAgICAgIG1vZG1vZGU6IFwibm9uZVwiLFxuICAgICAgICBpbml0aWFsX2VuYWJsZTogZmFsc2UsXG4gICAgICAgIGluaXRpYWw6IFswXSxcbiAgICAgICAgdW5pdHN0eWxlOiBcImZsb2F0XCIsXG4gICAgICAgIHVuaXRzOiBcIlwiLFxuICAgICAgICBleHBvbmVudDogMSxcbiAgICAgICAgc3RlcDogMCxcbiAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgIHNwZWVkbGltOiA1LFxuICAgICAgICBkZWZlcjogZmFsc2UsXG4gICAgICAgIGludmlzaWJsZTogXCJhdXRvbWF0ZWRcIixcbiAgICAgICAgbWFwcGFibGU6IHRydWVcbiAgICB9XG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnBhcmFtcyk7XG4gICAgfVxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcGFyYW1zOiBUO1xuXG4gICAgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVLZXlVcCA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVUb3VjaFN0YXJ0ID0gKGU6IFRvdWNoRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVdoZWVsID0gKGU6IFdoZWVsRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZUNsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZU1vdXNlRG93biA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBmcm9tWCA9IGUucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgIGNvbnN0IGZyb21ZID0gZS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzLnBhcmFtcy52YWx1ZTtcbiAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyRG93bih7IHg6IGZyb21YLCB5OiBmcm9tWSwgb3JpZ2luYWxFdmVudDogZSB9KTtcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBlLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGUucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlckRyYWcoeyBwcmV2VmFsdWUsIHgsIHksIGZyb21YLCBmcm9tWSwgbW92ZW1lbnRYOiBlLm1vdmVtZW50WCwgbW92ZW1lbnRZOiBlLm1vdmVtZW50WSwgb3JpZ2luYWxFdmVudDogZSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VVcCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBlLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJVcCh7IHgsIHksIG9yaWdpbmFsRXZlbnQ6IGUgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcbiAgICB9O1xuICAgIGhhbmRsZU1vdXNlT3ZlciA9IChlOiBNb3VzZUV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVNb3VzZU91dCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVDb250ZXh0TWVudSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVQb2ludGVyRG93biA9IChlOiBQb2ludGVyRG93bkV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoZTogUG9pbnRlclVwRXZlbnQpID0+IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5oYW5kbGVLZXlVcCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCB0aGlzLmhhbmRsZVdoZWVsKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljayk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmhhbmRsZU1vdXNlRG93biwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHRoaXMuaGFuZGxlTW91c2VPdmVyKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgdGhpcy5oYW5kbGVNb3VzZU91dCk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5yb290LmNoaWxkcmVuWzBdIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgTGl2ZUNvbXBvbmVudCkucGFyYW1zIGFzIFQ7XG4gICAgfVxuICAgIGdldCBkaXNwbGF5VmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIHR5cGUsIHVuaXRzdHlsZSwgdW5pdHMgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiB0aGlzLnBhcmFtcy5lbnVtW3ZhbHVlXTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJpbnRcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQoMCk7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiZmxvYXRcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwidGltZVwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgbXNcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJoZXJ0elwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgSHpcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJkZWNpYmVsXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiBkQlwiO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcIiVcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiICVcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJwYW5cIikgcmV0dXJuIHZhbHVlID09PSAwID8gXCJDXCIgOiAodHlwZSA9PT0gXCJpbnRcIiA/IE1hdGguYWJzKHZhbHVlKSA6IE1hdGguYWJzKHZhbHVlKS50b0ZpeGVkKDIpKSArICh2YWx1ZSA8IDAgPyBcIiBMXCIgOiBcIiBSXCIpO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcInNlbWl0b25lc1wiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgc3RcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJtaWRpXCIpIHJldHVybiB0b01JREkodmFsdWUpO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcImN1c3RvbVwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgXCIgKyB1bml0cztcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJuYXRpdmVcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKTtcbiAgICAgICAgcmV0dXJuIFwiTi9BXCI7XG4gICAgfVxuICAgIGZldGNoQXR0cmlidXRlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vdC5ob3N0LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLnJvb3QuaG9zdC5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gYXR0cjtcbiAgICAgICAgICAgICh0aGlzLnBhcmFtcyBhcyBhbnkpW25hbWVdID0gdmFsdWUubWF0Y2goL15bKy1dPyhcXGQqXFwuKT9cXGQrJC8pID8gK3ZhbHVlIDogdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGtleTogc3RyaW5nLCBvbGRWYWx1ZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiIHx8IHZhbHVlID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShrZXksIHZhbHVlLm1hdGNoKC9eWystXT8oXFxkKlxcLik/XFxkKyQvKSA/ICt2YWx1ZSA6IHZhbHVlKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hBdHRyaWJ1dGUoKTtcbiAgICAgICAgdGhpcy5wYWludCgpO1xuICAgIH1cbiAgICBzZXRQYXJhbVZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgICAgICh0aGlzLnBhcmFtcyBhcyBhbnkpW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5wYWludCgpO1xuICAgIH1cbiAgICBwYWludCgpIHt9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gXCI8Y2FudmFzPjwvY2FudmFzPlwiO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5cbmludGVyZmFjZSBMaXZlQnV0dG9uUGFyYW1zIGV4dGVuZHMgTGl2ZVBhcmFtcyB7XG4gICAgYWN0aXZlYmdjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZWJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJnY29sb3I6IHN0cmluZztcbiAgICBiZ29uY29sb3I6IHN0cmluZztcbiAgICBib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIGZvY3VzYm9yZGVyY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZUJ1dHRvbiBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZUJ1dHRvblBhcmFtcz4ge1xuICAgIHN0YXRpYyBnZXQgcGFyYW1zKCk6IExpdmVCdXR0b25QYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUuYnV0dG9uXCIsXG4gICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICBoZWlnaHQ6IDE1LFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcjogXCJyZ2JhKDkwLCA5MCwgOTAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3I6IFwicmdiYSgxMDksIDIxNSwgMjU1LCAxKVwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDkwLCA5MCwgOTAsIDEpXCIsXG4gICAgICAgICAgICBiZ29uY29sb3I6IFwicmdiYSgxOTUsIDE5NSwgMTk1LCAxKVwiLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcblxuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IDAuNTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjdHgubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQmdDb2xvciA9IGFjdGl2ZSA/ICh2YWx1ZSA/IGFjdGl2ZWJnb25jb2xvciA6IGFjdGl2ZWJnY29sb3IpIDogKHZhbHVlID8gYmdvbmNvbG9yIDogYmdjb2xvcik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkJvcmRlckNvbG9yID0gdmFsdWUgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJ1dHRvbkJnQ29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmVsbGlwc2Uod2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNSwgd2lkdGggKiAwLjUgLSAyICogYm9yZGVyV2lkdGgsIGhlaWdodCAqIDAuNSAtIDIgKiBib3JkZXJXaWR0aCwgMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBidXR0b25Cb3JkZXJDb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiAhdGhpcy5faW5Ub3VjaCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCAwKSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIDEpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgMCk7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvY2FtZWxjYXNlICovXG5pbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuaW1wb3J0IHsgdG9SYWQsIHJvdW5kZWRSZWN0LCBmaWxsUm91bmRlZFJlY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5pbnRlcmZhY2UgTGl2ZURpYWxQYXJhbXMgZXh0ZW5kcyBMaXZlUGFyYW1zIHtcbiAgICBmb250bmFtZTogc3RyaW5nO1xuICAgIGZvbnRzaXplOiBudW1iZXI7XG4gICAgZm9udGZhY2U6IFwicmVndWxhclwiIHwgXCJib2xkXCIgfCBcIml0YWxpY1wiIHwgXCJib2xkIGl0YWxpY1wiO1xuICAgIHNob3duYW1lOiBib29sZWFuO1xuICAgIHNob3dudW1iZXI6IGJvb2xlYW47XG4gICAgYXBwZWFyYW5jZTogXCJ2ZXJ0aWNhbFwiIHwgXCJ0aW55XCIgfCBcInBhbmVsXCI7XG4gICAgdHJpYW5nbGU6IGJvb2xlYW47XG4gICAgYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZlZGlhbGNvbG9yOiBzdHJpbmc7XG4gICAgZGlhbGNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZlbmVlZGxlY29sb3I6IHN0cmluZztcbiAgICBuZWVkbGVjb2xvcjogc3RyaW5nO1xuICAgIHBhbmVsY29sb3I6IHN0cmluZztcbiAgICB0ZXh0Y29sb3I6IHN0cmluZztcbiAgICB0cmlib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRyaWNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVEaWFsIGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlRGlhbFBhcmFtcz4ge1xuICAgIHN0YXRpYyBnZXQgcGFyYW1zKCk6IExpdmVEaWFsUGFyYW1zIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnBhcmFtcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLmRpYWxcIixcbiAgICAgICAgICAgIHdpZHRoOiA0NSxcbiAgICAgICAgICAgIGhlaWdodDogNDUsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEyLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgYXBwZWFyYW5jZTogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgdHJpYW5nbGU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd25hbWU6IHRydWUsXG4gICAgICAgICAgICBzaG93bnVtYmVyOiB0cnVlLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmVkaWFsY29sb3I6IFwicmdiYSgxMDksIDIxNSwgMjU1LCAxKVwiLFxuICAgICAgICAgICAgZGlhbGNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZW5lZWRsZWNvbG9yOiBcInJnYmEoNDAsIDQwLCA0MCwgMSlcIixcbiAgICAgICAgICAgIG5lZWRsZWNvbG9yOiBcInJnYmEoMTA1LCAxMDUsIDEwNSwgMSlcIixcbiAgICAgICAgICAgIHBhbmVsY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRyaWJvcmRlcmNvbG9yOiBcInJnYmEoNTAsIDUwLCA1MCwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yOiBcInJnYmEoNDAsIDQwLCA0MCwgMSlcIixcbiAgICAgICAgICAgIG1taW46IDAsXG4gICAgICAgICAgICBtbWF4OiAxMjcsXG4gICAgICAgICAgICB0eXBlOiBcImludFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG4gICAgaW50ZXJhY3Rpb25SZWN0OiBudW1iZXJbXSA9IFswLCAwLCAwLCAwXTtcblxuICAgIGdldCB0cnVlU3RlcHMoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgc3RlcHMsIHN0ZXAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBmdWxsID0gMTAwO1xuICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gbW1heCAtIG1taW4gOiBmdWxsO1xuICAgICAgICBpZiAoc3RlcCkge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIE1hdGgucm91bmQoc3RlcCkpLCBtYXhTdGVwcyk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5mbG9vcigobW1heCAtIG1taW4pIC8gc3RlcCksIG1heFN0ZXBzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RlcHMpIHJldHVybiBNYXRoLm1pbihzdGVwcywgbWF4U3RlcHMpO1xuICAgICAgICByZXR1cm4gbWF4U3RlcHM7XG4gICAgfVxuICAgIGdldCBkaXN0YW5jZSgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCB2YWx1ZSB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IHZhbHVlIC8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiB2YWx1ZSAvIChtbWF4IC0gbW1pbik7XG4gICAgfVxuICAgIGdldCBzdGVwUmFuZ2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgc3RlcCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGZ1bGwgPSAxMDA7XG4gICAgICAgIGlmIChzdGVwKSByZXR1cm4gdHlwZSA9PT0gXCJlbnVtXCIgPyBmdWxsIC8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gTWF0aC5yb3VuZChzdGVwKSAvIChtbWF4IC0gbW1pbikgKiBmdWxsIDogc3RlcCAvIChtbWF4IC0gbW1pbikgKiBmdWxsO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgcmV0dXJuIGZ1bGwgLyB0cnVlU3RlcHM7XG4gICAgfVxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIGFwcGVhcmFuY2UsXG4gICAgICAgICAgICB0cmlhbmdsZSxcbiAgICAgICAgICAgIHNob3duYW1lLFxuICAgICAgICAgICAgc2hvd251bWJlcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgcGFuZWxjb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZW5lZWRsZWNvbG9yLFxuICAgICAgICAgICAgbmVlZGxlY29sb3IsXG4gICAgICAgICAgICBhY3RpdmVkaWFsY29sb3IsXG4gICAgICAgICAgICBkaWFsY29sb3IsXG4gICAgICAgICAgICB0ZXh0Y29sb3IsXG4gICAgICAgICAgICB0cmlib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHRyaWNvbG9yLFxuICAgICAgICAgICAgc2hvcnRuYW1lXG4gICAgICAgIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG5cbiAgICAgICAgY29uc3QgdHJpYW5nbGVIZWlnaHQgPSA0O1xuICAgICAgICBjb25zdCB0cmlhbmdsZUxpbmVXaWR0aCA9IDAuNjtcblxuICAgICAgICBsZXQgc3RhcnQ6IG51bWJlcjtcbiAgICAgICAgbGV0IGVuZDogbnVtYmVyO1xuICAgICAgICBsZXQgdmFsUG9zOiBudW1iZXI7XG4gICAgICAgIGxldCBkaWFsSGVpZ2h0OiBudW1iZXI7XG5cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICBkaWFsSGVpZ2h0ID0gMTg7XG4gICAgICAgICAgICBzdGFydCA9IC0zICogTWF0aC5QSSAvIDI7XG4gICAgICAgICAgICBlbmQgPSAwO1xuICAgICAgICAgICAgdmFsUG9zID0gc3RhcnQgKyB0b1JhZCh0aGlzLmRpc3RhbmNlICogMjcwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpYWxIZWlnaHQgPSAyNTtcbiAgICAgICAgICAgIHN0YXJ0ID0gTWF0aC5QSSAtIDMgKiBNYXRoLlBJIC8gODtcbiAgICAgICAgICAgIGVuZCA9IDIgKiBNYXRoLlBJICsgMyAqIE1hdGguUEkgLyA4O1xuICAgICAgICAgICAgdmFsUG9zID0gc3RhcnQgKyB0b1JhZCh0aGlzLmRpc3RhbmNlICogMzE1KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkaWFsUmFkaXVzID0gZGlhbEhlaWdodCAvIDI7XG5cbiAgICAgICAgbGV0IGRpYWxDZW50ZXJYID0gd2lkdGggKiAwLjU7XG4gICAgICAgIGxldCBkaWFsQ2VudGVyWSA9IGhlaWdodCAqIDAuNSArIDE7XG4gICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInBhbmVsXCIpIHtcbiAgICAgICAgICAgIGRpYWxDZW50ZXJZICs9IDEwO1xuICAgICAgICB9IGVsc2UgaWYgKGFwcGVhcmFuY2UgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgaWYgKHNob3dudW1iZXIpIGRpYWxDZW50ZXJZIC09IGZvbnRzaXplIC0gNTtcbiAgICAgICAgICAgIGlmIChzaG93bmFtZSkgZGlhbENlbnRlclkgKz0gZm9udHNpemUgLSA1O1xuICAgICAgICAgICAgaWYgKHRyaWFuZ2xlKSBkaWFsQ2VudGVyWSArPSB0cmlhbmdsZUhlaWdodCAtIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoYXBwZWFyYW5jZSA9PT0gXCJ0aW55XCIpIHtcbiAgICAgICAgICAgIGlmIChzaG93bmFtZSkge1xuICAgICAgICAgICAgICAgIGRpYWxDZW50ZXJZICs9IDY7XG4gICAgICAgICAgICAgICAgZGlhbENlbnRlclggPSAxMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdCA9IFswLCBkaWFsQ2VudGVyWSAtIGRpYWxIZWlnaHQgLyAyLCB3aWR0aCwgZGlhbEhlaWdodF07XG4gICAgICAgIGNvbnN0IGFyY1N0YXJ0WCA9IGRpYWxDZW50ZXJYICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLmNvcyhzdGFydCkpO1xuICAgICAgICBjb25zdCBhcmNTdGFydFkgPSBkaWFsQ2VudGVyWSArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5zaW4oc3RhcnQpKTtcbiAgICAgICAgY29uc3QgYXJjRW5kWCA9IGRpYWxDZW50ZXJYICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLmNvcyhlbmQpKTtcbiAgICAgICAgY29uc3QgYXJjRW5kWSA9IGRpYWxDZW50ZXJZICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLnNpbihlbmQpKTtcbiAgICAgICAgY29uc3QgdmFsdWVQb3NYID0gZGlhbENlbnRlclggKyAoZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguY29zKHZhbFBvcykpO1xuICAgICAgICBjb25zdCB2YWx1ZVBvc1kgPSBkaWFsQ2VudGVyWSArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5zaW4odmFsUG9zKSk7XG4gICAgICAgIGNvbnN0IGVuZENhcFJhZGl1cyA9IDE7XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGxldCBwYW5lbE9mZnNldCA9IDA7XG5cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwicGFuZWxcIikge1xuICAgICAgICAgICAgcGFuZWxPZmZzZXQgPSA1O1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMC40O1xuICAgICAgICAgICAgcm91bmRlZFJlY3QoY3R4LCAxLCAxLCB3aWR0aCAtIDIsIGhlaWdodCAtIDIsIDUpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHBhbmVsY29sb3I7XG4gICAgICAgICAgICBmaWxsUm91bmRlZFJlY3QoY3R4LCAxLjIsIDEuMiwgd2lkdGggLSAyLjQsIDMwIC0gMC40LCBbNSwgNSwgMCwgMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYWN0aXZlID8gYWN0aXZlbmVlZGxlY29sb3IgOiBuZWVkbGVjb2xvcjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGN0eC5zdHJva2VTdHlsZTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kIGFyYyBlbmRjYXBzXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhhcmNTdGFydFgsIGFyY1N0YXJ0WSwgZW5kQ2FwUmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhhcmNFbmRYLCBhcmNFbmRZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kIGFyY1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBkaWFsUmFkaXVzLCBzdGFydCwgZW5kKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIGRyYXcgdmFsdWUgYXJjLCB3aGljaCBjaGFuZ2VzIGlmIHRyaWFuZ2xlIGlzIGVuYWJsZWRcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYWN0aXZlID8gYWN0aXZlZGlhbGNvbG9yIDogZGlhbGNvbG9yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3R4LnN0cm9rZVN0eWxlO1xuICAgICAgICBpZiAodHJpYW5nbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pZHBvaW50ID0gKHN0YXJ0ICsgZW5kKSAvIDI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBhY3RpdmUgPyBhY3RpdmVkaWFsY29sb3IgOiBkaWFsY29sb3I7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiAwLjUpIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBkaWFsUmFkaXVzLCBtaWRwb2ludCwgdmFsUG9zKTtcbiAgICAgICAgICAgIGVsc2UgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGRpYWxSYWRpdXMsIHZhbFBvcywgbWlkcG9pbnQpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZHJhdyB2YWx1ZSBhcmMgZW5kY2FwXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKGFyY1N0YXJ0WCwgYXJjU3RhcnRZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAvLyBkcmF3IHZhbHVlIGFyY1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGRpYWxSYWRpdXMsIHN0YXJ0LCB2YWxQb3MpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXcgZGlhbFxuICAgICAgICAvLyBkcmF3IGRpYWwgcm91bmQgZW5kY2Fwc1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBhY3RpdmUgPyBhY3RpdmVuZWVkbGVjb2xvciA6IG5lZWRsZWNvbG9yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3R4LnN0cm9rZVN0eWxlO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHZhbHVlUG9zWCwgdmFsdWVQb3NZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gZHJhdyBkaWFsIGxpbmVcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSk7XG4gICAgICAgIGN0eC5saW5lVG8odmFsdWVQb3NYLCB2YWx1ZVBvc1kpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIGFkZCB0ZXh0IGlmIGl0IGlzIGVuYWJsZWRcbiAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICBpZiAoc2hvd25hbWUpIHtcbiAgICAgICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInRpbnlcIikge1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoc2hvcnRuYW1lLCAwLCBwYW5lbE9mZnNldCArIGZvbnRzaXplLCB3aWR0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChzaG9ydG5hbWUsIHdpZHRoIC8gMiwgcGFuZWxPZmZzZXQgKyBmb250c2l6ZSwgd2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93bnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCB0aW55T2Zmc2V0ID0gYXBwZWFyYW5jZSA9PT0gXCJ0aW55XCIgPyAxMiA6IDA7XG4gICAgICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJ0aW55XCIpIHtcbiAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuZGlzcGxheVZhbHVlLCB0aW55T2Zmc2V0LCBoZWlnaHQgLSBwYW5lbE9mZnNldCwgd2lkdGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5kaXNwbGF5VmFsdWUsIHdpZHRoIC8gMiwgaGVpZ2h0IC0gcGFuZWxPZmZzZXQsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3IHRyaWFuZ2xlIGlmIGl0IGlzIGVuYWJsZWRcbiAgICAgICAgaWYgKHRyaWFuZ2xlKSB7XG4gICAgICAgICAgICBpZiAoIWRpc3RhbmNlKSBjdHguZmlsbFN0eWxlID0gdHJpY29sb3I7XG4gICAgICAgICAgICBlbHNlIGlmICghYWN0aXZlKSBjdHguZmlsbFN0eWxlID0gZGlhbGNvbG9yO1xuICAgICAgICAgICAgZWxzZSBjdHguZmlsbFN0eWxlID0gYWN0aXZlZGlhbGNvbG9yO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlwUG9zaXRpb25YID0gZGlhbENlbnRlclggKyBkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5jb3MoLTMgKiBNYXRoLlBJIC8gNCkgLSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpcFBvc2l0aW9uWSA9IGRpYWxDZW50ZXJZICsgZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguc2luKC0zICogTWF0aC5QSSAvIDQpIC0gMTtcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHRpcFBvc2l0aW9uWCwgdGlwUG9zaXRpb25ZKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHRpcFBvc2l0aW9uWCAtIHRyaWFuZ2xlSGVpZ2h0LCB0aXBQb3NpdGlvblkpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odGlwUG9zaXRpb25YLCB0aXBQb3NpdGlvblkgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh0aXBQb3NpdGlvblgsIHRpcFBvc2l0aW9uWSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oZGlhbENlbnRlclggLSB0cmlhbmdsZUhlaWdodCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSAtIHRyaWFuZ2xlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKGRpYWxDZW50ZXJYICsgdHJpYW5nbGVIZWlnaHQsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJpYm9yZGVyY29sb3IgfHwgXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRyaWFuZ2xlTGluZVdpZHRoO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFZhbHVlRnJvbURlbHRhKGU6IFBvaW50ZXJEcmFnRXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWluLCBtbWF4IH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3Qgc3RlcFJhbmdlID0gdGhpcy5zdGVwUmFuZ2U7XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICBjb25zdCBzdGVwID0gdHlwZSA9PT0gXCJlbnVtXCIgPyAxIDogKHRoaXMucGFyYW1zLnN0ZXAgfHwgKG1tYXggLSBtbWluKSAvIHRydWVTdGVwcyk7XG4gICAgICAgIGNvbnN0IHByZXZTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gZS5wcmV2VmFsdWUgOiBlLnByZXZWYWx1ZSAvIHN0ZXA7XG4gICAgICAgIGNvbnN0IGRTdGVwcyA9IE1hdGgucm91bmQoKGUuZnJvbVkgLSBlLnkpIC8gc3RlcFJhbmdlKTtcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBNYXRoLm1pbih0cnVlU3RlcHMsIE1hdGgubWF4KDAsIHByZXZTdGVwcyArIGRTdGVwcykpO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiBzdGVwcztcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLnJvdW5kKHN0ZXBzICogc3RlcCArIG1taW4pO1xuICAgICAgICByZXR1cm4gc3RlcHMgKiBzdGVwICsgbW1pbjtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoZTogUG9pbnRlckRvd25FdmVudCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBlLnggPCB0aGlzLmludGVyYWN0aW9uUmVjdFswXVxuICAgICAgICAgICAgfHwgZS54ID4gdGhpcy5pbnRlcmFjdGlvblJlY3RbMF0gKyB0aGlzLmludGVyYWN0aW9uUmVjdFsyXVxuICAgICAgICAgICAgfHwgZS55IDwgdGhpcy5pbnRlcmFjdGlvblJlY3RbMV1cbiAgICAgICAgICAgIHx8IGUueSA+IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbM11cbiAgICAgICAgKSByZXR1cm47XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5faW5Ub3VjaCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tRGVsdGEoZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5wYXJhbXMudmFsdWUpIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvY2FtZWxjYXNlICovXG5pbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZVNsaWRlclBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIHJlbGF0aXZlOiBib29sZWFuO1xuICAgIGZvbnRuYW1lOiBzdHJpbmc7XG4gICAgZm9udHNpemU6IG51bWJlcjtcbiAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIgfCBcImJvbGRcIiB8IFwiaXRhbGljXCIgfCBcImJvbGQgaXRhbGljXCI7XG4gICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB8IFwiaG9yaXpvbnRhbFwiO1xuICAgIHNob3duYW1lOiBib29sZWFuO1xuICAgIHNob3dudW1iZXI6IGJvb2xlYW47XG4gICAgc2xpZGVyY29sb3I6IHN0cmluZztcbiAgICB0ZXh0Y29sb3I6IHN0cmluZztcbiAgICB0cmlib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRyaW9uY29sb3I6IHN0cmluZztcbiAgICB0cmljb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlU2xpZGVyIGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlU2xpZGVyUGFyYW1zPiB7XG4gICAgc3RhdGljIGdldCBwYXJhbXMoKTogTGl2ZVNsaWRlclBhcmFtcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wYXJhbXMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS5zbGlkZXJcIixcbiAgICAgICAgICAgIHdpZHRoOiA0MCxcbiAgICAgICAgICAgIGhlaWdodDogOTAsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEyLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIHNob3duYW1lOiB0cnVlLFxuICAgICAgICAgICAgc2hvd251bWJlcjogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlcmNvbG9yOiBcInJnYmEoNDAsIDQwLCA0MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmlib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICB0cmlvbmNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIHJlbGF0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1taW46IDAsXG4gICAgICAgICAgICBtbWF4OiAxMjcsXG4gICAgICAgICAgICB0eXBlOiBcImludFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG4gICAgaW50ZXJhY3Rpb25SZWN0OiBudW1iZXJbXSA9IFswLCAwLCAwLCAwXTtcblxuICAgIGdldCB0cnVlU3RlcHMoKSB7XG4gICAgICAgIGNvbnN0IHsgb3JpZW50YXRpb24sIHR5cGUsIG1tYXgsIG1taW4sIHN0ZXBzLCBzdGVwIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgZnVsbCA9IHRoaXMuaW50ZXJhY3Rpb25SZWN0W29yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyAzIDogMl07XG4gICAgICAgIGNvbnN0IG1heFN0ZXBzID0gdHlwZSA9PT0gXCJlbnVtXCIgPyB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aCA6IHR5cGUgPT09IFwiaW50XCIgPyBtbWF4IC0gbW1pbiA6IGZ1bGw7XG4gICAgICAgIGlmIChzdGVwKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5taW4oTWF0aC5mbG9vcigobW1heCAtIG1taW4pIC8gTWF0aC5yb3VuZChzdGVwKSksIG1heFN0ZXBzKTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBzdGVwKSwgbWF4U3RlcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGVwcykgcmV0dXJuIE1hdGgubWluKHN0ZXBzLCBtYXhTdGVwcyk7XG4gICAgICAgIHJldHVybiBtYXhTdGVwcztcbiAgICB9XG4gICAgZ2V0IGRpc3RhbmNlKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHZhbHVlIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gdmFsdWUgLyB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aCA6IHZhbHVlIC8gKG1tYXggLSBtbWluKTtcbiAgICB9XG4gICAgZ2V0IHN0ZXBSYW5nZSgpIHtcbiAgICAgICAgY29uc3QgeyBvcmllbnRhdGlvbiwgdHlwZSwgbW1heCwgbW1pbiwgc3RlcCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGZ1bGwgPSB0aGlzLmludGVyYWN0aW9uUmVjdFtvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gMyA6IDJdO1xuICAgICAgICBpZiAoc3RlcCkgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gZnVsbCAvIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IE1hdGgucm91bmQoc3RlcCkgLyAobW1heCAtIG1taW4pICogZnVsbCA6IHN0ZXAgLyAobW1heCAtIG1taW4pICogZnVsbDtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIHJldHVybiBmdWxsIC8gdHJ1ZVN0ZXBzO1xuICAgIH1cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBmb250bmFtZSxcbiAgICAgICAgICAgIGZvbnRzaXplLFxuICAgICAgICAgICAgZm9udGZhY2UsXG4gICAgICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgICAgIHNob3duYW1lLFxuICAgICAgICAgICAgc2hvd251bWJlcixcbiAgICAgICAgICAgIHNsaWRlcmNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0cmlvbmNvbG9yLFxuICAgICAgICAgICAgdHJpY29sb3IsXG4gICAgICAgICAgICBzaG9ydG5hbWVcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gMC41O1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gODtcbiAgICAgICAgY29uc3QgcG9wb3ZlclR5cGUgPSBcIlZBTFVFX0xBQkVMXCI7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTtcbiAgICAgICAgY29uc3QgZGlzcGxheVZhbHVlID0gdGhpcy5kaXNwbGF5VmFsdWU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzbGlkZXJjb2xvcjtcblxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh3aWR0aCAqIDAuNSwgZm9udHNpemUgKyBwYWRkaW5nKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8od2lkdGggKiAwLjUsIGhlaWdodCAtIChmb250c2l6ZSArIHBhZGRpbmcpKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25XaWR0aCA9IHdpZHRoICogMC41O1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3QgPSBbXG4gICAgICAgICAgICAgICAgd2lkdGggKiAwLjUgLSBpbnRlcmFjdGlvbldpZHRoIC8gMixcbiAgICAgICAgICAgICAgICBmb250c2l6ZSArIHBhZGRpbmcsXG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25XaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQgLSAyICogKGZvbnRzaXplICsgcGFkZGluZylcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJpYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBjb25zdCB0cmlPcmlnaW46IFtudW1iZXIsIG51bWJlcl0gPSBbXG4gICAgICAgICAgICAgICAgd2lkdGggKiAwLjUgKyBsaW5lV2lkdGggLyAyICsgMC41LFxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdIC0gNCArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdICogKDEgLSBkaXN0YW5jZSlcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgNCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDgsIHRyaU9yaWdpblsxXSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDgsIHRyaU9yaWdpblsxXSArIDgpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0sIHRyaU9yaWdpblsxXSArIDQpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5faW5Ub3VjaCA/IHRyaW9uY29sb3IgOiB0cmljb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Zm9udGZhY2UgPT09IFwicmVndWxhclwiID8gXCJcIiA6IGZvbnRmYWNlfSAke2ZvbnRzaXplfXB4ICR7Zm9udG5hbWV9LCBzYW5zLXNlcmlmYDtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRleHRjb2xvcjtcbiAgICAgICAgICAgIGlmIChzaG93bmFtZSkgY3R4LmZpbGxUZXh0KHNob3J0bmFtZSwgd2lkdGggLyAyLCBmb250c2l6ZSwgd2lkdGgpO1xuICAgICAgICAgICAgaWYgKHNob3dudW1iZXIpIGN0eC5maWxsVGV4dChkaXNwbGF5VmFsdWUsIHdpZHRoIC8gMiwgaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHBhZGRpbmcsIGhlaWdodCAqIDAuNSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoIC0gcGFkZGluZywgaGVpZ2h0ICogMC41KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25XaWR0aCA9IGhlaWdodCAqIDAuNTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0ID0gW1xuICAgICAgICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICogMC41IC0gaW50ZXJhY3Rpb25XaWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgd2lkdGggLSAyICogcGFkZGluZyxcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbldpZHRoXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRyaWJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgY29uc3QgdHJpT3JpZ2luOiBbbnVtYmVyLCBudW1iZXJdID0gW1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl0gKiBkaXN0YW5jZSAtIDQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICogMC41ICsgbGluZVdpZHRoIC8gMiArIDJcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDQsIHRyaU9yaWdpblsxXSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDgsIHRyaU9yaWdpblsxXSArIDgpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0sIHRyaU9yaWdpblsxXSArIDgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5faW5Ub3VjaCA/IHRyaW9uY29sb3IgOiB0cmljb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Zm9udGZhY2UgPT09IFwicmVndWxhclwiID8gXCJcIiA6IGZvbnRmYWNlfSAke2ZvbnRzaXplfXB4ICR7Zm9udG5hbWV9LCBzYW5zLXNlcmlmYDtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRleHRjb2xvcjtcbiAgICAgICAgICAgIGlmIChzaG93bmFtZSkgY3R4LmZpbGxUZXh0KHNob3J0bmFtZSwgd2lkdGggLyAyLCBmb250c2l6ZSwgd2lkdGgpO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgaWYgKHNob3dudW1iZXIpIGN0eC5maWxsVGV4dChkaXNwbGF5VmFsdWUsIDQsIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFZhbHVlRnJvbVBvcyhlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcbiAgICAgICAgY29uc3QgeyBvcmllbnRhdGlvbiwgdHlwZSwgbW1pbiwgbW1heCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IHN0ZXBSYW5nZSA9IHRoaXMuc3RlcFJhbmdlO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgY29uc3Qgc3RlcCA9IHRoaXMucGFyYW1zLnN0ZXAgfHwgKG1tYXggLSBtbWluKSAvIHRydWVTdGVwcztcbiAgICAgICAgbGV0IHN0ZXBzID0gTWF0aC5yb3VuZCgob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdIC0gKGUueSAtIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdKSA6IGUueCAtIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdKSAvIHN0ZXBSYW5nZSk7XG4gICAgICAgIHN0ZXBzID0gTWF0aC5taW4odHJ1ZVN0ZXBzLCBNYXRoLm1heCgwLCBzdGVwcykpO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiBzdGVwcztcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLnJvdW5kKHN0ZXBzICogc3RlcCArIG1taW4pO1xuICAgICAgICByZXR1cm4gc3RlcHMgKiBzdGVwICsgbW1pbjtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoZTogUG9pbnRlckRvd25FdmVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IHJlbGF0aXZlLCB2YWx1ZSB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGUueCA8IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdXG4gICAgICAgICAgICB8fCBlLnggPiB0aGlzLmludGVyYWN0aW9uUmVjdFswXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzJdXG4gICAgICAgICAgICB8fCBlLnkgPCB0aGlzLmludGVyYWN0aW9uUmVjdFsxXVxuICAgICAgICAgICAgfHwgZS55ID4gdGhpcy5pbnRlcmFjdGlvblJlY3RbMV0gKyB0aGlzLmludGVyYWN0aW9uUmVjdFszXVxuICAgICAgICApIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbVBvcyhlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB2YWx1ZSkgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgdGhpcy5nZXRWYWx1ZUZyb21Qb3MoZSkpO1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlckRyYWdFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2luVG91Y2gpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbVBvcyhlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLnBhcmFtcy52YWx1ZSkgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgbmV3VmFsdWUpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5pbXBvcnQgeyBmaWxsUm91bmRlZFJlY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5pbnRlcmZhY2UgTGl2ZVRleHRQYXJhbXMgZXh0ZW5kcyBMaXZlUGFyYW1zIHtcbiAgICBmb250bmFtZTogc3RyaW5nO1xuICAgIGZvbnRzaXplOiBudW1iZXI7XG4gICAgZm9udGZhY2U6IFwicmVndWxhclwiIHwgXCJib2xkXCIgfCBcIml0YWxpY1wiIHwgXCJib2xkIGl0YWxpY1wiO1xuICAgIGFjdGl2ZWJnY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmViZ29uY29sb3I6IHN0cmluZztcbiAgICBiZ2NvbG9yOiBzdHJpbmc7XG4gICAgYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dGNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dG9uY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmV0ZXh0Y29sb3I6IHN0cmluZztcbiAgICBhY3RpdmV0ZXh0b25jb2xvcjogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICB0ZXh0b246IHN0cmluZztcbiAgICBtb2RlOiBcImJ1dHRvblwiIHwgXCJ0b2dnbGVcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVRleHQgZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVUZXh0UGFyYW1zPiB7XG4gICAgc3RhdGljIGdldCBwYXJhbXMoKTogTGl2ZVRleHRQYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUudGV4dFwiLFxuICAgICAgICAgICAgd2lkdGg6IDkwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0NSxcbiAgICAgICAgICAgIGZvbnRuYW1lOiBcIkFyaWFsXCIsXG4gICAgICAgICAgICBmb250c2l6ZTogMTIsXG4gICAgICAgICAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZWJnb25jb2xvcjogXCJyZ2JhKDI1NSwgMTgxLCA1MCwgMSlcIixcbiAgICAgICAgICAgIGJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYmdvbmNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRvbmNvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0b25jb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0OiBcIkFcIixcbiAgICAgICAgICAgIHRleHRvbjogXCJCXCIsXG4gICAgICAgICAgICBtb2RlOiBcInRvZ2dsZVwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgZm9udG5hbWUsXG4gICAgICAgICAgICBmb250c2l6ZSxcbiAgICAgICAgICAgIGZvbnRmYWNlLFxuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIHRleHRvbixcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3IsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgYmdvbmNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdGV4dG9uY29sb3IsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0Y29sb3IsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0b25jb2xvcixcbiAgICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cbiAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSAwLjU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkJnQ29sb3IgPSBhY3RpdmUgPyAodmFsdWUgPyBhY3RpdmViZ29uY29sb3IgOiBhY3RpdmViZ2NvbG9yKSA6ICh2YWx1ZSA/IGJnb25jb2xvciA6IGJnY29sb3IpO1xuICAgICAgICBjb25zdCBidXR0b25Cb3JkZXJDb2xvciA9IHZhbHVlID8gZm9jdXNib3JkZXJjb2xvciA6IGJvcmRlcmNvbG9yO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBidXR0b25CZ0NvbG9yO1xuICAgICAgICBpZiAobW9kZSA9PT0gXCJidXR0b25cIikge1xuICAgICAgICAgICAgZmlsbFJvdW5kZWRSZWN0KGN0eCwgMC41LCAwLjUsIHdpZHRoIC0gMSwgaGVpZ2h0IC0gMSwgaGVpZ2h0IC8gMiAtIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LnJlY3QoMC41LCAwLjUsIHdpZHRoIC0gMSwgaGVpZ2h0IC0gMSk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAwLjU7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGJ1dHRvbkJvcmRlckNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGFjdGl2ZSA/ICh2YWx1ZSA/IGFjdGl2ZXRleHRvbmNvbG9yIDogYWN0aXZldGV4dGNvbG9yKSA6ICh2YWx1ZSA/IHRleHRvbmNvbG9yIDogdGV4dGNvbG9yKTtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHZhbHVlICYmIG1vZGUgPT09IFwidG9nZ2xlXCIgPyB0ZXh0b24gOiB0ZXh0LCB3aWR0aCAqIDAuNSwgKGhlaWdodCArIGZvbnRzaXplKSAqIDAuNSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHZhbHVlLCBtb2RlIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIG1vZGUgPT09IFwiYnV0dG9uXCIgPyAxIDogMSAtIHZhbHVlKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5tb2RlID09PSBcImJ1dHRvblwiKSB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCAwKTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5cbmludGVyZmFjZSBMaXZlVG9nZ2xlUGFyYW1zIGV4dGVuZHMgTGl2ZVBhcmFtcyB7XG4gICAgYWN0aXZlYmdjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZWJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJnY29sb3I6IHN0cmluZztcbiAgICBiZ29uY29sb3I6IHN0cmluZztcbiAgICBib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIGZvY3VzYm9yZGVyY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVRvZ2dsZSBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZVRvZ2dsZVBhcmFtcz4ge1xuICAgIHN0YXRpYyBnZXQgcGFyYW1zKCk6IExpdmVUb2dnbGVQYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUudG9nZ2xlXCIsXG4gICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICBoZWlnaHQ6IDE1LFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3I6IFwicmdiYSgyNTUsIDE4MSwgNTAsIDEpXCIsXG4gICAgICAgICAgICBiZ2NvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIGJnb25jb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcblxuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IDAuNTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjdHgubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQmdDb2xvciA9IGFjdGl2ZSA/ICh2YWx1ZSA/IGFjdGl2ZWJnb25jb2xvciA6IGFjdGl2ZWJnY29sb3IpIDogKHZhbHVlID8gYmdvbmNvbG9yIDogYmdjb2xvcik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkJvcmRlckNvbG9yID0gdmFsdWUgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJ1dHRvbkJnQ29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnJlY3QoYm9yZGVyV2lkdGgsIGJvcmRlcldpZHRoLCB3aWR0aCAtIDIgKiBib3JkZXJXaWR0aCwgaGVpZ2h0IC0gMiAqIGJvcmRlcldpZHRoKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYnV0dG9uQm9yZGVyQ29sb3I7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCAxIC0gdmFsdWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBMaXZlQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IExpdmVTbGlkZXIgZnJvbSBcIi4vU2xpZGVyXCI7XG5pbXBvcnQgTGl2ZURpYWwgZnJvbSBcIi4vRGlhbFwiO1xuaW1wb3J0IExpdmVUb2dnbGUgZnJvbSBcIi4vVG9nZ2xlXCI7XG5pbXBvcnQgTGl2ZVRleHQgZnJvbSBcIi4vVGV4dFwiO1xuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1idXR0b25cIiwgTGl2ZUJ1dHRvbik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS10b2dnbGVcIiwgTGl2ZVRvZ2dsZSk7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1zbGlkZXJcIiwgTGl2ZVNsaWRlcik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1kaWFsXCIsIExpdmVEaWFsKTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXZlLXRleHRcIiwgTGl2ZVRleHQpO1xuIiwiZXhwb3J0IGNvbnN0IHRvTUlESSA9IChmOiBudW1iZXIpID0+IFtcIkNcIiwgXCJDI1wiLCBcIkRcIiwgXCJEI1wiLCBcIkVcIiwgXCJGXCIsIFwiRiNcIiwgXCJHXCIsIFwiRyNcIiwgXCJBXCIsIFwiQSNcIiwgXCJCXCJdWyhmICUgMTIgKyAxMikgJSAxMl0gKyBNYXRoLnJvdW5kKGYgLyAxMiAtIDIpO1xuZXhwb3J0IGNvbnN0IHRvUmFkID0gKGRlZ3JlZXM6IG51bWJlcikgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG5leHBvcnQgY29uc3Qgcm91bmRlZFJlY3QgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmFkaXVzOiBudW1iZXIgfCBudW1iZXJbXSkgPT4ge1xuICAgIGNvbnN0IHJhZGlpID0gWzAsIDAsIDAsIDBdO1xuICAgIGlmICh0eXBlb2YgcmFkaXVzID09PSBcIm51bWJlclwiKSByYWRpaS5maWxsKHJhZGl1cyk7XG4gICAgZWxzZSByYWRpdXMuZm9yRWFjaCgodiwgaSkgPT4gcmFkaWlbaV0gPSB2KTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaWlbMF0sIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaWlbMV0sIHkpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaWlbMV0pO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaWlbMl0pO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoIC0gcmFkaWlbMl0sIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCArIHJhZGlpWzNdLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaWlbM10pO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHJhZGlpWzBdKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaWlbMF0sIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG59O1xuZXhwb3J0IGNvbnN0IGZpbGxSb3VuZGVkUmVjdCA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCByYWRpdXM6IG51bWJlciB8IG51bWJlcltdKSA9PiB7XG4gICAgY29uc3QgcmFkaWkgPSBbMCwgMCwgMCwgMF07XG4gICAgaWYgKHR5cGVvZiByYWRpdXMgPT09IFwibnVtYmVyXCIpIHJhZGlpLmZpbGwocmFkaXVzKTtcbiAgICBlbHNlIHJhZGl1cy5mb3JFYWNoKCh2LCBpKSA9PiByYWRpaVtpXSA9IHYpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHggKyByYWRpaVswXSwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpaVsxXSwgeSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpaVsxXSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpaVsyXSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpaVsyXSwgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaWlbM10sIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByYWRpaVszXSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaWlbMF0pO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpaVswXSwgeSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==