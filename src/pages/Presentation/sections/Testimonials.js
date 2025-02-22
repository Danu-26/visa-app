/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images

import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,579,400+ web clients
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
           Thousands of travelers, professionals, students, and businesses rely on our visa services for a smooth and hassle-free application process.
          </MKTypography>
        </Grid>
      <Grid container spacing={3} sx={{ mt: 8 }}>
  <Grid item xs={12} md={6} lg={4}>
    <DefaultReviewCard
      name="Emily Johnson"
      date="2 days ago"
      review="The visa application process was so smooth and easy to follow. I got my approval faster than expected. Highly recommended!"
      rating={5}
    />
  </Grid>
  <Grid item xs={12} md={6} lg={4}>
    <DefaultReviewCard
      color="info"
      name="Rahul Mehta"
      date="1 week ago"
      review="Great service! The step-by-step guidance made everything clear, and the support team was very helpful when I had questions."
      rating={5}
    />
  </Grid>
  <Grid item xs={12} md={6} lg={4}>
    <DefaultReviewCard
      name="Sophia Lee"
      date="3 weeks ago"
      review="Applying for a visa has never been this simple! The website is user-friendly, and I could track my application easily."
      rating={5}
    />
  </Grid>
</Grid>

        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={facebookLogo} alt="Facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasaLogo} alt="Nasa" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafoneLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
