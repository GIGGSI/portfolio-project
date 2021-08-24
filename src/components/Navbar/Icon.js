import React from 'react'
import './Icon.css'

const Icon = ({ open }) => {
    return (
        <div id="nav-icon1" className={open ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Icon
