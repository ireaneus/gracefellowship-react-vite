import { Avatar, Box, Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import * as React from 'react';
import imageUrl from '../images/churchus.jpg';

export default function About() {
  
  return (
    <Box flex={5} p={2}>
      <Card>
      <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: 'slate' }} aria-label='Grace'>
        A
      </Avatar>
    }
    title='Grace Fellowship Church'
    subheader='December 1993 - September 2008'
  />
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <CardMedia
          component='img'
          sx={{borderRadius: 1, ml: 2, maxWidth: 468}}
          height={211}
          image={imageUrl}
          title='Our small church'
          alt='Grace Fellowship of Mountain Home Idaho - Resurrected'
        />
        </Box>

        <CardContent>
        <h4>About our Church</h4>
            <p>Grace Fellowship of Mountain Home is a body of believers in Jesus Christ who are joined together for the worship, service, prayer, fellowship, discipleship, evangelism and for the observance of the ordinances of baptism and the Lord's supper as set forth in the Bible.</p>
        
            <p>Come and enjoy the worship of God with us at Grace Fellowship and the warm fellowship of our members as we worship our Lord Jesus Christ in song, in prayer and in the Word of God.&nbsp;&nbsp;How you dress and what you give is of secondary importance to us.&nbsp;&nbsp;But there is one thing we do ask you to do.</p>
            <p className='w3-center'>PLEASE BRING YOUR BIBLE!</p>
            <p className='scripture w3-center'>Let us hold fast the confession of our hope without wavering, for He who promised is faithful; and let us consider how to stimulate one another to love and good deeds, not forsaken our own assembling together, as is the habit of some, but encouraging one another; and all the more, as you see the day drawing near.</p>
            <p className='w3-center'>Hebrews 10:23-25</p>
        </CardContent>
    </Card>
    </Box>
  );
};