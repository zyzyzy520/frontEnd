import React from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search'
import List from './components/List'

export default class App extends React.Component {
  // state放在App组件里，那么对state里数据的任何操作都应该放到App组件中

  render() {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    )
  }

}