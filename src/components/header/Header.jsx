import "./header.css";
import logo from "../../img/atomlogo.png";
export function Header() {
  //Muestra el logo en la parte superior de la pantalla
  //Este componente ya no se usa debido al rediseño de la aplicación
  return (
    <div className="head">
      <img src={logo} alt="logo" className="elemento logo"></img>
    </div>
  );
}
