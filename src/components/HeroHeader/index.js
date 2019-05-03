import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import './style.scss'

import Button from '../../components/Button'

class HeroHeader extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        <p>
          <Button location={this.props.buttonLink}>{this.props.buttonText}</Button>
        </p>
      </Jumbotron>
    )
  }
}

export default HeroHeader
