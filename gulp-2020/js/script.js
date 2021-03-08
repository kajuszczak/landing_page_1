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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/base.js":
/*!************************!*\
  !*** ./src/js/base.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/js/base.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _landingpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landingpage */ "./src/js/landingpage.js");
/* harmony import */ var _landingpage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_landingpage__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/landingpage.js":
/*!*******************************!*\
  !*** ./src/js/landingpage.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

//go-up button
var goUpBtn = document.querySelector(".info__up-icon");
goUpBtn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}); // // contact form
// const inputEmail = document.querySelector(".contact__email");
// const inputMsg = document.querySelector(".contact__msg");
// const formEmailInfo = document.querySelector(".contact__email-info");
// const formMsgInfo = document.querySelector(".contact__msg-info");
// const contactBtn = document.querySelector(".contact__btn");
// contactBtn.addEventListener("click", function(event) {
//     event.preventDefault(); 
//     formEmailInfo.style.display = "block";
//     if (validateEmail(input.value)) {
//         formEmailInfo.textContent = "Wysłano wiadomość";
//     } else {
//         formEmailInfo.textContent = "Pole nie może być puste, podaj adres email";
//     }
// });
// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//   }
//   contactBtn.addEventListener("click", function(event) {
//     event.preventDefault(); 
//     formMsgInfo.style.display = "block";
//     if (validateMsg(input.value)) {
//         formMsgInfo.textContent = "Wysłano wiadomość";
//     } else {
//         formMsgInfo.textContent = "Pole nie może być puste, wpisz wiadomość";
//     }
// });
// const $carousel = $('.carousel').flickity({
//     imagesLoaded: true,
//     percentPosition: false,
//   });
//   const $imgs = $carousel.find('.carousel-cell img');
//   // get transform property
//   const docStyle = document.documentElement.style;
//   const transformProp = typeof docStyle.transform == 'string' ?
//     'transform' : 'WebkitTransform';
//   // get Flickity instance
//   const flkty = $carousel.data('flickity');
//   $carousel.on( 'scroll.flickity', function() {
//     flkty.slides.forEach( function( slide, i ) {
//       const img = $imgs[i];
//       const x = ( slide.target + flkty.x ) * -1/3;
//       img.style[ transformProp ] = 'translateX(' + x  + 'px)';
//     });
//   });

/***/ })

/******/ });
//# sourceMappingURL=script.js.map