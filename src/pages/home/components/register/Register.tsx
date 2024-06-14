import React from "react";
import {
  Container,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  MenuItem,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const provinces = [
  { value: "province1", label: "Province 1" },
  { value: "province2", label: "Province 2" },
];

const cities = [
  { value: "city1", label: "City 1" },
  { value: "city2", label: "City 2" },
];

const districts = [
  { value: "district1", label: "District 1" },
  { value: "district2", label: "District 2" },
];

const packages = [
  { value: "package1", label: "Package 1" },
  { value: "package2", label: "Package 2" },
];

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    fullName: "",
    province: "",
    city: "",
    district: "",
    address: "",
    username: "",
    email: "",
    whatsapp: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
    selectedPackage: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ width: "100vw" }}>
      <Grid component="main" maxWidth="xs" container spacing={2}>
        <Grid item xs={14} md={6} sx={{ backgroundColor: "#white" }}>
          <Box
            sx={{
              height: "50vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "35vw",
                marginTop: "320px",
              }}
              alt="The house from the offer."
              src="/images/register_illustration.jpg"
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              maxWidth="sm"
              sx={{
                p: 3,
                borderRadius: 2,
                margin: "72px",
                background: "white",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Registrasi
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Pendaftaran Pengguna Baru
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Nama Lengkap"
                      name="fullName"
                      value={formValues.fullName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      select
                      label="Provinsi"
                      name="province"
                      value={formValues.province}
                      onChange={handleChange}
                    >
                      {provinces.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      select
                      label="Kabupaten/Kota"
                      name="city"
                      value={formValues.city}
                      onChange={handleChange}
                    >
                      {cities.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      select
                      label="Kecamatan"
                      name="district"
                      value={formValues.district}
                      onChange={handleChange}
                    >
                      {districts.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Alamat"
                      name="address"
                      value={formValues.address}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Username"
                      name="username"
                      value={formValues.username}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="No Whatsapp Aktif"
                      name="whatsapp"
                      value={formValues.whatsapp}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      label="Password"
                      name="password"
                      value={formValues.password}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      label="Ulangi Password"
                      name="confirmPassword"
                      value={formValues.confirmPassword}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Kode Referral (Opsional)"
                      name="referralCode"
                      value={formValues.referralCode}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      select
                      label="Pilih Paket"
                      name="selectedPackage"
                      value={formValues.selectedPackage}
                      onChange={handleChange}
                    >
                      {packages.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, background: "#f5cb42", boxShadow: "none" }}
                >
                  Daftar
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
