function Matematicas(props) {
    const numero = props.numero;
    const ejecutarPadre = props.metodoPadre;

    const dobleNumero = () => {
        console.log("Doble de " + numero + " = " + (parseInt(numero) * 2));
    }

    return (
        <div>
            <h2>Doble y triple del {numero}</h2>
            <button onClick={() => dobleNumero(numero)}>Doble del número</button>
            <button onClick={() => ejecutarPadre(numero)}>Triple del número</button>
        </div>
    );
}

export default Matematicas;