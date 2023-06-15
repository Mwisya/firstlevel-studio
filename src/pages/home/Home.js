import React from 'react'
import {
    Display,
    InstagramFeeds,
    NewsLetter,
    RecentShoots,
    Services,
    Welcome
} from '../../components'
import './home.css'

const Home = () => {

    return (
        <div className='home'>
            <Display/>
            <Welcome/>
            <Services/>
            <RecentShoots/>
            <InstagramFeeds/>
            <NewsLetter/>
        </div>
    )
}

export default Home
