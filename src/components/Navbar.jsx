/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
const navLinks = ["Pricing", "Solutions", "Community", "Resources","Contact"]

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='logo'>
            Pj
        </div>
        <div className='nav-links'>
        {
            navLinks?.map((item)=>{
                return <div>
                    <a href='#'>{item}</a>
                </div>
            })
        }
        </div>
        <div className='nav-btns'>
            <button className='btn btn-primary'>Register</button>
            <button className='btn btn-secondary'>Login</button>
        </div>
    </nav>
  )
}

export default Navbar