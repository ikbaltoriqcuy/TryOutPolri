import React from "react";
import Sidebar from "./components/Sidebar";
import { Box, colors, Grid } from "@mui/material";
import { DashboardRoutes } from "./DashboardRoutes";
import Profile from "./profile/Profile";
import TestKecermatanDashboard from "./profile/TestKecermatanDashboard";

const Dashboard = (props: { page: DashboardRoutes }) => {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6} md={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={6} md={8}>
          {(() => {
              switch (props.page) {
                case DashboardRoutes.ROUTE_PROFILE:
                  return <ProfilePage />;
                case DashboardRoutes.ROUTE_TEST_KECERMATAN:
                  return <TestKecermatan/>
                default:
                  return <ProfilePage />;
              }
            })()}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};


const TestKecermatan = () => {
  return (
    <>
      <TestKecermatanDashboard />
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

export default Dashboard;
