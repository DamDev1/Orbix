import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.scss"


export default function Header() {
  return (
    <header>
        <div className="logo">
          <img src="asset/logo.png" alt="" width={100}/>
        </div>
        <nav>
            <ul className='menu-list-container'>
                <NavLink>About</NavLink>
                <NavLink>FAQs</NavLink>
                <NavLink>Contact</NavLink>
            </ul>

            <div className="connect-wallet">
                <button>Connect Wallet</button>
            </div>
        </nav>
    </header>
  )
}
