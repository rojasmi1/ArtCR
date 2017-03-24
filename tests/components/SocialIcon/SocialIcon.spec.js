import React from 'react'
import {SocialIcon} from 'components/SocialIcon/SocialIcon'
import { IndexLink, Link } from 'react-router'
import {TwitterIcon} from 'static/twitter-logo.svg'
import { shallow } from 'enzyme'

describe('(Component) SocialIcon', (props) => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<SocialIcon image={TwitterIcon} altText="Max Rojas's Twitter" link="http://www.twitter.com"/>)
  })

  it('Renders an anchored image', () => {
    const anchor = _wrapper.find('a')
    expect(anchor).to.exist
    expect(anchor.contains(
    <img src="static/twitter-logo.svg" className="icon" alt="Max Rojas's Twitter">
    )).to.be.true


  })
})
