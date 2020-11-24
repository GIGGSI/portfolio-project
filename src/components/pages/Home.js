import React, {Component} from 'react';
import "../../App.css"
import Header from "../Header/Header";
import AboutMe from "../Home-about/AboutMe";
import Services from "../Services/Services";
import LatestWork from "../latestWork/LatestWork";
import Connects from "../Connects";
import Skills from "../Skills/Skills";
import Timeline from "../Timeline/Timeline";

class Home extends Component {
    render() {
        return (
            <>
                <Header/>
                <AboutMe/>
                <Services/>
                <LatestWork/>
                <Connects/>
                <Skills/>
                {/* <Timeline/> */}
            </>
        );
    }
}

export default Home;