import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register from './pages/Register';
import Logon from './pages/Logon';
import Profile from './pages/Profile';
import NewGato from './pages/NewGato';

import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Logon />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/gato/new" element={<NewGato/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
