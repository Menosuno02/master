import Matematicas from "./Matematicas";

function PadreMatematicas() {
    const tripleNumero = (numero) => {
        console.log("Triple de " + numero + " = " + (parseInt(numero) * 3));
    }

    return (
        <div>
            <h1>Ejemplo comunicación entre componentes</h1>
            <Matematicas numero="7" metodoPadre={tripleNumero} />
            <Matematicas numero="9" metodoPadre={tripleNumero} />
            <hr />
        </div>
    );
}

export default PadreMatematicas;