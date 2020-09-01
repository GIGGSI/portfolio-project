import React, {Component} from 'react';
import data from "./data";


class Contacts extends Component {

    render() {
        return (
            <>
                <section className="section">
                    <div className="section-center projects-page-center">
                        {data.map(singleProject => {
                            const {id, img, webSite, title, text, githubUrl} = singleProject;

                            return (
                                <article key={id} className="single-project">
                                    <div className="project-container">
                                        <img src={img} alt="single project"/>
                                        <a href={webSite} className="project-icon">
                                            <i className="fas fa-home"></i>
                                        </a>
                                    </div>
                                    <div className="project-details">
                                        <h4>{title}</h4>
                                        <p>
                                            {text}
                                        </p>
                                        <div className="project-footer">
                                            <span><i className="fab fa-github"></i></span>
                                            <a href={githubUrl}>source code</a>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}

                    </div>
                </section>

            </>
        )

    }


}

export default Contacts