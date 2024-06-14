import React from "react";
import Box from '@mui/material/Box';
import Navigation from "./components/Navigation";
import Jumbotron from "./components/Jumbotron";
import Sidenav from "./components/Sidenav";
import {Routes, Route, BrowserRouter} from "react-router-dom";


const Home = () => {
    return (
        <>
             {/* <Box sx={{ display: 'flex' }}> */}
             <Navigation/>
             <Sidenav/>
              <h1>Home</h1>
             {/* </Box> */}

              
        </>
    )
}

export default Home; 