import React, {Component} from "react"
import './About.css'

// import sto from '../images/sto.jpg'

class About extends Component {
    render() {
        return (
            <div>
                <section className="about-page">
                    <div className="section-center about-center">
                        <img
                            src='https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/83873297_10206873854881370_5667927010337357824_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=rkAOE0NlqYsAX9Wynwg&_nc_ht=scontent-sof1-1.xx&oh=3dca9265008b4a631db7f599b7868c01&oe=5F6027EF'
                            className="about-img" alt="sto photo"/>
                        <article className="about-text">
                            <h2>About me</h2>
                            <div className="about-text">
                                <p>
                                    Highly motivated, proactive team player who feels comfortable in dynamic atmosphere,
                                    I am eager to contribute towards building a healthy work environment and be a
                                    valuable asset to my team.
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
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        )
    }

}

export default About
