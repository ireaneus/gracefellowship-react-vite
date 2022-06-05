import { Avatar, Box, Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import React from 'react';
import imageUrl from '../images/Pastor_2.jpg';

export default function PastorJack() {

  return (
    <Box flex={5} p={2}>
    <Card >
    <CardHeader
  avatar={
    <Avatar sx={{ bgcolor: 'slate' }} aria-label='Pastor Jack Hurley'>
      PJH
    </Avatar>
  }
  title='Pastor Jack Hurly'
  subheader='December 1993 - February 2004'
  />
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <CardMedia
          sx={{borderRadius: 1, ml: 2, maxWidth: 179}}
          height={311}
          component='img'
          image={imageUrl}
          title='Pastor Jack Hurley'
          alt='Pastor of Grace'
        />
      </Box>
      <CardContent>
      <h4>About Pastor Jack Hurley</h4>
      <p className='scripture w3-center'>Pastor at Grace Fellowship from 1993-2004<br />Pastor Jack went to be with the Lord suddenly in February 2004.</p>

      <p>Following his twenty year career in the Air Force with a tour in the Viet Nam as a RF-4C pilot, pastor Jack Hurley retired from Mountain Home AFB.&nbsp;&nbsp;After retirement, he attended and graduated from Trinity Evangelical Divinity School in Deerfield, IL with a Master of Divinity degree.&nbsp;&nbsp;While at seminary, he pastored a small church in a neighboring town.</p>

      <p>Upon graduation, he accepted a call to Grace Evangelical Church in Ship Bottom, New Jersey, pastoring that church for 8 1/2 years.&nbsp;&nbsp;From there he moved to Phoenix, Arizona where he ministered to small churches in the outlying mining towns for three years.&nbsp;&nbsp;In December of 1993, Pastor Hurley returned to Mountain Home and began Calvary Chapel, which is now called Grace Fellowship.&nbsp;&nbsp;Starting with three couples, our church has grown to its present size.</p>

      <p>Pastor Hurley believes in the return to biblical worship of our sovereign God and teaching through the books of the Bible verse by verse.&nbsp;&nbsp;One of his primary concerns is to see the people and families of our church grow in Christian maturity and unity through a living and active relationship with the Lord and with each other.</p>

     </CardContent>
  </Card>
  </Box>
  );
};