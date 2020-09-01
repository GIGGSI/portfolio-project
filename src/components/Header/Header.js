import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaFacebook} from 'react-icons/fa';


class Header extends Component {
    render() {
        return (
            <header className="hero">
                <div className="section-center hero-center">
                    <article className="hero-info">
                        <div className="underline"></div>
                        <h1>Stoyan Spasov</h1>
                        <h4>Frond end Developer</h4>
                        <a href="/contacts" className="btn hero-btn">hire me</a>
                        <ul className="social-icons hero-icons">
                            <li>
                                <a href="https://www.facebook.com/stoyan.spasov/" className="social-icon">
                                    <FaFacebook />
                                    {/*<i className="fa fa-facebook"></i>*/}
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/stoyan-spasov-3274b7122/"
                                   className="social-icon">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/GIGGSI" className="social-icon">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/onehundredcho/" className="social-icon">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className="hero-img">
                        <img
                            src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/83873297_10206873854881370_5667927010337357824_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=1aNMu34BHpEAX9rBvVy&_nc_ht=scontent-sof1-1.xx&oh=12da05863e7126faffeb140639287c40&oe=5F73EE6F"
                            className="hero-photo" alt="Stoyan Spasov"/>
                    </article>
                </div>
            </header>

        );
    }
}

export default Header;