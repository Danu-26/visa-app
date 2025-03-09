import React from "react";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
import bgImage from "assets/images/contact1.png";

function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%" zIndex="999">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-react",
            label: "free download",
            color: "info",
          }}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        {/* Background Image Box */}
        <Grid item xs={12} lg={6} sx={{ mt: { xs: "80px", sm: "0" } }}>
          <MKBox
            width="91%"
            height="calc(98vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",  // Ensures the image covers the entire box
              backgroundPosition: "center center", // Centers the image properly on all screen sizes
              backgroundRepeat: "no-repeat", // Prevents the image from repeating
              display: "flex",  // Always display image on all screen sizes
              overflow: "hidden", // Prevents any part of the image from overflowing out of the container
            }}
          />
        </Grid>

        {/* Form Section */}
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          lg={7}
          xl={5}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 12, sm: 20, md: 25 }}  // Increased margin for better spacing from the top
            mb={{ xs: 10, sm: 18, md: 20 }}  // Keeps consistent bottom spacing
            mx={3}
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
              <MKTypography variant="h3" color="white" sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}>
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                For further questions, please email hello@securevisa.com
                or contact using our contact form.
              </MKTypography>

              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12}>
                  <MKTypography variant="h6" fontWeight="bold" align="center">
                    Oriental Travels & Tours (Pvt) Ltd.
                  </MKTypography>
                </Grid>
                <Grid item xs={12}>
                  <MKTypography variant="body2" align="left">
                    <strong>Address:</strong> 93 2/7 Main Street, Colombo 11, Sri Lanka.
                  </MKTypography>
                </Grid>
                <Grid item xs={12}>
                  <MKTypography variant="body2" align="left">
                    <strong>Telephone:</strong> 011 2433 469
                  </MKTypography>
                </Grid>
              </Grid>

              <MKBox mt={4} />
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Full Name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="tel"
                      variant="standard"
                      label="Phone Number"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="What can we help you?"
                      placeholder="Describe your problem in at least 250 characters"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info" fullWidth>
                    Send Message
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
