import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from './pages/dashboard/Dashboard'
import Home from './pages/home/Home'

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
