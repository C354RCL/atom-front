import "./perfil.css";
import { Footer } from "../../components/footer/Footer";
import profile from "../../img/profile.png";
import { Link } from "react-router-dom";
function Perfil() {
  return (
    <div className="items">
      <img className="pp" src={profile} alt="" />
      <h3>Nombre de usuario</h3>
      <h1>cesarcl</h1>
      <p>Correo</p>
      <h4>cesarcornejolopez10@gmail.com</h4>

      <button className="item">
        <Link to="/terminados" className="completedhabits">
          HABITOS COMPLETADOS
        </Link>
      </button>

      <Footer></Footer>
    </div>
  );
}

export default Perfil;
