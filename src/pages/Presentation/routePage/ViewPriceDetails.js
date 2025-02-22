import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import DefaultNavbar from 'examples/DefaultNavbar';
import DefaultFooter from 'examples/Footers/DefaultFooter';
import routes from 'routes';
import footerRoutes from 'footer.routes';
import MKButton from 'components/MKButton';
import { Link } from 'react-router-dom';
import { FormControl, Select, MenuItem } from '@mui/material';

import bgImage from 'assets/images/stepnew.jpeg';

// List of visa types and their corresponding prices
const visaTypes = [
  { type: '14-Day Tourist Visa (Adult, Single Entry)', price: 50000 },
  { type: '14-Day Tourist Visa (Child Under 12, Single Entry)', price: 25000 },
  { type: '30-Day Tourist Visa (Adult, Single Entry)', price: 75000 },
  { type: '30-Day Tourist Visa (Child Under 12, Single Entry)', price: 35000 },
  { type: '30-Day Tourist Visa (Child Under 12, Multiple Entry)', price: 45000 },
  { type: '60-Day Tourist Visa (Adult, Multiple Entry)', price: 10000},
  { type: '60-Day Tourist Visa (Child Under 12, Multiple Entry)', price: 50000 },
];

const ViewPriceDetails = () => {
  const [selectedVisa, setSelectedVisa] = useState(''); // Start with an empty value

  // Handle visa type change
  const handleVisaChange = (event) => {
    setSelectedVisa(event.target.value); // Update the selected value
  };

  // Find the selected visa's details based on the selected visa type
  const selectedVisaDetails = visaTypes.find((visa) => visa.type === selectedVisa);

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "default",
        }}
        transparent
        light
      />

      {/* Background Image */}
      <MKBox
        sx={{
          position: 'absolute',
          top: '64px',
          left: '0',
          width: '100%',
          height: 'calc(100vh - 64px)',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      />

      {/* Main Content Area */}
      <MKBox
        sx={{
          position: 'relative',
          zIndex: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 64px)',
          paddingTop: '80px',
        }}
      >
        <MKBox
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="100%"
          sx={{
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '16px',
            padding: '20px',
            maxWidth: '600px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
          }}
        >
          <MKBox
            variant="gradient"
            bgColor="info"
            coloredShadow="info"
            borderRadius="lg"
            p={2}
            mx={2}
            mt={-3}
          >
            <MKTypography variant="h3" color="white">
              Visa Price Calculator
            </MKTypography>
          </MKBox>

          <MKBox p={3}>
            <MKTypography variant="body2" color="text" mb={3}>
              Select a visa type to see the price details.
            </MKTypography>

            <MKBox width="100%" component="form" method="post" autoComplete="off">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth margin="normal">
                    <Select
                      value={selectedVisa}
                      onChange={handleVisaChange}
                      displayEmpty
                      required
                      sx={{
                        '& .MuiSelect-select': {
                          padding: '14px 18px',  // Adjust padding for more height
                          height: '56px',        // Increase the height
                          display: 'flex',
                          alignItems: 'center',
                        },
                        '& .MuiInputBase-root': {
                          height: '72px',        // Increase the overall height of the input field
                          display: 'flex',
                          alignItems: 'center',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(0, 0, 0, 0.23)',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(0, 0, 0, 0.87)',
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        -- Select Visa Type --
                      </MenuItem>
                      {visaTypes.map((visa) => (
                        <MenuItem key={visa.type} value={visa.type}>
                          {visa.type}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {selectedVisaDetails && (
                  <Grid item xs={12}>
                    <MKTypography variant="h5" color="text" fontWeight="bold">
                      Price: Rs. {selectedVisaDetails.price.toFixed(2)}
                    </MKTypography>
                  </Grid>
                )}
              </Grid>

              <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                <MKButton
                  component={Link}
                  to="/startyourapplication"
                  variant="gradient"
                  color="info"
                  size="large"
                >
                  Start your Application
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </MKBox>
      </MKBox>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default ViewPriceDetails;
