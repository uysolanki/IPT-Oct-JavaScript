import React from 'react'
import './Counter.css'
import Button from './Button'
import { useState } from 'react'

const Counter1 = () => {

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

  return  (
    <>
        <h3>Counter Functions</h3>
        <Button text="IncrementITP" handleClick={handleIncrement} color="red"/>
        <Button text="DecrementITP" handleClick={handleDecrement} color="blue"/>
        <Button text="Increment By 2ITP" handleClick={handleIncrementBy2} color="green"/>
        <Button text="Decrement By 2ITP" handleClick={handleDecrementBy2}/>
        <br/>
        <span>{count}</span>
    </>
  )
}

export default Counter1