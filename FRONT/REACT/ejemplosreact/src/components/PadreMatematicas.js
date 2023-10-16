import Matematicas from "./Matematicas";

function PadreMatematicas() {
    const tripleNumero = (numero) => {
        console.log("Triple de " + numero + " = " + (parseInt(numero) * 3));
    }

    return (
        <div>
            <Matematicas numero="7" metodoPadre={tripleNumero} />
            <Matematicas numero="9" metodoPadre={tripleNumero} />
        </div>
    );
}

export default PadreMatematicas;