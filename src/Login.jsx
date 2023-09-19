import './Login.css';
import logo from './img/atomlogo.png';
export function Login1st(){
    return( <div className='login'>
        <img src={logo} alt="logo" className='item'></img>
        <input type="text" placeholder="Usuario" className='item' ></input>
        <input type="text" placeholder="Contraseña" className='item' ></input>
        <button className='item'>Iniciar Sesion</button>
        <button className='item registro'>Registrarse</button>
        
        
    </div>
    );
}