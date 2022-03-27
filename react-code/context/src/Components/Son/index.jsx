import React, { Component } from 'react'
import './index.css'
// 引入Context
import myContext from '../context'

export default class Son extends Component {
    static contextType = myContext
    render() {
        const { name, age } = this.context
        return (
            <div className='son'>
                <h1>我是孙子组件，我拿到的爷爷的信息为：{name} -- {age}</h1>
            </div>
        )
    }
}
