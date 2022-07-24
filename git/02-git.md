# Git

> Git，是现在最流行的`分布式`版本控制系统。

## 安装

淘宝镜像下载地址：https://npm.taobao.org/mirrors/git-for-windows/

## 初始化配置

设置每一个人自己的姓名和邮箱地址：

``` bash
git config --global user.name 'jianglan'
git config --global user.email 'jianglan@gmail.com'
```

## 工作流程

![image-20201229102618322](https://woniumd.oss-cn-hangzhou.aliyuncs.com/web/jianglan/20201229102618.png)

写一个小功能，就将其放入暂存区，完成多个后，提交到本地仓库。本地仓库会存有提交记录。当需要整合代码时，从本地仓库push到远程仓库。远程仓库会整合大家提交的代码，从远程仓库拉取代码后，会自动更新本地代码。

### 使用步骤

1. **创建远程仓库（一个项目组创建一个即可）**

   ​			---在码云上去新建一个仓库

2. **将远程仓库克隆到本地**

   - `克隆在本地所在的位置就是工作区` 。`代码要放在该处`才可以被记录版本改动，可以上传到远程仓库

   ``` bash
   git clone 远程仓库地址
   ```

   

3. `查看工作区状态`(哪些内容发生了改变)

   ``` bash
   git status
   ```

   

4. 当【工作区】的内容发生改变，`将改变后的内容暂存到【暂存区】`：

   - 这个命令是将工作区所有改变的文件放到暂存区

   ``` bash
   git add .
   ```

   

5. 将【暂存区】的内容提交到【本地仓库】：

   ``` bash
   git commit -m '提交日志（对当前所提交代码功能的描述）'
   ```

   

6. 当一个功能代码完成之后，将代码从【本地仓库】推送到【远程仓库】

   ``` bash
   git push
   ```

   **如果是首次往远程推送内容，会弹出提示框要求输入远程仓库的账号密码。**

7. 如果【远程仓库】中的代码有更新，我们需要将远程的最新代码拉取到本地：

   ``` bash
   git pull
   ```

   - 注意，`同事修改了同一个文件`，并且`同事已经上传`，而`自己还未上传`。等`自己上传的时候`，会`提示先拉取远程仓库，再上传`。

     ![image-20211229162909133](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211229162909133.png)

   - 而在拉取时，如果`修改的不是同一个地方的代码`，`不会冲突`，`再上传`；如果`修改的是同一个地方的代码`会发生`冲突`，这时去`vscode解决冲突`：同时保留或者保留哪一个的

   - 冲突解决后，`重新"add-commit-push"`此时是在master|MERGING分支操作

   ![image-20211229162444144](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211229162444144.png)

## 分支流程

master是项目的主分支。使用子分支主要的目的是`保证远程仓库的master分支不冲突`

### 1.创建本地子分支，并在子分支中开发

创建子分支的时候，就会`复制一份与本地子分支完全相同的内容到本地子分支`

``` bash
git checkout -b jianglan
```

在子分支中进行项目开发（写代码），当一部分代码完成后，需要`将子分支的代码推送到远程子分支`中去

``` bash
git add .
git commit -m '...'
git push origin jianglan
```

`git push origin jianglan`会自动创建远程子分支 

### 2.合并分支

在子分支中开发完成后，确认代码没问题，就准备将子分支的内容合并到本地主分支中去

在合并前，需要`先pull一下更新本地主分支`的内容 

``` bash
git checkout main/origin
git pull
```

`切换到子分支`，在子分支中做一次合并，`将主分支合并到子分支`

``` bash
git merge master
```

如果有冲突，解决冲突

合并后，重新`将子分支的最新内容推送到远程子分支`

``` bash
git add .
git commit -m '...'
git push origin zhouyu 
```

确定`远程子分支为最新内容`后，`切换回主分支`，在主分支中`合并子分支`

``` bash
git checkout master
git merge zhouyu 
```

合并完成后，`将本地主分支的内容推送到远程主分支`

``` bash
git add .
git commit -m '...'
git push
```



## 分支操作

在本地操作，操作创建的都是本地分支

1. `创建`分支，子分支会copy当前主分支(`本地`)

   ``` bash
   git branch 分支名
   ```

   

2. `创建并切换`到分支

   ``` bash
   git checkout -b 分支名
   ```

   

3. `切换`分支

   ``` bash
   git checkout 分支名
   ```

   

4. `合并`分支：合并某分支到当前分支

   ``` bash
   git merge 分支名
   ```

   

5. 将`当前分支的内容推送至远程分支`（第一次会自动创建远程分支）

   ``` bash
   git push origin 远程分支名
   ```

   

6. `删除未合并`分支

   ``` bash
   git branch -D 分支名
   ```

   

7. `删除已合并`分支

   ``` bash
   git branch -d 分支名
   ```

   

8. `删除远程`分支

   ``` bash
   git push origin -d 分支名
   ```

   

9. `查看当前`分支

   ``` bash
   git branch
   ```

   

10. 

## github邀请协作者

![image-20211229160412405](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211229160412405.png)

## 注意事项

1. 现在push到远程仓库，密码需要输入token

2. 退出页面

   ![image-20211229170542702](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20211229170542702.png)

   ``` bash
   :q
   ```

    

3. 分支之间只能用merge操作

4. git init----将文件夹初始化为git仓库

5. 将初始化后的本地仓库和远程仓库关联（github会有提示）

   ![image-20220119100135571](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220119100135571.png)

3. 

## 补充操作

### git reset 命令

``` bash
$ git reset [--soft | --mixed | --hard] [HEAD]
```

- **--mixed** 为默认，可以不用带该参数，用于==重置暂存区的文件与上一次的提交(commit)保持一致==，==工作区文件内容保持不变==。

  - ``` bash
    $ git reset HEAD^            # 回退所有内容到上一个版本  
    $ git reset HEAD^ hello.php  # 回退 hello.php 文件的版本到上一个版本  
    $ git  reset  052e           # 回退到指定版本
    ```

- **--soft** 参数用于回退到某个版本：

  - ``` bash
    $ git reset --soft HEAD~3   # 回退上上上一个版本 
    ```

- **--hard** 参数==撤销工作区中所有未提交的修改内容，将暂存区与工作区都回到上一次版本，并删除之前的所有信息提交==。远程仓库不会改变：

  - ``` bash
    $ git reset --hard HEAD~3  # 回退上上上一个版本  
    $ git reset –hard bae128  # 回退到某个版本回退点之前的所有信息。 
    $ git reset --hard origin/master    # 将本地的状态回退到和远程的一样 
    ```

- **HEAD 说明：**

  - HEAD 表示当前版本
  - HEAD^ 上一个版本
  - HEAD^^ 上上一个版本
  - HEAD^^^ 上上上一个版本
  - 可以使用 ～数字表示
    - HEAD~0 表示当前版本
    - HEAD~1 上一个版本
    - HEAD^2 上上一个版本
    - HEAD^3 上上上一个版本