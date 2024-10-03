import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';
import './ContactUs.css';

const ContactUs: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent by ${firstName} ${lastName}`);
  };

  const redirectToFacebook = () => {
    window.open('https://www.facebook.com/messages/t/yourpageid', '_blank');
  };

  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/direct/t/youruserid', '_blank');
  };

  return (
    <Box className="contact-container" p={4}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <TextField
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
          margin="normal"
        />
          <TextField
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            multiline
            rows={4}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Box>
      </form>

      <Box mt={4} display="flex" justifyContent="center" gap={2}>
        <Button onClick={redirectToFacebook}>
          <Facebook fontSize="large" />
        </Button>
        <Button onClick={redirectToInstagram}>
          <Instagram fontSize="large" />
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
