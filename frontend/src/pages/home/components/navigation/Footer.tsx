import React from "react";
import { Box, Typography, Grid, IconButton, ThemeProvider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import DribbbleIcon from "@mui/icons-material/SportsBasketball";
import theme from "../../../theme/Theme";


const Footer: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "#0f1b2a", color: "#f8f8f8", py: 4, px: 10}}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Get in Touch
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Ecosystem bootstrapping learning curve lean startup disruptive.
              Marketing long tail disruptive agile development partner.
            </Typography>
            <Box sx={{ marginTop: "16px" }}>
              <IconButton
                href="https://www.instagram.com/police.course/"
                target="_blank"
                sx={{ color: "#f8f8f8" , background: "#f5cb42", borderRadius: 1}}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={{ color: "#f8f8f8", background: "#f5cb42" , borderRadius: 1, marginLeft:"4px"}}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://pinterest.com"
                target="_blank"
                sx={{ color: "#f8f8f8", background: "#f5cb42", borderRadius: 1 , marginLeft:"4px"}}
              >
                <PinterestIcon />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                sx={{ color: "#f8f8f8", background: "#f5cb42", borderRadius: 1 , marginLeft:"4px"}}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#182430",
                p: 2,
                height: "20vh",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DribbbleIcon sx={{ fontSize: 40, color: "#f8f8f8" }} />
              <Typography variant="body1" sx={{ ml: 2, color: "#f8f8f8" }}>
                dribbble.com/example
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#182430",
                p: 2,
                borderRadius: 2,
                height: "20vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EmailIcon sx={{ fontSize: 40, color: "#f8f8f8" }} />
              <Typography variant="body1" sx={{ ml: 2, color: "#f8f8f8" }}>
                contact@example.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
