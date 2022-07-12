import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div>
        {/* 改变浏览器地址 */}
        <Link to='/login'>登录页面</Link> <br/>
        <Link to='/home'>首页</Link>
      </div>
      <div>
        {/* 根据不同的浏览器地址显示不同的组件页面 */}
        <Route path='/login' component={Login}></Route>
        <Route path='/home' component={Home}></Route>
      </div>
    </div>
    
  );
}

export default App;
