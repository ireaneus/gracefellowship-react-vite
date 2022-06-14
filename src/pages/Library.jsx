import React from 'react'
import { Stack } from '@mui/material';
import { Footer, LibraryCard } from '../components';


export default function Library() {
  return (
    <Stack direction='column' spacing={2} justifyContent='space-around'>
    <LibraryCard />
    <Footer />
    </Stack>
  )
}

