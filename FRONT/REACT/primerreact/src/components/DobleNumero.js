function DobleNumero() {
    let ejemplo = "Soy una variable de lunes";

    const numeroDoble = (numero) => {
        let doble = numero * 2;
        console.log(doble);
    }

    const cambiarVariable = () => {
        console.log("Antes: " + ejemplo);
        ejemplo = "He cambiado de valor"
        console.log("Después: " + ejemplo);
    }

    let estilo = {
        color: "blue",
        backgroundColor: "yellow"
    }

    return (
        <div>
            <h1 style={estilo}>Ejemplo parámetros</h1>
            <h2 style={{ color: "fuchsia", backgroundColor: "rebeccapurple" }}>{ejemplo}</h2>
            <hr />
            <button onClick={() => numeroDoble(7)}>Doble de 7</button>
            <button onClick={() => numeroDoble(19)}>Doble de 19</button>
            <button onClick={() => cambiarVariable()}>Cambiar variable</button>
        </div>
    );
}

export default DobleNumero;