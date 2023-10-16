function SaludoHijo(props) {
    // Capturamos el metodoPadre que viene desde props
    let ejecutarPadre = props.metodoPadre;
    let idhijo = props.idhijo;
    // const { idhijo, ejecutarPadre } = props;


    return (
        <div>
            <h1 style={{ color: "blue" }}>Saludo Child {idhijo}</h1>
            <button onClick={() => ejecutarPadre(idhijo)}>Llamar método del parent desde el child</button>
        </div>
    );
}

export default SaludoHijo;