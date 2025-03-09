import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Menu icon for mobile
import HomeIcon from "@mui/icons-material/Home";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Navigation Items
const navItems = [
  { name: "Home", icon: <HomeIcon />, route: "/" },
  { name: "About Us", icon: <InfoOutlinedIcon />, route: "/about" },
  { name: "Application Guide", icon: <MenuBookIcon />, route: "/stepbystep" },
  { name: "Track your Application", icon: <PersonIcon />, route: "/trackyourapplication" },
  { name: "Contact Us", icon: <PhoneIcon />, route: "/contact" },
  { name: "Sign In", icon: <LockOpenIcon />, route: "/signin" },
];

const DefaultNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation(); // Get current location to highlight active link

  // Toggle Sidebar
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 1 }} aria-label="Main navigation bar">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Mobile Menu Button (Left-Aligned) */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon sx={{ color: "black" }} />
        </IconButton>

        {/* Desktop Navbar - Centered */}
        <MKBox display={{ xs: "none", md: "flex" }} alignItems="center" justifyContent="center" flexGrow={1} gap={4}>
          {navItems.map((item, index) => (
            <Link
              to={item.route}
              key={index}
              style={{
                textDecoration: "none",
                color: location.pathname === item.route ? "#1976d2" : "black", // Highlight active link
              }}
            >
              <MKBox display="flex" alignItems="center" gap={1}>
                {item.icon}
                <MKTypography variant="button" fontWeight="regular">
                  {item.name}
                </MKTypography>
              </MKBox>
            </Link>
          ))}
        </MKBox>
      </Toolbar>

      {/* Mobile Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        aria-labelledby="main-navigation-drawer"
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            transition: "all 0.3s ease", // Add smooth transition
          },
        }}
      >
        <List sx={{ width: 250 }}>
          {navItems.map((item, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              to={item.route}
              onClick={handleDrawerToggle}
              sx={{
                backgroundColor: location.pathname === item.route ? "#1976d2" : "transparent", // Highlight active item
                padding: "10px 16px", // Add padding for better alignment
              }}
            >
              <ListItemIcon sx={{ minWidth: 35 }}> {/* Ensure icon has a consistent size */}
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <MKTypography
                    variant="body2"
                    sx={{ fontSize: "0.875rem", color: location.pathname === item.route ? "#fff" : "black" }} // Smaller text size
                  >
                    {item.name}
                  </MKTypography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default DefaultNavbar;
