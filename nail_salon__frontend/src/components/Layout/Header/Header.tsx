import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
// import './Header.css';

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide header on scroll down
        setIsVisible(false);
      } else {
        // Show header on scroll up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AppBar position="fixed" sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Light opacity
      boxShadow: 'none',
      transform: isVisible ? 'translateY(0)' : 'translateY(-100%)', // Slide effect
      transition: 'transform 0.3s ease-in-out', // Smooth transition
      zIndex: 1100, // Ensure header stays above other elements
    }}
>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Home Button */}
        <HashLink smooth to="/#home" style={{ textDecoration: 'none' }}>
          <HomeOutlined className="text-2xl text-[#4f4330] hover:text-opacity-80" />
        </HashLink>

        {/* Hamburger Menu for Small Screens */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
            <List sx={{ width: 250 }}>
              {['About Us', 'Services', 'Gallery', 'Education', 'FAQ', 'Policy', 'Join Our Team', 'Contact Us'].map((item) => (
                <ListItem button onClick={toggleDrawer(false)} key={item}>
                  <HashLink smooth to={`/#${item.toLowerCase().replace(/\s+/g, '-')}`} className="header-link">
                    <ListItemText
                      primary={item}
                      sx={{
                        fontSize: '14px',
                        color: '#4f4330',
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                      }}
                    />
                  </HashLink>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>

        {/* Right-aligned buttons for larger screens */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {['About Us', 'Services', 'Gallery', 'Education', 'FAQ', 'Policy', 'Join Our Team', 'Contact Us'].map((item) => (
            <HashLink
              smooth
              to={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="header-link"
              style={{
                textDecoration: 'none',
                color: '#4f4330',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '14px',
              }}
              key={item}
            >
              {item}
            </HashLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
