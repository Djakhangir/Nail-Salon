import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Card, CardContent, Typography, Checkbox, Button } from "@mui/material";
import "./Services.css";
import { useLocation, useNavigate } from "react-router-dom";

const servicesList = [
  { name: "Manicure", description: "Lorem ipsum dolor sit amet 1" },
  { name: "Pedicure", description: "Lorem ipsum dolor sit amet 2" },
  { name: "Hair Styling", description: "Lorem ipsum dolor sit amet 3" },
  { name: "Facial", description: "Lorem ipsum dolor sit amet 4" },
  { name: "Massage", description: "Lorem ipsum dolor sit amet 5" },
];

interface ServicesProps {
  selectedServices: string[];
  onServiceSelect?: (service: string) => void;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // 1 slide moves at a time
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Services: React.FC<ServicesProps> = ({
  selectedServices = [],
  onServiceSelect,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Navigate to the reservation page with selected services
  const handleBookSelect = () => {
    const selectedServicesQuery = selectedServices.join(",");
    navigate(`/reservations?services=${selectedServicesQuery}`);
  };

  // Handle service selection via checkbox
  const handleServiceClick = (service: string) => {
    if (onServiceSelect) {
      onServiceSelect(service);
    }
  };

  return (
    <Box id="services" className="services-section">
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        customTransition="all 0.5s"
        itemClass="carousel-item-padding"
        arrows={true}
      >
        {servicesList.map((service) => (
          <Card
            key={service.name}
            className="service-card"
            onClick={() => handleServiceClick(service.name)}
          >
            <CardContent>
              <Typography variant="h5">{service.name}</Typography>
              <Typography variant="body2">{service.description}</Typography>

              {/* Checkbox for service selection */}
              <Checkbox
                checked={selectedServices.includes(service.name)}
                onChange={() => handleServiceClick(service.name)}
              />
            </CardContent>
          </Card>
        ))}
      </Carousel>

      {/* Book Button */}
      {selectedServices.length > 0 && location.pathname !== "/reservations" && (
        <Button
          variant="contained"
          color="primary"
          className="book-button"
          onClick={handleBookSelect}
        >
          Book
        </Button>
      )}
    </Box>
  );
};

export default Services;
