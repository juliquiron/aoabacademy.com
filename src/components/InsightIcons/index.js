import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import IconCard from '../../components/IconCard'

import style from './insighticons.module.scss'

class InsightIcons extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
      <Container>
        <Row>
          <Col>
            <IconCard icon="team"
              title="Equipo de expertos"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh "
            />
          </Col>
          <Col>
            <IconCard icon="support"
              title="Soporte personalizado"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh "
            />
          </Col>
          <Col>
            <IconCard icon="virtual"
              title="Campus virtual"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh "
            />
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

export default InsightIcons
