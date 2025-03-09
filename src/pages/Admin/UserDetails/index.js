import '@fortawesome/fontawesome-free/css/all.min.css';
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import AdminNavBar from "pages/Admin/AdminNavBar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from '@mui/material';

// Routes
import footerRoutes from "footer.routes";

function UserTable() {
    // Sample user data for the table
    const userAuthenticationData = [
        { id: 1, name: "Danu", email: "danu@example.com", password: "password123" },
        { id: 2, name: "Thiva", email: "thiva@example.com", password: "password456" },
        { id: 3, name: "Mathu", email: "mathu@example.com", password: "password789" },
        { id: 4, name: "Ravi", email: "ravi@example.com", password: "password101" },
        { id: 5, name: "Priya", email: "priya@example.com", password: "password202" },
        { id: 6, name: "Siti", email: "siti@example.com", password: "password303" },
        { id: 7, name: "Aman", email: "aman@example.com", password: "password404" },
        { id: 8, name: "Kavya", email: "kavya@example.com", password: "password505" },
        { id: 9, name: "Nina", email: "nina@example.com", password: "password606" },
     
    ];

    return (
        <>
            <AdminNavBar />
            <MKBox
                minHeight="100vh"
                width="100%"
                sx={{
                    backgroundColor: "#fff0f3",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    px: { xs: 2, md: 6 },
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12}>
                            <Card
                                sx={{
                                    p: 3,
                                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                                }}
                            >
                                <MKBox
                                    sx={{
                                        background: "linear-gradient(90deg, #eeeeee, #B2B2B2, #eeeeee)",
                                        borderRadius: "8px",
                                        padding: "12px",
                                        textAlign: "center",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <MKTypography variant="h4" color="white">
                                        All Users
                                    </MKTypography>
                                </MKBox>

                                {/* User Table */}
                                <MKBox sx={{ mt: 4 }}>
                                    <TableContainer component={Paper} sx={{ width: "100%", boxShadow: 3 }}>
                                        <Table>
                                            {/* Table Body */}
                                            <TableBody>
                                                {userAuthenticationData.map((user) => (
                                                    <TableRow key={user.id}>
                                                        {/* Name Column */}
                                                        <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}>
                                                            {user.name}
                                                        </TableCell>

                                                        {/* Email Column */}
                                                        <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}>
                                                            {user.email}
                                                        </TableCell>

                                                        {/* Password Column */}
                                                        <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}>
                                                            {user.password}
                                                        </TableCell>

                                                        {/* Action Column */}
                                                        <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}>
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
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </MKBox>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </MKBox>

            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}

export default UserTable;
