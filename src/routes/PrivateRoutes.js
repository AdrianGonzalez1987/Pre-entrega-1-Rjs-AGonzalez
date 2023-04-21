import { Navbar } from '../componentes/Navbar/Navbar';
import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer';
import Inici from '../componentes/Inici/Inici';
import Contacto from '../componentes/Contacto/Contacto';
import ItemDetailsContainer from '../componentes/ItemDetailsContainer/ItemDetailsContainer';
import  Cart  from '../componentes/Cart/Cart'
import {Routes, Route, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    return(
        <>
         <Navbar />
      
            <Routes>
                <Route path='/' element={ <Inici /> }/>
                <Route path='/Productos' element={<ItemListContainer /> }/>
                <Route path='/Productos/:categoryId' element={<ItemListContainer /> }/>
                <Route path='/Detalle/:itemId' element = {<ItemDetailsContainer/>} />
                <Route path='/Cart' element={<Cart />}/>
                <Route path='/Contacto' element={ <Contacto /> }/>
                <Route path='*' element={ <Navigate to={"/"} /> }/>
            </Routes>
        </>
    )
}

export default PrivateRoutes