import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Lo que necesitas al alcance de tus manos'/>
    </div>
  );
}



export default App;
