import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Services from "../Services/Services";
import queryString from "query-string";
// import queryString from "query-string";
import { payments } from "@square/web-sdk";

//MOCK DATA
const servicesPricing: any = {
  Manicure: 25.0,
  Pedicure: 30.0,
  "Hair Styling": 50.0,
  Facial: 40.0,
  Massage: 60.0,
};

const Reservation: React.FC = () => {
  const location = useLocation();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [card, setCard] = useState<any | null>(null);

  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    if (queryParams.services) {
      const selected = (queryParams.services as string).split(",");
      setSelectedServices(selected);
      const totalPrice = selected.reduce(
        (sum, service) => sum + servicesPricing[service],
        0
      );
      setTotal(totalPrice);
    }
  }, [location.search]);

  const handleServiceSelect = (service: string) => {
    if (selectedServices.includes(service)) {
      const updatedServices = selectedServices.filter((s) => s !== service);
      setSelectedServices(updatedServices);
      setTotal(
        updatedServices.reduce(
          (sum, service) => sum + servicesPricing[service],
          0
        )
      );
    } else {
      const updatedServices = [...selectedServices, service];
      setSelectedServices(updatedServices);
      setTotal(
        updatedServices.reduce(
          (sum, service) => sum + servicesPricing[service],
          0
        )
      );
    }
  };

  useEffect(() => {
    const initializeSquarePayment = async () => {
      try {
        const paymentsInstance = await payments(
          "sandbox-sq0idb-_5uTSC74rVgtQOBLeUBunQ",
          "sandbox"
        );
        if (!paymentsInstance) {
          console.error("Square payments instance could not be initialized.");
          alert("Payment system unavailable. Please try again later.");
          return;
        }
        const cardInstance = await paymentsInstance.card();
        await cardInstance.attach("#card-container");
        setCard(cardInstance);
      } catch (error) {
        console.error("Error initializing Square payment form:", error);
      }
    };
    initializeSquarePayment();
  }, []);

  const handlePayment = async () => {
    if (card) {
      const result = await card.tokenize();
      if (result.status === "OK") {
        alert("Payment successful!");
        // Handle token processing with the backend here
        console.log("Token:", result.token); // Use this token in your backend to process the payment
      } else {
        alert("Payment failed: " + result.errors[0].message);
      }
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
            <ListItemText
              primary={service}
              secondary={`Price: $${servicesPricing[service].toFixed(2)}`}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>

      {/* Services Component with preselected services */}
      <Services
        selectedServices={selectedServices}
        onServiceSelect={handleServiceSelect}
      />

      <div id="card-container"></div>
      <Button variant="contained" color="primary" onClick={handlePayment}>
        Confirm Reservation
      </Button>
    </Box>
  );
};

export default Reservation;
