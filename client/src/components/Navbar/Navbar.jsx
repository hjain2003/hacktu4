import React from 'react'
import '../Navbar/Navbar.css';
import profile_logo_img from '../../assets/images/Profile_logo.svg' 

const Navbar = () => {
  return (
    <>
      <nav>
        <div id="logo"><h1>HackTU 4.0</h1></div>
        <div id="nav_rightContent">
          <input type="text" placeholder='Search' id="search" />
          <button id="nav_test">Test <br/>Yourself</button>
          <div id="profile_logo"><img src={profile_logo_img} alt="" /></div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
