import { Footer } from "../../components/footer/Footer.jsx";
import React, { useEffect, useState } from "react";
import profile from "../../img/profile.png";
import "./detalles.css";
function Detalles({match}) {
  const [habitData, setHabitData] = useState(null);
  useEffect(() => {
    // Realiza una nueva llamada a la API para obtener la información del hábito específico
    const fetchHabitData = async () => {
      try {
        const habitId = match.params.habitId;
        const res = await fetch(`http://localhost:3000/habit/info?habitId=${habitId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Error en la solicitud");
        }

        const data = await res.json();
        setHabitData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHabitData();
  }, [match.params.habitId]);

  if (!habitData) {
    return <p>Cargando detalles...</p>;
  }

  return (
    <>
      <div className="items">
        <img className="pp" src={profile} alt="" />
        <h1>{habitData.habitName}</h1>
        <div className="texto">
          <h3>
          {habitData.description}
          </h3>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Detalles;
