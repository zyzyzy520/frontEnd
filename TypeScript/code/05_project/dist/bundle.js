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
  function ScorePanel(max_level, threshold) {
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
/* harmony import */ var _modules_Food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Food */ "./src/modules/Food.ts");
/* harmony import */ var _modules_ScorePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ScorePanel */ "./src/modules/ScorePanel.ts");
 // 引入Food类

 // 引入ScorePanel类


var food = new _modules_Food__WEBPACK_IMPORTED_MODULE_1__["default"]();
var panel = new _modules_ScorePanel__WEBPACK_IMPORTED_MODULE_2__["default"](100, 10);
console.log(food.X);
var btn = document.getElementById('btn');

btn.onclick = function () {
  food.change_coordinate();
  panel.addScore();
};
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLE9BQUosR0FBZSxZQUFNO0VBQ2pCTixJQUFJLENBQUNPLGlCQUFMO0VBQ0FOLEtBQUssQ0FBQ08sUUFBTjtBQUNILENBSEQsQyIsInNvdXJjZXMiOlsid2VicGFjazovLzA1X3Byb2plY3QvLi9zcmMvbW9kdWxlcy9Gb29kLnRzIiwid2VicGFjazovLzA1X3Byb2plY3QvLi9zcmMvbW9kdWxlcy9TY29yZVBhbmVsLnRzIiwid2VicGFjazovLzA1X3Byb2plY3QvLi9zcmMvY3NzL2luZGV4Lmxlc3M/ODhkOCIsIndlYnBhY2s6Ly8wNV9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzA1X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzA1X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8wNV9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMDVfcHJvamVjdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGb29k57G75a6e546wXHJcbmNsYXNzIEZvb2Qge1xyXG4gICAgLy8g57uZ5bGe5oCn6LWL5Yid5aeL5YC8XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyDmhJ/lj7nlj7fooajnpLrogq/lrprkuI3kuLrnqbpcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vZCcpO1xyXG4gICAgfVxyXG4gICAgLy8g5a6a5LmJ5LiA5Liq6I635Y+W6aOf54mpWOWdkOagh+eahOaWueazlVxyXG4gICAgZ2V0IFgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5vZmZzZXRMZWZ0O1xyXG4gICAgfVxyXG4gICAgLy8g5a6a5LmJ5LiA5Liq6I635Y+WIOmjn+eJqVnlnZDmoIfnmoTmlrnms5VcclxuICAgIGdldCBZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQub2Zmc2V0VG9wO1xyXG4gICAgfVxyXG4gICAgLy8g5a6a5LmJ5LiA5Liq6ZqP5py65pS55Y+Y6aOf54mp5Z2Q5qCH55qE5pa55rOV77yM5Zug5Li66KaB5pS55Y+Y5Lik5Liq5Zyw5pa577yM5omA5Lul5LiN6IO955Soc2V077yMc2V05Y+q6IO95piv5LiA5Liq5Y+C5pWwXHJcbiAgICBjaGFuZ2VfY29vcmRpbmF0ZSgpIHtcclxuICAgICAgICAvLyDorr7nva7nmoR0b3DlkoxsZWZ05YC85LiN6IO96LaF6L+H6L6555WM77yM5omA5Lul6KaB5ZyoMH4yOTRweOS5i+mXtOOAguS9huWboOS4uuibh+aYr+S4gOiKguiKgueahO+8jOenu+WKqOS5n+aYr+S4gOagvOagvOeahO+8jOavj+S4gOagvOaYrzEw77yM5omA5Lul6aOf54mp5Zyo55qE5L2N572u5b6X5pivWzAsMjk0XeS5i+mXtDEw55qE5pW05pWw5YCNXHJcbiAgICAgICAgLy8g5YWI55Sf5oiQWzAsIDI5XeeahOaVtOaVsOWGjSoxMFxyXG4gICAgICAgIGxldCBuZXdfbGVmdCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI5KSAqIDEwO1xyXG4gICAgICAgIGxldCBuZXdfdG9wID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjkpICogMTA7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBuZXdfbGVmdCArICdweCc7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IG5ld190b3AgKyAncHgnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvb2Q7XHJcbiIsImNsYXNzIFNjb3JlUGFuZWwge1xyXG4gICAgY29uc3RydWN0b3IobWF4X2xldmVsLCB0aHJlc2hvbGQpIHtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmxldmVsID0gMTtcclxuICAgICAgICAvLyDmhJ/lj7nlj7fooajnpLrogq/lrprkuI3kuLrnqbpcclxuICAgICAgICB0aGlzLnNjb3JlX2VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcclxuICAgICAgICB0aGlzLmxldmVsX2VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwnKTtcclxuICAgICAgICAvLyDpmIjlgLzlkozmnIDpq5jnrYnnuqflj6/ku6Xoh6rlt7Horr7lrppcclxuICAgICAgICB0aGlzLm1heF9sZXZlbCA9IG1heF9sZXZlbDtcclxuICAgICAgICB0aGlzLnRocmVzaG9sZCA9IHRocmVzaG9sZDtcclxuICAgIH1cclxuICAgIC8vIOiwg+eUqOWQju+8jOWIhuaVsOe0r+WKoOW5tuS4lOaUueWPmOmhtemdouWFg+e0oOS4iuaYvuekuueahOWAvFxyXG4gICAgYWRkU2NvcmUoKSB7XHJcbiAgICAgICAgLy8g5rOo5oSPaW5uZXJIVE1M6KaB5rGC5piv5a2X56ym5Liy77yM6ICMc2NvcmXmmK9udW1iZXLjgILmiYDku6XopoHov5vooYzovazmjaLjgIJcclxuICAgICAgICB0aGlzLnNjb3JlX2VsZW1lbnQuaW5uZXJIVE1MID0gKyt0aGlzLnNjb3JlICsgJyc7XHJcbiAgICAgICAgLy8g5q+P5Y2B57qn5Y2H5LiA5qyhbGV2ZWxcclxuICAgICAgICBpZiAodGhpcy5zY29yZSAlIDEwID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBMZXZlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwTGV2ZWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGV2ZWwgPCB0aGlzLm1heF9sZXZlbCkge1xyXG4gICAgICAgICAgICAvLyDotoXlh7rmnIDpq5jnrYnnuqfvvIzlsLHkuI3og73ljYfnuqfkuoZcclxuICAgICAgICAgICAgdGhpcy5sZXZlbF9lbGVtZW50LmlubmVySFRNTCA9ICsrdGhpcy5sZXZlbCArICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTY29yZVBhbmVsO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY3NzL2luZGV4Lmxlc3MnO1xyXG4vLyDlvJXlhaVGb29k57G7XHJcbmltcG9ydCBGb29kIGZyb20gJy4vbW9kdWxlcy9Gb29kJztcclxuLy8g5byV5YWlU2NvcmVQYW5lbOexu1xyXG5pbXBvcnQgU2NvcmVQYW5lbCBmcm9tICcuL21vZHVsZXMvU2NvcmVQYW5lbCc7XHJcbmNvbnN0IGZvb2QgPSBuZXcgRm9vZCgpO1xyXG5jb25zdCBwYW5lbCA9IG5ldyBTY29yZVBhbmVsKDEwMCwgMTApO1xyXG5jb25zb2xlLmxvZyhmb29kLlgpO1xyXG5sZXQgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bicpO1xyXG5idG4ub25jbGljayA9ICgoKSA9PiB7XHJcbiAgICBmb29kLmNoYW5nZV9jb29yZGluYXRlKCk7XHJcbiAgICBwYW5lbC5hZGRTY29yZSgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIkZvb2QiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJuZXdfbGVmdCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm5ld190b3AiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJTY29yZVBhbmVsIiwibWF4X2xldmVsIiwidGhyZXNob2xkIiwic2NvcmUiLCJsZXZlbCIsInNjb3JlX2VsZW1lbnQiLCJsZXZlbF9lbGVtZW50IiwiaW5uZXJIVE1MIiwidXBMZXZlbCIsImZvb2QiLCJwYW5lbCIsImNvbnNvbGUiLCJsb2ciLCJYIiwiYnRuIiwib25jbGljayIsImNoYW5nZV9jb29yZGluYXRlIiwiYWRkU2NvcmUiXSwic291cmNlUm9vdCI6IiJ9