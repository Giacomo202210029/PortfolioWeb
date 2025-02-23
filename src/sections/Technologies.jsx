import React from 'react';
import '../Technologies.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const technologies = [
    { name: 'HTML5', icon: <FaHtml5 className="tech-icon" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="tech-icon" /> },
    { name: 'JavaScript', icon: <FaJs className="tech-icon" /> },
    { name: 'React', icon: <FaReact className="tech-icon" /> },
    { name: 'Node.js', icon: <FaNodeJs className="tech-icon" /> },
    { name: 'Databases', icon: <FaDatabase className="tech-icon" /> }
];

export default function Technologies() {
    return (
        <section className="tech-container">
            <h2 className="tech-title">Tecnologías que manejo</h2>
            <div className="tech-grid">
                {technologies.map((tech, index) => (
                    <div key={index} className="tech-card">
                        {tech.icon}
                        <p>{tech.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
