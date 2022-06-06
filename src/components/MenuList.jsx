import * as React from 'react';
import { Link } from 'react-router-dom';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { Home, ModeNight } from '@mui/icons-material';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';

export default function MenuList({ mode,setMode }) {

  return (
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
        <MenuBookTwoToneIcon />
        </ListItemIcon>
        <Link to={'/books'}> {" "}
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
  );
};

