import React from 'react'
import './index.css'
import myContext from '../context'

// 解构拿到消费者
const { Consumer } = myContext
export default function Son_fun() {
    return (
        <div className='son_fun'>
            <h1>
                我是函数式儿子组件，我接收到的
                <Consumer>
                    {
                        value => { return value.name + '---' + value.age }
                    }
                </Consumer>
            </h1>
        </div>
    )
}