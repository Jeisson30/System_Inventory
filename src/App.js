import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './mui/theme';
import AppRouter from './AppRouter';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppRouter />
      </div>
    </ThemeProvider> 
  );
}

export default App;
