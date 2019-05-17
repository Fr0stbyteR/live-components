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
exports.push([module.i, "live-button, live-slider {\n  display: inline-flex; }\n", ""]);



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
  constructor() {
    super();
    this.canvas = void 0;
    this.ctx = void 0;
    this.params = {};

    this.handleKeyDown = e => {};

    this.handleKeyUp = e => {};

    this.handleTouchStart = e => {};

    this.handleWheel = e => {};

    this.handleClick = e => {};

    this.handleMouseDown = e => {
      var rect = this.canvas.getBoundingClientRect();
      var x = e.pageX - rect.left;
      var y = e.pageY - rect.top;
      this.handlePointerDown({
        x,
        y,
        originalEvent: e
      });

      var handleMouseMove = e => {
        var x = e.pageX - rect.left;
        var y = e.pageY - rect.top;
        this.handlePointerMove({
          x,
          y,
          movementX: e.movementX,
          movementY: e.movementY,
          originalEvent: e
        });
      };

      var handleMouseUp = e => {
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

    this.handlePointerMove = e => {};

    this.handlePointerUp = e => {};

    this.addEventListener("keydown", this.handleKeyDown);
    this.addEventListener("keyup", this.handleKeyUp);
    this.addEventListener("touchstart", this.handleTouchStart);
    this.addEventListener("wheel", this.handleWheel);
    this.addEventListener("click", this.handleClick);
    this.addEventListener("mousedown", this.handleMouseDown);
    this.addEventListener("mouseover", this.handleMouseOver);
    this.addEventListener("mouseout", this.handleMouseOut);
    this.canvas = this.root.children[0];
    this.ctx = this.canvas.getContext("2d");
  }

  fetchAttribute() {
    for (var i = 0; i < this.root.host.attributes.length; i++) {
      var attr = this.root.host.attributes[i];
      this.params[attr.name] = attr.value;
    }
  }

  setParamValue(key, value) {
    this.params[key] = value;
    this.paint(this.ctx, this.params);
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  paint(ctx, params) {}

  render() {
    return "<canvas></canvas>";
  }

}

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
    super();
    this.params = {
      active: true,
      activebgcolor: "rgba(102, 102, 102, 1)",
      activebgoncolor: "rgba(242, 98, 0, 1)",
      bgcolor: "rgba(102, 102, 102, 1)",
      bgoncolor: "rgba(125, 123, 122, 1)",
      bordercolor: "rgba(50, 50, 50, 1)",
      focusbordercolor: "rgba(0, 5, 20, 1)",
      value: false,
      width: 15,
      height: 15
    };
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

  connectedCallback() {
    this.fetchAttribute();
    this.paint(this.ctx, this.params);
  }

  paint(ctx, paramsIn) {
    var _this$params$paramsIn = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.params, paramsIn),
        active = _this$params$paramsIn.active,
        activebgcolor = _this$params$paramsIn.activebgcolor,
        activebgoncolor = _this$params$paramsIn.activebgoncolor,
        bgcolor = _this$params$paramsIn.bgcolor,
        bgoncolor = _this$params$paramsIn.bgoncolor,
        bordercolor = _this$params$paramsIn.bordercolor,
        focusbordercolor = _this$params$paramsIn.focusbordercolor,
        value = _this$params$paramsIn.value,
        width = _this$params$paramsIn.width,
        height = _this$params$paramsIn.height;

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
    super();
    this.params = {
      displayvalue: "0",
      fontname: "Arial",
      fontsize: 9.5,
      fontface: "regular",
      orientation: "Vertical",
      showname: true,
      shownumber: true,
      slidercolor: "rgba(40, 40, 40, 1)",
      textcolor: "rgba(0, 0, 0, 1)",
      tribordercolor: "rgba(80, 80, 80, 1)",
      trioncolor: "rgba(0, 0, 0, 1)",
      tricolor: "rgba(165, 165, 165, 1)",
      distance: 0,
      relative: "Absolute",
      width: 40,
      height: 90,
      _parameter_shortname: "live.slider",
      _parameter_range: [0, 127],
      _parameter_steps: 127,
      _parameter_type: "Int (0-255)"
    };
    this._inTouch = false;
    this.interactionRect = [0, 0, 0, 0];

    this.handlePointerDown = () => {
      var _this$params = this.params,
          orientation = _this$params.orientation,
          relative = _this$params.relative;
      this._inTouch = true;
    };

    this.handlePointerMove = e => {
      this._inTouch = true;
    };

    this.handlePointerUp = () => {
      this._inTouch = false;
    };
  }

  connectedCallback() {
    this.fetchAttribute();
    this.paint(this.ctx, this.params);
  }

  paint(ctx, paramsIn) {
    var _this$params$paramsIn = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.params, paramsIn),
        width = _this$params$paramsIn.width,
        height = _this$params$paramsIn.height,
        displayvalue = _this$params$paramsIn.displayvalue,
        fontname = _this$params$paramsIn.fontname,
        fontsize = _this$params$paramsIn.fontsize,
        fontface = _this$params$paramsIn.fontface,
        orientation = _this$params$paramsIn.orientation,
        showname = _this$params$paramsIn.showname,
        shownumber = _this$params$paramsIn.shownumber,
        slidercolor = _this$params$paramsIn.slidercolor,
        textcolor = _this$params$paramsIn.textcolor,
        tribordercolor = _this$params$paramsIn.tribordercolor,
        trioncolor = _this$params$paramsIn.trioncolor,
        tricolor = _this$params$paramsIn.tricolor,
        _parameter_shortname = _this$params$paramsIn._parameter_shortname,
        distance = _this$params$paramsIn.distance;

    var lineWidth = 0.5;
    var padding = 8;
    var popoverType = "VALUE_LABEL";
    ctx.canvas.style.width = width + "px";
    ctx.canvas.style.height = height + "px";
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = slidercolor;

    if (orientation === "Vertical") {
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
      if (showname) ctx.fillText(_parameter_shortname, width / 2, fontsize, width);
      if (shownumber) ctx.fillText(displayvalue, width / 2, height, width);
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
      if (showname) ctx.fillText(_parameter_shortname, width / 2, fontsize, width);
      ctx.textAlign = "left";
      if (shownumber) ctx.fillText(displayvalue, 4, height, width);
    }
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


window.customElements.define("live-button", _Button__WEBPACK_IMPORTED_MODULE_0__["default"]);
window.customElements.define("live-slider", _Slider__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovLy8uL3NyYy9CYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQmFzZS5zY3NzPzdiNzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Jhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2xpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJMaXZlQmFzZUNvbXBvbmVudCIsIkhUTUxFbGVtZW50IiwiY29uc3RydWN0b3IiLCJyb290IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImlubmVySFRNTCIsInJlbmRlciIsIkxpdmVDb21wb25lbnQiLCJjYW52YXMiLCJjdHgiLCJwYXJhbXMiLCJoYW5kbGVLZXlEb3duIiwiZSIsImhhbmRsZUtleVVwIiwiaGFuZGxlVG91Y2hTdGFydCIsImhhbmRsZVdoZWVsIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVNb3VzZURvd24iLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsInBhZ2VYIiwibGVmdCIsInkiLCJwYWdlWSIsInRvcCIsImhhbmRsZVBvaW50ZXJEb3duIiwib3JpZ2luYWxFdmVudCIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZVBvaW50ZXJNb3ZlIiwibW92ZW1lbnRYIiwibW92ZW1lbnRZIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZVBvaW50ZXJVcCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNb3VzZU92ZXIiLCJoYW5kbGVNb3VzZU91dCIsImhhbmRsZUNvbnRleHRNZW51IiwiY2hpbGRyZW4iLCJnZXRDb250ZXh0IiwiZmV0Y2hBdHRyaWJ1dGUiLCJpIiwiaG9zdCIsImF0dHJpYnV0ZXMiLCJsZW5ndGgiLCJhdHRyIiwibmFtZSIsInZhbHVlIiwic2V0UGFyYW1WYWx1ZSIsImtleSIsInBhaW50IiwiTGl2ZUJ1dHRvbiIsImFjdGl2ZSIsImFjdGl2ZWJnY29sb3IiLCJhY3RpdmViZ29uY29sb3IiLCJiZ2NvbG9yIiwiYmdvbmNvbG9yIiwiYm9yZGVyY29sb3IiLCJmb2N1c2JvcmRlcmNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJfaW5Ub3VjaCIsImNvbm5lY3RlZENhbGxiYWNrIiwicGFyYW1zSW4iLCJib3JkZXJXaWR0aCIsInN0eWxlIiwibGluZVdpZHRoIiwiYnV0dG9uQmdDb2xvciIsImJ1dHRvbkJvcmRlckNvbG9yIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiZWxsaXBzZSIsIk1hdGgiLCJQSSIsImZpbGwiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInNldFRpbWVvdXQiLCJyZXNldFBvaW50ZXJzIiwiTGl2ZVNsaWRlciIsImRpc3BsYXl2YWx1ZSIsImZvbnRuYW1lIiwiZm9udHNpemUiLCJmb250ZmFjZSIsIm9yaWVudGF0aW9uIiwic2hvd25hbWUiLCJzaG93bnVtYmVyIiwic2xpZGVyY29sb3IiLCJ0ZXh0Y29sb3IiLCJ0cmlib3JkZXJjb2xvciIsInRyaW9uY29sb3IiLCJ0cmljb2xvciIsImRpc3RhbmNlIiwicmVsYXRpdmUiLCJfcGFyYW1ldGVyX3Nob3J0bmFtZSIsIl9wYXJhbWV0ZXJfcmFuZ2UiLCJfcGFyYW1ldGVyX3N0ZXBzIiwiX3BhcmFtZXRlcl90eXBlIiwiaW50ZXJhY3Rpb25SZWN0IiwicGFkZGluZyIsInBvcG92ZXJUeXBlIiwibW92ZVRvIiwibGluZVRvIiwidHJpT3JpZ2luIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0Iiwid2luZG93IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ2ZBLHFCQUFxQixtQkFBTyxDQUFDLGlGQUFrQjs7QUFFL0M7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7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QUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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Qzs7Ozs7Ozs7Ozs7O0FDMUJ0RDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE4QyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE1BQXRCLENBQTZCLGFBQTdCLEVBQTRDMUQsK0NBQTVDO0FBQ0F3RCxNQUFNLENBQUNDLGNBQVAsQ0FBc0JDLE1BQXRCLENBQTZCLGFBQTdCLEVBQTRDOUIsK0NBQTVDLEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQ7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJsaXZlLWJ1dHRvbiwgbGl2ZS1zbGlkZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQmFzZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0Jhc2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQmFzZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5pbXBvcnQgXCIuL0Jhc2Uuc2Nzc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50ZXJEb3duRXZlbnQge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgb3JpZ2luYWxFdmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnRlck1vdmVFdmVudCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBtb3ZlbWVudFg6IG51bWJlcjtcbiAgICBtb3ZlbWVudFk6IG51bWJlcjtcbiAgICBvcmlnaW5hbEV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2ludGVyVXBFdmVudCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBvcmlnaW5hbEV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudDtcbn1cblxuZXhwb3J0IGNsYXNzIExpdmVCYXNlQ29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHJvb3Q6IFNoYWRvd1Jvb3Q7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcbiAgICAgICAgdGhpcy5yb290LmlubmVySFRNTCA9IHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZUNvbXBvbmVudCBleHRlbmRzIExpdmVCYXNlQ29tcG9uZW50IHtcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gICAgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVLZXlVcCA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVUb3VjaFN0YXJ0ID0gKGU6IFRvdWNoRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVdoZWVsID0gKGU6IFdoZWVsRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZUNsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZU1vdXNlRG93biA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeCA9IGUucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgIGNvbnN0IHkgPSBlLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlckRvd24oeyB4LCB5LCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeCA9IGUucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyTW92ZSh7IHgsIHksIG1vdmVtZW50WDogZS5tb3ZlbWVudFgsIG1vdmVtZW50WTogZS5tb3ZlbWVudFksIG9yaWdpbmFsRXZlbnQ6IGUgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeCA9IGUucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyVXAoeyB4LCB5LCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG4gICAgfTtcbiAgICBoYW5kbGVNb3VzZU92ZXIgPSAoZTogTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlTW91c2VPdXQgPSAoZTogTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlQ29udGV4dE1lbnUgPSAoZTogTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoZTogUG9pbnRlckRvd25FdmVudCkgPT4ge307XG4gICAgaGFuZGxlUG9pbnRlck1vdmUgPSAoZTogUG9pbnRlck1vdmVFdmVudCkgPT4ge307XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKGU6IFBvaW50ZXJVcEV2ZW50KSA9PiB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5RG93bik7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuaGFuZGxlS2V5VXApO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMuaGFuZGxlVG91Y2hTdGFydCk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHRoaXMuaGFuZGxlV2hlZWwpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuaGFuZGxlTW91c2VEb3duKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHRoaXMuaGFuZGxlTW91c2VPdmVyKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgdGhpcy5oYW5kbGVNb3VzZU91dCk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5yb290LmNoaWxkcmVuWzBdIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB9XG4gICAgZmV0Y2hBdHRyaWJ1dGUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb290Lmhvc3QuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMucm9vdC5ob3N0LmF0dHJpYnV0ZXNbaV07XG4gICAgICAgICAgICB0aGlzLnBhcmFtc1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRQYXJhbVZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMucGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5wYWludCh0aGlzLmN0eCwgdGhpcy5wYXJhbXMpO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgcGFpbnQoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge31cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBcIjxjYW52YXM+PC9jYW52YXM+XCI7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcblxudHlwZSBUTGl2ZUJ1dHRvblBhcmFtcyA9IHtcbiAgICBhY3RpdmU6IGJvb2xlYW47XG4gICAgYWN0aXZlYmdjb2xvcjogc3RyaW5nO1xuICAgIGFjdGl2ZWJnb25jb2xvcjogc3RyaW5nO1xuICAgIGJnY29sb3I6IHN0cmluZztcbiAgICBiZ29uY29sb3I6IHN0cmluZztcbiAgICBib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIGZvY3VzYm9yZGVyY29sb3I6IHN0cmluZztcbiAgICB2YWx1ZTogYm9vbGVhbjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlQnV0dG9uIGV4dGVuZHMgTGl2ZUNvbXBvbmVudCB7XG4gICAgcGFyYW1zOiBUTGl2ZUJ1dHRvblBhcmFtcyA9IHtcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICBhY3RpdmViZ2NvbG9yOiBcInJnYmEoMTAyLCAxMDIsIDEwMiwgMSlcIixcbiAgICAgICAgYWN0aXZlYmdvbmNvbG9yOiBcInJnYmEoMjQyLCA5OCwgMCwgMSlcIixcbiAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDEwMiwgMTAyLCAxMDIsIDEpXCIsXG4gICAgICAgIGJnb25jb2xvcjogXCJyZ2JhKDEyNSwgMTIzLCAxMjIsIDEpXCIsXG4gICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoNTAsIDUwLCA1MCwgMSlcIixcbiAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDAsIDUsIDIwLCAxKVwiLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgaGVpZ2h0OiAxNVxuICAgIH07XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5mZXRjaEF0dHJpYnV0ZSgpO1xuICAgICAgICB0aGlzLnBhaW50KHRoaXMuY3R4LCB0aGlzLnBhcmFtcyk7XG4gICAgfVxuICAgIHBhaW50KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBwYXJhbXNJbjogVExpdmVCdXR0b25QYXJhbXMpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZWJnb25jb2xvcixcbiAgICAgICAgICAgIGJnY29sb3IsXG4gICAgICAgICAgICBiZ29uY29sb3IsXG4gICAgICAgICAgICBib3JkZXJjb2xvcixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgIH0gPSB7IC4uLnRoaXMucGFyYW1zLCAuLi5wYXJhbXNJbiB9O1xuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IDAuNTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjdHgubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQmdDb2xvciA9IGFjdGl2ZSA/ICh2YWx1ZSA/IGFjdGl2ZWJnb25jb2xvciA6IGFjdGl2ZWJnY29sb3IpIDogKHZhbHVlID8gYmdvbmNvbG9yIDogYmdjb2xvcik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkJvcmRlckNvbG9yID0gdmFsdWUgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJ1dHRvbkJnQ29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmVsbGlwc2Uod2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNSwgd2lkdGggKiAwLjUgLSAyICogYm9yZGVyV2lkdGgsIGhlaWdodCAqIDAuNSAtIDIgKiBib3JkZXJXaWR0aCwgMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBidXR0b25Cb3JkZXJDb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiAhdGhpcy5faW5Ub3VjaCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFBhcmFtVmFsdWUoXCJ2YWx1ZVwiLCAwKSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1WYWx1ZShcInZhbHVlXCIsIDEpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRQYXJhbVZhbHVlKFwidmFsdWVcIiwgMCk7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvY2FtZWxjYXNlICovXG5pbXBvcnQgeyBMaXZlQ29tcG9uZW50LCBQb2ludGVyTW92ZUV2ZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG50eXBlIFRMaXZlU2xpZGVyUGFyYW1zID0ge1xuICAgIGRpc3BsYXl2YWx1ZTogc3RyaW5nO1xuICAgIGZvbnRuYW1lOiBzdHJpbmc7XG4gICAgZm9udHNpemU6IG51bWJlcjtcbiAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIgfCBcImJvbGRcIiB8IFwiaXRhbGljXCIgfCBcImJvbGQgaXRhbGljXCI7XG4gICAgb3JpZW50YXRpb246IFwiVmVydGljYWxcIiB8IFwiSG9yaXpvbnRhbFwiO1xuICAgIHNob3duYW1lOiBib29sZWFuO1xuICAgIHNob3dudW1iZXI6IGJvb2xlYW47XG4gICAgc2xpZGVyY29sb3I6IHN0cmluZztcbiAgICB0ZXh0Y29sb3I6IHN0cmluZztcbiAgICB0cmlib3JkZXJjb2xvcjogc3RyaW5nO1xuICAgIHRyaW9uY29sb3I6IHN0cmluZztcbiAgICB0cmljb2xvcjogc3RyaW5nO1xuICAgIGRpc3RhbmNlOiBudW1iZXI7XG4gICAgcmVsYXRpdmU6IFwiQWJzb2x1dGVcIiB8IFwiUmVsYXRpdmVcIjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIF9wYXJhbWV0ZXJfc2hvcnRuYW1lOiBzdHJpbmc7XG4gICAgX3BhcmFtZXRlcl9yYW5nZTogbnVtYmVyW10gfCBzdHJpbmdbXTtcbiAgICBfcGFyYW1ldGVyX3N0ZXBzOiBudW1iZXI7XG4gICAgX3BhcmFtZXRlcl90eXBlOiBcIkVudW1cIiB8IFwiSW50ICgwLTI1NSlcIiB8IFwiRmxvYXRcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVNsaWRlciBleHRlbmRzIExpdmVDb21wb25lbnQge1xuICAgIHBhcmFtczogVExpdmVTbGlkZXJQYXJhbXMgPSB7XG4gICAgICAgIGRpc3BsYXl2YWx1ZTogXCIwXCIsXG4gICAgICAgIGZvbnRuYW1lOiBcIkFyaWFsXCIsXG4gICAgICAgIGZvbnRzaXplOiA5LjUsXG4gICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgb3JpZW50YXRpb246IFwiVmVydGljYWxcIixcbiAgICAgICAgc2hvd25hbWU6IHRydWUsXG4gICAgICAgIHNob3dudW1iZXI6IHRydWUsXG4gICAgICAgIHNsaWRlcmNvbG9yOiBcInJnYmEoNDAsIDQwLCA0MCwgMSlcIixcbiAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgdHJpYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICB0cmlvbmNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgdHJpY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICBkaXN0YW5jZTogMCxcbiAgICAgICAgcmVsYXRpdmU6IFwiQWJzb2x1dGVcIixcbiAgICAgICAgd2lkdGg6IDQwLFxuICAgICAgICBoZWlnaHQ6IDkwLFxuICAgICAgICBfcGFyYW1ldGVyX3Nob3J0bmFtZTogXCJsaXZlLnNsaWRlclwiLFxuICAgICAgICBfcGFyYW1ldGVyX3JhbmdlOiBbMCwgMTI3XSxcbiAgICAgICAgX3BhcmFtZXRlcl9zdGVwczogMTI3LFxuICAgICAgICBfcGFyYW1ldGVyX3R5cGU6IFwiSW50ICgwLTI1NSlcIlxuICAgIH07XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpbnRlcmFjdGlvblJlY3Q6IG51bWJlcltdID0gWzAsIDAsIDAsIDBdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmZldGNoQXR0cmlidXRlKCk7XG4gICAgICAgIHRoaXMucGFpbnQodGhpcy5jdHgsIHRoaXMucGFyYW1zKTtcbiAgICB9XG4gICAgcGFpbnQoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHBhcmFtc0luOiBUTGl2ZVNsaWRlclBhcmFtcykge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIGRpc3BsYXl2YWx1ZSxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgICAgICAgc2hvd25hbWUsXG4gICAgICAgICAgICBzaG93bnVtYmVyLFxuICAgICAgICAgICAgc2xpZGVyY29sb3IsXG4gICAgICAgICAgICB0ZXh0Y29sb3IsXG4gICAgICAgICAgICB0cmlib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHRyaW9uY29sb3IsXG4gICAgICAgICAgICB0cmljb2xvcixcbiAgICAgICAgICAgIF9wYXJhbWV0ZXJfc2hvcnRuYW1lLFxuICAgICAgICAgICAgZGlzdGFuY2VcbiAgICAgICAgfSA9IHsgLi4udGhpcy5wYXJhbXMsIC4uLnBhcmFtc0luIH07XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IDAuNTtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDg7XG4gICAgICAgIGNvbnN0IHBvcG92ZXJUeXBlID0gXCJWQUxVRV9MQUJFTFwiO1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc2xpZGVyY29sb3I7XG5cbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8od2lkdGggKiAwLjUsIGZvbnRzaXplICsgcGFkZGluZyk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoICogMC41LCBoZWlnaHQgLSAoZm9udHNpemUgKyBwYWRkaW5nKSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0ID0gW1xuICAgICAgICAgICAgICAgIHdpZHRoICogMC41IC0gbGluZVdpZHRoIC8gMixcbiAgICAgICAgICAgICAgICBmb250c2l6ZSArIHBhZGRpbmcsXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCAtIDIgKiAoZm9udHNpemUgKyBwYWRkaW5nKVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0cmlib3JkZXJjb2xvcjtcbiAgICAgICAgICAgIGNvbnN0IHRyaU9yaWdpbjogW251bWJlciwgbnVtYmVyXSA9IFtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdFswXSArIGxpbmVXaWR0aCArIDAuNSxcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSAtIDQgKyB0aGlzLmludGVyYWN0aW9uUmVjdFszXSAqICgxIC0gZGlzdGFuY2UpXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh0cmlPcmlnaW5bMF0sIHRyaU9yaWdpblsxXSArIDQpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0gKyA4LCB0cmlPcmlnaW5bMV0pO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0gKyA4LCB0cmlPcmlnaW5bMV0gKyA4KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdLCB0cmlPcmlnaW5bMV0gKyA0KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuX2luVG91Y2ggPyB0cmlvbmNvbG9yIDogdHJpY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlfSAke2ZvbnRzaXplfSAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0ZXh0Y29sb3I7XG4gICAgICAgICAgICBpZiAoc2hvd25hbWUpIGN0eC5maWxsVGV4dChfcGFyYW1ldGVyX3Nob3J0bmFtZSwgd2lkdGggLyAyLCBmb250c2l6ZSwgd2lkdGgpO1xuICAgICAgICAgICAgaWYgKHNob3dudW1iZXIpIGN0eC5maWxsVGV4dChkaXNwbGF5dmFsdWUsIHdpZHRoIC8gMiwgaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHBhZGRpbmcsIGhlaWdodCAqIDAuNSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoIC0gcGFkZGluZywgaGVpZ2h0ICogMC41KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3QgPSBbXG4gICAgICAgICAgICAgICAgcGFkZGluZyxcbiAgICAgICAgICAgICAgICBoZWlnaHQgKiAwLjUgLSBsaW5lV2lkdGgsXG4gICAgICAgICAgICAgICAgd2lkdGggLSAyICogcGFkZGluZyxcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGhcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJpYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBjb25zdCB0cmlPcmlnaW46IFtudW1iZXIsIG51bWJlcl0gPSBbXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3RbMF0gKyB0aGlzLmludGVyYWN0aW9uUmVjdFsyXSAqIGRpc3RhbmNlIC0gNCxcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdICsgMlxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odHJpT3JpZ2luWzBdLCB0cmlPcmlnaW5bMV0gKyA4KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgNCwgdHJpT3JpZ2luWzFdKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgOCwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLl9pblRvdWNoID8gdHJpb25jb2xvciA6IHRyaWNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZX0gJHtmb250c2l6ZX0gJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICAgICAgaWYgKHNob3duYW1lKSBjdHguZmlsbFRleHQoX3BhcmFtZXRlcl9zaG9ydG5hbWUsIHdpZHRoIC8gMiwgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgIGlmIChzaG93bnVtYmVyKSBjdHguZmlsbFRleHQoZGlzcGxheXZhbHVlLCA0LCBoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBvcmllbnRhdGlvbiwgcmVsYXRpdmUgfSA9IHRoaXMucGFyYW1zO1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlck1vdmUgPSAoZTogUG9pbnRlck1vdmVFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgTGl2ZUJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBMaXZlU2xpZGVyIGZyb20gXCIuL1NsaWRlclwiO1xuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1idXR0b25cIiwgTGl2ZUJ1dHRvbik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl2ZS1zbGlkZXJcIiwgTGl2ZVNsaWRlcik7XG4iXSwic291cmNlUm9vdCI6IiJ9