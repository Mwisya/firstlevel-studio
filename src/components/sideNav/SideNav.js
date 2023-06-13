import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidenav.css'

const SideNav = ({onClick}) => {
  return (
    <nav className='sidenav'>
      <div className='sidenav-heading'>
        <h2 className='services-heading'>EXPLORE</h2>
        <i className='close-btn'onClick={onClick} >&times;</i>
      </div>

      <nav className='sidenav-list'>
          <NavLink to='/' onClick={onClick} className='side-links'>home</NavLink>
          <NavLink to='/weddings' onClick={onClick} className='side-links'>wedding</NavLink>
          <NavLink to='/events' onClick={onClick} className='side-links'>events</NavLink>
          <NavLink to='/documentaries' onClick={onClick} className='side-links'>documentary</NavLink>
          <NavLink to='/fashion' onClick={onClick} className='side-links'>fashion</NavLink>
          <NavLink to='/maternity' onClick={onClick} className='side-links'>maternity shoot</NavLink>
          <NavLink to='/clients-choice' onClick={onClick} className='side-links'>clients choice</NavLink>
          <NavLink to='/portraits' onClick={onClick} className='side-links'>portraits</NavLink>
      </nav>

    </nav>
  )
}

export default SideNav