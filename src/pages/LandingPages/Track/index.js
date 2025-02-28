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
          p: 3,
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: 450,
            p: 4,
            boxShadow: 5,
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
            Track Your Application
          </Typography>

          <TextField
            fullWidth
            label="Reference Number"
            placeholder="Enter your reference number"
            variant="outlined"
            margin="normal"
          />

          <TextField
            fullWidth
            label="Email Address"
            placeholder="Enter your email"
            variant="outlined"
            margin="normal"
            type="email"
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              p: 1.5,
              fontSize: "16px",
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
