import React from 'react'

function Son2() {
    const [count, setCount] = React.useState('0');

    const add = () => {
        setCount(count + 1);
    }
    console.log('儿子2重新渲染')
    return (
        <div>
            <div>我是儿子2，我的和为{count}</div>
            <button onClick={add}>点击加一</button>

        </div>

    )
}

export default React.memo(Son2);
