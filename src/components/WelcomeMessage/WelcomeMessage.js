import React from 'react'
import classes from './WelcomeMessage.scss'

export const WelcomeMessage = (props) => (
<p> <strong>{props.painter}</strong>  <span dangerouslySetInnerHTML={props.message()}/></p>
)

export default WelcomeMessage
