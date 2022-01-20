window.addEventListener('load', function () {
    // var tel = /^(13\d|14[5|7]|15\d|18[0-3|5-9])\d{8}$/; //电话的正则表达式
    var tel = /^1[3|4|5|8]\d{9}$/;
    var qq = /^[1-9]\d{4,}$/;
    var name = /^[\u4e00-\u9fa5]{2,8}$/;
    var verify = /^\d{6}$/;
    var pw = /^[a-z|A-Z|0-9|_|-]{6,16}$/;
    // 获取元素对象
    var telText = document.querySelector('#tel');
    var qqText = this.document.querySelector('#qq');
    var nameText = this.document.querySelector('#nc');
    var verifyText = this.document.querySelector('#msg');
    var pwText = this.document.querySelector('#pwd');
    var suerPwd = this.document.querySelector('#surepwd')
    change(telText, tel);
    change(qqText, qq);
    change(nameText, name);
    change(verifyText, verify);
    change(pwText, pw);
    // 封装成函数，参数是元素对象和正则表达式，作用是给元素对象添加光标离开触发事件，对比元素对象里的value是否符合正则表达式，根据是否符合添加不同样式
    function change(obj, reg) {
        obj.addEventListener('blur', function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = "success";
                this.nextElementSibling.innerHTML = "<span class=\"success_icon\"></span>恭喜您输入正确";
            } else {
                this.nextElementSibling.className = "error";
                this.nextElementSibling.innerHTML = "<span class=\"error_icon\"></span>格式不正确，请重新输入";
            }
        })
    }
    // 确认密码单独处理
    suerPwd.addEventListener('blur', function () {
        if (this.value == pwText.value) {
            this.nextElementSibling.className = "success";
            this.nextElementSibling.innerHTML = "<span class=\"success_icon\"></span>恭喜您输入正确";
        } else {
            this.nextElementSibling.className = "error";
            this.nextElementSibling.innerHTML = "<span class=\"error_icon\"></span>两次密码输入不正确，请重新输入;"
        }
    })

})