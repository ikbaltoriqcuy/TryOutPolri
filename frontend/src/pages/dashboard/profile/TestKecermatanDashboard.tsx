import React from 'react';
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  IconButton,
  Divider
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const TestKecermatanDashboard: React.FC = () => {
  
  const questions = Array.from({ length: 10 }, (_, index) => `Soal ${index + 1}`);

  return (
    <Box sx={{ padding: 6, width: "77vw" }}>
      <Grid container spacing={2}>
        {questions.map((question, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                {question}
                <IconButton size="small" sx={{ ml: 1 }}>
                  <SettingsIcon />
                </IconButton>
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Ketik maksimal 5 nilai angka, huruf, dan simbol. Nilai bisa digabung."
                InputProps={{
                  style: {height:"40px" }
                }}
              />
            </Grid>
            {index % 2 !== 0 && <Grid item xs={12}><Divider sx={{ my: 2 }} /></Grid>}
          </React.Fragment>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
        <Button variant="outlined" sx={{ mr: 2 }}>Reset</Button>
        <Button variant="outlined" sx={{ mr: 2 }}>Soal otomatis</Button>
        <Button variant="outlined" sx={{ mr: 2 }}>Gunakan Soal Sebelumnya?</Button>
        <Button variant="contained" sx={{ backgroundColor: "#ffca28"}}>Mulai Tes</Button>
      </Box>
    </Box>
  );
};

export default TestKecermatanDashboard;
