import React, { useState } from 'react';
import { Card, CardContent, Grid, Typography, Button, Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const initialUserData = [
    {
        id: 1,
        visaType: 'Tourist Visa',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        mobileNumber: '+1234567890',
        passportNumber: 'A12345678',
        nationality: 'USA',
        address: '123 Main Street, City, Country',
        travelFrom: 'USA',
        travelTo: 'Canada',
        status: 'Processed',
        referenceId: 'ABC1234',
    },
    {
        id: 2,
        visaType: 'Student Visa',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        mobileNumber: '+9876543210',
        passportNumber: 'B98765432',
        nationality: 'UK',
        address: '456 Oak Road, City, Country',
        travelFrom: 'UK',
        travelTo: 'Australia',
        status: 'Sent',
        referenceId: 'DEF5678',
    },
    {
        id: 3,
        visaType: 'Business Visa',
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'alice.johnson@example.com',
        mobileNumber: '+1122334455',
        passportNumber: 'C12345679',
        nationality: 'Canada',
        address: '789 Pine Avenue, City, Country',
        travelFrom: 'Canada',
        travelTo: 'Germany',
        status: 'Confirmed',
        referenceId: 'GHI91011',
    },
];

function UserStatus() {
    const [userData, setUserData] = useState(initialUserData);
    const [editingStatusId, setEditingStatusId] = useState(null);

    const handleNextClick = (id) => {
        setEditingStatusId(id);
    };

    const handleStatusChange = (id, newStatus) => {
        setUserData((prevData) =>
            prevData.map((user) =>
                user.id === id ? { ...user, status: newStatus } : user
            )
        );
        setEditingStatusId(null);
    };

    return (
        <Grid container spacing={4}>
            {userData.map((user) => (
                <Grid item xs={12} sm={6} md={4} key={user.id}>
                    <Card sx={{ boxShadow: 3, p: 2 }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                {user.firstName} {user.lastName}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Visa Type: {user.visaType}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" mt={1}>
                                Email: {user.email}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" mt={1}>
                                Mobile Number: {user.mobileNumber}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" mt={1}>
                                Passport Number: {user.passportNumber}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" mt={1}>
                                Nationality: {user.nationality}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" mt={1}>
                                Address: {user.address}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" mt={1}>
                                Travel From: {user.travelFrom}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" mt={1}>
                                Travel To: {user.travelTo}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" mt={1}>
                                Reference Id: {user.referenceId}
                            </Typography>

                            <Box mt={2} mb={2}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                                    Status:{' '}
                                    <span style={{ color: user.status === 'Processed' ? 'green' : user.status === 'Sent' ? 'blue' : 'orange' }}>
                                        {user.status}
                                    </span>
                                </Typography>
                            </Box>

                            {/* Show status update dropdown if this card is in edit mode */}
                            {editingStatusId === user.id ? (
                                <FormControl fullWidth sx={{ mt: 2 }}>
                                    <InputLabel id={`status-label-${user.id}`} sx={{ backgroundColor: "#fff", px: 1 }}>
                                        Status
                                    </InputLabel>
                                    <Select
                                        labelId={`status-label-${user.id}`}
                                        value={user.status}
                                        onChange={(e) => handleStatusChange(user.id, e.target.value)}
                                        sx={{
                                            borderRadius: 1,
                                            backgroundColor: "#fff",
                                            minHeight: "48px", // Increased height
                                            "& .MuiSelect-select": {
                                                py: 1.5, // Adjust vertical padding for better alignment
                                            },
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#ccc",
                                            },
                                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#073763",
                                            },
                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#073763",
                                            },
                                        }}
                                    >
                                        <MenuItem value="Processed">Processed</MenuItem>
                                        <MenuItem value="Sent">Sent</MenuItem>
                                        <MenuItem value="Confirmed">Confirmed</MenuItem>
                                    </Select>
                                </FormControl>


                            ) : (
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            mt: 2,
                                            color: 'white',
                                            backgroundColor: '#073763',
                                            transition: 'background-color 0.3s ease',
                                            '&:hover': { backgroundColor: '#062d54' },
                                            '&:focus': { backgroundColor: '#073763', outline: 'none' },
                                            '&:active': { backgroundColor: '#041f3a', border: '1px solid #bdbdbd' },
                                        }}
                                        endIcon={<ArrowForwardIcon />}
                                        onClick={() => handleNextClick(user.id)}
                                    >
                                        Edit Status
                                    </Button>
                                </Box>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default UserStatus;
