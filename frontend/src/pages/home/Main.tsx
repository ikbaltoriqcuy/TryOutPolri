import React from "react";
import Navigation from "./components/navigation/Navigation";
import Jumbotron from "./components/main/jumbotron/Jumbotron";
import Footer from "./components/navigation/Footer";
import TestimonialList from "./components/main/testimonial/TestimonialList";
import FiturList from "./components/main/fitur/FiturList";
import VisiMisiList from "./components/main/visimisi/VisiMisiList";
import { MainRoutes } from "./MainRoutes";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import CalculatorFitness from "./components/calculator/CalculatorFitness";
import TestSymbol from "./components/test/TestSymbol";
import { Box, Alert } from "@mui/material";

const Main = (props: { page: MainRoutes }) => {
  return (
    <>
      <Box>
        <Navigation currPage={props.page} />
        {(() => {
          switch (props.page) {
            case MainRoutes.ROUTE_CALCULATOR:
              return <CalculatorPage />;
            case MainRoutes.ROUTE_TEST_THOROUGHNESS:
              return <TestThoroughnessPage />;
            case MainRoutes.ROUTE_HOME:
              return <HomePage />;
            case MainRoutes.ROUTE_LOGIN:
              return <LoginPage />;
            case MainRoutes.ROUTE_REGISTER:
              return <RegisterPage />;
            default:
              return <HomePage />;
          }
        })()}
      </Box>
    </>
  );
};

const HomePage = () => {
  return (
    <>
      <Jumbotron />
      <FiturList />
      <VisiMisiList />
      <TestimonialList />
      <Footer />
    </>
  );
};

const CalculatorPage = () => {
  return (
    <>
      <CalculatorFitness /> <Footer />
    </>
  );
};

const TestThoroughnessPage = () => {
  return (
    <>
      <TestSymbol />
    </>
  );
};

const RegisterPage = () => {
  return (
    <>
      <Register /> <Footer />
    </>
  );
};

const LoginPage = () => {
  return (
    <>
      <Login />
      <Footer />
    </>
  );
};

export default Main;
