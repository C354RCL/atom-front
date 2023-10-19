import './header.css';
import logo from '../../img/atomlogo.png';
export function Header(){
    return(
        <div className='head'>

            <img src={logo} alt="logo" className='elemento logo'></img>
            
            
        </div>
    );
}