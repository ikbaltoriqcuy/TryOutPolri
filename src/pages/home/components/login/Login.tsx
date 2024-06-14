import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme/Theme";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Grid,
} from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Dummy login logic for demonstration purposes
    if (username === "admin" && password === "password") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100vw" }}>
        <Grid
          component="main"
          maxWidth="xs"
          container
          spacing={2}>
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
                  marginTop: "320px"
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
                  sx={{ mt: 3, mb: 2, background: "#f5cb42", boxShadow: "none", height:"45px" }}
                  onClick={handleLogin}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
