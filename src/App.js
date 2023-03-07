//import logo from './logo.svg';


import { Navbar } from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Hola mundo"}/>
      
    </div>
  );
}

export default App;
