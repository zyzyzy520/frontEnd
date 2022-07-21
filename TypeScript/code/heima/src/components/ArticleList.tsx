import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import type {RootState} from '../store'
import avatar from '../assets/back.jpg'

const ArticleList = () => {
  // 1.当组件挂载完毕时，获取当前频道对应的id
  const currentChannel = useSelector((state: RootState) => state.channelsState).currentChannel

  useEffect(() => {
    // 2.调用异步action，发送请求获取频道对应文章的信息，要将频道id作为参数
  })
  return (
    <div className="list">
      <div className="article_item">
        <h3>python数据预处理 ：数据标准化</h3>
        <div className="img_box">
          <img src={avatar} className="w100" alt="" />
        </div>
        <div className="info_box">
          <span>13552285417</span>
          <span>0评论</span>
          <span>2018-11-29T17:02:09</span>
        </div>
      </div>
    </div>
  )
}

export default ArticleList
