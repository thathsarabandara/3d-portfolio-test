import React from 'react'
import NavBtn from '../BtnComponent/NavBtn'
import './NavBar.css'

function NavBar() {
  return (
    <>
       <div className="side-buttons-container">
            <NavBtn text='home' />
            <NavBtn text='Eduction' iconClass='fa-solid fa-graduation-cap'/>
            <NavBtn text='Certifications' iconClass='fa-solid fa-certificate'/>
            <NavBtn text='Skills' iconClass='fa-solid fa-brain'/>
            <NavBtn text='Projects' iconClass='fa-solid fa-briefcase'/>
            {/* <NavBtn text='Services' iconClass='fa-solid fa-satellite'/> */}
            <NavBtn text='Contact' iconClass='fa-solid fa-phone'/>
            <NavBtn text='Controls' iconClass='fa-solid fa-gear'/>
        </div>
    </>
  )
}

export default NavBar