import React from 'react';
import { useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getChannelFromServer } from '../store/actions/channel'
// 引入redux中rootState的类型
import type {RootState} from '../store'
const Channel = () => {
  const dispatch = useDispatch();
  // 这里要注意useSelector拿到的是channel组件的state，而频道是state里的channels属性
  const channels = useSelector((state: RootState) => state.channelsState).channels
  console.log(channels);
  useEffect(() => {
    // 组件一旦挂载完毕，就分发异步action获取数据
    dispatch(getChannelFromServer());
  }, [])

  return (
    <ul className="category">
      {channels.map((item) => {
        if (item.id === 0) {
          return <li className="select" key={item.id}>{item.name}</li>
        } else {
          return <li key={item.id}>{item.name}</li>
        }
        
      })}
      {/* <li className="select">开发者资讯</li> */}
    </ul>
  )
}

export default Channel