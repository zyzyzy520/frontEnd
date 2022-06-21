/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Food.ts":
/*!*****************************!*\
  !*** ./src/modules/Food.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Food类实现
var Food = /*#__PURE__*/function () {
  // 给属性赋初始值
  function Food() {
    _classCallCheck(this, Food);

    // 感叹号表示肯定不为空
    this.element = document.getElementById('food');
  } // 定义一个获取食物X坐标的方法


  _createClass(Food, [{
    key: "X",
    get: function get() {
      return this.element.offsetLeft;
    } // 定义一个获取 食物Y坐标的方法

  }, {
    key: "Y",
    get: function get() {
      return this.element.offsetTop;
    } // 定义一个随机改变食物坐标的方法，因为要改变两个地方，所以不能用set，set只能是一个参数

  }, {
    key: "change_coordinate",
    value: function change_coordinate() {
      // 设置的top和left值不能超过边界，所以要在0~294px之间。但因为蛇是一节节的，移动也是一格格的，每一格是10，所以食物在的位置得是[0,294]之间10的整数倍
      // 先生成[0, 29]的整数再*10
      var new_left = Math.round(Math.random() * 29) * 10;
      var new_top = Math.round(Math.random() * 29) * 10;
      this.element.style.left = new_left + 'px';
      this.element.style.top = new_top + 'px';
    }
  }]);

  return Food;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Food);

/***/ }),

/***/ "./src/modules/GameControl.ts":
/*!************************************!*\
  !*** ./src/modules/GameControl.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ "./src/modules/Snake.ts");
/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Food */ "./src/modules/Food.ts");
/* harmony import */ var _ScorePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScorePanel */ "./src/modules/ScorePanel.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



 // 游戏控制器，控制其他所有类

var GameControl = /*#__PURE__*/function () {
  function GameControl() {
    _classCallCheck(this, GameControl);

    this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.food = new _Food__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.score_panel = new _ScorePanel__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.direction = "";
    this.is_live = true; // 马上初始化开启游戏

    this.init();
  } // 游戏初始化，调用后游戏开始


  _createClass(GameControl, [{
    key: "init",
    value: function init() {
      // 监控键盘按下事件，移动蛇
      // 这里的this仍然指向GameControl对象，通过this.keydownHandler找到keydownHandler函数
      // 再通过bind方法改变了keydownHandler的this指向，不再指向调用者而是一直指向GameControl对象。
      // 将这改变了this的函数作为回调函数
      document.addEventListener('keydown', this.keydownHandler.bind(this));
    } // 按下键盘后的回调，键盘按下回调

  }, {
    key: "keydownHandler",
    value: function keydownHandler(event) {
      // 需要检查event.key的值是否合法(用户是否按了正确的按键)
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        // 修改direction属性
        this.direction = event.key;
        this.run();
      }
    }
    /*
    direction的值
    ArrowUp Up
    ArrowDown Down
    ArrowLeft Left
    ArrowRight Right
    */

  }, {
    key: "run",
    value: function run() {
      // 处理撞墙
      if (this.snake.X <= 0 && this.direction == 'ArrowLeft' || this.snake.X >= 290 && this.direction == 'ArrowRight' || this.snake.Y <= 0 && this.direction == 'ArrowUp' || this.snake.Y >= 290 && this.direction == 'ArrowDown') {
        this.is_live = false;
      } else {
        switch (this.direction) {
          case 'ArrowUp':
          case 'Up':
            // 向上移动，top减少
            this.snake.Y -= 10;
            break;

          case 'ArrowDown':
          case 'Down':
            // 向下移动，top增加
            this.snake.Y += 10;
            break;

          case 'ArrowLeft':
          case 'Left':
            // 向左移动，left减少
            this.snake.X -= 10;
            break;

          case 'ArrowRight':
          case 'Right':
            // 向右移动，left增加
            this.snake.X += 10;
        }
      } // 在游戏仍然在进行中的情况下才开启定时器


      this.is_live && setTimeout(this.run.bind(this), 300 - (this.score_panel.level - 1) * 10);
    }
  }]);

  return GameControl;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameControl);

/***/ }),

