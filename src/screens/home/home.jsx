import React from "react";
import ReactDOM from "react-dom/client";
import "./home.css";

import { Footer } from "../../components/footer/Footer.jsx";
import { Habit } from "../../components/habit/habit.jsx";

function Home() {
  return (
    <>
      <h1>Tus habitos...</h1>
      <Habit />
      <Footer></Footer>
    </>
  );
}

export default Home;
