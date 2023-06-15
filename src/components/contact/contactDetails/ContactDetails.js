import React from 'react'
import "./contactDetails.css"
import {MdOutlineEmail} from 'react-icons/md'
import {MdCall} from 'react-icons/md'

const ContactDetails = () => {
  return (
    <section className="contact-details-container">
        <div className='questions-wrapper'>
                <div>
                    <h2>First Level Studios</h2>
                    <p>Contact us we plan your photography or videography shoot, choose the package you want and book your session with with us now</p>
                </div>

                <div className="questions">

                    <h2>questions?</h2>
                    <div className='email-bg'>
                        <a href="mailto:firstlevelstudios@gmail.com" className='email-btn'>Email Us</a>
                    </div>

                    <a href="mailto:firstlevelstudios@gmail.com" className='email-link'>
                        <i><MdOutlineEmail/></i>firstlevelstudios@gmail.com</a>

                </div>
        </div>

        <div className='call-us'>
                <p>
                    <i className='call-svg'><MdCall/></i>
                    Call our Office</p>
                <div className='phone-numbers'>
                    <a href="tel:+255629125977">+(255) 62-912 5977</a>
                    <a href="tel:+255626845154">+(255) 62-684 5154</a>
                    <a href="tel:+255626815154">+(255) 62-681 5154</a>
                </div>
        </div>
    </section>
  )
}

export default ContactDetails