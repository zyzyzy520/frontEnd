// 将根组件App渲染到页面上
import React from "react";
import ReactDOM from 'react-dom';

import App from './App.jsx'

// 和index.html上的跟容器名字一致
ReactDOM.render(<App />, document.getElementById('root'));
