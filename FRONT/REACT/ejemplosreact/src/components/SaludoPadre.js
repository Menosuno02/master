import SaludoHijo from "./SaludoHijo";

function SaludoPadre() {
    // Método que llamará el hijo
    const metodoPadre = (nombre) => {
        console.log("Soy el método del padre, " + nombre);
    }

    return (
        <div>
            <h1 style={{ color: "red" }}>Saludo Parent</h1>

            {/* Enviamos mediante props el metodoPadre al hijo */}
            <SaludoHijo idhijo="1" metodoPadre={metodoPadre} />
            <SaludoHijo idhijo="2" metodoPadre={metodoPadre} />
        </div>
    );
}

export default SaludoPadre;