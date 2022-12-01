import React from 'react';
import { string } from 'prop-types';
import { Box, Typography } from '@mui/material';

// Assets
import logo from '../../assets/group.svg';

function Title({ title, subtitle }) {
  return (
    <Box mb={3}>
      <img src={logo} alt="Logo" />
      <Typography variant="h5" mt={3} fontWeight={700} gutterBottom>
        {title}
      </Typography>
      {subtitle && (
      <Typography color="textSecondary">
        {subtitle}
      </Typography>
      )}
    </Box>
  );
}

Title.propTypes = {
  title: string.isRequired,
  subtitle: string,
};

Title.defaultProps = {
  subtitle: '',
};

export default Title;
