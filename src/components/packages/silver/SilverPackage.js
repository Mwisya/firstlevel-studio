import React from 'react'
import '../package/package.css'
import {MdCheck} from "react-icons/md"

const SilverPackage = () => {
  return (
    <div className='package'>
            <h2 className='package-name'>
                silver</h2>
        <div className='package_price'>
            <span className='price-in'>Ksh</span>
            <h2 className='price'>
                20,000</h2>
        </div>
        <div>

            <ul className='package_list'>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        1 photographer</li>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        Pre-event shoot</li>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        Online gallery</li>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        1 A3 photo album</li>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        15 professional retouched images</li>

                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        1 videographer</li>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        Pre event videography</li>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                         1080 HD DVD</li>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        2 mins highlights video</li>
                    <li className='package_list-item'>
                    <span className='list-icon'><MdCheck/></span>
                        2 flat screen 55 inches</li>
            </ul>
        </div>
    </div>
  )
}

export default SilverPackage