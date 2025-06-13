import React from 'react'
import Button from './components/Button'
import { useState } from 'react'

const App = () => {
  const [flag,setFlag]=useState(true)
  function toggle()
  {
    setFlag(!flag)
  }
  return (
    <div>
      <Button color={flag} handleClick={toggle} />
    </div>
  )
}

export default App