import {useContext, useState} from "react"
import './ItemDetail.scss'
import { Card } from 'react-bootstrap';
import ItemCounts from '../ItemCounts/ItemCounts';
import { CardContex } from "../../context/CardContex";
import { Link } from "react-router-dom";


const ItemDetail = ({item}) => {

    const { agregarAlCarrito, isInCart } = useContext(CardContex)
    console.log(isInCart(item.id))

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToAdd = {
            ...item,
            cantidad

        }
        /* SE PUEDE USAR ESTA FORMA - FORMA CLASICA
        const newCart = cart.slice()
        newCart.push(itemToAdd)
        setCart(newCart)
        */
        //FORMA RESUMIDA

        //setCart([...cart, itemToAdd])
        agregarAlCarrito(itemToAdd)

        //console.log(itemToAdd)
    }

    return(
        
        <Card  >
            <Card.Header><h2>{item.name}</h2></Card.Header>
           
            <Card.Body className='row mb-4 md-3'>
                <div className='col-3'> 
                    <Card.Img  src={item.img} className='imad'/>
                </div>
                
                
                <Card.Text className='row col'>
                    <div className='col-8'>
                        {item.description}
                    </div>
                    <div className='col-4 d-flex justify-content-center align-items-center'>
                        
                        {
                            isInCart(item.id)
                                ?<Link to="/cart" className="btn btn-success">Terminar Compra</Link>
                                :<ItemCounts  
                                    max={item.stock}
                                    cantidad={cantidad}
                                    setCantidad={setCantidad}
                                    agregar={handleAgregar}/>    
                        }
                            
                        
                        
                            
                    </div>
                
                </Card.Text>
                <p>Precio: {item.price}  </p>
                
            </Card.Body>
            
        </Card>
       
    )
}

export default ItemDetail