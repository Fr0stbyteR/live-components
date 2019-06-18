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
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/Button.ts");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ "./src/Slider.ts");
/* harmony import */ var _Dial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dial */ "./src/Dial.ts");
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toggle */ "./src/Toggle.ts");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Text */ "./src/Text.ts");
/* harmony import */ var _Numbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Numbox */ "./src/Numbox.ts");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tab */ "./src/Tab.ts");
/* harmony import */ var _Meter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Meter */ "./src/Meter.ts");








window.customElements.define("live-button", _Button__WEBPACK_IMPORTED_MODULE_0__["default"]);
window.customElements.define("live-toggle", _Toggle__WEBPACK_IMPORTED_MODULE_3__["default"]);
window.customElements.define("live-slider", _Slider__WEBPACK_IMPORTED_MODULE_1__["default"]);
window.customElements.define("live-dial", _Dial__WEBPACK_IMPORTED_MODULE_2__["default"]);
window.customElements.define("live-text", _Text__WEBPACK_IMPORTED_MODULE_4__["default"]);
window.customElements.define("live-numbox", _Numbox__WEBPACK_IMPORTED_MODULE_5__["default"]);
window.customElements.define("live-tab", _Tab__WEBPACK_IMPORTED_MODULE_6__["default"]);
window.customElements.define("live-meter", _Meter__WEBPACK_IMPORTED_MODULE_7__["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9CYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQmFzZS5zY3NzPzdiNzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ2hhbmdlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RpYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01ldGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9OdW1ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NsaWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVGFiLnRzIiwid2VicGFjazovLy8uL3NyYy9UZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9Ub2dnbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6WyJMaXZlQmFzZUNvbXBvbmVudCIsIkhUTUxFbGVtZW50IiwiY29uc3RydWN0b3IiLCJyb290IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImlubmVySFRNTCIsInJlbmRlciIsIkxpdmVDb21wb25lbnQiLCJvYnNlcnZlZEF0dHJpYnV0ZXMiLCJPYmplY3QiLCJrZXlzIiwicGFyYW1zIiwiY2FudmFzIiwiY3R4IiwiaGFuZGxlS2V5RG93biIsImUiLCJoYW5kbGVLZXlVcCIsImhhbmRsZVRvdWNoU3RhcnQiLCJoYW5kbGVXaGVlbCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlTW91c2VEb3duIiwicHJldmVudERlZmF1bHQiLCJmb2N1cyIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJmcm9tWCIsInBhZ2VYIiwibGVmdCIsImZyb21ZIiwicGFnZVkiLCJ0b3AiLCJwcmV2VmFsdWUiLCJ2YWx1ZSIsImhhbmRsZVBvaW50ZXJEb3duIiwieCIsInkiLCJvcmlnaW5hbEV2ZW50IiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlUG9pbnRlckRyYWciLCJtb3ZlbWVudFgiLCJtb3ZlbWVudFkiLCJoYW5kbGVNb3VzZVVwIiwiaGFuZGxlUG9pbnRlclVwIiwiZG9jdW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1vdXNlT3ZlciIsImhhbmRsZU1vdXNlT3V0IiwiaGFuZGxlQ29udGV4dE1lbnUiLCJoYW5kbGVGb2N1c0luIiwicGFpbnQiLCJoYW5kbGVGb2N1c091dCIsInBhc3NpdmUiLCJjaGlsZHJlbiIsImdldENvbnRleHQiLCJkaXNwbGF5VmFsdWUiLCJ0eXBlIiwidW5pdHN0eWxlIiwidW5pdHMiLCJlbnVtIiwidG9GaXhlZCIsIk1hdGgiLCJhYnMiLCJ0b01JREkiLCJmZXRjaEF0dHJpYnV0ZSIsImkiLCJob3N0IiwiYXR0cmlidXRlcyIsImxlbmd0aCIsImF0dHIiLCJuYW1lIiwibWF0Y2giLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJrZXkiLCJvbGRWYWx1ZSIsImlzQ29ubmVjdGVkIiwic2V0UGFyYW1WYWx1ZSIsImNvbm5lY3RlZENhbGxiYWNrIiwiY2hhbmdlIiwic2V0VmFsdWUiLCJkaXNwYXRjaEV2ZW50IiwiTGl2ZUNvbXBvbmVudENoYW5nZUV2ZW50IiwiZGV0YWlsIiwiYWN0aXZlIiwid2lkdGgiLCJoZWlnaHQiLCJzaG9ydG5hbWUiLCJsb25nbmFtZSIsIm9yZGVyIiwibGlua25hbWVzIiwibW1pbiIsIm1tYXgiLCJlbnVtX2ljb25zIiwibW9kbW9kZSIsImluaXRpYWxfZW5hYmxlIiwiaW5pdGlhbCIsImV4cG9uZW50Iiwic3RlcCIsInN0ZXBzIiwic3BlZWRsaW0iLCJkZWZlciIsImludmlzaWJsZSIsIm1hcHBhYmxlIiwiTGl2ZUJ1dHRvbiIsIl9pblRvdWNoIiwiYWN0aXZlYmdjb2xvciIsImFjdGl2ZWJnb25jb2xvciIsImJnY29sb3IiLCJiZ29uY29sb3IiLCJib3JkZXJjb2xvciIsImZvY3VzYm9yZGVyY29sb3IiLCJib3JkZXJXaWR0aCIsInN0eWxlIiwibGluZVdpZHRoIiwiYnV0dG9uQmdDb2xvciIsImJ1dHRvbkJvcmRlckNvbG9yIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiZWxsaXBzZSIsIlBJIiwiZmlsbCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwic2V0VGltZW91dCIsInJlc2V0UG9pbnRlcnMiLCJDdXN0b21FdmVudCIsIkxpdmVEaWFsIiwiaW50ZXJhY3Rpb25SZWN0IiwibmV3VmFsdWUiLCJnZXRWYWx1ZUZyb21EZWx0YSIsImZvbnRuYW1lIiwiZm9udHNpemUiLCJmb250ZmFjZSIsImFwcGVhcmFuY2UiLCJ0cmlhbmdsZSIsInNob3duYW1lIiwic2hvd251bWJlciIsImFjdGl2ZWRpYWxjb2xvciIsImRpYWxjb2xvciIsImFjdGl2ZW5lZWRsZWNvbG9yIiwibmVlZGxlY29sb3IiLCJwYW5lbGNvbG9yIiwidGV4dGNvbG9yIiwidHJpYm9yZGVyY29sb3IiLCJ0cmljb2xvciIsInRydWVTdGVwcyIsImZ1bGwiLCJtYXhTdGVwcyIsIm1pbiIsImZsb29yIiwicm91bmQiLCJkaXN0YW5jZSIsInN0ZXBSYW5nZSIsInRyaWFuZ2xlSGVpZ2h0IiwidHJpYW5nbGVMaW5lV2lkdGgiLCJzdGFydCIsImVuZCIsInZhbFBvcyIsImRpYWxIZWlnaHQiLCJ0b1JhZCIsImRpYWxSYWRpdXMiLCJkaWFsQ2VudGVyWCIsImRpYWxDZW50ZXJZIiwiYXJjU3RhcnRYIiwiY29zIiwiYXJjU3RhcnRZIiwic2luIiwiYXJjRW5kWCIsImFyY0VuZFkiLCJ2YWx1ZVBvc1giLCJ2YWx1ZVBvc1kiLCJlbmRDYXBSYWRpdXMiLCJwYW5lbE9mZnNldCIsInJvdW5kZWRSZWN0IiwiZmlsbFJvdW5kZWRSZWN0IiwiYXJjIiwibWlkcG9pbnQiLCJtb3ZlVG8iLCJsaW5lVG8iLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJ0aW55T2Zmc2V0IiwidGlwUG9zaXRpb25YIiwidGlwUG9zaXRpb25ZIiwicHJldlN0ZXBzIiwiZFN0ZXBzIiwibWF4IiwiTGl2ZU1ldGVyIiwicGFpbnRWYWx1ZSIsIm1heFZhbHVlIiwicGFpbnRUaW1lciIsIm1heFRpbWVyIiwiY2xpcF9zaXplIiwiaW50ZXJ2YWwiLCJvcmllbnRhdGlvbiIsImluYWN0aXZlY29sZGNvbG9yIiwiaW5hY3RpdmV3YXJtY29sb3IiLCJjb2xkY29sb3IiLCJ3YXJtY29sb3IiLCJob3Rjb2xvciIsIm92ZXJsb2FkY29sb3IiLCJhdG9kYiIsInBhaW50SW4iLCJ1bmRlZmluZWQiLCJjbGlwIiwiY2xlYXJUaW1lb3V0Iiwid2FybVN0b3AiLCJob3RTdG9wIiwiZ3JhZGllbnQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsImZpbGxSZWN0IiwiZHJhd0hlaWdodCIsIkxpdmVOdW1ib3giLCJhY3RpdmV0cmljb2xvciIsInRyaWNvbG9yMiIsImFjdGl2ZXRyaWNvbG9yMiIsImFjdGl2ZXNsaWRlcmNvbG9yIiwiY2xvc2VQYXRoIiwidGV4dEJhc2VsaW5lIiwiTGl2ZVNsaWRlciIsImdldFZhbHVlRnJvbVBvcyIsInNsaWRlcmNvbG9yIiwidHJpb25jb2xvciIsInJlbGF0aXZlIiwicGFkZGluZyIsImludGVyYWN0aW9uV2lkdGgiLCJ0cmlPcmlnaW4iLCJMaXZlVGFiIiwidGFiUmVjdHMiLCJ0ZXh0b25jb2xvciIsImFjdGl2ZXRleHRjb2xvciIsImFjdGl2ZXRleHRvbmNvbG9yIiwic3BhY2luZ194Iiwic3BhY2luZ195IiwibXVsdGlsaW5lIiwiZ2V0VGFiUmVjdHMiLCJlbnVtcyIsIm1hcmdpbiIsIm1pbkhlaWdodCIsImNvdW50IiwiY291bnRQZXJMaW5lIiwibGluZXMiLCJyZWN0V2lkdGgiLCJzcGFjaW5nWCIsInNwYWNpbmdZIiwiY2VpbCIsInRleHRXaWR0aHMiLCJ0b3RhbCIsInNwYWNlIiwiaiIsInRleHREaW1lbnNpb25zIiwibWVhc3VyZVRleHQiLCJ1c2VkIiwicmVjdFNwYWNlIiwiTGl2ZVRleHQiLCJ0ZXh0IiwidGV4dG9uIiwiTGl2ZVRvZ2dsZSIsIndpbmRvdyIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiZiIsImRlZ3JlZXMiLCJhIiwibG9nMTAiLCJkYnRvYSIsImRiIiwicmFkaXVzIiwicmFkaWkiLCJmb3JFYWNoIiwidiIsInF1YWRyYXRpY0N1cnZlVG8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFD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R0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVB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c3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGl2ZS1idXR0b24sIGxpdmUtc2xpZGVyLCBsaXZlLWRpYWwsIGxpdmUtdG9nZ2xlLCBsaXZlLXRleHQsIGxpdmUtbnVtYm94LCBsaXZlLXRhYiwgbGl2ZS1tZXRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9CYXNlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQmFzZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9CYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBcIi4vQmFzZS5zY3NzXCI7XG5pbXBvcnQgeyB0b01JREkgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgTGl2ZUNvbXBvbmVudENoYW5nZUV2ZW50IH0gZnJvbSBcIi4vQ2hhbmdlRXZlbnRcIjtcblxuZXhwb3J0IGNsYXNzIExpdmVCYXNlQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHJvb3Q6IFNoYWRvd1Jvb3Q7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcbiAgICAgICAgdGhpcy5yb290LmlubmVySFRNTCA9IHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZUNvbXBvbmVudDxUIGV4dGVuZHMgTGl2ZVBhcmFtcz4gZXh0ZW5kcyBMaXZlQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIHBhcmFtczogTGl2ZVBhcmFtcyA9IHtcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgZm9jdXM6IGZhbHNlLFxuICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgIGhlaWdodDogMTUsXG4gICAgICAgIHNob3J0bmFtZTogXCJcIixcbiAgICAgICAgbG9uZ25hbWU6IFwiXCIsXG4gICAgICAgIG9yZGVyOiAwLFxuICAgICAgICBsaW5rbmFtZXM6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcImZsb2F0XCIsXG4gICAgICAgIG1taW46IDAsXG4gICAgICAgIG1tYXg6IDEsXG4gICAgICAgIGVudW06IFtdLFxuICAgICAgICBlbnVtX2ljb25zOiBbXSxcbiAgICAgICAgbW9kbW9kZTogXCJub25lXCIsXG4gICAgICAgIGluaXRpYWxfZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgaW5pdGlhbDogWzBdLFxuICAgICAgICB1bml0c3R5bGU6IFwiZmxvYXRcIixcbiAgICAgICAgdW5pdHM6IFwiXCIsXG4gICAgICAgIGV4cG9uZW50OiAxLFxuICAgICAgICBzdGVwOiAwLFxuICAgICAgICBzdGVwczogMCxcbiAgICAgICAgc3BlZWRsaW06IDUsXG4gICAgICAgIGRlZmVyOiBmYWxzZSxcbiAgICAgICAgaW52aXNpYmxlOiBcImF1dG9tYXRlZFwiLFxuICAgICAgICBtYXBwYWJsZTogdHJ1ZVxuICAgIH1cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMucGFyYW1zKTtcbiAgICB9XG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwYXJhbXM6IFQ7XG5cbiAgICBoYW5kbGVLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZUtleVVwID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVRvdWNoU3RhcnQgPSAoZTogVG91Y2hFdmVudCkgPT4ge307XG4gICAgaGFuZGxlV2hlZWwgPSAoZTogV2hlZWxFdmVudCkgPT4ge307XG4gICAgaGFuZGxlQ2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlTW91c2VEb3duID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNhbnZhcy5mb2N1cygpO1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGZyb21YID0gZS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgY29uc3QgZnJvbVkgPSBlLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMucGFyYW1zLnZhbHVlO1xuICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJEb3duKHsgeDogZnJvbVgsIHk6IGZyb21ZLCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGUucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyRHJhZyh7IHByZXZWYWx1ZSwgeCwgeSwgZnJvbVgsIGZyb21ZLCBtb3ZlbWVudFg6IGUubW92ZW1lbnRYLCBtb3ZlbWVudFk6IGUubW92ZW1lbnRZLCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBlLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGUucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlclVwKHsgeCwgeSwgb3JpZ2luYWxFdmVudDogZSB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXApO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXApO1xuICAgIH07XG4gICAgaGFuZGxlTW91c2VPdmVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZU1vdXNlT3V0ID0gKGU6IE1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZUNvbnRleHRNZW51ID0gKGU6IE1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVBvaW50ZXJEcmFnID0gKGU6IFBvaW50ZXJEcmFnRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVBvaW50ZXJVcCA9IChlOiBQb2ludGVyVXBFdmVudCkgPT4ge307XG4gICAgaGFuZGxlRm9jdXNJbiA9IChlOiBGb2N1c0V2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMucGFyYW1zLmZvY3VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWludCgpO1xuICAgIH1cbiAgICBoYW5kbGVGb2N1c091dCA9IChlOiBGb2N1c0V2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMucGFyYW1zLmZvY3VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFpbnQoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUtleURvd24pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmhhbmRsZUtleVVwKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHRoaXMuaGFuZGxlV2hlZWwpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuaGFuZGxlTW91c2VEb3duLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgdGhpcy5oYW5kbGVNb3VzZU92ZXIpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCB0aGlzLmhhbmRsZU1vdXNlT3V0KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCB0aGlzLmhhbmRsZUZvY3VzSW4pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCB0aGlzLmhhbmRsZUZvY3VzT3V0KTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLnJvb3QuY2hpbGRyZW5bMF0gYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnBhcmFtcyA9ICh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBMaXZlQ29tcG9uZW50KS5wYXJhbXMgYXMgVDtcbiAgICB9XG4gICAgZ2V0IGRpc3BsYXlWYWx1ZSgpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgdHlwZSwgdW5pdHN0eWxlLCB1bml0cyB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHRoaXMucGFyYW1zLmVudW1bdmFsdWVdO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcImludFwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCgwKTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJmbG9hdFwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJ0aW1lXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiBtc1wiO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcImhlcnR6XCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiBIelwiO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcImRlY2liZWxcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIGRCXCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiJVwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgJVwiO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcInBhblwiKSByZXR1cm4gdmFsdWUgPT09IDAgPyBcIkNcIiA6ICh0eXBlID09PSBcImludFwiID8gTWF0aC5hYnModmFsdWUpIDogTWF0aC5hYnModmFsdWUpLnRvRml4ZWQoMikpICsgKHZhbHVlIDwgMCA/IFwiIExcIiA6IFwiIFJcIik7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwic2VtaXRvbmVzXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiBzdFwiO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcIm1pZGlcIikgcmV0dXJuIHRvTUlESSh2YWx1ZSk7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiY3VzdG9tXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiBcIiArIHVuaXRzO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcIm5hdGl2ZVwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpO1xuICAgICAgICByZXR1cm4gXCJOL0FcIjtcbiAgICB9XG4gICAgZmV0Y2hBdHRyaWJ1dGUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb290Lmhvc3QuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMucm9vdC5ob3N0LmF0dHJpYnV0ZXNbaV07XG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBhdHRyO1xuICAgICAgICAgICAgKHRoaXMucGFyYW1zIGFzIGFueSlbbmFtZV0gPSB2YWx1ZS5tYXRjaCgvXlsrLV0/KFxcZCpcXC4pP1xcZCskLykgPyArdmFsdWUgOiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soa2V5OiBzdHJpbmcsIG9sZFZhbHVlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29ubmVjdGVkKSByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgfHwgdmFsdWUgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRQYXJhbVZhbHVlKGtleSwgdmFsdWUubWF0Y2goL15bKy1dPyhcXGQqXFwuKT9cXGQrJC8pID8gK3ZhbHVlIDogdmFsdWUpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5mZXRjaEF0dHJpYnV0ZSgpO1xuICAgICAgICB0aGlzLnBhaW50KCk7XG4gICAgfVxuICAgIHNldFBhcmFtVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIHRoaXMucGFyYW1zKSkgcmV0dXJuO1xuICAgICAgICAodGhpcy5wYXJhbXMgYXMgYW55KVtrZXldID0gdmFsdWU7XG4gICAgICAgIGlmIChrZXkgPT09IFwidmFsdWVcIikgdGhpcy5jaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5wYWludCgpO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIHZhbHVlKTtcbiAgICB9XG4gICAgY2hhbmdlKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IExpdmVDb21wb25lbnRDaGFuZ2VFdmVudChcImNoYW5nZVwiLCB7IGRldGFpbDogeyB2YWx1ZTogdGhpcy5wYXJhbXMudmFsdWUsIGRpc3BsYXlWYWx1ZTogdGhpcy5kaXNwbGF5VmFsdWUgfSB9KSk7XG4gICAgfVxuICAgIHBhaW50KCkge31cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAnPGNhbnZhcyB0YWJpbmRleD1cIjFcIiBzdHlsZT1cIm91dGxpbmU6IG5vbmU7XCI+PC9jYW52YXM+JztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZUJ1dHRvblBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIGFjdGl2ZWJnY29sb3I6IHN0cmluZztcbiAgICBhY3RpdmViZ29uY29sb3I6IHN0cmluZztcbiAgICBiZ2NvbG9yOiBzdHJpbmc7XG4gICAgYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVCdXR0b24gZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVCdXR0b25QYXJhbXM+IHtcbiAgICBzdGF0aWMgZ2V0IHBhcmFtcygpOiBMaXZlQnV0dG9uUGFyYW1zIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnBhcmFtcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLmJ1dHRvblwiLFxuICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgaGVpZ2h0OiAxNSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yOiBcInJnYmEoMTA5LCAyMTUsIDI1NSwgMSlcIixcbiAgICAgICAgICAgIGJnY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgYmdvbmNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgZm9jdXMsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcblxuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IDAuNTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjdHgubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQmdDb2xvciA9IGFjdGl2ZSA/ICh2YWx1ZSA/IGFjdGl2ZWJnb25jb2xvciA6IGFjdGl2ZWJnY29sb3IpIDogKHZhbHVlID8gYmdvbmNvbG9yIDogYmdjb2xvcik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkJvcmRlckNvbG9yID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJ1dHRvbkJnQ29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmVsbGlwc2Uod2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNSwgd2lkdGggKiAwLjUgLSAyICogYm9yZGVyV2lkdGgsIGhlaWdodCAqIDAuNSAtIDIgKiBib3JkZXJXaWR0aCwgMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBidXR0b25Cb3JkZXJDb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiAhdGhpcy5faW5Ub3VjaCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCAwKSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIDEpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgMCk7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgTGl2ZUNvbXBvbmVudENoYW5nZUV2ZW50IGV4dGVuZHMgQ3VzdG9tRXZlbnQ8eyB2YWx1ZTogbnVtYmVyOyBkaXNwbGF5VmFsdWU6IHN0cmluZyB9PiB7fVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcbmltcG9ydCB7IHRvUmFkLCByb3VuZGVkUmVjdCwgZmlsbFJvdW5kZWRSZWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuaW50ZXJmYWNlIExpdmVEaWFsUGFyYW1zIGV4dGVuZHMgTGl2ZVBhcmFtcyB7XG4gICAgZm9udG5hbWU6IHN0cmluZztcbiAgICBmb250c2l6ZTogbnVtYmVyO1xuICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBzaG93bmFtZTogYm9vbGVhbjtcbiAgICBzaG93bnVtYmVyOiBib29sZWFuO1xuICAgIGFwcGVhcmFuY2U6IFwidmVydGljYWxcIiB8IFwidGlueVwiIHwgXCJwYW5lbFwiO1xuICAgIHRyaWFuZ2xlOiBib29sZWFuO1xuICAgIGJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZWRpYWxjb2xvcjogc3RyaW5nO1xuICAgIGRpYWxjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZW5lZWRsZWNvbG9yOiBzdHJpbmc7XG4gICAgbmVlZGxlY29sb3I6IHN0cmluZztcbiAgICBwYW5lbGNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dGNvbG9yOiBzdHJpbmc7XG4gICAgdHJpYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICB0cmljb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlRGlhbCBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZURpYWxQYXJhbXM+IHtcbiAgICBzdGF0aWMgZ2V0IHBhcmFtcygpOiBMaXZlRGlhbFBhcmFtcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wYXJhbXMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS5kaWFsXCIsXG4gICAgICAgICAgICB3aWR0aDogNDUsXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1LFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMixcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIHRyaWFuZ2xlOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3duYW1lOiB0cnVlLFxuICAgICAgICAgICAgc2hvd251bWJlcjogdHJ1ZSxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlZGlhbGNvbG9yOiBcInJnYmEoMTA5LCAyMTUsIDI1NSwgMSlcIixcbiAgICAgICAgICAgIGRpYWxjb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmVuZWVkbGVjb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICBuZWVkbGVjb2xvcjogXCJyZ2JhKDEwNSwgMTA1LCAxMDUsIDEpXCIsXG4gICAgICAgICAgICBwYW5lbGNvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmlib3JkZXJjb2xvcjogXCJyZ2JhKDUwLCA1MCwgNTAsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICBtbWluOiAwLFxuICAgICAgICAgICAgbW1heDogMTI3LFxuICAgICAgICAgICAgdHlwZTogXCJpbnRcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBfaW5Ub3VjaDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGludGVyYWN0aW9uUmVjdDogbnVtYmVyW10gPSBbMCwgMCwgMCwgMF07XG5cbiAgICBnZXQgdHJ1ZVN0ZXBzKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHN0ZXBzLCBzdGVwIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgZnVsbCA9IDEwMDtcbiAgICAgICAgY29uc3QgbWF4U3RlcHMgPSB0eXBlID09PSBcImVudW1cIiA/IHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IG1tYXggLSBtbWluIDogZnVsbDtcbiAgICAgICAgaWYgKHN0ZXApIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBNYXRoLnJvdW5kKHN0ZXApKSwgbWF4U3RlcHMpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIHN0ZXApLCBtYXhTdGVwcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ZXBzKSByZXR1cm4gTWF0aC5taW4oc3RlcHMsIG1heFN0ZXBzKTtcbiAgICAgICAgcmV0dXJuIG1heFN0ZXBzO1xuICAgIH1cbiAgICBnZXQgZGlzdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgdmFsdWUgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gXCJlbnVtXCIgPyB2YWx1ZSAvIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogKHZhbHVlIC0gbW1pbikgLyAobW1heCAtIG1taW4pO1xuICAgIH1cbiAgICBnZXQgc3RlcFJhbmdlKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHN0ZXAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBmdWxsID0gMTAwO1xuICAgICAgICBpZiAoc3RlcCkgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gZnVsbCAvIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IE1hdGgucm91bmQoc3RlcCkgLyAobW1heCAtIG1taW4pICogZnVsbCA6IHN0ZXAgLyAobW1heCAtIG1taW4pICogZnVsbDtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIHJldHVybiBmdWxsIC8gdHJ1ZVN0ZXBzO1xuICAgIH1cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIGFwcGVhcmFuY2UsXG4gICAgICAgICAgICB0cmlhbmdsZSxcbiAgICAgICAgICAgIHNob3duYW1lLFxuICAgICAgICAgICAgc2hvd251bWJlcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHBhbmVsY29sb3IsXG4gICAgICAgICAgICBhY3RpdmVuZWVkbGVjb2xvcixcbiAgICAgICAgICAgIG5lZWRsZWNvbG9yLFxuICAgICAgICAgICAgYWN0aXZlZGlhbGNvbG9yLFxuICAgICAgICAgICAgZGlhbGNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0cmljb2xvcixcbiAgICAgICAgICAgIHNob3J0bmFtZVxuICAgICAgICB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2U7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcblxuXG4gICAgICAgIGNvbnN0IHRyaWFuZ2xlSGVpZ2h0ID0gNDtcbiAgICAgICAgY29uc3QgdHJpYW5nbGVMaW5lV2lkdGggPSAwLjY7XG5cbiAgICAgICAgbGV0IHN0YXJ0OiBudW1iZXI7XG4gICAgICAgIGxldCBlbmQ6IG51bWJlcjtcbiAgICAgICAgbGV0IHZhbFBvczogbnVtYmVyO1xuICAgICAgICBsZXQgZGlhbEhlaWdodDogbnVtYmVyO1xuXG4gICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInRpbnlcIikge1xuICAgICAgICAgICAgZGlhbEhlaWdodCA9IDE4O1xuICAgICAgICAgICAgc3RhcnQgPSAtMyAqIE1hdGguUEkgKiAwLjU7XG4gICAgICAgICAgICBlbmQgPSAwO1xuICAgICAgICAgICAgdmFsUG9zID0gc3RhcnQgKyB0b1JhZCh0aGlzLmRpc3RhbmNlICogMjcwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpYWxIZWlnaHQgPSAyNTtcbiAgICAgICAgICAgIHN0YXJ0ID0gTWF0aC5QSSAtIDMgKiBNYXRoLlBJIC8gODtcbiAgICAgICAgICAgIGVuZCA9IDIgKiBNYXRoLlBJICsgMyAqIE1hdGguUEkgLyA4O1xuICAgICAgICAgICAgdmFsUG9zID0gc3RhcnQgKyB0b1JhZCh0aGlzLmRpc3RhbmNlICogMzE1KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkaWFsUmFkaXVzID0gZGlhbEhlaWdodCAqIDAuNTtcblxuICAgICAgICBsZXQgZGlhbENlbnRlclggPSB3aWR0aCAqIDAuNTtcbiAgICAgICAgbGV0IGRpYWxDZW50ZXJZID0gaGVpZ2h0ICogMC41ICsgMTtcbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwicGFuZWxcIikge1xuICAgICAgICAgICAgZGlhbENlbnRlclkgKz0gMTA7XG4gICAgICAgIH0gZWxzZSBpZiAoYXBwZWFyYW5jZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICBpZiAoc2hvd251bWJlcikgZGlhbENlbnRlclkgLT0gZm9udHNpemUgLSA1O1xuICAgICAgICAgICAgaWYgKHNob3duYW1lKSBkaWFsQ2VudGVyWSArPSBmb250c2l6ZSAtIDU7XG4gICAgICAgICAgICBpZiAodHJpYW5nbGUpIGRpYWxDZW50ZXJZICs9IHRyaWFuZ2xlSGVpZ2h0IC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChhcHBlYXJhbmNlID09PSBcInRpbnlcIikge1xuICAgICAgICAgICAgaWYgKHNob3duYW1lKSB7XG4gICAgICAgICAgICAgICAgZGlhbENlbnRlclkgKz0gNjtcbiAgICAgICAgICAgICAgICBkaWFsQ2VudGVyWCA9IDEwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0ID0gWzAsIGRpYWxDZW50ZXJZIC0gZGlhbEhlaWdodCAqIDAuNSwgd2lkdGgsIGRpYWxIZWlnaHRdO1xuICAgICAgICBjb25zdCBhcmNTdGFydFggPSBkaWFsQ2VudGVyWCArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5jb3Moc3RhcnQpKTtcbiAgICAgICAgY29uc3QgYXJjU3RhcnRZID0gZGlhbENlbnRlclkgKyAoZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguc2luKHN0YXJ0KSk7XG4gICAgICAgIGNvbnN0IGFyY0VuZFggPSBkaWFsQ2VudGVyWCArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5jb3MoZW5kKSk7XG4gICAgICAgIGNvbnN0IGFyY0VuZFkgPSBkaWFsQ2VudGVyWSArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5zaW4oZW5kKSk7XG4gICAgICAgIGNvbnN0IHZhbHVlUG9zWCA9IGRpYWxDZW50ZXJYICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLmNvcyh2YWxQb3MpKTtcbiAgICAgICAgY29uc3QgdmFsdWVQb3NZID0gZGlhbENlbnRlclkgKyAoZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguc2luKHZhbFBvcykpO1xuICAgICAgICBjb25zdCBlbmRDYXBSYWRpdXMgPSAxO1xuICAgICAgICBjb25zdCBsaW5lV2lkdGggPSAyO1xuICAgICAgICBsZXQgcGFuZWxPZmZzZXQgPSAwO1xuXG4gICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInBhbmVsXCIpIHtcbiAgICAgICAgICAgIHBhbmVsT2Zmc2V0ID0gNTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGZvY3VzID8gZm9jdXNib3JkZXJjb2xvciA6IGJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDAuNDtcbiAgICAgICAgICAgIHJvdW5kZWRSZWN0KGN0eCwgMSwgMSwgd2lkdGggLSAyLCBoZWlnaHQgLSAyLCA1KTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBwYW5lbGNvbG9yO1xuICAgICAgICAgICAgZmlsbFJvdW5kZWRSZWN0KGN0eCwgMS4yLCAxLjIsIHdpZHRoIC0gMi40LCAzMCAtIDAuNCwgWzUsIDUsIDAsIDBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGFjdGl2ZSA/IGFjdGl2ZW5lZWRsZWNvbG9yIDogbmVlZGxlY29sb3I7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjdHguc3Ryb2tlU3R5bGU7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgIC8vIGRyYXcgYmFja2dyb3VuZCBhcmMgZW5kY2Fwc1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoYXJjU3RhcnRYLCBhcmNTdGFydFksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoYXJjRW5kWCwgYXJjRW5kWSwgZW5kQ2FwUmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIC8vIGRyYXcgYmFja2dyb3VuZCBhcmNcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSwgZGlhbFJhZGl1cywgc3RhcnQsIGVuZCk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAvLyBkcmF3IHZhbHVlIGFyYywgd2hpY2ggY2hhbmdlcyBpZiB0cmlhbmdsZSBpcyBlbmFibGVkXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGFjdGl2ZSA/IGFjdGl2ZWRpYWxjb2xvciA6IGRpYWxjb2xvcjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGN0eC5zdHJva2VTdHlsZTtcbiAgICAgICAgaWYgKHRyaWFuZ2xlKSB7XG4gICAgICAgICAgICBjb25zdCBtaWRwb2ludCA9IChzdGFydCArIGVuZCkgKiAwLjU7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBhY3RpdmUgPyBhY3RpdmVkaWFsY29sb3IgOiBkaWFsY29sb3I7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiAwLjUpIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBkaWFsUmFkaXVzLCBtaWRwb2ludCwgdmFsUG9zKTtcbiAgICAgICAgICAgIGVsc2UgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGRpYWxSYWRpdXMsIHZhbFBvcywgbWlkcG9pbnQpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZHJhdyB2YWx1ZSBhcmMgZW5kY2FwXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKGFyY1N0YXJ0WCwgYXJjU3RhcnRZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICAvLyBkcmF3IHZhbHVlIGFyY1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGRpYWxSYWRpdXMsIHN0YXJ0LCB2YWxQb3MpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXcgZGlhbFxuICAgICAgICAvLyBkcmF3IGRpYWwgcm91bmQgZW5kY2Fwc1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBhY3RpdmUgPyBhY3RpdmVuZWVkbGVjb2xvciA6IG5lZWRsZWNvbG9yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3R4LnN0cm9rZVN0eWxlO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHZhbHVlUG9zWCwgdmFsdWVQb3NZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gZHJhdyBkaWFsIGxpbmVcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSk7XG4gICAgICAgIGN0eC5saW5lVG8odmFsdWVQb3NYLCB2YWx1ZVBvc1kpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIGFkZCB0ZXh0IGlmIGl0IGlzIGVuYWJsZWRcbiAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICBpZiAoc2hvd25hbWUpIHtcbiAgICAgICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInRpbnlcIikge1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoc2hvcnRuYW1lLCAwLCBwYW5lbE9mZnNldCArIGZvbnRzaXplLCB3aWR0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChzaG9ydG5hbWUsIHdpZHRoICogMC41LCBwYW5lbE9mZnNldCArIGZvbnRzaXplLCB3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dudW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbnlPZmZzZXQgPSBhcHBlYXJhbmNlID09PSBcInRpbnlcIiA/IDEyIDogMDtcbiAgICAgICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInRpbnlcIikge1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5kaXNwbGF5VmFsdWUsIHRpbnlPZmZzZXQsIGhlaWdodCAtIHBhbmVsT2Zmc2V0LCB3aWR0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmRpc3BsYXlWYWx1ZSwgd2lkdGggKiAwLjUsIGhlaWdodCAtIHBhbmVsT2Zmc2V0LCB3aWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZHJhdyB0cmlhbmdsZSBpZiBpdCBpcyBlbmFibGVkXG4gICAgICAgIGlmICh0cmlhbmdsZSkge1xuICAgICAgICAgICAgaWYgKCFkaXN0YW5jZSkgY3R4LmZpbGxTdHlsZSA9IHRyaWNvbG9yO1xuICAgICAgICAgICAgZWxzZSBpZiAoIWFjdGl2ZSkgY3R4LmZpbGxTdHlsZSA9IGRpYWxjb2xvcjtcbiAgICAgICAgICAgIGVsc2UgY3R4LmZpbGxTdHlsZSA9IGFjdGl2ZWRpYWxjb2xvcjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInRpbnlcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpcFBvc2l0aW9uWCA9IGRpYWxDZW50ZXJYICsgZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguY29zKC0zICogTWF0aC5QSSAvIDQpIC0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXBQb3NpdGlvblkgPSBkaWFsQ2VudGVyWSArIGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLnNpbigtMyAqIE1hdGguUEkgLyA0KSAtIDE7XG4gICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyh0aXBQb3NpdGlvblgsIHRpcFBvc2l0aW9uWSk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh0aXBQb3NpdGlvblggLSB0cmlhbmdsZUhlaWdodCwgdGlwUG9zaXRpb25ZKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHRpcFBvc2l0aW9uWCwgdGlwUG9zaXRpb25ZIC0gdHJpYW5nbGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odGlwUG9zaXRpb25YLCB0aXBQb3NpdGlvblkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSAtIGRpYWxSYWRpdXMgLSAxKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKGRpYWxDZW50ZXJYIC0gdHJpYW5nbGVIZWlnaHQsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhkaWFsQ2VudGVyWCArIHRyaWFuZ2xlSGVpZ2h0LCBkaWFsQ2VudGVyWSAtIGRpYWxSYWRpdXMgLSAxIC0gdHJpYW5nbGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRyaWJvcmRlcmNvbG9yIHx8IFwidHJhbnNwYXJlbnRcIjtcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSB0cmlhbmdsZUxpbmVXaWR0aDtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRWYWx1ZUZyb21EZWx0YShlOiBQb2ludGVyRHJhZ0V2ZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1pbiwgbW1heCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IHN0ZXBSYW5nZSA9IHRoaXMuc3RlcFJhbmdlO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgY29uc3Qgc3RlcCA9IHR5cGUgPT09IFwiZW51bVwiID8gMSA6ICh0aGlzLnBhcmFtcy5zdGVwIHx8IChtbWF4IC0gbW1pbikgLyB0cnVlU3RlcHMpO1xuICAgICAgICBjb25zdCBwcmV2U3RlcHMgPSB0eXBlID09PSBcImVudW1cIiA/IGUucHJldlZhbHVlIDogZS5wcmV2VmFsdWUgLyBzdGVwO1xuICAgICAgICBjb25zdCBkU3RlcHMgPSBNYXRoLnJvdW5kKChlLmZyb21ZIC0gZS55KSAvIHN0ZXBSYW5nZSk7XG4gICAgICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5taW4odHJ1ZVN0ZXBzLCBNYXRoLm1heCgwLCBwcmV2U3RlcHMgKyBkU3RlcHMpKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gc3RlcHM7XG4gICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5yb3VuZChzdGVwcyAqIHN0ZXAgKyBtbWluKTtcbiAgICAgICAgcmV0dXJuIHN0ZXBzICogc3RlcCArIG1taW47XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZS54IDwgdGhpcy5pbnRlcmFjdGlvblJlY3RbMF1cbiAgICAgICAgICAgIHx8IGUueCA+IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl1cbiAgICAgICAgICAgIHx8IGUueSA8IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdXG4gICAgICAgICAgICB8fCBlLnkgPiB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdXG4gICAgICAgICkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlckRyYWdFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2luVG91Y2gpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbURlbHRhKGUpO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMucGFyYW1zLnZhbHVlKSB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCBuZXdWYWx1ZSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcbmltcG9ydCB7IGF0b2RiIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuaW50ZXJmYWNlIExpdmVNZXRlclBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIgfCBcImhvcml6b250YWxcIjtcbiAgICBtb2RlOiBcImRlY2liZWxcIiB8IFwibGluZWFyXCI7XG4gICAgY2xpcF9zaXplOiBcIm5vcm1hbFwiIHwgXCJleHRlbmRlZFwiO1xuICAgIGludGVydmFsOiBudW1iZXI7XG4gICAgYmdjb2xvcjogc3RyaW5nO1xuICAgIGluYWN0aXZlY29sZGNvbG9yOiBzdHJpbmc7XG4gICAgaW5hY3RpdmV3YXJtY29sb3I6IHN0cmluZztcbiAgICBjb2xkY29sb3I6IHN0cmluZztcbiAgICB3YXJtY29sb3I6IHN0cmluZztcbiAgICBob3Rjb2xvcjogc3RyaW5nO1xuICAgIG92ZXJsb2FkY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZU1ldGVyIGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlTWV0ZXJQYXJhbXM+IHtcbiAgICBzdGF0aWMgZ2V0IHBhcmFtcygpOiBMaXZlTWV0ZXJQYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUubWV0ZXJ+XCIsXG4gICAgICAgICAgICB3aWR0aDogMTIwLFxuICAgICAgICAgICAgaGVpZ2h0OiAxNSxcbiAgICAgICAgICAgIG1vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICBjbGlwX3NpemU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBpbnRlcnZhbDogMjAsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICBpbmFjdGl2ZWNvbGRjb2xvcjogXCJyZ2JhKDEzMCwgMTMwLCAxMzAsIDEpXCIsXG4gICAgICAgICAgICBpbmFjdGl2ZXdhcm1jb2xvcjogXCJyZ2JhKDE0OSwgMTQ5LCAxNDksIDEpXCIsXG4gICAgICAgICAgICBjb2xkY29sb3I6IFwicmdiYSgxMiwgMjQ4LCAxMDAsIDEpXCIsXG4gICAgICAgICAgICB3YXJtY29sb3I6IFwicmdiYSgxOTUsIDI0OCwgMTAwLCAxKVwiLFxuICAgICAgICAgICAgaG90Y29sb3I6IFwicmdiYSgyNTUsIDE5MywgMTAsIDEpXCIsXG4gICAgICAgICAgICBvdmVybG9hZGNvbG9yOiBcInJnYmEoMjU1LCAxMCwgMTAsIDEpXCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcGFpbnRWYWx1ZTogbnVtYmVyID0gMDtcbiAgICBtYXhWYWx1ZTogbnVtYmVyID0gMDtcbiAgICBwYWludFRpbWVyOiBudW1iZXI7XG4gICAgbWF4VGltZXI6IG51bWJlcjtcbiAgICBnZXQgZGlzdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHsgbW9kZSwgdmFsdWUgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICByZXR1cm4gKG1vZGUgPT09IFwiZGVjaWJlbFwiID8gTWF0aC5tYXgoLTcwLCB2YWx1ZSkgOiBhdG9kYihNYXRoLmFicyh2YWx1ZSkpKSAvIDcwICsgMTtcbiAgICB9XG5cbiAgICBwYWludChwYWludEluPzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnBhaW50VmFsdWUgPSBNYXRoLm1heCh0aGlzLnBhaW50VmFsdWUsIHRoaXMuZGlzdGFuY2UpO1xuICAgICAgICBpZiAoIXBhaW50SW4pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wYWludFRpbWVyKSB0aGlzLnBhaW50VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucGFpbnQodHJ1ZSksIHRoaXMucGFyYW1zLmludGVydmFsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhaW50VGltZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgICAgICBjbGlwX3NpemUsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgaW5hY3RpdmVjb2xkY29sb3IsXG4gICAgICAgICAgICBpbmFjdGl2ZXdhcm1jb2xvcixcbiAgICAgICAgICAgIGNvbGRjb2xvcixcbiAgICAgICAgICAgIHdhcm1jb2xvcixcbiAgICAgICAgICAgIGhvdGNvbG9yLFxuICAgICAgICAgICAgb3ZlcmxvYWRjb2xvclxuICAgICAgICB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIGNvbnN0IGNsaXAgPSBjbGlwX3NpemUgPT09IFwibm9ybWFsXCIgPyAxMCA6IDIwO1xuICAgICAgICBjb25zdCBwYWludFZhbHVlID0gdGhpcy5wYWludFZhbHVlO1xuICAgICAgICBpZiAocGFpbnRWYWx1ZSA+IHRoaXMubWF4VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubWF4VmFsdWUgPSBwYWludFZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMubWF4VGltZXIpIGNsZWFyVGltZW91dCh0aGlzLm1heFRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMubWF4VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMubWF4VmFsdWUgPSB0aGlzLnBhaW50VmFsdWUsIDEwMDApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1heFZhbHVlID0gdGhpcy5tYXhWYWx1ZTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHdhcm1TdG9wID0gd2lkdGggLSBjbGlwIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IGhvdFN0b3AgPSB3aWR0aCAtIGNsaXA7XG4gICAgICAgICAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCB3aWR0aCwgMCk7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgYWN0aXZlID8gY29sZGNvbG9yIDogaW5hY3RpdmVjb2xkY29sb3IpO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKHdhcm1TdG9wIC8gd2lkdGgsIGFjdGl2ZSA/IHdhcm1jb2xvciA6IGluYWN0aXZld2FybWNvbG9yKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChob3RTdG9wIC8gd2lkdGgsIGFjdGl2ZSA/IGhvdGNvbG9yIDogaW5hY3RpdmV3YXJtY29sb3IpO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGFjdGl2ZSA/IG92ZXJsb2FkY29sb3IgOiBpbmFjdGl2ZXdhcm1jb2xvcik7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYmdjb2xvcjtcbiAgICAgICAgICAgIGlmIChwYWludFZhbHVlIDwgMSkgY3R4LmZpbGxSZWN0KDAsIDAsIHdhcm1TdG9wLCBoZWlnaHQpO1xuICAgICAgICAgICAgaWYgKHBhaW50VmFsdWUgPCAyKSBjdHguZmlsbFJlY3QoaG90U3RvcCwgMCwgY2xpcCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICAgICAgICAgIGlmIChwYWludFZhbHVlID4gMCkgY3R4LmZpbGxSZWN0KDAsIDAsIE1hdGgubWluKDEsIHBhaW50VmFsdWUpICogd2FybVN0b3AsIGhlaWdodCk7XG4gICAgICAgICAgICBpZiAocGFpbnRWYWx1ZSA+IDEpIGN0eC5maWxsUmVjdChob3RTdG9wLCAwLCBNYXRoLm1pbigxLCAocGFpbnRWYWx1ZSAtIDEpICogMTApICogY2xpcCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGlmIChtYXhWYWx1ZSA+IHBhaW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4VmFsdWUgPD0gMSkgY3R4LmZpbGxSZWN0KE1hdGgubWluKHdhcm1TdG9wIC0gMSwgbWF4VmFsdWUgKiB3YXJtU3RvcCksIDAsIDEsIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgaWYgKG1heFZhbHVlID4gMSkgY3R4LmZpbGxSZWN0KE1hdGgubWluKHdpZHRoIC0gMSwgaG90U3RvcCArIChtYXhWYWx1ZSAtIDEpICogMTAgKiBjbGlwKSwgMCwgMSwgaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHdhcm1TdG9wID0gY2xpcCArIDE7XG4gICAgICAgICAgICBjb25zdCBob3RTdG9wID0gY2xpcDtcbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIGhlaWdodCwgMCwgMCk7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgYWN0aXZlID8gY29sZGNvbG9yIDogaW5hY3RpdmVjb2xkY29sb3IpO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKChoZWlnaHQgLSB3YXJtU3RvcCkgLyBoZWlnaHQsIGFjdGl2ZSA/IHdhcm1jb2xvciA6IGluYWN0aXZld2FybWNvbG9yKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgoaGVpZ2h0IC0gaG90U3RvcCkgLyBoZWlnaHQsIGFjdGl2ZSA/IGhvdGNvbG9yIDogaW5hY3RpdmV3YXJtY29sb3IpO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGFjdGl2ZSA/IG92ZXJsb2FkY29sb3IgOiBpbmFjdGl2ZXdhcm1jb2xvcik7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYmdjb2xvcjtcbiAgICAgICAgICAgIGlmIChwYWludFZhbHVlIDwgMSkgY3R4LmZpbGxSZWN0KDAsIHdhcm1TdG9wLCB3aWR0aCwgaGVpZ2h0IC0gd2FybVN0b3ApO1xuICAgICAgICAgICAgaWYgKHBhaW50VmFsdWUgPCAyKSBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhvdFN0b3ApO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgICAgICAgaWYgKHBhaW50VmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZHJhd0hlaWdodCA9IE1hdGgubWluKDEsIHBhaW50VmFsdWUpICogKGhlaWdodCAtIHdhcm1TdG9wKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgaGVpZ2h0IC0gZHJhd0hlaWdodCwgd2lkdGgsIGRyYXdIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhaW50VmFsdWUgPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZHJhd0hlaWdodCA9IE1hdGgubWluKDEsIChwYWludFZhbHVlIC0gMSkgKiAxMCkgKiBjbGlwO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCBob3RTdG9wIC0gZHJhd0hlaWdodCwgd2lkdGgsIGRyYXdIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1heFZhbHVlID4gcGFpbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChtYXhWYWx1ZSA8PSAxKSBjdHguZmlsbFJlY3QoMCwgaGVpZ2h0IC0gbWF4VmFsdWUgKiAoaGVpZ2h0IC0gd2FybVN0b3ApLCB3aWR0aCwgMSk7XG4gICAgICAgICAgICAgICAgaWYgKG1heFZhbHVlID4gMSkgY3R4LmZpbGxSZWN0KDAsIE1hdGgubWF4KDAsIGhvdFN0b3AgLSAobWF4VmFsdWUgLSAxKSAqIDEwICogY2xpcCksIHdpZHRoLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhaW50VmFsdWUgPSAwO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5cbmludGVyZmFjZSBMaXZlTnVtYm94UGFyYW1zIGV4dGVuZHMgTGl2ZVBhcmFtcyB7XG4gICAgZm9udG5hbWU6IHN0cmluZztcbiAgICBmb250c2l6ZTogbnVtYmVyO1xuICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBhcHBlYXJhbmNlOiBcInNsaWRlclwiIHwgXCJ0cmlhbmdsZVwiIHwgXCJkZWZhdWx0XCI7XG4gICAgYWN0aXZlYmdjb2xvcjogc3RyaW5nO1xuICAgIGJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRleHRjb2xvcjogc3RyaW5nO1xuICAgIHRyaWNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZldHJpY29sb3I6IHN0cmluZztcbiAgICB0cmljb2xvcjI6IHN0cmluZztcbiAgICBhY3RpdmV0cmljb2xvcjI6IHN0cmluZztcbiAgICBhY3RpdmVzbGlkZXJjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlTnVtYm94IGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlTnVtYm94UGFyYW1zPiB7XG4gICAgc3RhdGljIGdldCBwYXJhbXMoKTogTGl2ZU51bWJveFBhcmFtcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wYXJhbXMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS5udW1ib3hcIixcbiAgICAgICAgICAgIHdpZHRoOiA0NSxcbiAgICAgICAgICAgIGhlaWdodDogMTUsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEwLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgYXBwZWFyYW5jZTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXRyaWNvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yMjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0cmljb2xvcjI6IFwicmdiYSgxMDksIDIxNSwgMjU1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlc2xpZGVyY29sb3I6IFwicmdiYSgxMDksIDIxNSwgMjU1LCAxKVwiLFxuICAgICAgICAgICAgbW1pbjogMCxcbiAgICAgICAgICAgIG1tYXg6IDEyNyxcbiAgICAgICAgICAgIHR5cGU6IFwiaW50XCIsXG4gICAgICAgICAgICB1bml0c3R5bGU6IFwiaW50XCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGdldCB0cnVlU3RlcHMoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgc3RlcHMsIHN0ZXAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBmdWxsID0gMTAwO1xuICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gbW1heCAtIG1taW4gOiBmdWxsO1xuICAgICAgICBpZiAoc3RlcCkge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIE1hdGgucm91bmQoc3RlcCkpLCBtYXhTdGVwcyk7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5mbG9vcigobW1heCAtIG1taW4pIC8gc3RlcCksIG1heFN0ZXBzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RlcHMpIHJldHVybiBNYXRoLm1pbihzdGVwcywgbWF4U3RlcHMpO1xuICAgICAgICByZXR1cm4gbWF4U3RlcHM7XG4gICAgfVxuICAgIGdldCBkaXN0YW5jZSgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCB2YWx1ZSB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IHZhbHVlIC8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiAodmFsdWUgLSBtbWluKSAvIChtbWF4IC0gbW1pbik7XG4gICAgfVxuICAgIGdldCBzdGVwUmFuZ2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgc3RlcCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGZ1bGwgPSAxMDA7XG4gICAgICAgIGlmIChzdGVwKSByZXR1cm4gdHlwZSA9PT0gXCJlbnVtXCIgPyBmdWxsIC8gdGhpcy5wYXJhbXMuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gTWF0aC5yb3VuZChzdGVwKSAvIChtbWF4IC0gbW1pbikgKiBmdWxsIDogc3RlcCAvIChtbWF4IC0gbW1pbikgKiBmdWxsO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgcmV0dXJuIGZ1bGwgLyB0cnVlU3RlcHM7XG4gICAgfVxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgIGZvY3VzLFxuICAgICAgICAgICAgZm9udG5hbWUsXG4gICAgICAgICAgICBmb250c2l6ZSxcbiAgICAgICAgICAgIGZvbnRmYWNlLFxuICAgICAgICAgICAgYXBwZWFyYW5jZSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBib3JkZXJjb2xvcixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0ZXh0Y29sb3IsXG4gICAgICAgICAgICB0cmljb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZXRyaWNvbG9yLFxuICAgICAgICAgICAgdHJpY29sb3IyLFxuICAgICAgICAgICAgYWN0aXZldHJpY29sb3IyLFxuICAgICAgICAgICAgYWN0aXZlc2xpZGVyY29sb3JcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlO1xuICAgICAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSB0aGlzLmRpc3BsYXlWYWx1ZTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIC8vIGRyYXcgYmFja2dyb3VuZFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYWN0aXZlYmdjb2xvcjtcbiAgICAgICAgY3R4LnJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgLy8gZHJhdyBib3JkZXIgKGV2ZW50dWFsbHkgd2UgbWlnaHQgbmVlZCB0byByZWRlZmluZSB0aGUgc2hhcGUpXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBmb2N1cyA/IGZvY3VzYm9yZGVyY29sb3IgOiBib3JkZXJjb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInNsaWRlclwiICYmIGFjdGl2ZSAmJiBkaXN0YW5jZSkge1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGFjdGl2ZXNsaWRlcmNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAuNSwgMC41LCBkaXN0YW5jZSAqIHdpZHRoIC0gMSwgaGVpZ2h0IC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidHJpYW5nbGVcIikge1xuICAgICAgICAgICAgY29uc3QgdHJpYW5nbGVIZWlnaHQgPSA4O1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGFjdGl2ZSA/IChkaXN0YW5jZSA/IGFjdGl2ZXRyaWNvbG9yMiA6IGFjdGl2ZXRyaWNvbG9yKSA6IChkaXN0YW5jZSA/IHRyaWNvbG9yMiA6IHRyaWNvbG9yKTtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8od2lkdGggLSB0cmlhbmdsZUhlaWdodCAtIDAuNSwgaGVpZ2h0ICogMC41KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8od2lkdGggLSAwLjUsIDAuNSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoIC0gMC41LCBoZWlnaHQgLSAwLjUpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkaXNwbGF5IHRoZSB0ZXh0XG4gICAgICAgIGN0eC5mb250ID0gYCR7Zm9udGZhY2UgPT09IFwicmVndWxhclwiID8gXCJcIiA6IGZvbnRmYWNlfSAke2ZvbnRzaXplfXB4ICR7Zm9udG5hbWV9LCBzYW5zLXNlcmlmYDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRleHRjb2xvcjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICBjdHguZmlsbFRleHQoZGlzcGxheVZhbHVlLCB3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41LCB3aWR0aCk7XG4gICAgfVxuICAgIGdldFZhbHVlRnJvbURlbHRhKGU6IFBvaW50ZXJEcmFnRXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWluLCBtbWF4IH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3Qgc3RlcFJhbmdlID0gdGhpcy5zdGVwUmFuZ2U7XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICBjb25zdCBzdGVwID0gdHlwZSA9PT0gXCJlbnVtXCIgPyAxIDogKHRoaXMucGFyYW1zLnN0ZXAgfHwgKG1tYXggLSBtbWluKSAvIHRydWVTdGVwcyk7XG4gICAgICAgIGNvbnN0IHByZXZTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gZS5wcmV2VmFsdWUgOiBlLnByZXZWYWx1ZSAvIHN0ZXA7XG4gICAgICAgIGNvbnN0IGRTdGVwcyA9IE1hdGgucm91bmQoKGUuZnJvbVkgLSBlLnkpIC8gc3RlcFJhbmdlKTtcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBNYXRoLm1pbih0cnVlU3RlcHMsIE1hdGgubWF4KDAsIHByZXZTdGVwcyArIGRTdGVwcykpO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiBzdGVwcztcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLnJvdW5kKHN0ZXBzICogc3RlcCArIG1taW4pO1xuICAgICAgICByZXR1cm4gc3RlcHMgKiBzdGVwICsgbW1pbjtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5faW5Ub3VjaCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tRGVsdGEoZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5wYXJhbXMudmFsdWUpIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZVNsaWRlclBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIHJlbGF0aXZlOiBib29sZWFuO1xuICAgIGZvbnRuYW1lOiBzdHJpbmc7XG4gICAgZm9udHNpemU6IG51bWJlcjtcbiAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIgfCBcImJvbGRcIiB8IFwiaXRhbGljXCIgfCBcImJvbGQgaXRhbGljXCI7XG4gICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIiB8IFwiaG9yaXpvbnRhbFwiO1xuICAgIHNob3duYW1lOiBib29sZWFuO1xuICAgIHNob3dudW1iZXI6IGJvb2xlYW47XG4gICAgc2xpZGVyY29sb3I6IHN0cmluZztcbiAgICB0ZXh0Y29sb3I6IHN0cmluZztcbiAgICB0cmlib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRyaW9uY29sb3I6IHN0cmluZztcbiAgICB0cmljb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlU2xpZGVyIGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlU2xpZGVyUGFyYW1zPiB7XG4gICAgc3RhdGljIGdldCBwYXJhbXMoKTogTGl2ZVNsaWRlclBhcmFtcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wYXJhbXMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS5zbGlkZXJcIixcbiAgICAgICAgICAgIHdpZHRoOiA0MCxcbiAgICAgICAgICAgIGhlaWdodDogOTAsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEyLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIHNob3duYW1lOiB0cnVlLFxuICAgICAgICAgICAgc2hvd251bWJlcjogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlcmNvbG9yOiBcInJnYmEoNDAsIDQwLCA0MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmlib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICB0cmlvbmNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIHJlbGF0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1taW46IDAsXG4gICAgICAgICAgICBtbWF4OiAxMjcsXG4gICAgICAgICAgICB0eXBlOiBcImludFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG4gICAgaW50ZXJhY3Rpb25SZWN0OiBudW1iZXJbXSA9IFswLCAwLCAwLCAwXTtcblxuICAgIGdldCB0cnVlU3RlcHMoKSB7XG4gICAgICAgIGNvbnN0IHsgb3JpZW50YXRpb24sIHR5cGUsIG1tYXgsIG1taW4sIHN0ZXBzLCBzdGVwIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgY29uc3QgZnVsbCA9IHRoaXMuaW50ZXJhY3Rpb25SZWN0W29yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyAzIDogMl07XG4gICAgICAgIGNvbnN0IG1heFN0ZXBzID0gdHlwZSA9PT0gXCJlbnVtXCIgPyB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aCA6IHR5cGUgPT09IFwiaW50XCIgPyBtbWF4IC0gbW1pbiA6IGZ1bGw7XG4gICAgICAgIGlmIChzdGVwKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5taW4oTWF0aC5mbG9vcigobW1heCAtIG1taW4pIC8gTWF0aC5yb3VuZChzdGVwKSksIG1heFN0ZXBzKTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBzdGVwKSwgbWF4U3RlcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGVwcykgcmV0dXJuIE1hdGgubWluKHN0ZXBzLCBtYXhTdGVwcyk7XG4gICAgICAgIHJldHVybiBtYXhTdGVwcztcbiAgICB9XG4gICAgZ2V0IGRpc3RhbmNlKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHZhbHVlIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gdmFsdWUgLyB0aGlzLnBhcmFtcy5lbnVtLmxlbmd0aCA6ICh2YWx1ZSAtIG1taW4pIC8gKG1tYXggLSBtbWluKTtcbiAgICB9XG4gICAgZ2V0IHN0ZXBSYW5nZSgpIHtcbiAgICAgICAgY29uc3QgeyBvcmllbnRhdGlvbiwgdHlwZSwgbW1heCwgbW1pbiwgc3RlcCB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGZ1bGwgPSB0aGlzLmludGVyYWN0aW9uUmVjdFtvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gMyA6IDJdO1xuICAgICAgICBpZiAoc3RlcCkgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gZnVsbCAvIHRoaXMucGFyYW1zLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IE1hdGgucm91bmQoc3RlcCkgLyAobW1heCAtIG1taW4pICogZnVsbCA6IHN0ZXAgLyAobW1heCAtIG1taW4pICogZnVsbDtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIHJldHVybiBmdWxsIC8gdHJ1ZVN0ZXBzO1xuICAgIH1cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBmb250bmFtZSxcbiAgICAgICAgICAgIGZvbnRzaXplLFxuICAgICAgICAgICAgZm9udGZhY2UsXG4gICAgICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgICAgIHNob3duYW1lLFxuICAgICAgICAgICAgc2hvd251bWJlcixcbiAgICAgICAgICAgIHNsaWRlcmNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0cmlvbmNvbG9yLFxuICAgICAgICAgICAgdHJpY29sb3IsXG4gICAgICAgICAgICBzaG9ydG5hbWVcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gMC41O1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gODtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlO1xuICAgICAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSB0aGlzLmRpc3BsYXlWYWx1ZTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHNsaWRlcmNvbG9yO1xuXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHdpZHRoICogMC41LCBmb250c2l6ZSArIHBhZGRpbmcpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCAqIDAuNSwgaGVpZ2h0IC0gKGZvbnRzaXplICsgcGFkZGluZykpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbldpZHRoID0gd2lkdGggKiAwLjU7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdCA9IFtcbiAgICAgICAgICAgICAgICB3aWR0aCAqIDAuNSAtIGludGVyYWN0aW9uV2lkdGggKiAwLjUsXG4gICAgICAgICAgICAgICAgZm9udHNpemUgKyBwYWRkaW5nLFxuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uV2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0IC0gMiAqIChmb250c2l6ZSArIHBhZGRpbmcpXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRyaWJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgY29uc3QgdHJpT3JpZ2luOiBbbnVtYmVyLCBudW1iZXJdID0gW1xuICAgICAgICAgICAgICAgIHdpZHRoICogMC41ICsgbGluZVdpZHRoICogMC41ICsgMC41LFxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdIC0gNCArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdICogKDEgLSBkaXN0YW5jZSlcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgNCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDgsIHRyaU9yaWdpblsxXSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDgsIHRyaU9yaWdpblsxXSArIDgpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0sIHRyaU9yaWdpblsxXSArIDQpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5faW5Ub3VjaCA/IHRyaW9uY29sb3IgOiB0cmljb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Zm9udGZhY2UgPT09IFwicmVndWxhclwiID8gXCJcIiA6IGZvbnRmYWNlfSAke2ZvbnRzaXplfXB4ICR7Zm9udG5hbWV9LCBzYW5zLXNlcmlmYDtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRleHRjb2xvcjtcbiAgICAgICAgICAgIGlmIChzaG93bmFtZSkgY3R4LmZpbGxUZXh0KHNob3J0bmFtZSwgd2lkdGggKiAwLjUsIGZvbnRzaXplLCB3aWR0aCk7XG4gICAgICAgICAgICBpZiAoc2hvd251bWJlcikgY3R4LmZpbGxUZXh0KGRpc3BsYXlWYWx1ZSwgd2lkdGggKiAwLjUsIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhwYWRkaW5nLCBoZWlnaHQgKiAwLjUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCAtIHBhZGRpbmcsIGhlaWdodCAqIDAuNSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uV2lkdGggPSBoZWlnaHQgKiAwLjU7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdCA9IFtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgICAgICAgIGhlaWdodCAqIDAuNSAtIGludGVyYWN0aW9uV2lkdGggKiAwLjUsXG4gICAgICAgICAgICAgICAgd2lkdGggLSAyICogcGFkZGluZyxcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbldpZHRoXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRyaWJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgY29uc3QgdHJpT3JpZ2luOiBbbnVtYmVyLCBudW1iZXJdID0gW1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl0gKiBkaXN0YW5jZSAtIDQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICogMC41ICsgbGluZVdpZHRoICogMC41ICsgMlxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odHJpT3JpZ2luWzBdLCB0cmlPcmlnaW5bMV0gKyA4KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgNCwgdHJpT3JpZ2luWzFdKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgOCwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLl9pblRvdWNoID8gdHJpb25jb2xvciA6IHRyaWNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICAgICAgaWYgKHNob3duYW1lKSBjdHguZmlsbFRleHQoc2hvcnRuYW1lLCB3aWR0aCAqIDAuNSwgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgIGlmIChzaG93bnVtYmVyKSBjdHguZmlsbFRleHQoZGlzcGxheVZhbHVlLCA0LCBoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRWYWx1ZUZyb21Qb3MoZTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XG4gICAgICAgIGNvbnN0IHsgb3JpZW50YXRpb24sIHR5cGUsIG1taW4sIG1tYXggfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBzdGVwUmFuZ2UgPSB0aGlzLnN0ZXBSYW5nZTtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSB0aGlzLnBhcmFtcy5zdGVwIHx8IChtbWF4IC0gbW1pbikgLyB0cnVlU3RlcHM7XG4gICAgICAgIGxldCBzdGVwcyA9IE1hdGgucm91bmQoKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyB0aGlzLmludGVyYWN0aW9uUmVjdFszXSAtIChlLnkgLSB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSkgOiBlLnggLSB0aGlzLmludGVyYWN0aW9uUmVjdFswXSkgLyBzdGVwUmFuZ2UpO1xuICAgICAgICBzdGVwcyA9IE1hdGgubWluKHRydWVTdGVwcywgTWF0aC5tYXgoMCwgc3RlcHMpKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gc3RlcHM7XG4gICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5yb3VuZChzdGVwcyAqIHN0ZXAgKyBtbWluKTtcbiAgICAgICAgcmV0dXJuIHN0ZXBzICogc3RlcCArIG1taW47XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGUueCA8IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdXG4gICAgICAgICAgICB8fCBlLnggPiB0aGlzLmludGVyYWN0aW9uUmVjdFswXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzJdXG4gICAgICAgICAgICB8fCBlLnkgPCB0aGlzLmludGVyYWN0aW9uUmVjdFsxXVxuICAgICAgICAgICAgfHwgZS55ID4gdGhpcy5pbnRlcmFjdGlvblJlY3RbMV0gKyB0aGlzLmludGVyYWN0aW9uUmVjdFszXVxuICAgICAgICApIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbVBvcyhlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB2YWx1ZSkgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgdGhpcy5nZXRWYWx1ZUZyb21Qb3MoZSkpO1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlckRyYWdFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2luVG91Y2gpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbVBvcyhlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLnBhcmFtcy52YWx1ZSkgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgbmV3VmFsdWUpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5cbmludGVyZmFjZSBMaXZlVGFiUGFyYW1zIGV4dGVuZHMgTGl2ZVBhcmFtcyB7XG4gICAgZm9udG5hbWU6IHN0cmluZztcbiAgICBmb250c2l6ZTogbnVtYmVyO1xuICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBhY3RpdmViZ2NvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZlYmdvbmNvbG9yOiBzdHJpbmc7XG4gICAgYmdjb2xvcjogc3RyaW5nO1xuICAgIGJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJvcmRlcmNvbG9yOiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRleHRjb2xvcjogc3RyaW5nO1xuICAgIHRleHRvbmNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZldGV4dGNvbG9yOiBzdHJpbmc7XG4gICAgYWN0aXZldGV4dG9uY29sb3I6IHN0cmluZztcbiAgICBtb2RlOiBcImVxdWFsXCIgfCBcInByb3BvcnRpb25hbFwiO1xuICAgIHNwYWNpbmdfeDogbnVtYmVyO1xuICAgIHNwYWNpbmdfeTogbnVtYmVyO1xuICAgIG11bHRpbGluZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVRhYiBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZVRhYlBhcmFtcz4ge1xuICAgIHN0YXRpYyBnZXQgcGFyYW1zKCk6IExpdmVUYWJQYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUudGFiXCIsXG4gICAgICAgICAgICB3aWR0aDogOTAsXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1LFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMCxcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yOiBcInJnYmEoMjU1LCAxODEsIDUwLCAxKVwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBiZ29uY29sb3I6IFwicmdiYSgxOTUsIDE5NSwgMTk1LCAxKVwiLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0Y29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dG9uY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZldGV4dGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRvbmNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIG1vZGU6IFwiZXF1YWxcIixcbiAgICAgICAgICAgIGVudW06IFtcIm9uZVwiLCBcInR3b1wiLCBcInRocmVlXCJdLFxuICAgICAgICAgICAgc3BhY2luZ194OiA2LFxuICAgICAgICAgICAgc3BhY2luZ195OiA2LFxuICAgICAgICAgICAgbXVsdGlsaW5lOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG4gICAgdGFiUmVjdHM6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdW10gPSBbXTtcblxuICAgIGdldFRhYlJlY3RzKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIG11bHRpbGluZSxcbiAgICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgICBzcGFjaW5nX3gsXG4gICAgICAgICAgICBzcGFjaW5nX3lcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBlbnVtcyA9IHRoaXMucGFyYW1zLmVudW07XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IDQ7XG4gICAgICAgIGNvbnN0IG1pbkhlaWdodCA9IDEwO1xuICAgICAgICBjb25zdCBjb3VudCA9IGVudW1zLmxlbmd0aDtcbiAgICAgICAgbGV0IGNvdW50UGVyTGluZSA9IGNvdW50O1xuICAgICAgICBsZXQgbGluZXMgPSAxO1xuICAgICAgICBsZXQgc3RlcCA9IGhlaWdodCAvIGxpbmVzO1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSAwO1xuICAgICAgICBsZXQgcmVjdFdpZHRoID0gMDtcbiAgICAgICAgY29uc3Qgc3BhY2luZ1ggPSBzcGFjaW5nX3ggKiAwLjU7XG4gICAgICAgIGNvbnN0IHNwYWNpbmdZID0gc3BhY2luZ195ICogMC41O1xuXG4gICAgICAgIGlmIChtdWx0aWxpbmUgJiYgaGVpZ2h0ID49IDIgKiBtaW5IZWlnaHQpIHtcbiAgICAgICAgICAgIGxpbmVzID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oY291bnQsIE1hdGguZmxvb3IoaGVpZ2h0IC8gbWluSGVpZ2h0KSkpO1xuICAgICAgICAgICAgY291bnRQZXJMaW5lID0gTWF0aC5jZWlsKGNvdW50IC8gbGluZXMpO1xuICAgICAgICAgICAgLy8gaWYgdGhlcmUncyBub3QgZW5vdWdoIGhlaWdodCwgaW5jcmVhc2UgdGhlIG51bWJlciBvZiB0YWJzIHBlciByb3dcbiAgICAgICAgICAgIHdoaWxlIChsaW5lcyAqIGNvdW50UGVyTGluZSA8IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgY291bnRQZXJMaW5lKys7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmVzID4gMSkgbGluZXMtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3MgZXh0cmEgaGVpZ2h0LCByZWR1Y2UgdGhlIG51bWJlciBvZiByb3dzXG4gICAgICAgICAgICB3aGlsZSAobGluZXMgKiBjb3VudFBlckxpbmUgPiBjb3VudCAmJiAobGluZXMgLSAxKSAqIGNvdW50UGVyTGluZSA+PSBjb3VudCkge1xuICAgICAgICAgICAgICAgIGxpbmVzLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGVwID0gaGVpZ2h0IC8gbGluZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vZGUgPT09IFwiZXF1YWxcIikge1xuICAgICAgICAgICAgaW50ZXJ2YWwgPSB3aWR0aCAvIGNvdW50UGVyTGluZTtcbiAgICAgICAgICAgIHJlY3RXaWR0aCA9IGludGVydmFsIC0gc3BhY2luZ1g7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlJlY3RzW2ldID0gW1xuICAgICAgICAgICAgICAgICAgICAoaSAlIGNvdW50UGVyTGluZSkgKiBpbnRlcnZhbCArIHNwYWNpbmdYICogMC41LFxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGkgLyBjb3VudFBlckxpbmUpICogc3RlcCArIHNwYWNpbmdZICogMC41LFxuICAgICAgICAgICAgICAgICAgICByZWN0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIChoZWlnaHQgLyBsaW5lcykgLSBzcGFjaW5nWVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0V2lkdGhzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBzcGFjZSA9IHdpZHRoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpICogY291bnRQZXJMaW5lOyBqIDwgTWF0aC5taW4oKGkgKyAxKSAqIGNvdW50UGVyTGluZSwgY291bnQpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dERpbWVuc2lvbnMgPSB0aGlzLmN0eC5tZWFzdXJlVGV4dChlbnVtc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgIHRleHRXaWR0aHNbal0gPSB0ZXh0RGltZW5zaW9ucy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgKz0gdGV4dFdpZHRoc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgc3BhY2UgLT0gMiAqIG1hcmdpbiArIHNwYWNpbmdYO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdXNlZCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKiBjb3VudFBlckxpbmU7IGogPCBNYXRoLm1pbigoaSArIDEpICogY291bnRQZXJMaW5lLCBjb3VudCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWN0U3BhY2UgPSB0ZXh0V2lkdGhzW2pdIC8gdG90YWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiUmVjdHNbal0gPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VkICsgc3BhY2luZ1ggKiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpICogc3RlcCArIHNwYWNpbmdZICogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2UgKiByZWN0U3BhY2UgKyAyICogbWFyZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IC8gbGluZXMgLSBzcGFjaW5nWVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB1c2VkICs9IHRoaXMudGFiUmVjdHNbal1bMl0gKyBzcGFjaW5nWDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudGFiUmVjdHM7XG4gICAgfVxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3IsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgYmdvbmNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdGV4dG9uY29sb3IsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0Y29sb3IsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0b25jb2xvcixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICBjb25zdCBlbnVtcyA9IHRoaXMucGFyYW1zLmVudW07XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBjb25zdCB0YWJSZWN0cyA9IHRoaXMuZ2V0VGFiUmVjdHMoKTtcblxuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IDAuNTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjdHgubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQm9yZGVyQ29sb3IgPSBmb2N1cyA/IGZvY3VzYm9yZGVyY29sb3IgOiBib3JkZXJjb2xvcjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uQmdDb2xvciA9IGFjdGl2ZSA/ICh2YWx1ZSA9PT0gaSA/IGFjdGl2ZWJnb25jb2xvciA6IGFjdGl2ZWJnY29sb3IpIDogKHZhbHVlID09PSBpID8gYmdvbmNvbG9yIDogYmdjb2xvcik7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uQmdDb2xvcjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5yZWN0KC4uLnRhYlJlY3RzW2ldKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBidXR0b25Cb3JkZXJDb2xvcjtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBhY3RpdmUgPyAodmFsdWUgPT09IGkgPyBhY3RpdmV0ZXh0b25jb2xvciA6IGFjdGl2ZXRleHRjb2xvcikgOiAodmFsdWUgPT09IGkgPyB0ZXh0b25jb2xvciA6IHRleHRjb2xvcik7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoZW51bXNbaV0sIHRhYlJlY3RzW2ldWzBdICsgdGFiUmVjdHNbaV1bMl0gKiAwLjUsIHRhYlJlY3RzW2ldWzFdICsgdGFiUmVjdHNbaV1bM10gKiAwLjUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJSZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMudGFiUmVjdHNbaV07XG4gICAgICAgICAgICBpZiAoZS54ID49IHJlY3RbMF0gJiYgZS54IDw9IHJlY3RbMl0gKyByZWN0WzBdICYmIGUueSA+PSByZWN0WzFdICYmIGUueSA8PSByZWN0WzNdICsgcmVjdFsxXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIGkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlckRvd24oZSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcbmltcG9ydCB7IGZpbGxSb3VuZGVkUmVjdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmludGVyZmFjZSBMaXZlVGV4dFBhcmFtcyBleHRlbmRzIExpdmVQYXJhbXMge1xuICAgIGZvbnRuYW1lOiBzdHJpbmc7XG4gICAgZm9udHNpemU6IG51bWJlcjtcbiAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIgfCBcImJvbGRcIiB8IFwiaXRhbGljXCIgfCBcImJvbGQgaXRhbGljXCI7XG4gICAgYWN0aXZlYmdjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZWJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJnY29sb3I6IHN0cmluZztcbiAgICBiZ29uY29sb3I6IHN0cmluZztcbiAgICBib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIGZvY3VzYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICB0ZXh0Y29sb3I6IHN0cmluZztcbiAgICB0ZXh0b25jb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZXRleHRjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZXRleHRvbmNvbG9yOiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIHRleHRvbjogc3RyaW5nO1xuICAgIG1vZGU6IFwiYnV0dG9uXCIgfCBcInRvZ2dsZVwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlVGV4dCBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZVRleHRQYXJhbXM+IHtcbiAgICBzdGF0aWMgZ2V0IHBhcmFtcygpOiBMaXZlVGV4dFBhcmFtcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wYXJhbXMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS50ZXh0XCIsXG4gICAgICAgICAgICB3aWR0aDogOTAsXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1LFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMCxcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yOiBcInJnYmEoMjU1LCAxODEsIDUwLCAxKVwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBiZ29uY29sb3I6IFwicmdiYSgxOTUsIDE5NSwgMTk1LCAxKVwiLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0Y29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dG9uY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZldGV4dGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRvbmNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRleHQ6IFwiQVwiLFxuICAgICAgICAgICAgdGV4dG9uOiBcIkJcIixcbiAgICAgICAgICAgIG1vZGU6IFwidG9nZ2xlXCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICB0ZXh0b24sXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHRleHRjb2xvcixcbiAgICAgICAgICAgIHRleHRvbmNvbG9yLFxuICAgICAgICAgICAgYWN0aXZldGV4dGNvbG9yLFxuICAgICAgICAgICAgYWN0aXZldGV4dG9uY29sb3IsXG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMC41O1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcblxuICAgICAgICBjb25zdCBidXR0b25CZ0NvbG9yID0gYWN0aXZlID8gKHZhbHVlID8gYWN0aXZlYmdvbmNvbG9yIDogYWN0aXZlYmdjb2xvcikgOiAodmFsdWUgPyBiZ29uY29sb3IgOiBiZ2NvbG9yKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQm9yZGVyQ29sb3IgPSBmb2N1cyA/IGZvY3VzYm9yZGVyY29sb3IgOiBib3JkZXJjb2xvcjtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uQmdDb2xvcjtcbiAgICAgICAgaWYgKG1vZGUgPT09IFwiYnV0dG9uXCIpIHtcbiAgICAgICAgICAgIGZpbGxSb3VuZGVkUmVjdChjdHgsIDAuNSwgMC41LCB3aWR0aCAtIDEsIGhlaWdodCAtIDEsIGhlaWdodCAqIDAuNSAtIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LnJlY3QoMC41LCAwLjUsIHdpZHRoIC0gMSwgaGVpZ2h0IC0gMSk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAwLjU7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGJ1dHRvbkJvcmRlckNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBhY3RpdmUgPyAodmFsdWUgPyBhY3RpdmV0ZXh0b25jb2xvciA6IGFjdGl2ZXRleHRjb2xvcikgOiAodmFsdWUgPyB0ZXh0b25jb2xvciA6IHRleHRjb2xvcik7XG4gICAgICAgIGN0eC5maWxsVGV4dCh2YWx1ZSAmJiBtb2RlID09PSBcInRvZ2dsZVwiID8gdGV4dG9uIDogdGV4dCwgd2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHZhbHVlLCBtb2RlIH0gPSB0aGlzLnBhcmFtcztcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIG1vZGUgPT09IFwiYnV0dG9uXCIgPyAxIDogMSAtIHZhbHVlKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5tb2RlID09PSBcImJ1dHRvblwiKSB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCAwKTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5cbmludGVyZmFjZSBMaXZlVG9nZ2xlUGFyYW1zIGV4dGVuZHMgTGl2ZVBhcmFtcyB7XG4gICAgYWN0aXZlYmdjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZWJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJnY29sb3I6IHN0cmluZztcbiAgICBiZ29uY29sb3I6IHN0cmluZztcbiAgICBib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIGZvY3VzYm9yZGVyY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVRvZ2dsZSBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZVRvZ2dsZVBhcmFtcz4ge1xuICAgIHN0YXRpYyBnZXQgcGFyYW1zKCk6IExpdmVUb2dnbGVQYXJhbXMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucGFyYW1zLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUudG9nZ2xlXCIsXG4gICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICBoZWlnaHQ6IDE1LFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3I6IFwicmdiYSgyNTUsIDE4MSwgNTAsIDEpXCIsXG4gICAgICAgICAgICBiZ2NvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIGJnb25jb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3IsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgYmdvbmNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMC41O1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcblxuICAgICAgICBjb25zdCBidXR0b25CZ0NvbG9yID0gYWN0aXZlID8gKHZhbHVlID8gYWN0aXZlYmdvbmNvbG9yIDogYWN0aXZlYmdjb2xvcikgOiAodmFsdWUgPyBiZ29uY29sb3IgOiBiZ2NvbG9yKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQm9yZGVyQ29sb3IgPSBmb2N1cyA/IGZvY3VzYm9yZGVyY29sb3IgOiBib3JkZXJjb2xvcjtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uQmdDb2xvcjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgucmVjdChib3JkZXJXaWR0aCwgYm9yZGVyV2lkdGgsIHdpZHRoIC0gMiAqIGJvcmRlcldpZHRoLCBoZWlnaHQgLSAyICogYm9yZGVyV2lkdGgpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBidXR0b25Cb3JkZXJDb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wYXJhbXM7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIDEgLSB2YWx1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IExpdmVCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgTGl2ZVNsaWRlciBmcm9tIFwiLi9TbGlkZXJcIjtcbmltcG9ydCBMaXZlRGlhbCBmcm9tIFwiLi9EaWFsXCI7XG5pbXBvcnQgTGl2ZVRvZ2dsZSBmcm9tIFwiLi9Ub2dnbGVcIjtcbmltcG9ydCBMaXZlVGV4dCBmcm9tIFwiLi9UZXh0XCI7XG5pbXBvcnQgTGl2ZU51bWJveCBmcm9tIFwiLi9OdW1ib3hcIjtcbmltcG9ydCBMaXZlVGFiIGZyb20gXCIuL1RhYlwiO1xuaW1wb3J0IExpdmVNZXRlciBmcm9tIFwiLi9NZXRlclwiO1xuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1idXR0b25cIiwgTGl2ZUJ1dHRvbik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS10b2dnbGVcIiwgTGl2ZVRvZ2dsZSk7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1zbGlkZXJcIiwgTGl2ZVNsaWRlcik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1kaWFsXCIsIExpdmVEaWFsKTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXZlLXRleHRcIiwgTGl2ZVRleHQpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdmUtbnVtYm94XCIsIExpdmVOdW1ib3gpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdmUtdGFiXCIsIExpdmVUYWIpO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdmUtbWV0ZXJcIiwgTGl2ZU1ldGVyKTtcbiIsImV4cG9ydCBjb25zdCB0b01JREkgPSAoZjogbnVtYmVyKSA9PiBbXCJDXCIsIFwiQyNcIiwgXCJEXCIsIFwiRCNcIiwgXCJFXCIsIFwiRlwiLCBcIkYjXCIsIFwiR1wiLCBcIkcjXCIsIFwiQVwiLCBcIkEjXCIsIFwiQlwiXVsoZiAlIDEyICsgMTIpICUgMTJdICsgTWF0aC5yb3VuZChmIC8gMTIgLSAyKTtcbmV4cG9ydCBjb25zdCB0b1JhZCA9IChkZWdyZWVzOiBudW1iZXIpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuZXhwb3J0IGNvbnN0IGF0b2RiID0gKGE6IG51bWJlcikgPT4gMjAgKiBNYXRoLmxvZzEwKGEpO1xuZXhwb3J0IGNvbnN0IGRidG9hID0gKGRiOiBudW1iZXIpID0+IDEwICoqIChkYiAvIDIwKTtcbmV4cG9ydCBjb25zdCByb3VuZGVkUmVjdCA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCByYWRpdXM6IG51bWJlciB8IG51bWJlcltdKSA9PiB7XG4gICAgY29uc3QgcmFkaWkgPSBbMCwgMCwgMCwgMF07XG4gICAgaWYgKHR5cGVvZiByYWRpdXMgPT09IFwibnVtYmVyXCIpIHJhZGlpLmZpbGwocmFkaXVzKTtcbiAgICBlbHNlIHJhZGl1cy5mb3JFYWNoKCh2LCBpKSA9PiByYWRpaVtpXSA9IHYpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHggKyByYWRpaVswXSwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpaVsxXSwgeSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpaVsxXSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpaVsyXSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpaVsyXSwgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaWlbM10sIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByYWRpaVszXSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaWlbMF0pO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpaVswXSwgeSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5zdHJva2UoKTtcbn07XG5leHBvcnQgY29uc3QgZmlsbFJvdW5kZWRSZWN0ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJhZGl1czogbnVtYmVyIHwgbnVtYmVyW10pID0+IHtcbiAgICBjb25zdCByYWRpaSA9IFswLCAwLCAwLCAwXTtcbiAgICBpZiAodHlwZW9mIHJhZGl1cyA9PT0gXCJudW1iZXJcIikgcmFkaWkuZmlsbChyYWRpdXMpO1xuICAgIGVsc2UgcmFkaXVzLmZvckVhY2goKHYsIGkpID0+IHJhZGlpW2ldID0gdik7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHJhZGlpWzBdLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGlpWzFdLCB5KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGlpWzFdKTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGlpWzJdKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGlpWzJdLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKHggKyByYWRpaVszXSwgeSArIGhlaWdodCk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGlpWzNdKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpaVswXSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGlpWzBdLCB5KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9