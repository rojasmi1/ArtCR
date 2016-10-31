import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Footer.scss'

export const Footer = (props) => (
  <footer className={classes.footer}>
    <div className="container">
      <section className="row" id="copyright">
          <div className="col-lg-6">
            <span className="text-muted" dangerouslySetInnerHTML={props.text()}></span>
          </div>
          <div className="col-lg-4 col-lg-offset-2">

          </div>
      </section>
    </div>
  </footer>
)

export default Footer
