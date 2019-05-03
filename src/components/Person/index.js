import React from 'react'
import {Jumbotron} from 'react-bootstrap'

import style from './person.module.scss'

import ButtonSolid from '../../components/ButtonSolid'

class Person extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
          <p className={style.text}>{this.props.text}</p>
          <p>
            <ButtonSolid location="https://thegreenfishfarm.com/">{this.props.buttonText}</ButtonSolid>
          </p>
      </div>
    )
  }
}

export default Person
