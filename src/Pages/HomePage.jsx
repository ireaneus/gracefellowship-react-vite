import React from 'react';
import { Box } from '@mui/material';
import { GraceResCard, PastorJack, About } from '../components';

export default function HomePage() {
  return (
    <Box flex={5} p={2}>
        <GraceResCard />
        <PastorJack />
        <About />
    </Box>
  )
}
