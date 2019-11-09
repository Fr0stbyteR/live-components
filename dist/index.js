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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Base.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Base.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".live-component {\n  display: inline-flex; }\n  .live-component:focus {\n    outline: none; }\n", ""]);



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

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.11.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.11.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?


var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be replaced with error codes
// during build.

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }

    if (condition) {
      return;
    }

    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610

      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarningWithoutStack$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;

function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }

    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum(); // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(void 0, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */



/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null; // Currently, key can be spread in as a prop. This causes a potential
  // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
  // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
  // but as an intermediary step, we will use jsxDEV for everything except
  // <div {...props} key="Hi" />, because we aren't currently able to tell if
  // key is explicitly declared to be undefined or not.

  if (maybeKey !== undefined) {
    key = '' + maybeKey;
  }

  if (hasValidKey(config)) {
    key = '' + config.key;
  }

  if (hasValidRef(config)) {
    ref = config.ref;
  } // Remaining properties are added to a new props object


  for (propName in config) {
    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
      props[propName] = config[propName];
    }
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  if (key || ref) {
    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

    if (key) {
      defineKeyPropWarningGetter(props, displayName);
    }

    if (ref) {
      defineRefPropWarningGetter(props, displayName);
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum);
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error("React.Children.only expected to receive a single React element child.");
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !( // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0; // TODO: add a more generic warning for invalid values.

    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}
function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}
function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}
function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}
function useImperativeHandle(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, inputs);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}
var emptyObject$1 = {};
function useResponder(responder, listenerProps) {
  var dispatcher = resolveDispatcher();

  {
    if (responder == null || responder.$$typeof !== REACT_RESPONDER_TYPE) {
      warning$1(false, 'useResponder: invalid first argument. Expected an event responder, but instead got %s', responder);
      return;
    }
  }

  return dispatcher.useResponder(responder, listenerProps || emptyObject$1);
}
function useTransition(config) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useTransition(config);
}
function useDeferredValue(value, config) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useDeferredValue(value, config);
}

function withSuspenseConfig(scope, config) {
  var previousConfig = ReactCurrentBatchConfig.suspense;
  ReactCurrentBatchConfig.suspense = config === undefined ? null : config;

  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.suspense = previousConfig;
  }
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */
var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  var type = element.type;

  if (type === null || type === undefined || typeof type === 'string') {
    return;
  }

  var name = getComponentName(type);
  var propTypes;

  if (typeof type === 'function') {
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
  // Inner props are checked in the reconciler.
  type.$$typeof === REACT_MEMO_TYPE)) {
    propTypes = type.propTypes;
  } else {
    return;
  }

  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }

  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);
  var keys = Object.keys(fragment.props);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(source);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    var children = props.children;

    if (children !== undefined) {
      if (isStaticChildren) {
        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            validateChildKeys(children[i], type);
          }

          if (Object.freeze) {
            Object.freeze(children);
          }
        } else {
          warning$1(false, 'React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
        }
      } else {
        validateChildKeys(children, type);
      }
    }
  }

  if (hasOwnProperty$1.call(props, 'key')) {
    warning$1(false, 'React.jsx: Spreading a key to JSX is a deprecated pattern. ' + 'Explicitly pass a key after spreading props in your JSX call. ' + 'E.g. <ComponentName {...props} key={key} />');
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  return jsxWithValidation(type, props, key, true);
}
function jsxWithValidationDynamic(type, props, key) {
  return jsxWithValidation(type, props, key, false);
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type; // Legacy hook: remove it

  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarningWithoutStack$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

var hasBadMapPolyfill;

{
  hasBadMapPolyfill = false;

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
    // TODO: Consider warning about bad polyfills
    hasBadMapPolyfill = true;
  }
}

function createFundamentalComponent(impl) {
  // We use responder as a Map key later on. When we have a bad
  // polyfill, then we can't use it as a key as the polyfill tries
  // to add a property to the object.
  if ( true && !hasBadMapPolyfill) {
    Object.freeze(impl);
  }

  var fundamantalComponent = {
    $$typeof: REACT_FUNDAMENTAL_TYPE,
    impl: impl
  };

  {
    Object.freeze(fundamantalComponent);
  }

  return fundamantalComponent;
}

function createEventResponder(displayName, responderConfig) {
  var getInitialState = responderConfig.getInitialState,
      onEvent = responderConfig.onEvent,
      onMount = responderConfig.onMount,
      onUnmount = responderConfig.onUnmount,
      onRootEvent = responderConfig.onRootEvent,
      rootEventTypes = responderConfig.rootEventTypes,
      targetEventTypes = responderConfig.targetEventTypes,
      targetPortalPropagation = responderConfig.targetPortalPropagation;
  var eventResponder = {
    $$typeof: REACT_RESPONDER_TYPE,
    displayName: displayName,
    getInitialState: getInitialState || null,
    onEvent: onEvent || null,
    onMount: onMount || null,
    onRootEvent: onRootEvent || null,
    onUnmount: onUnmount || null,
    rootEventTypes: rootEventTypes || null,
    targetEventTypes: targetEventTypes || null,
    targetPortalPropagation: targetPortalPropagation || false
  }; // We use responder as a Map key later on. When we have a bad
  // polyfill, then we can't use it as a key as the polyfill tries
  // to add a property to the object.

  if ( true && !hasBadMapPolyfill) {
    Object.freeze(eventResponder);
  }

  return eventResponder;
}

function createScope() {
  var scopeComponent = {
    $$typeof: REACT_SCOPE_TYPE
  };

  {
    Object.freeze(scopeComponent);
  }

  return scopeComponent;
}

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:

 // In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:

 // To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.

 // Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:

 // Gather advanced timing metrics for Profiler subtrees.

 // Trace which interactions trigger each commit.

 // SSR experiments


 // Only used in www builds.

 // Only used in www builds.

 // Disable javascript: URL strings in href for XSS protection.

 // React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties

 // These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.

var exposeConcurrentModeAPIs = false;
 // Experimental React Flare event system and event components support.

var enableFlareAPI = false; // Experimental Host Component support.

var enableFundamentalAPI = false; // Experimental Scope support.

var enableScopeAPI = false; // New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107

var enableJSXTransformAPI = false; // We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
// Till then, we warn about the missing mock, but still fallback to a sync mode compatible version

 // For tests, we flush suspense fallbacks in an act scope;
// *except* in some of our own tests, where we test incremental loading states.

 // Add a callback property to suspense to notify which promises are currently
// in the update queue. This allows reporting and tracing of what is causing
// the user to see a loading state.
// Also allows hydration callbacks to fire when a dehydrated boundary gets
// hydrated or deleted.

 // Part of the simplification of React.createElement so we can eventually move
// from React.createElement to React.jsx
// https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },
  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,
  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,
  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  Fragment: REACT_FRAGMENT_TYPE,
  Profiler: REACT_PROFILER_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,
  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,
  version: ReactVersion,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

if (exposeConcurrentModeAPIs) {
  React.useTransition = useTransition;
  React.useDeferredValue = useDeferredValue;
  React.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
  React.unstable_withSuspenseConfig = withSuspenseConfig;
}

if (enableFlareAPI) {
  React.unstable_useResponder = useResponder;
  React.unstable_createResponder = createEventResponder;
}

if (enableFundamentalAPI) {
  React.unstable_createFundamental = createFundamentalComponent;
}

if (enableScopeAPI) {
  React.unstable_createScope = createScope;
} // Note: some APIs are added with feature flags.
// Make sure that stable builds for open source
// don't modify the React object to avoid deopts.
// Also let's not expose their names in stable builds.


if (enableJSXTransformAPI) {
  {
    React.jsxDEV = jsxWithValidation;
    React.jsx = jsxWithValidationDynamic;
    React.jsxs = jsxWithValidationStatic;
  }
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.


var react = React$3.default || React$3;

module.exports = react;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
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


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./Base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/Base.scss");

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

/***/ "./src/Base.tsx":
/*!**********************!*\
  !*** ./src/Base.tsx ***!
  \**********************/
/*! exports provided: LiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveComponent", function() { return LiveComponent; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Base_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Base.scss */ "./src/Base.scss");
/* harmony import */ var _Base_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Base_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");








/* eslint-disable @typescript-eslint/no-unused-vars */



