import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { Link } from "react-router-dom"; // Import Link

const Jumbotron = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/banner-bg.png)', // Gambar latar belakang utama
        backgroundPosition: 'right bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: { xs: '80px 30px 120px 30px', md: '100px 0 120px 0' },
        position: 'relative',
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                position: 'relative',
                backgroundImage: 'url(/images/banner-item-01.jpg)', // Gambar yang ingin digunakan
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '23px',
                padding: { xs: '80px 30px 120px 30px', md: '100px 60px 140px 60px' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              {/* Overlay untuk meningkatkan kontras teks */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Warna hitam dengan opacity
                  borderRadius: '23px', // Pastikan overlay memiliki sudut yang sama
                }}
              />
               <Box
                component="img"
                src="/images/logo.png" // Ganti dengan path logo Anda
                alt="Logo"
                sx={{
                  maxWidth: '150px', // Sesuaikan ukuran logo
                  marginBottom: '50px',
                  position: 'relative', // Agar logo tidak terhalang oleh overlay
                  zIndex: 1, // Pastikan logo berada di atas overlay
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '36px', md: '48px' },
                  lineHeight: { xs: '50px', md: '70px' },
                  color: '#fff',
                  marginBottom: '40px',
                  position: 'relative', // Agar teks tidak terhalang oleh overlay
                  zIndex: 1, // Pastikan teks berada di atas overlay
                }}
              >
                With Police Course, Everything Is Easier
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#fff',
                  width: { xs: '100%', md: '65%' },
                  position: 'relative', // Agar teks tidak terhalang oleh overlay
                  zIndex: 1, // Pastikan teks berada di atas overlay
                }}
              >
                Police Course merupakan bimbingan belajar untuk persiapan tes masuk menjadi anggota polri yang sangat lengkap sesuai dengan standar tes sesungguhnya yang berkualitas untuk meningkatkan peluang lulus dan dapat diikuti oleh seluruh anak muda di Indonesia yang ingin mewujudkan mimpi menjadi Anggota Polri.
              </Typography>
              <Box
                sx={{
                  display: 'inline-block',
                  marginTop: '50px',
                  textAlign: { xs: 'center', md: 'left' },
                  position: 'relative', // Agar teks tidak terhalang oleh overlay
                  zIndex: 1, // Pastikan teks berada di atas overlay
                }}
              >
              <Link to="http://localhost:5173/Login" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#fff',
                    color: '#333',
                    borderRadius: '25px',
                    padding: '0px 25px',
                    height: '50px',
                    lineHeight: '50px',
                    fontWeight: 500,
                  }}
                >
                  Daftar Sekarang
                </Button>
              </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Jumbotron;
