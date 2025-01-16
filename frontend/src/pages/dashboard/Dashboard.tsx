import React, { useState,useEffect } from 'react';
import Sidebar from "./components/Sidebar";
import { Box, Grid } from "@mui/material";
import { DashboardRoutes } from "./DashboardRoutes";
import Profile from "./profile/Profile";
import EditProfile from "./profile/edit-profile";
import EditPassword from "./profile/edit-password";
import TestKecermatanDashboard from "./test-kecermatan/TestKecermatanDashboard";
import TestKecermatanAdd from "./test-kecermatan/TestKecermatanAdd";
import TestSymbolDashboard from "./test-kecermatan/TestSymbolDashboard";
import PaymentView from "./payment/PaymentViews";
import { getCache, CACHE_KEY } from "../../cache/CacheUtils";
import { useNavigate } from "react-router-dom";


const Dashboard = (props: { page: DashboardRoutes }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const cache = getCache(CACHE_KEY);
    if (cache === null) {
      navigate("/");
    }
  }, [navigate]); 

  return (
    <>
      {props.page === DashboardRoutes.ROUTE_TEST_SYMBOL_DAHSBOARD ? (
        <TestSymbolDashboard />
      ) : (
        <Box sx={{ backgroundColor: "#F1F1F1", minHeight: "105vh" }}>
          <Grid container spacing={2}>
            <Grid item xs={3} md={2}>
              <Sidebar />
            </Grid>
            
            <Grid item xs={12} md={8} sx={{ marginTop: "32px" }}>
              {(() => {
                switch (props.page) {
                  case DashboardRoutes.ROUTE_PROFILE:
                    return <ProfilePage />;
                  case DashboardRoutes.ROUTE_EDIT_PROFILE:
                    return <EditProfilePage />;
                  case DashboardRoutes.ROUTE_TEST_KECERMATAN_ADD:
                    return <TestKecermatanAddPage />;
                  case DashboardRoutes.ROUTE_TEST_KECERMATAN:
                    return <TestKecermatan />;
                  case DashboardRoutes.ROUTE_EDIT_PASSWORD:
                    return <EditPasswordPage />;
                  case DashboardRoutes.ROUTE_PAYMENT:
                    return <PaymentPage />;
                  default:
                    return <ProfilePage />;
                }
              })()}
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};


const TestKecermatanAddPage = () => {
  return (
    <>
      <TestKecermatanAdd />
    </>
  );
};


// const TestSymbolDashboardPage = () => {
//   return (
//     <>
//       <TestSymbolDashboard />
//     </>
//   );
// };

const TestKecermatan = () => {
  return (
    <>
      <TestKecermatanDashboard />
    </>
  );
};

const EditPasswordPage = () => {
  return (
    <>
      < EditPassword/>
    </>
  );
};

const EditProfilePage = () => {
  return (
    <>
      <EditProfile />
    </>
  );
};

const ProfilePage = () => {
  return (
    <>
      <Profile />
    </>
  );
};

const PaymentPage = () => {
  return (
    <>
      <PaymentView />
    </>
  );
};


export default Dashboard;
