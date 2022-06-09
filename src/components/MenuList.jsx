import * as React from 'react';
import { Link } from 'react-router-dom';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { Home, ModeNight, MenuBookTwoToneIcon } from '@mui/icons-material';

export default function MenuList({ mode,setMode }) {

  return (
        <List>
        <ListItem disablePadding>
      <ListItemButton>
      <Link to={'/'}> 
        <ListItemIcon>
        <Home />
        </ListItemIcon>
        <ListItemText primary='Home Page' />
        </Link>
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
      <Link to={'/books'}> 
        <ListItemIcon>
        <MenuBookTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary='Sermon Collections' />
        </Link>
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemIcon>
       <ModeNight />
      </ListItemIcon>
        <Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light' )}/>
    </ListItem>
    <Divider />
   </List>
  )
}