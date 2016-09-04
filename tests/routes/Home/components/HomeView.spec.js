import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { render } from 'enzyme'

describe('(View) Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<HomeView />)
  })

  it('Renders a welcome message', () => {
    const welcome = _component.find('header')
    expect(welcome).to.exist
    expect(welcome.text()).to.match(/About Max Rojas/)
  })

  it('Renders a bio of the painter', () => {
    const bio = _component.find('p')
    expect(bio).to.exist
    expect(bio.find('strong').text()).to.match(/Max Rojas Vargas/)
  })

})
