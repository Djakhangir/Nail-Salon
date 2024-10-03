import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Faq.css';

const FAQ: React.FC = () => {
  return (
    <Box className="faq-container">
      <Typography variant="h3" gutterBottom>
        Frequently Asked Questions (FAQ)
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What services do you offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How can I book a service?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Visit our Book a Service page to schedule an appointment.</Typography>
        </AccordionDetails>
      </Accordion>

      {/* Add more FAQ items as needed */}
    </Box>
  );
};

export default FAQ;
