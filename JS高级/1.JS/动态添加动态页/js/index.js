window.addEventListener('load', function () {
    var that;
    class Tab {
        constructor(id) {
            that = this;//that不用更新，他会指向创建的实例对象
            // 必须先根据输入的ID先获取第一个tab，通过这个main才能够获取后面只属于这个tab的元素对象，如果不获取直接用document，获取到是整个页面的，当有多个tab时就会出现问题。
            this.main = document.querySelector(id);
            this.add = this.main.querySelector('.tabadd');
            this.title = this.main.querySelector('.title');
            this.tabscon = this.main.querySelector('.tabscon');
            this.add.onclick = this.addElement;
            this.init();
        }
        init() {
            // 一开始li和section的获取都是写在constructor里的，但是后续这两个数据需要更新，因此放到初始化里
            this.lis = this.main.querySelectorAll('li');
            this.secs = this.main.querySelectorAll('section');
            // 为目前存在的li绑定点击后的事件，为li中的小图标绑定点击事件。
            for (var i = 0; i < this.lis.length; i++) {
                // 这里可以选择给每个小li添加index索引属性，但自己认为直接将对应的section作为属性记录更方便
                this.lis[i].section = this.secs[i];
                // 这里的this值得是tab对象,它里面有change函数,绑给li.但调用这个函数的是li
                this.lis[i].onclick = this.change;
                // 给小图标添加点击删除事件
                this.lis[i].children[1].onclick = this.delete;
                // 给小li中的文字添加，双击编辑事件
                this.lis[i].children[0].ondblclick = this.edit;
                // 给section添加，双击编辑事件
                this.lis[i].section.ondblclick = this.edit;
                // 给小li添加失去光标事件，将input里的值给li。在这里绑定无效，因为是文本框失去焦点而不是li失去焦点，此时还没有文本框，双击后生成文本框
                // this.lis[i].onblur = this.save;
                // console.log(this.lis[i].children[0]);
            }
        }
        // 切换函数
        change() {
            // 调用者是每个小li,点击后，将所有li样式消除。这里不能用remove，有可能原本就没有，直接className置空
            // 不能用this,这里的this指li,li里没有removeClass这个方法;
            that.removeClass();
            this.classList.add('curLi');
            this.section.classList.add('curSec');
        }
        // 消除所有小li的样式函数
        removeClass() {
            // 调用者是that，所以this是指向that
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = "";
                this.secs[i].className = "";
            }
        }
        // 增加函数
        addElement() {
            // 为了让新增的元素可以是当前样式，需要清除其他样式
            that.removeClass()
            // 为了区分不同的li，测试效果。选择生成随机数加入中间
            var random = Math.random();
            // 元素字符串添加元素
            var li = "<li class=\"curLi\">测试" + random + " <span class=\"icon\"></span></li>";
            var section = "<section class=\"curSec\">测试" + random + "</section>";
            that.title.insertAdjacentHTML('beforeend', li);
            that.tabscon.insertAdjacentHTML('beforeend', section);
            // 加入父亲后，更新lis和secs。使新加入的也能被获取。
            that.init();
        }
        // 删除函数
        delete(e) {
            e.stopPropagation();
            // 调用这个函数的是span小图标
            // 通过parentNode可以得到小图标的父亲结点li，得到后先把li.section删除，再删li
            this.parentNode.section.remove();
            // 前一个兄弟节点存在且删除的这个结点是当前结点,则让前面那个结点是当前结点。
            if (this.parentNode.previousElementSibling && this.parentNode.className == "curLi") {
                // 强制点击后可以直接调用切换函数。
                this.parentNode.previousElementSibling.click();
            }

            this.parentNode.remove();
            that.init();
        }
        // 编辑函数
        edit() {
            // 调用edit函数的是span和section
            // 本来担心是否是当前选中的问题，但是当前选中的类是在li上的，而我改的是li标签里的内容，所以没有影响

            this.innerHTML = '<input type=text value=\"' + this.innerText + '">';
            console.log(this.children[0]);
            // 在编辑函数里给文本框绑定事件
            this.children[0].onblur = function () {
                this.parentNode.innerHTML = this.value;
            }
            this.children[0].onkeyup = function (e) {
                if (e.keyCode == 13) {
                    // this.parentNode.innerHTML = this.value;
                    this.blur();
                }
            }
        }
    }
    var tab = new Tab('#tab');
})