import React from 'react'
import './nav.scss'
import navLogo from "../../assets/svg/navLogo.svg"

const Nav = () => {
  return (
    <nav className='nav'>
      <div className="container">
      <div className="nav__hug">
        <div className="logo-links">
        <a href="index.html"><img src={navLogo} alt="navLogo" /></a>
        <ul>
            <li>Our Plans</li>
            <li>How It Works</li>
            <li>Our Menus</li>
            <li>Gift Cards</li>
            <li>Sustainability</li>
            <li>Thanksgiving Box</li>
        </ul>
        </div>
        <button>Log In</button>
      </div>
      </div>
    </nav>
  )
}

export default Nav