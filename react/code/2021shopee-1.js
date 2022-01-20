/**
 * 
 * @param s string字符串 
 * @return int整型
 */
function romanToInt(s) {
    // write code here
    let hashReuglar = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }, hashSpecial = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    };
    let sum = 0, flag = true;
    for (let i = 0; i < s.length - 1;) {
        let word = s[i] + s[i + 1];
        if (hashSpecial[word] != undefined) {
            if (i == s.length - 2) flag = false;
            sum += hashSpecial[word], i += 2;
        } else {
            sum += hashReuglar[s[i]], i++;
        }
        //sum += hashReuglar[s[i]], i++;
    }
    if (flag) sum += hashReuglar[s[s.length - 1]];
    return sum;

}
module.exports = {
    romanToInt: romanToInt
};