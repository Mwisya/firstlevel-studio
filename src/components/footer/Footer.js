import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

import {MdFacebook} from 'react-icons/md'
import {MdWhatsapp} from 'react-icons/md'
import {FaInstagram, FaCopyright} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'


const Footer = () => {
    return (
        <footer>
            <div className='quick-links'>
                <h2>Quick Links</h2>
                <Link to={'/contact'}
                    className='quick-link'>
                    session bookings</Link>
                <Link to={'/about-us'}
                    className='quick-link'>about us</Link>
                <Link to={'/contact'}
                    className='quick-link'>contacts us</Link>
                <Link to={'/packages'}
                    className='quick-link'>Booking guide</Link>

            </div>
            <div className='socials'>
                <h3>Follow Us</h3>
                <div>
                <a href="http://"><FaInstagram/> </a>
                <a href="http://api.whatsapp.com/send?phone=+255629125977"><MdWhatsapp/></a>
                <a href="http://"><MdFacebook/></a>
                <a href="mailto:firstlevelstudio@gmail.com"><MdOutlineEmail/></a>
                </div>
            </div>

            <p className='rights-p'>All Rights Reserved First Level Studios</p>
            <p className='copy'>
                <FaCopyright/> Copyright 2023 
            </p>
        </footer>
    )
}

export default Footer
