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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Base.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/Base.scss ***!
  \******************************************************************************************************/
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
/** @license React v16.8.6
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

var ReactVersion = '16.8.6';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

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

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

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

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
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

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
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
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
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
    var warningKey = componentName + '.' + callerName;
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
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
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
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
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
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
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
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
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
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
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
    case REACT_CONCURRENT_MODE_TYPE:
      return 'ConcurrentMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
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
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentOwner: ReactCurrentOwner,
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
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
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

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

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
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
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
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
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
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
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
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
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
  }

  // Resolve default props
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
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
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
  }

  // Children can be more than one argument, and those are transferred onto
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
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
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
      var step = void 0;
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
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
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
  }
  // Implicit key determined by the index in the set
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
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
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
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
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
    };
    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
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
    });
    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
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
    var defaultProps = void 0;
    var propTypes = void 0;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          defaultProps = newDefaultProps;
          // Match production behavior more closely:
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
          propTypes = newPropTypes;
          // Match production behavior more closely:
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
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
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
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
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
  !(dispatcher !== null) ? invariant(false, 'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.') : void 0;
  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();
  {
    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0;

    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context;
      // Don't deduplicate because this legitimately causes bugs
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

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
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
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
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
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
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
        var step = void 0;
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
  var propTypes = void 0;
  if (typeof type === 'function') {
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
  // Note: Memo only checks outer props here.
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

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
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
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
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


// Only used in www builds.
 // TODO: true? Here it might just be false.

// Only used in www builds.


// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
var enableStableConcurrentModeAPIs = false;

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
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  unstable_ConcurrentMode: REACT_CONCURRENT_MODE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

// Note: some APIs are added with feature flags.
// Make sure that stable builds for open source
// don't modify the React object to avoid deopts.
// Also let's not expose their names in stable builds.

if (enableStableConcurrentModeAPIs) {
  React.ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  React.Profiler = REACT_PROFILER_TYPE;
  React.unstable_ConcurrentMode = undefined;
  React.unstable_Profiler = undefined;
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

/***/ "./src/Base.tsx":
/*!**********************!*\
  !*** ./src/Base.tsx ***!
  \**********************/
/*! exports provided: LiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveComponent", function() { return LiveComponent; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Base_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base.scss */ "./src/Base.scss");
/* harmony import */ var _Base_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Base_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");


/* eslint-disable @typescript-eslint/no-unused-vars */



class LiveComponent extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super(...arguments);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "props", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "state", this.constructor.props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "className", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "refCanvas", react__WEBPACK_IMPORTED_MODULE_1__["createRef"]());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleKeyDown", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleKeyUp", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleTouchStart", e => {
      this.canvas.focus();
      var rect = this.canvas.getBoundingClientRect();
      var prevX = e.touches[0].pageX;
      var prevY = e.touches[0].pageY;
      var fromX = prevX - rect.left;
      var fromY = prevY - rect.top;
      var prevValue = this.state.value;
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
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleWheel", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleClick", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleMouseDown", e => {
      e.preventDefault();
      this.canvas.focus();
      var rect = this.canvas.getBoundingClientRect();
      var fromX = e.pageX - rect.left;
      var fromY = e.pageY - rect.top;
      var prevValue = this.state.value;
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
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleMouseOver", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleMouseOut", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleContextMenu", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handlePointerDown", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handlePointerDrag", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handlePointerUp", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleFocusIn", e => this.setState({
      focus: true
    }));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleFocusOut", e => this.setState({
      focus: false
    }));
  }

  get canvas() {
    return this.refCanvas.current;
  }

  get ctx() {
    return this.refCanvas.current.getContext("2d");
  }

  get isConnectedPolyfill() {
    return !!this.refCanvas.current;
  }

  get displayValue() {
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
    if (unitstyle === "midi") return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["toMIDI"])(value);
    if (unitstyle === "custom") return value.toFixed(type === "int" ? 0 : 2) + " " + units;
    if (unitstyle === "native") return value.toFixed(type === "int" ? 0 : 2);
    return "N/A";
  }

  setValue(value) {
    this.setState({
      value
    });
  }

  change() {
    if (this.state.onChange) this.state.onChange({
      value: this.state.value,
      displayValue: this.displayValue
    });
  }

  componentDidMount() {
    this.setState(this.props);
    this.paint();
  }

  componentDidUpdate() {
    this.paint();
  }

  paint() {}

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("canvas", {
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

}

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(LiveComponent, "props", {
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
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ "./src/Base.tsx");



class LiveButton extends _Base__WEBPACK_IMPORTED_MODULE_2__["LiveComponent"] {
  constructor() {
    super(...arguments);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "className", "live-button");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_inTouch", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerDown", () => {
      this._inTouch = true;
      this.setValue(1);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerUp", () => {
      this._inTouch = false;
      this.setValue(0);
    });
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
      setTimeout(() => this.setValue(0), 100);
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ "./src/Base.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");




class LiveDial extends _Base__WEBPACK_IMPORTED_MODULE_2__["LiveComponent"] {
  constructor() {
    super(...arguments);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "className", "live-dial");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_inTouch", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "interactionRect", [0, 0, 0, 0]);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerDown", e => {
      if (e.x < this.interactionRect[0] || e.x > this.interactionRect[0] + this.interactionRect[2] || e.y < this.interactionRect[1] || e.y > this.interactionRect[1] + this.interactionRect[3]) return;
      this._inTouch = true;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerDrag", e => {
      if (!this._inTouch) return;
      var newValue = this.getValueFromDelta(e);
      if (newValue !== this.state.value) this.setValue(newValue);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerUp", () => {
      this._inTouch = false;
    });
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
    var _this$state = this.state,
        type = _this$state.type,
        mmax = _this$state.mmax,
        mmin = _this$state.mmin,
        steps = _this$state.steps,
        step = _this$state.step;
    var full = 100;
    var maxSteps = type === "enum" ? this.state.enum.length : type === "int" ? mmax - mmin : full;

    if (step) {
      if (type === "enum") return this.state.enum.length;
      if (type === "int") return Math.min(Math.floor((mmax - mmin) / Math.round(step)), maxSteps);
      return Math.min(Math.floor((mmax - mmin) / step), maxSteps);
    }

    if (steps) return Math.min(steps, maxSteps);
    return maxSteps;
  }

  get distance() {
    var _this$state2 = this.state,
        type = _this$state2.type,
        mmax = _this$state2.mmax,
        mmin = _this$state2.mmin,
        value = _this$state2.value;
    return type === "enum" ? value / this.state.enum.length : (value - mmin) / (mmax - mmin);
  }

  get stepRange() {
    var _this$state3 = this.state,
        type = _this$state3.type,
        mmax = _this$state3.mmax,
        mmin = _this$state3.mmin,
        step = _this$state3.step;
    var full = 100;
    if (step) return type === "enum" ? full / this.state.enum.length : type === "int" ? Math.round(step) / (mmax - mmin) * full : step / (mmax - mmin) * full;
    var trueSteps = this.trueSteps;
    return full / trueSteps;
  }

  paint() {
    var _this$state4 = this.state,
        width = _this$state4.width,
        height = _this$state4.height,
        active = _this$state4.active,
        focus = _this$state4.focus,
        fontname = _this$state4.fontname,
        fontsize = _this$state4.fontsize,
        fontface = _this$state4.fontface,
        appearance = _this$state4.appearance,
        triangle = _this$state4.triangle,
        showname = _this$state4.showname,
        shownumber = _this$state4.shownumber,
        bordercolor = _this$state4.bordercolor,
        focusbordercolor = _this$state4.focusbordercolor,
        panelcolor = _this$state4.panelcolor,
        activeneedlecolor = _this$state4.activeneedlecolor,
        needlecolor = _this$state4.needlecolor,
        activedialcolor = _this$state4.activedialcolor,
        dialcolor = _this$state4.dialcolor,
        textcolor = _this$state4.textcolor,
        tribordercolor = _this$state4.tribordercolor,
        tricolor = _this$state4.tricolor,
        shortname = _this$state4.shortname;
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
      valPos = start + Object(_utils__WEBPACK_IMPORTED_MODULE_3__["toRad"])(this.distance * 270);
    } else {
      dialHeight = 25;
      start = Math.PI - 3 * Math.PI / 8;
      end = 2 * Math.PI + 3 * Math.PI / 8;
      valPos = start + Object(_utils__WEBPACK_IMPORTED_MODULE_3__["toRad"])(this.distance * 315);
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
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["roundedRect"])(ctx, 1, 1, width - 2, height - 2, 5);
      ctx.fillStyle = panelcolor;
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["fillRoundedRect"])(ctx, 1.2, 1.2, width - 2.4, 30 - 0.4, [5, 5, 0, 0]);
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
    var _this$state5 = this.state,
        type = _this$state5.type,
        mmin = _this$state5.mmin,
        mmax = _this$state5.mmax;
    var stepRange = this.stepRange;
    var trueSteps = this.trueSteps;
    var step = type === "enum" ? 1 : this.state.step || (mmax - mmin) / trueSteps;
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ "./src/Base.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");




class LiveMeter extends _Base__WEBPACK_IMPORTED_MODULE_2__["LiveComponent"] {
  constructor() {
    super(...arguments);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "className", "live-meter");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "paintValue", 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "maxValue", 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "paintTimer", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "maxTimer", void 0);
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
    var _this$state = this.state,
        mode = _this$state.mode,
        value = _this$state.value;
    return (mode === "decibel" ? Math.max(-70, value) : Object(_utils__WEBPACK_IMPORTED_MODULE_3__["atodb"])(Math.abs(value))) / 70 + 1;
  }

  paint(paintIn) {
    this.paintValue = Math.max(this.paintValue, this.distance);

    if (!paintIn) {
      if (!this.paintTimer) this.paintTimer = setTimeout(() => this.paint(true), this.state.interval);
      return;
    }

    this.paintTimer = undefined;
    var _this$state2 = this.state,
        active = _this$state2.active,
        width = _this$state2.width,
        height = _this$state2.height,
        orientation = _this$state2.orientation,
        clip_size = _this$state2.clip_size,
        bgcolor = _this$state2.bgcolor,
        inactivecoldcolor = _this$state2.inactivecoldcolor,
        inactivewarmcolor = _this$state2.inactivewarmcolor,
        coldcolor = _this$state2.coldcolor,
        warmcolor = _this$state2.warmcolor,
        hotcolor = _this$state2.hotcolor,
        overloadcolor = _this$state2.overloadcolor;
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ "./src/Base.tsx");



class LiveNumbox extends _Base__WEBPACK_IMPORTED_MODULE_2__["LiveComponent"] {
  constructor() {
    super(...arguments);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "className", "live-numbox");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_inTouch", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerDown", () => {
      this._inTouch = true;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerDrag", e => {
      if (!this._inTouch) return;
      var newValue = this.getValueFromDelta(e);
      if (newValue !== this.state.value) this.setValue(newValue);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerUp", () => {
      this._inTouch = false;
    });
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
    var _this$state = this.state,
        type = _this$state.type,
        mmax = _this$state.mmax,
        mmin = _this$state.mmin,
        steps = _this$state.steps,
        step = _this$state.step;
    var full = 100;
    var maxSteps = type === "enum" ? this.state.enum.length : type === "int" ? mmax - mmin : full;

    if (step) {
      if (type === "enum") return this.state.enum.length;
      if (type === "int") return Math.min(Math.floor((mmax - mmin) / Math.round(step)), maxSteps);
      return Math.min(Math.floor((mmax - mmin) / step), maxSteps);
    }

    if (steps) return Math.min(steps, maxSteps);
    return maxSteps;
  }

  get distance() {
    var _this$state2 = this.state,
        type = _this$state2.type,
        mmax = _this$state2.mmax,
        mmin = _this$state2.mmin,
        value = _this$state2.value;
    return type === "enum" ? value / this.state.enum.length : (value - mmin) / (mmax - mmin);
  }

  get stepRange() {
    var _this$state3 = this.state,
        type = _this$state3.type,
        mmax = _this$state3.mmax,
        mmin = _this$state3.mmin,
        step = _this$state3.step;
    var full = 100;
    if (step) return type === "enum" ? full / this.state.enum.length : type === "int" ? Math.round(step) / (mmax - mmin) * full : step / (mmax - mmin) * full;
    var trueSteps = this.trueSteps;
    return full / trueSteps;
  }

  paint() {
    var _this$state4 = this.state,
        width = _this$state4.width,
        height = _this$state4.height,
        active = _this$state4.active,
        focus = _this$state4.focus,
        fontname = _this$state4.fontname,
        fontsize = _this$state4.fontsize,
        fontface = _this$state4.fontface,
        appearance = _this$state4.appearance,
        activebgcolor = _this$state4.activebgcolor,
        bordercolor = _this$state4.bordercolor,
        focusbordercolor = _this$state4.focusbordercolor,
        textcolor = _this$state4.textcolor,
        tricolor = _this$state4.tricolor,
        activetricolor = _this$state4.activetricolor,
        tricolor2 = _this$state4.tricolor2,
        activetricolor2 = _this$state4.activetricolor2,
        activeslidercolor = _this$state4.activeslidercolor;
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
    var _this$state5 = this.state,
        type = _this$state5.type,
        mmin = _this$state5.mmin,
        mmax = _this$state5.mmax;
    var stepRange = this.stepRange;
    var trueSteps = this.trueSteps;
    var step = type === "enum" ? 1 : this.state.step || (mmax - mmin) / trueSteps;
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ "./src/Base.tsx");



class LiveSlider extends _Base__WEBPACK_IMPORTED_MODULE_2__["LiveComponent"] {
  constructor() {
    super(...arguments);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "className", "live-slider");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_inTouch", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "interactionRect", [0, 0, 0, 0]);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerDown", e => {
      var value = this.state.value;
      if (e.x < this.interactionRect[0] || e.x > this.interactionRect[0] + this.interactionRect[2] || e.y < this.interactionRect[1] || e.y > this.interactionRect[1] + this.interactionRect[3]) return;
      var newValue = this.getValueFromPos(e);
      if (newValue !== value) this.setValue(this.getValueFromPos(e));
      this._inTouch = true;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerDrag", e => {
      if (!this._inTouch) return;
      var newValue = this.getValueFromPos(e);
      if (newValue !== this.state.value) this.setValue(newValue);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerUp", () => {
      this._inTouch = false;
    });
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
    var _this$state = this.state,
        orientation = _this$state.orientation,
        type = _this$state.type,
        mmax = _this$state.mmax,
        mmin = _this$state.mmin,
        steps = _this$state.steps,
        step = _this$state.step;
    var full = this.interactionRect[orientation === "vertical" ? 3 : 2];
    var maxSteps = type === "enum" ? this.state.enum.length : type === "int" ? mmax - mmin : full;

    if (step) {
      if (type === "enum") return this.state.enum.length;
      if (type === "int") return Math.min(Math.floor((mmax - mmin) / Math.round(step)), maxSteps);
      return Math.min(Math.floor((mmax - mmin) / step), maxSteps);
    }

    if (steps) return Math.min(steps, maxSteps);
    return maxSteps;
  }

  get distance() {
    var _this$state2 = this.state,
        type = _this$state2.type,
        mmax = _this$state2.mmax,
        mmin = _this$state2.mmin,
        value = _this$state2.value;
    return type === "enum" ? value / this.state.enum.length : (value - mmin) / (mmax - mmin);
  }

  get stepRange() {
    var _this$state3 = this.state,
        orientation = _this$state3.orientation,
        type = _this$state3.type,
        mmax = _this$state3.mmax,
        mmin = _this$state3.mmin,
        step = _this$state3.step;
    var full = this.interactionRect[orientation === "vertical" ? 3 : 2];
    if (step) return type === "enum" ? full / this.state.enum.length : type === "int" ? Math.round(step) / (mmax - mmin) * full : step / (mmax - mmin) * full;
    var trueSteps = this.trueSteps;
    return full / trueSteps;
  }

  paint() {
    var _this$state4 = this.state,
        width = _this$state4.width,
        height = _this$state4.height,
        fontname = _this$state4.fontname,
        fontsize = _this$state4.fontsize,
        fontface = _this$state4.fontface,
        orientation = _this$state4.orientation,
        showname = _this$state4.showname,
        shownumber = _this$state4.shownumber,
        slidercolor = _this$state4.slidercolor,
        textcolor = _this$state4.textcolor,
        tribordercolor = _this$state4.tribordercolor,
        trioncolor = _this$state4.trioncolor,
        tricolor = _this$state4.tricolor,
        shortname = _this$state4.shortname;
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
    var _this$state5 = this.state,
        orientation = _this$state5.orientation,
        type = _this$state5.type,
        mmin = _this$state5.mmin,
        mmax = _this$state5.mmax;
    var stepRange = this.stepRange;
    var trueSteps = this.trueSteps;
    var step = this.state.step || (mmax - mmin) / trueSteps;
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ "./src/Base.tsx");



class LiveTab extends _Base__WEBPACK_IMPORTED_MODULE_2__["LiveComponent"] {
  constructor() {
    super(...arguments);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "className", "live-tab");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_inTouch", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "tabRects", []);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerDown", e => {
      this._inTouch = true;

      for (var i = 0; i < this.tabRects.length; i++) {
        var rect = this.tabRects[i];

        if (e.x >= rect[0] && e.x <= rect[2] + rect[0] && e.y >= rect[1] && e.y <= rect[3] + rect[1]) {
          this.setValue(i);
          return;
        }
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerDrag", e => {
      this.handlePointerDown(e);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerUp", () => {
      this._inTouch = false;
    });
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

  paint() {
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ "./src/Base.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");




class LiveText extends _Base__WEBPACK_IMPORTED_MODULE_2__["LiveComponent"] {
  constructor() {
    super(...arguments);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "className", "live-text");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_inTouch", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerDown", () => {
      var _this$state = this.state,
          value = _this$state.value,
          mode = _this$state.mode;
      this._inTouch = true;
      this.setValue(mode === "button" ? 1 : 1 - value);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerUp", () => {
      this._inTouch = false;
      if (this.state.mode === "button") this.setValue(0);
    });
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
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["fillRoundedRect"])(ctx, 0.5, 0.5, width - 1, height - 1, height * 0.5 - 1);
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ "./src/Base.tsx");



