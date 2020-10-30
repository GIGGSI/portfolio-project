import React, { Component } from 'react';
import './AboutMe.css';
import { Link } from "react-router-dom";
import Title from "../Title";
import stoImg from '../../sto2.jpg'


class AboutMe extends Component {

    render() {
        return (
            <section className="section about">
                <div className="section-center about-center">

                    <article className="aboutMe-img">
                        <img
                            src={stoImg}
                            className="hero-photo"
                            alt="about img"
                        />
                    </article>

                    <article className="about-info about-text">
                        <Title title="about" />
                        <p>
                            Highly motivated, proactive team player who feels comfortable in dynamic atmosphere, I am
                            eager to contribute towards building a healthy work environment and be a valuable asset to
                            my team.
                        </p>
                        <p>
                            I am highly interested in web development as a career and I mainly want to focus on creating
                            interactive, responsive pages in order to facilitate the web browsing experience of the
                            site’s visitors.
                        </p>
                        <Link to="/about" className="btn">
                            about me
                        </Link>
                    </article>
                </div>
            </section>
        )

    }


}

export default AboutMe;