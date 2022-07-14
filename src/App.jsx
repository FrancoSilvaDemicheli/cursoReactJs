import './App.css';
import ItemListContainer from './containers/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './containers/ItemDetailContainer/idex';
import ShopProvider from './context/ShopContext';


function App() {
  return (

    <ShopProvider>
      
      <BrowserRouter>        
        <NavBar /> 
        <Routes>
          <Route path ='/' element={<ItemListContainer/>}></Route>
          <Route path = '/category/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path ='/detail/:productId' element= {<ItemDetailContainer/>}></Route>
          <Route path ='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </ShopProvider>
  );
}

export default App
