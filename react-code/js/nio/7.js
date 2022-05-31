const p1 = { name: 'zhangsan' };
const p2 = { name: 'lisi' };
const obj = {};
obj[p1] = 'xxx';
obj[p2] = 'yyy';
//obj的key不能存储为对象，如果是对象会先转化成字符串'[object Object]' 因此obj[p1]和obj[p2]都等同于obj['[object Object]']
console.log(obj[p1]);