import "./footer.css";
import home from "../../img/home.png";
import target from "../../img/target.png";
import profile from "../../img/profile.png";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer>
      <div className="icons">
        <Link to="/home">
          <img className="menu" src={home} alt="home" />
        </Link>
        <Link to="/agregaHabitos">
          <img className="menu" src={target} alt="habits" />
        </Link>
        <Link to="/perfil">
          <img className="menu" src={profile} alt="profile" />
        </Link>
      </div>
    </footer>
  );
}
