import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

// Components
import Nav from '../Nav';

export default function Layout() {
  return (
    <div>
      <Nav />
      <Box my={3}>
        <Outlet />
      </Box>
    </div>
  );
}
