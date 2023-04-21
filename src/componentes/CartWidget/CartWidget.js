import { IoCartOutline } from "react-icons/io5";
import './CartWidget.scss';
import { useContext } from "react";
import { CardContex } from "../../context/CardContex";
import { Link } from 'react-router-dom'

const CartWidget = () => {
    
    const { totalCantidad, cart } = useContext(CardContex)

    return(
        <Link to="/Cart" className= {`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <IoCartOutline className="cart-icon" />
            <span> {totalCantidad()} </span>
        </Link>
    )
}

export default CartWidget
