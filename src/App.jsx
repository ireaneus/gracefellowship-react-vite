import { useState } from 'react'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import { GraceBar, Footer, Sidebar } from './components';
import './css/App.css'
import HomePage from './Pages/HomePage';

export default function App() {
  const [mode,setMode] = useState('light');

  const myTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#57707d',
      },
    },
  });

  return (
    <ThemeProvider theme={myTheme}>
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
        <GraceBar setMode={setMode} mode={mode}/>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar setMode={setMode} mode={mode} />
        <HomePage />
      </Stack>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};


