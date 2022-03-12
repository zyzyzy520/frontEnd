// 用于计算scoreArr内比m小的和比m大的各有多少
function cal(m) {

}
let n = 6, x = 2, y = 3;
let str = '1 2 3 4 5 6';


scoreArr = str.split(' ').map(Element => parseInt(Element));

// 1.对scoreArr进行排序
scoreArr.sort(function (a, b) {
    if (a - b > 0) return 1;
    else if (a - b < 0) return -1;
    else return 0;
})

// 2.m肯定为scoreArr的最小值和最大值之间
let min = scoreArr[0], max = scoreArr[scoreArr.length - 1];
var reverseBetween = function (head, left, right) {
    if (head == null || head.next == null) return head;
    let leftNode = new ListNode(), rightNode = head, ansL = head, ansR = head;
    leftNode.next = head;
    // 记录反转链表的前一个结点，有可能反转链表从第一个结点开始
    for (let i = 1; i <= left - 1; i++) leftNode = leftNode.next;
    // 反转链表的第一个结点
    ansL = leftNode.next;
    // 结束条件是left = right
    function reverse(node, left) {
        if (left == right) {
            ansR = node;
            rightNode = node.next;
            return;
        }
        left++;
        reverse(node.next, left);
        node.next.next = node;
        node.next = null;
    }
    reverse(leftNode.next, left);
    leftNode.next = ansR;
    ansL.next = rightNode;
    if (left == 1) return leftNode.next;
    return head;
};