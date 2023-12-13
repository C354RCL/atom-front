import "./footer.css";
import home from "../../img/home.png";
import target from "../../img/target.png";
import profile from "../../img/profile.png";
import { Link } from "react-router-dom";

//Componente que se usará como barra de navegación en todas las páginas

export function Footer() {
  return (
    <footer>
      <div className="icons">
        {/*Regresa al menú principal */}
        <Link to="/home">
          <img className="menu" src={home} alt="home" />
        </Link>
        {/*Envía a la página de todos los habitos disponibles para ser agregados */}
        <Link to="/agregaHabitos">
          <img className="menu" src={target} alt="habits" />
        </Link>
        {/*Envía a los detalles del perfin activo en la sesion */}
        <Link to="/perfil">
          <img className="menu" src={profile} alt="profile" />
        </Link>
      </div>
    </footer>
  );
}
