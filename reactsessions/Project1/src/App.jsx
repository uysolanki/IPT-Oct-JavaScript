import React from 'react'
import Navbar from './components/navbar'
import Navbar1 from './components/Navbar1';

const App = () => {

                  //North Hemisphere  pure javascript
  let a=10;
  let b=20;

  const numbers=[10,20,30,40,50]
  let sum=0;
  for(let i=0;i<numbers.length;i++)
  sum+=numbers[i]

  console.log(sum)

  
  return (        //equator

                  //South Hemisphere  html code
                  //{Java Script expression}  
  <div>
      <Navbar/>
      <Navbar/>
      <span>{sum}</span>
      <Navbar1/>
  </div>
  )
}

export default App