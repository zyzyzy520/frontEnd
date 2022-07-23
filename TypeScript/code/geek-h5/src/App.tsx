import React from 'react';
import './App.scss';
// 引入路由组件
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login'
import Layout from './pages/Layout'

function App() {
  return (
    <div className="app">
      {/* 改变浏览器网址 */}
      {/* <div>
        <Link to="/home">Demo</Link>
        <Link to='/login'>Login</Link>
      </div> */}
      {/* 根据网址的改变，切换不同的组件 */}
      <div>
        <Switch>
          <Route path='/home' component={Layout}></Route>
          <Route path='/login' component={Login}></Route>
          {/* 当所有路径都匹配不上时，切换路径，一般用于进入页面的默认显示 */}
          <Redirect to='/home'/>
        </Switch>
      </div>

    </div>
  );
}

export default App;
