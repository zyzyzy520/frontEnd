class Snake {
    // 装蛇的容器
    container: HTMLElement;
    // 蛇头
    head: HTMLElement;
    // 蛇身，有多个div，所以类型是HTMLCollecion
    bodies: HTMLCollection;

    constructor() {
        // 在文档下，找到ID为snake的容器
        this.container = document.getElementById('snake')!;
        // 在container下找到第一个div，querySelector只会取一个
        this.head = this.container.querySelector('div')!;
        // 在container下找到所有div，不要用querySelectorAll因为新增div时不会更新。 
        this.bodies = this.container.getElementsByTagName('div');
    }

    // 获取蛇头坐标
    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    // 设置蛇头的坐标
    set X(value: number) {
        this.head.style.left = value + 'px';
    }

    set Y(value: number) {
        this.head.style.top = value + 'px';
    }
    // 蛇增加身体
    addBody() {
        // 添加到容器内最后一个元素之后
        this.container.insertAdjacentHTML('beforeend', '<div></div>')
    }
}

export default Snake;