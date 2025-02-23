import ContactMe from "./sections/ContactMe.jsx";
import MyProjects from "./sections/MyProjects.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Menu from "./sections/Menu.jsx";
import './App.css';
import Technologies from "./sections/Technologies.jsx";

import { ScrollTop } from 'primereact/scrolltop';
import React from "react";


const App = () => {
    return (
    <div className="background">
        <ScrollTop style={{ backgroundColor: '#0e3746' }}/>
        <Menu/>
            <div id="sobre-mi">
                <AboutMe name=" Giacomo Zoppi"/>
            </div>

            <div id="mis-proyectos">
                <MyProjects/>
            </div>



        </div>
    )
}

export default App