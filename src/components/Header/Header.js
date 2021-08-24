import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import stoImg from '../../sto2.jpg'

const Header = () => {
    return (
        <header className="hero">
            <div className="section-center hero-center">
                <article className="hero-info">
                    <div className="underline"></div>
                    <h1>Stoyan Spasov</h1>
                    <h4>React Developer</h4>
                    <Link to="/contacts" className="btn hero-btn">
                        hire me
                    </Link>
                    <ul className="social-icons hero-icons">
                        <li>
                            <a href="https://www.facebook.com/stoyan.spasov/" className="social-icon"
                                target="_blank">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/stoyan-spasov-3274b7122/"
                                className="social-icon" target="_blank">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/GIGGSI" className="social-icon" target="_blank">
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/onehundredcho/" className="social-icon"
                                target="_blank">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                </article>
                <article className="hero-img">
                    <img
                        src={stoImg}
                        className="hero-photo" alt="Stoyan Spasov" />
                </article>
            </div>
        </header>
    )
}

export default Header
