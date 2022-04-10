import {alpha, createTheme} from '@mui/material';


export const theme = createTheme({
    typography: {
        fontFamily: 'Roboto',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
        },
    },
    palette: {
        primary: {
            main: '#BE8022',
            light: alpha("#BE8022", 0.3),
            contrastText: 'white',
        },
        secondary: {
            main: '#A6A6A6'
        }
    },
});