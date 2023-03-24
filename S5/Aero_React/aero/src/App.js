import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './style_main.css';
import Home from './Components/Home';
import Form from './Components/Form';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </Router>
  );
}

export default App;
