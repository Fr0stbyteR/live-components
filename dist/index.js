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
exports.push([module.i, "live-button, live-slider, live-dial, live-toggle, live-text, live-numbox, live-tab {\n  display: inline-flex; }\n", ""]);



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
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/Button.ts");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ "./src/Slider.ts");
/* harmony import */ var _Dial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dial */ "./src/Dial.ts");
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toggle */ "./src/Toggle.ts");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Text */ "./src/Text.ts");
/* harmony import */ var _Numbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Numbox */ "./src/Numbox.ts");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tab */ "./src/Tab.ts");







window.customElements.define("live-button", _Button__WEBPACK_IMPORTED_MODULE_0__["default"]);
window.customElements.define("live-toggle", _Toggle__WEBPACK_IMPORTED_MODULE_3__["default"]);
window.customElements.define("live-slider", _Slider__WEBPACK_IMPORTED_MODULE_1__["default"]);
window.customElements.define("live-dial", _Dial__WEBPACK_IMPORTED_MODULE_2__["default"]);
window.customElements.define("live-text", _Text__WEBPACK_IMPORTED_MODULE_4__["default"]);
window.customElements.define("live-numbox", _Numbox__WEBPACK_IMPORTED_MODULE_5__["default"]);
window.customElements.define("live-tab", _Tab__WEBPACK_IMPORTED_MODULE_6__["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9CYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQmFzZS5zY3NzPzdiNzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2hhbmdlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RpYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL051bWJveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2xpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9UYWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RvZ2dsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbIkxpdmVCYXNlQ29tcG9uZW50IiwiSFRNTEVsZW1lbnQiLCJjb25zdHJ1Y3RvciIsInJvb3QiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwiaW5uZXJIVE1MIiwicmVuZGVyIiwiTGl2ZUNvbXBvbmVudCIsIm9ic2VydmVkQXR0cmlidXRlcyIsIk9iamVjdCIsImtleXMiLCJwYXJhbXMiLCJjYW52YXMiLCJjdHgiLCJoYW5kbGVLZXlEb3duIiwiZSIsImhhbmRsZUtleVVwIiwiaGFuZGxlVG91Y2hTdGFydCIsImhhbmRsZVdoZWVsIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVNb3VzZURvd24iLCJwcmV2ZW50RGVmYXVsdCIsImZvY3VzIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImZyb21YIiwicGFnZVgiLCJsZWZ0IiwiZnJvbVkiLCJwYWdlWSIsInRvcCIsInByZXZWYWx1ZSIsInZhbHVlIiwiaGFuZGxlUG9pbnRlckRvd24iLCJ4IiwieSIsIm9yaWdpbmFsRXZlbnQiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVQb2ludGVyRHJhZyIsIm1vdmVtZW50WCIsIm1vdmVtZW50WSIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVQb2ludGVyVXAiLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlTW91c2VPdmVyIiwiaGFuZGxlTW91c2VPdXQiLCJoYW5kbGVDb250ZXh0TWVudSIsImhhbmRsZUZvY3VzSW4iLCJwYWludCIsImhhbmRsZUZvY3VzT3V0IiwicGFzc2l2ZSIsImNoaWxkcmVuIiwiZ2V0Q29udGV4dCIsImRpc3BsYXlWYWx1ZSIsInR5cGUiLCJ1bml0c3R5bGUiLCJ1bml0cyIsImVudW0iLCJ0b0ZpeGVkIiwiTWF0aCIsImFicyIsInRvTUlESSIsImZldGNoQXR0cmlidXRlIiwiaSIsImhvc3QiLCJhdHRyaWJ1dGVzIiwibGVuZ3RoIiwiYXR0ciIsIm5hbWUiLCJtYXRjaCIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsImtleSIsIm9sZFZhbHVlIiwiaXNDb25uZWN0ZWQiLCJzZXRQYXJhbVZhbHVlIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJjaGFuZ2UiLCJzZXRWYWx1ZSIsImRpc3BhdGNoRXZlbnQiLCJMaXZlQ29tcG9uZW50Q2hhbmdlRXZlbnQiLCJkZXRhaWwiLCJhY3RpdmUiLCJ3aWR0aCIsImhlaWdodCIsInNob3J0bmFtZSIsImxvbmduYW1lIiwib3JkZXIiLCJsaW5rbmFtZXMiLCJtbWluIiwibW1heCIsImVudW1faWNvbnMiLCJtb2Rtb2RlIiwiaW5pdGlhbF9lbmFibGUiLCJpbml0aWFsIiwiZXhwb25lbnQiLCJzdGVwIiwic3RlcHMiLCJzcGVlZGxpbSIsImRlZmVyIiwiaW52aXNpYmxlIiwibWFwcGFibGUiLCJMaXZlQnV0dG9uIiwiX2luVG91Y2giLCJhY3RpdmViZ2NvbG9yIiwiYWN0aXZlYmdvbmNvbG9yIiwiYmdjb2xvciIsImJnb25jb2xvciIsImJvcmRlcmNvbG9yIiwiZm9jdXNib3JkZXJjb2xvciIsImJvcmRlcldpZHRoIiwic3R5bGUiLCJsaW5lV2lkdGgiLCJidXR0b25CZ0NvbG9yIiwiYnV0dG9uQm9yZGVyQ29sb3IiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJlbGxpcHNlIiwiUEkiLCJmaWxsIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJzZXRUaW1lb3V0IiwicmVzZXRQb2ludGVycyIsIkN1c3RvbUV2ZW50IiwiTGl2ZURpYWwiLCJpbnRlcmFjdGlvblJlY3QiLCJuZXdWYWx1ZSIsImdldFZhbHVlRnJvbURlbHRhIiwiZm9udG5hbWUiLCJmb250c2l6ZSIsImZvbnRmYWNlIiwiYXBwZWFyYW5jZSIsInRyaWFuZ2xlIiwic2hvd25hbWUiLCJzaG93bnVtYmVyIiwiYWN0aXZlZGlhbGNvbG9yIiwiZGlhbGNvbG9yIiwiYWN0aXZlbmVlZGxlY29sb3IiLCJuZWVkbGVjb2xvciIsInBhbmVsY29sb3IiLCJ0ZXh0Y29sb3IiLCJ0cmlib3JkZXJjb2xvciIsInRyaWNvbG9yIiwidHJ1ZVN0ZXBzIiwiZnVsbCIsIm1heFN0ZXBzIiwibWluIiwiZmxvb3IiLCJyb3VuZCIsImRpc3RhbmNlIiwic3RlcFJhbmdlIiwidHJpYW5nbGVIZWlnaHQiLCJ0cmlhbmdsZUxpbmVXaWR0aCIsInN0YXJ0IiwiZW5kIiwidmFsUG9zIiwiZGlhbEhlaWdodCIsInRvUmFkIiwiZGlhbFJhZGl1cyIsImRpYWxDZW50ZXJYIiwiZGlhbENlbnRlclkiLCJhcmNTdGFydFgiLCJjb3MiLCJhcmNTdGFydFkiLCJzaW4iLCJhcmNFbmRYIiwiYXJjRW5kWSIsInZhbHVlUG9zWCIsInZhbHVlUG9zWSIsImVuZENhcFJhZGl1cyIsInBhbmVsT2Zmc2V0Iiwicm91bmRlZFJlY3QiLCJmaWxsUm91bmRlZFJlY3QiLCJhcmMiLCJtaWRwb2ludCIsIm1vdmVUbyIsImxpbmVUbyIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsInRpbnlPZmZzZXQiLCJ0aXBQb3NpdGlvblgiLCJ0aXBQb3NpdGlvblkiLCJwcmV2U3RlcHMiLCJkU3RlcHMiLCJtYXgiLCJMaXZlTnVtYm94IiwiYWN0aXZldHJpY29sb3IiLCJ0cmljb2xvcjIiLCJhY3RpdmV0cmljb2xvcjIiLCJhY3RpdmVzbGlkZXJjb2xvciIsImZpbGxSZWN0IiwiY2xvc2VQYXRoIiwidGV4dEJhc2VsaW5lIiwiTGl2ZVNsaWRlciIsImdldFZhbHVlRnJvbVBvcyIsIm9yaWVudGF0aW9uIiwic2xpZGVyY29sb3IiLCJ0cmlvbmNvbG9yIiwicmVsYXRpdmUiLCJwYWRkaW5nIiwiaW50ZXJhY3Rpb25XaWR0aCIsInRyaU9yaWdpbiIsIkxpdmVUYWIiLCJ0YWJSZWN0cyIsInRleHRvbmNvbG9yIiwiYWN0aXZldGV4dGNvbG9yIiwiYWN0aXZldGV4dG9uY29sb3IiLCJzcGFjaW5nX3giLCJzcGFjaW5nX3kiLCJtdWx0aWxpbmUiLCJnZXRUYWJSZWN0cyIsImVudW1zIiwibWFyZ2luIiwibWluSGVpZ2h0IiwiY291bnQiLCJjb3VudFBlckxpbmUiLCJsaW5lcyIsImludGVydmFsIiwicmVjdFdpZHRoIiwic3BhY2luZ1giLCJzcGFjaW5nWSIsImNlaWwiLCJ0ZXh0V2lkdGhzIiwidG90YWwiLCJzcGFjZSIsImoiLCJ0ZXh0RGltZW5zaW9ucyIsIm1lYXN1cmVUZXh0IiwidXNlZCIsInJlY3RTcGFjZSIsIkxpdmVUZXh0IiwidGV4dCIsInRleHRvbiIsIkxpdmVUb2dnbGUiLCJ3aW5kb3ciLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsImYiLCJkZWdyZWVzIiwicmFkaXVzIiwicmFkaWkiLCJmb3JFYWNoIiwidiIsInF1YWRyYXRpY0N1cnZlVG8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ2ZBLHFCQUFxQixtQkFBTyxDQUFDLGlGQUFrQjs7QUFFL0M7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQSwrQjs7Ozs7Ozs7Ozs7QUNyQkEsMkJBQTJCLG1CQUFPLENBQUMscUdBQWdEO0FBQ25GO0FB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QjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2RkEsY0FBYyxtQkFBTyxDQUFDLHFNQUFnRzs7QUFFdEgsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1HQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxpQkFBTixTQUFnQ0MsV0FBaEMsQ0FBNEM7QUFHL0NDLGFBQVcsR0FBRztBQUNWO0FBRFUsU0FGZEMsSUFFYztBQUVWLFNBQUtBLElBQUwsR0FBWSxLQUFLQyxZQUFMLENBQWtCO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBQWxCLENBQVo7QUFDQSxTQUFLRixJQUFMLENBQVVHLFNBQVYsR0FBc0IsS0FBS0MsTUFBTCxFQUF0QjtBQUNIOztBQUNEQSxRQUFNLEdBQUc7QUFDTCxXQUFPLEVBQVA7QUFDSDs7QUFWOEM7QUFhNUMsTUFBTUMsYUFBTixTQUFrRFIsaUJBQWxELENBQW9FO0FBNkJ2RSxhQUFXUyxrQkFBWCxHQUFnQztBQUM1QixXQUFPQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLQyxNQUFqQixDQUFQO0FBQ0g7O0FBa0REVixhQUFXLEdBQUc7QUFDVjtBQURVLFNBakRkVyxNQWlEYztBQUFBLFNBaERkQyxHQWdEYztBQUFBLFNBL0NkRixNQStDYzs7QUFBQSxTQTdDZEcsYUE2Q2MsR0E3Q0dDLENBQUQsSUFBc0IsQ0FBRSxDQTZDMUI7O0FBQUEsU0E1Q2RDLFdBNENjLEdBNUNDRCxDQUFELElBQXNCLENBQUUsQ0E0Q3hCOztBQUFBLFNBM0NkRSxnQkEyQ2MsR0EzQ01GLENBQUQsSUFBbUIsQ0FBRSxDQTJDMUI7O0FBQUEsU0ExQ2RHLFdBMENjLEdBMUNDSCxDQUFELElBQW1CLENBQUUsQ0EwQ3JCOztBQUFBLFNBekNkSSxXQXlDYyxHQXpDQ0osQ0FBRCxJQUFtQixDQUFFLENBeUNyQjs7QUFBQSxTQXhDZEssZUF3Q2MsR0F4Q0tMLENBQUQsSUFBbUI7QUFDakNBLE9BQUMsQ0FBQ00sY0FBRjtBQUNBLFdBQUtULE1BQUwsQ0FBWVUsS0FBWjtBQUNBLFVBQU1DLElBQUksR0FBRyxLQUFLWCxNQUFMLENBQVlZLHFCQUFaLEVBQWI7QUFDQSxVQUFNQyxLQUFLLEdBQUdWLENBQUMsQ0FBQ1csS0FBRixHQUFVSCxJQUFJLENBQUNJLElBQTdCO0FBQ0EsVUFBTUMsS0FBSyxHQUFHYixDQUFDLENBQUNjLEtBQUYsR0FBVU4sSUFBSSxDQUFDTyxHQUE3QjtBQUNBLFVBQU1DLFNBQVMsR0FBRyxLQUFLcEIsTUFBTCxDQUFZcUIsS0FBOUI7QUFDQSxXQUFLQyxpQkFBTCxDQUF1QjtBQUFFQyxTQUFDLEVBQUVULEtBQUw7QUFBWVUsU0FBQyxFQUFFUCxLQUFmO0FBQXNCUSxxQkFBYSxFQUFFckI7QUFBckMsT0FBdkI7O0FBQ0EsVUFBTXNCLGVBQWUsR0FBSXRCLENBQUQsSUFBbUI7QUFDdkNBLFNBQUMsQ0FBQ00sY0FBRjtBQUNBLFlBQU1hLENBQUMsR0FBR25CLENBQUMsQ0FBQ1csS0FBRixHQUFVSCxJQUFJLENBQUNJLElBQXpCO0FBQ0EsWUFBTVEsQ0FBQyxHQUFHcEIsQ0FBQyxDQUFDYyxLQUFGLEdBQVVOLElBQUksQ0FBQ08sR0FBekI7QUFDQSxhQUFLUSxpQkFBTCxDQUF1QjtBQUFFUCxtQkFBRjtBQUFhRyxXQUFiO0FBQWdCQyxXQUFoQjtBQUFtQlYsZUFBbkI7QUFBMEJHLGVBQTFCO0FBQWlDVyxtQkFBUyxFQUFFeEIsQ0FBQyxDQUFDd0IsU0FBOUM7QUFBeURDLG1CQUFTLEVBQUV6QixDQUFDLENBQUN5QixTQUF0RTtBQUFpRkosdUJBQWEsRUFBRXJCO0FBQWhHLFNBQXZCO0FBQ0gsT0FMRDs7QUFNQSxVQUFNMEIsYUFBYSxHQUFJMUIsQ0FBRCxJQUFtQjtBQUNyQ0EsU0FBQyxDQUFDTSxjQUFGO0FBQ0EsWUFBTWEsQ0FBQyxHQUFHbkIsQ0FBQyxDQUFDVyxLQUFGLEdBQVVILElBQUksQ0FBQ0ksSUFBekI7QUFDQSxZQUFNUSxDQUFDLEdBQUdwQixDQUFDLENBQUNjLEtBQUYsR0FBVU4sSUFBSSxDQUFDTyxHQUF6QjtBQUNBLGFBQUtZLGVBQUwsQ0FBcUI7QUFBRVIsV0FBRjtBQUFLQyxXQUFMO0FBQVFDLHVCQUFhLEVBQUVyQjtBQUF2QixTQUFyQjtBQUNBNEIsZ0JBQVEsQ0FBQ0MsbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMENQLGVBQTFDO0FBQ0FNLGdCQUFRLENBQUNDLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDSCxhQUF4QztBQUNILE9BUEQ7O0FBUUFFLGNBQVEsQ0FBQ0UsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNSLGVBQXZDO0FBQ0FNLGNBQVEsQ0FBQ0UsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNKLGFBQXJDO0FBQ0gsS0FnQmE7O0FBQUEsU0FmZEssZUFlYyxHQWZLL0IsQ0FBRCxJQUFtQixDQUFFLENBZXpCOztBQUFBLFNBZGRnQyxjQWNjLEdBZEloQyxDQUFELElBQW1CLENBQUUsQ0FjeEI7O0FBQUEsU0FiZGlDLGlCQWFjLEdBYk9qQyxDQUFELElBQW1CLENBQUUsQ0FhM0I7O0FBQUEsU0FaZGtCLGlCQVljLEdBWk9sQixDQUFELElBQXlCLENBQUUsQ0FZakM7O0FBQUEsU0FYZHVCLGlCQVdjLEdBWE92QixDQUFELElBQXlCLENBQUUsQ0FXakM7O0FBQUEsU0FWZDJCLGVBVWMsR0FWSzNCLENBQUQsSUFBdUIsQ0FBRSxDQVU3Qjs7QUFBQSxTQVRka0MsYUFTYyxHQVRHbEMsQ0FBRCxJQUFtQjtBQUMvQixXQUFLSixNQUFMLENBQVlXLEtBQVosR0FBb0IsSUFBcEI7QUFDQSxXQUFLNEIsS0FBTDtBQUNILEtBTWE7O0FBQUEsU0FMZEMsY0FLYyxHQUxJcEMsQ0FBRCxJQUFtQjtBQUNoQyxXQUFLSixNQUFMLENBQVlXLEtBQVosR0FBb0IsS0FBcEI7QUFDQSxXQUFLNEIsS0FBTDtBQUNILEtBRWE7O0FBRVYsU0FBS0wsZ0JBQUwsQ0FBc0IsU0FBdEIsRUFBaUMsS0FBSy9CLGFBQXRDO0FBQ0EsU0FBSytCLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLEtBQUs3QixXQUFwQztBQUNBLFNBQUs2QixnQkFBTCxDQUFzQixZQUF0QixFQUFvQyxLQUFLNUIsZ0JBQXpDLEVBQTJEO0FBQUVtQyxhQUFPLEVBQUU7QUFBWCxLQUEzRDtBQUNBLFNBQUtQLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLEtBQUszQixXQUFwQztBQUNBLFNBQUsyQixnQkFBTCxDQUFzQixPQUF0QixFQUErQixLQUFLMUIsV0FBcEM7QUFDQSxTQUFLMEIsZ0JBQUwsQ0FBc0IsV0FBdEIsRUFBbUMsS0FBS3pCLGVBQXhDLEVBQXlEO0FBQUVnQyxhQUFPLEVBQUU7QUFBWCxLQUF6RDtBQUNBLFNBQUtQLGdCQUFMLENBQXNCLFdBQXRCLEVBQW1DLEtBQUtDLGVBQXhDO0FBQ0EsU0FBS0QsZ0JBQUwsQ0FBc0IsVUFBdEIsRUFBa0MsS0FBS0UsY0FBdkM7QUFDQSxTQUFLRixnQkFBTCxDQUFzQixTQUF0QixFQUFpQyxLQUFLSSxhQUF0QztBQUNBLFNBQUtKLGdCQUFMLENBQXNCLFVBQXRCLEVBQWtDLEtBQUtNLGNBQXZDO0FBQ0EsU0FBS3ZDLE1BQUwsR0FBYyxLQUFLVixJQUFMLENBQVVtRCxRQUFWLENBQW1CLENBQW5CLENBQWQ7QUFDQSxTQUFLeEMsR0FBTCxHQUFXLEtBQUtELE1BQUwsQ0FBWTBDLFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBLFNBQUszQyxNQUFMLEdBQWUsS0FBS1YsV0FBTixDQUEyQ1UsTUFBekQ7QUFDSDs7QUFDRCxNQUFJNEMsWUFBSixHQUFtQjtBQUFBLHVCQUMyQixLQUFLNUMsTUFEaEM7QUFBQSxRQUNQcUIsS0FETyxnQkFDUEEsS0FETztBQUFBLFFBQ0F3QixJQURBLGdCQUNBQSxJQURBO0FBQUEsUUFDTUMsU0FETixnQkFDTUEsU0FETjtBQUFBLFFBQ2lCQyxLQURqQixnQkFDaUJBLEtBRGpCO0FBRWYsUUFBSUYsSUFBSSxLQUFLLE1BQWIsRUFBcUIsT0FBTyxLQUFLN0MsTUFBTCxDQUFZZ0QsSUFBWixDQUFpQjNCLEtBQWpCLENBQVA7QUFDckIsUUFBSXlCLFNBQVMsS0FBSyxLQUFsQixFQUF5QixPQUFPekIsS0FBSyxDQUFDNEIsT0FBTixDQUFjLENBQWQsQ0FBUDtBQUN6QixRQUFJSCxTQUFTLEtBQUssT0FBbEIsRUFBMkIsT0FBT3pCLEtBQUssQ0FBQzRCLE9BQU4sQ0FBYyxDQUFkLENBQVA7QUFDM0IsUUFBSUgsU0FBUyxLQUFLLE1BQWxCLEVBQTBCLE9BQU96QixLQUFLLENBQUM0QixPQUFOLENBQWNKLElBQUksS0FBSyxLQUFULEdBQWlCLENBQWpCLEdBQXFCLENBQW5DLElBQXdDLEtBQS9DO0FBQzFCLFFBQUlDLFNBQVMsS0FBSyxPQUFsQixFQUEyQixPQUFPekIsS0FBSyxDQUFDNEIsT0FBTixDQUFjSixJQUFJLEtBQUssS0FBVCxHQUFpQixDQUFqQixHQUFxQixDQUFuQyxJQUF3QyxLQUEvQztBQUMzQixRQUFJQyxTQUFTLEtBQUssU0FBbEIsRUFBNkIsT0FBT3pCLEtBQUssQ0FBQzRCLE9BQU4sQ0FBY0osSUFBSSxLQUFLLEtBQVQsR0FBaUIsQ0FBakIsR0FBcUIsQ0FBbkMsSUFBd0MsS0FBL0M7QUFDN0IsUUFBSUMsU0FBUyxLQUFLLEdBQWxCLEVBQXVCLE9BQU96QixLQUFLLENBQUM0QixPQUFOLENBQWNKLElBQUksS0FBSyxLQUFULEdBQWlCLENBQWpCLEdBQXFCLENBQW5DLElBQXdDLElBQS9DO0FBQ3ZCLFFBQUlDLFNBQVMsS0FBSyxLQUFsQixFQUF5QixPQUFPekIsS0FBSyxLQUFLLENBQVYsR0FBYyxHQUFkLEdBQW9CLENBQUN3QixJQUFJLEtBQUssS0FBVCxHQUFpQkssSUFBSSxDQUFDQyxHQUFMLENBQVM5QixLQUFULENBQWpCLEdBQW1DNkIsSUFBSSxDQUFDQyxHQUFMLENBQVM5QixLQUFULEVBQWdCNEIsT0FBaEIsQ0FBd0IsQ0FBeEIsQ0FBcEMsS0FBbUU1QixLQUFLLEdBQUcsQ0FBUixHQUFZLElBQVosR0FBbUIsSUFBdEYsQ0FBM0I7QUFDekIsUUFBSXlCLFNBQVMsS0FBSyxXQUFsQixFQUErQixPQUFPekIsS0FBSyxDQUFDNEIsT0FBTixDQUFjSixJQUFJLEtBQUssS0FBVCxHQUFpQixDQUFqQixHQUFxQixDQUFuQyxJQUF3QyxLQUEvQztBQUMvQixRQUFJQyxTQUFTLEtBQUssTUFBbEIsRUFBMEIsT0FBT00scURBQU0sQ0FBQy9CLEtBQUQsQ0FBYjtBQUMxQixRQUFJeUIsU0FBUyxLQUFLLFFBQWxCLEVBQTRCLE9BQU96QixLQUFLLENBQUM0QixPQUFOLENBQWNKLElBQUksS0FBSyxLQUFULEdBQWlCLENBQWpCLEdBQXFCLENBQW5DLElBQXdDLEdBQXhDLEdBQThDRSxLQUFyRDtBQUM1QixRQUFJRCxTQUFTLEtBQUssUUFBbEIsRUFBNEIsT0FBT3pCLEtBQUssQ0FBQzRCLE9BQU4sQ0FBY0osSUFBSSxLQUFLLEtBQVQsR0FBaUIsQ0FBakIsR0FBcUIsQ0FBbkMsQ0FBUDtBQUM1QixXQUFPLEtBQVA7QUFDSDs7QUFDRFEsZ0JBQWMsR0FBRztBQUNiLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLL0QsSUFBTCxDQUFVZ0UsSUFBVixDQUFlQyxVQUFmLENBQTBCQyxNQUE5QyxFQUFzREgsQ0FBQyxFQUF2RCxFQUEyRDtBQUN2RCxVQUFNSSxJQUFJLEdBQUcsS0FBS25FLElBQUwsQ0FBVWdFLElBQVYsQ0FBZUMsVUFBZixDQUEwQkYsQ0FBMUIsQ0FBYjtBQUR1RCxVQUUvQ0ssSUFGK0MsR0FFL0JELElBRitCLENBRS9DQyxJQUYrQztBQUFBLFVBRXpDdEMsS0FGeUMsR0FFL0JxQyxJQUYrQixDQUV6Q3JDLEtBRnlDO0FBR3RELFdBQUtyQixNQUFOLENBQXFCMkQsSUFBckIsSUFBNkJ0QyxLQUFLLENBQUN1QyxLQUFOLENBQVksb0JBQVosSUFBb0MsQ0FBQ3ZDLEtBQXJDLEdBQTZDQSxLQUExRTtBQUNIO0FBQ0o7O0FBQ0R3QywwQkFBd0IsQ0FBQ0MsR0FBRCxFQUFjQyxRQUFkLEVBQWdDMUMsS0FBaEMsRUFBK0M7QUFDbkUsUUFBSSxDQUFDLEtBQUsyQyxXQUFWLEVBQXVCO0FBQ3ZCLFFBQUksT0FBTzNDLEtBQVAsS0FBaUIsV0FBakIsSUFBZ0NBLEtBQUssS0FBSyxJQUE5QyxFQUFvRDtBQUNwRCxTQUFLNEMsYUFBTCxDQUFtQkgsR0FBbkIsRUFBd0J6QyxLQUFLLENBQUN1QyxLQUFOLENBQVksb0JBQVosSUFBb0MsQ0FBQ3ZDLEtBQXJDLEdBQTZDQSxLQUFyRTtBQUNIOztBQUNENkMsbUJBQWlCLEdBQUc7QUFDaEIsU0FBS2IsY0FBTDtBQUNBLFNBQUtkLEtBQUw7QUFDSDs7QUFDRDBCLGVBQWEsQ0FBQ0gsR0FBRCxFQUFjekMsS0FBZCxFQUEwQjtBQUNsQyxTQUFLckIsTUFBTixDQUFxQjhELEdBQXJCLElBQTRCekMsS0FBNUI7QUFDQSxRQUFJeUMsR0FBRyxLQUFLLE9BQVosRUFBcUIsS0FBS0ssTUFBTDtBQUNyQixTQUFLNUIsS0FBTDtBQUNIOztBQUNENkIsVUFBUSxDQUFDL0MsS0FBRCxFQUFnQjtBQUNwQixTQUFLNEMsYUFBTCxDQUFtQixPQUFuQixFQUE0QjVDLEtBQTVCO0FBQ0g7O0FBQ0Q4QyxRQUFNLEdBQUc7QUFDTCxTQUFLRSxhQUFMLENBQW1CLElBQUlDLHFFQUFKLENBQTZCLFFBQTdCLEVBQXVDO0FBQUVDLFlBQU0sRUFBRTtBQUFFbEQsYUFBSyxFQUFFLEtBQUtyQixNQUFMLENBQVlxQixLQUFyQjtBQUE0QnVCLG9CQUFZLEVBQUUsS0FBS0E7QUFBL0M7QUFBVixLQUF2QyxDQUFuQjtBQUNIOztBQUNETCxPQUFLLEdBQUcsQ0FBRTs7QUFDVjVDLFFBQU0sR0FBRztBQUNMLFdBQU8sdURBQVA7QUFDSDs7QUEvSXNFO0FBQTlEQyxhLENBQ0ZJLE0sR0FBcUI7QUFDeEJxQixPQUFLLEVBQUUsQ0FEaUI7QUFFeEJtRCxRQUFNLEVBQUUsSUFGZ0I7QUFHeEI3RCxPQUFLLEVBQUUsS0FIaUI7QUFJeEI4RCxPQUFLLEVBQUUsRUFKaUI7QUFLeEJDLFFBQU0sRUFBRSxFQUxnQjtBQU14QkMsV0FBUyxFQUFFLEVBTmE7QUFPeEJDLFVBQVEsRUFBRSxFQVBjO0FBUXhCQyxPQUFLLEVBQUUsQ0FSaUI7QUFTeEJDLFdBQVMsRUFBRSxLQVRhO0FBVXhCakMsTUFBSSxFQUFFLE9BVmtCO0FBV3hCa0MsTUFBSSxFQUFFLENBWGtCO0FBWXhCQyxNQUFJLEVBQUUsQ0Faa0I7QUFheEJoQyxNQUFJLEVBQUUsRUFia0I7QUFjeEJpQyxZQUFVLEVBQUUsRUFkWTtBQWV4QkMsU0FBTyxFQUFFLE1BZmU7QUFnQnhCQyxnQkFBYyxFQUFFLEtBaEJRO0FBaUJ4QkMsU0FBTyxFQUFFLENBQUMsQ0FBRCxDQWpCZTtBQWtCeEJ0QyxXQUFTLEVBQUUsT0FsQmE7QUFtQnhCQyxPQUFLLEVBQUUsRUFuQmlCO0FBb0J4QnNDLFVBQVEsRUFBRSxDQXBCYztBQXFCeEJDLE1BQUksRUFBRSxDQXJCa0I7QUFzQnhCQyxPQUFLLEVBQUUsQ0F0QmlCO0FBdUJ4QkMsVUFBUSxFQUFFLENBdkJjO0FBd0J4QkMsT0FBSyxFQUFFLEtBeEJpQjtBQXlCeEJDLFdBQVMsRUFBRSxXQXpCYTtBQTBCeEJDLFVBQVEsRUFBRTtBQTFCYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmhDO0FBV2UsTUFBTUMsVUFBTixTQUF5QmhHLG1EQUF6QixDQUF5RDtBQUFBO0FBQUE7QUFBQSxTQWVwRWlHLFFBZm9FLEdBZWhELEtBZmdEOztBQUFBLFNBdURwRXZFLGlCQXZEb0UsR0F1RGhELE1BQU07QUFDdEIsV0FBS3VFLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxXQUFLNUIsYUFBTCxDQUFtQixPQUFuQixFQUE0QixDQUE1QjtBQUNILEtBMURtRTs7QUFBQSxTQTJEcEVsQyxlQTNEb0UsR0EyRGxELE1BQU07QUFDcEIsV0FBSzhELFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxXQUFLNUIsYUFBTCxDQUFtQixPQUFuQixFQUE0QixDQUE1QjtBQUNILEtBOURtRTtBQUFBOztBQUNwRSxhQUFXakUsTUFBWCxHQUFzQztBQUNsQywwRkFDTyxNQUFNQSxNQURiO0FBRUkyRSxlQUFTLEVBQUUsYUFGZjtBQUdJRixXQUFLLEVBQUUsRUFIWDtBQUlJQyxZQUFNLEVBQUUsRUFKWjtBQUtJb0IsbUJBQWEsRUFBRSxxQkFMbkI7QUFNSUMscUJBQWUsRUFBRSx3QkFOckI7QUFPSUMsYUFBTyxFQUFFLHFCQVBiO0FBUUlDLGVBQVMsRUFBRSx3QkFSZjtBQVNJQyxpQkFBVyxFQUFFLHFCQVRqQjtBQVVJQyxzQkFBZ0IsRUFBRTtBQVZ0QjtBQVlIOztBQUdENUQsT0FBSyxHQUFHO0FBQUEsdUJBYUEsS0FBS3ZDLE1BYkw7QUFBQSxRQUVBd0UsTUFGQSxnQkFFQUEsTUFGQTtBQUFBLFFBR0E3RCxLQUhBLGdCQUdBQSxLQUhBO0FBQUEsUUFJQW1GLGFBSkEsZ0JBSUFBLGFBSkE7QUFBQSxRQUtBQyxlQUxBLGdCQUtBQSxlQUxBO0FBQUEsUUFNQUMsT0FOQSxnQkFNQUEsT0FOQTtBQUFBLFFBT0FDLFNBUEEsZ0JBT0FBLFNBUEE7QUFBQSxRQVFBQyxXQVJBLGdCQVFBQSxXQVJBO0FBQUEsUUFTQUMsZ0JBVEEsZ0JBU0FBLGdCQVRBO0FBQUEsUUFVQTlFLEtBVkEsZ0JBVUFBLEtBVkE7QUFBQSxRQVdBb0QsS0FYQSxnQkFXQUEsS0FYQTtBQUFBLFFBWUFDLE1BWkEsZ0JBWUFBLE1BWkE7QUFjSixRQUFNeEUsR0FBRyxHQUFHLEtBQUtBLEdBQWpCO0FBRUEsUUFBTWtHLFdBQVcsR0FBRyxHQUFwQjtBQUVBbEcsT0FBRyxDQUFDRCxNQUFKLENBQVdvRyxLQUFYLENBQWlCNUIsS0FBakIsR0FBeUJBLEtBQUssR0FBRyxJQUFqQztBQUNBdkUsT0FBRyxDQUFDRCxNQUFKLENBQVdvRyxLQUFYLENBQWlCM0IsTUFBakIsR0FBMEJBLE1BQU0sR0FBRyxJQUFuQztBQUNBeEUsT0FBRyxDQUFDRCxNQUFKLENBQVd3RSxLQUFYLEdBQW1CQSxLQUFuQjtBQUNBdkUsT0FBRyxDQUFDRCxNQUFKLENBQVd5RSxNQUFYLEdBQW9CQSxNQUFwQjtBQUNBeEUsT0FBRyxDQUFDb0csU0FBSixHQUFnQkYsV0FBaEI7QUFFQSxRQUFNRyxhQUFhLEdBQUcvQixNQUFNLEdBQUluRCxLQUFLLEdBQUcwRSxlQUFILEdBQXFCRCxhQUE5QixHQUFnRHpFLEtBQUssR0FBRzRFLFNBQUgsR0FBZUQsT0FBaEc7QUFDQSxRQUFNUSxpQkFBaUIsR0FBRzdGLEtBQUssR0FBR3dGLGdCQUFILEdBQXNCRCxXQUFyRDtBQUVBaEcsT0FBRyxDQUFDdUcsU0FBSixHQUFnQkYsYUFBaEI7QUFDQXJHLE9BQUcsQ0FBQ3dHLFNBQUo7QUFDQXhHLE9BQUcsQ0FBQ3lHLE9BQUosQ0FBWWxDLEtBQUssR0FBRyxHQUFwQixFQUF5QkMsTUFBTSxHQUFHLEdBQWxDLEVBQXVDRCxLQUFLLEdBQUcsR0FBUixHQUFjLElBQUkyQixXQUF6RCxFQUFzRTFCLE1BQU0sR0FBRyxHQUFULEdBQWUsSUFBSTBCLFdBQXpGLEVBQXNHLENBQXRHLEVBQXlHLENBQXpHLEVBQTRHLElBQUlsRCxJQUFJLENBQUMwRCxFQUFySDtBQUNBMUcsT0FBRyxDQUFDMkcsSUFBSjtBQUNBM0csT0FBRyxDQUFDNEcsV0FBSixHQUFrQk4saUJBQWxCO0FBQ0F0RyxPQUFHLENBQUM2RyxNQUFKOztBQUVBLFFBQUkxRixLQUFLLElBQUksQ0FBQyxLQUFLd0UsUUFBbkIsRUFBNkI7QUFDekJtQixnQkFBVSxDQUFDLE1BQU0sS0FBSy9DLGFBQUwsQ0FBbUIsT0FBbkIsRUFBNEIsQ0FBNUIsQ0FBUCxFQUF1QyxHQUF2QyxDQUFWO0FBQ0g7QUFDSjs7QUFTRGdELGVBQWEsR0FBRztBQUNaLFNBQUtwQixRQUFMLEdBQWdCLEtBQWhCO0FBQ0g7O0FBakVtRSxDOzs7Ozs7Ozs7Ozs7QUNYeEU7QUFBQTtBQUFPLE1BQU12Qix3QkFBTixTQUF1QzRDLFdBQXZDLENBQTRGLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbkc7QUFDQTtBQXNCZSxNQUFNQyxRQUFOLFNBQXVCdkgsbURBQXZCLENBQXFEO0FBQUE7QUFBQTtBQUFBLFNBNkJoRWlHLFFBN0JnRSxHQTZCNUMsS0E3QjRDO0FBQUEsU0E4QmhFdUIsZUE5QmdFLEdBOEJwQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0E5Qm9DOztBQUFBLFNBNlBoRTlGLGlCQTdQZ0UsR0E2UDNDbEIsQ0FBRCxJQUF5QjtBQUN6QyxVQUNJQSxDQUFDLENBQUNtQixDQUFGLEdBQU0sS0FBSzZGLGVBQUwsQ0FBcUIsQ0FBckIsQ0FBTixJQUNHaEgsQ0FBQyxDQUFDbUIsQ0FBRixHQUFNLEtBQUs2RixlQUFMLENBQXFCLENBQXJCLElBQTBCLEtBQUtBLGVBQUwsQ0FBcUIsQ0FBckIsQ0FEbkMsSUFFR2hILENBQUMsQ0FBQ29CLENBQUYsR0FBTSxLQUFLNEYsZUFBTCxDQUFxQixDQUFyQixDQUZULElBR0doSCxDQUFDLENBQUNvQixDQUFGLEdBQU0sS0FBSzRGLGVBQUwsQ0FBcUIsQ0FBckIsSUFBMEIsS0FBS0EsZUFBTCxDQUFxQixDQUFyQixDQUp2QyxFQUtFO0FBQ0YsV0FBS3ZCLFFBQUwsR0FBZ0IsSUFBaEI7QUFDSCxLQXJRK0Q7O0FBQUEsU0FzUWhFbEUsaUJBdFFnRSxHQXNRM0N2QixDQUFELElBQXlCO0FBQ3pDLFVBQUksQ0FBQyxLQUFLeUYsUUFBVixFQUFvQjtBQUNwQixVQUFNd0IsUUFBUSxHQUFHLEtBQUtDLGlCQUFMLENBQXVCbEgsQ0FBdkIsQ0FBakI7QUFDQSxVQUFJaUgsUUFBUSxLQUFLLEtBQUtySCxNQUFMLENBQVlxQixLQUE3QixFQUFvQyxLQUFLNEMsYUFBTCxDQUFtQixPQUFuQixFQUE0Qm9ELFFBQTVCO0FBQ3ZDLEtBMVErRDs7QUFBQSxTQTJRaEV0RixlQTNRZ0UsR0EyUTlDLE1BQU07QUFDcEIsV0FBSzhELFFBQUwsR0FBZ0IsS0FBaEI7QUFDSCxLQTdRK0Q7QUFBQTs7QUFDaEUsYUFBVzdGLE1BQVgsR0FBb0M7QUFDaEMsMEZBQ08sTUFBTUEsTUFEYjtBQUVJMkUsZUFBUyxFQUFFLFdBRmY7QUFHSUYsV0FBSyxFQUFFLEVBSFg7QUFJSUMsWUFBTSxFQUFFLEVBSlo7QUFLSTZDLGNBQVEsRUFBRSxPQUxkO0FBTUlDLGNBQVEsRUFBRSxFQU5kO0FBT0lDLGNBQVEsRUFBRSxTQVBkO0FBUUlDLGdCQUFVLEVBQUUsVUFSaEI7QUFTSUMsY0FBUSxFQUFFLEtBVGQ7QUFVSUMsY0FBUSxFQUFFLElBVmQ7QUFXSUMsZ0JBQVUsRUFBRSxJQVhoQjtBQVlJM0IsaUJBQVcsRUFBRSxxQkFaakI7QUFhSUMsc0JBQWdCLEVBQUUscUJBYnRCO0FBY0kyQixxQkFBZSxFQUFFLHdCQWRyQjtBQWVJQyxlQUFTLEVBQUUsd0JBZmY7QUFnQklDLHVCQUFpQixFQUFFLHFCQWhCdkI7QUFpQklDLGlCQUFXLEVBQUUsd0JBakJqQjtBQWtCSUMsZ0JBQVUsRUFBRSx3QkFsQmhCO0FBbUJJQyxlQUFTLEVBQUUsa0JBbkJmO0FBb0JJQyxvQkFBYyxFQUFFLHFCQXBCcEI7QUFxQklDLGNBQVEsRUFBRSxxQkFyQmQ7QUFzQkl0RCxVQUFJLEVBQUUsQ0F0QlY7QUF1QklDLFVBQUksRUFBRSxHQXZCVjtBQXdCSW5DLFVBQUksRUFBRTtBQXhCVjtBQTBCSDs7QUFJRCxNQUFJeUYsU0FBSixHQUFnQjtBQUFBLHVCQUM4QixLQUFLdEksTUFEbkM7QUFBQSxRQUNKNkMsSUFESSxnQkFDSkEsSUFESTtBQUFBLFFBQ0VtQyxJQURGLGdCQUNFQSxJQURGO0FBQUEsUUFDUUQsSUFEUixnQkFDUUEsSUFEUjtBQUFBLFFBQ2NRLEtBRGQsZ0JBQ2NBLEtBRGQ7QUFBQSxRQUNxQkQsSUFEckIsZ0JBQ3FCQSxJQURyQjtBQUVaLFFBQU1pRCxJQUFJLEdBQUcsR0FBYjtBQUNBLFFBQU1DLFFBQVEsR0FBRzNGLElBQUksS0FBSyxNQUFULEdBQWtCLEtBQUs3QyxNQUFMLENBQVlnRCxJQUFaLENBQWlCUyxNQUFuQyxHQUE0Q1osSUFBSSxLQUFLLEtBQVQsR0FBaUJtQyxJQUFJLEdBQUdELElBQXhCLEdBQStCd0QsSUFBNUY7O0FBQ0EsUUFBSWpELElBQUosRUFBVTtBQUNOLFVBQUl6QyxJQUFJLEtBQUssTUFBYixFQUFxQixPQUFPLEtBQUs3QyxNQUFMLENBQVlnRCxJQUFaLENBQWlCUyxNQUF4QjtBQUNyQixVQUFJWixJQUFJLEtBQUssS0FBYixFQUFvQixPQUFPSyxJQUFJLENBQUN1RixHQUFMLENBQVN2RixJQUFJLENBQUN3RixLQUFMLENBQVcsQ0FBQzFELElBQUksR0FBR0QsSUFBUixJQUFnQjdCLElBQUksQ0FBQ3lGLEtBQUwsQ0FBV3JELElBQVgsQ0FBM0IsQ0FBVCxFQUF1RGtELFFBQXZELENBQVA7QUFDcEIsYUFBT3RGLElBQUksQ0FBQ3VGLEdBQUwsQ0FBU3ZGLElBQUksQ0FBQ3dGLEtBQUwsQ0FBVyxDQUFDMUQsSUFBSSxHQUFHRCxJQUFSLElBQWdCTyxJQUEzQixDQUFULEVBQTJDa0QsUUFBM0MsQ0FBUDtBQUNIOztBQUNELFFBQUlqRCxLQUFKLEVBQVcsT0FBT3JDLElBQUksQ0FBQ3VGLEdBQUwsQ0FBU2xELEtBQVQsRUFBZ0JpRCxRQUFoQixDQUFQO0FBQ1gsV0FBT0EsUUFBUDtBQUNIOztBQUNELE1BQUlJLFFBQUosR0FBZTtBQUFBLHdCQUN5QixLQUFLNUksTUFEOUI7QUFBQSxRQUNINkMsSUFERyxpQkFDSEEsSUFERztBQUFBLFFBQ0dtQyxJQURILGlCQUNHQSxJQURIO0FBQUEsUUFDU0QsSUFEVCxpQkFDU0EsSUFEVDtBQUFBLFFBQ2UxRCxLQURmLGlCQUNlQSxLQURmO0FBRVgsV0FBT3dCLElBQUksS0FBSyxNQUFULEdBQWtCeEIsS0FBSyxHQUFHLEtBQUtyQixNQUFMLENBQVlnRCxJQUFaLENBQWlCUyxNQUEzQyxHQUFvRCxDQUFDcEMsS0FBSyxHQUFHMEQsSUFBVCxLQUFrQkMsSUFBSSxHQUFHRCxJQUF6QixDQUEzRDtBQUNIOztBQUNELE1BQUk4RCxTQUFKLEdBQWdCO0FBQUEsd0JBQ3VCLEtBQUs3SSxNQUQ1QjtBQUFBLFFBQ0o2QyxJQURJLGlCQUNKQSxJQURJO0FBQUEsUUFDRW1DLElBREYsaUJBQ0VBLElBREY7QUFBQSxRQUNRRCxJQURSLGlCQUNRQSxJQURSO0FBQUEsUUFDY08sSUFEZCxpQkFDY0EsSUFEZDtBQUVaLFFBQU1pRCxJQUFJLEdBQUcsR0FBYjtBQUNBLFFBQUlqRCxJQUFKLEVBQVUsT0FBT3pDLElBQUksS0FBSyxNQUFULEdBQWtCMEYsSUFBSSxHQUFHLEtBQUt2SSxNQUFMLENBQVlnRCxJQUFaLENBQWlCUyxNQUExQyxHQUFtRFosSUFBSSxLQUFLLEtBQVQsR0FBaUJLLElBQUksQ0FBQ3lGLEtBQUwsQ0FBV3JELElBQVgsS0FBb0JOLElBQUksR0FBR0QsSUFBM0IsSUFBbUN3RCxJQUFwRCxHQUEyRGpELElBQUksSUFBSU4sSUFBSSxHQUFHRCxJQUFYLENBQUosR0FBdUJ3RCxJQUE1STtBQUNWLFFBQU1ELFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUNBLFdBQU9DLElBQUksR0FBR0QsU0FBZDtBQUNIOztBQUNEL0YsT0FBSyxHQUFHO0FBQUEsd0JBd0JBLEtBQUt2QyxNQXhCTDtBQUFBLFFBRUF5RSxLQUZBLGlCQUVBQSxLQUZBO0FBQUEsUUFHQUMsTUFIQSxpQkFHQUEsTUFIQTtBQUFBLFFBSUFGLE1BSkEsaUJBSUFBLE1BSkE7QUFBQSxRQUtBN0QsS0FMQSxpQkFLQUEsS0FMQTtBQUFBLFFBTUE0RyxRQU5BLGlCQU1BQSxRQU5BO0FBQUEsUUFPQUMsUUFQQSxpQkFPQUEsUUFQQTtBQUFBLFFBUUFDLFFBUkEsaUJBUUFBLFFBUkE7QUFBQSxRQVNBQyxVQVRBLGlCQVNBQSxVQVRBO0FBQUEsUUFVQUMsUUFWQSxpQkFVQUEsUUFWQTtBQUFBLFFBV0FDLFFBWEEsaUJBV0FBLFFBWEE7QUFBQSxRQVlBQyxVQVpBLGlCQVlBQSxVQVpBO0FBQUEsUUFhQTNCLFdBYkEsaUJBYUFBLFdBYkE7QUFBQSxRQWNBQyxnQkFkQSxpQkFjQUEsZ0JBZEE7QUFBQSxRQWVBK0IsVUFmQSxpQkFlQUEsVUFmQTtBQUFBLFFBZ0JBRixpQkFoQkEsaUJBZ0JBQSxpQkFoQkE7QUFBQSxRQWlCQUMsV0FqQkEsaUJBaUJBQSxXQWpCQTtBQUFBLFFBa0JBSCxlQWxCQSxpQkFrQkFBLGVBbEJBO0FBQUEsUUFtQkFDLFNBbkJBLGlCQW1CQUEsU0FuQkE7QUFBQSxRQW9CQUksU0FwQkEsaUJBb0JBQSxTQXBCQTtBQUFBLFFBcUJBQyxjQXJCQSxpQkFxQkFBLGNBckJBO0FBQUEsUUFzQkFDLFFBdEJBLGlCQXNCQUEsUUF0QkE7QUFBQSxRQXVCQTFELFNBdkJBLGlCQXVCQUEsU0F2QkE7QUF5QkosUUFBTXpFLEdBQUcsR0FBRyxLQUFLQSxHQUFqQjtBQUNBLFFBQU0wSSxRQUFRLEdBQUcsS0FBS0EsUUFBdEI7QUFFQTFJLE9BQUcsQ0FBQ0QsTUFBSixDQUFXb0csS0FBWCxDQUFpQjVCLEtBQWpCLEdBQXlCQSxLQUFLLEdBQUcsSUFBakM7QUFDQXZFLE9BQUcsQ0FBQ0QsTUFBSixDQUFXb0csS0FBWCxDQUFpQjNCLE1BQWpCLEdBQTBCQSxNQUFNLEdBQUcsSUFBbkM7QUFDQXhFLE9BQUcsQ0FBQ0QsTUFBSixDQUFXd0UsS0FBWCxHQUFtQkEsS0FBbkI7QUFDQXZFLE9BQUcsQ0FBQ0QsTUFBSixDQUFXeUUsTUFBWCxHQUFvQkEsTUFBcEI7QUFHQSxRQUFNb0UsY0FBYyxHQUFHLENBQXZCO0FBQ0EsUUFBTUMsaUJBQWlCLEdBQUcsR0FBMUI7QUFFQSxRQUFJQyxLQUFKO0FBQ0EsUUFBSUMsR0FBSjtBQUNBLFFBQUlDLE1BQUo7QUFDQSxRQUFJQyxVQUFKOztBQUVBLFFBQUl6QixVQUFVLEtBQUssTUFBbkIsRUFBMkI7QUFDdkJ5QixnQkFBVSxHQUFHLEVBQWI7QUFDQUgsV0FBSyxHQUFHLENBQUMsQ0FBRCxHQUFLOUYsSUFBSSxDQUFDMEQsRUFBVixHQUFlLEdBQXZCO0FBQ0FxQyxTQUFHLEdBQUcsQ0FBTjtBQUNBQyxZQUFNLEdBQUdGLEtBQUssR0FBR0ksb0RBQUssQ0FBQyxLQUFLUixRQUFMLEdBQWdCLEdBQWpCLENBQXRCO0FBQ0gsS0FMRCxNQUtPO0FBQ0hPLGdCQUFVLEdBQUcsRUFBYjtBQUNBSCxXQUFLLEdBQUc5RixJQUFJLENBQUMwRCxFQUFMLEdBQVUsSUFBSTFELElBQUksQ0FBQzBELEVBQVQsR0FBYyxDQUFoQztBQUNBcUMsU0FBRyxHQUFHLElBQUkvRixJQUFJLENBQUMwRCxFQUFULEdBQWMsSUFBSTFELElBQUksQ0FBQzBELEVBQVQsR0FBYyxDQUFsQztBQUNBc0MsWUFBTSxHQUFHRixLQUFLLEdBQUdJLG9EQUFLLENBQUMsS0FBS1IsUUFBTCxHQUFnQixHQUFqQixDQUF0QjtBQUNIOztBQUNELFFBQU1TLFVBQVUsR0FBR0YsVUFBVSxHQUFHLEdBQWhDO0FBRUEsUUFBSUcsV0FBVyxHQUFHN0UsS0FBSyxHQUFHLEdBQTFCO0FBQ0EsUUFBSThFLFdBQVcsR0FBRzdFLE1BQU0sR0FBRyxHQUFULEdBQWUsQ0FBakM7O0FBQ0EsUUFBSWdELFVBQVUsS0FBSyxPQUFuQixFQUE0QjtBQUN4QjZCLGlCQUFXLElBQUksRUFBZjtBQUNILEtBRkQsTUFFTyxJQUFJN0IsVUFBVSxLQUFLLFVBQW5CLEVBQStCO0FBQ2xDLFVBQUlHLFVBQUosRUFBZ0IwQixXQUFXLElBQUkvQixRQUFRLEdBQUcsQ0FBMUI7QUFDaEIsVUFBSUksUUFBSixFQUFjMkIsV0FBVyxJQUFJL0IsUUFBUSxHQUFHLENBQTFCO0FBQ2QsVUFBSUcsUUFBSixFQUFjNEIsV0FBVyxJQUFJVCxjQUFjLEdBQUcsQ0FBaEM7QUFDakIsS0FKTSxNQUlBLElBQUlwQixVQUFVLEtBQUssTUFBbkIsRUFBMkI7QUFDOUIsVUFBSUUsUUFBSixFQUFjO0FBQ1YyQixtQkFBVyxJQUFJLENBQWY7QUFDQUQsbUJBQVcsR0FBRyxFQUFkO0FBQ0g7QUFDSjs7QUFDRCxTQUFLbEMsZUFBTCxHQUF1QixDQUFDLENBQUQsRUFBSW1DLFdBQVcsR0FBR0osVUFBVSxHQUFHLEdBQS9CLEVBQW9DMUUsS0FBcEMsRUFBMkMwRSxVQUEzQyxDQUF2QjtBQUNBLFFBQU1LLFNBQVMsR0FBR0YsV0FBVyxHQUFJSCxVQUFVLEdBQUcsR0FBYixHQUFtQmpHLElBQUksQ0FBQ3VHLEdBQUwsQ0FBU1QsS0FBVCxDQUFwRDtBQUNBLFFBQU1VLFNBQVMsR0FBR0gsV0FBVyxHQUFJSixVQUFVLEdBQUcsR0FBYixHQUFtQmpHLElBQUksQ0FBQ3lHLEdBQUwsQ0FBU1gsS0FBVCxDQUFwRDtBQUNBLFFBQU1ZLE9BQU8sR0FBR04sV0FBVyxHQUFJSCxVQUFVLEdBQUcsR0FBYixHQUFtQmpHLElBQUksQ0FBQ3VHLEdBQUwsQ0FBU1IsR0FBVCxDQUFsRDtBQUNBLFFBQU1ZLE9BQU8sR0FBR04sV0FBVyxHQUFJSixVQUFVLEdBQUcsR0FBYixHQUFtQmpHLElBQUksQ0FBQ3lHLEdBQUwsQ0FBU1YsR0FBVCxDQUFsRDtBQUNBLFFBQU1hLFNBQVMsR0FBR1IsV0FBVyxHQUFJSCxVQUFVLEdBQUcsR0FBYixHQUFtQmpHLElBQUksQ0FBQ3VHLEdBQUwsQ0FBU1AsTUFBVCxDQUFwRDtBQUNBLFFBQU1hLFNBQVMsR0FBR1IsV0FBVyxHQUFJSixVQUFVLEdBQUcsR0FBYixHQUFtQmpHLElBQUksQ0FBQ3lHLEdBQUwsQ0FBU1QsTUFBVCxDQUFwRDtBQUNBLFFBQU1jLFlBQVksR0FBRyxDQUFyQjtBQUNBLFFBQU0xRCxTQUFTLEdBQUcsQ0FBbEI7QUFDQSxRQUFJMkQsV0FBVyxHQUFHLENBQWxCOztBQUVBLFFBQUl2QyxVQUFVLEtBQUssT0FBbkIsRUFBNEI7QUFDeEJ1QyxpQkFBVyxHQUFHLENBQWQ7QUFDQS9KLFNBQUcsQ0FBQzRHLFdBQUosR0FBa0JuRyxLQUFLLEdBQUd3RixnQkFBSCxHQUFzQkQsV0FBN0M7QUFDQWhHLFNBQUcsQ0FBQ29HLFNBQUosR0FBZ0IsR0FBaEI7QUFDQTRELGdFQUFXLENBQUNoSyxHQUFELEVBQU0sQ0FBTixFQUFTLENBQVQsRUFBWXVFLEtBQUssR0FBRyxDQUFwQixFQUF1QkMsTUFBTSxHQUFHLENBQWhDLEVBQW1DLENBQW5DLENBQVg7QUFDQXhFLFNBQUcsQ0FBQ3VHLFNBQUosR0FBZ0J5QixVQUFoQjtBQUNBaUMsb0VBQWUsQ0FBQ2pLLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQnVFLEtBQUssR0FBRyxHQUF4QixFQUE2QixLQUFLLEdBQWxDLEVBQXVDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUF2QyxDQUFmO0FBQ0g7O0FBRUR2RSxPQUFHLENBQUM0RyxXQUFKLEdBQWtCdEMsTUFBTSxHQUFHd0QsaUJBQUgsR0FBdUJDLFdBQS9DO0FBQ0EvSCxPQUFHLENBQUN1RyxTQUFKLEdBQWdCdkcsR0FBRyxDQUFDNEcsV0FBcEI7QUFDQTVHLE9BQUcsQ0FBQ29HLFNBQUosR0FBZ0JBLFNBQWhCLENBM0ZJLENBNEZKOztBQUNBcEcsT0FBRyxDQUFDd0csU0FBSjtBQUNBeEcsT0FBRyxDQUFDa0ssR0FBSixDQUFRWixTQUFSLEVBQW1CRSxTQUFuQixFQUE4Qk0sWUFBOUIsRUFBNEMsQ0FBNUMsRUFBK0MsSUFBSTlHLElBQUksQ0FBQzBELEVBQXhEO0FBQ0ExRyxPQUFHLENBQUMyRyxJQUFKO0FBQ0EzRyxPQUFHLENBQUN3RyxTQUFKO0FBQ0F4RyxPQUFHLENBQUNrSyxHQUFKLENBQVFSLE9BQVIsRUFBaUJDLE9BQWpCLEVBQTBCRyxZQUExQixFQUF3QyxDQUF4QyxFQUEyQyxJQUFJOUcsSUFBSSxDQUFDMEQsRUFBcEQ7QUFDQTFHLE9BQUcsQ0FBQzJHLElBQUosR0FsR0ksQ0FtR0o7O0FBQ0EzRyxPQUFHLENBQUN3RyxTQUFKO0FBQ0F4RyxPQUFHLENBQUNrSyxHQUFKLENBQVFkLFdBQVIsRUFBcUJDLFdBQXJCLEVBQWtDRixVQUFsQyxFQUE4Q0wsS0FBOUMsRUFBcURDLEdBQXJEO0FBQ0EvSSxPQUFHLENBQUM2RyxNQUFKLEdBdEdJLENBd0dKOztBQUNBN0csT0FBRyxDQUFDNEcsV0FBSixHQUFrQnRDLE1BQU0sR0FBR3NELGVBQUgsR0FBcUJDLFNBQTdDO0FBQ0E3SCxPQUFHLENBQUN1RyxTQUFKLEdBQWdCdkcsR0FBRyxDQUFDNEcsV0FBcEI7O0FBQ0EsUUFBSWEsUUFBSixFQUFjO0FBQ1YsVUFBTTBDLFFBQVEsR0FBRyxDQUFDckIsS0FBSyxHQUFHQyxHQUFULElBQWdCLEdBQWpDO0FBQ0EvSSxTQUFHLENBQUM0RyxXQUFKLEdBQWtCdEMsTUFBTSxHQUFHc0QsZUFBSCxHQUFxQkMsU0FBN0M7QUFDQTdILFNBQUcsQ0FBQ3dHLFNBQUo7QUFDQSxVQUFJa0MsUUFBUSxHQUFHLEdBQWYsRUFBb0IxSSxHQUFHLENBQUNrSyxHQUFKLENBQVFkLFdBQVIsRUFBcUJDLFdBQXJCLEVBQWtDRixVQUFsQyxFQUE4Q2dCLFFBQTlDLEVBQXdEbkIsTUFBeEQsRUFBcEIsS0FDS2hKLEdBQUcsQ0FBQ2tLLEdBQUosQ0FBUWQsV0FBUixFQUFxQkMsV0FBckIsRUFBa0NGLFVBQWxDLEVBQThDSCxNQUE5QyxFQUFzRG1CLFFBQXREO0FBQ0xuSyxTQUFHLENBQUM2RyxNQUFKO0FBQ0gsS0FQRCxNQU9PO0FBQ0g7QUFDQTdHLFNBQUcsQ0FBQ3dHLFNBQUo7QUFDQXhHLFNBQUcsQ0FBQ2tLLEdBQUosQ0FBUVosU0FBUixFQUFtQkUsU0FBbkIsRUFBOEJNLFlBQTlCLEVBQTRDLENBQTVDLEVBQStDLElBQUk5RyxJQUFJLENBQUMwRCxFQUF4RDtBQUNBMUcsU0FBRyxDQUFDMkcsSUFBSixHQUpHLENBS0g7O0FBQ0EzRyxTQUFHLENBQUN3RyxTQUFKO0FBQ0F4RyxTQUFHLENBQUNrSyxHQUFKLENBQVFkLFdBQVIsRUFBcUJDLFdBQXJCLEVBQWtDRixVQUFsQyxFQUE4Q0wsS0FBOUMsRUFBcURFLE1BQXJEO0FBQ0FoSixTQUFHLENBQUM2RyxNQUFKO0FBQ0gsS0EzSEcsQ0E0SEo7QUFDQTs7O0FBQ0E3RyxPQUFHLENBQUM0RyxXQUFKLEdBQWtCdEMsTUFBTSxHQUFHd0QsaUJBQUgsR0FBdUJDLFdBQS9DO0FBQ0EvSCxPQUFHLENBQUN1RyxTQUFKLEdBQWdCdkcsR0FBRyxDQUFDNEcsV0FBcEI7QUFDQTVHLE9BQUcsQ0FBQ3dHLFNBQUo7QUFDQXhHLE9BQUcsQ0FBQ2tLLEdBQUosQ0FBUWQsV0FBUixFQUFxQkMsV0FBckIsRUFBa0NTLFlBQWxDLEVBQWdELENBQWhELEVBQW1ELElBQUk5RyxJQUFJLENBQUMwRCxFQUE1RDtBQUNBMUcsT0FBRyxDQUFDMkcsSUFBSjtBQUNBM0csT0FBRyxDQUFDd0csU0FBSjtBQUNBeEcsT0FBRyxDQUFDa0ssR0FBSixDQUFRTixTQUFSLEVBQW1CQyxTQUFuQixFQUE4QkMsWUFBOUIsRUFBNEMsQ0FBNUMsRUFBK0MsSUFBSTlHLElBQUksQ0FBQzBELEVBQXhEO0FBQ0ExRyxPQUFHLENBQUMyRyxJQUFKLEdBcklJLENBc0lKOztBQUNBM0csT0FBRyxDQUFDd0csU0FBSjtBQUNBeEcsT0FBRyxDQUFDb0ssTUFBSixDQUFXaEIsV0FBWCxFQUF3QkMsV0FBeEI7QUFDQXJKLE9BQUcsQ0FBQ3FLLE1BQUosQ0FBV1QsU0FBWCxFQUFzQkMsU0FBdEI7QUFDQTdKLE9BQUcsQ0FBQzZHLE1BQUosR0ExSUksQ0EySUo7O0FBQ0E3RyxPQUFHLENBQUNzSyxJQUFKLGFBQWMvQyxRQUFRLEtBQUssU0FBYixHQUF5QixFQUF6QixHQUE4QkEsUUFBNUMsY0FBd0RELFFBQXhELGdCQUFzRUQsUUFBdEU7QUFDQXJILE9BQUcsQ0FBQ3VHLFNBQUosR0FBZ0IwQixTQUFoQjs7QUFDQSxRQUFJUCxRQUFKLEVBQWM7QUFDVixVQUFJRixVQUFVLEtBQUssTUFBbkIsRUFBMkI7QUFDdkJ4SCxXQUFHLENBQUN1SyxTQUFKLEdBQWdCLE1BQWhCO0FBQ0F2SyxXQUFHLENBQUN3SyxRQUFKLENBQWEvRixTQUFiLEVBQXdCLENBQXhCLEVBQTJCc0YsV0FBVyxHQUFHekMsUUFBekMsRUFBbUQvQyxLQUFuRDtBQUNILE9BSEQsTUFHTztBQUNIdkUsV0FBRyxDQUFDdUssU0FBSixHQUFnQixRQUFoQjtBQUNBdkssV0FBRyxDQUFDd0ssUUFBSixDQUFhL0YsU0FBYixFQUF3QkYsS0FBSyxHQUFHLEdBQWhDLEVBQXFDd0YsV0FBVyxHQUFHekMsUUFBbkQsRUFBNkQvQyxLQUE3RDtBQUNIO0FBQ0o7O0FBQ0QsUUFBSW9ELFVBQUosRUFBZ0I7QUFDWixVQUFNOEMsVUFBVSxHQUFHakQsVUFBVSxLQUFLLE1BQWYsR0FBd0IsRUFBeEIsR0FBNkIsQ0FBaEQ7O0FBQ0EsVUFBSUEsVUFBVSxLQUFLLE1BQW5CLEVBQTJCO0FBQ3ZCeEgsV0FBRyxDQUFDdUssU0FBSixHQUFnQixNQUFoQjtBQUNBdkssV0FBRyxDQUFDd0ssUUFBSixDQUFhLEtBQUs5SCxZQUFsQixFQUFnQytILFVBQWhDLEVBQTRDakcsTUFBTSxHQUFHdUYsV0FBckQsRUFBa0V4RixLQUFsRTtBQUNILE9BSEQsTUFHTztBQUNIdkUsV0FBRyxDQUFDdUssU0FBSixHQUFnQixRQUFoQjtBQUNBdkssV0FBRyxDQUFDd0ssUUFBSixDQUFhLEtBQUs5SCxZQUFsQixFQUFnQzZCLEtBQUssR0FBRyxHQUF4QyxFQUE2Q0MsTUFBTSxHQUFHdUYsV0FBdEQsRUFBbUV4RixLQUFuRTtBQUNIO0FBQ0osS0FoS0csQ0FpS0o7OztBQUNBLFFBQUlrRCxRQUFKLEVBQWM7QUFDVixVQUFJLENBQUNpQixRQUFMLEVBQWUxSSxHQUFHLENBQUN1RyxTQUFKLEdBQWdCNEIsUUFBaEIsQ0FBZixLQUNLLElBQUksQ0FBQzdELE1BQUwsRUFBYXRFLEdBQUcsQ0FBQ3VHLFNBQUosR0FBZ0JzQixTQUFoQixDQUFiLEtBQ0E3SCxHQUFHLENBQUN1RyxTQUFKLEdBQWdCcUIsZUFBaEI7QUFDTDVILFNBQUcsQ0FBQ3dHLFNBQUo7O0FBQ0EsVUFBSWdCLFVBQVUsS0FBSyxNQUFuQixFQUEyQjtBQUN2QixZQUFNa0QsWUFBWSxHQUFHdEIsV0FBVyxHQUFHSCxVQUFVLEdBQUcsR0FBYixHQUFtQmpHLElBQUksQ0FBQ3VHLEdBQUwsQ0FBUyxDQUFDLENBQUQsR0FBS3ZHLElBQUksQ0FBQzBELEVBQVYsR0FBZSxDQUF4QixDQUFqQyxHQUE4RCxDQUFuRjtBQUNBLFlBQU1pRSxZQUFZLEdBQUd0QixXQUFXLEdBQUdKLFVBQVUsR0FBRyxHQUFiLEdBQW1CakcsSUFBSSxDQUFDeUcsR0FBTCxDQUFTLENBQUMsQ0FBRCxHQUFLekcsSUFBSSxDQUFDMEQsRUFBVixHQUFlLENBQXhCLENBQWpDLEdBQThELENBQW5GO0FBQ0ExRyxXQUFHLENBQUNvSyxNQUFKLENBQVdNLFlBQVgsRUFBeUJDLFlBQXpCO0FBQ0EzSyxXQUFHLENBQUNxSyxNQUFKLENBQVdLLFlBQVksR0FBRzlCLGNBQTFCLEVBQTBDK0IsWUFBMUM7QUFDQTNLLFdBQUcsQ0FBQ3FLLE1BQUosQ0FBV0ssWUFBWCxFQUF5QkMsWUFBWSxHQUFHL0IsY0FBeEM7QUFDQTVJLFdBQUcsQ0FBQ3FLLE1BQUosQ0FBV0ssWUFBWCxFQUF5QkMsWUFBekI7QUFDSCxPQVBELE1BT087QUFDSDNLLFdBQUcsQ0FBQ29LLE1BQUosQ0FBV2hCLFdBQVgsRUFBd0JDLFdBQVcsR0FBR0YsVUFBZCxHQUEyQixDQUFuRDtBQUNBbkosV0FBRyxDQUFDcUssTUFBSixDQUFXakIsV0FBVyxHQUFHUixjQUF6QixFQUF5Q1MsV0FBVyxHQUFHRixVQUFkLEdBQTJCLENBQTNCLEdBQStCUCxjQUF4RTtBQUNBNUksV0FBRyxDQUFDcUssTUFBSixDQUFXakIsV0FBVyxHQUFHUixjQUF6QixFQUF5Q1MsV0FBVyxHQUFHRixVQUFkLEdBQTJCLENBQTNCLEdBQStCUCxjQUF4RTtBQUNBNUksV0FBRyxDQUFDcUssTUFBSixDQUFXakIsV0FBWCxFQUF3QkMsV0FBVyxHQUFHRixVQUFkLEdBQTJCLENBQW5EO0FBQ0g7O0FBQ0RuSixTQUFHLENBQUMyRyxJQUFKO0FBQ0EzRyxTQUFHLENBQUM0RyxXQUFKLEdBQWtCc0IsY0FBYyxJQUFJLGFBQXBDO0FBQ0FsSSxTQUFHLENBQUNvRyxTQUFKLEdBQWdCeUMsaUJBQWhCO0FBQ0E3SSxTQUFHLENBQUM2RyxNQUFKO0FBQ0g7QUFDSjs7QUFDRE8sbUJBQWlCLENBQUNsSCxDQUFELEVBQXNCO0FBQUEsd0JBQ04sS0FBS0osTUFEQztBQUFBLFFBQzNCNkMsSUFEMkIsaUJBQzNCQSxJQUQyQjtBQUFBLFFBQ3JCa0MsSUFEcUIsaUJBQ3JCQSxJQURxQjtBQUFBLFFBQ2ZDLElBRGUsaUJBQ2ZBLElBRGU7QUFFbkMsUUFBTTZELFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUNBLFFBQU1QLFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUNBLFFBQU1oRCxJQUFJLEdBQUd6QyxJQUFJLEtBQUssTUFBVCxHQUFrQixDQUFsQixHQUF1QixLQUFLN0MsTUFBTCxDQUFZc0YsSUFBWixJQUFvQixDQUFDTixJQUFJLEdBQUdELElBQVIsSUFBZ0J1RCxTQUF4RTtBQUNBLFFBQU13QyxTQUFTLEdBQUdqSSxJQUFJLEtBQUssTUFBVCxHQUFrQnpDLENBQUMsQ0FBQ2dCLFNBQXBCLEdBQWdDaEIsQ0FBQyxDQUFDZ0IsU0FBRixHQUFja0UsSUFBaEU7QUFDQSxRQUFNeUYsTUFBTSxHQUFHN0gsSUFBSSxDQUFDeUYsS0FBTCxDQUFXLENBQUN2SSxDQUFDLENBQUNhLEtBQUYsR0FBVWIsQ0FBQyxDQUFDb0IsQ0FBYixJQUFrQnFILFNBQTdCLENBQWY7QUFDQSxRQUFNdEQsS0FBSyxHQUFHckMsSUFBSSxDQUFDdUYsR0FBTCxDQUFTSCxTQUFULEVBQW9CcEYsSUFBSSxDQUFDOEgsR0FBTCxDQUFTLENBQVQsRUFBWUYsU0FBUyxHQUFHQyxNQUF4QixDQUFwQixDQUFkO0FBQ0EsUUFBSWxJLElBQUksS0FBSyxNQUFiLEVBQXFCLE9BQU8wQyxLQUFQO0FBQ3JCLFFBQUkxQyxJQUFJLEtBQUssS0FBYixFQUFvQixPQUFPSyxJQUFJLENBQUN5RixLQUFMLENBQVdwRCxLQUFLLEdBQUdELElBQVIsR0FBZVAsSUFBMUIsQ0FBUDtBQUNwQixXQUFPUSxLQUFLLEdBQUdELElBQVIsR0FBZVAsSUFBdEI7QUFDSDs7QUFrQkRrQyxlQUFhLEdBQUc7QUFDWixTQUFLcEIsUUFBTCxHQUFnQixLQUFoQjtBQUNIOztBQWhSK0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJwRTtBQWtCZSxNQUFNb0YsVUFBTixTQUF5QnJMLG1EQUF6QixDQUF5RDtBQUFBO0FBQUE7QUFBQSxTQTBCcEVpRyxRQTFCb0UsR0EwQmhELEtBMUJnRDs7QUFBQSxTQTJIcEV2RSxpQkEzSG9FLEdBMkhoRCxNQUFNO0FBQ3RCLFdBQUt1RSxRQUFMLEdBQWdCLElBQWhCO0FBQ0gsS0E3SG1FOztBQUFBLFNBOEhwRWxFLGlCQTlIb0UsR0E4SC9DdkIsQ0FBRCxJQUF5QjtBQUN6QyxVQUFJLENBQUMsS0FBS3lGLFFBQVYsRUFBb0I7QUFDcEIsVUFBTXdCLFFBQVEsR0FBRyxLQUFLQyxpQkFBTCxDQUF1QmxILENBQXZCLENBQWpCO0FBQ0EsVUFBSWlILFFBQVEsS0FBSyxLQUFLckgsTUFBTCxDQUFZcUIsS0FBN0IsRUFBb0MsS0FBSzRDLGFBQUwsQ0FBbUIsT0FBbkIsRUFBNEJvRCxRQUE1QjtBQUN2QyxLQWxJbUU7O0FBQUEsU0FtSXBFdEYsZUFuSW9FLEdBbUlsRCxNQUFNO0FBQ3BCLFdBQUs4RCxRQUFMLEdBQWdCLEtBQWhCO0FBQ0gsS0FySW1FO0FBQUE7O0FBQ3BFLGFBQVc3RixNQUFYLEdBQXNDO0FBQ2xDLDBGQUNPLE1BQU1BLE1BRGI7QUFFSTJFLGVBQVMsRUFBRSxhQUZmO0FBR0lGLFdBQUssRUFBRSxFQUhYO0FBSUlDLFlBQU0sRUFBRSxFQUpaO0FBS0k2QyxjQUFRLEVBQUUsT0FMZDtBQU1JQyxjQUFRLEVBQUUsRUFOZDtBQU9JQyxjQUFRLEVBQUUsU0FQZDtBQVFJQyxnQkFBVSxFQUFFLFNBUmhCO0FBU0k1QixtQkFBYSxFQUFFLHdCQVRuQjtBQVVJSSxpQkFBVyxFQUFFLHFCQVZqQjtBQVdJQyxzQkFBZ0IsRUFBRSxxQkFYdEI7QUFZSWdDLGVBQVMsRUFBRSxrQkFaZjtBQWFJRSxjQUFRLEVBQUUsd0JBYmQ7QUFjSTZDLG9CQUFjLEVBQUUsd0JBZHBCO0FBZUlDLGVBQVMsRUFBRSx3QkFmZjtBQWdCSUMscUJBQWUsRUFBRSx3QkFoQnJCO0FBaUJJQyx1QkFBaUIsRUFBRSx3QkFqQnZCO0FBa0JJdEcsVUFBSSxFQUFFLENBbEJWO0FBbUJJQyxVQUFJLEVBQUUsR0FuQlY7QUFvQkluQyxVQUFJLEVBQUUsS0FwQlY7QUFxQklDLGVBQVMsRUFBRTtBQXJCZjtBQXVCSDs7QUFHRCxNQUFJd0YsU0FBSixHQUFnQjtBQUFBLHVCQUM4QixLQUFLdEksTUFEbkM7QUFBQSxRQUNKNkMsSUFESSxnQkFDSkEsSUFESTtBQUFBLFFBQ0VtQyxJQURGLGdCQUNFQSxJQURGO0FBQUEsUUFDUUQsSUFEUixnQkFDUUEsSUFEUjtBQUFBLFFBQ2NRLEtBRGQsZ0JBQ2NBLEtBRGQ7QUFBQSxRQUNxQkQsSUFEckIsZ0JBQ3FCQSxJQURyQjtBQUVaLFFBQU1pRCxJQUFJLEdBQUcsR0FBYjtBQUNBLFFBQU1DLFFBQVEsR0FBRzNGLElBQUksS0FBSyxNQUFULEdBQWtCLEtBQUs3QyxNQUFMLENBQVlnRCxJQUFaLENBQWlCUyxNQUFuQyxHQUE0Q1osSUFBSSxLQUFLLEtBQVQsR0FBaUJtQyxJQUFJLEdBQUdELElBQXhCLEdBQStCd0QsSUFBNUY7O0FBQ0EsUUFBSWpELElBQUosRUFBVTtBQUNOLFVBQUl6QyxJQUFJLEtBQUssTUFBYixFQUFxQixPQUFPLEtBQUs3QyxNQUFMLENBQVlnRCxJQUFaLENBQWlCUyxNQUF4QjtBQUNyQixVQUFJWixJQUFJLEtBQUssS0FBYixFQUFvQixPQUFPSyxJQUFJLENBQUN1RixHQUFMLENBQVN2RixJQUFJLENBQUN3RixLQUFMLENBQVcsQ0FBQzFELElBQUksR0FBR0QsSUFBUixJQUFnQjdCLElBQUksQ0FBQ3lGLEtBQUwsQ0FBV3JELElBQVgsQ0FBM0IsQ0FBVCxFQUF1RGtELFFBQXZELENBQVA7QUFDcEIsYUFBT3RGLElBQUksQ0FBQ3VGLEdBQUwsQ0FBU3ZGLElBQUksQ0FBQ3dGLEtBQUwsQ0FBVyxDQUFDMUQsSUFBSSxHQUFHRCxJQUFSLElBQWdCTyxJQUEzQixDQUFULEVBQTJDa0QsUUFBM0MsQ0FBUDtBQUNIOztBQUNELFFBQUlqRCxLQUFKLEVBQVcsT0FBT3JDLElBQUksQ0FBQ3VGLEdBQUwsQ0FBU2xELEtBQVQsRUFBZ0JpRCxRQUFoQixDQUFQO0FBQ1gsV0FBT0EsUUFBUDtBQUNIOztBQUNELE1BQUlJLFFBQUosR0FBZTtBQUFBLHdCQUN5QixLQUFLNUksTUFEOUI7QUFBQSxRQUNINkMsSUFERyxpQkFDSEEsSUFERztBQUFBLFFBQ0dtQyxJQURILGlCQUNHQSxJQURIO0FBQUEsUUFDU0QsSUFEVCxpQkFDU0EsSUFEVDtBQUFBLFFBQ2UxRCxLQURmLGlCQUNlQSxLQURmO0FBRVgsV0FBT3dCLElBQUksS0FBSyxNQUFULEdBQWtCeEIsS0FBSyxHQUFHLEtBQUtyQixNQUFMLENBQVlnRCxJQUFaLENBQWlCUyxNQUEzQyxHQUFvRCxDQUFDcEMsS0FBSyxHQUFHMEQsSUFBVCxLQUFrQkMsSUFBSSxHQUFHRCxJQUF6QixDQUEzRDtBQUNIOztBQUNELE1BQUk4RCxTQUFKLEdBQWdCO0FBQUEsd0JBQ3VCLEtBQUs3SSxNQUQ1QjtBQUFBLFFBQ0o2QyxJQURJLGlCQUNKQSxJQURJO0FBQUEsUUFDRW1DLElBREYsaUJBQ0VBLElBREY7QUFBQSxRQUNRRCxJQURSLGlCQUNRQSxJQURSO0FBQUEsUUFDY08sSUFEZCxpQkFDY0EsSUFEZDtBQUVaLFFBQU1pRCxJQUFJLEdBQUcsR0FBYjtBQUNBLFFBQUlqRCxJQUFKLEVBQVUsT0FBT3pDLElBQUksS0FBSyxNQUFULEdBQWtCMEYsSUFBSSxHQUFHLEtBQUt2SSxNQUFMLENBQVlnRCxJQUFaLENBQWlCUyxNQUExQyxHQUFtRFosSUFBSSxLQUFLLEtBQVQsR0FBaUJLLElBQUksQ0FBQ3lGLEtBQUwsQ0FBV3JELElBQVgsS0FBb0JOLElBQUksR0FBR0QsSUFBM0IsSUFBbUN3RCxJQUFwRCxHQUEyRGpELElBQUksSUFBSU4sSUFBSSxHQUFHRCxJQUFYLENBQUosR0FBdUJ3RCxJQUE1STtBQUNWLFFBQU1ELFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUNBLFdBQU9DLElBQUksR0FBR0QsU0FBZDtBQUNIOztBQUNEL0YsT0FBSyxHQUFHO0FBQUEsd0JBbUJBLEtBQUt2QyxNQW5CTDtBQUFBLFFBRUF5RSxLQUZBLGlCQUVBQSxLQUZBO0FBQUEsUUFHQUMsTUFIQSxpQkFHQUEsTUFIQTtBQUFBLFFBSUFGLE1BSkEsaUJBSUFBLE1BSkE7QUFBQSxRQUtBN0QsS0FMQSxpQkFLQUEsS0FMQTtBQUFBLFFBTUE0RyxRQU5BLGlCQU1BQSxRQU5BO0FBQUEsUUFPQUMsUUFQQSxpQkFPQUEsUUFQQTtBQUFBLFFBUUFDLFFBUkEsaUJBUUFBLFFBUkE7QUFBQSxRQVNBQyxVQVRBLGlCQVNBQSxVQVRBO0FBQUEsUUFVQTVCLGFBVkEsaUJBVUFBLGFBVkE7QUFBQSxRQVdBSSxXQVhBLGlCQVdBQSxXQVhBO0FBQUEsUUFZQUMsZ0JBWkEsaUJBWUFBLGdCQVpBO0FBQUEsUUFhQWdDLFNBYkEsaUJBYUFBLFNBYkE7QUFBQSxRQWNBRSxRQWRBLGlCQWNBQSxRQWRBO0FBQUEsUUFlQTZDLGNBZkEsaUJBZUFBLGNBZkE7QUFBQSxRQWdCQUMsU0FoQkEsaUJBZ0JBQSxTQWhCQTtBQUFBLFFBaUJBQyxlQWpCQSxpQkFpQkFBLGVBakJBO0FBQUEsUUFrQkFDLGlCQWxCQSxpQkFrQkFBLGlCQWxCQTtBQW9CSixRQUFNbkwsR0FBRyxHQUFHLEtBQUtBLEdBQWpCO0FBQ0EsUUFBTTBJLFFBQVEsR0FBRyxLQUFLQSxRQUF0QjtBQUNBLFFBQU1oRyxZQUFZLEdBQUcsS0FBS0EsWUFBMUI7QUFFQTFDLE9BQUcsQ0FBQ0QsTUFBSixDQUFXb0csS0FBWCxDQUFpQjVCLEtBQWpCLEdBQXlCQSxLQUFLLEdBQUcsSUFBakM7QUFDQXZFLE9BQUcsQ0FBQ0QsTUFBSixDQUFXb0csS0FBWCxDQUFpQjNCLE1BQWpCLEdBQTBCQSxNQUFNLEdBQUcsSUFBbkM7QUFDQXhFLE9BQUcsQ0FBQ0QsTUFBSixDQUFXd0UsS0FBWCxHQUFtQkEsS0FBbkI7QUFDQXZFLE9BQUcsQ0FBQ0QsTUFBSixDQUFXeUUsTUFBWCxHQUFvQkEsTUFBcEIsQ0EzQkksQ0E2Qko7O0FBQ0F4RSxPQUFHLENBQUN1RyxTQUFKLEdBQWdCWCxhQUFoQjtBQUNBNUYsT0FBRyxDQUFDVSxJQUFKLENBQVMsQ0FBVCxFQUFZLENBQVosRUFBZTZELEtBQWYsRUFBc0JDLE1BQXRCO0FBQ0F4RSxPQUFHLENBQUMyRyxJQUFKLEdBaENJLENBa0NKOztBQUNBM0csT0FBRyxDQUFDb0csU0FBSixHQUFnQixDQUFoQjtBQUNBcEcsT0FBRyxDQUFDNEcsV0FBSixHQUFrQm5HLEtBQUssR0FBR3dGLGdCQUFILEdBQXNCRCxXQUE3QztBQUNBaEcsT0FBRyxDQUFDNkcsTUFBSjs7QUFFQSxRQUFJVyxVQUFVLEtBQUssUUFBZixJQUEyQmxELE1BQTNCLElBQXFDb0UsUUFBekMsRUFBbUQ7QUFDL0MxSSxTQUFHLENBQUN1RyxTQUFKLEdBQWdCNEUsaUJBQWhCO0FBQ0FuTCxTQUFHLENBQUNvTCxRQUFKLENBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QjFDLFFBQVEsR0FBR25FLEtBQVgsR0FBbUIsQ0FBMUMsRUFBNkNDLE1BQU0sR0FBRyxDQUF0RDtBQUNIOztBQUNELFFBQUlnRCxVQUFVLEtBQUssVUFBbkIsRUFBK0I7QUFDM0IsVUFBTW9CLGNBQWMsR0FBRyxDQUF2QjtBQUNBNUksU0FBRyxDQUFDdUcsU0FBSixHQUFnQmpDLE1BQU0sR0FBSW9FLFFBQVEsR0FBR3dDLGVBQUgsR0FBcUJGLGNBQWpDLEdBQW9EdEMsUUFBUSxHQUFHdUMsU0FBSCxHQUFlOUMsUUFBakc7QUFDQW5JLFNBQUcsQ0FBQ3dHLFNBQUo7QUFDQXhHLFNBQUcsQ0FBQ29LLE1BQUosQ0FBVzdGLEtBQUssR0FBR3FFLGNBQVIsR0FBeUIsR0FBcEMsRUFBeUNwRSxNQUFNLEdBQUcsR0FBbEQ7QUFDQXhFLFNBQUcsQ0FBQ3FLLE1BQUosQ0FBVzlGLEtBQUssR0FBRyxHQUFuQixFQUF3QixHQUF4QjtBQUNBdkUsU0FBRyxDQUFDcUssTUFBSixDQUFXOUYsS0FBSyxHQUFHLEdBQW5CLEVBQXdCQyxNQUFNLEdBQUcsR0FBakM7QUFDQXhFLFNBQUcsQ0FBQ3FMLFNBQUo7QUFDQXJMLFNBQUcsQ0FBQzJHLElBQUo7QUFDSCxLQXBERyxDQXFESjs7O0FBQ0EzRyxPQUFHLENBQUNzSyxJQUFKLGFBQWMvQyxRQUFRLEtBQUssU0FBYixHQUF5QixFQUF6QixHQUE4QkEsUUFBNUMsY0FBd0RELFFBQXhELGdCQUFzRUQsUUFBdEU7QUFDQXJILE9BQUcsQ0FBQ3VHLFNBQUosR0FBZ0IwQixTQUFoQjtBQUNBakksT0FBRyxDQUFDdUssU0FBSixHQUFnQixRQUFoQjtBQUNBdkssT0FBRyxDQUFDc0wsWUFBSixHQUFtQixRQUFuQjtBQUNBdEwsT0FBRyxDQUFDd0ssUUFBSixDQUFhOUgsWUFBYixFQUEyQjZCLEtBQUssR0FBRyxHQUFuQyxFQUF3Q0MsTUFBTSxHQUFHLEdBQWpELEVBQXNERCxLQUF0RDtBQUNIOztBQUNENkMsbUJBQWlCLENBQUNsSCxDQUFELEVBQXNCO0FBQUEsd0JBQ04sS0FBS0osTUFEQztBQUFBLFFBQzNCNkMsSUFEMkIsaUJBQzNCQSxJQUQyQjtBQUFBLFFBQ3JCa0MsSUFEcUIsaUJBQ3JCQSxJQURxQjtBQUFBLFFBQ2ZDLElBRGUsaUJBQ2ZBLElBRGU7QUFFbkMsUUFBTTZELFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUNBLFFBQU1QLFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUNBLFFBQU1oRCxJQUFJLEdBQUd6QyxJQUFJLEtBQUssTUFBVCxHQUFrQixDQUFsQixHQUF1QixLQUFLN0MsTUFBTCxDQUFZc0YsSUFBWixJQUFvQixDQUFDTixJQUFJLEdBQUdELElBQVIsSUFBZ0J1RCxTQUF4RTtBQUNBLFFBQU13QyxTQUFTLEdBQUdqSSxJQUFJLEtBQUssTUFBVCxHQUFrQnpDLENBQUMsQ0FBQ2dCLFNBQXBCLEdBQWdDaEIsQ0FBQyxDQUFDZ0IsU0FBRixHQUFja0UsSUFBaEU7QUFDQSxRQUFNeUYsTUFBTSxHQUFHN0gsSUFBSSxDQUFDeUYsS0FBTCxDQUFXLENBQUN2SSxDQUFDLENBQUNhLEtBQUYsR0FBVWIsQ0FBQyxDQUFDb0IsQ0FBYixJQUFrQnFILFNBQTdCLENBQWY7QUFDQSxRQUFNdEQsS0FBSyxHQUFHckMsSUFBSSxDQUFDdUYsR0FBTCxDQUFTSCxTQUFULEVBQW9CcEYsSUFBSSxDQUFDOEgsR0FBTCxDQUFTLENBQVQsRUFBWUYsU0FBUyxHQUFHQyxNQUF4QixDQUFwQixDQUFkO0FBQ0EsUUFBSWxJLElBQUksS0FBSyxNQUFiLEVBQXFCLE9BQU8wQyxLQUFQO0FBQ3JCLFFBQUkxQyxJQUFJLEtBQUssS0FBYixFQUFvQixPQUFPSyxJQUFJLENBQUN5RixLQUFMLENBQVdwRCxLQUFLLEdBQUdELElBQVIsR0FBZVAsSUFBMUIsQ0FBUDtBQUNwQixXQUFPUSxLQUFLLEdBQUdELElBQVIsR0FBZVAsSUFBdEI7QUFDSDs7QUFZRGtDLGVBQWEsR0FBRztBQUNaLFNBQUtwQixRQUFMLEdBQWdCLEtBQWhCO0FBQ0g7O0FBeEltRSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnhFO0FBaUJlLE1BQU00RixVQUFOLFNBQXlCN0wsbURBQXpCLENBQXlEO0FBQUE7QUFBQTtBQUFBLFNBd0JwRWlHLFFBeEJvRSxHQXdCaEQsS0F4QmdEO0FBQUEsU0F5QnBFdUIsZUF6Qm9FLEdBeUJ4QyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0F6QndDOztBQUFBLFNBcUtwRTlGLGlCQXJLb0UsR0FxSy9DbEIsQ0FBRCxJQUF5QjtBQUFBLFVBQ2pDaUIsS0FEaUMsR0FDdkIsS0FBS3JCLE1BRGtCLENBQ2pDcUIsS0FEaUM7QUFFekMsVUFDSWpCLENBQUMsQ0FBQ21CLENBQUYsR0FBTSxLQUFLNkYsZUFBTCxDQUFxQixDQUFyQixDQUFOLElBQ0doSCxDQUFDLENBQUNtQixDQUFGLEdBQU0sS0FBSzZGLGVBQUwsQ0FBcUIsQ0FBckIsSUFBMEIsS0FBS0EsZUFBTCxDQUFxQixDQUFyQixDQURuQyxJQUVHaEgsQ0FBQyxDQUFDb0IsQ0FBRixHQUFNLEtBQUs0RixlQUFMLENBQXFCLENBQXJCLENBRlQsSUFHR2hILENBQUMsQ0FBQ29CLENBQUYsR0FBTSxLQUFLNEYsZUFBTCxDQUFxQixDQUFyQixJQUEwQixLQUFLQSxlQUFMLENBQXFCLENBQXJCLENBSnZDLEVBS0U7QUFDRixVQUFNQyxRQUFRLEdBQUcsS0FBS3FFLGVBQUwsQ0FBcUJ0TCxDQUFyQixDQUFqQjtBQUNBLFVBQUlpSCxRQUFRLEtBQUtoRyxLQUFqQixFQUF3QixLQUFLNEMsYUFBTCxDQUFtQixPQUFuQixFQUE0QixLQUFLeUgsZUFBTCxDQUFxQnRMLENBQXJCLENBQTVCO0FBQ3hCLFdBQUt5RixRQUFMLEdBQWdCLElBQWhCO0FBQ0gsS0FoTG1FOztBQUFBLFNBaUxwRWxFLGlCQWpMb0UsR0FpTC9DdkIsQ0FBRCxJQUF5QjtBQUN6QyxVQUFJLENBQUMsS0FBS3lGLFFBQVYsRUFBb0I7QUFDcEIsVUFBTXdCLFFBQVEsR0FBRyxLQUFLcUUsZUFBTCxDQUFxQnRMLENBQXJCLENBQWpCO0FBQ0EsVUFBSWlILFFBQVEsS0FBSyxLQUFLckgsTUFBTCxDQUFZcUIsS0FBN0IsRUFBb0MsS0FBSzRDLGFBQUwsQ0FBbUIsT0FBbkIsRUFBNEJvRCxRQUE1QjtBQUN2QyxLQXJMbUU7O0FBQUEsU0FzTHBFdEYsZUF0TG9FLEdBc0xsRCxNQUFNO0FBQ3BCLFdBQUs4RCxRQUFMLEdBQWdCLEtBQWhCO0FBQ0gsS0F4TG1FO0FBQUE7O0FBQ3BFLGFBQVc3RixNQUFYLEdBQXNDO0FBQ2xDLDBGQUNPLE1BQU1BLE1BRGI7QUFFSTJFLGVBQVMsRUFBRSxhQUZmO0FBR0lGLFdBQUssRUFBRSxFQUhYO0FBSUlDLFlBQU0sRUFBRSxFQUpaO0FBS0k2QyxjQUFRLEVBQUUsT0FMZDtBQU1JQyxjQUFRLEVBQUUsRUFOZDtBQU9JQyxjQUFRLEVBQUUsU0FQZDtBQVFJa0UsaUJBQVcsRUFBRSxVQVJqQjtBQVNJL0QsY0FBUSxFQUFFLElBVGQ7QUFVSUMsZ0JBQVUsRUFBRSxJQVZoQjtBQVdJK0QsaUJBQVcsRUFBRSxxQkFYakI7QUFZSXpELGVBQVMsRUFBRSxrQkFaZjtBQWFJQyxvQkFBYyxFQUFFLHFCQWJwQjtBQWNJeUQsZ0JBQVUsRUFBRSxrQkFkaEI7QUFlSXhELGNBQVEsRUFBRSx3QkFmZDtBQWdCSXlELGNBQVEsRUFBRSxLQWhCZDtBQWlCSS9HLFVBQUksRUFBRSxDQWpCVjtBQWtCSUMsVUFBSSxFQUFFLEdBbEJWO0FBbUJJbkMsVUFBSSxFQUFFO0FBbkJWO0FBcUJIOztBQUlELE1BQUl5RixTQUFKLEdBQWdCO0FBQUEsdUJBQzJDLEtBQUt0SSxNQURoRDtBQUFBLFFBQ0oyTCxXQURJLGdCQUNKQSxXQURJO0FBQUEsUUFDUzlJLElBRFQsZ0JBQ1NBLElBRFQ7QUFBQSxRQUNlbUMsSUFEZixnQkFDZUEsSUFEZjtBQUFBLFFBQ3FCRCxJQURyQixnQkFDcUJBLElBRHJCO0FBQUEsUUFDMkJRLEtBRDNCLGdCQUMyQkEsS0FEM0I7QUFBQSxRQUNrQ0QsSUFEbEMsZ0JBQ2tDQSxJQURsQztBQUVaLFFBQU1pRCxJQUFJLEdBQUcsS0FBS25CLGVBQUwsQ0FBcUJ1RSxXQUFXLEtBQUssVUFBaEIsR0FBNkIsQ0FBN0IsR0FBaUMsQ0FBdEQsQ0FBYjtBQUNBLFFBQU1uRCxRQUFRLEdBQUczRixJQUFJLEtBQUssTUFBVCxHQUFrQixLQUFLN0MsTUFBTCxDQUFZZ0QsSUFBWixDQUFpQlMsTUFBbkMsR0FBNENaLElBQUksS0FBSyxLQUFULEdBQWlCbUMsSUFBSSxHQUFHRCxJQUF4QixHQUErQndELElBQTVGOztBQUNBLFFBQUlqRCxJQUFKLEVBQVU7QUFDTixVQUFJekMsSUFBSSxLQUFLLE1BQWIsRUFBcUIsT0FBTyxLQUFLN0MsTUFBTCxDQUFZZ0QsSUFBWixDQUFpQlMsTUFBeEI7QUFDckIsVUFBSVosSUFBSSxLQUFLLEtBQWIsRUFBb0IsT0FBT0ssSUFBSSxDQUFDdUYsR0FBTCxDQUFTdkYsSUFBSSxDQUFDd0YsS0FBTCxDQUFXLENBQUMxRCxJQUFJLEdBQUdELElBQVIsSUFBZ0I3QixJQUFJLENBQUN5RixLQUFMLENBQVdyRCxJQUFYLENBQTNCLENBQVQsRUFBdURrRCxRQUF2RCxDQUFQO0FBQ3BCLGFBQU90RixJQUFJLENBQUN1RixHQUFMLENBQVN2RixJQUFJLENBQUN3RixLQUFMLENBQVcsQ0FBQzFELElBQUksR0FBR0QsSUFBUixJQUFnQk8sSUFBM0IsQ0FBVCxFQUEyQ2tELFFBQTNDLENBQVA7QUFDSDs7QUFDRCxRQUFJakQsS0FBSixFQUFXLE9BQU9yQyxJQUFJLENBQUN1RixHQUFMLENBQVNsRCxLQUFULEVBQWdCaUQsUUFBaEIsQ0FBUDtBQUNYLFdBQU9BLFFBQVA7QUFDSDs7QUFDRCxNQUFJSSxRQUFKLEdBQWU7QUFBQSx3QkFDeUIsS0FBSzVJLE1BRDlCO0FBQUEsUUFDSDZDLElBREcsaUJBQ0hBLElBREc7QUFBQSxRQUNHbUMsSUFESCxpQkFDR0EsSUFESDtBQUFBLFFBQ1NELElBRFQsaUJBQ1NBLElBRFQ7QUFBQSxRQUNlMUQsS0FEZixpQkFDZUEsS0FEZjtBQUVYLFdBQU93QixJQUFJLEtBQUssTUFBVCxHQUFrQnhCLEtBQUssR0FBRyxLQUFLckIsTUFBTCxDQUFZZ0QsSUFBWixDQUFpQlMsTUFBM0MsR0FBb0QsQ0FBQ3BDLEtBQUssR0FBRzBELElBQVQsS0FBa0JDLElBQUksR0FBR0QsSUFBekIsQ0FBM0Q7QUFDSDs7QUFDRCxNQUFJOEQsU0FBSixHQUFnQjtBQUFBLHdCQUNvQyxLQUFLN0ksTUFEekM7QUFBQSxRQUNKMkwsV0FESSxpQkFDSkEsV0FESTtBQUFBLFFBQ1M5SSxJQURULGlCQUNTQSxJQURUO0FBQUEsUUFDZW1DLElBRGYsaUJBQ2VBLElBRGY7QUFBQSxRQUNxQkQsSUFEckIsaUJBQ3FCQSxJQURyQjtBQUFBLFFBQzJCTyxJQUQzQixpQkFDMkJBLElBRDNCO0FBRVosUUFBTWlELElBQUksR0FBRyxLQUFLbkIsZUFBTCxDQUFxQnVFLFdBQVcsS0FBSyxVQUFoQixHQUE2QixDQUE3QixHQUFpQyxDQUF0RCxDQUFiO0FBQ0EsUUFBSXJHLElBQUosRUFBVSxPQUFPekMsSUFBSSxLQUFLLE1BQVQsR0FBa0IwRixJQUFJLEdBQUcsS0FBS3ZJLE1BQUwsQ0FBWWdELElBQVosQ0FBaUJTLE1BQTFDLEdBQW1EWixJQUFJLEtBQUssS0FBVCxHQUFpQkssSUFBSSxDQUFDeUYsS0FBTCxDQUFXckQsSUFBWCxLQUFvQk4sSUFBSSxHQUFHRCxJQUEzQixJQUFtQ3dELElBQXBELEdBQTJEakQsSUFBSSxJQUFJTixJQUFJLEdBQUdELElBQVgsQ0FBSixHQUF1QndELElBQTVJO0FBQ1YsUUFBTUQsU0FBUyxHQUFHLEtBQUtBLFNBQXZCO0FBQ0EsV0FBT0MsSUFBSSxHQUFHRCxTQUFkO0FBQ0g7O0FBQ0QvRixPQUFLLEdBQUc7QUFBQSx3QkFnQkEsS0FBS3ZDLE1BaEJMO0FBQUEsUUFFQXlFLEtBRkEsaUJBRUFBLEtBRkE7QUFBQSxRQUdBQyxNQUhBLGlCQUdBQSxNQUhBO0FBQUEsUUFJQTZDLFFBSkEsaUJBSUFBLFFBSkE7QUFBQSxRQUtBQyxRQUxBLGlCQUtBQSxRQUxBO0FBQUEsUUFNQUMsUUFOQSxpQkFNQUEsUUFOQTtBQUFBLFFBT0FrRSxXQVBBLGlCQU9BQSxXQVBBO0FBQUEsUUFRQS9ELFFBUkEsaUJBUUFBLFFBUkE7QUFBQSxRQVNBQyxVQVRBLGlCQVNBQSxVQVRBO0FBQUEsUUFVQStELFdBVkEsaUJBVUFBLFdBVkE7QUFBQSxRQVdBekQsU0FYQSxpQkFXQUEsU0FYQTtBQUFBLFFBWUFDLGNBWkEsaUJBWUFBLGNBWkE7QUFBQSxRQWFBeUQsVUFiQSxpQkFhQUEsVUFiQTtBQUFBLFFBY0F4RCxRQWRBLGlCQWNBQSxRQWRBO0FBQUEsUUFlQTFELFNBZkEsaUJBZUFBLFNBZkE7QUFpQkosUUFBTXpFLEdBQUcsR0FBRyxLQUFLQSxHQUFqQjtBQUNBLFFBQU1vRyxTQUFTLEdBQUcsR0FBbEI7QUFDQSxRQUFNeUYsT0FBTyxHQUFHLENBQWhCO0FBQ0EsUUFBTW5ELFFBQVEsR0FBRyxLQUFLQSxRQUF0QjtBQUNBLFFBQU1oRyxZQUFZLEdBQUcsS0FBS0EsWUFBMUI7QUFFQTFDLE9BQUcsQ0FBQ0QsTUFBSixDQUFXb0csS0FBWCxDQUFpQjVCLEtBQWpCLEdBQXlCQSxLQUFLLEdBQUcsSUFBakM7QUFDQXZFLE9BQUcsQ0FBQ0QsTUFBSixDQUFXb0csS0FBWCxDQUFpQjNCLE1BQWpCLEdBQTBCQSxNQUFNLEdBQUcsSUFBbkM7QUFDQXhFLE9BQUcsQ0FBQ0QsTUFBSixDQUFXd0UsS0FBWCxHQUFtQkEsS0FBbkI7QUFDQXZFLE9BQUcsQ0FBQ0QsTUFBSixDQUFXeUUsTUFBWCxHQUFvQkEsTUFBcEI7QUFFQXhFLE9BQUcsQ0FBQ29HLFNBQUosR0FBZ0JBLFNBQWhCO0FBQ0FwRyxPQUFHLENBQUM0RyxXQUFKLEdBQWtCOEUsV0FBbEI7O0FBRUEsUUFBSUQsV0FBVyxLQUFLLFVBQXBCLEVBQWdDO0FBQzVCekwsU0FBRyxDQUFDd0csU0FBSjtBQUNBeEcsU0FBRyxDQUFDb0ssTUFBSixDQUFXN0YsS0FBSyxHQUFHLEdBQW5CLEVBQXdCK0MsUUFBUSxHQUFHdUUsT0FBbkM7QUFDQTdMLFNBQUcsQ0FBQ3FLLE1BQUosQ0FBVzlGLEtBQUssR0FBRyxHQUFuQixFQUF3QkMsTUFBTSxJQUFJOEMsUUFBUSxHQUFHdUUsT0FBZixDQUE5QjtBQUNBN0wsU0FBRyxDQUFDNkcsTUFBSjtBQUVBLFVBQU1pRixnQkFBZ0IsR0FBR3ZILEtBQUssR0FBRyxHQUFqQztBQUNBLFdBQUsyQyxlQUFMLEdBQXVCLENBQ25CM0MsS0FBSyxHQUFHLEdBQVIsR0FBY3VILGdCQUFnQixHQUFHLEdBRGQsRUFFbkJ4RSxRQUFRLEdBQUd1RSxPQUZRLEVBR25CQyxnQkFIbUIsRUFJbkJ0SCxNQUFNLEdBQUcsS0FBSzhDLFFBQVEsR0FBR3VFLE9BQWhCLENBSlUsQ0FBdkI7QUFPQTdMLFNBQUcsQ0FBQ29HLFNBQUosR0FBZ0IsQ0FBaEI7QUFDQXBHLFNBQUcsQ0FBQzRHLFdBQUosR0FBa0JzQixjQUFsQjtBQUNBLFVBQU02RCxTQUEyQixHQUFHLENBQ2hDeEgsS0FBSyxHQUFHLEdBQVIsR0FBYzZCLFNBQVMsR0FBRyxHQUExQixHQUFnQyxHQURBLEVBRWhDLEtBQUtjLGVBQUwsQ0FBcUIsQ0FBckIsSUFBMEIsQ0FBMUIsR0FBOEIsS0FBS0EsZUFBTCxDQUFxQixDQUFyQixLQUEyQixJQUFJd0IsUUFBL0IsQ0FGRSxDQUFwQztBQUlBMUksU0FBRyxDQUFDd0csU0FBSjtBQUNBeEcsU0FBRyxDQUFDb0ssTUFBSixDQUFXMkIsU0FBUyxDQUFDLENBQUQsQ0FBcEIsRUFBeUJBLFNBQVMsQ0FBQyxDQUFELENBQVQsR0FBZSxDQUF4QztBQUNBL0wsU0FBRyxDQUFDcUssTUFBSixDQUFXMEIsU0FBUyxDQUFDLENBQUQsQ0FBVCxHQUFlLENBQTFCLEVBQTZCQSxTQUFTLENBQUMsQ0FBRCxDQUF0QztBQUNBL0wsU0FBRyxDQUFDcUssTUFBSixDQUFXMEIsU0FBUyxDQUFDLENBQUQsQ0FBVCxHQUFlLENBQTFCLEVBQTZCQSxTQUFTLENBQUMsQ0FBRCxDQUFULEdBQWUsQ0FBNUM7QUFDQS9MLFNBQUcsQ0FBQ3FLLE1BQUosQ0FBVzBCLFNBQVMsQ0FBQyxDQUFELENBQXBCLEVBQXlCQSxTQUFTLENBQUMsQ0FBRCxDQUFULEdBQWUsQ0FBeEM7QUFDQS9MLFNBQUcsQ0FBQzZHLE1BQUo7QUFFQTdHLFNBQUcsQ0FBQ3VHLFNBQUosR0FBZ0IsS0FBS1osUUFBTCxHQUFnQmdHLFVBQWhCLEdBQTZCeEQsUUFBN0M7QUFDQW5JLFNBQUcsQ0FBQzJHLElBQUo7QUFFQTNHLFNBQUcsQ0FBQ3NLLElBQUosYUFBYy9DLFFBQVEsS0FBSyxTQUFiLEdBQXlCLEVBQXpCLEdBQThCQSxRQUE1QyxjQUF3REQsUUFBeEQsZ0JBQXNFRCxRQUF0RTtBQUNBckgsU0FBRyxDQUFDdUssU0FBSixHQUFnQixRQUFoQjtBQUNBdkssU0FBRyxDQUFDdUcsU0FBSixHQUFnQjBCLFNBQWhCO0FBQ0EsVUFBSVAsUUFBSixFQUFjMUgsR0FBRyxDQUFDd0ssUUFBSixDQUFhL0YsU0FBYixFQUF3QkYsS0FBSyxHQUFHLEdBQWhDLEVBQXFDK0MsUUFBckMsRUFBK0MvQyxLQUEvQztBQUNkLFVBQUlvRCxVQUFKLEVBQWdCM0gsR0FBRyxDQUFDd0ssUUFBSixDQUFhOUgsWUFBYixFQUEyQjZCLEtBQUssR0FBRyxHQUFuQyxFQUF3Q0MsTUFBeEMsRUFBZ0RELEtBQWhEO0FBQ25CLEtBbkNELE1BbUNPO0FBQ0h2RSxTQUFHLENBQUN3RyxTQUFKO0FBQ0F4RyxTQUFHLENBQUNvSyxNQUFKLENBQVd5QixPQUFYLEVBQW9CckgsTUFBTSxHQUFHLEdBQTdCO0FBQ0F4RSxTQUFHLENBQUNxSyxNQUFKLENBQVc5RixLQUFLLEdBQUdzSCxPQUFuQixFQUE0QnJILE1BQU0sR0FBRyxHQUFyQztBQUNBeEUsU0FBRyxDQUFDNkcsTUFBSjs7QUFFQSxVQUFNaUYsaUJBQWdCLEdBQUd0SCxNQUFNLEdBQUcsR0FBbEM7O0FBQ0EsV0FBSzBDLGVBQUwsR0FBdUIsQ0FDbkIyRSxPQURtQixFQUVuQnJILE1BQU0sR0FBRyxHQUFULEdBQWVzSCxpQkFBZ0IsR0FBRyxHQUZmLEVBR25CdkgsS0FBSyxHQUFHLElBQUlzSCxPQUhPLEVBSW5CQyxpQkFKbUIsQ0FBdkI7QUFPQTlMLFNBQUcsQ0FBQ29HLFNBQUosR0FBZ0IsQ0FBaEI7QUFDQXBHLFNBQUcsQ0FBQzRHLFdBQUosR0FBa0JzQixjQUFsQjtBQUNBLFVBQU02RCxVQUEyQixHQUFHLENBQ2hDLEtBQUs3RSxlQUFMLENBQXFCLENBQXJCLElBQTBCLEtBQUtBLGVBQUwsQ0FBcUIsQ0FBckIsSUFBMEJ3QixRQUFwRCxHQUErRCxDQUQvQixFQUVoQ2xFLE1BQU0sR0FBRyxHQUFULEdBQWU0QixTQUFTLEdBQUcsR0FBM0IsR0FBaUMsQ0FGRCxDQUFwQztBQUlBcEcsU0FBRyxDQUFDd0csU0FBSjtBQUNBeEcsU0FBRyxDQUFDb0ssTUFBSixDQUFXMkIsVUFBUyxDQUFDLENBQUQsQ0FBcEIsRUFBeUJBLFVBQVMsQ0FBQyxDQUFELENBQVQsR0FBZSxDQUF4QztBQUNBL0wsU0FBRyxDQUFDcUssTUFBSixDQUFXMEIsVUFBUyxDQUFDLENBQUQsQ0FBVCxHQUFlLENBQTFCLEVBQTZCQSxVQUFTLENBQUMsQ0FBRCxDQUF0QztBQUNBL0wsU0FBRyxDQUFDcUssTUFBSixDQUFXMEIsVUFBUyxDQUFDLENBQUQsQ0FBVCxHQUFlLENBQTFCLEVBQTZCQSxVQUFTLENBQUMsQ0FBRCxDQUFULEdBQWUsQ0FBNUM7QUFDQS9MLFNBQUcsQ0FBQ3FLLE1BQUosQ0FBVzBCLFVBQVMsQ0FBQyxDQUFELENBQXBCLEVBQXlCQSxVQUFTLENBQUMsQ0FBRCxDQUFULEdBQWUsQ0FBeEM7QUFDQS9MLFNBQUcsQ0FBQzZHLE1BQUo7QUFFQTdHLFNBQUcsQ0FBQ3VHLFNBQUosR0FBZ0IsS0FBS1osUUFBTCxHQUFnQmdHLFVBQWhCLEdBQTZCeEQsUUFBN0M7QUFDQW5JLFNBQUcsQ0FBQzJHLElBQUo7QUFFQTNHLFNBQUcsQ0FBQ3NLLElBQUosYUFBYy9DLFFBQVEsS0FBSyxTQUFiLEdBQXlCLEVBQXpCLEdBQThCQSxRQUE1QyxjQUF3REQsUUFBeEQsZ0JBQXNFRCxRQUF0RTtBQUNBckgsU0FBRyxDQUFDdUssU0FBSixHQUFnQixRQUFoQjtBQUNBdkssU0FBRyxDQUFDdUcsU0FBSixHQUFnQjBCLFNBQWhCO0FBQ0EsVUFBSVAsUUFBSixFQUFjMUgsR0FBRyxDQUFDd0ssUUFBSixDQUFhL0YsU0FBYixFQUF3QkYsS0FBSyxHQUFHLEdBQWhDLEVBQXFDK0MsUUFBckMsRUFBK0MvQyxLQUEvQztBQUNkdkUsU0FBRyxDQUFDdUssU0FBSixHQUFnQixNQUFoQjtBQUNBLFVBQUk1QyxVQUFKLEVBQWdCM0gsR0FBRyxDQUFDd0ssUUFBSixDQUFhOUgsWUFBYixFQUEyQixDQUEzQixFQUE4QjhCLE1BQTlCLEVBQXNDRCxLQUF0QztBQUNuQjtBQUNKOztBQUNEaUgsaUJBQWUsQ0FBQ3RMLENBQUQsRUFBOEI7QUFBQSx3QkFDQyxLQUFLSixNQUROO0FBQUEsUUFDakMyTCxXQURpQyxpQkFDakNBLFdBRGlDO0FBQUEsUUFDcEI5SSxJQURvQixpQkFDcEJBLElBRG9CO0FBQUEsUUFDZGtDLElBRGMsaUJBQ2RBLElBRGM7QUFBQSxRQUNSQyxJQURRLGlCQUNSQSxJQURRO0FBRXpDLFFBQU02RCxTQUFTLEdBQUcsS0FBS0EsU0FBdkI7QUFDQSxRQUFNUCxTQUFTLEdBQUcsS0FBS0EsU0FBdkI7QUFDQSxRQUFNaEQsSUFBSSxHQUFHLEtBQUt0RixNQUFMLENBQVlzRixJQUFaLElBQW9CLENBQUNOLElBQUksR0FBR0QsSUFBUixJQUFnQnVELFNBQWpEO0FBQ0EsUUFBSS9DLEtBQUssR0FBR3JDLElBQUksQ0FBQ3lGLEtBQUwsQ0FBVyxDQUFDZ0QsV0FBVyxLQUFLLFVBQWhCLEdBQTZCLEtBQUt2RSxlQUFMLENBQXFCLENBQXJCLEtBQTJCaEgsQ0FBQyxDQUFDb0IsQ0FBRixHQUFNLEtBQUs0RixlQUFMLENBQXFCLENBQXJCLENBQWpDLENBQTdCLEdBQXlGaEgsQ0FBQyxDQUFDbUIsQ0FBRixHQUFNLEtBQUs2RixlQUFMLENBQXFCLENBQXJCLENBQWhHLElBQTJIeUIsU0FBdEksQ0FBWjtBQUNBdEQsU0FBSyxHQUFHckMsSUFBSSxDQUFDdUYsR0FBTCxDQUFTSCxTQUFULEVBQW9CcEYsSUFBSSxDQUFDOEgsR0FBTCxDQUFTLENBQVQsRUFBWXpGLEtBQVosQ0FBcEIsQ0FBUjtBQUNBLFFBQUkxQyxJQUFJLEtBQUssTUFBYixFQUFxQixPQUFPMEMsS0FBUDtBQUNyQixRQUFJMUMsSUFBSSxLQUFLLEtBQWIsRUFBb0IsT0FBT0ssSUFBSSxDQUFDeUYsS0FBTCxDQUFXcEQsS0FBSyxHQUFHRCxJQUFSLEdBQWVQLElBQTFCLENBQVA7QUFDcEIsV0FBT1EsS0FBSyxHQUFHRCxJQUFSLEdBQWVQLElBQXRCO0FBQ0g7O0FBcUJEa0MsZUFBYSxHQUFHO0FBQ1osU0FBS3BCLFFBQUwsR0FBZ0IsS0FBaEI7QUFDSDs7QUEzTG1FLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCeEU7QUFzQmUsTUFBTXFHLE9BQU4sU0FBc0J0TSxtREFBdEIsQ0FBbUQ7QUFBQTtBQUFBO0FBQUEsU0EyQjlEaUcsUUEzQjhELEdBMkIxQyxLQTNCMEM7QUFBQSxTQTRCOURzRyxRQTVCOEQsR0E0QmYsRUE1QmU7O0FBQUEsU0F3SjlEN0ssaUJBeEo4RCxHQXdKekNsQixDQUFELElBQXlCO0FBQ3pDLFdBQUt5RixRQUFMLEdBQWdCLElBQWhCOztBQUNBLFdBQUssSUFBSXZDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzZJLFFBQUwsQ0FBYzFJLE1BQWxDLEVBQTBDSCxDQUFDLEVBQTNDLEVBQStDO0FBQzNDLFlBQU0xQyxJQUFJLEdBQUcsS0FBS3VMLFFBQUwsQ0FBYzdJLENBQWQsQ0FBYjs7QUFDQSxZQUFJbEQsQ0FBQyxDQUFDbUIsQ0FBRixJQUFPWCxJQUFJLENBQUMsQ0FBRCxDQUFYLElBQWtCUixDQUFDLENBQUNtQixDQUFGLElBQU9YLElBQUksQ0FBQyxDQUFELENBQUosR0FBVUEsSUFBSSxDQUFDLENBQUQsQ0FBdkMsSUFBOENSLENBQUMsQ0FBQ29CLENBQUYsSUFBT1osSUFBSSxDQUFDLENBQUQsQ0FBekQsSUFBZ0VSLENBQUMsQ0FBQ29CLENBQUYsSUFBT1osSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVQSxJQUFJLENBQUMsQ0FBRCxDQUF6RixFQUE4RjtBQUMxRixlQUFLcUQsYUFBTCxDQUFtQixPQUFuQixFQUE0QlgsQ0FBNUI7QUFDQTtBQUNIO0FBQ0o7QUFDSixLQWpLNkQ7O0FBQUEsU0FrSzlEM0IsaUJBbEs4RCxHQWtLekN2QixDQUFELElBQXlCO0FBQ3pDLFdBQUtrQixpQkFBTCxDQUF1QmxCLENBQXZCO0FBQ0gsS0FwSzZEOztBQUFBLFNBcUs5RDJCLGVBcks4RCxHQXFLNUMsTUFBTTtBQUNwQixXQUFLOEQsUUFBTCxHQUFnQixLQUFoQjtBQUNILEtBdks2RDtBQUFBOztBQUM5RCxhQUFXN0YsTUFBWCxHQUFtQztBQUMvQiwwRkFDTyxNQUFNQSxNQURiO0FBRUkyRSxlQUFTLEVBQUUsVUFGZjtBQUdJRixXQUFLLEVBQUUsRUFIWDtBQUlJQyxZQUFNLEVBQUUsRUFKWjtBQUtJNkMsY0FBUSxFQUFFLE9BTGQ7QUFNSUMsY0FBUSxFQUFFLEVBTmQ7QUFPSUMsY0FBUSxFQUFFLFNBUGQ7QUFRSTNCLG1CQUFhLEVBQUUsd0JBUm5CO0FBU0lDLHFCQUFlLEVBQUUsdUJBVHJCO0FBVUlDLGFBQU8sRUFBRSx3QkFWYjtBQVdJQyxlQUFTLEVBQUUsd0JBWGY7QUFZSUMsaUJBQVcsRUFBRSxxQkFaakI7QUFhSUMsc0JBQWdCLEVBQUUscUJBYnRCO0FBY0lnQyxlQUFTLEVBQUUscUJBZGY7QUFlSWlFLGlCQUFXLEVBQUUscUJBZmpCO0FBZ0JJQyxxQkFBZSxFQUFFLGtCQWhCckI7QUFpQklDLHVCQUFpQixFQUFFLGtCQWpCdkI7QUFrQkk3TSxVQUFJLEVBQUUsT0FsQlY7QUFtQkl1RCxVQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLE9BQWYsQ0FuQlY7QUFvQkl1SixlQUFTLEVBQUUsQ0FwQmY7QUFxQklDLGVBQVMsRUFBRSxDQXJCZjtBQXNCSUMsZUFBUyxFQUFFO0FBdEJmO0FBd0JIOztBQUlEQyxhQUFXLEdBQUc7QUFBQSx1QkFRTixLQUFLMU0sTUFSQztBQUFBLFFBRU55RSxLQUZNLGdCQUVOQSxLQUZNO0FBQUEsUUFHTkMsTUFITSxnQkFHTkEsTUFITTtBQUFBLFFBSU4rSCxTQUpNLGdCQUlOQSxTQUpNO0FBQUEsUUFLTmhOLElBTE0sZ0JBS05BLElBTE07QUFBQSxRQU1OOE0sU0FOTSxnQkFNTkEsU0FOTTtBQUFBLFFBT05DLFNBUE0sZ0JBT05BLFNBUE07QUFTVixRQUFNRyxLQUFLLEdBQUcsS0FBSzNNLE1BQUwsQ0FBWWdELElBQTFCO0FBQ0EsUUFBTTRKLE1BQU0sR0FBRyxDQUFmO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLEVBQWxCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHSCxLQUFLLENBQUNsSixNQUFwQjtBQUNBLFFBQUlzSixZQUFZLEdBQUdELEtBQW5CO0FBQ0EsUUFBSUUsS0FBSyxHQUFHLENBQVo7QUFDQSxRQUFJMUgsSUFBSSxHQUFHWixNQUFNLEdBQUdzSSxLQUFwQjtBQUNBLFFBQUlDLFFBQVEsR0FBRyxDQUFmO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLENBQWhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHWixTQUFTLEdBQUcsR0FBN0I7QUFDQSxRQUFNYSxRQUFRLEdBQUdaLFNBQVMsR0FBRyxHQUE3Qjs7QUFFQSxRQUFJQyxTQUFTLElBQUkvSCxNQUFNLElBQUksSUFBSW1JLFNBQS9CLEVBQTBDO0FBQ3RDRyxXQUFLLEdBQUc5SixJQUFJLENBQUM4SCxHQUFMLENBQVMsQ0FBVCxFQUFZOUgsSUFBSSxDQUFDdUYsR0FBTCxDQUFTcUUsS0FBVCxFQUFnQjVKLElBQUksQ0FBQ3dGLEtBQUwsQ0FBV2hFLE1BQU0sR0FBR21JLFNBQXBCLENBQWhCLENBQVosQ0FBUjtBQUNBRSxrQkFBWSxHQUFHN0osSUFBSSxDQUFDbUssSUFBTCxDQUFVUCxLQUFLLEdBQUdFLEtBQWxCLENBQWYsQ0FGc0MsQ0FHdEM7O0FBQ0EsYUFBT0EsS0FBSyxHQUFHRCxZQUFSLEdBQXVCRCxLQUE5QixFQUFxQztBQUNqQ0Msb0JBQVk7QUFDWixZQUFJQyxLQUFLLEdBQUcsQ0FBWixFQUFlQSxLQUFLO0FBQ3ZCLE9BUHFDLENBUXRDOzs7QUFDQSxhQUFPQSxLQUFLLEdBQUdELFlBQVIsR0FBdUJELEtBQXZCLElBQWdDLENBQUNFLEtBQUssR0FBRyxDQUFULElBQWNELFlBQWQsSUFBOEJELEtBQXJFLEVBQTRFO0FBQ3hFRSxhQUFLO0FBQ1I7O0FBQ0QxSCxVQUFJLEdBQUdaLE1BQU0sR0FBR3NJLEtBQWhCO0FBQ0g7O0FBQ0QsUUFBSXZOLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ2xCd04sY0FBUSxHQUFHeEksS0FBSyxHQUFHc0ksWUFBbkI7QUFDQUcsZUFBUyxHQUFHRCxRQUFRLEdBQUdFLFFBQXZCOztBQUNBLFdBQUssSUFBSTdKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd3SixLQUFwQixFQUEyQnhKLENBQUMsRUFBNUIsRUFBZ0M7QUFDNUIsYUFBSzZJLFFBQUwsQ0FBYzdJLENBQWQsSUFBbUIsQ0FDZEEsQ0FBQyxHQUFHeUosWUFBTCxHQUFxQkUsUUFBckIsR0FBZ0NFLFFBQVEsR0FBRyxHQUQ1QixFQUVmakssSUFBSSxDQUFDd0YsS0FBTCxDQUFXcEYsQ0FBQyxHQUFHeUosWUFBZixJQUErQnpILElBQS9CLEdBQXNDOEgsUUFBUSxHQUFHLEdBRmxDLEVBR2ZGLFNBSGUsRUFJZHhJLE1BQU0sR0FBR3NJLEtBQVYsR0FBbUJJLFFBSkosQ0FBbkI7QUFNSDtBQUNKLEtBWEQsTUFXTztBQUNILFVBQU1FLFVBQVUsR0FBRyxFQUFuQjs7QUFDQSxXQUFLLElBQUloSyxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHMEosS0FBcEIsRUFBMkIxSixFQUFDLEVBQTVCLEVBQWdDO0FBQzVCLFlBQUlpSyxLQUFLLEdBQUcsQ0FBWjtBQUNBLFlBQUlDLEtBQUssR0FBRy9JLEtBQVo7O0FBQ0EsYUFBSyxJQUFJZ0osQ0FBQyxHQUFHbkssRUFBQyxHQUFHeUosWUFBakIsRUFBK0JVLENBQUMsR0FBR3ZLLElBQUksQ0FBQ3VGLEdBQUwsQ0FBUyxDQUFDbkYsRUFBQyxHQUFHLENBQUwsSUFBVXlKLFlBQW5CLEVBQWlDRCxLQUFqQyxDQUFuQyxFQUE0RVcsQ0FBQyxFQUE3RSxFQUFpRjtBQUM3RSxjQUFNQyxjQUFjLEdBQUcsS0FBS3hOLEdBQUwsQ0FBU3lOLFdBQVQsQ0FBcUJoQixLQUFLLENBQUNjLENBQUQsQ0FBMUIsQ0FBdkI7QUFDQUgsb0JBQVUsQ0FBQ0csQ0FBRCxDQUFWLEdBQWdCQyxjQUFjLENBQUNqSixLQUEvQjtBQUNBOEksZUFBSyxJQUFJRCxVQUFVLENBQUNHLENBQUQsQ0FBbkI7QUFDQUQsZUFBSyxJQUFJLElBQUlaLE1BQUosR0FBYU8sUUFBdEI7QUFDSDs7QUFDRCxZQUFJUyxJQUFJLEdBQUcsQ0FBWDs7QUFDQSxhQUFLLElBQUlILEVBQUMsR0FBR25LLEVBQUMsR0FBR3lKLFlBQWpCLEVBQStCVSxFQUFDLEdBQUd2SyxJQUFJLENBQUN1RixHQUFMLENBQVMsQ0FBQ25GLEVBQUMsR0FBRyxDQUFMLElBQVV5SixZQUFuQixFQUFpQ0QsS0FBakMsQ0FBbkMsRUFBNEVXLEVBQUMsRUFBN0UsRUFBaUY7QUFDN0UsY0FBTUksU0FBUyxHQUFHUCxVQUFVLENBQUNHLEVBQUQsQ0FBVixHQUFnQkYsS0FBbEM7QUFDQSxlQUFLcEIsUUFBTCxDQUFjc0IsRUFBZCxJQUFtQixDQUNmRyxJQUFJLEdBQUdULFFBQVEsR0FBRyxHQURILEVBRWY3SixFQUFDLEdBQUdnQyxJQUFKLEdBQVc4SCxRQUFRLEdBQUcsR0FGUCxFQUdmSSxLQUFLLEdBQUdLLFNBQVIsR0FBb0IsSUFBSWpCLE1BSFQsRUFJZmxJLE1BQU0sR0FBR3NJLEtBQVQsR0FBaUJJLFFBSkYsQ0FBbkI7QUFNQVEsY0FBSSxJQUFJLEtBQUt6QixRQUFMLENBQWNzQixFQUFkLEVBQWlCLENBQWpCLElBQXNCTixRQUE5QjtBQUNIO0FBQ0o7QUFDSjs7QUFDRCxXQUFPLEtBQUtoQixRQUFaO0FBQ0g7O0FBQ0Q1SixPQUFLLEdBQUc7QUFBQSx3QkFvQkEsS0FBS3ZDLE1BcEJMO0FBQUEsUUFFQXdFLE1BRkEsaUJBRUFBLE1BRkE7QUFBQSxRQUdBN0QsS0FIQSxpQkFHQUEsS0FIQTtBQUFBLFFBSUE0RyxRQUpBLGlCQUlBQSxRQUpBO0FBQUEsUUFLQUMsUUFMQSxpQkFLQUEsUUFMQTtBQUFBLFFBTUFDLFFBTkEsaUJBTUFBLFFBTkE7QUFBQSxRQU9BM0IsYUFQQSxpQkFPQUEsYUFQQTtBQUFBLFFBUUFDLGVBUkEsaUJBUUFBLGVBUkE7QUFBQSxRQVNBQyxPQVRBLGlCQVNBQSxPQVRBO0FBQUEsUUFVQUMsU0FWQSxpQkFVQUEsU0FWQTtBQUFBLFFBV0FDLFdBWEEsaUJBV0FBLFdBWEE7QUFBQSxRQVlBQyxnQkFaQSxpQkFZQUEsZ0JBWkE7QUFBQSxRQWFBZ0MsU0FiQSxpQkFhQUEsU0FiQTtBQUFBLFFBY0FpRSxXQWRBLGlCQWNBQSxXQWRBO0FBQUEsUUFlQUMsZUFmQSxpQkFlQUEsZUFmQTtBQUFBLFFBZ0JBQyxpQkFoQkEsaUJBZ0JBQSxpQkFoQkE7QUFBQSxRQWlCQWpMLEtBakJBLGlCQWlCQUEsS0FqQkE7QUFBQSxRQWtCQW9ELEtBbEJBLGlCQWtCQUEsS0FsQkE7QUFBQSxRQW1CQUMsTUFuQkEsaUJBbUJBQSxNQW5CQTtBQXFCSixRQUFNaUksS0FBSyxHQUFHLEtBQUszTSxNQUFMLENBQVlnRCxJQUExQjtBQUNBLFFBQU05QyxHQUFHLEdBQUcsS0FBS0EsR0FBakI7QUFDQSxRQUFNaU0sUUFBUSxHQUFHLEtBQUtPLFdBQUwsRUFBakI7QUFFQSxRQUFNdEcsV0FBVyxHQUFHLEdBQXBCO0FBRUFsRyxPQUFHLENBQUNELE1BQUosQ0FBV29HLEtBQVgsQ0FBaUI1QixLQUFqQixHQUF5QkEsS0FBSyxHQUFHLElBQWpDO0FBQ0F2RSxPQUFHLENBQUNELE1BQUosQ0FBV29HLEtBQVgsQ0FBaUIzQixNQUFqQixHQUEwQkEsTUFBTSxHQUFHLElBQW5DO0FBQ0F4RSxPQUFHLENBQUNELE1BQUosQ0FBV3dFLEtBQVgsR0FBbUJBLEtBQW5CO0FBQ0F2RSxPQUFHLENBQUNELE1BQUosQ0FBV3lFLE1BQVgsR0FBb0JBLE1BQXBCO0FBQ0F4RSxPQUFHLENBQUNvRyxTQUFKLEdBQWdCRixXQUFoQjtBQUVBLFFBQU1JLGlCQUFpQixHQUFHN0YsS0FBSyxHQUFHd0YsZ0JBQUgsR0FBc0JELFdBQXJEOztBQUNBLFNBQUssSUFBSTVDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdxSixLQUFLLENBQUNsSixNQUExQixFQUFrQ0gsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxVQUFNaUQsYUFBYSxHQUFHL0IsTUFBTSxHQUFJbkQsS0FBSyxLQUFLaUMsQ0FBVixHQUFjeUMsZUFBZCxHQUFnQ0QsYUFBcEMsR0FBc0R6RSxLQUFLLEtBQUtpQyxDQUFWLEdBQWMyQyxTQUFkLEdBQTBCRCxPQUE1RztBQUNBOUYsU0FBRyxDQUFDdUcsU0FBSixHQUFnQkYsYUFBaEI7QUFDQXJHLFNBQUcsQ0FBQ3dHLFNBQUo7QUFDQXhHLFNBQUcsQ0FBQ1UsSUFBSixDQUFTLEdBQUd1TCxRQUFRLENBQUM3SSxDQUFELENBQXBCO0FBQ0FwRCxTQUFHLENBQUMyRyxJQUFKO0FBQ0EzRyxTQUFHLENBQUM0RyxXQUFKLEdBQWtCTixpQkFBbEI7QUFDQXRHLFNBQUcsQ0FBQzZHLE1BQUo7QUFFQTdHLFNBQUcsQ0FBQ3NLLElBQUosYUFBYy9DLFFBQVEsS0FBSyxTQUFiLEdBQXlCLEVBQXpCLEdBQThCQSxRQUE1QyxjQUF3REQsUUFBeEQsZ0JBQXNFRCxRQUF0RTtBQUNBckgsU0FBRyxDQUFDdUssU0FBSixHQUFnQixRQUFoQjtBQUNBdkssU0FBRyxDQUFDc0wsWUFBSixHQUFtQixRQUFuQjtBQUNBdEwsU0FBRyxDQUFDdUcsU0FBSixHQUFnQmpDLE1BQU0sR0FBSW5ELEtBQUssS0FBS2lDLENBQVYsR0FBY2dKLGlCQUFkLEdBQWtDRCxlQUF0QyxHQUEwRGhMLEtBQUssS0FBS2lDLENBQVYsR0FBYzhJLFdBQWQsR0FBNEJqRSxTQUE1RztBQUNBakksU0FBRyxDQUFDd0ssUUFBSixDQUFhaUMsS0FBSyxDQUFDckosQ0FBRCxDQUFsQixFQUF1QjZJLFFBQVEsQ0FBQzdJLENBQUQsQ0FBUixDQUFZLENBQVosSUFBaUI2SSxRQUFRLENBQUM3SSxDQUFELENBQVIsQ0FBWSxDQUFaLElBQWlCLEdBQXpELEVBQThENkksUUFBUSxDQUFDN0ksQ0FBRCxDQUFSLENBQVksQ0FBWixJQUFpQjZJLFFBQVEsQ0FBQzdJLENBQUQsQ0FBUixDQUFZLENBQVosSUFBaUIsR0FBaEc7QUFDSDtBQUNKOztBQWlCRDJELGVBQWEsR0FBRztBQUNaLFNBQUtwQixRQUFMLEdBQWdCLEtBQWhCO0FBQ0g7O0FBMUs2RCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJsRTtBQUNBO0FBcUJlLE1BQU1pSSxRQUFOLFNBQXVCbE8sbURBQXZCLENBQXFEO0FBQUE7QUFBQTtBQUFBLFNBeUJoRWlHLFFBekJnRSxHQXlCNUMsS0F6QjRDOztBQUFBLFNBa0ZoRXZFLGlCQWxGZ0UsR0FrRjVDLE1BQU07QUFBQSx5QkFDRSxLQUFLdEIsTUFEUDtBQUFBLFVBQ2RxQixLQURjLGdCQUNkQSxLQURjO0FBQUEsVUFDUDVCLElBRE8sZ0JBQ1BBLElBRE87QUFFdEIsV0FBS29HLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxXQUFLNUIsYUFBTCxDQUFtQixPQUFuQixFQUE0QnhFLElBQUksS0FBSyxRQUFULEdBQW9CLENBQXBCLEdBQXdCLElBQUk0QixLQUF4RDtBQUNILEtBdEYrRDs7QUFBQSxTQXVGaEVVLGVBdkZnRSxHQXVGOUMsTUFBTTtBQUNwQixXQUFLOEQsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFVBQUksS0FBSzdGLE1BQUwsQ0FBWVAsSUFBWixLQUFxQixRQUF6QixFQUFtQyxLQUFLd0UsYUFBTCxDQUFtQixPQUFuQixFQUE0QixDQUE1QjtBQUN0QyxLQTFGK0Q7QUFBQTs7QUFDaEUsYUFBV2pFLE1BQVgsR0FBb0M7QUFDaEMsMEZBQ08sTUFBTUEsTUFEYjtBQUVJMkUsZUFBUyxFQUFFLFdBRmY7QUFHSUYsV0FBSyxFQUFFLEVBSFg7QUFJSUMsWUFBTSxFQUFFLEVBSlo7QUFLSTZDLGNBQVEsRUFBRSxPQUxkO0FBTUlDLGNBQVEsRUFBRSxFQU5kO0FBT0lDLGNBQVEsRUFBRSxTQVBkO0FBUUkzQixtQkFBYSxFQUFFLHdCQVJuQjtBQVNJQyxxQkFBZSxFQUFFLHVCQVRyQjtBQVVJQyxhQUFPLEVBQUUsd0JBVmI7QUFXSUMsZUFBUyxFQUFFLHdCQVhmO0FBWUlDLGlCQUFXLEVBQUUscUJBWmpCO0FBYUlDLHNCQUFnQixFQUFFLHFCQWJ0QjtBQWNJZ0MsZUFBUyxFQUFFLHFCQWRmO0FBZUlpRSxpQkFBVyxFQUFFLHFCQWZqQjtBQWdCSUMscUJBQWUsRUFBRSxrQkFoQnJCO0FBaUJJQyx1QkFBaUIsRUFBRSxrQkFqQnZCO0FBa0JJeUIsVUFBSSxFQUFFLEdBbEJWO0FBbUJJQyxZQUFNLEVBQUUsR0FuQlo7QUFvQkl2TyxVQUFJLEVBQUU7QUFwQlY7QUFzQkg7O0FBR0Q4QyxPQUFLLEdBQUc7QUFBQSx3QkF1QkEsS0FBS3ZDLE1BdkJMO0FBQUEsUUFFQXdFLE1BRkEsaUJBRUFBLE1BRkE7QUFBQSxRQUdBN0QsS0FIQSxpQkFHQUEsS0FIQTtBQUFBLFFBSUE0RyxRQUpBLGlCQUlBQSxRQUpBO0FBQUEsUUFLQUMsUUFMQSxpQkFLQUEsUUFMQTtBQUFBLFFBTUFDLFFBTkEsaUJBTUFBLFFBTkE7QUFBQSxRQU9Bc0csSUFQQSxpQkFPQUEsSUFQQTtBQUFBLFFBUUFDLE1BUkEsaUJBUUFBLE1BUkE7QUFBQSxRQVNBbEksYUFUQSxpQkFTQUEsYUFUQTtBQUFBLFFBVUFDLGVBVkEsaUJBVUFBLGVBVkE7QUFBQSxRQVdBQyxPQVhBLGlCQVdBQSxPQVhBO0FBQUEsUUFZQUMsU0FaQSxpQkFZQUEsU0FaQTtBQUFBLFFBYUFDLFdBYkEsaUJBYUFBLFdBYkE7QUFBQSxRQWNBQyxnQkFkQSxpQkFjQUEsZ0JBZEE7QUFBQSxRQWVBZ0MsU0FmQSxpQkFlQUEsU0FmQTtBQUFBLFFBZ0JBaUUsV0FoQkEsaUJBZ0JBQSxXQWhCQTtBQUFBLFFBaUJBQyxlQWpCQSxpQkFpQkFBLGVBakJBO0FBQUEsUUFrQkFDLGlCQWxCQSxpQkFrQkFBLGlCQWxCQTtBQUFBLFFBbUJBN00sSUFuQkEsaUJBbUJBQSxJQW5CQTtBQUFBLFFBb0JBNEIsS0FwQkEsaUJBb0JBQSxLQXBCQTtBQUFBLFFBcUJBb0QsS0FyQkEsaUJBcUJBQSxLQXJCQTtBQUFBLFFBc0JBQyxNQXRCQSxpQkFzQkFBLE1BdEJBO0FBd0JKLFFBQU14RSxHQUFHLEdBQUcsS0FBS0EsR0FBakI7QUFFQSxRQUFNa0csV0FBVyxHQUFHLEdBQXBCO0FBRUFsRyxPQUFHLENBQUNELE1BQUosQ0FBV29HLEtBQVgsQ0FBaUI1QixLQUFqQixHQUF5QkEsS0FBSyxHQUFHLElBQWpDO0FBQ0F2RSxPQUFHLENBQUNELE1BQUosQ0FBV29HLEtBQVgsQ0FBaUIzQixNQUFqQixHQUEwQkEsTUFBTSxHQUFHLElBQW5DO0FBQ0F4RSxPQUFHLENBQUNELE1BQUosQ0FBV3dFLEtBQVgsR0FBbUJBLEtBQW5CO0FBQ0F2RSxPQUFHLENBQUNELE1BQUosQ0FBV3lFLE1BQVgsR0FBb0JBLE1BQXBCO0FBQ0F4RSxPQUFHLENBQUNvRyxTQUFKLEdBQWdCRixXQUFoQjtBQUVBLFFBQU1HLGFBQWEsR0FBRy9CLE1BQU0sR0FBSW5ELEtBQUssR0FBRzBFLGVBQUgsR0FBcUJELGFBQTlCLEdBQWdEekUsS0FBSyxHQUFHNEUsU0FBSCxHQUFlRCxPQUFoRztBQUNBLFFBQU1RLGlCQUFpQixHQUFHN0YsS0FBSyxHQUFHd0YsZ0JBQUgsR0FBc0JELFdBQXJEO0FBRUFoRyxPQUFHLENBQUN1RyxTQUFKLEdBQWdCRixhQUFoQjs7QUFDQSxRQUFJOUcsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDbkIwSyxvRUFBZSxDQUFDakssR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCdUUsS0FBSyxHQUFHLENBQXhCLEVBQTJCQyxNQUFNLEdBQUcsQ0FBcEMsRUFBdUNBLE1BQU0sR0FBRyxHQUFULEdBQWUsQ0FBdEQsQ0FBZjtBQUNILEtBRkQsTUFFTztBQUNIeEUsU0FBRyxDQUFDd0csU0FBSjtBQUNBeEcsU0FBRyxDQUFDVSxJQUFKLENBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI2RCxLQUFLLEdBQUcsQ0FBM0IsRUFBOEJDLE1BQU0sR0FBRyxDQUF2QztBQUNBeEUsU0FBRyxDQUFDMkcsSUFBSjtBQUNIOztBQUNEM0csT0FBRyxDQUFDb0csU0FBSixHQUFnQixHQUFoQjtBQUNBcEcsT0FBRyxDQUFDNEcsV0FBSixHQUFrQk4saUJBQWxCO0FBQ0F0RyxPQUFHLENBQUM2RyxNQUFKO0FBRUE3RyxPQUFHLENBQUNzSyxJQUFKLGFBQWMvQyxRQUFRLEtBQUssU0FBYixHQUF5QixFQUF6QixHQUE4QkEsUUFBNUMsY0FBd0RELFFBQXhELGdCQUFzRUQsUUFBdEU7QUFDQXJILE9BQUcsQ0FBQ3VLLFNBQUosR0FBZ0IsUUFBaEI7QUFDQXZLLE9BQUcsQ0FBQ3NMLFlBQUosR0FBbUIsUUFBbkI7QUFDQXRMLE9BQUcsQ0FBQ3VHLFNBQUosR0FBZ0JqQyxNQUFNLEdBQUluRCxLQUFLLEdBQUdpTCxpQkFBSCxHQUF1QkQsZUFBaEMsR0FBb0RoTCxLQUFLLEdBQUcrSyxXQUFILEdBQWlCakUsU0FBaEc7QUFDQWpJLE9BQUcsQ0FBQ3dLLFFBQUosQ0FBYXJKLEtBQUssSUFBSTVCLElBQUksS0FBSyxRQUFsQixHQUE2QnVPLE1BQTdCLEdBQXNDRCxJQUFuRCxFQUF5RHRKLEtBQUssR0FBRyxHQUFqRSxFQUFzRUMsTUFBTSxHQUFHLEdBQS9FO0FBQ0g7O0FBVUR1QyxlQUFhLEdBQUc7QUFDWixTQUFLcEIsUUFBTCxHQUFnQixLQUFoQjtBQUNIOztBQTdGK0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJwRTtBQVdlLE1BQU1vSSxVQUFOLFNBQXlCck8sbURBQXpCLENBQXlEO0FBQUE7QUFBQTs7QUFBQSxTQWtEcEUwQixpQkFsRG9FLEdBa0RoRCxNQUFNO0FBQUEsVUFDZEQsS0FEYyxHQUNKLEtBQUtyQixNQURELENBQ2RxQixLQURjO0FBRXRCLFdBQUs0QyxhQUFMLENBQW1CLE9BQW5CLEVBQTRCLElBQUk1QyxLQUFoQztBQUNILEtBckRtRTtBQUFBOztBQUNwRSxhQUFXckIsTUFBWCxHQUFzQztBQUNsQywwRkFDTyxNQUFNQSxNQURiO0FBRUkyRSxlQUFTLEVBQUUsYUFGZjtBQUdJRixXQUFLLEVBQUUsRUFIWDtBQUlJQyxZQUFNLEVBQUUsRUFKWjtBQUtJb0IsbUJBQWEsRUFBRSx3QkFMbkI7QUFNSUMscUJBQWUsRUFBRSx1QkFOckI7QUFPSUMsYUFBTyxFQUFFLHdCQVBiO0FBUUlDLGVBQVMsRUFBRSx3QkFSZjtBQVNJQyxpQkFBVyxFQUFFLHFCQVRqQjtBQVVJQyxzQkFBZ0IsRUFBRTtBQVZ0QjtBQVlIOztBQUVENUQsT0FBSyxHQUFHO0FBQUEsdUJBYUEsS0FBS3ZDLE1BYkw7QUFBQSxRQUVBd0UsTUFGQSxnQkFFQUEsTUFGQTtBQUFBLFFBR0E3RCxLQUhBLGdCQUdBQSxLQUhBO0FBQUEsUUFJQW1GLGFBSkEsZ0JBSUFBLGFBSkE7QUFBQSxRQUtBQyxlQUxBLGdCQUtBQSxlQUxBO0FBQUEsUUFNQUMsT0FOQSxnQkFNQUEsT0FOQTtBQUFBLFFBT0FDLFNBUEEsZ0JBT0FBLFNBUEE7QUFBQSxRQVFBQyxXQVJBLGdCQVFBQSxXQVJBO0FBQUEsUUFTQUMsZ0JBVEEsZ0JBU0FBLGdCQVRBO0FBQUEsUUFVQTlFLEtBVkEsZ0JBVUFBLEtBVkE7QUFBQSxRQVdBb0QsS0FYQSxnQkFXQUEsS0FYQTtBQUFBLFFBWUFDLE1BWkEsZ0JBWUFBLE1BWkE7QUFjSixRQUFNeEUsR0FBRyxHQUFHLEtBQUtBLEdBQWpCO0FBRUEsUUFBTWtHLFdBQVcsR0FBRyxHQUFwQjtBQUVBbEcsT0FBRyxDQUFDRCxNQUFKLENBQVdvRyxLQUFYLENBQWlCNUIsS0FBakIsR0FBeUJBLEtBQUssR0FBRyxJQUFqQztBQUNBdkUsT0FBRyxDQUFDRCxNQUFKLENBQVdvRyxLQUFYLENBQWlCM0IsTUFBakIsR0FBMEJBLE1BQU0sR0FBRyxJQUFuQztBQUNBeEUsT0FBRyxDQUFDRCxNQUFKLENBQVd3RSxLQUFYLEdBQW1CQSxLQUFuQjtBQUNBdkUsT0FBRyxDQUFDRCxNQUFKLENBQVd5RSxNQUFYLEdBQW9CQSxNQUFwQjtBQUNBeEUsT0FBRyxDQUFDb0csU0FBSixHQUFnQkYsV0FBaEI7QUFFQSxRQUFNRyxhQUFhLEdBQUcvQixNQUFNLEdBQUluRCxLQUFLLEdBQUcwRSxlQUFILEdBQXFCRCxhQUE5QixHQUFnRHpFLEtBQUssR0FBRzRFLFNBQUgsR0FBZUQsT0FBaEc7QUFDQSxRQUFNUSxpQkFBaUIsR0FBRzdGLEtBQUssR0FBR3dGLGdCQUFILEdBQXNCRCxXQUFyRDtBQUVBaEcsT0FBRyxDQUFDdUcsU0FBSixHQUFnQkYsYUFBaEI7QUFDQXJHLE9BQUcsQ0FBQ3dHLFNBQUo7QUFDQXhHLE9BQUcsQ0FBQ1UsSUFBSixDQUFTd0YsV0FBVCxFQUFzQkEsV0FBdEIsRUFBbUMzQixLQUFLLEdBQUcsSUFBSTJCLFdBQS9DLEVBQTREMUIsTUFBTSxHQUFHLElBQUkwQixXQUF6RTtBQUNBbEcsT0FBRyxDQUFDMkcsSUFBSjtBQUNBM0csT0FBRyxDQUFDNEcsV0FBSixHQUFrQk4saUJBQWxCO0FBQ0F0RyxPQUFHLENBQUM2RyxNQUFKO0FBQ0g7O0FBakRtRSxDOzs7Ozs7Ozs7Ozs7QUNYeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFtSCxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE1BQXRCLENBQTZCLGFBQTdCLEVBQTRDeEksK0NBQTVDO0FBQ0FzSSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE1BQXRCLENBQTZCLGFBQTdCLEVBQTRDSCwrQ0FBNUM7QUFDQUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxNQUF0QixDQUE2QixhQUE3QixFQUE0QzNDLCtDQUE1QztBQUNBeUMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxNQUF0QixDQUE2QixXQUE3QixFQUEwQ2pILDZDQUExQztBQUNBK0csTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxNQUF0QixDQUE2QixXQUE3QixFQUEwQ04sNkNBQTFDO0FBQ0FJLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsTUFBdEIsQ0FBNkIsYUFBN0IsRUFBNENuRCwrQ0FBNUM7QUFDQWlELE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsTUFBdEIsQ0FBNkIsVUFBN0IsRUFBeUNsQyw0Q0FBekMsRTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU05SSxNQUFNLEdBQUlpTCxDQUFELElBQWUsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLEdBQVosRUFBaUIsSUFBakIsRUFBdUIsR0FBdkIsRUFBNEIsR0FBNUIsRUFBaUMsSUFBakMsRUFBdUMsR0FBdkMsRUFBNEMsSUFBNUMsRUFBa0QsR0FBbEQsRUFBdUQsSUFBdkQsRUFBNkQsR0FBN0QsRUFBa0UsQ0FBQ0EsQ0FBQyxHQUFHLEVBQUosR0FBUyxFQUFWLElBQWdCLEVBQWxGLElBQXdGbkwsSUFBSSxDQUFDeUYsS0FBTCxDQUFXMEYsQ0FBQyxHQUFHLEVBQUosR0FBUyxDQUFwQixDQUF0SDtBQUNBLElBQU1qRixLQUFLLEdBQUlrRixPQUFELElBQXFCQSxPQUFPLEdBQUdwTCxJQUFJLENBQUMwRCxFQUFmLEdBQW9CLEdBQXZEO0FBQ0EsSUFBTXNELFdBQVcsR0FBRyxDQUFDaEssR0FBRCxFQUFnQ3FCLENBQWhDLEVBQTJDQyxDQUEzQyxFQUFzRGlELEtBQXRELEVBQXFFQyxNQUFyRSxFQUFxRjZKLE1BQXJGLEtBQW1IO0FBQzFJLE1BQU1DLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBZDtBQUNBLE1BQUksT0FBT0QsTUFBUCxLQUFrQixRQUF0QixFQUFnQ0MsS0FBSyxDQUFDM0gsSUFBTixDQUFXMEgsTUFBWCxFQUFoQyxLQUNLQSxNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFDQyxDQUFELEVBQUlwTCxDQUFKLEtBQVVrTCxLQUFLLENBQUNsTCxDQUFELENBQUwsR0FBV29MLENBQXBDO0FBQ0x4TyxLQUFHLENBQUN3RyxTQUFKO0FBQ0F4RyxLQUFHLENBQUNvSyxNQUFKLENBQVcvSSxDQUFDLEdBQUdpTixLQUFLLENBQUMsQ0FBRCxDQUFwQixFQUF5QmhOLENBQXpCO0FBQ0F0QixLQUFHLENBQUNxSyxNQUFKLENBQVdoSixDQUFDLEdBQUdrRCxLQUFKLEdBQVkrSixLQUFLLENBQUMsQ0FBRCxDQUE1QixFQUFpQ2hOLENBQWpDO0FBQ0F0QixLQUFHLENBQUN5TyxnQkFBSixDQUFxQnBOLENBQUMsR0FBR2tELEtBQXpCLEVBQWdDakQsQ0FBaEMsRUFBbUNELENBQUMsR0FBR2tELEtBQXZDLEVBQThDakQsQ0FBQyxHQUFHZ04sS0FBSyxDQUFDLENBQUQsQ0FBdkQ7QUFDQXRPLEtBQUcsQ0FBQ3FLLE1BQUosQ0FBV2hKLENBQUMsR0FBR2tELEtBQWYsRUFBc0JqRCxDQUFDLEdBQUdrRCxNQUFKLEdBQWE4SixLQUFLLENBQUMsQ0FBRCxDQUF4QztBQUNBdE8sS0FBRyxDQUFDeU8sZ0JBQUosQ0FBcUJwTixDQUFDLEdBQUdrRCxLQUF6QixFQUFnQ2pELENBQUMsR0FBR2tELE1BQXBDLEVBQTRDbkQsQ0FBQyxHQUFHa0QsS0FBSixHQUFZK0osS0FBSyxDQUFDLENBQUQsQ0FBN0QsRUFBa0VoTixDQUFDLEdBQUdrRCxNQUF0RTtBQUNBeEUsS0FBRyxDQUFDcUssTUFBSixDQUFXaEosQ0FBQyxHQUFHaU4sS0FBSyxDQUFDLENBQUQsQ0FBcEIsRUFBeUJoTixDQUFDLEdBQUdrRCxNQUE3QjtBQUNBeEUsS0FBRyxDQUFDeU8sZ0JBQUosQ0FBcUJwTixDQUFyQixFQUF3QkMsQ0FBQyxHQUFHa0QsTUFBNUIsRUFBb0NuRCxDQUFwQyxFQUF1Q0MsQ0FBQyxHQUFHa0QsTUFBSixHQUFhOEosS0FBSyxDQUFDLENBQUQsQ0FBekQ7QUFDQXRPLEtBQUcsQ0FBQ3FLLE1BQUosQ0FBV2hKLENBQVgsRUFBY0MsQ0FBQyxHQUFHZ04sS0FBSyxDQUFDLENBQUQsQ0FBdkI7QUFDQXRPLEtBQUcsQ0FBQ3lPLGdCQUFKLENBQXFCcE4sQ0FBckIsRUFBd0JDLENBQXhCLEVBQTJCRCxDQUFDLEdBQUdpTixLQUFLLENBQUMsQ0FBRCxDQUFwQyxFQUF5Q2hOLENBQXpDO0FBQ0F0QixLQUFHLENBQUNxTCxTQUFKO0FBQ0FyTCxLQUFHLENBQUM2RyxNQUFKO0FBQ0gsQ0FoQk07QUFpQkEsSUFBTW9ELGVBQWUsR0FBRyxDQUFDakssR0FBRCxFQUFnQ3FCLENBQWhDLEVBQTJDQyxDQUEzQyxFQUFzRGlELEtBQXRELEVBQXFFQyxNQUFyRSxFQUFxRjZKLE1BQXJGLEtBQW1IO0FBQzlJLE1BQU1DLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBZDtBQUNBLE1BQUksT0FBT0QsTUFBUCxLQUFrQixRQUF0QixFQUFnQ0MsS0FBSyxDQUFDM0gsSUFBTixDQUFXMEgsTUFBWCxFQUFoQyxLQUNLQSxNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFDQyxDQUFELEVBQUlwTCxDQUFKLEtBQVVrTCxLQUFLLENBQUNsTCxDQUFELENBQUwsR0FBV29MLENBQXBDO0FBQ0x4TyxLQUFHLENBQUN3RyxTQUFKO0FBQ0F4RyxLQUFHLENBQUNvSyxNQUFKLENBQVcvSSxDQUFDLEdBQUdpTixLQUFLLENBQUMsQ0FBRCxDQUFwQixFQUF5QmhOLENBQXpCO0FBQ0F0QixLQUFHLENBQUNxSyxNQUFKLENBQVdoSixDQUFDLEdBQUdrRCxLQUFKLEdBQVkrSixLQUFLLENBQUMsQ0FBRCxDQUE1QixFQUFpQ2hOLENBQWpDO0FBQ0F0QixLQUFHLENBQUN5TyxnQkFBSixDQUFxQnBOLENBQUMsR0FBR2tELEtBQXpCLEVBQWdDakQsQ0FBaEMsRUFBbUNELENBQUMsR0FBR2tELEtBQXZDLEVBQThDakQsQ0FBQyxHQUFHZ04sS0FBSyxDQUFDLENBQUQsQ0FBdkQ7QUFDQXRPLEtBQUcsQ0FBQ3FLLE1BQUosQ0FBV2hKLENBQUMsR0FBR2tELEtBQWYsRUFBc0JqRCxDQUFDLEdBQUdrRCxNQUFKLEdBQWE4SixLQUFLLENBQUMsQ0FBRCxDQUF4QztBQUNBdE8sS0FBRyxDQUFDeU8sZ0JBQUosQ0FBcUJwTixDQUFDLEdBQUdrRCxLQUF6QixFQUFnQ2pELENBQUMsR0FBR2tELE1BQXBDLEVBQTRDbkQsQ0FBQyxHQUFHa0QsS0FBSixHQUFZK0osS0FBSyxDQUFDLENBQUQsQ0FBN0QsRUFBa0VoTixDQUFDLEdBQUdrRCxNQUF0RTtBQUNBeEUsS0FBRyxDQUFDcUssTUFBSixDQUFXaEosQ0FBQyxHQUFHaU4sS0FBSyxDQUFDLENBQUQsQ0FBcEIsRUFBeUJoTixDQUFDLEdBQUdrRCxNQUE3QjtBQUNBeEUsS0FBRyxDQUFDeU8sZ0JBQUosQ0FBcUJwTixDQUFyQixFQUF3QkMsQ0FBQyxHQUFHa0QsTUFBNUIsRUFBb0NuRCxDQUFwQyxFQUF1Q0MsQ0FBQyxHQUFHa0QsTUFBSixHQUFhOEosS0FBSyxDQUFDLENBQUQsQ0FBekQ7QUFDQXRPLEtBQUcsQ0FBQ3FLLE1BQUosQ0FBV2hKLENBQVgsRUFBY0MsQ0FBQyxHQUFHZ04sS0FBSyxDQUFDLENBQUQsQ0FBdkI7QUFDQXRPLEtBQUcsQ0FBQ3lPLGdCQUFKLENBQXFCcE4sQ0FBckIsRUFBd0JDLENBQXhCLEVBQTJCRCxDQUFDLEdBQUdpTixLQUFLLENBQUMsQ0FBRCxDQUFwQyxFQUF5Q2hOLENBQXpDO0FBQ0F0QixLQUFHLENBQUNxTCxTQUFKO0FBQ0FyTCxLQUFHLENBQUMyRyxJQUFKO0FBQ0gsQ0FoQk0sQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxpdmUtYnV0dG9uLCBsaXZlLXNsaWRlciwgbGl2ZS1kaWFsLCBsaXZlLXRvZ2dsZSwgbGl2ZS10ZXh0LCBsaXZlLW51bWJveCwgbGl2ZS10YWIge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQmFzZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0Jhc2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQmFzZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5pbXBvcnQgXCIuL0Jhc2Uuc2Nzc1wiO1xuaW1wb3J0IHsgdG9NSURJIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IExpdmVDb21wb25lbnRDaGFuZ2VFdmVudCB9IGZyb20gXCIuL0NoYW5nZUV2ZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBMaXZlQmFzZUNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICByb290OiBTaGFkb3dSb290O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucm9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJvcGVuXCIgfSk7XG4gICAgICAgIHRoaXMucm9vdC5pbm5lckhUTUwgPSB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVDb21wb25lbnQ8VCBleHRlbmRzIExpdmVQYXJhbXM+IGV4dGVuZHMgTGl2ZUJhc2VDb21wb25lbnQge1xuICAgIHN0YXRpYyBwYXJhbXM6IExpdmVQYXJhbXMgPSB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICBoZWlnaHQ6IDE1LFxuICAgICAgICBzaG9ydG5hbWU6IFwiXCIsXG4gICAgICAgIGxvbmduYW1lOiBcIlwiLFxuICAgICAgICBvcmRlcjogMCxcbiAgICAgICAgbGlua25hbWVzOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJmbG9hdFwiLFxuICAgICAgICBtbWluOiAwLFxuICAgICAgICBtbWF4OiAxLFxuICAgICAgICBlbnVtOiBbXSxcbiAgICAgICAgZW51bV9pY29uczogW10sXG4gICAgICAgIG1vZG1vZGU6IFwibm9uZVwiLFxuICAgICAgICBpbml0aWFsX2VuYWJsZTogZmFsc2UsXG4gICAgICAgIGluaXRpYWw6IFswXSxcbiAgICAgICAgdW5pdHN0eWxlOiBcImZsb2F0XCIsXG4gICAgICAgIHVuaXRzOiBcIlwiLFxuICAgICAgICBleHBvbmVudDogMSxcbiAgICAgICAgc3RlcDogMCxcbiAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgIHNwZWVkbGltOiA1LFxuICAgICAgICBkZWZlcjogZmFsc2UsXG4gICAgICAgIGludmlzaWJsZTogXCJhdXRvbWF0ZWRcIixcbiAgICAgICAgbWFwcGFibGU6IHRydWVcbiAgICB9XG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnBhcmFtcyk7XG4gICAgfVxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcGFyYW1zOiBUO1xuXG4gICAgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVLZXlVcCA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVUb3VjaFN0YXJ0ID0gKGU6IFRvdWNoRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVdoZWVsID0gKGU6IFdoZWVsRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZUNsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZU1vdXNlRG93biA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jYW52YXMuZm9jdXMoKTtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBmcm9tWCA9IGUucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgIGNvbnN0IGZyb21ZID0gZS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzLnBhcmFtcy52YWx1ZTtcbiAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyRG93bih7IHg6IGZyb21YLCB5OiBmcm9tWSwgb3JpZ2luYWxFdmVudDogZSB9KTtcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBlLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGUucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlckRyYWcoeyBwcmV2VmFsdWUsIHgsIHksIGZyb21YLCBmcm9tWSwgbW92ZW1lbnRYOiBlLm1vdmVtZW50WCwgbW92ZW1lbnRZOiBlLm1vdmVtZW50WSwgb3JpZ2luYWxFdmVudDogZSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlTW91c2VVcCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBlLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJVcCh7IHgsIHksIG9yaWdpbmFsRXZlbnQ6IGUgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcbiAgICB9O1xuICAgIGhhbmRsZU1vdXNlT3ZlciA9IChlOiBNb3VzZUV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVNb3VzZU91dCA9IChlOiBNb3VzZUV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVDb250ZXh0TWVudSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVQb2ludGVyRG93biA9IChlOiBQb2ludGVyRG93bkV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoZTogUG9pbnRlclVwRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZUZvY3VzSW4gPSAoZTogRm9jdXNFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLnBhcmFtcy5mb2N1cyA9IHRydWU7XG4gICAgICAgIHRoaXMucGFpbnQoKTtcbiAgICB9XG4gICAgaGFuZGxlRm9jdXNPdXQgPSAoZTogRm9jdXNFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLnBhcmFtcy5mb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhaW50KCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5oYW5kbGVLZXlVcCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCB0aGlzLmhhbmRsZVdoZWVsKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljayk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmhhbmRsZU1vdXNlRG93biwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHRoaXMuaGFuZGxlTW91c2VPdmVyKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgdGhpcy5oYW5kbGVNb3VzZU91dCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgdGhpcy5oYW5kbGVGb2N1c0luKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgdGhpcy5oYW5kbGVGb2N1c091dCk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5yb290LmNoaWxkcmVuWzBdIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgTGl2ZUNvbXBvbmVudCkucGFyYW1zIGFzIFQ7XG4gICAgfVxuICAgIGdldCBkaXNwbGF5VmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIHR5cGUsIHVuaXRzdHlsZSwgdW5pdHMgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiB0aGlzLnBhcmFtcy5lbnVtW3ZhbHVlXTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJpbnRcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQoMCk7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiZmxvYXRcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwidGltZVwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgbXNcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJoZXJ0elwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgSHpcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJkZWNpYmVsXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiBkQlwiO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcIiVcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiICVcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJwYW5cIikgcmV0dXJuIHZhbHVlID09PSAwID8gXCJDXCIgOiAodHlwZSA9PT0gXCJpbnRcIiA/IE1hdGguYWJzKHZhbHVlKSA6IE1hdGguYWJzKHZhbHVlKS50b0ZpeGVkKDIpKSArICh2YWx1ZSA8IDAgPyBcIiBMXCIgOiBcIiBSXCIpO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcInNlbWl0b25lc1wiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgc3RcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJtaWRpXCIpIHJldHVybiB0b01JREkodmFsdWUpO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcImN1c3RvbVwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgXCIgKyB1bml0cztcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJuYXRpdmVcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKTtcbiAgICAgICAgcmV0dXJuIFwiTi9BXCI7XG4gICAgfVxuICAgIGZldGNoQXR0cmlidXRlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vdC5ob3N0LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLnJvb3QuaG9zdC5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gYXR0cjtcbiAgICAgICAgICAgICh0aGlzLnBhcmFtcyBhcyBhbnkpW25hbWVdID0gdmFsdWUubWF0Y2goL15bKy1dPyhcXGQqXFwuKT9cXGQrJC8pID8gK3ZhbHVlIDogdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGtleTogc3RyaW5nLCBvbGRWYWx1ZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Nvbm5lY3RlZCkgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiIHx8IHZhbHVlID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShrZXksIHZhbHVlLm1hdGNoKC9eWystXT8oXFxkKlxcLik/XFxkKyQvKSA/ICt2YWx1ZSA6IHZhbHVlKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hBdHRyaWJ1dGUoKTtcbiAgICAgICAgdGhpcy5wYWludCgpO1xuICAgIH1cbiAgICBzZXRQYXJhbVZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgICAgICh0aGlzLnBhcmFtcyBhcyBhbnkpW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKGtleSA9PT0gXCJ2YWx1ZVwiKSB0aGlzLmNoYW5nZSgpO1xuICAgICAgICB0aGlzLnBhaW50KCk7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgdmFsdWUpO1xuICAgIH1cbiAgICBjaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgTGl2ZUNvbXBvbmVudENoYW5nZUV2ZW50KFwiY2hhbmdlXCIsIHsgZGV0YWlsOiB7IHZhbHVlOiB0aGlzLnBhcmFtcy52YWx1ZSwgZGlzcGxheVZhbHVlOiB0aGlzLmRpc3BsYXlWYWx1ZSB9IH0pKTtcbiAgICB9XG4gICAgcGFpbnQoKSB7fVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICc8Y2FudmFzIHRhYmluZGV4PVwiMVwiIHN0eWxlPVwib3V0bGluZTogbm9uZTtcIj48L2NhbnZhcz4nO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5cbmludGVyZmFjZSBMaXZlQnV0dG9uUGFyYW1zIGV4dGVuZHMgTGl2ZVBhcmFtcyB7XG4gICAgYWN0aXZlYmdjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZWJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJnY29sb3I6IHN0cmluZztcbiAgICBiZ29uY29sb3I6IHN0cmluZztcbiAgICBib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIGZvY3VzYm9yZGVyY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZUJ1dHRvbiBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZUJ1dHRvblBhcmFtcz4ge1xuICAgIHN0YXRpYyBnZXQgcGFyYW1zKCk6IExpdmVCdXR0b25QYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUuYnV0dG9uXCIsXG4gICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICBoZWlnaHQ6IDE1LFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcjogXCJyZ2JhKDkwLCA5MCwgOTAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3I6IFwicmdiYSgxMDksIDIxNSwgMjU1LCAxKVwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDkwLCA5MCwgOTAsIDEpXCIsXG4gICAgICAgICAgICBiZ29uY29sb3I6IFwicmdiYSgxOTUsIDE5NSwgMTk1LCAxKVwiLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3IsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgYmdvbmNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMC41O1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcblxuICAgICAgICBjb25zdCBidXR0b25CZ0NvbG9yID0gYWN0aXZlID8gKHZhbHVlID8gYWN0aXZlYmdvbmNvbG9yIDogYWN0aXZlYmdjb2xvcikgOiAodmFsdWUgPyBiZ29uY29sb3IgOiBiZ2NvbG9yKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQm9yZGVyQ29sb3IgPSBmb2N1cyA/IGZvY3VzYm9yZGVyY29sb3IgOiBib3JkZXJjb2xvcjtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uQmdDb2xvcjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZWxsaXBzZSh3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41LCB3aWR0aCAqIDAuNSAtIDIgKiBib3JkZXJXaWR0aCwgaGVpZ2h0ICogMC41IC0gMiAqIGJvcmRlcldpZHRoLCAwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGJ1dHRvbkJvcmRlckNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmICF0aGlzLl9pblRvdWNoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIDApLCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgMSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCAwKTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBMaXZlQ29tcG9uZW50Q2hhbmdlRXZlbnQgZXh0ZW5kcyBDdXN0b21FdmVudDx7IHZhbHVlOiBudW1iZXI7IGRpc3BsYXlWYWx1ZTogc3RyaW5nIH0+IHt9XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuaW1wb3J0IHsgdG9SYWQsIHJvdW5kZWRSZWN0LCBmaWxsUm91bmRlZFJlY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5pbnRlcmZhY2UgTGl2ZURpYWxQYXJhbXMgZXh0ZW5kcyBMaXZlUGFyYW1zIHtcbiAgICBmb250bmFtZTogc3RyaW5nO1xuICAgIGZvbnRzaXplOiBudW1iZXI7XG4gICAgZm9udGZhY2U6IFwicmVndWxhclwiIHwgXCJib2xkXCIgfCBcIml0YWxpY1wiIHwgXCJib2xkIGl0YWxpY1wiO1xuICAgIHNob3duYW1lOiBib29sZWFuO1xuICAgIHNob3dudW1iZXI6IGJvb2xlYW47XG4gICAgYXBwZWFyYW5jZTogXCJ2ZXJ0aWNhbFwiIHwgXCJ0aW55XCIgfCBcInBhbmVsXCI7XG4gICAgdHJpYW5nbGU6IGJvb2xlYW47XG4gICAgYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZlZGlhbGNvbG9yOiBzdHJpbmc7XG4gICAgZGlhbGNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZlbmVlZGxlY29sb3I6IHN0cmluZztcbiAgICBuZWVkbGVjb2xvcjogc3RyaW5nO1xuICAgIHBhbmVsY29sb3I6IHN0cmluZztcbiAgICB0ZXh0Y29sb3I6IHN0cmluZztcbiAgICB0cmlib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRyaWNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVEaWFsIGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlRGlhbFBhcmFtcz4ge1xuICAgIHN0YXRpYyBnZXQgcGFyYW1zKCk6IExpdmVEaWFsUGFyYW1zIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnBhcmFtcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLmRpYWxcIixcbiAgICAgICAgICAgIHdpZHRoOiA0NSxcbiAgICAgICAgICAgIGhlaWdodDogNDUsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEyLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgYXBwZWFyYW5jZTogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgdHJpYW5nbGU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd25hbWU6IHRydWUsXG4gICAgICAgICAgICBzaG93bnVtYmVyOiB0cnVlLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmVkaWFsY29sb3I6IFwicmdiYSgxMDksIDIxNSwgMjU1LCAxKVwiLFxuICAgICAgICAgICAgZGlhbGNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZW5lZWRsZWNvbG9yOiBcInJnYmEoNDAsIDQwLCA0MCwgMSlcIixcbiAgICAgICAgICAgIG5lZWRsZWNvbG9yOiBcInJnYmEoMTA1LCAxMDUsIDEwNSwgMSlcIixcbiAgICAgICAgICAgIHBhbmVsY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRyaWJvcmRlcmNvbG9yOiBcInJnYmEoNTAsIDUwLCA1MCwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yOiBcInJnYmEoNDAsIDQwLCA0MCwgMSlcIixcbiAgICAgICAgICAgIG1taW46IDAsXG4gICAgICAgICAgICBtbWF4OiAxMjcsXG4gICAgICAgICAgICB0eXBlOiBcImludFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG4gICAgaW50ZXJhY3Rpb25SZWN0OiBudW1iZXJbXSA9IFswLCAwLCAwLCAwXTtcblxuICAgIGdldCB0cnVlU3RlcHMoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgc3RlcHMsIHN0ZXAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBmdWxsID0gMTAwO1xuICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gbW1heCAtIG1taW4gOiBmdWxsO1xuICAgICAgICBpZiAoc3RlcCkge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIE1hdGgucm91bmQoc3RlcCkpLCBtYXhTdGVwcyk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5mbG9vcigobW1heCAtIG1taW4pIC8gc3RlcCksIG1heFN0ZXBzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RlcHMpIHJldHVybiBNYXRoLm1pbihzdGVwcywgbWF4U3RlcHMpO1xuICAgICAgICByZXR1cm4gbWF4U3RlcHM7XG4gICAgfVxuICAgIGdldCBkaXN0YW5jZSgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCB2YWx1ZSB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IHZhbHVlIC8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiAodmFsdWUgLSBtbWluKSAvIChtbWF4IC0gbW1pbik7XG4gICAgfVxuICAgIGdldCBzdGVwUmFuZ2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgc3RlcCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGZ1bGwgPSAxMDA7XG4gICAgICAgIGlmIChzdGVwKSByZXR1cm4gdHlwZSA9PT0gXCJlbnVtXCIgPyBmdWxsIC8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gTWF0aC5yb3VuZChzdGVwKSAvIChtbWF4IC0gbW1pbikgKiBmdWxsIDogc3RlcCAvIChtbWF4IC0gbW1pbikgKiBmdWxsO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgcmV0dXJuIGZ1bGwgLyB0cnVlU3RlcHM7XG4gICAgfVxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgIGZvY3VzLFxuICAgICAgICAgICAgZm9udG5hbWUsXG4gICAgICAgICAgICBmb250c2l6ZSxcbiAgICAgICAgICAgIGZvbnRmYWNlLFxuICAgICAgICAgICAgYXBwZWFyYW5jZSxcbiAgICAgICAgICAgIHRyaWFuZ2xlLFxuICAgICAgICAgICAgc2hvd25hbWUsXG4gICAgICAgICAgICBzaG93bnVtYmVyLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgcGFuZWxjb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZW5lZWRsZWNvbG9yLFxuICAgICAgICAgICAgbmVlZGxlY29sb3IsXG4gICAgICAgICAgICBhY3RpdmVkaWFsY29sb3IsXG4gICAgICAgICAgICBkaWFsY29sb3IsXG4gICAgICAgICAgICB0ZXh0Y29sb3IsXG4gICAgICAgICAgICB0cmlib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHRyaWNvbG9yLFxuICAgICAgICAgICAgc2hvcnRuYW1lXG4gICAgICAgIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG5cbiAgICAgICAgY29uc3QgdHJpYW5nbGVIZWlnaHQgPSA0O1xuICAgICAgICBjb25zdCB0cmlhbmdsZUxpbmVXaWR0aCA9IDAuNjtcblxuICAgICAgICBsZXQgc3RhcnQ6IG51bWJlcjtcbiAgICAgICAgbGV0IGVuZDogbnVtYmVyO1xuICAgICAgICBsZXQgdmFsUG9zOiBudW1iZXI7XG4gICAgICAgIGxldCBkaWFsSGVpZ2h0OiBudW1iZXI7XG5cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICBkaWFsSGVpZ2h0ID0gMTg7XG4gICAgICAgICAgICBzdGFydCA9IC0zICogTWF0aC5QSSAqIDAuNTtcbiAgICAgICAgICAgIGVuZCA9IDA7XG4gICAgICAgICAgICB2YWxQb3MgPSBzdGFydCArIHRvUmFkKHRoaXMuZGlzdGFuY2UgKiAyNzApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlhbEhlaWdodCA9IDI1O1xuICAgICAgICAgICAgc3RhcnQgPSBNYXRoLlBJIC0gMyAqIE1hdGguUEkgLyA4O1xuICAgICAgICAgICAgZW5kID0gMiAqIE1hdGguUEkgKyAzICogTWF0aC5QSSAvIDg7XG4gICAgICAgICAgICB2YWxQb3MgPSBzdGFydCArIHRvUmFkKHRoaXMuZGlzdGFuY2UgKiAzMTUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpYWxSYWRpdXMgPSBkaWFsSGVpZ2h0ICogMC41O1xuXG4gICAgICAgIGxldCBkaWFsQ2VudGVyWCA9IHdpZHRoICogMC41O1xuICAgICAgICBsZXQgZGlhbENlbnRlclkgPSBoZWlnaHQgKiAwLjUgKyAxO1xuICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJwYW5lbFwiKSB7XG4gICAgICAgICAgICBkaWFsQ2VudGVyWSArPSAxMDtcbiAgICAgICAgfSBlbHNlIGlmIChhcHBlYXJhbmNlID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIGlmIChzaG93bnVtYmVyKSBkaWFsQ2VudGVyWSAtPSBmb250c2l6ZSAtIDU7XG4gICAgICAgICAgICBpZiAoc2hvd25hbWUpIGRpYWxDZW50ZXJZICs9IGZvbnRzaXplIC0gNTtcbiAgICAgICAgICAgIGlmICh0cmlhbmdsZSkgZGlhbENlbnRlclkgKz0gdHJpYW5nbGVIZWlnaHQgLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICBpZiAoc2hvd25hbWUpIHtcbiAgICAgICAgICAgICAgICBkaWFsQ2VudGVyWSArPSA2O1xuICAgICAgICAgICAgICAgIGRpYWxDZW50ZXJYID0gMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3QgPSBbMCwgZGlhbENlbnRlclkgLSBkaWFsSGVpZ2h0ICogMC41LCB3aWR0aCwgZGlhbEhlaWdodF07XG4gICAgICAgIGNvbnN0IGFyY1N0YXJ0WCA9IGRpYWxDZW50ZXJYICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLmNvcyhzdGFydCkpO1xuICAgICAgICBjb25zdCBhcmNTdGFydFkgPSBkaWFsQ2VudGVyWSArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5zaW4oc3RhcnQpKTtcbiAgICAgICAgY29uc3QgYXJjRW5kWCA9IGRpYWxDZW50ZXJYICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLmNvcyhlbmQpKTtcbiAgICAgICAgY29uc3QgYXJjRW5kWSA9IGRpYWxDZW50ZXJZICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLnNpbihlbmQpKTtcbiAgICAgICAgY29uc3QgdmFsdWVQb3NYID0gZGlhbENlbnRlclggKyAoZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguY29zKHZhbFBvcykpO1xuICAgICAgICBjb25zdCB2YWx1ZVBvc1kgPSBkaWFsQ2VudGVyWSArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5zaW4odmFsUG9zKSk7XG4gICAgICAgIGNvbnN0IGVuZENhcFJhZGl1cyA9IDE7XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGxldCBwYW5lbE9mZnNldCA9IDA7XG5cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwicGFuZWxcIikge1xuICAgICAgICAgICAgcGFuZWxPZmZzZXQgPSA1O1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMC40O1xuICAgICAgICAgICAgcm91bmRlZFJlY3QoY3R4LCAxLCAxLCB3aWR0aCAtIDIsIGhlaWdodCAtIDIsIDUpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHBhbmVsY29sb3I7XG4gICAgICAgICAgICBmaWxsUm91bmRlZFJlY3QoY3R4LCAxLjIsIDEuMiwgd2lkdGggLSAyLjQsIDMwIC0gMC40LCBbNSwgNSwgMCwgMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYWN0aXZlID8gYWN0aXZlbmVlZGxlY29sb3IgOiBuZWVkbGVjb2xvcjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGN0eC5zdHJva2VTdHlsZTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kIGFyYyBlbmRjYXBzXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhhcmNTdGFydFgsIGFyY1N0YXJ0WSwgZW5kQ2FwUmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhhcmNFbmRYLCBhcmNFbmRZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kIGFyY1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBkaWFsUmFkaXVzLCBzdGFydCwgZW5kKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIGRyYXcgdmFsdWUgYXJjLCB3aGljaCBjaGFuZ2VzIGlmIHRyaWFuZ2xlIGlzIGVuYWJsZWRcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYWN0aXZlID8gYWN0aXZlZGlhbGNvbG9yIDogZGlhbGNvbG9yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3R4LnN0cm9rZVN0eWxlO1xuICAgICAgICBpZiAodHJpYW5nbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pZHBvaW50ID0gKHN0YXJ0ICsgZW5kKSAqIDAuNTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGFjdGl2ZSA/IGFjdGl2ZWRpYWxjb2xvciA6IGRpYWxjb2xvcjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IDAuNSkgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGRpYWxSYWRpdXMsIG1pZHBvaW50LCB2YWxQb3MpO1xuICAgICAgICAgICAgZWxzZSBjdHguYXJjKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSwgZGlhbFJhZGl1cywgdmFsUG9zLCBtaWRwb2ludCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkcmF3IHZhbHVlIGFyYyBlbmRjYXBcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMoYXJjU3RhcnRYLCBhcmNTdGFydFksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIC8vIGRyYXcgdmFsdWUgYXJjXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSwgZGlhbFJhZGl1cywgc3RhcnQsIHZhbFBvcyk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZHJhdyBkaWFsXG4gICAgICAgIC8vIGRyYXcgZGlhbCByb3VuZCBlbmRjYXBzXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGFjdGl2ZSA/IGFjdGl2ZW5lZWRsZWNvbG9yIDogbmVlZGxlY29sb3I7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjdHguc3Ryb2tlU3R5bGU7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModmFsdWVQb3NYLCB2YWx1ZVBvc1ksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAvLyBkcmF3IGRpYWwgbGluZVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZKTtcbiAgICAgICAgY3R4LmxpbmVUbyh2YWx1ZVBvc1gsIHZhbHVlUG9zWSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gYWRkIHRleHQgaWYgaXQgaXMgZW5hYmxlZFxuICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlID09PSBcInJlZ3VsYXJcIiA/IFwiXCIgOiBmb250ZmFjZX0gJHtmb250c2l6ZX1weCAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0ZXh0Y29sb3I7XG4gICAgICAgIGlmIChzaG93bmFtZSkge1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChzaG9ydG5hbWUsIDAsIHBhbmVsT2Zmc2V0ICsgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHNob3J0bmFtZSwgd2lkdGggKiAwLjUsIHBhbmVsT2Zmc2V0ICsgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd251bWJlcikge1xuICAgICAgICAgICAgY29uc3QgdGlueU9mZnNldCA9IGFwcGVhcmFuY2UgPT09IFwidGlueVwiID8gMTIgOiAwO1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmRpc3BsYXlWYWx1ZSwgdGlueU9mZnNldCwgaGVpZ2h0IC0gcGFuZWxPZmZzZXQsIHdpZHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuZGlzcGxheVZhbHVlLCB3aWR0aCAqIDAuNSwgaGVpZ2h0IC0gcGFuZWxPZmZzZXQsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3IHRyaWFuZ2xlIGlmIGl0IGlzIGVuYWJsZWRcbiAgICAgICAgaWYgKHRyaWFuZ2xlKSB7XG4gICAgICAgICAgICBpZiAoIWRpc3RhbmNlKSBjdHguZmlsbFN0eWxlID0gdHJpY29sb3I7XG4gICAgICAgICAgICBlbHNlIGlmICghYWN0aXZlKSBjdHguZmlsbFN0eWxlID0gZGlhbGNvbG9yO1xuICAgICAgICAgICAgZWxzZSBjdHguZmlsbFN0eWxlID0gYWN0aXZlZGlhbGNvbG9yO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlwUG9zaXRpb25YID0gZGlhbENlbnRlclggKyBkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5jb3MoLTMgKiBNYXRoLlBJIC8gNCkgLSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpcFBvc2l0aW9uWSA9IGRpYWxDZW50ZXJZICsgZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguc2luKC0zICogTWF0aC5QSSAvIDQpIC0gMTtcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHRpcFBvc2l0aW9uWCwgdGlwUG9zaXRpb25ZKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHRpcFBvc2l0aW9uWCAtIHRyaWFuZ2xlSGVpZ2h0LCB0aXBQb3NpdGlvblkpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odGlwUG9zaXRpb25YLCB0aXBQb3NpdGlvblkgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh0aXBQb3NpdGlvblgsIHRpcFBvc2l0aW9uWSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oZGlhbENlbnRlclggLSB0cmlhbmdsZUhlaWdodCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSAtIHRyaWFuZ2xlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKGRpYWxDZW50ZXJYICsgdHJpYW5nbGVIZWlnaHQsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJpYm9yZGVyY29sb3IgfHwgXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRyaWFuZ2xlTGluZVdpZHRoO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFZhbHVlRnJvbURlbHRhKGU6IFBvaW50ZXJEcmFnRXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWluLCBtbWF4IH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3Qgc3RlcFJhbmdlID0gdGhpcy5zdGVwUmFuZ2U7XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICBjb25zdCBzdGVwID0gdHlwZSA9PT0gXCJlbnVtXCIgPyAxIDogKHRoaXMucGFyYW1zLnN0ZXAgfHwgKG1tYXggLSBtbWluKSAvIHRydWVTdGVwcyk7XG4gICAgICAgIGNvbnN0IHByZXZTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gZS5wcmV2VmFsdWUgOiBlLnByZXZWYWx1ZSAvIHN0ZXA7XG4gICAgICAgIGNvbnN0IGRTdGVwcyA9IE1hdGgucm91bmQoKGUuZnJvbVkgLSBlLnkpIC8gc3RlcFJhbmdlKTtcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBNYXRoLm1pbih0cnVlU3RlcHMsIE1hdGgubWF4KDAsIHByZXZTdGVwcyArIGRTdGVwcykpO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiBzdGVwcztcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLnJvdW5kKHN0ZXBzICogc3RlcCArIG1taW4pO1xuICAgICAgICByZXR1cm4gc3RlcHMgKiBzdGVwICsgbW1pbjtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoZTogUG9pbnRlckRvd25FdmVudCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBlLnggPCB0aGlzLmludGVyYWN0aW9uUmVjdFswXVxuICAgICAgICAgICAgfHwgZS54ID4gdGhpcy5pbnRlcmFjdGlvblJlY3RbMF0gKyB0aGlzLmludGVyYWN0aW9uUmVjdFsyXVxuICAgICAgICAgICAgfHwgZS55IDwgdGhpcy5pbnRlcmFjdGlvblJlY3RbMV1cbiAgICAgICAgICAgIHx8IGUueSA+IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbM11cbiAgICAgICAgKSByZXR1cm47XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5faW5Ub3VjaCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tRGVsdGEoZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5wYXJhbXMudmFsdWUpIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZU51bWJveFBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIGZvbnRuYW1lOiBzdHJpbmc7XG4gICAgZm9udHNpemU6IG51bWJlcjtcbiAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIgfCBcImJvbGRcIiB8IFwiaXRhbGljXCIgfCBcImJvbGQgaXRhbGljXCI7XG4gICAgYXBwZWFyYW5jZTogXCJzbGlkZXJcIiB8IFwidHJpYW5nbGVcIiB8IFwiZGVmYXVsdFwiO1xuICAgIGFjdGl2ZWJnY29sb3I6IHN0cmluZztcbiAgICBib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIGZvY3VzYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICB0ZXh0Y29sb3I6IHN0cmluZztcbiAgICB0cmljb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZXRyaWNvbG9yOiBzdHJpbmc7XG4gICAgdHJpY29sb3IyOiBzdHJpbmc7XG4gICAgYWN0aXZldHJpY29sb3IyOiBzdHJpbmc7XG4gICAgYWN0aXZlc2xpZGVyY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZU51bWJveCBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZU51bWJveFBhcmFtcz4ge1xuICAgIHN0YXRpYyBnZXQgcGFyYW1zKCk6IExpdmVOdW1ib3hQYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUubnVtYm94XCIsXG4gICAgICAgICAgICB3aWR0aDogNDUsXG4gICAgICAgICAgICBoZWlnaHQ6IDE1LFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMCxcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0cmljb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjI6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZldHJpY29sb3IyOiBcInJnYmEoMTA5LCAyMTUsIDI1NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXNsaWRlcmNvbG9yOiBcInJnYmEoMTA5LCAyMTUsIDI1NSwgMSlcIixcbiAgICAgICAgICAgIG1taW46IDAsXG4gICAgICAgICAgICBtbWF4OiAxMjcsXG4gICAgICAgICAgICB0eXBlOiBcImludFwiLFxuICAgICAgICAgICAgdW5pdHN0eWxlOiBcImludFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBnZXQgdHJ1ZVN0ZXBzKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHN0ZXBzLCBzdGVwIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgZnVsbCA9IDEwMDtcbiAgICAgICAgY29uc3QgbWF4U3RlcHMgPSB0eXBlID09PSBcImVudW1cIiA/IHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IG1tYXggLSBtbWluIDogZnVsbDtcbiAgICAgICAgaWYgKHN0ZXApIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBNYXRoLnJvdW5kKHN0ZXApKSwgbWF4U3RlcHMpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIHN0ZXApLCBtYXhTdGVwcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ZXBzKSByZXR1cm4gTWF0aC5taW4oc3RlcHMsIG1heFN0ZXBzKTtcbiAgICAgICAgcmV0dXJuIG1heFN0ZXBzO1xuICAgIH1cbiAgICBnZXQgZGlzdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgdmFsdWUgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gXCJlbnVtXCIgPyB2YWx1ZSAvIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogKHZhbHVlIC0gbW1pbikgLyAobW1heCAtIG1taW4pO1xuICAgIH1cbiAgICBnZXQgc3RlcFJhbmdlKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHN0ZXAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBmdWxsID0gMTAwO1xuICAgICAgICBpZiAoc3RlcCkgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gZnVsbCAvIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IE1hdGgucm91bmQoc3RlcCkgLyAobW1heCAtIG1taW4pICogZnVsbCA6IHN0ZXAgLyAobW1heCAtIG1taW4pICogZnVsbDtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIHJldHVybiBmdWxsIC8gdHJ1ZVN0ZXBzO1xuICAgIH1cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIGFwcGVhcmFuY2UsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdHJpY29sb3IsXG4gICAgICAgICAgICBhY3RpdmV0cmljb2xvcixcbiAgICAgICAgICAgIHRyaWNvbG9yMixcbiAgICAgICAgICAgIGFjdGl2ZXRyaWNvbG9yMixcbiAgICAgICAgICAgIGFjdGl2ZXNsaWRlcmNvbG9yXG4gICAgICAgIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTtcbiAgICAgICAgY29uc3QgZGlzcGxheVZhbHVlID0gdGhpcy5kaXNwbGF5VmFsdWU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICAvLyBkcmF3IGJhY2tncm91bmRcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGFjdGl2ZWJnY29sb3I7XG4gICAgICAgIGN0eC5yZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIC8vIGRyYXcgYm9yZGVyIChldmVudHVhbGx5IHdlIG1pZ2h0IG5lZWQgdG8gcmVkZWZpbmUgdGhlIHNoYXBlKVxuICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJzbGlkZXJcIiAmJiBhY3RpdmUgJiYgZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBhY3RpdmVzbGlkZXJjb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLjUsIDAuNSwgZGlzdGFuY2UgKiB3aWR0aCAtIDEsIGhlaWdodCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInRyaWFuZ2xlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRyaWFuZ2xlSGVpZ2h0ID0gODtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBhY3RpdmUgPyAoZGlzdGFuY2UgPyBhY3RpdmV0cmljb2xvcjIgOiBhY3RpdmV0cmljb2xvcikgOiAoZGlzdGFuY2UgPyB0cmljb2xvcjIgOiB0cmljb2xvcik7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHdpZHRoIC0gdHJpYW5nbGVIZWlnaHQgLSAwLjUsIGhlaWdodCAqIDAuNSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoIC0gMC41LCAwLjUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCAtIDAuNSwgaGVpZ2h0IC0gMC41KTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGlzcGxheSB0aGUgdGV4dFxuICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlID09PSBcInJlZ3VsYXJcIiA/IFwiXCIgOiBmb250ZmFjZX0gJHtmb250c2l6ZX1weCAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0ZXh0Y29sb3I7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGRpc3BsYXlWYWx1ZSwgd2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNSwgd2lkdGgpO1xuICAgIH1cbiAgICBnZXRWYWx1ZUZyb21EZWx0YShlOiBQb2ludGVyRHJhZ0V2ZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1pbiwgbW1heCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IHN0ZXBSYW5nZSA9IHRoaXMuc3RlcFJhbmdlO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgY29uc3Qgc3RlcCA9IHR5cGUgPT09IFwiZW51bVwiID8gMSA6ICh0aGlzLnBhcmFtcy5zdGVwIHx8IChtbWF4IC0gbW1pbikgLyB0cnVlU3RlcHMpO1xuICAgICAgICBjb25zdCBwcmV2U3RlcHMgPSB0eXBlID09PSBcImVudW1cIiA/IGUucHJldlZhbHVlIDogZS5wcmV2VmFsdWUgLyBzdGVwO1xuICAgICAgICBjb25zdCBkU3RlcHMgPSBNYXRoLnJvdW5kKChlLmZyb21ZIC0gZS55KSAvIHN0ZXBSYW5nZSk7XG4gICAgICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5taW4odHJ1ZVN0ZXBzLCBNYXRoLm1heCgwLCBwcmV2U3RlcHMgKyBkU3RlcHMpKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gc3RlcHM7XG4gICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5yb3VuZChzdGVwcyAqIHN0ZXAgKyBtbWluKTtcbiAgICAgICAgcmV0dXJuIHN0ZXBzICogc3RlcCArIG1taW47XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlckRyYWdFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2luVG91Y2gpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbURlbHRhKGUpO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMucGFyYW1zLnZhbHVlKSB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCBuZXdWYWx1ZSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcblxuaW50ZXJmYWNlIExpdmVTbGlkZXJQYXJhbXMgZXh0ZW5kcyBMaXZlUGFyYW1zIHtcbiAgICByZWxhdGl2ZTogYm9vbGVhbjtcbiAgICBmb250bmFtZTogc3RyaW5nO1xuICAgIGZvbnRzaXplOiBudW1iZXI7XG4gICAgZm9udGZhY2U6IFwicmVndWxhclwiIHwgXCJib2xkXCIgfCBcIml0YWxpY1wiIHwgXCJib2xkIGl0YWxpY1wiO1xuICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfCBcImhvcml6b250YWxcIjtcbiAgICBzaG93bmFtZTogYm9vbGVhbjtcbiAgICBzaG93bnVtYmVyOiBib29sZWFuO1xuICAgIHNsaWRlcmNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dGNvbG9yOiBzdHJpbmc7XG4gICAgdHJpYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICB0cmlvbmNvbG9yOiBzdHJpbmc7XG4gICAgdHJpY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVNsaWRlciBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZVNsaWRlclBhcmFtcz4ge1xuICAgIHN0YXRpYyBnZXQgcGFyYW1zKCk6IExpdmVTbGlkZXJQYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUuc2xpZGVyXCIsXG4gICAgICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDkwLFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMixcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICBzaG93bmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dudW1iZXI6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXJjb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0Y29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgdHJpb25jb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICByZWxhdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBtbWluOiAwLFxuICAgICAgICAgICAgbW1heDogMTI3LFxuICAgICAgICAgICAgdHlwZTogXCJpbnRcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBfaW5Ub3VjaDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGludGVyYWN0aW9uUmVjdDogbnVtYmVyW10gPSBbMCwgMCwgMCwgMF07XG5cbiAgICBnZXQgdHJ1ZVN0ZXBzKCkge1xuICAgICAgICBjb25zdCB7IG9yaWVudGF0aW9uLCB0eXBlLCBtbWF4LCBtbWluLCBzdGVwcywgc3RlcCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGZ1bGwgPSB0aGlzLmludGVyYWN0aW9uUmVjdFtvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gMyA6IDJdO1xuICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gbW1heCAtIG1taW4gOiBmdWxsO1xuICAgICAgICBpZiAoc3RlcCkge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIE1hdGgucm91bmQoc3RlcCkpLCBtYXhTdGVwcyk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5mbG9vcigobW1heCAtIG1taW4pIC8gc3RlcCksIG1heFN0ZXBzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RlcHMpIHJldHVybiBNYXRoLm1pbihzdGVwcywgbWF4U3RlcHMpO1xuICAgICAgICByZXR1cm4gbWF4U3RlcHM7XG4gICAgfVxuICAgIGdldCBkaXN0YW5jZSgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCB2YWx1ZSB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IHZhbHVlIC8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiAodmFsdWUgLSBtbWluKSAvIChtbWF4IC0gbW1pbik7XG4gICAgfVxuICAgIGdldCBzdGVwUmFuZ2UoKSB7XG4gICAgICAgIGNvbnN0IHsgb3JpZW50YXRpb24sIHR5cGUsIG1tYXgsIG1taW4sIHN0ZXAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBmdWxsID0gdGhpcy5pbnRlcmFjdGlvblJlY3Rbb3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiA/IDMgOiAyXTtcbiAgICAgICAgaWYgKHN0ZXApIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IGZ1bGwgLyB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aCA6IHR5cGUgPT09IFwiaW50XCIgPyBNYXRoLnJvdW5kKHN0ZXApIC8gKG1tYXggLSBtbWluKSAqIGZ1bGwgOiBzdGVwIC8gKG1tYXggLSBtbWluKSAqIGZ1bGw7XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICByZXR1cm4gZnVsbCAvIHRydWVTdGVwcztcbiAgICB9XG4gICAgcGFpbnQoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgZm9udG5hbWUsXG4gICAgICAgICAgICBmb250c2l6ZSxcbiAgICAgICAgICAgIGZvbnRmYWNlLFxuICAgICAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgICAgICBzaG93bmFtZSxcbiAgICAgICAgICAgIHNob3dudW1iZXIsXG4gICAgICAgICAgICBzbGlkZXJjb2xvcixcbiAgICAgICAgICAgIHRleHRjb2xvcixcbiAgICAgICAgICAgIHRyaWJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdHJpb25jb2xvcixcbiAgICAgICAgICAgIHRyaWNvbG9yLFxuICAgICAgICAgICAgc2hvcnRuYW1lXG4gICAgICAgIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IDAuNTtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDg7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTtcbiAgICAgICAgY29uc3QgZGlzcGxheVZhbHVlID0gdGhpcy5kaXNwbGF5VmFsdWU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzbGlkZXJjb2xvcjtcblxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh3aWR0aCAqIDAuNSwgZm9udHNpemUgKyBwYWRkaW5nKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8od2lkdGggKiAwLjUsIGhlaWdodCAtIChmb250c2l6ZSArIHBhZGRpbmcpKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25XaWR0aCA9IHdpZHRoICogMC41O1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3QgPSBbXG4gICAgICAgICAgICAgICAgd2lkdGggKiAwLjUgLSBpbnRlcmFjdGlvbldpZHRoICogMC41LFxuICAgICAgICAgICAgICAgIGZvbnRzaXplICsgcGFkZGluZyxcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbldpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCAtIDIgKiAoZm9udHNpemUgKyBwYWRkaW5nKVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0cmlib3JkZXJjb2xvcjtcbiAgICAgICAgICAgIGNvbnN0IHRyaU9yaWdpbjogW251bWJlciwgbnVtYmVyXSA9IFtcbiAgICAgICAgICAgICAgICB3aWR0aCAqIDAuNSArIGxpbmVXaWR0aCAqIDAuNSArIDAuNSxcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSAtIDQgKyB0aGlzLmludGVyYWN0aW9uUmVjdFszXSAqICgxIC0gZGlzdGFuY2UpXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0cmlPcmlnaW5bMF0sIHRyaU9yaWdpblsxXSArIDQpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0gKyA4LCB0cmlPcmlnaW5bMV0pO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0gKyA4LCB0cmlPcmlnaW5bMV0gKyA4KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdLCB0cmlPcmlnaW5bMV0gKyA0KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuX2luVG91Y2ggPyB0cmlvbmNvbG9yIDogdHJpY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlID09PSBcInJlZ3VsYXJcIiA/IFwiXCIgOiBmb250ZmFjZX0gJHtmb250c2l6ZX1weCAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0ZXh0Y29sb3I7XG4gICAgICAgICAgICBpZiAoc2hvd25hbWUpIGN0eC5maWxsVGV4dChzaG9ydG5hbWUsIHdpZHRoICogMC41LCBmb250c2l6ZSwgd2lkdGgpO1xuICAgICAgICAgICAgaWYgKHNob3dudW1iZXIpIGN0eC5maWxsVGV4dChkaXNwbGF5VmFsdWUsIHdpZHRoICogMC41LCBoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8ocGFkZGluZywgaGVpZ2h0ICogMC41KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8od2lkdGggLSBwYWRkaW5nLCBoZWlnaHQgKiAwLjUpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbldpZHRoID0gaGVpZ2h0ICogMC41O1xuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3QgPSBbXG4gICAgICAgICAgICAgICAgcGFkZGluZyxcbiAgICAgICAgICAgICAgICBoZWlnaHQgKiAwLjUgLSBpbnRlcmFjdGlvbldpZHRoICogMC41LFxuICAgICAgICAgICAgICAgIHdpZHRoIC0gMiAqIHBhZGRpbmcsXG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25XaWR0aFxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0cmlib3JkZXJjb2xvcjtcbiAgICAgICAgICAgIGNvbnN0IHRyaU9yaWdpbjogW251bWJlciwgbnVtYmVyXSA9IFtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdFswXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzJdICogZGlzdGFuY2UgLSA0LFxuICAgICAgICAgICAgICAgIGhlaWdodCAqIDAuNSArIGxpbmVXaWR0aCAqIDAuNSArIDJcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDQsIHRyaU9yaWdpblsxXSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDgsIHRyaU9yaWdpblsxXSArIDgpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0sIHRyaU9yaWdpblsxXSArIDgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5faW5Ub3VjaCA/IHRyaW9uY29sb3IgOiB0cmljb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Zm9udGZhY2UgPT09IFwicmVndWxhclwiID8gXCJcIiA6IGZvbnRmYWNlfSAke2ZvbnRzaXplfXB4ICR7Zm9udG5hbWV9LCBzYW5zLXNlcmlmYDtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRleHRjb2xvcjtcbiAgICAgICAgICAgIGlmIChzaG93bmFtZSkgY3R4LmZpbGxUZXh0KHNob3J0bmFtZSwgd2lkdGggKiAwLjUsIGZvbnRzaXplLCB3aWR0aCk7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgICAgICBpZiAoc2hvd251bWJlcikgY3R4LmZpbGxUZXh0KGRpc3BsYXlWYWx1ZSwgNCwgaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0VmFsdWVGcm9tUG9zKGU6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSkge1xuICAgICAgICBjb25zdCB7IG9yaWVudGF0aW9uLCB0eXBlLCBtbWluLCBtbWF4IH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3Qgc3RlcFJhbmdlID0gdGhpcy5zdGVwUmFuZ2U7XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICBjb25zdCBzdGVwID0gdGhpcy5wYXJhbXMuc3RlcCB8fCAobW1heCAtIG1taW4pIC8gdHJ1ZVN0ZXBzO1xuICAgICAgICBsZXQgc3RlcHMgPSBNYXRoLnJvdW5kKChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gdGhpcy5pbnRlcmFjdGlvblJlY3RbM10gLSAoZS55IC0gdGhpcy5pbnRlcmFjdGlvblJlY3RbMV0pIDogZS54IC0gdGhpcy5pbnRlcmFjdGlvblJlY3RbMF0pIC8gc3RlcFJhbmdlKTtcbiAgICAgICAgc3RlcHMgPSBNYXRoLm1pbih0cnVlU3RlcHMsIE1hdGgubWF4KDAsIHN0ZXBzKSk7XG4gICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHN0ZXBzO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIE1hdGgucm91bmQoc3RlcHMgKiBzdGVwICsgbW1pbik7XG4gICAgICAgIHJldHVybiBzdGVwcyAqIHN0ZXAgKyBtbWluO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9IChlOiBQb2ludGVyRG93bkV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBlLnggPCB0aGlzLmludGVyYWN0aW9uUmVjdFswXVxuICAgICAgICAgICAgfHwgZS54ID4gdGhpcy5pbnRlcmFjdGlvblJlY3RbMF0gKyB0aGlzLmludGVyYWN0aW9uUmVjdFsyXVxuICAgICAgICAgICAgfHwgZS55IDwgdGhpcy5pbnRlcmFjdGlvblJlY3RbMV1cbiAgICAgICAgICAgIHx8IGUueSA+IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbM11cbiAgICAgICAgKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRWYWx1ZUZyb21Qb3MoZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdmFsdWUpIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIHRoaXMuZ2V0VmFsdWVGcm9tUG9zKGUpKTtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEcmFnID0gKGU6IFBvaW50ZXJEcmFnRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9pblRvdWNoKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRWYWx1ZUZyb21Qb3MoZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5wYXJhbXMudmFsdWUpIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZVRhYlBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIGZvbnRuYW1lOiBzdHJpbmc7XG4gICAgZm9udHNpemU6IG51bWJlcjtcbiAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIgfCBcImJvbGRcIiB8IFwiaXRhbGljXCIgfCBcImJvbGQgaXRhbGljXCI7XG4gICAgYWN0aXZlYmdjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZWJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJnY29sb3I6IHN0cmluZztcbiAgICBiZ29uY29sb3I6IHN0cmluZztcbiAgICBib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIGZvY3VzYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICB0ZXh0Y29sb3I6IHN0cmluZztcbiAgICB0ZXh0b25jb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZXRleHRjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZXRleHRvbmNvbG9yOiBzdHJpbmc7XG4gICAgbW9kZTogXCJlcXVhbFwiIHwgXCJwcm9wb3J0aW9uYWxcIjtcbiAgICBzcGFjaW5nX3g6IG51bWJlcjtcbiAgICBzcGFjaW5nX3k6IG51bWJlcjtcbiAgICBtdWx0aWxpbmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVUYWIgZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVUYWJQYXJhbXM+IHtcbiAgICBzdGF0aWMgZ2V0IHBhcmFtcygpOiBMaXZlVGFiUGFyYW1zIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnBhcmFtcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLnRhYlwiLFxuICAgICAgICAgICAgd2lkdGg6IDkwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0NSxcbiAgICAgICAgICAgIGZvbnRuYW1lOiBcIkFyaWFsXCIsXG4gICAgICAgICAgICBmb250c2l6ZTogMTAsXG4gICAgICAgICAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZWJnb25jb2xvcjogXCJyZ2JhKDI1NSwgMTgxLCA1MCwgMSlcIixcbiAgICAgICAgICAgIGJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYmdvbmNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRvbmNvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0b25jb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICBtb2RlOiBcImVxdWFsXCIsXG4gICAgICAgICAgICBlbnVtOiBbXCJvbmVcIiwgXCJ0d29cIiwgXCJ0aHJlZVwiXSxcbiAgICAgICAgICAgIHNwYWNpbmdfeDogNixcbiAgICAgICAgICAgIHNwYWNpbmdfeTogNixcbiAgICAgICAgICAgIG11bHRpbGluZTogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cbiAgICBfaW5Ub3VjaDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHRhYlJlY3RzOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXVtdID0gW107XG5cbiAgICBnZXRUYWJSZWN0cygpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBtdWx0aWxpbmUsXG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgc3BhY2luZ194LFxuICAgICAgICAgICAgc3BhY2luZ195XG4gICAgICAgIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgZW51bXMgPSB0aGlzLnBhcmFtcy5lbnVtO1xuICAgICAgICBjb25zdCBtYXJnaW4gPSA0O1xuICAgICAgICBjb25zdCBtaW5IZWlnaHQgPSAxMDtcbiAgICAgICAgY29uc3QgY291bnQgPSBlbnVtcy5sZW5ndGg7XG4gICAgICAgIGxldCBjb3VudFBlckxpbmUgPSBjb3VudDtcbiAgICAgICAgbGV0IGxpbmVzID0gMTtcbiAgICAgICAgbGV0IHN0ZXAgPSBoZWlnaHQgLyBsaW5lcztcbiAgICAgICAgbGV0IGludGVydmFsID0gMDtcbiAgICAgICAgbGV0IHJlY3RXaWR0aCA9IDA7XG4gICAgICAgIGNvbnN0IHNwYWNpbmdYID0gc3BhY2luZ194ICogMC41O1xuICAgICAgICBjb25zdCBzcGFjaW5nWSA9IHNwYWNpbmdfeSAqIDAuNTtcblxuICAgICAgICBpZiAobXVsdGlsaW5lICYmIGhlaWdodCA+PSAyICogbWluSGVpZ2h0KSB7XG4gICAgICAgICAgICBsaW5lcyA9IE1hdGgubWF4KDEsIE1hdGgubWluKGNvdW50LCBNYXRoLmZsb29yKGhlaWdodCAvIG1pbkhlaWdodCkpKTtcbiAgICAgICAgICAgIGNvdW50UGVyTGluZSA9IE1hdGguY2VpbChjb3VudCAvIGxpbmVzKTtcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3Mgbm90IGVub3VnaCBoZWlnaHQsIGluY3JlYXNlIHRoZSBudW1iZXIgb2YgdGFicyBwZXIgcm93XG4gICAgICAgICAgICB3aGlsZSAobGluZXMgKiBjb3VudFBlckxpbmUgPCBjb3VudCkge1xuICAgICAgICAgICAgICAgIGNvdW50UGVyTGluZSsrO1xuICAgICAgICAgICAgICAgIGlmIChsaW5lcyA+IDEpIGxpbmVzLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSdzIGV4dHJhIGhlaWdodCwgcmVkdWNlIHRoZSBudW1iZXIgb2Ygcm93c1xuICAgICAgICAgICAgd2hpbGUgKGxpbmVzICogY291bnRQZXJMaW5lID4gY291bnQgJiYgKGxpbmVzIC0gMSkgKiBjb3VudFBlckxpbmUgPj0gY291bnQpIHtcbiAgICAgICAgICAgICAgICBsaW5lcy0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RlcCA9IGhlaWdodCAvIGxpbmVzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb2RlID09PSBcImVxdWFsXCIpIHtcbiAgICAgICAgICAgIGludGVydmFsID0gd2lkdGggLyBjb3VudFBlckxpbmU7XG4gICAgICAgICAgICByZWN0V2lkdGggPSBpbnRlcnZhbCAtIHNwYWNpbmdYO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJSZWN0c1tpXSA9IFtcbiAgICAgICAgICAgICAgICAgICAgKGkgJSBjb3VudFBlckxpbmUpICogaW50ZXJ2YWwgKyBzcGFjaW5nWCAqIDAuNSxcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihpIC8gY291bnRQZXJMaW5lKSAqIHN0ZXAgKyBzcGFjaW5nWSAqIDAuNSxcbiAgICAgICAgICAgICAgICAgICAgcmVjdFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAoaGVpZ2h0IC8gbGluZXMpIC0gc3BhY2luZ1lcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGV4dFdpZHRocyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgc3BhY2UgPSB3aWR0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gaSAqIGNvdW50UGVyTGluZTsgaiA8IE1hdGgubWluKChpICsgMSkgKiBjb3VudFBlckxpbmUsIGNvdW50KTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHREaW1lbnNpb25zID0gdGhpcy5jdHgubWVhc3VyZVRleHQoZW51bXNbal0pO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0V2lkdGhzW2pdID0gdGV4dERpbWVuc2lvbnMud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsICs9IHRleHRXaWR0aHNbal07XG4gICAgICAgICAgICAgICAgICAgIHNwYWNlIC09IDIgKiBtYXJnaW4gKyBzcGFjaW5nWDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHVzZWQgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpICogY291bnRQZXJMaW5lOyBqIDwgTWF0aC5taW4oKGkgKyAxKSAqIGNvdW50UGVyTGluZSwgY291bnQpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjdFNwYWNlID0gdGV4dFdpZHRoc1tqXSAvIHRvdGFsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlJlY3RzW2pdID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlZCArIHNwYWNpbmdYICogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgaSAqIHN0ZXAgKyBzcGFjaW5nWSAqIDAuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlICogcmVjdFNwYWNlICsgMiAqIG1hcmdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCAvIGxpbmVzIC0gc3BhY2luZ1lcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgdXNlZCArPSB0aGlzLnRhYlJlY3RzW2pdWzJdICsgc3BhY2luZ1g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRhYlJlY3RzO1xuICAgIH1cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgZm9jdXMsXG4gICAgICAgICAgICBmb250bmFtZSxcbiAgICAgICAgICAgIGZvbnRzaXplLFxuICAgICAgICAgICAgZm9udGZhY2UsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHRleHRjb2xvcixcbiAgICAgICAgICAgIHRleHRvbmNvbG9yLFxuICAgICAgICAgICAgYWN0aXZldGV4dGNvbG9yLFxuICAgICAgICAgICAgYWN0aXZldGV4dG9uY29sb3IsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgZW51bXMgPSB0aGlzLnBhcmFtcy5lbnVtO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY29uc3QgdGFiUmVjdHMgPSB0aGlzLmdldFRhYlJlY3RzKCk7XG5cbiAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSAwLjU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkJvcmRlckNvbG9yID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW51bXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkJnQ29sb3IgPSBhY3RpdmUgPyAodmFsdWUgPT09IGkgPyBhY3RpdmViZ29uY29sb3IgOiBhY3RpdmViZ2NvbG9yKSA6ICh2YWx1ZSA9PT0gaSA/IGJnb25jb2xvciA6IGJnY29sb3IpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJ1dHRvbkJnQ29sb3I7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgucmVjdCguLi50YWJSZWN0c1tpXSk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYnV0dG9uQm9yZGVyQ29sb3I7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Zm9udGZhY2UgPT09IFwicmVndWxhclwiID8gXCJcIiA6IGZvbnRmYWNlfSAke2ZvbnRzaXplfXB4ICR7Zm9udG5hbWV9LCBzYW5zLXNlcmlmYDtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYWN0aXZlID8gKHZhbHVlID09PSBpID8gYWN0aXZldGV4dG9uY29sb3IgOiBhY3RpdmV0ZXh0Y29sb3IpIDogKHZhbHVlID09PSBpID8gdGV4dG9uY29sb3IgOiB0ZXh0Y29sb3IpO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGVudW1zW2ldLCB0YWJSZWN0c1tpXVswXSArIHRhYlJlY3RzW2ldWzJdICogMC41LCB0YWJSZWN0c1tpXVsxXSArIHRhYlJlY3RzW2ldWzNdICogMC41KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9IChlOiBQb2ludGVyRG93bkV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiUmVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLnRhYlJlY3RzW2ldO1xuICAgICAgICAgICAgaWYgKGUueCA+PSByZWN0WzBdICYmIGUueCA8PSByZWN0WzJdICsgcmVjdFswXSAmJiBlLnkgPj0gcmVjdFsxXSAmJiBlLnkgPD0gcmVjdFszXSArIHJlY3RbMV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCBpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlckRyYWdFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJEb3duKGUpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5pbXBvcnQgeyBmaWxsUm91bmRlZFJlY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5pbnRlcmZhY2UgTGl2ZVRleHRQYXJhbXMgZXh0ZW5kcyBMaXZlUGFyYW1zIHtcbiAgICBmb250bmFtZTogc3RyaW5nO1xuICAgIGZvbnRzaXplOiBudW1iZXI7XG4gICAgZm9udGZhY2U6IFwicmVndWxhclwiIHwgXCJib2xkXCIgfCBcIml0YWxpY1wiIHwgXCJib2xkIGl0YWxpY1wiO1xuICAgIGFjdGl2ZWJnY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmViZ29uY29sb3I6IHN0cmluZztcbiAgICBiZ2NvbG9yOiBzdHJpbmc7XG4gICAgYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dGNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dG9uY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmV0ZXh0Y29sb3I6IHN0cmluZztcbiAgICBhY3RpdmV0ZXh0b25jb2xvcjogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICB0ZXh0b246IHN0cmluZztcbiAgICBtb2RlOiBcImJ1dHRvblwiIHwgXCJ0b2dnbGVcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVRleHQgZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVUZXh0UGFyYW1zPiB7XG4gICAgc3RhdGljIGdldCBwYXJhbXMoKTogTGl2ZVRleHRQYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUudGV4dFwiLFxuICAgICAgICAgICAgd2lkdGg6IDkwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0NSxcbiAgICAgICAgICAgIGZvbnRuYW1lOiBcIkFyaWFsXCIsXG4gICAgICAgICAgICBmb250c2l6ZTogMTAsXG4gICAgICAgICAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZWJnb25jb2xvcjogXCJyZ2JhKDI1NSwgMTgxLCA1MCwgMSlcIixcbiAgICAgICAgICAgIGJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYmdvbmNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRvbmNvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0b25jb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0OiBcIkFcIixcbiAgICAgICAgICAgIHRleHRvbjogXCJCXCIsXG4gICAgICAgICAgICBtb2RlOiBcInRvZ2dsZVwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgZm9jdXMsXG4gICAgICAgICAgICBmb250bmFtZSxcbiAgICAgICAgICAgIGZvbnRzaXplLFxuICAgICAgICAgICAgZm9udGZhY2UsXG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgdGV4dG9uLFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZWJnb25jb2xvcixcbiAgICAgICAgICAgIGJnY29sb3IsXG4gICAgICAgICAgICBiZ29uY29sb3IsXG4gICAgICAgICAgICBib3JkZXJjb2xvcixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0ZXh0Y29sb3IsXG4gICAgICAgICAgICB0ZXh0b25jb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRjb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRvbmNvbG9yLFxuICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcblxuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IDAuNTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjdHgubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQmdDb2xvciA9IGFjdGl2ZSA/ICh2YWx1ZSA/IGFjdGl2ZWJnb25jb2xvciA6IGFjdGl2ZWJnY29sb3IpIDogKHZhbHVlID8gYmdvbmNvbG9yIDogYmdjb2xvcik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkJvcmRlckNvbG9yID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJ1dHRvbkJnQ29sb3I7XG4gICAgICAgIGlmIChtb2RlID09PSBcImJ1dHRvblwiKSB7XG4gICAgICAgICAgICBmaWxsUm91bmRlZFJlY3QoY3R4LCAwLjUsIDAuNSwgd2lkdGggLSAxLCBoZWlnaHQgLSAxLCBoZWlnaHQgKiAwLjUgLSAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5yZWN0KDAuNSwgMC41LCB3aWR0aCAtIDEsIGhlaWdodCAtIDEpO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBjdHgubGluZVdpZHRoID0gMC41O1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBidXR0b25Cb3JkZXJDb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIGN0eC5mb250ID0gYCR7Zm9udGZhY2UgPT09IFwicmVndWxhclwiID8gXCJcIiA6IGZvbnRmYWNlfSAke2ZvbnRzaXplfXB4ICR7Zm9udG5hbWV9LCBzYW5zLXNlcmlmYDtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYWN0aXZlID8gKHZhbHVlID8gYWN0aXZldGV4dG9uY29sb3IgOiBhY3RpdmV0ZXh0Y29sb3IpIDogKHZhbHVlID8gdGV4dG9uY29sb3IgOiB0ZXh0Y29sb3IpO1xuICAgICAgICBjdHguZmlsbFRleHQodmFsdWUgJiYgbW9kZSA9PT0gXCJ0b2dnbGVcIiA/IHRleHRvbiA6IHRleHQsIHdpZHRoICogMC41LCBoZWlnaHQgKiAwLjUpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgbW9kZSB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgICAgICB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCBtb2RlID09PSBcImJ1dHRvblwiID8gMSA6IDEgLSB2YWx1ZSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5wYXJhbXMubW9kZSA9PT0gXCJidXR0b25cIikgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgMCk7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZVRvZ2dsZVBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIGFjdGl2ZWJnY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmViZ29uY29sb3I6IHN0cmluZztcbiAgICBiZ2NvbG9yOiBzdHJpbmc7XG4gICAgYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVUb2dnbGUgZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVUb2dnbGVQYXJhbXM+IHtcbiAgICBzdGF0aWMgZ2V0IHBhcmFtcygpOiBMaXZlVG9nZ2xlUGFyYW1zIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnBhcmFtcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLnRvZ2dsZVwiLFxuICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgaGVpZ2h0OiAxNSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yOiBcInJnYmEoMjU1LCAxODEsIDUwLCAxKVwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBiZ29uY29sb3I6IFwicmdiYSgxOTUsIDE5NSwgMTk1LCAxKVwiLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgZm9jdXMsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcblxuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IDAuNTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjdHgubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQmdDb2xvciA9IGFjdGl2ZSA/ICh2YWx1ZSA/IGFjdGl2ZWJnb25jb2xvciA6IGFjdGl2ZWJnY29sb3IpIDogKHZhbHVlID8gYmdvbmNvbG9yIDogYmdjb2xvcik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkJvcmRlckNvbG9yID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJ1dHRvbkJnQ29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnJlY3QoYm9yZGVyV2lkdGgsIGJvcmRlcldpZHRoLCB3aWR0aCAtIDIgKiBib3JkZXJXaWR0aCwgaGVpZ2h0IC0gMiAqIGJvcmRlcldpZHRoKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYnV0dG9uQm9yZGVyQ29sb3I7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCAxIC0gdmFsdWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBMaXZlQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IExpdmVTbGlkZXIgZnJvbSBcIi4vU2xpZGVyXCI7XG5pbXBvcnQgTGl2ZURpYWwgZnJvbSBcIi4vRGlhbFwiO1xuaW1wb3J0IExpdmVUb2dnbGUgZnJvbSBcIi4vVG9nZ2xlXCI7XG5pbXBvcnQgTGl2ZVRleHQgZnJvbSBcIi4vVGV4dFwiO1xuaW1wb3J0IExpdmVOdW1ib3ggZnJvbSBcIi4vTnVtYm94XCI7XG5pbXBvcnQgTGl2ZVRhYiBmcm9tIFwiLi9UYWJcIjtcblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdmUtYnV0dG9uXCIsIExpdmVCdXR0b24pO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdmUtdG9nZ2xlXCIsIExpdmVUb2dnbGUpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdmUtc2xpZGVyXCIsIExpdmVTbGlkZXIpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdmUtZGlhbFwiLCBMaXZlRGlhbCk7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS10ZXh0XCIsIExpdmVUZXh0KTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXZlLW51bWJveFwiLCBMaXZlTnVtYm94KTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXZlLXRhYlwiLCBMaXZlVGFiKTtcbiIsImV4cG9ydCBjb25zdCB0b01JREkgPSAoZjogbnVtYmVyKSA9PiBbXCJDXCIsIFwiQyNcIiwgXCJEXCIsIFwiRCNcIiwgXCJFXCIsIFwiRlwiLCBcIkYjXCIsIFwiR1wiLCBcIkcjXCIsIFwiQVwiLCBcIkEjXCIsIFwiQlwiXVsoZiAlIDEyICsgMTIpICUgMTJdICsgTWF0aC5yb3VuZChmIC8gMTIgLSAyKTtcbmV4cG9ydCBjb25zdCB0b1JhZCA9IChkZWdyZWVzOiBudW1iZXIpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuZXhwb3J0IGNvbnN0IHJvdW5kZWRSZWN0ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJhZGl1czogbnVtYmVyIHwgbnVtYmVyW10pID0+IHtcbiAgICBjb25zdCByYWRpaSA9IFswLCAwLCAwLCAwXTtcbiAgICBpZiAodHlwZW9mIHJhZGl1cyA9PT0gXCJudW1iZXJcIikgcmFkaWkuZmlsbChyYWRpdXMpO1xuICAgIGVsc2UgcmFkaXVzLmZvckVhY2goKHYsIGkpID0+IHJhZGlpW2ldID0gdik7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHJhZGlpWzBdLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGlpWzFdLCB5KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGlpWzFdKTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGlpWzJdKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGlpWzJdLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKHggKyByYWRpaVszXSwgeSArIGhlaWdodCk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGlpWzNdKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpaVswXSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGlpWzBdLCB5KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xufTtcbmV4cG9ydCBjb25zdCBmaWxsUm91bmRlZFJlY3QgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmFkaXVzOiBudW1iZXIgfCBudW1iZXJbXSkgPT4ge1xuICAgIGNvbnN0IHJhZGlpID0gWzAsIDAsIDAsIDBdO1xuICAgIGlmICh0eXBlb2YgcmFkaXVzID09PSBcIm51bWJlclwiKSByYWRpaS5maWxsKHJhZGl1cyk7XG4gICAgZWxzZSByYWRpdXMuZm9yRWFjaCgodiwgaSkgPT4gcmFkaWlbaV0gPSB2KTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaWlbMF0sIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaWlbMV0sIHkpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaWlbMV0pO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaWlbMl0pO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoIC0gcmFkaWlbMl0sIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCArIHJhZGlpWzNdLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaWlbM10pO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHJhZGlpWzBdKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaWlbMF0sIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=