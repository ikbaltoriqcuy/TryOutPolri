import React from "react";
import {
  Container,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";

const genders = [
  { value: "pria", label: "Pria" },
  { value: "wanita", label: "Wanita" },
];

const CalculatorFitness: React.FC = () => {
  const [formValues, setFormValues] = React.useState({
    gender: "",
    runDistance: "",
    pullUps: "",
    sitUps: "",
    pushUps: "",
    shuttleRun: "",
    swimming: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formValues);
  };

  return (
    <Box
      sx={{
        paddingTop: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <Grid component="main" maxWidth="xs" container spacing={2}>
        <Grid item xs={12} md={5} sx={{ backgroundColor: "#white" }}>
          <Box
            sx={{
              height: "50vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "35vw",
                marginTop: "320px",
              }}
              alt="The house from the offer."
              src="/images/calculator_fitness.jpg"
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <Box
            maxWidth="sm"
            sx={{ p: 3, borderRadius: 2, margin: "64px" }}
          >
            <Typography variant="h6" align="center" gutterBottom>
              Hitung Nilai Jasmani Polri T.A. 2024
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    select
                    label="Jenis Kelamin"
                    name="gender"
                    value={formValues.gender}
                    onChange={handleChange}
                  >
                    {genders.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Jarak Lari 12 menit (meter)"
                    name="runDistance"
                    value={formValues.runDistance}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nilai"
                    name="runDistanceValue"
                    value={formValues.runDistanceValue}
                    onChange={handleChange}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Pull UP (1 menit)"
                    name="pullUps"
                    value={formValues.pullUps}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nilai"
                    name="pullUpsValue"
                    value={formValues.pullUpsValue}
                    onChange={handleChange}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Sit UP (1 menit)"
                    name="sitUps"
                    value={formValues.sitUps}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nilai"
                    name="sitUpsValue"
                    value={formValues.sitUpsValue}
                    onChange={handleChange}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Push UP (1 menit)"
                    name="pushUps"
                    value={formValues.pushUps}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nilai"
                    name="pushUpsValue"
                    value={formValues.pushUpsValue}
                    onChange={handleChange}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Shuttle Run"
                    name="shuttleRun"
                    value={formValues.shuttleRun}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nilai"
                    name="shuttleRunValue"
                    value={formValues.shuttleRunValue}
                    onChange={handleChange}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Renang"
                    name="swimming"
                    value={formValues.swimming}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nilai"
                    name="swimmingValue"
                    value={formValues.swimmingValue}
                    onChange={handleChange}
                    disabled
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, background: "#f5cb42", boxShadow: "none" }}
              >
                Hitung
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CalculatorFitness;
