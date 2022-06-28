import logo from './logo.svg';
import Input from './components/input'
import './App.css';
import ItemListContainer from './containers/ItemListContainer';
import SimpleAccordion from './components/SimpleAccordion';
import NavBar from './components/Navbar/NavBar';
import ItemCount from './components/Counter';




function App() {

  const onAdd = (qty) => {            //PREGUNTAR!!
  };
  return (
  
    <div className="App">

      

      <NavBar />
      <ItemListContainer greeting={'Hola Coders'}>
      <hr />
      <Input></Input>
      <SimpleAccordion/>
      <hr />
      </ItemListContainer>
      <ItemCount onAdd={onAdd} />
      
    </div>
    
  );
}

export default App
