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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let burgerNav = document.querySelector('.toggler');\r\nlet burgerClose = document.querySelector('.btn__white');\r\nlet buttonOrder = document.querySelector('.btn__orange');\r\nlet mainLogo = document.querySelector('.header__icon');\r\nlet buttonLine = document.querySelector('.btn__line');\r\nlet mainContact = document.querySelector('.main__message');\r\n\r\nburgerNav.onclick = function () {\r\n  buttonOrder.classList.toggle('active-menu');\r\n  mainLogo.classList.toggle('header__icon--white');\r\n  buttonLine.classList.toggle('btn__active');\r\n  mainContact.classList.toggle('main__message--active');\r\n  // burgerClose.classList.toggle('burger-active');\r\n\r\n  if (buttonOrder.classList.contains('active-menu')) {\r\n    document.body.classList.add('no-scroll');\r\n  } else {\r\n    document.body.classList.remove('no-scroll');\r\n  }\r\n}\r\n\r\n//Fixed header\r\n\r\nwindow.onscroll = function() {scrollFunction()};\r\n\r\nfunction scrollFunction() {\r\n  let scrollPos = 200;\r\n  let header = document.querySelector('.header');\r\n\r\n  if (document.body.scrollTop > scrollPos ||\r\n    document.documentElement.scrollTop > scrollPos) {\r\n    header.classList.add('active');\r\n  } \r\n  else\r\n  {\r\n    header.classList.remove('active');\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/choice.js":
/*!*********************************!*\
  !*** ./src/assets/js/choice.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// let brifBtn = document.querySelector('.test');\r\n\r\n// brifBtn.onclick = function () {\r\n//   let btnClick = document.querySelectorAll('.btn__choice');\r\n\r\n//   btnClick.classList.toggle('active');\r\n// }\n\n//# sourceURL=webpack:///./src/assets/js/choice.js?");

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/choice.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\WebDev\\see_on\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! D:\\WebDev\\see_on\\src\\assets\\js\\choice.js */\"./src/assets/js/choice.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/choice.js?");

/***/ })

/******/ });