import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import {Galleria} from "primereact/galleria";


export default function AdvancedCard(props) {
    const images = [
        { itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg', alt: 'Image 1' },
        { itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg', alt: 'Image 2' },
        { itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg', alt: 'Image 3' }
    ];

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const header = (
        <Galleria value={images} item={itemTemplate} showItemNavigators showThumbnails={false} style={{ height: '16rem' }} />
    );

    const footer = (
        <div className="card-footer">
            <Button label="Ver Más" icon="pi pi-check" />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title={props.name}  footer={footer} header={header} className="card">
                <p className="tecnologias">
                    {props.technology.map((tech, index) => (
                        <Tag  key={index} className="tag" style={{ backgroundColor: tech.color }} value={tech.name}></Tag>
                    ))}
                </p>
                <p>{props.description}</p>
            </Card>
        </div>
    )
}
