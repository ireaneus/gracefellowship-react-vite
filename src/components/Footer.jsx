import { Box } from '@mui/material';
import React from 'react'

export default function Footer({ mode, setMode }) {

  const year = new Date().getFullYear();

  return (
    
    <Box className='footer'>
    <p className="w3-center scripture white">"The Lord bless you, and keep you; The Lord make His face shine on you, And be gracious to you; The Lord lift up His countenance on you, And give you peace."</p>
    <p className='w3-center white'>Num. 6:24-26</p>
    <p className='w3-center w3-small white'>Copyright © {year} David L. Haines</p>
    </Box>
  )
};