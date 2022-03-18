import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {

    forward = () => {
        this.props.history.goForward();
    }
    back = () => {
        this.props.history.goBack();
    }
    sendQuest = () => {
        console.log('发送请求')
    }
    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.back}>后退</button>
                <button onClick={this.sendQuest}>发送请求</button>
            </div>
        )
    }
}
export default withRouter(Header)