import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Projects from "./components/pages/Projects";
import Footer from "./components/Footer";


function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path='/about' exact component={About}/>
                <Route path='/projects' exact component={Projects}/>
                <Route path='/contacts' exact component={Contacts}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
