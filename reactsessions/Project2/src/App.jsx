import React from 'react'
import Button from './components/Button'
import { useState } from 'react'
import Header from './components/Header'
//import Product from './components/Product'
import AllProducts from './components/AllProducts'

const App = () => {
  const [flag,setFlag]=useState(true)
  function toggle()
  {
    setFlag(!flag)
  }
  return (
    <div>
      {/* <Header text="McDonalds">   
      <p>I m Lovin It!!!</p>
      </Header>

      <Button color={flag} handleClick={toggle} /> */}
      <AllProducts/>
    </div>
  )
}

export default App