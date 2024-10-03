import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <Box className="footer">
      <Typography variant="body1">© 2024 Elina’s Salon. All rights reserved.</Typography>
      <Link href="https://www.instagram.com/yourpage" target="_blank">Instagram</Link>
      <Link href="https://www.facebook.com/yourpage" target="_blank">Facebook</Link>
    </Box>
  );
};

export default Footer;
