import React, {Component} from "react"
import timelineData from "./timelineData";
import Title from "../Title";

class Timeline extends Component {
    render() {
        return (
            <section className="section timeline">
                <div className="section-title">
                   <Title title="timeline"/>
                </div>
                <div className="section-center timeline-center">
                    {timelineData.map(data => {
                        const {id, year, text, number} = data;
                        return (
                            <article className="timeline-item" key={id}>
                                <h4>{year}</h4>
                                <p>{text}</p>
                                <span className="number">{number}</span>
                            </article>
                        )
                    })}
                </div>
            </section>

        )
    }
}

export default Timeline
