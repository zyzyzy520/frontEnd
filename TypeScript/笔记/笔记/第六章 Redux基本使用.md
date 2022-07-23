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

- ==一个组件对应一个reducer，在根state里对应一个state。自己的state里可以用一个对象存多种数据==

- 生成`action`有两种方式：1、自己创建action的类型；2、根据`action-creator`来得到

### 3.1 手动创建`action`的类型

1. 先声明类型，再创建action

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
    
    // 5. 暴露创建action的函数
    export {
        addTodo,
        delToDo
    }
    ```
    

### 3.2 先声明创建action的函数，然后用`ReturnType<>`获取函数返回的 action 的类型。最后用联合类型

1. ``` typescript
   // 1. 声明新增 action 的函数
   export const addTodo = (data: string) => {
       return {
           type: 'todos/add' as const,      // 这里的类型不够精确，使用类型断言表明是常量，类型是字面量
           payload: data
       }
   }
   
   // 2. 声明删除 action 的函数
   export const delToDo = (id: number) => {
       return {
           type: 'todos/del' as const,
           payload: id
       }
   }
   
   // 3. 声明切换 action 的函数
   export const toggleToDo = (id: number) => {
       return {
           type: 'todos/toggle' as const,
           payload: id
       }
   }
   
   // 4. 获取以上操作action的函数，返回值的类型
   type AddToDoAction = ReturnType<typeof addTodo>
   type DelToDoAction = ReturnType<typeof delToDo>
   type ToggleToDoAction = ReturnType<typeof toggleToDo>
   
   // 5. 组成联合类型，并暴露
   export type ToDoAction = AddToDoAction | DelToDoAction | ToggleToDoAction
   ```

### 3.3 根据action的参数更新state

- reducer/todos

``` typescript
// 引入action里暴露的类型
import type {ToDoAction} from '../actions/todos'

// 新建一个todos的reducer函数 它会处理 todos状态
type ToDoList = Array<{
    id: number,
    text: string,
    done: boolean
}>

//将类型导出方便其它文件使用
export type { ToDoList }

