import React, { useState } from "react";
import "./Registro.css";
import { useNavigate } from "react-router-dom";
import logo from "../../img/atomlogo.png";

export function Registro() {
  // Inicializamos las variables como cadenas vacias
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const navigate = useNavigate();

  // Manejador de eventos de userName
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  // Manejador de eventos de email
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  // Manejador de eventos de passwd
  const handlePasswd = (event) => {
    setPasswd(event.target.value);
  };

  // Manejador de eventos de registrarse
  const handleRegistrar = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, email, passwd }),
      });

      // Si la respuesta no es 'ok'
      if (!res.ok) {
        throw new Error("Error en la solicitud");
      }

      // La respuesta del servidor la convertimos a formato JSON
      const data = await res.json();
      if (data.code === 201) {
        alert("Usuario registrado correctamente");
        // Realiza la redirección a "/"
        navigate("/");
      } else {
        alert("No se ha podido registrar el usuario");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  //En esta página se puede registrar un nuevo usuario para tener acceso a la plataforma
  return (
    <div className="login">
      <img src={logo} alt="logo" className="image" />
      <input
        type="text"
        placeholder="Nombre de usuario"
        className="item"
        value={userName}
        onChange={handleUserName}
      />
      <input
        type="text"
        placeholder="Correo"
        className="item"
        value={email}
        onChange={handleEmail}
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="item"
        value={passwd}
        onChange={handlePasswd}
      />
      <button type="submit" className="itemr" onClick={handleRegistrar}>
        Registrarse
      </button>
    </div>
  );
}

export default Registro;
