import React from 'react';
import '@/App.scss';
// 引入路由组件
import {Redirect, Route, Switch } from 'react-router-dom';
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'

function App() {
  return (
    <div className="app">
      <div>
        <Switch>
          <Route path='/home' component={Layout}></Route>
          <Route path='/login' component={Login}></Route>
          {/* 当所有路径都匹配不上时，切换路径，一般用于进入页面的默认显示 */}
          <Redirect to='/home'/>
          {/* <Route path="/" render={()=> <Redirect to="/home"></Redirect>}></Route> */}
        </Switch>
      </div>

    </div>
  );
}

export default App;
