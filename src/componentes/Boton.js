import React from 'react';
import '../hojas-de-estilo/Boton.css';
function Boton({texto, esBotonDeClic, manejarClic}){
  return(
    <button className={esBotonDeClic ? 'boton-click' : 'boton-reiniciar' } className="nes-btn is-primary" className="nes-btn is-error"
    onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;