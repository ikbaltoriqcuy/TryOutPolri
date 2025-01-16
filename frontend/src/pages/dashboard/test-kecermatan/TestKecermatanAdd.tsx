import React, { useState, useRef } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  IconButton,
  Divider,
  Link,
  Popover,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SettingsIcon from "@mui/icons-material/Settings";
import TestKeyboard from "./TestKeyboard";
import { addExercise } from "../../../api/execersie.api";
import { useNavigate } from 'react-router-dom';
import { getCache, CACHE_KEY } from "../../../cache/CacheUtils";
import LoadingBackdrop from "../../utils/LoadingBackdrop";

const TestKecermatanAdd: React.FC = () => {
  const cache = getCache(CACHE_KEY);
  const [testName, setTestName] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const [errorMessages, setErrorMessages] = useState<string[]>(Array(10).fill(""));
  const questions = Array.from({ length: 10 }, (_, index) => `Soal ${index + 1}`);
  const [anchorEls, setAnchorEls] = useState<{ [key: number]: HTMLElement | null }>({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const generateUniqueRandomValue = (length: number) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789αβγδεζηθικλμνξοπρςστυφχψωΓΔΘΛΞΠΣΦΨΩ";
    let availableCharacters = characters.split("");
    let result = "";
    if (length > availableCharacters.length) {
      throw new Error("Requested length exceeds the number of unique characters available.");
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableCharacters.length);
      result += availableCharacters[randomIndex];
      availableCharacters.splice(randomIndex, 1);
    }
    return result;
  };

  const automaticQuestion = () => {
    let newItems: string[] = [];
    for (let i = 0; i < 10; i++) {
      const newItem = generateUniqueRandomValue(5);
      newItems.push(newItem);
    }
    setItems(newItems);
    setErrorMessages(Array(10).fill(""));
  };

  const reset = () => {
    setItems(Array(10).fill(""));
    setErrorMessages(Array(10).fill(""));
  };

  const textFieldRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const handleOpenKeyboard = (index: number) => {
    const textFieldEl = textFieldRefs.current[index];
    setAnchorEls((prev) => ({ ...prev, [index]: textFieldEl }));
  };

  const handleCloseKeyboard = (index: number) => {
    setAnchorEls((prev) => ({ ...prev, [index]: null }));
  };

  const handleInputChange = (value: string, index: number) => {
    const newItems = [...items];
    if (value.length <= 5) newItems[index] = value;
    
    let errorMessage = "";
    if (value.length < 5) errorMessage = "Input harus berisi 5 karakter.";
    else if (new Set(value).size !== value.length) errorMessage = "Karakter tidak boleh duplikat.";
    else errorMessage = "Input Benar";

    setItems(newItems);
    setErrorMessages((prev) => {
      const newErrors = [...prev];
      newErrors[index] = errorMessage;
      return newErrors;
    });
  };

  const isFormValid = () => items.every((item) => item.length === 5 && new Set(item).size === item.length);

  const handleSubmit = async () => {
    if (!testName.trim()) {
      alert("Nama test harus diisi.");
      return;
    }

    if (isFormValid()) {
      setLoading(true);
      try {
        await addExercise(testName, items, cache?.email as string);
        setSnackbarMessage("Test created successfully!");
        setOpenSnackbar(true);
      } catch (error) {
        console.error("Error submitting exercise:", error);
        setSnackbarMessage("Failed to create test. Please try again.");
        setOpenSnackbar(true);
      } finally {
        setLoading(false);
        setTimeout(() => navigate("/dashboard/test_kecermatan"), 2000);
      }
    } else {
      alert("Semua kolom harus diisi dengan benar.");
    }
  };

  const handleSnackbarClose = () => setOpenSnackbar(false);

  return (
    <Box>
      {/* LoadingBackdrop will be shown when loading state is true */}
      <LoadingBackdrop isShow={loading} />

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
        <Link href="/dashboard/test_kecermatan">
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
            sx={{ backgroundColor: "#f1db25", boxShadow: "none" }}
            disabled={loading} // Disable button during loading
          >
            Kembali
          </Button>
        </Link>

        <Divider sx={{ margin: "16px 0" }} />

        <Typography variant="body2" component="div" sx={{ display: "flex", alignItems: "center" }}>
          Nama Test
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Masukkan nama test"
          value={testName}
          onChange={(e) => setTestName(e.target.value)}
          sx={{ mb: 3 }}
          InputProps={{ style: { height: "40px" } }}
          disabled={loading} // Disable input during loading
        />

        <Grid container spacing={1}>
          {questions.map((question, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" component="div" sx={{ display: "flex", alignItems: "center" }}>
                  {question}
                  <IconButton
                    size="small"
                    sx={{ ml: 1 }}
                    onClick={() => handleOpenKeyboard(index)}
                    disabled={loading} // Disable button during loading
                  >
                    <SettingsIcon />
                  </IconButton>
                </Typography>

                <Box ref={(el) => (textFieldRefs.current[index] = el)}>
                  <TextField
                    error={errorMessages[index] !== "Input Benar" && errorMessages[index] !== ""}
                    helperText={errorMessages[index] !== "Input Benar" ? errorMessages[index] : ""}
                    fullWidth
                    variant="outlined"
                    placeholder="Ketik maksimal 5 nilai angka, huruf, dan simbol. Nilai bisa digabung."
                    value={items[index]}
                    onChange={(e) => handleInputChange(e.target.value, index)}
                    inputProps={{ maxLength: 5 }}
                    InputProps={{ style: { height: "40px" } }}
                    disabled={loading} // Disable input during loading
                  />
                </Box>

                <Popover
                  open={Boolean(anchorEls[index])}
                  anchorEl={anchorEls[index]}
                  onClose={() => handleCloseKeyboard(index)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <TestKeyboard
                    onCharacterClick={(data) => {
                      const newItems = [...items];
                      let newData = newItems[index] ? newItems[index] + data : data;
                      handleInputChange(newData, index);
                    }}
                    onCharacterDelete={() => {
                      const newItems = [...items];
                      const newData = newItems[index] ? newItems[index].slice(0, -1) : "";
                      handleInputChange(newData, index);
                    }}
                    onFinish={() => handleCloseKeyboard(index)}
                  />
                </Popover>
              </Grid>
              {index % 2 !== 0 && (
                <Grid item xs={12}>
                  <Divider sx={{ my: 1 }} />
                </Grid>
              )}
            </React.Fragment>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
          <Button
            variant="outlined"
            sx={{ mr: 1, borderColor: "#f1db25", color: "#f1db25" }}
            onClick={reset}
            disabled={loading} // Disable button during loading
          >
            Reset
          </Button>
          <Button
            variant="outlined"
            sx={{ mr: 1, borderColor: "#f1db25", color: "#f1db25" }}
            onClick={automaticQuestion}
            disabled={loading} // Disable button during loading
          >
            Soal otomatis
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#f1db25", cursor: isFormValid() ? "pointer" : "not-allowed" }}
            onClick={handleSubmit}
            disabled={!isFormValid() || loading} // Disable button during loading
          >
            {loading ? <CircularProgress size={24} color="primary" /> : "Buat Test"}
          </Button>
        </Box>
      </Box>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarMessage.includes("successfully") ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default TestKecermatanAdd;
