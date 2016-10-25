import React from 'react'
import classes from './HomeView.scss'
import MaxImage from '../assets/maxrojas-home-image.jpg'
import WelcomeMessage from '../../../components/WelcomeMessage'
import * as Messages from '../../../static/messages_en'

export const HomeView = () => (
  <section id="about-the-author" className="row">
  <header className={classes.mainHeader}>About Max Rojas</header>
  <div className="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
    <img alt='Max Rojas Vargas' className="img-responsive img-rounded" src={MaxImage} />
  </div>
  <div className="col-md-5 col-lg-5">
    <WelcomeMessage painter={Messages.welcomeMessageAuthor} message={Messages.welcomeMessageBody}/>
  </div>
  </section>
)

export default HomeView
