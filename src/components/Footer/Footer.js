import React from 'react'
import classes from './Footer.scss'
import SocialIcon from '../SocialIcon'
import FacebookIcon from '../../static/facebook-logo.svg'
import TwitterIcon from '../../static/twitter-logo.svg'
import InstagramIcon from '../../static/instagram-logo.svg'

export const Footer = (props) => (
  <footer className={classes.footer}>
    <div className="container">
      <section className="row">
          <div className="col-lg-6 col-lg-offset-1 col-md-6 col-sm-12" id="copyright">
            <span className="text-muted" dangerouslySetInnerHTML={props.text()}></span>
          </div>
          <div className="col-lg-4 col-lg-offset-1 col-md-5 col-md-offset-1">
          <SocialIcon image={FacebookIcon} altText="Max Rojas's Facebook" link="https://www.facebook.com/max.rojas.98"/>
          <SocialIcon image={TwitterIcon} altText="Max Rojas's Twitter" link="http://www.twitter.com"/>
          <SocialIcon image={InstagramIcon} altText="Max Rojas's Instagram" link="https://www.instagram.com/pintortico46/"/>
          </div>
      </section>
    </div>
  </footer>
)

export default Footer
