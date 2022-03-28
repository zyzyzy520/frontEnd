import React from 'react'
function Son1() {
    const [count, setCount] = React.useState('0');

    const add = () => {
        setCount(count + 1);
    }

    console.log('儿子1重新渲染')
    return (
        <div>
            <div>我是儿子1，我的和为{count}</div>
            <button onClick={add}>点击加一</button>

        </div>

    )
}

export default React.memo(Son1);
