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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (window) {

  var _init = function _init(_ref) {
    var _ref$container = _ref.container,
        container = _ref$container === undefined ? '' : _ref$container,
        _ref$cellHeight = _ref.cellHeight,
        cellHeight = _ref$cellHeight === undefined ? 50 : _ref$cellHeight,
        _ref$cellWidth = _ref.cellWidth,
        cellWidth = _ref$cellWidth === undefined ? 50 : _ref$cellWidth;

    var gameBody = document.getElementById(container);
    if (gameBody === undefined) gameBody = document.getElementsByTagName("body")[0];

    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var gameState = 0;
    for (var i = 0; i < 3; i++) {
      var row = document.createElement("tr");

      var _loop = function _loop(j) {
        var cell = document.createElement("td");
        cell.setAttribute("width", cellHeight + "px");
        cell.setAttribute("height", cellWidth + "px");
        //setting styles for table cells
        cell.style.textAlign = "center";
        cell.style.cursor = "pointer";
        cell.style.fontSize = cellHeight * 0.4 + 'px';
        cell.addEventListener("click", function () {
          var inputState = gameState % 2 ? 0 : 1;
          var cellText = inputState == 1 ? 'X' : '0';
          cell.innerHTML = cellText;

          gameState++;
        });
        row.appendChild(cell);
      };

      for (var j = 0; j < 3; j++) {
        _loop(j);
      }
      tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    gameBody.appendChild(tbl);
    tbl.setAttribute("border", "1");
    // setting styles for table
    tbl.style.borderCollapse = 'collapse';
    tbl.style.border = '2px solid #000';
    tbl.style.height = "auto";
    tbl.style.width = "auto";
    tbl.style.margin = "0 auto";
  };

  window.Game = {
    init: _init
  };
})(window);

/***/ })
/******/ ]);