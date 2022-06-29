import logo from './logo.svg';
import Input from './components/input'
import './App.css';
import ItemListContainer from './containers/ItemListContainer';
import SimpleAccordion from './components/SimpleAccordion';
import NavBar from './components/Navbar/NavBar';
import ItemCount from './components/Counter';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';




function App() {

  const onAdd = (qty) => {            //PREGUNTAR!!
  };

  return (
    <BrowserRouter>
      
      <NavBar />
      <Routes>
        <Route path ='/' element={<ItemListContainer/>}></Route>
        <Route path = '/category/:categoryId' element={<ItemCount/>}></Route>
        <Route path ='/detail/:productId' element= {<itemDetailContainer/>}></Route>
        <Route path ='*' element={<NotFound/>}></Route>
      </Routes>
      <ItemCount onAdd={onAdd} />
        
      
    
    </BrowserRouter>
    
  );
}

export default App
