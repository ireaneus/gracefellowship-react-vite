import { Avatar, Box, Button, Card, CardContent, CardHeader, CardMedia, Grid, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { styled } from '@mui/material/styles';
import React from 'react'
import imageUrl from '/images/stock-photos-image1588462737.jpg'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Library() {
    
  return (
    <Box flex={5} p={2}>
    <Card >
      <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: 'slate' }} aria-label='Library'>
        L
      </Avatar>
    }
    title='Grace Fellowship Church Library'
    subheader='Articles of theology'
  />
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <CardMedia
          component='img'
          height={211}
          image={imageUrl}
          title='Our small church'
          alt='Grace Fellowship of Mountain Home Idaho - Resurrected'
        />
        </Box>

        <CardContent>
        <h4>Grace Fellowship Library Articles</h4>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
        <Item>
        <List>
            <ListItem disablePadding>
             <Button href='ARMINIANISM-EXPOSED.pdf' download={'ARMINIANISM-EXPOSED.pdf'}>
                <ListItemIcon>
                    <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText primary="ARMINIANISM-EXPOSED" secondary='by Rev. Mark Herzer' />
                </Button>
            </ListItem>
            <ListItem disablePadding>
             <Button href='ARMINIANISMCAPTIVITY.pdf' download={'ARMINIANISMCAPTIVITY.pdf'}>
                <ListItemIcon>
                    <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText primary="ARMINIANISM CAPTIVITY" secondary='FROM: Life Under the Big Top, JAN/FEB 1995'/>
                </Button>
            </ListItem>
            <ListItem disablePadding>
             <Button href='BETHAL.pdf' download={'BETHAL.pdf'}>
                <ListItemIcon>
                    <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText primary='BETHAL' secondary='Bethel Baptist Church Confession of Faith'/>
                </Button>
            </ListItem>
            <ListItem disablePadding>
             <Button href='CAL-ARM-OPPOSED.pdf' download={'CAL-ARM-OPPOSED.pdf'}>
                <ListItemIcon>
                    <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText primary='Calvinism and Arminianism Opposed' secondary='Calvinism and Arminianism cannot be reconciled because of the following irreconcilable differences'/>
                </Button>
            </ListItem>
        </List>
        </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <Item>
        <List>
            <ListItem disablePadding>
             <Button href='CANONS-OF-DORT.pdf' download={'CANONS-OF-DORT.pdf'}>
                <ListItemIcon>
                    <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText primary="The Canons of Dort" secondary='The Synod of Dordrecht November 13, 1618—May 9, 1619' />
                </Button>
            </ListItem>
            <ListItem disablePadding>
             <Button href='COUNCIL-OF-TRENT.pdf' download={'COUNCIL-OF-TRENT.pdf'}>
                <ListItemIcon>
                    <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText primary="The Council of Trent" secondary='Canons and Decrees Edited By J. Waterworth (Chicago, 1848)'/>
                </Button>
            </ListItem>
            <ListItem disablePadding>
             <Button href='FREEWILL.pdf' download={'FREEWILL.pdf'}>
                <ListItemIcon>
                    <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText primary='Free Will' secondary='What do the scriptures say?'/>
                </Button>
            </ListItem>
            <ListItem disablePadding>
             <Button href='GLORYOFGOD.pdf' download={'GLORYOFGOD.pdf'}>
                <ListItemIcon>
                    <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText primary='The Glory of God at stake' secondary='Why the Glory of God Is at Stake in the
"Foreknowledge" Debate. by: John Piper'/>
                </Button>
            </ListItem>
        </List>
        </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <Item>
        <List>
            <ListItem disablePadding>
             <Button href='GODEXISTS.pdf' download={'GODEXISTS.pdf'}>
                <ListItemIcon>
                    <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText primary="The Existence of God" secondary='' />
                </Button>
            </ListItem>
            <ListItem disablePadding>
             <Button href='JOHNTULIP.pdf' download={'JOHNTULIP.pdf'}>
                <ListItemIcon>
                    <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText primary="John's Gospel: the TULIP Garden of God" secondary='By Ted Sims'/>
                </Button>
            </ListItem>
            <ListItem disablePadding>
             <Button href='TULIP.pdf' download={'TULIP.pdf'}>
                <ListItemIcon>
                    <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText primary='T.U.L.I.P. The Canons of Dort' secondary='The Decision of the Synod of Dort on the Five Main Points of Doctrine in the
Netherlands'/>
                </Button>
            </ListItem>
            <ListItem disablePadding>
             <Button href='PelagianCaptivityoftheChurch.pdf' download={'PelagianCaptivityoftheChurch.pdf'}>
                <ListItemIcon>
                    <LocalLibraryIcon />
                </ListItemIcon>
                <ListItemText primary='Pelagian Captivity of the Church' secondary='by R. C. Sproul'/>
                </Button>
            </ListItem>
        </List>
        </Item>
        </Grid>
          
        </Grid>
        </CardContent>

  </Card>

  </Box>

  )
}



  

