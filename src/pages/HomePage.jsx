import React from 'react';
import { Stack } from '@mui/material';
import { GraceResCard, PastorJack, About, Sidebar, Footer } from '../components';

export default function HomePage() {
  return (
    <Stack direction="row" spacing={2} justifyContent='space-around'>
      <Sidebar />
      <Stack direction='column' spacing={2} justifyContent='space-around'>
        <GraceResCard />
        <PastorJack />
        <About />
        </Stack>
        <Footer />
    </Stack>

  );
}
