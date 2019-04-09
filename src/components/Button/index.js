import React from 'react'
import style from './button.module.scss'

class Button extends React.Component {
  render() {
    return (
      <a className={style.link} href={this.props.location} style={this.props.style}> {this.props.children}</a>
    )
  }
}

export default Button
