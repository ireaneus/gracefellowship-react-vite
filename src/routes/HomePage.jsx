import { Box } from '@mui/material';
import React from 'react';
import { GraceResCard, PastorJack, About } from '../components';


export default function Feed() {
  return (
    <Box flex={5} p={2}>
        <GraceResCard />
        <PastorJack />
        <About />
    </Box>
  )
};