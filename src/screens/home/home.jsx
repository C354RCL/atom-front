import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
import "./home.css";

import { Footer } from "../../components/footer/Footer.jsx";
import { Habit } from "../../components/habit/habit.jsx";

export function Home() {
  const [habitsData, setHabitsData] = useState([]);
  // Obtenemos userName desde localStorage
  const userName = localStorage.getItem("userName");
  // Creamos una funcion que se ejecuta en cuanto se monta el componente
  useEffect(() => {
    // Creamos una funcion asincrona
    const fetchData = async () => {
      try {
        // Creamos la peticion a la API
        const res = await fetch(
          `http://localhost:3000/main?userName=${userName}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Si la respuesta no es 'ok'
        if (!res.ok) {
          throw new Error("Error en la solicitud");
        }

        // Convertimos la respuesta en formato JSON
        const data = await res.json();
        setHabitsData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Tus habitos...</h1>
      {
        habitsData && habitsData.map((habit, index) => {  
          return <Habit key={index} data={habit}></Habit>
        })
      }
      <Footer></Footer>
    </>
  );
}

export default Home;
