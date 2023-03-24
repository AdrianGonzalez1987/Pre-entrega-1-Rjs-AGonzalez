
import './Navbar.scss';
import logo from './logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header className="header sticky-top">
            <div className="header_container">
                <div>
                <img src= {logo} className="header_logo" alt='logo'/>
                <p>ENDOCRINOLOGIA</p>
                </div>

                <nav className="navbar" >
                    <Link to='/' className="navbar_menu"> INICIO </Link>
                    <Link to='/Productos' className="navbar_menu"> PRODUCTOS </Link>
                    <Link to='/Contacto' className="navbar_menu"> CONTACTO </Link>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}
// 
//para agregar imagenes
//FORMA 1 - <img src='https://via.placeholder.com/110' className="header_logo" alt='logo'/> esta es para imagen con ruta absoluta y 110 es la dimencion
//FORMA 2 - <img src='./imgs/logo.png' className="header_logo" alt='logo'/> asi se hace con ruta relativa 
//FORMA 3 - colocamos -  import logo from './logo.png' y llamamos <img src= {logo} className="header_logo" alt='logo'/> la imagen esta dentro de la carpeta Navbar