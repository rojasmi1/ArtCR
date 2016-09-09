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
        <li><a href="#">Home</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Meet the artist<span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">About Max</a></li>
            <li><a href="#">About the studio</a></li>
          </ul>
        </li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Shows</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
)

export default Header
