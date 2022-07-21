import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HeaderComponent from './components/HeaderComponent';
import ComentarioComponent from './components/Plantas/ComentarioComponent';
import DispositivosComponent from './components/Dispositivo//DispositivosComponent';
import FooterComponent from './components/Home/FooterComponent';
import GraficosComponent from './components/Graficas/GraficosComponent';
import HeaderComponent from './components/Home/HeaderComponent';
import HomeComponent from './components/Home/HomeComponent';
import LoginComponent from './components/Login/LoginComponent';
import RegisterComponent from './components/Login/RegisterComponent';
import { getSession } from './persistencia/dataUsuario';


const App = () => {
  const [stateSession, setStateSession] = useState(null)
  useEffect(() => {
    setStateSession(getSession())
  }, [])
  
  
  return (
    <BrowserRouter>
      <HeaderComponent setStateSession={setStateSession} stateSession={stateSession}/>

      <div className='container-fluid'>

        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/comentarios" element={<ComentarioComponent />} />
          <Route path="/graficos" element={<GraficosComponent />} />
          <Route path="/login" element={<LoginComponent setStateSession={setStateSession} />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/dispositivos" element={<DispositivosComponent />} />

         
        </Routes>

      </div>

      <FooterComponent />

    </BrowserRouter>
  )
}

export default App;