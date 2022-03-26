import React, { Component } from 'react'
import Count from './container/Count'
import Person from './container/Person'

//store必须通过props的形式传递给容器组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        <hr></hr>
        <Person />
      </div>

    )
  }
}
