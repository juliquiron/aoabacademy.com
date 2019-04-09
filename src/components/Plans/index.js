import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import PlanCard from '../../components/PlanCard'

import style from './plans.module.scss'

class Plans extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
      <h3 className={style.title}>Escoje la formación ideal para <span className={style.blue}>tu negocio</span></h3>
      <Container fluid="true">
        <Row>
          <Col lg={4} md={4}>
            <PlanCard
              title="Open Basic"
              summary="Curso de introducción a la acuicultura en estructuras flotantes."
              price="245"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh "
            />
          </Col>
          <Col lg={4} md={4}>
            <PlanCard
              title="Advance"
              summary="Curso de avanzado a la acuicultura en estructuras flotantes."
              price="735"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh "
              variant="blue"
            />
          </Col>
          <Col lg={4} md={4}>
            <PlanCard
              title="Floating Pro"
              summary="Curso de introducción a la acuicultura en estructuras flotantes."
              price="1470"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh "
            />
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

export default Plans
