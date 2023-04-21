
import Button from 'react-bootstrap/Button';

const ItemCounts = ({max, cantidad, setCantidad,agregar,stock}) => {
   
    
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
            
            <button 
                onClick={handleRestar} 
                className={`btn 
                ${cantidad === 1 ? 'minimo' : ''} 
                ${cantidad === 1 ? 'btn-outline-danger' : 'btn-outline-primary'}`}
                disabled={cantidad === 1 || stock === 0}
            >
                -
            </button>

            <span className="mx-3">{cantidad}</span>

            <button 
                onClick={handleSumar} 
                className={cantidad === stock ? "btn btn-danger" : "btn btn-primary"}
                disabled={cantidad === stock || stock === 0}
            >
                +
            </button>

            <br/>
            <Button onClick={agregar} className=" mx-2 mt-2" variant="primary" >AGREGAR</Button>

        </div>
    )
}

export default ItemCounts
