import React from 'react'
import {NavToggle} from 'components/NavToggle/NavToggle'
import { IndexLink, Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(Component) NavToggle', (props) => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<NavToggle for="mainMenu" navbarBrand="Max Rojas Vargas!"/>)
  })

  it('Renders an IndexLink', () => {
    const div = _wrapper.find('div')
    expect(div).to.exist
    expect(div.contains(
    <IndexLink to="/" className="navbar-brand" href="#">Max Rojas Vargas!</IndexLink>
    )).to.be.true


  })
})
