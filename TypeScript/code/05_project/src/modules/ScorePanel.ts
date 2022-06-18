class ScorePanel {
    // 记录分数和等级的变量
    score: number;
    level: number;
    score_element: HTMLElement;
    level_element: HTMLElement;
    // 设置一个变量限制等级
    max_level: number;
    // 设置一个变量作为升级的阈值。例如每十分升一级
    threshold: number;

    // 设置默认值
    constructor(max_level: number = 100, threshold: number = 10) {
        this.score = 0;
        this.level = 1;
        // 感叹号表示肯定不为空
        this.score_element = document.getElementById('score')!;
        this.level_element = document.getElementById('level')!;
        // 阈值和最高等级可以自己设定
        this.max_level = max_level;
        this.threshold = threshold;
    }

    // 调用后，分数累加并且改变页面元素上显示的值
    addScore() {
        // 注意innerHTML要求是字符串，而score是number。所以要进行转换。
        this.score_element.innerHTML = ++this.score + '';
        // 每十级升一次level
        if (this.score % 10 === 0) {
            this.upLevel();
        }
    }

    upLevel() {
        if (this.level < this.max_level) {
            // 超出最高等级，就不能升级了
            this.level_element.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;