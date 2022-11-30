import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import theme from './assets/theme/theme';
import Router from './Router';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <UserProvider>
          <Router />
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
