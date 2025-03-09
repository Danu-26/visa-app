import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";
// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: { xs: 6, sm: 12 } }}>
          <Grid
            container
            item
            xs={12}
            md={7}
            justifyContent="center"
            mx="auto"
            textAlign="center"
          >
            <MKTypography
              variant="h3"
              color="white"
              sx={{ fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' } }}
            >
              Apply for your visa online with ease.
            </MKTypography>
            <MKTypography
              variant="h3"
              color="white"
              mb={1}
              sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
            >
              Quick, Secure &amp; Reliable
            </MKTypography>
            <MKTypography
              variant="body2"
              color="white"
              mb={6}
              sx={{ fontSize: { xs: '0.85rem', sm: '1rem', md: '1.125rem' } }}
            >
              You can check the progress of your visa application at any time by visiting the Track Your Application page. Simply enter your reference ID and email address to see the current status.
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component={Link}
              to="/startyourapplication"
              sx={{ mb: 2 }}
            >
              START YOUR APPLICATION
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Download;
