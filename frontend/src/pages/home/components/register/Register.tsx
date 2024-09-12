import { useState } from "react";
import Loading from "../../../utils/LoadingBackdrop";
import ErrorAlert from "../../../utils/DialogError";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  MenuItem,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Select from "@mui/material/Select";
import {getCache, CACHE_KEY } from "../../../../cache/CacheUtils";
import { useNavigate } from 'react-router-dom';
import useAddress from "./hook/UseAddress";
import useRegister from "./hook/UseRegister";
import useToggle from "./hook/UseToggle";

const Register = () => {
  const cache = getCache(CACHE_KEY);
  const navigate = useNavigate();

  const {
    handleClickShowPassword,
    showPassword
  } = useToggle();

  const {
    province,
    city,
    subdistrict,
    cityId,
    subdistrictId,
    loadingAddress,
    handleChangeProvince,
    handleChangeCity,
    handleChangeSubDistrict
  } = useAddress();

  const {
    formValues,
    setFormValues,
    errorMessage,
    isSubmitError,
    loadingSubmit,
    isErrorShow,
    handleFormSubmit,
    setIsErrorShow,
  } = useRegister();


  setTimeout(() => {
    if (cache != null) {
      navigate("/dashboard");
    }
  }, 0);


  return (
    <div>
      <ErrorAlert
        isOpen={isErrorShow}
        message={errorMessage}
        onClose={(error) => {
          setIsErrorShow(error);
        }}
      />
      <Loading isShow={loadingAddress || loadingSubmit} />
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
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            fullName: e.target.value
                          });
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          {" "}
                          Provinsi{" "}
                        </InputLabel>
                        <Select
                          required
                          fullWidth
                          label="Provinsi"
                          name="province"
                          variant="outlined"
                          value={formValues.province}
                          onChange={e => { 
                            const value = e.target.value; 
                            setFormValues({
                              ...formValues,
                              province: value
                            });
                            handleChangeProvince(value)
                          }}
                        >
                          <MenuItem value="" disabled>
                            Select
                          </MenuItem>
                          {province.map((option) => (
                            <MenuItem
                              key={option.id}
                              value={option.id + "|" + option.name}
                            >
                              {option.name}
                            </MenuItem>
                          ))}
                        </Select> 
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Kota/Kabupaten
                        </InputLabel>
                        <Select
                          required
                          fullWidth
                          label="Kabupaten/Kota"
                          name="city"
                          id={cityId}
                          value={formValues.city}
                          onChange={e => { 
                            const value = e.target.value; 
                            setFormValues({
                              ...formValues,
                              city: value
                            });
                            handleChangeCity(value);
                          }}
                        >
                          <MenuItem value="" disabled>
                            Select
                          </MenuItem>
                          {city?.map((option) => (
                            <MenuItem
                              key={option.id}
                              value={option.id + "|" + option.name}
                            >
                              {option.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Kecamatan
                        </InputLabel>
                        <Select
                          required
                          fullWidth
                          label="Kecamatan"
                          name="district"
                          id={subdistrictId}
                          value={formValues.district}
                          onChange={ e => { 
                            const value = e.target.value; 
                            setFormValues({
                              ...formValues,
                              district: value
                            });
                            handleChangeSubDistrict(value)
                          }}
                        >
                          <MenuItem value="" disabled>
                            Select
                          </MenuItem>
                          {subdistrict.map((option) => (
                            <MenuItem
                              key={option.id}
                              value={option.id + "|" + option.name}
                            >
                              {option.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Alamat"
                        name="address"
                        value={formValues.address}
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            address: e.target.value
                          });
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Username"
                        name="username"
                        value={formValues.username}
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            username: e.target.value
                          });
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        value={formValues.email}
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            email: e.target.value
                          });
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        type="tel"
                        label="No Whatsapp Aktif"
                        name="whatsapp"
                        value={formValues.whatsapp}
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            whatsapp: e.target.value
                          });
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        error= {isSubmitError}
                        required
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        name="password"
                        value={formValues.password}
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            password: e.target.value
                          });
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
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
                        error = {isSubmitError}
                        required
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        label="Ulangi Password"
                        name="confirmPassword"
                        value={formValues.confirmPassword}
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            confirmPassword: e.target.value
                          });
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
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
                    {/* <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Kode Referral (Opsional)"
                        name="referralCode"
                        value={formValues.referralCode}
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            referralCode: e.target.value
                          });
                        }}
                      />
                    </Grid> */}
                    {/* <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        select
                        label="Pilih Paket"
                        name="selectedPackage"
                        value={formValues.selectedPackage}
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            selectedPackage: e.target.value
                          });
                        }}
                      >
                         <MenuItem value="" disabled>
                            Select
                          </MenuItem>
                      </TextField>
                    </Grid> */}
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleFormSubmit}
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
    </div>
  );
};

export default Register;
