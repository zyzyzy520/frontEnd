import React from 'react';
import { useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getChannelFromServer, toggleChannelIDInRedux } from '../store/actions/channel'
import { getArticlesFromServer } from '../store/actions/articles';
// 引入redux中rootState的类型
import type { RootState } from '../store'
const Channel = () => {
  const dispatch = useDispatch();
  // 这里要注意useSelector拿到的是channel组件的state，而频道是state里的channels属性
  const { currentChannel, channels } = useSelector((state: RootState) => state.channelsState)

  useEffect(() => {
    // 组件一旦挂载完毕，就分发异步action获取数据
    dispatch(getChannelFromServer());
  }, [])

  // 点击切换频道id的回调，要传递参数所以用到了高阶函数
  const toggleChannelID = (id: number) => {
    return () => {
      dispatch(toggleChannelIDInRedux(id));
    }
  }
  return (
    <ul className="category">
      {channels.map((item) => {
        return <li className={item.id === currentChannel? 'select':''} key={item.id} onClick={toggleChannelID(item.id)}>{item.name}</li>
      })}
    </ul>
  )
}

export default Channel