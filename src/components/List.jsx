import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { Home, InfoOutlined, LibraryBooks, ModeNight } from '@mui/icons-material';

export default function ListBox({ mode,setMode }) {

  return (
        <List>
        <ListItem disablePadding>
      <ListItemButton><Link to={'/'} /> {" "}
        <ListItemIcon>
        <Home />
        </ListItemIcon>
        <ListItemText primary='Homepage' />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton><Link to={'/sermons'} />
        <ListItemIcon>
        <LibraryBooks />
        </ListItemIcon>
        <ListItemText primary='Sermons' />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding sx={{ display:{xs:'block', sm:'block', md:'none'}}}>
      <ListItemButton><Link to={'/numbers'} />
        <ListItemIcon>
        <InfoOutlined />
        </ListItemIcon>
        <ListItemText primary='Numbers of the Bible' />
      </ListItemButton>
    </ListItem>
    <Divider />
    <ListItem disablePadding>
      <ListItemIcon>
       <ModeNight />
      </ListItemIcon>
        <Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light' )}/>
    </ListItem>
   </List>
  )
}

