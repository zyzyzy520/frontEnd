import React from 'react'
import ReactDOM from 'react-dom'

export default function Count() {
    const [sum, setSum] = React.useState(0);
    const [name, setName] = React.useState('Ash')
    const text = React.useRef();

    function add() {
        setSum(sum + 3);
    }
    function changeName() {
        setName('小刘')
    }
    function unmout() {
        ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
    }
    function alertMess() {
        // ref容器.current拿到节点
        alert(text.current.value);
    }
    React.useEffect(() => {
        //组件挂载上后，开启定时器
        const timer = setInterval(() => {
            setSum(preSum => preSum + 3);
        }, 1000)
        return () => {
            // 组件卸载时清理定时器
            clearInterval(timer);
            console.log('已清除')
        }
    }, [])
    return (
        <div>
            <h1>当前求和为：{sum}</h1>
            <h2>名字:{name}</h2>
            <button onClick={add}>点我+3</button>
            <button onClick={changeName}>点我给老刘换名</button>
            <button onClick={unmout}>点我卸载组件</button>
            <input type='text' ref={text}></input>
            <button onClick={alertMess}>点我提示输入</button>
        </div>
    )
}