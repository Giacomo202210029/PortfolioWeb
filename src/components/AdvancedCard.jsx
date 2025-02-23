import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import {Galleria} from "primereact/galleria";


export default function AdvancedCard(props) {
    const images = props.images;


    const itemTemplate = (item) => {
        return (
            <div style={{
                width: '35rem',
                height: '16rem',
                overflow: 'hidden',
                position: 'relative'
            }}>
                <img
                    src={item.itemImageSrc}
                    alt={item.alt}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />
            </div>
        );
    };




    const header = (
        <Galleria
            value={images}
            item={itemTemplate}
            showItemNavigators
            circular
            showThumbnails={false}
        />
    );


    const footer = (
        <div className="card-footer">
            <Button
                label="Ver Más"
                icon="pi pi-external-link"
                onClick={() => window.open(props.link, '_blank')}
            />
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
                <p style={{fontSize: '1.2rem', lineHeight: '2.2rem'}}>
                    {props.description}
                </p>
            </Card>
        </div>
    )
}
