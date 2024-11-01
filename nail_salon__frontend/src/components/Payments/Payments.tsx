// src/components/Payments/Payments.tsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import queryString from "query-string";
import { payments } from "@square/web-sdk";

const Payments: React.FC = () => {
  const location = useLocation();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [card, setCard] = useState<any | null>(null);
  const [billingInfo, setBillingInfo] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "US", // Default country (US); adjust if necessary
  });

  const [paymentStatus, setPaymentStatus] = useState<"success" | "error" | null>(null);



  useEffect(() => {
    // Parse the selected services and total from query params
    const queryParams = queryString.parse(location.search);
    const services = (queryParams.services as string)?.split(",") || [];
    const totalPrice = parseFloat(queryParams.total as string) || 0;

    setSelectedServices(services);
    setTotal(totalPrice);
  }, [location.search]);

  useEffect(() => {
    const initializeSquarePayment = async () => {
        if (card) return;
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
    return () => {
        if (card) {
          card.destroy(); // Clear any previous card instance
          setCard(null); // Reset the card state
        }
      };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };


  const handlePayment = async () => {
    if (card) {
        const result = await card.tokenize({
            billingContact: {
              addressLines: [billingInfo.addressLine1, billingInfo.addressLine2],
              city: billingInfo.city,
              state: billingInfo.state,
              postalCode: billingInfo.postalCode,
              country: billingInfo.country,
            },
          });
      if (result.status === "OK") {
        alert("Payment successful!");
        console.log("Token:", result.token); // Send this token to backend for processing
        setPaymentStatus("success");
      } else {
        console.log(result.errors[0].message);
        setPaymentStatus("error");
      }
    }
  };

  if (paymentStatus === "success") {
    return (
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" color="primary">
          Thank you for your reservation!
        </Typography>
        <Typography variant="body1">
          Your payment has been successfully processed.
        </Typography>
      </Box>
    );
  }

  if (paymentStatus === "error") {
    return (
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" color="error">
          Payment Failed
        </Typography>
        <Typography variant="body1">
          There was an issue with your payment. Please check your details and try again.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setPaymentStatus(null)}>
          Retry Payment
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Confirm Your Payment
      </Typography>
      
      <Typography variant="h6">Selected Services</Typography>
      <Box>
        {selectedServices.map((service, index) => (
          <Typography key={index}>{service}</Typography>
        ))}
      </Box>
      <Typography variant="h6" mt={2}>Total: ${total.toFixed(2)}</Typography>

      <TextField
        label="Name on the Card"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
       <Typography variant="h4">Billing Information</Typography>
      <TextField
        label="Address 1"
        name="addressLine1"
        value={billingInfo.addressLine1}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Address 2"
        name="addressLine2"
        value={billingInfo.addressLine2}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="City"
        name="city"
        value={billingInfo.city}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="State"
        name="state"
        value={billingInfo.state}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Postal Code"
        name="postalCode"
        value={billingInfo.postalCode}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        fullWidth
        margin="normal"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <div id="card-container" style={{ marginTop: "20px" }}></div>

      <Button
        variant="contained"
        color="primary"
        onClick={handlePayment}
        sx={{ marginTop: "20px" }}
      >
        Confirm and Pay
      </Button>
    </Box>
  );
};

export default Payments;
