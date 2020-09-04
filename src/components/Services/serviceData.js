import React from "react"
import {FaCode, FaSketch, FaAndroid} from "react-icons/fa"

export default [
    {
        id: 1,
        icon: <FaCode className="service-icon"/>,
        title: "web development",
        text: `Creating web sites is my speciality and I offer 
        all services needed to deliver your brilliant project – design and UX, 
        development, post-launch maintenance and support.`,
    },
    {
        id: 2,
        icon: <FaSketch className="service-icon"/>,
        title: "web design",
        text: `Every interface must be carefully designed and user-friendly. I’ll make sure that
         your project provides excellent user experience on desktop and mobile devices.`,
    },
    {
        id: 3,
        icon: <FaAndroid className="service-icon"/>,
        title: "PLANNING AND RESEARCH",
        text: `I'll create a detailed project specification and will take care of the precise
         project execution from start to finish, while keeping you informed along the way.`,
    },

]