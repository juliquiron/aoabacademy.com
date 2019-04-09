import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import style from './textregion.module.scss'

class TextRegion extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
      <Container fluid='true'>
        <Row>
          <Col lg={4} md={3}>
            <h3 className={style.title}>{this.props.title}</h3>
            <p className={style.summary}>{this.props.summary}</p>
          </Col>
          <Col lg={8} md={9}>
            <p className={style.description}>{this.props.description}</p>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

export default TextRegion