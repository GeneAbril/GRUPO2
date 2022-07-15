import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import HeaderComponent from './components/HeaderComponent';
import App from './App';
// import RutaTest from './RutaTest';


const Rutas = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<App />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Rutas
