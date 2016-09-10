import React from 'react'
import { Header } from 'components/Header/Header'
import {NavToggle} from 'components/NavToggle/NavToggle'
import classes from 'components/Header/Header.scss'
import { IndexLink, Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(Component) Header', (props) => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header menuId="mainMenu"/>)
  })

  it('Renders a nav bar', () => {
    const navbar = _wrapper.find('nav')
    expect(navbar).to.exist
    expect(navbar.contains(
    <IndexLink to="/">Home</IndexLink>
    )).to.be.true
    expect(navbar.contains(
    <Link to="/about-max">About Max</Link>
    )).to.be.true
    expect(navbar.contains(
    <Link to="/about-studio">About the studio</Link>
    )).to.be.true
    expect(navbar.contains(
    <Link to="/shows">Shows</Link>
    )).to.be.true
    expect(navbar.contains(
    <Link to="/gallery">Gallery</Link>
    )).to.be.true
    expect(navbar.contains(
    <Link to="/contact">Contact</Link>
    )).to.be.true
  })
})
