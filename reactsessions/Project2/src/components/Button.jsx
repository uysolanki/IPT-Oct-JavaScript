import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div>
        {/* <button style={{backgroundColor:props.color?'red':'green'}} onClick={props.handleClick}> {props.color?'Subscribe':'Unsubscribe'} </button> */}
        <button className={props.color?'subscribe-button':'unsubscribe-button'} onClick={props.handleClick}> {props.color?'Subscribe':'Unsubscribe'} </button>
    </div>
  )
}

export default Button