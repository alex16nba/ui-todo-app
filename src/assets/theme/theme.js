import { createTheme } from '@mui/material/styles';
import palette from './palette';

const theme = createTheme({
  palette,
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          '&:before': {
            borderColor: palette.input.border,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: palette.input.text,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: palette.input.border,
          borderRadius: '4px',
        },
      },
    },
  },
});

export default theme;
