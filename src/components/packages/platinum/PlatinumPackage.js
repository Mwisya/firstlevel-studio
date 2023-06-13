import React from 'react'
import './package.css'
import {MdCheck} from "react-icons/md"


const PlatinumPackage = () => {
  return (
    <div className='package'>
            <h2 className='package-name'>
                platinum</h2>
        <div className='package_price'>
            <span className='price-in'>Ksh</span>
            <h2 className='price'>
                60,000</h2>
        </div>
        <div>

            <ul className='package_list'>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        2 photographer/videographer</li>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        Studio pre-event shoot</li>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        Online gallery</li>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        1 A4 photo album</li>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        A3 frame</li>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        30 professional retouched images</li>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        Pre event videography</li>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                         2 1080 HD DVD & flash drive</li>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        4 mins highlights video</li>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        4 flat screen 55 inches</li>
            </ul>
        </div>
    </div>
  )
}

export default PlatinumPackage