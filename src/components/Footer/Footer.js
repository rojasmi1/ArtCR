import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Footer.scss'

export const Footer = () => (
  <footer className={classes.footer}>
    <div className="container">
      <section className="row" id="copyright">
          <span className="text-muted">Copyright © 2016 Michael Rojas.</span>
      </section>
    </div>
  </footer>
)

export default Footer
