// 获取所有班级,添加到学生新增那边的所属班级中
function getClass() {
    $.ajax({
        url: '/class/getAll',
        type: 'get',
        success(msg) {
            if (msg.status) {
                // 获取数据成功，为select添加option
                // msg.data是对象数组，遍历 每一个对象，将对象化成option字符串,组成新的数组，然后用joint拼接成字符串
                // map方法return 组成新的数组
                const options = msg.data.map(element => `
                        <option value= "${element._id}">${element.className}</option>
                        `).join('');

                // 放入页面中
                $('#classBelong').html(options);
            }
        }
    })
}
// 页面一打开就调用，使得所属班级有可选项

// 1.新增班级；增加功能：新增班级，关联多个老师
$('#addClassBtn').click(function () {
    // 获取输入信息
    const className = $('#addClassName').val();
    const teacherIDs = [];
    // each前面表示的是获取到所有被选中的节点
    $('input[name=chooseTea]:checked').each(function () {
        teacherIDs.push($(this).val());
    })
    console.log(teacherIDs);
    // 发送AJAX
    $.ajax({
        url: '/class/add',
        type: 'post',
        data: {
            className,
            teacherIDs
        },
        traditional: true,
        success(msg) {
            alert(msg.message);
            getClass();
        }
    })
})