import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { FaGithub, FaLinkedin } from "react-icons/fa/index";


export default function Footer() {
    return (
        <>
            <footer className="footer">
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

                <p>&copy; {new Date().getFullYear()} Stoyan Spasov. all rights reserved</p>
            </footer>
        </>
    )
}
