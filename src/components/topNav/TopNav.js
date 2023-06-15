import React from 'react'
import { NavLink } from 'react-router-dom'
import './topNav.css'

const TopNav = () => {
  return (
    <nav className='top-nav'>
      <NavLink to='/'  className='top-link'>home</NavLink>
      <NavLink to='/weddings'  className='top-link'>wedding</NavLink>
      <NavLink to='/events'  className='top-link'>events</NavLink>
      <NavLink to='/documentaies'  className='top-link'>documentary</NavLink>
      <NavLink to='/fashion'  className='top-link'>fashion</NavLink>
      <NavLink to='/maternity'  className='top-link'>maternity</NavLink>
      <NavLink to='/clients-choice'  className='top-link'>clients choice</NavLink>
      <NavLink to='/portraits'  className='top-link'>portraits</NavLink>
      <NavLink to='/contact'  className='top-link'>Contact Us</NavLink>
    </nav>
  )
}

export default TopNav