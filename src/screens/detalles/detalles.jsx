import { Footer } from "../../components/footer/Footer.jsx";
import { Habit } from "../../components/habit/habit.jsx";
import profile from "../../img/profile.png";
import "./detalles.css";
function Detalles() {
  return (
    <>
      <div className="items">
        <img className="pp" src={profile} alt="" />
        <h1>Ahorra por 21 días</h1>
        <div className="texto">
          <h3>
            Ahorrar siempre es importante para tener una biena estabilidad
            economioca por lo que tendrás que ahorrar $50 al día, es un buen
            comienzo
          </h3>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Detalles;
