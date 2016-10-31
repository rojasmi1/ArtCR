import React from 'react'
import classes from './SocialIcon.scss'

export const SocialIcon = (props) => (
    <a href={props.link} target="_BLANK">
      <img src={props.image} className={classes.icon} alt={props.altText}/>
    </a>
)

export default SocialIcon
