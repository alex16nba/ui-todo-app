import React from 'react';
import { Container, Box, Paper } from '@mui/material';
import { node } from 'prop-types';

function ContentLayout({ children }) {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <Box p={3} my={3}>
          {children}
        </Box>
      </Paper>
    </Container>
  );
}

ContentLayout.propTypes = {
  children: node.isRequired,
};

export default ContentLayout;
