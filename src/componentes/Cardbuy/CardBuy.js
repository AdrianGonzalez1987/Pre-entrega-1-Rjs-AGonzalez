import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { pedirDatos } from '../../helpers/pedirDatos';
import { useParams } from 'react-router-dom'



const CardBuy = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
    useEffect(() => {
        
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if (categoryId){
                    setProductos(res.filter((prod) => prod.category === categoryId))
                } else {
                    setProductos(res)
                }
                
            })   
            .catch((error) => {
                console.log(error)
                
            })
            .finally(() => {
                 setLoading(false)
            })
            
    }, [categoryId])

    return (
    <div className='Container'>   
    {
        loading
            ? <h2>CARGANDO...</h2>
            : <div className = 'd-flex flex-wrap'> {productos.map((prod) => (
        <div key = {prod.id} className = 'p-2' >
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src='https://via.placeholder.com/110' />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                        <Card.Text>
                            <p>Descripcion: {prod.description}</p>
                        </Card.Text>
                        <p>Cantidad: {prod.stock}</p>
                        <h3>Precio: {prod.precio}</h3>

                    <Button variant="primary">Añadir</Button>
                </Card.Body>
            </Card>
        </div>
    ))}
    
    </div>
    }
    
    </div> 
  );
}

export default CardBuy;