import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Avatar, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; 

function AdminNavBar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // State for menu open/close
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    return (
        <AppBar position="static" sx={{ backgroundColor: "#073763" }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                        alt="Admin Profile"
                        src="/path/to/profile-image.jpg"
                        sx={{ width: 40, height: 40, marginRight: 2 }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            color: "white",
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontSize: { xs: '1rem', sm: '1.5rem' }
                        }}
                    >
                        Admin Panel
                    </Typography>
                </Box>

                {/* Desktop Navigation */}
                {!isMobile ? (
                    <Box>
                        <Button color="inherit" component={Link} to="/userapplicationdetails">Applications</Button>
                        <Button color="inherit" component={Link} to="/userdetails">Users</Button>
                        <Button color="inherit" component={Link} to="/news-update">News</Button>
                        <Button color="inherit" component={Link} to="/update-adminprofile">Settings</Button>
                    </Box>
                ) : (
                    // Hamburger Icon
                    <>
                            <IconButton onClick={handleMenuOpen} sx={{ color: "white" }}>
                                <MenuIcon sx={{ color: "white" }} /> 
                            </IconButton>

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            PaperProps={{ sx: { width: 200 } }} 
                        >
                            <MenuItem onClick={handleMenuClose} component={Link} to="/userapplicationdetails">Applications</MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/userdetails">Users</MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/news-update">News</MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/update-adminprofile">Settings</MenuItem>
                        </Menu>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default AdminNavBar;
