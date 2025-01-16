import React, { useEffect, useState } from "react";
import Loading from "../../utils/LoadingBackdrop";
import ErrorAlert from "../../utils/DialogError";
import { useParams } from "react-router-dom";
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
import {
  getExercisesLogs,
  updateExerciseLogs,
} from "../../../api/execersie.api"; 

import {
  UpdatePacketPurchased,
  updateQuotaPacketPurchased,
} from "../../../api/payment.api"; 

import { getCache, updateCache, CACHE_KEY } from "../../../cache/CacheUtils";


const optionData = ["A", "B", "C", "D", "E"];

const symbolsData = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const answerSymbol = [
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
  { id_logs: 0, totalAnswer: 0, totalCorrect: 0, totalIncorrect: 0 },
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
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorShow, setIsErrorShow] = useState(false);
  const [testFlag, setTestFlag] = useState<number>(0);
  const [phase, setPhase] = useState<number>(0);
  const [exerciseLogs, setExerciseLogs] = useState<any>(null);
  const navigate = useNavigate();

  const { idTest } = useParams<{ idTest: string }>();

  useEffect(() => {
    const fetchExerciseLogs = async () => {
      setLoading(true);
      try {
        if (idTest) {
          const logs = await getExercisesLogs(Number(idTest));
          setIsErrorShow(false);
          logs.data.map((log, index) => {
            const charArray = log.question.split("");

            if (index < symbolsData.length) {
              symbolsData[index] = charArray;
            } else {
              symbolsData.push(charArray);
            }
            answerSymbol[index].id_logs = log.log_id;
          });
          setExerciseLogs(logs.data);
        }
      } catch (error) {
        console.error("Error fetching exercise logs:", error);
        setErrorMessage("Error fetching exercise logs , please reload");
        setIsErrorShow(true);
      } finally {
        setLoading(false);
      }
    };

    fetchExerciseLogs();
  }, [idTest]); // Only run when idTest changes

  const handlePhaseChange = () => {
    setPhase((prevPhase) => prevPhase + 1);
    setTestFlag(1);

    if (phase >= 9) {
      setTestFlag(3);
    }
  };

  return (
    <>
      {" "}
      <div>
        <ErrorAlert
          isOpen={isErrorShow}
          message={errorMessage}
          onClose={(error) => {
            setIsErrorShow(error);
          }}
        />
        <Loading isShow={loading} />
        {testFlag === 0 && <StartTest onStart={() => setTestFlag(1)} />}
        {testFlag === 1 && (
          <CountdownPreparation onFinish={() => setTestFlag(2)} />
        )}
        {testFlag === 2 && (
          <TestDoing
            phase={phase}
            symbols={symbolsData[phase]}
            onPhaseChange={handlePhaseChange}
          />
        )}
        {testFlag === 3 && <TrialTestComplete />}
      </div>
    </>
  );
};

interface TestDoingProps {
  phase: number;
  symbols: String[];
  onPhaseChange: () => void;
}

const TrialTestComplete: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorShow, setIsErrorShow] = useState(false);
  const cache = getCache(CACHE_KEY);

  const navigate = useNavigate();

  console.log(answerSymbol);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const result = await updateExerciseLogs(answerSymbol);
      
      if (cache?.current_quota != undefined) {
        const quota = cache?.current_quota   - 1;
        const updateQuota = {
          data: {
            user_id : cache?.user_id || 0, 
            current_quota: quota,
          }
        }
        const resultUpdateQuota = await updateQuotaPacketPurchased(updateQuota);
        cache.current_quota = cache.current_quota - 1;
        updateCache(CACHE_KEY, cache)
      }
      setIsErrorShow(false);
      navigate("/dashboard/test_kecermatan");
    } catch (error: any) {
      setErrorMessage(error.error || "Login failed");
      setIsErrorShow(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ErrorAlert
        isOpen={isErrorShow}
        message={errorMessage}
        onClose={(error) => {
          setIsErrorShow(error);
        }}
      />
      <Loading isShow={loading} />
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
            Test Sudah selsai
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Apakah kamu mau submit hasil test kamu?
          </Typography>
          <Box mt={3} display="flex" justifyContent="center" gap={2}>
            <Button
              variant="contained"
              sx={{ bgcolor: "#0A2A66", color: "#FFF", px: 4 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

const TestDoing: React.FC<TestDoingProps> = ({
  phase,
  symbols,
  onPhaseChange,
}) => {
  const [count, setCount] = useState<number>(60);
  const [clicked, setClicked] = useState(false);
  const [randomizeSymbol, setRandomizeSymbol] = useState<String[]>(
    shuffleArray(symbols)
  );

  const handleClick = (index: number) => {
    const missingItems = symbolsData[phase].filter(
      (item) => !randomizeSymbol.slice(0, 4).includes(item)
    );
    const answer = symbolsData[phase];

    answerSymbol[phase].totalAnswer += 1;

    if (answer[index] == missingItems.join("")) {
      console.log("benar");
      answerSymbol[phase].totalCorrect += 1;
    } else {
      console.log("salah");
      answerSymbol[phase].totalIncorrect += 1;
    }

    setClicked(!clicked);
    setRandomizeSymbol(shuffleArray(symbols));
  };

  useEffect(() => {
    if (count >= 1) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(timer);
    }

    if (count == 0) {
      console.log(answerSymbol[phase]);
      onPhaseChange();
    }
  }, [count]);

  return (
    <Box sx={{ height: "100vh", bgcolor: "#0D1B2A" }}>
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

      <Box sx={{ mt: 2, p: 2, borderRadius: 1 }}>
        <Grid container spacing={1} alignItems="center" justifyContent="center">
          {optionData.map((item, index) => (
            <Grid item xs={2} key={index}>
              <ButtonBase
                onClick={() => handleClick(index)}
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
      return () => clearInterval(timer);
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
      }}
    >
      <Box sx={{ bgcolor: "#FFF", p: 2, borderRadius: 1, textAlign: "center" }}>
        <Typography variant="h4">Preparing...</Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          {count}
        </Typography>
      </Box>
    </Box>
  );
};

const StartTest: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "#0D1B2A",
      }}
    >
      <Box
        sx={{
          bgcolor: "#FFF",
          p: 4,
          borderRadius: 2,
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
          Welcome to the Test
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Ready to begin? Click the button below to start.
        </Typography>
        <Box mt={3}>
          <Button
            variant="contained"
            sx={{ bgcolor: "#0A2A66", color: "#FFF" }}
            onClick={onStart}
          >
            Start Test
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TestSymbol;
