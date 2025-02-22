// import React, { useState } from "react";
// import Container from "@mui/material/Container";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

// const steps = [
//   "Prepare Required Documents",
//   "Choose Visa Type",
//   "Fill Application Form",
//   "Upload Documents",
//   "Make Payment",
//   "Track Application",
// ];

// const stepDetails = [
//   `Valid passport (6+ months validity), recent passport-size photo, return flight tickets, completed visa application form`,
//   `Select visa type: 14-Day, 30-Day, 60-Day options with different pricing for adults and children`,
//   `Fill out personal details, travel dates, and contact info, and review for accuracy`,
//   `Upload scanned passport copy, photo, flight tickets (if available), ensure clarity`,
//   `Review fees, select payment method, complete secure transaction, receive confirmation`,
//   `Receive application reference number\nTrack application status online\nReceive visa via email when approved\nPrint visa for travel`,
// ];

// function ApplicationProcessGuide() {
//   const [activeStep, setActiveStep] = useState(0);

//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   return (
//     <Container sx={{ mt: 5, textAlign: "center" }}>
//       <Typography variant="h4" gutterBottom>
//         Application Process Guide
//       </Typography>
//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <Box sx={{ mt: 3, mb: 3 }}>
//         <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>{stepDetails[activeStep]}</Typography>
//       </Box>
//       <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
//         <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined">
//           Back
//         </Button>
//         <Button
//           onClick={handleNext}
//           variant="contained"
//           disabled={activeStep === steps.length - 1}
//         >
//           {activeStep === steps.length - 1 ? "Finish" : "Next"}
//         </Button>
//       </Box>
//     </Container>
//   );
// }

// export default ApplicationProcessGuide;
