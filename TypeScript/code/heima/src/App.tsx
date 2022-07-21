import React from 'react';
import Channel from './components/Channel';
import ArticleList from './components/ArticleList';
// 样式文件
import './styles/index.css'

function App() {
  return (
    <div className="app">
      <Channel />
      <ArticleList />
    </div>
  );
}

export default App;
