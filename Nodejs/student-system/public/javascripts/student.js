let pageSize = $('#pageSize').val();
let param = {
    pageIndex: 0,
    pageSize
}
let pageCount;

console.log(param);
// 1.向后端发送请求，获取数据库里已有的数据并展示
// 发送请求时，给后端的是data处数据，是对象。响应时得到的数据可以是对象数组变量等等
function fetchInfo() {
    $.ajax({
        url: 'http://localhost:3000/students/fetch',
        type: 'get',
        data: param,
        success({ message, status, data }) {

            if (status) {
                // 接收到的data是数组对象，将每一个对象转换成html字符串。再将数组字符串组合成一个大的htmll字符串
                let str = data.results.map(element => {
                    let imageName = element.imageName == undefined ? 'default.jpeg' : element.imageName
                    pageCount = data.pageCount;
                    // 有多个teacherID，
                    let teacherNames = element.classID.teacherIDs.map(element => {
                        return element.teaName;
                    }).join('、');
                    // console.log(teacherNames);
                    return `
                    <tr>
                        <td>${element.name}</td>
                        <td>${element.age}</td>
                        <td>${element.sex}</td>
                        <td>${element.classID.className}</td>
                        <td>${teacherNames}</td>
                        <td><img src="./images/${imageName}"></td>
                        <td>
                            <input type="submit" class="itemUp" value="修改" data-id="${element._id}">
                            <input type="submit" class="itemDel" value="删除" data-id="${element._id}">
                        </td>
                    </tr>
                    `
                }).join('');
                // 注意这里不能用append，这样更新时，会出现问题，
                $('#content').html(str);
                // 更新显示页码，当前页面在参数param里，pageCount在后端动态获取的数据里
                // 为了方便用户看，需要加一
                const str_2 = (param.pageIndex + 1) + '/' + (data.pageCount + 1) + '页，共计' + data.dataTotal + '条数据';
                $('#curDivTotal').html(str_2);


                // 从倒数第二页翻到倒数第一页，
                if (param.pageIndex == pageCount) {
                    $('#next').prop('disabled', true);
                }

                // 更新后的页码是0时，才disabled。从1翻到0的时候，需要disabled，但是当前页码是1，所以放在前面disabled没有意义
                if (param.pageIndex == 0) {
                    $('#prev').prop('disabled', true);
                }
            }
        }
    })
}
// 虽然只要不设置data就可以传递空对象，也能够是查询所有数据。但是考虑到，和查询要用同一个AJAX，所以还是要设置参数
// fetchInfo({
//     searchType: '',
//     searchInfo: ''
// });

// 获取所有更新按钮，然后给按钮绑定事件
// 因为给更新按钮绑定事件的时候，AJAX异步还没有渲染好数据，所以要用委托事件，委托事件要放在静态的祖先元素上
$('#content').on("click", 'input[class="itemUp"]', function () {
    let tds = $(this).parent().parent().children();
    // 改变文本框内的内容，用val而不是text
    $('#upName').val(tds[0].innerText);
    $('#upAge').val(tds[1].innerText);
    // console.log(tds[2]);
    // if (tds[2].innerText == "女") {
    //     $('input[value="女"]').prop('checked', true);
    // } else {
    //     $('input[value="男"]').prop('checked', true);
    // }
    let val = tds[2].innerText;
    console.log('[name=upSex][value=' + tds[2].innerText + ']');
    $('[name=upSex][value=' + tds[2].innerText + ']').prop('checked', true);

    // 为了在提交修改时，能够通过id找到独一无二的数据项进行修改，在这里将id绑定给确认修改按钮
    // 将修改按钮的data-id绑定给确认修改按钮的data-id
    $('#updateBtn').data('id', $(this).data('id'));
})

