import React from 'react'
import classes from './HomeView.scss'
import MaxImage from '../assets/maxrojas-home-image.jpg'
import WelcomeMessage from '../../../components/WelcomeMessage'
import PreviewNavigationBox from '../../../components/PreviewNavigationBox'
import * as Messages from '../../../static/messages_en'



export const HomeView = () => (
  <section id="about-the-author" className={`row ${classes.aboutTheAuthor}`}>
  <header className={classes.mainHeader}>About Max Rojas</header>
  <div className="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
    <img alt='Max Rojas Vargas' className="img-responsive img-rounded" src={MaxImage} />
  </div>
  <div className="col-md-5 col-lg-5">
    <WelcomeMessage painter={Messages.welcomeMessageAuthor} message={Messages.welcomeMessageBody}/>
  </div>
  <section id={classes.navigationBoxesContainer}>
    <div className="row">
      <div className="col-md-4">
      <PreviewNavigationBox title={Messages.nivagationBox1Title} content={Messages.nivagationBox1Content} readMore={Messages.nivagationBox1ReadMore}/>
      </div>

      <div className="col-md-4">
      <PreviewNavigationBox title={Messages.nivagationBox2Title} content={Messages.nivagationBox2Content} readMore={Messages.nivagationBox2ReadMore}/>
      </div>

      <div className="col-md-4">
      <PreviewNavigationBox title={Messages.nivagationBox3Title} content={Messages.nivagationBox3Content} readMore={Messages.nivagationBox3ReadMore}/>
      </div>
    </div>
  </section>
  </section>
)

export default HomeView
