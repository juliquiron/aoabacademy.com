import React from 'react'
import { Link } from 'gatsby'
import logo from './logo-header.png'
import './style.scss'

class Navi extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand flex-column flex-md-row">
        <Link className="" to="/">
          <img src={logo} alt="Logo AOAB academy"/>
        </Link>
        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            <li>
              <Link to="#academia" className="nav-link">
                Academia
              </Link>
            </li>
            <li>
              <Link to="#cursos" className="nav-link">
                Cursos
              </Link>
            </li>
            <li>
              <Link to="#equipo" className="nav-link">
                Equipo
              </Link>
            </li>
            <li>
              <Link to="mailto:contacto@aoabacademy.com" className="nav-link">
                Contacto
              </Link>
            </li>
          </ul>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default Navi
