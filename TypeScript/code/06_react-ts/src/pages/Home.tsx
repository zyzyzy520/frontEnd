import React from 'react'
import { useLocation } from 'react-router-dom'
import { CustomType2 } from '../App'
export default function Home() {
  // 需要指明接收的state的可u下
  const location = useLocation<CustomType2 | undefined>()
  console.log(location.state?.name);
  return (
    <div>这是主页</div>
  )
}
