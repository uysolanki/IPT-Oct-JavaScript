import React from 'react'
import './Navbar.css'
import menus from '../data/menu'
const Navbar1 = () => {
   
  return (
    <div>
        <ul>
            {menus.map(
                (menu,index)=>{
                        return <li key={index}>{menu}</li>
                }
            )}
        </ul>
    </div>
  )
}

export default Navbar1