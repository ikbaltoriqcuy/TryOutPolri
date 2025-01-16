import React from "react";
import { Container, Grid, Typography, Button, Card, CardContent, Box, Link } from "@mui/material";

const FiturList: React.FC = () => {
  return (
    <Container
      sx={{
        paddingY: "16px",
        marginTop: "120px", // Menambahkan margin-top 120px
        maxWidth: "1320px !important",
      }}
    >
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
          {/* Duplicate the Grid item structure for other cards */}
        {/* Ganti tombol "Read More" di sini juga */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: "#f5cb42",
              color: "#1e1e1e",
              borderRadius: "25px",
              padding: "80px 30px 50px 30px",
              marginBottom: "30px",
              marginRight: "30px",
              position: "relative",
              boxShadow: 'none',
              transition: "all 0.4s",
              overflow: "visible",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              sx={{
                width: "190px",
                height: "190px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#333333",
                borderRadius: "50%",
                position: "absolute",
                right: "-45px",
                top: "-95px",
              }}
            >
              <img src="/images/service-03.png" alt="Icon" style={{ width: "100px", height: "100px" }} />
            </Box>

            <CardContent >
              <Typography variant="h5">Tes Akademik</Typography>
              <Typography variant="body1" sx={{ marginBottom: "25px" }}>
                Tes akademik Polri merupakan bagian dari seleksi Polri untuk menilai pengetahuan calon anggota. Tes tersebut dilaksanakan dengan sistem CAT untuk mendapatkan standar minimal kompetensi dasar.
              </Typography>
              <Link href="/Login" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  sx={{
                    display: "inline-block",
                    backgroundColor: "#fff",
                    color: "#333333",
                    fontSize: "14px",
                    fontWeight: 500,
                    height: "40px",
                    lineHeight: "40px",
                    padding: "0px 25px",
                    borderRadius: "20px",
                    transition: "all 0.3s",
                    boxShadow: 'none',
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                >
                  Read More
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: "#f5cb42",
              color: "#1e1e1e",
              borderRadius: "25px",
              padding: "80px 30px 50px 30px",
              marginBottom: "30px",
              marginRight: "30px",
              position: "relative",
              transition: "all 0.4s",
              boxShadow: 'none',
              overflow: "visible",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            {/* Bulatan di kanan atas */}
            <Box
              sx={{
                width: "190px",
                height: "190px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#333333",
                borderRadius: "50%",
                position: "absolute",
                right: "-45px",
                top: "-95px",
              }}
            >
              <img src="/images/service-02.png" alt="Icon" style={{ width: "100px", height: "100px" }} />
            </Box>

            <CardContent>
              <Typography variant="h5">Kalkulator Jasmani Polri</Typography>
              <Typography variant="body1" sx={{ marginBottom: "25px" }}>
                Kalkulator ini khusus untuk menghitung nilai tes jasmani bagi calon peserta Polri. Dengan memasukkan hasil latihan fisik, kalkulator ini akan memberikan nilai yang akurat sesuai standar Polri.
              </Typography>
              <Link href="/Calculator" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  sx={{
                    display: "inline-block",
                    backgroundColor: "#fff",
                    color: "#333333",
                    fontSize: "14px",
                    fontWeight: 500,
                    height: "40px",
                    lineHeight: "40px",
                    padding: "0px 25px",
                    borderRadius: "20px",
                    boxShadow: 'none',
                    transition: "all 0.3s",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                >
                  Read More
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: "#f5cb42",
              color: "#1e1e1e",
              borderRadius: "25px",
              padding: "80px 30px 50px 30px",
              marginBottom: "30px",
              marginRight: "30px",
              position: "relative",
              transition: "all 0.4s",
              boxShadow: 'none',
              overflow: "visible",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              sx={{
                width: "190px",
                height: "190px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#333333",
                borderRadius: "50%",
                position: "absolute",
                right: "-45px",
                top: "-95px",
              }}
            >
              <img src="/images/service-01.png" alt="Icon" style={{ width: "100px", height: "100px" }} />
            </Box>

            <CardContent>
              <Typography variant="h5">Tes Kecermatan</Typography>
              <Typography variant="body1" sx={{ marginBottom: "25px" }}>
                Tes kecermatan adalah salah satu tahapan penting untuk mengikuti seleksi calon anggota Polri.
              </Typography>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  sx={{
                    display: "inline-block",
                    backgroundColor: "#fff",
                    color: "#333333",
                    fontSize: "14px",
                    fontWeight: 500,
                    height: "40px",
                    lineHeight: "40px",
                    padding: "0px 25px",
                    borderRadius: "20px",
                    boxShadow: 'none',
                    transition: "all 0.3s",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                >
                  Coming Soon
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FiturList;
