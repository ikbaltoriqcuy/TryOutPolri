import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from './pages/dashboard/Dashboard'
import Home from './pages/home/Home';
import ProfilLangganan from './pages/home/ProfilLangganan';
import TesKecermatan from './pages/home/TesKecermatan';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/profil-langganan" element={<ProfilLangganan/>}/> 
        <Route path="/tes-kecermatan" element={<TesKecermatan/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
