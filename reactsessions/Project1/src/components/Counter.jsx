import React from 'react'
import './Counter.css'
import { useState } from 'react';
const Counter = () => {
    const [count,setCount]=useState(0)
    function handleIncrement()
    {
        if(count<=9)
        setCount(count+1)
    }

     function handleDecrement()
    {
        if(count>0)
        setCount(count-1)
    }
  return (
    <>
        <button id='b1' onClick={handleIncrement}>Increment</button>
        <button id='b2' onClick={handleDecrement}>Decrement</button><br/>
        <span>{count}</span>
    </>
  )
}

export default Counter