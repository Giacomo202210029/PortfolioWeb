

const AboutMe = (props) => {
    const { name } = props //desestructura los props
    return (
        <div className="todoeltexto">
            <h1 className="saludo">
                <span className="highlight">Hola! </span>
                <span className="spacing">Me llamo</span>
            </h1>
            <h1 className="nombre">{name} </h1>
            <h3 className="carrera">Ingeniero de Software</h3>
            <p className="ubicación">📍Lima, Perú</p>
            <p className="presentacion"> +6 meses de experiencia como desarrollador Full Stack y actual estudiante en la
                Universidad Peruana de Ciencias Aplicadas. He liderado equipos de desarrollo, amo aprender
                constantemente
                y siempre estoy dispuesto a dar todo de mi en los trabajos encomedados.</p>
        </div>
    );

}

export default AboutMe;