import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import classes from './CoreLayout.scss'
import * as Messages from '../../static/messages_en'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <Header menuId="mainMenu"/>
      {children}
    <Footer text={Messages.footerText}/>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
