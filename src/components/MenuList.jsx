import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { Home, InfoOutlined, LibraryBooks, ModeNight } from '@mui/icons-material';

export default function MenuList({ mode,setMode }) {

  return (
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
        <Link to={'/sermons'}>
        <ListItemText primary='Sermons Page' />
        </Link>
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
        <InfoOutlined />
        </ListItemIcon>
        <Link to={'/numbers'}>
        <ListItemText primary='Numbers of the Bible' />
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
    <Outlet />
   </List>
  );
};

