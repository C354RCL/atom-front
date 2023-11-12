import "./newHabit.css";
import logo from "../../img/atomlogo.png";
import { Link } from "react-router-dom";
export function NewHabit() {
  return (
    <div className="elements">
      <img src={logo} alt="logo" className="icono"></img>
      <div className="content">
        <h3>Habito</h3>
        <h4>Veces realizado 21/21</h4>
      </div>
      <div className="buttons">
        <button className="agregar">Agregar</button>
        <button className="detailsbtn">
          <Link to="/detalles" className="details">
            Ver detalles
          </Link>
        </button>
      </div>
    </div>
  );
}