/***/ "./src/modules/ScorePanel.ts":
/*!***********************************!*\
  !*** ./src/modules/ScorePanel.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ScorePanel = /*#__PURE__*/function () {
  // 设置默认值
  function ScorePanel() {
    var max_level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
    var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    _classCallCheck(this, ScorePanel);

    this.score = 0;
    this.level = 1; // 感叹号表示肯定不为空

    this.score_element = document.getElementById('score');
    this.level_element = document.getElementById('level'); // 阈值和最高等级可以自己设定

    this.max_level = max_level;
    this.threshold = threshold;
  } // 调用后，分数累加并且改变页面元素上显示的值


  _createClass(ScorePanel, [{
    key: "addScore",
    value: function addScore() {
      // 注意innerHTML要求是字符串，而score是number。所以要进行转换。
      this.score_element.innerHTML = ++this.score + ''; // 每十级升一次level

      if (this.score % 10 === 0) {
        this.upLevel();
      }
    }
  }, {
    key: "upLevel",
    value: function upLevel() {
      if (this.level < this.max_level) {
        // 超出最高等级，就不能升级了
        this.level_element.innerHTML = ++this.level + '';
      }
    }
  }]);

  return ScorePanel;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScorePanel);

/***/ }),

/***/ "./src/modules/Snake.ts":
/*!******************************!*\
  !*** ./src/modules/Snake.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Snake = /*#__PURE__*/function () {
  function Snake() {
    _classCallCheck(this, Snake);

    // 在文档下，找到ID为snake的容器
    this.container = document.getElementById('snake'); // 在container下找到第一个div，querySelector只会取一个

    this.head = this.container.querySelector('div'); // 在container下找到所有div，不要用querySelectorAll因为新增div时不会更新。 

    this.bodies = this.container.getElementsByTagName('div');
  } // 获取蛇头坐标


  _createClass(Snake, [{
    key: "X",
    get: function get() {
      return this.head.offsetLeft;
    },
    set: // 设置蛇头的坐标
    function set(value) {
      this.head.style.left = value + 'px';
    }
  }, {
    key: "Y",
    get: function get() {
      return this.head.offsetTop;
    },
    set: function set(value) {
      this.head.style.top = value + 'px';
    } // 蛇增加身体

  }, {
    key: "addBody",
    value: function addBody() {
      // 添加到容器内最后一个元素之后
      this.container.insertAdjacentHTML('beforeend', '<div></div>');
    }
  }]);

  return Snake;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snake);

/***/ }),

/***/ "./src/css/index.less":
/*!****************************!*\
  !*** ./src/css/index.less ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.less */ "./src/css/index.less");
/* harmony import */ var _modules_GameControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/GameControl */ "./src/modules/GameControl.ts");
 // 引入控制器

 // 马上开始游戏
// new的时候会马上调用构造函数,在构造函数里开启游戏

