
import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  // Toggle Sidebar
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Mobile Menu Button (Left-Aligned) */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: "block", md: "none" } }} onClick={handleDrawerToggle}>
          <MenuIcon sx={{ color: "black" }} />
        </IconButton>

        {/* Desktop Navbar - Centered */}
        <MKBox display={{ xs: "none", md: "flex" }} alignItems="center" justifyContent="center" flexGrow={1} gap={4}>
          {navItems.map((item, index) => (
            <Link to={item.route} key={index} style={{ textDecoration: "none", color: "black" }}>
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
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {navItems.map((item, index) => (
            <ListItem button key={index} component={Link} to={item.route} onClick={handleDrawerToggle}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default DefaultNavbar;
