import React from 'react';
import { Button } from 'primereact/button';

const ContactMe = () => {
    return(
        <div>
            <h2>Contacto</h2>
            <p>Correo: giacomogazr@gmail.com</p>
            <p>LinkedIn: Giacomo Zoppi Rodriguez</p>
            <p>GitHub: GiacomoZoppi</p>
            <Button icon="pi pi-check" aria-label="Filter" />
            <Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />
        </div>
    )
}

export default ContactMe;




