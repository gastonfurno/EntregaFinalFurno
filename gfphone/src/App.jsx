import NavBar from './Components/NavBar/NavBar';
import './index.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
 
  return (

      <BrowserRouter>
  
      <NavBar />
      <Routes>
      <Route path={"/"} element={<ItemListContainer/>}/>
      <Route path={"/celulares"} element={<ItemListContainer/>}/>
      <Route path={"/celulares/:marca"} element={<ItemListContainer/>}/>
      <Route path= "/item/:id" element={<ItemDetailContainer />}/>

      </Routes>


      </BrowserRouter>
      
  );
  
  
}

export default App
