/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Henrique Bispo 
DATA: 26/03/2023 */


import React, { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/style.css';


import TicTacToe from "./Componentes/TicTacToe";
import Board from "./Componentes/Board";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Board></Board>
      <TicTacToe></TicTacToe>
    </div>
  )
}

export default App
