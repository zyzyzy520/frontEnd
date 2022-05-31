let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
let ans = [];

// recursion(arr);console.log(ans);
// console.log(regExp(arr));
//1.法一：递归
function recursion(element) {
    for (let i = 0; i < element.length; i++) {
        if (Array.isArray(element[i])) {
            //数组子元素是数组，递归处理
            recursion(element[i]);
        } else {
            ans.push(element[i]);
        }
    }
}

//2. 法二：正则表达式
function regExp(arr) {
    //先转换成字符串
    let arrStr = JSON.stringify(arr);
    //替换掉[和]变成1,2,3,4,5,6,7,8,9
    console.log(arrStr)
    //字符串的replace不是在原来的字符串上替换，JS中只要是涉及到字符串的操作，都是生成新的字符串
    arrStr = arrStr.replace(/\[|\]/g, '');
    console.log(arrStr)
    // 然后根据逗号分割成数组
    return arrStr.split(',')
}



























function dfs(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            dfs(arr[i]);
        } else {
            ans.push(arr[i])
        }
    }
}

// dfs(arr);
// console.log(ans);


