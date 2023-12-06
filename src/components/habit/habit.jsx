import "./habit.css";
import logo from "../../img/atomlogo.png";
import { Link } from "react-router-dom";
export const Habit = ({ data }) => {
  return (
    <div className="elements">
      <img src={logo} alt="logo" className="icono"></img>
      <div className="content">
        <h3>{data.habitName}</h3>
        <h4>Veces realizado {data.timesdone}/21</h4>
      </div>
      <div className="buttons">
        <button>
          <Link to="/detalles" className="details">
            Ver detalles
          </Link>
        </button>
      </div>
    </div>
  );
};
