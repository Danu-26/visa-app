// React Router DOM components (removed unnecessary Link import)

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/pagesData";

function Pages() {
  // Render the cards dynamically based on data
  const renderData = data.map(({ image, name }) => (
    <Grid
      item
      xs={12}  // Full width on small screens
      sm={6}   // Half width on medium screens (2 images per row)
      md={6}   // Half width on larger screens (2 images per row)
      sx={{ mb: { xs: 3, lg: 0 } }} // Margin adjustment for spacing
      key={name}
    >
      <ExampleCard image={image} name={name} display="grid" minHeight="auto" />
    </Grid>
  ));

  return (
    <MKBox component="section" py={6}>
      <Container>
        {/* Header Section */}
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Boost Creativity"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Oriental Travels & Tours (Pvt) Ltd
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Focus on your journey, and let us handle the process.
          </MKTypography>
        </Grid>
      </Container>

      {/* Image Cards Section */}
      <Container sx={{ mt: { xs: 8, lg: 16 } }}>
        <Grid container spacing={3}>
          {/* Main content with cards */}
          <Grid item xs={12} lg={9} sx={{ mt: 3, px: { xs: 0, lg: 8 } }}>
            <Grid container spacing={3}>
              {renderData}
            </Grid>
          </Grid>

          {/* Sidebar Section */}
          <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                UAE Visa Application Centre for Sri Lankan Passport Holders
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                Welcome to the Visa Application Portal! We are here to guide you through the
                process and make your visa application experience as smooth as possible. Please
                follow the steps below to apply for your visa.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Pages;
