import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import axios from "axios";
import LoadingIndicator from "../../Util/features/loadingIndicator";
// import queryString from "query-string";
// import { payments } from "@square/web-sdk";

//MOCK DATA
const servicesPricing: any = {
  Manicure: 25.0,
  Pedicure: 30.0,
  "Hair Styling": 50.0,
  Facial: 40.0,
  Massage: 60.0,
};

const Reservation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [servicesPricing, setServicesPricing] = useState<any>({});
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [customer, setCustomer] = useState<{ firstName: string; lastName: string; phone: string } | null>(null);
  const [isGuest, setIsGuest] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 

  // const totalAmount = selectedServices.reduce(
  //   (sum, service) => sum + (servicesPricing[service] || 0),
  //   0
  // );

  // useEffect(() => {
  //   const queryParams = queryString.parse(location.search);
  //   if (queryParams.services) {
  //     const selected = (queryParams.services as string).split(",");
  //     setSelectedServices(selected);
  //     const totalPrice = selected.reduce(
  //       (sum, service) => sum + servicesPricing[service],
  //       0
  //     );
  //     setTotal(totalPrice);
  //   }

  //   //GET THE NAME OF THE CUSTOMER FROM DB
  //   // axios.get(`/api/customer/${"customerId"}`).then((response) => {
  //   //   const { givenName, familyName, phoneNumber } = response.data;
  //   //   setCustomer({
  //   //     firstName: givenName,
  //   //     lastName: familyName,
  //   //     phone: phoneNumber || "",
  //   //   });
  //   // });
  // }, [location.search]);

  useEffect(() => {

    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(`/api/customer`);
        setCustomer(response.data);
      } catch (error) {
        console.error("No customer data found. Proceeding as guest.");
        setIsGuest(true);
      }
    };

    const fetchServices = async () => {
      try {
        const response = await axios.get("/api/services");
        const pricing = response.data.reduce((acc: any, service: any) => {
          acc[service.name] = service.price;
          return acc;
        }, {});
        setServicesPricing(pricing);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCustomerData();
    fetchServices();
  }, []);

  // Handle URL query parameters for selected services and calculate total
  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    if (queryParams.services) {
      const selected = (queryParams.services as string).split(",");
      setSelectedServices(selected);

      // Calculate total based on selected services
      const total = selected.reduce(
        (sum, service) => sum + (servicesPricing[service] || 0),
        0
      );
      setTotalAmount(total); // Set total amount
    }
  }, [location.search, servicesPricing]);


  if (loading) {
    return <LoadingIndicator message="Loading your reservation details..." />;
  }

  const handleServiceSelect = (service: string) => {
    if (selectedServices.includes(service)) {
      const updatedServices = selectedServices.filter((s) => s !== service);
      setSelectedServices(updatedServices);
      setTotalAmount(
        updatedServices.reduce(
          (sum, service) => sum + servicesPricing[service],
          0
        )
      );
    } else {
      const updatedServices = [...selectedServices, service];
      setSelectedServices(updatedServices);
      setTotalAmount(
        updatedServices.reduce(
          (sum, service) => sum + servicesPricing[service],
          0
        )
      );
    }
  };

  const handleConfirmReservation = () => {
    // Pass selected services and total amount to the Payments page
    const selectedServicesQuery = selectedServices.join(",");
    navigate(`/payments?services=${selectedServicesQuery}&total=${totalAmount}`);
  };

  return (
    <Box className="reservation-container">
     <Typography variant="h5" gutterBottom>
        {customer ? (
          `Dear ${customer.firstName} ${customer.lastName},`
        ) : (
          "Guest Reservation"
        )}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Here’s a summary of your selected services:
      </Typography>

      <List>
        {selectedServices.map((service, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={service}
              secondary={`Price: $${servicesPricing[service]?.toFixed(2)}`}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Total: ${totalAmount.toFixed(2)}</Typography>

      {/* Services Component with preselected services */}
      <Services
        selectedServices={selectedServices}
        onServiceSelect={handleServiceSelect}
      />

      <Button variant="contained" color="primary" onClick={handleConfirmReservation}>
        Proceed to Payment
      </Button>
    </Box>
  );
};

export default Reservation;
