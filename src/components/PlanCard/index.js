import React from 'react'
import ButtonSolid from '../../components/ButtonSolid'

import style from './plancard.module.scss'

class IconCard extends React.Component {
  render() {
    return (
      <span className={`${this.props.variant === 'blue' ? 'blue-variant' : ''} ${style.product}`}>
        <h3 className={style.title}>{this.props.title}</h3>
        <strong className={style.summary}>{this.props.summary}</strong>
        <p className={`price ${style.price}`}>{this.props.price}</p>
        <p className={style.description}>{this.props.description}</p>
        <ButtonSolid location="mailto:">Lo quiero</ButtonSolid>
      </span>
    )
  }
}

export default IconCard
