import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Button, List, ListItem, ListItemText } from "@mui/material";
import Services from "../Services/Services";
import queryString from "query-string";
// import queryString from "query-string";

//MOCK DATA
const servicesPricing:any = {
  "Manicure": 25.00,
  "Pedicure": 30.00,
  "Hair Styling": 50.00,
  "Facial": 40.00,
  "Massage": 60.00,
};

const Reservation: React.FC = () => {
  const location = useLocation();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    if (queryParams.services) {
      const selected = (queryParams.services as string).split(",");
      setSelectedServices(selected);
      const totalPrice = selected.reduce((sum, service) => sum + servicesPricing[service], 0);
      setTotal(totalPrice);
    }
  }, [location.search]);

  const handleServiceSelect = (service: string) => {
    if (selectedServices.includes(service)) {
      const updatedServices = selectedServices.filter((s) => s !== service);
      setSelectedServices(updatedServices);
      setTotal(updatedServices.reduce((sum, service) => sum + servicesPricing[service], 0));
    } else {
      const updatedServices = [...selectedServices, service];
      setSelectedServices(updatedServices);
      setTotal(updatedServices.reduce((sum, service) => sum + servicesPricing[service], 0));
    }
  };

  return (
    <Box className="reservation-container">
      <Typography variant="h3" gutterBottom>
        Reservation Page
      </Typography>
      <Typography variant="h6">Selected Services</Typography>

      <List>
        {selectedServices.map((service, index) => (
          <ListItem key={index}>
            <ListItemText primary={service} secondary={`Price: $${servicesPricing[service].toFixed(2)}`} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>

 {/* Services Component with preselected services */}
 <Services selectedServices={selectedServices} onServiceSelect={handleServiceSelect} />


      <Button variant="contained" color="primary">
        Confirm Reservation
      </Button>
    </Box>
  );
};

export default Reservation;
