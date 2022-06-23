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
    this.is_live = true;
    this.opposite_direction = {
      'ArrowUp': 'ArrowDown',
      'ArrowDown': 'ArrowUp',
      'ArrowLeft': 'ArrowRight',
      'ArrowRight': 'ArrowLeft'
    }; // 马上初始化开启游戏

    this.init();
  } // 游戏初始化，调用后游戏开始


  _createClass(GameControl, [{
    key: "init",
    value: function init() {
      // 监控键盘按下事件，移动蛇
      // 这里的this仍然指向GameControl对象，通过this.keydownHandler找到keydownHandler函数
      // 再通过bind方法改变了keydownHandler的this指向，不再指向调用者而是一直指向GameControl对象。
      // 将这改变了this的函数作为回调函数
      document.addEventListener('keydown', this.keydownHandler.bind(this)); // 启动游戏

      this.run();
    } // 按下键盘后的回调，键盘按下回调

  }, {
    key: "keydownHandler",
    value: function keydownHandler(event) {
      // 需要检查event.key的值是否合法(用户是否按了正确的按键)
      // 在是合法键的基础上，还需要判断是否和当前正在运动的方向相反
      // if ((event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') && event.key !== this.opposite_direction[this.direction]) {
      //     console.log(event.key, this.direction);
      //     this.direction = event.key;
      // }
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        this.direction = event.key;
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
      // 判断是否食物：蛇头的坐标和食物的坐标相等
      this.checkEat(this.snake.X, this.snake.Y);

      try {
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
            break;
        }
      } catch (e) {
        // 撞墙后，打印提示信息
        alert(e.message); // 让游戏停止

        this.is_live = false;
      }

      console.log(this.score_panel.level); // 在游戏仍然在进行中的情况下才开启定时器

      this.is_live && setTimeout(this.run.bind(this), 300 - (this.score_panel.level - 1) * 50);
    } // 检查是否吃到食物

  }, {
    key: "checkEat",
    value: function checkEat(X, Y) {
      if (X === this.food.X && this.snake.Y === this.food.Y) {
        // 分数+1
        this.score_panel.addScore(); // 改变食物坐标

        this.food.change_coordinate(); // 增加蛇身

        this.snake.addBody(this.direction);
      }
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
    var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

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
      this.score_element.innerHTML = ++this.score + ''; // 每阈值升一次level

      if (this.score % this.threshold === 0) {
        this.upLevel();
      }
    }
  }, {
    key: "upLevel",
    value: function upLevel() {
      // 没有超出最高等级，才进行升级
      if (this.level < this.max_level) {
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
      // x的值的合法范围是0-290之间
      if (value < 0 || value > 290) {
        // 不合法，抛出错误
        throw new Error('蛇撞墙了');
      } // 1.在移动前判断是否是相反方向


      if (this.bodies.length > 1 && this.bodies[1].offsetLeft === value) {
        //2. 是相反方向，判断当前方向是向左还是向右
        if (value > this.X) {
          // 3. 身体第一节位置的left值比蛇头的left值大说明目前正向左移动
          value = this.X - 10;
        } else {
          // 4. 身体第一节位置的left值比蛇头的left值小说明目前正向右移动
          value = this.X + 10;
        }
      }

      this.moveBody(); // 在蛇移动完身体后检查蛇头如果移动是否会撞到自己

      this.checkBody(value, this.Y);
      this.head.style.left = value + 'px';
    }
  }, {
    key: "Y",
    get: function get() {
      return this.head.offsetTop;
    },
    set: function set(value) {
      // y的值的合法范围是0-290之间
      if (value < 0 || value > 290) {
        // 不合法，抛出错误
        throw new Error('蛇撞墙了');
      } // 1.在移动前判断是否是相反方向


      if (this.bodies.length > 1 && this.bodies[1].offsetTop === value) {
        //2. 是相反方向，判断当前方向是向下还是向上
        if (value > this.Y) {
          // 3. 身体第一节位置的left值比蛇头的top值大说明目前正向上移动
          value = this.Y - 10;
        } else {
          // 4. 身体第一节位置的left值比蛇头的top值小说明目前正向下移动
          value = this.Y + 10;
        }
      }

      this.moveBody(); // 在蛇移动完身体后检查蛇头如果移动是否会撞到自己

      this.checkBody(this.X, value);
      this.head.style.top = value + 'px';
    } // 蛇增加身体

  }, {
    key: "addBody",
    value: function addBody(direction) {
      // console.dir(this.container.lastElementChild!);
      // 1.获取当前蛇的最后一个div，即最后一部分
      // let last_part = this.container.lastElementChild! as HTMLElement;
      // let new_part_x: number = 0, new_part_y: number = 0;
      // // 2.要根据当前方向设置新加入部分的div的初始位置
      // switch (direction) {
      //     case 'ArrowUp':
      //     case 'Up':
      //         // 目前正向上移动
      //         new_part_x = last_part.offsetLeft;
      //         new_part_y = last_part.offsetTop + 10;
      //         break;
      //     case 'ArrowDown':
      //     case 'Down':
      //         // 目前正向下移动
      //         new_part_x = last_part.offsetLeft;
      //         new_part_y = last_part.offsetTop - 10;
      //         break;
      //     case 'ArrowLeft':
      //     case 'Left':
      //         // 目前正向左移动
      //         new_part_x = last_part.offsetLeft + 10;
      //         new_part_y = last_part.offsetTop;
      //         break;
      //     case 'ArrowRight':
      //     case 'Right':
      //         // 目前正向右移动
      //         new_part_x = last_part.offsetLeft - 10;
      //         new_part_y = last_part.offsetTop;
      // }
      // // 添加到容器内最后一个元素之后
      // this.container.insertAdjacentHTML('beforeend', `<div style="left: ${new_part_x}px; top: ${new_part_y}px"></div>`)
      this.container.insertAdjacentHTML('beforeend', "<div></div>");
    } // 蛇移动身体

  }, {
    key: "moveBody",
    value: function moveBody() {
      // 除蛇头外的，蛇身移动
      for (var i = this.bodies.length - 1; i > 0; i--) {
        // 移动到上一节的位置
        this.bodies[i].style.left = this.bodies[i - 1].offsetLeft + 'px';
        this.bodies[i].style.top = this.bodies[i - 1].offsetTop + 'px';
      }
    } //检查如果蛇头移动是否会碰到身体

  }, {
    key: "checkBody",
    value: function checkBody(value_x, value_y) {
      // 遍历蛇身，看是否会坐标值相等，
      for (var i = 1; i < this.bodies.length; i++) {
        var part = this.bodies[i];

        if (value_x === part.offsetLeft && value_y === part.offsetTop) {
          throw new Error('蛇撞到自己啦！');
        }
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEtBQUssSUFBSUYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLUixNQUFMLENBQVlJLE1BQWhDLEVBQXdDSSxDQUFDLEVBQXpDLEVBQTZDO1FBQ3pDLElBQUlHLElBQUksR0FBRyxLQUFLWCxNQUFMLENBQVlRLENBQVosQ0FBWDs7UUFDQSxJQUFJQyxPQUFPLEtBQUtFLElBQUksQ0FBQzVELFVBQWpCLElBQStCMkQsT0FBTyxLQUFLQyxJQUFJLENBQUMzRCxTQUFwRCxFQUErRDtVQUMzRCxNQUFNLElBQUltRCxLQUFKLENBQVUsU0FBVixDQUFOO1FBQ0g7TUFDSjtJQUNKOzs7Ozs7QUFFTCxpRUFBZTFDLEtBQWY7Ozs7Ozs7Ozs7O0FDdkhBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQSw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztDQ0xBOztDQUVBO0FBQ0E7O0FBQ0EsSUFBSUUsNERBQUosRyIsInNvdXJjZXMiOlsid2VicGFjazovLzA1X3Byb2plY3QvLi9zcmMvbW9kdWxlcy9Gb29kLnRzIiwid2VicGFjazovLzA1X3Byb2plY3QvLi9zcmMvbW9kdWxlcy9HYW1lQ29udHJvbC50cyIsIndlYnBhY2s6Ly8wNV9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvU2NvcmVQYW5lbC50cyIsIndlYnBhY2s6Ly8wNV9wcm9qZWN0Ly4vc3JjL21vZHVsZXMvU25ha2UudHMiLCJ3ZWJwYWNrOi8vMDVfcHJvamVjdC8uL3NyYy9jc3MvaW5kZXgubGVzcz84OGQ4Iiwid2VicGFjazovLzA1X3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMDVfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMDVfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzA1X3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8wNV9wcm9qZWN0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZvb2Tnsbvlrp7njrBcclxuY2xhc3MgRm9vZCB7XHJcbiAgICAvLyDnu5nlsZ7mgKfotYvliJ3lp4vlgLxcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIOaEn+WPueWPt+ihqOekuuiCr+WumuS4jeS4uuepulxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb29kJyk7XHJcbiAgICB9XHJcbiAgICAvLyDlrprkuYnkuIDkuKrojrflj5bpo5/nialY5Z2Q5qCH55qE5pa55rOVXHJcbiAgICBnZXQgWCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm9mZnNldExlZnQ7XHJcbiAgICB9XHJcbiAgICAvLyDlrprkuYnkuIDkuKrojrflj5Yg6aOf54mpWeWdkOagh+eahOaWueazlVxyXG4gICAgZ2V0IFkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICB9XHJcbiAgICAvLyDlrprkuYnkuIDkuKrpmo/mnLrmlLnlj5jpo5/nianlnZDmoIfnmoTmlrnms5XvvIzlm6DkuLropoHmlLnlj5jkuKTkuKrlnLDmlrnvvIzmiYDku6XkuI3og73nlKhzZXTvvIxzZXTlj6rog73mmK/kuIDkuKrlj4LmlbBcclxuICAgIGNoYW5nZV9jb29yZGluYXRlKCkge1xyXG4gICAgICAgIC8vIOiuvue9rueahHRvcOWSjGxlZnTlgLzkuI3og73otoXov4fovrnnlYzvvIzmiYDku6XopoHlnKgwfjI5NHB45LmL6Ze044CC5L2G5Zug5Li66JuH5piv5LiA6IqC6IqC55qE77yM56e75Yqo5Lmf5piv5LiA5qC85qC855qE77yM5q+P5LiA5qC85pivMTDvvIzmiYDku6Xpo5/nianlnKjnmoTkvY3nva7lvpfmmK9bMCwyOTRd5LmL6Ze0MTDnmoTmlbTmlbDlgI1cclxuICAgICAgICAvLyDlhYjnlJ/miJBbMCwgMjld55qE5pW05pWw5YaNKjEwXHJcbiAgICAgICAgbGV0IG5ld19sZWZ0ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjkpICogMTA7XHJcbiAgICAgICAgbGV0IG5ld190b3AgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyOSkgKiAxMDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IG5ld19sZWZ0ICsgJ3B4JztcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gbmV3X3RvcCArICdweCc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9vZDtcclxuIiwiaW1wb3J0IFNuYWtlIGZyb20gXCIuL1NuYWtlXCI7XHJcbmltcG9ydCBGb29kIGZyb20gXCIuL0Zvb2RcIjtcclxuaW1wb3J0IFNjb3JlUGFuZWwgZnJvbSBcIi4vU2NvcmVQYW5lbFwiO1xyXG4vLyDmuLjmiI/mjqfliLblmajvvIzmjqfliLblhbbku5bmiYDmnInnsbtcclxuY2xhc3MgR2FtZUNvbnRyb2wge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZSgpO1xyXG4gICAgICAgIHRoaXMuZm9vZCA9IG5ldyBGb29kKCk7XHJcbiAgICAgICAgdGhpcy5zY29yZV9wYW5lbCA9IG5ldyBTY29yZVBhbmVsKCk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuaXNfbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vcHBvc2l0ZV9kaXJlY3Rpb24gPSB7XHJcbiAgICAgICAgICAgICdBcnJvd1VwJzogJ0Fycm93RG93bicsXHJcbiAgICAgICAgICAgICdBcnJvd0Rvd24nOiAnQXJyb3dVcCcsXHJcbiAgICAgICAgICAgICdBcnJvd0xlZnQnOiAnQXJyb3dSaWdodCcsXHJcbiAgICAgICAgICAgICdBcnJvd1JpZ2h0JzogJ0Fycm93TGVmdCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIOmprOS4iuWIneWni+WMluW8gOWQr+a4uOaIj1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgLy8g5ri45oiP5Yid5aeL5YyW77yM6LCD55So5ZCO5ri45oiP5byA5aeLXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIC8vIOebkeaOp+mUruebmOaMieS4i+S6i+S7tu+8jOenu+WKqOibh1xyXG4gICAgICAgIC8vIOi/memHjOeahHRoaXPku43nhLbmjIflkJFHYW1lQ29udHJvbOWvueixoe+8jOmAmui/h3RoaXMua2V5ZG93bkhhbmRsZXLmib7liLBrZXlkb3duSGFuZGxlcuWHveaVsFxyXG4gICAgICAgIC8vIOWGjemAmui/h2JpbmTmlrnms5XmlLnlj5jkuoZrZXlkb3duSGFuZGxlcueahHRoaXPmjIflkJHvvIzkuI3lho3mjIflkJHosIPnlKjogIXogIzmmK/kuIDnm7TmjIflkJFHYW1lQ29udHJvbOWvueixoeOAglxyXG4gICAgICAgIC8vIOWwhui/meaUueWPmOS6hnRoaXPnmoTlh73mlbDkvZzkuLrlm57osIPlh73mlbBcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlkb3duSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyDlkK/liqjmuLjmiI9cclxuICAgICAgICB0aGlzLnJ1bigpO1xyXG4gICAgfVxyXG4gICAgLy8g5oyJ5LiL6ZSu55uY5ZCO55qE5Zue6LCD77yM6ZSu55uY5oyJ5LiL5Zue6LCDXHJcbiAgICBrZXlkb3duSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIC8vIOmcgOimgeajgOafpWV2ZW50LmtleeeahOWAvOaYr+WQpuWQiOazlSjnlKjmiLfmmK/lkKbmjInkuobmraPnoa7nmoTmjInplK4pXHJcbiAgICAgICAgLy8g5Zyo5piv5ZCI5rOV6ZSu55qE5Z+656GA5LiK77yM6L+Y6ZyA6KaB5Yik5pat5piv5ZCm5ZKM5b2T5YmN5q2j5Zyo6L+Q5Yqo55qE5pa55ZCR55u45Y+NXHJcbiAgICAgICAgLy8gaWYgKChldmVudC5rZXkgPT09ICdBcnJvd1VwJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93TGVmdCcgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcpICYmIGV2ZW50LmtleSAhPT0gdGhpcy5vcHBvc2l0ZV9kaXJlY3Rpb25bdGhpcy5kaXJlY3Rpb25dKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGV2ZW50LmtleSwgdGhpcy5kaXJlY3Rpb24pO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmRpcmVjdGlvbiA9IGV2ZW50LmtleTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGV2ZW50LmtleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgZGlyZWN0aW9u55qE5YC8XHJcbiAgICBBcnJvd1VwIFVwXHJcbiAgICBBcnJvd0Rvd24gRG93blxyXG4gICAgQXJyb3dMZWZ0IExlZnRcclxuICAgIEFycm93UmlnaHQgUmlnaHRcclxuICAgICovXHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgLy8g5Yik5pat5piv5ZCm6aOf54mp77ya6JuH5aS055qE5Z2Q5qCH5ZKM6aOf54mp55qE5Z2Q5qCH55u4562JXHJcbiAgICAgICAgdGhpcy5jaGVja0VhdCh0aGlzLnNuYWtlLlgsIHRoaXMuc25ha2UuWSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdVcCc6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5ZCR5LiK56e75Yqo77yMdG9w5YeP5bCRXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbmFrZS5ZIC09IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0Rvd24nOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWQkeS4i+enu+WKqO+8jHRvcOWinuWKoFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc25ha2UuWSArPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdMZWZ0JzpcclxuICAgICAgICAgICAgICAgICAgICAvLyDlkJHlt6bnp7vliqjvvIxsZWZ05YeP5bCRXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbmFrZS5YIC09IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdSaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5ZCR5Y+z56e75Yqo77yMbGVmdOWinuWKoFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc25ha2UuWCArPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyDmkp7lopnlkI7vvIzmiZPljbDmj5DnpLrkv6Hmga9cclxuICAgICAgICAgICAgYWxlcnQoZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgLy8g6K6p5ri45oiP5YGc5q2iXHJcbiAgICAgICAgICAgIHRoaXMuaXNfbGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNjb3JlX3BhbmVsLmxldmVsKTtcclxuICAgICAgICAvLyDlnKjmuLjmiI/ku43nhLblnKjov5vooYzkuK3nmoTmg4XlhrXkuIvmiY3lvIDlkK/lrprml7blmahcclxuICAgICAgICB0aGlzLmlzX2xpdmUgJiYgc2V0VGltZW91dCh0aGlzLnJ1bi5iaW5kKHRoaXMpLCAzMDAgLSAodGhpcy5zY29yZV9wYW5lbC5sZXZlbCAtIDEpICogNTApO1xyXG4gICAgfVxyXG4gICAgLy8g5qOA5p+l5piv5ZCm5ZCD5Yiw6aOf54mpXHJcbiAgICBjaGVja0VhdChYLCBZKSB7XHJcbiAgICAgICAgaWYgKFggPT09IHRoaXMuZm9vZC5YICYmIHRoaXMuc25ha2UuWSA9PT0gdGhpcy5mb29kLlkpIHtcclxuICAgICAgICAgICAgLy8g5YiG5pWwKzFcclxuICAgICAgICAgICAgdGhpcy5zY29yZV9wYW5lbC5hZGRTY29yZSgpO1xyXG4gICAgICAgICAgICAvLyDmlLnlj5jpo5/nianlnZDmoIdcclxuICAgICAgICAgICAgdGhpcy5mb29kLmNoYW5nZV9jb29yZGluYXRlKCk7XHJcbiAgICAgICAgICAgIC8vIOWinuWKoOibh+i6q1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlLmFkZEJvZHkodGhpcy5kaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udHJvbDtcclxuIiwiY2xhc3MgU2NvcmVQYW5lbCB7XHJcbiAgICAvLyDorr7nva7pu5jorqTlgLxcclxuICAgIGNvbnN0cnVjdG9yKG1heF9sZXZlbCA9IDEwMCwgdGhyZXNob2xkID0gMikge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAxO1xyXG4gICAgICAgIC8vIOaEn+WPueWPt+ihqOekuuiCr+WumuS4jeS4uuepulxyXG4gICAgICAgIHRoaXMuc2NvcmVfZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xyXG4gICAgICAgIHRoaXMubGV2ZWxfZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZlbCcpO1xyXG4gICAgICAgIC8vIOmYiOWAvOWSjOacgOmrmOetiee6p+WPr+S7peiHquW3seiuvuWumlxyXG4gICAgICAgIHRoaXMubWF4X2xldmVsID0gbWF4X2xldmVsO1xyXG4gICAgICAgIHRoaXMudGhyZXNob2xkID0gdGhyZXNob2xkO1xyXG4gICAgfVxyXG4gICAgLy8g6LCD55So5ZCO77yM5YiG5pWw57Sv5Yqg5bm25LiU5pS55Y+Y6aG16Z2i5YWD57Sg5LiK5pi+56S655qE5YC8XHJcbiAgICBhZGRTY29yZSgpIHtcclxuICAgICAgICAvLyDms6jmhI9pbm5lckhUTUzopoHmsYLmmK/lrZfnrKbkuLLvvIzogIxzY29yZeaYr251bWJlcuOAguaJgOS7peimgei/m+ihjOi9rOaNouOAglxyXG4gICAgICAgIHRoaXMuc2NvcmVfZWxlbWVudC5pbm5lckhUTUwgPSArK3RoaXMuc2NvcmUgKyAnJztcclxuICAgICAgICAvLyDmr4/pmIjlgLzljYfkuIDmrKFsZXZlbFxyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlICUgdGhpcy50aHJlc2hvbGQgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy51cExldmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBMZXZlbCgpIHtcclxuICAgICAgICAvLyDmsqHmnInotoXlh7rmnIDpq5jnrYnnuqfvvIzmiY3ov5vooYzljYfnuqdcclxuICAgICAgICBpZiAodGhpcy5sZXZlbCA8IHRoaXMubWF4X2xldmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxfZWxlbWVudC5pbm5lckhUTUwgPSArK3RoaXMubGV2ZWwgKyAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2NvcmVQYW5lbDtcclxuIiwiY2xhc3MgU25ha2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8g5Zyo5paH5qGj5LiL77yM5om+5YiwSUTkuLpzbmFrZeeahOWuueWZqFxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NuYWtlJyk7XHJcbiAgICAgICAgLy8g5ZyoY29udGFpbmVy5LiL5om+5Yiw56ys5LiA5LiqZGl277yMcXVlcnlTZWxlY3RvcuWPquS8muWPluS4gOS4qlxyXG4gICAgICAgIHRoaXMuaGVhZCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xyXG4gICAgICAgIC8vIOWcqGNvbnRhaW5lcuS4i+aJvuWIsOaJgOaciWRpdu+8jOS4jeimgeeUqHF1ZXJ5U2VsZWN0b3JBbGzlm6DkuLrmlrDlop5kaXbml7bkuI3kvJrmm7TmlrDjgIIgXHJcbiAgICAgICAgdGhpcy5ib2RpZXMgPSB0aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZGl2Jyk7XHJcbiAgICB9XHJcbiAgICAvLyDojrflj5bom4flpLTlnZDmoIdcclxuICAgIGdldCBYKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWQub2Zmc2V0TGVmdDtcclxuICAgIH1cclxuICAgIGdldCBZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWQub2Zmc2V0VG9wO1xyXG4gICAgfVxyXG4gICAgLy8g6K6+572u6JuH5aS055qE5Z2Q5qCHXHJcbiAgICBzZXQgWCh2YWx1ZSkge1xyXG4gICAgICAgIC8vIHjnmoTlgLznmoTlkIjms5XojIPlm7TmmK8wLTI5MOS5i+mXtFxyXG4gICAgICAgIGlmICh2YWx1ZSA8IDAgfHwgdmFsdWUgPiAyOTApIHtcclxuICAgICAgICAgICAgLy8g5LiN5ZCI5rOV77yM5oqb5Ye66ZSZ6K+vXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign6JuH5pKe5aKZ5LqGJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIDEu5Zyo56e75Yqo5YmN5Yik5pat5piv5ZCm5piv55u45Y+N5pa55ZCRXHJcbiAgICAgICAgaWYgKHRoaXMuYm9kaWVzLmxlbmd0aCA+IDEgJiYgdGhpcy5ib2RpZXNbMV0ub2Zmc2V0TGVmdCA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgLy8yLiDmmK/nm7jlj43mlrnlkJHvvIzliKTmlq3lvZPliY3mlrnlkJHmmK/lkJHlt6bov5jmmK/lkJHlj7NcclxuICAgICAgICAgICAgaWYgKHZhbHVlID4gdGhpcy5YKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAzLiDouqvkvZPnrKzkuIDoioLkvY3nva7nmoRsZWZ05YC85q+U6JuH5aS055qEbGVmdOWAvOWkp+ivtOaYjuebruWJjeato+WQkeW3puenu+WKqFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLlggLSAxMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIDQuIOi6q+S9k+esrOS4gOiKguS9jee9rueahGxlZnTlgLzmr5Tom4flpLTnmoRsZWZ05YC85bCP6K+05piO55uu5YmN5q2j5ZCR5Y+z56e75YqoXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuWCArIDEwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW92ZUJvZHkoKTtcclxuICAgICAgICAvLyDlnKjom4fnp7vliqjlrozouqvkvZPlkI7mo4Dmn6Xom4flpLTlpoLmnpznp7vliqjmmK/lkKbkvJrmkp7liLDoh6rlt7FcclxuICAgICAgICB0aGlzLmNoZWNrQm9keSh2YWx1ZSwgdGhpcy5ZKTtcclxuICAgICAgICB0aGlzLmhlYWQuc3R5bGUubGVmdCA9IHZhbHVlICsgJ3B4JztcclxuICAgIH1cclxuICAgIHNldCBZKHZhbHVlKSB7XHJcbiAgICAgICAgLy8geeeahOWAvOeahOWQiOazleiMg+WbtOaYrzAtMjkw5LmL6Ze0XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMCB8fCB2YWx1ZSA+IDI5MCkge1xyXG4gICAgICAgICAgICAvLyDkuI3lkIjms5XvvIzmipvlh7rplJnor69cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfom4fmkp7lopnkuoYnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gMS7lnKjnp7vliqjliY3liKTmlq3mmK/lkKbmmK/nm7jlj43mlrnlkJFcclxuICAgICAgICBpZiAodGhpcy5ib2RpZXMubGVuZ3RoID4gMSAmJiB0aGlzLmJvZGllc1sxXS5vZmZzZXRUb3AgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIC8vMi4g5piv55u45Y+N5pa55ZCR77yM5Yik5pat5b2T5YmN5pa55ZCR5piv5ZCR5LiL6L+Y5piv5ZCR5LiKXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IHRoaXMuWSkge1xyXG4gICAgICAgICAgICAgICAgLy8gMy4g6Lqr5L2T56ys5LiA6IqC5L2N572u55qEbGVmdOWAvOavlOibh+WktOeahHRvcOWAvOWkp+ivtOaYjuebruWJjeato+WQkeS4iuenu+WKqFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLlkgLSAxMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIDQuIOi6q+S9k+esrOS4gOiKguS9jee9rueahGxlZnTlgLzmr5Tom4flpLTnmoR0b3DlgLzlsI/or7TmmI7nm67liY3mraPlkJHkuIvnp7vliqhcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ZICsgMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb3ZlQm9keSgpO1xyXG4gICAgICAgIC8vIOWcqOibh+enu+WKqOWujOi6q+S9k+WQjuajgOafpeibh+WktOWmguaenOenu+WKqOaYr+WQpuS8muaSnuWIsOiHquW3sVxyXG4gICAgICAgIHRoaXMuY2hlY2tCb2R5KHRoaXMuWCwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuaGVhZC5zdHlsZS50b3AgPSB2YWx1ZSArICdweCc7XHJcbiAgICB9XHJcbiAgICAvLyDom4flop7liqDouqvkvZNcclxuICAgIGFkZEJvZHkoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5kaXIodGhpcy5jb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCEpO1xyXG4gICAgICAgIC8vIDEu6I635Y+W5b2T5YmN6JuH55qE5pyA5ZCO5LiA5LiqZGl277yM5Y2z5pyA5ZCO5LiA6YOo5YiGXHJcbiAgICAgICAgLy8gbGV0IGxhc3RfcGFydCA9IHRoaXMuY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQhIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIC8vIGxldCBuZXdfcGFydF94OiBudW1iZXIgPSAwLCBuZXdfcGFydF95OiBudW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIC8vIDIu6KaB5qC55o2u5b2T5YmN5pa55ZCR6K6+572u5paw5Yqg5YWl6YOo5YiG55qEZGl255qE5Yid5aeL5L2N572uXHJcbiAgICAgICAgLy8gc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAvLyAgICAgY2FzZSAnQXJyb3dVcCc6XHJcbiAgICAgICAgLy8gICAgIGNhc2UgJ1VwJzpcclxuICAgICAgICAvLyAgICAgICAgIC8vIOebruWJjeato+WQkeS4iuenu+WKqFxyXG4gICAgICAgIC8vICAgICAgICAgbmV3X3BhcnRfeCA9IGxhc3RfcGFydC5vZmZzZXRMZWZ0O1xyXG4gICAgICAgIC8vICAgICAgICAgbmV3X3BhcnRfeSA9IGxhc3RfcGFydC5vZmZzZXRUb3AgKyAxMDtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBjYXNlICdBcnJvd0Rvd24nOlxyXG4gICAgICAgIC8vICAgICBjYXNlICdEb3duJzpcclxuICAgICAgICAvLyAgICAgICAgIC8vIOebruWJjeato+WQkeS4i+enu+WKqFxyXG4gICAgICAgIC8vICAgICAgICAgbmV3X3BhcnRfeCA9IGxhc3RfcGFydC5vZmZzZXRMZWZ0O1xyXG4gICAgICAgIC8vICAgICAgICAgbmV3X3BhcnRfeSA9IGxhc3RfcGFydC5vZmZzZXRUb3AgLSAxMDtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBjYXNlICdBcnJvd0xlZnQnOlxyXG4gICAgICAgIC8vICAgICBjYXNlICdMZWZ0JzpcclxuICAgICAgICAvLyAgICAgICAgIC8vIOebruWJjeato+WQkeW3puenu+WKqFxyXG4gICAgICAgIC8vICAgICAgICAgbmV3X3BhcnRfeCA9IGxhc3RfcGFydC5vZmZzZXRMZWZ0ICsgMTA7XHJcbiAgICAgICAgLy8gICAgICAgICBuZXdfcGFydF95ID0gbGFzdF9wYXJ0Lm9mZnNldFRvcDtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcclxuICAgICAgICAvLyAgICAgY2FzZSAnUmlnaHQnOlxyXG4gICAgICAgIC8vICAgICAgICAgLy8g55uu5YmN5q2j5ZCR5Y+z56e75YqoXHJcbiAgICAgICAgLy8gICAgICAgICBuZXdfcGFydF94ID0gbGFzdF9wYXJ0Lm9mZnNldExlZnQgLSAxMDtcclxuICAgICAgICAvLyAgICAgICAgIG5ld19wYXJ0X3kgPSBsYXN0X3BhcnQub2Zmc2V0VG9wO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyAvLyDmt7vliqDliLDlrrnlmajlhoXmnIDlkI7kuIDkuKrlhYPntKDkuYvlkI5cclxuICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8ZGl2IHN0eWxlPVwibGVmdDogJHtuZXdfcGFydF94fXB4OyB0b3A6ICR7bmV3X3BhcnRfeX1weFwiPjwvZGl2PmApXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGRpdj48L2Rpdj5gKTtcclxuICAgIH1cclxuICAgIC8vIOibh+enu+WKqOi6q+S9k1xyXG4gICAgbW92ZUJvZHkoKSB7XHJcbiAgICAgICAgLy8g6Zmk6JuH5aS05aSW55qE77yM6JuH6Lqr56e75YqoXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuYm9kaWVzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgLy8g56e75Yqo5Yiw5LiK5LiA6IqC55qE5L2N572uXHJcbiAgICAgICAgICAgIHRoaXMuYm9kaWVzW2ldLnN0eWxlLmxlZnQgPSB0aGlzLmJvZGllc1tpIC0gMV0ub2Zmc2V0TGVmdCArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuYm9kaWVzW2ldLnN0eWxlLnRvcCA9IHRoaXMuYm9kaWVzW2kgLSAxXS5vZmZzZXRUb3AgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5qOA5p+l5aaC5p6c6JuH5aS056e75Yqo5piv5ZCm5Lya56Kw5Yiw6Lqr5L2TXHJcbiAgICBjaGVja0JvZHkodmFsdWVfeCwgdmFsdWVfeSkge1xyXG4gICAgICAgIC8vIOmBjeWOhuibh+i6q++8jOeci+aYr+WQpuS8muWdkOagh+WAvOebuOetie+8jFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHBhcnQgPSB0aGlzLmJvZGllc1tpXTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlX3ggPT09IHBhcnQub2Zmc2V0TGVmdCAmJiB2YWx1ZV95ID09PSBwYXJ0Lm9mZnNldFRvcCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfom4fmkp7liLDoh6rlt7HllabvvIEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTbmFrZTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2Nzcy9pbmRleC5sZXNzJztcclxuLy8g5byV5YWl5o6n5Yi25ZmoXHJcbmltcG9ydCBHYW1lQ29udHJvbCBmcm9tICcuL21vZHVsZXMvR2FtZUNvbnRyb2wnO1xyXG4vLyDpqazkuIrlvIDlp4vmuLjmiI9cclxuLy8gbmV355qE5pe25YCZ5Lya6ams5LiK6LCD55So5p6E6YCg5Ye95pWwLOWcqOaehOmAoOWHveaVsOmHjOW8gOWQr+a4uOaIj1xyXG5uZXcgR2FtZUNvbnRyb2woKTtcclxuIl0sIm5hbWVzIjpbIkZvb2QiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJuZXdfbGVmdCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm5ld190b3AiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJTbmFrZSIsIlNjb3JlUGFuZWwiLCJHYW1lQ29udHJvbCIsInNuYWtlIiwiZm9vZCIsInNjb3JlX3BhbmVsIiwiZGlyZWN0aW9uIiwiaXNfbGl2ZSIsIm9wcG9zaXRlX2RpcmVjdGlvbiIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5ZG93bkhhbmRsZXIiLCJiaW5kIiwicnVuIiwiZXZlbnQiLCJrZXkiLCJjaGVja0VhdCIsIlgiLCJZIiwiZSIsImFsZXJ0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJsZXZlbCIsInNldFRpbWVvdXQiLCJhZGRTY29yZSIsImNoYW5nZV9jb29yZGluYXRlIiwiYWRkQm9keSIsIm1heF9sZXZlbCIsInRocmVzaG9sZCIsInNjb3JlIiwic2NvcmVfZWxlbWVudCIsImxldmVsX2VsZW1lbnQiLCJpbm5lckhUTUwiLCJ1cExldmVsIiwiY29udGFpbmVyIiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3IiLCJib2RpZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInZhbHVlIiwiRXJyb3IiLCJsZW5ndGgiLCJtb3ZlQm9keSIsImNoZWNrQm9keSIsImluc2VydEFkamFjZW50SFRNTCIsImkiLCJ2YWx1ZV94IiwidmFsdWVfeSIsInBhcnQiXSwic291cmNlUm9vdCI6IiJ9