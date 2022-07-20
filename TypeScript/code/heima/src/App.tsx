import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Channel } from './components/Channel';
import { ArticleList } from './components/ArticleList';
import { getChannelList } from './store/actions/channel'; 
import { RootState } from './store';
// 样式文件
import './styles/index.css'


function App() {
  const dispatch = useDispatch();
  const channels = useSelector((state: RootState) => state.channels)
  useEffect(() => {
    // 组件一旦挂载，就发送axios请求，拿到数据
    axios({
      method: 'GET',
      url: 'http://geek.itheima.net/v1_0/channels'
    }).then(res => {
      // 创建action并分发
      dispatch(getChannelList(res.data.data.channels));
      console.log(res.data.data.channels);
      
    })
  },[])
  return (
    <div className="app">
      <Channel />
      <ArticleList />
      <ul>
        {channels.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
