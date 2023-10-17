import { useState } from "react"; // Importamos useState

function Contador() {
    // Declaramos variable state y en la creación indicamos su valor inicial, en este caso 0
    const [numero, setNumero] = useState(0);
    const sumarNum = () => {
        // Para modificar el valor de una variable state, usamos el set como método
        setNumero(numero + 1);
    }

    return (
        <div>
            <h1>Ejemplo useState (variables reactivas)</h1>
            <h2 style={{ color: "red" }}>Contador: {numero}</h2>
            <button onClick={() => sumarNum()}>Sumar</button>
            <button onClick={() => {
                setNumero(numero - 1)
            }}> {/* Función anónima, sin const */}
                Restar
            </button>
            <hr />
        </div>
    );
}

export default Contador;