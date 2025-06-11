import React from 'react'

//const Button = (props) => {
const Button = ({text,handleClick,color = 'lightpink'}) => {
    const buttonStyles={backgroundColor:color}
  return (
    <button style={buttonStyles} onClick={handleClick}>{text}</button>
  )
}

Button.defaultProps = {
    color: 'lightpink'
    };

export default Button