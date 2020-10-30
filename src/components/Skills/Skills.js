import React, { Component } from "react"
import Title from "../Title";
import SkillsSection from "./SkillsSection";

class Skills extends Component {

    render() {
        return (
            <section className="section skills">
                <div className="section-title">
                    <Title title="Technology" />
                </div>
           
                <SkillsSection />
            </section>

        )
    }

}

export default Skills
