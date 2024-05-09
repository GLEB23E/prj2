/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modal = () => {
  var modal = document.getElementById("myModal");
  var modal2 = document.getElementById("myModal2");
  var modal3 = document.getElementById("myModal3");
  var btn = document.getElementById("openModalBtn");
  var btn2 = document.getElementById("openModalBtn2");
  var btn3 = document.getElementById("openModalBtn3");
  var span = document.getElementsByClassName("close")[0];
  var span2 = document.getElementsByClassName("close2")[0];
  var span3 = document.getElementsByClassName("close3")[0];
  var reg = document.getElementById("reg");
  var log = document.getElementById("log");
  var email = document.getElementById("emailul");

  // Когда пользователь кликает на кнопку, открываем модальное окно
  btn.onclick = function () {
    console.log('ttt');
    modal.style.display = "block";
  };
  btn2.onclick = function () {
    console.log('ttt');
    modal2.style.display = "block";
  };
  btn3.onclick = function () {
    console.log('ttt');
    modal3.style.display = "block";
  };
  reg.onclick = function () {
    email.style.display = "block";
  };
  log.onclick = function () {
    email.style.display = "none";
  };
  // Когда пользователь кликает на крестик, закрываем модальное окно
  span.onclick = function () {
    modal.style.display = "none";
  };
  span2.onclick = function () {
    modal2.style.display = "none";
  };
  span3.onclick = function () {
    modal3.style.display = "none";
  };

  // Когда пользователь кликает вне модального окна, закрываем его
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");

window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map