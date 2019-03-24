import React from 'react'
import { Link } from 'gatsby'
import logo from './logo-header.png'
import './style.scss'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand flex-column flex-md-row">
        <Link className="" to="/">
          <img src={logo} />
        </Link>
        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile/" className="nav-link">
                Profile
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
