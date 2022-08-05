# 项目开发 git 使用步骤

## 组长

1. 创建仓库

2. 开通组员权限

3. 克隆仓库到本地

4. 创建项目基本结构

5. 将创建好的项目放入到仓库文件中

6. 删除 vue 项目中的 `.git` 文件夹

7. 将 vue 项目中 `.gitignore` 文件移动到仓库文件根目录：添加一个 `package-lock.json` 忽略文件名

8. 将创建好的项目结构推送到远程仓库的主分支 master

   ``` bash
   git add .
   git commit -m '日志'
   git push
   ```

   

## 组员

1. `克隆仓库`到本地

2. 将所有项目的`依赖项下载`下来

   ```bash
   npm i
   ```

3. `创建自己的本地子分支`

   ```bash
   git checkout -b jianglan
   ```

4. 开始写代码

5. 一部分功能完成后，将本地子分支的代码`推送到远程子分支`

   ```bash
   git add .
   git commit -m '日志'
   git push origin jianglan
   ```

6. 继续写代码

7. 完成一个完整功能后，`将本地子分支的代码合并本地主分支`

   ```bash
   git checkout master
   git merge jianglan
   ```

8. `保存本地主分支的代码到本地仓库`

   ```bash
   git add .
   git commit -m '日志'
   ```

9. 在本地主分支中，`拉取远程主分支`上其他组员的代码

   ```bash
   git pull
   ```

10. 拉取完成后，运行代码检查一下是否有冲突

11. 如果有冲突，`解决完冲突`后，重新`将更改后的代码保存到本地仓库`

    ```bash
    git add .
    git commit -m '日志'
    ```

12. 将本地主分支的代码`推送到远程主分支`

    ```bash
    git push
    ```

13. 将本地主分支中其他组员的代码，`合并到本地子分支`中

    ```bash
    git checkout jianglan
    git merge master
    ```

14. 继续写代码

