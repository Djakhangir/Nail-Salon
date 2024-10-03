import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#8c6624' }}> 
      <Toolbar sx={{ justifyContent: 'space-between' }}> 
        {/* Left-aligned title */}
        <HashLink smooth to="/#home" className="header-link" style={{ textDecoration: 'none' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#a39d99' }}>
            Elina's Salon
          </Typography>
        </HashLink>

        {/* Hamburger Menu for Small Screens */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}> {/* Show only on small screens */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            <List sx={{ width: 250 }}>
              <ListItem button onClick={toggleDrawer(false)}>
                <HashLink smooth to="/#about-us" className="header-link">
                  <ListItemText primary="About Us" />
                </HashLink>
              </ListItem>
              <ListItem button onClick={toggleDrawer(false)}>
                <HashLink smooth to="/#services" className="header-link">
                  <ListItemText primary="Services" />
                </HashLink>
              </ListItem>
              <ListItem button onClick={toggleDrawer(false)}>
                <HashLink smooth to="/#gallery" className="header-link">
                  <ListItemText primary="Gallery" />
                </HashLink>
              </ListItem>
              <ListItem button onClick={toggleDrawer(false)}>
                <Button component={Link} to="/education" className="header-link">
                  <ListItemText primary="Education" />
                </Button>
              </ListItem>
              <ListItem button onClick={toggleDrawer(false)}>
                <Button component={Link} to="/faq" className="header-link">
                  <ListItemText primary="FAQ" />
                </Button>
              </ListItem>
              <ListItem button onClick={toggleDrawer(false)}>
                <Button component={Link} to="/policy" className="header-link">
                  <ListItemText primary="Policy" />
                </Button>
              </ListItem>
              <ListItem button onClick={toggleDrawer(false)}>
                <Button component={Link} to="/join-our-team" className="header-link">
                  <ListItemText primary="Join Our Team" />
                </Button>
              </ListItem>
              <ListItem button onClick={toggleDrawer(false)}>
                <Button component={Link} to="/contact-us" className="header-link">
                  <ListItemText primary="Contact Us" />
                </Button>
              </ListItem>
            </List>
          </Drawer>
        </Box>

        {/* Right-aligned buttons for larger screens */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}> {/* Hidden on small screens */}
          <HashLink smooth to="/#about-us" className="header-link">About Us</HashLink>
          <HashLink smooth to="/#services" className="header-link">Services</HashLink>
          <HashLink smooth to="/#gallery" className="header-link">Gallery</HashLink>
          <Button component={Link} to="/education" className="header-link">Education</Button>
          <Button component={Link} to="/faq" className="header-link">FAQ</Button>
          <Button component={Link} to="/policy" className="header-link">Policy</Button>
          <Button component={Link} to="/join-our-team" className="header-link">Join Our Team</Button>
          <Button component={Link} to="/contact-us" className="header-link">Contact Us</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
