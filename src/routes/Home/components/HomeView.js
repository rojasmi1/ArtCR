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
      <PreviewNavigationBox title="Title" content="This is a sample box!" readMore={{text:'Read more',link:'http://www.google.com'}}/>
      </div>

      <div className="col-md-4">
      <PreviewNavigationBox title="Title" content="This is a sample box!" readMore={{text:'Read more',link:'http://www.google.com'}}/>
      </div>

      <div className="col-md-4">
      <PreviewNavigationBox title="Title" content="This is a sample box!" readMore={{text:'Read more',link:'http://www.google.com'}}/>
      </div>
    </div>
  </section>
  </section>
)

export default HomeView
