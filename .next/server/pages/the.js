module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/the.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/the.js":
/*!**********************!*\
  !*** ./pages/the.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Albert\\Documents\\BuiltByReact\\tutorials\\styledcolorscheme\\pages\\the.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Div = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "the__Div",
  componentId: "sc-1b7glw7-0"
})(["max-width:1200px;margin:0 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;background:", ";.input-btns{color:", ";}.title{color:", ";}.paragraph{color:", ";}"], props => props.bg, props => props.text, props => props.text, props => props.text);

const Index = () => {
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("blue");
  let bg = "";
  let text = "";

  if (theme === "red") {
    text = "#ad2a1a";
    bg = "#EFCFB3";
  } else if (theme === "black") {
    text = "black";
    bg = "white";
  } else if (theme === "blue") {
    text = "#A8E5FF";
    bg = "#222233";
  }

  return __jsx(Div, {
    text: text,
    bg: bg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "input-btns",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "radio",
    name: "theme",
    id: "red",
    value: "red",
    onChange: e => {
      setTheme(e.target.value);
    },
    checked: theme === "red",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), "red", __jsx("input", {
    type: "radio",
    name: "theme",
    id: "black",
    value: "black",
    onChange: e => {
      setTheme(e.target.value);
    },
    checked: theme === "black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), "black", __jsx("input", {
    type: "radio",
    name: "theme",
    id: "blue",
    value: "blue",
    onChange: e => {
      setTheme(e.target.value);
    },
    checked: theme === "blue",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), "blue"), __jsx("h1", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, "This is the greatest article ever written!"), __jsx("p", {
    className: "paragraph",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae perferendis cumque fuga beatae suscipit alias dolores, sunt quos quod officia sint accusantium laborum a consequuntur dignissimos ipsum debitis. Suscipit dignissimos tempora doloremque quae maxime odio optio error a rem illum impedit nobis dolore, ut, consectetur ea harum perferendis repudiandae placeat!"), __jsx("p", {
    className: "paragraph",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae perferendis cumque fuga beatae suscipit alias dolores, sunt quos quod officia sint accusantium laborum a consequuntur dignissimos ipsum debitis. Suscipit dignissimos tempora doloremque quae maxime odio optio error a rem illum impedit nobis dolore, ut, consectetur ea harum perferendis repudiandae placeat!"), __jsx("p", {
    className: "paragraph",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae perferendis cumque fuga beatae suscipit alias dolores, sunt quos quod officia sint accusantium laborum a consequuntur dignissimos ipsum debitis. Suscipit dignissimos tempora doloremque quae maxime odio optio error a rem illum impedit nobis dolore, ut, consectetur ea harum perferendis repudiandae placeat!"), __jsx("p", {
    className: "paragraph",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae perferendis cumque fuga beatae suscipit alias dolores, sunt quos quod officia sint accusantium laborum a consequuntur dignissimos ipsum debitis. Suscipit dignissimos tempora doloremque quae maxime odio optio error a rem illum impedit nobis dolore, ut, consectetur ea harum perferendis repudiandae placeat!"), __jsx("p", {
    className: "paragraph",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae perferendis cumque fuga beatae suscipit alias dolores, sunt quos quod officia sint accusantium laborum a consequuntur dignissimos ipsum debitis. Suscipit dignissimos tempora doloremque quae maxime odio optio error a rem illum impedit nobis dolore, ut, consectetur ea harum perferendis repudiandae placeat!"), __jsx("p", {
    className: "paragraph",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae perferendis cumque fuga beatae suscipit alias dolores, sunt quos quod officia sint accusantium laborum a consequuntur dignissimos ipsum debitis. Suscipit dignissimos tempora doloremque quae maxime odio optio error a rem illum impedit nobis dolore, ut, consectetur ea harum perferendis repudiandae placeat!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdGhlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJEaXYiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImJnIiwidGV4dCIsIkluZGV4IiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZVN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBRUEsTUFBTUEsR0FBRyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVNQVFRQyxLQUFELElBQVdBLEtB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsOFhBckVGLEVBNkVFO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4WEE3RUYsQ0FERjtBQXdGRCxDQXpHRDs7QUEyR2VELG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDcElBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL3RoZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdGhlLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMuYmd9O1xyXG4gIC5pbnB1dC1idG5zIHtcclxuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGV4dH07XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50ZXh0fTtcclxuICB9XHJcblxyXG4gIC5wYXJhZ3JhcGgge1xyXG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50ZXh0fTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKFwiYmx1ZVwiKTtcclxuXHJcbiAgbGV0IGJnID0gXCJcIjtcclxuICBsZXQgdGV4dCA9IFwiXCI7XHJcblxyXG4gIGlmICh0aGVtZSA9PT0gXCJyZWRcIikge1xyXG4gICAgdGV4dCA9IFwiI2FkMmExYVwiO1xyXG4gICAgYmcgPSBcIiNFRkNGQjNcIjtcclxuICB9IGVsc2UgaWYgKHRoZW1lID09PSBcImJsYWNrXCIpIHtcclxuICAgIHRleHQgPSBcImJsYWNrXCI7XHJcbiAgICBiZyA9IFwid2hpdGVcIjtcclxuICB9IGVsc2UgaWYgKHRoZW1lID09PSBcImJsdWVcIikge1xyXG4gICAgdGV4dCA9IFwiI0E4RTVGRlwiO1xyXG4gICAgYmcgPSBcIiMyMjIyMzNcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGl2IHRleHQ9e3RleHR9IGJnPXtiZ30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYnRuc1wiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgIG5hbWU9XCJ0aGVtZVwiXHJcbiAgICAgICAgICBpZD1cInJlZFwiXHJcbiAgICAgICAgICB2YWx1ZT1cInJlZFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGhlbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNoZWNrZWQ9e3RoZW1lID09PSBcInJlZFwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgcmVkXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgbmFtZT1cInRoZW1lXCJcclxuICAgICAgICAgIGlkPVwiYmxhY2tcIlxyXG4gICAgICAgICAgdmFsdWU9XCJibGFja1wiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGhlbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNoZWNrZWQ9e3RoZW1lID09PSBcImJsYWNrXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICBibGFja1xyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgIG5hbWU9XCJ0aGVtZVwiXHJcbiAgICAgICAgICBpZD1cImJsdWVcIlxyXG4gICAgICAgICAgdmFsdWU9XCJibHVlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaGVtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2hlY2tlZD17dGhlbWUgPT09IFwiYmx1ZVwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgYmx1ZVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+VGhpcyBpcyB0aGUgZ3JlYXRlc3QgYXJ0aWNsZSBldmVyIHdyaXR0ZW4hPC9oMT5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlY3VzYW5kYWVcclxuICAgICAgICBwZXJmZXJlbmRpcyBjdW1xdWUgZnVnYSBiZWF0YWUgc3VzY2lwaXQgYWxpYXMgZG9sb3Jlcywgc3VudCBxdW9zIHF1b2RcclxuICAgICAgICBvZmZpY2lhIHNpbnQgYWNjdXNhbnRpdW0gbGFib3J1bSBhIGNvbnNlcXV1bnR1ciBkaWduaXNzaW1vcyBpcHN1bVxyXG4gICAgICAgIGRlYml0aXMuIFN1c2NpcGl0IGRpZ25pc3NpbW9zIHRlbXBvcmEgZG9sb3JlbXF1ZSBxdWFlIG1heGltZSBvZGlvIG9wdGlvXHJcbiAgICAgICAgZXJyb3IgYSByZW0gaWxsdW0gaW1wZWRpdCBub2JpcyBkb2xvcmUsIHV0LCBjb25zZWN0ZXR1ciBlYSBoYXJ1bVxyXG4gICAgICAgIHBlcmZlcmVuZGlzIHJlcHVkaWFuZGFlIHBsYWNlYXQhXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlY3VzYW5kYWVcclxuICAgICAgICBwZXJmZXJlbmRpcyBjdW1xdWUgZnVnYSBiZWF0YWUgc3VzY2lwaXQgYWxpYXMgZG9sb3Jlcywgc3VudCBxdW9zIHF1b2RcclxuICAgICAgICBvZmZpY2lhIHNpbnQgYWNjdXNhbnRpdW0gbGFib3J1bSBhIGNvbnNlcXV1bnR1ciBkaWduaXNzaW1vcyBpcHN1bVxyXG4gICAgICAgIGRlYml0aXMuIFN1c2NpcGl0IGRpZ25pc3NpbW9zIHRlbXBvcmEgZG9sb3JlbXF1ZSBxdWFlIG1heGltZSBvZGlvIG9wdGlvXHJcbiAgICAgICAgZXJyb3IgYSByZW0gaWxsdW0gaW1wZWRpdCBub2JpcyBkb2xvcmUsIHV0LCBjb25zZWN0ZXR1ciBlYSBoYXJ1bVxyXG4gICAgICAgIHBlcmZlcmVuZGlzIHJlcHVkaWFuZGFlIHBsYWNlYXQhXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlY3VzYW5kYWVcclxuICAgICAgICBwZXJmZXJlbmRpcyBjdW1xdWUgZnVnYSBiZWF0YWUgc3VzY2lwaXQgYWxpYXMgZG9sb3Jlcywgc3VudCBxdW9zIHF1b2RcclxuICAgICAgICBvZmZpY2lhIHNpbnQgYWNjdXNhbnRpdW0gbGFib3J1bSBhIGNvbnNlcXV1bnR1ciBkaWduaXNzaW1vcyBpcHN1bVxyXG4gICAgICAgIGRlYml0aXMuIFN1c2NpcGl0IGRpZ25pc3NpbW9zIHRlbXBvcmEgZG9sb3JlbXF1ZSBxdWFlIG1heGltZSBvZGlvIG9wdGlvXHJcbiAgICAgICAgZXJyb3IgYSByZW0gaWxsdW0gaW1wZWRpdCBub2JpcyBkb2xvcmUsIHV0LCBjb25zZWN0ZXR1ciBlYSBoYXJ1bVxyXG4gICAgICAgIHBlcmZlcmVuZGlzIHJlcHVkaWFuZGFlIHBsYWNlYXQhXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlY3VzYW5kYWVcclxuICAgICAgICBwZXJmZXJlbmRpcyBjdW1xdWUgZnVnYSBiZWF0YWUgc3VzY2lwaXQgYWxpYXMgZG9sb3Jlcywgc3VudCBxdW9zIHF1b2RcclxuICAgICAgICBvZmZpY2lhIHNpbnQgYWNjdXNhbnRpdW0gbGFib3J1bSBhIGNvbnNlcXV1bnR1ciBkaWduaXNzaW1vcyBpcHN1bVxyXG4gICAgICAgIGRlYml0aXMuIFN1c2NpcGl0IGRpZ25pc3NpbW9zIHRlbXBvcmEgZG9sb3JlbXF1ZSBxdWFlIG1heGltZSBvZGlvIG9wdGlvXHJcbiAgICAgICAgZXJyb3IgYSByZW0gaWxsdW0gaW1wZWRpdCBub2JpcyBkb2xvcmUsIHV0LCBjb25zZWN0ZXR1ciBlYSBoYXJ1bVxyXG4gICAgICAgIHBlcmZlcmVuZGlzIHJlcHVkaWFuZGFlIHBsYWNlYXQhXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlY3VzYW5kYWVcclxuICAgICAgICBwZXJmZXJlbmRpcyBjdW1xdWUgZnVnYSBiZWF0YWUgc3VzY2lwaXQgYWxpYXMgZG9sb3Jlcywgc3VudCBxdW9zIHF1b2RcclxuICAgICAgICBvZmZpY2lhIHNpbnQgYWNjdXNhbnRpdW0gbGFib3J1bSBhIGNvbnNlcXV1bnR1ciBkaWduaXNzaW1vcyBpcHN1bVxyXG4gICAgICAgIGRlYml0aXMuIFN1c2NpcGl0IGRpZ25pc3NpbW9zIHRlbXBvcmEgZG9sb3JlbXF1ZSBxdWFlIG1heGltZSBvZGlvIG9wdGlvXHJcbiAgICAgICAgZXJyb3IgYSByZW0gaWxsdW0gaW1wZWRpdCBub2JpcyBkb2xvcmUsIHV0LCBjb25zZWN0ZXR1ciBlYSBoYXJ1bVxyXG4gICAgICAgIHBlcmZlcmVuZGlzIHJlcHVkaWFuZGFlIHBsYWNlYXQhXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlY3VzYW5kYWVcclxuICAgICAgICBwZXJmZXJlbmRpcyBjdW1xdWUgZnVnYSBiZWF0YWUgc3VzY2lwaXQgYWxpYXMgZG9sb3Jlcywgc3VudCBxdW9zIHF1b2RcclxuICAgICAgICBvZmZpY2lhIHNpbnQgYWNjdXNhbnRpdW0gbGFib3J1bSBhIGNvbnNlcXV1bnR1ciBkaWduaXNzaW1vcyBpcHN1bVxyXG4gICAgICAgIGRlYml0aXMuIFN1c2NpcGl0IGRpZ25pc3NpbW9zIHRlbXBvcmEgZG9sb3JlbXF1ZSBxdWFlIG1heGltZSBvZGlvIG9wdGlvXHJcbiAgICAgICAgZXJyb3IgYSByZW0gaWxsdW0gaW1wZWRpdCBub2JpcyBkb2xvcmUsIHV0LCBjb25zZWN0ZXR1ciBlYSBoYXJ1bVxyXG4gICAgICAgIHBlcmZlcmVuZGlzIHJlcHVkaWFuZGFlIHBsYWNlYXQhXHJcbiAgICAgIDwvcD5cclxuICAgIDwvRGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==