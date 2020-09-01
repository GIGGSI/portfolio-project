import React from "react"
import Title from '../Title';
import LatestWorkTitle from "./SectionTitle";
import latesWorkData from "./latesWorkData";

const LatestWork = () => {
    return (
        <section className="section projects">
            <LatestWorkTitle/>

            <div className="section-center projects-center">
                {latesWorkData.map(singleWork => {
                    const {id, webSite, className, imageSrc, projectTitle, projectInfo} = singleWork;
                    return (
                        <a href={webSite} key={id} className={className}>
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
        </section>

    )
}

export default LatestWork