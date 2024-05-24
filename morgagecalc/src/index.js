import {ThemeProvider} from '@mui/material/styles';
import {theme} from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import App from './App';
<React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
</React.StrictMode>