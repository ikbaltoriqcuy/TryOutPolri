import React from "react";
import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const TestKecermatanAdd: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const questions = Array.from(
    { length: 10 },
    (_, index) => `Soal ${index + 1}`
  );

  const generateRandomValue = (length: number) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result; 
  };

  const automaticQuestion = () => {
    let newItems: string[] = [];
    for (let i = 0; i < 10; i++) {
      const newItem = generateRandomValue(5);
      newItems.push(newItem);
    }
    setItems(newItems);
  }

  const reset = () => {
    setItems(Array(10).fill(""));
  }
  
  return (
    <Box>
      <Box
        maxWidth="md"
        maxHeight="md"
        sx={{
          p: 3,
          borderRadius: 2,
          margin: "32px",
          background: "white",
        }}
      >
        <Grid container spacing={2}>
          {questions.map((question, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {question}
                  <IconButton size="small" sx={{ ml: 1 }}>
                    <SettingsIcon />
                  </IconButton>
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Ketik maksimal 5 nilai angka, huruf, dan simbol. Nilai bisa digabung."
                  value={items[index]}
                  onChange={(e) => {
                    const newValue = e.target.value.toUpperCase();
                    const newItems = [...items];
                    newItems[index] = newValue;
                    setItems(newItems);
                  }}
                  inputProps={{ maxLength: 5 }}
                  InputProps={{ style: { height: "40px", }}}
                />
              </Grid>
              {index % 2 !== 0 && (
                <Grid item xs={12}>
                  <Divider sx={{ my: 2 }} />
                </Grid>
              )}
            </React.Fragment>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: 'flex-end', mt: 1 }}>
          <Button variant="outlined" sx={{ mr: 2 }} onClick={reset}>
            Reset
          </Button>
          <Button variant="outlined" sx={{ mr: 2 }} onClick={automaticQuestion}>
            Soal otomatis
          </Button>
          <Button variant="outlined" sx={{ mr: 2 }}>
            Gunakan Soal Sebelumnya?
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#f1db25" }}>
            Mulai Tes
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TestKecermatanAdd;
