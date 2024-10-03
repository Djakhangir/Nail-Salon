import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import Services from "../Services/Services";
import queryString from "query-string";
// import queryString from "query-string";

const Reservation: React.FC = () => {
  const location = useLocation();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    if (queryParams.services) {
      setSelectedServices((queryParams.services as string).split(","));
    }
  }, [location.search]);

  const handleServiceSelect = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <Box className="reservation-container">
      <Typography variant="h3" gutterBottom>
        Reservation Page
      </Typography>
      <Typography variant="h6">Selected Services</Typography>

      {/* Services Component with preselected services */}
      <Services selectedServices={selectedServices} onServiceSelect={handleServiceSelect} />

      <Button variant="contained" color="primary">
        Confirm Reservation
      </Button>
    </Box>
  );
};

export default Reservation;
