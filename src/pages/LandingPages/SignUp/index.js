import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function SignUp() {
  return (
    <>

      <MKBox
        position="absolute"
        top={0}
        left={0}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(rgba(gradients.dark.main, 0.6), rgba(gradients.dark.state, 0.6))}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" position="relative">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox variant="gradient" bgColor="info" borderRadius="lg" mx={2} mt={-3} p={2} textAlign="center">
                <MKTypography variant="h4" fontWeight="medium" color="white">Sign up</MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form">
                  <MKBox mb={2}><MKInput type="text" label="Name" fullWidth /></MKBox>
                  <MKBox mb={2}><MKInput type="email" label="Email" fullWidth /></MKBox>
                  <MKBox mb={2}><MKInput type="password" label="Password" fullWidth /></MKBox>
                  <MKBox mb={2}><MKInput type="password" label="Confirm Password" fullWidth /></MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth>Sign up</MKButton>
                  </MKBox>
                  <MKBox mt={3} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Already have an account?{" "}
                      <MKTypography component={Link} to="/signin" color="info" fontWeight="medium" textGradient>
                        Sign in
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
   
    </>
  );
}

export default SignUp;
