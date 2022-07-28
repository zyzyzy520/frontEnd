import React from 'react'
import './index.scss'
import Icon from '@/components/Icon'

export default function Layout() {
  return (
    <div>
      <h1>Layout</h1>
      <div className='container'>
        <Icon icon_name='iconbtn_like_sel'
          onClick={() => {
          alert(123);
          }}
          className="fs gh"
        ></Icon>
      </div>
    </div>
  )
}
