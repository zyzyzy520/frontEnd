## 1.创建基于TS的React项目

- 创建基于TS的React项目命令

  - ``` bash
    npx create-react-app react-ts --template typescript
    ```

- 说明

  - `npx create-react-app`表明使用了create-react-app这个脚手架
  - `react-ts`是新建项目的名称，可以随意修改
  - `--template typescript`表示创建支持ts的项目

- 相比js的React项目，目录的变化

  1. 项目根目录中多了一个文件：`tsconfig.json`(ts的配置文件)

  2. 在`src`目录中，文件的后缀有变化，由原来的`.js`变为`.ts`或`.tsx`

     1. `.ts`ts文件的后缀名
     2. `.tsx`是在ts中使用React组件时的后缀。只要代码中出现jsx结构，就得使用该后缀

  3. 在`src`目录中，多了`react-app-env.d.ts`文件、

     1. `.d.ts`类型声明文件，用来指定类型

     2. ==不要动==

     3. ``` typescript
        // TS中的三斜线指令，作用类似于
        ```

     4. 