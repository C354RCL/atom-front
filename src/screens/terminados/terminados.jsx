import { Footer } from "../../components/footer/Footer";
import { Habit } from "../../components/habit/habit";
function Terminados() {
  return (
    <>
      <h1>Tus habitos completados.</h1>
      <h3>¡Felicidades! estos son los habitos que haz logrado comsolidar.</h3>
      <Habit></Habit>
      <Habit></Habit>
      <Habit></Habit>
      <Habit></Habit>
      <Footer></Footer>
    </>
  );
}

export default Terminados;
