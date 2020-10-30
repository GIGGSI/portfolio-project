import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import './skills.css'
import skillsData from './skillsData'


function SkillsSection() {
    const [value, setValue] = useState(0);

    const { company, dates, duties, title } = skillsData[value];
    return (
        <section className="section">

            <div className="jobs-center">
                {/* btn container */}
                <div className="btn-container">
                    {skillsData.map((item, index) => {
                        return (
                            <button
                                key={item.id}
                                onClick={() => setValue(index)}
                                className={`job-btn ${index === value && 'active-btn'}`}
                            >
                                {item.title}
                            </button>
                        );
                    })}
                </div>
                {/* job info */}
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    {/* <p className="job-date">{dates}</p> */}
                    {duties.map((duty, index) => {
                        return (
                            <div key={index} className="job-desc">
                                {/* <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight> */}
                                <p>{duty}</p>
                            </div>
                        );
                    })}
                </article>
            </div>

        </section>
    );
}

export default SkillsSection;
