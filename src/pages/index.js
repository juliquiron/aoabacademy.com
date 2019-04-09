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
        title="Conviertete en un productor experto en acuicultura"
        summary="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam."
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum<br /> iriure dolor in hendrerit in vulputate velit esse molestie "
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
