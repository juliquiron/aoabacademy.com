import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Header from '../components/Header'
import HeroRegion from '../components/HeroRegion'
import InsightIcons from '../components/InsightIcons'
import Layout from '../components/Layout'
import TextRegion from '../components/TextRegion'
import Person from '../components/Person'
import PersonMain from '../components/PersonMain'
import Plans from '../components/Plans'
import './index.scss'

//import 'react-bootstrap'

const BlogIndex = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Header meta={get('site.meta')} />
      <TextRegion
        id="academia"
        title="Conviértete en un productor experto en acuicultura"
        summary="“European Knowledge”"
        description1="Inscríbete en AOAB Academy y haz realidad tu negocio con nuestros cursos. Podrás acceder a los cursos en línea o como descarga desde cualquier parte del mundo, en cualquier momento del día, y en cualquier dispositivo."
        description2="Aprenderás a través de atractivas lecciones en video, ilustraciones, cuestionarios y tareas. Consigue tu Certificado de conocimiento AOAB al finalizar cada curso."
      />
      <InsightIcons />
      <HeroRegion
        title="La mejor formación online de acuicultura"
        subtitle="Inscribete totalmente gratis para conseguir información"
        buttonLink="#cursos"
        buttonText="Inscribete"
      />
      <Plans />
      <PersonMain
        id='equipo'
        title='Sobre nosotros'
        text="Jordi Carreras Doll, Director de AOAB, es licenciado en biología por la Universidad de Barcelona, docente, acuicultor y vicedecano del Colegio Oficial de Biólogos de Cataluña en Barcelona. Con más de 30 años de experiencia en el sector acuícola ha liderado proyectos en acuicultura por todo el mundo."
        buttonText="Saber más"
      />
      <Person
        text="Jordi C. Vilariño, Jefe de estudios de AOAB, es licenciado en biología por la Universidad Autónoma de Barcelona, técnico especialista en recirculación y docente. Pionero en sistemas integrados de acuicultura, ha realizado proyectos como The Greenfish Farm."
        buttonText="Saber más"
      />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
      }
    }
  }
`
