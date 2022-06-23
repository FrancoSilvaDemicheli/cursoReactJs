import logo from './logo.svg';
import Input from './components/input'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
  
    <div className="App">

      <NavBar />
      <ItemListContainer greeting={'Hola Coders'}/>
      
    </div>
    
  );
}

export default App
