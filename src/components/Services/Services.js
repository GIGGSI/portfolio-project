import React from "react"
import Title from '../Title';
import servicesData from "./serviceData"
import Fade from 'react-reveal/Fade';

const Services = () => {
    return (
        <Fade bottom duration={2000} distance="40px">
            <section className="section bg-grey">
                <Title title="services" />
                <div className="section-center services-center">
                    {servicesData.map(service => {
                        const { id, icon, title, text } = service

                        return (
                            <article key={id} className="service">
                                {icon}
                                <h4>{title}</h4>
                                <div className="underline"></div>
                                <p>{text}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        </Fade>
    )
}

export default Services