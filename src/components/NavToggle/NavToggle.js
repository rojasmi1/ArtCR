import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './NavToggle.scss'

export const NavToggle = (props) => (
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target={`#${props.for}`} aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    <IndexLink to="/" className="navbar-brand" href="#">{props.navbarBrand}</IndexLink>
    </div>
  )

export default NavToggle