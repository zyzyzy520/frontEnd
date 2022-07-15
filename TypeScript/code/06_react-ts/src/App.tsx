import React from 'react';
import './App.css';
import { Route, Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Home from './pages/Home';
import Publish from './pages/Publish'
import { ToDoList } from './store/reducers/todos'
import type {RootState} from './store'

// 1. 定义要传递的参数的类型
type CustomType = {
  name: string,
  age: number,
  sex: string
}

// 2.利用接口继承类型，?表示可选
interface CustomType2 extends CustomType {
  money?: number
}

export type {CustomType2}
function App() {
  // 3. 指定要传递的参数的泛型
  const history = useHistory<CustomType2>();
  const todos = useSelector((state: RootState) => state.todos)
  // console.log(todos)
  return (
    <div className="App">
      <div>
        {/* 改变浏览器地址 */}
        <Link to='/login'>登录页面</Link> <br/>
        <Link to='/home'>首页</Link><br />
        <Link to='/publish/Ash'>打印页面</Link>

      </div>
      <div>
        {/* 根据不同的浏览器地址显示不同的组件页面 */}
        <Route path='/login' component={Login}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/publish/:id?/:name' component={Publish}></Route>
      </div>
      <button onClick={() => {
        // 4. 第一个参数是浏览器网址显示的跳转的地址，第二个参数是要传递的参数
        history.push('/home', {
          name: 'Aash',
          age: 12,
          sex:'12'
        })
      }}>
        跳转到首页
      </button>
      <ul>
        {/* react会自动帮忙渲染数组 */}
        {todos.map((item) => {
          return <li key={item.id}>{item.text}</li>
        })}
      </ul>
    </div>
    
  );
}

export default App;
