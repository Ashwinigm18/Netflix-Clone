import React, { useEffect, useState } from 'react'
import "./Nav.css"

const Nav = () => {
    const [show, handleShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY){
                handleShow(true);
            }
            else handleShow(false);
        })
    })
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className='nav_logo' src="http://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix logo" />
      
      <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="NetFlix-logo" />
    </div>
  )
}

export default Nav
