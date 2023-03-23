
import './ItemListContainer.css'
import { Button } from 'react-bootstrap'
import CardBuy from '../Cardbuy/CardBuy'

const ItemListContainer = ({greeting}) => {
    return(
        <div className="list_container">
            <h2 className="list_container_title">BIENVENIDOS</h2>
            <hr/>
            
            <div className='m-2'> 
                <CardBuy/>
            </div>
            <hr/>
            <p>{greeting}</p>
            {/*<button className='btn btn-primary'>Clikea</button>*/}
            <Button variant='success' size='sm'>Clikea</Button>
        </div>
    )
}
export default ItemListContainer

//<Button variant='success' size='sm'>Clikea</Button> 
