
import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

export default function AdvancedCard(props) {
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <>
            <Button label="Ver Más" icon="pi pi-check" />
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title={props.name}  footer={footer} header={header} className="md:w-25rem custom-card-height">
                <p className="m-0">
                    {props.description}
                    {props.technology.map((tech, index) => (
                        <Tag key={index} severity={props.color} value={tech}></Tag>
                    ))}
                </p>
            </Card>
        </div>
    )
}
