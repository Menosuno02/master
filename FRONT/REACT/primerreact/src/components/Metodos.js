function Metodos() {
    const monstrarMensaje = () => {
        console.log("Botón pulsado");
    }
    return (
        <div>
            {monstrarMensaje()}

            <h1>Ejemplo mensaje</h1>
            <button onClick={() => monstrarMensaje()}>Monstrar mensaje</button>
        </div>
    );
}

export default Metodos;