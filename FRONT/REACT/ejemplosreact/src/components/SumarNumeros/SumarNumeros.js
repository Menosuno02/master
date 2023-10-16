import "./SumarNumeros.css"
import imagen from "../../assets/images/marte.jpg"

function SumarNumeros() {
    const sumarNum = (num1, num2) => {
        console.log(num1 + " + " + num2 + " = " + (num1 + num2));
    }

    let imagenSize = {
        width: "120px",
        height: "120px"
    }

    return (
        <div>
            <h1 className="TitleClass">Sumas entre números</h1>
            <button onClick={() => sumarNum(17, 24)}>Suma entre 17 y 24</button>
            <button onClick={() => sumarNum(66, 7)}>Suma entre 66 y 7</button><hr />
            <img src={imagen} alt="" style={imagenSize} className="ImageClass" />
        </div>
    );
}

export default SumarNumeros;