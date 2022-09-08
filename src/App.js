import './componentes/Boton.js'
import './App.css';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';
import {useState} from 'react';
function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics (numClics+ 1);

  }
  
  const reiniciarContador = () =>{
    setNumClics (0);
  }
  
  return (
    <div className="App">
      <header className="fondo">
        <h1 >Contador de Clicks</h1>
        <div className='contenedor-principal nes-container with-title'>
          <Contador numClics={numClics}
          />
          <Boton
          texto={'Click'}
          esBotonDeClic={true}
          manejarClic={manejarClic} />
          <Boton
          texto={'Reiniciar'}
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
        </div>
      </header>
    </div>
  );
}

export default App;