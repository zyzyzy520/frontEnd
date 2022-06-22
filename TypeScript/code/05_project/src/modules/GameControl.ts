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
    // 贪吃蛇之前的方向
    last_direction: string;
    // 记录游戏是否结束
    is_live: boolean;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.score_panel = new ScorePanel();
        this.direction = "";
        this.last_direction = "";
        this.is_live = true;

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
        // 启动游戏
        this.run();
    }

    // 按下键盘后的回调，键盘按下回调
    keydownHandler(event: KeyboardEvent) {
        // 需要检查event.key的值是否合法(用户是否按了正确的按键)
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            // 修改direction属性
            this.last_direction = this.direction;
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
    run() {
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

            }
        } catch (e: any) {
            // 撞墙后，打印提示信息
            alert(e.message);
            // 让游戏停止
            this.is_live = false;
        }

        // 判断是否食物：蛇头的坐标和食物的坐标相等
        this.checkEat(this.snake.X, this.snake.Y);

        // 在游戏仍然在进行中的情况下才开启定时器
        this.is_live && setTimeout(this.run.bind(this), 300 - (this.score_panel.level - 1) * 10);
    }

    // 检查是否吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && this.snake.Y === this.food.Y) {
            // 分数+1
            this.score_panel.addScore();
            // 改变食物坐标
            this.food.change_coordinate();
            // 增加蛇身
            this.snake.addBody(this.direction);
        }
    }
}

export default GameControl;