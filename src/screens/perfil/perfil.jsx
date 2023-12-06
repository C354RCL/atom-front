import "./perfil.css";
import React, {useEffect} from "react";
import { Footer } from "../../components/footer/Footer";
import profile from "../../img/profile.png";
import { Link } from "react-router-dom";
export function Perfil() {
  // Obtenemos userName del localStorage
  const userName = localStorage.getItem('userName');
  // Creamos una funcion que se ejecuta en cuanto se monta el componente
  useEffect(() => {
    // Creamos la funcion asincrona 
    const fetchData = async () => {
      try {
        // Creamos la peticion 
        const res = await fetch(`http://localhost:3000/user?userName=${userName}`, {
          method : 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        // Si la respuesta no es 'ok'
        if (!res.ok) {
          throw new Error('Error en la solicitud');
        }
        
        // Convertimos la respuesta en formato JSON
        const data = await res.json();
        console.log(data);  
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  });

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
