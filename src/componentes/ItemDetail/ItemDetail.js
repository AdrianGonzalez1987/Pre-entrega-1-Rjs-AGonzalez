import {useState} from "react"
import './ItemDetail.scss'
import { Card } from 'react-bootstrap';
import ItemCounts from '../ItemCounts/ItemCounts';


const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToAdd = {
            ...item,
            cantidad

        }
        console.log(itemToAdd)
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
                        <ItemCounts  
                            max={item.stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            agregar={handleAgregar}/>
                    </div>
                
                </Card.Text>
                <p>Precio: {item.price}  </p>
                
            </Card.Body>
            
        </Card>
       
    )
}

export default ItemDetail