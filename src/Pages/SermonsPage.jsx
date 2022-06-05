import { useState } from 'react'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
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
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <SermonsBar setMode={setMode} mode={mode} />
      </Stack>
      </Box>
    </ThemeProvider>
  );
};

