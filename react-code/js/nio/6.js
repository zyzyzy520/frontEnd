let arr1 = [22, 10, 92, 12, 33, 44, 55, 22];
let arr2 = [22, 10, 34, 21, 12];

//从arr1中剔除arr2中存在的元素，并且必须在arr1原数组上修改。

//用双指针，一个指针遍历arr1，一个指针 记录当前满足条件的区间，即不在arr2中出现的元素
let pointer1 = 0, pointer2 = 0;

while (pointer2 < arr1.length) {
    let num = arr1[pointer2];
    if (arr2.indexOf(num) == -1) {
        //未在arr2中出现
        arr1[pointer1] = num, pointer1++;
    }
    pointer2++;
}
//删除pointer1之后的数，都是无用的
arr1.splice(pointer1);
console.log(arr1);
