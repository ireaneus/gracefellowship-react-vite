import { Box, Menu, Paper } from '@mui/material';
import { Church } from '@mui/icons-material';
import React, { useState } from 'react'
import ListBox from './List'

export default function BasicMenu({ mode,setMode }) {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <Box sx={{ display:{xs: 'block', sm: 'block', md: 'none'} }}>
          <Church 
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className='w3-hover-khaki' 
            aria-label='menu' 
          >
          </Church>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
        <ListBox setMode={setMode} mode={mode}/>
    </Paper>
    </Menu>
</Box>
  );
};