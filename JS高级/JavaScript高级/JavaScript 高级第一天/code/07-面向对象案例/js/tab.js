var that;
class Tab {
    constructor(id) {
        // 获取元素
        that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd');
        // li的父元素
        this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        // section 父元素
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
    }
    init() {
        this.updateNode();
        // init 初始化操作让相关的元素绑定事件
        // addTab里面的函数没有用到点击事件本身的元素，全用到的是实例对象，所以可以利用bind切换到
        this.add.onclick = this.addTab.bind(this);
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this, this.lis[i]);
            this.remove[i].onclick = this.removeTab.bind(this, this.remove[i]);
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;

        }
    }
    // 因为我们动态添加元素 需要从新获取对应的元素
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
    }
    // 1. 切换功能
    toggleTab(li) {
        // console.log(lis);
        // console.log(this.index);
        this.clearClass();
        li.className = 'liactive';
        this.sections[li.index].className = 'conactive';
    }
    // 清除所有li 和section 的类
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // 2. 添加功能
    addTab() {
        this.clearClass();
        // (1) 创建li元素和section元素 
        var random = Math.random();
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">测试 ' + random + '</section>';
        // (2) 把这两个元素追加到对应的父元素里面
        this.ul.insertAdjacentHTML('beforeend', li);
        this.fsection.insertAdjacentHTML('beforeend', section);
        this.init();
    }
    // 3. 删除功能
    removeTab(removeIcon, e) {
        e.stopPropagation(); // 阻止冒泡 防止触发li 的切换点击事件
        var index = removeIcon.parentNode.index;
        console.log(index);
        // 根据索引号删除对应的li 和section   remove()方法可以直接删除指定的元素
        this.lis[index].remove();
        this.sections[index].remove();
        this.init();
        // 当我们删除的不是选中状态的li 的时候,原来的选中状态li保持不变
        if (document.querySelector('.liactive')) return;
        // 当我们删除了选中状态的这个li 的时候, 让它的前一个li 处于选定状态
        index--;
        // 手动调用我们的点击事件  不需要鼠标触发
        this.lis[index] && this.lis[index].click();
    }
    // 4. 修改功能
    editTab() {
        var str = this.innerHTML;
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // alert(11);
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select(); // 文本框里面的文字处于选定状态
        // 当我们离开文本框就把文本框里面的值给span 
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;
        };
        // 按下回车也可以把文本框里面的值给span
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                // 手动调用表单失去焦点事件  不需要鼠标离开操作
                this.blur();
            }
        }
    }

}
new Tab('#tab');