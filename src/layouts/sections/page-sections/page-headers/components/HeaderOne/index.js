import { useState } from "react";
import { Box, Container, Grid, Typography, FormControl, Select, MenuItem, InputLabel, OutlinedInput } from "@mui/material";
import bgImage from "assets/images/bg-coworking.jpeg"; // Ensure correct path

const visaPrices = {
  tourist: "$100",
  business: "$200",
  student: "$150",
};

function HeaderOne() {
  const [selectedVisa, setSelectedVisa] = useState("");

  return (
    <Box component="header" position="relative" height="100%">
      {/* Main Header Content */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          px: 2,
        }}
      >
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                Visa Price Calculator
              </Typography>
              <Typography variant="h5" sx={{ opacity: 0.9, mb: 3 }}>
                Select your visa type to see the price details.
              </Typography>

              {/* Styled Dropdown */}
              <FormControl fullWidth variant="outlined">
                <InputLabel sx={{ color: "black" }}>Select Visa Type</InputLabel>
                <Select
                  value={selectedVisa}
                  onChange={(e) => setSelectedVisa(e.target.value)}
                  input={
                    <OutlinedInput
                      label="Visa Type"
                      sx={{
                        bgcolor: "white",
                        borderRadius: 2,
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        "& fieldset": { borderColor: "#1976d2" },
                        "&:hover fieldset": { borderColor: "#125ea3" },
                        "&.Mui-focused fieldset": { borderColor: "#0d47a1" },
                      }}
                    />
                  }
                >
                  <MenuItem value="tourist">Tourist Visa</MenuItem>
                  <MenuItem value="business">Business Visa</MenuItem>
                  <MenuItem value="student">Student Visa</MenuItem>
                </Select>
              </FormControl>

              {/* Display Selected Visa Price */}
              {selectedVisa && (
                <Typography variant="h3" fontWeight="bold" mt={3} sx={{ color: "#FFD700" }}>
                  Price: {visaPrices[selectedVisa]}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default HeaderOne;
