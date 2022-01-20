## 选择器

1. `let xx =$('#设置的id名').val()`

得到选中表单元素的值

1. `$('#variable').html('XXX')`

   改变标签内的名字

2. `$('#variable').prop('属性名称',属性值)`

   设置标签的属性

3. `$('#table').append('<tr><td>12313</td></tr>')`

   ​	给标签内添加元素

4. `$("input[name='addSex']:checked").val();`

   获取单选框中选中选项的值

5. `  $('input[name=chooseTea]:checked').each(function () { teacherIDS.push($(this).val());})`

   获取复选框选中的所有选项的值;

   `$(this)`指被选中的每个选项;

5. ` $('input[class="itemUp"]').each(function (i) {}`

   找到所有类名为itemUp的标签，并为每个标签设置点击事件

   ```javascript
               $('input[class="itemUp"]').each(function (i) {
                   $(this).click(function () {
                       // 按钮被包裹在td中，要获取到tr，再获取到所有td
                       let tds = $(this).parent().parent().children();
                       // 改变文本框内的内容，用val而不是text
                       $('#upName').val(tds[0].innerText);
                       $('#upAge').val(tds[1].innerText);
                       console.log(tds[2]);
                       if (tds[2].innerText == "女") {
                           $('input[value="upFemale"]').prop('checked', true);
                       } else {
                           $('input[value="upMale"]').prop('checked', true);
                       }
   
                   })
               })
   ```

   

6. `$('input[value="upFemale"]')`

   根据input里的属性以及对应的值选中input标签

7. `$('#upName').val(tds[0].innerText);`

   改变表单文本框里的值

8. `$(this).parent().parent().children();`

   获取父亲节点和子节点

9. `let itemUps = $('input[class="itemUp"]:last');`

   选中类名所有为itemUp中的最后一个元素

10. `let a = $("div").data("id")`

    得到标签里的自定义属性`data-id`的值

11. `$('#content').on("click", 'input[class="itemDel"]', function () {})`

     绑定委托事件，参数是'触发事件'，'触发事件的对象'，'触发后的响应函数'

12. `$('#searchType').val`

    获取id为searchType的下拉框选择的值

14. `$('#page').data("自定义属性名称除data外", 属性值);`

    设置自定义属性data-xx的值

