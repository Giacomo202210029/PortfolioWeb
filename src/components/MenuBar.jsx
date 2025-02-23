import React from 'react';
import { Menubar } from 'primereact/menubar';
import logo from '../assets/logo.png'; // Ajusta la ruta al logo
import '../Menu.css'; // Archivo CSS para los estilos

export default function BasicDemo() {
    const items = [
        { label: 'Sobre mí', command: () => document.getElementById('sobre-mi').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Mis Proyectos', command: () => document.getElementById('mis-proyectos').scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Contacto', command: () => document.getElementById('contactame').scrollIntoView({ behavior: 'smooth' }) }
    ];

    const start = <img alt="logo" src={logo} className="menu-logo" />;

    return (
        <div className="menubar-container">
            <Menubar model={items} start={start} className="custom-menubar" />
        </div>
    );
}
