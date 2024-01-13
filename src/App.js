import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./styles/global.css";

import Login from "./components/Login";
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
