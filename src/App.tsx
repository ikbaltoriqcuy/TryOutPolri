import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from './pages/dashboard/Dashboard'
import Main from './pages/home/Main'
import { MainRoutes } from './pages/home/MainRoutes'

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/> 
        <Route path="/" element={<Main page={MainRoutes.ROUTE_HOME}/>}/> 
        <Route path="/Test_Kecermatan" element={<Main page={MainRoutes.ROUTE_TEST_THOROUGHNESS}/>}/> 
        <Route path="/Calculator" element={<Main page={MainRoutes.ROUTE_CALCULATOR}/>}/> 
        <Route path="/Login" element={<Main page={MainRoutes.ROUTE_LOGIN}/>}/>
        <Route path="/Register" element={<Main page={MainRoutes.ROUTE_REGISTER}/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
