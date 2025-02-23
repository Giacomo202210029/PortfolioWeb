import React from "react";
import "../AboutMe.css"; // Archivo CSS
import profileImg from "../assets/linkedin.png"; // Imagen de perfil
import '../Technologies.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { FaPython, FaVuejs, FaMicrosoft, FaSalesforce } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';


const technologies = [
    { name: 'HTML5', icon: <FaHtml5 className="tech-icon" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="tech-icon" /> },
    { name: 'JavaScript', icon: <FaJs className="tech-icon" /> },
    { name: 'Vue.js', icon: <FaVuejs className="tech-icon" /> },
    { name: 'React', icon: <FaReact className="tech-icon" /> },
    { name: '.NET', icon: <SiDotnet className="tech-icon" /> },
    { name: 'Node.js', icon: <FaNodeJs className="tech-icon" /> },
    { name: 'SQL', icon: <FaDatabase className="tech-icon" /> }
];

const AboutMe = ({ name }) => {
    return (
        <section className="about-container">
            {/* Sección de texto */}
            <div className="text-container">
                <p className="subtitle">Desarrollador | Full Stack</p>
                <h1 className="title">{name}</h1>
                <p className="description">
                    Actual estudiante de Ingeniería de Software en la Universidad Peruana de Ciencias Aplicadas con más
                    de 6 meses de experiencia en desarrollo Full Stack.
                    Apasionado por la tecnología y el aprendizaje constante.
                </p>
                <div className="tech-grid">
                    {technologies.map((tech, index) => (
                        <div key={index} className="tech-card">
                            {tech.icon}
                            <p>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Imagen con diseño decorativo */}
            <div className="image-container">
                <div className="image-wrapper">
                    <img src={profileImg} alt="Perfil" className="profile-img"/>
                    <div className="decorative-shape shape-top"></div>
                    <div className="decorative-shape shape-bottom"></div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
