import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import NavToggle from '../NavToggle'

export const Header = (props) => (
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <NavToggle for={props.menuId} navbarBrand="Max Rojas Vargas!"/>
    <div className="collapse navbar-collapse" id={props.menuId}>
      <ul className="nav navbar-nav">
        <li><IndexLink to="/">Home</IndexLink></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Meet the artist<span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><Link to="/about-max">About Max</Link></li>
            <li><Link to="/about-studio">About the studio</Link></li>
          </ul>
        </li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/shows">Shows</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </div>
</nav>
)

export default Header
