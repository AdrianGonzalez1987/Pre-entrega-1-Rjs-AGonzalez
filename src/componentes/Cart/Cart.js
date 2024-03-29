import { useContext } from "react"
import { CardContex } from "../../context/CardContex"
import { Card } from 'react-bootstrap';
import {BsFillTrash3Fill} from 'react-icons/bs'
import './Cart.scss' 
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, vaciarCarrito, removerItem, totalCarrito} = useContext(CardContex)
    
    return (
        <div className="container m-5">
            {
                cart.length === 0
                ? <> 
                        <h2>No tienes productos agregados</h2>
                        <hr/>
                        <Link className="btn btn-primary" to="/">Volver</Link>

                  </>
                : <>
                        <h2>Tu Compra</h2>
                        <hr/>

                        {
                            cart.map((item) => (
                                <Card  key={item.id} >
                                    <div className="d-flex row  justify-content-center align-items-center ">
                                        
                                    <div className="col-2  ">
                            
                                        <Card.Img className="imag" src={item.img} />
                            
                                    </div>
                                        <bold className="col-2  ">{item.name}</bold>
                        
                                        <small className="col-2">Cantidad: {item.cantidad} </small>
                                        <small className="col-2"> Precio unidad: {item.price} </small>
                                        <small className="col-2">Precio total: {item.price * item.cantidad} </small>
                                        <button onClick={() => removerItem(item.id)} className="btn btn-danger col-2 imag md-2"><BsFillTrash3Fill/></button>
                                    
                                    </div>
                        
                                </Card>
                    
                            ))
                        }
                        <h3>TOTAL COMPRA: {totalCarrito()}</h3>
                        <button onClick={vaciarCarrito} className="btn btn-danger m-2">Vaciar Carrito</button>
                        <Link to="/Checkout" className="btn btn-success m-2">Terminar Compra</Link>
                  </>
            }
            
        </div>
    
    )
}
export default Cart