const initialState: ToDoList = [{
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
// 但这里我们就简单设置为返回，只能是三者中的一种
const todosReducer = (prevState = initialState, action: ToDoAction) => {
    // reducer中的作用 根据当前action中的type 进行逻辑数据的处理 返回一个新的状态 => UI更新
    const { type, payload } = action;
    switch (type) {
        case 'todos/add':
            return [...prevState, {
                // 一定不能是prevState.length - 1，这样会导致id重复。例如删除了id为1的数据，但这时又要新增数据时
                id: prevState.length == 0 ? 1 : prevState[prevState.length - 1].id + 1,
                text: payload,
                done: false
            }];
        case 'todos/del':
            return prevState.filter((item) => item.id !== payload);
        // 找到id对应选项，并将状态切换成已完成
        case 'todos/toggle':
            return prevState.map((item) => {
                if (item.id === payload) {
                    // 取反
                    item.done = !item.done;
                }
                return item;
            })
        // 这一步一定要有，当有多个reducer的时候，保持原来的状态
        default:
            return prevState;
            
    }
}

export {
    todosReducer
}
```

## 4、useDispatch的使用

- `react-redux`指定useDispatch的类型

- `useDispatch`hook是一个泛型函数，接收一个类型变量用于指定 Action 的类型，该泛型类型可以直接省略

  - ``` typescript
    import {useDispatch} from 'react-redux'
    
    const dispatch = useDispatch()
    
    // 点击后，创建action并分发action到store
    <button onClick = {() => dispatch(delTodo(item.id))}>x</button>
    ```

  - 

## 5、todos案例

- 显示、新增、删除todo；切换todo的完成状态

### 5.1 完成redux

#### 5.1.1 reducer

- reducer 主要作用是根据之前的`state`和传递过来的`action`，来更新`state`

``` typescript
// 引入action里暴露的类型
import type {TodoAction} from '../actions/todos'

// 新建一个todos的reducer函数 它会处理 todos状态
type ToDoList = Array<{
    id: number,
    text: string,
    done: boolean
}>

//将类型导出方便其它文件使用
export type { ToDoList }

const initialState: ToDoList = [{
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
// 但这里我们就简单设置为返回，只能是三者中的一种
const todosReducer = (prevState = initialState, action: TodoAction) => {
    // reducer中的作用 根据当前action中的type 进行逻辑数据的处理 返回一个新的状态 => UI更新
    const { type, payload } = action;
    switch (type) {
        case 'todos/add':
            return [...prevState, {
                // 一定不能是prevState.length - 1，这样会导致id重复。例如删除了id为1的数据，但这时又要新增数据时
                id: prevState.length == 0 ? 1 : prevState[prevState.length - 1].id + 1,
                text: payload,
                done: false
            }];
        case 'todos/del':
            return prevState.filter((item) => item.id !== payload);
        // 找到id对应选项，并将状态切换成已完成
        case 'todos/toggle':
            return prevState.map((item) => {
                if (item.id === payload) {
                    // 取反
                    item.done = !item.done;
                }
                return item;
            })
        // 这一步一定要有，当有多个reducer的时候，保持原来的状态
        default:
            return prevState;
            
    }
}

export {
    todosReducer
}
```

#### 5.1.2 actions

- actions的作用是暴露函数，在函数里创建不同的actions

``` typescript
import { type } from "os"

// 专门处理todos的action
export { }

// // 1. 声明一个新增action的类型
// type AddToDo = {
//     type: 'todos/add',  // 字面量类型，是固定的值
//     payload: string     // 添加todos是文本，新增action的数据的类型
// }
// // 2. 声明一个删除action的类型
// type DelToDo = {
//     type: 'todos/del',  // 删除的字面量
//     payload: number     // 删除的时候，只需要id就可以删除
// }

// // 3. 声明新增action的函数, 最终返回的对象类型是AddToDo
// const addTodo = (data: string): AddToDo => {
//     return {
//         type: 'todos/add',
//         payload: data
//     }
// }

// // 4. 声明删除action的函数, 最终返回的对象类型是DelToDo
// const delToDo = (id: number): DelToDo => {
//     return {
//         type: 'todos/del',
//         payload: id
//     }
// }

// // 5. 暴露创建action的函数
// export {
//     addTodo,
//     delToDo
// }


// 1. 声明新增 action 的函数
export const addTodo = (data: string) => {
    return {
        type: 'todos/add' as const,      // 这里的类型不够精确，使用类型断言表明是常量，类型是字面量
        payload: data
    }
}

// 2. 声明删除 action 的函数
export const delTodo = (id: number) => {
    return {
        type: 'todos/del' as const,
        payload: id
    }
}

// 3. 声明切换 action 的函数
export const toggleTodo = (id: number) => {
    return {
        type: 'todos/toggle' as const,
        payload: id
    }
}

// 4. 获取以上操作action的函数，返回值的类型
type AddTodoAction = ReturnType<typeof addTodo>
type DelTodoAction = ReturnType<typeof delTodo>
type ToggleTodoAction = ReturnType<typeof toggleTodo>

// 5. 组成联合类型，并暴露
export type TodoAction = AddTodoAction | DelTodoAction | ToggleTodoAction
```

#### 5.1.3 store

- 主要生成store，关联上了reducer

``` typescript
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// 会自动访问 './reducers/index.ts
import rootReducer from './reducers';

// 初始化store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
type RootState = ReturnType<typeof store.getState>;
export type {RootState}
```

### 5.2 业务逻辑完成

#### 5.2.1 新增

##### 样式

``` html
        <input type="text" ref={addRef} />
        <button onClick={addTodo}>新增一条</button>
```

##### 逻辑

- 获取input的内容。
- 调用`actions`暴露的函数生成`action`，然后用`react-redux`的api `useDispatch`生成`dispatch`分发出`action`

``` typescript
import { useSelector, useDispatch } from 'react-redux';

const dispatch = useDispatch();

  // 回调函数
  const addTodo = (): void => {
    // 1. 获取addRef的值，即输入的内容
    const text = addRef.current!.value
    // 2. 创建action并分发
    dispatch(addAction(text))
    // 3. 清空input里的内容
    addRef.current!.value = ""
  }

```

#### 5.2.2 删除

##### 样式

``` html
<li key={item.id}>
  <span>名称：{item.text}; 状态：{item.done === true ? '已完成' : '未完成'}</span>
  <button onClick={toggleTodo(item.id)}>改变状态</button>
  <button onClick={delTodo(item.id)}>删除</button>
</li>
```

##### 逻辑

- 因为删除的时候需要知道id，所以==需要传递参数==，那么就需要用到==高阶函数==。利用作用域
- react遍历到这句代码，会执行函数，并将函数执行返回的另一个函数作为回调

``` typescript
  const delTodo = (id: number) => {
    // 用到高阶函数，因为需要传递参数
    return () => {
      dispatch(delAction(id));
    }
  }
```

#### 5.2.3 切换

##### 样式

- 用到一个==三元式==进行显示

``` html
<li key={item.id}>
  <span>名称：{item.text}; 状态：{item.done === true ? '已完成' : '未完成'}</span>
  <button onClick={toggleTodo(item.id)}>改变状态</button>
  <button onClick={delTodo(item.id)}>删除</button>
</li>
```

##### 逻辑

- 因为删除的时候需要知道id，所以==需要传递参数==，那么就需要用到==高阶函数==。利用作用域
- react遍历到这句代码，会执行函数，并将函数执行返回的另一个函数作为回调

``` typescript
  const toggleTodo = (id: number) => {
    // 用到高阶函数，因为需要传递参数
    return () => {
      dispatch(toggleAction(id));
    }
  }
```

## 6、React事件对象的类型

- 为标签绑定事件时，可能需要指定事件对象的类型，分两种情况：

- 1. ==直接在JSX标签上写事件处理程序，此时，不需要手动指定事件对象的类型==

     1. 技巧：在JSX标签上先把事件处理程序写好，然后，鼠标移动到事件对象上面，来查看事件对象的类型

     2. ![image-20220716111536403](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220716111536403.png)

     3. ``` typescript
        <input type="text" onChange={(event) => setName(event.target.value)}>
        ```

  2. 如果==将事件处理程序抽离出来，需要手动指定函数参数（事件对象）的类型==

     1. ```typescript
        const add = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if(event.code === 'Enter'){
                ......
            }
        }
        ```

## 7、redux-thunk 的使用（异步）

1. ==创建thunk action 的类型==：`RootThunkAction`

   1. ``` typescript
      import {ThunkAction} from 'redux-thunk';
      
      // 第一个类型参数：thunk action返回值类型
      // 第二个类型参数：Redux 状态的类型
      // 第三个类型参数：thunk action 额外参数的类型
      // 第四个类型参数：Redux 中所有 action 的类型。必须完整，否则出错。
      //最终得到的是一个类型
      export type RootThunkAction = ThunkAction<void, RootState, unknown, TodoAction>
          
      // 第一、三个类型参数，参照上述文档来指定即可
      ```

2. ==使用 thunk action 类型==：将该类型作为 thunk action 的返回值类型

   1. 以下代码在actions文件夹里

   2. ``` typescript
      // 将删除任务的 action 修改为 thunk action
      // 注意：返回的函数，才是 thunk action。
      export const delTodo = (id: number): RootThunkAction => {
          // store发现自己收到的是函数，会执行该函数，并将dispatch和getState作为参数给该函数
          return (dispatch, getState)=>{
              setTimeout(()=>{
                  dispatch({
                      type: 'todos/del',
                      payload: id
                  })
              }, 1000);
          }
      }
      ```

3. 例子

   1. ```  typescript
      // 1. 引入redux中异步相关API
      import { ThunkAction } from "redux-thunk"
      
      // 2. 声明异步Action类型
      export type RootThunkAction = ThunkAction<void, RootState, unknown, TodoAction>
          
      // 3. 声明创建异步Action的函数
      // 声明创建异步添加action的函数，一定要注明类型
      export const asyncAddTodo = (data: string): RootThunkAction => {
          // 返回的是一个函数，在函数里开启定时器，时间到后分发想要创建的类型
          // 函数里的参数是store发现得到的是函数后放入的
          return (dispatch, getState) => {
              setTimeout(() => {
                  // 等1秒钟之后再创建并分发，分发操作放在了这里
                  dispatch(addTodo(data));
              }, 1000)
          }
      }
      
      
      // 4. 前三步都是在action文件里完成的，这一步是在样式里完成的
        const asyncAddTodo = () => {
          // 1. 获取addRef的值，即输入的内容
          const text = addRef.current!.value
          // 2. 创建action并分发
          dispatch(asyncAction(text));
          // 3. 清空input里的内容
          addRef.current!.value = ""
      
        }
      ```

   2. 
