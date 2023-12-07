import "./perfil.css";
import React, {useEffect, useState} from "react";
import { Footer } from "../../components/footer/Footer";
import profile from "../../img/profile.png";
import { Link } from "react-router-dom";
export function Perfil() {
  const [userData, setUserData] = useState([]);
  // Obtenemos userName del localStorage
  const userNameS = localStorage.getItem('userName');
  // Creamos una funcion que se ejecuta en cuanto se monta el componente
  // Creamos la funcion asincrona 
  useEffect(() => {
  const fetchData = async () => {
    try {
      // Creamos la peticion 
      const res = await fetch(`http://localhost:3000/user?userName=${userNameS}`, {
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
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  }
    fetchData();
  }, [userNameS]);

  return (
    <div className="items">
      <img className="pp" src={profile} alt="" />
    {userData.length > 0 ? (
      <>
        <h3>Nombre de usuario</h3>
        <h1>{userData[0].userName}</h1>
        <p>Correo</p>
        <h4>{userData[0].email}</h4>

        <button className="item">
          <Link to="/terminados" className="completedhabits">
            HABITOS COMPLETADOS
          </Link>
        </button>
      </>
    ) : (
      <p>Cargando datos...</p>
    )}

      <Footer></Footer>
    </div>
  );
}

export default Perfil;