class LiveToggle extends _Base__WEBPACK_IMPORTED_MODULE_2__["LiveComponent"] {
  constructor() {
    super(...arguments);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "className", "live-toggle");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerDown", () => {
      var value = this.state.value;
      this.setValue(1 - value);
    });
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

}

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
var getDisplayValue = (value, type, unitstyle, units, enums) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZC5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy9CYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL0Jhc2Uuc2Nzcz83Yjc4Iiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL0Jhc2UudHN4Iiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL0J1dHRvbi50cyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy9EaWFsLnRzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL01ldGVyLnRzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL051bWJveC50cyIsIndlYnBhY2s6Ly9MaXZlQ29tcG9uZW50cy8uL3NyYy9TbGlkZXIudHMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9zcmMvVGFiLnRzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL1RleHQudHMiLCJ3ZWJwYWNrOi8vTGl2ZUNvbXBvbmVudHMvLi9zcmMvVG9nZ2xlLnRzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0xpdmVDb21wb25lbnRzLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbIkxpdmVDb21wb25lbnQiLCJSZWFjdCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJlIiwiY2FudmFzIiwiZm9jdXMiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicHJldlgiLCJ0b3VjaGVzIiwicGFnZVgiLCJwcmV2WSIsInBhZ2VZIiwiZnJvbVgiLCJsZWZ0IiwiZnJvbVkiLCJ0b3AiLCJwcmV2VmFsdWUiLCJzdGF0ZSIsInZhbHVlIiwiaGFuZGxlUG9pbnRlckRvd24iLCJ4IiwieSIsIm9yaWdpbmFsRXZlbnQiLCJoYW5kbGVUb3VjaE1vdmUiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZWRUb3VjaGVzIiwibW92ZW1lbnRYIiwibW92ZW1lbnRZIiwiaGFuZGxlUG9pbnRlckRyYWciLCJoYW5kbGVUb3VjaEVuZCIsImhhbmRsZVBvaW50ZXJVcCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VVcCIsInNldFN0YXRlIiwicmVmQ2FudmFzIiwiY3VycmVudCIsImN0eCIsImdldENvbnRleHQiLCJpc0Nvbm5lY3RlZFBvbHlmaWxsIiwiZGlzcGxheVZhbHVlIiwidHlwZSIsInVuaXRzdHlsZSIsInVuaXRzIiwiZW51bSIsInRvRml4ZWQiLCJNYXRoIiwiYWJzIiwidG9NSURJIiwic2V0VmFsdWUiLCJjaGFuZ2UiLCJvbkNoYW5nZSIsImNvbXBvbmVudERpZE1vdW50IiwicGFpbnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJqb2luIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZUtleVVwIiwiaGFuZGxlVG91Y2hTdGFydCIsImhhbmRsZVdoZWVsIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVNb3VzZURvd24iLCJoYW5kbGVNb3VzZU92ZXIiLCJoYW5kbGVNb3VzZU91dCIsImhhbmRsZUNvbnRleHRNZW51IiwiaGFuZGxlRm9jdXNJbiIsImhhbmRsZUZvY3VzT3V0IiwiYWN0aXZlIiwid2lkdGgiLCJoZWlnaHQiLCJzaG9ydG5hbWUiLCJsb25nbmFtZSIsIm9yZGVyIiwibGlua25hbWVzIiwibW1pbiIsIm1tYXgiLCJlbnVtX2ljb25zIiwibW9kbW9kZSIsImluaXRpYWxfZW5hYmxlIiwiaW5pdGlhbCIsImV4cG9uZW50Iiwic3RlcCIsInN0ZXBzIiwic3BlZWRsaW0iLCJkZWZlciIsImludmlzaWJsZSIsIm1hcHBhYmxlIiwiTGl2ZUJ1dHRvbiIsIl9pblRvdWNoIiwiYWN0aXZlYmdjb2xvciIsImFjdGl2ZWJnb25jb2xvciIsImJnY29sb3IiLCJiZ29uY29sb3IiLCJib3JkZXJjb2xvciIsImZvY3VzYm9yZGVyY29sb3IiLCJib3JkZXJXaWR0aCIsInN0eWxlIiwibGluZVdpZHRoIiwiYnV0dG9uQmdDb2xvciIsImJ1dHRvbkJvcmRlckNvbG9yIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiZWxsaXBzZSIsIlBJIiwiZmlsbCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwic2V0VGltZW91dCIsInJlc2V0UG9pbnRlcnMiLCJMaXZlRGlhbCIsImludGVyYWN0aW9uUmVjdCIsIm5ld1ZhbHVlIiwiZ2V0VmFsdWVGcm9tRGVsdGEiLCJmb250bmFtZSIsImZvbnRzaXplIiwiZm9udGZhY2UiLCJhcHBlYXJhbmNlIiwidHJpYW5nbGUiLCJzaG93bmFtZSIsInNob3dudW1iZXIiLCJhY3RpdmVkaWFsY29sb3IiLCJkaWFsY29sb3IiLCJhY3RpdmVuZWVkbGVjb2xvciIsIm5lZWRsZWNvbG9yIiwicGFuZWxjb2xvciIsInRleHRjb2xvciIsInRyaWJvcmRlcmNvbG9yIiwidHJpY29sb3IiLCJ0cnVlU3RlcHMiLCJmdWxsIiwibWF4U3RlcHMiLCJsZW5ndGgiLCJtaW4iLCJmbG9vciIsInJvdW5kIiwiZGlzdGFuY2UiLCJzdGVwUmFuZ2UiLCJ0cmlhbmdsZUhlaWdodCIsInRyaWFuZ2xlTGluZVdpZHRoIiwic3RhcnQiLCJlbmQiLCJ2YWxQb3MiLCJkaWFsSGVpZ2h0IiwidG9SYWQiLCJkaWFsUmFkaXVzIiwiZGlhbENlbnRlclgiLCJkaWFsQ2VudGVyWSIsImFyY1N0YXJ0WCIsImNvcyIsImFyY1N0YXJ0WSIsInNpbiIsImFyY0VuZFgiLCJhcmNFbmRZIiwidmFsdWVQb3NYIiwidmFsdWVQb3NZIiwiZW5kQ2FwUmFkaXVzIiwicGFuZWxPZmZzZXQiLCJyb3VuZGVkUmVjdCIsImZpbGxSb3VuZGVkUmVjdCIsImFyYyIsIm1pZHBvaW50IiwibW92ZVRvIiwibGluZVRvIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwidGlueU9mZnNldCIsInRpcFBvc2l0aW9uWCIsInRpcFBvc2l0aW9uWSIsInByZXZTdGVwcyIsImRTdGVwcyIsIm1heCIsIkxpdmVNZXRlciIsIm1vZGUiLCJjbGlwX3NpemUiLCJpbnRlcnZhbCIsIm9yaWVudGF0aW9uIiwiaW5hY3RpdmVjb2xkY29sb3IiLCJpbmFjdGl2ZXdhcm1jb2xvciIsImNvbGRjb2xvciIsIndhcm1jb2xvciIsImhvdGNvbG9yIiwib3ZlcmxvYWRjb2xvciIsImF0b2RiIiwicGFpbnRJbiIsInBhaW50VmFsdWUiLCJwYWludFRpbWVyIiwidW5kZWZpbmVkIiwiY2xpcCIsIm1heFZhbHVlIiwibWF4VGltZXIiLCJjbGVhclRpbWVvdXQiLCJ3YXJtU3RvcCIsImhvdFN0b3AiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZmlsbFJlY3QiLCJkcmF3SGVpZ2h0IiwiTGl2ZU51bWJveCIsImFjdGl2ZXRyaWNvbG9yIiwidHJpY29sb3IyIiwiYWN0aXZldHJpY29sb3IyIiwiYWN0aXZlc2xpZGVyY29sb3IiLCJjbG9zZVBhdGgiLCJ0ZXh0QmFzZWxpbmUiLCJMaXZlU2xpZGVyIiwiZ2V0VmFsdWVGcm9tUG9zIiwic2xpZGVyY29sb3IiLCJ0cmlvbmNvbG9yIiwicmVsYXRpdmUiLCJwYWRkaW5nIiwiaW50ZXJhY3Rpb25XaWR0aCIsInRyaU9yaWdpbiIsIkxpdmVUYWIiLCJpIiwidGFiUmVjdHMiLCJ0ZXh0b25jb2xvciIsImFjdGl2ZXRleHRjb2xvciIsImFjdGl2ZXRleHRvbmNvbG9yIiwic3BhY2luZ194Iiwic3BhY2luZ195IiwibXVsdGlsaW5lIiwiZ2V0VGFiUmVjdHMiLCJlbnVtcyIsIm1hcmdpbiIsIm1pbkhlaWdodCIsImNvdW50IiwiY291bnRQZXJMaW5lIiwibGluZXMiLCJyZWN0V2lkdGgiLCJzcGFjaW5nWCIsInNwYWNpbmdZIiwiY2VpbCIsInRleHRXaWR0aHMiLCJ0b3RhbCIsInNwYWNlIiwiaiIsInRleHREaW1lbnNpb25zIiwibWVhc3VyZVRleHQiLCJ1c2VkIiwicmVjdFNwYWNlIiwiTGl2ZVRleHQiLCJ0ZXh0IiwidGV4dG9uIiwiTGl2ZVRvZ2dsZSIsImYiLCJkZWdyZWVzIiwiYSIsImxvZzEwIiwiZGJ0b2EiLCJkYiIsInJhZGl1cyIsInJhZGlpIiwiZm9yRWFjaCIsInYiLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiZ2V0RGlzcGxheVZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDZkEscUJBQXFCLG1CQUFPLENBQUMsaUZBQWtCOztBQUUvQztBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLCtCOzs7Ozs7Ozs7OztBQ3JCQSwyQkFBMkIsbUJBQU8s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OztBQUVBLGNBQWMsbUJBQU8sQ0FBQyw0REFBZTtBQUNyQyxxQkFBcUIsbUJBQU8sQ0FBQyw4RUFBMkI7O0FBRXhEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEYsZUFBZTtBQUMzRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0ZBQXNGLGFBQWE7QUFDbkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFPQUFxTztBQUNyTztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixhQUFhLFVBQVU7QUFDdkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixhQUFhLE9BQU87QUFDcEIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsT0FBTztBQUNwQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQjtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNGQUFzRixhQUFhO0FBQ25HO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxt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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7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QUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0FBakIsR0FBbUMrQixJQUFJLENBQUNDLEdBQUwsQ0FBU2hDLEtBQVQsRUFBZ0I4QixPQUFoQixDQUF3QixDQUF4QixDQUFwQyxLQUFtRTlCLEtBQUssR0FBRyxDQUFSLEdBQVksSUFBWixHQUFtQixJQUF0RixDQUEzQjtBQUN6QixNQUFJMkIsU0FBUyxLQUFLLFdBQWxCLEVBQStCLE9BQU8zQixLQUFLLENBQUM4QixPQUFOLENBQWNKLElBQUksS0FBSyxLQUFULEdBQWlCLENBQWpCLEdBQXFCLENBQW5DLElBQXdDLEtBQS9DO0FBQy9CLE1BQUlDLFNBQVMsS0FBSyxNQUFsQixFQUEwQixPQUFPTSxNQUFNLENBQUNqQyxLQUFELENBQWI7QUFDMUIsTUFBSTJCLFNBQVMsS0FBSyxRQUFsQixFQUE0QixPQUFPM0IsS0FBSyxDQUFDOEIsT0FBTixDQUFjSixJQUFJLEtBQUssS0FBVCxHQUFpQixDQUFqQixHQUFxQixDQUFuQyxJQUF3QyxHQUF4QyxHQUE4Q0UsS0FBckQ7QUFDNUIsTUFBSUQsU0FBUyxLQUFLLFFBQWxCLEVBQTRCLE9BQU8zQixLQUFLLENBQUM4QixPQUFOLENBQWNKLElBQUksS0FBSyxLQUFULEdBQWlCLENBQWpCLEdBQXFCLENBQW5DLENBQVA7QUFDNUIsU0FBTyxLQUFQO0FBQ0gsQ0FkTSxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTGl2ZUNvbXBvbmVudHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTGl2ZUNvbXBvbmVudHNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5saXZlLWNvbXBvbmVudCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgfVxcbiAgLmxpdmUtY29tcG9uZW50OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjZcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cblxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNi44LjYnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcblxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTtcblxudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuXG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvciA9IHZvaWQgMDtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuLy8gUmVseWluZyBvbiB0aGUgYGludmFyaWFudCgpYCBpbXBsZW1lbnRhdGlvbiBsZXRzIHVzXG4vLyBwcmVzZXJ2ZSB0aGUgZm9ybWF0IGFuZCBwYXJhbXMgaW4gdGhlIHd3dyBidWlsZHMuXG5cbi8qKlxuICogRm9ya2VkIGZyb20gZmJqcy93YXJuaW5nOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9lNjZiYTIwYWQ1YmU0MzNlYjU0NDIzZjJiMDk3ZDgyOTMyNGQ5ZGU2L3BhY2thZ2VzL2ZianMvc3JjL19fZm9ya3NfXy93YXJuaW5nLmpzXG4gKlxuICogT25seSBjaGFuZ2UgaXMgd2UgdXNlIGNvbnNvbGUud2FybiBpbnN0ZWFkIG9mIGNvbnNvbGUuZXJyb3IsXG4gKiBhbmQgZG8gbm90aGluZyB3aGVuICdjb25zb2xlJyBpcyBub3Qgc3VwcG9ydGVkLlxuICogVGhpcyByZWFsbHkgc2ltcGxpZmllcyB0aGUgY29kZS5cbiAqIC0tLVxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGxvd1ByaW9yaXR5V2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmckMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmdXaXRob3V0U3RhY2sgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB3YXJuaW5nV2l0aG91dFN0YWNrID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmdXaXRob3V0U3RhY2soY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDgpIHtcbiAgICAgIC8vIENoZWNrIGJlZm9yZSB0aGUgY29uZGl0aW9uIHRvIGNhdGNoIHZpb2xhdGlvbnMgZWFybHkuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dhcm5pbmdXaXRob3V0U3RhY2soKSBjdXJyZW50bHkgc3VwcG9ydHMgYXQgbW9zdCA4IGFyZ3VtZW50cy4nKTtcbiAgICB9XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgICAgfSk7XG4gICAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTtcblxuICAgICAgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUuZXJyb3IsIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxudmFyIHdhcm5pbmdXaXRob3V0U3RhY2skMSA9IHdhcm5pbmdXaXRob3V0U3RhY2s7XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgJy4nICsgY2FsbGVyTmFtZTtcbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuXG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gICEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkgPyBpbnZhcmlhbnQoZmFsc2UsICdzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy4nKSA6IHZvaWQgMDtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG5cbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcblxuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDtcbi8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuX2Fzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBCRUZPUkVfU0xBU0hfUkUgPSAvXiguKilbXFxcXFxcL10vO1xuXG52YXIgZGVzY3JpYmVDb21wb25lbnRGcmFtZSA9IGZ1bmN0aW9uIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICB2YXIgc291cmNlSW5mbyA9ICcnO1xuICBpZiAoc291cmNlKSB7XG4gICAgdmFyIHBhdGggPSBzb3VyY2UuZmlsZU5hbWU7XG4gICAgdmFyIGZpbGVOYW1lID0gcGF0aC5yZXBsYWNlKEJFRk9SRV9TTEFTSF9SRSwgJycpO1xuICAgIHtcbiAgICAgIC8vIEluIERFViwgaW5jbHVkZSBjb2RlIGZvciBhIGNvbW1vbiBzcGVjaWFsIGNhc2U6XG4gICAgICAvLyBwcmVmZXIgXCJmb2xkZXIvaW5kZXguanNcIiBpbnN0ZWFkIG9mIGp1c3QgXCJpbmRleC5qc1wiLlxuICAgICAgaWYgKC9eaW5kZXhcXC4vLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHBhdGgubWF0Y2goQkVGT1JFX1NMQVNIX1JFKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xuICAgICAgICAgIGlmIChwYXRoQmVmb3JlU2xhc2gpIHtcbiAgICAgICAgICAgIHZhciBmb2xkZXJOYW1lID0gcGF0aEJlZm9yZVNsYXNoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG4gICAgICAgICAgICBmaWxlTmFtZSA9IGZvbGRlck5hbWUgKyAnLycgKyBmaWxlTmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc291cmNlSW5mbyA9ICcgKGF0ICcgKyBmaWxlTmFtZSArICc6JyArIHNvdXJjZS5saW5lTnVtYmVyICsgJyknO1xuICB9IGVsc2UgaWYgKG93bmVyTmFtZSkge1xuICAgIHNvdXJjZUluZm8gPSAnIChjcmVhdGVkIGJ5ICcgKyBvd25lck5hbWUgKyAnKSc7XG4gIH1cbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xufTtcblxudmFyIFJlc29sdmVkID0gMTtcblxuXG5mdW5jdGlvbiByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQobGF6eUNvbXBvbmVudCkge1xuICByZXR1cm4gbGF6eUNvbXBvbmVudC5fc3RhdHVzID09PSBSZXNvbHZlZCA/IGxhenlDb21wb25lbnQuX3Jlc3VsdCA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyAnKCcgKyBmdW5jdGlvbk5hbWUgKyAnKScgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnQ29uY3VycmVudE1vZGUnO1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LkNvbnN1bWVyJztcbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LlByb3ZpZGVyJztcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0aGVuYWJsZSA9IHR5cGU7XG4gICAgICAgICAgdmFyIHJlc29sdmVkVGhlbmFibGUgPSByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQodGhlbmFibGUpO1xuICAgICAgICAgIGlmIChyZXNvbHZlZFRoZW5hYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShyZXNvbHZlZFRoZW5hYmxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG5cbnZhciBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxufVxuXG57XG4gIC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFjayA9ICcnO1xuXG4gICAgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuICAgIGlmIChjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50LnR5cGUpO1xuICAgICAgdmFyIG93bmVyID0gY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX293bmVyO1xuICAgICAgc3RhY2sgKz0gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fc291cmNlLCBvd25lciAmJiBnZXRDb21wb25lbnROYW1lKG93bmVyLnR5cGUpKTtcbiAgICB9XG5cbiAgICAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIF9hc3NpZ24oUmVhY3RTaGFyZWRJbnRlcm5hbHMsIHtcbiAgICAvLyBUaGVzZSBzaG91bGQgbm90IGJlIGluY2x1ZGVkIGluIHByb2R1Y3Rpb24uXG4gICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTogUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSxcbiAgICAvLyBTaGltIGZvciBSZWFjdCBET00gMTYuMC4wIHdoaWNoIHN0aWxsIGRlc3RydWN0dXJlZCAoYnV0IG5vdCB1c2VkKSB0aGlzLlxuICAgIC8vIFRPRE86IHJlbW92ZSBpbiBSZWFjdCAxNy4wLlxuICAgIFJlYWN0Q29tcG9uZW50VHJlZUhvb2s6IHt9XG4gIH0pO1xufVxuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IHdhcm5pbmdXaXRob3V0U3RhY2skMTtcblxue1xuICB3YXJuaW5nID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3dhcm5pbmctYW5kLWludmFyaWFudC1hcmdzXG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMS5hcHBseSh1bmRlZmluZWQsIFtmYWxzZSwgZm9ybWF0ICsgJyVzJ10uY29uY2F0KGFyZ3MsIFtzdGFja10pKTtcbiAgfTtcbn1cblxudmFyIHdhcm5pbmckMSA9IHdhcm5pbmc7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG5cbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHZvaWQgMDtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHZvaWQgMDtcblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gIH07XG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gIH07XG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBubyBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQGludGVybmFsXG4gKi9cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG5cbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG5cbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307XG5cbiAgICAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTtcbiAgICAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7XG4gICAgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZSA9IHZvaWQgMDtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBwcm9wcyA9IHt9O1xuXG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlO1xuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIFJlYWN0RWxlbWVudHMgb2YgYSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVmYWN0b3J5XG4gKi9cblxuXG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICAhIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCAlcy4nLCBlbGVtZW50KSA6IHZvaWQgMDtcblxuICB2YXIgcHJvcE5hbWUgPSB2b2lkIDA7XG5cbiAgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmO1xuICAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7XG4gIC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlO1xuXG4gIC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB2b2lkIDA7XG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG5cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6JztcblxuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSAoJycgKyBrZXkpLnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG5cbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG5cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG5cbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gKCcnICsgdGV4dCkucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuXG52YXIgUE9PTF9TSVpFID0gMTA7XG52YXIgdHJhdmVyc2VDb250ZXh0UG9vbCA9IFtdO1xuZnVuY3Rpb24gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG1hcFJlc3VsdCwga2V5UHJlZml4LCBtYXBGdW5jdGlvbiwgbWFwQ29udGV4dCkge1xuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGgpIHtcbiAgICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gdHJhdmVyc2VDb250ZXh0UG9vbC5wb3AoKTtcbiAgICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbWFwUmVzdWx0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBrZXlQcmVmaXg7XG4gICAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBtYXBGdW5jdGlvbjtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG1hcENvbnRleHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgICByZXR1cm4gdHJhdmVyc2VDb250ZXh0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHQ6IG1hcFJlc3VsdCxcbiAgICAgIGtleVByZWZpeDoga2V5UHJlZml4LFxuICAgICAgZnVuYzogbWFwRnVuY3Rpb24sXG4gICAgICBjb250ZXh0OiBtYXBDb250ZXh0LFxuICAgICAgY291bnQ6IDBcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KSB7XG4gIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0geyFzdHJpbmd9IG5hbWVTb0ZhciBOYW1lIG9mIHRoZSBrZXkgcGF0aCBzbyBmYXIuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gaW52b2tlIHdpdGggZWFjaCBjaGlsZCBmb3VuZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBVc2VkIHRvIHBhc3MgaW5mb3JtYXRpb24gdGhyb3VnaG91dCB0aGUgdHJhdmVyc2FsXG4gKiBwcm9jZXNzLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCBuYW1lU29GYXIsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkcmVuLFxuICAgIC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93cy5cbiAgICBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkcmVuLCAwKSA6IG5hbWVTb0Zhcik7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQgPSB2b2lkIDA7XG4gIHZhciBuZXh0TmFtZSA9IHZvaWQgMDtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gY2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgICFkaWRXYXJuQWJvdXRNYXBzID8gd2FybmluZyQxKGZhbHNlLCAnVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyB1bnN1cHBvcnRlZCBhbmQgd2lsbCBsaWtlbHkgeWllbGQgJyArICd1bmV4cGVjdGVkIHJlc3VsdHMuIENvbnZlcnQgaXQgdG8gYSBzZXF1ZW5jZS9pdGVyYWJsZSBvZiBrZXllZCAnICsgJ1JlYWN0RWxlbWVudHMgaW5zdGVhZC4nKSA6IHZvaWQgMDtcbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXAgPSB2b2lkIDA7XG4gICAgICB2YXIgaWkgPSAwO1xuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgYWRkZW5kdW0gPSAnJztcbiAgICAgIHtcbiAgICAgICAgYWRkZW5kdW0gPSAnIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgJyArICdpbnN0ZWFkLicgKyBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcbiAgICAgIH1cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG4gICAgICBpbnZhcmlhbnQoZmFsc2UsICdPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6ICVzKS4lcycsIGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZywgYWRkZW5kdW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogVHJhdmVyc2VzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCwgYnV0XG4gKiBtaWdodCBhbHNvIGJlIHNwZWNpZmllZCB0aHJvdWdoIGF0dHJpYnV0ZXM6XG4gKlxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLCAuLi4pYFxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmxlZnRQYW5lbENoaWxkcmVuLCAuLi4pYFxuICpcbiAqIFRoZSBgdHJhdmVyc2VDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZVxuICogZW50aXJlIHRyYXZlcnNhbC4gSXQgY2FuIGJlIHVzZWQgdG8gc3RvcmUgYWNjdW11bGF0aW9ucyBvciBhbnl0aGluZyBlbHNlIHRoYXRcbiAqIHRoZSBjYWxsYmFjayBtaWdodCBmaW5kIHJlbGV2YW50LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgb2JqZWN0LlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIFRvIGludm9rZSB1cG9uIHRyYXZlcnNpbmcgZWFjaCBjaGlsZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBDb250ZXh0IGZvciB0cmF2ZXJzYWwuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGNvbXBvbmVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBjb21wb25lbnQgQSBjb21wb25lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50S2V5KGNvbXBvbmVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJiBjb21wb25lbnQgIT09IG51bGwgJiYgY29tcG9uZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZShjb21wb25lbnQua2V5KTtcbiAgfVxuICAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuXG4gIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChudWxsLCBudWxsLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoU2luZ2xlQ2hpbGQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dChib29rS2VlcGluZywgY2hpbGQsIGNoaWxkS2V5KSB7XG4gIHZhciByZXN1bHQgPSBib29rS2VlcGluZy5yZXN1bHQsXG4gICAgICBrZXlQcmVmaXggPSBib29rS2VlcGluZy5rZXlQcmVmaXgsXG4gICAgICBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuXG5cbiAgdmFyIG1hcHBlZENoaWxkID0gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCxcbiAgICAgIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgIGtleVByZWZpeCArIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFjaGlsZCB8fCBjaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyBlc2NhcGVVc2VyUHJvdmlkZWRLZXkobWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2gobWFwcGVkQ2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIGFycmF5LCBwcmVmaXgsIGZ1bmMsIGNvbnRleHQpIHtcbiAgdmFyIGVzY2FwZWRQcmVmaXggPSAnJztcbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQoYXJyYXksIGVzY2FwZWRQcmVmaXgsIGZ1bmMsIGNvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0LCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sIG51bGwpO1xufVxuXG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gICFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC4nKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgIShjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gbnVsbCB8fCB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09ICdmdW5jdGlvbicpID8gd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG5cbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuXG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9O1xuICAgIC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuICAgICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcbiAgICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX2N0b3I6IGN0b3IsXG4gICAgLy8gUmVhY3QgdXNlcyB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiAtMSxcbiAgICBfcmVzdWx0OiBudWxsXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdm9pZCAwO1xuICAgIHZhciBwcm9wVHlwZXMgPSB2b2lkIDA7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7XG4gICAgICAgICAgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlcztcbiAgICAgICAgICAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICEoXG4gICAgICAvLyBEbyBub3Qgd2FybiBmb3IgMCBhcmd1bWVudHMgYmVjYXVzZSBpdCBjb3VsZCBiZSBkdWUgdG8gdXNhZ2Ugb2YgdGhlICdhcmd1bWVudHMnIG9iamVjdFxuICAgICAgcmVuZGVyLmxlbmd0aCA9PT0gMCB8fCByZW5kZXIubGVuZ3RoID09PSAyKSA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgICEocmVuZGVyLmRlZmF1bHRQcm9wcyA9PSBudWxsICYmIHJlbmRlci5wcm9wVHlwZXMgPT0gbnVsbCkgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUpO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcbiAgIShkaXNwYXRjaGVyICE9PSBudWxsKSA/IGludmFyaWFudChmYWxzZSwgJ0ludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL2ZiLm1lL3JlYWN0LWludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS4nKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAge1xuICAgICEodW5zdGFibGVfb2JzZXJ2ZWRCaXRzID09PSB1bmRlZmluZWQpID8gd2FybmluZyQxKGZhbHNlLCAndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9mYi5tZS9ydWxlcy1vZi1ob29rcycgOiAnJykgOiB2b2lkIDA7XG5cbiAgICAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDtcbiAgICAgIC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuXG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuXG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuXG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgaW5wdXRzKTtcbn1cblxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlYWN0RWxlbWVudFZhbGlkYXRvciBwcm92aWRlcyBhIHdyYXBwZXIgYXJvdW5kIGEgZWxlbWVudCBmYWN0b3J5XG4gKiB3aGljaCB2YWxpZGF0ZXMgdGhlIHByb3BzIHBhc3NlZCB0byB0aGUgZWxlbWVudC4gVGhpcyBpcyBpbnRlbmRlZCB0byBiZVxuICogdXNlZCBvbmx5IGluIERFViBhbmQgY291bGQgYmUgcmVwbGFjZWQgYnkgYSBzdGF0aWMgdHlwZSBjaGVja2VyIGZvciBsYW5ndWFnZXNcbiAqIHRoYXQgc3VwcG9ydCBpdC5cbiAqL1xuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB2b2lkIDA7XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQgJiYgZWxlbWVudFByb3BzLl9fc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgc291cmNlID0gZWxlbWVudFByb3BzLl9fc291cmNlO1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSAnXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8JyArIHBhcmVudE5hbWUgKyAnPi4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5mbztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcblxuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTtcblxuICAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gJyBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSAnICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArICcuJztcbiAgfVxuXG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuICB7XG4gICAgd2FybmluZyQxKGZhbHNlLCAnRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG4gIH1cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG5cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXAgPSB2b2lkIDA7XG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG4gIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICB2YXIgcHJvcFR5cGVzID0gdm9pZCAwO1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHxcbiAgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocHJvcFR5cGVzKSB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG4gICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSk7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7XG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZnJhZ21lbnQpO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpO1xuXG4gIC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHByb3BzKTtcbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nID0gdm9pZCAwO1xuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJzwnICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgJyAvPic7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcbiAgLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuICB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuLy8gSGVscHMgaWRlbnRpZnkgc2lkZSBlZmZlY3RzIGluIGJlZ2luLXBoYXNlIGxpZmVjeWNsZSBob29rcyBhbmQgc2V0U3RhdGUgcmVkdWNlcnM6XG5cblxuLy8gSW4gc29tZSBjYXNlcywgU3RyaWN0TW9kZSBzaG91bGQgYWxzbyBkb3VibGUtcmVuZGVyIGxpZmVjeWNsZXMuXG4vLyBUaGlzIGNhbiBiZSBjb25mdXNpbmcgZm9yIHRlc3RzIHRob3VnaCxcbi8vIEFuZCBpdCBjYW4gYmUgYmFkIGZvciBwZXJmb3JtYW5jZSBpbiBwcm9kdWN0aW9uLlxuLy8gVGhpcyBmZWF0dXJlIGZsYWcgY2FuIGJlIHVzZWQgdG8gY29udHJvbCB0aGUgYmVoYXZpb3I6XG5cblxuLy8gVG8gcHJlc2VydmUgdGhlIFwiUGF1c2Ugb24gY2F1Z2h0IGV4Y2VwdGlvbnNcIiBiZWhhdmlvciBvZiB0aGUgZGVidWdnZXIsIHdlXG4vLyByZXBsYXkgdGhlIGJlZ2luIHBoYXNlIG9mIGEgZmFpbGVkIGNvbXBvbmVudCBpbnNpZGUgaW52b2tlR3VhcmRlZENhbGxiYWNrLlxuXG5cbi8vIFdhcm4gYWJvdXQgZGVwcmVjYXRlZCwgYXN5bmMtdW5zYWZlIGxpZmVjeWNsZXM7IHJlbGF0ZXMgdG8gUkZDICM2OlxuXG5cbi8vIEdhdGhlciBhZHZhbmNlZCB0aW1pbmcgbWV0cmljcyBmb3IgUHJvZmlsZXIgc3VidHJlZXMuXG5cblxuLy8gVHJhY2Ugd2hpY2ggaW50ZXJhY3Rpb25zIHRyaWdnZXIgZWFjaCBjb21taXQuXG5cblxuLy8gT25seSB1c2VkIGluIHd3dyBidWlsZHMuXG4gLy8gVE9ETzogdHJ1ZT8gSGVyZSBpdCBtaWdodCBqdXN0IGJlIGZhbHNlLlxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuXG4vLyBSZWFjdCBGaXJlOiBwcmV2ZW50IHRoZSB2YWx1ZSBhbmQgY2hlY2tlZCBhdHRyaWJ1dGVzIGZyb20gc3luY2luZ1xuLy8gd2l0aCB0aGVpciByZWxhdGVkIERPTSBwcm9wZXJ0aWVzXG5cblxuLy8gVGhlc2UgQVBJcyB3aWxsIG5vIGxvbmdlciBiZSBcInVuc3RhYmxlXCIgaW4gdGhlIHVwY29taW5nIDE2LjcgcmVsZWFzZSxcbi8vIENvbnRyb2wgdGhpcyBiZWhhdmlvciB3aXRoIGEgZmxhZyB0byBzdXBwb3J0IDE2LjYgbWlub3IgcmVsZWFzZXMgaW4gdGhlIG1lYW53aGlsZS5cbnZhciBlbmFibGVTdGFibGVDb25jdXJyZW50TW9kZUFQSXMgPSBmYWxzZTtcblxudmFyIFJlYWN0ID0ge1xuICBDaGlsZHJlbjoge1xuICAgIG1hcDogbWFwQ2hpbGRyZW4sXG4gICAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICAgIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICAgIHRvQXJyYXk6IHRvQXJyYXksXG4gICAgb25seTogb25seUNoaWxkXG4gIH0sXG5cbiAgY3JlYXRlUmVmOiBjcmVhdGVSZWYsXG4gIENvbXBvbmVudDogQ29tcG9uZW50LFxuICBQdXJlQ29tcG9uZW50OiBQdXJlQ29tcG9uZW50LFxuXG4gIGNyZWF0ZUNvbnRleHQ6IGNyZWF0ZUNvbnRleHQsXG4gIGZvcndhcmRSZWY6IGZvcndhcmRSZWYsXG4gIGxhenk6IGxhenksXG4gIG1lbW86IG1lbW8sXG5cbiAgdXNlQ2FsbGJhY2s6IHVzZUNhbGxiYWNrLFxuICB1c2VDb250ZXh0OiB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3Q6IHVzZUVmZmVjdCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZTogdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlRGVidWdWYWx1ZTogdXNlRGVidWdWYWx1ZSxcbiAgdXNlTGF5b3V0RWZmZWN0OiB1c2VMYXlvdXRFZmZlY3QsXG4gIHVzZU1lbW86IHVzZU1lbW8sXG4gIHVzZVJlZHVjZXI6IHVzZVJlZHVjZXIsXG4gIHVzZVJlZjogdXNlUmVmLFxuICB1c2VTdGF0ZTogdXNlU3RhdGUsXG5cbiAgRnJhZ21lbnQ6IFJFQUNUX0ZSQUdNRU5UX1RZUEUsXG4gIFN0cmljdE1vZGU6IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUsXG4gIFN1c3BlbnNlOiBSRUFDVF9TVVNQRU5TRV9UWVBFLFxuXG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbixcbiAgY2xvbmVFbGVtZW50OiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbixcbiAgY3JlYXRlRmFjdG9yeTogY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uLFxuICBpc1ZhbGlkRWxlbWVudDogaXNWYWxpZEVsZW1lbnQsXG5cbiAgdmVyc2lvbjogUmVhY3RWZXJzaW9uLFxuXG4gIHVuc3RhYmxlX0NvbmN1cnJlbnRNb2RlOiBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSxcbiAgdW5zdGFibGVfUHJvZmlsZXI6IFJFQUNUX1BST0ZJTEVSX1RZUEUsXG5cbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6IFJlYWN0U2hhcmVkSW50ZXJuYWxzXG59O1xuXG4vLyBOb3RlOiBzb21lIEFQSXMgYXJlIGFkZGVkIHdpdGggZmVhdHVyZSBmbGFncy5cbi8vIE1ha2Ugc3VyZSB0aGF0IHN0YWJsZSBidWlsZHMgZm9yIG9wZW4gc291cmNlXG4vLyBkb24ndCBtb2RpZnkgdGhlIFJlYWN0IG9iamVjdCB0byBhdm9pZCBkZW9wdHMuXG4vLyBBbHNvIGxldCdzIG5vdCBleHBvc2UgdGhlaXIgbmFtZXMgaW4gc3RhYmxlIGJ1aWxkcy5cblxuaWYgKGVuYWJsZVN0YWJsZUNvbmN1cnJlbnRNb2RlQVBJcykge1xuICBSZWFjdC5Db25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xuICBSZWFjdC5Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG4gIFJlYWN0LnVuc3RhYmxlX0NvbmN1cnJlbnRNb2RlID0gdW5kZWZpbmVkO1xuICBSZWFjdC51bnN0YWJsZV9Qcm9maWxlciA9IHVuZGVmaW5lZDtcbn1cblxuXG5cbnZhciBSZWFjdCQyID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGRlZmF1bHQ6IFJlYWN0XG59KTtcblxudmFyIFJlYWN0JDMgPSAoIFJlYWN0JDIgJiYgUmVhY3QgKSB8fCBSZWFjdCQyO1xuXG4vLyBUT0RPOiBkZWNpZGUgb24gdGhlIHRvcC1sZXZlbCBleHBvcnQgZm9ybS5cbi8vIFRoaXMgaXMgaGFja3kgYnV0IG1ha2VzIGl0IHdvcmsgd2l0aCBib3RoIFJvbGx1cCBhbmQgSmVzdC5cbnZhciByZWFjdCA9IFJlYWN0JDMuZGVmYXVsdCB8fCBSZWFjdCQzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlYWN0O1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9CYXNlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQmFzZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9CYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9CYXNlLnNjc3NcIjtcbmltcG9ydCB7IHRvTUlESSB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBMaXZlQ29tcG9uZW50PFQgZXh0ZW5kcyBMaXZlUHJvcHM+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcHM6IExpdmVQcm9wcyA9IHtcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgZm9jdXM6IGZhbHNlLFxuICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgIGhlaWdodDogMTUsXG4gICAgICAgIHNob3J0bmFtZTogXCJcIixcbiAgICAgICAgbG9uZ25hbWU6IFwiXCIsXG4gICAgICAgIG9yZGVyOiAwLFxuICAgICAgICBsaW5rbmFtZXM6IGZhbHNlLFxuICAgICAgICB0eXBlOiBcImZsb2F0XCIsXG4gICAgICAgIG1taW46IDAsXG4gICAgICAgIG1tYXg6IDEsXG4gICAgICAgIGVudW06IFtdLFxuICAgICAgICBlbnVtX2ljb25zOiBbXSxcbiAgICAgICAgbW9kbW9kZTogXCJub25lXCIsXG4gICAgICAgIGluaXRpYWxfZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgaW5pdGlhbDogWzBdLFxuICAgICAgICB1bml0c3R5bGU6IFwiZmxvYXRcIixcbiAgICAgICAgdW5pdHM6IFwiXCIsXG4gICAgICAgIGV4cG9uZW50OiAxLFxuICAgICAgICBzdGVwOiAwLFxuICAgICAgICBzdGVwczogMCxcbiAgICAgICAgc3BlZWRsaW06IDUsXG4gICAgICAgIGRlZmVyOiBmYWxzZSxcbiAgICAgICAgaW52aXNpYmxlOiBcImF1dG9tYXRlZFwiLFxuICAgICAgICBtYXBwYWJsZTogdHJ1ZVxuICAgIH1cbiAgICBwcm9wczogVDtcbiAgICBzdGF0ZTogVCA9ICh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBMaXZlQ29tcG9uZW50KS5wcm9wcyBhcyBhbnk7XG4gICAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gICAgcmVmQ2FudmFzID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxDYW52YXNFbGVtZW50PigpO1xuICAgIGdldCBjYW52YXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZkNhbnZhcy5jdXJyZW50O1xuICAgIH1cbiAgICBnZXQgY3R4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZDYW52YXMuY3VycmVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgfVxuICAgIGdldCBpc0Nvbm5lY3RlZFBvbHlmaWxsKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLnJlZkNhbnZhcy5jdXJyZW50O1xuICAgIH1cbiAgICBoYW5kbGVLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZUtleVVwID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVRvdWNoU3RhcnQgPSAoZTogUmVhY3QuVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5mb2N1cygpO1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBwcmV2WCA9IGUudG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgbGV0IHByZXZZID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICBjb25zdCBmcm9tWCA9IHByZXZYIC0gcmVjdC5sZWZ0O1xuICAgICAgICBjb25zdCBmcm9tWSA9IHByZXZZIC0gcmVjdC50b3A7XG4gICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlckRvd24oeyB4OiBmcm9tWCwgeTogZnJvbVksIG9yaWdpbmFsRXZlbnQ6IGUgfSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZVRvdWNoTW92ZSA9IChlOiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBwYWdlWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICBjb25zdCBwYWdlWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICBjb25zdCBtb3ZlbWVudFggPSBwYWdlWCAtIHByZXZYO1xuICAgICAgICAgICAgY29uc3QgbW92ZW1lbnRZID0gcGFnZVkgLSBwcmV2WTtcbiAgICAgICAgICAgIHByZXZYID0gcGFnZVg7XG4gICAgICAgICAgICBwcmV2WSA9IHBhZ2VZO1xuICAgICAgICAgICAgY29uc3QgeCA9IHBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IHBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJEcmFnKHsgcHJldlZhbHVlLCB4LCB5LCBmcm9tWCwgZnJvbVksIG1vdmVtZW50WCwgbW92ZW1lbnRZLCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVUb3VjaEVuZCA9IChlOiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJVcCh7IHgsIHksIG9yaWdpbmFsRXZlbnQ6IGUgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGhhbmRsZVRvdWNoTW92ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgaGFuZGxlVG91Y2hFbmQpO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGhhbmRsZVRvdWNoTW92ZSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGhhbmRsZVRvdWNoRW5kLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgIH07XG4gICAgaGFuZGxlV2hlZWwgPSAoZTogUmVhY3QuV2hlZWxFdmVudCkgPT4ge307XG4gICAgaGFuZGxlQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlTW91c2VEb3duID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNhbnZhcy5mb2N1cygpO1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGZyb21YID0gZS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgY29uc3QgZnJvbVkgPSBlLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlckRvd24oeyB4OiBmcm9tWCwgeTogZnJvbVksIG9yaWdpbmFsRXZlbnQ6IGUgfSk7XG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB4ID0gZS5wYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBlLnBhZ2VZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJEcmFnKHsgcHJldlZhbHVlLCB4LCB5LCBmcm9tWCwgZnJvbVksIG1vdmVtZW50WDogZS5tb3ZlbWVudFgsIG1vdmVtZW50WTogZS5tb3ZlbWVudFksIG9yaWdpbmFsRXZlbnQ6IGUgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGUucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyVXAoeyB4LCB5LCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG4gICAgfTtcbiAgICBoYW5kbGVNb3VzZU92ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlTW91c2VPdXQgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlQ29udGV4dE1lbnUgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge307XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoZTogUG9pbnRlckRvd25FdmVudCkgPT4ge307XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlckRyYWdFdmVudCkgPT4ge307XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKGU6IFBvaW50ZXJVcEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVGb2N1c0luID0gKGU6IFJlYWN0LkZvY3VzRXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyBmb2N1czogdHJ1ZSB9KTtcbiAgICBoYW5kbGVGb2N1c091dCA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IGZhbHNlIH0pO1xuXG4gICAgZ2V0IGRpc3BsYXlWYWx1ZSgpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgdHlwZSwgdW5pdHN0eWxlLCB1bml0cyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gdGhpcy5zdGF0ZS5lbnVtW3ZhbHVlXTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJpbnRcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQoMCk7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiZmxvYXRcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwidGltZVwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgbXNcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJoZXJ0elwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgSHpcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJkZWNpYmVsXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiBkQlwiO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcIiVcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiICVcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJwYW5cIikgcmV0dXJuIHZhbHVlID09PSAwID8gXCJDXCIgOiAodHlwZSA9PT0gXCJpbnRcIiA/IE1hdGguYWJzKHZhbHVlKSA6IE1hdGguYWJzKHZhbHVlKS50b0ZpeGVkKDIpKSArICh2YWx1ZSA8IDAgPyBcIiBMXCIgOiBcIiBSXCIpO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcInNlbWl0b25lc1wiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgc3RcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJtaWRpXCIpIHJldHVybiB0b01JREkodmFsdWUpO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcImN1c3RvbVwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgXCIgKyB1bml0cztcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJuYXRpdmVcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKTtcbiAgICAgICAgcmV0dXJuIFwiTi9BXCI7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xuICAgIH1cbiAgICBjaGFuZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm9uQ2hhbmdlKSB0aGlzLnN0YXRlLm9uQ2hhbmdlKHsgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsIGRpc3BsYXlWYWx1ZTogdGhpcy5kaXNwbGF5VmFsdWUgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMucHJvcHMpO1xuICAgICAgICB0aGlzLnBhaW50KCk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5wYWludCgpO1xuICAgIH1cbiAgICBwYWludCgpIHt9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5yZWZDYW52YXN9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXCJsaXZlLWNvbXBvbmVudFwiLCB0aGlzLmNsYXNzTmFtZV0uam9pbihcIiBcIil9XG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ezF9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgICAgICAgICAgb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcH1cbiAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMuaGFuZGxlVG91Y2hTdGFydH1cbiAgICAgICAgICAgICAgICBvbldoZWVsPXt0aGlzLmhhbmRsZVdoZWVsfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlTW91c2VEb3dufVxuICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLmhhbmRsZU1vdXNlT3Zlcn1cbiAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLmhhbmRsZU1vdXNlT3V0fVxuICAgICAgICAgICAgICAgIG9uQ29udGV4dE1lbnU9e3RoaXMuaGFuZGxlQ29udGV4dE1lbnV9XG4gICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c0lufVxuICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVGb2N1c091dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcblxuaW50ZXJmYWNlIExpdmVCdXR0b25Qcm9wcyBleHRlbmRzIExpdmVQcm9wcyB7XG4gICAgYWN0aXZlYmdjb2xvcj86IHN0cmluZztcbiAgICBhY3RpdmViZ29uY29sb3I/OiBzdHJpbmc7XG4gICAgYmdjb2xvcj86IHN0cmluZztcbiAgICBiZ29uY29sb3I/OiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I/OiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZUJ1dHRvbiBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZUJ1dHRvblByb3BzPiB7XG4gICAgc3RhdGljIGdldCBwcm9wcygpOiBMaXZlQnV0dG9uUHJvcHMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucHJvcHMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS5idXR0b25cIixcbiAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgIGhlaWdodDogMTUsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZWJnb25jb2xvcjogXCJyZ2JhKDEwOSwgMjE1LCAyNTUsIDEpXCIsXG4gICAgICAgICAgICBiZ2NvbG9yOiBcInJnYmEoOTAsIDkwLCA5MCwgMSlcIixcbiAgICAgICAgICAgIGJnb25jb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGFzc05hbWUgPSBcImxpdmUtYnV0dG9uXCI7XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3IsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgYmdvbmNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cbiAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSAwLjU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkJnQ29sb3IgPSBhY3RpdmUgPyAodmFsdWUgPyBhY3RpdmViZ29uY29sb3IgOiBhY3RpdmViZ2NvbG9yKSA6ICh2YWx1ZSA/IGJnb25jb2xvciA6IGJnY29sb3IpO1xuICAgICAgICBjb25zdCBidXR0b25Cb3JkZXJDb2xvciA9IGZvY3VzID8gZm9jdXNib3JkZXJjb2xvciA6IGJvcmRlcmNvbG9yO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBidXR0b25CZ0NvbG9yO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5lbGxpcHNlKHdpZHRoICogMC41LCBoZWlnaHQgKiAwLjUsIHdpZHRoICogMC41IC0gMiAqIGJvcmRlcldpZHRoLCBoZWlnaHQgKiAwLjUgLSAyICogYm9yZGVyV2lkdGgsIDAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYnV0dG9uQm9yZGVyQ29sb3I7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgIXRoaXMuX2luVG91Y2gpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRWYWx1ZSgwKSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoMSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldFZhbHVlKDApO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcbmltcG9ydCB7IHRvUmFkLCByb3VuZGVkUmVjdCwgZmlsbFJvdW5kZWRSZWN0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuaW50ZXJmYWNlIExpdmVEaWFsUHJvcHMgZXh0ZW5kcyBMaXZlUHJvcHMge1xuICAgIGZvbnRuYW1lPzogc3RyaW5nO1xuICAgIGZvbnRzaXplPzogbnVtYmVyO1xuICAgIGZvbnRmYWNlPzogXCJyZWd1bGFyXCIgfCBcImJvbGRcIiB8IFwiaXRhbGljXCIgfCBcImJvbGQgaXRhbGljXCI7XG4gICAgc2hvd25hbWU/OiBib29sZWFuO1xuICAgIHNob3dudW1iZXI/OiBib29sZWFuO1xuICAgIGFwcGVhcmFuY2U/OiBcInZlcnRpY2FsXCIgfCBcInRpbnlcIiB8IFwicGFuZWxcIjtcbiAgICB0cmlhbmdsZT86IGJvb2xlYW47XG4gICAgYm9yZGVyY29sb3I/OiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcj86IHN0cmluZztcbiAgICBhY3RpdmVkaWFsY29sb3I/OiBzdHJpbmc7XG4gICAgZGlhbGNvbG9yPzogc3RyaW5nO1xuICAgIGFjdGl2ZW5lZWRsZWNvbG9yPzogc3RyaW5nO1xuICAgIG5lZWRsZWNvbG9yPzogc3RyaW5nO1xuICAgIHBhbmVsY29sb3I/OiBzdHJpbmc7XG4gICAgdGV4dGNvbG9yPzogc3RyaW5nO1xuICAgIHRyaWJvcmRlcmNvbG9yPzogc3RyaW5nO1xuICAgIHRyaWNvbG9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlRGlhbCBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZURpYWxQcm9wcz4ge1xuICAgIHN0YXRpYyBnZXQgcHJvcHMoKTogTGl2ZURpYWxQcm9wcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wcm9wcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLmRpYWxcIixcbiAgICAgICAgICAgIHdpZHRoOiA0NSxcbiAgICAgICAgICAgIGhlaWdodDogNDUsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEyLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgYXBwZWFyYW5jZTogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgdHJpYW5nbGU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd25hbWU6IHRydWUsXG4gICAgICAgICAgICBzaG93bnVtYmVyOiB0cnVlLFxuICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwicmdiYSg5MCwgOTAsIDkwLCAxKVwiLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmVkaWFsY29sb3I6IFwicmdiYSgxMDksIDIxNSwgMjU1LCAxKVwiLFxuICAgICAgICAgICAgZGlhbGNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZW5lZWRsZWNvbG9yOiBcInJnYmEoNDAsIDQwLCA0MCwgMSlcIixcbiAgICAgICAgICAgIG5lZWRsZWNvbG9yOiBcInJnYmEoMTA1LCAxMDUsIDEwNSwgMSlcIixcbiAgICAgICAgICAgIHBhbmVsY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRyaWJvcmRlcmNvbG9yOiBcInJnYmEoNTAsIDUwLCA1MCwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yOiBcInJnYmEoNDAsIDQwLCA0MCwgMSlcIixcbiAgICAgICAgICAgIG1taW46IDAsXG4gICAgICAgICAgICBtbWF4OiAxMjcsXG4gICAgICAgICAgICB0eXBlOiBcImludFwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNsYXNzTmFtZSA9IFwibGl2ZS1kaWFsXCI7XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpbnRlcmFjdGlvblJlY3Q6IG51bWJlcltdID0gWzAsIDAsIDAsIDBdO1xuXG4gICAgZ2V0IHRydWVTdGVwcygpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCBzdGVwcywgc3RlcCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgZnVsbCA9IDEwMDtcbiAgICAgICAgY29uc3QgbWF4U3RlcHMgPSB0eXBlID09PSBcImVudW1cIiA/IHRoaXMuc3RhdGUuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gbW1heCAtIG1taW4gOiBmdWxsO1xuICAgICAgICBpZiAoc3RlcCkge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gdGhpcy5zdGF0ZS5lbnVtLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5taW4oTWF0aC5mbG9vcigobW1heCAtIG1taW4pIC8gTWF0aC5yb3VuZChzdGVwKSksIG1heFN0ZXBzKTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBzdGVwKSwgbWF4U3RlcHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGVwcykgcmV0dXJuIE1hdGgubWluKHN0ZXBzLCBtYXhTdGVwcyk7XG4gICAgICAgIHJldHVybiBtYXhTdGVwcztcbiAgICB9XG4gICAgZ2V0IGRpc3RhbmNlKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gdHlwZSA9PT0gXCJlbnVtXCIgPyB2YWx1ZSAvIHRoaXMuc3RhdGUuZW51bS5sZW5ndGggOiAodmFsdWUgLSBtbWluKSAvIChtbWF4IC0gbW1pbik7XG4gICAgfVxuICAgIGdldCBzdGVwUmFuZ2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgc3RlcCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgZnVsbCA9IDEwMDtcbiAgICAgICAgaWYgKHN0ZXApIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IGZ1bGwgLyB0aGlzLnN0YXRlLmVudW0ubGVuZ3RoIDogdHlwZSA9PT0gXCJpbnRcIiA/IE1hdGgucm91bmQoc3RlcCkgLyAobW1heCAtIG1taW4pICogZnVsbCA6IHN0ZXAgLyAobW1heCAtIG1taW4pICogZnVsbDtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIHJldHVybiBmdWxsIC8gdHJ1ZVN0ZXBzO1xuICAgIH1cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvbnRuYW1lLFxuICAgICAgICAgICAgZm9udHNpemUsXG4gICAgICAgICAgICBmb250ZmFjZSxcbiAgICAgICAgICAgIGFwcGVhcmFuY2UsXG4gICAgICAgICAgICB0cmlhbmdsZSxcbiAgICAgICAgICAgIHNob3duYW1lLFxuICAgICAgICAgICAgc2hvd251bWJlcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHBhbmVsY29sb3IsXG4gICAgICAgICAgICBhY3RpdmVuZWVkbGVjb2xvcixcbiAgICAgICAgICAgIG5lZWRsZWNvbG9yLFxuICAgICAgICAgICAgYWN0aXZlZGlhbGNvbG9yLFxuICAgICAgICAgICAgZGlhbGNvbG9yLFxuICAgICAgICAgICAgdGV4dGNvbG9yLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0cmljb2xvcixcbiAgICAgICAgICAgIHNob3J0bmFtZVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG5cbiAgICAgICAgY29uc3QgdHJpYW5nbGVIZWlnaHQgPSA0O1xuICAgICAgICBjb25zdCB0cmlhbmdsZUxpbmVXaWR0aCA9IDAuNjtcblxuICAgICAgICBsZXQgc3RhcnQ6IG51bWJlcjtcbiAgICAgICAgbGV0IGVuZDogbnVtYmVyO1xuICAgICAgICBsZXQgdmFsUG9zOiBudW1iZXI7XG4gICAgICAgIGxldCBkaWFsSGVpZ2h0OiBudW1iZXI7XG5cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICBkaWFsSGVpZ2h0ID0gMTg7XG4gICAgICAgICAgICBzdGFydCA9IC0zICogTWF0aC5QSSAqIDAuNTtcbiAgICAgICAgICAgIGVuZCA9IDA7XG4gICAgICAgICAgICB2YWxQb3MgPSBzdGFydCArIHRvUmFkKHRoaXMuZGlzdGFuY2UgKiAyNzApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlhbEhlaWdodCA9IDI1O1xuICAgICAgICAgICAgc3RhcnQgPSBNYXRoLlBJIC0gMyAqIE1hdGguUEkgLyA4O1xuICAgICAgICAgICAgZW5kID0gMiAqIE1hdGguUEkgKyAzICogTWF0aC5QSSAvIDg7XG4gICAgICAgICAgICB2YWxQb3MgPSBzdGFydCArIHRvUmFkKHRoaXMuZGlzdGFuY2UgKiAzMTUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpYWxSYWRpdXMgPSBkaWFsSGVpZ2h0ICogMC41O1xuXG4gICAgICAgIGxldCBkaWFsQ2VudGVyWCA9IHdpZHRoICogMC41O1xuICAgICAgICBsZXQgZGlhbENlbnRlclkgPSBoZWlnaHQgKiAwLjUgKyAxO1xuICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJwYW5lbFwiKSB7XG4gICAgICAgICAgICBkaWFsQ2VudGVyWSArPSAxMDtcbiAgICAgICAgfSBlbHNlIGlmIChhcHBlYXJhbmNlID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIGlmIChzaG93bnVtYmVyKSBkaWFsQ2VudGVyWSAtPSBmb250c2l6ZSAtIDU7XG4gICAgICAgICAgICBpZiAoc2hvd25hbWUpIGRpYWxDZW50ZXJZICs9IGZvbnRzaXplIC0gNTtcbiAgICAgICAgICAgIGlmICh0cmlhbmdsZSkgZGlhbENlbnRlclkgKz0gdHJpYW5nbGVIZWlnaHQgLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICBpZiAoc2hvd25hbWUpIHtcbiAgICAgICAgICAgICAgICBkaWFsQ2VudGVyWSArPSA2O1xuICAgICAgICAgICAgICAgIGRpYWxDZW50ZXJYID0gMTA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvblJlY3QgPSBbMCwgZGlhbENlbnRlclkgLSBkaWFsSGVpZ2h0ICogMC41LCB3aWR0aCwgZGlhbEhlaWdodF07XG4gICAgICAgIGNvbnN0IGFyY1N0YXJ0WCA9IGRpYWxDZW50ZXJYICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLmNvcyhzdGFydCkpO1xuICAgICAgICBjb25zdCBhcmNTdGFydFkgPSBkaWFsQ2VudGVyWSArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5zaW4oc3RhcnQpKTtcbiAgICAgICAgY29uc3QgYXJjRW5kWCA9IGRpYWxDZW50ZXJYICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLmNvcyhlbmQpKTtcbiAgICAgICAgY29uc3QgYXJjRW5kWSA9IGRpYWxDZW50ZXJZICsgKGRpYWxIZWlnaHQgKiAwLjUgKiBNYXRoLnNpbihlbmQpKTtcbiAgICAgICAgY29uc3QgdmFsdWVQb3NYID0gZGlhbENlbnRlclggKyAoZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguY29zKHZhbFBvcykpO1xuICAgICAgICBjb25zdCB2YWx1ZVBvc1kgPSBkaWFsQ2VudGVyWSArIChkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5zaW4odmFsUG9zKSk7XG4gICAgICAgIGNvbnN0IGVuZENhcFJhZGl1cyA9IDE7XG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IDI7XG4gICAgICAgIGxldCBwYW5lbE9mZnNldCA9IDA7XG5cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwicGFuZWxcIikge1xuICAgICAgICAgICAgcGFuZWxPZmZzZXQgPSA1O1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gZm9jdXMgPyBmb2N1c2JvcmRlcmNvbG9yIDogYm9yZGVyY29sb3I7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMC40O1xuICAgICAgICAgICAgcm91bmRlZFJlY3QoY3R4LCAxLCAxLCB3aWR0aCAtIDIsIGhlaWdodCAtIDIsIDUpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHBhbmVsY29sb3I7XG4gICAgICAgICAgICBmaWxsUm91bmRlZFJlY3QoY3R4LCAxLjIsIDEuMiwgd2lkdGggLSAyLjQsIDMwIC0gMC40LCBbNSwgNSwgMCwgMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYWN0aXZlID8gYWN0aXZlbmVlZGxlY29sb3IgOiBuZWVkbGVjb2xvcjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGN0eC5zdHJva2VTdHlsZTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kIGFyYyBlbmRjYXBzXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhhcmNTdGFydFgsIGFyY1N0YXJ0WSwgZW5kQ2FwUmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhhcmNFbmRYLCBhcmNFbmRZLCBlbmRDYXBSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kIGFyY1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZLCBkaWFsUmFkaXVzLCBzdGFydCwgZW5kKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIGRyYXcgdmFsdWUgYXJjLCB3aGljaCBjaGFuZ2VzIGlmIHRyaWFuZ2xlIGlzIGVuYWJsZWRcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYWN0aXZlID8gYWN0aXZlZGlhbGNvbG9yIDogZGlhbGNvbG9yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3R4LnN0cm9rZVN0eWxlO1xuICAgICAgICBpZiAodHJpYW5nbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pZHBvaW50ID0gKHN0YXJ0ICsgZW5kKSAqIDAuNTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGFjdGl2ZSA/IGFjdGl2ZWRpYWxjb2xvciA6IGRpYWxjb2xvcjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IDAuNSkgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGRpYWxSYWRpdXMsIG1pZHBvaW50LCB2YWxQb3MpO1xuICAgICAgICAgICAgZWxzZSBjdHguYXJjKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSwgZGlhbFJhZGl1cywgdmFsUG9zLCBtaWRwb2ludCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkcmF3IHZhbHVlIGFyYyBlbmRjYXBcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMoYXJjU3RhcnRYLCBhcmNTdGFydFksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIC8vIGRyYXcgdmFsdWUgYXJjXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKGRpYWxDZW50ZXJYLCBkaWFsQ2VudGVyWSwgZGlhbFJhZGl1cywgc3RhcnQsIHZhbFBvcyk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZHJhdyBkaWFsXG4gICAgICAgIC8vIGRyYXcgZGlhbCByb3VuZCBlbmRjYXBzXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGFjdGl2ZSA/IGFjdGl2ZW5lZWRsZWNvbG9yIDogbmVlZGxlY29sb3I7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjdHguc3Ryb2tlU3R5bGU7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModmFsdWVQb3NYLCB2YWx1ZVBvc1ksIGVuZENhcFJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAvLyBkcmF3IGRpYWwgbGluZVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZKTtcbiAgICAgICAgY3R4LmxpbmVUbyh2YWx1ZVBvc1gsIHZhbHVlUG9zWSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gYWRkIHRleHQgaWYgaXQgaXMgZW5hYmxlZFxuICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlID09PSBcInJlZ3VsYXJcIiA/IFwiXCIgOiBmb250ZmFjZX0gJHtmb250c2l6ZX1weCAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0ZXh0Y29sb3I7XG4gICAgICAgIGlmIChzaG93bmFtZSkge1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChzaG9ydG5hbWUsIDAsIHBhbmVsT2Zmc2V0ICsgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHNob3J0bmFtZSwgd2lkdGggKiAwLjUsIHBhbmVsT2Zmc2V0ICsgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd251bWJlcikge1xuICAgICAgICAgICAgY29uc3QgdGlueU9mZnNldCA9IGFwcGVhcmFuY2UgPT09IFwidGlueVwiID8gMTIgOiAwO1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmRpc3BsYXlWYWx1ZSwgdGlueU9mZnNldCwgaGVpZ2h0IC0gcGFuZWxPZmZzZXQsIHdpZHRoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuZGlzcGxheVZhbHVlLCB3aWR0aCAqIDAuNSwgaGVpZ2h0IC0gcGFuZWxPZmZzZXQsIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3IHRyaWFuZ2xlIGlmIGl0IGlzIGVuYWJsZWRcbiAgICAgICAgaWYgKHRyaWFuZ2xlKSB7XG4gICAgICAgICAgICBpZiAoIWRpc3RhbmNlKSBjdHguZmlsbFN0eWxlID0gdHJpY29sb3I7XG4gICAgICAgICAgICBlbHNlIGlmICghYWN0aXZlKSBjdHguZmlsbFN0eWxlID0gZGlhbGNvbG9yO1xuICAgICAgICAgICAgZWxzZSBjdHguZmlsbFN0eWxlID0gYWN0aXZlZGlhbGNvbG9yO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwidGlueVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlwUG9zaXRpb25YID0gZGlhbENlbnRlclggKyBkaWFsSGVpZ2h0ICogMC41ICogTWF0aC5jb3MoLTMgKiBNYXRoLlBJIC8gNCkgLSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpcFBvc2l0aW9uWSA9IGRpYWxDZW50ZXJZICsgZGlhbEhlaWdodCAqIDAuNSAqIE1hdGguc2luKC0zICogTWF0aC5QSSAvIDQpIC0gMTtcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHRpcFBvc2l0aW9uWCwgdGlwUG9zaXRpb25ZKTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKHRpcFBvc2l0aW9uWCAtIHRyaWFuZ2xlSGVpZ2h0LCB0aXBQb3NpdGlvblkpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odGlwUG9zaXRpb25YLCB0aXBQb3NpdGlvblkgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh0aXBQb3NpdGlvblgsIHRpcFBvc2l0aW9uWSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oZGlhbENlbnRlclgsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEpO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oZGlhbENlbnRlclggLSB0cmlhbmdsZUhlaWdodCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSAtIHRyaWFuZ2xlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjdHgubGluZVRvKGRpYWxDZW50ZXJYICsgdHJpYW5nbGVIZWlnaHQsIGRpYWxDZW50ZXJZIC0gZGlhbFJhZGl1cyAtIDEgLSB0cmlhbmdsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhkaWFsQ2VudGVyWCwgZGlhbENlbnRlclkgLSBkaWFsUmFkaXVzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdHJpYm9yZGVyY29sb3IgfHwgXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRyaWFuZ2xlTGluZVdpZHRoO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFZhbHVlRnJvbURlbHRhKGU6IFBvaW50ZXJEcmFnRXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWluLCBtbWF4IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBzdGVwUmFuZ2UgPSB0aGlzLnN0ZXBSYW5nZTtcbiAgICAgICAgY29uc3QgdHJ1ZVN0ZXBzID0gdGhpcy50cnVlU3RlcHM7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSB0eXBlID09PSBcImVudW1cIiA/IDEgOiAodGhpcy5zdGF0ZS5zdGVwIHx8IChtbWF4IC0gbW1pbikgLyB0cnVlU3RlcHMpO1xuICAgICAgICBjb25zdCBwcmV2U3RlcHMgPSB0eXBlID09PSBcImVudW1cIiA/IGUucHJldlZhbHVlIDogZS5wcmV2VmFsdWUgLyBzdGVwO1xuICAgICAgICBjb25zdCBkU3RlcHMgPSBNYXRoLnJvdW5kKChlLmZyb21ZIC0gZS55KSAvIHN0ZXBSYW5nZSk7XG4gICAgICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5taW4odHJ1ZVN0ZXBzLCBNYXRoLm1heCgwLCBwcmV2U3RlcHMgKyBkU3RlcHMpKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gc3RlcHM7XG4gICAgICAgIGlmICh0eXBlID09PSBcImludFwiKSByZXR1cm4gTWF0aC5yb3VuZChzdGVwcyAqIHN0ZXAgKyBtbWluKTtcbiAgICAgICAgcmV0dXJuIHN0ZXBzICogc3RlcCArIG1taW47XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZS54IDwgdGhpcy5pbnRlcmFjdGlvblJlY3RbMF1cbiAgICAgICAgICAgIHx8IGUueCA+IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl1cbiAgICAgICAgICAgIHx8IGUueSA8IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdXG4gICAgICAgICAgICB8fCBlLnkgPiB0aGlzLmludGVyYWN0aW9uUmVjdFsxXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdXG4gICAgICAgICkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlckRyYWdFdmVudCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2luVG91Y2gpIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbURlbHRhKGUpO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMuc3RhdGUudmFsdWUpIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5pbXBvcnQgeyBhdG9kYiB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmludGVyZmFjZSBMaXZlTWV0ZXJQcm9wcyBleHRlbmRzIExpdmVQcm9wcyB7XG4gICAgb3JpZW50YXRpb24/OiBcInZlcnRpY2FsXCIgfCBcImhvcml6b250YWxcIjtcbiAgICBtb2RlPzogXCJkZWNpYmVsXCIgfCBcImxpbmVhclwiO1xuICAgIGNsaXBfc2l6ZT86IFwibm9ybWFsXCIgfCBcImV4dGVuZGVkXCI7XG4gICAgaW50ZXJ2YWw/OiBudW1iZXI7XG4gICAgYmdjb2xvcj86IHN0cmluZztcbiAgICBpbmFjdGl2ZWNvbGRjb2xvcj86IHN0cmluZztcbiAgICBpbmFjdGl2ZXdhcm1jb2xvcj86IHN0cmluZztcbiAgICBjb2xkY29sb3I/OiBzdHJpbmc7XG4gICAgd2FybWNvbG9yPzogc3RyaW5nO1xuICAgIGhvdGNvbG9yPzogc3RyaW5nO1xuICAgIG92ZXJsb2FkY29sb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVNZXRlciBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZU1ldGVyUHJvcHM+IHtcbiAgICBzdGF0aWMgZ2V0IHByb3BzKCk6IExpdmVNZXRlclByb3BzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnByb3BzLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUubWV0ZXJ+XCIsXG4gICAgICAgICAgICB3aWR0aDogMTIwLFxuICAgICAgICAgICAgaGVpZ2h0OiAxNSxcbiAgICAgICAgICAgIG1vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICBjbGlwX3NpemU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBpbnRlcnZhbDogMjAsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgYmdjb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICBpbmFjdGl2ZWNvbGRjb2xvcjogXCJyZ2JhKDEzMCwgMTMwLCAxMzAsIDEpXCIsXG4gICAgICAgICAgICBpbmFjdGl2ZXdhcm1jb2xvcjogXCJyZ2JhKDE0OSwgMTQ5LCAxNDksIDEpXCIsXG4gICAgICAgICAgICBjb2xkY29sb3I6IFwicmdiYSgxMiwgMjQ4LCAxMDAsIDEpXCIsXG4gICAgICAgICAgICB3YXJtY29sb3I6IFwicmdiYSgxOTUsIDI0OCwgMTAwLCAxKVwiLFxuICAgICAgICAgICAgaG90Y29sb3I6IFwicmdiYSgyNTUsIDE5MywgMTAsIDEpXCIsXG4gICAgICAgICAgICBvdmVybG9hZGNvbG9yOiBcInJnYmEoMjU1LCAxMCwgMTAsIDEpXCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NOYW1lID0gXCJsaXZlLW1ldGVyXCI7XG4gICAgcGFpbnRWYWx1ZTogbnVtYmVyID0gMDtcbiAgICBtYXhWYWx1ZTogbnVtYmVyID0gMDtcbiAgICBwYWludFRpbWVyOiBudW1iZXI7XG4gICAgbWF4VGltZXI6IG51bWJlcjtcblxuICAgIGdldCBkaXN0YW5jZSgpIHtcbiAgICAgICAgY29uc3QgeyBtb2RlLCB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChtb2RlID09PSBcImRlY2liZWxcIiA/IE1hdGgubWF4KC03MCwgdmFsdWUpIDogYXRvZGIoTWF0aC5hYnModmFsdWUpKSkgLyA3MCArIDE7XG4gICAgfVxuXG4gICAgcGFpbnQocGFpbnRJbj86IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wYWludFZhbHVlID0gTWF0aC5tYXgodGhpcy5wYWludFZhbHVlLCB0aGlzLmRpc3RhbmNlKTtcbiAgICAgICAgaWYgKCFwYWludEluKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGFpbnRUaW1lcikgdGhpcy5wYWludFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnBhaW50KHRydWUpLCB0aGlzLnN0YXRlLmludGVydmFsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhaW50VGltZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgICAgICBjbGlwX3NpemUsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgaW5hY3RpdmVjb2xkY29sb3IsXG4gICAgICAgICAgICBpbmFjdGl2ZXdhcm1jb2xvcixcbiAgICAgICAgICAgIGNvbGRjb2xvcixcbiAgICAgICAgICAgIHdhcm1jb2xvcixcbiAgICAgICAgICAgIGhvdGNvbG9yLFxuICAgICAgICAgICAgb3ZlcmxvYWRjb2xvclxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cbiAgICAgICAgY29uc3QgY2xpcCA9IGNsaXBfc2l6ZSA9PT0gXCJub3JtYWxcIiA/IDEwIDogMjA7XG4gICAgICAgIGNvbnN0IHBhaW50VmFsdWUgPSB0aGlzLnBhaW50VmFsdWU7XG4gICAgICAgIGlmIChwYWludFZhbHVlID4gdGhpcy5tYXhWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IHBhaW50VmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5tYXhUaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMubWF4VGltZXIpO1xuICAgICAgICAgICAgdGhpcy5tYXhUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5tYXhWYWx1ZSA9IHRoaXMucGFpbnRWYWx1ZSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF4VmFsdWUgPSB0aGlzLm1heFZhbHVlO1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgY29uc3Qgd2FybVN0b3AgPSB3aWR0aCAtIGNsaXAgLSAxO1xuICAgICAgICAgICAgY29uc3QgaG90U3RvcCA9IHdpZHRoIC0gY2xpcDtcbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHdpZHRoLCAwKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBhY3RpdmUgPyBjb2xkY29sb3IgOiBpbmFjdGl2ZWNvbGRjb2xvcik7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3Aod2FybVN0b3AgLyB3aWR0aCwgYWN0aXZlID8gd2FybWNvbG9yIDogaW5hY3RpdmV3YXJtY29sb3IpO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKGhvdFN0b3AgLyB3aWR0aCwgYWN0aXZlID8gaG90Y29sb3IgOiBpbmFjdGl2ZXdhcm1jb2xvcik7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgYWN0aXZlID8gb3ZlcmxvYWRjb2xvciA6IGluYWN0aXZld2FybWNvbG9yKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBiZ2NvbG9yO1xuICAgICAgICAgICAgaWYgKHBhaW50VmFsdWUgPCAxKSBjdHguZmlsbFJlY3QoMCwgMCwgd2FybVN0b3AsIGhlaWdodCk7XG4gICAgICAgICAgICBpZiAocGFpbnRWYWx1ZSA8IDIpIGN0eC5maWxsUmVjdChob3RTdG9wLCAwLCBjbGlwLCBoZWlnaHQpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgICAgICAgaWYgKHBhaW50VmFsdWUgPiAwKSBjdHguZmlsbFJlY3QoMCwgMCwgTWF0aC5taW4oMSwgcGFpbnRWYWx1ZSkgKiB3YXJtU3RvcCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGlmIChwYWludFZhbHVlID4gMSkgY3R4LmZpbGxSZWN0KGhvdFN0b3AsIDAsIE1hdGgubWluKDEsIChwYWludFZhbHVlIC0gMSkgKiAxMCkgKiBjbGlwLCBoZWlnaHQpO1xuICAgICAgICAgICAgaWYgKG1heFZhbHVlID4gcGFpbnRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChtYXhWYWx1ZSA8PSAxKSBjdHguZmlsbFJlY3QoTWF0aC5taW4od2FybVN0b3AgLSAxLCBtYXhWYWx1ZSAqIHdhcm1TdG9wKSwgMCwgMSwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBpZiAobWF4VmFsdWUgPiAxKSBjdHguZmlsbFJlY3QoTWF0aC5taW4od2lkdGggLSAxLCBob3RTdG9wICsgKG1heFZhbHVlIC0gMSkgKiAxMCAqIGNsaXApLCAwLCAxLCBoZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgd2FybVN0b3AgPSBjbGlwICsgMTtcbiAgICAgICAgICAgIGNvbnN0IGhvdFN0b3AgPSBjbGlwO1xuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgaGVpZ2h0LCAwLCAwKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBhY3RpdmUgPyBjb2xkY29sb3IgOiBpbmFjdGl2ZWNvbGRjb2xvcik7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoKGhlaWdodCAtIHdhcm1TdG9wKSAvIGhlaWdodCwgYWN0aXZlID8gd2FybWNvbG9yIDogaW5hY3RpdmV3YXJtY29sb3IpO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKChoZWlnaHQgLSBob3RTdG9wKSAvIGhlaWdodCwgYWN0aXZlID8gaG90Y29sb3IgOiBpbmFjdGl2ZXdhcm1jb2xvcik7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgYWN0aXZlID8gb3ZlcmxvYWRjb2xvciA6IGluYWN0aXZld2FybWNvbG9yKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBiZ2NvbG9yO1xuICAgICAgICAgICAgaWYgKHBhaW50VmFsdWUgPCAxKSBjdHguZmlsbFJlY3QoMCwgd2FybVN0b3AsIHdpZHRoLCBoZWlnaHQgLSB3YXJtU3RvcCk7XG4gICAgICAgICAgICBpZiAocGFpbnRWYWx1ZSA8IDIpIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaG90U3RvcCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgICAgICAgICBpZiAocGFpbnRWYWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkcmF3SGVpZ2h0ID0gTWF0aC5taW4oMSwgcGFpbnRWYWx1ZSkgKiAoaGVpZ2h0IC0gd2FybVN0b3ApO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCBoZWlnaHQgLSBkcmF3SGVpZ2h0LCB3aWR0aCwgZHJhd0hlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFpbnRWYWx1ZSA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkcmF3SGVpZ2h0ID0gTWF0aC5taW4oMSwgKHBhaW50VmFsdWUgLSAxKSAqIDEwKSAqIGNsaXA7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIGhvdFN0b3AgLSBkcmF3SGVpZ2h0LCB3aWR0aCwgZHJhd0hlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF4VmFsdWUgPiBwYWludFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heFZhbHVlIDw9IDEpIGN0eC5maWxsUmVjdCgwLCBoZWlnaHQgLSBtYXhWYWx1ZSAqIChoZWlnaHQgLSB3YXJtU3RvcCksIHdpZHRoLCAxKTtcbiAgICAgICAgICAgICAgICBpZiAobWF4VmFsdWUgPiAxKSBjdHguZmlsbFJlY3QoMCwgTWF0aC5tYXgoMCwgaG90U3RvcCAtIChtYXhWYWx1ZSAtIDEpICogMTAgKiBjbGlwKSwgd2lkdGgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFpbnRWYWx1ZSA9IDA7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcblxuaW50ZXJmYWNlIExpdmVOdW1ib3hQcm9wcyBleHRlbmRzIExpdmVQcm9wcyB7XG4gICAgZm9udG5hbWU/OiBzdHJpbmc7XG4gICAgZm9udHNpemU/OiBudW1iZXI7XG4gICAgZm9udGZhY2U/OiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBhcHBlYXJhbmNlPzogXCJzbGlkZXJcIiB8IFwidHJpYW5nbGVcIiB8IFwiZGVmYXVsdFwiO1xuICAgIGFjdGl2ZWJnY29sb3I/OiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I/OiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcj86IHN0cmluZztcbiAgICB0ZXh0Y29sb3I/OiBzdHJpbmc7XG4gICAgdHJpY29sb3I/OiBzdHJpbmc7XG4gICAgYWN0aXZldHJpY29sb3I/OiBzdHJpbmc7XG4gICAgdHJpY29sb3IyPzogc3RyaW5nO1xuICAgIGFjdGl2ZXRyaWNvbG9yMj86IHN0cmluZztcbiAgICBhY3RpdmVzbGlkZXJjb2xvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZU51bWJveCBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZU51bWJveFByb3BzPiB7XG4gICAgc3RhdGljIGdldCBwcm9wcygpOiBMaXZlTnVtYm94UHJvcHMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucHJvcHMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS5udW1ib3hcIixcbiAgICAgICAgICAgIHdpZHRoOiA0NSxcbiAgICAgICAgICAgIGhlaWdodDogMTUsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEwLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgYXBwZWFyYW5jZTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZXRyaWNvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIHRyaWNvbG9yMjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0cmljb2xvcjI6IFwicmdiYSgxMDksIDIxNSwgMjU1LCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZlc2xpZGVyY29sb3I6IFwicmdiYSgxMDksIDIxNSwgMjU1LCAxKVwiLFxuICAgICAgICAgICAgbW1pbjogMCxcbiAgICAgICAgICAgIG1tYXg6IDEyNyxcbiAgICAgICAgICAgIHR5cGU6IFwiaW50XCIsXG4gICAgICAgICAgICB1bml0c3R5bGU6IFwiaW50XCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NOYW1lID0gXCJsaXZlLW51bWJveFwiO1xuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBnZXQgdHJ1ZVN0ZXBzKCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1tYXgsIG1taW4sIHN0ZXBzLCBzdGVwIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBmdWxsID0gMTAwO1xuICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gdGhpcy5zdGF0ZS5lbnVtLmxlbmd0aCA6IHR5cGUgPT09IFwiaW50XCIgPyBtbWF4IC0gbW1pbiA6IGZ1bGw7XG4gICAgICAgIGlmIChzdGVwKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiB0aGlzLnN0YXRlLmVudW0ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBNYXRoLnJvdW5kKHN0ZXApKSwgbWF4U3RlcHMpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIHN0ZXApLCBtYXhTdGVwcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ZXBzKSByZXR1cm4gTWF0aC5taW4oc3RlcHMsIG1heFN0ZXBzKTtcbiAgICAgICAgcmV0dXJuIG1heFN0ZXBzO1xuICAgIH1cbiAgICBnZXQgZGlzdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IHZhbHVlIC8gdGhpcy5zdGF0ZS5lbnVtLmxlbmd0aCA6ICh2YWx1ZSAtIG1taW4pIC8gKG1tYXggLSBtbWluKTtcbiAgICB9XG4gICAgZ2V0IHN0ZXBSYW5nZSgpIHtcbiAgICAgICAgY29uc3QgeyB0eXBlLCBtbWF4LCBtbWluLCBzdGVwIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBmdWxsID0gMTAwO1xuICAgICAgICBpZiAoc3RlcCkgcmV0dXJuIHR5cGUgPT09IFwiZW51bVwiID8gZnVsbCAvIHRoaXMuc3RhdGUuZW51bS5sZW5ndGggOiB0eXBlID09PSBcImludFwiID8gTWF0aC5yb3VuZChzdGVwKSAvIChtbWF4IC0gbW1pbikgKiBmdWxsIDogc3RlcCAvIChtbWF4IC0gbW1pbikgKiBmdWxsO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgcmV0dXJuIGZ1bGwgLyB0cnVlU3RlcHM7XG4gICAgfVxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIGFjdGl2ZSxcbiAgICAgICAgICAgIGZvY3VzLFxuICAgICAgICAgICAgZm9udG5hbWUsXG4gICAgICAgICAgICBmb250c2l6ZSxcbiAgICAgICAgICAgIGZvbnRmYWNlLFxuICAgICAgICAgICAgYXBwZWFyYW5jZSxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBib3JkZXJjb2xvcixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0ZXh0Y29sb3IsXG4gICAgICAgICAgICB0cmljb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZXRyaWNvbG9yLFxuICAgICAgICAgICAgdHJpY29sb3IyLFxuICAgICAgICAgICAgYWN0aXZldHJpY29sb3IyLFxuICAgICAgICAgICAgYWN0aXZlc2xpZGVyY29sb3JcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2U7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IHRoaXMuZGlzcGxheVZhbHVlO1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgLy8gZHJhdyBiYWNrZ3JvdW5kXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBhY3RpdmViZ2NvbG9yO1xuICAgICAgICBjdHgucmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAvLyBkcmF3IGJvcmRlciAoZXZlbnR1YWxseSB3ZSBtaWdodCBuZWVkIHRvIHJlZGVmaW5lIHRoZSBzaGFwZSlcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGZvY3VzID8gZm9jdXNib3JkZXJjb2xvciA6IGJvcmRlcmNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgaWYgKGFwcGVhcmFuY2UgPT09IFwic2xpZGVyXCIgJiYgYWN0aXZlICYmIGRpc3RhbmNlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYWN0aXZlc2xpZGVyY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoMC41LCAwLjUsIGRpc3RhbmNlICogd2lkdGggLSAxLCBoZWlnaHQgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXBwZWFyYW5jZSA9PT0gXCJ0cmlhbmdsZVwiKSB7XG4gICAgICAgICAgICBjb25zdCB0cmlhbmdsZUhlaWdodCA9IDg7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYWN0aXZlID8gKGRpc3RhbmNlID8gYWN0aXZldHJpY29sb3IyIDogYWN0aXZldHJpY29sb3IpIDogKGRpc3RhbmNlID8gdHJpY29sb3IyIDogdHJpY29sb3IpO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh3aWR0aCAtIHRyaWFuZ2xlSGVpZ2h0IC0gMC41LCBoZWlnaHQgKiAwLjUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCAtIDAuNSwgMC41KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8od2lkdGggLSAwLjUsIGhlaWdodCAtIDAuNSk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRpc3BsYXkgdGhlIHRleHRcbiAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICAgIGN0eC5maWxsVGV4dChkaXNwbGF5VmFsdWUsIHdpZHRoICogMC41LCBoZWlnaHQgKiAwLjUsIHdpZHRoKTtcbiAgICB9XG4gICAgZ2V0VmFsdWVGcm9tRGVsdGEoZTogUG9pbnRlckRyYWdFdmVudCkge1xuICAgICAgICBjb25zdCB7IHR5cGUsIG1taW4sIG1tYXggfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHN0ZXBSYW5nZSA9IHRoaXMuc3RlcFJhbmdlO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgY29uc3Qgc3RlcCA9IHR5cGUgPT09IFwiZW51bVwiID8gMSA6ICh0aGlzLnN0YXRlLnN0ZXAgfHwgKG1tYXggLSBtbWluKSAvIHRydWVTdGVwcyk7XG4gICAgICAgIGNvbnN0IHByZXZTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gZS5wcmV2VmFsdWUgOiBlLnByZXZWYWx1ZSAvIHN0ZXA7XG4gICAgICAgIGNvbnN0IGRTdGVwcyA9IE1hdGgucm91bmQoKGUuZnJvbVkgLSBlLnkpIC8gc3RlcFJhbmdlKTtcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBNYXRoLm1pbih0cnVlU3RlcHMsIE1hdGgubWF4KDAsIHByZXZTdGVwcyArIGRTdGVwcykpO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiBzdGVwcztcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLnJvdW5kKHN0ZXBzICogc3RlcCArIG1taW4pO1xuICAgICAgICByZXR1cm4gc3RlcHMgKiBzdGVwICsgbW1pbjtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5faW5Ub3VjaCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tRGVsdGEoZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5zdGF0ZS52YWx1ZSkgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcblxuaW50ZXJmYWNlIExpdmVTbGlkZXJQcm9wcyBleHRlbmRzIExpdmVQcm9wcyB7XG4gICAgcmVsYXRpdmU/OiBib29sZWFuO1xuICAgIGZvbnRuYW1lPzogc3RyaW5nO1xuICAgIGZvbnRzaXplPzogbnVtYmVyO1xuICAgIGZvbnRmYWNlPzogXCJyZWd1bGFyXCIgfCBcImJvbGRcIiB8IFwiaXRhbGljXCIgfCBcImJvbGQgaXRhbGljXCI7XG4gICAgb3JpZW50YXRpb24/OiBcInZlcnRpY2FsXCIgfCBcImhvcml6b250YWxcIjtcbiAgICBzaG93bmFtZT86IGJvb2xlYW47XG4gICAgc2hvd251bWJlcj86IGJvb2xlYW47XG4gICAgc2xpZGVyY29sb3I/OiBzdHJpbmc7XG4gICAgdGV4dGNvbG9yPzogc3RyaW5nO1xuICAgIHRyaWJvcmRlcmNvbG9yPzogc3RyaW5nO1xuICAgIHRyaW9uY29sb3I/OiBzdHJpbmc7XG4gICAgdHJpY29sb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdmVTbGlkZXIgZXh0ZW5kcyBMaXZlQ29tcG9uZW50PExpdmVTbGlkZXJQcm9wcz4ge1xuICAgIHN0YXRpYyBnZXQgcHJvcHMoKTogTGl2ZVNsaWRlclByb3BzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLnByb3BzLFxuICAgICAgICAgICAgc2hvcnRuYW1lOiBcImxpdmUuc2xpZGVyXCIsXG4gICAgICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDkwLFxuICAgICAgICAgICAgZm9udG5hbWU6IFwiQXJpYWxcIixcbiAgICAgICAgICAgIGZvbnRzaXplOiAxMixcbiAgICAgICAgICAgIGZvbnRmYWNlOiBcInJlZ3VsYXJcIixcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICBzaG93bmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dudW1iZXI6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXJjb2xvcjogXCJyZ2JhKDQwLCA0MCwgNDAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0Y29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuICAgICAgICAgICAgdHJpYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiLFxuICAgICAgICAgICAgdHJpb25jb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDEpXCIsXG4gICAgICAgICAgICB0cmljb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICByZWxhdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBtbWluOiAwLFxuICAgICAgICAgICAgbW1heDogMTI3LFxuICAgICAgICAgICAgdHlwZTogXCJpbnRcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGFzc05hbWUgPSBcImxpdmUtc2xpZGVyXCI7XG4gICAgX2luVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpbnRlcmFjdGlvblJlY3Q6IG51bWJlcltdID0gWzAsIDAsIDAsIDBdO1xuXG4gICAgZ2V0IHRydWVTdGVwcygpIHtcbiAgICAgICAgY29uc3QgeyBvcmllbnRhdGlvbiwgdHlwZSwgbW1heCwgbW1pbiwgc3RlcHMsIHN0ZXAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGZ1bGwgPSB0aGlzLmludGVyYWN0aW9uUmVjdFtvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gMyA6IDJdO1xuICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHR5cGUgPT09IFwiZW51bVwiID8gdGhpcy5zdGF0ZS5lbnVtLmxlbmd0aCA6IHR5cGUgPT09IFwiaW50XCIgPyBtbWF4IC0gbW1pbiA6IGZ1bGw7XG4gICAgICAgIGlmIChzdGVwKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiB0aGlzLnN0YXRlLmVudW0ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiaW50XCIpIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKChtbWF4IC0gbW1pbikgLyBNYXRoLnJvdW5kKHN0ZXApKSwgbWF4U3RlcHMpO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGguZmxvb3IoKG1tYXggLSBtbWluKSAvIHN0ZXApLCBtYXhTdGVwcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ZXBzKSByZXR1cm4gTWF0aC5taW4oc3RlcHMsIG1heFN0ZXBzKTtcbiAgICAgICAgcmV0dXJuIG1heFN0ZXBzO1xuICAgIH1cbiAgICBnZXQgZGlzdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgbW1heCwgbW1pbiwgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiB0eXBlID09PSBcImVudW1cIiA/IHZhbHVlIC8gdGhpcy5zdGF0ZS5lbnVtLmxlbmd0aCA6ICh2YWx1ZSAtIG1taW4pIC8gKG1tYXggLSBtbWluKTtcbiAgICB9XG4gICAgZ2V0IHN0ZXBSYW5nZSgpIHtcbiAgICAgICAgY29uc3QgeyBvcmllbnRhdGlvbiwgdHlwZSwgbW1heCwgbW1pbiwgc3RlcCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgZnVsbCA9IHRoaXMuaW50ZXJhY3Rpb25SZWN0W29yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIgPyAzIDogMl07XG4gICAgICAgIGlmIChzdGVwKSByZXR1cm4gdHlwZSA9PT0gXCJlbnVtXCIgPyBmdWxsIC8gdGhpcy5zdGF0ZS5lbnVtLmxlbmd0aCA6IHR5cGUgPT09IFwiaW50XCIgPyBNYXRoLnJvdW5kKHN0ZXApIC8gKG1tYXggLSBtbWluKSAqIGZ1bGwgOiBzdGVwIC8gKG1tYXggLSBtbWluKSAqIGZ1bGw7XG4gICAgICAgIGNvbnN0IHRydWVTdGVwcyA9IHRoaXMudHJ1ZVN0ZXBzO1xuICAgICAgICByZXR1cm4gZnVsbCAvIHRydWVTdGVwcztcbiAgICB9XG4gICAgcGFpbnQoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgZm9udG5hbWUsXG4gICAgICAgICAgICBmb250c2l6ZSxcbiAgICAgICAgICAgIGZvbnRmYWNlLFxuICAgICAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgICAgICBzaG93bmFtZSxcbiAgICAgICAgICAgIHNob3dudW1iZXIsXG4gICAgICAgICAgICBzbGlkZXJjb2xvcixcbiAgICAgICAgICAgIHRleHRjb2xvcixcbiAgICAgICAgICAgIHRyaWJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdHJpb25jb2xvcixcbiAgICAgICAgICAgIHRyaWNvbG9yLFxuICAgICAgICAgICAgc2hvcnRuYW1lXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gMC41O1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gODtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlO1xuICAgICAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSB0aGlzLmRpc3BsYXlWYWx1ZTtcblxuICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHNsaWRlcmNvbG9yO1xuXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHdpZHRoICogMC41LCBmb250c2l6ZSArIHBhZGRpbmcpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCAqIDAuNSwgaGVpZ2h0IC0gKGZvbnRzaXplICsgcGFkZGluZykpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbldpZHRoID0gd2lkdGggKiAwLjU7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdCA9IFtcbiAgICAgICAgICAgICAgICB3aWR0aCAqIDAuNSAtIGludGVyYWN0aW9uV2lkdGggKiAwLjUsXG4gICAgICAgICAgICAgICAgZm9udHNpemUgKyBwYWRkaW5nLFxuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uV2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0IC0gMiAqIChmb250c2l6ZSArIHBhZGRpbmcpXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRyaWJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgY29uc3QgdHJpT3JpZ2luOiBbbnVtYmVyLCBudW1iZXJdID0gW1xuICAgICAgICAgICAgICAgIHdpZHRoICogMC41ICsgbGluZVdpZHRoICogMC41ICsgMC41LFxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzFdIC0gNCArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzNdICogKDEgLSBkaXN0YW5jZSlcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgubW92ZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgNCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDgsIHRyaU9yaWdpblsxXSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSArIDgsIHRyaU9yaWdpblsxXSArIDgpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh0cmlPcmlnaW5bMF0sIHRyaU9yaWdpblsxXSArIDQpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5faW5Ub3VjaCA/IHRyaW9uY29sb3IgOiB0cmljb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Zm9udGZhY2UgPT09IFwicmVndWxhclwiID8gXCJcIiA6IGZvbnRmYWNlfSAke2ZvbnRzaXplfXB4ICR7Zm9udG5hbWV9LCBzYW5zLXNlcmlmYDtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRleHRjb2xvcjtcbiAgICAgICAgICAgIGlmIChzaG93bmFtZSkgY3R4LmZpbGxUZXh0KHNob3J0bmFtZSwgd2lkdGggKiAwLjUsIGZvbnRzaXplLCB3aWR0aCk7XG4gICAgICAgICAgICBpZiAoc2hvd251bWJlcikgY3R4LmZpbGxUZXh0KGRpc3BsYXlWYWx1ZSwgd2lkdGggKiAwLjUsIGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhwYWRkaW5nLCBoZWlnaHQgKiAwLjUpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCAtIHBhZGRpbmcsIGhlaWdodCAqIDAuNSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uV2lkdGggPSBoZWlnaHQgKiAwLjU7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uUmVjdCA9IFtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgICAgICAgIGhlaWdodCAqIDAuNSAtIGludGVyYWN0aW9uV2lkdGggKiAwLjUsXG4gICAgICAgICAgICAgICAgd2lkdGggLSAyICogcGFkZGluZyxcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbldpZHRoXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRyaWJvcmRlcmNvbG9yO1xuICAgICAgICAgICAgY29uc3QgdHJpT3JpZ2luOiBbbnVtYmVyLCBudW1iZXJdID0gW1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdICsgdGhpcy5pbnRlcmFjdGlvblJlY3RbMl0gKiBkaXN0YW5jZSAtIDQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICogMC41ICsgbGluZVdpZHRoICogMC41ICsgMlxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odHJpT3JpZ2luWzBdLCB0cmlPcmlnaW5bMV0gKyA4KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgNCwgdHJpT3JpZ2luWzFdKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8odHJpT3JpZ2luWzBdICsgOCwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHgubGluZVRvKHRyaU9yaWdpblswXSwgdHJpT3JpZ2luWzFdICsgOCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLl9pblRvdWNoID8gdHJpb25jb2xvciA6IHRyaWNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dGNvbG9yO1xuICAgICAgICAgICAgaWYgKHNob3duYW1lKSBjdHguZmlsbFRleHQoc2hvcnRuYW1lLCB3aWR0aCAqIDAuNSwgZm9udHNpemUsIHdpZHRoKTtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgIGlmIChzaG93bnVtYmVyKSBjdHguZmlsbFRleHQoZGlzcGxheVZhbHVlLCA0LCBoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRWYWx1ZUZyb21Qb3MoZTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XG4gICAgICAgIGNvbnN0IHsgb3JpZW50YXRpb24sIHR5cGUsIG1taW4sIG1tYXggfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHN0ZXBSYW5nZSA9IHRoaXMuc3RlcFJhbmdlO1xuICAgICAgICBjb25zdCB0cnVlU3RlcHMgPSB0aGlzLnRydWVTdGVwcztcbiAgICAgICAgY29uc3Qgc3RlcCA9IHRoaXMuc3RhdGUuc3RlcCB8fCAobW1heCAtIG1taW4pIC8gdHJ1ZVN0ZXBzO1xuICAgICAgICBsZXQgc3RlcHMgPSBNYXRoLnJvdW5kKChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiID8gdGhpcy5pbnRlcmFjdGlvblJlY3RbM10gLSAoZS55IC0gdGhpcy5pbnRlcmFjdGlvblJlY3RbMV0pIDogZS54IC0gdGhpcy5pbnRlcmFjdGlvblJlY3RbMF0pIC8gc3RlcFJhbmdlKTtcbiAgICAgICAgc3RlcHMgPSBNYXRoLm1pbih0cnVlU3RlcHMsIE1hdGgubWF4KDAsIHN0ZXBzKSk7XG4gICAgICAgIGlmICh0eXBlID09PSBcImVudW1cIikgcmV0dXJuIHN0ZXBzO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIE1hdGgucm91bmQoc3RlcHMgKiBzdGVwICsgbW1pbik7XG4gICAgICAgIHJldHVybiBzdGVwcyAqIHN0ZXAgKyBtbWluO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRG93biA9IChlOiBQb2ludGVyRG93bkV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGUueCA8IHRoaXMuaW50ZXJhY3Rpb25SZWN0WzBdXG4gICAgICAgICAgICB8fCBlLnggPiB0aGlzLmludGVyYWN0aW9uUmVjdFswXSArIHRoaXMuaW50ZXJhY3Rpb25SZWN0WzJdXG4gICAgICAgICAgICB8fCBlLnkgPCB0aGlzLmludGVyYWN0aW9uUmVjdFsxXVxuICAgICAgICAgICAgfHwgZS55ID4gdGhpcy5pbnRlcmFjdGlvblJlY3RbMV0gKyB0aGlzLmludGVyYWN0aW9uUmVjdFszXVxuICAgICAgICApIHJldHVybjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlRnJvbVBvcyhlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB2YWx1ZSkgdGhpcy5zZXRWYWx1ZSh0aGlzLmdldFZhbHVlRnJvbVBvcyhlKSk7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSB0cnVlO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyRHJhZyA9IChlOiBQb2ludGVyRHJhZ0V2ZW50KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5faW5Ub3VjaCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tUG9zKGUpO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMuc3RhdGUudmFsdWUpIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5cbmludGVyZmFjZSBMaXZlVGFiUHJvcHMgZXh0ZW5kcyBMaXZlUHJvcHMge1xuICAgIGZvbnRuYW1lPzogc3RyaW5nO1xuICAgIGZvbnRzaXplPzogbnVtYmVyO1xuICAgIGZvbnRmYWNlPzogXCJyZWd1bGFyXCIgfCBcImJvbGRcIiB8IFwiaXRhbGljXCIgfCBcImJvbGQgaXRhbGljXCI7XG4gICAgYWN0aXZlYmdjb2xvcj86IHN0cmluZztcbiAgICBhY3RpdmViZ29uY29sb3I/OiBzdHJpbmc7XG4gICAgYmdjb2xvcj86IHN0cmluZztcbiAgICBiZ29uY29sb3I/OiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I/OiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcj86IHN0cmluZztcbiAgICB0ZXh0Y29sb3I/OiBzdHJpbmc7XG4gICAgdGV4dG9uY29sb3I/OiBzdHJpbmc7XG4gICAgYWN0aXZldGV4dGNvbG9yPzogc3RyaW5nO1xuICAgIGFjdGl2ZXRleHRvbmNvbG9yPzogc3RyaW5nO1xuICAgIG1vZGU/OiBcImVxdWFsXCIgfCBcInByb3BvcnRpb25hbFwiO1xuICAgIHNwYWNpbmdfeD86IG51bWJlcjtcbiAgICBzcGFjaW5nX3k/OiBudW1iZXI7XG4gICAgbXVsdGlsaW5lPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVRhYiBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZVRhYlByb3BzPiB7XG4gICAgc3RhdGljIGdldCBwcm9wcygpOiBMaXZlVGFiUHJvcHMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucHJvcHMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS50YWJcIixcbiAgICAgICAgICAgIHdpZHRoOiA5MCxcbiAgICAgICAgICAgIGhlaWdodDogNDUsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEwLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3I6IFwicmdiYSgyNTUsIDE4MSwgNTAsIDEpXCIsXG4gICAgICAgICAgICBiZ2NvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIGJnb25jb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDkwLCA5MCwgOTAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0b25jb2xvcjogXCJyZ2JhKDkwLCA5MCwgOTAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0Y29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZldGV4dG9uY29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuICAgICAgICAgICAgbW9kZTogXCJlcXVhbFwiLFxuICAgICAgICAgICAgZW51bTogW1wib25lXCIsIFwidHdvXCIsIFwidGhyZWVcIl0sXG4gICAgICAgICAgICBzcGFjaW5nX3g6IDYsXG4gICAgICAgICAgICBzcGFjaW5nX3k6IDYsXG4gICAgICAgICAgICBtdWx0aWxpbmU6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NOYW1lID0gXCJsaXZlLXRhYlwiO1xuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG4gICAgdGFiUmVjdHM6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdW10gPSBbXTtcblxuICAgIGdldFRhYlJlY3RzKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIG11bHRpbGluZSxcbiAgICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgICBzcGFjaW5nX3gsXG4gICAgICAgICAgICBzcGFjaW5nX3lcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGVudW1zID0gdGhpcy5zdGF0ZS5lbnVtO1xuICAgICAgICBjb25zdCBtYXJnaW4gPSA0O1xuICAgICAgICBjb25zdCBtaW5IZWlnaHQgPSAxMDtcbiAgICAgICAgY29uc3QgY291bnQgPSBlbnVtcy5sZW5ndGg7XG4gICAgICAgIGxldCBjb3VudFBlckxpbmUgPSBjb3VudDtcbiAgICAgICAgbGV0IGxpbmVzID0gMTtcbiAgICAgICAgbGV0IHN0ZXAgPSBoZWlnaHQgLyBsaW5lcztcbiAgICAgICAgbGV0IGludGVydmFsID0gMDtcbiAgICAgICAgbGV0IHJlY3RXaWR0aCA9IDA7XG4gICAgICAgIGNvbnN0IHNwYWNpbmdYID0gc3BhY2luZ194ICogMC41O1xuICAgICAgICBjb25zdCBzcGFjaW5nWSA9IHNwYWNpbmdfeSAqIDAuNTtcblxuICAgICAgICBpZiAobXVsdGlsaW5lICYmIGhlaWdodCA+PSAyICogbWluSGVpZ2h0KSB7XG4gICAgICAgICAgICBsaW5lcyA9IE1hdGgubWF4KDEsIE1hdGgubWluKGNvdW50LCBNYXRoLmZsb29yKGhlaWdodCAvIG1pbkhlaWdodCkpKTtcbiAgICAgICAgICAgIGNvdW50UGVyTGluZSA9IE1hdGguY2VpbChjb3VudCAvIGxpbmVzKTtcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3Mgbm90IGVub3VnaCBoZWlnaHQsIGluY3JlYXNlIHRoZSBudW1iZXIgb2YgdGFicyBwZXIgcm93XG4gICAgICAgICAgICB3aGlsZSAobGluZXMgKiBjb3VudFBlckxpbmUgPCBjb3VudCkge1xuICAgICAgICAgICAgICAgIGNvdW50UGVyTGluZSsrO1xuICAgICAgICAgICAgICAgIGlmIChsaW5lcyA+IDEpIGxpbmVzLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSdzIGV4dHJhIGhlaWdodCwgcmVkdWNlIHRoZSBudW1iZXIgb2Ygcm93c1xuICAgICAgICAgICAgd2hpbGUgKGxpbmVzICogY291bnRQZXJMaW5lID4gY291bnQgJiYgKGxpbmVzIC0gMSkgKiBjb3VudFBlckxpbmUgPj0gY291bnQpIHtcbiAgICAgICAgICAgICAgICBsaW5lcy0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RlcCA9IGhlaWdodCAvIGxpbmVzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb2RlID09PSBcImVxdWFsXCIpIHtcbiAgICAgICAgICAgIGludGVydmFsID0gd2lkdGggLyBjb3VudFBlckxpbmU7XG4gICAgICAgICAgICByZWN0V2lkdGggPSBpbnRlcnZhbCAtIHNwYWNpbmdYO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJSZWN0c1tpXSA9IFtcbiAgICAgICAgICAgICAgICAgICAgKGkgJSBjb3VudFBlckxpbmUpICogaW50ZXJ2YWwgKyBzcGFjaW5nWCAqIDAuNSxcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihpIC8gY291bnRQZXJMaW5lKSAqIHN0ZXAgKyBzcGFjaW5nWSAqIDAuNSxcbiAgICAgICAgICAgICAgICAgICAgcmVjdFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAoaGVpZ2h0IC8gbGluZXMpIC0gc3BhY2luZ1lcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGV4dFdpZHRocyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgc3BhY2UgPSB3aWR0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gaSAqIGNvdW50UGVyTGluZTsgaiA8IE1hdGgubWluKChpICsgMSkgKiBjb3VudFBlckxpbmUsIGNvdW50KTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHREaW1lbnNpb25zID0gdGhpcy5jdHgubWVhc3VyZVRleHQoZW51bXNbal0pO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0V2lkdGhzW2pdID0gdGV4dERpbWVuc2lvbnMud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsICs9IHRleHRXaWR0aHNbal07XG4gICAgICAgICAgICAgICAgICAgIHNwYWNlIC09IDIgKiBtYXJnaW4gKyBzcGFjaW5nWDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHVzZWQgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpICogY291bnRQZXJMaW5lOyBqIDwgTWF0aC5taW4oKGkgKyAxKSAqIGNvdW50UGVyTGluZSwgY291bnQpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjdFNwYWNlID0gdGV4dFdpZHRoc1tqXSAvIHRvdGFsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlJlY3RzW2pdID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlZCArIHNwYWNpbmdYICogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgaSAqIHN0ZXAgKyBzcGFjaW5nWSAqIDAuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlICogcmVjdFNwYWNlICsgMiAqIG1hcmdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCAvIGxpbmVzIC0gc3BhY2luZ1lcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgdXNlZCArPSB0aGlzLnRhYlJlY3RzW2pdWzJdICsgc3BhY2luZ1g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRhYlJlY3RzO1xuICAgIH1cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgZm9jdXMsXG4gICAgICAgICAgICBmb250bmFtZSxcbiAgICAgICAgICAgIGZvbnRzaXplLFxuICAgICAgICAgICAgZm9udGZhY2UsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yLFxuICAgICAgICAgICAgYWN0aXZlYmdvbmNvbG9yLFxuICAgICAgICAgICAgYmdjb2xvcixcbiAgICAgICAgICAgIGJnb25jb2xvcixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNib3JkZXJjb2xvcixcbiAgICAgICAgICAgIHRleHRjb2xvcixcbiAgICAgICAgICAgIHRleHRvbmNvbG9yLFxuICAgICAgICAgICAgYWN0aXZldGV4dGNvbG9yLFxuICAgICAgICAgICAgYWN0aXZldGV4dG9uY29sb3IsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBlbnVtcyA9IHRoaXMuc3RhdGUuZW51bTtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IHRhYlJlY3RzID0gdGhpcy5nZXRUYWJSZWN0cygpO1xuXG4gICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMC41O1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcblxuICAgICAgICBjb25zdCBidXR0b25Cb3JkZXJDb2xvciA9IGZvY3VzID8gZm9jdXNib3JkZXJjb2xvciA6IGJvcmRlcmNvbG9yO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b25CZ0NvbG9yID0gYWN0aXZlID8gKHZhbHVlID09PSBpID8gYWN0aXZlYmdvbmNvbG9yIDogYWN0aXZlYmdjb2xvcikgOiAodmFsdWUgPT09IGkgPyBiZ29uY29sb3IgOiBiZ2NvbG9yKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBidXR0b25CZ0NvbG9yO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LnJlY3QoLi4udGFiUmVjdHNbaV0pO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGJ1dHRvbkJvcmRlckNvbG9yO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICBjdHguZm9udCA9IGAke2ZvbnRmYWNlID09PSBcInJlZ3VsYXJcIiA/IFwiXCIgOiBmb250ZmFjZX0gJHtmb250c2l6ZX1weCAke2ZvbnRuYW1lfSwgc2Fucy1zZXJpZmA7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGFjdGl2ZSA/ICh2YWx1ZSA9PT0gaSA/IGFjdGl2ZXRleHRvbmNvbG9yIDogYWN0aXZldGV4dGNvbG9yKSA6ICh2YWx1ZSA9PT0gaSA/IHRleHRvbmNvbG9yIDogdGV4dGNvbG9yKTtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChlbnVtc1tpXSwgdGFiUmVjdHNbaV1bMF0gKyB0YWJSZWN0c1tpXVsyXSAqIDAuNSwgdGFiUmVjdHNbaV1bMV0gKyB0YWJSZWN0c1tpXVszXSAqIDAuNSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoZTogUG9pbnRlckRvd25FdmVudCkgPT4ge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYlJlY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGhpcy50YWJSZWN0c1tpXTtcbiAgICAgICAgICAgIGlmIChlLnggPj0gcmVjdFswXSAmJiBlLnggPD0gcmVjdFsyXSArIHJlY3RbMF0gJiYgZS55ID49IHJlY3RbMV0gJiYgZS55IDw9IHJlY3RbM10gKyByZWN0WzFdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRyYWcgPSAoZTogUG9pbnRlckRyYWdFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJEb3duKGUpO1xuICAgIH1cbiAgICBoYW5kbGVQb2ludGVyVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luVG91Y2ggPSBmYWxzZTtcbiAgICB9XG4gICAgcmVzZXRQb2ludGVycygpIHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExpdmVDb21wb25lbnQgfSBmcm9tIFwiLi9CYXNlXCI7XG5pbXBvcnQgeyBmaWxsUm91bmRlZFJlY3QgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5pbnRlcmZhY2UgTGl2ZVRleHRQcm9wcyBleHRlbmRzIExpdmVQcm9wcyB7XG4gICAgZm9udG5hbWU/OiBzdHJpbmc7XG4gICAgZm9udHNpemU/OiBudW1iZXI7XG4gICAgZm9udGZhY2U/OiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBhY3RpdmViZ2NvbG9yPzogc3RyaW5nO1xuICAgIGFjdGl2ZWJnb25jb2xvcj86IHN0cmluZztcbiAgICBiZ2NvbG9yPzogc3RyaW5nO1xuICAgIGJnb25jb2xvcj86IHN0cmluZztcbiAgICBib3JkZXJjb2xvcj86IHN0cmluZztcbiAgICBmb2N1c2JvcmRlcmNvbG9yPzogc3RyaW5nO1xuICAgIHRleHRjb2xvcj86IHN0cmluZztcbiAgICB0ZXh0b25jb2xvcj86IHN0cmluZztcbiAgICBhY3RpdmV0ZXh0Y29sb3I/OiBzdHJpbmc7XG4gICAgYWN0aXZldGV4dG9uY29sb3I/OiBzdHJpbmc7XG4gICAgdGV4dD86IHN0cmluZztcbiAgICB0ZXh0b24/OiBzdHJpbmc7XG4gICAgbW9kZT86IFwiYnV0dG9uXCIgfCBcInRvZ2dsZVwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXZlVGV4dCBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZVRleHRQcm9wcz4ge1xuICAgIHN0YXRpYyBnZXQgcHJvcHMoKTogTGl2ZVRleHRQcm9wcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5wcm9wcyxcbiAgICAgICAgICAgIHNob3J0bmFtZTogXCJsaXZlLnRleHRcIixcbiAgICAgICAgICAgIHdpZHRoOiA5MCxcbiAgICAgICAgICAgIGhlaWdodDogNDUsXG4gICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgZm9udHNpemU6IDEwLFxuICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcjogXCJyZ2JhKDE2NSwgMTY1LCAxNjUsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3I6IFwicmdiYSgyNTUsIDE4MSwgNTAsIDEpXCIsXG4gICAgICAgICAgICBiZ2NvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIGJnb25jb2xvcjogXCJyZ2JhKDE5NSwgMTk1LCAxOTUsIDEpXCIsXG4gICAgICAgICAgICBib3JkZXJjb2xvcjogXCJyZ2JhKDgwLCA4MCwgODAsIDEpXCIsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDkwLCA5MCwgOTAsIDEpXCIsXG4gICAgICAgICAgICB0ZXh0b25jb2xvcjogXCJyZ2JhKDkwLCA5MCwgOTAsIDEpXCIsXG4gICAgICAgICAgICBhY3RpdmV0ZXh0Y29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuICAgICAgICAgICAgYWN0aXZldGV4dG9uY29sb3I6IFwicmdiYSgwLCAwLCAwLCAxKVwiLFxuICAgICAgICAgICAgdGV4dDogXCJBXCIsXG4gICAgICAgICAgICB0ZXh0b246IFwiQlwiLFxuICAgICAgICAgICAgbW9kZTogXCJ0b2dnbGVcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGFzc05hbWUgPSBcImxpdmUtdGV4dFwiO1xuICAgIF9pblRvdWNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgZm9jdXMsXG4gICAgICAgICAgICBmb250bmFtZSxcbiAgICAgICAgICAgIGZvbnRzaXplLFxuICAgICAgICAgICAgZm9udGZhY2UsXG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgdGV4dG9uLFxuICAgICAgICAgICAgYWN0aXZlYmdjb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZWJnb25jb2xvcixcbiAgICAgICAgICAgIGJnY29sb3IsXG4gICAgICAgICAgICBiZ29uY29sb3IsXG4gICAgICAgICAgICBib3JkZXJjb2xvcixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3IsXG4gICAgICAgICAgICB0ZXh0Y29sb3IsXG4gICAgICAgICAgICB0ZXh0b25jb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRjb2xvcixcbiAgICAgICAgICAgIGFjdGl2ZXRleHRvbmNvbG9yLFxuICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMC41O1xuXG4gICAgICAgIGN0eC5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcblxuICAgICAgICBjb25zdCBidXR0b25CZ0NvbG9yID0gYWN0aXZlID8gKHZhbHVlID8gYWN0aXZlYmdvbmNvbG9yIDogYWN0aXZlYmdjb2xvcikgOiAodmFsdWUgPyBiZ29uY29sb3IgOiBiZ2NvbG9yKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQm9yZGVyQ29sb3IgPSBmb2N1cyA/IGZvY3VzYm9yZGVyY29sb3IgOiBib3JkZXJjb2xvcjtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gYnV0dG9uQmdDb2xvcjtcbiAgICAgICAgaWYgKG1vZGUgPT09IFwiYnV0dG9uXCIpIHtcbiAgICAgICAgICAgIGZpbGxSb3VuZGVkUmVjdChjdHgsIDAuNSwgMC41LCB3aWR0aCAtIDEsIGhlaWdodCAtIDEsIGhlaWdodCAqIDAuNSAtIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LnJlY3QoMC41LCAwLjUsIHdpZHRoIC0gMSwgaGVpZ2h0IC0gMSk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAwLjU7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGJ1dHRvbkJvcmRlckNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgY3R4LmZvbnQgPSBgJHtmb250ZmFjZSA9PT0gXCJyZWd1bGFyXCIgPyBcIlwiIDogZm9udGZhY2V9ICR7Zm9udHNpemV9cHggJHtmb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBhY3RpdmUgPyAodmFsdWUgPyBhY3RpdmV0ZXh0b25jb2xvciA6IGFjdGl2ZXRleHRjb2xvcikgOiAodmFsdWUgPyB0ZXh0b25jb2xvciA6IHRleHRjb2xvcik7XG4gICAgICAgIGN0eC5maWxsVGV4dCh2YWx1ZSAmJiBtb2RlID09PSBcInRvZ2dsZVwiID8gdGV4dG9uIDogdGV4dCwgd2lkdGggKiAwLjUsIGhlaWdodCAqIDAuNSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHZhbHVlLCBtb2RlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShtb2RlID09PSBcImJ1dHRvblwiID8gMSA6IDEgLSB2YWx1ZSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5faW5Ub3VjaCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tb2RlID09PSBcImJ1dHRvblwiKSB0aGlzLnNldFZhbHVlKDApO1xuICAgIH1cbiAgICByZXNldFBvaW50ZXJzKCkge1xuICAgICAgICB0aGlzLl9pblRvdWNoID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTGl2ZUNvbXBvbmVudCB9IGZyb20gXCIuL0Jhc2VcIjtcblxuaW50ZXJmYWNlIExpdmVUb2dnbGVQcm9wcyBleHRlbmRzIExpdmVQcm9wcyB7XG4gICAgYWN0aXZlYmdjb2xvcj86IHN0cmluZztcbiAgICBhY3RpdmViZ29uY29sb3I/OiBzdHJpbmc7XG4gICAgYmdjb2xvcj86IHN0cmluZztcbiAgICBiZ29uY29sb3I/OiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I/OiBzdHJpbmc7XG4gICAgZm9jdXNib3JkZXJjb2xvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVRvZ2dsZSBleHRlbmRzIExpdmVDb21wb25lbnQ8TGl2ZVRvZ2dsZVByb3BzPiB7XG4gICAgc3RhdGljIGdldCBwcm9wcygpOiBMaXZlVG9nZ2xlUHJvcHMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIucHJvcHMsXG4gICAgICAgICAgICBzaG9ydG5hbWU6IFwibGl2ZS50b2dnbGVcIixcbiAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgIGhlaWdodDogMTUsXG4gICAgICAgICAgICBhY3RpdmViZ2NvbG9yOiBcInJnYmEoMTY1LCAxNjUsIDE2NSwgMSlcIixcbiAgICAgICAgICAgIGFjdGl2ZWJnb25jb2xvcjogXCJyZ2JhKDI1NSwgMTgxLCA1MCwgMSlcIixcbiAgICAgICAgICAgIGJnY29sb3I6IFwicmdiYSgxNjUsIDE2NSwgMTY1LCAxKVwiLFxuICAgICAgICAgICAgYmdvbmNvbG9yOiBcInJnYmEoMTk1LCAxOTUsIDE5NSwgMSlcIixcbiAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgIGZvY3VzYm9yZGVyY29sb3I6IFwicmdiYSg4MCwgODAsIDgwLCAxKVwiXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNsYXNzTmFtZSA9IFwibGl2ZS10b2dnbGVcIjtcblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBhY3RpdmUsXG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGFjdGl2ZWJnY29sb3IsXG4gICAgICAgICAgICBhY3RpdmViZ29uY29sb3IsXG4gICAgICAgICAgICBiZ2NvbG9yLFxuICAgICAgICAgICAgYmdvbmNvbG9yLFxuICAgICAgICAgICAgYm9yZGVyY29sb3IsXG4gICAgICAgICAgICBmb2N1c2JvcmRlcmNvbG9yLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cbiAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSAwLjU7XG5cbiAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgICAgICBjdHguY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkJnQ29sb3IgPSBhY3RpdmUgPyAodmFsdWUgPyBhY3RpdmViZ29uY29sb3IgOiBhY3RpdmViZ2NvbG9yKSA6ICh2YWx1ZSA/IGJnb25jb2xvciA6IGJnY29sb3IpO1xuICAgICAgICBjb25zdCBidXR0b25Cb3JkZXJDb2xvciA9IGZvY3VzID8gZm9jdXNib3JkZXJjb2xvciA6IGJvcmRlcmNvbG9yO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBidXR0b25CZ0NvbG9yO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5yZWN0KGJvcmRlcldpZHRoLCBib3JkZXJXaWR0aCwgd2lkdGggLSAyICogYm9yZGVyV2lkdGgsIGhlaWdodCAtIDIgKiBib3JkZXJXaWR0aCk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGJ1dHRvbkJvcmRlckNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLnNldFZhbHVlKDEgLSB2YWx1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IExpdmVCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgTGl2ZVNsaWRlciBmcm9tIFwiLi9TbGlkZXJcIjtcbmltcG9ydCBMaXZlRGlhbCBmcm9tIFwiLi9EaWFsXCI7XG5pbXBvcnQgTGl2ZVRvZ2dsZSBmcm9tIFwiLi9Ub2dnbGVcIjtcbmltcG9ydCBMaXZlVGV4dCBmcm9tIFwiLi9UZXh0XCI7XG5pbXBvcnQgTGl2ZU51bWJveCBmcm9tIFwiLi9OdW1ib3hcIjtcbmltcG9ydCBMaXZlVGFiIGZyb20gXCIuL1RhYlwiO1xuaW1wb3J0IExpdmVNZXRlciBmcm9tIFwiLi9NZXRlclwiO1xuXG5leHBvcnQgeyBMaXZlQnV0dG9uLCBMaXZlU2xpZGVyLCBMaXZlRGlhbCwgTGl2ZVRvZ2dsZSwgTGl2ZVRleHQsIExpdmVOdW1ib3gsIExpdmVUYWIsIExpdmVNZXRlciB9O1xuIiwiZXhwb3J0IGNvbnN0IHRvTUlESSA9IChmOiBudW1iZXIpID0+IFtcIkNcIiwgXCJDI1wiLCBcIkRcIiwgXCJEI1wiLCBcIkVcIiwgXCJGXCIsIFwiRiNcIiwgXCJHXCIsIFwiRyNcIiwgXCJBXCIsIFwiQSNcIiwgXCJCXCJdWyhmICUgMTIgKyAxMikgJSAxMl0gKyBNYXRoLnJvdW5kKGYgLyAxMiAtIDIpO1xuZXhwb3J0IGNvbnN0IHRvUmFkID0gKGRlZ3JlZXM6IG51bWJlcikgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG5leHBvcnQgY29uc3QgYXRvZGIgPSAoYTogbnVtYmVyKSA9PiAyMCAqIE1hdGgubG9nMTAoYSk7XG5leHBvcnQgY29uc3QgZGJ0b2EgPSAoZGI6IG51bWJlcikgPT4gMTAgKiogKGRiIC8gMjApO1xuZXhwb3J0IGNvbnN0IHJvdW5kZWRSZWN0ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJhZGl1czogbnVtYmVyIHwgbnVtYmVyW10pID0+IHtcbiAgICBjb25zdCByYWRpaSA9IFswLCAwLCAwLCAwXTtcbiAgICBpZiAodHlwZW9mIHJhZGl1cyA9PT0gXCJudW1iZXJcIikgcmFkaWkuZmlsbChyYWRpdXMpO1xuICAgIGVsc2UgcmFkaXVzLmZvckVhY2goKHYsIGkpID0+IHJhZGlpW2ldID0gdik7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCArIHJhZGlpWzBdLCB5KTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGlpWzFdLCB5KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGlpWzFdKTtcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGlpWzJdKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGlpWzJdLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgubGluZVRvKHggKyByYWRpaVszXSwgeSArIGhlaWdodCk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGlpWzNdKTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpaVswXSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGlpWzBdLCB5KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xufTtcbmV4cG9ydCBjb25zdCBmaWxsUm91bmRlZFJlY3QgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmFkaXVzOiBudW1iZXIgfCBudW1iZXJbXSkgPT4ge1xuICAgIGNvbnN0IHJhZGlpID0gWzAsIDAsIDAsIDBdO1xuICAgIGlmICh0eXBlb2YgcmFkaXVzID09PSBcIm51bWJlclwiKSByYWRpaS5maWxsKHJhZGl1cyk7XG4gICAgZWxzZSByYWRpdXMuZm9yRWFjaCgodiwgaSkgPT4gcmFkaWlbaV0gPSB2KTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4ICsgcmFkaWlbMF0sIHkpO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoIC0gcmFkaWlbMV0sIHkpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaWlbMV0pO1xuICAgIGN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaWlbMl0pO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCwgeCArIHdpZHRoIC0gcmFkaWlbMl0sIHkgKyBoZWlnaHQpO1xuICAgIGN0eC5saW5lVG8oeCArIHJhZGlpWzNdLCB5ICsgaGVpZ2h0KTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaWlbM10pO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIHJhZGlpWzBdKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaWlbMF0sIHkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xufTtcbmV4cG9ydCBjb25zdCBnZXREaXNwbGF5VmFsdWUgPSAodmFsdWU6IG51bWJlciwgdHlwZTogc3RyaW5nLCB1bml0c3R5bGU6IHN0cmluZywgdW5pdHM6IHN0cmluZywgZW51bXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgaWYgKHR5cGUgPT09IFwiZW51bVwiKSByZXR1cm4gZW51bXNbdmFsdWVdO1xuICAgIGlmICh1bml0c3R5bGUgPT09IFwiaW50XCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKDApO1xuICAgIGlmICh1bml0c3R5bGUgPT09IFwiZmxvYXRcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQoMik7XG4gICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJ0aW1lXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiBtc1wiO1xuICAgIGlmICh1bml0c3R5bGUgPT09IFwiaGVydHpcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIEh6XCI7XG4gICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJkZWNpYmVsXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiBkQlwiO1xuICAgIGlmICh1bml0c3R5bGUgPT09IFwiJVwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgJVwiO1xuICAgIGlmICh1bml0c3R5bGUgPT09IFwicGFuXCIpIHJldHVybiB2YWx1ZSA9PT0gMCA/IFwiQ1wiIDogKHR5cGUgPT09IFwiaW50XCIgPyBNYXRoLmFicyh2YWx1ZSkgOiBNYXRoLmFicyh2YWx1ZSkudG9GaXhlZCgyKSkgKyAodmFsdWUgPCAwID8gXCIgTFwiIDogXCIgUlwiKTtcbiAgICBpZiAodW5pdHN0eWxlID09PSBcInNlbWl0b25lc1wiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgc3RcIjtcbiAgICBpZiAodW5pdHN0eWxlID09PSBcIm1pZGlcIikgcmV0dXJuIHRvTUlESSh2YWx1ZSk7XG4gICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJjdXN0b21cIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIFwiICsgdW5pdHM7XG4gICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJuYXRpdmVcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKTtcbiAgICByZXR1cm4gXCJOL0FcIjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=