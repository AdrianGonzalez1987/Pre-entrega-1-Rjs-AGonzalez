//import logo from './logo.svg';


import { Navbar } from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Inici from './componentes/Inici/Inici';
import Contacto from './componentes/Contacto/Contacto';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailsContainer from './componentes/ItemDetailsContainer/ItemDetailsContainer';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CardContex';
import  Cart  from './componentes/Cart/Cart'



function App() {

  
  return ( 
  
    <CartProvider> 

      <BrowserRouter className="App">
          
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
    
      </BrowserRouter>

    </CartProvider>
      
    
  );
}

export default App;
