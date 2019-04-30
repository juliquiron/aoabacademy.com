import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Layout from '../components/Layout'
import Header from '../components/Header'
import HeroRegion from '../components/HeroRegion'
import TextRegion from '../components/TextRegion'
import InsightIcons from '../components/InsightIcons'
import Plans from '../components/Plans'
import './index.scss'

//import 'react-bootstrap'

const BlogIndex = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Header meta={get('site.meta')} />
      <TextRegion
        title="Conviértete en un productor experto en acuicultura"
        summary="“European Knowledge”"
        description1="Inscríbete en AOAB Academy y haz realidad tu negocio con nuestros cursos. Podrás acceder a los cursos en línea o como descarga desde cualquier parte del mundo, en cualquier momento del día, y en cualquier dispositivo."
        description2="Aprenderás a través de atractivas lecciones en video, ilustraciones, cuestionarios y tareas. Consigue tu Certificado de conocimiento AOAB al finalizar cada curso."
      />
      <InsightIcons />
      <HeroRegion
        title="La mejor formación online de acuicultura"
        subtitle="Inscribete totalmente gratis para conseguir información"
        buttonLink="#"
        buttonText="Inscribete"
      />
      <Plans />
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
