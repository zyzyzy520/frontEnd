import React from "react";
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { createAddAction, createSubAction } from '../redux/action/Count'

class Count extends React.Component {
    render() {
        return (
            <div>
                <h1>和为{this.props.sum}</h1>
                <button onClick={this.props.add}>加一</button>
                <button onClick={this.props.sub}>减一</button>
            </div>
        )
    }
}
// 映射状态
const mapStateToProps = (state) => {
    return {
        sum: state.countState.num
    }
}
//映射操作状态的方法
const mapDispatchToProps = (dispatch) => {
    return {
        add: () => { dispatch(createAddAction()) },
        sub: () => { dispatch(createSubAction()) }
    }
}

const countContainer = connect(mapStateToProps, mapDispatchToProps)(Count)
export default countContainer