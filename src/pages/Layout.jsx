import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  createTheme,
  ThemeProvider,
} from '@mui/material/';
import ChurchMenu from '../components/ChurchMenu';

export default function Layout() {

  const [mode,setMode] = useState('light');

  const myTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#57707d',
      },
    },
  });

  const DATEOPTIONS = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const DisplayDate = new Date().toLocaleDateString('en-US', DATEOPTIONS);

  return (
    <ThemeProvider theme={myTheme}>
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
        <AppBar position="sticky">
          <Toolbar variant="dense">
            <ChurchMenu setMode={setMode} mode={mode} />
            <h6 className="w3-wide w3-auto white">
              Grace Fellowship of Mountain Home Idaho
            </h6>
            <Box
              className="fancy"
              sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}
            >
              {DisplayDate}
            </Box>
          </Toolbar>
        </AppBar>

        <Outlet />
      </Box>
    </ThemeProvider>
  );
};