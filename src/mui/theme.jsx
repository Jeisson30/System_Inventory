import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2',
    },
    secondary: {
      main: '#FF4081',
    },
  },
  typography: {
    typography: {
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: {
          light: 300,
          regular: 400,
          medium: 500,
          semiBold: 600,
          bold: 700,
        },
      },
  },
});

export default theme;
