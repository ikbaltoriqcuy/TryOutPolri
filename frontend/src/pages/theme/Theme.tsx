import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto';


const Theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 700,
    },
    body1: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
    // Customize other typography variants as needed
  },
  // palette: {
  //   primary: {
  //     main: '#f5cb42"',
  //   },
  //   secondary: {
  //     main: '#000000',
  //   },
  // },
});

export default Theme;
