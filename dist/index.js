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
      fontname: "Arial",
      fontsize: 10,
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
      width: 45,
      height: 45,
      shortname: "live.dial",
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
      fontname: "Arial",
      fontsize: 10,
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
      width: 40,
      height: 90,
      shortname: "live.slider",
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




window.customElements.define("live-button", _Button__WEBPACK_IMPORTED_MODULE_0__["default"]);
window.customElements.define("live-toggle", _Toggle__WEBPACK_IMPORTED_MODULE_3__["default"]);
window.customElements.define("live-slider", _Slider__WEBPACK_IMPORTED_MODULE_1__["default"]);
window.customElements.define("live-dial", _Dial__WEBPACK_IMPORTED_MODULE_2__["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9CYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQmFzZS5zY3NzPzdiNzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGlhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2xpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9Ub2dnbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6WyJMaXZlQmFzZUNvbXBvbmVudCIsIkhUTUxFbGVtZW50IiwiY29uc3RydWN0b3IiLCJyb290IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImlubmVySFRNTCIsInJlbmRlciIsIkxpdmVDb21wb25lbnQiLCJvYnNlcnZlZEF0dHJpYnV0ZXMiLCJPYmplY3QiLCJrZXlzIiwicGFyYW1zIiwiY2FudmFzIiwiY3R4IiwiaGFuZGxlS2V5RG93biIsImUiLCJoYW5kbGVLZXlVcCIsImhhbmRsZVRvdWNoU3RhcnQiLCJoYW5kbGVXaGVlbCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlTW91c2VEb3duIiwicHJldmVudERlZmF1bHQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZnJvbVgiLCJwYWdlWCIsImxlZnQiLCJmcm9tWSIsInBhZ2VZIiwidG9wIiwicHJldlZhbHVlIiwidmFsdWUiLCJoYW5kbGVQb2ludGVyRG93biIsIngiLCJ5Iiwib3JpZ2luYWxFdmVudCIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZVBvaW50ZXJEcmFnIiwibW92ZW1lbnRYIiwibW92ZW1lbnRZIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZVBvaW50ZXJVcCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNb3VzZU92ZXIiLCJoYW5kbGVNb3VzZU91dCIsImhhbmRsZUNvbnRleHRNZW51IiwicGFzc2l2ZSIsImNoaWxkcmVuIiwiZ2V0Q29udGV4dCIsImRpc3BsYXlWYWx1ZSIsInR5cGUiLCJ1bml0c3R5bGUiLCJ1bml0cyIsImVudW0iLCJ0b0ZpeGVkIiwiTWF0aCIsImFicyIsInRvTUlESSIsImZldGNoQXR0cmlidXRlIiwiaSIsImhvc3QiLCJhdHRyaWJ1dGVzIiwibGVuZ3RoIiwiYXR0ciIsIm5hbWUiLCJtYXRjaCIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsImtleSIsIm9sZFZhbHVlIiwiaXNDb25uZWN0ZWQiLCJzZXRQYXJhbVZhbHVlIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJwYWludCIsImFjdGl2ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2hvcnRuYW1lIiwibG9uZ25hbWUiLCJvcmRlciIsImxpbmtuYW1lcyIsIm1taW4iLCJtbWF4IiwiZW51bV9pY29ucyIsIm1vZG1vZGUiLCJpbml0aWFsX2VuYWJsZSIsImluaXRpYWwiLCJleHBvbmVudCIsInN0ZXAiLCJzdGVwcyIsInNwZWVkbGltIiwiZGVmZXIiLCJpbnZpc2libGUiLCJtYXBwYWJsZSIsIkxpdmVCdXR0b24iLCJfaW5Ub3VjaCIsImFjdGl2ZWJnY29sb3IiLCJhY3RpdmViZ29uY29sb3IiLCJiZ2NvbG9yIiwiYmdvbmNvbG9yIiwiYm9yZGVyY29sb3IiLCJmb2N1c2JvcmRlcmNvbG9yIiwiYm9yZGVyV2lkdGgiLCJzdHlsZSIsImxpbmVXaWR0aCIsImJ1dHRvbkJnQ29sb3IiLCJidXR0b25Cb3JkZXJDb2xvciIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImVsbGlwc2UiLCJQSSIsImZpbGwiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInNldFRpbWVvdXQiLCJyZXNldFBvaW50ZXJzIiwiTGl2ZURpYWwiLCJpbnRlcmFjdGlvblJlY3QiLCJuZXdWYWx1ZSIsImdldFZhbHVlRnJvbURlbHRhIiwiZm9udG5hbWUiLCJmb250c2l6ZSIsImZvbnRmYWNlIiwiYXBwZWFyYW5jZSIsInRyaWFuZ2xlIiwic2hvd25hbWUiLCJzaG93bnVtYmVyIiwiYWN0aXZlZGlhbGNvbG9yIiwiZGlhbGNvbG9yIiwiYWN0aXZlbmVlZGxlY29sb3IiLCJuZWVkbGVjb2xvciIsInBhbmVsY29sb3IiLCJ0ZXh0Y29sb3IiLCJ0cmlib3JkZXJjb2xvciIsInRyaWNvbG9yIiwidHJ1ZVN0ZXBzIiwiZnVsbCIsIm1heFN0ZXBzIiwibWluIiwiZmxvb3IiLCJyb3VuZCIsImRpc3RhbmNlIiwic3RlcFJhbmdlIiwidHJpYW5nbGVIZWlnaHQiLCJ0cmlhbmdsZUxpbmVXaWR0aCIsInN0YXJ0IiwiZW5kIiwidmFsUG9zIiwiZGlhbEhlaWdodCIsInRvUmFkIiwiZGlhbFJhZGl1cyIsImRpYWxDZW50ZXJYIiwiZGlhbENlbnRlclkiLCJhcmNTdGFydFgiLCJjb3MiLCJhcmNTdGFydFkiLCJzaW4iLCJhcmNFbmRYIiwiYXJjRW5kWSIsInZhbHVlUG9zWCIsInZhbHVlUG9zWSIsImVuZENhcFJhZGl1cyIsInBhbmVsT2Zmc2V0Iiwicm91bmRlZFJlY3QiLCJmaWxsUm91bmRlZFJlY3QiLCJhcmMiLCJtaWRwb2ludCIsIm1vdmVUbyIsImxpbmVUbyIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsInRpbnlPZmZzZXQiLCJ0aXBQb3NpdGlvblgiLCJ0aXBQb3NpdGlvblkiLCJwcmV2U3RlcHMiLCJkU3RlcHMiLCJtYXgiLCJMaXZlU2xpZGVyIiwicmVsYXRpdmUiLCJnZXRWYWx1ZUZyb21Qb3MiLCJvcmllbnRhdGlvbiIsInNsaWRlcmNvbG9yIiwidHJpb25jb2xvciIsInBhZGRpbmciLCJwb3BvdmVyVHlwZSIsImludGVyYWN0aW9uV2lkdGgiLCJ0cmlPcmlnaW4iLCJMaXZlVG9nZ2xlIiwid2luZG93IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJmIiwiZGVncmVlcyIsInJhZGl1cyIsInJhZGlpIiwiZm9yRWFjaCIsInYiLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiY2xvc2VQYXRoIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FB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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FB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QUFLLENBQUMsQ0FBRCxDQUF6RDtBQUNBdkwsS0FBRyxDQUFDNEosTUFBSixDQUFXeEksQ0FBWCxFQUFjQyxDQUFDLEdBQUdrSyxLQUFLLENBQUMsQ0FBRCxDQUF2QjtBQUNBdkwsS0FBRyxDQUFDMEwsZ0JBQUosQ0FBcUJ0SyxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkJELENBQUMsR0FBR21LLEtBQUssQ0FBQyxDQUFELENBQXBDLEVBQXlDbEssQ0FBekM7QUFDQXJCLEtBQUcsQ0FBQzJMLFNBQUo7QUFDQTNMLEtBQUcsQ0FBQ21HLElBQUo7QUFDSCxDQWhCTSxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGl2ZS1idXR0b24sIGxpdmUtc2xpZGVyLCBsaXZlLWRpYWwsIGxpdmUtdG9nZ2xlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0Jhc2Uuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9CYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0Jhc2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IFwiLi9CYXNlLnNjc3NcIjtcbmltcG9ydCB7IHRvTUlESSB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBMaXZlQmFzZUNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICByb290OiBTaGFkb3dSb290O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucm9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJvcGVuXCIgfSk7XG4gICAgICAgIHRoaXMucm9vdC5pbm5lckhUTUwgPSB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVDb21wb25lbnQ8VCBleHRlbmRzIExpdmVQYXJhbXM+IGV4dGVuZHMgTGl2ZUJhc2VDb21wb25lbnQge1xuICAgIHN0YXRpYyBwYXJhbXM6IExpdmVQYXJhbXMgPSB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgaGVpZ2h0OiAxNSxcbiAgICAgICAgc2hvcnRuYW1lOiBcIlwiLFxuICAgICAgICBsb25nbmFtZTogXCJcIixcbiAgICAgICAgb3JkZXI6IDAsXG4gICAgICAgIGxpbmtuYW1lczogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwiZmxvYXRcIixcbiAgICAgICAgbW1pbjogMCxcbiAgICAgICAgbW1heDogMSxcbiAgICAgICAgZW51bTogW10sXG4gICAgICAgIGVudW1faWNvbnM6IFtdLFxuICAgICAgICBtb2Rtb2RlOiBcIm5vbmVcIixcbiAgICAgICAgaW5pdGlhbF9lbmFibGU6IGZhbHNlLFxuICAgICAgICBpbml0aWFsOiBbMF0sXG4gICAgICAgIHVuaXRzdHlsZTogXCJmbG9hdFwiLFxuICAgICAgICB1bml0czogXCJcIixcbiAgICAgICAgZXhwb25lbnQ6IDEsXG4gICAgICAgIHN0ZXA6IDAsXG4gICAgICAgIHN0ZXBzOiAwLFxuICAgICAgICBzcGVlZGxpbTogNSxcbiAgICAgICAgZGVmZXI6IGZhbHNlLFxuICAgICAgICBpbnZpc2libGU6IFwiYXV0b21hdGVkXCIsXG4gICAgICAgIG1hcHBhYmxlOiB0cnVlXG4gICAgfVxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5wYXJhbXMpO1xuICAgIH1cbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHBhcmFtczogVDtcblxuICAgIGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge307XG4gICAgaGFuZGxlS2V5VXAgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge307XG4gICAgaGFuZGxlVG91Y2hTdGFydCA9IChlOiBUb3VjaEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVXaGVlbCA9IChlOiBXaGVlbEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVDbGljayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVNb3VzZURvd24gPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgZnJvbVggPSBlLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICBjb25zdCBmcm9tWSA9IGUucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgY29uc3QgcHJldlZhbHVlID0gdGhpcy5wYXJhbXMudmFsdWU7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlckRvd24oeyB4OiBmcm9tWCwgeTogZnJvbVksIG9yaWdpbmFsRXZlbnQ6IGUgfSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBlLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJEcmFnKHsgcHJldlZhbHVlLCB4LCB5LCBmcm9tWCwgZnJvbVksIG1vdmVtZW50WDogZS5tb3ZlbWVudFgsIG1vdmVtZW50WTogZS5tb3ZlbWVudFksIG9yaWdpbmFsRXZlbnQ6IGUgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGUucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyVXAoeyB4LCB5LCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG4gICAgfTtcbiAgICBoYW5kbGVNb3VzZU92ZXIgPSAoZTogTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlTW91c2VPdXQgPSAoZTogTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlQ29udGV4dE1lbnUgPSAoZTogTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoZTogUG9pbnRlckRvd25FdmVudCkgPT4ge307XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlckRyYWdFdmVudCkgPT4ge307XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKGU6IFBvaW50ZXJVcEV2ZW50KSA9PiB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuaGFuZGxlS2V5VXApO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuaGFuZGxlVG91Y2hTdGFydCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcy5oYW5kbGVXaGVlbCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2spO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5oYW5kbGVNb3VzZURvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCB0aGlzLmhhbmRsZU1vdXNlT3Zlcik7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIHRoaXMuaGFuZGxlTW91c2VPdXQpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMucm9vdC5jaGlsZHJlblswXSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMucGFyYW1zID0gKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIExpdmVDb21wb25lbnQpLnBhcmFtcyBhcyBUO1xuICAgIH1cbiAgICBnZXQgZGlzcGxheVZhbHVlKCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlLCB0eXBlLCB1bml0c3R5bGUsIHVuaXRzIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gdGhpcy5wYXJhbXMuZW51bVt2YWx1ZV07XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiaW50XCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKDApO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcImZsb2F0XCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcInRpbWVcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIG1zXCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiaGVydHpcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIEh6XCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiZGVjaWJlbFwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgZEJcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCIlXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiAlXCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwicGFuXCIpIHJldHVybiB2YWx1ZSA9PT0gMCA/IFwiQ1wiIDogKHR5cGUgPT09IFwiaW50XCIgPyBNYXRoLmFicyh2YWx1ZSkgOiBNYXRoLmFicyh2YWx1ZSkudG9GaXhlZCgyKSkgKyAodmFsdWUgPCAwID8gXCIgTFwiIDogXCIgUlwiKTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJzZW1pdG9uZXNcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIHN0XCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwibWlkaVwiKSByZXR1cm4gdG9NSURJKHZhbHVlKTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJjdXN0b21cIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIFwiICsgdW5pdHM7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwibmF0aXZlXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMik7XG4gICAgICAgIHJldHVybiBcIk4vQVwiO1xuICAgIH1cbiAgICBmZXRjaEF0dHJpYnV0ZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvb3QuaG9zdC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5yb290Lmhvc3QuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGF0dHI7XG4gICAgICAgICAgICB0aGlzLnBhcmFtc1tuYW1lXSA9IHZhbHVlLm1hdGNoKC9eWystXT8oXFxkKlxcLik/XFxkKyQvKSA/ICt2YWx1ZSA6IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhrZXk6IHN0cmluZywgb2xkVmFsdWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIHJldHVybjtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnNldFBhcmFtVmFsdWUoa2V5LCB2YWx1ZS5tYXRjaCgvXlsrLV0/KFxcZCpcXC4pP1xcZCskLykgPyArdmFsdWUgOiB2YWx1ZSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmZldGNoQXR0cmlidXRlKCk7XG4gICAgICAgIHRoaXMucGFpbnQoKTtcbiAgICB9XG4gICAgc2V0UGFyYW1WYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnBhcmFtc1trZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMucGFpbnQoKTtcbiAgICB9XG4gICAgcGFpbnQoKSB7fVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFwiPGNhbnZhcz48L2NhbnZhcz5cIjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZUJ1dHRvblBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIGFjdGl2ZWJnY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmViZ29uY29sb3I6IHN0cmluZztcbiAgICBiZ2NvbG9yOiBzdHJpbmc7XG4gICAgYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVCdXR0b24gZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVCdXR0b25QYXJhbXM+IHtcbiAgICBzdGF0aWMgZ2V0IHBhcmFtcygpOiBMaXZlQnV0dG9uUGFyYW1zIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnBhcmFtcyxcbiAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgIGhlaWdodDogMTUsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZWJnb25jb2xvcjogXCJyZ2JhKDEwOSwgMjE1LCAyNTUsIDEpXCIsXG4gICAgICAgICAgICBiZ2NvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIGJnb25jb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBfaW5Ub3VjaDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcGFpbnQoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3IsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgYmdvbmNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMC41O1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcblxuICAgICAgICBjb25zdCBidXR0b25CZ0NvbG9yID0gYWN0aXZlID8gKHZhbHVlID8gYWN0aXZlYmdvbmNvbG9yIDogYWN0aXZlYmdjb2xvcikgOiAodmFsdWUgPyBiZ29uY29sb3IgOiBiZ2NvbG9yKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQm9yZGVyQ29sb3IgPSB2YWx1ZSA/IGZvY3VzYm9yZGVyY29sb3IgOiBib3JkZXJjb2xvcjtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uQmdDb2xvcjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZWxsaXBzZSh3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41LCB3aWR0aCAqIDAuNSAtIDIgKiBib3JkZXJXaWR0aCwgaGVpZ2h0ICogMC41IC0gMiAqIGJvcmRlcldpZHRoLCAwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGJ1dHRvbkJvcmRlckNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmICF0aGlzLl9pblRvdWNoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIDApLCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgMSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCAwKTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9jYW1lbGNhc2UgKi9cbmltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5pbXBvcnQgeyB0b1JhZCwgcm91bmRlZFJlY3QsIGZpbGxSb3VuZGVkUmVjdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmludGVyZmFjZSBMaXZlRGlhbFBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIGZvbnRuYW1lOiBzdHJpbmc7XG4gICAgZm9udHNpemU6IG51bWJlcjtcbiAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIgfCBcImJvbGRcIiB8IFwiaXRhbGljXCIgfCBcImJvbGQgaXRhbGljXCI7XG4gICAgc2hvd25hbWU6IGJvb2xlYW47XG4gICAgc2hvd251bWJlcjogYm9vbGVhbjtcbiAgICBhcHBlYXJhbmNlOiBcInZlcnRpY2FsXCIgfCBcInRpbnlcIiB8IFwicGFuZWxcIjtcbiAgICB0cmlhbmdsZTogYm9vbGVhbjtcbiAgICBib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIGZvY3VzYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmVkaWFsY29sb3I6IHN0cmluZztcbiAgICBkaWFsY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmVuZWVkbGVjb2xvcjogc3RyaW5nO1xuICAgIG5lZWRsZWNvbG9yOiBzdHJpbmc7XG4gICAgcGFuZWxjb2xvcjogc3RyaW5nO1xuICAgIHRleHRjb2xvcjogc3RyaW5nO1xuICAgIHRyaWJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgdHJpY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZURpYWwgZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVEaWFsUGFyYW1zPiB7XG4gICAgc3RhdGljIGdldCBwYXJhbXMoKTogTGl2ZURpYWxQYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMCxcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIHRyaWFuZ2xlOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3duYW1lOiB0cnVlLFxuICAgICAgICAgICAgc2hvd251bWJlcjogdHJ1ZSxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlZGlhbGNvbG9yOiBcInJnYmEoMTA5LCAyMTUsIDI1NSwgMSlcIixcbiAgICAgICAgICAgIGRpYWxjb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmVuZWVkbGVjb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICBuZWVkbGVjb2xvcjogXCJyZ2JhKDEwNSwgMTA1LCAxMDUsIDEpXCIsXG4gICAgICAgICAgICBwYW5lbGNvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmlib3JkZXJjb2xvcjogXCJyZ2JhKDUwLCA1MCwgNTAsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICB3aWR0aDogNDUsXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1LFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUuZGlhbFwiLFxuICAgICAgICAgICAgbW1pbjogMCxcbiAgICAgICAgICAgIG1tYXg6IDEyNyxcbiAgICAgICAgICAgIHR5cGU6IFwiaW50XCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpbnRlcmFjdGlvblJlY3Q6IG51bWJlcltdID0gWzAsIDAsIDAsIDBdO1xuXG4gICAgZ2V0IHRydWVTdGVwcygpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCBzdGVwcywgc3RlcCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGZ1bGwgPSAxMDA7XG4gICAgICAgIGNvbnN0IG1heFN0ZXBzID0gdHlwZSA9PT0gXCJlbnVtXCIgPyB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aCA6IHR5cGUgPT09IFwiaW50XCIgPyBtbWF4IC0gbW1pbiA6IGZ1bGw7XG4gICAgICAgIGlmIChzdGVwKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5taW4oTWF0aC5mbG9vcigobW1heCAtIG1taW4pIC8gTWF0aC5yb3VuZChzdGVwKSksIG1heFN0ZXBzKTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBzdGVwKSwgbWF4U3RlcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGVwcykgcmV0dXJuIE1hdGgubWluKHN0ZXBzLCBtYXhTdGVwcyk7XG4gICAgICAgIHJldHVybiBtYXhTdGVwcztcbiAgICB9XG4gICAgZ2V0IGRpc3RhbmNlKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHZhbHVlIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gdmFsdWUgLyB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aCA6IHZhbHVlIC8gKG1tYXggLSBtbWluKTtcbiAgICB9XG4gICAgZ2V0IHN0ZXBSYW5nZSgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCBzdGVwIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgZnVsbCA9IDEwMDtcbiAgICAgICAgaWYgKHN0ZXApIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IGZ1bGwgLyB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aCA6IHR5cGUgPT09IFwiaW50XCIgPyBNYXRoLnJvdW5kKHN0ZXApIC8gKG1tYXggLSBtbWluKSAqIGZ1bGwgOiBzdGVwIC8gKG1tYXggLSBtbWluKSAqIGZ1bGw7XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICByZXR1cm4gZnVsbCAvIHRydWVTdGVwcztcbiAgICB9XG4gICAgcGFpbnQoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgZm9udG5hbWUsXG4gICAgICAgICAgICBmb250c2l6ZSxcbiAgICAgICAgICAgIGZvbnRmYWNlLFxuICAgICAgICAgICAgYXBwZWFyYW5jZSxcbiAgICAgICAgICAgIHRyaWFuZ2xlLFxuICAgICAgICAgICAgc2hvd25hbWUsXG4gICAgICAgICAgICBzaG93bnVtYmVyLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBwYW5lbGNvbG9yLFxuICAgICAgICAgICAgYWN0aXZlbmVlZGxlY29sb3IsXG4gICAgICAgICAgICBuZWVkbGVjb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZWRpYWxjb2xvcixcbiAgICAgICAgICAgIGRpYWxjb2xvcixcbiAgICAgICAgICAgIHRleHRjb2xvcixcbiAgICAgICAgICAgIHRyaWJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdHJpY29sb3IsXG4gICAgICAgICAgICBzaG9ydG5hbWVcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlO1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cblxuICAgICAgICBjb25zdCB0cmlhbmdsZUhlaWdodCA9IDQ7XG4gICAgICAgIGNvbnN0IHRyaWFuZ2xlTGluZVdpZHRoID0gMC42O1xuXG4gICAgICAgIGxldCBzdGFydDogbnVtYmVyO1xuICAgICAgICBsZXQgZW5kOiBudW1iZXI7XG4gICAgICAgIGxldCB2YWxQb3M6IG51bWJlcjtcbiAgICAgICAgbGV0IGRpYWxIZWlnaHQ6IG51bWJlcjtcblxuICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJ0aW55XCIpIHtcbiAgICAgICAgICAgIGRpYWxIZWlnaHQgPSAxODtcbiAgICAgICAgICAgIHN0YXJ0ID0gLTMgKiBNYXRoLlBJIC8gMjtcbiAgICAgICAgICAgIGVuZCA9IDA7XG4gICAgICAgICAgICB2YWxQb3MgPSBzdGFydCArIHRvUmFkKHRoaXMuZGlzdGFuY2UgKiAyNzApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlhbEhlaWdodCA9IDI1O1xuICAgICAgICAgICAgc3RhcnQgPSBNYXRoLlBJIC0gMyAqIE1hdGguUEkgLyA4O1xuICAgICAgICAgICAgZW5kID0gMiAqIE1hdGguUEkgKyAzICogTWF0aC5QSSAvIDg7XG4gICAgICAgICAgICB2YWxQb3MgPSBzdGFydCArIHRvUmFkKHRoaXMuZGlzdGFuY2UgKiAzMTUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpYWxSYWRpdXMgPSBkaWFsSGVpZ2h0IC8gMjtcblxuICAgICAgICBsZXQgZGlhbENlbnRlclggPSB3aWR0aCAqIDAuNTtcbiAgICAgICAgbGV0IGRpYWxDZW50ZXJZID0gaGVpZ2h0ICogMC41ICsgMTtcbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwicGFuZWxcIikge1xuICAgICAgICAgICAgZGlhbENlbnRlclkgKz0gMTA7XG4gICAgICAgIH0gZWxzZSBpZiAoYXBwZWFyYW5jZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICBpZiAoc2hvd251bWJlcikgZGlhbENlbnRlclkgLT0gZm9udHNpemUgLSA1O1xuICAgICAgICAgICAgaWYgKHNob3duYW1lKSBkaWFsQ2VudGVyWSArPSBmb250c2l6ZSAtIDU7XG4gICAgICAgICAgICBpZiAodHJpYW5nbGUpIGRpYWxDZW50ZXJZICs9IHRyaWFuZ2xlSGVpZ2h0IC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChhcHBlYXJhbmNlID09PSBcInRpbnlcIikge1xuICAgICAgICAgICAgaWYgKHNob3duYW1lKSB7XG4gICAgICAgICAgICAgICAgZGlhbENlbnRlclkgKz0gNjtcbiAgICAgICAgICAgICAgICBkaWFsQ2VudGVyWCA9IDEwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0ID0gWzAsIGRpYWxDZW50ZXJZIC0gZGlhbEhlaWdodCAvIDIsIHdpZHRoLCBkaWFsSGVpZ2h0XTtcbiAgICAgICAgY29uc3QgYXJjU3RhcnRYID0gZGlhbENlbnRlclggKyAoZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguY29zKHN0YXJ0KSk7XG4gICAgICAgIGNvbnN0IGFyY1N0YXJ0WSA9IGRpYWxDZW50ZXJZICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLnNpbihzdGFydCkpO1xuICAgICAgICBjb25zdCBhcmNFbmRYID0gZGlhbENlbnRlclggKyAoZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguY29zKGVuZCkpO1xuICAgICAgICBjb25zdCBhcmNFbmRZID0gZGlhbENlbnRlclkgKyAoZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguc2luKGVuZCkpO1xuICAgICAgICBjb25zdCB2YWx1ZVBvc1ggPSBkaWFsQ2VudGVyWCArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5jb3ModmFsUG9zKSk7XG4gICAgICAgIGNvbnN0IHZhbHVlUG9zWSA9IGRpYWxDZW50ZXJZICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLnNpbih2YWxQb3MpKTtcbiAgICAgICAgY29uc3QgZW5kQ2FwUmFkaXVzID0gMTtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gMjtcbiAgICAgICAgbGV0IHBhbmVsT2Zmc2V0ID0gMDtcblxuICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJwYW5lbFwiKSB7XG4gICAgICAgICAgICBwYW5lbE9mZnNldCA9IDU7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBib3JkZXJjb2xvcjtcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAwLjQ7XG4gICAgICAgICAgICByb3VuZGVkUmVjdChjdHgsIDEsIDEsIHdpZHRoIC0gMiwgaGVpZ2h0IC0gMiwgNSk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gcGFuZWxjb2xvcjtcbiAgICAgICAgICAgIGZpbGxSb3VuZGVkUmVjdChjdHgsIDEuMiwgMS4yLCB3aWR0aCAtIDIuNCwgMzAgLSAwLjQsIFs1LCA1LCAwLCAwXSk7XG4gICAgICAgIH1cblxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBhY3RpdmUgPyBhY3RpdmVuZWVkbGVjb2xvciA6IG5lZWRsZWNvbG9yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3R4LnN0cm9rZVN0eWxlO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICAvLyBkcmF3IGJhY2tncm91bmQgYXJjIGVuZGNhcHNcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKGFyY1N0YXJ0WCwgYXJjU3RhcnRZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKGFyY0VuZFgsIGFyY0VuZFksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAvLyBkcmF3IGJhY2tncm91bmQgYXJjXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGRpYWxSYWRpdXMsIHN0YXJ0LCBlbmQpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgLy8gZHJhdyB2YWx1ZSBhcmMsIHdoaWNoIGNoYW5nZXMgaWYgdHJpYW5nbGUgaXMgZW5hYmxlZFxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBhY3RpdmUgPyBhY3RpdmVkaWFsY29sb3IgOiBkaWFsY29sb3I7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjdHguc3Ryb2tlU3R5bGU7XG4gICAgICAgIGlmICh0cmlhbmdsZSkge1xuICAgICAgICAgICAgY29uc3QgbWlkcG9pbnQgPSAoc3RhcnQgKyBlbmQpIC8gMjtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGFjdGl2ZSA/IGFjdGl2ZWRpYWxjb2xvciA6IGRpYWxjb2xvcjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IDAuNSkgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGRpYWxSYWRpdXMsIG1pZHBvaW50LCB2YWxQb3MpO1xuICAgICAgICAgICAgZWxzZSBjdHguYXJjKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSwgZGlhbFJhZGl1cywgdmFsUG9zLCBtaWRwb2ludCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkcmF3IHZhbHVlIGFyYyBlbmRjYXBcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMoYXJjU3RhcnRYLCBhcmNTdGFydFksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIC8vIGRyYXcgdmFsdWUgYXJjXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSwgZGlhbFJhZGl1cywgc3RhcnQsIHZhbFBvcyk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZHJhdyBkaWFsXG4gICAgICAgIC8vIGRyYXcgZGlhbCByb3VuZCBlbmRjYXBzXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGFjdGl2ZSA/IGFjdGl2ZW5lZWRsZWNvbG9yIDogbmVlZGxlY29sb3I7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjdHguc3Ryb2tlU3R5bGU7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModmFsdWVQb3NYLCB2YWx1ZVBvc1ksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAvLyBkcmF3IGRpYWwgbGluZVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZKTtcbiAgICAgICAgY3R4LmxpbmVUbyh2YWx1ZVBvc1gsIHZhbHVlUG9zWSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gYWRkIHRleHQgaWYgaXQgaXMgZW5hYmxlZFxuICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlID09PSBcInJlZ3VsYXJcIiA/IFwiXCIgOiBmb250ZmFjZX0gJHtmb250c2l6ZX1weCAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0ZXh0Y29sb3I7XG4gICAgICAgIGlmIChzaG93bmFtZSkge1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChzaG9ydG5hbWUsIDAsIHBhbmVsT2Zmc2V0ICsgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHNob3J0bmFtZSwgd2lkdGggLyAyLCBwYW5lbE9mZnNldCArIGZvbnRzaXplLCB3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dudW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbnlPZmZzZXQgPSBhcHBlYXJhbmNlID09PSBcInRpbnlcIiA/IDEyIDogMDtcbiAgICAgICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInRpbnlcIikge1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5kaXNwbGF5VmFsdWUsIHRpbnlPZmZzZXQsIGhlaWdodCAtIHBhbmVsT2Zmc2V0LCB3aWR0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmRpc3BsYXlWYWx1ZSwgd2lkdGggLyAyLCBoZWlnaHQgLSBwYW5lbE9mZnNldCwgd2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXcgdHJpYW5nbGUgaWYgaXQgaXMgZW5hYmxlZFxuICAgICAgICBpZiAodHJpYW5nbGUpIHtcbiAgICAgICAgICAgIGlmICghZGlzdGFuY2UpIGN0eC5maWxsU3R5bGUgPSB0cmljb2xvcjtcbiAgICAgICAgICAgIGVsc2UgaWYgKCFhY3RpdmUpIGN0eC5maWxsU3R5bGUgPSBkaWFsY29sb3I7XG4gICAgICAgICAgICBlbHNlIGN0eC5maWxsU3R5bGUgPSBhY3RpdmVkaWFsY29sb3I7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJ0aW55XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXBQb3NpdGlvblggPSBkaWFsQ2VudGVyWCArIGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLmNvcygtMyAqIE1hdGguUEkgLyA0KSAtIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlwUG9zaXRpb25ZID0gZGlhbENlbnRlclkgKyBkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5zaW4oLTMgKiBNYXRoLlBJIC8gNCkgLSAxO1xuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8odGlwUG9zaXRpb25YLCB0aXBQb3NpdGlvblkpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odGlwUG9zaXRpb25YIC0gdHJpYW5nbGVIZWlnaHQsIHRpcFBvc2l0aW9uWSk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh0aXBQb3NpdGlvblgsIHRpcFBvc2l0aW9uWSAtIHRyaWFuZ2xlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHRpcFBvc2l0aW9uWCwgdGlwUG9zaXRpb25ZKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhkaWFsQ2VudGVyWCAtIHRyaWFuZ2xlSGVpZ2h0LCBkaWFsQ2VudGVyWSAtIGRpYWxSYWRpdXMgLSAxIC0gdHJpYW5nbGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oZGlhbENlbnRlclggKyB0cmlhbmdsZUhlaWdodCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSAtIHRyaWFuZ2xlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSAtIGRpYWxSYWRpdXMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0cmlib3JkZXJjb2xvciB8fCBcInRyYW5zcGFyZW50XCI7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gdHJpYW5nbGVMaW5lV2lkdGg7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VmFsdWVGcm9tRGVsdGEoZTogUG9pbnRlckRyYWdFdmVudCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1taW4sIG1tYXggfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBzdGVwUmFuZ2UgPSB0aGlzLnN0ZXBSYW5nZTtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSB0eXBlID09PSBcImVudW1cIiA/IDEgOiAodGhpcy5wYXJhbXMuc3RlcCB8fCAobW1heCAtIG1taW4pIC8gdHJ1ZVN0ZXBzKTtcbiAgICAgICAgY29uc3QgcHJldlN0ZXBzID0gdHlwZSA9PT0gXCJlbnVtXCIgPyBlLnByZXZWYWx1ZSA6IGUucHJldlZhbHVlIC8gc3RlcDtcbiAgICAgICAgY29uc3QgZFN0ZXBzID0gTWF0aC5yb3VuZCgoZS5mcm9tWSAtIGUueSkgLyBzdGVwUmFuZ2UpO1xuICAgICAgICBjb25zdCBzdGVwcyA9IE1hdGgubWluKHRydWVTdGVwcywgTWF0aC5tYXgoMCwgcHJldlN0ZXBzICsgZFN0ZXBzKSk7XG4gICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHN0ZXBzO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIE1hdGgucm91bmQoc3RlcHMgKiBzdGVwICsgbW1pbik7XG4gICAgICAgIHJldHVybiBzdGVwcyAqIHN0ZXAgKyBtbWluO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9IChlOiBQb2ludGVyRG93bkV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGUueCA8IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdXG4gICAgICAgICAgICB8fCBlLnggPiB0aGlzLmludGVyYWN0aW9uUmVjdFswXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzJdXG4gICAgICAgICAgICB8fCBlLnkgPCB0aGlzLmludGVyYWN0aW9uUmVjdFsxXVxuICAgICAgICAgICAgfHwgZS55ID4gdGhpcy5pbnRlcmFjdGlvblJlY3RbMV0gKyB0aGlzLmludGVyYWN0aW9uUmVjdFszXVxuICAgICAgICApIHJldHVybjtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEcmFnID0gKGU6IFBvaW50ZXJEcmFnRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9pblRvdWNoKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRWYWx1ZUZyb21EZWx0YShlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLnBhcmFtcy52YWx1ZSkgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgbmV3VmFsdWUpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9jYW1lbGNhc2UgKi9cbmltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5cbmludGVyZmFjZSBMaXZlU2xpZGVyUGFyYW1zIGV4dGVuZHMgTGl2ZVBhcmFtcyB7XG4gICAgcmVsYXRpdmU6IGJvb2xlYW47XG4gICAgZm9udG5hbWU6IHN0cmluZztcbiAgICBmb250c2l6ZTogbnVtYmVyO1xuICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiIHwgXCJob3Jpem9udGFsXCI7XG4gICAgc2hvd25hbWU6IGJvb2xlYW47XG4gICAgc2hvd251bWJlcjogYm9vbGVhbjtcbiAgICBzbGlkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRleHRjb2xvcjogc3RyaW5nO1xuICAgIHRyaWJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgdHJpb25jb2xvcjogc3RyaW5nO1xuICAgIHRyaWNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVTbGlkZXIgZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVTbGlkZXJQYXJhbXM+IHtcbiAgICBzdGF0aWMgZ2V0IHBhcmFtcygpOiBMaXZlU2xpZGVyUGFyYW1zIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnBhcmFtcyxcbiAgICAgICAgICAgIGZvbnRuYW1lOiBcIkFyaWFsXCIsXG4gICAgICAgICAgICBmb250c2l6ZTogMTAsXG4gICAgICAgICAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgc2hvd25hbWU6IHRydWUsXG4gICAgICAgICAgICBzaG93bnVtYmVyOiB0cnVlLFxuICAgICAgICAgICAgc2xpZGVyY29sb3I6IFwicmdiYSg0MCwgNDAsIDQwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRyaWJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIHRyaW9uY29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuICAgICAgICAgICAgdHJpY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgcmVsYXRpdmU6IGZhbHNlLFxuICAgICAgICAgICAgd2lkdGg6IDQwLFxuICAgICAgICAgICAgaGVpZ2h0OiA5MCxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLnNsaWRlclwiLFxuICAgICAgICAgICAgbW1pbjogMCxcbiAgICAgICAgICAgIG1tYXg6IDEyNyxcbiAgICAgICAgICAgIHR5cGU6IFwiaW50XCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpbnRlcmFjdGlvblJlY3Q6IG51bWJlcltdID0gWzAsIDAsIDAsIDBdO1xuXG4gICAgZ2V0IHRydWVTdGVwcygpIHtcbiAgICAgICAgY29uc3QgeyBvcmllbnRhdGlvbiwgdHlwZSwgbW1heCwgbW1pbiwgc3RlcHMsIHN0ZXAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBmdWxsID0gdGhpcy5pbnRlcmFjdGlvblJlY3Rbb3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IDMgOiAyXTtcbiAgICAgICAgY29uc3QgbWF4U3RlcHMgPSB0eXBlID09PSBcImVudW1cIiA/IHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IG1tYXggLSBtbWluIDogZnVsbDtcbiAgICAgICAgaWYgKHN0ZXApIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBNYXRoLnJvdW5kKHN0ZXApKSwgbWF4U3RlcHMpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIHN0ZXApLCBtYXhTdGVwcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ZXBzKSByZXR1cm4gTWF0aC5taW4oc3RlcHMsIG1heFN0ZXBzKTtcbiAgICAgICAgcmV0dXJuIG1heFN0ZXBzO1xuICAgIH1cbiAgICBnZXQgZGlzdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgdmFsdWUgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gXCJlbnVtXCIgPyB2YWx1ZSAvIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogdmFsdWUgLyAobW1heCAtIG1taW4pO1xuICAgIH1cbiAgICBnZXQgc3RlcFJhbmdlKCkge1xuICAgICAgICBjb25zdCB7IG9yaWVudGF0aW9uLCB0eXBlLCBtbWF4LCBtbWluLCBzdGVwIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgZnVsbCA9IHRoaXMuaW50ZXJhY3Rpb25SZWN0W29yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyAzIDogMl07XG4gICAgICAgIGlmIChzdGVwKSByZXR1cm4gdHlwZSA9PT0gXCJlbnVtXCIgPyBmdWxsIC8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gTWF0aC5yb3VuZChzdGVwKSAvIChtbWF4IC0gbW1pbikgKiBmdWxsIDogc3RlcCAvIChtbWF4IC0gbW1pbikgKiBmdWxsO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgcmV0dXJuIGZ1bGwgLyB0cnVlU3RlcHM7XG4gICAgfVxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgICAgICAgc2hvd25hbWUsXG4gICAgICAgICAgICBzaG93bnVtYmVyLFxuICAgICAgICAgICAgc2xpZGVyY29sb3IsXG4gICAgICAgICAgICB0ZXh0Y29sb3IsXG4gICAgICAgICAgICB0cmlib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHRyaW9uY29sb3IsXG4gICAgICAgICAgICB0cmljb2xvcixcbiAgICAgICAgICAgIHNob3J0bmFtZVxuICAgICAgICB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBjb25zdCBsaW5lV2lkdGggPSAwLjU7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSA4O1xuICAgICAgICBjb25zdCBwb3BvdmVyVHlwZSA9IFwiVkFMVUVfTEFCRUxcIjtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlO1xuICAgICAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSB0aGlzLmRpc3BsYXlWYWx1ZTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHNsaWRlcmNvbG9yO1xuXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHdpZHRoICogMC41LCBmb250c2l6ZSArIHBhZGRpbmcpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCAqIDAuNSwgaGVpZ2h0IC0gKGZvbnRzaXplICsgcGFkZGluZykpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbldpZHRoID0gd2lkdGggKiAwLjU7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdCA9IFtcbiAgICAgICAgICAgICAgICB3aWR0aCAqIDAuNSAtIGludGVyYWN0aW9uV2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIGZvbnRzaXplICsgcGFkZGluZyxcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbldpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCAtIDIgKiAoZm9udHNpemUgKyBwYWRkaW5nKVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0cmlib3JkZXJjb2xvcjtcbiAgICAgICAgICAgIGNvbnN0IHRyaU9yaWdpbjogW251bWJlciwgbnVtYmVyXSA9IFtcbiAgICAgICAgICAgICAgICB3aWR0aCAqIDAuNSArIGxpbmVXaWR0aCAvIDIgKyAwLjUsXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3RbMV0gLSA0ICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbM10gKiAoMSAtIGRpc3RhbmNlKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odHJpT3JpZ2luWzBdLCB0cmlPcmlnaW5bMV0gKyA0KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgOCwgdHJpT3JpZ2luWzFdKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgOCwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgNCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLl9pblRvdWNoID8gdHJpb25jb2xvciA6IHRyaWNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICAgICAgaWYgKHNob3duYW1lKSBjdHguZmlsbFRleHQoc2hvcnRuYW1lLCB3aWR0aCAvIDIsIGZvbnRzaXplLCB3aWR0aCk7XG4gICAgICAgICAgICBpZiAoc2hvd251bWJlcikgY3R4LmZpbGxUZXh0KGRpc3BsYXlWYWx1ZSwgd2lkdGggLyAyLCBoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8ocGFkZGluZywgaGVpZ2h0ICogMC41KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8od2lkdGggLSBwYWRkaW5nLCBoZWlnaHQgKiAwLjUpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbldpZHRoID0gaGVpZ2h0ICogMC41O1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3QgPSBbXG4gICAgICAgICAgICAgICAgcGFkZGluZyxcbiAgICAgICAgICAgICAgICBoZWlnaHQgKiAwLjUgLSBpbnRlcmFjdGlvbldpZHRoIC8gMixcbiAgICAgICAgICAgICAgICB3aWR0aCAtIDIgKiBwYWRkaW5nLFxuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uV2lkdGhcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJpYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBjb25zdCB0cmlPcmlnaW46IFtudW1iZXIsIG51bWJlcl0gPSBbXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3RbMF0gKyB0aGlzLmludGVyYWN0aW9uUmVjdFsyXSAqIGRpc3RhbmNlIC0gNCxcbiAgICAgICAgICAgICAgICBoZWlnaHQgKiAwLjUgKyBsaW5lV2lkdGggLyAyICsgMlxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odHJpT3JpZ2luWzBdLCB0cmlPcmlnaW5bMV0gKyA4KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgNCwgdHJpT3JpZ2luWzFdKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgOCwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLl9pblRvdWNoID8gdHJpb25jb2xvciA6IHRyaWNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICAgICAgaWYgKHNob3duYW1lKSBjdHguZmlsbFRleHQoc2hvcnRuYW1lLCB3aWR0aCAvIDIsIGZvbnRzaXplLCB3aWR0aCk7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgICAgICBpZiAoc2hvd251bWJlcikgY3R4LmZpbGxUZXh0KGRpc3BsYXlWYWx1ZSwgNCwgaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VmFsdWVGcm9tUG9zKGU6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSkge1xuICAgICAgICBjb25zdCB7IG9yaWVudGF0aW9uLCB0eXBlLCBtbWluLCBtbWF4IH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3Qgc3RlcFJhbmdlID0gdGhpcy5zdGVwUmFuZ2U7XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICBjb25zdCBzdGVwID0gdGhpcy5wYXJhbXMuc3RlcCB8fCAobW1heCAtIG1taW4pIC8gdHJ1ZVN0ZXBzO1xuICAgICAgICBsZXQgc3RlcHMgPSBNYXRoLnJvdW5kKChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gdGhpcy5pbnRlcmFjdGlvblJlY3RbM10gLSAoZS55IC0gdGhpcy5pbnRlcmFjdGlvblJlY3RbMV0pIDogZS54IC0gdGhpcy5pbnRlcmFjdGlvblJlY3RbMF0pIC8gc3RlcFJhbmdlKTtcbiAgICAgICAgc3RlcHMgPSBNYXRoLm1pbih0cnVlU3RlcHMsIE1hdGgubWF4KDAsIHN0ZXBzKSk7XG4gICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHN0ZXBzO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIE1hdGgucm91bmQoc3RlcHMgKiBzdGVwICsgbW1pbik7XG4gICAgICAgIHJldHVybiBzdGVwcyAqIHN0ZXAgKyBtbWluO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9IChlOiBQb2ludGVyRG93bkV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcmVsYXRpdmUsIHZhbHVlIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZS54IDwgdGhpcy5pbnRlcmFjdGlvblJlY3RbMF1cbiAgICAgICAgICAgIHx8IGUueCA+IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl1cbiAgICAgICAgICAgIHx8IGUueSA8IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdXG4gICAgICAgICAgICB8fCBlLnkgPiB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdXG4gICAgICAgICkgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tUG9zKGUpO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHZhbHVlKSB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCB0aGlzLmdldFZhbHVlRnJvbVBvcyhlKSk7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5faW5Ub3VjaCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tUG9zKGUpO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMucGFyYW1zLnZhbHVlKSB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCBuZXdWYWx1ZSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcblxuaW50ZXJmYWNlIExpdmVUb2dnbGVQYXJhbXMgZXh0ZW5kcyBMaXZlUGFyYW1zIHtcbiAgICBhY3RpdmViZ2NvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZlYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYmdjb2xvcjogc3RyaW5nO1xuICAgIGJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlVG9nZ2xlIGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlVG9nZ2xlUGFyYW1zPiB7XG4gICAgc3RhdGljIGdldCBwYXJhbXMoKTogTGl2ZVRvZ2dsZVBhcmFtcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wYXJhbXMsXG4gICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICBoZWlnaHQ6IDE1LFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3I6IFwicmdiYSgyNTUsIDE4MSwgNTAsIDEpXCIsXG4gICAgICAgICAgICBiZ2NvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIGJnb25jb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcblxuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IDAuNTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjdHgubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQmdDb2xvciA9IGFjdGl2ZSA/ICh2YWx1ZSA/IGFjdGl2ZWJnb25jb2xvciA6IGFjdGl2ZWJnY29sb3IpIDogKHZhbHVlID8gYmdvbmNvbG9yIDogYmdjb2xvcik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkJvcmRlckNvbG9yID0gdmFsdWUgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJ1dHRvbkJnQ29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnJlY3QoYm9yZGVyV2lkdGgsIGJvcmRlcldpZHRoLCB3aWR0aCAtIDIgKiBib3JkZXJXaWR0aCwgaGVpZ2h0IC0gMiAqIGJvcmRlcldpZHRoKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYnV0dG9uQm9yZGVyQ29sb3I7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCAxIC0gdmFsdWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBMaXZlQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IExpdmVTbGlkZXIgZnJvbSBcIi4vU2xpZGVyXCI7XG5pbXBvcnQgTGl2ZURpYWwgZnJvbSBcIi4vRGlhbFwiO1xuaW1wb3J0IExpdmVUb2dnbGUgZnJvbSBcIi4vVG9nZ2xlXCI7XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXZlLWJ1dHRvblwiLCBMaXZlQnV0dG9uKTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXZlLXRvZ2dsZVwiLCBMaXZlVG9nZ2xlKTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXZlLXNsaWRlclwiLCBMaXZlU2xpZGVyKTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXZlLWRpYWxcIiwgTGl2ZURpYWwpO1xuIiwiZXhwb3J0IGNvbnN0IHRvTUlESSA9IChmOiBudW1iZXIpID0+IFtcIkNcIiwgXCJDI1wiLCBcIkRcIiwgXCJEI1wiLCBcIkVcIiwgXCJGXCIsIFwiRiNcIiwgXCJHXCIsIFwiRyNcIiwgXCJBXCIsIFwiQSNcIiwgXCJCXCJdWyhmICUgMTIgKyAxMikgJSAxMl0gKyBNYXRoLnJvdW5kKGYgLyAxMiAtIDIpO1xuZXhwb3J0IGNvbnN0IHRvUmFkID0gKGRlZ3JlZXM6IG51bWJlcikgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG5leHBvcnQgY29uc3Qgcm91bmRlZFJlY3QgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmFkaXVzOiBudW1iZXIgfCBudW1iZXJbXSkgPT4ge1xuICAgIGNvbnN0IHJhZGlpID0gWzAsIDAsIDAsIDBdO1xuICAgIGlmICh0eXBlb2YgcmFkaXVzID09PSBcIm51bWJlclwiKSByYWRpaS5maWxsKHJhZGl1cyk7XG4gICAgZWxzZSByYWRpdXMuZm9yRWFjaCgodiwgaSkgPT4gcmFkaWlbaV0gPSB2KTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaWlbMF0sIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaWlbMV0sIHkpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaWlbMV0pO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaWlbMl0pO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoIC0gcmFkaWlbMl0sIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCArIHJhZGlpWzNdLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaWlbM10pO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHJhZGlpWzBdKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaWlbMF0sIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG59O1xuZXhwb3J0IGNvbnN0IGZpbGxSb3VuZGVkUmVjdCA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCByYWRpdXM6IG51bWJlciB8IG51bWJlcltdKSA9PiB7XG4gICAgY29uc3QgcmFkaWkgPSBbMCwgMCwgMCwgMF07XG4gICAgaWYgKHR5cGVvZiByYWRpdXMgPT09IFwibnVtYmVyXCIpIHJhZGlpLmZpbGwocmFkaXVzKTtcbiAgICBlbHNlIHJhZGl1cy5mb3JFYWNoKCh2LCBpKSA9PiByYWRpaVtpXSA9IHYpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHggKyByYWRpaVswXSwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpaVsxXSwgeSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpaVsxXSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpaVsyXSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpaVsyXSwgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaWlbM10sIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByYWRpaVszXSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaWlbMF0pO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpaVswXSwgeSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==