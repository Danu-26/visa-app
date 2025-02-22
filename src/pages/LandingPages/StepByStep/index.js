import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Card,
  Box,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MKBox from "components/MKBox";
import Container from "@mui/material/Container";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DefaultNavbar from "examples/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import stepBgImage from "assets/images/stepnew.jpg";
import routes from "routes";

const steps = [
  "Prepare Documents",
  "Choose Visa Type",
  "Fill Application",
  "Upload Documents",
  "Make Payment",
  "Track Application",
];

const stepDetails = [
  ["Valid passport (6+ months validity)", "Recent passport-size photo", "Return flight tickets", "Completed visa application form"],
  ["Select visa type: 14-Day, 30-Day, 60-Day", "Different pricing for adults & children"],
  ["Fill out personal details", "Provide travel dates & contact info", "Review for accuracy"],
  ["Upload scanned passport copy", "Upload passport-size photo", "Upload flight tickets (if available)", "Ensure document clarity"],
  ["Review visa fees", "Select payment method", "Complete secure transaction", "Receive confirmation email"],
  ["Receive reference number", "Track visa status online", "Receive visa via email", "Print visa for travel"],
];

function ApplicationProcessGuide() {
  const [activeStep, setActiveStep] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)"); // Detects mobile screen

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "Free Download",
          color: "info",
        }}
        transparent
        light
      />

      {/* Header Section */}
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${stepBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center", px: { xs: 2, md: 0 } }}
          >
            <MKTypography
              variant="h3"
              color="white"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" }, // Responsive font size
                textAlign: "center",
              }}
            >
              Visa Application Process
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Follow these simple steps to complete your visa application.
            </MKTypography>
            <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}   component={Link}
              to="/startyourapplication">
              Start your Application
            </MKButton>
          </Grid>
        </Container>
      </MKBox>

      {/* Stepper Section */}
      <Card
        sx={{
          p: 2,
          mx: { xs: 1, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <CardContent>
          {/* Stepper */}
          <Stepper activeStep={activeStep} alternativeLabel={!isMobile} orientation={isMobile ? "vertical" : "horizontal"}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Step Details */}
          <Box sx={{ mt: 3, mb: 3, px: { xs: 2, md: 0 } }}>
            <Typography variant="h5" fontWeight="bold" textAlign="left" mb={1} sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
              {steps[activeStep]}
            </Typography>
        <List sx={{ width: "100%", p: 0 }}>
  {stepDetails[activeStep].map((detail, index) => (
    <ListItem
      key={index}
      sx={{
        my: 1,
        px: 2,
        py: 1.5,
        borderRadius: "12px",
        backgroundColor: "#F9FAFB", // Light grey background
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)", // Soft shadow
        display: "flex",
        alignItems: "center",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: "#E3F2FD", // Light blue on hover
        },
      }}
    >
      <ListItemIcon sx={{ minWidth: "40px", color: "#1976D2" }}>
        <CheckCircleIcon fontSize="medium" />
      </ListItemIcon>
      <ListItemText
        primary={detail}
        primaryTypographyProps={{
          fontSize: "1rem",
          fontWeight: 500,
          color: "#333",
        }}
      />
    </ListItem>
  ))}
</List>

          </Box>

          {/* Navigation Buttons */}
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="outlined"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{
                  color: "#9E9E9E",
                  borderColor: "#9E9E9E",
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  "&:hover": {
                    color: "#1976D2",
                    borderColor: "#1976D2",
                  },
                }}
              >
                Back
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
                sx={{
                  fontSize: { xs: "0.8rem", md: "1rem" },
                }}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Footer */}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ApplicationProcessGuide;
