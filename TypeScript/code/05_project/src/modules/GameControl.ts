import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他所有类
class GameControl {
    // 蛇
    snake: Snake;
    // 食物
    food: Food;
    // 记分牌
    score_panel: ScorePanel;
    // 贪吃蛇方向
    direction: string;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.score_panel = new ScorePanel();
        this.direction = ""

        // 马上初始化开启游戏
        this.init();
    }

    // 游戏初始化，调用后游戏开始
    init() {
        // 监控键盘按下事件，移动蛇
        // 这里的this仍然指向GameControl对象，通过this.keydownHandler找到keydownHandler函数
        // 再通过bind方法改变了keydownHandler的this指向，不再指向调用者而是一直指向GameControl对象。
        // 将这改变了this的函数作为回调函数
        document.addEventListener('keydown', this.keydownHandler.bind(this));
    }
    /*
        direction的值
            ArrowUp Up
            ArrowDown Down
            ArrowLeft Left
            ArrowRight Right
    */
    // 按下键盘后的回调，键盘按下回调
    keydownHandler(event: KeyboardEvent) {
        // 需要检查event.key的值是否合法(用户是否按了正确的按键)
        // 修改direction属性
        this.direction = event.key;
    }
}

export default GameControl;