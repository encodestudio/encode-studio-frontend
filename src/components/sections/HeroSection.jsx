import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                position: "relative",
                height: { xs: "80vh", md: "100vh" },
                width: "100%",
                overflow: "hidden",
            }}
        >
            {/* BACKGROUND IMAGE */}
            <Box
                component="img"
                src="/hero.png"
                alt="Hero"
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                }}
            />

            {/* LEFT GRADIENT OVERLAY */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to right, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.6) 50%, transparent 70%)",
                }}
            />

            {/* CONTENT */}
            <Container
                sx={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Box maxWidth="550px">
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            color: "#111827",
                            mb: 2,
                        }}
                    >
                        Build Smarter with AI-Powered Digital Solutions
                    </Typography>

                    <Typography
                        sx={{
                            color: "#4B5563",
                            fontSize: "18px",
                            mb: 4,
                        }}
                    >
                        We design and develop intelligent websites, web applications, and
                        scalable software tailored for modern businesses and institutions.
                    </Typography>

                    {/* CTA BUTTONS */}
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Button
                            variant="contained"
                            onClick={() => navigate("/contact")}
                            sx={{
                                background: "#3FA9F5",
                                px: 3,
                                py: 1.5,
                                borderRadius: "8px",
                                fontWeight: "bold",
                            }}
                        >
                            Start Your Project
                        </Button>

                        <Button
                            variant="outlined"
                            onClick={() => navigate("/about")}
                            sx={{
                                px: 3,
                                py: 1.5,
                                borderRadius: "8px",
                            }}
                        >
                            About Us
                        </Button>
                    </Box>

                    {/* TRUST TEXT */}
                    <Typography
                        sx={{
                            mt: 3,
                            color: "#6B7280",
                            fontSize: "14px",
                        }}
                    >
                        Trusted by growing businesses & institutions
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}