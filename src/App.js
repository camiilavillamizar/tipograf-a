import React from 'react';
import './App.css';
import './fonts/waltographUI.ttf';

function App() {
  return (
    <div  className= "container">
      <div className = "frase">
        <div className = "line">
            <p id="la"> La </p>
            <h1>RISA</h1>
        </div>
       
        <p id="notiene">no tiene </p>
        <h1 id="tiempo">TIEMPO</h1>
        <p id="la2">la </p>
        <h1 id = "imaginacion">IMAGINACIÓN</h1>         
        <p id="notiene2">no tiene</p>
        <h1 id = "edad">EDAD</h1>
        <p id="y">y los</p>
        <h1 id = "suenos">SUEÑOS</h1>
        
        <p id="sonpara">son para</p>
        <h1 id="siempre">SIEMPRE</h1>
      </div>

      <div className = "autor">
        <h1>-Walt Disney</h1>
      </div>
    </div>
  );
}

export default App;
