import { ThemeProvider } from "@emotion/react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Theme from "../../../../theme/Theme";
import bannerBg from '/images/banner-bg.png';
import logo from '/images/logo.png';


const useStyles = makeStyles((theme) => ({
  banner: {
    position: 'relative',
    backgroundImage: `url(${bannerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '200px',
    height: 'auto',
    marginBottom: '20px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginTop: '10px',
  },
  button: {
    marginTop: '30px',
    padding: '10px 20px',
    backgroundColor: '#ffc107',
    color: '#000',
    '&:hover': {
      backgroundColor: '#ffca28',
    },
  },
}));

const Jumbotron = () => {
  const phoneNumber = "1234567890";
  const message = "Hello, I would like to chat!";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  const classes = useStyles();

  return (
    <Box className={classes.banner}>
      <img src={logo} alt="Logo" className={classes.logo} />
      <Typography className={classes.title}>
        With Police Course, Everything Is Easier
      </Typography>
      <Typography className={classes.subtitle}>
        Police Course merupakan bimbingan belajar untuk persiapan tes masuk anggota polri yang lengkap.
      </Typography>
      <Button variant="contained" className={classes.button}>
        Daftar Sekarang
      </Button>
    </Box>
  );

};

export default Jumbotron;

