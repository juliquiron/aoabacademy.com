import React from 'react'

import HeroHeader from '../../components/HeroHeader'
import Meta from '../../components/Meta'
import Navi from '../../components/Navi'
import { siteMetadata } from '../../../gatsby-config'

import style from './header.module.scss'

class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <Navi title={siteMetadata.title}  />
        <Meta site={this.props.meta} />
        <HeroHeader
          title="Tu academia online de acuicultura"
          subtitle="Todo lo que necesitas saber para convertirte en un experto en acuicultura"
          buttonLink="#"
          buttonText="Información"
        />
      </header>
    )
  }
}

export default Header