new _modules_GameControl__WEBPACK_IMPORTED_MODULE_1__["default"]();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztDQ0xBOztDQUVBO0FBQ0E7O0FBQ0EsSUFBSUUsNERBQUosRyIsInNvdXJjZXMiOlsid2VicGFjazovLzA1X3Byb2plY3QvLi9zcmMvbW9kdWxlcy9Gb29kLnRzIiwid2VicGFjazovLzA1X3Byb2plY3QvLi9zcmMvbW9kdWxlcy9HYW1lQ29udHJvbC50cyIsIndlYnBhY2s6Ly8wNV9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvU2NvcmVQYW5lbC50cyIsIndlYnBhY2s6Ly8wNV9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvU25ha2UudHMiLCJ3ZWJwYWNrOi8vMDVfcHJvamVjdC8uL3NyYy9jc3MvaW5kZXgubGVzcz84OGQ4Iiwid2VicGFjazovLzA1X3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMDVfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMDVfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzA1X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8wNV9wcm9qZWN0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZvb2Tnsbvlrp7njrBcclxuY2xhc3MgRm9vZCB7XHJcbiAgICAvLyDnu5nlsZ7mgKfotYvliJ3lp4vlgLxcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIOaEn+WPueWPt+ihqOekuuiCr+WumuS4jeS4uuepulxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb29kJyk7XHJcbiAgICB9XHJcbiAgICAvLyDlrprkuYnkuIDkuKrojrflj5bpo5/nialY5Z2Q5qCH55qE5pa55rOVXHJcbiAgICBnZXQgWCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm9mZnNldExlZnQ7XHJcbiAgICB9XHJcbiAgICAvLyDlrprkuYnkuIDkuKrojrflj5Yg6aOf54mpWeWdkOagh+eahOaWueazlVxyXG4gICAgZ2V0IFkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICB9XHJcbiAgICAvLyDlrprkuYnkuIDkuKrpmo/mnLrmlLnlj5jpo5/nianlnZDmoIfnmoTmlrnms5XvvIzlm6DkuLropoHmlLnlj5jkuKTkuKrlnLDmlrnvvIzmiYDku6XkuI3og73nlKhzZXTvvIxzZXTlj6rog73mmK/kuIDkuKrlj4LmlbBcclxuICAgIGNoYW5nZV9jb29yZGluYXRlKCkge1xyXG4gICAgICAgIC8vIOiuvue9rueahHRvcOWSjGxlZnTlgLzkuI3og73otoXov4fovrnnlYzvvIzmiYDku6XopoHlnKgwfjI5NHB45LmL6Ze044CC5L2G5Zug5Li66JuH5piv5LiA6IqC6IqC55qE77yM56e75Yqo5Lmf5piv5LiA5qC85qC855qE77yM5q+P5LiA5qC85pivMTDvvIzmiYDku6Xpo5/nianlnKjnmoTkvY3nva7lvpfmmK9bMCwyOTRd5LmL6Ze0MTDnmoTmlbTmlbDlgI1cclxuICAgICAgICAvLyDlhYjnlJ/miJBbMCwgMjld55qE5pW05pWw5YaNKjEwXHJcbiAgICAgICAgbGV0IG5ld19sZWZ0ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjkpICogMTA7XHJcbiAgICAgICAgbGV0IG5ld190b3AgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyOSkgKiAxMDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IG5ld19sZWZ0ICsgJ3B4JztcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gbmV3X3RvcCArICdweCc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9vZDtcclxuIiwiaW1wb3J0IFNuYWtlIGZyb20gXCIuL1NuYWtlXCI7XHJcbmltcG9ydCBGb29kIGZyb20gXCIuL0Zvb2RcIjtcclxuaW1wb3J0IFNjb3JlUGFuZWwgZnJvbSBcIi4vU2NvcmVQYW5lbFwiO1xyXG4vLyDmuLjmiI/mjqfliLblmajvvIzmjqfliLblhbbku5bmiYDmnInnsbtcclxuY2xhc3MgR2FtZUNvbnRyb2wge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZSgpO1xyXG4gICAgICAgIHRoaXMuZm9vZCA9IG5ldyBGb29kKCk7XHJcbiAgICAgICAgdGhpcy5zY29yZV9wYW5lbCA9IG5ldyBTY29yZVBhbmVsKCk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuaXNfbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8g6ams5LiK5Yid5aeL5YyW5byA5ZCv5ri45oiPXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICAvLyDmuLjmiI/liJ3lp4vljJbvvIzosIPnlKjlkI7muLjmiI/lvIDlp4tcclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgLy8g55uR5o6n6ZSu55uY5oyJ5LiL5LqL5Lu277yM56e75Yqo6JuHXHJcbiAgICAgICAgLy8g6L+Z6YeM55qEdGhpc+S7jeeEtuaMh+WQkUdhbWVDb250cm9s5a+56LGh77yM6YCa6L+HdGhpcy5rZXlkb3duSGFuZGxlcuaJvuWIsGtleWRvd25IYW5kbGVy5Ye95pWwXHJcbiAgICAgICAgLy8g5YaN6YCa6L+HYmluZOaWueazleaUueWPmOS6hmtleWRvd25IYW5kbGVy55qEdGhpc+aMh+WQke+8jOS4jeWGjeaMh+WQkeiwg+eUqOiAheiAjOaYr+S4gOebtOaMh+WQkUdhbWVDb250cm9s5a+56LGh44CCXHJcbiAgICAgICAgLy8g5bCG6L+Z5pS55Y+Y5LqGdGhpc+eahOWHveaVsOS9nOS4uuWbnuiwg+WHveaVsFxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleWRvd25IYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgLy8g5oyJ5LiL6ZSu55uY5ZCO55qE5Zue6LCD77yM6ZSu55uY5oyJ5LiL5Zue6LCDXHJcbiAgICBrZXlkb3duSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIC8vIOmcgOimgeajgOafpWV2ZW50LmtleeeahOWAvOaYr+WQpuWQiOazlSjnlKjmiLfmmK/lkKbmjInkuobmraPnoa7nmoTmjInplK4pXHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xyXG4gICAgICAgICAgICAvLyDkv67mlLlkaXJlY3Rpb27lsZ7mgKdcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBldmVudC5rZXk7XHJcbiAgICAgICAgICAgIHRoaXMucnVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLypcclxuICAgIGRpcmVjdGlvbueahOWAvFxyXG4gICAgQXJyb3dVcCBVcFxyXG4gICAgQXJyb3dEb3duIERvd25cclxuICAgIEFycm93TGVmdCBMZWZ0XHJcbiAgICBBcnJvd1JpZ2h0IFJpZ2h0XHJcbiAgICAqL1xyXG4gICAgcnVuKCkge1xyXG4gICAgICAgIC8vIOWkhOeQhuaSnuWimVxyXG4gICAgICAgIGlmICh0aGlzLnNuYWtlLlggPD0gMCAmJiB0aGlzLmRpcmVjdGlvbiA9PSAnQXJyb3dMZWZ0JyB8fCB0aGlzLnNuYWtlLlggPj0gMjkwICYmIHRoaXMuZGlyZWN0aW9uID09ICdBcnJvd1JpZ2h0JyB8fCB0aGlzLnNuYWtlLlkgPD0gMCAmJiB0aGlzLmRpcmVjdGlvbiA9PSAnQXJyb3dVcCcgfHwgdGhpcy5zbmFrZS5ZID49IDI5MCAmJiB0aGlzLmRpcmVjdGlvbiA9PSAnQXJyb3dEb3duJykge1xyXG4gICAgICAgICAgICB0aGlzLmlzX2xpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnVXAnOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWQkeS4iuenu+WKqO+8jHRvcOWHj+WwkVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc25ha2UuWSAtPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdEb3duJzpcclxuICAgICAgICAgICAgICAgICAgICAvLyDlkJHkuIvnp7vliqjvvIx0b3Dlop7liqBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNuYWtlLlkgKz0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnTGVmdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5ZCR5bem56e75Yqo77yMbGVmdOWHj+WwkVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc25ha2UuWCAtPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnUmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWQkeWPs+enu+WKqO+8jGxlZnTlop7liqBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNuYWtlLlggKz0gMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Zyo5ri45oiP5LuN54S25Zyo6L+b6KGM5Lit55qE5oOF5Ya15LiL5omN5byA5ZCv5a6a5pe25ZmoXHJcbiAgICAgICAgdGhpcy5pc19saXZlICYmIHNldFRpbWVvdXQodGhpcy5ydW4uYmluZCh0aGlzKSwgMzAwIC0gKHRoaXMuc2NvcmVfcGFuZWwubGV2ZWwgLSAxKSAqIDEwKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udHJvbDtcclxuIiwiY2xhc3MgU2NvcmVQYW5lbCB7XHJcbiAgICAvLyDorr7nva7pu5jorqTlgLxcclxuICAgIGNvbnN0cnVjdG9yKG1heF9sZXZlbCA9IDEwMCwgdGhyZXNob2xkID0gMTApIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmxldmVsID0gMTtcclxuICAgICAgICAvLyDmhJ/lj7nlj7fooajnpLrogq/lrprkuI3kuLrnqbpcclxuICAgICAgICB0aGlzLnNjb3JlX2VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcclxuICAgICAgICB0aGlzLmxldmVsX2VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwnKTtcclxuICAgICAgICAvLyDpmIjlgLzlkozmnIDpq5jnrYnnuqflj6/ku6Xoh6rlt7Horr7lrppcclxuICAgICAgICB0aGlzLm1heF9sZXZlbCA9IG1heF9sZXZlbDtcclxuICAgICAgICB0aGlzLnRocmVzaG9sZCA9IHRocmVzaG9sZDtcclxuICAgIH1cclxuICAgIC8vIOiwg+eUqOWQju+8jOWIhuaVsOe0r+WKoOW5tuS4lOaUueWPmOmhtemdouWFg+e0oOS4iuaYvuekuueahOWAvFxyXG4gICAgYWRkU2NvcmUoKSB7XHJcbiAgICAgICAgLy8g5rOo5oSPaW5uZXJIVE1M6KaB5rGC5piv5a2X56ym5Liy77yM6ICMc2NvcmXmmK9udW1iZXLjgILmiYDku6XopoHov5vooYzovazmjaLjgIJcclxuICAgICAgICB0aGlzLnNjb3JlX2VsZW1lbnQuaW5uZXJIVE1MID0gKyt0aGlzLnNjb3JlICsgJyc7XHJcbiAgICAgICAgLy8g5q+P5Y2B57qn5Y2H5LiA5qyhbGV2ZWxcclxuICAgICAgICBpZiAodGhpcy5zY29yZSAlIDEwID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBMZXZlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwTGV2ZWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGV2ZWwgPCB0aGlzLm1heF9sZXZlbCkge1xyXG4gICAgICAgICAgICAvLyDotoXlh7rmnIDpq5jnrYnnuqfvvIzlsLHkuI3og73ljYfnuqfkuoZcclxuICAgICAgICAgICAgdGhpcy5sZXZlbF9lbGVtZW50LmlubmVySFRNTCA9ICsrdGhpcy5sZXZlbCArICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTY29yZVBhbmVsO1xyXG4iLCJjbGFzcyBTbmFrZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyDlnKjmlofmoaPkuIvvvIzmib7liLBJROS4unNuYWtl55qE5a655ZmoXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc25ha2UnKTtcclxuICAgICAgICAvLyDlnKhjb250YWluZXLkuIvmib7liLDnrKzkuIDkuKpkaXbvvIxxdWVyeVNlbGVjdG9y5Y+q5Lya5Y+W5LiA5LiqXHJcbiAgICAgICAgdGhpcy5oZWFkID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignZGl2Jyk7XHJcbiAgICAgICAgLy8g5ZyoY29udGFpbmVy5LiL5om+5Yiw5omA5pyJZGl277yM5LiN6KaB55SocXVlcnlTZWxlY3RvckFsbOWboOS4uuaWsOWinmRpduaXtuS4jeS8muabtOaWsOOAgiBcclxuICAgICAgICB0aGlzLmJvZGllcyA9IHRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkaXYnKTtcclxuICAgIH1cclxuICAgIC8vIOiOt+WPluibh+WktOWdkOagh1xyXG4gICAgZ2V0IFgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZC5vZmZzZXRMZWZ0O1xyXG4gICAgfVxyXG4gICAgZ2V0IFkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZC5vZmZzZXRUb3A7XHJcbiAgICB9XHJcbiAgICAvLyDorr7nva7om4flpLTnmoTlnZDmoIdcclxuICAgIHNldCBYKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkLnN0eWxlLmxlZnQgPSB2YWx1ZSArICdweCc7XHJcbiAgICB9XHJcbiAgICBzZXQgWSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuaGVhZC5zdHlsZS50b3AgPSB2YWx1ZSArICdweCc7XHJcbiAgICB9XHJcbiAgICAvLyDom4flop7liqDouqvkvZNcclxuICAgIGFkZEJvZHkoKSB7XHJcbiAgICAgICAgLy8g5re75Yqg5Yiw5a655Zmo5YaF5pyA5ZCO5LiA5Liq5YWD57Sg5LmL5ZCOXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAnPGRpdj48L2Rpdj4nKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTbmFrZTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2Nzcy9pbmRleC5sZXNzJztcclxuLy8g5byV5YWl5o6n5Yi25ZmoXHJcbmltcG9ydCBHYW1lQ29udHJvbCBmcm9tICcuL21vZHVsZXMvR2FtZUNvbnRyb2wnO1xyXG4vLyDpqazkuIrlvIDlp4vmuLjmiI9cclxuLy8gbmV355qE5pe25YCZ5Lya6ams5LiK6LCD55So5p6E6YCg5Ye95pWwLOWcqOaehOmAoOWHveaVsOmHjOW8gOWQr+a4uOaIj1xyXG5uZXcgR2FtZUNvbnRyb2woKTtcclxuIl0sIm5hbWVzIjpbIkZvb2QiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJuZXdfbGVmdCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm5ld190b3AiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJTbmFrZSIsIlNjb3JlUGFuZWwiLCJHYW1lQ29udHJvbCIsInNuYWtlIiwiZm9vZCIsInNjb3JlX3BhbmVsIiwiZGlyZWN0aW9uIiwiaXNfbGl2ZSIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5ZG93bkhhbmRsZXIiLCJiaW5kIiwiZXZlbnQiLCJrZXkiLCJydW4iLCJYIiwiWSIsInNldFRpbWVvdXQiLCJsZXZlbCIsIm1heF9sZXZlbCIsInRocmVzaG9sZCIsInNjb3JlIiwic2NvcmVfZWxlbWVudCIsImxldmVsX2VsZW1lbnQiLCJpbm5lckhUTUwiLCJ1cExldmVsIiwiY29udGFpbmVyIiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJib2RpZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInZhbHVlIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==