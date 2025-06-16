import React from 'react'

const Header = (props) => {
  return (
    <>
    <div>{props.text}</div>
    {props.children}
    </>
  )
}

export default Header