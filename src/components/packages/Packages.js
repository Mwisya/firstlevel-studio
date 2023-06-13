import React from 'react'
import GoldPakage from './gold/GoldPakage'
import './packages.css'
import PlatinumPackage from './platinum/PlatinumPackage'
import SilverPackage from './silver/SilverPackage'



const Packages = () => {
    return (
        <div className='packages-container'>
            <h2>Packages guide</h2>
            <div className='packages'>
                <SilverPackage/>
                <GoldPakage/>
                <PlatinumPackage/>
            </div>
        </div>
    )
}

export default Packages
