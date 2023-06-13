import React from 'react'
import './package.css'

const Package = ({name, price}) => {
    return (
        <div className='package'>
            <div className='package_price'>
                <span className='price-in'>Tsh</span>
                <h2 className='price'>
                    {price}</h2>
            </div>
            <div>
                <h2 className='package-name'>
                    {name}</h2>

                <ul className='package_list'>
                    <li className='package_list-item'>
                        <span className='list-icon'>tick</span>
                        <p>drone services</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Package
