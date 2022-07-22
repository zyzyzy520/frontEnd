import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import type {RootState} from '../store'
import avatar from '../assets/back.jpg'
import {getArticlesFromServer} from '../store/actions/articles'

const ArticleList = () => {
  // 1.当组件挂载完毕时，获取当前频道对应的id
  const currentChannel = useSelector((state: RootState) => state.channelsState).currentChannel
  const dispatch = useDispatch();
  const articles = useSelector((state: RootState) => state.articlesState)

  // 监听激活频道的变化
  useEffect(() => {
    // 2.如果当前频道发生变化，调用异步action，发送请求获取频道对应文章的信息，要将频道id作为参数
    // 因为一开始加载页面的时候还不知道第一个频道的id，所以可以进行一个非空判断
    // console.log(currentChannel)
    if(currentChannel !== null) dispatch(getArticlesFromServer(currentChannel));
  },[currentChannel])
  
  return (
    <div className="list">
      {articles.map((item) => {
        return (
          <div className="article_item" key={item.art_id}>
            <h3>{ item.title}</h3>
          <div className="img_box">
              <img src={item.cover.images === undefined || item.cover.images.length === 0? avatar:item.cover.images[0]} className="w100" alt="" />
          </div>
          <div className="info_box">
              <span>{item.aut_name}</span>
              <span>{ item.comm_count}评论</span>
              <span>{item.pubdate}</span>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default ArticleList
