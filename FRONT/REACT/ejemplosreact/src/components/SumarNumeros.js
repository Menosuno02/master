import "./SumarNumeros.css"
import imagen from "../assets/images/marte.jpg"

function SumarNumeros() {
    const sumNumeros = (num1, num2) => {
        console.log(num1 + " + " + num2 + " = " + (num1 + num2));
    }

    return (
        <div>
            <h1 className="TitleClass">Sumas entre números</h1>
            <button onClick={() => sumNumeros(17, 24)}>Suma entre 17 y 24</button>
            <button onClick={() => sumNumeros(66, 7)}>Suma entre 66 y 7</button><hr />
            <img src={imagen} alt="" style={{ width: "120px", height: "120px" }} />
        </div>
    );
}

export default SumarNumeros;