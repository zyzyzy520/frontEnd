import React from 'react'
// 引入创建容器的库
import { connect } from 'react-redux'
// 引入创建action
import createAddAction from '../../redux/actions/person'

class Person extends React.Component {
    // 这个state用于存储当前输入框的内容
    state = {
        name: '',
        age: ''
    }
    saveInput = (type) => {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }
    addPerson = () => {
        this.props.addPerson(this.state);
    }
    render() {
        // console.log(this.props)
        return (
            <div>
                <h1>我是Person组件</h1>
                <h3>我读取Count组件的和是: {this.props.sum}</h3>
                <input type="text" placeholder="名字" onChange={this.saveInput('name')}></input>
                <input type="text" placeholder="年龄" onChange={this.saveInput('age')}></input>
                <button onClick={this.addPerson}>添加</button><br />
                <ul>
                    {this.props.persons.map((personObj, index) => {
                        return <li key={index}>{personObj.name}--{personObj.age}</li>
                    })}
                </ul>
            </div>
        )
    }
}
// 映射状态
const mapStateToProps = (state) => (
    {
        sum: state.countState,
        persons: state.personState
    })

// // 映射操作状态的方法，操作状态并提供接口给UI组件
const mapDispatchToProps = {
    addPerson: createAddAction
}
const personContainer = connect(mapStateToProps, mapDispatchToProps)(Person)

export default personContainer