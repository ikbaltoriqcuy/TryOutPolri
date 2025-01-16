import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from './pages/dashboard/Dashboard'
import ProfilLangganan from './pages/home/ProfilLangganan';
import TesKecermatan from './pages/home/TesKecermatan';
import Main from './pages/home/Main'
import { MainRoutes } from './pages/home/MainRoutes'
import { DashboardRoutes } from "./pages/dashboard/DashboardRoutes";
import React, { useEffect } from 'react';
import logo from '/images/logo.png'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/profil-langganan" element={<ProfilLangganan/>}/> 
        <Route path="/tes-kecermatan" element={<TesKecermatan/>}/> 
        <Route path="/dashboard" element={<Dashboard page={DashboardRoutes.ROUTE_PROFILE} />}/>
        <Route path="/dashboard/edit-profile" element={<Dashboard page={DashboardRoutes.ROUTE_EDIT_PROFILE} />}/>
        <Route path="/dashboard/edit-password" element={<Dashboard page={DashboardRoutes.ROUTE_EDIT_PASSWORD}/>}/>
        <Route path="/dashboard/test_kecermatan" element={<Dashboard page={DashboardRoutes.ROUTE_TEST_KECERMATAN} />}/>  
        <Route path="/dashboard/payment" element={<Dashboard page={DashboardRoutes.ROUTE_PAYMENT} />}/>  
        <Route path="/dashboard/test_kecermatan/add" element={<Dashboard page={DashboardRoutes.ROUTE_TEST_KECERMATAN_ADD} />}/> 
        <Route path="/dashboard/test_symbol/:idTest" element={<Dashboard page={DashboardRoutes.ROUTE_TEST_SYMBOL_DAHSBOARD} />}/>   
        <Route path="/" element={<Main page={MainRoutes.ROUTE_HOME}/>}/> 
        <Route path="/test_kecermatan" element={<Main page={MainRoutes.ROUTE_TEST_THOROUGHNESS}/>}/> 
        <Route path="/calculator" element={<Main page={MainRoutes.ROUTE_CALCULATOR}/>}/> 
        <Route path="/login" element={<Main page={MainRoutes.ROUTE_LOGIN}/>}/>
        <Route path="/register" element={<Main page={MainRoutes.ROUTE_REGISTER}/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
