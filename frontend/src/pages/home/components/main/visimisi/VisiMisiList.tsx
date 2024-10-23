// src/TestimonialList.tsx
import React from "react";
// import { Grid, Container, Typography, Box } from "@mui/material";
import { Container, Grid, Typography, Button, Card, CardContent, TextField, MenuItem, Box } from '@mui/material';

// import Fitur from "./Fitur";

interface FiturData {
  name: string;
  message: string;
  avatarUrl: string;
}

// const fitur: FiturData[] = [
//   {
//     name: "John Doe",
//     message: "This is a great product! I highly recommend it.",
//     avatarUrl: "https://cdn0-production-images-kly.akamaized.net/0Ba7VKYlZbIvRHZ9fDYasaw7Sck=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4119862/original/065226400_1660189533-i_m_Groot.jpg",
//   },
//   {
//     name: "Jane Smith",
//     message: "Amazing service and support. Would use again.",
//     avatarUrl: "https://cdn0-production-images-kly.akamaized.net/0Ba7VKYlZbIvRHZ9fDYasaw7Sck=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4119862/original/065226400_1660189533-i_m_Groot.jpg",
//   },
//   {
//     name: "John Doe",
//     message: "This is a great product! I highly recommend it.",
//     avatarUrl: "https://cdn0-production-images-kly.akamaized.net/0Ba7VKYlZbIvRHZ9fDYasaw7Sck=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4119862/original/065226400_1660189533-i_m_Groot.jpg",
//   },
//   {
//     name: "Jane Smith",
//     message: "Amazing service and support. Would use again.",
//     avatarUrl: "https://cdn0-production-images-kly.akamaized.net/0Ba7VKYlZbIvRHZ9fDYasaw7Sck=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4119862/original/065226400_1660189533-i_m_Groot.jpg",
//   },
//   {
//     name: "John Doe",
//     message: "This is a great product! I highly recommend it.",
//     avatarUrl: "https://cdn0-production-images-kly.akamaized.net/0Ba7VKYlZbIvRHZ9fDYasaw7Sck=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4119862/original/065226400_1660189533-i_m_Groot.jpg",
//   },
//   {
//     name: "Jane Smith",
//     message: "Amazing service and support. Would use again.",
//     avatarUrl: "https://cdn0-production-images-kly.akamaized.net/0Ba7VKYlZbIvRHZ9fDYasaw7Sck=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4119862/original/065226400_1660189533-i_m_Groot.jpg",
//   }
// ];

const VisiMisiList: React.FC = () => {
  return (
    <Container
      sx={{
        paddingY: "16px",
      }}
    >
      {/* <Typography variant="h4" component="h2" gutterBottom align="center">
        Testimoni
      </Typography>
      <Container
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "32px",
        }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ textAlign: "center", width: "400px", paddingRight: "64px" }}
        >
          sub title1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
      </Container> */}

      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ bgcolor: '#FFEA00' }}>
            <CardContent>
              <Typography variant="h4" align="center">
                Visi
              </Typography>
              <Typography variant="body1" align="center">
                Membantu anak muda di seluruh Indonesia dalam mewujudkan mimpi menjadi anggota Polri.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ bgcolor: '#FFEA00' }}>
            <CardContent>
              <Typography variant="h4" align="center">
                Misi
              </Typography>
              <Typography variant="body1" align="center">
                Mempersiapkan anak muda menghadapi tes seleksi yang meliputi psikologi, akademik, dan jasmani.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* <Grid container spacing={4} justifyContent="center">
        {fitur.map((fitur, index) => (
          <Grid item key={index}>
            <Fitur
              name={fitur.name}
              message={fitur.message}
              avatarUrl={fitur.avatarUrl}
            />
          </Grid>
        ))}
      </Grid> */}
    </Container>
  );
};

export default VisiMisiList;
