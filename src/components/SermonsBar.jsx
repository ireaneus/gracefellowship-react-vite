import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { Home, LibraryBooks, ModeNight } from '@mui/icons-material';

export default function SermonsBar({ mode,setMode }) {

  return (
    <Box flex={1} p={2} sx={{ display:{xs: 'none', sm: 'none', md: 'block'} }}>
    <Box position={'fixed'}>
    <List>
    <ListItem disablePadding>
  <ListItemButton>
    <ListItemIcon>
    <Home />
    </ListItemIcon>
    <Link to={'/'}> {" "}
    <ListItemText primary='Home Page' />
    </Link>
  </ListItemButton>
</ListItem>
<ListItem disablePadding>
  <ListItemButton>
    <ListItemIcon>
    <LibraryBooks />
    </ListItemIcon>
    <Link to={'/sermons/books'}>
    <ListItemText primary='Sermon Collections' />
    </Link>
  </ListItemButton>
</ListItem>
<Divider />
<ListItem disablePadding>
  <ListItemIcon>
   <ModeNight />
  </ListItemIcon>
    <Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light' )}/>
</ListItem>
<Outlet />
</List>
</Box>
</Box>
  );
};

