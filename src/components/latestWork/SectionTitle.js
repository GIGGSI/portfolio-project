import React from "react"
import Title from '../Title';
import Fade from 'react-reveal/Fade';
const LatestWorkTitle = () => {
    return (
        <Fade duration={2000} left>
            <div className="section-title">
                <Title title="latest work" />
                <p className="projects-text">
                    My process is fast and easy, customized based on each of your wants and needs. I will give you great
                    designs, flexible prices and the fastest service you can get. You can always count on me for idea
                    generation, problem-solving and know-how on what best fits your industry and your goals.
            </p>
            </div>
        </Fade>

    )
}

export default LatestWorkTitle