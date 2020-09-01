import React, {Component} from 'react';
import './AboutMe.css'


class AboutMe extends Component {

    render() {
        return (
            <section className="section about">
                <div className="section-center about-center">

                    <article className="aboutMe-img">
                        <img
                            src="https://scontent-sof1-1.xx.fbcdn.net/v/t1.0-9/83873297_10206873854881370_5667927010337357824_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=rkAOE0NlqYsAX9Wynwg&_nc_ht=scontent-sof1-1.xx&oh=3dca9265008b4a631db7f599b7868c01&oe=5F6027EF"
                            className="hero-photo"
                            alt="about img"
                        />
                    </article>

                    <article className="about-info about-text">

                        <div className="section-title about-title">
                            <h2>about</h2>
                            <div className="underline"></div>
                        </div>

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
                        <a href="/about" className="btn">about me</a>
                    </article>
                </div>
            </section>
        )

    }


}

export default AboutMe;