import { useState } from "react";

function Car(props) {
    const [estado, setEstado] = useState(false); // Coche arrancado o no
    const [velocidad, setVelocidad] = useState(0); // Para visualizar y cambiar velocidad
    let coche = { // Objeto coche con todas las props
        marca: props.marca,
        modelo: props.modelo,
        aceleracion: parseInt(props.aceleracion),
        velocidadMax: parseInt(props.velocidadmax)
    }

    const comprobarEstado = () => {
        if (estado)
            return (<h2 style={{ color: "green" }}>Arrancado</h2>);
        else
            return (<h2 style={{ color: "red" }}>Detenido</h2>);
    }

    const acelerar = () => {
        if (!estado) {
            alert("Coche detenido");
            setVelocidad(0);
        } else {
            if (velocidad >= coche.velocidadMax)
                setVelocidad(coche.velocidadMax);
            else
                setVelocidad(velocidad + coche.aceleracion);
        }
    }

    return (
        <div>
            <h1 style={{ color: "blue" }}>Component Car {coche.marca} {coche.modelo}</h1>
            <h2 style={{ color: "blue" }}>Velocidad actual: {velocidad}km/h</h2>
            <div>
                {comprobarEstado()}
            </div>
            <button onClick={() => {
                setEstado(!estado);
                console.log("Estado cambiado a " + estado);
            }}>Arrancar/detener coche</button>
            <button onClick={() => acelerar()}>Acelerar</button>
        </div>
    );
}

export default Car;