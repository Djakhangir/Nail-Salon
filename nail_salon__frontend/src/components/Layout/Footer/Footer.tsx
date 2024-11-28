import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import LocationOn from '@mui/icons-material/LocationOn';
import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f3ef', // Updated background color
        padding: '24px',
      }}
    >
      {/* Footer Layout */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: { xs: '16px', md: '0' },
        }}
      >
        {/* Left: Contact Information */}
        <Box
          sx={{
            flex: 1,
            padding: '16px', // Padding to shrink the area
            textAlign: { xs: 'center', md: 'left' },
            // backgroundColor: '#ffffff', // Distinguish area with a white background
            // borderRadius: '8px', // Add slight rounding for visual appeal
            // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Light shadow for depth
          }}
        >
          {/* Address */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <LocationOn sx={{ marginRight: '8px', color: '#4f4330' }} />
            <Link
              href="https://www.google.com/maps/search/?api=1&query=455+Route+9,+Unit+S10,+Englishtown,+New+Jersey+07726"
              target="_blank"
              sx={{
                fontSize: '14px',
                color: '#4f4330',
                fontFamily: 'Poppins',
                fontWeight: 500,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              455 Route 9, Unit S10<br />
              Englishtown, New Jersey 07726
            </Link>
          </Box>

          {/* Phone */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <Phone sx={{ marginRight: '8px', color: '#4f4330' }} />
            <Link
              href="tel:+17323514334"
              sx={{
                fontSize: '14px',
                color: '#4f4330',
                fontFamily: 'Poppins',
                fontWeight: 500,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              (732) 351-4334
            </Link>
          </Box>

          {/* Email */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Email sx={{ marginRight: '8px', color: '#4f4330' }} />
            <Link
              href="mailto:elinabeautystudio1@gmail.com"
              sx={{
                fontSize: '14px',
                color: '#4f4330',
                fontFamily: 'Poppins',
                fontWeight: 500,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              elinabeautystudio1@gmail.com
            </Link>
          </Box>
        </Box>

        {/* Right: Working Hours */}
        <Box
          sx={{
            flex: 1,
            padding: '16px', // Padding to shrink the area
            textAlign: { xs: 'center', md: 'right' },
            // backgroundColor: '#ffffff', // Distinguish area with a white background
            // borderRadius: '8px', // Add slight rounding for visual appeal
            // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Light shadow for depth
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              color: '#4f4330',
              fontFamily: 'Poppins',
              fontWeight: 500,
              marginBottom: '8px',
            }}
          >
            Monday - Friday: 9:00 am - 7:00 pm
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              color: '#4f4330',
              fontFamily: 'Poppins',
              fontWeight: 500,
              marginBottom: '8px',
            }}
          >
            Saturday: 9:00 am - 5:00 pm
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              color: '#4f4330',
              fontFamily: 'Poppins',
              fontWeight: 500,
            }}
          >
            Sunday: Closed
          </Typography>
        </Box>
      </Box>

      {/* Center: Copyright and Social Media */}
      <Box sx={{ marginTop: '24px', textAlign: 'center' }}>
        {/* Copyright */}
        <Typography
          sx={{
            fontSize: '14px',
            color: '#4f4330',
            fontFamily: 'Poppins',
            fontWeight: 500,
            marginBottom: '8px',
          }}
        >
          © 2024 Elina’s Beauty Studio. All rights reserved.
        </Typography>

        {/* Social Media */}
        <Box>
          <Link
            href="https://www.instagram.com/yourpage"
            target="_blank"
            sx={{
              fontSize: '14px',
              color: '#4f4330',
              fontFamily: 'Poppins',
              fontWeight: 500,
              textDecoration: 'none',
              marginRight: '16px',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Instagram
          </Link>
          <Link
            href="https://www.facebook.com/yourpage"
            target="_blank"
            sx={{
              fontSize: '14px',
              color: '#4f4330',
              fontFamily: 'Poppins',
              fontWeight: 500,
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Facebook
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
