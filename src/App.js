//import logo from './logo.svg';


import { Navbar } from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Inici from './componentes/Inici/Inici';
import Contacto from './componentes/Contacto/Contacto';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailsContainer from './componentes/ItemDetailsContainer/ItemDetailsContainer';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {

  return ( 

    <BrowserRouter className="App">
          
      <Navbar />
  
      <Routes>
        <Route path='/' element={ <Inici /> }/>
        <Route path='/Productos' element={<ItemListContainer /> }/>
        <Route path='/Productos/:categoryId' element={<ItemListContainer /> }/>
        <Route path='/Detalle/:itemId' element = {<ItemDetailsContainer/>} />
        <Route path='/Contacto' element={ <Contacto /> }/>
        <Route path='*' element={ <Navigate to={"/"} /> }/>
      </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
