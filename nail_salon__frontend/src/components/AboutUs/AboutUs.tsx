import React from 'react';
import { Box, Typography } from '@mui/material';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <Box id="about-us" className="about-us-section">
      <Box className="about-us-image"></Box>
      <Box className="about-us-text fade-in">
        <Typography variant="h4">About Us</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel orci id mi accumsan scelerisque. ...
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;
