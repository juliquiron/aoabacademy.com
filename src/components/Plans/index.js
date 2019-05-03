import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import PlanCard from '../../components/PlanCard'

import style from './plans.module.scss'

class Plans extends React.Component {
  render() {
    return (
      <div className={style.wrapper} id="cursos">
      <h3 className={style.title}>Escoje la formación ideal para <span className={style.blue}>tu negocio</span></h3>
      <Container fluid="true">
        <Row>
          <Col lg={4} md={4}>
            <PlanCard
              title="Floating - Open Basic"
              summary="Curso de introducir a la acuicultura en estructuras flotantes"
              price="245"
              description="Para empezar adquirirás una visión clara de todas las operaciones de la acuicultura en estructuras flotantes. Aprende los aspectos básicos sobre el engorde y cría de peces, moluscos y algas. Desde el inicio del planteo del proyecto sobre el papel, hasta la puesta de las especies producidas en el mercado."
            />
          </Col>
          <Col lg={4} md={4}>
            <PlanCard
              title="Floating - Advance"
              summary="Curso avanzado de acuicultura en estructuras flotantes"
              price="735"
              description="Sigue tu camino para ser un verdadero experto. En este curso se amplian aspectos tratados en el curso de acuicultura Floating Open Basic. Se incorporan nuevos campos de estudio y se profundiza en los ya tratados."
              variant="blue"
            />
          </Col>
          <Col lg={4} md={4}>
            <PlanCard
              title="Floating - Pro"
              summary="Curso profesional de acuicultura en estructuras flotantes"
              price="1470"
              description="Último paso para ser un auténtico profesional. Absorbe los conocimientos profesionales que te permitirán organizar y gestionar un cultivo de cría o engorde en mar abierto, llegando a ser el director técnico de la instalación o de tu propio negocio. En este curso se amplían aspectos tratados en el curso AOAB Floating Advance."
            />
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

export default Plans
