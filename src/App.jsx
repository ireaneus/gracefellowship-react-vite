import { useState } from 'react'
import { Box, createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import GraceBar from './components/Appbar';

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
      </Box>
    </ThemeProvider>
  )
};


