import React from 'react'
import style from './buttonsolid.module.scss'

class ButtonSolid extends React.Component {
  render() {
    return (
      <a className={style.link} href={this.props.location} style={this.props.style} target={this.props.target}> {this.props.children}</a>
    )
  }
}

export default ButtonSolid
