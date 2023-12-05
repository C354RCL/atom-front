import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/atomlogo.png';

export function Login() {
  // Inicializamos las variables como cadenas vacias
  const [userName, setUserName] = useState('');
  const [passwd, setPasswd] = useState('');

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
      const res = await fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, passwd }),
      });

      // SI la respues no es 'ok'
      if (!res.ok) {
        throw new Error('Error en la solicitud');
      }

      // Guardamos userName en localStorage
      localStorage.setItem('userName', userName);
      // La respuesta del servidor la convertimos a formato JSON
      const data = await res.json();
      // Guardamos el token en localStorage
      localStorage.setItem('token', data.token);
      // Se imprime el resultado
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
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
        <Link to="/home" className="loginb">
          Inicia Sesión
        </Link>
      </button>
      <button className="item registro">
        <Link to="/registro" className="registro">
          Registrarse
        </Link>
      </button>
    </div>
  );
}
