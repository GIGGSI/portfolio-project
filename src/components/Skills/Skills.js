import React from "react"
import Title from "../Title";
import SkillsSection from "./SkillsSection";

const Skills = () => {
    return (
        <section className="section skills">
            <div className="section-title">
                <Title title="Technology" />
            </div>

            <SkillsSection />
        </section>

    )
}

export default Skills
