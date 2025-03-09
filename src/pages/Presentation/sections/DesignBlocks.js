// react-router-dom components
import { useState } from "react";
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Data
import data from "pages/Presentation/sections/data/designBlocksData";

function DesignBlocks() {
  const [open, setOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  const handleOpen = (news) => {
    setSelectedNews(news);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedNews(null);
  };

  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" color="primary" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ name, content, date }) => (
            <Grid item xs={12} md={6} key={name}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  backgroundColor: "#f9f9f9",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <MKTypography
                  variant="h5"
                  fontWeight="bold"
                  mb={1}
                  sx={{ color: "#0d47a1", textTransform: "uppercase" }}
                >
                  {name}
                </MKTypography>
                <MKTypography
                  variant="caption"
                  color="textSecondary"
                  fontStyle="italic"
                  display="block"
                  mb={1}
                >
                  {date}
                </MKTypography>
                <MKTypography variant="body2" color="textSecondary" sx={{ lineHeight: "1.6" }}>
                  {content.substring(0, 80)}... {/* Show short preview */}
                </MKTypography>
                <Link
                  to="#"
                  style={{ textDecoration: "none" }}
                  onClick={() => handleOpen({ name, content, date })}
                >
                  <MKTypography
                    variant="body2"
                    fontWeight="bold"
                    color="primary"
                    sx={{
                      display: "inline-block",
                      mt: 2,
                      transition: "color 0.3s ease",
                      "&:hover": { color: "#ff5722" },
                    }}
                  >
                    Read More →
                  </MKTypography>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
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
            badgeContent="Latest Updates"
            container
            sx={{ mb: 2 }}
          />
             <MKTypography
                        variant="h2"
                        fontWeight="bold"
                        textAlign="center"
                        mb={3}
                        sx={{
                          color: "#533440", 
                          fontFamily: '"Playfair Display", serif', 
                        }}
                        className="text-[#0f172a] font-serif"
                      >
            Latest News
          </MKTypography>
          <MKTypography variant="body1" color="textSecondary">
            Stay updated with the latest visa policies and travel advisories.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>

      {/* Modal for Full News Content */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle sx={{ fontWeight: "bold", color: "#0d47a1" }}>
          {selectedNews?.name}
        </DialogTitle>
        <DialogContent>
          <MKTypography variant="caption" color="textSecondary" fontStyle="italic" display="block">
            {selectedNews?.date}
          </MKTypography>
          <MKTypography variant="body1" color="textSecondary" sx={{ mt: 2, lineHeight: "1.8" }}>
            {selectedNews?.content}
          </MKTypography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </MKBox>
  );
}

export default DesignBlocks;