var LiveComponent =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(LiveComponent, _React$Component);

  function LiveComponent() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LiveComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LiveComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", _this.constructor.props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "className", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "refCanvas", react__WEBPACK_IMPORTED_MODULE_7__["createRef"]());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleKeyDown", function (e) {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleKeyUp", function (e) {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleTouchStart", function (e) {
      _this.canvas.focus();

      var rect = _this.canvas.getBoundingClientRect();

      var prevX = e.touches[0].pageX;
      var prevY = e.touches[0].pageY;
      var fromX = prevX - rect.left;
      var fromY = prevY - rect.top;
      var prevValue = _this.state.value;

      _this.handlePointerDown({
        x: fromX,
        y: fromY,
        originalEvent: e
      });

      var handleTouchMove = function handleTouchMove(e) {
        e.preventDefault();
        var pageX = e.changedTouches[0].pageX;
        var pageY = e.changedTouches[0].pageY;
        var movementX = pageX - prevX;
        var movementY = pageY - prevY;
        prevX = pageX;
        prevY = pageY;
        var x = pageX - rect.left;
        var y = pageY - rect.top;

        _this.handlePointerDrag({
          prevValue: prevValue,
          x: x,
          y: y,
          fromX: fromX,
          fromY: fromY,
          movementX: movementX,
          movementY: movementY,
          originalEvent: e
        });
      };

      var handleTouchEnd = function handleTouchEnd(e) {
        e.preventDefault();
        var x = e.changedTouches[0].pageX - rect.left;
        var y = e.changedTouches[0].pageY - rect.top;

        _this.handlePointerUp({
          x: x,
          y: y,
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
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleWheel", function (e) {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleClick", function (e) {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleMouseDown", function (e) {
      e.preventDefault();

      _this.canvas.focus();

      var rect = _this.canvas.getBoundingClientRect();

      var fromX = e.pageX - rect.left;
      var fromY = e.pageY - rect.top;
      var prevValue = _this.state.value;

      _this.handlePointerDown({
        x: fromX,
        y: fromY,
        originalEvent: e
      });

      var handleMouseMove = function handleMouseMove(e) {
        e.preventDefault();
        var x = e.pageX - rect.left;
        var y = e.pageY - rect.top;

        _this.handlePointerDrag({
          prevValue: prevValue,
          x: x,
          y: y,
          fromX: fromX,
          fromY: fromY,
          movementX: e.movementX,
          movementY: e.movementY,
          originalEvent: e
        });
      };

      var handleMouseUp = function handleMouseUp(e) {
        e.preventDefault();
        var x = e.pageX - rect.left;
        var y = e.pageY - rect.top;

        _this.handlePointerUp({
          x: x,
          y: y,
          originalEvent: e
        });

        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleMouseOver", function (e) {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleMouseOut", function (e) {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleContextMenu", function (e) {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handlePointerDown", function (e) {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handlePointerDrag", function (e) {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handlePointerUp", function (e) {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleFocusIn", function (e) {
      return _this.setState({
        focus: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleFocusOut", function (e) {
      return _this.setState({
        focus: false
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LiveComponent, [{
    key: "setValue",
    value: function setValue(value) {
      this.setState({
        value: value
      });
    }
  }, {
    key: "change",
    value: function change() {
      if (this.state.onChange) this.state.onChange({
        value: this.state.value,
        displayValue: this.displayValue
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(this.props);
      this.paint();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.paint();
    }
  }, {
    key: "paint",
    value: function paint() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("canvas", {
        ref: this.refCanvas,
        className: ["live-component", this.className].join(" "),
        tabIndex: 1,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        onTouchStart: this.handleTouchStart,
        onWheel: this.handleWheel,
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut,
        onContextMenu: this.handleContextMenu,
        onFocus: this.handleFocusIn,
        onBlur: this.handleFocusOut
      });
    }
  }, {
    key: "canvas",
    get: function get() {
      return this.refCanvas.current;
    }
  }, {
    key: "ctx",
    get: function get() {
      return this.refCanvas.current.getContext("2d");
    }
  }, {
    key: "isConnectedPolyfill",
    get: function get() {
      return !!this.refCanvas.current;
    }
  }, {
    key: "displayValue",
    get: function get() {
      var _this$state = this.state,
          value = _this$state.value,
          type = _this$state.type,
          unitstyle = _this$state.unitstyle,
          units = _this$state.units;
      if (type === "enum") return this.state.enum[value];
      if (unitstyle === "int") return value.toFixed(0);
      if (unitstyle === "float") return value.toFixed(2);
      if (unitstyle === "time") return value.toFixed(type === "int" ? 0 : 2) + " ms";
      if (unitstyle === "hertz") return value.toFixed(type === "int" ? 0 : 2) + " Hz";
      if (unitstyle === "decibel") return value.toFixed(type === "int" ? 0 : 2) + " dB";
      if (unitstyle === "%") return value.toFixed(type === "int" ? 0 : 2) + " %";
      if (unitstyle === "pan") return value === 0 ? "C" : (type === "int" ? Math.abs(value) : Math.abs(value).toFixed(2)) + (value < 0 ? " L" : " R");
      if (unitstyle === "semitones") return value.toFixed(type === "int" ? 0 : 2) + " st";
      if (unitstyle === "midi") return Object(_utils__WEBPACK_IMPORTED_MODULE_9__["toMIDI"])(value);
      if (unitstyle === "custom") return value.toFixed(type === "int" ? 0 : 2) + " " + units;
      if (unitstyle === "native") return value.toFixed(type === "int" ? 0 : 2);
      return "N/A";
    }
  }]);

  return LiveComponent;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(LiveComponent, "props", {
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
});

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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Base */ "./src/Base.tsx");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var LiveButton =
/*#__PURE__*/
function (_LiveComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(LiveButton, _LiveComponent);

  function LiveButton() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LiveButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LiveButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "className", "live-button");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "_inTouch", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "handlePointerDown", function () {
      _this._inTouch = true;

      _this.setValue(1);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "handlePointerUp", function () {
      _this._inTouch = false;

      _this.setValue(0);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LiveButton, [{
    key: "paint",
    value: function paint() {
      var _this2 = this;

      var _this$state = this.state,
          active = _this$state.active,
          focus = _this$state.focus,
          activebgcolor = _this$state.activebgcolor,
          activebgoncolor = _this$state.activebgoncolor,
          bgcolor = _this$state.bgcolor,
          bgoncolor = _this$state.bgoncolor,
          bordercolor = _this$state.bordercolor,
          focusbordercolor = _this$state.focusbordercolor,
          value = _this$state.value,
          width = _this$state.width,
          height = _this$state.height;
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
        setTimeout(function () {
          return _this2.setValue(0);
        }, 100);
      }
    }
  }, {
    key: "resetPointers",
    value: function resetPointers() {
      this._inTouch = false;
    }
  }], [{
    key: "props",
    get: function get() {
      return _objectSpread({}, _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LiveButton), "props", this), {
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
  }]);

  return LiveButton;
}(_Base__WEBPACK_IMPORTED_MODULE_8__["LiveComponent"]);



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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Base */ "./src/Base.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var LiveDial =
/*#__PURE__*/
function (_LiveComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(LiveDial, _LiveComponent);

  function LiveDial() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LiveDial);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LiveDial)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "className", "live-dial");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "_inTouch", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "interactionRect", [0, 0, 0, 0]);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "handlePointerDown", function (e) {
      if (e.x < _this.interactionRect[0] || e.x > _this.interactionRect[0] + _this.interactionRect[2] || e.y < _this.interactionRect[1] || e.y > _this.interactionRect[1] + _this.interactionRect[3]) return;
      _this._inTouch = true;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "handlePointerDrag", function (e) {
      if (!_this._inTouch) return;

      var newValue = _this.getValueFromDelta(e);

      if (newValue !== _this.state.value) _this.setValue(newValue);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "handlePointerUp", function () {
      _this._inTouch = false;
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LiveDial, [{
    key: "paint",
    value: function paint() {
      var _this$state = this.state,
          width = _this$state.width,
          height = _this$state.height,
          active = _this$state.active,
          focus = _this$state.focus,
          fontname = _this$state.fontname,
          fontsize = _this$state.fontsize,
          fontface = _this$state.fontface,
          appearance = _this$state.appearance,
          triangle = _this$state.triangle,
          showname = _this$state.showname,
          shownumber = _this$state.shownumber,
          bordercolor = _this$state.bordercolor,
          focusbordercolor = _this$state.focusbordercolor,
          panelcolor = _this$state.panelcolor,
          activeneedlecolor = _this$state.activeneedlecolor,
          needlecolor = _this$state.needlecolor,
          activedialcolor = _this$state.activedialcolor,
          dialcolor = _this$state.dialcolor,
          textcolor = _this$state.textcolor,
          tribordercolor = _this$state.tribordercolor,
          tricolor = _this$state.tricolor,
          shortname = _this$state.shortname;
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
        valPos = start + Object(_utils__WEBPACK_IMPORTED_MODULE_9__["toRad"])(this.distance * 270);
      } else {
        dialHeight = 25;
        start = Math.PI - 3 * Math.PI / 8;
        end = 2 * Math.PI + 3 * Math.PI / 8;
        valPos = start + Object(_utils__WEBPACK_IMPORTED_MODULE_9__["toRad"])(this.distance * 315);
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
        Object(_utils__WEBPACK_IMPORTED_MODULE_9__["roundedRect"])(ctx, 1, 1, width - 2, height - 2, 5);
        ctx.fillStyle = panelcolor;
        Object(_utils__WEBPACK_IMPORTED_MODULE_9__["fillRoundedRect"])(ctx, 1.2, 1.2, width - 2.4, 30 - 0.4, [5, 5, 0, 0]);
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
  }, {
    key: "getValueFromDelta",
    value: function getValueFromDelta(e) {
      var _this$state2 = this.state,
          type = _this$state2.type,
          mmin = _this$state2.mmin,
          mmax = _this$state2.mmax;
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
  }, {
    key: "resetPointers",
    value: function resetPointers() {
      this._inTouch = false;
    }
  }, {
    key: "trueSteps",
    get: function get() {
      var _this$state3 = this.state,
          type = _this$state3.type,
          mmax = _this$state3.mmax,
          mmin = _this$state3.mmin,
          steps = _this$state3.steps,
          step = _this$state3.step;
      var full = 100;
      var maxSteps = type === "enum" ? this.state.enum.length : type === "int" ? mmax - mmin : full;

      if (step) {
        if (type === "enum") return this.props.enum.length;
        if (type === "int") return Math.min(Math.floor((mmax - mmin) / (Math.round(step) || 1)), maxSteps);
        return Math.min(Math.floor((mmax - mmin) / step), maxSteps);
      }

      if (steps) return Math.min(steps, maxSteps);
      return maxSteps;
    }
  }, {
    key: "distance",
    get: function get() {
      var _this$state4 = this.state,
          type = _this$state4.type,
          mmax = _this$state4.mmax,
          mmin = _this$state4.mmin,
          value = _this$state4.value;
      return type === "enum" ? value / this.state.enum.length : (value - mmin) / (mmax - mmin);
    }
  }, {
    key: "stepRange",
    get: function get() {
      var full = 100;
      var trueSteps = this.trueSteps;
      return full / trueSteps;
    }
  }], [{
    key: "props",
    get: function get() {
      return _objectSpread({}, _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LiveDial), "props", this), {
        shortname: "live.dial",
        width: 45,
        height: 60,
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
  }]);

  return LiveDial;
}(_Base__WEBPACK_IMPORTED_MODULE_8__["LiveComponent"]);



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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Base */ "./src/Base.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var LiveMeter =
/*#__PURE__*/
function (_LiveComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(LiveMeter, _LiveComponent);

  function LiveMeter() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LiveMeter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LiveMeter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "className", "live-meter");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "paintValue", 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "maxValue", 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "paintTimer", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "maxTimer", void 0);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LiveMeter, [{
    key: "paint",
    value: function paint(paintIn) {
      var _this2 = this;

      this.paintValue = Math.max(this.paintValue, this.distance);

      if (!paintIn) {
        if (!this.paintTimer) this.paintTimer = setTimeout(function () {
          return _this2.paint(true);
        }, this.state.interval);
        return;
      }

      this.paintTimer = undefined;
      var _this$state = this.state,
          active = _this$state.active,
          width = _this$state.width,
          height = _this$state.height,
          orientation = _this$state.orientation,
          clip_size = _this$state.clip_size,
          bgcolor = _this$state.bgcolor,
          inactivecoldcolor = _this$state.inactivecoldcolor,
          inactivewarmcolor = _this$state.inactivewarmcolor,
          coldcolor = _this$state.coldcolor,
          warmcolor = _this$state.warmcolor,
          hotcolor = _this$state.hotcolor,
          overloadcolor = _this$state.overloadcolor;
      var ctx = this.ctx;
      var clip = clip_size === "normal" ? 10 : 20;
      var paintValue = this.paintValue;

      if (paintValue > this.maxValue) {
        this.maxValue = paintValue;
        if (this.maxTimer) clearTimeout(this.maxTimer);
        this.maxTimer = setTimeout(function () {
          return _this2.maxValue = _this2.paintValue;
        }, 1000);
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
  }, {
    key: "distance",
    get: function get() {
      var _this$state2 = this.state,
          mode = _this$state2.mode,
          value = _this$state2.value;
      return (mode === "decibel" ? Math.max(-70, value) : Object(_utils__WEBPACK_IMPORTED_MODULE_9__["atodb"])(Math.abs(value))) / 70 + 1;
    }
  }], [{
    key: "props",
    get: function get() {
      return _objectSpread({}, _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LiveMeter), "props", this), {
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
  }]);

  return LiveMeter;
}(_Base__WEBPACK_IMPORTED_MODULE_8__["LiveComponent"]);



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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Base */ "./src/Base.tsx");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var LiveNumbox =
/*#__PURE__*/
function (_LiveComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(LiveNumbox, _LiveComponent);

  function LiveNumbox() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LiveNumbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LiveNumbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "className", "live-numbox");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "_inTouch", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "handlePointerDown", function () {
      _this._inTouch = true;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "handlePointerDrag", function (e) {
      if (!_this._inTouch) return;

      var newValue = _this.getValueFromDelta(e);

      if (newValue !== _this.state.value) _this.setValue(newValue);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "handlePointerUp", function () {
      _this._inTouch = false;
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LiveNumbox, [{
    key: "paint",
    value: function paint() {
      var _this$state = this.state,
          width = _this$state.width,
          height = _this$state.height,
          active = _this$state.active,
          focus = _this$state.focus,
          fontname = _this$state.fontname,
          fontsize = _this$state.fontsize,
          fontface = _this$state.fontface,
          appearance = _this$state.appearance,
          activebgcolor = _this$state.activebgcolor,
          bordercolor = _this$state.bordercolor,
          focusbordercolor = _this$state.focusbordercolor,
          textcolor = _this$state.textcolor,
          tricolor = _this$state.tricolor,
          activetricolor = _this$state.activetricolor,
          tricolor2 = _this$state.tricolor2,
          activetricolor2 = _this$state.activetricolor2,
          activeslidercolor = _this$state.activeslidercolor;
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
  }, {
    key: "getValueFromDelta",
    value: function getValueFromDelta(e) {
      var _this$state2 = this.state,
          type = _this$state2.type,
          mmin = _this$state2.mmin,
          mmax = _this$state2.mmax;
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
  }, {
    key: "resetPointers",
    value: function resetPointers() {
      this._inTouch = false;
    }
  }, {
    key: "trueSteps",
    get: function get() {
      var _this$state3 = this.state,
          type = _this$state3.type,
          mmax = _this$state3.mmax,
          mmin = _this$state3.mmin,
          steps = _this$state3.steps,
          step = _this$state3.step;
      var full = 100;
      var maxSteps = type === "enum" ? this.state.enum.length : type === "int" ? mmax - mmin : full;

      if (step) {
        if (type === "enum") return this.props.enum.length;
        if (type === "int") return Math.min(Math.floor((mmax - mmin) / (Math.round(step) || 1)), maxSteps);
        return Math.min(Math.floor((mmax - mmin) / step), maxSteps);
      }

      if (steps) return Math.min(steps, maxSteps);
      return maxSteps;
    }
  }, {
    key: "distance",
    get: function get() {
      var _this$state4 = this.state,
          type = _this$state4.type,
          mmax = _this$state4.mmax,
          mmin = _this$state4.mmin,
          value = _this$state4.value;
      return type === "enum" ? value / this.state.enum.length : (value - mmin) / (mmax - mmin);
    }
  }, {
    key: "stepRange",
    get: function get() {
      var full = 100;
      var trueSteps = this.trueSteps;
      return full / trueSteps;
    }
  }], [{
    key: "props",
    get: function get() {
      return _objectSpread({}, _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LiveNumbox), "props", this), {
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
  }]);

  return LiveNumbox;
}(_Base__WEBPACK_IMPORTED_MODULE_8__["LiveComponent"]);



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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Base */ "./src/Base.tsx");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var LiveSlider =
/*#__PURE__*/
function (_LiveComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(LiveSlider, _LiveComponent);

  function LiveSlider() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LiveSlider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LiveSlider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "className", "live-slider");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "_inTouch", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "interactionRect", [0, 0, 0, 0]);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "handlePointerDown", function (e) {
      var value = _this.state.value;
      if (e.x < _this.interactionRect[0] || e.x > _this.interactionRect[0] + _this.interactionRect[2] || e.y < _this.interactionRect[1] || e.y > _this.interactionRect[1] + _this.interactionRect[3]) return;

      var newValue = _this.getValueFromPos(e);

      if (newValue !== value) _this.setValue(_this.getValueFromPos(e));
      _this._inTouch = true;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "handlePointerDrag", function (e) {
      if (!_this._inTouch) return;

      var newValue = _this.getValueFromPos(e);

      if (newValue !== _this.state.value) _this.setValue(newValue);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "handlePointerUp", function () {
      _this._inTouch = false;
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LiveSlider, [{
    key: "paint",
    value: function paint() {
      var _this$state = this.state,
          width = _this$state.width,
          height = _this$state.height,
          fontname = _this$state.fontname,
          fontsize = _this$state.fontsize,
          fontface = _this$state.fontface,
          orientation = _this$state.orientation,
          showname = _this$state.showname,
          shownumber = _this$state.shownumber,
          slidercolor = _this$state.slidercolor,
          textcolor = _this$state.textcolor,
          tribordercolor = _this$state.tribordercolor,
          trioncolor = _this$state.trioncolor,
          tricolor = _this$state.tricolor,
          shortname = _this$state.shortname;
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
  }, {
    key: "getValueFromPos",
    value: function getValueFromPos(e) {
      var _this$state2 = this.state,
          orientation = _this$state2.orientation,
          type = _this$state2.type,
          mmin = _this$state2.mmin,
          mmax = _this$state2.mmax;
      var stepRange = this.stepRange;
      var trueSteps = this.trueSteps;
      var step = type === "enum" ? 1 : (mmax - mmin) / trueSteps;
      var steps = Math.round((orientation === "vertical" ? this.interactionRect[3] - (e.y - this.interactionRect[1]) : e.x - this.interactionRect[0]) / stepRange);
      steps = Math.min(trueSteps, Math.max(0, steps));
      if (type === "enum") return steps;
      if (type === "int") return Math.round(steps * step + mmin);
      return steps * step + mmin;
    }
  }, {
    key: "resetPointers",
    value: function resetPointers() {
      this._inTouch = false;
    }
  }, {
    key: "trueSteps",
    get: function get() {
      var _this$state3 = this.state,
          orientation = _this$state3.orientation,
          type = _this$state3.type,
          mmax = _this$state3.mmax,
          mmin = _this$state3.mmin,
          steps = _this$state3.steps,
          step = _this$state3.step;
      var full = this.interactionRect[orientation === "vertical" ? 3 : 2];
      var maxSteps = type === "enum" ? this.state.enum.length : type === "int" ? mmax - mmin : full;

      if (step) {
        if (type === "enum") return this.state.enum.length;
        if (type === "int") return Math.min(Math.floor((mmax - mmin) / (Math.round(step) || 0)), maxSteps);
        return Math.min(Math.floor((mmax - mmin) / step), maxSteps);
      }

      if (steps) return Math.min(steps, maxSteps);
      return maxSteps;
    }
  }, {
    key: "distance",
    get: function get() {
      var _this$state4 = this.state,
          type = _this$state4.type,
          mmax = _this$state4.mmax,
          mmin = _this$state4.mmin,
          value = _this$state4.value;
      return type === "enum" ? value / this.state.enum.length : (value - mmin) / (mmax - mmin);
    }
  }, {
    key: "stepRange",
    get: function get() {
      var orientation = this.state.orientation;
      var full = this.interactionRect[orientation === "vertical" ? 3 : 2];
      var trueSteps = this.trueSteps;
      return full / trueSteps;
    }
  }], [{
    key: "props",
    get: function get() {
      return _objectSpread({}, _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LiveSlider), "props", this), {
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
  }]);

  return LiveSlider;
}(_Base__WEBPACK_IMPORTED_MODULE_8__["LiveComponent"]);



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
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Base */ "./src/Base.tsx");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var LiveTab =
/*#__PURE__*/
function (_LiveComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(LiveTab, _LiveComponent);

  function LiveTab() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LiveTab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(LiveTab)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "className", "live-tab");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "_inTouch", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "tabRects", []);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handlePointerDown", function (e) {
      _this._inTouch = true;

      for (var i = 0; i < _this.tabRects.length; i++) {
        var rect = _this.tabRects[i];

        if (e.x >= rect[0] && e.x <= rect[2] + rect[0] && e.y >= rect[1] && e.y <= rect[3] + rect[1]) {
          _this.setValue(i);

          return;
        }
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handlePointerDrag", function (e) {
      _this.handlePointerDown(e);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handlePointerUp", function () {
      _this._inTouch = false;
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LiveTab, [{
    key: "getTabRects",
    value: function getTabRects() {
      var _this$state = this.state,
          width = _this$state.width,
          height = _this$state.height,
          multiline = _this$state.multiline,
          mode = _this$state.mode,
          spacing_x = _this$state.spacing_x,
          spacing_y = _this$state.spacing_y;
      var enums = this.state.enum;
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
  }, {
    key: "paint",
    value: function paint() {
      var _this$state2 = this.state,
          active = _this$state2.active,
          focus = _this$state2.focus,
          fontname = _this$state2.fontname,
          fontsize = _this$state2.fontsize,
          fontface = _this$state2.fontface,
          activebgcolor = _this$state2.activebgcolor,
          activebgoncolor = _this$state2.activebgoncolor,
          bgcolor = _this$state2.bgcolor,
          bgoncolor = _this$state2.bgoncolor,
          bordercolor = _this$state2.bordercolor,
          focusbordercolor = _this$state2.focusbordercolor,
          textcolor = _this$state2.textcolor,
          textoncolor = _this$state2.textoncolor,
          activetextcolor = _this$state2.activetextcolor,
          activetextoncolor = _this$state2.activetextoncolor,
          value = _this$state2.value,
          width = _this$state2.width,
          height = _this$state2.height;
      var enums = this.state.enum;
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
        ctx.rect.apply(ctx, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(tabRects[i]));
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
  }, {
    key: "resetPointers",
    value: function resetPointers() {
      this._inTouch = false;
    }
  }], [{
    key: "props",
    get: function get() {
      return _objectSpread({}, _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(LiveTab), "props", this), {
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
  }]);

  return LiveTab;
}(_Base__WEBPACK_IMPORTED_MODULE_9__["LiveComponent"]);



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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Base */ "./src/Base.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var LiveText =
/*#__PURE__*/
function (_LiveComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(LiveText, _LiveComponent);

  function LiveText() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LiveText);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LiveText)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "className", "live-text");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "_inTouch", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "handlePointerDown", function () {
      var _this$state = _this.state,
          value = _this$state.value,
          mode = _this$state.mode;
      _this._inTouch = true;

      _this.setValue(mode === "button" ? 1 : 1 - value);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "handlePointerUp", function () {
      _this._inTouch = false;
      if (_this.state.mode === "button") _this.setValue(0);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LiveText, [{
    key: "paint",
    value: function paint() {
      var _this$state2 = this.state,
          active = _this$state2.active,
          focus = _this$state2.focus,
          fontname = _this$state2.fontname,
          fontsize = _this$state2.fontsize,
          fontface = _this$state2.fontface,
          text = _this$state2.text,
          texton = _this$state2.texton,
          activebgcolor = _this$state2.activebgcolor,
          activebgoncolor = _this$state2.activebgoncolor,
          bgcolor = _this$state2.bgcolor,
          bgoncolor = _this$state2.bgoncolor,
          bordercolor = _this$state2.bordercolor,
          focusbordercolor = _this$state2.focusbordercolor,
          textcolor = _this$state2.textcolor,
          textoncolor = _this$state2.textoncolor,
          activetextcolor = _this$state2.activetextcolor,
          activetextoncolor = _this$state2.activetextoncolor,
          mode = _this$state2.mode,
          value = _this$state2.value,
          width = _this$state2.width,
          height = _this$state2.height;
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
        Object(_utils__WEBPACK_IMPORTED_MODULE_9__["fillRoundedRect"])(ctx, 0.5, 0.5, width - 1, height - 1, height * 0.5 - 1);
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
  }, {
    key: "resetPointers",
    value: function resetPointers() {
      this._inTouch = false;
    }
  }], [{
    key: "props",
    get: function get() {
      return _objectSpread({}, _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LiveText), "props", this), {
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
  }]);

  return LiveText;
}(_Base__WEBPACK_IMPORTED_MODULE_8__["LiveComponent"]);



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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Base */ "./src/Base.tsx");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var LiveToggle =
/*#__PURE__*/
function (_LiveComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(LiveToggle, _LiveComponent);

  function LiveToggle() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LiveToggle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LiveToggle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "className", "live-toggle");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "handlePointerDown", function () {
      var value = _this.state.value;

      _this.setValue(1 - value);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LiveToggle, [{
    key: "paint",
    value: function paint() {
      var _this$state = this.state,
          active = _this$state.active,
          focus = _this$state.focus,
          activebgcolor = _this$state.activebgcolor,
          activebgoncolor = _this$state.activebgoncolor,
          bgcolor = _this$state.bgcolor,
          bgoncolor = _this$state.bgoncolor,
          bordercolor = _this$state.bordercolor,
          focusbordercolor = _this$state.focusbordercolor,
          value = _this$state.value,
          width = _this$state.width,
          height = _this$state.height;
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
  }], [{
    key: "props",
    get: function get() {
      return _objectSpread({}, _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LiveToggle), "props", this), {
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
  }]);

  return LiveToggle;
}(_Base__WEBPACK_IMPORTED_MODULE_8__["LiveComponent"]);



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: LiveButton, LiveSlider, LiveDial, LiveToggle, LiveText, LiveNumbox, LiveTab, LiveMeter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/Button.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiveButton", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ "./src/Slider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiveSlider", function() { return _Slider__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Dial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dial */ "./src/Dial.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiveDial", function() { return _Dial__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toggle */ "./src/Toggle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiveToggle", function() { return _Toggle__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Text */ "./src/Text.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiveText", function() { return _Text__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Numbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Numbox */ "./src/Numbox.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiveNumbox", function() { return _Numbox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tab */ "./src/Tab.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiveTab", function() { return _Tab__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Meter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Meter */ "./src/Meter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiveMeter", function() { return _Meter__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: toMIDI, toRad, atodb, dbtoa, roundedRect, fillRoundedRect, getDisplayValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMIDI", function() { return toMIDI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRad", function() { return toRad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atodb", function() { return atodb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbtoa", function() { return dbtoa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundedRect", function() { return roundedRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillRoundedRect", function() { return fillRoundedRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayValue", function() { return getDisplayValue; });
var toMIDI = function toMIDI(f) {
  return ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"][(f % 12 + 12) % 12] + Math.round(f / 12 - 2);
};
var toRad = function toRad(degrees) {
  return degrees * Math.PI / 180;
};
var atodb = function atodb(a) {
  return 20 * Math.log10(a);
};
var dbtoa = function dbtoa(db) {
  return Math.pow(10, db / 20);
};
var roundedRect = function roundedRect(ctx, x, y, width, height, radius) {
  var radii = [0, 0, 0, 0];
  if (typeof radius === "number") radii.fill(radius);else radius.forEach(function (v, i) {
    return radii[i] = v;
  });
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
var fillRoundedRect = function fillRoundedRect(ctx, x, y, width, height, radius) {
  var radii = [0, 0, 0, 0];
  if (typeof radius === "number") radii.fill(radius);else radius.forEach(function (v, i) {
    return radii[i] = v;
  });
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
var getDisplayValue = function getDisplayValue(value, type, unitstyle, units, enums) {
  if (type === "enum") return enums[value];
  if (unitstyle === "int") return value.toFixed(0);
  if (unitstyle === "float") return value.toFixed(2);
  if (unitstyle === "time") return value.toFixed(type === "int" ? 0 : 2) + " ms";
  if (unitstyle === "hertz") return value.toFixed(type === "int" ? 0 : 2) + " Hz";
  if (unitstyle === "decibel") return value.toFixed(type === "int" ? 0 : 2) + " dB";
  if (unitstyle === "%") return value.toFixed(type === "int" ? 0 : 2) + " %";
  if (unitstyle === "pan") return value === 0 ? "C" : (type === "int" ? Math.abs(value) : Math.abs(value).toFixed(2)) + (value < 0 ? " L" : " R");
  if (unitstyle === "semitones") return value.toFixed(type === "int" ? 0 : 2) + " st";
  if (unitstyle === "midi") return toMIDI(value);
  if (unitstyle === "custom") return value.toFixed(type === "int" ? 0 : 2) + " " + units;
  if (unitstyle === "native") return value.toFixed(type === "int" ? 0 : 2);
  return "N/A";
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3N1cGVyUHJvcEJhc2UuanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy9CYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL0Jhc2Uuc2Nzcz9kOWYzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL0Jhc2UudHN4Iiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL0J1dHRvbi50cyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy9EaWFsLnRzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL01ldGVyLnRzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL051bWJveC50cyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy9TbGlkZXIudHMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9zcmMvVGFiLnRzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL1RleHQudHMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9zcmMvVG9nZ2xlLnRzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbIkxpdmVDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiUmVhY3QiLCJlIiwiY2FudmFzIiwiZm9jdXMiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicHJldlgiLCJ0b3VjaGVzIiwicGFnZVgiLCJwcmV2WSIsInBhZ2VZIiwiZnJvbVgiLCJsZWZ0IiwiZnJvbVkiLCJ0b3AiLCJwcmV2VmFsdWUiLCJzdGF0ZSIsInZhbHVlIiwiaGFuZGxlUG9pbnRlckRvd24iLCJ4IiwieSIsIm9yaWdpbmFsRXZlbnQiLCJoYW5kbGVUb3VjaE1vdmUiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZWRUb3VjaGVzIiwibW92ZW1lbnRYIiwibW92ZW1lbnRZIiwiaGFuZGxlUG9pbnRlckRyYWciLCJoYW5kbGVUb3VjaEVuZCIsImhhbmRsZVBvaW50ZXJVcCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VVcCIsInNldFN0YXRlIiwib25DaGFuZ2UiLCJkaXNwbGF5VmFsdWUiLCJwYWludCIsInJlZkNhbnZhcyIsImNsYXNzTmFtZSIsImpvaW4iLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlS2V5VXAiLCJoYW5kbGVUb3VjaFN0YXJ0IiwiaGFuZGxlV2hlZWwiLCJoYW5kbGVDbGljayIsImhhbmRsZU1vdXNlRG93biIsImhhbmRsZU1vdXNlT3ZlciIsImhhbmRsZU1vdXNlT3V0IiwiaGFuZGxlQ29udGV4dE1lbnUiLCJoYW5kbGVGb2N1c0luIiwiaGFuZGxlRm9jdXNPdXQiLCJjdXJyZW50IiwiZ2V0Q29udGV4dCIsInR5cGUiLCJ1bml0c3R5bGUiLCJ1bml0cyIsImVudW0iLCJ0b0ZpeGVkIiwiTWF0aCIsImFicyIsInRvTUlESSIsImFjdGl2ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2hvcnRuYW1lIiwibG9uZ25hbWUiLCJvcmRlciIsImxpbmtuYW1lcyIsIm1taW4iLCJtbWF4IiwiZW51bV9pY29ucyIsIm1vZG1vZGUiLCJpbml0aWFsX2VuYWJsZSIsImluaXRpYWwiLCJleHBvbmVudCIsInN0ZXAiLCJzdGVwcyIsInNwZWVkbGltIiwiZGVmZXIiLCJpbnZpc2libGUiLCJtYXBwYWJsZSIsIkxpdmVCdXR0b24iLCJfaW5Ub3VjaCIsInNldFZhbHVlIiwiYWN0aXZlYmdjb2xvciIsImFjdGl2ZWJnb25jb2xvciIsImJnY29sb3IiLCJiZ29uY29sb3IiLCJib3JkZXJjb2xvciIsImZvY3VzYm9yZGVyY29sb3IiLCJjdHgiLCJib3JkZXJXaWR0aCIsInN0eWxlIiwibGluZVdpZHRoIiwiYnV0dG9uQmdDb2xvciIsImJ1dHRvbkJvcmRlckNvbG9yIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiZWxsaXBzZSIsIlBJIiwiZmlsbCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwic2V0VGltZW91dCIsIkxpdmVEaWFsIiwiaW50ZXJhY3Rpb25SZWN0IiwibmV3VmFsdWUiLCJnZXRWYWx1ZUZyb21EZWx0YSIsImZvbnRuYW1lIiwiZm9udHNpemUiLCJmb250ZmFjZSIsImFwcGVhcmFuY2UiLCJ0cmlhbmdsZSIsInNob3duYW1lIiwic2hvd251bWJlciIsInBhbmVsY29sb3IiLCJhY3RpdmVuZWVkbGVjb2xvciIsIm5lZWRsZWNvbG9yIiwiYWN0aXZlZGlhbGNvbG9yIiwiZGlhbGNvbG9yIiwidGV4dGNvbG9yIiwidHJpYm9yZGVyY29sb3IiLCJ0cmljb2xvciIsImRpc3RhbmNlIiwidHJpYW5nbGVIZWlnaHQiLCJ0cmlhbmdsZUxpbmVXaWR0aCIsInN0YXJ0IiwiZW5kIiwidmFsUG9zIiwiZGlhbEhlaWdodCIsInRvUmFkIiwiZGlhbFJhZGl1cyIsImRpYWxDZW50ZXJYIiwiZGlhbENlbnRlclkiLCJhcmNTdGFydFgiLCJjb3MiLCJhcmNTdGFydFkiLCJzaW4iLCJhcmNFbmRYIiwiYXJjRW5kWSIsInZhbHVlUG9zWCIsInZhbHVlUG9zWSIsImVuZENhcFJhZGl1cyIsInBhbmVsT2Zmc2V0Iiwicm91bmRlZFJlY3QiLCJmaWxsUm91bmRlZFJlY3QiLCJhcmMiLCJtaWRwb2ludCIsIm1vdmVUbyIsImxpbmVUbyIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsInRpbnlPZmZzZXQiLCJ0aXBQb3NpdGlvblgiLCJ0aXBQb3NpdGlvblkiLCJzdGVwUmFuZ2UiLCJ0cnVlU3RlcHMiLCJwcmV2U3RlcHMiLCJkU3RlcHMiLCJyb3VuZCIsIm1pbiIsIm1heCIsImZ1bGwiLCJtYXhTdGVwcyIsImxlbmd0aCIsImZsb29yIiwiTGl2ZU1ldGVyIiwicGFpbnRJbiIsInBhaW50VmFsdWUiLCJwYWludFRpbWVyIiwiaW50ZXJ2YWwiLCJ1bmRlZmluZWQiLCJvcmllbnRhdGlvbiIsImNsaXBfc2l6ZSIsImluYWN0aXZlY29sZGNvbG9yIiwiaW5hY3RpdmV3YXJtY29sb3IiLCJjb2xkY29sb3IiLCJ3YXJtY29sb3IiLCJob3Rjb2xvciIsIm92ZXJsb2FkY29sb3IiLCJjbGlwIiwibWF4VmFsdWUiLCJtYXhUaW1lciIsImNsZWFyVGltZW91dCIsIndhcm1TdG9wIiwiaG90U3RvcCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJmaWxsUmVjdCIsImRyYXdIZWlnaHQiLCJtb2RlIiwiYXRvZGIiLCJMaXZlTnVtYm94IiwiYWN0aXZldHJpY29sb3IiLCJ0cmljb2xvcjIiLCJhY3RpdmV0cmljb2xvcjIiLCJhY3RpdmVzbGlkZXJjb2xvciIsImNsb3NlUGF0aCIsInRleHRCYXNlbGluZSIsIkxpdmVTbGlkZXIiLCJnZXRWYWx1ZUZyb21Qb3MiLCJzbGlkZXJjb2xvciIsInRyaW9uY29sb3IiLCJwYWRkaW5nIiwiaW50ZXJhY3Rpb25XaWR0aCIsInRyaU9yaWdpbiIsInJlbGF0aXZlIiwiTGl2ZVRhYiIsImkiLCJ0YWJSZWN0cyIsIm11bHRpbGluZSIsInNwYWNpbmdfeCIsInNwYWNpbmdfeSIsImVudW1zIiwibWFyZ2luIiwibWluSGVpZ2h0IiwiY291bnQiLCJjb3VudFBlckxpbmUiLCJsaW5lcyIsInJlY3RXaWR0aCIsInNwYWNpbmdYIiwic3BhY2luZ1kiLCJjZWlsIiwidGV4dFdpZHRocyIsInRvdGFsIiwic3BhY2UiLCJqIiwidGV4dERpbWVuc2lvbnMiLCJtZWFzdXJlVGV4dCIsInVzZWQiLCJyZWN0U3BhY2UiLCJ0ZXh0b25jb2xvciIsImFjdGl2ZXRleHRjb2xvciIsImFjdGl2ZXRleHRvbmNvbG9yIiwiZ2V0VGFiUmVjdHMiLCJMaXZlVGV4dCIsInRleHQiLCJ0ZXh0b24iLCJMaXZlVG9nZ2xlIiwiZiIsImRlZ3JlZXMiLCJhIiwibG9nMTAiLCJkYnRvYSIsImRiIiwicmFkaXVzIiwicmFkaWkiLCJmb3JFYWNoIiwidiIsInF1YWRyYXRpY0N1cnZlVG8iLCJnZXREaXNwbGF5VmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBLGlEQUFpRCxnQkFBZ0I7QUFDakU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUJBQWlC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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBEOztBQUUxRCwwRkFBMEYsYUFBYTtBQUN2RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBiQUEwYjs7QUFFMWI7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FB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QyxLQUEvQztBQUMvQixNQUFJQyxTQUFTLEtBQUssTUFBbEIsRUFBMEIsT0FBT00sTUFBTSxDQUFDOUMsS0FBRCxDQUFiO0FBQzFCLE1BQUl3QyxTQUFTLEtBQUssUUFBbEIsRUFBNEIsT0FBT3hDLEtBQUssQ0FBQzJDLE9BQU4sQ0FBY0osSUFBSSxLQUFLLEtBQVQsR0FBaUIsQ0FBakIsR0FBcUIsQ0FBbkMsSUFBd0MsR0FBeEMsR0FBOENFLEtBQXJEO0FBQzVCLE1BQUlELFNBQVMsS0FBSyxRQUFsQixFQUE0QixPQUFPeEMsS0FBSyxDQUFDMkMsT0FBTixDQUFjSixJQUFJLEtBQUssS0FBVCxHQUFpQixDQUFqQixHQUFxQixDQUFuQyxDQUFQO0FBQzVCLFNBQU8sS0FBUDtBQUNILENBZE0sQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkxpdmVDb21wb25lbnRzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkxpdmVDb21wb25lbnRzXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJ2YXIgc3VwZXJQcm9wQmFzZSA9IHJlcXVpcmUoXCIuL3N1cGVyUHJvcEJhc2VcIik7XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBzdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zdXBlclByb3BCYXNlOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5saXZlLWNvbXBvbmVudCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgfVxcbiAgLmxpdmUtY29tcG9uZW50OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMS4wXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMnKTtcblxuLy8gVE9ETzogdGhpcyBpcyBzcGVjaWFsIGJlY2F1c2UgaXQgZ2V0cyBpbXBvcnRlZCBkdXJpbmcgYnVpbGQuXG5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTYuMTEuMCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxuXG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIERvIG5vdCByZXF1aXJlIHRoaXMgbW9kdWxlIGRpcmVjdGx5ISBVc2Ugbm9ybWFsIGBpbnZhcmlhbnRgIGNhbGxzIHdpdGhcbi8vIHRlbXBsYXRlIGxpdGVyYWwgc3RyaW5ncy4gVGhlIG1lc3NhZ2VzIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBlcnJvciBjb2Rlc1xuLy8gZHVyaW5nIGJ1aWxkLlxuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG4vKipcbiAqIEZvcmtlZCBmcm9tIGZianMvd2FybmluZzpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvZTY2YmEyMGFkNWJlNDMzZWI1NDQyM2YyYjA5N2Q4MjkzMjRkOWRlNi9wYWNrYWdlcy9mYmpzL3NyYy9fX2ZvcmtzX18vd2FybmluZy5qc1xuICpcbiAqIE9ubHkgY2hhbmdlIGlzIHdlIHVzZSBjb25zb2xlLndhcm4gaW5zdGVhZCBvZiBjb25zb2xlLmVycm9yLFxuICogYW5kIGRvIG5vdGhpbmcgd2hlbiAnY29uc29sZScgaXMgbm90IHN1cHBvcnRlZC5cbiAqIFRoaXMgcmVhbGx5IHNpbXBsaWZpZXMgdGhlIGNvZGUuXG4gKiAtLS1cbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xudmFyIGxvd1ByaW9yaXR5V2FybmluZ1dpdGhvdXRTdGFjayA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgbG93UHJpb3JpdHlXYXJuaW5nV2l0aG91dFN0YWNrID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bsb3dQcmlvcml0eVdhcm5pbmdXaXRob3V0U3RhY2soY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh2b2lkIDAsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nV2l0aG91dFN0YWNrJDEgPSBsb3dQcmlvcml0eVdhcm5pbmdXaXRob3V0U3RhY2s7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG52YXIgd2FybmluZ1dpdGhvdXRTdGFjayA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHdhcm5pbmdXaXRob3V0U3RhY2sgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmdXaXRob3V0U3RhY2soY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gOCkge1xuICAgICAgLy8gQ2hlY2sgYmVmb3JlIHRoZSBjb25kaXRpb24gdG8gY2F0Y2ggdmlvbGF0aW9ucyBlYXJseS5cbiAgICAgIHRocm93IG5ldyBFcnJvcignd2FybmluZ1dpdGhvdXRTdGFjaygpIGN1cnJlbnRseSBzdXBwb3J0cyBhdCBtb3N0IDggYXJndW1lbnRzLicpO1xuICAgIH1cblxuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgICAgfSk7XG4gICAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcblxuICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5lcnJvciwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbnZhciB3YXJuaW5nV2l0aG91dFN0YWNrJDEgPSB3YXJuaW5nV2l0aG91dFN0YWNrO1xuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsIFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvcihcInNldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xuXG5cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuXG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuXG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50OyAvLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cblxuX2Fzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcblxucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHN1c3BlbnNlOiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBCRUZPUkVfU0xBU0hfUkUgPSAvXiguKilbXFxcXFxcL10vO1xudmFyIGRlc2NyaWJlQ29tcG9uZW50RnJhbWUgPSBmdW5jdGlvbiAobmFtZSwgc291cmNlLCBvd25lck5hbWUpIHtcbiAgdmFyIHNvdXJjZUluZm8gPSAnJztcblxuICBpZiAoc291cmNlKSB7XG4gICAgdmFyIHBhdGggPSBzb3VyY2UuZmlsZU5hbWU7XG4gICAgdmFyIGZpbGVOYW1lID0gcGF0aC5yZXBsYWNlKEJFRk9SRV9TTEFTSF9SRSwgJycpO1xuXG4gICAge1xuICAgICAgLy8gSW4gREVWLCBpbmNsdWRlIGNvZGUgZm9yIGEgY29tbW9uIHNwZWNpYWwgY2FzZTpcbiAgICAgIC8vIHByZWZlciBcImZvbGRlci9pbmRleC5qc1wiIGluc3RlYWQgb2YganVzdCBcImluZGV4LmpzXCIuXG4gICAgICBpZiAoL15pbmRleFxcLi8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gcGF0aC5tYXRjaChCRUZPUkVfU0xBU0hfUkUpO1xuXG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIHZhciBwYXRoQmVmb3JlU2xhc2ggPSBtYXRjaFsxXTtcblxuICAgICAgICAgIGlmIChwYXRoQmVmb3JlU2xhc2gpIHtcbiAgICAgICAgICAgIHZhciBmb2xkZXJOYW1lID0gcGF0aEJlZm9yZVNsYXNoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG4gICAgICAgICAgICBmaWxlTmFtZSA9IGZvbGRlck5hbWUgKyAnLycgKyBmaWxlTmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzb3VyY2VJbmZvID0gJyAoYXQgJyArIGZpbGVOYW1lICsgJzonICsgc291cmNlLmxpbmVOdW1iZXIgKyAnKSc7XG4gIH0gZWxzZSBpZiAob3duZXJOYW1lKSB7XG4gICAgc291cmNlSW5mbyA9ICcgKGNyZWF0ZWQgYnkgJyArIG93bmVyTmFtZSArICcpJztcbiAgfVxuXG4gIHJldHVybiAnXFxuICAgIGluICcgKyAobmFtZSB8fCAnVW5rbm93bicpICsgc291cmNlSW5mbztcbn07XG5cbnZhciBSZXNvbHZlZCA9IDE7XG5cbmZ1bmN0aW9uIHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudChsYXp5Q29tcG9uZW50KSB7XG4gIHJldHVybiBsYXp5Q29tcG9uZW50Ll9zdGF0dXMgPT09IFJlc29sdmVkID8gbGF6eUNvbXBvbmVudC5fcmVzdWx0IDogbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gXCJQcm9maWxlclwiO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHRoZW5hYmxlID0gdHlwZTtcbiAgICAgICAgICB2YXIgcmVzb2x2ZWRUaGVuYWJsZSA9IHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudCh0aGVuYWJsZSk7XG5cbiAgICAgICAgICBpZiAocmVzb2x2ZWRUaGVuYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUocmVzb2x2ZWRUaGVuYWJsZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cbn1cblxue1xuICAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQudHlwZSk7XG4gICAgICB2YXIgb3duZXIgPSBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fb3duZXI7XG4gICAgICBzdGFjayArPSBkZXNjcmliZUNvbXBvbmVudEZyYW1lKG5hbWUsIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9zb3VyY2UsIG93bmVyICYmIGdldENvbXBvbmVudE5hbWUob3duZXIudHlwZSkpO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGFjdCgpIHRvIHRyYWNrIHdoZXRoZXIgeW91J3JlIGluc2lkZSBhbiBhY3QoKSBzY29wZS5cbiAqL1xudmFyIElzU29tZVJlbmRlcmVyQWN0aW5nID0ge1xuICBjdXJyZW50OiBmYWxzZVxufTtcblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgSXNTb21lUmVuZGVyZXJBY3Rpbmc6IElzU29tZVJlbmRlcmVyQWN0aW5nLFxuICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICBhc3NpZ246IF9hc3NpZ25cbn07XG5cbntcbiAgX2Fzc2lnbihSZWFjdFNoYXJlZEludGVybmFscywge1xuICAgIC8vIFRoZXNlIHNob3VsZCBub3QgYmUgaW5jbHVkZWQgaW4gcHJvZHVjdGlvbi5cbiAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lOiBSZWFjdERlYnVnQ3VycmVudEZyYW1lLFxuICAgIC8vIFNoaW0gZm9yIFJlYWN0IERPTSAxNi4wLjAgd2hpY2ggc3RpbGwgZGVzdHJ1Y3R1cmVkIChidXQgbm90IHVzZWQpIHRoaXMuXG4gICAgLy8gVE9ETzogcmVtb3ZlIGluIFJlYWN0IDE3LjAuXG4gICAgUmVhY3RDb21wb25lbnRUcmVlSG9vazoge31cbiAgfSk7XG59XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gd2FybmluZ1dpdGhvdXRTdGFjayQxO1xuXG57XG4gIHdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvd2FybmluZy1hbmQtaW52YXJpYW50LWFyZ3NcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMS5hcHBseSh2b2lkIDAsIFtmYWxzZSwgZm9ybWF0ICsgJyVzJ10uY29uY2F0KGFyZ3MsIFtzdGFja10pKTtcbiAgfTtcbn1cblxudmFyIHdhcm5pbmckMSA9IHdhcm5pbmc7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuXG5cbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICB9XG5cbiAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gIH1cblxuICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgIH1cbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAocmVmKSB7XG4gICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbi8qKlxuICogUmV0dXJuIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBSZWFjdEVsZW1lbnRzIG9mIGEgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZmFjdG9yeVxuICovXG5cblxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvcihcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9ICgnJyArIGtleSkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gKCcnICsgdGV4dCkucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuXG52YXIgUE9PTF9TSVpFID0gMTA7XG52YXIgdHJhdmVyc2VDb250ZXh0UG9vbCA9IFtdO1xuXG5mdW5jdGlvbiBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobWFwUmVzdWx0LCBrZXlQcmVmaXgsIG1hcEZ1bmN0aW9uLCBtYXBDb250ZXh0KSB7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCkge1xuICAgIHZhciB0cmF2ZXJzZUNvbnRleHQgPSB0cmF2ZXJzZUNvbnRleHRQb29sLnBvcCgpO1xuICAgIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBtYXBSZXN1bHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IGtleVByZWZpeDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG1hcEZ1bmN0aW9uO1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbWFwQ29udGV4dDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICAgIHJldHVybiB0cmF2ZXJzZUNvbnRleHQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdDogbWFwUmVzdWx0LFxuICAgICAga2V5UHJlZml4OiBrZXlQcmVmaXgsXG4gICAgICBmdW5jOiBtYXBGdW5jdGlvbixcbiAgICAgIGNvbnRleHQ6IG1hcENvbnRleHQsXG4gICAgICBjb3VudDogMFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcblxuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGggPCBQT09MX1NJWkUpIHtcbiAgICB0cmF2ZXJzZUNvbnRleHRQb29sLnB1c2godHJhdmVyc2VDb250ZXh0KTtcbiAgfVxufVxuLyoqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7IXN0cmluZ30gbmFtZVNvRmFyIE5hbWUgb2YgdGhlIGtleSBwYXRoIHNvIGZhci5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayB0byBpbnZva2Ugd2l0aCBlYWNoIGNoaWxkIGZvdW5kLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IFVzZWQgdG8gcGFzcyBpbmZvcm1hdGlvbiB0aHJvdWdob3V0IHRoZSB0cmF2ZXJzYWxcbiAqIHByb2Nlc3MuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCBuYW1lU29GYXIsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sodHJhdmVyc2VDb250ZXh0LCBjaGlsZHJlbiwgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzLlxuICAgIG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRDb21wb25lbnRLZXkoY2hpbGRyZW4sIDApIDogbmFtZVNvRmFyKTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cblxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gY2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgICFkaWRXYXJuQWJvdXRNYXBzID8gd2FybmluZyQxKGZhbHNlLCAnVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyB1bnN1cHBvcnRlZCBhbmQgd2lsbCBsaWtlbHkgeWllbGQgJyArICd1bmV4cGVjdGVkIHJlc3VsdHMuIENvbnZlcnQgaXQgdG8gYSBzZXF1ZW5jZS9pdGVyYWJsZSBvZiBrZXllZCAnICsgJ1JlYWN0RWxlbWVudHMgaW5zdGVhZC4nKSA6IHZvaWQgMDtcbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuXG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLlwiICsgYWRkZW5kdW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cbi8qKlxuICogVHJhdmVyc2VzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCwgYnV0XG4gKiBtaWdodCBhbHNvIGJlIHNwZWNpZmllZCB0aHJvdWdoIGF0dHJpYnV0ZXM6XG4gKlxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLCAuLi4pYFxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmxlZnRQYW5lbENoaWxkcmVuLCAuLi4pYFxuICpcbiAqIFRoZSBgdHJhdmVyc2VDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZVxuICogZW50aXJlIHRyYXZlcnNhbC4gSXQgY2FuIGJlIHVzZWQgdG8gc3RvcmUgYWNjdW11bGF0aW9ucyBvciBhbnl0aGluZyBlbHNlIHRoYXRcbiAqIHRoZSBjYWxsYmFjayBtaWdodCBmaW5kIHJlbGV2YW50LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgb2JqZWN0LlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIFRvIGludm9rZSB1cG9uIHRyYXZlcnNpbmcgZWFjaCBjaGlsZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBDb250ZXh0IGZvciB0cmF2ZXJzYWwuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgJycsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgY29tcG9uZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbXBvbmVudCBBIGNvbXBvbmVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50S2V5KGNvbXBvbmVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJiBjb21wb25lbnQgIT09IG51bGwgJiYgY29tcG9uZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZShjb21wb25lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFNpbmdsZUNoaWxkKGJvb2tLZWVwaW5nLCBjaGlsZCwgbmFtZSkge1xuICB2YXIgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcbiAgZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbn1cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChudWxsLCBudWxsLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoU2luZ2xlQ2hpbGQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dChib29rS2VlcGluZywgY2hpbGQsIGNoaWxkS2V5KSB7XG4gIHZhciByZXN1bHQgPSBib29rS2VlcGluZy5yZXN1bHQsXG4gICAgICBrZXlQcmVmaXggPSBib29rS2VlcGluZy5rZXlQcmVmaXgsXG4gICAgICBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuICB2YXIgbWFwcGVkQ2hpbGQgPSBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwobWFwcGVkQ2hpbGQsIHJlc3VsdCwgY2hpbGRLZXksIGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgIGtleVByZWZpeCArIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFjaGlsZCB8fCBjaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyBlc2NhcGVVc2VyUHJvdmlkZWRLZXkobWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICB9XG5cbiAgICByZXN1bHQucHVzaChtYXBwZWRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgYXJyYXksIHByZWZpeCwgZnVuYywgY29udGV4dCkge1xuICB2YXIgZXNjYXBlZFByZWZpeCA9ICcnO1xuXG4gIGlmIChwcmVmaXggIT0gbnVsbCkge1xuICAgIGVzY2FwZWRQcmVmaXggPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkocHJlZml4KSArICcvJztcbiAgfVxuXG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQoYXJyYXksIGVzY2FwZWRQcmVmaXgsIGZ1bmMsIGNvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0LCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwga2V5LCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cblxuXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jLCBjb250ZXh0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cblxuXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sIG51bGwpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIGlmIChjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgICEoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IG51bGwgfHwgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSAnZnVuY3Rpb24nKSA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2NyZWF0ZUNvbnRleHQ6IEV4cGVjdGVkIHRoZSBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gYmUgYSAnICsgJ2Z1bmN0aW9uLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSA6IHZvaWQgMDtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY2FsY3VsYXRlQ2hhbmdlZEJpdHMsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuICAgICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuICAgICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gbGF6eShjdG9yKSB7XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9jdG9yOiBjdG9yLFxuICAgIC8vIFJlYWN0IHVzZXMgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogLTEsXG4gICAgX3Jlc3VsdDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIGp1c3Qgc2V0IGl0IG9uIHRoZSBvYmplY3QuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICB2YXIgcHJvcFR5cGVzO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYHByb3BUeXBlc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAncHJvcFR5cGVzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGF6eVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAhKCAvLyBEbyBub3Qgd2FybiBmb3IgMCBhcmd1bWVudHMgYmVjYXVzZSBpdCBjb3VsZCBiZSBkdWUgdG8gdXNhZ2Ugb2YgdGhlICdhcmd1bWVudHMnIG9iamVjdFxuICAgICAgcmVuZGVyLmxlbmd0aCA9PT0gMCB8fCByZW5kZXIubGVuZ3RoID09PSAyKSA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgICEocmVuZGVyLmRlZmF1bHRQcm9wcyA9PSBudWxsICYmIHJlbmRlci5wcm9wVHlwZXMgPT0gbnVsbCkgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG5cbiAgaWYgKCEoZGlzcGF0Y2hlciAhPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL2ZiLm1lL3JlYWN0LWludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS5cIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgISh1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09IHVuZGVmaW5lZCkgPyB3YXJuaW5nJDEoZmFsc2UsICd1c2VDb250ZXh0KCkgc2Vjb25kIGFyZ3VtZW50IGlzIHJlc2VydmVkIGZvciBmdXR1cmUgJyArICd1c2UgaW4gUmVhY3QuIFBhc3NpbmcgaXQgaXMgbm90IHN1cHBvcnRlZC4gJyArICdZb3UgcGFzc2VkOiAlcy4lcycsIHVuc3RhYmxlX29ic2VydmVkQml0cywgdHlwZW9mIHVuc3RhYmxlX29ic2VydmVkQml0cyA9PT0gJ251bWJlcicgJiYgQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMl0pID8gJ1xcblxcbkRpZCB5b3UgY2FsbCBhcnJheS5tYXAodXNlQ29udGV4dCk/ICcgKyAnQ2FsbGluZyBIb29rcyBpbnNpZGUgYSBsb29wIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnTGVhcm4gbW9yZSBhdCBodHRwczovL2ZiLm1lL3J1bGVzLW9mLWhvb2tzJyA6ICcnKSA6IHZvaWQgMDsgLy8gVE9ETzogYWRkIGEgbW9yZSBnZW5lcmljIHdhcm5pbmcgZm9yIGludmFsaWQgdmFsdWVzLlxuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQsIG1heSBjYXVzZSBidWdzLCBhbmQgd2lsbCBiZSAnICsgJ3JlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xuICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBpbnB1dHMpO1xufVxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgaW5wdXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgaW5wdXRzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgaW5wdXRzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgaW5wdXRzKTtcbn1cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGlucHV0cyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxudmFyIGVtcHR5T2JqZWN0JDEgPSB7fTtcbmZ1bmN0aW9uIHVzZVJlc3BvbmRlcihyZXNwb25kZXIsIGxpc3RlbmVyUHJvcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuXG4gIHtcbiAgICBpZiAocmVzcG9uZGVyID09IG51bGwgfHwgcmVzcG9uZGVyLiQkdHlwZW9mICE9PSBSRUFDVF9SRVNQT05ERVJfVFlQRSkge1xuICAgICAgd2FybmluZyQxKGZhbHNlLCAndXNlUmVzcG9uZGVyOiBpbnZhbGlkIGZpcnN0IGFyZ3VtZW50LiBFeHBlY3RlZCBhbiBldmVudCByZXNwb25kZXIsIGJ1dCBpbnN0ZWFkIGdvdCAlcycsIHJlc3BvbmRlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVzcG9uZGVyKHJlc3BvbmRlciwgbGlzdGVuZXJQcm9wcyB8fCBlbXB0eU9iamVjdCQxKTtcbn1cbmZ1bmN0aW9uIHVzZVRyYW5zaXRpb24oY29uZmlnKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlVHJhbnNpdGlvbihjb25maWcpO1xufVxuZnVuY3Rpb24gdXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSwgY29uZmlnKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSwgY29uZmlnKTtcbn1cblxuZnVuY3Rpb24gd2l0aFN1c3BlbnNlQ29uZmlnKHNjb3BlLCBjb25maWcpIHtcbiAgdmFyIHByZXZpb3VzQ29uZmlnID0gUmVhY3RDdXJyZW50QmF0Y2hDb25maWcuc3VzcGVuc2U7XG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnN1c3BlbnNlID0gY29uZmlnID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnO1xuXG4gIHRyeSB7XG4gICAgc2NvcGUoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy5zdXNwZW5zZSA9IHByZXZpb3VzQ29uZmlnO1xuICB9XG59XG5cbi8qKlxuICogUmVhY3RFbGVtZW50VmFsaWRhdG9yIHByb3ZpZGVzIGEgd3JhcHBlciBhcm91bmQgYSBlbGVtZW50IGZhY3RvcnlcbiAqIHdoaWNoIHZhbGlkYXRlcyB0aGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBlbGVtZW50LiBUaGlzIGlzIGludGVuZGVkIHRvIGJlXG4gKiB1c2VkIG9ubHkgaW4gREVWIGFuZCBjb3VsZCBiZSByZXBsYWNlZCBieSBhIHN0YXRpYyB0eXBlIGNoZWNrZXIgZm9yIGxhbmd1YWdlc1xuICogdGhhdCBzdXBwb3J0IGl0LlxuICovXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxudmFyIGhhc093blByb3BlcnR5JDEgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcy5fX3NvdXJjZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICB9XG5cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAge1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuICB9XG5cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgdmFyIHByb3BUeXBlcztcblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChwcm9wVHlwZXMpIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcbiAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKTtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBuYW1lIHx8ICdVbmtub3duJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkID8gd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpIDogdm9pZCAwO1xuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZnJhZ21lbnQpO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgd2FybmluZyQxKGZhbHNlLCAnSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgd2FybmluZyQxKGZhbHNlLCAnSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcbiAgfVxuXG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNPd25Qcm9wZXJ0eSQxLmNhbGwocHJvcHMsICdrZXknKSkge1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlYWN0LmpzeDogU3ByZWFkaW5nIGEga2V5IHRvIEpTWCBpcyBhIGRlcHJlY2F0ZWQgcGF0dGVybi4gJyArICdFeHBsaWNpdGx5IHBhc3MgYSBrZXkgYWZ0ZXIgc3ByZWFkaW5nIHByb3BzIGluIHlvdXIgSlNYIGNhbGwuICcgKyAnRS5nLiA8Q29tcG9uZW50TmFtZSB7Li4ucHJvcHN9IGtleT17a2V5fSAvPicpO1xuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG4vLyBldmVuIHdpdGggdGhlIHByb2QgdHJhbnNmb3JtLiBUaGlzIG1lYW5zIHRoYXQganN4REVWIGlzIHB1cmVseVxuLy8gb3B0LWluIGJlaGF2aW9yIGZvciBiZXR0ZXIgbWVzc2FnZXMgYnV0IHRoYXQgd2Ugd29uJ3Qgc3RvcFxuLy8gZ2l2aW5nIHlvdSB3YXJuaW5ncyBpZiB5b3UgdXNlIHByb2R1Y3Rpb24gYXBpcy5cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb25TdGF0aWModHlwZSwgcHJvcHMsIGtleSkge1xuICByZXR1cm4ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgdHJ1ZSk7XG59XG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbkR5bmFtaWModHlwZSwgcHJvcHMsIGtleSkge1xuICByZXR1cm4ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgZmFsc2UpO1xufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcblxuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTsgLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG4gIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsb3dQcmlvcml0eVdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbnZhciBoYXNCYWRNYXBQb2x5ZmlsbDtcblxue1xuICBoYXNCYWRNYXBQb2x5ZmlsbCA9IGZhbHNlO1xuXG4gIHRyeSB7XG4gICAgdmFyIGZyb3plbk9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuICAgIHZhciB0ZXN0TWFwID0gbmV3IE1hcChbW2Zyb3plbk9iamVjdCwgbnVsbF1dKTtcbiAgICB2YXIgdGVzdFNldCA9IG5ldyBTZXQoW2Zyb3plbk9iamVjdF0pOyAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgUm9sbHVwIHRvIG5vdCBjb25zaWRlciB0aGVzZSB1bnVzZWQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvbGx1cC9yb2xsdXAvaXNzdWVzLzE3NzFcbiAgICAvLyBUT0RPOiB3ZSBjYW4gcmVtb3ZlIHRoZXNlIGlmIFJvbGx1cCBmaXhlcyB0aGUgYnVnLlxuXG4gICAgdGVzdE1hcC5zZXQoMCwgMCk7XG4gICAgdGVzdFNldC5hZGQoMCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBUT0RPOiBDb25zaWRlciB3YXJuaW5nIGFib3V0IGJhZCBwb2x5ZmlsbHNcbiAgICBoYXNCYWRNYXBQb2x5ZmlsbCA9IHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRnVuZGFtZW50YWxDb21wb25lbnQoaW1wbCkge1xuICAvLyBXZSB1c2UgcmVzcG9uZGVyIGFzIGEgTWFwIGtleSBsYXRlciBvbi4gV2hlbiB3ZSBoYXZlIGEgYmFkXG4gIC8vIHBvbHlmaWxsLCB0aGVuIHdlIGNhbid0IHVzZSBpdCBhcyBhIGtleSBhcyB0aGUgcG9seWZpbGwgdHJpZXNcbiAgLy8gdG8gYWRkIGEgcHJvcGVydHkgdG8gdGhlIG9iamVjdC5cbiAgaWYgKHRydWUgJiYgIWhhc0JhZE1hcFBvbHlmaWxsKSB7XG4gICAgT2JqZWN0LmZyZWV6ZShpbXBsKTtcbiAgfVxuXG4gIHZhciBmdW5kYW1hbnRhbENvbXBvbmVudCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSxcbiAgICBpbXBsOiBpbXBsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5mcmVlemUoZnVuZGFtYW50YWxDb21wb25lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmRhbWFudGFsQ29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudFJlc3BvbmRlcihkaXNwbGF5TmFtZSwgcmVzcG9uZGVyQ29uZmlnKSB7XG4gIHZhciBnZXRJbml0aWFsU3RhdGUgPSByZXNwb25kZXJDb25maWcuZ2V0SW5pdGlhbFN0YXRlLFxuICAgICAgb25FdmVudCA9IHJlc3BvbmRlckNvbmZpZy5vbkV2ZW50LFxuICAgICAgb25Nb3VudCA9IHJlc3BvbmRlckNvbmZpZy5vbk1vdW50LFxuICAgICAgb25Vbm1vdW50ID0gcmVzcG9uZGVyQ29uZmlnLm9uVW5tb3VudCxcbiAgICAgIG9uUm9vdEV2ZW50ID0gcmVzcG9uZGVyQ29uZmlnLm9uUm9vdEV2ZW50LFxuICAgICAgcm9vdEV2ZW50VHlwZXMgPSByZXNwb25kZXJDb25maWcucm9vdEV2ZW50VHlwZXMsXG4gICAgICB0YXJnZXRFdmVudFR5cGVzID0gcmVzcG9uZGVyQ29uZmlnLnRhcmdldEV2ZW50VHlwZXMsXG4gICAgICB0YXJnZXRQb3J0YWxQcm9wYWdhdGlvbiA9IHJlc3BvbmRlckNvbmZpZy50YXJnZXRQb3J0YWxQcm9wYWdhdGlvbjtcbiAgdmFyIGV2ZW50UmVzcG9uZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9SRVNQT05ERVJfVFlQRSxcbiAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBnZXRJbml0aWFsU3RhdGUgfHwgbnVsbCxcbiAgICBvbkV2ZW50OiBvbkV2ZW50IHx8IG51bGwsXG4gICAgb25Nb3VudDogb25Nb3VudCB8fCBudWxsLFxuICAgIG9uUm9vdEV2ZW50OiBvblJvb3RFdmVudCB8fCBudWxsLFxuICAgIG9uVW5tb3VudDogb25Vbm1vdW50IHx8IG51bGwsXG4gICAgcm9vdEV2ZW50VHlwZXM6IHJvb3RFdmVudFR5cGVzIHx8IG51bGwsXG4gICAgdGFyZ2V0RXZlbnRUeXBlczogdGFyZ2V0RXZlbnRUeXBlcyB8fCBudWxsLFxuICAgIHRhcmdldFBvcnRhbFByb3BhZ2F0aW9uOiB0YXJnZXRQb3J0YWxQcm9wYWdhdGlvbiB8fCBmYWxzZVxuICB9OyAvLyBXZSB1c2UgcmVzcG9uZGVyIGFzIGEgTWFwIGtleSBsYXRlciBvbi4gV2hlbiB3ZSBoYXZlIGEgYmFkXG4gIC8vIHBvbHlmaWxsLCB0aGVuIHdlIGNhbid0IHVzZSBpdCBhcyBhIGtleSBhcyB0aGUgcG9seWZpbGwgdHJpZXNcbiAgLy8gdG8gYWRkIGEgcHJvcGVydHkgdG8gdGhlIG9iamVjdC5cblxuICBpZiAodHJ1ZSAmJiAhaGFzQmFkTWFwUG9seWZpbGwpIHtcbiAgICBPYmplY3QuZnJlZXplKGV2ZW50UmVzcG9uZGVyKTtcbiAgfVxuXG4gIHJldHVybiBldmVudFJlc3BvbmRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2NvcGUoKSB7XG4gIHZhciBzY29wZUNvbXBvbmVudCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfU0NPUEVfVFlQRVxuICB9O1xuXG4gIHtcbiAgICBPYmplY3QuZnJlZXplKHNjb3BlQ29tcG9uZW50KTtcbiAgfVxuXG4gIHJldHVybiBzY29wZUNvbXBvbmVudDtcbn1cblxuLy8gSGVscHMgaWRlbnRpZnkgc2lkZSBlZmZlY3RzIGluIGJlZ2luLXBoYXNlIGxpZmVjeWNsZSBob29rcyBhbmQgc2V0U3RhdGUgcmVkdWNlcnM6XG5cbiAvLyBJbiBzb21lIGNhc2VzLCBTdHJpY3RNb2RlIHNob3VsZCBhbHNvIGRvdWJsZS1yZW5kZXIgbGlmZWN5Y2xlcy5cbi8vIFRoaXMgY2FuIGJlIGNvbmZ1c2luZyBmb3IgdGVzdHMgdGhvdWdoLFxuLy8gQW5kIGl0IGNhbiBiZSBiYWQgZm9yIHBlcmZvcm1hbmNlIGluIHByb2R1Y3Rpb24uXG4vLyBUaGlzIGZlYXR1cmUgZmxhZyBjYW4gYmUgdXNlZCB0byBjb250cm9sIHRoZSBiZWhhdmlvcjpcblxuIC8vIFRvIHByZXNlcnZlIHRoZSBcIlBhdXNlIG9uIGNhdWdodCBleGNlcHRpb25zXCIgYmVoYXZpb3Igb2YgdGhlIGRlYnVnZ2VyLCB3ZVxuLy8gcmVwbGF5IHRoZSBiZWdpbiBwaGFzZSBvZiBhIGZhaWxlZCBjb21wb25lbnQgaW5zaWRlIGludm9rZUd1YXJkZWRDYWxsYmFjay5cblxuIC8vIFdhcm4gYWJvdXQgZGVwcmVjYXRlZCwgYXN5bmMtdW5zYWZlIGxpZmVjeWNsZXM7IHJlbGF0ZXMgdG8gUkZDICM2OlxuXG4gLy8gR2F0aGVyIGFkdmFuY2VkIHRpbWluZyBtZXRyaWNzIGZvciBQcm9maWxlciBzdWJ0cmVlcy5cblxuIC8vIFRyYWNlIHdoaWNoIGludGVyYWN0aW9ucyB0cmlnZ2VyIGVhY2ggY29tbWl0LlxuXG4gLy8gU1NSIGV4cGVyaW1lbnRzXG5cblxuIC8vIE9ubHkgdXNlZCBpbiB3d3cgYnVpbGRzLlxuXG4gLy8gT25seSB1c2VkIGluIHd3dyBidWlsZHMuXG5cbiAvLyBEaXNhYmxlIGphdmFzY3JpcHQ6IFVSTCBzdHJpbmdzIGluIGhyZWYgZm9yIFhTUyBwcm90ZWN0aW9uLlxuXG4gLy8gUmVhY3QgRmlyZTogcHJldmVudCB0aGUgdmFsdWUgYW5kIGNoZWNrZWQgYXR0cmlidXRlcyBmcm9tIHN5bmNpbmdcbi8vIHdpdGggdGhlaXIgcmVsYXRlZCBET00gcHJvcGVydGllc1xuXG4gLy8gVGhlc2UgQVBJcyB3aWxsIG5vIGxvbmdlciBiZSBcInVuc3RhYmxlXCIgaW4gdGhlIHVwY29taW5nIDE2LjcgcmVsZWFzZSxcbi8vIENvbnRyb2wgdGhpcyBiZWhhdmlvciB3aXRoIGEgZmxhZyB0byBzdXBwb3J0IDE2LjYgbWlub3IgcmVsZWFzZXMgaW4gdGhlIG1lYW53aGlsZS5cblxudmFyIGV4cG9zZUNvbmN1cnJlbnRNb2RlQVBJcyA9IGZhbHNlO1xuIC8vIEV4cGVyaW1lbnRhbCBSZWFjdCBGbGFyZSBldmVudCBzeXN0ZW0gYW5kIGV2ZW50IGNvbXBvbmVudHMgc3VwcG9ydC5cblxudmFyIGVuYWJsZUZsYXJlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBIb3N0IENvbXBvbmVudCBzdXBwb3J0LlxuXG52YXIgZW5hYmxlRnVuZGFtZW50YWxBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIFNjb3BlIHN1cHBvcnQuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBOZXcgQVBJIGZvciBKU1ggdHJhbnNmb3JtcyB0byB0YXJnZXQgLSBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG5cbnZhciBlbmFibGVKU1hUcmFuc2Zvcm1BUEkgPSBmYWxzZTsgLy8gV2Ugd2lsbCBlbmZvcmNlIG1vY2tpbmcgc2NoZWR1bGVyIHdpdGggc2NoZWR1bGVyL3Vuc3RhYmxlX21vY2sgYXQgc29tZSBwb2ludC4gKHYxNz8pXG4vLyBUaWxsIHRoZW4sIHdlIHdhcm4gYWJvdXQgdGhlIG1pc3NpbmcgbW9jaywgYnV0IHN0aWxsIGZhbGxiYWNrIHRvIGEgc3luYyBtb2RlIGNvbXBhdGlibGUgdmVyc2lvblxuXG4gLy8gRm9yIHRlc3RzLCB3ZSBmbHVzaCBzdXNwZW5zZSBmYWxsYmFja3MgaW4gYW4gYWN0IHNjb3BlO1xuLy8gKmV4Y2VwdCogaW4gc29tZSBvZiBvdXIgb3duIHRlc3RzLCB3aGVyZSB3ZSB0ZXN0IGluY3JlbWVudGFsIGxvYWRpbmcgc3RhdGVzLlxuXG4gLy8gQWRkIGEgY2FsbGJhY2sgcHJvcGVydHkgdG8gc3VzcGVuc2UgdG8gbm90aWZ5IHdoaWNoIHByb21pc2VzIGFyZSBjdXJyZW50bHlcbi8vIGluIHRoZSB1cGRhdGUgcXVldWUuIFRoaXMgYWxsb3dzIHJlcG9ydGluZyBhbmQgdHJhY2luZyBvZiB3aGF0IGlzIGNhdXNpbmdcbi8vIHRoZSB1c2VyIHRvIHNlZSBhIGxvYWRpbmcgc3RhdGUuXG4vLyBBbHNvIGFsbG93cyBoeWRyYXRpb24gY2FsbGJhY2tzIHRvIGZpcmUgd2hlbiBhIGRlaHlkcmF0ZWQgYm91bmRhcnkgZ2V0c1xuLy8gaHlkcmF0ZWQgb3IgZGVsZXRlZC5cblxuIC8vIFBhcnQgb2YgdGhlIHNpbXBsaWZpY2F0aW9uIG9mIFJlYWN0LmNyZWF0ZUVsZW1lbnQgc28gd2UgY2FuIGV2ZW50dWFsbHkgbW92ZVxuLy8gZnJvbSBSZWFjdC5jcmVhdGVFbGVtZW50IHRvIFJlYWN0LmpzeFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9ibG9iL2NyZWF0ZWxlbWVudC1yZmMvdGV4dC8wMDAwLWNyZWF0ZS1lbGVtZW50LWNoYW5nZXMubWRcblxudmFyIFJlYWN0ID0ge1xuICBDaGlsZHJlbjoge1xuICAgIG1hcDogbWFwQ2hpbGRyZW4sXG4gICAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICAgIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICAgIHRvQXJyYXk6IHRvQXJyYXksXG4gICAgb25seTogb25seUNoaWxkXG4gIH0sXG4gIGNyZWF0ZVJlZjogY3JlYXRlUmVmLFxuICBDb21wb25lbnQ6IENvbXBvbmVudCxcbiAgUHVyZUNvbXBvbmVudDogUHVyZUNvbXBvbmVudCxcbiAgY3JlYXRlQ29udGV4dDogY3JlYXRlQ29udGV4dCxcbiAgZm9yd2FyZFJlZjogZm9yd2FyZFJlZixcbiAgbGF6eTogbGF6eSxcbiAgbWVtbzogbWVtbyxcbiAgdXNlQ2FsbGJhY2s6IHVzZUNhbGxiYWNrLFxuICB1c2VDb250ZXh0OiB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3Q6IHVzZUVmZmVjdCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZTogdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlRGVidWdWYWx1ZTogdXNlRGVidWdWYWx1ZSxcbiAgdXNlTGF5b3V0RWZmZWN0OiB1c2VMYXlvdXRFZmZlY3QsXG4gIHVzZU1lbW86IHVzZU1lbW8sXG4gIHVzZVJlZHVjZXI6IHVzZVJlZHVjZXIsXG4gIHVzZVJlZjogdXNlUmVmLFxuICB1c2VTdGF0ZTogdXNlU3RhdGUsXG4gIEZyYWdtZW50OiBSRUFDVF9GUkFHTUVOVF9UWVBFLFxuICBQcm9maWxlcjogUkVBQ1RfUFJPRklMRVJfVFlQRSxcbiAgU3RyaWN0TW9kZTogUkVBQ1RfU1RSSUNUX01PREVfVFlQRSxcbiAgU3VzcGVuc2U6IFJFQUNUX1NVU1BFTlNFX1RZUEUsXG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbixcbiAgY2xvbmVFbGVtZW50OiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbixcbiAgY3JlYXRlRmFjdG9yeTogY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uLFxuICBpc1ZhbGlkRWxlbWVudDogaXNWYWxpZEVsZW1lbnQsXG4gIHZlcnNpb246IFJlYWN0VmVyc2lvbixcbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6IFJlYWN0U2hhcmVkSW50ZXJuYWxzXG59O1xuXG5pZiAoZXhwb3NlQ29uY3VycmVudE1vZGVBUElzKSB7XG4gIFJlYWN0LnVzZVRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uO1xuICBSZWFjdC51c2VEZWZlcnJlZFZhbHVlID0gdXNlRGVmZXJyZWRWYWx1ZTtcbiAgUmVhY3QuU3VzcGVuc2VMaXN0ID0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFO1xuICBSZWFjdC51bnN0YWJsZV93aXRoU3VzcGVuc2VDb25maWcgPSB3aXRoU3VzcGVuc2VDb25maWc7XG59XG5cbmlmIChlbmFibGVGbGFyZUFQSSkge1xuICBSZWFjdC51bnN0YWJsZV91c2VSZXNwb25kZXIgPSB1c2VSZXNwb25kZXI7XG4gIFJlYWN0LnVuc3RhYmxlX2NyZWF0ZVJlc3BvbmRlciA9IGNyZWF0ZUV2ZW50UmVzcG9uZGVyO1xufVxuXG5pZiAoZW5hYmxlRnVuZGFtZW50YWxBUEkpIHtcbiAgUmVhY3QudW5zdGFibGVfY3JlYXRlRnVuZGFtZW50YWwgPSBjcmVhdGVGdW5kYW1lbnRhbENvbXBvbmVudDtcbn1cblxuaWYgKGVuYWJsZVNjb3BlQVBJKSB7XG4gIFJlYWN0LnVuc3RhYmxlX2NyZWF0ZVNjb3BlID0gY3JlYXRlU2NvcGU7XG59IC8vIE5vdGU6IHNvbWUgQVBJcyBhcmUgYWRkZWQgd2l0aCBmZWF0dXJlIGZsYWdzLlxuLy8gTWFrZSBzdXJlIHRoYXQgc3RhYmxlIGJ1aWxkcyBmb3Igb3BlbiBzb3VyY2Vcbi8vIGRvbid0IG1vZGlmeSB0aGUgUmVhY3Qgb2JqZWN0IHRvIGF2b2lkIGRlb3B0cy5cbi8vIEFsc28gbGV0J3Mgbm90IGV4cG9zZSB0aGVpciBuYW1lcyBpbiBzdGFibGUgYnVpbGRzLlxuXG5cbmlmIChlbmFibGVKU1hUcmFuc2Zvcm1BUEkpIHtcbiAge1xuICAgIFJlYWN0LmpzeERFViA9IGpzeFdpdGhWYWxpZGF0aW9uO1xuICAgIFJlYWN0LmpzeCA9IGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYztcbiAgICBSZWFjdC5qc3hzID0ganN4V2l0aFZhbGlkYXRpb25TdGF0aWM7XG4gIH1cbn1cblxuXG5cbnZhciBSZWFjdCQyID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGRlZmF1bHQ6IFJlYWN0XG59KTtcblxudmFyIFJlYWN0JDMgPSAoIFJlYWN0JDIgJiYgUmVhY3QgKSB8fCBSZWFjdCQyO1xuXG4vLyBUT0RPOiBkZWNpZGUgb24gdGhlIHRvcC1sZXZlbCBleHBvcnQgZm9ybS5cbi8vIFRoaXMgaXMgaGFja3kgYnV0IG1ha2VzIGl0IHdvcmsgd2l0aCBib3RoIFJvbGx1cCBhbmQgSmVzdC5cblxuXG52YXIgcmVhY3QgPSBSZWFjdCQzLmRlZmF1bHQgfHwgUmVhY3QkMztcblxubW9kdWxlLmV4cG9ydHMgPSByZWFjdDtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0Jhc2Uuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQmFzZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQmFzZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vQmFzZS5zY3NzXCI7XG5pbXBvcnQgeyB0b01JREkgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgTGl2ZUNvbXBvbmVudDxUIGV4dGVuZHMgTGl2ZVByb3BzPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxULCBUPiB7XG4gICAgc3RhdGljIHByb3BzOiBMaXZlUHJvcHMgPSB7XG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICBoZWlnaHQ6IDE1LFxuICAgICAgICBzaG9ydG5hbWU6IFwiXCIsXG4gICAgICAgIGxvbmduYW1lOiBcIlwiLFxuICAgICAgICBvcmRlcjogMCxcbiAgICAgICAgbGlua25hbWVzOiBmYWxzZSxcbiAgICAgICAgdHlwZTogXCJmbG9hdFwiLFxuICAgICAgICBtbWluOiAwLFxuICAgICAgICBtbWF4OiAxLFxuICAgICAgICBlbnVtOiBbXSxcbiAgICAgICAgZW51bV9pY29uczogW10sXG4gICAgICAgIG1vZG1vZGU6IFwibm9uZVwiLFxuICAgICAgICBpbml0aWFsX2VuYWJsZTogZmFsc2UsXG4gICAgICAgIGluaXRpYWw6IFswXSxcbiAgICAgICAgdW5pdHN0eWxlOiBcImZsb2F0XCIsXG4gICAgICAgIHVuaXRzOiBcIlwiLFxuICAgICAgICBleHBvbmVudDogMSxcbiAgICAgICAgc3RlcDogMCxcbiAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgIHNwZWVkbGltOiA1LFxuICAgICAgICBkZWZlcjogZmFsc2UsXG4gICAgICAgIGludmlzaWJsZTogXCJhdXRvbWF0ZWRcIixcbiAgICAgICAgbWFwcGFibGU6IHRydWVcbiAgICB9XG4gICAgc3RhdGU6IFQgPSAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgTGl2ZUNvbXBvbmVudCkucHJvcHMgYXMgYW55O1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIHJlZkNhbnZhcyA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4oKTtcbiAgICBnZXQgY2FudmFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZDYW52YXMuY3VycmVudDtcbiAgICB9XG4gICAgZ2V0IGN0eCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmQ2FudmFzLmN1cnJlbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIH1cbiAgICBnZXQgaXNDb25uZWN0ZWRQb2x5ZmlsbCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5yZWZDYW52YXMuY3VycmVudDtcbiAgICB9XG4gICAgaGFuZGxlS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVLZXlVcCA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVUb3VjaFN0YXJ0ID0gKGU6IFJlYWN0LlRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5jYW52YXMuZm9jdXMoKTtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgcHJldlggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgIGxldCBwcmV2WSA9IGUudG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgY29uc3QgZnJvbVggPSBwcmV2WCAtIHJlY3QubGVmdDtcbiAgICAgICAgY29uc3QgZnJvbVkgPSBwcmV2WSAtIHJlY3QudG9wO1xuICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJEb3duKHsgeDogZnJvbVgsIHk6IGZyb21ZLCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICBjb25zdCBoYW5kbGVUb3VjaE1vdmUgPSAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgcGFnZVggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgY29uc3QgcGFnZVkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgY29uc3QgbW92ZW1lbnRYID0gcGFnZVggLSBwcmV2WDtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVtZW50WSA9IHBhZ2VZIC0gcHJldlk7XG4gICAgICAgICAgICBwcmV2WCA9IHBhZ2VYO1xuICAgICAgICAgICAgcHJldlkgPSBwYWdlWTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBwYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBwYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyRHJhZyh7IHByZXZWYWx1ZSwgeCwgeSwgZnJvbVgsIGZyb21ZLCBtb3ZlbWVudFgsIG1vdmVtZW50WSwgb3JpZ2luYWxFdmVudDogZSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlVG91Y2hFbmQgPSAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyVXAoeyB4LCB5LCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBoYW5kbGVUb3VjaE1vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGhhbmRsZVRvdWNoRW5kKTtcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBoYW5kbGVUb3VjaE1vdmUsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBoYW5kbGVUb3VjaEVuZCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICB9O1xuICAgIGhhbmRsZVdoZWVsID0gKGU6IFJlYWN0LldoZWVsRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZUNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZU1vdXNlRG93biA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jYW52YXMuZm9jdXMoKTtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBmcm9tWCA9IGUucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgIGNvbnN0IGZyb21ZID0gZS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJEb3duKHsgeDogZnJvbVgsIHk6IGZyb21ZLCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGUucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyRHJhZyh7IHByZXZWYWx1ZSwgeCwgeSwgZnJvbVgsIGZyb21ZLCBtb3ZlbWVudFg6IGUubW92ZW1lbnRYLCBtb3ZlbWVudFk6IGUubW92ZW1lbnRZLCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBlLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGUucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlclVwKHsgeCwgeSwgb3JpZ2luYWxFdmVudDogZSB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXApO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXApO1xuICAgIH07XG4gICAgaGFuZGxlTW91c2VPdmVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZU1vdXNlT3V0ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZUNvbnRleHRNZW51ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVBvaW50ZXJEcmFnID0gKGU6IFBvaW50ZXJEcmFnRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVBvaW50ZXJVcCA9IChlOiBQb2ludGVyVXBFdmVudCkgPT4ge307XG4gICAgaGFuZGxlRm9jdXNJbiA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IHRydWUgfSk7XG4gICAgaGFuZGxlRm9jdXNPdXQgPSAoZTogUmVhY3QuRm9jdXNFdmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiBmYWxzZSB9KTtcblxuICAgIGdldCBkaXNwbGF5VmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIHR5cGUsIHVuaXRzdHlsZSwgdW5pdHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHRoaXMuc3RhdGUuZW51bVt2YWx1ZV07XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiaW50XCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKDApO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcImZsb2F0XCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcInRpbWVcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIG1zXCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiaGVydHpcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIEh6XCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiZGVjaWJlbFwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgZEJcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCIlXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiAlXCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwicGFuXCIpIHJldHVybiB2YWx1ZSA9PT0gMCA/IFwiQ1wiIDogKHR5cGUgPT09IFwiaW50XCIgPyBNYXRoLmFicyh2YWx1ZSkgOiBNYXRoLmFicyh2YWx1ZSkudG9GaXhlZCgyKSkgKyAodmFsdWUgPCAwID8gXCIgTFwiIDogXCIgUlwiKTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJzZW1pdG9uZXNcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIHN0XCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwibWlkaVwiKSByZXR1cm4gdG9NSURJKHZhbHVlKTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJjdXN0b21cIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIFwiICsgdW5pdHM7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwibmF0aXZlXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMik7XG4gICAgICAgIHJldHVybiBcIk4vQVwiO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KTtcbiAgICB9XG4gICAgY2hhbmdlKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vbkNoYW5nZSkgdGhpcy5zdGF0ZS5vbkNoYW5nZSh7IHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLCBkaXNwbGF5VmFsdWU6IHRoaXMuZGlzcGxheVZhbHVlIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnByb3BzKTtcbiAgICAgICAgdGhpcy5wYWludCgpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMucGFpbnQoKTtcbiAgICB9XG4gICAgcGFpbnQoKSB7fVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgICByZWY9e3RoaXMucmVmQ2FudmFzfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1wibGl2ZS1jb21wb25lbnRcIiwgdGhpcy5jbGFzc05hbWVdLmpvaW4oXCIgXCIpfVxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXsxfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICAgICAgICAgIG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXB9XG4gICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLmhhbmRsZVRvdWNoU3RhcnR9XG4gICAgICAgICAgICAgICAgb25XaGVlbD17dGhpcy5oYW5kbGVXaGVlbH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5oYW5kbGVNb3VzZU92ZXJ9XG4gICAgICAgICAgICAgICAgb25Nb3VzZU91dD17dGhpcy5oYW5kbGVNb3VzZU91dH1cbiAgICAgICAgICAgICAgICBvbkNvbnRleHRNZW51PXt0aGlzLmhhbmRsZUNvbnRleHRNZW51fVxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXNJbn1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlRm9jdXNPdXR9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5cbmludGVyZmFjZSBMaXZlQnV0dG9uUHJvcHMgZXh0ZW5kcyBMaXZlUHJvcHMge1xuICAgIGFjdGl2ZWJnY29sb3I/OiBzdHJpbmc7XG4gICAgYWN0aXZlYmdvbmNvbG9yPzogc3RyaW5nO1xuICAgIGJnY29sb3I/OiBzdHJpbmc7XG4gICAgYmdvbmNvbG9yPzogc3RyaW5nO1xuICAgIGJvcmRlcmNvbG9yPzogc3RyaW5nO1xuICAgIGZvY3VzYm9yZGVyY29sb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVCdXR0b24gZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVCdXR0b25Qcm9wcz4ge1xuICAgIHN0YXRpYyBnZXQgcHJvcHMoKTogTGl2ZUJ1dHRvblByb3BzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnByb3BzLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUuYnV0dG9uXCIsXG4gICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICBoZWlnaHQ6IDE1LFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcjogXCJyZ2JhKDkwLCA5MCwgOTAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3I6IFwicmdiYSgxMDksIDIxNSwgMjU1LCAxKVwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDkwLCA5MCwgOTAsIDEpXCIsXG4gICAgICAgICAgICBiZ29uY29sb3I6IFwicmdiYSgxOTUsIDE5NSwgMTk1LCAxKVwiLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NOYW1lID0gXCJsaXZlLWJ1dHRvblwiO1xuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgZm9jdXMsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMC41O1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcblxuICAgICAgICBjb25zdCBidXR0b25CZ0NvbG9yID0gYWN0aXZlID8gKHZhbHVlID8gYWN0aXZlYmdvbmNvbG9yIDogYWN0aXZlYmdjb2xvcikgOiAodmFsdWUgPyBiZ29uY29sb3IgOiBiZ2NvbG9yKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQm9yZGVyQ29sb3IgPSBmb2N1cyA/IGZvY3VzYm9yZGVyY29sb3IgOiBib3JkZXJjb2xvcjtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uQmdDb2xvcjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguZWxsaXBzZSh3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41LCB3aWR0aCAqIDAuNSAtIDIgKiBib3JkZXJXaWR0aCwgaGVpZ2h0ICogMC41IC0gMiAqIGJvcmRlcldpZHRoLCAwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGJ1dHRvbkJvcmRlckNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmICF0aGlzLl9pblRvdWNoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0VmFsdWUoMCksIDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgICAgICB0aGlzLnNldFZhbHVlKDEpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSgwKTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5pbXBvcnQgeyB0b1JhZCwgcm91bmRlZFJlY3QsIGZpbGxSb3VuZGVkUmVjdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmludGVyZmFjZSBMaXZlRGlhbFByb3BzIGV4dGVuZHMgTGl2ZVByb3BzIHtcbiAgICBmb250bmFtZT86IHN0cmluZztcbiAgICBmb250c2l6ZT86IG51bWJlcjtcbiAgICBmb250ZmFjZT86IFwicmVndWxhclwiIHwgXCJib2xkXCIgfCBcIml0YWxpY1wiIHwgXCJib2xkIGl0YWxpY1wiO1xuICAgIHNob3duYW1lPzogYm9vbGVhbjtcbiAgICBzaG93bnVtYmVyPzogYm9vbGVhbjtcbiAgICBhcHBlYXJhbmNlPzogXCJ2ZXJ0aWNhbFwiIHwgXCJ0aW55XCIgfCBcInBhbmVsXCI7XG4gICAgdHJpYW5nbGU/OiBib29sZWFuO1xuICAgIGJvcmRlcmNvbG9yPzogc3RyaW5nO1xuICAgIGZvY3VzYm9yZGVyY29sb3I/OiBzdHJpbmc7XG4gICAgYWN0aXZlZGlhbGNvbG9yPzogc3RyaW5nO1xuICAgIGRpYWxjb2xvcj86IHN0cmluZztcbiAgICBhY3RpdmVuZWVkbGVjb2xvcj86IHN0cmluZztcbiAgICBuZWVkbGVjb2xvcj86IHN0cmluZztcbiAgICBwYW5lbGNvbG9yPzogc3RyaW5nO1xuICAgIHRleHRjb2xvcj86IHN0cmluZztcbiAgICB0cmlib3JkZXJjb2xvcj86IHN0cmluZztcbiAgICB0cmljb2xvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZURpYWwgZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVEaWFsUHJvcHM+IHtcbiAgICBzdGF0aWMgZ2V0IHByb3BzKCk6IExpdmVEaWFsUHJvcHMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucHJvcHMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS5kaWFsXCIsXG4gICAgICAgICAgICB3aWR0aDogNDUsXG4gICAgICAgICAgICBoZWlnaHQ6IDYwLFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMixcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIHRyaWFuZ2xlOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3duYW1lOiB0cnVlLFxuICAgICAgICAgICAgc2hvd251bWJlcjogdHJ1ZSxcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlZGlhbGNvbG9yOiBcInJnYmEoMTA5LCAyMTUsIDI1NSwgMSlcIixcbiAgICAgICAgICAgIGRpYWxjb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmVuZWVkbGVjb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICBuZWVkbGVjb2xvcjogXCJyZ2JhKDEwNSwgMTA1LCAxMDUsIDEpXCIsXG4gICAgICAgICAgICBwYW5lbGNvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmlib3JkZXJjb2xvcjogXCJyZ2JhKDUwLCA1MCwgNTAsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICBtbWluOiAwLFxuICAgICAgICAgICAgbW1heDogMTI3LFxuICAgICAgICAgICAgdHlwZTogXCJpbnRcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGFzc05hbWUgPSBcImxpdmUtZGlhbFwiO1xuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG4gICAgaW50ZXJhY3Rpb25SZWN0OiBudW1iZXJbXSA9IFswLCAwLCAwLCAwXTtcblxuICAgIGdldCB0cnVlU3RlcHMoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgc3RlcHMsIHN0ZXAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGZ1bGwgPSAxMDA7XG4gICAgICAgIGNvbnN0IG1heFN0ZXBzID0gdHlwZSA9PT0gXCJlbnVtXCIgPyB0aGlzLnN0YXRlLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IG1tYXggLSBtbWluIDogZnVsbDtcbiAgICAgICAgaWYgKHN0ZXApIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHRoaXMucHJvcHMuZW51bS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIChNYXRoLnJvdW5kKHN0ZXApIHx8IDEpKSwgbWF4U3RlcHMpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIHN0ZXApLCBtYXhTdGVwcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ZXBzKSByZXR1cm4gTWF0aC5taW4oc3RlcHMsIG1heFN0ZXBzKTtcbiAgICAgICAgcmV0dXJuIG1heFN0ZXBzO1xuICAgIH1cbiAgICBnZXQgZGlzdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IHZhbHVlIC8gdGhpcy5zdGF0ZS5lbnVtLmxlbmd0aCA6ICh2YWx1ZSAtIG1taW4pIC8gKG1tYXggLSBtbWluKTtcbiAgICB9XG4gICAgZ2V0IHN0ZXBSYW5nZSgpIHtcbiAgICAgICAgY29uc3QgZnVsbCA9IDEwMDtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIHJldHVybiBmdWxsIC8gdHJ1ZVN0ZXBzO1xuICAgIH1cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIGFwcGVhcmFuY2UsXG4gICAgICAgICAgICB0cmlhbmdsZSxcbiAgICAgICAgICAgIHNob3duYW1lLFxuICAgICAgICAgICAgc2hvd251bWJlcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHBhbmVsY29sb3IsXG4gICAgICAgICAgICBhY3RpdmVuZWVkbGVjb2xvcixcbiAgICAgICAgICAgIG5lZWRsZWNvbG9yLFxuICAgICAgICAgICAgYWN0aXZlZGlhbGNvbG9yLFxuICAgICAgICAgICAgZGlhbGNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0cmljb2xvcixcbiAgICAgICAgICAgIHNob3J0bmFtZVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG5cbiAgICAgICAgY29uc3QgdHJpYW5nbGVIZWlnaHQgPSA0O1xuICAgICAgICBjb25zdCB0cmlhbmdsZUxpbmVXaWR0aCA9IDAuNjtcblxuICAgICAgICBsZXQgc3RhcnQ6IG51bWJlcjtcbiAgICAgICAgbGV0IGVuZDogbnVtYmVyO1xuICAgICAgICBsZXQgdmFsUG9zOiBudW1iZXI7XG4gICAgICAgIGxldCBkaWFsSGVpZ2h0OiBudW1iZXI7XG5cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICBkaWFsSGVpZ2h0ID0gMTg7XG4gICAgICAgICAgICBzdGFydCA9IC0zICogTWF0aC5QSSAqIDAuNTtcbiAgICAgICAgICAgIGVuZCA9IDA7XG4gICAgICAgICAgICB2YWxQb3MgPSBzdGFydCArIHRvUmFkKHRoaXMuZGlzdGFuY2UgKiAyNzApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlhbEhlaWdodCA9IDI1O1xuICAgICAgICAgICAgc3RhcnQgPSBNYXRoLlBJIC0gMyAqIE1hdGguUEkgLyA4O1xuICAgICAgICAgICAgZW5kID0gMiAqIE1hdGguUEkgKyAzICogTWF0aC5QSSAvIDg7XG4gICAgICAgICAgICB2YWxQb3MgPSBzdGFydCArIHRvUmFkKHRoaXMuZGlzdGFuY2UgKiAzMTUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpYWxSYWRpdXMgPSBkaWFsSGVpZ2h0ICogMC41O1xuXG4gICAgICAgIGxldCBkaWFsQ2VudGVyWCA9IHdpZHRoICogMC41O1xuICAgICAgICBsZXQgZGlhbENlbnRlclkgPSBoZWlnaHQgKiAwLjUgKyAxO1xuICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJwYW5lbFwiKSB7XG4gICAgICAgICAgICBkaWFsQ2VudGVyWSArPSAxMDtcbiAgICAgICAgfSBlbHNlIGlmIChhcHBlYXJhbmNlID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIGlmIChzaG93bnVtYmVyKSBkaWFsQ2VudGVyWSAtPSBmb250c2l6ZSAtIDU7XG4gICAgICAgICAgICBpZiAoc2hvd25hbWUpIGRpYWxDZW50ZXJZICs9IGZvbnRzaXplIC0gNTtcbiAgICAgICAgICAgIGlmICh0cmlhbmdsZSkgZGlhbENlbnRlclkgKz0gdHJpYW5nbGVIZWlnaHQgLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICBpZiAoc2hvd25hbWUpIHtcbiAgICAgICAgICAgICAgICBkaWFsQ2VudGVyWSArPSA2O1xuICAgICAgICAgICAgICAgIGRpYWxDZW50ZXJYID0gMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3QgPSBbMCwgZGlhbENlbnRlclkgLSBkaWFsSGVpZ2h0ICogMC41LCB3aWR0aCwgZGlhbEhlaWdodF07XG4gICAgICAgIGNvbnN0IGFyY1N0YXJ0WCA9IGRpYWxDZW50ZXJYICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLmNvcyhzdGFydCkpO1xuICAgICAgICBjb25zdCBhcmNTdGFydFkgPSBkaWFsQ2VudGVyWSArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5zaW4oc3RhcnQpKTtcbiAgICAgICAgY29uc3QgYXJjRW5kWCA9IGRpYWxDZW50ZXJYICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLmNvcyhlbmQpKTtcbiAgICAgICAgY29uc3QgYXJjRW5kWSA9IGRpYWxDZW50ZXJZICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLnNpbihlbmQpKTtcbiAgICAgICAgY29uc3QgdmFsdWVQb3NYID0gZGlhbENlbnRlclggKyAoZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguY29zKHZhbFBvcykpO1xuICAgICAgICBjb25zdCB2YWx1ZVBvc1kgPSBkaWFsQ2VudGVyWSArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5zaW4odmFsUG9zKSk7XG4gICAgICAgIGNvbnN0IGVuZENhcFJhZGl1cyA9IDE7XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGxldCBwYW5lbE9mZnNldCA9IDA7XG5cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwicGFuZWxcIikge1xuICAgICAgICAgICAgcGFuZWxPZmZzZXQgPSA1O1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMC40O1xuICAgICAgICAgICAgcm91bmRlZFJlY3QoY3R4LCAxLCAxLCB3aWR0aCAtIDIsIGhlaWdodCAtIDIsIDUpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHBhbmVsY29sb3I7XG4gICAgICAgICAgICBmaWxsUm91bmRlZFJlY3QoY3R4LCAxLjIsIDEuMiwgd2lkdGggLSAyLjQsIDMwIC0gMC40LCBbNSwgNSwgMCwgMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYWN0aXZlID8gYWN0aXZlbmVlZGxlY29sb3IgOiBuZWVkbGVjb2xvcjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGN0eC5zdHJva2VTdHlsZTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kIGFyYyBlbmRjYXBzXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhhcmNTdGFydFgsIGFyY1N0YXJ0WSwgZW5kQ2FwUmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhhcmNFbmRYLCBhcmNFbmRZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kIGFyY1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBkaWFsUmFkaXVzLCBzdGFydCwgZW5kKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIGRyYXcgdmFsdWUgYXJjLCB3aGljaCBjaGFuZ2VzIGlmIHRyaWFuZ2xlIGlzIGVuYWJsZWRcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYWN0aXZlID8gYWN0aXZlZGlhbGNvbG9yIDogZGlhbGNvbG9yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3R4LnN0cm9rZVN0eWxlO1xuICAgICAgICBpZiAodHJpYW5nbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pZHBvaW50ID0gKHN0YXJ0ICsgZW5kKSAqIDAuNTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGFjdGl2ZSA/IGFjdGl2ZWRpYWxjb2xvciA6IGRpYWxjb2xvcjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IDAuNSkgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGRpYWxSYWRpdXMsIG1pZHBvaW50LCB2YWxQb3MpO1xuICAgICAgICAgICAgZWxzZSBjdHguYXJjKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSwgZGlhbFJhZGl1cywgdmFsUG9zLCBtaWRwb2ludCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkcmF3IHZhbHVlIGFyYyBlbmRjYXBcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMoYXJjU3RhcnRYLCBhcmNTdGFydFksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIC8vIGRyYXcgdmFsdWUgYXJjXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSwgZGlhbFJhZGl1cywgc3RhcnQsIHZhbFBvcyk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZHJhdyBkaWFsXG4gICAgICAgIC8vIGRyYXcgZGlhbCByb3VuZCBlbmRjYXBzXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGFjdGl2ZSA/IGFjdGl2ZW5lZWRsZWNvbG9yIDogbmVlZGxlY29sb3I7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjdHguc3Ryb2tlU3R5bGU7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModmFsdWVQb3NYLCB2YWx1ZVBvc1ksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAvLyBkcmF3IGRpYWwgbGluZVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZKTtcbiAgICAgICAgY3R4LmxpbmVUbyh2YWx1ZVBvc1gsIHZhbHVlUG9zWSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gYWRkIHRleHQgaWYgaXQgaXMgZW5hYmxlZFxuICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlID09PSBcInJlZ3VsYXJcIiA/IFwiXCIgOiBmb250ZmFjZX0gJHtmb250c2l6ZX1weCAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0ZXh0Y29sb3I7XG4gICAgICAgIGlmIChzaG93bmFtZSkge1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChzaG9ydG5hbWUsIDAsIHBhbmVsT2Zmc2V0ICsgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHNob3J0bmFtZSwgd2lkdGggKiAwLjUsIHBhbmVsT2Zmc2V0ICsgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd251bWJlcikge1xuICAgICAgICAgICAgY29uc3QgdGlueU9mZnNldCA9IGFwcGVhcmFuY2UgPT09IFwidGlueVwiID8gMTIgOiAwO1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmRpc3BsYXlWYWx1ZSwgdGlueU9mZnNldCwgaGVpZ2h0IC0gcGFuZWxPZmZzZXQsIHdpZHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuZGlzcGxheVZhbHVlLCB3aWR0aCAqIDAuNSwgaGVpZ2h0IC0gcGFuZWxPZmZzZXQsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3IHRyaWFuZ2xlIGlmIGl0IGlzIGVuYWJsZWRcbiAgICAgICAgaWYgKHRyaWFuZ2xlKSB7XG4gICAgICAgICAgICBpZiAoIWRpc3RhbmNlKSBjdHguZmlsbFN0eWxlID0gdHJpY29sb3I7XG4gICAgICAgICAgICBlbHNlIGlmICghYWN0aXZlKSBjdHguZmlsbFN0eWxlID0gZGlhbGNvbG9yO1xuICAgICAgICAgICAgZWxzZSBjdHguZmlsbFN0eWxlID0gYWN0aXZlZGlhbGNvbG9yO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlwUG9zaXRpb25YID0gZGlhbENlbnRlclggKyBkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5jb3MoLTMgKiBNYXRoLlBJIC8gNCkgLSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpcFBvc2l0aW9uWSA9IGRpYWxDZW50ZXJZICsgZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguc2luKC0zICogTWF0aC5QSSAvIDQpIC0gMTtcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHRpcFBvc2l0aW9uWCwgdGlwUG9zaXRpb25ZKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHRpcFBvc2l0aW9uWCAtIHRyaWFuZ2xlSGVpZ2h0LCB0aXBQb3NpdGlvblkpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odGlwUG9zaXRpb25YLCB0aXBQb3NpdGlvblkgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh0aXBQb3NpdGlvblgsIHRpcFBvc2l0aW9uWSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oZGlhbENlbnRlclggLSB0cmlhbmdsZUhlaWdodCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSAtIHRyaWFuZ2xlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKGRpYWxDZW50ZXJYICsgdHJpYW5nbGVIZWlnaHQsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJpYm9yZGVyY29sb3IgfHwgXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRyaWFuZ2xlTGluZVdpZHRoO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFZhbHVlRnJvbURlbHRhKGU6IFBvaW50ZXJEcmFnRXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWluLCBtbWF4IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBzdGVwUmFuZ2UgPSB0aGlzLnN0ZXBSYW5nZTtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSB0eXBlID09PSBcImVudW1cIiA/IDEgOiAobW1heCAtIG1taW4pIC8gdHJ1ZVN0ZXBzO1xuICAgICAgICBjb25zdCBwcmV2U3RlcHMgPSB0eXBlID09PSBcImVudW1cIiA/IGUucHJldlZhbHVlIDogKGUucHJldlZhbHVlIC0gbW1pbikgLyBzdGVwO1xuICAgICAgICBjb25zdCBkU3RlcHMgPSBNYXRoLnJvdW5kKChlLmZyb21ZIC0gZS55KSAvIHN0ZXBSYW5nZSk7XG4gICAgICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5taW4odHJ1ZVN0ZXBzLCBNYXRoLm1heCgwLCBwcmV2U3RlcHMgKyBkU3RlcHMpKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gc3RlcHM7XG4gICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5yb3VuZChzdGVwcyAqIHN0ZXAgKyBtbWluKTtcbiAgICAgICAgcmV0dXJuIHN0ZXBzICogc3RlcCArIG1taW47XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZS54IDwgdGhpcy5pbnRlcmFjdGlvblJlY3RbMF1cbiAgICAgICAgICAgIHx8IGUueCA+IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl1cbiAgICAgICAgICAgIHx8IGUueSA8IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdXG4gICAgICAgICAgICB8fCBlLnkgPiB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdXG4gICAgICAgICkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlckRyYWdFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2luVG91Y2gpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbURlbHRhKGUpO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMuc3RhdGUudmFsdWUpIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5pbXBvcnQgeyBhdG9kYiB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmludGVyZmFjZSBMaXZlTWV0ZXJQcm9wcyBleHRlbmRzIExpdmVQcm9wcyB7XG4gICAgb3JpZW50YXRpb24/OiBcInZlcnRpY2FsXCIgfCBcImhvcml6b250YWxcIjtcbiAgICBtb2RlPzogXCJkZWNpYmVsXCIgfCBcImxpbmVhclwiO1xuICAgIGNsaXBfc2l6ZT86IFwibm9ybWFsXCIgfCBcImV4dGVuZGVkXCI7XG4gICAgaW50ZXJ2YWw/OiBudW1iZXI7XG4gICAgYmdjb2xvcj86IHN0cmluZztcbiAgICBpbmFjdGl2ZWNvbGRjb2xvcj86IHN0cmluZztcbiAgICBpbmFjdGl2ZXdhcm1jb2xvcj86IHN0cmluZztcbiAgICBjb2xkY29sb3I/OiBzdHJpbmc7XG4gICAgd2FybWNvbG9yPzogc3RyaW5nO1xuICAgIGhvdGNvbG9yPzogc3RyaW5nO1xuICAgIG92ZXJsb2FkY29sb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVNZXRlciBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZU1ldGVyUHJvcHM+IHtcbiAgICBzdGF0aWMgZ2V0IHByb3BzKCk6IExpdmVNZXRlclByb3BzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnByb3BzLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUubWV0ZXJ+XCIsXG4gICAgICAgICAgICB3aWR0aDogMTIwLFxuICAgICAgICAgICAgaGVpZ2h0OiAxNSxcbiAgICAgICAgICAgIG1vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICBjbGlwX3NpemU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBpbnRlcnZhbDogMjAsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICBpbmFjdGl2ZWNvbGRjb2xvcjogXCJyZ2JhKDEzMCwgMTMwLCAxMzAsIDEpXCIsXG4gICAgICAgICAgICBpbmFjdGl2ZXdhcm1jb2xvcjogXCJyZ2JhKDE0OSwgMTQ5LCAxNDksIDEpXCIsXG4gICAgICAgICAgICBjb2xkY29sb3I6IFwicmdiYSgxMiwgMjQ4LCAxMDAsIDEpXCIsXG4gICAgICAgICAgICB3YXJtY29sb3I6IFwicmdiYSgxOTUsIDI0OCwgMTAwLCAxKVwiLFxuICAgICAgICAgICAgaG90Y29sb3I6IFwicmdiYSgyNTUsIDE5MywgMTAsIDEpXCIsXG4gICAgICAgICAgICBvdmVybG9hZGNvbG9yOiBcInJnYmEoMjU1LCAxMCwgMTAsIDEpXCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NOYW1lID0gXCJsaXZlLW1ldGVyXCI7XG4gICAgcGFpbnRWYWx1ZTogbnVtYmVyID0gMDtcbiAgICBtYXhWYWx1ZTogbnVtYmVyID0gMDtcbiAgICBwYWludFRpbWVyOiBudW1iZXI7XG4gICAgbWF4VGltZXI6IG51bWJlcjtcblxuICAgIGdldCBkaXN0YW5jZSgpIHtcbiAgICAgICAgY29uc3QgeyBtb2RlLCB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChtb2RlID09PSBcImRlY2liZWxcIiA/IE1hdGgubWF4KC03MCwgdmFsdWUpIDogYXRvZGIoTWF0aC5hYnModmFsdWUpKSkgLyA3MCArIDE7XG4gICAgfVxuXG4gICAgcGFpbnQocGFpbnRJbj86IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wYWludFZhbHVlID0gTWF0aC5tYXgodGhpcy5wYWludFZhbHVlLCB0aGlzLmRpc3RhbmNlKTtcbiAgICAgICAgaWYgKCFwYWludEluKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGFpbnRUaW1lcikgdGhpcy5wYWludFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnBhaW50KHRydWUpLCB0aGlzLnN0YXRlLmludGVydmFsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhaW50VGltZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgICAgICBjbGlwX3NpemUsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgaW5hY3RpdmVjb2xkY29sb3IsXG4gICAgICAgICAgICBpbmFjdGl2ZXdhcm1jb2xvcixcbiAgICAgICAgICAgIGNvbGRjb2xvcixcbiAgICAgICAgICAgIHdhcm1jb2xvcixcbiAgICAgICAgICAgIGhvdGNvbG9yLFxuICAgICAgICAgICAgb3ZlcmxvYWRjb2xvclxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cbiAgICAgICAgY29uc3QgY2xpcCA9IGNsaXBfc2l6ZSA9PT0gXCJub3JtYWxcIiA/IDEwIDogMjA7XG4gICAgICAgIGNvbnN0IHBhaW50VmFsdWUgPSB0aGlzLnBhaW50VmFsdWU7XG4gICAgICAgIGlmIChwYWludFZhbHVlID4gdGhpcy5tYXhWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IHBhaW50VmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5tYXhUaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMubWF4VGltZXIpO1xuICAgICAgICAgICAgdGhpcy5tYXhUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5tYXhWYWx1ZSA9IHRoaXMucGFpbnRWYWx1ZSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF4VmFsdWUgPSB0aGlzLm1heFZhbHVlO1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgY29uc3Qgd2FybVN0b3AgPSB3aWR0aCAtIGNsaXAgLSAxO1xuICAgICAgICAgICAgY29uc3QgaG90U3RvcCA9IHdpZHRoIC0gY2xpcDtcbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHdpZHRoLCAwKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBhY3RpdmUgPyBjb2xkY29sb3IgOiBpbmFjdGl2ZWNvbGRjb2xvcik7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3Aod2FybVN0b3AgLyB3aWR0aCwgYWN0aXZlID8gd2FybWNvbG9yIDogaW5hY3RpdmV3YXJtY29sb3IpO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKGhvdFN0b3AgLyB3aWR0aCwgYWN0aXZlID8gaG90Y29sb3IgOiBpbmFjdGl2ZXdhcm1jb2xvcik7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgYWN0aXZlID8gb3ZlcmxvYWRjb2xvciA6IGluYWN0aXZld2FybWNvbG9yKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBiZ2NvbG9yO1xuICAgICAgICAgICAgaWYgKHBhaW50VmFsdWUgPCAxKSBjdHguZmlsbFJlY3QoMCwgMCwgd2FybVN0b3AsIGhlaWdodCk7XG4gICAgICAgICAgICBpZiAocGFpbnRWYWx1ZSA8IDIpIGN0eC5maWxsUmVjdChob3RTdG9wLCAwLCBjbGlwLCBoZWlnaHQpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgICAgICAgaWYgKHBhaW50VmFsdWUgPiAwKSBjdHguZmlsbFJlY3QoMCwgMCwgTWF0aC5taW4oMSwgcGFpbnRWYWx1ZSkgKiB3YXJtU3RvcCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGlmIChwYWludFZhbHVlID4gMSkgY3R4LmZpbGxSZWN0KGhvdFN0b3AsIDAsIE1hdGgubWluKDEsIChwYWludFZhbHVlIC0gMSkgKiAxMCkgKiBjbGlwLCBoZWlnaHQpO1xuICAgICAgICAgICAgaWYgKG1heFZhbHVlID4gcGFpbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChtYXhWYWx1ZSA8PSAxKSBjdHguZmlsbFJlY3QoTWF0aC5taW4od2FybVN0b3AgLSAxLCBtYXhWYWx1ZSAqIHdhcm1TdG9wKSwgMCwgMSwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBpZiAobWF4VmFsdWUgPiAxKSBjdHguZmlsbFJlY3QoTWF0aC5taW4od2lkdGggLSAxLCBob3RTdG9wICsgKG1heFZhbHVlIC0gMSkgKiAxMCAqIGNsaXApLCAwLCAxLCBoZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgd2FybVN0b3AgPSBjbGlwICsgMTtcbiAgICAgICAgICAgIGNvbnN0IGhvdFN0b3AgPSBjbGlwO1xuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgaGVpZ2h0LCAwLCAwKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBhY3RpdmUgPyBjb2xkY29sb3IgOiBpbmFjdGl2ZWNvbGRjb2xvcik7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoKGhlaWdodCAtIHdhcm1TdG9wKSAvIGhlaWdodCwgYWN0aXZlID8gd2FybWNvbG9yIDogaW5hY3RpdmV3YXJtY29sb3IpO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKChoZWlnaHQgLSBob3RTdG9wKSAvIGhlaWdodCwgYWN0aXZlID8gaG90Y29sb3IgOiBpbmFjdGl2ZXdhcm1jb2xvcik7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgYWN0aXZlID8gb3ZlcmxvYWRjb2xvciA6IGluYWN0aXZld2FybWNvbG9yKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBiZ2NvbG9yO1xuICAgICAgICAgICAgaWYgKHBhaW50VmFsdWUgPCAxKSBjdHguZmlsbFJlY3QoMCwgd2FybVN0b3AsIHdpZHRoLCBoZWlnaHQgLSB3YXJtU3RvcCk7XG4gICAgICAgICAgICBpZiAocGFpbnRWYWx1ZSA8IDIpIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaG90U3RvcCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgICAgICAgICBpZiAocGFpbnRWYWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkcmF3SGVpZ2h0ID0gTWF0aC5taW4oMSwgcGFpbnRWYWx1ZSkgKiAoaGVpZ2h0IC0gd2FybVN0b3ApO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCBoZWlnaHQgLSBkcmF3SGVpZ2h0LCB3aWR0aCwgZHJhd0hlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFpbnRWYWx1ZSA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkcmF3SGVpZ2h0ID0gTWF0aC5taW4oMSwgKHBhaW50VmFsdWUgLSAxKSAqIDEwKSAqIGNsaXA7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIGhvdFN0b3AgLSBkcmF3SGVpZ2h0LCB3aWR0aCwgZHJhd0hlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF4VmFsdWUgPiBwYWludFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heFZhbHVlIDw9IDEpIGN0eC5maWxsUmVjdCgwLCBoZWlnaHQgLSBtYXhWYWx1ZSAqIChoZWlnaHQgLSB3YXJtU3RvcCksIHdpZHRoLCAxKTtcbiAgICAgICAgICAgICAgICBpZiAobWF4VmFsdWUgPiAxKSBjdHguZmlsbFJlY3QoMCwgTWF0aC5tYXgoMCwgaG90U3RvcCAtIChtYXhWYWx1ZSAtIDEpICogMTAgKiBjbGlwKSwgd2lkdGgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFpbnRWYWx1ZSA9IDA7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcblxuaW50ZXJmYWNlIExpdmVOdW1ib3hQcm9wcyBleHRlbmRzIExpdmVQcm9wcyB7XG4gICAgZm9udG5hbWU/OiBzdHJpbmc7XG4gICAgZm9udHNpemU/OiBudW1iZXI7XG4gICAgZm9udGZhY2U/OiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBhcHBlYXJhbmNlPzogXCJzbGlkZXJcIiB8IFwidHJpYW5nbGVcIiB8IFwiZGVmYXVsdFwiO1xuICAgIGFjdGl2ZWJnY29sb3I/OiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I/OiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcj86IHN0cmluZztcbiAgICB0ZXh0Y29sb3I/OiBzdHJpbmc7XG4gICAgdHJpY29sb3I/OiBzdHJpbmc7XG4gICAgYWN0aXZldHJpY29sb3I/OiBzdHJpbmc7XG4gICAgdHJpY29sb3IyPzogc3RyaW5nO1xuICAgIGFjdGl2ZXRyaWNvbG9yMj86IHN0cmluZztcbiAgICBhY3RpdmVzbGlkZXJjb2xvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZU51bWJveCBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZU51bWJveFByb3BzPiB7XG4gICAgc3RhdGljIGdldCBwcm9wcygpOiBMaXZlTnVtYm94UHJvcHMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucHJvcHMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS5udW1ib3hcIixcbiAgICAgICAgICAgIHdpZHRoOiA0NSxcbiAgICAgICAgICAgIGhlaWdodDogMTUsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEwLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgYXBwZWFyYW5jZTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXRyaWNvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yMjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0cmljb2xvcjI6IFwicmdiYSgxMDksIDIxNSwgMjU1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlc2xpZGVyY29sb3I6IFwicmdiYSgxMDksIDIxNSwgMjU1LCAxKVwiLFxuICAgICAgICAgICAgbW1pbjogMCxcbiAgICAgICAgICAgIG1tYXg6IDEyNyxcbiAgICAgICAgICAgIHR5cGU6IFwiaW50XCIsXG4gICAgICAgICAgICB1bml0c3R5bGU6IFwiaW50XCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NOYW1lID0gXCJsaXZlLW51bWJveFwiO1xuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBnZXQgdHJ1ZVN0ZXBzKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHN0ZXBzLCBzdGVwIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBmdWxsID0gMTAwO1xuICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gdGhpcy5zdGF0ZS5lbnVtLmxlbmd0aCA6IHR5cGUgPT09IFwiaW50XCIgPyBtbWF4IC0gbW1pbiA6IGZ1bGw7XG4gICAgICAgIGlmIChzdGVwKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiB0aGlzLnByb3BzLmVudW0ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyAoTWF0aC5yb3VuZChzdGVwKSB8fCAxKSksIG1heFN0ZXBzKTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBzdGVwKSwgbWF4U3RlcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGVwcykgcmV0dXJuIE1hdGgubWluKHN0ZXBzLCBtYXhTdGVwcyk7XG4gICAgICAgIHJldHVybiBtYXhTdGVwcztcbiAgICB9XG4gICAgZ2V0IGRpc3RhbmNlKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gXCJlbnVtXCIgPyB2YWx1ZSAvIHRoaXMuc3RhdGUuZW51bS5sZW5ndGggOiAodmFsdWUgLSBtbWluKSAvIChtbWF4IC0gbW1pbik7XG4gICAgfVxuICAgIGdldCBzdGVwUmFuZ2UoKSB7XG4gICAgICAgIGNvbnN0IGZ1bGwgPSAxMDA7XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICByZXR1cm4gZnVsbCAvIHRydWVTdGVwcztcbiAgICB9XG4gICAgcGFpbnQoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgZm9jdXMsXG4gICAgICAgICAgICBmb250bmFtZSxcbiAgICAgICAgICAgIGZvbnRzaXplLFxuICAgICAgICAgICAgZm9udGZhY2UsXG4gICAgICAgICAgICBhcHBlYXJhbmNlLFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHRleHRjb2xvcixcbiAgICAgICAgICAgIHRyaWNvbG9yLFxuICAgICAgICAgICAgYWN0aXZldHJpY29sb3IsXG4gICAgICAgICAgICB0cmljb2xvcjIsXG4gICAgICAgICAgICBhY3RpdmV0cmljb2xvcjIsXG4gICAgICAgICAgICBhY3RpdmVzbGlkZXJjb2xvclxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTtcbiAgICAgICAgY29uc3QgZGlzcGxheVZhbHVlID0gdGhpcy5kaXNwbGF5VmFsdWU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICAvLyBkcmF3IGJhY2tncm91bmRcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGFjdGl2ZWJnY29sb3I7XG4gICAgICAgIGN0eC5yZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIC8vIGRyYXcgYm9yZGVyIChldmVudHVhbGx5IHdlIG1pZ2h0IG5lZWQgdG8gcmVkZWZpbmUgdGhlIHNoYXBlKVxuICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJzbGlkZXJcIiAmJiBhY3RpdmUgJiYgZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBhY3RpdmVzbGlkZXJjb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLjUsIDAuNSwgZGlzdGFuY2UgKiB3aWR0aCAtIDEsIGhlaWdodCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcHBlYXJhbmNlID09PSBcInRyaWFuZ2xlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRyaWFuZ2xlSGVpZ2h0ID0gODtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBhY3RpdmUgPyAoZGlzdGFuY2UgPyBhY3RpdmV0cmljb2xvcjIgOiBhY3RpdmV0cmljb2xvcikgOiAoZGlzdGFuY2UgPyB0cmljb2xvcjIgOiB0cmljb2xvcik7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHdpZHRoIC0gdHJpYW5nbGVIZWlnaHQgLSAwLjUsIGhlaWdodCAqIDAuNSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoIC0gMC41LCAwLjUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCAtIDAuNSwgaGVpZ2h0IC0gMC41KTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGlzcGxheSB0aGUgdGV4dFxuICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlID09PSBcInJlZ3VsYXJcIiA/IFwiXCIgOiBmb250ZmFjZX0gJHtmb250c2l6ZX1weCAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0ZXh0Y29sb3I7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGRpc3BsYXlWYWx1ZSwgd2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNSwgd2lkdGgpO1xuICAgIH1cbiAgICBnZXRWYWx1ZUZyb21EZWx0YShlOiBQb2ludGVyRHJhZ0V2ZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1pbiwgbW1heCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3Qgc3RlcFJhbmdlID0gdGhpcy5zdGVwUmFuZ2U7XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICBjb25zdCBzdGVwID0gdHlwZSA9PT0gXCJlbnVtXCIgPyAxIDogKG1tYXggLSBtbWluKSAvIHRydWVTdGVwcztcbiAgICAgICAgY29uc3QgcHJldlN0ZXBzID0gdHlwZSA9PT0gXCJlbnVtXCIgPyBlLnByZXZWYWx1ZSA6IChlLnByZXZWYWx1ZSAtIG1taW4pIC8gc3RlcDtcbiAgICAgICAgY29uc3QgZFN0ZXBzID0gTWF0aC5yb3VuZCgoZS5mcm9tWSAtIGUueSkgLyBzdGVwUmFuZ2UpO1xuICAgICAgICBjb25zdCBzdGVwcyA9IE1hdGgubWluKHRydWVTdGVwcywgTWF0aC5tYXgoMCwgcHJldlN0ZXBzICsgZFN0ZXBzKSk7XG4gICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHN0ZXBzO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIE1hdGgucm91bmQoc3RlcHMgKiBzdGVwICsgbW1pbik7XG4gICAgICAgIHJldHVybiBzdGVwcyAqIHN0ZXAgKyBtbWluO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEcmFnID0gKGU6IFBvaW50ZXJEcmFnRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9pblRvdWNoKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRWYWx1ZUZyb21EZWx0YShlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLnN0YXRlLnZhbHVlKSB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZVNsaWRlclByb3BzIGV4dGVuZHMgTGl2ZVByb3BzIHtcbiAgICByZWxhdGl2ZT86IGJvb2xlYW47XG4gICAgZm9udG5hbWU/OiBzdHJpbmc7XG4gICAgZm9udHNpemU/OiBudW1iZXI7XG4gICAgZm9udGZhY2U/OiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBvcmllbnRhdGlvbj86IFwidmVydGljYWxcIiB8IFwiaG9yaXpvbnRhbFwiO1xuICAgIHNob3duYW1lPzogYm9vbGVhbjtcbiAgICBzaG93bnVtYmVyPzogYm9vbGVhbjtcbiAgICBzbGlkZXJjb2xvcj86IHN0cmluZztcbiAgICB0ZXh0Y29sb3I/OiBzdHJpbmc7XG4gICAgdHJpYm9yZGVyY29sb3I/OiBzdHJpbmc7XG4gICAgdHJpb25jb2xvcj86IHN0cmluZztcbiAgICB0cmljb2xvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVNsaWRlciBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZVNsaWRlclByb3BzPiB7XG4gICAgc3RhdGljIGdldCBwcm9wcygpOiBMaXZlU2xpZGVyUHJvcHMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucHJvcHMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS5zbGlkZXJcIixcbiAgICAgICAgICAgIHdpZHRoOiA0MCxcbiAgICAgICAgICAgIGhlaWdodDogOTAsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEyLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIHNob3duYW1lOiB0cnVlLFxuICAgICAgICAgICAgc2hvd251bWJlcjogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlcmNvbG9yOiBcInJnYmEoNDAsIDQwLCA0MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmlib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICB0cmlvbmNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIHJlbGF0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIG1taW46IDAsXG4gICAgICAgICAgICBtbWF4OiAxMjcsXG4gICAgICAgICAgICB0eXBlOiBcImludFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNsYXNzTmFtZSA9IFwibGl2ZS1zbGlkZXJcIjtcbiAgICBfaW5Ub3VjaDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGludGVyYWN0aW9uUmVjdDogbnVtYmVyW10gPSBbMCwgMCwgMCwgMF07XG5cbiAgICBnZXQgdHJ1ZVN0ZXBzKCkge1xuICAgICAgICBjb25zdCB7IG9yaWVudGF0aW9uLCB0eXBlLCBtbWF4LCBtbWluLCBzdGVwcywgc3RlcCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgZnVsbCA9IHRoaXMuaW50ZXJhY3Rpb25SZWN0W29yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyAzIDogMl07XG4gICAgICAgIGNvbnN0IG1heFN0ZXBzID0gdHlwZSA9PT0gXCJlbnVtXCIgPyB0aGlzLnN0YXRlLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IG1tYXggLSBtbWluIDogZnVsbDtcbiAgICAgICAgaWYgKHN0ZXApIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHRoaXMuc3RhdGUuZW51bS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIChNYXRoLnJvdW5kKHN0ZXApIHx8IDApKSwgbWF4U3RlcHMpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIHN0ZXApLCBtYXhTdGVwcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ZXBzKSByZXR1cm4gTWF0aC5taW4oc3RlcHMsIG1heFN0ZXBzKTtcbiAgICAgICAgcmV0dXJuIG1heFN0ZXBzO1xuICAgIH1cbiAgICBnZXQgZGlzdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IHZhbHVlIC8gdGhpcy5zdGF0ZS5lbnVtLmxlbmd0aCA6ICh2YWx1ZSAtIG1taW4pIC8gKG1tYXggLSBtbWluKTtcbiAgICB9XG4gICAgZ2V0IHN0ZXBSYW5nZSgpIHtcbiAgICAgICAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgZnVsbCA9IHRoaXMuaW50ZXJhY3Rpb25SZWN0W29yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyAzIDogMl07XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICByZXR1cm4gZnVsbCAvIHRydWVTdGVwcztcbiAgICB9XG4gICAgcGFpbnQoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgZm9udG5hbWUsXG4gICAgICAgICAgICBmb250c2l6ZSxcbiAgICAgICAgICAgIGZvbnRmYWNlLFxuICAgICAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgICAgICBzaG93bmFtZSxcbiAgICAgICAgICAgIHNob3dudW1iZXIsXG4gICAgICAgICAgICBzbGlkZXJjb2xvcixcbiAgICAgICAgICAgIHRleHRjb2xvcixcbiAgICAgICAgICAgIHRyaWJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdHJpb25jb2xvcixcbiAgICAgICAgICAgIHRyaWNvbG9yLFxuICAgICAgICAgICAgc2hvcnRuYW1lXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gMC41O1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gODtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlO1xuICAgICAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSB0aGlzLmRpc3BsYXlWYWx1ZTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHNsaWRlcmNvbG9yO1xuXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHdpZHRoICogMC41LCBmb250c2l6ZSArIHBhZGRpbmcpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCAqIDAuNSwgaGVpZ2h0IC0gKGZvbnRzaXplICsgcGFkZGluZykpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbldpZHRoID0gd2lkdGggKiAwLjU7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdCA9IFtcbiAgICAgICAgICAgICAgICB3aWR0aCAqIDAuNSAtIGludGVyYWN0aW9uV2lkdGggKiAwLjUsXG4gICAgICAgICAgICAgICAgZm9udHNpemUgKyBwYWRkaW5nLFxuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uV2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0IC0gMiAqIChmb250c2l6ZSArIHBhZGRpbmcpXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRyaWJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgY29uc3QgdHJpT3JpZ2luOiBbbnVtYmVyLCBudW1iZXJdID0gW1xuICAgICAgICAgICAgICAgIHdpZHRoICogMC41ICsgbGluZVdpZHRoICogMC41ICsgMC41LFxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdIC0gNCArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdICogKDEgLSBkaXN0YW5jZSlcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgNCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDgsIHRyaU9yaWdpblsxXSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDgsIHRyaU9yaWdpblsxXSArIDgpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0sIHRyaU9yaWdpblsxXSArIDQpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5faW5Ub3VjaCA/IHRyaW9uY29sb3IgOiB0cmljb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Zm9udGZhY2UgPT09IFwicmVndWxhclwiID8gXCJcIiA6IGZvbnRmYWNlfSAke2ZvbnRzaXplfXB4ICR7Zm9udG5hbWV9LCBzYW5zLXNlcmlmYDtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRleHRjb2xvcjtcbiAgICAgICAgICAgIGlmIChzaG93bmFtZSkgY3R4LmZpbGxUZXh0KHNob3J0bmFtZSwgd2lkdGggKiAwLjUsIGZvbnRzaXplLCB3aWR0aCk7XG4gICAgICAgICAgICBpZiAoc2hvd251bWJlcikgY3R4LmZpbGxUZXh0KGRpc3BsYXlWYWx1ZSwgd2lkdGggKiAwLjUsIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhwYWRkaW5nLCBoZWlnaHQgKiAwLjUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCAtIHBhZGRpbmcsIGhlaWdodCAqIDAuNSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uV2lkdGggPSBoZWlnaHQgKiAwLjU7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdCA9IFtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgICAgICAgIGhlaWdodCAqIDAuNSAtIGludGVyYWN0aW9uV2lkdGggKiAwLjUsXG4gICAgICAgICAgICAgICAgd2lkdGggLSAyICogcGFkZGluZyxcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbldpZHRoXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRyaWJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgY29uc3QgdHJpT3JpZ2luOiBbbnVtYmVyLCBudW1iZXJdID0gW1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl0gKiBkaXN0YW5jZSAtIDQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICogMC41ICsgbGluZVdpZHRoICogMC41ICsgMlxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odHJpT3JpZ2luWzBdLCB0cmlPcmlnaW5bMV0gKyA4KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgNCwgdHJpT3JpZ2luWzFdKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgOCwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLl9pblRvdWNoID8gdHJpb25jb2xvciA6IHRyaWNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICAgICAgaWYgKHNob3duYW1lKSBjdHguZmlsbFRleHQoc2hvcnRuYW1lLCB3aWR0aCAqIDAuNSwgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgIGlmIChzaG93bnVtYmVyKSBjdHguZmlsbFRleHQoZGlzcGxheVZhbHVlLCA0LCBoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRWYWx1ZUZyb21Qb3MoZTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XG4gICAgICAgIGNvbnN0IHsgb3JpZW50YXRpb24sIHR5cGUsIG1taW4sIG1tYXggfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHN0ZXBSYW5nZSA9IHRoaXMuc3RlcFJhbmdlO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgY29uc3Qgc3RlcCA9IHR5cGUgPT09IFwiZW51bVwiID8gMSA6IChtbWF4IC0gbW1pbikgLyB0cnVlU3RlcHM7XG4gICAgICAgIGxldCBzdGVwcyA9IE1hdGgucm91bmQoKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyB0aGlzLmludGVyYWN0aW9uUmVjdFszXSAtIChlLnkgLSB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSkgOiBlLnggLSB0aGlzLmludGVyYWN0aW9uUmVjdFswXSkgLyBzdGVwUmFuZ2UpO1xuICAgICAgICBzdGVwcyA9IE1hdGgubWluKHRydWVTdGVwcywgTWF0aC5tYXgoMCwgc3RlcHMpKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gc3RlcHM7XG4gICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5yb3VuZChzdGVwcyAqIHN0ZXAgKyBtbWluKTtcbiAgICAgICAgcmV0dXJuIHN0ZXBzICogc3RlcCArIG1taW47XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZS54IDwgdGhpcy5pbnRlcmFjdGlvblJlY3RbMF1cbiAgICAgICAgICAgIHx8IGUueCA+IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl1cbiAgICAgICAgICAgIHx8IGUueSA8IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdXG4gICAgICAgICAgICB8fCBlLnkgPiB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdXG4gICAgICAgICkgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tUG9zKGUpO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHZhbHVlKSB0aGlzLnNldFZhbHVlKHRoaXMuZ2V0VmFsdWVGcm9tUG9zKGUpKTtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEcmFnID0gKGU6IFBvaW50ZXJEcmFnRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9pblRvdWNoKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRWYWx1ZUZyb21Qb3MoZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5zdGF0ZS52YWx1ZSkgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcblxuaW50ZXJmYWNlIExpdmVUYWJQcm9wcyBleHRlbmRzIExpdmVQcm9wcyB7XG4gICAgZm9udG5hbWU/OiBzdHJpbmc7XG4gICAgZm9udHNpemU/OiBudW1iZXI7XG4gICAgZm9udGZhY2U/OiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBhY3RpdmViZ2NvbG9yPzogc3RyaW5nO1xuICAgIGFjdGl2ZWJnb25jb2xvcj86IHN0cmluZztcbiAgICBiZ2NvbG9yPzogc3RyaW5nO1xuICAgIGJnb25jb2xvcj86IHN0cmluZztcbiAgICBib3JkZXJjb2xvcj86IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yPzogc3RyaW5nO1xuICAgIHRleHRjb2xvcj86IHN0cmluZztcbiAgICB0ZXh0b25jb2xvcj86IHN0cmluZztcbiAgICBhY3RpdmV0ZXh0Y29sb3I/OiBzdHJpbmc7XG4gICAgYWN0aXZldGV4dG9uY29sb3I/OiBzdHJpbmc7XG4gICAgbW9kZT86IFwiZXF1YWxcIiB8IFwicHJvcG9ydGlvbmFsXCI7XG4gICAgc3BhY2luZ194PzogbnVtYmVyO1xuICAgIHNwYWNpbmdfeT86IG51bWJlcjtcbiAgICBtdWx0aWxpbmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlVGFiIGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlVGFiUHJvcHM+IHtcbiAgICBzdGF0aWMgZ2V0IHByb3BzKCk6IExpdmVUYWJQcm9wcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wcm9wcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLnRhYlwiLFxuICAgICAgICAgICAgd2lkdGg6IDkwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0NSxcbiAgICAgICAgICAgIGZvbnRuYW1lOiBcIkFyaWFsXCIsXG4gICAgICAgICAgICBmb250c2l6ZTogMTAsXG4gICAgICAgICAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZWJnb25jb2xvcjogXCJyZ2JhKDI1NSwgMTgxLCA1MCwgMSlcIixcbiAgICAgICAgICAgIGJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYmdvbmNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRvbmNvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0b25jb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICBtb2RlOiBcImVxdWFsXCIsXG4gICAgICAgICAgICBlbnVtOiBbXCJvbmVcIiwgXCJ0d29cIiwgXCJ0aHJlZVwiXSxcbiAgICAgICAgICAgIHNwYWNpbmdfeDogNixcbiAgICAgICAgICAgIHNwYWNpbmdfeTogNixcbiAgICAgICAgICAgIG11bHRpbGluZTogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGFzc05hbWUgPSBcImxpdmUtdGFiXCI7XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB0YWJSZWN0czogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl1bXSA9IFtdO1xuXG4gICAgZ2V0VGFiUmVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgbXVsdGlsaW5lLFxuICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgIHNwYWNpbmdfeCxcbiAgICAgICAgICAgIHNwYWNpbmdfeVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgZW51bXMgPSB0aGlzLnN0YXRlLmVudW07XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IDQ7XG4gICAgICAgIGNvbnN0IG1pbkhlaWdodCA9IDEwO1xuICAgICAgICBjb25zdCBjb3VudCA9IGVudW1zLmxlbmd0aDtcbiAgICAgICAgbGV0IGNvdW50UGVyTGluZSA9IGNvdW50O1xuICAgICAgICBsZXQgbGluZXMgPSAxO1xuICAgICAgICBsZXQgc3RlcCA9IGhlaWdodCAvIGxpbmVzO1xuICAgICAgICBsZXQgaW50ZXJ2YWwgPSAwO1xuICAgICAgICBsZXQgcmVjdFdpZHRoID0gMDtcbiAgICAgICAgY29uc3Qgc3BhY2luZ1ggPSBzcGFjaW5nX3ggKiAwLjU7XG4gICAgICAgIGNvbnN0IHNwYWNpbmdZID0gc3BhY2luZ195ICogMC41O1xuXG4gICAgICAgIGlmIChtdWx0aWxpbmUgJiYgaGVpZ2h0ID49IDIgKiBtaW5IZWlnaHQpIHtcbiAgICAgICAgICAgIGxpbmVzID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oY291bnQsIE1hdGguZmxvb3IoaGVpZ2h0IC8gbWluSGVpZ2h0KSkpO1xuICAgICAgICAgICAgY291bnRQZXJMaW5lID0gTWF0aC5jZWlsKGNvdW50IC8gbGluZXMpO1xuICAgICAgICAgICAgLy8gaWYgdGhlcmUncyBub3QgZW5vdWdoIGhlaWdodCwgaW5jcmVhc2UgdGhlIG51bWJlciBvZiB0YWJzIHBlciByb3dcbiAgICAgICAgICAgIHdoaWxlIChsaW5lcyAqIGNvdW50UGVyTGluZSA8IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgY291bnRQZXJMaW5lKys7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmVzID4gMSkgbGluZXMtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3MgZXh0cmEgaGVpZ2h0LCByZWR1Y2UgdGhlIG51bWJlciBvZiByb3dzXG4gICAgICAgICAgICB3aGlsZSAobGluZXMgKiBjb3VudFBlckxpbmUgPiBjb3VudCAmJiAobGluZXMgLSAxKSAqIGNvdW50UGVyTGluZSA+PSBjb3VudCkge1xuICAgICAgICAgICAgICAgIGxpbmVzLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGVwID0gaGVpZ2h0IC8gbGluZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vZGUgPT09IFwiZXF1YWxcIikge1xuICAgICAgICAgICAgaW50ZXJ2YWwgPSB3aWR0aCAvIGNvdW50UGVyTGluZTtcbiAgICAgICAgICAgIHJlY3RXaWR0aCA9IGludGVydmFsIC0gc3BhY2luZ1g7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlJlY3RzW2ldID0gW1xuICAgICAgICAgICAgICAgICAgICAoaSAlIGNvdW50UGVyTGluZSkgKiBpbnRlcnZhbCArIHNwYWNpbmdYICogMC41LFxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGkgLyBjb3VudFBlckxpbmUpICogc3RlcCArIHNwYWNpbmdZICogMC41LFxuICAgICAgICAgICAgICAgICAgICByZWN0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIChoZWlnaHQgLyBsaW5lcykgLSBzcGFjaW5nWVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0V2lkdGhzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBzcGFjZSA9IHdpZHRoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpICogY291bnRQZXJMaW5lOyBqIDwgTWF0aC5taW4oKGkgKyAxKSAqIGNvdW50UGVyTGluZSwgY291bnQpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dERpbWVuc2lvbnMgPSB0aGlzLmN0eC5tZWFzdXJlVGV4dChlbnVtc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgIHRleHRXaWR0aHNbal0gPSB0ZXh0RGltZW5zaW9ucy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgKz0gdGV4dFdpZHRoc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgc3BhY2UgLT0gMiAqIG1hcmdpbiArIHNwYWNpbmdYO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdXNlZCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKiBjb3VudFBlckxpbmU7IGogPCBNYXRoLm1pbigoaSArIDEpICogY291bnRQZXJMaW5lLCBjb3VudCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWN0U3BhY2UgPSB0ZXh0V2lkdGhzW2pdIC8gdG90YWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiUmVjdHNbal0gPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VkICsgc3BhY2luZ1ggKiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpICogc3RlcCArIHNwYWNpbmdZICogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2UgKiByZWN0U3BhY2UgKyAyICogbWFyZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IC8gbGluZXMgLSBzcGFjaW5nWVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB1c2VkICs9IHRoaXMudGFiUmVjdHNbal1bMl0gKyBzcGFjaW5nWDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudGFiUmVjdHM7XG4gICAgfVxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3IsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgYmdvbmNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdGV4dG9uY29sb3IsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0Y29sb3IsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0b25jb2xvcixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGVudW1zID0gdGhpcy5zdGF0ZS5lbnVtO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY29uc3QgdGFiUmVjdHMgPSB0aGlzLmdldFRhYlJlY3RzKCk7XG5cbiAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSAwLjU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkJvcmRlckNvbG9yID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW51bXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkJnQ29sb3IgPSBhY3RpdmUgPyAodmFsdWUgPT09IGkgPyBhY3RpdmViZ29uY29sb3IgOiBhY3RpdmViZ2NvbG9yKSA6ICh2YWx1ZSA9PT0gaSA/IGJnb25jb2xvciA6IGJnY29sb3IpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJ1dHRvbkJnQ29sb3I7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgucmVjdCguLi50YWJSZWN0c1tpXSk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYnV0dG9uQm9yZGVyQ29sb3I7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Zm9udGZhY2UgPT09IFwicmVndWxhclwiID8gXCJcIiA6IGZvbnRmYWNlfSAke2ZvbnRzaXplfXB4ICR7Zm9udG5hbWV9LCBzYW5zLXNlcmlmYDtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYWN0aXZlID8gKHZhbHVlID09PSBpID8gYWN0aXZldGV4dG9uY29sb3IgOiBhY3RpdmV0ZXh0Y29sb3IpIDogKHZhbHVlID09PSBpID8gdGV4dG9uY29sb3IgOiB0ZXh0Y29sb3IpO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGVudW1zW2ldLCB0YWJSZWN0c1tpXVswXSArIHRhYlJlY3RzW2ldWzJdICogMC41LCB0YWJSZWN0c1tpXVsxXSArIHRhYlJlY3RzW2ldWzNdICogMC41KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9IChlOiBQb2ludGVyRG93bkV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiUmVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLnRhYlJlY3RzW2ldO1xuICAgICAgICAgICAgaWYgKGUueCA+PSByZWN0WzBdICYmIGUueCA8PSByZWN0WzJdICsgcmVjdFswXSAmJiBlLnkgPj0gcmVjdFsxXSAmJiBlLnkgPD0gcmVjdFszXSArIHJlY3RbMV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlKGkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlckRvd24oZSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcbmltcG9ydCB7IGZpbGxSb3VuZGVkUmVjdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmludGVyZmFjZSBMaXZlVGV4dFByb3BzIGV4dGVuZHMgTGl2ZVByb3BzIHtcbiAgICBmb250bmFtZT86IHN0cmluZztcbiAgICBmb250c2l6ZT86IG51bWJlcjtcbiAgICBmb250ZmFjZT86IFwicmVndWxhclwiIHwgXCJib2xkXCIgfCBcIml0YWxpY1wiIHwgXCJib2xkIGl0YWxpY1wiO1xuICAgIGFjdGl2ZWJnY29sb3I/OiBzdHJpbmc7XG4gICAgYWN0aXZlYmdvbmNvbG9yPzogc3RyaW5nO1xuICAgIGJnY29sb3I/OiBzdHJpbmc7XG4gICAgYmdvbmNvbG9yPzogc3RyaW5nO1xuICAgIGJvcmRlcmNvbG9yPzogc3RyaW5nO1xuICAgIGZvY3VzYm9yZGVyY29sb3I/OiBzdHJpbmc7XG4gICAgdGV4dGNvbG9yPzogc3RyaW5nO1xuICAgIHRleHRvbmNvbG9yPzogc3RyaW5nO1xuICAgIGFjdGl2ZXRleHRjb2xvcj86IHN0cmluZztcbiAgICBhY3RpdmV0ZXh0b25jb2xvcj86IHN0cmluZztcbiAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIHRleHRvbj86IHN0cmluZztcbiAgICBtb2RlPzogXCJidXR0b25cIiB8IFwidG9nZ2xlXCI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVUZXh0IGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlVGV4dFByb3BzPiB7XG4gICAgc3RhdGljIGdldCBwcm9wcygpOiBMaXZlVGV4dFByb3BzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnByb3BzLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUudGV4dFwiLFxuICAgICAgICAgICAgd2lkdGg6IDkwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0NSxcbiAgICAgICAgICAgIGZvbnRuYW1lOiBcIkFyaWFsXCIsXG4gICAgICAgICAgICBmb250c2l6ZTogMTAsXG4gICAgICAgICAgICBmb250ZmFjZTogXCJyZWd1bGFyXCIsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZWJnb25jb2xvcjogXCJyZ2JhKDI1NSwgMTgxLCA1MCwgMSlcIixcbiAgICAgICAgICAgIGJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYmdvbmNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRvbmNvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0b25jb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0OiBcIkFcIixcbiAgICAgICAgICAgIHRleHRvbjogXCJCXCIsXG4gICAgICAgICAgICBtb2RlOiBcInRvZ2dsZVwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNsYXNzTmFtZSA9IFwibGl2ZS10ZXh0XCI7XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICB0ZXh0b24sXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHRleHRjb2xvcixcbiAgICAgICAgICAgIHRleHRvbmNvbG9yLFxuICAgICAgICAgICAgYWN0aXZldGV4dGNvbG9yLFxuICAgICAgICAgICAgYWN0aXZldGV4dG9uY29sb3IsXG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cbiAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSAwLjU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkJnQ29sb3IgPSBhY3RpdmUgPyAodmFsdWUgPyBhY3RpdmViZ29uY29sb3IgOiBhY3RpdmViZ2NvbG9yKSA6ICh2YWx1ZSA/IGJnb25jb2xvciA6IGJnY29sb3IpO1xuICAgICAgICBjb25zdCBidXR0b25Cb3JkZXJDb2xvciA9IGZvY3VzID8gZm9jdXNib3JkZXJjb2xvciA6IGJvcmRlcmNvbG9yO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBidXR0b25CZ0NvbG9yO1xuICAgICAgICBpZiAobW9kZSA9PT0gXCJidXR0b25cIikge1xuICAgICAgICAgICAgZmlsbFJvdW5kZWRSZWN0KGN0eCwgMC41LCAwLjUsIHdpZHRoIC0gMSwgaGVpZ2h0IC0gMSwgaGVpZ2h0ICogMC41IC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgucmVjdCgwLjUsIDAuNSwgd2lkdGggLSAxLCBoZWlnaHQgLSAxKTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDAuNTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYnV0dG9uQm9yZGVyQ29sb3I7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlID09PSBcInJlZ3VsYXJcIiA/IFwiXCIgOiBmb250ZmFjZX0gJHtmb250c2l6ZX1weCAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGFjdGl2ZSA/ICh2YWx1ZSA/IGFjdGl2ZXRleHRvbmNvbG9yIDogYWN0aXZldGV4dGNvbG9yKSA6ICh2YWx1ZSA/IHRleHRvbmNvbG9yIDogdGV4dGNvbG9yKTtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHZhbHVlICYmIG1vZGUgPT09IFwidG9nZ2xlXCIgPyB0ZXh0b24gOiB0ZXh0LCB3aWR0aCAqIDAuNSwgaGVpZ2h0ICogMC41KTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIG1vZGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgICAgICB0aGlzLnNldFZhbHVlKG1vZGUgPT09IFwiYnV0dG9uXCIgPyAxIDogMSAtIHZhbHVlKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1vZGUgPT09IFwiYnV0dG9uXCIpIHRoaXMuc2V0VmFsdWUoMCk7XG4gICAgfVxuICAgIHJlc2V0UG9pbnRlcnMoKSB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlQ29tcG9uZW50IH0gZnJvbSBcIi4vQmFzZVwiO1xuXG5pbnRlcmZhY2UgTGl2ZVRvZ2dsZVByb3BzIGV4dGVuZHMgTGl2ZVByb3BzIHtcbiAgICBhY3RpdmViZ2NvbG9yPzogc3RyaW5nO1xuICAgIGFjdGl2ZWJnb25jb2xvcj86IHN0cmluZztcbiAgICBiZ2NvbG9yPzogc3RyaW5nO1xuICAgIGJnb25jb2xvcj86IHN0cmluZztcbiAgICBib3JkZXJjb2xvcj86IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlVG9nZ2xlIGV4dGVuZHMgTGl2ZUNvbXBvbmVudDxMaXZlVG9nZ2xlUHJvcHM+IHtcbiAgICBzdGF0aWMgZ2V0IHByb3BzKCk6IExpdmVUb2dnbGVQcm9wcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wcm9wcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLnRvZ2dsZVwiLFxuICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgaGVpZ2h0OiAxNSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yOiBcInJnYmEoMjU1LCAxODEsIDUwLCAxKVwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBiZ29uY29sb3I6IFwicmdiYSgxOTUsIDE5NSwgMTk1LCAxKVwiLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NOYW1lID0gXCJsaXZlLXRvZ2dsZVwiO1xuXG4gICAgcGFpbnQoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgIGZvY3VzLFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZWJnb25jb2xvcixcbiAgICAgICAgICAgIGJnY29sb3IsXG4gICAgICAgICAgICBiZ29uY29sb3IsXG4gICAgICAgICAgICBib3JkZXJjb2xvcixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcblxuICAgICAgICBjb25zdCBib3JkZXJXaWR0aCA9IDAuNTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjdHgubGluZVdpZHRoID0gYm9yZGVyV2lkdGg7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQmdDb2xvciA9IGFjdGl2ZSA/ICh2YWx1ZSA/IGFjdGl2ZWJnb25jb2xvciA6IGFjdGl2ZWJnY29sb3IpIDogKHZhbHVlID8gYmdvbmNvbG9yIDogYmdjb2xvcik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkJvcmRlckNvbG9yID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGJ1dHRvbkJnQ29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnJlY3QoYm9yZGVyV2lkdGgsIGJvcmRlcldpZHRoLCB3aWR0aCAtIDIgKiBib3JkZXJXaWR0aCwgaGVpZ2h0IC0gMiAqIGJvcmRlcldpZHRoKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYnV0dG9uQm9yZGVyQ29sb3I7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoMSAtIHZhbHVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgTGl2ZUJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBMaXZlU2xpZGVyIGZyb20gXCIuL1NsaWRlclwiO1xuaW1wb3J0IExpdmVEaWFsIGZyb20gXCIuL0RpYWxcIjtcbmltcG9ydCBMaXZlVG9nZ2xlIGZyb20gXCIuL1RvZ2dsZVwiO1xuaW1wb3J0IExpdmVUZXh0IGZyb20gXCIuL1RleHRcIjtcbmltcG9ydCBMaXZlTnVtYm94IGZyb20gXCIuL051bWJveFwiO1xuaW1wb3J0IExpdmVUYWIgZnJvbSBcIi4vVGFiXCI7XG5pbXBvcnQgTGl2ZU1ldGVyIGZyb20gXCIuL01ldGVyXCI7XG5cbmV4cG9ydCB7IExpdmVCdXR0b24sIExpdmVTbGlkZXIsIExpdmVEaWFsLCBMaXZlVG9nZ2xlLCBMaXZlVGV4dCwgTGl2ZU51bWJveCwgTGl2ZVRhYiwgTGl2ZU1ldGVyIH07XG4iLCJleHBvcnQgY29uc3QgdG9NSURJID0gKGY6IG51bWJlcikgPT4gW1wiQ1wiLCBcIkMjXCIsIFwiRFwiLCBcIkQjXCIsIFwiRVwiLCBcIkZcIiwgXCJGI1wiLCBcIkdcIiwgXCJHI1wiLCBcIkFcIiwgXCJBI1wiLCBcIkJcIl1bKGYgJSAxMiArIDEyKSAlIDEyXSArIE1hdGgucm91bmQoZiAvIDEyIC0gMik7XG5leHBvcnQgY29uc3QgdG9SYWQgPSAoZGVncmVlczogbnVtYmVyKSA9PiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbmV4cG9ydCBjb25zdCBhdG9kYiA9IChhOiBudW1iZXIpID0+IDIwICogTWF0aC5sb2cxMChhKTtcbmV4cG9ydCBjb25zdCBkYnRvYSA9IChkYjogbnVtYmVyKSA9PiAxMCAqKiAoZGIgLyAyMCk7XG5leHBvcnQgY29uc3Qgcm91bmRlZFJlY3QgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmFkaXVzOiBudW1iZXIgfCBudW1iZXJbXSkgPT4ge1xuICAgIGNvbnN0IHJhZGlpID0gWzAsIDAsIDAsIDBdO1xuICAgIGlmICh0eXBlb2YgcmFkaXVzID09PSBcIm51bWJlclwiKSByYWRpaS5maWxsKHJhZGl1cyk7XG4gICAgZWxzZSByYWRpdXMuZm9yRWFjaCgodiwgaSkgPT4gcmFkaWlbaV0gPSB2KTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaWlbMF0sIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaWlbMV0sIHkpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaWlbMV0pO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaWlbMl0pO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoIC0gcmFkaWlbMl0sIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCArIHJhZGlpWzNdLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaWlbM10pO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHJhZGlpWzBdKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaWlbMF0sIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG59O1xuZXhwb3J0IGNvbnN0IGZpbGxSb3VuZGVkUmVjdCA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCByYWRpdXM6IG51bWJlciB8IG51bWJlcltdKSA9PiB7XG4gICAgY29uc3QgcmFkaWkgPSBbMCwgMCwgMCwgMF07XG4gICAgaWYgKHR5cGVvZiByYWRpdXMgPT09IFwibnVtYmVyXCIpIHJhZGlpLmZpbGwocmFkaXVzKTtcbiAgICBlbHNlIHJhZGl1cy5mb3JFYWNoKCh2LCBpKSA9PiByYWRpaVtpXSA9IHYpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHggKyByYWRpaVswXSwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpaVsxXSwgeSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpaVsxXSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpaVsyXSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpaVsyXSwgeSArIGhlaWdodCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaWlbM10sIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByYWRpaVszXSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaWlbMF0pO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpaVswXSwgeSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG59O1xuZXhwb3J0IGNvbnN0IGdldERpc3BsYXlWYWx1ZSA9ICh2YWx1ZTogbnVtYmVyLCB0eXBlOiBzdHJpbmcsIHVuaXRzdHlsZTogc3RyaW5nLCB1bml0czogc3RyaW5nLCBlbnVtczogc3RyaW5nW10pID0+IHtcbiAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiBlbnVtc1t2YWx1ZV07XG4gICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJpbnRcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQoMCk7XG4gICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJmbG9hdFwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCgyKTtcbiAgICBpZiAodW5pdHN0eWxlID09PSBcInRpbWVcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIG1zXCI7XG4gICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJoZXJ0elwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgSHpcIjtcbiAgICBpZiAodW5pdHN0eWxlID09PSBcImRlY2liZWxcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIGRCXCI7XG4gICAgaWYgKHVuaXRzdHlsZSA9PT0gXCIlXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiAlXCI7XG4gICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJwYW5cIikgcmV0dXJuIHZhbHVlID09PSAwID8gXCJDXCIgOiAodHlwZSA9PT0gXCJpbnRcIiA/IE1hdGguYWJzKHZhbHVlKSA6IE1hdGguYWJzKHZhbHVlKS50b0ZpeGVkKDIpKSArICh2YWx1ZSA8IDAgPyBcIiBMXCIgOiBcIiBSXCIpO1xuICAgIGlmICh1bml0c3R5bGUgPT09IFwic2VtaXRvbmVzXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiBzdFwiO1xuICAgIGlmICh1bml0c3R5bGUgPT09IFwibWlkaVwiKSByZXR1cm4gdG9NSURJKHZhbHVlKTtcbiAgICBpZiAodW5pdHN0eWxlID09PSBcImN1c3RvbVwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgXCIgKyB1bml0cztcbiAgICBpZiAodW5pdHN0eWxlID09PSBcIm5hdGl2ZVwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpO1xuICAgIHJldHVybiBcIk4vQVwiO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==