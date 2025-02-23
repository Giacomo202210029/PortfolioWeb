import React from 'react';
import { Button } from 'primereact/button';
import emailIcon from '../assets/email.png';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';

const ContactMe = () => {
    return (
        <div>
            <div className="filas" style={{margin: '8rem', gap: '4rem'}}>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=giacomogazr@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Button className="paginas">
                        <img className="email-logo" src={emailIcon} alt="email" style={{width: '6rem', height: '6rem'}}/>
                        <p style={{fontSize: '2rem'}}>Email</p>
                    </Button>
                </a>
                <a href="https://github.com/Giacomo202210029" target="_blank" rel="noopener noreferrer">
                    <Button className="paginas">
                        <img src={githubIcon} alt="github" style={{width: '6rem', height: '6rem'}}/>
                        <p style={{fontSize: '2rem'}}>Github</p>
                    </Button>
                </a>
                <a href="https://www.linkedin.com/in/giacomo-zoppi-dev" target="_blank" rel="noopener noreferrer">
                    <Button className="paginas">
                        <img src={linkedinIcon} alt="linkedin" style={{width: '6rem', height: '6rem'}}/>
                        <p style={{fontSize: '2rem'}}>LinkedIn</p>
                    </Button>
                </a>
            </div>
        </div>

);
}


export default ContactMe;