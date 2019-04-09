import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import Footer from '../../components/Footer'
import { siteMetadata } from '../../../gatsby-config'

import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'

class Layout extends React.Component {

  render() {
    const { children } = this.props
    return (
      <div>
        {children}
        <Footer title={siteMetadata.title} author={siteMetadata.author} />
      </div>
    )
  }
}

export default Layout
