import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Loader from "../Loader/Loader";
import { collection, getDocs, query, where } from 'firebase/firestore';
import {db} from '../../firebase/config'

const CardBuy = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    //const [cantidad, setCantidad] = useState(true)
    const {categoryId} = useParams()
    useEffect(() => {
        //setCantidad(true)
        setLoading(true)

        /*//esto se sustitulle por el firestore
        import { pedirDatos } from '../../helpers/pedirDatos';
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
        */    

        // 1-. armar referencia (proceso sincronico) importamos la db
            const productosRef = collection(db,"productos")
            const q = categoryId
                    ?  query(productosRef, where("category", "==", categoryId))
                    :  productosRef
        // 2-. llamar a esa referencia|| pedimos los datos de la db
            getDocs(q)
                .then((resp) => {
                    setProductos(resp.docs.map((doc) => { 
                        return  {
                                    id:doc.id,
                                    ...doc.data()
                                } 
                        }))
                })
                .finally(() => setLoading(false))

    }, [categoryId])

    return (
    <div className='Container'>   
    {
        loading
            ? <Loader/>
            : <div className = 'd-flex flex-wrap'> {productos.map((prod) => (
        <div key = {prod.id} className = 'Container p-2' >
            <Card style={{ width: '15rem', height: '40rem'}}>
                <Card.Img variant="top" src= {prod.img} />
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
                        <p>Elaborado por: {prod.marca}</p>
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