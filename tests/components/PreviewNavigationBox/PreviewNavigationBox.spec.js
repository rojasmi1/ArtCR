import React from 'react'
import {PreviewNavigationBox} from 'components/PreviewNavigationBox/PreviewNavigationBox'
import classes from 'components/PreviewNavigationBox/PreviewNavigationBox.scss'
import { IndexLink, Link } from 'react-router'
import {TwitterIcon} from 'static/twitter-logo.svg'
import { shallow } from 'enzyme'

describe('(Component) PreviewNavigationBox', (props) => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<PreviewNavigationBox title="Box Title" content="Sample content" readMore={{text:"Read more",link:"www.google.com"}}/>)
  })

  it('Renders an article with class \'navigationBox\'', () => {
    const article = _wrapper.find('article')
    expect(article).to.exist
    expect(article.hasClass(classes.navigationBox)).to.be.true
  })

  it('Renders title \'Box Title\'', () => {
    const title = _wrapper.find('.'+classes.headerWrapper)
    expect(title).to.exist
    expect(title.contains(<h2>Box Title</h2>)).to.be.true
  })

  it('Renders content \'Sample content\'', () => {
    const content = _wrapper.find('.'+classes.boxContent)
    expect(content).to.exist
    expect(content.contains('Sample content')).to.be.true
  })

  it('Renders link \'Read more\'', () => {
    const link = _wrapper.find('.'+classes.readMore)
    expect(link).to.exist
    expect(link.contains(<a href="www.google.com" target="_blank" className={classes.readMore}>Read more</a>)).to.be.true
  })
})
