import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <nav className={`navbar ${classes.navbarBlue} navbar-fixed-top`}>
    <div className="container">
      <div className="nav-header">
        <a href="#" id="brand-name" className="navbar-brand">Max Rojas Vargas</a>
      </div>
    </div>
  </nav>
)

export default Header
