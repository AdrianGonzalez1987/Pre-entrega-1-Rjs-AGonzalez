import { IoCartOutline } from "react-icons/io5";
import './CartWidget.scss';

const CartWidget = () => {

    return(
        <div className='cart-widget'>
            <IoCartOutline className="cart-icon" />
            <span>0</span>
        </div>
    )
}

export default CartWidget
