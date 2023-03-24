import Button from 'react-bootstrap/Button';
import './ItemDetail.scss'
import { Card } from 'react-bootstrap';


const ItemDetail = ({item}) => {
    return(
        
        <Card  >
            <Card.Header><h2>{item.name}</h2></Card.Header>
           
            <Card.Body className='row mb-4 md-3'>
                 <Card.Img  src={item.img} className='imad'/>
                
                <Card.Text className='col'>{item.description}</Card.Text>
                <p>Precio: {item.price}</p>
                 <Button variant="primary" >AGREGAR</Button>
            </Card.Body>
           
        </Card>
       
    )
}

export default ItemDetail