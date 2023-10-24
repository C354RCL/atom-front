import './habit.css';
import logo from '../../img/atomlogo.png';
export function habit(){
    return(
        <>
            <div className='logo'>
                <img src={logo} alt="logo" className='icono'></img>
            </div>
            <div className='content'>
                <h3>Habito</h3>
                <h4>Veces realizado 21/21</h4>
            </div>
            <div className='buttons'>
                <button>Ver detalles</button>
            </div>
        </>
    );
}