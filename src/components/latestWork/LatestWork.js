import React from "react"

import LatestWorkTitle from "./SectionTitle";
import latestWorkData from "./latesWorkData";
import Fade from 'react-reveal/Fade';

const LatestWork = () => {
    return (
        <section className="section projects">
            <LatestWorkTitle />
            <Fade right duration={2000}>
                <div className="section-center projects-center">
                    {latestWorkData.map(singleWork => {
                        const { id, webSite, className, imageSrc, projectTitle, projectInfo } = singleWork;
                        return (
                            <a href={webSite} key={id} className={className} target="_blank">
                                <article className="project">
                                    <img
                                        src={imageSrc}
                                        alt="single project"
                                        className="project-img"
                                    />
                                    <div className="project-info">
                                        <h4>{projectTitle}</h4>
                                        <p>{projectInfo}</p>
                                    </div>
                                </article>
                            </a>
                        )
                    })}

                </div>
            </Fade>
        </section>

    )
}

export default LatestWork