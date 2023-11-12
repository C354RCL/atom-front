import "./Login.css";
import { Link } from "react-router-dom";
import logo from "./img/atomlogo.png";
export function Login() {
  return (
    <div className="login">
      <img src={logo} alt="logo" className="image"></img>
      <input type="text" placeholder="Usuario" className="item"></input>
      <input type="text" placeholder="Contraseña" className="item"></input>
      <button className="item">
        <Link to="/home" className="loginb">
          Inicia Sesion
        </Link>
      </button>
      <button className="item registro">
        <Link to="/registro" className="registro">
          Registrarse
        </Link>
      </button>
    </div>
  );
}
