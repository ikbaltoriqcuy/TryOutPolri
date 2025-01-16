import React from 'react';
import { Box, Button, Grid, Typography, Paper } from '@mui/material';

interface GreekKeyboardProps {
  onCharacterClick: (character: string) => void;
  onCharacterDelete: () => void;
  onFinish: () => void;
}


const GreekKeyboard: React.FC<GreekKeyboardProps> = ({ onCharacterClick, onCharacterDelete, onFinish }) => {
    const characters = [
        '\u03B1', // α
        '\u03B2', // β
        '\u03B3', // γ
        '\u03B4', // δ
        '\u03B5', // ε
        '\u03B6', // ζ
        '\u03B7', // η
        '\u03B8', // θ
        '\u03B9', // ι
        '\u03BA', // κ
        '\u03BB', // λ
        '\u03BC', // μ
        '\u03BD', // ν
        '\u03BE', // ξ
        '\u03BF', // ο
        '\u03C0', // π
        '\u03C1', // ρ
        '\u03C2', // ς
        '\u03C3', // σ
        '\u03C4', // τ
        '\u03C5', // υ
        '\u03C6', // φ
        '\u03C7', // χ
        '\u03C8', // ψ
        '\u03C9', // ω
        '\u0393', // Γ
        '\u0394', // Δ
        '\u0398', // Θ
        '\u039B', // Λ
        '\u039E', // Ξ
        '\u03A0', // Π
        '\u03A3', // Σ
        '\u03A6', // Φ
        '\u03A8', // Ψ
        '\u03A9'  // Ω
    ];
  return (
    <Paper
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        width: "27vw",
        padding: "18px",
        background: "black",
        textAlign: 'center',
      }}
    >
      <Grid container spacing={0.2} justifyContent="center" sx={{ background:"black"}}>
        {characters.map((char) => (
          <Grid item key={char}>
            <Button
              variant="outlined"
              sx={{
                width: 20, 
                height: 20, 
                minWidth: 20, 
                minHeight: 20,
                borderColor: '#ccc',
                borderRadius: 1,
                background: "black",
                color: "white",
                textTransform: "none"
              }}
              onClick={() => onCharacterClick(eval(`"${char}"`))}
            >
              {eval(`"${char}"`).toLowerCase()}
            </Button>
          </Grid>
        ))}
      </Grid>
      
      <Box mt={1} display="flex" justifyContent="center">
        <Button
          onClick={onCharacterDelete}
          variant="outlined"
          sx={{
            color: '#e74c3c',
            borderColor: '#e74c3c',
            marginRight: "8px",
            '&:hover': {
              backgroundColor: 'rgba(231, 76, 60, 0.1)',
            },
          }}
        >
          Hapus
        </Button>
        
        <Button
          onClick={onFinish}
          variant="contained"
          sx={{
            color: '#ffffff',
            backgroundColor: '#2c3e50',
            '&:hover': {
              backgroundColor: '#1a252f',
            },
          }}
        >
          Selesai
        </Button>
      </Box>
    </Paper>
  );
};

export default GreekKeyboard;
