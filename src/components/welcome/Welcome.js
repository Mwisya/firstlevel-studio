import React from 'react'
import './welcome.css'
import logo from '../../assets/logo.png'

const Welcome = () => {
    return (
        <section className='welcome-container'>
            <i>
                <img src={logo}
                    alt=''/>
            </i>

            <h2>Welcome to First level studio</h2>
            <p className='welcome'>
                For many years we have been the #No 1 customer and businesses choice when it comes to high quality multi media productions. Not limited to Photography, Videograpy, Creating Advertisements and live streaming services, First Level is a diverse studio that provides tailor made services to a diverse community of clients and business enterprise
            </p>

        </section>
    )
}

export default Welcome
