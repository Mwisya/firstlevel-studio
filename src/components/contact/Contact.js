import React from 'react'
import {Link} from 'react-router-dom'
import './contact.css'

import ContactDetails from './contactDetails/ContactDetails'

const Contact = () => {
    return (
        <div className='contact-us'>
            <div className='contact-display'>
                {/* image wil be the background */}
                <img src='' alt=''/>
                <div className='contact-info'>
                    <p>say cheese and let us take the picture</p>
                    <h2>Let's document your memories</h2>
                    <Link to={'/packages'}
                        className='packages-btn'>browse packages</Link>
                </div>
            </div>
            <ContactDetails/>
        </div>
    )
}

export default Contact
