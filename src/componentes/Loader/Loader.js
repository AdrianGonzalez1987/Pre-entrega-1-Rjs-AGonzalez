import './Loader.scss'
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {

    return (
        <div className='Loader'>
             <Spinner animation="grow" variant="primary" />
        </div>
    )
}
export default Loader