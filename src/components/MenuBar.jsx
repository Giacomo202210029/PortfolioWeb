import React from 'react';
import {Menubar} from 'primereact/menubar';
import {Button} from 'primereact/button';
import logo from '../assets/logo.png'; // Asegúrate de ajustar la ruta al logo

export default function BasicDemo() {
    const items = [
        {
            label: 'Sobre Mí',
            icon: 'pi pi-home',
            className: 'menubar-text'
        },
        {
            label: 'Mi Experiencia',
            icon: 'pi pi-star',
            className: 'menubar-text'
        },
        {
            label: 'Proyectos',
            icon: 'pi pi-search',
            className: 'menubar-text'
        },
        {
            label: 'Contáctame',
            icon: 'pi pi-envelope',
            className: 'menubar-text'
        }
    ];

    const start = <img alt="logo" src={logo} style={{height: '40px'}}/>;
    const end = <Button label="Mi Botón" icon="pi pi-check"/>;

    return (
        <div className="menubar">
            <Menubar model={items} start={start} end={end} className="menubar"/>
        </div>
    )
}

