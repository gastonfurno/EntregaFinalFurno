import NavBar from './Components/NavBar/NavBar';
import './index.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './Components/Contacto';
import { CartProvider} from './context/CartContext';
import Carrito from './Components/Carrito/carrito';
import Checkout from './Components/Checkout/Checkout';


function App() {

  return (
    <CartProvider>
      <BrowserRouter> 
  
      <NavBar />
      <Routes>
    
      <Route path={"/"} element={<ItemListContainer/>}/>
      <Route path={"/celulares/:marca"} element={<ItemListContainer/>}/>
      <Route path= "/item/:id" element={<ItemDetailContainer />}/>
      <Route path= "/Contacto" element={<Contacto/>}/>
      <Route path= "/Carrito" element={<Carrito/>}/>
      <Route path= "/Checkout" element={<Checkout/>}/>
      </Routes>


      </BrowserRouter>
      </CartProvider>
    
  );
   
}

export default App
