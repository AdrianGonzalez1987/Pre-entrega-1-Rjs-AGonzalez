
import './Navbar.scss';
import logo from './logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LoginContext } from '../../context/LoginContext';
import { useContext } from 'react';


export const Navbar = () => {

    const {user, logout} = useContext(LoginContext)

    return (
        <header className="header sticky-top">
            <div className="header_container">
                <div>
                <img src= {logo} className="header_logo" alt='logo'/>
                <p>ENDOCRINOLOGIA</p>
                </div>

                <nav className="navbar" >
                    <Link to='/' className="navbar_menu"> INICIO </Link>
                    <NavDropdown title="PRODUCTOS" className="navbar_menu">
                        <li>
                        <ul><Link to='/Productos/' className="navbar_menu_desple"> TODOS </Link></ul>
                        <ul><Link to='/Productos/levotiroxina' className="navbar_menu_desple"> LEVOTIROXINA </Link></ul>
                        <ul><Link to='/Productos/insulina' className="navbar_menu_desple"> INSULINA </Link></ul>
                        <ul><Link to='/Productos/metformina' className="navbar_menu_desple"> METFORMINA </Link> </ul>
                        <ul><Link to='/Productos/glucometro' className="navbar_menu_desple"> GLUCOMETRO </Link> </ul>
                        </li>
                    </NavDropdown>
                    <Link to='/Contacto' className="navbar_menu"> CONTACTO </Link>
                </nav>
                <CartWidget />
            </div>
            <div className='user'>
                <h6>Bienvenido: {user.email}</h6>
                <button className='btn btn-danger' onClick = {logout}>Logout</button>

            </div>
        </header>
    )
}
// 
//para agregar imagenes
//FORMA 1 - <img src='https://via.placeholder.com/110' className="header_logo" alt='logo'/> esta es para imagen con ruta absoluta y 110 es la dimencion
//FORMA 2 - <img src='./imgs/logo.png' className="header_logo" alt='logo'/> asi se hace con ruta relativa 
//FORMA 3 - colocamos -  import logo from './logo.png' y llamamos <img src= {logo} className="header_logo" alt='logo'/> la imagen esta dentro de la carpeta Navbar