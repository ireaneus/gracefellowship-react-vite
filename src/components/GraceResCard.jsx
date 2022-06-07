import * as React from 'react';
import { Card, Box, CardContent, CardMedia, Avatar, CardHeader } from '@mui/material';
import imageUrl from '/images/Church300.jpg';

export default function GraceResCard() {

  return (
    <Box flex={5} p={2}>
    <Card >
      <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: 'slate' }} aria-label='Grace'>
        GF
      </Avatar>
    }
    title='Grace Fellowship Church'
    subheader='December 1993 - September 2008'
  />
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <CardMedia
          component='img'
          sx={{borderRadius: 1, ml: 2, maxWidth: 291}}
          height={89}
          image={imageUrl}
          title='Our small church'
          alt='Grace Fellowship of Mountain Home Idaho - Resurrected'
        />
        </Box>

        <CardContent>
            <h4>About Grace Fellowship Website Resurrected</h4>
            <p className='scripture w3-center'>Dedicated to the memory of Pastor Jack Hurley</p>
            <p>After 15 years of being offline this website is being <i>'Resurrected'</i></p>

            <p>It is time to dust off your Bibles, and get back into the Word of God.&nbsp;&nbsp; I've spent over a year remastering the tapes, there are several new additions books of the Bible, topical, and prophecy teachings spanning from 1984 to 2004
            </p>
        </CardContent>
    </Card>
    </Box>
  );
};