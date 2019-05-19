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
exports.push([module.i, "live-button, live-slider, live-dial {\n  display: inline-flex; }\n", ""]);



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
      this.params[attr.name] = attr.value;
    }
  }

  attributeChangedCallback(key, oldValue, value) {
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
      activebgcolor: "rgba(102, 102, 102, 1)",
      activebgoncolor: "rgba(242, 98, 0, 1)",
      bgcolor: "rgba(102, 102, 102, 1)",
      bgoncolor: "rgba(125, 123, 122, 1)",
      bordercolor: "rgba(50, 50, 50, 1)",
      focusbordercolor: "rgba(0, 5, 20, 1)"
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
      if (e.x > this.interactionRect[0] && e.x < this.interactionRect[0] + this.interactionRect[2] && e.y > this.interactionRect[1] && e.y < this.interactionRect[1] + this.interactionRect[3]) return;
      this._inTouch = true;
    };

    this.handlePointerDrag = e => {
      var newValue = this.getValueFromDelta(e);
      this.setParamValue("value", newValue);
      this._inTouch = true;
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
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["fillRoundedRect"])(ctx, 1.2, 1.2, width - 0.4, 30 - 0.4, 5);
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

    ctx.font = "".concat(fontface, " ").concat(fontsize, " ").concat(fontname, ", sans-serif");
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
    var step = this.params.step || (mmax - mmin) / trueSteps;
    var steps = Math.round((100 - e.y) / stepRange);
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
      if (e.x > this.interactionRect[0] && e.x < this.interactionRect[0] + this.interactionRect[2] && e.y > this.interactionRect[1] && e.y < this.interactionRect[1] + this.interactionRect[3]) return;
      var newValue = this.getValueFromPos(e);
      if (newValue !== value) this.setParamValue("value", this.getValueFromPos(e));
      this._inTouch = true;
    };

    this.handlePointerDrag = e => {
      var newValue = this.getValueFromPos(e);
      this.setParamValue("value", newValue);
      this._inTouch = true;
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
      this.interactionRect = [width * 0.5 - lineWidth / 2, fontsize + padding, lineWidth, height - 2 * (fontsize + padding)];
      ctx.lineWidth = 1;
      ctx.strokeStyle = tribordercolor;
      var triOrigin = [this.interactionRect[0] + lineWidth + 0.5, this.interactionRect[1] - 4 + this.interactionRect[3] * (1 - distance)];
      ctx.beginPath();
      ctx.moveTo(triOrigin[0], triOrigin[1] + 4);
      ctx.lineTo(triOrigin[0] + 8, triOrigin[1]);
      ctx.lineTo(triOrigin[0] + 8, triOrigin[1] + 8);
      ctx.lineTo(triOrigin[0], triOrigin[1] + 4);
      ctx.stroke();
      ctx.fillStyle = this._inTouch ? trioncolor : tricolor;
      ctx.fill();
      ctx.font = "".concat(fontface, " ").concat(fontsize, " ").concat(fontname, ", sans-serif");
      ctx.textAlign = "center";
      ctx.fillStyle = textcolor;
      if (showname) ctx.fillText(shortname, width / 2, fontsize, width);
      if (shownumber) ctx.fillText(displayValue, width / 2, height, width);
    } else {
      ctx.beginPath();
      ctx.moveTo(padding, height * 0.5);
      ctx.lineTo(width - padding, height * 0.5);
      ctx.stroke();
      this.interactionRect = [padding, height * 0.5 - lineWidth, width - 2 * padding, lineWidth];
      ctx.lineWidth = 1;
      ctx.strokeStyle = tribordercolor;
      var _triOrigin = [this.interactionRect[0] + this.interactionRect[2] * distance - 4, this.interactionRect[1] + this.interactionRect[3] + 2];
      ctx.beginPath();
      ctx.moveTo(_triOrigin[0], _triOrigin[1] + 8);
      ctx.lineTo(_triOrigin[0] + 4, _triOrigin[1]);
      ctx.lineTo(_triOrigin[0] + 8, _triOrigin[1] + 8);
      ctx.lineTo(_triOrigin[0], _triOrigin[1] + 8);
      ctx.stroke();
      ctx.fillStyle = this._inTouch ? trioncolor : tricolor;
      ctx.fill();
      ctx.font = "".concat(fontface, " ").concat(fontsize, " ").concat(fontname, ", sans-serif");
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



window.customElements.define("live-button", _Button__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.stroke();
};
var fillRoundedRect = (ctx, x, y, width, height, radius) => {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9CYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQmFzZS5zY3NzPzdiNzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGlhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2xpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOlsiTGl2ZUJhc2VDb21wb25lbnQiLCJIVE1MRWxlbWVudCIsImNvbnN0cnVjdG9yIiwicm9vdCIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJpbm5lckhUTUwiLCJyZW5kZXIiLCJMaXZlQ29tcG9uZW50Iiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwiT2JqZWN0Iiwia2V5cyIsInBhcmFtcyIsImNhbnZhcyIsImN0eCIsImhhbmRsZUtleURvd24iLCJlIiwiaGFuZGxlS2V5VXAiLCJoYW5kbGVUb3VjaFN0YXJ0IiwiaGFuZGxlV2hlZWwiLCJoYW5kbGVDbGljayIsImhhbmRsZU1vdXNlRG93biIsInByZXZlbnREZWZhdWx0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImZyb21YIiwicGFnZVgiLCJsZWZ0IiwiZnJvbVkiLCJwYWdlWSIsInRvcCIsImhhbmRsZVBvaW50ZXJEb3duIiwieCIsInkiLCJvcmlnaW5hbEV2ZW50IiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlUG9pbnRlckRyYWciLCJtb3ZlbWVudFgiLCJtb3ZlbWVudFkiLCJoYW5kbGVNb3VzZVVwIiwiaGFuZGxlUG9pbnRlclVwIiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1vdXNlT3ZlciIsImhhbmRsZU1vdXNlT3V0IiwiaGFuZGxlQ29udGV4dE1lbnUiLCJwYXNzaXZlIiwiY2hpbGRyZW4iLCJnZXRDb250ZXh0IiwiZGlzcGxheVZhbHVlIiwidmFsdWUiLCJ0eXBlIiwidW5pdHN0eWxlIiwidW5pdHMiLCJlbnVtIiwidG9GaXhlZCIsIk1hdGgiLCJhYnMiLCJ0b01JREkiLCJmZXRjaEF0dHJpYnV0ZSIsImkiLCJob3N0IiwiYXR0cmlidXRlcyIsImxlbmd0aCIsImF0dHIiLCJuYW1lIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwia2V5Iiwib2xkVmFsdWUiLCJzZXRQYXJhbVZhbHVlIiwibWF0Y2giLCJjb25uZWN0ZWRDYWxsYmFjayIsInBhaW50IiwiYWN0aXZlIiwid2lkdGgiLCJoZWlnaHQiLCJzaG9ydG5hbWUiLCJsb25nbmFtZSIsIm9yZGVyIiwibGlua25hbWVzIiwibW1pbiIsIm1tYXgiLCJlbnVtX2ljb25zIiwibW9kbW9kZSIsImluaXRpYWxfZW5hYmxlIiwiaW5pdGlhbCIsImV4cG9uZW50Iiwic3RlcCIsInN0ZXBzIiwic3BlZWRsaW0iLCJkZWZlciIsImludmlzaWJsZSIsIm1hcHBhYmxlIiwiTGl2ZUJ1dHRvbiIsIl9pblRvdWNoIiwiYWN0aXZlYmdjb2xvciIsImFjdGl2ZWJnb25jb2xvciIsImJnY29sb3IiLCJiZ29uY29sb3IiLCJib3JkZXJjb2xvciIsImZvY3VzYm9yZGVyY29sb3IiLCJib3JkZXJXaWR0aCIsInN0eWxlIiwibGluZVdpZHRoIiwiYnV0dG9uQmdDb2xvciIsImJ1dHRvbkJvcmRlckNvbG9yIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiZWxsaXBzZSIsIlBJIiwiZmlsbCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwic2V0VGltZW91dCIsInJlc2V0UG9pbnRlcnMiLCJMaXZlRGlhbCIsImludGVyYWN0aW9uUmVjdCIsIm5ld1ZhbHVlIiwiZ2V0VmFsdWVGcm9tRGVsdGEiLCJmb250bmFtZSIsImZvbnRzaXplIiwiZm9udGZhY2UiLCJhcHBlYXJhbmNlIiwidHJpYW5nbGUiLCJzaG93bmFtZSIsInNob3dudW1iZXIiLCJhY3RpdmVkaWFsY29sb3IiLCJkaWFsY29sb3IiLCJhY3RpdmVuZWVkbGVjb2xvciIsIm5lZWRsZWNvbG9yIiwicGFuZWxjb2xvciIsInRleHRjb2xvciIsInRyaWJvcmRlcmNvbG9yIiwidHJpY29sb3IiLCJ0cnVlU3RlcHMiLCJmdWxsIiwibWF4U3RlcHMiLCJtaW4iLCJmbG9vciIsInJvdW5kIiwiZGlzdGFuY2UiLCJzdGVwUmFuZ2UiLCJ0cmlhbmdsZUhlaWdodCIsInRyaWFuZ2xlTGluZVdpZHRoIiwic3RhcnQiLCJlbmQiLCJ2YWxQb3MiLCJkaWFsSGVpZ2h0IiwidG9SYWQiLCJkaWFsUmFkaXVzIiwiZGlhbENlbnRlclgiLCJkaWFsQ2VudGVyWSIsImFyY1N0YXJ0WCIsImNvcyIsImFyY1N0YXJ0WSIsInNpbiIsImFyY0VuZFgiLCJhcmNFbmRZIiwidmFsdWVQb3NYIiwidmFsdWVQb3NZIiwiZW5kQ2FwUmFkaXVzIiwicGFuZWxPZmZzZXQiLCJyb3VuZGVkUmVjdCIsImZpbGxSb3VuZGVkUmVjdCIsImFyYyIsIm1pZHBvaW50IiwibW92ZVRvIiwibGluZVRvIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwidGlueU9mZnNldCIsInRpcFBvc2l0aW9uWCIsInRpcFBvc2l0aW9uWSIsIm1heCIsIkxpdmVTbGlkZXIiLCJyZWxhdGl2ZSIsImdldFZhbHVlRnJvbVBvcyIsIm9yaWVudGF0aW9uIiwic2xpZGVyY29sb3IiLCJ0cmlvbmNvbG9yIiwicGFkZGluZyIsInBvcG92ZXJUeXBlIiwidHJpT3JpZ2luIiwid2luZG93IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJmIiwiZGVncmVlcyIsInJhZGl1cyIsInF1YWRyYXRpY0N1cnZlVG8iLCJjbG9zZVBhdGgiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ2ZBLHFCQUFxQixtQkFBTyxDQUFDLGlGQUFrQjs7QUFFL0M7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVB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QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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Q0FBQyxHQUFHMkMsS0FBZixFQUFzQjFDLENBQUMsR0FBRzJDLE1BQUosR0FBYWtILE1BQW5DO0FBQ0FoTCxLQUFHLENBQUNpTCxnQkFBSixDQUFxQi9KLENBQUMsR0FBRzJDLEtBQXpCLEVBQWdDMUMsQ0FBQyxHQUFHMkMsTUFBcEMsRUFBNEM1QyxDQUFDLEdBQUcyQyxLQUFKLEdBQVltSCxNQUF4RCxFQUFnRTdKLENBQUMsR0FBRzJDLE1BQXBFO0FBQ0E5RCxLQUFHLENBQUMwSixNQUFKLENBQVd4SSxDQUFDLEdBQUc4SixNQUFmLEVBQXVCN0osQ0FBQyxHQUFHMkMsTUFBM0I7QUFDQTlELEtBQUcsQ0FBQ2lMLGdCQUFKLENBQXFCL0osQ0FBckIsRUFBd0JDLENBQUMsR0FBRzJDLE1BQTVCLEVBQW9DNUMsQ0FBcEMsRUFBdUNDLENBQUMsR0FBRzJDLE1BQUosR0FBYWtILE1BQXBEO0FBQ0FoTCxLQUFHLENBQUMwSixNQUFKLENBQVd4SSxDQUFYLEVBQWNDLENBQUMsR0FBRzZKLE1BQWxCO0FBQ0FoTCxLQUFHLENBQUNpTCxnQkFBSixDQUFxQi9KLENBQXJCLEVBQXdCQyxDQUF4QixFQUEyQkQsQ0FBQyxHQUFHOEosTUFBL0IsRUFBdUM3SixDQUF2QztBQUNBbkIsS0FBRyxDQUFDa0wsU0FBSjtBQUNBbEwsS0FBRyxDQUFDaUcsSUFBSjtBQUNILENBYk0sQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxpdmUtYnV0dG9uLCBsaXZlLXNsaWRlciwgbGl2ZS1kaWFsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0Jhc2Uuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9CYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0Jhc2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IFwiLi9CYXNlLnNjc3NcIjtcbmltcG9ydCB7IHRvTUlESSB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBMaXZlQmFzZUNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICByb290OiBTaGFkb3dSb290O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucm9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJvcGVuXCIgfSk7XG4gICAgICAgIHRoaXMucm9vdC5pbm5lckhUTUwgPSB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVDb21wb25lbnQ8VCBleHRlbmRzIExpdmVQYXJhbXM+IGV4dGVuZHMgTGl2ZUJhc2VDb21wb25lbnQge1xuICAgIHN0YXRpYyBwYXJhbXM6IExpdmVQYXJhbXMgPSB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgaGVpZ2h0OiAxNSxcbiAgICAgICAgc2hvcnRuYW1lOiBcIlwiLFxuICAgICAgICBsb25nbmFtZTogXCJcIixcbiAgICAgICAgb3JkZXI6IDAsXG4gICAgICAgIGxpbmtuYW1lczogZmFsc2UsXG4gICAgICAgIHR5cGU6IFwiZmxvYXRcIixcbiAgICAgICAgbW1pbjogMCxcbiAgICAgICAgbW1heDogMSxcbiAgICAgICAgZW51bTogW10sXG4gICAgICAgIGVudW1faWNvbnM6IFtdLFxuICAgICAgICBtb2Rtb2RlOiBcIm5vbmVcIixcbiAgICAgICAgaW5pdGlhbF9lbmFibGU6IGZhbHNlLFxuICAgICAgICBpbml0aWFsOiBbMF0sXG4gICAgICAgIHVuaXRzdHlsZTogXCJmbG9hdFwiLFxuICAgICAgICB1bml0czogXCJcIixcbiAgICAgICAgZXhwb25lbnQ6IDEsXG4gICAgICAgIHN0ZXA6IDAsXG4gICAgICAgIHN0ZXBzOiAwLFxuICAgICAgICBzcGVlZGxpbTogNSxcbiAgICAgICAgZGVmZXI6IGZhbHNlLFxuICAgICAgICBpbnZpc2libGU6IFwiYXV0b21hdGVkXCIsXG4gICAgICAgIG1hcHBhYmxlOiB0cnVlXG4gICAgfVxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5wYXJhbXMpO1xuICAgIH1cbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHBhcmFtczogVDtcblxuICAgIGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge307XG4gICAgaGFuZGxlS2V5VXAgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge307XG4gICAgaGFuZGxlVG91Y2hTdGFydCA9IChlOiBUb3VjaEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVXaGVlbCA9IChlOiBXaGVlbEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVDbGljayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVNb3VzZURvd24gPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgZnJvbVggPSBlLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICBjb25zdCBmcm9tWSA9IGUucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyRG93bih7IHg6IGZyb21YLCB5OiBmcm9tWSwgb3JpZ2luYWxFdmVudDogZSB9KTtcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBlLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGUucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlckRyYWcoeyB4LCB5LCBmcm9tWCwgZnJvbVksIG1vdmVtZW50WDogZS5tb3ZlbWVudFgsIG1vdmVtZW50WTogZS5tb3ZlbWVudFksIG9yaWdpbmFsRXZlbnQ6IGUgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGUucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyVXAoeyB4LCB5LCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG4gICAgfTtcbiAgICBoYW5kbGVNb3VzZU92ZXIgPSAoZTogTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlTW91c2VPdXQgPSAoZTogTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlQ29udGV4dE1lbnUgPSAoZTogTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoZTogUG9pbnRlckRvd25FdmVudCkgPT4ge307XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlck1vdmVFdmVudCkgPT4ge307XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKGU6IFBvaW50ZXJVcEV2ZW50KSA9PiB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuaGFuZGxlS2V5VXApO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuaGFuZGxlVG91Y2hTdGFydCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcy5oYW5kbGVXaGVlbCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2spO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5oYW5kbGVNb3VzZURvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCB0aGlzLmhhbmRsZU1vdXNlT3Zlcik7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIHRoaXMuaGFuZGxlTW91c2VPdXQpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMucm9vdC5jaGlsZHJlblswXSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMucGFyYW1zID0gKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIExpdmVDb21wb25lbnQpLnBhcmFtcyBhcyBUO1xuICAgIH1cbiAgICBnZXQgZGlzcGxheVZhbHVlKCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlLCB0eXBlLCB1bml0c3R5bGUsIHVuaXRzIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gdGhpcy5wYXJhbXMuZW51bVt2YWx1ZV07XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiaW50XCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKDApO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcImZsb2F0XCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcInRpbWVcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIG1zXCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiaGVydHpcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIEh6XCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiZGVjaWJlbFwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgZEJcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCIlXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiAlXCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwicGFuXCIpIHJldHVybiB2YWx1ZSA9PT0gMCA/IFwiQ1wiIDogKHR5cGUgPT09IFwiaW50XCIgPyBNYXRoLmFicyh2YWx1ZSkgOiBNYXRoLmFicyh2YWx1ZSkudG9GaXhlZCgyKSkgKyAodmFsdWUgPCAwID8gXCIgTFwiIDogXCIgUlwiKTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJzZW1pdG9uZXNcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIHN0XCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwibWlkaVwiKSByZXR1cm4gdG9NSURJKHZhbHVlKTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJjdXN0b21cIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIFwiICsgdW5pdHM7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwibmF0aXZlXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMik7XG4gICAgICAgIHJldHVybiBcIk4vQVwiO1xuICAgIH1cbiAgICBmZXRjaEF0dHJpYnV0ZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvb3QuaG9zdC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5yb290Lmhvc3QuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgICAgIHRoaXMucGFyYW1zW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhrZXk6IHN0cmluZywgb2xkVmFsdWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiIHx8IHZhbHVlID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShrZXksIHZhbHVlLm1hdGNoKC9eWystXT8oXFxkKlxcLik/XFxkKyQvKSA/ICt2YWx1ZSA6IHZhbHVlKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hBdHRyaWJ1dGUoKTtcbiAgICAgICAgdGhpcy5wYWludCgpO1xuICAgIH1cbiAgICBzZXRQYXJhbVZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMucGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5wYWludCgpO1xuICAgIH1cbiAgICBwYWludCgpIHt9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gXCI8Y2FudmFzPjwvY2FudmFzPlwiO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5cbmludGVyZmFjZSBMaXZlQnV0dG9uUGFyYW1zIGV4dGVuZHMgTGl2ZVBhcmFtcyB7XG4gICAgYWN0aXZlYmdjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZWJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJnY29sb3I6IHN0cmluZztcbiAgICBiZ29uY29sb3I6IHN0cmluZztcbiAgICBib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIGZvY3VzYm9yZGVyY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZUJ1dHRvbiBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZUJ1dHRvblBhcmFtcz4ge1xuICAgIHN0YXRpYyBnZXQgcGFyYW1zKCk6IExpdmVCdXR0b25QYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgaGVpZ2h0OiAxNSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3I6IFwicmdiYSgxMDIsIDEwMiwgMTAyLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yOiBcInJnYmEoMjQyLCA5OCwgMCwgMSlcIixcbiAgICAgICAgICAgIGJnY29sb3I6IFwicmdiYSgxMDIsIDEwMiwgMTAyLCAxKVwiLFxuICAgICAgICAgICAgYmdvbmNvbG9yOiBcInJnYmEoMTI1LCAxMjMsIDEyMiwgMSlcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoNTAsIDUwLCA1MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSgwLCA1LCAyMCwgMSlcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBfaW5Ub3VjaDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcGFpbnQoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3IsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgYmdvbmNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMC41O1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcblxuICAgICAgICBjb25zdCBidXR0b25CZ0NvbG9yID0gYWN0aXZlID8gKHZhbHVlID8gYWN0aXZlYmdvbmNvbG9yIDogYWN0aXZlYmdjb2xvcikgOiAodmFsdWUgPyBiZ29uY29sb3IgOiBiZ2NvbG9yKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQm9yZGVyQ29sb3IgPSB2YWx1ZSA/IGZvY3VzYm9yZGVyY29sb3IgOiBib3JkZXJjb2xvcjtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uQmdDb2xvcjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZWxsaXBzZSh3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41LCB3aWR0aCAqIDAuNSAtIDIgKiBib3JkZXJXaWR0aCwgaGVpZ2h0ICogMC41IC0gMiAqIGJvcmRlcldpZHRoLCAwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGJ1dHRvbkJvcmRlckNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmICF0aGlzLl9pblRvdWNoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIDApLCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgMSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCAwKTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9jYW1lbGNhc2UgKi9cbmltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5pbXBvcnQgeyB0b1JhZCwgcm91bmRlZFJlY3QsIGZpbGxSb3VuZGVkUmVjdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmludGVyZmFjZSBMaXZlRGlhbFBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIGZvbnRuYW1lOiBzdHJpbmc7XG4gICAgZm9udHNpemU6IG51bWJlcjtcbiAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIgfCBcImJvbGRcIiB8IFwiaXRhbGljXCIgfCBcImJvbGQgaXRhbGljXCI7XG4gICAgc2hvd25hbWU6IGJvb2xlYW47XG4gICAgc2hvd251bWJlcjogYm9vbGVhbjtcbiAgICBhcHBlYXJhbmNlOiBcInZlcnRpY2FsXCIgfCBcInRpbnlcIiB8IFwicGFuZWxcIjtcbiAgICB0cmlhbmdsZTogYm9vbGVhbjtcbiAgICBib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIGZvY3VzYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmVkaWFsY29sb3I6IHN0cmluZztcbiAgICBkaWFsY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmVuZWVkbGVjb2xvcjogc3RyaW5nO1xuICAgIG5lZWRsZWNvbG9yOiBzdHJpbmc7XG4gICAgcGFuZWxjb2xvcjogc3RyaW5nO1xuICAgIHRleHRjb2xvcjogc3RyaW5nO1xuICAgIHRyaWJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgdHJpY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZURpYWwgZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVEaWFsUGFyYW1zPiB7XG4gICAgc3RhdGljIGdldCBwYXJhbXMoKTogTGl2ZURpYWxQYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMCxcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIHRyaWFuZ2xlOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3duYW1lOiB0cnVlLFxuICAgICAgICAgICAgc2hvd251bWJlcjogdHJ1ZSxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlZGlhbGNvbG9yOiBcInJnYmEoMTA5LCAyMTUsIDI1NSwgMSlcIixcbiAgICAgICAgICAgIGRpYWxjb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmVuZWVkbGVjb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICBuZWVkbGVjb2xvcjogXCJyZ2JhKDEwNSwgMTA1LCAxMDUsIDEpXCIsXG4gICAgICAgICAgICBwYW5lbGNvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmlib3JkZXJjb2xvcjogXCJyZ2JhKDUwLCA1MCwgNTAsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICB3aWR0aDogNDUsXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1LFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUuZGlhbFwiLFxuICAgICAgICAgICAgbW1pbjogMCxcbiAgICAgICAgICAgIG1tYXg6IDEyNyxcbiAgICAgICAgICAgIHR5cGU6IFwiaW50XCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpbnRlcmFjdGlvblJlY3Q6IG51bWJlcltdID0gWzAsIDAsIDAsIDBdO1xuXG4gICAgZ2V0IHRydWVTdGVwcygpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCBzdGVwcywgc3RlcCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGZ1bGwgPSAxMDA7XG4gICAgICAgIGNvbnN0IG1heFN0ZXBzID0gdHlwZSA9PT0gXCJlbnVtXCIgPyB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aCA6IHR5cGUgPT09IFwiaW50XCIgPyBtbWF4IC0gbW1pbiA6IGZ1bGw7XG4gICAgICAgIGlmIChzdGVwKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5taW4oTWF0aC5mbG9vcigobW1heCAtIG1taW4pIC8gTWF0aC5yb3VuZChzdGVwKSksIG1heFN0ZXBzKTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBzdGVwKSwgbWF4U3RlcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGVwcykgcmV0dXJuIE1hdGgubWluKHN0ZXBzLCBtYXhTdGVwcyk7XG4gICAgICAgIHJldHVybiBtYXhTdGVwcztcbiAgICB9XG4gICAgZ2V0IGRpc3RhbmNlKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHZhbHVlIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gdmFsdWUgLyB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aCA6IHZhbHVlIC8gKG1tYXggLSBtbWluKTtcbiAgICB9XG4gICAgZ2V0IHN0ZXBSYW5nZSgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCBzdGVwIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgZnVsbCA9IDEwMDtcbiAgICAgICAgaWYgKHN0ZXApIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IGZ1bGwgLyB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aCA6IHR5cGUgPT09IFwiaW50XCIgPyBNYXRoLnJvdW5kKHN0ZXApIC8gKG1tYXggLSBtbWluKSAqIGZ1bGwgOiBzdGVwIC8gKG1tYXggLSBtbWluKSAqIGZ1bGw7XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICByZXR1cm4gZnVsbCAvIHRydWVTdGVwcztcbiAgICB9XG4gICAgcGFpbnQoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgZm9udG5hbWUsXG4gICAgICAgICAgICBmb250c2l6ZSxcbiAgICAgICAgICAgIGZvbnRmYWNlLFxuICAgICAgICAgICAgYXBwZWFyYW5jZSxcbiAgICAgICAgICAgIHRyaWFuZ2xlLFxuICAgICAgICAgICAgc2hvd25hbWUsXG4gICAgICAgICAgICBzaG93bnVtYmVyLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBwYW5lbGNvbG9yLFxuICAgICAgICAgICAgYWN0aXZlbmVlZGxlY29sb3IsXG4gICAgICAgICAgICBuZWVkbGVjb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZWRpYWxjb2xvcixcbiAgICAgICAgICAgIGRpYWxjb2xvcixcbiAgICAgICAgICAgIHRleHRjb2xvcixcbiAgICAgICAgICAgIHRyaWJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdHJpY29sb3IsXG4gICAgICAgICAgICBzaG9ydG5hbWVcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlO1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cblxuICAgICAgICBjb25zdCB0cmlhbmdsZUhlaWdodCA9IDQ7XG4gICAgICAgIGNvbnN0IHRyaWFuZ2xlTGluZVdpZHRoID0gMC42O1xuXG4gICAgICAgIGxldCBzdGFydDogbnVtYmVyO1xuICAgICAgICBsZXQgZW5kOiBudW1iZXI7XG4gICAgICAgIGxldCB2YWxQb3M6IG51bWJlcjtcbiAgICAgICAgbGV0IGRpYWxIZWlnaHQ6IG51bWJlcjtcblxuICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJ0aW55XCIpIHtcbiAgICAgICAgICAgIGRpYWxIZWlnaHQgPSAxODtcbiAgICAgICAgICAgIHN0YXJ0ID0gLTMgKiBNYXRoLlBJIC8gMjtcbiAgICAgICAgICAgIGVuZCA9IDA7XG4gICAgICAgICAgICB2YWxQb3MgPSBzdGFydCArIHRvUmFkKHRoaXMuZGlzdGFuY2UgKiAyNzApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlhbEhlaWdodCA9IDI1O1xuICAgICAgICAgICAgc3RhcnQgPSBNYXRoLlBJIC0gMyAqIE1hdGguUEkgLyA4O1xuICAgICAgICAgICAgZW5kID0gMiAqIE1hdGguUEkgKyAzICogTWF0aC5QSSAvIDg7XG4gICAgICAgICAgICB2YWxQb3MgPSBzdGFydCArIHRvUmFkKHRoaXMuZGlzdGFuY2UgKiAzMTUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpYWxSYWRpdXMgPSBkaWFsSGVpZ2h0IC8gMjtcblxuICAgICAgICBsZXQgZGlhbENlbnRlclggPSB3aWR0aCAqIDAuNTtcbiAgICAgICAgbGV0IGRpYWxDZW50ZXJZID0gaGVpZ2h0ICogMC41ICsgMTtcbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwicGFuZWxcIikge1xuICAgICAgICAgICAgZGlhbENlbnRlclkgKz0gMTA7XG4gICAgICAgIH0gZWxzZSBpZiAoYXBwZWFyYW5jZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICBpZiAoc2hvd251bWJlcikgZGlhbENlbnRlclkgLT0gZm9udHNpemUgLSA1O1xuICAgICAgICAgICAgaWYgKHNob3duYW1lKSBkaWFsQ2VudGVyWSArPSBmb250c2l6ZSAtIDU7XG4gICAgICAgICAgICBpZiAodHJpYW5nbGUpIGRpYWxDZW50ZXJZICs9IHRyaWFuZ2xlSGVpZ2h0IC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChhcHBlYXJhbmNlID09PSBcInRpbnlcIikge1xuICAgICAgICAgICAgaWYgKHNob3duYW1lKSB7XG4gICAgICAgICAgICAgICAgZGlhbENlbnRlclkgKz0gNjtcbiAgICAgICAgICAgICAgICBkaWFsQ2VudGVyWCA9IDEwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0ID0gWzAsIGRpYWxDZW50ZXJZIC0gZGlhbEhlaWdodCAvIDIsIHdpZHRoLCBkaWFsSGVpZ2h0XTtcbiAgICAgICAgY29uc3QgYXJjU3RhcnRYID0gZGlhbENlbnRlclggKyAoZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguY29zKHN0YXJ0KSk7XG4gICAgICAgIGNvbnN0IGFyY1N0YXJ0WSA9IGRpYWxDZW50ZXJZICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLnNpbihzdGFydCkpO1xuICAgICAgICBjb25zdCBhcmNFbmRYID0gZGlhbENlbnRlclggKyAoZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguY29zKGVuZCkpO1xuICAgICAgICBjb25zdCBhcmNFbmRZID0gZGlhbENlbnRlclkgKyAoZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguc2luKGVuZCkpO1xuICAgICAgICBjb25zdCB2YWx1ZVBvc1ggPSBkaWFsQ2VudGVyWCArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5jb3ModmFsUG9zKSk7XG4gICAgICAgIGNvbnN0IHZhbHVlUG9zWSA9IGRpYWxDZW50ZXJZICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLnNpbih2YWxQb3MpKTtcbiAgICAgICAgY29uc3QgZW5kQ2FwUmFkaXVzID0gMTtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gMjtcbiAgICAgICAgbGV0IHBhbmVsT2Zmc2V0ID0gMDtcblxuICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJwYW5lbFwiKSB7XG4gICAgICAgICAgICBwYW5lbE9mZnNldCA9IDU7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBib3JkZXJjb2xvcjtcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAwLjQ7XG4gICAgICAgICAgICByb3VuZGVkUmVjdChjdHgsIDEsIDEsIHdpZHRoIC0gMiwgaGVpZ2h0IC0gMiwgNSk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gcGFuZWxjb2xvcjtcbiAgICAgICAgICAgIGZpbGxSb3VuZGVkUmVjdChjdHgsIDEuMiwgMS4yLCB3aWR0aCAtIDAuNCwgMzAgLSAwLjQsIDUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYWN0aXZlID8gYWN0aXZlbmVlZGxlY29sb3IgOiBuZWVkbGVjb2xvcjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGN0eC5zdHJva2VTdHlsZTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kIGFyYyBlbmRjYXBzXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhhcmNTdGFydFgsIGFyY1N0YXJ0WSwgZW5kQ2FwUmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhhcmNFbmRYLCBhcmNFbmRZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kIGFyY1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBkaWFsUmFkaXVzLCBzdGFydCwgZW5kKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIGRyYXcgdmFsdWUgYXJjLCB3aGljaCBjaGFuZ2VzIGlmIHRyaWFuZ2xlIGlzIGVuYWJsZWRcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYWN0aXZlID8gYWN0aXZlZGlhbGNvbG9yIDogZGlhbGNvbG9yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3R4LnN0cm9rZVN0eWxlO1xuICAgICAgICBpZiAodHJpYW5nbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pZHBvaW50ID0gKHN0YXJ0ICsgZW5kKSAvIDI7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBhY3RpdmUgPyBhY3RpdmVkaWFsY29sb3IgOiBkaWFsY29sb3I7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiAwLjUpIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBkaWFsUmFkaXVzLCBtaWRwb2ludCwgdmFsUG9zKTtcbiAgICAgICAgICAgIGVsc2UgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGRpYWxSYWRpdXMsIHZhbFBvcywgbWlkcG9pbnQpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZHJhdyB2YWx1ZSBhcmMgZW5kY2FwXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKGFyY1N0YXJ0WCwgYXJjU3RhcnRZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAvLyBkcmF3IHZhbHVlIGFyY1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGRpYWxSYWRpdXMsIHN0YXJ0LCB2YWxQb3MpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXcgZGlhbFxuICAgICAgICAvLyBkcmF3IGRpYWwgcm91bmQgZW5kY2Fwc1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBhY3RpdmUgPyBhY3RpdmVuZWVkbGVjb2xvciA6IG5lZWRsZWNvbG9yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3R4LnN0cm9rZVN0eWxlO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHZhbHVlUG9zWCwgdmFsdWVQb3NZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gZHJhdyBkaWFsIGxpbmVcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSk7XG4gICAgICAgIGN0eC5saW5lVG8odmFsdWVQb3NYLCB2YWx1ZVBvc1kpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIGFkZCB0ZXh0IGlmIGl0IGlzIGVuYWJsZWRcbiAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZX0gJHtmb250c2l6ZX0gJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICBpZiAoc2hvd25hbWUpIHtcbiAgICAgICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInRpbnlcIikge1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoc2hvcnRuYW1lLCAwLCBwYW5lbE9mZnNldCArIGZvbnRzaXplLCB3aWR0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChzaG9ydG5hbWUsIHdpZHRoIC8gMiwgcGFuZWxPZmZzZXQgKyBmb250c2l6ZSwgd2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93bnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCB0aW55T2Zmc2V0ID0gYXBwZWFyYW5jZSA9PT0gXCJ0aW55XCIgPyAxMiA6IDA7XG4gICAgICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJ0aW55XCIpIHtcbiAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuZGlzcGxheVZhbHVlLCB0aW55T2Zmc2V0LCBoZWlnaHQgLSBwYW5lbE9mZnNldCwgd2lkdGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5kaXNwbGF5VmFsdWUsIHdpZHRoIC8gMiwgaGVpZ2h0IC0gcGFuZWxPZmZzZXQsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3IHRyaWFuZ2xlIGlmIGl0IGlzIGVuYWJsZWRcbiAgICAgICAgaWYgKHRyaWFuZ2xlKSB7XG4gICAgICAgICAgICBpZiAoIWRpc3RhbmNlKSBjdHguZmlsbFN0eWxlID0gdHJpY29sb3I7XG4gICAgICAgICAgICBlbHNlIGlmICghYWN0aXZlKSBjdHguZmlsbFN0eWxlID0gZGlhbGNvbG9yO1xuICAgICAgICAgICAgZWxzZSBjdHguZmlsbFN0eWxlID0gYWN0aXZlZGlhbGNvbG9yO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlwUG9zaXRpb25YID0gZGlhbENlbnRlclggKyBkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5jb3MoLTMgKiBNYXRoLlBJIC8gNCkgLSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpcFBvc2l0aW9uWSA9IGRpYWxDZW50ZXJZICsgZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguc2luKC0zICogTWF0aC5QSSAvIDQpIC0gMTtcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHRpcFBvc2l0aW9uWCwgdGlwUG9zaXRpb25ZKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHRpcFBvc2l0aW9uWCAtIHRyaWFuZ2xlSGVpZ2h0LCB0aXBQb3NpdGlvblkpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odGlwUG9zaXRpb25YLCB0aXBQb3NpdGlvblkgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh0aXBQb3NpdGlvblgsIHRpcFBvc2l0aW9uWSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oZGlhbENlbnRlclggLSB0cmlhbmdsZUhlaWdodCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSAtIHRyaWFuZ2xlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKGRpYWxDZW50ZXJYICsgdHJpYW5nbGVIZWlnaHQsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJpYm9yZGVyY29sb3IgfHwgXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRyaWFuZ2xlTGluZVdpZHRoO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFZhbHVlRnJvbURlbHRhKGU6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1taW4sIG1tYXggfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBzdGVwUmFuZ2UgPSB0aGlzLnN0ZXBSYW5nZTtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSB0aGlzLnBhcmFtcy5zdGVwIHx8IChtbWF4IC0gbW1pbikgLyB0cnVlU3RlcHM7XG4gICAgICAgIGxldCBzdGVwcyA9IE1hdGgucm91bmQoKDEwMCAtIGUueSkgLyBzdGVwUmFuZ2UpO1xuICAgICAgICBzdGVwcyA9IE1hdGgubWluKHRydWVTdGVwcywgTWF0aC5tYXgoMCwgc3RlcHMpKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gc3RlcHM7XG4gICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5yb3VuZChzdGVwcyAqIHN0ZXAgKyBtbWluKTtcbiAgICAgICAgcmV0dXJuIHN0ZXBzICogc3RlcCArIG1taW47XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZS54ID4gdGhpcy5pbnRlcmFjdGlvblJlY3RbMF1cbiAgICAgICAgICAgICYmIGUueCA8IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl1cbiAgICAgICAgICAgICYmIGUueSA+IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdXG4gICAgICAgICAgICAmJiBlLnkgPCB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdXG4gICAgICAgICkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlck1vdmVFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tRGVsdGEoZSk7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIG5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2NhbWVsY2FzZSAqL1xuaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcblxuaW50ZXJmYWNlIExpdmVTbGlkZXJQYXJhbXMgZXh0ZW5kcyBMaXZlUGFyYW1zIHtcbiAgICByZWxhdGl2ZTogYm9vbGVhbjtcbiAgICBmb250bmFtZTogc3RyaW5nO1xuICAgIGZvbnRzaXplOiBudW1iZXI7XG4gICAgZm9udGZhY2U6IFwicmVndWxhclwiIHwgXCJib2xkXCIgfCBcIml0YWxpY1wiIHwgXCJib2xkIGl0YWxpY1wiO1xuICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfCBcImhvcml6b250YWxcIjtcbiAgICBzaG93bmFtZTogYm9vbGVhbjtcbiAgICBzaG93bnVtYmVyOiBib29sZWFuO1xuICAgIHNsaWRlcmNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dGNvbG9yOiBzdHJpbmc7XG4gICAgdHJpYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICB0cmlvbmNvbG9yOiBzdHJpbmc7XG4gICAgdHJpY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVNsaWRlciBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZVNsaWRlclBhcmFtcz4ge1xuICAgIHN0YXRpYyBnZXQgcGFyYW1zKCk6IExpdmVTbGlkZXJQYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMCxcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICBzaG93bmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dudW1iZXI6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXJjb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0Y29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgdHJpb25jb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICByZWxhdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDkwLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUuc2xpZGVyXCIsXG4gICAgICAgICAgICBtbWluOiAwLFxuICAgICAgICAgICAgbW1heDogMTI3LFxuICAgICAgICAgICAgdHlwZTogXCJpbnRcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBfaW5Ub3VjaDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGludGVyYWN0aW9uUmVjdDogbnVtYmVyW10gPSBbMCwgMCwgMCwgMF07XG5cbiAgICBnZXQgdHJ1ZVN0ZXBzKCkge1xuICAgICAgICBjb25zdCB7IG9yaWVudGF0aW9uLCB0eXBlLCBtbWF4LCBtbWluLCBzdGVwcywgc3RlcCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGZ1bGwgPSB0aGlzLmludGVyYWN0aW9uUmVjdFtvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gMyA6IDJdO1xuICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gbW1heCAtIG1taW4gOiBmdWxsO1xuICAgICAgICBpZiAoc3RlcCkge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIE1hdGgucm91bmQoc3RlcCkpLCBtYXhTdGVwcyk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5mbG9vcigobW1heCAtIG1taW4pIC8gc3RlcCksIG1heFN0ZXBzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RlcHMpIHJldHVybiBNYXRoLm1pbihzdGVwcywgbWF4U3RlcHMpO1xuICAgICAgICByZXR1cm4gbWF4U3RlcHM7XG4gICAgfVxuICAgIGdldCBkaXN0YW5jZSgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCB2YWx1ZSB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IHZhbHVlIC8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiB2YWx1ZSAvIChtbWF4IC0gbW1pbik7XG4gICAgfVxuICAgIGdldCBzdGVwUmFuZ2UoKSB7XG4gICAgICAgIGNvbnN0IHsgb3JpZW50YXRpb24sIHR5cGUsIG1tYXgsIG1taW4sIHN0ZXAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBmdWxsID0gdGhpcy5pbnRlcmFjdGlvblJlY3Rbb3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IDMgOiAyXTtcbiAgICAgICAgaWYgKHN0ZXApIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IGZ1bGwgLyB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aCA6IHR5cGUgPT09IFwiaW50XCIgPyBNYXRoLnJvdW5kKHN0ZXApIC8gKG1tYXggLSBtbWluKSAqIGZ1bGwgOiBzdGVwIC8gKG1tYXggLSBtbWluKSAqIGZ1bGw7XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICByZXR1cm4gZnVsbCAvIHRydWVTdGVwcztcbiAgICB9XG4gICAgcGFpbnQoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgZm9udG5hbWUsXG4gICAgICAgICAgICBmb250c2l6ZSxcbiAgICAgICAgICAgIGZvbnRmYWNlLFxuICAgICAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgICAgICBzaG93bmFtZSxcbiAgICAgICAgICAgIHNob3dudW1iZXIsXG4gICAgICAgICAgICBzbGlkZXJjb2xvcixcbiAgICAgICAgICAgIHRleHRjb2xvcixcbiAgICAgICAgICAgIHRyaWJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdHJpb25jb2xvcixcbiAgICAgICAgICAgIHRyaWNvbG9yLFxuICAgICAgICAgICAgc2hvcnRuYW1lXG4gICAgICAgIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IDAuNTtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDg7XG4gICAgICAgIGNvbnN0IHBvcG92ZXJUeXBlID0gXCJWQUxVRV9MQUJFTFwiO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2U7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IHRoaXMuZGlzcGxheVZhbHVlO1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc2xpZGVyY29sb3I7XG5cbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8od2lkdGggKiAwLjUsIGZvbnRzaXplICsgcGFkZGluZyk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoICogMC41LCBoZWlnaHQgLSAoZm9udHNpemUgKyBwYWRkaW5nKSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0ID0gW1xuICAgICAgICAgICAgICAgIHdpZHRoICogMC41IC0gbGluZVdpZHRoIC8gMixcbiAgICAgICAgICAgICAgICBmb250c2l6ZSArIHBhZGRpbmcsXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCAtIDIgKiAoZm9udHNpemUgKyBwYWRkaW5nKVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0cmlib3JkZXJjb2xvcjtcbiAgICAgICAgICAgIGNvbnN0IHRyaU9yaWdpbjogW251bWJlciwgbnVtYmVyXSA9IFtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdFswXSArIGxpbmVXaWR0aCArIDAuNSxcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSAtIDQgKyB0aGlzLmludGVyYWN0aW9uUmVjdFszXSAqICgxIC0gZGlzdGFuY2UpXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0cmlPcmlnaW5bMF0sIHRyaU9yaWdpblsxXSArIDQpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0gKyA4LCB0cmlPcmlnaW5bMV0pO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0gKyA4LCB0cmlPcmlnaW5bMV0gKyA4KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdLCB0cmlPcmlnaW5bMV0gKyA0KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuX2luVG91Y2ggPyB0cmlvbmNvbG9yIDogdHJpY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlfSAke2ZvbnRzaXplfSAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0ZXh0Y29sb3I7XG4gICAgICAgICAgICBpZiAoc2hvd25hbWUpIGN0eC5maWxsVGV4dChzaG9ydG5hbWUsIHdpZHRoIC8gMiwgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIGlmIChzaG93bnVtYmVyKSBjdHguZmlsbFRleHQoZGlzcGxheVZhbHVlLCB3aWR0aCAvIDIsIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhwYWRkaW5nLCBoZWlnaHQgKiAwLjUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCAtIHBhZGRpbmcsIGhlaWdodCAqIDAuNSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0ID0gW1xuICAgICAgICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICogMC41IC0gbGluZVdpZHRoLFxuICAgICAgICAgICAgICAgIHdpZHRoIC0gMiAqIHBhZGRpbmcsXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRyaWJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgY29uc3QgdHJpT3JpZ2luOiBbbnVtYmVyLCBudW1iZXJdID0gW1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl0gKiBkaXN0YW5jZSAtIDQsXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3RbMV0gKyB0aGlzLmludGVyYWN0aW9uUmVjdFszXSArIDJcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDQsIHRyaU9yaWdpblsxXSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDgsIHRyaU9yaWdpblsxXSArIDgpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0sIHRyaU9yaWdpblsxXSArIDgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5faW5Ub3VjaCA/IHRyaW9uY29sb3IgOiB0cmljb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Zm9udGZhY2V9ICR7Zm9udHNpemV9ICR7Zm9udG5hbWV9LCBzYW5zLXNlcmlmYDtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRleHRjb2xvcjtcbiAgICAgICAgICAgIGlmIChzaG93bmFtZSkgY3R4LmZpbGxUZXh0KHNob3J0bmFtZSwgd2lkdGggLyAyLCBmb250c2l6ZSwgd2lkdGgpO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgaWYgKHNob3dudW1iZXIpIGN0eC5maWxsVGV4dChkaXNwbGF5VmFsdWUsIDQsIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFZhbHVlRnJvbVBvcyhlOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcbiAgICAgICAgY29uc3QgeyBvcmllbnRhdGlvbiwgdHlwZSwgbW1pbiwgbW1heCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IHN0ZXBSYW5nZSA9IHRoaXMuc3RlcFJhbmdlO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgY29uc3Qgc3RlcCA9IHRoaXMucGFyYW1zLnN0ZXAgfHwgKG1tYXggLSBtbWluKSAvIHRydWVTdGVwcztcbiAgICAgICAgbGV0IHN0ZXBzID0gTWF0aC5yb3VuZCgob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdIC0gKGUueSAtIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdKSA6IGUueCAtIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdKSAvIHN0ZXBSYW5nZSk7XG4gICAgICAgIHN0ZXBzID0gTWF0aC5taW4odHJ1ZVN0ZXBzLCBNYXRoLm1heCgwLCBzdGVwcykpO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiBzdGVwcztcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLnJvdW5kKHN0ZXBzICogc3RlcCArIG1taW4pO1xuICAgICAgICByZXR1cm4gc3RlcHMgKiBzdGVwICsgbW1pbjtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoZTogUG9pbnRlckRvd25FdmVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IHJlbGF0aXZlLCB2YWx1ZSB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGUueCA+IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdXG4gICAgICAgICAgICAmJiBlLnggPCB0aGlzLmludGVyYWN0aW9uUmVjdFswXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzJdXG4gICAgICAgICAgICAmJiBlLnkgPiB0aGlzLmludGVyYWN0aW9uUmVjdFsxXVxuICAgICAgICAgICAgJiYgZS55IDwgdGhpcy5pbnRlcmFjdGlvblJlY3RbMV0gKyB0aGlzLmludGVyYWN0aW9uUmVjdFszXVxuICAgICAgICApIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbVBvcyhlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB2YWx1ZSkgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgdGhpcy5nZXRWYWx1ZUZyb21Qb3MoZSkpO1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlck1vdmVFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tUG9zKGUpO1xuICAgICAgICB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCBuZXdWYWx1ZSk7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCBMaXZlQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IExpdmVTbGlkZXIgZnJvbSBcIi4vU2xpZGVyXCI7XG5pbXBvcnQgTGl2ZURpYWwgZnJvbSBcIi4vRGlhbFwiO1xuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1idXR0b25cIiwgTGl2ZUJ1dHRvbik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1zbGlkZXJcIiwgTGl2ZVNsaWRlcik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1kaWFsXCIsIExpdmVEaWFsKTtcbiIsImV4cG9ydCBjb25zdCB0b01JREkgPSAoZjogbnVtYmVyKSA9PiBbXCJDXCIsIFwiQyNcIiwgXCJEXCIsIFwiRCNcIiwgXCJFXCIsIFwiRlwiLCBcIkYjXCIsIFwiR1wiLCBcIkcjXCIsIFwiQVwiLCBcIkEjXCIsIFwiQlwiXVsoZiAlIDEyICsgMTIpICUgMTJdICsgTWF0aC5yb3VuZChmIC8gMTIgLSAyKTtcbmV4cG9ydCBjb25zdCB0b1JhZCA9IChkZWdyZWVzOiBudW1iZXIpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuZXhwb3J0IGNvbnN0IHJvdW5kZWRSZWN0ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJhZGl1czogbnVtYmVyKSA9PiB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHJhZGl1cywgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXMsIHkpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaXVzKTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpdXMsIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCArIHJhZGl1cywgeSArIGhlaWdodCk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaXVzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaXVzLCB5KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xufTtcbmV4cG9ydCBjb25zdCBmaWxsUm91bmRlZFJlY3QgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmFkaXVzOiBudW1iZXIpID0+IHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaXVzLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGl1cywgeSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGl1cywgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaXVzLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpdXMpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpdXMsIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=