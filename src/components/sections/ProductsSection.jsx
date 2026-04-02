import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useNavigate } from "react-router-dom";

export default function ProductsSection() {
    const navigate = useNavigate();

    return (
        <Box sx={{ py: 10, backgroundColor: "#FFFFFF" }}>
            <Container maxWidth="lg">

                {/* HEADING */}
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        textAlign: "center",
                        mb: 2,
                    }}
                >
                    Our Upcoming Products
                </Typography>

                {/* SUBTEXT */}
                <Typography
                    sx={{
                        textAlign: "center",
                        color: "text.secondary",
                        mb: 6,
                        maxWidth: "600px",
                        mx: "auto",
                    }}
                >
                    We build powerful, real-world digital products designed to solve complex problems.
                </Typography>

                {/* PRODUCTS GRID */}
                <Grid container spacing={4} justifyContent="center">

                    {/* ENCODE CAMPUS */}
                    <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                        <Paper
                            sx={{
                                p: 5,
                                borderRadius: "16px",
                                border: "1px solid rgba(0,0,0,0.06)",
                                width: "100%",
                                maxWidth: "500px",
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "translateY(-6px)",
                                    boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    mb: 2,
                                }}
                            >
                                <Box
                                    component="img"
                                    src="/products/encode-campus.png"
                                    alt="Encode Campus"
                                    sx={{
                                        height: 50,
                                        maxWidth: "180px",
                                        objectFit: "contain",
                                    }}
                                />
                            </Box>

                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, textAlign: "center" }}>
                                Encode Campus
                            </Typography>

                            <Typography sx={{ fontWeight: 500, mb: 2, textAlign: "center" }}>
                                Smart School Management System
                            </Typography>

                            <Typography sx={{ color: "text.secondary", mb: 3, textAlign: "center" }}>
                                All-in-one platform to manage students, attendance, exams, fees, transport, and communication.
                            </Typography>

                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    variant="contained"
                                    onClick={() => navigate("/products/encode-campus")}
                                >
                                    View Product
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* ENCODE VERIFY */}
                    <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                        <Paper
                            sx={{
                                p: 5,
                                borderRadius: "16px",
                                border: "1px solid rgba(0,0,0,0.06)",
                                width: "100%",
                                maxWidth: "500px",
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "translateY(-6px)",
                                    boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    mb: 2,
                                }}
                            >
                                <Box
                                    component="img"
                                    src="/products/encode-verify.png"
                                    alt="Encode Verify"
                                    sx={{
                                        height: 50,
                                        maxWidth: "180px",
                                        objectFit: "contain",
                                    }}
                                />
                            </Box>

                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, textAlign: "center" }}>
                                Encode Verify
                            </Typography>

                            <Typography sx={{ fontWeight: 500, mb: 2, textAlign: "center" }}>
                                Digital Verification & Credential Platform
                            </Typography>

                            <Typography sx={{ color: "text.secondary", mb: 3, textAlign: "center" }}>
                                Secure and scalable system for background verification, document validation, and trust-building.
                            </Typography>

                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    variant="contained"
                                    onClick={() => navigate("/products/encode-verify")}
                                >
                                    View Product
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}