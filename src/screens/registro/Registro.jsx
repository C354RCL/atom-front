import "./Registro.css";
import logo from "../../img/atomlogo.png";

function Registro() {
  return (
    <div className="login">
      <img src={logo} alt="logo" className="image"></img>
      <input
        type="text"
        placeholder="Nombre de usuario"
        className="item"
      ></input>
      <input type="text" placeholder="Correo" className="item"></input>
      <input type="text" placeholder="Contraseña" className="item"></input>
      <button className="itemr">Registrarse</button>
    </div>
  );
}

export default Registro;
