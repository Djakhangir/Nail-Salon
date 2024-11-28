import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Gallery from "../Gallery/Gallery";
import homepageLogo from "../../../assets/homepagelogo.webp";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Handle navigation to the reservations page
  const handleBookService = () => {
    navigate("/reservations", { state: { selectedServices } });
  };

  const handleServiceSelect = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <Box id="home" className="relative w-full">
      {/* Banner Section */}
      <Box
        className="relative w-full h-[50vh] md:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url("../../../assets/homepagelogo.webp")`, 
          backgroundColor: 'white', 
        }}
      >
        <Box className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
          <Typography
            variant="h5"
            className="text-white text-center font-poppins font-medium mb-4"
          >
            Beauty Services for You
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className="px-6 py-2 bg-[#4f4330] text-white hover:bg-opacity-80 rounded-md"
            onClick={handleBookService}
          >
            Book a Service
          </Button>
        </Box>
      </Box>

      {/* About Us Section */}
      <Box id="about-us" className="py-10">
        <AboutUs />
      </Box>

      {/* Services Section */}
      <Box id="services" className="services-section py-10 bg-gray-100">
        <Services
          selectedServices={selectedServices}
          onServiceSelect={handleServiceSelect}
        />
      </Box>

      {/* Gallery Section */}
      <Box id="gallery" className="gallery-section py-10">
        <Gallery />
      </Box>
    </Box>
  );
};

export default HomePage;
