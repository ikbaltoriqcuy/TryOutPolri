import { ThemeProvider } from "@emotion/react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Theme from "../../../../theme/Theme";

const Jumbotron = () => {
  const phoneNumber = "1234567890";
  const message = "Hello, I would like to chat!";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  const waClick = () => {};

  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/images/bg_polri.jpeg")',
          backgroundSize: "cover",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Grid
            container
            direction="column"
            sx={{ color: "#f5cb42", marginTop: "64px", width: "450px" }}
          >
            <Typography variant="h3">
              Program Bimbel Polri Untuk Akpol
            </Typography>
            <Typography variant="subtitle1" color={"#ffffff"} marginTop={"16px"}>
              <b>Program Bimbel Polri</b> merupakan program utama dari Bimbel
              Police Cource. Program persiapan tes seleksi ini dikhususkan untuk
              taruna.
            </Typography>
            <Typography variant="body1"></Typography>

            <Button
              variant="contained"
              color="primary"
              startIcon={<WhatsAppIcon />}
              onClick={waClick}
              sx={{
                marginTop: "16px",
                background: "#25D366"
              }}
            >
              Chat on WhatsApp
            </Button>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Jumbotron;
