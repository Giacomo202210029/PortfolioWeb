

const AboutMe = (props) => {
    const { name } = props //desestructura los props
    return (
        <div>
            <h1>Hola! Soy {name} </h1>
            <h2>Ingeniero de Software</h2>
            <p>📍Lima, Perú</p>
            <p> +6 meses de experiencia como desarrollador Full Stack y actual estudiante en la
                Universidad Peruana de Ciencias Aplicadas. He liderado equipos de desarrollo, amo aprender
                constantemente
                y siempre estoy dispuesto a dar todo en mi en los trabajos encomedados.</p>
        </div>
    );

}

export default AboutMe;