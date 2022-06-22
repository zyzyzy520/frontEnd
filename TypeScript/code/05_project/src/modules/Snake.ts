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
        // x的值的合法范围是0-290之间
        if (value < 0 || value > 290) {
            // 不合法，抛出错误
            throw new Error('蛇撞墙了')
        }
        let before_x = this.head.offsetLeft, before_y = this.head.offsetTop;
        this.head.style.left = value + 'px';
        this.moveBody();
    }

    set Y(value: number) {
        // y的值的合法范围是0-290之间
        if (value < 0 || value > 290) {
            // 不合法，抛出错误
            throw new Error('蛇撞墙了')
        }
        let before_x = this.head.offsetLeft, before_y = this.head.offsetTop;
        this.head.style.top = value + 'px';
        this.moveBody();
    }
    // 蛇增加身体
    addBody(direction: string) {
        // console.dir(this.container.lastElementChild!);
        // 1.获取当前蛇的最后一个div，即最后一部分
        let last_part = this.container.lastElementChild! as HTMLElement;
        let new_part_x: number = 0, new_part_y: number = 0;
        // 2.要根据当前方向设置新加入部分的div的初始位置
        switch (direction) {
            case 'ArrowUp':
            case 'Up':
                // 目前正向上移动
                new_part_x = last_part.offsetLeft;
                new_part_y = last_part.offsetTop + 10;
                break;
            case 'ArrowDown':
            case 'Down':
                // 目前正向下移动
                new_part_x = last_part.offsetLeft;
                new_part_y = last_part.offsetTop - 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                // 目前正向左移动
                new_part_x = last_part.offsetLeft + 10;
                new_part_y = last_part.offsetTop;
                break;
            case 'ArrowRight':
            case 'Right':
                // 目前正向右移动
                new_part_x = last_part.offsetLeft - 10;
                new_part_y = last_part.offsetTop;
        }
        // 添加到容器内最后一个元素之后
        this.container.insertAdjacentHTML('beforeend', `<div style="left: ${new_part_x}px; top: ${new_part_y}px"></div>`)
    }

    // 蛇移动身体
    moveBody() {
        // 除蛇头外的，蛇身移动
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 移动到上一节的位置
            (this.bodies[i] as HTMLElement).style.left = (this.bodies[i - 1] as HTMLElement).offsetLeft + 'px';
            (this.bodies[i] as HTMLElement).style.top = (this.bodies[i - 1] as HTMLElement).offsetTop + 'px';
        }
    }
}

export default Snake;