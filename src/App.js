//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CardContex';
import { LoginProvider } from './context/LoginContext';
import AppRouter from './routes/AppRouter';




function App() {

  return ( 
  <LoginProvider>
    <CartProvider> 

      <AppRouter/>

    </CartProvider>
  </LoginProvider>
    
  );
}

export default App;
