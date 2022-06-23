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
        // 1.在移动前判断是否是相反方向
        if (this.bodies.length > 1 && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            //2. 是相反方向，判断当前方向是向左还是向右
            if (value > this.X) {
                // 3. 身体第一节位置的left值比蛇头的left值大说明目前正向左移动
                value = this.X - 10;
            } else {
                // 4. 身体第一节位置的left值比蛇头的left值小说明目前正向右移动
                value = this.X + 10;
            }
        }
        this.moveBody();
        // 在蛇移动完身体后检查蛇头如果移动是否会撞到自己
        this.checkBody(value, this.Y)
        this.head.style.left = value + 'px';

    }

    set Y(value: number) {
        // y的值的合法范围是0-290之间
        if (value < 0 || value > 290) {
            // 不合法，抛出错误
            throw new Error('蛇撞墙了')
        }
        // 1.在移动前判断是否是相反方向
        if (this.bodies.length > 1 && (this.bodies[1] as HTMLElement).offsetTop === value) {
            //2. 是相反方向，判断当前方向是向下还是向上
            if (value > this.Y) {
                // 3. 身体第一节位置的left值比蛇头的top值大说明目前正向上移动
                value = this.Y - 10;
            } else {
                // 4. 身体第一节位置的left值比蛇头的top值小说明目前正向下移动
                value = this.Y + 10;
            }
        }
        this.moveBody();
        // 在蛇移动完身体后检查蛇头如果移动是否会撞到自己
        this.checkBody(this.X, value)
        this.head.style.top = value + 'px';

    }
    // 蛇增加身体
    addBody(direction: string) {
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
        this.container.insertAdjacentHTML('beforeend', `<div></div>`)
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

    //检查如果蛇头移动是否会碰到身体
    checkBody(value_x: number, value_y: number) {
        // 遍历蛇身，看是否会坐标值相等，
        for (let i = 1; i < this.bodies.length; i++) {
            let part = this.bodies[i] as HTMLElement
            if (value_x === part.offsetLeft && value_y === part.offsetTop) {
                throw new Error('蛇撞到自己啦！')
            }
        }
    }
}


export default Snake;