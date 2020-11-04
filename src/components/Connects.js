import React, { Component } from "react"
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';


class Connect extends Component {
    render() {
        return (
            <Fade duration={2000}>
                <section className="connect">
                    <article className="connect-container">
                        <img
                            src="https://images.pexels.com/photos/207589/pexels-photo-207589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt='picture' />

                    </article>
                    <div className="connect-banner">
                        <div className="section-title">
                            <h2>Get in touch</h2>
                            <div className="underline"></div>
                        </div>
                        <p className="connect-text">
                            With the wide range of services, I provide you with all the tools you will need to get your
                            marketing and sales going. And I know how important are these for you and your business. This
                            is why I don’t only give you pretty designs and working websites, but I will think about how
                            your website can sell you better and even more with industry trends, design trends, usefulness
                            and much more.
                    </p>
                        <Link to="/contacts" className="btn">Contact me</Link>
                    </div>
                </section>
            </Fade>
        )
    }

}

export default Connect
