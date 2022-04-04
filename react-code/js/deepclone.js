let oriObj = {
    name: 'Ash',
    age: 12,
    children: {
        name: '1',
        age: 12,
        friends: [1, 2, 3]
    }
}

function deepClone(obj) {
    // 判断是不是引用类型
    if (typeof obj == 'object') {
        let copy = Array.isArray(obj) ? [] : {};
        for (key in obj) {
            copy[key] = deepClone(obj[key])
        }
        return copy
    } else {
        return obj
    }
}





for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
        console.log(i, j);
    }
}

















function deepClone(oriObj) {
    // 1.首先判断是不是引用类型
    if (typeof oriObj == 'object') {
        // 是引用类型准备深克隆
        // 1.1 判断是数组还是对象，准备一个空的进行复制
        let cloneObj = Array.isArray(oriObj) ? [] : {};
        for (let k in oriObj) {
            // 1.2 有可能要复制的属性也是引用类型，所以要进行 深克隆
            cloneObj[k] = deepClone(oriObj[k]);
        }
        return cloneObj

    } else {
        // 不是引用类型，直接返回值
        return oriObj
    }
}

console.log(deepClone(oriObj));