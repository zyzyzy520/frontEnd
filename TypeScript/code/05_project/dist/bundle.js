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
    this.direction = ""; // 马上初始化开启游戏

    this.init();
  } // 游戏初始化，调用后游戏开始


  _createClass(GameControl, [{
    key: "init",
    value: function init() {
      var _this = this;

      // 监控键盘按下事件，移动蛇
      document.addEventListener('keydown', function (event) {
        // 将该函数作为键盘按下的回调后，按下键盘会触发该事件，此时的this指向的调用者不再是GameControl对象
        _this.direction = event.key;
        console.log(_this.direction);
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Q0NMQTs7Q0FFQTtBQUNBOztBQUNBLElBQUlFLDREQUFKLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wNV9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvRm9vZC50cyIsIndlYnBhY2s6Ly8wNV9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvR2FtZUNvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vMDVfcHJvamVjdC8uL3NyYy9tb2R1bGVzL1Njb3JlUGFuZWwudHMiLCJ3ZWJwYWNrOi8vMDVfcHJvamVjdC8uL3NyYy9tb2R1bGVzL1NuYWtlLnRzIiwid2VicGFjazovLzA1X3Byb2plY3QvLi9zcmMvY3NzL2luZGV4Lmxlc3M/ODhkOCIsIndlYnBhY2s6Ly8wNV9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzA1X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzA1X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8wNV9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMDVfcHJvamVjdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb29k57G75a6e546wXHJcbmNsYXNzIEZvb2Qge1xyXG4gICAgLy8g57uZ5bGe5oCn6LWL5Yid5aeL5YC8XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyDmhJ/lj7nlj7fooajnpLrogq/lrprkuI3kuLrnqbpcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vZCcpO1xyXG4gICAgfVxyXG4gICAgLy8g5a6a5LmJ5LiA5Liq6I635Y+W6aOf54mpWOWdkOagh+eahOaWueazlVxyXG4gICAgZ2V0IFgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5vZmZzZXRMZWZ0O1xyXG4gICAgfVxyXG4gICAgLy8g5a6a5LmJ5LiA5Liq6I635Y+WIOmjn+eJqVnlnZDmoIfnmoTmlrnms5VcclxuICAgIGdldCBZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQub2Zmc2V0VG9wO1xyXG4gICAgfVxyXG4gICAgLy8g5a6a5LmJ5LiA5Liq6ZqP5py65pS55Y+Y6aOf54mp5Z2Q5qCH55qE5pa55rOV77yM5Zug5Li66KaB5pS55Y+Y5Lik5Liq5Zyw5pa577yM5omA5Lul5LiN6IO955Soc2V077yMc2V05Y+q6IO95piv5LiA5Liq5Y+C5pWwXHJcbiAgICBjaGFuZ2VfY29vcmRpbmF0ZSgpIHtcclxuICAgICAgICAvLyDorr7nva7nmoR0b3DlkoxsZWZ05YC85LiN6IO96LaF6L+H6L6555WM77yM5omA5Lul6KaB5ZyoMH4yOTRweOS5i+mXtOOAguS9huWboOS4uuibh+aYr+S4gOiKguiKgueahO+8jOenu+WKqOS5n+aYr+S4gOagvOagvOeahO+8jOavj+S4gOagvOaYrzEw77yM5omA5Lul6aOf54mp5Zyo55qE5L2N572u5b6X5pivWzAsMjk0XeS5i+mXtDEw55qE5pW05pWw5YCNXHJcbiAgICAgICAgLy8g5YWI55Sf5oiQWzAsIDI5XeeahOaVtOaVsOWGjSoxMFxyXG4gICAgICAgIGxldCBuZXdfbGVmdCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI5KSAqIDEwO1xyXG4gICAgICAgIGxldCBuZXdfdG9wID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjkpICogMTA7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBuZXdfbGVmdCArICdweCc7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IG5ld190b3AgKyAncHgnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvb2Q7XHJcbiIsImltcG9ydCBTbmFrZSBmcm9tIFwiLi9TbmFrZVwiO1xyXG5pbXBvcnQgRm9vZCBmcm9tIFwiLi9Gb29kXCI7XHJcbmltcG9ydCBTY29yZVBhbmVsIGZyb20gXCIuL1Njb3JlUGFuZWxcIjtcclxuLy8g5ri45oiP5o6n5Yi25Zmo77yM5o6n5Yi25YW25LuW5omA5pyJ57G7XHJcbmNsYXNzIEdhbWVDb250cm9sIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc25ha2UgPSBuZXcgU25ha2UoKTtcclxuICAgICAgICB0aGlzLmZvb2QgPSBuZXcgRm9vZCgpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVfcGFuZWwgPSBuZXcgU2NvcmVQYW5lbCgpO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJcIjtcclxuICAgICAgICAvLyDpqazkuIrliJ3lp4vljJblvIDlkK/muLjmiI9cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuICAgIC8vIOa4uOaIj+WIneWni+WMlu+8jOiwg+eUqOWQjua4uOaIj+W8gOWni1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAvLyDnm5HmjqfplK7nm5jmjInkuIvkuovku7bvvIznp7vliqjom4dcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOWwhuivpeWHveaVsOS9nOS4uumUruebmOaMieS4i+eahOWbnuiwg+WQju+8jOaMieS4i+mUruebmOS8muinpuWPkeivpeS6i+S7tu+8jOatpOaXtueahHRoaXPmjIflkJHnmoTosIPnlKjogIXkuI3lho3mmK9HYW1lQ29udHJvbOWvueixoVxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGV2ZW50LmtleTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kaXJlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sO1xyXG4iLCJjbGFzcyBTY29yZVBhbmVsIHtcclxuICAgIC8vIOiuvue9rum7mOiupOWAvFxyXG4gICAgY29uc3RydWN0b3IobWF4X2xldmVsID0gMTAwLCB0aHJlc2hvbGQgPSAxMCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAxO1xyXG4gICAgICAgIC8vIOaEn+WPueWPt+ihqOekuuiCr+WumuS4jeS4uuepulxyXG4gICAgICAgIHRoaXMuc2NvcmVfZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xyXG4gICAgICAgIHRoaXMubGV2ZWxfZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZlbCcpO1xyXG4gICAgICAgIC8vIOmYiOWAvOWSjOacgOmrmOetiee6p+WPr+S7peiHquW3seiuvuWumlxyXG4gICAgICAgIHRoaXMubWF4X2xldmVsID0gbWF4X2xldmVsO1xyXG4gICAgICAgIHRoaXMudGhyZXNob2xkID0gdGhyZXNob2xkO1xyXG4gICAgfVxyXG4gICAgLy8g6LCD55So5ZCO77yM5YiG5pWw57Sv5Yqg5bm25LiU5pS55Y+Y6aG16Z2i5YWD57Sg5LiK5pi+56S655qE5YC8XHJcbiAgICBhZGRTY29yZSgpIHtcclxuICAgICAgICAvLyDms6jmhI9pbm5lckhUTUzopoHmsYLmmK/lrZfnrKbkuLLvvIzogIxzY29yZeaYr251bWJlcuOAguaJgOS7peimgei/m+ihjOi9rOaNouOAglxyXG4gICAgICAgIHRoaXMuc2NvcmVfZWxlbWVudC5pbm5lckhUTUwgPSArK3RoaXMuc2NvcmUgKyAnJztcclxuICAgICAgICAvLyDmr4/ljYHnuqfljYfkuIDmrKFsZXZlbFxyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlICUgMTAgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy51cExldmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBMZXZlbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5sZXZlbCA8IHRoaXMubWF4X2xldmVsKSB7XHJcbiAgICAgICAgICAgIC8vIOi2heWHuuacgOmrmOetiee6p++8jOWwseS4jeiDveWNh+e6p+S6hlxyXG4gICAgICAgICAgICB0aGlzLmxldmVsX2VsZW1lbnQuaW5uZXJIVE1MID0gKyt0aGlzLmxldmVsICsgJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNjb3JlUGFuZWw7XHJcbiIsImNsYXNzIFNuYWtlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIOWcqOaWh+aho+S4i++8jOaJvuWIsElE5Li6c25ha2XnmoTlrrnlmahcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbmFrZScpO1xyXG4gICAgICAgIC8vIOWcqGNvbnRhaW5lcuS4i+aJvuWIsOesrOS4gOS4qmRpdu+8jHF1ZXJ5U2VsZWN0b3Llj6rkvJrlj5bkuIDkuKpcclxuICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcclxuICAgICAgICAvLyDlnKhjb250YWluZXLkuIvmib7liLDmiYDmnIlkaXbvvIzkuI3opoHnlKhxdWVyeVNlbGVjdG9yQWxs5Zug5Li65paw5aKeZGl25pe25LiN5Lya5pu05paw44CCIFxyXG4gICAgICAgIHRoaXMuYm9kaWVzID0gdGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpdicpO1xyXG4gICAgfVxyXG4gICAgLy8g6I635Y+W6JuH5aS05Z2Q5qCHXHJcbiAgICBnZXQgWCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFkLm9mZnNldExlZnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgWSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFkLm9mZnNldFRvcDtcclxuICAgIH1cclxuICAgIC8vIOiuvue9ruibh+WktOeahOWdkOagh1xyXG4gICAgc2V0IFgodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmhlYWQuc3R5bGUubGVmdCA9IHZhbHVlICsgJ3B4JztcclxuICAgIH1cclxuICAgIHNldCBZKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkLnN0eWxlLnRvcCA9IHZhbHVlICsgJ3B4JztcclxuICAgIH1cclxuICAgIC8vIOibh+WinuWKoOi6q+S9k1xyXG4gICAgYWRkQm9keSgpIHtcclxuICAgICAgICAvLyDmt7vliqDliLDlrrnlmajlhoXmnIDlkI7kuIDkuKrlhYPntKDkuYvlkI5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICc8ZGl2PjwvZGl2PicpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNuYWtlO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY3NzL2luZGV4Lmxlc3MnO1xyXG4vLyDlvJXlhaXmjqfliLblmahcclxuaW1wb3J0IEdhbWVDb250cm9sIGZyb20gJy4vbW9kdWxlcy9HYW1lQ29udHJvbCc7XHJcbi8vIOmprOS4iuW8gOWni+a4uOaIj1xyXG4vLyBuZXfnmoTml7blgJnkvJrpqazkuIrosIPnlKjmnoTpgKDlh73mlbAs5Zyo5p6E6YCg5Ye95pWw6YeM5byA5ZCv5ri45oiPXHJcbm5ldyBHYW1lQ29udHJvbCgpO1xyXG4iXSwibmFtZXMiOlsiRm9vZCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsIm5ld19sZWZ0IiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwibmV3X3RvcCIsInN0eWxlIiwibGVmdCIsInRvcCIsIlNuYWtlIiwiU2NvcmVQYW5lbCIsIkdhbWVDb250cm9sIiwic25ha2UiLCJmb29kIiwic2NvcmVfcGFuZWwiLCJkaXJlY3Rpb24iLCJpbml0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5IiwiY29uc29sZSIsImxvZyIsIm1heF9sZXZlbCIsInRocmVzaG9sZCIsInNjb3JlIiwibGV2ZWwiLCJzY29yZV9lbGVtZW50IiwibGV2ZWxfZWxlbWVudCIsImlubmVySFRNTCIsInVwTGV2ZWwiLCJjb250YWluZXIiLCJoZWFkIiwicXVlcnlTZWxlY3RvciIsImJvZGllcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidmFsdWUiLCJpbnNlcnRBZGphY2VudEhUTUwiXSwic291cmNlUm9vdCI6IiJ9