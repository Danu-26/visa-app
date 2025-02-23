import '@fortawesome/fontawesome-free/css/all.min.css';
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import DefaultNavbar from "examples/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from '@mui/material';

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-admin-dashboard.jpg";

function UserTable() {
    // Sample user data for the table
    const userAuthenticationData = [
        { id: 1, name: "Danu", email: "danu@example.com", password: "password123" },
        { id: 2, name: "Thiva", email: "thiva@example.com", password: "password456" },
        { id: 3, name: "Mathu", email: "mathu@example.com", password: "password789" },
    ];

    return (
        <>
            <DefaultNavbar
                routes={routes}
                action={{
                    type: "external",
                    route: "/admin-settings",
                    label: "Settings",
                    color: "default",
                }}
                transparent
                light
            />
            <MKBox
                minHeight="75vh"
                width="100%"
                sx={{
                    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.6),
                            rgba(gradients.dark.state, 0.6)
                        )}, url(${bgImage})`,
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
                        sx={{ mx: "auto", textAlign: "center" }}
                    >
                        <MKTypography
                            variant="h1"
                            color="white"
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                        >
                            Admin Dashboard
                        </MKTypography>
                        <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
                            Manage Visa Applications and User Status
                        </MKTypography>
                    </Grid>
                </Container>
            </MKBox>

            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -8,
                    mb: 4,
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <MKBox
                    sx={{
                        background: "linear-gradient(90deg, #007bff, #0056b3)",
                        borderRadius: "8px",
                        padding: "12px",
                        textAlign: "center",
                        marginBottom: "20px",
                    }}
                >
                    <MKTypography variant="h4" color="white">
                        All User
                    </MKTypography>
                </MKBox>
                {/* User Table */}
                <MKBox sx={{ mt: 4 }}>
                    <TableContainer component={Paper} sx={{ width: "80%", margin: "auto", mt: 4, boxShadow: 3 }}>
                        <Table>
                            <TableBody>
                                {/* Name Row */}
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}>Name</TableCell>
                                    {userAuthenticationData.map((user) => (
                                        <TableCell key={user.id}>{user.name}</TableCell>
                                    ))}
                                </TableRow>

                                {/* Email Row */}
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}>Email</TableCell>
                                    {userAuthenticationData.map((user) => (
                                        <TableCell key={user.id}>{user.email}</TableCell>
                                    ))}
                                </TableRow>

                                {/* Password Row */}
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}>Password</TableCell>
                                    {userAuthenticationData.map((user) => (
                                        <TableCell key={user.id}>{user.password}</TableCell>
                                    ))}
                                </TableRow>

                                {/* Action Row */}
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}>Action</TableCell>
                                    {userAuthenticationData.map((user) => (
                                        <TableCell key={user.id}>
                                            <button
                                                style={{
                                                    backgroundColor: "#f44336",
                                                    color: "white",
                                                    padding: "5px 10px",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    borderRadius: "5px",
                                                    textTransform: "uppercase",
                                                    fontWeight: "bold",
                                                    transition: "background-color 0.3s ease",
                                                }}
                                                onClick={() => console.log(`User with ID ${user.id} deleted`)}
                                            >
                                                Delete
                                            </button>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </MKBox>
            </Card>

            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}

export default UserTable;
