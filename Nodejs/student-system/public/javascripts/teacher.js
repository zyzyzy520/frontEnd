// 老师复选框渲染
function fetchTeacher() {
    $.ajax({
        url: '/teacher/fetch',
        type: 'get',
        // msg = {message, status, data}
        success({ message, status, data }) {
            if (status) {
                // 先获取由每个input组成得到数组，再合成一个html字符串。
                // map是映射,访问当前数组的每个元素,返回的值组成一个新数组,map可以利用当前数组的 元素
                const tea = data.map((Element) => {
                    return `<input type="checkbox" name="chooseTea" value="${Element._id}">${Element.teaName}`
                }).join('');
                // tea也是字符串，拼接一个label字符串即可
                $('#optionTeacher').html('<label for="">选择教师：</label>' + tea);
            }
        }
    })
}

$('#addTeaBtn').click(function () {
    const teaName = $('#addTeaName').val()
    $.ajax({
        url: '/teacher/add',
        type: 'post',
        data: {
            teaName
        },
        success(msg) {
            alert(msg.message);
            if (msg.status) {
                fetchTeacher();
            }
        }
    })
})