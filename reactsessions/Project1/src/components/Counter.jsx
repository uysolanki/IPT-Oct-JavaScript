import React from 'react'
import './Counter.css'
import { useState } from 'react';
const Counter = () => {
    const [count,setCount]=useState(0)
    function handleIncrement()
    {
        if(count<=9)
        //setCount(count+1)
        setCount((prev)=>(prev+1))
    }

     function handleDecrement()
    {
        if(count>0)
        setCount(count-1)
    }

    function handleIncrementBy2()
    {
        if(count<=9)
        //setCount(count+1)
        setCount((prev)=>prev+2)
    }

     function handleDecrementBy2()
    {
        if(count>1)
        setCount(count-2)
    }
  return (
    <>
        <button id='b1' onClick={handleIncrement}>Increment</button>
        <button id='b2' onClick={handleDecrement}>Decrement</button>
        <button id='b3' onClick={handleIncrementBy2}>Increment By 2</button>
        <button id='b4' onClick={handleDecrementBy2}>Decrement By 2</button>
        <br/>
        <span>{count}</span>
    </>
  )
}

export default Counter