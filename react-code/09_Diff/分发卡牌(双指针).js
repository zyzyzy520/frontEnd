//对一组数据进行两两分堆，要求每堆的和相等，能分出的最大堆数
//对每种可能的堆和进行讨论，用双指针进行分堆
let T = parseInt(readline());
for (let i = 1; i <= T; i++) {
    //对于一组数据，两两成堆，堆的和相等的最大堆数
    let cardNum = parseInt(readline());
    let cardWeight = readline().split(' ').map(element => parseInt(element));
    // 首先排序
    cardWeight.sort(function (a, b) {
        if (a - b > 0) return 1;
        else if (a - b < 0) return -1;
        else return 0;
    })
    // 每一堆的和最大为cardWeight[最后一个] + cardWeight[前一个]，最小为cardWeight[第一个] + cardWeight[第二个]
    let max = cardWeight[cardNum - 1] + cardWeight[cardNum - 2];
    let min = cardWeight[0] + cardWeight[1];
    let maxPiles = 0;
    for (let i = min; i <= max; i++) {
        let piles = 0;
        // 针对每一个可能的堆和进行讨论呢
        let left = 0, right = cardNum - 1;
        while (left < right) {
            // console.log(cardWeight[left], cardWeight[right]);
            if (cardWeight[left] + cardWeight[right] == i) {
                piles++, left++, right--
            } else if (cardWeight[left] + cardWeight[right] > i) {
                right--;
            } else if (cardWeight[left] + cardWeight[right] < i) {
                left++;
            }
        }
        maxPiles = Math.max(piles, maxPiles);
    }
    if (maxPiles == 1) console.log(-1);
    else console.log(maxPiles);
}
