/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Henrique Bispo 
DATA: 26/03/2023 */

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './style_main.css';
import Home from './Components/Home';
import Form from './Components/Form';
import Tables from './Components/Tables';
import Images from './Components/Images';
import Menu from './Components/Menu';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/tables" element={<Tables/>}/>
        <Route path="/images" element={<Images/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
    </Router>
  );
}

export default App;
