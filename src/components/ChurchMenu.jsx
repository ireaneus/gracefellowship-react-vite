import { Box, Menu, Paper } from '@mui/material';
import { Church } from '@mui/icons-material';
import React, { useState } from 'react'
import MenuList from './MenuList';

export default function ChurchMenu({ mode,setMode }) {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <Box>
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
    <Paper sx={{ width: 240, maxWidth: '100%' }}>
        <MenuList setMode={setMode} mode={mode}/>
    </Paper>
    </Menu>
</Box>
  );
};