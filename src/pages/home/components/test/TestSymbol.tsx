import React, { useEffect, useState } from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';

const symbols = [
  { label: 'A', symbol: 'Ɛ' },
  { label: 'B', symbol: 'Φ' },
  { label: 'C', symbol: 'Ψ' },
  { label: 'D', symbol: 'Ψ' },
  { label: 'E', symbol: 'I' },
];

const TestSymbol: React.FC = () => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <Box sx={{ marginTop: "64px", height: "80vh" }}>
      <Box sx={{ bgcolor: '#000000', p: 2, color: '#FFF' }}>
        <Typography variant="h5" align="center">
          Durasi: {formatTime(time)}
        </Typography>
      </Box>
      <Box sx={{ mt: 2, p: 2, borderRadius: 1 }}>
        <Grid container spacing={1} alignItems="center" justifyContent="center">
          {symbols.map((item, index) => (
            <Grid item xs={2} key={index}>
              <Box
                sx={{
                  bgcolor: '#FFF',
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  border: '1px solid #0A2A66',
                  borderRadius: 1,
                }}
              >
                <Typography variant="h4" component="div" sx={{ mb: 1 }}>
                  {item.symbol}
                </Typography>
                <Typography variant="h6">{item.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ mt: 2, p: 2, borderRadius: 1 }}>
        <Grid container spacing={1} alignItems="center" justifyContent="center">
          {symbols.map((item, index) => (
            <Grid item xs={2} key={index}>
              <Box
                sx={{
                  bgcolor: '#FFF',
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  border: '1px solid #0A2A66',
                  borderRadius: 1,
                }}
              >
                <Typography variant="h6">{item.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TestSymbol;