// 获取所有删除按钮，然后给按钮绑定事件
// 因为给删除按钮绑定事件的时候，AJAX异步还没有渲染好数据，也就是说页面还没有删除按钮。所以要用委托事件，委托事件要放在静态的祖先元素上
$('#content').on("click", 'input[class="itemDel"]', function () {
    // 获取id，这里的this是指触发对象，不是绑定对象
    let _id = $(this).data('id');
    // 将id传送给后端
    $.ajax({
        url: '/students/del',
        data: {
            _id
        },
        type: 'post',
        success(msg) {
            if (msg.status) {
                // 获取当前tbody中有多少行数据
                if ($('tbody tr').length == 1) {
                    // 只有一条待删除的数据，删除后到前面一页
                    param.pageIndex--;
                }
                fetchInfo();
            }
        }
    })
})

// 2.实现新增功能，当用户输入信息，点击添加按钮后，获取填写信息，并通过AJAX发送给后端，后端接收后插入数据库，同时需要将新增的饿数据插入显示table中。无需全部刷新，浪费数据，只需添加新的
// 注意这里的名字在现实世界中是可能重名的,所以不添加验证功能
$('#addBtn').click(function () {
    const name = $('#addName').val();
    const age = $('#addAge').val();
    const sex = $("input[name='addSex']:checked").val();
    const classID = $('#classBelong').val();
    const imageName = $('#studentImage').data('src');
    $.ajax({
        url: '/students/add',
        data: {
            name,
            age,
            sex,
            classID,
            imageName
        },
        type: 'post',
        success(msg) {
            // 确定插入成功后，再更新显示数据
            alert(msg.message);
            if (msg.status) {
                fetchInfo();
            }
        }
    })
})

// 3.实现查询功能
$('#searchBtn').click(function () {
    let searchType = $('#searchPar').val();
    let searchInfo = $('#searchInfo').val();
    // 查询的数据从第一页开始
    param.pageIndex = 0;

    param.searchInfo = searchInfo;
    param.searchType = searchType;

    fetchInfo();
})

// 4.实现确认修改功能
$('#updateBtn').click(function () {
    const name = $('#upName').val();
    const age = $('#upAge').val();
    const sex = $('input[name="upSex"]:checked').val();

    // 拿到在点击修改按钮时，绑定给确认修改按钮的data-id
    const _id = $(this).data('id');
    // const _id = "61ac1c6dc2c5d425da4ee8f0";
    // 发送AJAX
    $.ajax({
        url: '/students/update',
        type: 'post',
        data: {
            _id,
            name,
            age,
            sex
        },
        success(msg) {
            alert(msg.message);
            if (msg.status) {
                fetchInfo({})
            }
        }
    })
})

// 5.点击下一页
$('#next').click(function () {
    $('#prev').prop('disabled', false);
    // 获取当前页码，然后+1，传递参数,跳过前面几条数据, + 1 隐式转换, 从前端页面获取到的是字符串。
    // 设置全局变量参数，页码也随之更新
    param.pageIndex++;

    // 调用fetchInfo
    fetchInfo();
})

// 6.点击上一页
$('#prev').click(function () {
    // 获取当前页码，然后+1，传递参数,跳过前面几条数据, + 1 隐式转换, 从前端页面获取到的是字符串
    $('#next').prop("disabled", false);
    // 设置全局变量参数
    param.pageIndex--;

    // 调用函数
    fetchInfo();

})

// 7.点击尾页
$('#last').click(function () {
    // 获取尾页。
    // 变量名最好统一，最后model的时候会解构
    param.pageIndex = pageCount;

    fetchInfo();

    // 激活上一页，废除下一页
    $('#prev').prop('disabled', false);
    $('#next').prop('disabled', true);
})

// 8.点击首页
$('#first').click(function () {
    // 首页页面设置为0
    param.pageIndex = 0;

    fetchInfo();

    // 激活下一页，废除上一页
    $('#prev').prop('disabled', true);
    $('#next').prop('disabled', false);
})

// 9.切换页面大小
$('#pageSize').change(function () {
    param.pageSize = $('#pageSize').val();
    fetchInfo();
})