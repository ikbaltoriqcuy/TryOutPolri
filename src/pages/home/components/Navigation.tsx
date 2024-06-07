import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, ThemeProvider, Typography, Toolbar } from "@mui/material";

const Navigation = () => {
   const labels: string[] = ["Home", "About", "Contact"] 

  return (
    <Box
      sx={{
        margin: 0,
        top: 0,
        left: 0,
        width: "100vw",
      }}
    >
      <AppBar elevation={0}>
        <Toolbar
          sx={{
            display:"flex", 
            justifyContent: "space-between",
            paddingLeft: "64px",
            background: "white",
          }}>
          <Box>
            <Typography variant="h6" color={"black"}>
              TryOut
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "200px",
              marginRight: "32px",
              justifyContent: "space-between",
            }}
           >
            { labels.map(label => <LabelLink label={label} key={label}/>) } 
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const LabelLink = (props: {label: string}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffca28",
        borderRadius: "10px",
        paddingX: "10px",
        paddingY: "5px",
        marginX: "5px",
        display: "inline-block",
      }}
    >
      <Typography variant="subtitle1" color={"black"} sx={{
        "&:hover": { color: "white" }
      }}>
        { props.label }
      </Typography>
    </Box>
  );
};

export default Navigation;
