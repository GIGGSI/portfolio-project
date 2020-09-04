import React, {Component} from "react"
import Title from "../Title";
import firstData from "./skillsData";
import secondData from "./secondData";


class Skills extends Component {
    render() {
        return (
            <section className="section skills">
                <div className="section-title">
                    <Title title="Skills"/>
                </div>
                <div className="section-center skills-center">
                    <article>
                        {firstData.map(data => {
                            return (
                                <div className="skill" key={data.id}>
                                    <p>{data.info}</p>
                                    <div className="skill-container"></div>
                                </div>
                            )
                        })}

                    </article>
                    <article>
                        {secondData.map(data => {
                            return (
                                <div className="skill" key={data.id}>
                                    <p>{data.info}</p>
                                    <div className="skill-container"></div>
                                </div>
                            )
                        })}

                    </article>
                </div>
            </section>

        )
    }

}

export default Skills
