import './habit.css';
import logo from '../../img/atomlogo.png';
export function Habit(){
    return(
        <div className='elements'>
            <img src={logo} alt="logo" className='icono'></img>
            <div className='content'>
                <h3>Habito</h3>
                <h4>Veces realizado 21/21</h4>
            </div>
            <div className='buttons'>
                <button>Ver detalles</button>
            </div>
        </div>
    );
}