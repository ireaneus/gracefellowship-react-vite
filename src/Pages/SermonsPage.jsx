import { useState } from 'react'
import { Box, createTheme, ThemeProvider } from '@mui/material'
import { GraceBar, SermonsBar} from '../components';

export default function SermonsPage() {
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
        <SermonsBar setMode={setMode} mode={mode} />
      </Box>
    </ThemeProvider>
  );
};

