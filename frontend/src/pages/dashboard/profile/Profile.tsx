import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import { getCache, CACHE_KEY } from "../../../cache/CacheUtils";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../../api/user.api";

const Profile: React.FC = () => {
  const cache = getCache(CACHE_KEY);
  const navigate = useNavigate();

  const gotoEditProfile = () => {
    navigate("/dashboard/edit-profile");
  };

  const gotoEditPassword = () => {
    navigate("/dashboard/edit-password");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box 
      sx={{
        p: 3,
        borderRadius: "8px",
        padding: "24px",
        backgroundColor: "#fff",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
      }}>
        <Typography variant="h6" fontWeight="bold" sx={{paddingBottom: "24px"}}>
            Data Diri
          </Typography>
        <PersonalInfo cache ={cache} />
        <Box sx={{ paddingTop: "24px"}}/>
        <AddressInfo cache={cache}/>
        <Button
          variant="contained"
          sx={{ marginTop: 2, backgroundColor: "#f1db25", boxShadow: "none" }}
          onClick={gotoEditProfile}
        > 
          Ubah Profil
        </Button>
        <Button
          variant="contained"
          sx={{
            marginTop: 2,
            backgroundColor: "#f1db25",
            marginLeft: 2,
            boxShadow: "none",
          }}
          onClick={gotoEditPassword}
        >
          Ubah Password
        </Button>
      
      </Box>

    </Box>
  );
};

const PersonalInfo = (props: {cache: UserData | null}) => {
  return (
    <Box
        sx={{
          p: 3,
          borderRadius: "8px",
          border: "2px solid",
          borderColor: "#F1F1F1",
          padding: "24px",
          backgroundColor: "#fff",
          maxWidth: "600px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Informasi Personal
          </Typography>
        </Box>

        <Divider sx={{ marginY: "16px" }} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="textSecondary">
              Nama Lengkap
            </Typography>
            <Typography variant="body1">{props.cache?.name}</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="textSecondary">
              Username
            </Typography>
            <Typography variant="body1">{props.cache?.username}</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="textSecondary">
              Email 
            </Typography>
            <Typography variant="body1">{props.cache?.email}</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="textSecondary">
              No. HP
            </Typography>
            <Typography variant="body1">{props.cache?.phone}</Typography>
          </Grid>
        </Grid>
      </Box>
  )
}


const AddressInfo = (props: {cache: UserData | null}) => {
  return (
    <Box
        sx={{
          p: 3,
          borderRadius: "8px",
          border: "2px solid",
          borderColor: "#F1F1F1",
          padding: "24px",
          backgroundColor: "#fff",
          maxWidth: "600px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Informasi Alamat
          </Typography>
        </Box>

        <Divider sx={{ marginY: "16px" }} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="textSecondary">
              Alamat
            </Typography>
            <Typography variant="body1">{props.cache?.address}</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="textSecondary">
              Provinsi
            </Typography>
            <Typography variant="body1">{props.cache?.province?.split("|")[1] || ""}</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="textSecondary">
              Kota 
            </Typography>
            <Typography variant="body1">{props.cache?.city?.split("|")[1] || ""}</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="textSecondary">
              Kecamatan
            </Typography>
            <Typography variant="body1">{props.cache?.subdistrict?.split("|")[1] || ""}</Typography>
          </Grid>
        </Grid>
      </Box>
  )
}


const Packet = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          borderRadius: "16px",
          padding: 2,
          height: "80vh",
          background: "white",
        }}
      >
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Berlangganan" />
          <Tab label="Riwayat Berlangganan" />
        </Tabs>
        {tabValue === 0 && (
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">Status</Typography>
            <Typography variant="body2" sx={{ color: "#2F4F4F" }}>
              Aktif
            </Typography>

            <Divider sx={{ marginTop: 2 }} />

            <Typography variant="body1" sx={{ marginTop: 2 }}>
              Paket Berlangganan
            </Typography>
            <Typography variant="body2" sx={{ color: "#2F4F4F" }}>
              LEVEL 4
            </Typography>

            <Divider sx={{ marginTop: 2 }} />

            <Typography variant="body1" sx={{ marginTop: 2 }}>
              Masa aktif sampai dengan
            </Typography>
            <Typography variant="body2" sx={{ color: "#2F4F4F" }}>
              31 July 2024 16:17:28 WIB
            </Typography>

            <Divider sx={{ marginTop: 2 }} />

            <Typography variant="body1" sx={{ marginTop: 2 }}>
              Sisa quota tes kecermatan harian
            </Typography>
            <Typography variant="body2" sx={{ color: "#2F4F4F" }}>
              8
            </Typography>

            <Divider sx={{ marginTop: 2 }} />

            <Button
              variant="contained"
              sx={{ marginTop: 2, backgroundColor: "#f1db25" }}
            >
              Ganti Paket
            </Button>
          </Box>
        )}
        {tabValue === 1 && (
          <Box sx={{ padding: 2 }}>
            <Typography variant="h6">Riwayat Berlangganan</Typography>
            {/* Add subscription history details here */}
          </Box>
        )}
      </Box>
    </Grid>
  );
};

export default Profile;
