// Food类实现
class Food {
    // 定义一个属性表示食物 所对应的元素
    element: HTMLElement;

    // 给属性赋初始值
    constructor() {
        // 感叹号表示肯定不为空
        this.element = document.getElementById('food')!;
    }

    // 定义一个获取食物X坐标的方法
    get X() {
        return this.element.offsetLeft;
    }

    // 定义一个获取 食物Y坐标的方法
    get Y() {
        return this.element.offsetTop;
    }

    // 定义一个随机改变食物坐标的方法，因为要改变两个地方，所以不能用set，set只能是一个参数
    change_coordinate() {
        // 设置的top和left值不能超过边界，所以要在0~294px之间。但因为蛇是一节节的，移动也是一格格的，每一格是10，所以食物在的位置得是[0,294]之间10的整数倍
        // 先生成[0, 29]的整数再*10
        let new_left = Math.round(Math.random() * 29) * 10;
        let new_top = Math.round(Math.random() * 29) * 10;

        this.element.style.left = new_left + 'px';
        this.element.style.top = new_top + 'px';
    }
}

export default Food;