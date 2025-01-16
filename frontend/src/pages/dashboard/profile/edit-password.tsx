import React, { useEffect, useState } from "react";
import Loading from "../../utils/LoadingBackdrop";
import ErrorAlert from "../../utils/DialogError";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
  Link
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { updatePassword, UserUpdatePassword } from "../../../api/user.api";
import { updateCache, getCache, CACHE_KEY } from "../../../cache/CacheUtils";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const EditPassword = () => {
  const cache = getCache(CACHE_KEY);
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorShow, setIsErrorShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitError, setSubmitError] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [showCurrentPassword, setCurrentShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [showNewPassword, setNewShowPassword] = useState(false);
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showConfirmNewPassword, setConfirmNewShowPassword] = useState(false);

  const gotoDashboard = () => {
    navigate("/dashboard");
  };

  const submit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      if (newPassword == confirmNewPassword) {
        const userUpdatePassword: UserUpdatePassword = {
          email: cache?.email || "",
          currentPassword: currentPassword,
          newPassword: newPassword,
        };
        const result = await updatePassword(userUpdatePassword);
        gotoDashboard();
      } else {
        setIsErrorShow(true);
        setErrorMessage("Konfirmasi Password tidak sama dengan Password Baru");
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
                width: "100vw",
              }}
            >
              <Link
                href="/dashboard"
                sx={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ArrowBackIcon />}
                  sx={{ backgroundColor: "#f1db25", boxShadow: "none" }}
                >
                  Kembali
                </Button>
              </Link>
            </Box>
            <Box
              maxWidth="sm"
              sx={{
                p: 3,
                margin: "72px",
                background: "white",
                borderRadius: "8px",
                border: "2px solid",
                borderColor: "#F1F1F1",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Update Password
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                update password mu disini
              </Typography>

              <Box component="form" sx={{ mt: 1 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      error={isSubmitError}
                      required
                      fullWidth
                      type={showCurrentPassword ? "text" : "password"}
                      label="Password Sekarang"
                      name="current_password"
                      value={currentPassword}
                      onChange={(e) => {
                        setCurrentPassword(e.target.value);
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={(e) => {
                                setCurrentShowPassword(!showCurrentPassword);
                              }}
                            >
                              {showCurrentPassword ? (
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

                  <Grid item xs={12} sm={8}>
                    <TextField
                      error={isSubmitError}
                      required
                      fullWidth
                      type={showNewPassword ? "text" : "password"}
                      label="Password Baru"
                      name="confirmPassword"
                      value={newPassword}
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={(e) => {
                                setNewShowPassword(!showNewPassword);
                              }}
                            >
                              {showNewPassword ? (
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
                  <Grid item xs={12} sm={8}>
                    <TextField
                      error={isSubmitError}
                      required
                      fullWidth
                      type={showConfirmNewPassword ? "text" : "password"}
                      label="Konfirmasi Password Baru"
                      name="confirmPassword"
                      value={confirmNewPassword}
                      onChange={(e) => {
                        setConfirmNewPassword(e.target.value);
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={(e) =>
                                setConfirmNewShowPassword(
                                  !showConfirmNewPassword
                                )
                              }
                            >
                              {showNewPassword ? (
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
                  <Grid item xs={12} md={8}>
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
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditPassword;
