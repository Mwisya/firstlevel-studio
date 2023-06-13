import React, {useState, useEffect} from 'react'
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
    const [offsetY, setOffsetY] = useState(0);

    var handleScroll = () => {
        setOffsetY(window.scrollY)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);


    return (
        <div className='home'>
            <Display/>
            <Welcome/>
            <Services style={{transform: `translateY(${offsetY * 0.5}px`}}/>
            <RecentShoots/>
            <InstagramFeeds/>
            <NewsLetter/>
        </div>
    )
}

export default Home
