import React from 'react'
import {Jumbotron} from 'react-bootstrap'

import style from './heroregion.module.scss'

import Button from '../../components/Button'

class HeroRegion extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
        <Jumbotron fluid>
          <h3 className={style.title}>{this.props.title}</h3>
          <p className={style.subtitle}>{this.props.subtitle}</p>
          <p>
            <Button location={this.props.buttonLink}>{this.props.buttonText}</Button>
          </p>
        </Jumbotron>
      </div>
    )
  }
}

export default HeroRegion
