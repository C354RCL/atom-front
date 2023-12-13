import { Footer } from "../../components/footer/Footer.jsx";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detallesCompletar.css";

//Componente de los detalles del habito con la opción de completar el habito en el día

function DetallesCompletar() {
  const [habitData, setHabitData] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const { habitId } = useParams();
  const userName = localStorage.getItem("userName");
  useEffect(() => {
    // Realiza una nueva llamada a la API para obtener la información del hábito específico
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/habits/info?habitId=${habitId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          throw new Error("Error en la solicitud");
        }

        const data = await res.json();
        console.log(data);
        setHabitData(data);

        // Cargar y mostrar la imagen desde el buffer
        if (data[0].icon && data[0].icon.type === "Buffer") {
          const blob = new Blob([new Uint8Array(data[0].icon.data)], {
            type: "image/png",
          });
          const url = URL.createObjectURL(blob);
          setImageURL(url);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [habitId]);

  const handleRealizadoClick = async () => {
    try {
      // Realiza la petición para agregar el hábito al usuario
      const res = await fetch("http://localhost:3000/habit", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          habitId: habitId,
          // Otros datos necesarios para agregar el hábito al usuario
        }),
      });

      if (!res.ok) {
        throw new Error("Error al agregar el hábito al usuario");
      }

      // Manejar cualquier lógica adicional después de la petición si es necesario
    } catch (error) {
      console.error(error);
    }
  };

  if (!habitData) {
    return <p>Cargando detalles...</p>;
  }

  return (
    <>
      <div className="items">
        <img className="pp" src={imageURL} alt="" />
        <h1>{habitData[0].habitName}</h1>
        <div className="texto">
          <h3>{habitData[0].description}</h3>
        </div>
        {/*Botón que agrega uno al contador de dias completados */}
        <button className="btn-completado" onClick={handleRealizadoClick}>
          Realizado por hoy
        </button>
        <Footer></Footer>
      </div>
    </>
  );
}

export default DetallesCompletar;
