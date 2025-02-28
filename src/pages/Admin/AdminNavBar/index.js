import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function AdminNavBar() {
    return (
        <AppBar position="static" sx={{ backgroundColor: "#073763" }}>
            <Toolbar>
                {/* Profile Logo */}
                <Avatar
                    alt="Admin Profile"
                    src="/path/to/profile-image.jpg"  
                    sx={{ width: 40, height: 40, marginRight: 2 }}  // Adjust size as needed
                />

               
                <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
                    Admin Panel
                </Typography>

                {/* Navigation Buttons */}
                <Box>
                    <Button color="inherit" component={Link} to="/userapplicationdetails">
                        Applications
                    </Button>
                    <Button color="inherit" component={Link} to="/userdetails">
                        Users
                    </Button>
                    <Button color="inherit" component={Link} to="/news-update">
                        News
                    </Button>
                    <Button color="inherit" component={Link} to="/update-adminprofile">
                        Settings
                    </Button>
              
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default AdminNavBar;
