import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import { Footer } from "./components/footer/Footer.jsx";
import { Login } from "./Login.jsx";
import Registro from "./screens/registro/Registro.jsx";
import Home from "./screens/home/home.jsx";
import AgregaHabitos from "./screens/agregaHabitos/agregaHabitos.jsx";
import Perfil from "./screens/perfil/perfil.jsx";
import Terminados from "./screens/terminados/terminados.jsx";
import Detalles from "./screens/detalles/detalles.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/agregaHabitos",
    element: <AgregaHabitos />,
  },
  {
    path: "/detalles",
    element: <Detalles />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "/terminados",
    element: <Terminados />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
