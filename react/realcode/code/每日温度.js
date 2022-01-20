let T = [73, 74, 75, 71, 69, 76];
let stack = [], T = temperatures;//栈里存放的是索引
let ans = new Array(T.length).fill(0);//记录的是过几天菜会等到更暖和的天气
for (let i = T.length - 1; i >= 0; i--) {
    let nowTem = T[i], now = i;
    // 栈中的数据比当前数小
    while (stack.length > 0 && T[stack[stack.length - 1]] <= nowTem) stack.pop();
    //栈中没有比它大的温度
    if (stack.length == 0) ans[now] = 0;
    else {
        ans[now] = stack[stack.length - 1] - now;
    }
    stack.push(now);
}
console.log(ans);