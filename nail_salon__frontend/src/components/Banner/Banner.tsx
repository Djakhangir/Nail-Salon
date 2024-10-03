import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import './Banner.css';

const Banner: React.FC = () => {
  return (
    <Box className="banner-container">
      <Typography variant="h1" className="banner-text">
        Elina's Salon
      </Typography>
      <Button variant="contained" color="secondary" className="banner-button">
        Book Now
      </Button>
    </Box>
  );
};

export default Banner;
