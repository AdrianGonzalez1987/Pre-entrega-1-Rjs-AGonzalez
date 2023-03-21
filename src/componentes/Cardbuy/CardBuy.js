import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { pedirDatos } from '../../helpers/pedirDatos';



const CardBuy = () => {

    const [productos, setProductos] = useState([])
    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
    <div className = ''> {productos.map((prod) => (
        <div key = {prod.id} className = 'd-flex row m-2'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='https://via.placeholder.com/110' />
                <Card.Body>
                    <Card.Title>{prod.nombre}</Card.Title>
                        <Card.Text>
                            <p>Descripcion: {prod.descripcion}</p>
                        </Card.Text>
                        <p>Cantidad: {prod.cantidad}</p>
                        <h3>Precio: {prod.precio}</h3>

                    <Button variant="primary">Añadir</Button>
                </Card.Body>
            </Card>
        </div>
    ))}
    
    </div>
    
  );
}

export default CardBuy;