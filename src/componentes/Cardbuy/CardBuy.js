import { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import { pedirDatos } from '../../helpers/pedirDatos';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Loader from "../Loader/Loader";

const CardBuy = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    //const [cantidad, setCantidad] = useState(true)
    const {categoryId} = useParams()
    useEffect(() => {
        //setCantidad(true)
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
                 //setCantidad(false && true)
                 
            })
            
    }, [categoryId])

    return (
    <div className='Container'>   
    {
        loading
            ? <Loader/>
            : <div className = 'd-flex flex-wrap'> {productos.map((prod) => (
        <div key = {prod.id} className = 'Container p-2' >
            <Card style={{ width: '15rem', height: '40rem'}}>
                <Card.Img variant="top" src='https://via.placeholder.com/110' />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <div > {
                        //<Card.Text className='parCarBuy' >
                           // <p>Descripcion: {prod.description}</p>
                        //</Card.Text>
                        }
                    </div>
                    </Card.Body>
                    <div className='align-content-flex-end p-3'>
                        
                        <p>{prod.stock <= 5 && <p><strong>Quedan Solo {prod.stock} Unidades</strong></p>}</p>
                        <p>Categoria: {prod.category}</p>
                        <h3>Precio: {prod.price}</h3> 
                        <Link to={`/Detalle/${prod.id}`} className='btn btn-primary'>Añadir</Link>

                    </div>   
                        

                    
                
            </Card>
        </div>
    ))}
    
    </div>
    }
    
    </div> 
  );
}

export default CardBuy;