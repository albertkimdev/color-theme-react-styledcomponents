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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Albert\\Documents\\BuiltByReact\\tutorials\\styledcolorscheme\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Div = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Div",
  componentId: "qg8ncu-0"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkRpdiIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiYmciLCJ0ZXh0IiwiSW5kZXgiLCJ0aGVtZSIsInNldFRoZW1lIiwidXNlU3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFFQSxNQUFNQSxHQUFHLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdU1BUVFDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxFQVJ4QixFQVVLRCxLQUFELElBQVdBLEtBQUssQ0FBQ0UsSUFWckIsRUFjS0YsS0FBRCxJQUFXQSxLQUFLLENBQUNFLElBZHJCLEVBa0JLRixLQUFELElBQVdBLEtBQUssQ0FBQ0UsSUFsQnJCLENBQVQ7O0FBc0JBLE1BQU1DLEtBQUssR0FBRyxNQUFNO0FBQ2xCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxNQUFELENBQWxDO0FBRUEsTUFBSUwsRUFBRSxHQUFHLEVBQVQ7QUFDQSxNQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFFQSxNQUFJRSxLQUFLLEtBQUssS0FBZCxFQUFxQjtBQUNuQkYsUUFBSSxHQUFHLFNBQVA7QUFDQUQsTUFBRSxHQUFHLFNBQUw7QUFDRCxHQUhELE1BR08sSUFBSUcsS0FBSyxLQUFLLE9BQWQsRUFBdUI7QUFDNUJGLFFBQUksR0FBRyxPQUFQO0FBQ0FELE1BQUUsR0FBRyxPQUFMO0FBQ0QsR0FITSxNQUdBLElBQUlHLEtBQUssS0FBSyxNQUFkLEVBQXNCO0FBQzNCRixRQUFJLEdBQUcsU0FBUDtBQUNBRCxNQUFFLEdBQUcsU0FBTDtBQUNEOztBQUVELFNBQ0UsTUFBQyxHQUFEO0FBQUssUUFBSSxFQUFFQyxJQUFYO0FBQWlCLE1BQUUsRUFBRUQsRUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLE9BRFA7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLE1BQUUsRUFBQyxLQUhMO0FBSUUsU0FBSyxFQUFDLEtBSlI7QUFLRSxZQUFRLEVBQUdNLENBQUQsSUFBTztBQUNmRixjQUFRLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFDRCxLQVBIO0FBUUUsV0FBTyxFQUFFTCxLQUFLLEtBQUssS0FSckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLFNBWUU7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUksRUFBQyxPQUZQO0FBR0UsTUFBRSxFQUFDLE9BSEw7QUFJRSxTQUFLLEVBQUMsT0FKUjtBQUtFLFlBQVEsRUFBR0csQ0FBRCxJQUFPO0FBQ2ZGLGNBQVEsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNELEtBUEg7QUFRRSxXQUFPLEVBQUVMLEtBQUssS0FBSyxPQVJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsV0F1QkU7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUksRUFBQyxPQUZQO0FBR0UsTUFBRSxFQUFDLE1BSEw7QUFJRSxTQUFLLEVBQUMsTUFKUjtBQUtFLFlBQVEsRUFBR0csQ0FBRCxJQUFPO0FBQ2ZGLGNBQVEsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNELEtBUEg7QUFRRSxXQUFPLEVBQUVMLEtBQUssS0FBSyxNQVJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJGLFNBREYsRUFvQ0U7QUFBSSxhQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQXBDRixFQXFDRTtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOFhBckNGLEVBNkNFO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4WEE3Q0YsRUFxREU7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhYQXJERixFQTZERTtBQUFHLGFBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOFhBN0RGLEVBcUVFO0FBQUcsYUFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4WEFyRUYsRUE2RUU7QUFBRyxhQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhYQTdFRixDQURGO0FBd0ZELENBekdEOztBQTJHZUQsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNwSUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMuYmd9O1xyXG4gIC5pbnB1dC1idG5zIHtcclxuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGV4dH07XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50ZXh0fTtcclxuICB9XHJcblxyXG4gIC5wYXJhZ3JhcGgge1xyXG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50ZXh0fTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKFwiYmx1ZVwiKTtcclxuXHJcbiAgbGV0IGJnID0gXCJcIjtcclxuICBsZXQgdGV4dCA9IFwiXCI7XHJcblxyXG4gIGlmICh0aGVtZSA9PT0gXCJyZWRcIikge1xyXG4gICAgdGV4dCA9IFwiI2FkMmExYVwiO1xyXG4gICAgYmcgPSBcIiNFRkNGQjNcIjtcclxuICB9IGVsc2UgaWYgKHRoZW1lID09PSBcImJsYWNrXCIpIHtcclxuICAgIHRleHQgPSBcImJsYWNrXCI7XHJcbiAgICBiZyA9IFwid2hpdGVcIjtcclxuICB9IGVsc2UgaWYgKHRoZW1lID09PSBcImJsdWVcIikge1xyXG4gICAgdGV4dCA9IFwiI0E4RTVGRlwiO1xyXG4gICAgYmcgPSBcIiMyMjIyMzNcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGl2IHRleHQ9e3RleHR9IGJnPXtiZ30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYnRuc1wiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgIG5hbWU9XCJ0aGVtZVwiXHJcbiAgICAgICAgICBpZD1cInJlZFwiXHJcbiAgICAgICAgICB2YWx1ZT1cInJlZFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGhlbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNoZWNrZWQ9e3RoZW1lID09PSBcInJlZFwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgcmVkXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgbmFtZT1cInRoZW1lXCJcclxuICAgICAgICAgIGlkPVwiYmxhY2tcIlxyXG4gICAgICAgICAgdmFsdWU9XCJibGFja1wiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGhlbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNoZWNrZWQ9e3RoZW1lID09PSBcImJsYWNrXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICBibGFja1xyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgIG5hbWU9XCJ0aGVtZVwiXHJcbiAgICAgICAgICBpZD1cImJsdWVcIlxyXG4gICAgICAgICAgdmFsdWU9XCJibHVlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaGVtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2hlY2tlZD17dGhlbWUgPT09IFwiYmx1ZVwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgYmx1ZVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+VGhpcyBpcyB0aGUgZ3JlYXRlc3QgYXJ0aWNsZSBldmVyIHdyaXR0ZW4hPC9oMT5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlY3VzYW5kYWVcclxuICAgICAgICBwZXJmZXJlbmRpcyBjdW1xdWUgZnVnYSBiZWF0YWUgc3VzY2lwaXQgYWxpYXMgZG9sb3Jlcywgc3VudCBxdW9zIHF1b2RcclxuICAgICAgICBvZmZpY2lhIHNpbnQgYWNjdXNhbnRpdW0gbGFib3J1bSBhIGNvbnNlcXV1bnR1ciBkaWduaXNzaW1vcyBpcHN1bVxyXG4gICAgICAgIGRlYml0aXMuIFN1c2NpcGl0IGRpZ25pc3NpbW9zIHRlbXBvcmEgZG9sb3JlbXF1ZSBxdWFlIG1heGltZSBvZGlvIG9wdGlvXHJcbiAgICAgICAgZXJyb3IgYSByZW0gaWxsdW0gaW1wZWRpdCBub2JpcyBkb2xvcmUsIHV0LCBjb25zZWN0ZXR1ciBlYSBoYXJ1bVxyXG4gICAgICAgIHBlcmZlcmVuZGlzIHJlcHVkaWFuZGFlIHBsYWNlYXQhXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlY3VzYW5kYWVcclxuICAgICAgICBwZXJmZXJlbmRpcyBjdW1xdWUgZnVnYSBiZWF0YWUgc3VzY2lwaXQgYWxpYXMgZG9sb3Jlcywgc3VudCBxdW9zIHF1b2RcclxuICAgICAgICBvZmZpY2lhIHNpbnQgYWNjdXNhbnRpdW0gbGFib3J1bSBhIGNvbnNlcXV1bnR1ciBkaWduaXNzaW1vcyBpcHN1bVxyXG4gICAgICAgIGRlYml0aXMuIFN1c2NpcGl0IGRpZ25pc3NpbW9zIHRlbXBvcmEgZG9sb3JlbXF1ZSBxdWFlIG1heGltZSBvZGlvIG9wdGlvXHJcbiAgICAgICAgZXJyb3IgYSByZW0gaWxsdW0gaW1wZWRpdCBub2JpcyBkb2xvcmUsIHV0LCBjb25zZWN0ZXR1ciBlYSBoYXJ1bVxyXG4gICAgICAgIHBlcmZlcmVuZGlzIHJlcHVkaWFuZGFlIHBsYWNlYXQhXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlY3VzYW5kYWVcclxuICAgICAgICBwZXJmZXJlbmRpcyBjdW1xdWUgZnVnYSBiZWF0YWUgc3VzY2lwaXQgYWxpYXMgZG9sb3Jlcywgc3VudCBxdW9zIHF1b2RcclxuICAgICAgICBvZmZpY2lhIHNpbnQgYWNjdXNhbnRpdW0gbGFib3J1bSBhIGNvbnNlcXV1bnR1ciBkaWduaXNzaW1vcyBpcHN1bVxyXG4gICAgICAgIGRlYml0aXMuIFN1c2NpcGl0IGRpZ25pc3NpbW9zIHRlbXBvcmEgZG9sb3JlbXF1ZSBxdWFlIG1heGltZSBvZGlvIG9wdGlvXHJcbiAgICAgICAgZXJyb3IgYSByZW0gaWxsdW0gaW1wZWRpdCBub2JpcyBkb2xvcmUsIHV0LCBjb25zZWN0ZXR1ciBlYSBoYXJ1bVxyXG4gICAgICAgIHBlcmZlcmVuZGlzIHJlcHVkaWFuZGFlIHBsYWNlYXQhXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlY3VzYW5kYWVcclxuICAgICAgICBwZXJmZXJlbmRpcyBjdW1xdWUgZnVnYSBiZWF0YWUgc3VzY2lwaXQgYWxpYXMgZG9sb3Jlcywgc3VudCBxdW9zIHF1b2RcclxuICAgICAgICBvZmZpY2lhIHNpbnQgYWNjdXNhbnRpdW0gbGFib3J1bSBhIGNvbnNlcXV1bnR1ciBkaWduaXNzaW1vcyBpcHN1bVxyXG4gICAgICAgIGRlYml0aXMuIFN1c2NpcGl0IGRpZ25pc3NpbW9zIHRlbXBvcmEgZG9sb3JlbXF1ZSBxdWFlIG1heGltZSBvZGlvIG9wdGlvXHJcbiAgICAgICAgZXJyb3IgYSByZW0gaWxsdW0gaW1wZWRpdCBub2JpcyBkb2xvcmUsIHV0LCBjb25zZWN0ZXR1ciBlYSBoYXJ1bVxyXG4gICAgICAgIHBlcmZlcmVuZGlzIHJlcHVkaWFuZGFlIHBsYWNlYXQhXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlY3VzYW5kYWVcclxuICAgICAgICBwZXJmZXJlbmRpcyBjdW1xdWUgZnVnYSBiZWF0YWUgc3VzY2lwaXQgYWxpYXMgZG9sb3Jlcywgc3VudCBxdW9zIHF1b2RcclxuICAgICAgICBvZmZpY2lhIHNpbnQgYWNjdXNhbnRpdW0gbGFib3J1bSBhIGNvbnNlcXV1bnR1ciBkaWduaXNzaW1vcyBpcHN1bVxyXG4gICAgICAgIGRlYml0aXMuIFN1c2NpcGl0IGRpZ25pc3NpbW9zIHRlbXBvcmEgZG9sb3JlbXF1ZSBxdWFlIG1heGltZSBvZGlvIG9wdGlvXHJcbiAgICAgICAgZXJyb3IgYSByZW0gaWxsdW0gaW1wZWRpdCBub2JpcyBkb2xvcmUsIHV0LCBjb25zZWN0ZXR1ciBlYSBoYXJ1bVxyXG4gICAgICAgIHBlcmZlcmVuZGlzIHJlcHVkaWFuZGFlIHBsYWNlYXQhXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XHJcbiAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlY3VzYW5kYWVcclxuICAgICAgICBwZXJmZXJlbmRpcyBjdW1xdWUgZnVnYSBiZWF0YWUgc3VzY2lwaXQgYWxpYXMgZG9sb3Jlcywgc3VudCBxdW9zIHF1b2RcclxuICAgICAgICBvZmZpY2lhIHNpbnQgYWNjdXNhbnRpdW0gbGFib3J1bSBhIGNvbnNlcXV1bnR1ciBkaWduaXNzaW1vcyBpcHN1bVxyXG4gICAgICAgIGRlYml0aXMuIFN1c2NpcGl0IGRpZ25pc3NpbW9zIHRlbXBvcmEgZG9sb3JlbXF1ZSBxdWFlIG1heGltZSBvZGlvIG9wdGlvXHJcbiAgICAgICAgZXJyb3IgYSByZW0gaWxsdW0gaW1wZWRpdCBub2JpcyBkb2xvcmUsIHV0LCBjb25zZWN0ZXR1ciBlYSBoYXJ1bVxyXG4gICAgICAgIHBlcmZlcmVuZGlzIHJlcHVkaWFuZGFlIHBsYWNlYXQhXHJcbiAgICAgIDwvcD5cclxuICAgIDwvRGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==