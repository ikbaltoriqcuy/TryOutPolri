import React, { useEffect, useState } from "react";
import Loading from "../../utils/LoadingBackdrop";
import ErrorAlert from "../../utils/DialogError";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  getProvince,
  getCity,
  getSubdistrict,
  Province,
  City,
  SubDistrict,
} from "../../../api/address.api";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ApiResponse } from "../../../api/response";
import { UserUpdateData, updateData, UserData } from "../../../api/user.api";
import { updateCache, getCache, CACHE_KEY } from "../../../cache/CacheUtils";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorShow, setIsErrorShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitError, setSubmitError] = useState(false);

  const [provinceId, setProvinceId] = useState("");
  const [cityId, setCityId] = useState("");
  const [subdistrictId, subDistrictId] = useState("");

  const [province, setProvince] = useState<ApiResponse<Province[]>>();
  const [city, setCity] = useState<ApiResponse<City[]>>();
  const [subdistict, setSubDistrict] = useState<ApiResponse<SubDistrict[]>>();

  const cache = getCache(CACHE_KEY);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    fullName: cache?.name || "",
    province: cache?.province || "",
    city: cache?.city || "",
    district: cache?.subdistrict || "",
    address: cache?.address || "",
    username: cache?.username || "",
    email: cache?.email || "",
    whatsapp: cache?.phone || "",
    referralCode: "",
    selectedPackage: -1,
  });

  const gotoDashboard = () => {
    navigate("/dashboard");
  };

  useEffect(()=> {
    setTimeout(() => {
      setProvinceId(formValues.province.split("|")[0]);
      setCityId(formValues.city.split("|")[0].split(".")[1]);
    }, 200);
  }, []);
  
  useEffect(() => {
    reqProvince();
  }, []);

  useEffect(() => {
    if (provinceId) {
      reqCity();
    }
  }, [provinceId]);

  useEffect(() => {
    if (cityId) {
      reqSubDistrict();
    }
  }, [cityId]);

  const submit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (
      !formValues.fullName ||
      !formValues.province ||
      !formValues.city ||
      !formValues.district ||
      !formValues.address ||
      !formValues.username ||
      !formValues.email ||
      !formValues.whatsapp
    ) {
      setIsErrorShow(true);
      setSubmitError(true);
      setErrorMessage("Tolong isi data yang kosong");
    } else {
      setIsErrorShow(false);
      setSubmitError(false);
      setErrorMessage("");
      hitUpdateData();
    }
  };

  const hitUpdateData = async () => {
    try {
      const userUpdateData: UserUpdateData = {
        name: formValues.fullName,
        place_birth: "",
        date_birth: "",
        address: formValues.address,
        city: formValues.city,
        province: formValues.province,
        subdistrict: formValues.district,
        email: formValues.email,
        username: formValues.username,
        phone: formValues.whatsapp,
        packet_id: -1,
      };

      setLoading(true);

      const result = await updateData(userUpdateData);

      const userData: UserData = {
        name: formValues.fullName,
        place_birth: "",
        date_birth: "",
        address: formValues.address,
        city: formValues.city,
        province: formValues.province,
        subdistrict: formValues.district,
        password: cache?.password || "",
        email: formValues.email,
        packet_id: -1,
        phone: formValues.whatsapp,
        username: formValues.username,
      };

      updateCache(CACHE_KEY, userData);
      gotoDashboard();
    } catch (error: any) {
      const isEmpty = error === null;
      if (!isEmpty) {
        setIsErrorShow(true);
      }
      setErrorMessage(error.error);
    } finally {
      setLoading(false);
    }
  };

  const reqProvince = async () => {
    setLoading(true);
    try {
      if (province == null) {
        const result = await getProvince();
        setProvince(result);
      }
    } catch (error: any) {
      const isEmpty = error === null;
      if (!isEmpty) {
        setIsErrorShow(true);
      }
      setErrorMessage(error.error);
    } finally {
      setLoading(false);
    }
  };

  const reqCity = async () => {
    setLoading(true);
    try {
      if (city == null) {
        const result = await getCity(provinceId);
        setCity(result);
      }
    } catch (error: any) {
      const isEmpty = error === null;
      if (!isEmpty) {
        setIsErrorShow(true);
      }
      setErrorMessage(error.error);
    } finally {
      setLoading(false);
    }
  };

  const reqSubDistrict = async () => {
    setLoading(true);
    try {
      if (subdistict == null) {
        const result = await getSubdistrict(provinceId, cityId);
        setSubDistrict(result);
      }
    } catch (error: any) {
      const isEmpty = error === null;
      if (!isEmpty) {
        setIsErrorShow(true);
      }
      setErrorMessage(error.error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeProvince = (event: SelectChangeEvent) => {
    try {
      const data = event.target.value.split("|");
      setFormValues({
        ...formValues,
        province: event.target.value,
      });
      setProvinceId(data[0]);
      setCity(undefined);
      setSubDistrict(undefined);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeCity = (event: SelectChangeEvent) => {
    try {
      const data = event.target.value.split("|");
      setFormValues({
        ...formValues,
        city: event.target.value,
      });
      const getCityId = data[0].split(".")[1];
      setCityId(getCityId);
      setSubDistrict(undefined);
    } catch (e) {}
  };

  const handleChangeSubDistrict = (event: SelectChangeEvent) => {
    try {
      const data = event.target.value.split("|");
      setFormValues({
        ...formValues,
        district: event.target.value,
      });
      subDistrictId(data[0]);
    } catch (e) {}
  };

  return (
    <Box>
      <ErrorAlert
        isOpen={isErrorShow}
        message={errorMessage}
        onClose={(error) => {
          setIsErrorShow(error);
        }}
      />
      <Loading isShow={loading} />
      <Grid component="main" container>
        <Grid item xs={12} md={10}>
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
                margin: "72px",
                background: "white",
                borderRadius: "8px",
                border: "2px solid", 
                borderColor: "#F1F1F1"
              }}
            >
              <Typography variant="h5" gutterBottom>
                Update Data
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                update data mu disini
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
                          fullName: e.target.value,
                        });
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel required id="demo-simple-select-label">
                        {" "}
                        Provinsi{" "}
                      </InputLabel>
                      <Select
                        fullWidth
                        label="Provinsi"
                        name="province"
                        variant="outlined"
                        value={formValues.province}
                        onChange={handleChangeProvince}
                        onClick={reqProvince}
                      >
                        <MenuItem value="" disabled>
                          Select
                        </MenuItem>
                        {province?.data.map((option) => (
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
                        onChange={handleChangeCity}
                        onClick={reqCity}
                      >
                        <MenuItem value="" disabled>
                          Select
                        </MenuItem>
                        {(city?.data || []).map((option) => (
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
                        onChange={handleChangeSubDistrict}
                        onClick={reqSubDistrict}
                      >
                        <MenuItem value="" disabled>
                          Select
                        </MenuItem>
                        {(subdistict?.data || []).map((option) => (
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
                          address: e.target.value,
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
                          username: e.target.value,
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
                          email: e.target.value,
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
                          whatsapp: e.target.value,
                        });
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={submit}
                  sx={{ mt: 3, background: "#f5cb42", boxShadow: "none" }}
                >
                  Update Data
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditProfile;
