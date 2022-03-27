import React, { Component } from 'react'
import Father from '../Father'
import './index.css'
// 引入Provider
import myContext from '../context'

const { Provider } = myContext
export default class Grandfather extends Component {
    state = { name: 'Ash', age: 26 }
    render() {
        const { name, age } = this.state;
        return (
            <div className='Grandfather'>
                <h1>我是爷爷组件</h1>
                <Provider value={{ name, age }}>
                    <Father />
                </Provider>
            </div>
        )
    }
}
