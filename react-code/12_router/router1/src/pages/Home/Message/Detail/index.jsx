import React, { Component } from 'react'
import qs from 'querystring'
export default class Detail extends Component {
    state = {
        detailData: [
            { id: '01', content: '你好，中国' },
            { id: '02', content: '你好，小周' },
            { id: '03', content: '你好，未来的自己' }
        ]
    }
    render() {
        // params参数处理
        /*
        const { id, title } = this.props.match.params;*/
        const { detailData } = this.state;

        // search参数处理
        /*
        const { search } = this.props.location;
        const searchObj = qs.parse(search.slice(1));  //{id: 01, title= "xxxx"}
        const { id, title } = searchObj*/

        // state参数处理
        const { id, title } = this.props.location.state;

        const { content } = detailData.find(Element => {
            return Element.id == id;
        })

        return (
            <ul>
                <li>ID: {id}</li>
                <li>TITLE: {title}</li>
                <li>CONTENT: {content}</li>
            </ul>
        )
    }
}
