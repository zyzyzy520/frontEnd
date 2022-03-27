import React, { Component } from 'react'
import Son from '../Son'
import Son_fun from '../Son_fun'
import './index.css'

export default class Father extends Component {
    render() {
        return (
            <div className='Father'>
                <h1>我是父亲组件</h1>
                <Son />
                <Son_fun />

            </div>
        )
    }
}
