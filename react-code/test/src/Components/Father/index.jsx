import React from 'react'
import Son1 from '../Son1';
import Son2 from '../Son2';
export default function Father() {
    const [count, setCount] = React.useState('0');
    const [name, setName] = React.useState('Ash')

    const add = () => {
        setCount(count + 1);
    }

    const change = React.useCallback(() => {
        setName('ZHOU')
    }, [name]);
    return (
        <div>
            <div>我是父亲，我的和为{count}，名字为{name}</div>
            <button onClick={add}>点击加一</button>
            <hr></hr>
            <Son1 changeName={change} />
            <hr />
            <Son2 />
        </div>

    )
}
