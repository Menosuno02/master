function Matematicas(props) {
    const numero = props.numero;
    const ejecutarPadre = props.metodoPadre;

    const dobleNumero = (numero) => {
        console.log("Doble de " + numero + " = " + (parseInt(numero) * 2));
    }

    return (
        <div>
            <h1>Doble y triple del {numero}</h1>
            <button onClick={() => dobleNumero(numero)}>Doble del número</button>
            <button onClick={() => ejecutarPadre(numero)}>Triple del número</button>
        </div>
    );
}

export default Matematicas;