import React, { Component } from "react"
import './About.css'
import Title from "../Title";
import sto from '../../sto2.jpg'

// import sto from '../images/sto.jpg'

class About extends Component {
    render() {
        return (
            <div>
                <section className="about-page">
                    <div className="section-center about-center">
                        <img src={sto} className="about-img" alt="sto photo" />
                        <article className="about-text">
                            <Title title="about me" />
                            <div className="about-text">
                                <p>
                                    Highly motivated, proactive team player who feels comfortable in dynamic atmosphere,
                                    I am eager to contribute towards building a healthy work environment and be a
                                    valuable asset to my team.
                                </p>
                                <p>
                                    I am highly interested in web development as a career and I mainly want to focus on creating
                                    interactive, responsive pages in order to facilitate the web browsing experience of the
                                    site’s visitors.
                        </p>
                            </div>
                            <div className="courses">
                                <p className="about-text2">
                                    HTML
                                </p>
                                <p>
                                    CSS
                                </p>
                                <p>
                                    JAVASCRIPT
                                </p>
                                <p>
                                    REACT JS
                                </p>
                                <p>
                                Adobe Photoshop
                                </p>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        )
    }

}

export default About
