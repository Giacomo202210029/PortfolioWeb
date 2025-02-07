
import React from 'react';
import { Menubar } from 'primereact/menubar';

export default function BasicDemo() {
    const items = [
        {
            label: 'Sobre Mí',
            icon: 'pi pi-home'
        },
        {
            label: 'Mi Experiencia',
            icon: 'pi pi-star'

        },
        {
            label: 'Proyectos',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Components',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil'
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}
