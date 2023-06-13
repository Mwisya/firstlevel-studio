import React, {useState, useEffect} from 'react'
import Service from '../service/Service'
import './services.css'

const Services = () => {
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
    // style={{transform: `translateY(${offsetY * 0.5}px`}}

    console.log(offsetY)


    return (
        <section className='services-container'>

            <h2>
                Best in</h2>

            <div className='services'>
                <Service name='fashion' link-name='fashion'/>
                <Service name='weddings' link-name='weddings'/>
                <Service name='documentaries' link-name='documentaries'/>
                <Service name='portrait' link-name='portraits'/>
                <Service name='indoor' link-name='indoors'/>
                <Service name='events' link-name='events'/>
                <Service name='maternity shoot' link-name='maternity'/>
                <Service name='client choice' link='clients-choice'/>
                <Service name='products' link='product'/>
            </div>

        </section>
    )
}

export default Services
