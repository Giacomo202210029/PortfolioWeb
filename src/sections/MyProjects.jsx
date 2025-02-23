
import {useEffect, useState} from "react";
import projectService from "../services/projectService.js";
import AdvancedCard from "../components/AdvancedCard.jsx";
import ContactMe from "./ContactMe.jsx";

let projects=[]


async function getProjects() {
    projects = await projectService.getAll();
}

const MyProject = () => {
    const [ counter, setCounter ] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [projects, setProjects] = useState([])
    const clickbutton = () => {
        setCounter2(counter2+1)
         if(counter2===7){
            setCounter(counter+19992)
            setCounter2(0)
        }

    }

    const hook = () =>{
        projectService.getAll()
            .then(
                data => {
                    setProjects(data)
                }

            )
    }
    useEffect(hook, [])



    return (
        <section className="SeccionProyectos">
            <h2 className="tituloProyecto"><span className="highlight">C:\</span>Mis Proyectos</h2>
            <div className="filas">
                {projects.map((project, index) => (
                    <div key={index}>
                        <AdvancedCard
                            name={project.name}
                            description={project.description}
                            technology={project.technology}
                            images={project.images}
                            link={project.link}
                        />
                    </div>
                ))}
            </div>
            <h2 className="tituloProyecto">D:\Contacto</h2>
            <div id="contactame">
                <ContactMe />
            </div>
        </section>
    )

}

export default MyProject