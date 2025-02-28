import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import AdminNavBar from "pages/Admin/AdminNavBar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import DefaultProfile from "assets/images/team-4.jpg"; // Import default profile image

function AdminProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [adminData, setAdminData] = useState({
        name: "John Doe",
        email: "admin@example.com",
        profileImage: DefaultProfile, // Use imported default image
    });
    const [newImage, setNewImage] = useState(null);

    const handleChange = (e) => {
        setAdminData({ ...adminData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewImage(reader.result); // Set the new image as the preview
            };
            reader.readAsDataURL(file);
        }
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setAdminData({
            ...adminData,
            profileImage: newImage || adminData.profileImage,
        });
        setIsEditing(false);
        setNewImage(null);
    };

    return (
        <>
            <AdminNavBar />
            <MKBox
                minHeight="100vh"
                width="100%"
                sx={{
                    backgroundColor: "#d5a6bd",
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
                        <Grid item xs={12} sm={8} md={6}>
                            <Card sx={{ p: 3, boxShadow: 3 }}>
                                <MKBox textAlign="center">
                                    <img
                                        src={newImage || adminData.profileImage}
                                        alt="Profile"
                                        style={{ width: 100, height: 100, borderRadius: "50%", marginBottom: 10 }}
                                    />
                                    {/* If editing, allow user to upload a new image */}
                                    {isEditing && (
                                        <div>
                                            <Button
                                                component="label"
                                                variant="outlined"
                                                sx={{
                                                    mt: 2,
                                                    color: "#1976d2", // Material-UI primary blue color
                                                    borderColor: "#1976d2", // Ensure border matches text color
                                                    fontWeight: "bold", // Make text stand out
                                                    textTransform: "none", // Keep text normal case
                                                    "&:hover": {
                                                        backgroundColor: "#e3f2fd", // Light blue background on hover
                                                        borderColor: "#1565c0", // Darker blue on hover
                                                    }
                                                }}
                                            >
                                                Upload New Profile Photo
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                    hidden
                                                />
                                            </Button>

                                        </div>
                                    )}
                                </MKBox>

                                {!isEditing ? (
                                    <>
                                        <MKTypography variant="h5">{adminData.name}</MKTypography>
                                        <MKTypography variant="body1" color="textSecondary">{adminData.email}</MKTypography>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{ mt: 2 }}
                                            onClick={handleEditClick}
                                        >
                                            Edit Profile
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        {/* Name & Email Fields */}
                                        <TextField
                                            fullWidth
                                            label="Name"
                                            name="name"
                                            value={adminData.name}
                                            onChange={handleChange}
                                            margin="normal"
                                        />
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            name="email"
                                            value={adminData.email}
                                            onChange={handleChange}
                                            margin="normal"
                                        />

                                        {/* Save Changes Button */}
                                        <Button
                                            variant="contained"
                                                backgroundColor="success"
                                            fullWidth
                                            sx={{ mt: 2 }}
                                            onClick={handleSave}
                                        >
                                            Save Changes
                                        </Button>
                                    </>
                                )}
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

export default AdminProfile;
