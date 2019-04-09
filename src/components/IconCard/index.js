import React from 'react'

import style from './IconCard.module.scss'

console.log(style)
class IconCard extends React.Component {
  render() {
    return (
      <span className={`${style[this.props.icon]} ${style.iconCard}`}>
        <h3>{this.props.title}</h3>
        <p>{this.props.text}</p>
      </span>
    )
  }
}

export default IconCard
