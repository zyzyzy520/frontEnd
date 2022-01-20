let asteroids = [10, 2, -5];

//维护一个栈，将栈顶行星和当前行星比较栈中存放的一定是同符号的行星。
let stack = [];
stack.push(asteroids[0]);
for (let i = 1; i < asteroids.length; i++) {
    //1.只要当前行星符号为正，无论前一个行星是负号向左移还是正号向右移都不会发生碰撞，直接压入
    if (asteroids[i] > 0) stack.push(asteroids[i]);
    else {
        // console.log(stack[stack.length - 1], Math.max(asteroids[i]));
        //2.当前行星符号为负，向左移，将栈中所有大于9向右移，且绝对值比其小的弹出
        while (stack.length > 0 && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(asteroids[i])) stack.pop();
        // 栈中为空，直接将该行星压入
        if (stack.length == 0) stack.push(asteroids[i]);
        //栈中不为空，说明当前栈顶元素符号与行星一样或者栈顶元素绝对值比行星大或相等
        else if (stack[stack.length - 1] < 0) {
            stack.push(asteroids[i]); //符号相同，压入 
        } else if (stack[stack.length - 1] == Math.abs(asteroids[i])) stack.pop(); //相等，一起爆炸
        //其它情况，该行星爆炸
    }
}
console.log(stack);