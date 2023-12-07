import { Footer } from "../../components/footer/Footer";
import { Habit } from "../../components/habit/habit";
import React, {useEffect, useState} from "react";
export function Terminados() {
  const [habitsData, setHabitsData] = useState([]);
  //Obtenemos userName desde localStorage
  const userName = localStorage.getItem('userName');
  // Creamos una funcion que se ejecuta en cuanto se monta el componente
  useEffect(() => {
    // Creamos una funcion asincrona 
    const fetchData = async() => {
      try {
        // Creamos la peticion a la API
        const res = await fetch(`http://localhost:3000/habits/completed?userName=${userName}`, {
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
        setHabitsData(data);   
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [userName]);
  return (
    <>
      <h1>Tus habitos completados.</h1>
      <h3>¡Felicidades! estos son los habitos que haz logrado comsolidar.</h3>
      {
        habitsData && habitsData.map((habit, index) => {
          return <Habit key={index} data={habit}></Habit>
        })
      }
      <Footer></Footer>
    </>
  );
}

export default Terminados;
