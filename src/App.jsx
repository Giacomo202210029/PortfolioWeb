import ContactMe from "./sections/ContactMe.jsx";
import MyProjects from "./sections/MyProjects.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Menu from "./sections/Menu.jsx";
import './App.css';

const App = () => {
    return (
        <div className="background">
            <Menu/>
            <AboutMe name=" Giacomo Zoppi Rodriguez"/>
            <MyProjects/>
            <ContactMe/>

        </div>
    )
}

export default App