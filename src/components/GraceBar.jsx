import * as React from 'react';
import { AppBar, Box, IconButton, Toolbar, } from '@mui/material/';
import ChurchMenu from './ChurchMenu';

export default function GraceBar({ mode, setMode }) {

const DATEOPTIONS= {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

const DisplayDate = new Date().toLocaleDateString('en-US', DATEOPTIONS);

  return (
      <AppBar position='sticky'>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          <ChurchMenu setMode={setMode} mode={mode} />
          </IconButton>
          <h6 className='w3-wide w3-auto white' >Grace Fellowship of Mountain Home Idaho</h6>
          <Box className='fancy' sx={{display:{xs: 'none', sm: 'block', md: 'block'} }} >{ DisplayDate }</Box>
        </Toolbar>
      </AppBar>
  );
};