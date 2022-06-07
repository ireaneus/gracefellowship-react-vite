import { Avatar, Box } from '@mui/material';
import React from 'react'
import imageUrl from '/images/logo.gif';
import MenuList from './MenuList';

export default function Sidebar({ mode,setMode }) {
  

  return (
    <Box flex={1} p={2} sx={{ display:{xs: 'none', sm: 'none', md: 'block'} }}>
        <Box sx={{ width: 240 }}>
          <Avatar alt='logo' src={imageUrl} sx={{ width: 190, height: 55}} variant='square' />
          <MenuList setMode={setMode} mode={mode} />
        </Box>
    </Box>
  );
};