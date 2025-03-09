import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DefaultNavbar from "examples/DefaultNavbar";
// import Contact from "pages/LandingPages/Track/sections/Contact";
import Footer from "pages/LandingPages/Track/sections/Footer";
import routes from "routes";
// import bgImage from "assets/images/city-profile.jpg";
// import bgImage from "assets/images/track2.jpg";

function Track() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        light
      />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#A4DFFD",
          backgroundSize: "cover",
          backgroundPosition: "center",
          p: { xs: 2, sm: 3 }, // Adjust padding for small screens
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: 450,
            p: { xs: 3, sm: 4 }, // Adjust padding for small screens
            boxShadow: 5,
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            mb={3}
            sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem" } }} // Adjust font size for small screens
          >
            Track Your Application
          </Typography>

          <TextField
            fullWidth
            label="Reference Number"
            placeholder="Enter your reference number"
            variant="outlined"
            margin="normal"
            sx={{ fontSize: { xs: "14px", sm: "16px" } }} // Adjust input font size for mobile
          />

          <TextField
            fullWidth
            label="Email Address"
            placeholder="Enter your email"
            variant="outlined"
            margin="normal"
            type="email"
            sx={{ fontSize: { xs: "14px", sm: "16px" } }} // Adjust input font size for mobile
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              p: 1.5,
              fontSize: { xs: "14px", sm: "16px" }, // Adjust button font size for small screens
              fontWeight: "bold",
              backgroundColor: '#003a6b', // Set button background color
              color: 'white', // Set text color to white
              '&:hover': {
                backgroundColor: '#002c53', // Keep the same color on hover
              }
            }}
          >
            Track Application
          </Button>
        </Card>
      </Box>
      {/* 
      <Contact /> */}
      <Footer />
    </>
  );
}

export default Track;
