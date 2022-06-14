import * as React from 'react';
import { Link } from 'react-router-dom';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { Home, LibraryBooks, ModeNight } from '@mui/icons-material';
import { Books } from '../pages';

export default function MenuList({ mode,setMode }) {

  return (
    <>
        <List>
        <ListItem disablePadding>
        <ListItemButton>
         <ListItemIcon>
        <Home />
        </ListItemIcon>
        <Link to={'/'}>
        <ListItemText primary='Home Page' />
        </Link>
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
        <ListItemButton>
         <ListItemIcon>
        <LibraryBooks />
        </ListItemIcon>
        <Link to={'/library'}>
        <ListItemText primary='Library' />
        </Link>
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
       <ModeNight />
      </ListItemIcon>
        <Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light' )}/>
      </ListItemButton>
    </ListItem>
    <Divider />
   </List>
   <Books />
   </>
  )
}