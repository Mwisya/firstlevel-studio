import React from 'react'
import './recentShoots.css'
import RecentShoot from '../recentShoot/RecentShoot'


const RecentShoots = () => {
    return (
        <section className='recent-shoots'>
            <h2>Recent shoots</h2>
            <p>customer engagement and satisfaction is our core drive to happy clients</p>
            <ul>
                <li>
                    <RecentShoot/>
                </li>
                <li>
                    <RecentShoot/>
                </li>
                <li>
                    <RecentShoot/>
                </li>
                <li>
                    <RecentShoot/>
                </li>
            </ul>
        </section>
    )
}

export default RecentShoots
