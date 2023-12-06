import { Footer } from "../../components/footer/Footer";
import { NewHabit } from "../../components/newHabit/newHabit";
import React, {useEffect} from "react";
export function AgregaHabitos() {
  // Obtenemos userName desde localStorage
  const userName = localStorage.getItem('userName');
  // Creamos una funcion que se ejecuta en cuanto se monta el componente
  useEffect(() => {
    // Creamos una funcion asincrona 
    const fetchData = async() => {
      try {
        // Creamos la peticion a la API
        const res = await fetch(`http://localhost:3000/habits?userName=${userName}`, {
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
    <>
      <h1>Encuentra Nuevos Habitos...</h1>
      <NewHabit></NewHabit>
      <NewHabit></NewHabit>
      <NewHabit></NewHabit>
      <NewHabit></NewHabit>
      <Footer></Footer>
    </>
  );
}

export default AgregaHabitos;
