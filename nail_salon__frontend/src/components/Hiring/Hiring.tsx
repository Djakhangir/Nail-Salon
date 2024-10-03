import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './Hiring.css';

const Hiring: React.FC = () => {
  return (
    <Box className="join-our-team-container">
      <Typography variant="h3" gutterBottom>
        Join Our Team
      </Typography>
      <Typography variant="body1">
        We are always looking for talented individuals to join our team. If you're passionate about beauty and customer service, apply today!
      </Typography>
      <Button variant="contained" color="primary">
        Apply Now
      </Button>
    </Box>
  );
};

export default Hiring;
