import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  ButtonBase,
  Link,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const optionData = ["A", "B", "C", "D", "E"];

const symbolsData = [
  ["Ɛ", "Φ", "Ψ", "ψ", "I"],
  ["9", "2", "1", "8", "3"],
  ["1", "7", "0", "3", "6"],
  ["U", "R", "Q", "P", "O"],
  ["X", "V", "N", "M", "W"],
];

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array: String[]): String[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const TestSymbol: React.FC = () => {
  // condition when 0 = start , 1 = persiapan ,  2 = test running, 2 = test Completed
  const [testFlag, setTestFlag] = useState<number>(0);
  const [phase, setPhase] = useState<number>(0);

  const handlePhaseChange = () => {
    setPhase((prevPhase) => prevPhase + 1);
    setTestFlag(1);

    if (phase >= 4) {
      setTestFlag(3);
    }
  };

  return (
    <>
      {testFlag === 0 && <StartTest onStart={() => setTestFlag(1)} />}
      {testFlag === 1 && (
        <CountdownPreparation onFinish={() => setTestFlag(2)} />
      )}
      {testFlag === 2 && (
        <TestDoing
          symbols={symbolsData[phase]}
          onPhaseChange={handlePhaseChange}
        />
      )}
      {testFlag === 3 && <TrialTestComplete />}
    </>
  );
};

interface TestDoingProps {
  symbols: String[];
  onPhaseChange: () => void;
}

const TrialTestComplete: React.FC = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register"); // Navigate to the registration page
  };

  const handleCloseClick = () => {
    navigate("/"); // Navigate to the home page or any desired page
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ bgcolor: "#0D1B2A" }}
    >
      <Box
        sx={{
          bgcolor: "#FFF",
          borderRadius: 2,
          p: 4,
          width: "90%",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color="text.primary"
          gutterBottom
        >
          Trial Tes Selesai
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Ingin melanjutkan tes ini? Silahkan daftarkan diri anda di bawah ini
        </Typography>

        <Box mt={3} display="flex" justifyContent="center" gap={2}>
          <Link href="/register">
            <Button
              variant="contained"
              sx={{ bgcolor: "#0A2A66", color: "#FFF", px: 4 }}
              onClick={handleRegisterClick}
            >
              Daftar
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="outlined"
              sx={{ borderColor: "#0A2A66", color: "#0A2A66", px: 4 }}
              onClick={handleCloseClick}
            >
              Tutup
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const TestDoing: React.FC<TestDoingProps> = ({ symbols, onPhaseChange }) => {
  const [count, setCount] = useState<number>(60);
  const [clicked, setClicked] = useState(false);
  const [randomizeSymbol, setRandomizeSymbol] = useState<String[]>(
    shuffleArray(symbols)
  );

  const handleClick = () => {
    console.log("clicked");
    setClicked(!clicked);
    setRandomizeSymbol(shuffleArray(symbols));
  };

  useEffect(() => {
    if (count >= 1) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(timer); // Clean up the interval on unmount
    }

    if (count == 0) {
      onPhaseChange();
    }
  }, [count]);

  return (
    <Box sx={{ marginTop: "64px", height: "100vh", bgcolor: "#0D1B2A" }}>
      <Box sx={{ p: 2, color: "#FFF" }}>
        <Typography variant="h4" align="center">
          Durasi: {"00:00:" + String(count).padStart(2, "0")}
        </Typography>
      </Box>
      <Box sx={{ mt: 2, p: 2, borderRadius: 1 }}>
        <Grid container spacing={1} alignItems="center" justifyContent="center">
          {symbols.map((item, index) => (
            <Grid item xs={2} key={index}>
              <Box
                sx={{
                  bgcolor: "#FFF",
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  border: "1px solid #0A2A66",
                  borderRadius: 1,
                }}
              >
                <Typography variant="h4" component="div" sx={{ mb: 1 }}>
                  {item}
                </Typography>
                <Typography variant="h6">{optionData[index]}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          p: 2,
          marginLeft: "9.5%",
          marginTop: "100px",
          border: "1px solid white",
          width: "fit-content",
        }}
      >
        {randomizeSymbol.map(
          (item, index) =>
            index !== 4 && (
              <Typography
                key={index}
                sx={{ color: "white", fontSize: "2rem", marginRight: "20px" }}
              >
                {item}
              </Typography>
            )
        )}
      </Box>

      <Box onClick={handleClick} sx={{ mt: 2, p: 2, borderRadius: 1 }}>
        <Grid container spacing={1} alignItems="center" justifyContent="center">
          {optionData.map((item, index) => (
            <Grid item xs={2} key={index}>
              <ButtonBase
                onClick={handleClick}
                sx={{
                  bgcolor: "#FFF",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  border: "1px solid #0A2A66",
                  width: "100%",
                  borderRadius: 1,
                }}
              >
                <Typography variant="h6">{item}</Typography>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const CountdownPreparation: React.FC<{ onFinish: () => void }> = ({
  onFinish,
}) => {
  const [count, setCount] = useState<number>(3);

  useEffect(() => {
    if (count > 1) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(timer); // Clean up the interval on unmount
    }
    if (count == 1) {
      onFinish();
    }
  }, [count]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "#0D1B2A",
        color: "white",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Persiapan
      </Typography>
      <Typography variant="h1">{count}</Typography>
    </Box>
  );
};

const StartTest: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "#0D1B2A",
        color: "white",
      }}
    >
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Selamat Datang di Trial Tes Kecermatan
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Peserta bisa mencoba simulasi Tes Kecermatan pada halaman ini.
      </Typography>
      <Button
        onClick={onStart}
        variant="contained"
        sx={{
          bgcolor: "white",
          color: "#0D1B2A",
          "&:hover": {
            bgcolor: "#f5f5f5",
          },
        }}
      >
        Mulai Tes Kecermatan
      </Button>
    </Box>
  );
};

export default TestSymbol;
