import { Footer } from "../../components/footer/Footer";
import { NewHabit } from "../../components/newHabit/newHabit";
import React, { useEffect, useState } from "react";
import "./agregaHabitos.css";
export function AgregaHabitos() {
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
          `http://localhost:3000/habits?userName=${userName}`,
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
  }, [userName]);

  //Esta página muestra todos los habitos disponibles para que se puedan agregar a la pantalla principal
  return (
    <>
      <h1>Encuentra Nuevos Habitos...</h1>
      <div className="listaHabitos">
        {habitsData &&
          habitsData.map((habit, index) => {
            return <NewHabit key={index} data={habit}></NewHabit>;
          })}
      </div>
      <Footer></Footer>
    </>
  );
}

export default AgregaHabitos;
