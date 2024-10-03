import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Gallery from "../Gallery/Gallery";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Handle navigation to the reservations page
  const handleBookService = () => {
    navigate('/reservations', { state: { selectedServices } });
  };

  const handleServiceSelect = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <Box id="home" className="home-banner">
      {/* Banner Section */}
      <Typography variant="h2" className="banner-header">
        Elina's Salon
      </Typography>
      <Typography variant="h5" className="banner-subheader">
        Beauty Services for You
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className="banner-button"
        onClick={handleBookService}
      >
        Book a Service
      </Button>

      {/* About Us Section */}
      <Box id="about-us">
        <AboutUs />
      </Box>

      {/* Services Section */}
      <Box id="services" className="services-section">
      <Services selectedServices={selectedServices} onServiceSelect={handleServiceSelect} />
      {/* <Button
        variant="contained"
        color="primary"
        className="banner-button"
        onClick={handleBookService}
        disabled={selectedServices.length === 0} // Disable button if no services are selected
      >
        Book a Service
      </Button> */}
      </Box>

      {/* Gallery Section */}
      <Box id="gallery" className="gallery-section">
        <Gallery />
      </Box>
    </Box>
  );
};

export default HomePage;
