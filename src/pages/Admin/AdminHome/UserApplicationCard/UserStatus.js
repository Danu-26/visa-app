import React from 'react';
import { Card, CardContent, Grid, Typography, Button, Box } from '@mui/material';
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const userData = [
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
    return (
        <Grid container spacing={4}>
            {userData.map((user) => (
                <Grid item xs={12} sm={6} md={4} key={user.id}>
                    <Card sx={{ boxShadow: 3 }}>
                        <CardContent>
                            <MKTypography variant="h5" gutterBottom>
                                {user.firstName} {user.lastName}
                            </MKTypography>
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

                            <MKBox mt={2} mb={2}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                                    Status:
                                    <span style={{ color: user.status === 'Processed' ? 'green' : user.status === 'Sent' ? 'blue' : 'orange' }}>
                                        {user.status}
                                    </span>
                                </Typography>
                            </MKBox>

                            {/* Aligning the Next button to the right */}
                            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        color: "white", // Ensure text is clearly visible
                                        backgroundColor: "#1976d2", // Primary blue background
                                        "&:hover": {
                                            backgroundColor: "#1565c0", // Darker blue on hover
                                        },
                                        "&:focus": { outline: "none" }, // Removes focus outline
                                        "&:active": {
                                            backgroundColor: "#1565c0",
                                            border: "1px solid #bdbdbd", // Ash-colored border on click
                                        },
                                    }}
                                    endIcon={<ArrowForwardIcon />}
                                >
                                    Next
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default UserStatus;
