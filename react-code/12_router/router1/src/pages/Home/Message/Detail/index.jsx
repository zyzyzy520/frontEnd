import React, { Component } from 'react'

export default class Detail extends Component {
    state = {
        detailData: [
            { id: '01', content: '你好，中国' },
            { id: '02', content: '你好，小周' },
            { id: '03', content: '你好，未来的自己' }
        ]
    }
    render() {
        return (
            <ul>
                <li>ID:</li>
                <li>TITLE:</li>
                <li>CONTENT:</li>
            </ul>
        )
    }
}
