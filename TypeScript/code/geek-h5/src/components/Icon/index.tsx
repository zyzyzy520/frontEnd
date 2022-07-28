import React from 'react'
import classnames from 'classnames'
type PropsType = {
    icon_name: string,
    onClick: () => void,
    className: string
}
export default function Icon(props: PropsType ) {
    const { icon_name, onClick, className } = props;
    return (
        <svg className={`icon ${className}`} aria-hidden="true" onClick={onClick}>
    {/* 使用时，只需要将此处的 iconbtn_like_sel 替换为 icon 的名称即可*/}
        <use xlinkHref={`#${icon_name}`}></use>
    </svg>
  )
}
