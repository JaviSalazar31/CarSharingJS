// src/App.jsx
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Enviar el prop con el mensaje de bienvenida */}
      <ItemListContainer greeting="¡Bienvenido al catálogo de productos de CarSharingJS!" />
    </div>
  );
}

export default App;
