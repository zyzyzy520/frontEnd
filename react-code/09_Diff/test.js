// * input: param
// const param = {
//   scheme: 'https', // required
//   domain: 'www.shopee.com', // required
//   path: 'query', // optional
//   param: { // optional
//     value: 1,
//     name: 'book'
//   }
// }
// * output `scheme://domain/path?param_name=vlaue1&param_name2=value2`
// 'https://www.shopee.com/query?value=1&name=book'

const param = {
    scheme: 'https', // required
    domain: 'www.shopee.com', // required
    path: 'query', // optional
    param: { // optional
        value: 1,
        name: 'book'
    }
}

let str = param.scheme + '://' + param.domain;
if (param.path != undefined) str += '/' + param.path;

// 重点就是这个，将对象的key和value组合成字符串
if (param.param != undefined) {
    let arr = []
    for (key in param.param) {
        arr.push(key + '=' + param.param[key]);
    }
    str += '?' + arr.join('&');
}
console.log(str);
