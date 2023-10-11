function Saludo(props) {
    let dato = "Mañana es fiesta y el viernes también";
    // let nombre = props.nombre;
    // let edad = props.edad;
    const { nombre, edad } = props; // en el orden en el que están en la etiqueta en index.js

    return (
        <div>
            <h1>Mi primer componente</h1>
            <h2>Dato objetivo: {dato}</h2>
            <h1>Mensaje de {nombre}</h1>
        </div>
    );
}

export default Saludo;