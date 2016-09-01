import React from 'react'
import classes from './HomeView.scss'
import MaxImage from '../assets/maxrojas-home-image.jpg'

export const HomeView = () => (
  <section id="about-the-author" className="row">
  <header className={classes.mainHeader}>About Max Rojas</header>
  <div className="col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1">
    <img alt='Max Rojas Vargas' className="img-responsive img-rounded" src={MaxImage} />
  </div>
  <div className="col-md-5 col-lg-5">
    <p>
      <strong>Max Rojas Vargas</strong> was born and raised in a rural farming village in the province of Cartago, Costa Rica.
      His formal studies Max received at the University of Costa Rica...thus beginning his immersion into the world of art.
      Rojas, one of Costa Rica's established watercolorists, immerses himself in his environment and transposes this experience to paper or canvas.
      The viewer is able to feel the humidity of the swollen clouds, the crispness of  the first steam of light after the storm breaks, swirling hues caught in nature's phenomena.
      Max's acrylics are vigorous, energy-charged renditions conscious of space, surface and color of Costa Rica.
      Rojas also forges metal, carves in wood and weaves on looms he builds himself; total corporal involvement that creates art full of activity, be it conceptual or physical.
    </p>
  </div>
  </section>
)

export default HomeView
