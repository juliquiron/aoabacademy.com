import React from 'react'
import {Jumbotron} from 'react-bootstrap'

import style from './personmain.module.scss'

import Button from '../../components/Button'

class PersonMain extends React.Component {
  render() {
    return (
      <div className={style.wrapper} id={this.props.id}>
        <div className={style.content}>
          <h3 className={style.title}>{this.props.title}</h3>
          <p className={style.text}>{this.props.text}</p>
          <p>
            <Button location="https://www.jordicarrerasdoll.com/" target="_blank">{this.props.buttonText}</Button>
          </p>
        </div>
      </div>
    )
  }
}

export default PersonMain
