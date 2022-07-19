import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HeaderComponent from './components/HeaderComponent';
import AgregarComentarioComponent from './components/AgregarComentarioComponent';
import DispositivosComponent from './components/DispositivosComponent';
import FooterComponent from './components/FooterComponent';
import GraficosComponent from './components/GraficosComponent';
import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';


const App = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />

      <div className='container'>

        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/comentarios" element={<AgregarComentarioComponent />} />
          <Route path="/graficos" element={<GraficosComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/dispositivos" element={<DispositivosComponent />} />
        </Routes>

      </div>

      <FooterComponent />

    </BrowserRouter>
  )
}

export default App