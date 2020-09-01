import React, {useState, useEffect} from 'react';
import {FaFacebook} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import  {AiFillFacebook} from 'react-icons/ai'
import {GiThorHammer} from "react-icons/gi/index";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <ul className="social-icons">

                    <li className="social-icon">
                        <Link to='https://www.facebook.com'>

                            <FaFacebook className="social-icon"/>
                        </Link>
                        {/*<a href="">*/}
                        {/*    /!*<i className="fa fa-facebook"></i>*!/*/}
                        {/*    <FaFacebook/>*/}
                        {/*</a>*/}


                    </li>
                    <li>
                        <a href="https://www.twitter.com" className="social-icon">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" className="social-icon">
                            <i className="fa fa-squarespace"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" className="social-icon">
                            <i className="fa fa-behance"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" className="social-icon">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>

                <p>&copy; 2020 Stoyan Spasov. all rights reserved</p>
            </footer>
        </>
    )
}
