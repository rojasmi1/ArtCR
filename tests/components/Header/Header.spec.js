import React from 'react'
import { Header } from 'components/Header/Header'
import classes from 'components/Header/Header.scss'
import { IndexLink, Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header/>)
  })

  it('Renders a nav bar', () => {
    const navbar = _wrapper.find('nav')
    expect(navbar).to.exist
    expect(navbar.contains(
    <div className="container">
      <div className="nav-header">
        <a href="#" id="brand-name" className="navbar-brand">Max Rojas Vargas</a>
      </div>
    </div>
    )).to.be.true
  })
})
