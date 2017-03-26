import React from 'react'
import classes from './PreviewNavigationBox.scss'

export const PreviewNavigationBox = (props) => (
// <p> <strong>{props.painter}</strong>  <span dangerouslySetInnerHTML={props.message()}/></p>
<article className="${classes.navigationBox}">
<div className={classes.headerWrapper}>
  <h2>{props.title}</h2>
</div>
<section className="${classes.boxContent}">
{props.content}
</section>
<a href={props.readMore.link} target="_blank" className="${classes.readMore}">{props.readMore.text}</a>
</article>
)

export default PreviewNavigationBox
