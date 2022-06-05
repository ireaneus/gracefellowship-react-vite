import * as React from 'react';
import { AppBar, Box, Toolbar, } from '@mui/material/';
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
        <Toolbar variant='dense'>
          <ChurchMenu setMode={setMode} mode={mode}/>
          <h6 className='w3-wide w3-auto white' >Grace Fellowship of Mountain Home Idaho</h6>
          <Box className='fancy' sx={{display:{xs: 'none', sm: 'block', md: 'block'} }} >{ DisplayDate }</Box>
        </Toolbar>
      </AppBar>
  );
};