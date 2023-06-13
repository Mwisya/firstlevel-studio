import React, {useState} from 'react'
import SideNav from '../sideNav/SideNav';
import TopNav from '../topNav/TopNav';
import './header.css'
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png'
import {MdMenu} from 'react-icons/md'
import {MdFacebook} from 'react-icons/md'
import {MdWhatsapp} from 'react-icons/md'
import {FaInstagram} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'

const Header = () => {
    const [toggle, setToggle] = useState(false);
    function open() {
        setToggle(true)
    };
    function close() {
        setToggle(false);
    }

    return (
        <header>

            <div className='logo-container'>
                <img src={logo}
                    alt='png'/>
                <p>first level studios</p>
            </div>
            <div className='visibility'>
                <Link to='/packages' className='booking-btn'>Book shoot</Link>
                <i onClick={open}>
                    <MdMenu/>
                </i>
            </div>

            <div className='topnav-container'>
                <TopNav/>
                <div className='topnav-links'>
                    <div>
                        <a href="https://facebook.com/accounts?firstlevelstudios">
                        <MdFacebook/>
                        </a>
                        <a href="mailto:firstlevelstudios62">
                        <MdOutlineEmail/>
                        </a>
                        <a href="https://instagram.com/accounts?@firstlevelstudios">
                        <FaInstagram/>
                        </a>
                        <a href="https:api.whatsapp.com/send?phone=+254723341899//">
                        <MdWhatsapp/>
                        </a>
                       
                    </div>
                    <Link to={'/packages'}
                        className='topnav-booking-btn'>Book shoot</Link>
                </div>
            </div>

            {
            toggle && <SideNav onClick={close}/>
        } </header>
    )
}

export default Header
