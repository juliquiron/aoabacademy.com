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
              text="Profesores universitarios, técnicos profesionales e investigadores científicos, avalan nuestros cursos AOAB."
            />
          </Col>
          <Col>
            <IconCard icon="support"
              title="Soporte personalizado"
              text="Seguimiento de tu evolución y aprendizaje. A través de exámenes y contacto directo con los profesores."
            />
          </Col>
          <Col>
            <IconCard icon="virtual"
              title="Campus virtual"
              text="Comunidad virtual de aprendizaje de AOAB, donde tendrás acceso a material exclusivo."
            />
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

export default InsightIcons
