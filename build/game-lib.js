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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__winner__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__score_board__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



const GameBoard = { inputArray: [], table: [], winner: {} };
GameBoard.generate = ({ container = '', cellHeight = 50, cellWidth = 50 }) => {
    const W = new __WEBPACK_IMPORTED_MODULE_0__winner__["a" /* default */]();
    let gameBody = document.getElementById(container);
    if (gameBody === undefined) gameBody = document.getElementsByTagName("body")[0];
    const tbl = document.createElement("table");
    GameBoard.table = tbl;
    const tblBody = document.createElement("tbody");
    let gameState = 0;
    let cellIndex = 0;
    for (let i = 0; i < 3; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement("td");
            cell.setAttribute("index", cellIndex++);
            cell.setAttribute("width", cellHeight + "px");
            cell.setAttribute("height", cellWidth + "px");
            //setting styles for table cells
            cell.style.textAlign = "center";
            cell.style.cursor = "pointer";
            cell.style.fontSize = cellHeight * 0.4 + 'px';
            cell.addEventListener("click", () => {
                let index = cell.getAttribute("index");
                if (GameBoard.inputArray[index] !== undefined || W.name) return;
                let inputState = gameState % 2 ? 0 : 1;
                let cellText = inputState == 1 ? 'X' : '0';
                cell.innerHTML = cellText;
                GameBoard.inputArray[index] = inputState;
                gameState++;
                let winner = W.findWinner(GameBoard.inputArray);
                GameBoard.winner = _extends({}, winner, { name: W.name, score: W.score }); // Object destructuring
                if (winner.state == 0 || winner.state == 1) {
                    __WEBPACK_IMPORTED_MODULE_1__score_board__["a" /* default */].declareWinner();
                    __WEBPACK_IMPORTED_MODULE_1__score_board__["a" /* default */].drawScore();
                }
            });
            row.appendChild(cell);
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
/* harmony default export */ __webpack_exports__["a"] = (GameBoard);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_board__ = __webpack_require__(0);

(function (window) {
  let _init = params => {
    __WEBPACK_IMPORTED_MODULE_0__game_board__["a" /* default */].generate(params);
  };
  window.Game = {
    init: _init
  };
})(window);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_board__ = __webpack_require__(0);

class Winner {
  constructor() {
    this._name = null;
    this._score = 0;
  }
  findWinner() {
    const inputLines = __WEBPACK_IMPORTED_MODULE_0__game_board__["a" /* default */].inputArray;
    const winningLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      // console.log(inputLines);
      if (inputLines[a] !== undefined && inputLines[a] === inputLines[b] && inputLines[a] === inputLines[c]) {
        this._name = inputLines[a] == 1 ? 'X' : '0';
        this.calculateScore(inputLines, inputLines[a]);
        return { state: inputLines[a], lines: [a, b, c] };
      }
    }
    return { state: null, lines: [] };
  }
  calculateScore(inputLines, player) {
    for (let i = 0; i < inputLines.length; i++) {
      if (inputLines[i] == player) {
        this._score++;
      }
    }
  }
  get name() {
    return this._name;
  }
  get score() {
    return this._score;
  }

}
/* harmony default export */ __webpack_exports__["a"] = (Winner);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_board__ = __webpack_require__(0);

const ScoreBoard = {
  drawScore: () => {
    const table = __WEBPACK_IMPORTED_MODULE_0__game_board__["a" /* default */].table;
    const winner = __WEBPACK_IMPORTED_MODULE_0__game_board__["a" /* default */].winner;
    __WEBPACK_IMPORTED_MODULE_0__game_board__["a" /* default */].table.style.opacity = "0.5";
    const cells = table.getElementsByTagName("td");
    let cellIndex;
    for (let c = 0; c < cells.length; c++) {
      cellIndex = parseInt(cells[c].getAttribute("index"));
      if (__WEBPACK_IMPORTED_MODULE_0__game_board__["a" /* default */].inputArray[cellIndex] == winner.state && winner.lines.indexOf(cellIndex) != -1) {
        cells[c].style.backgroundColor = "#eee";
      }
    }
  },
  declareWinner: () => {
    const scoreboard = document.createElement("div");
    scoreboard.style.margin = "auto";
    scoreboard.style.height = '100px';
    scoreboard.style.lineHeight = '110px';
    scoreboard.style.border = 'dotted';
    scoreboard.style.marginTop = '10px';
    scoreboard.style.width = window.innerWidth - window.innerWidth * 0.02 + 'px';
    scoreboard.style.backgroundColor = "transparent";
    scoreboard.style.textAlign = "center";
    scoreboard.innerHTML = "Winner: " + __WEBPACK_IMPORTED_MODULE_0__game_board__["a" /* default */].winner.name + ", Score: " + __WEBPACK_IMPORTED_MODULE_0__game_board__["a" /* default */].winner.score;
    document.body.appendChild(scoreboard);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (ScoreBoard);

/***/ })
/******/ ]);