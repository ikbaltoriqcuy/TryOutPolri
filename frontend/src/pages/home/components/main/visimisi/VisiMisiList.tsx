import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

const VisiMisiList = () => {
  return (
    <Box sx={{ position: 'relative', mt: 8, pb: 4 }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          width: '84%',
          height: '100%',
          bgcolor: '#f1db25',
          borderTopLeftRadius: '500px',
          borderBottomLeftRadius: '500px',
          zIndex: -1,
        }}
      />
      <Container
       sx={{
        paddingY: "16px",
        marginTop: "120px", // Menambahkan margin-top 120px
        // maxWidth: "1320px !important",
      }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} sx={{ mt: -5, mb: -5, bgcolor: '#333333', borderRadius: '40px', p: 4 }}>
            <Typography variant="h5" fontWeight="bold" color="#fff" gutterBottom>
              Visi
            </Typography>
            <Typography variant="body2" lineHeight="1.75" sx={{ color: '#fff', mt: 2 ,fontSize: '1rem' }}>
              <span style={{ color: '#fff', fontWeight: 'bold' }}>
                Membantu anak muda
              </span> di seluruh Indonesia dalam mewujudkan mimpi menjadi Anggota Polri serta dapat memiliki kemampuan dengan standar kompetensi yang sesuai dengan kebutuhan Rekrutmen Anggota Polri.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} sx={{ alignSelf: 'center' }}>
            <Box sx={{ ml: { md: 3 }, mt: { xs: 4, md: 8 } }}>
              <Typography variant="h5" fontWeight="bold" mb={2}>
                Misi
              </Typography>
              <Typography variant="body1" color="text.secondary" mt={2}>
                Mempersiapkan Anak muda di seluruh Indonesia dalam menghadapi tes masuk yang berfokus pada Psikologi, Akademik, dan Jasmani dalam rangka persiapan Rekrutmen Polri.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VisiMisiList;
