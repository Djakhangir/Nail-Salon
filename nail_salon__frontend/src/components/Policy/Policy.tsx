import React from 'react';
import { Box, Typography } from '@mui/material';
import './Policy.css';

const Policy: React.FC = () => {
  return (
    <Box className="policy-container">
      <Typography variant="h3" gutterBottom>
        Our Policies
      </Typography>
      <Typography variant="body1">
        At Elina's Salon, we prioritize the satisfaction of our clients. Our policies are designed to ensure a smooth and enjoyable experience for everyone.
      </Typography>
      {/* Add more details about your policy */}
    </Box>
  );
};

export default Policy;
