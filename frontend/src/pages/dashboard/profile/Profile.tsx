import React from 'react';
import { Box, Button, Grid, TextField, Typography, Paper, Tabs, Tab, Divider, colors } from '@mui/material';

const Profile: React.FC = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 6, width:"76vw", height:"100vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, height:"80vh" }}>
            <Typography variant="body1">Nama</Typography>
            <Typography variant="body2" sx={{ color: "#2F4F4F"}}>TEGUH GABEI</Typography>

            <Divider sx={{ marginTop: 2 }}/>

            <Typography variant="body1" sx={{ marginTop: 2 }}>Email</Typography>
            <Typography variant="body2" sx={{ color: "#2F4F4F"}}>teguhgabei@gmail.com</Typography>

            <Divider sx={{ marginTop: 2 }}/>

            <Typography variant="body1" sx={{ marginTop: 2 }}>Username</Typography>
            <Typography variant="body2" sx={{ color: "#2F4F4F"}}>kevin</Typography>

            <Divider sx={{ marginTop: 2 }}/>

            <Typography variant="body1" sx={{ marginTop: 2 }}>Nomor WA</Typography>
            <Typography variant="body2" sx={{ color: "#2F4F4F"}}>087886340382</Typography>

            <Divider sx={{ marginTop: 2 }}/>

            <Typography variant="body1" sx={{ marginTop: 2 }}>Alamat</Typography>
            <Typography variant="body2" sx={{ color: "#2F4F4F"}}>BANDUNG</Typography>

            <Divider sx={{ marginTop: 2 }}/>

            <Button variant="contained"  sx={{ marginTop: 2, backgroundColor: "#ffca28" }}>Ubah Profil</Button>
            <Button variant="contained"  sx={{ marginTop: 2,backgroundColor: "#ffca28", marginLeft: 2 }}>Ubah Password</Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6} >
          <Paper sx={{ padding: 2, height:"80vh" }}>
            <Tabs value={tabValue} onChange={handleTabChange}>
              <Tab label="Berlangganan" />
              <Tab label="Riwayat Berlangganan" />
            </Tabs>
            {tabValue === 0 && (
              <Box sx={{ padding: 2 }}>
                <Typography variant="body1">Status</Typography>
                <Typography variant="body2" sx={{ color: "#2F4F4F"}}>Aktif</Typography>

                <Divider sx={{ marginTop: 2 }}/>

                <Typography variant="body1" sx={{ marginTop: 2 }}>Paket Berlangganan</Typography>
                <Typography variant="body2" sx={{ color: "#2F4F4F"}}>LEVEL 4</Typography>

                <Divider sx={{ marginTop: 2 }}/>

                <Typography variant="body1" sx={{ marginTop: 2 }}>Masa aktif sampai dengan</Typography>
                <Typography variant="body2" sx={{ color: "#2F4F4F"}}>31 July 2024 16:17:28 WIB</Typography>

                <Divider sx={{ marginTop: 2 }}/>

                <Typography variant="body1" sx={{ marginTop: 2 }}>Sisa quota tes kecermatan harian</Typography>
                <Typography variant="body2" sx={{ color: "#2F4F4F"}}>8</Typography>

                <Divider sx={{ marginTop: 2 }}/>

                <Button variant="contained" sx={{ marginTop: 2, backgroundColor: "#ffca28" }}>Ganti Paket</Button>
              </Box>
            )}
            {tabValue === 1 && (
              <Box sx={{ padding: 2 }}>
                <Typography variant="h6">Riwayat Berlangganan</Typography>
                {/* Add subscription history details here */}
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
