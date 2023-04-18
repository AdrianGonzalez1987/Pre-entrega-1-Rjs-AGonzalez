
import Button from 'react-bootstrap/Button';

const ItemCounts = ({max, cantidad, setCantidad,agregar}) => {
   
    
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }
    /*const handleAgregar = () => {
        const itemToAdd = {
            ...item,
            cantidad

        }
        console.log(itemToAdd)
    }*/
    

    return (
        <div >
            <button onClick = {handleRestar} className="btn btn-outline-primary"> - </button>
            <span className="mx-3">{cantidad}</span>
            <button onClick = {handleSumar} className="btn btn-primary"> + </button>
            <br/>
            <Button onClick={agregar} className=" mx-2 mt-2" variant="primary" >AGREGAR</Button>

        </div>
    )
}

export default ItemCounts
