import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/Theme";
import Loading from "../../../utils/LoadingBackdrop";
import ErrorAlert from "../../../utils/DialogError";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import useLogin from "./hook/UseLogin";
import {getCache, CACHE_KEY } from "../../../../cache/CacheUtils";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const cache = getCache(CACHE_KEY);
  const navigate = useNavigate();


  setTimeout(() => {
    if (cache != null) {
      navigate("/dashboard");
    }
  }, 0);

  const {
    loading,
    username,
    password,
    errorMessage,
    isErrorShow,
    setUsername,
    setPassword,
    reqLogin,
    setIsErrorShow,
  } = useLogin();
  
  return (
      <div>
        <ErrorAlert isOpen={isErrorShow} message={ errorMessage }  onClose = {(error) => { setIsErrorShow(error); }}/>
        <Loading isShow={loading}/>
        <Box sx={{ width: "100vw" }}>
          <Grid component="main" maxWidth="xs" container spacing={2}>
            <Grid item xs={12} md={7} sx={{ backgroundColor: "#white" }}>
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
                  src="/images/login_illustration.png"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingY: "16px",
                  padding: "16px",
                  background: "white",
                  height: "78vh",
                }}
              >
                <Typography component="h1" variant="h5">
                  Login
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={reqLogin}
                    disabled={loading}
                    sx={{
                      mt: 3,
                      mb: 2,
                      background: "#f5cb42",
                      boxShadow: "none",
                      height: "45px",
                    }}
                  >
                    Sign In
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
  );
};

export default Login;
