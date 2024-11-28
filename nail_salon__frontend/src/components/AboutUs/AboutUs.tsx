import React from "react";
import { Box, Typography } from "@mui/material";
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <Box id="about-us" className="about-us-section">
      <Box className="about-us-image"></Box>
      <Box className="about-us-text fade-in">
        <Typography variant="h4">About Us</Typography>
        <Typography variant="body1">
          Welcome to ELINA Beauty Studio, where beauty meets expertise. Nestled
          in the heart of Marlboro, NJ our salon offers a serene escape from the
          hustle and bustle, providing a haven for relaxation and rejuvenation.
          Our talented team of estheticians and nail technicians are dedicated
          to enhancing your natural beauty with personalized care. At ELINA
          Beauty Studio, we pride ourselves on using high-quality products and
          the latest techniques to ensure you leave feeling confident and
          refreshed. Whether you're here for a refreshing facial, or a luxurious
          manicure, our goal is to provide an exceptional experience tailored
          just for you. Step into ELINA Beauty Studio and let us help you look
          and feel your best. Your beauty journey starts here!
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;
