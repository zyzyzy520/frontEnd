import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
export default class List extends React.Component {
    render() {
        const { userInfo } = this.props
        return (
            <div className="row">
                {
                    userInfo.map((element) => {
                        return (
                            <div className="card" key={element.id}>
                                <a href={element.html_url} target="_blank">
                                    <img alt="图片不可用" src={element.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{element.login}</p>
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}