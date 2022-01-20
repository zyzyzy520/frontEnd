window.addEventListener('load', function () {
    var title = document.querySelector('.title');
    var tabscon = document.querySelector('.tabscon');
    class Tab {
        constructor(li, section) {
            // this.index = index;
            this.li = li;
            this.li.section = section;
            // this.section = section;
            this.li.onclick = this.change;
            this.li.children[0].onclick = this.delete;
            // console.log(this.li.children[0]);
        }
        // 切换
        change() {
            var curLi = title.querySelector('.curLi');
            curLi.classList.remove('curLi');
            curLi.section.classList.remove('curSec');
            this.classList.add('curLi');
            this.section.classList.add('curSec');
        }
        // 删除
        delete() {
            // this.parentNode.remove();
            console.log(0);
        }
    }
    var lis = document.querySelectorAll('li');
    var sections = document.querySelectorAll('section');
    for (var i = 0; i < lis.length; i++) {
        var tab = new Tab(lis[i], sections[i]);
    }
    // 增加
    // 1 选中对象
    var add = document.querySelector('.tabadd');
    // 2 为对象添加事件
    add.addEventListener('click', function () {
        var li = document.createElement('li');
        li.innerHTML = "新选项卡" + '<span class="icon"></span>';
        var section = document.createElement('section');
        section.innerHTML = '测试';
        var newtab = new Tab(li, section);
        title.appendChild(li);
        tabscon.appendChild(section);
    })
})
