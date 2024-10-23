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
    
    <Container disableGutters>
      <Box
        sx={{
          position: 'relative',
          backgroundImage: 'url("/images/bg_polri.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slight overlay for readability
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '600px',
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            With Police Course, Everything Is Easier
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            Police Course merupakan bimbingan belajar untuk persiapan tes masuk menjadi anggota Polri yang sangat lengkap sesuai dengan standar tes sesungguhnya yang berkualitas untuk meningkatkan peluang lulus dan dapat diikuti oleh seluruh anak muda di Indonesia yang ingin mewujudkan mimpi menjadi Anggota Polri.
          </Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: 3 }}>
            Daftar Sekarang
          </Button>
        </Box>
      </Box>
    </Container>    
    </ThemeProvider>
  );
};

export default Jumbotron;
