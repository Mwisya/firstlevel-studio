import React from 'react'
import './service.css'
import { Link } from 'react-router-dom'

const Service = ({name, link}) => {
  return (
    <div className='service'>
        <img src="" alt="" />
        <Link to={`/${link}`} className='link'>{name}</Link>
    </div>
  )
}

export default Service