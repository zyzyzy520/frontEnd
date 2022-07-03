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
        // TS中的三斜线指令，作用类似于 import ，用于指定对其它类型声明文件的依赖关系
        
        // 此处，通过types来 声明依赖于react-scripts包
        // https://www.typescriptslang.org/docs/handbook/triple-slash-directives.html#-reference-types
        /// <reference types="react-scripts" />
        ```
        
     4. 

## 2.`tsconfig.json`介绍

- `tsconfig.json`是ts项目的配置文件，可以用来指定如何编译ts代码等
- 手动创建`tsconfig.json`配置文件的命令：`tsc --init`。但我们用脚手架就不需要创建
- 说明：所有的配置项都可以通过鼠标移入的方式，来查看配置项的解释说明

``` json
{
  // 编译选项
  "compilerOptions": {
    // 生成代码的语言版本：将我们写的 TS 代码编译成哪个版本的 JS 代码
    "target": "es5",
    // 指定要包含在编译中的 library
    // https://github.com/microsoft/Typescript/blob/90e83adb44/lib/lib.dom.iterable.d.ts
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    // 允许 ts 编译器编译 js 文件
    "allowJs": true,
    // 跳过类型声明文件的类型检查
    "skipLibCheck": true,
    // es 模块互操作，屏蔽 ESModule 和 CommonJS之间的差异
    "esModuleInterop": true,
    // 允许通过 import x from 'y' 即使模块没有显式指定 default 导出
    "allowSyntheticDefaultImports": true,
    // 开启严格模式
    "strict": true,
    // 对文件名称强制区分大小写
    "forceConsistentCasingInFileNames": true,
    // 为 switch 语句启用错误报告
    "noFallthroughCasesInSwitch": true,
    // 生成代码的模块化标准
    "module": "esnext",
    // 模块解析（查找）策略
    "moduleResolution": "node",
    // 允许导入扩展名为.json的模块
    "resolveJsonModule": true,
    // 是否将没有 import/export 的文件视为旧（全局而非模块化）脚本文件
    "isolatedModules": true,
    // 编译时不生成任何JS文件（只进行类型检查）
    "noEmit": true,
    // 指定将JSX 编译成什么形式
    "jsx": "react-jsx"
  },
  // 指定允许 ts处理的目录
  "include": [
    "src"
  ]
}
```

## 3.类型声明文件介绍

- 现在的JS应用都会引入许多第三方库来完成任务需求
- 这些第三方库不管是否是用TS编写的，最终都要编译成JS代码，才能发布给开发者使用
- 因为TS提供了类型，所以才有了代码提示和类型保护等机制
- 但在项目开发中使用第三方库时，你会发现它们几乎都有相应的TS类型，这些类型是怎么来的呢？==类型声明文件==
  - 类型声明文件：用来==为已存在的JS提供类型信息==

## 4.TS的两种文件类型

- TS中有两种文件类型：1 `.ts`文件；2`.d.ts`文件
- `.ts`文件：
  1. ==既包含类型信息又包含可执行代码==
  2. 可以被编译为`.js`文件，然后执行代码
  3. 用途：编写程序代码的地方
- `.d.ts`文件：
  1. ==只包含类型信息==的类型声明文件
  2. ==不会生成`.js`文件，仅用于提供类型信息，在`.d.ts`文件中不允许出现可执行的代码，只用于提供类型==
  3. 用途：为JS提供类型信息
- 总结
  1. `.ts`是implementation（代码实现文件）
  2. `.d.ts`是declaration（类型声明文件）
  3. 如果要为JS提供类型信息，要使用`.d.ts`文件 

## 5. 类型声明文件

### 5.1 内置

- TS为JS运行时可用的所有标准化内置API都提供了声明文件。比如，在使用数组时，数组所有方法都会有相应的代码提示以及类型信息

  - ``` typescript
    const strs = ['a', 'b', 'c'];
    // 鼠标放在 forEach 上查看类型
    strs.forEach
    ```

- 可以通过Ctrl + 鼠标左键（Mac：Command + 鼠标左键）来查看内置类型声明文件内容。

- 实际上这都是 TS 提供的内置类型声明文件

  - 比如，查看 forEach 方法的类型声明，在 VSCode 中会自动跳转到 `lib.es5.d.ts` 类型声明文件中
  - 当然，像 window、document 等 BOM、DOM API 也都有相应的类型声明(`lib.dom.d.ts`)

### 5.2 第三方库

- 几乎所有常用的第三方库都有相应的类型声明文件
- 第三方库的类型声明文件有两种存在形式：1.库自带类型声明文件 2.由 DefinitelyTyped 提供

#### 5.2.1 库自带类型声明文件：比如，axios

- ``` type
  import axios from "axios"  // 属于自己有声明文件 会自动加载
  ```

- 查看 `node_modules/axios` 目录

- 解释：这种情况下，正常导入该库，**TS 就会自动加载库自己的类型声明文件**，以提供该库的类型声明。

- 在`import`导入包的时候，会读取`axios`的`package.json`中的`types`字段，来加载指定的类型声明文件

#### 5.2.2 由`DefinitelyTyped`提供

- `DefinitelyTyped`是一个github仓库，用来提供高质量 TS类型声明。[DefinitelyTyped 链接](https://github.com/DefinitelyTyped/DefinitelyTyped/)

- 可以通过 npm/yarn 来下载该仓库提供的 TS 类型声明包，这些包的名称格式为:==`@types/*`==比如，@types/react、@types/lodash 等

  - ``` typescript
    import _ from "lodash" // 自己没有声明文件，需要去第三方库加载 yarn add @types/lodash
    ```

- 说明：在实际项目开发时，如果你使用的第三方库没有自带的声明文件，VSCode 会给出明确的提示

- 解释：当安装 `@types/*` 类型声明包后，**TS 也会自动加载该类声明包**，以提供该库的类型声明

- 补充：TS 官方文档提供了一个页面，可以来查询 @types/* 库[@types/* 库](https://www.typescriptlang.org/dt)

### 5.3 自定义类型声明文件

- 有两种常见情况需要手动创建类型声明文件：1.项目共享类型；2.为已有JS文件提供类型声明

#### 5.3.1 ==项目内共享类型==

- 如果==多个 `.ts` 文件中都用到同一个类型==，此时可以创建 `.d.ts` 文件==提供该类型，实现类型共享==。

- 操作步骤:

  1. 创建 `index.d.ts` 类型声明文件。

  2. ==创建需要共享的类型==，并使用 `export` 导出(TS 中的类型也可以使用 import/export 实现模块化功能)。

     1. ``` typescript
        type Custom = {
            name: string,
            age: number
        }
        
        export {
            Custom
        }
        ```

     2. 

  3. 在需要使用共享类型的 .ts 文件中，通过 `import` 导入即可(.d.ts 后缀导入时，直接省略)。

     1. ``` typescript
        ```

     2. 

#### 5.3.2 为已有JS文件提供类型

- 在将 JS 项目迁移到 TS 项目时，为了让已有的 .js 文件有类型声明。
- 成为库作者，创建库给其他人使用。

- 演示:基于最新的 ESModule(import/export)来为已有 .js 文件，创建类型声明文件。

### 5.4 类型声明文件的使用说明

- 说明:TS 项目中也可以使用 .js 文件。
- 说明:在导入 .js 文件时，TS 会自动加载与 .js 同名的 .d.ts 文件，以提供类型声明。
- `declare` 关键字:用于类型声明，==为其他地方(比如，.js 文件)已存在的变量声明类型，而不是创建一个新的变量==。
  1. 对于 type、interface 等这些明确就是 TS 类型的(只能在 TS 中使用的)，可以省略 declare 关键字。
  2. 对于 ==`let`、`function` 等具有双重含义(在 JS、TS 中都能用)，应该使用 `declare` 关键字==，明确指定此处用于类型声明。

#### 5.4.1 定义类型声明文件

``` typescript
declare let count:number
declare let songName: string
interface Position {
  x: number,
  y: number
}
declare let position: Position
declare function add (x :number, y: number) : number
type Direction = 'left' | 'right' | 'top' | 'bottom'
declare function changeDirection (direction: Direction): void
type FomartPoint = (point: Position) => void
declare const fomartPoint: FomartPoint
export {
  count, songName, position, add, changeDirection, FomartPoint, fomartPoint
}
```

#### 5.4.2 js文件

```javascript
import {count, songName, position, add, changeDirection, FomartPoint, fomartPoint} from 'xxx.d.ts'
let count = 10
let songName = '痴心绝对'
let position = {
  x: 0,
  y: 0
}
function add(x, y) {
  return x + y
}
function changeDirection(direction) {
  console.log(direction)
}
const fomartPoint = point => {
  console.log('当前坐标：', point)
}
export { count, songName, position, add, changeDirection, fomartPoint }
```

### 5.5 类型声明文件的总结

- 类型声明文件出现的目的：为JS文件提供类型声明
- 类型声明文件后缀：`.d.ts`
- 类型声明文件中只应该出现类型，不要有任何的实现（区别于`.ts`文件）
- 使用类型声明文件：只需要关注一种情况，没有自带类型声明文件的第三方库，VSCode在发现没有类型声明文件时，会给出提示，我们只需要按照提示来安装类型声明文件即可：`yarn add @types/*`来安装