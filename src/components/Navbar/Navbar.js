import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiThorHammer } from 'react-icons/gi';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import Icon from './Icon';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        console.log(window.innerWidth)
        console.log(window.innerHeight)
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container container">

                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <GiThorHammer className="navbar-icon" />
                            THOR
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {/* {click && <Icon />} */}
                            <Icon open={click} />
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacts" className="nav-links" onClick={closeMobileMenu}>
                                    Contacts
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}
