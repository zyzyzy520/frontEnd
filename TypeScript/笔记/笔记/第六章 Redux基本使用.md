## 1、初始化

1. 安装依赖包：`yarn add redux react-redux redux-devtools-extension redux-thunk`

2. 新建文件 `store/index.ts`（后缀为`.ts`）

   1. ``` typescript
      import {createStore, applyMiddleware} from 'redux'
      import {composeWithDevTools} from 'redux-devtools-extension'
      import thunk from 'redux-thunk'
      import reducer from './reducers'
      
      // 初始化store
      const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
      
      export default store;
      ```

3. 新建文件 `store/reducers/index.ts`（组合多个reducer）

   1. ``` typescript
      // 导出统一的reducers，它就是一个函数集
      // 一个正常的项目 有很多模块 会有很多模块的函数集
      import { combineReducers } from "redux";
      import { todosReducer } from "./todos";
      
      // 将多个reducer组合在一起
      const rootReducer = combineReducers({
          //reducer的汇总
          //名字是存储到state中的属性名，值是关联的reducer
          'todos': todosReducer
      })
      
      export default rootReducer;
      ```

4. 新建文件 `store/reducers/todos.ts`（写自己的reducer）

   1. ``` typescript
      // 新建一个todos的reducer函数 它会处理 todos状态
      type ToDoLList = Array<{
          id: number,
          text: string,
          done: boolean
      }>
      
      //将类型导出方便其它文件使用
      export type { ToDoLList }
      
      const initialState: ToDoLList = [{
          id: 1,
          text: '吃饭',
          done: false
      }, {
          id: 2,
          text: '睡觉',
          done: true
      }, {
          id: 3,
          text: '打豆豆',
          done: false
      }];
      
      // reducer 拿到之前的state和action，根据action的类型和参数进行处理。
      // 但这里我们就简单设置为返回
      const todosReducer = (prevState = initialState, action: any) => {
          // reducer中的作用 根据当前action中的type 进行逻辑数据的处理 返回一个新的状态 => UI更新
          return prevState;
      }
      
      export {
          todosReducer
      }
      ```

   2. 

## 2、获取Redux仓库的状态类型

- 思路：`store.getState()`可以用来获取Redux仓库的状态，然后通过`ReturnType`获取状态的类型

  - ```typescript
    // 在store/index.ts中：
    
    // 获取 Redux 整个仓库的状态类型：
    export type RootState = ReturnType<typeof store.getState>;
    
    /*
    	store.getState是一个函数
    	typeof store.getState就能获取到函数的类型
    	ReturnType<typeof store.getState>就能获取到函数返回值的类型，而store.getState的返回值就是仓库的状态
    */                                  
    ```

- `ReturnType`是一个泛型工具类型，用来和获取函数的返回值类型，==参数是函数的类型==

  - ``` typescript
    function add(n1: number, n2: number): number {
        return n1 + n2;
    }
    
    // 获取函数 add 的类型
    type AddFn = typeof add;
    
    // 获取函数 add 的返回值类型
    type AddFnReturnType = ReturnType<AddFn>;
    
    // 直接获取 add 函数的返回值类型
    type AddFnReturnType = ReturnType<typeof add>;;
    ```

- 使用`useSelector`hook获取Redux状态：

  - ``` typescript
    import {RootState} from '../store';
    
    // 获取todos数据
    const todos = useSelector((state: RootState) => state.todos);
    ```

  - 

## 3、reducer函数的类型

- 生成`action`有两种方式：1、自己创建action的类型；2、根据`action-creator`来得到

### 3.1 手动创建`action`的类型

- 先声明类型，再创建action

  - ``` typescript
    // 专门处理todos的action
    export { }
    
    // 1. 声明一个新增action的类型
    type AddToDo = {
        type: 'todos/add',  // 字面量类型，是固定的值
        payload: string     // 添加todos是文本，新增action的数据的类型
    }
    // 2. 声明一个删除action的类型
    type DelToDo = {
        type: 'todos/del',  // 删除的字面量
        payload: number     // 删除的时候，只需要id就可以删除
    }
    
    // 3. 声明新增action的函数, 最终返回的对象类型是AddToDo
    const addTodo = (data: string): AddToDo => {
        return {
            type: 'todos/add',
            payload: data
        }
    }
    
    // 4. 声明删除action的函数, 最终返回的对象类型是DelToDo
    const delToDo = (id: number): DelToDo => {
        return {
            type: 'todos/del',
            payload: id
        }
    }
    ```

  - 