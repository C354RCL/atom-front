import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "./img/atomlogo.png";
import "./Login.css";

export function Login() {
  // Inicializamos las variables como cadenas vacias
  const [userName, setUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  const navigate = useNavigate();

  // Manejador de eventos de userName
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  // Manejador de eventos de passwd
  const handlePasswd = (e) => {
    setPasswd(e.target.value);
  };

  // Manejador de eventos del boton iniciar sesion
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Creamos la peticion a la API
      const res = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, passwd }),
      });

      // Guardamos userName en localStorage
      localStorage.setItem("userName", userName);
      // La respuesta del servidor la convertimos a formato JSON
      const data = await res.json();
      // Guardamos el token en localStorage
      localStorage.setItem("token", data.token);
      // Se imprime el resultado
      console.log(data);

      //

      if (data.code === 200) {
        // Realiza la redirección a "/home"
        navigate("/home");
        console.log(data.code);
      } else {
        alert("Usuario o contraseña incorrecta");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login">
      <img src={logo} alt="logo" className="image" />
      <input
        type="text"
        placeholder="Usuario"
        className="item"
        value={userName}
        onChange={handleUserName}
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="item"
        value={passwd}
        onChange={handlePasswd}
      />
      <button type="submit" className="item" onClick={handleSubmit}>
        Inicia Sesión
      </button>
      <button className="item registro">
        <Link to="/registro" className="registro">
          Registrarse
        </Link>
      </button>
    </div>
  );
}
