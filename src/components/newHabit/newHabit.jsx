import "./newHabit.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const NewHabit = ({data}) => {
  const [imageURL, setImageURL] = useState(null);

  // Función para convertir un Buffer a Blob
  const bufferToBlob = (buffer, type) => {
    return new Blob([buffer], { type });
  };

  // Función para convertir un Blob a una URL de datos
  const blobToDataURL = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(blob);
    });
  };

  useEffect(() => {
    const loadImageURL = async () => {
      if (data.icon && data.icon.type === "Buffer") {
        try {
          const blob = bufferToBlob(new Uint8Array(data.icon.data), "image/png");
          const url = await blobToDataURL(blob);
          setImageURL(url);
        } catch (error) {
          console.error("Error al cargar la imagen:", error);
        }
      }
    };

    loadImageURL();
  }, [data.icon]);

  return (
    <div className="elements" id={data.habitId}>
      {imageURL && <img src={imageURL} alt="logo" className="icono" />}
      <div className="content">
        <h3>{data.habitName}</h3>
        <h4>Categoria: {data.categoryName}</h4>
      </div>
      <div className="buttons">
        <button className="agregar">Agregar</button>
        <button className="detailsbtn">
          <Link to="/detalles" className="details">
            Ver detalles
          </Link>
        </button>
      </div>
    </div>
  );
}
