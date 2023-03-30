import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Lo que necesitas al alcance de tus manos'/>}/>
          <Route path='/category/:id' element={<ItemListContainer greeting='Productos Filtrados'/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
