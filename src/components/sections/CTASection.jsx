import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                py: 10,
                background: "linear-gradient(135deg, #3FA9F5 0%, #2563EB 100%)",
                color: "#fff",
                textAlign: "center",
            }}
        >
            <Container maxWidth="md">

                {/* HEADLINE */}
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                    }}
                >
                    Let’s Build Something Amazing Together
                </Typography>

                {/* SUBTEXT */}
                <Typography
                    sx={{
                        mb: 4,
                        fontSize: "18px",
                        opacity: 0.9,
                    }}
                >
                    Have an idea or project in mind? Let’s discuss how we can bring it to life with smart and scalable digital solutions.
                </Typography>

                {/* BUTTONS */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        flexWrap: "wrap",
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#fff",
                            color: "#2563EB",
                            fontWeight: 600,
                            px: 4,
                            py: 1.5,
                            borderRadius: "8px",
                            "&:hover": {
                                backgroundColor: "#f3f4f6",
                            },
                        }}
                        onClick={() => navigate("/contact")}
                    >
                        Start Your Project
                    </Button>

                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: "#fff",
                            color: "#fff",
                            px: 4,
                            py: 1.5,
                            borderRadius: "8px",
                            "&:hover": {
                                borderColor: "#fff",
                                backgroundColor: "rgba(255,255,255,0.1)",
                            },
                        }}
                        onClick={() => navigate("/contact")}
                    >
                        Contact Us
                    </Button>
                </Box>

            </Container>
        </Box>
    );
}