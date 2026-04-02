import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BuildIcon from "@mui/icons-material/Build";
import SpeedIcon from "@mui/icons-material/Speed";
import PeopleIcon from "@mui/icons-material/People";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const features = [
    {
        title: "AI-Driven Approach",
        description: "We leverage modern AI tools and technologies to build smarter and more efficient solutions.",
        icon: <PsychologyIcon fontSize="large" />,
    },
    {
        title: "Scalable Architecture",
        description: "Our systems are built to grow with your business — from startup to enterprise.",
        icon: <TrendingUpIcon fontSize="large" />,
    },
    {
        title: "End-to-End Development",
        description: "From idea to deployment, we handle everything so you can focus on your business.",
        icon: <BuildIcon fontSize="large" />,
    },
    {
        title: "Performance & Reliability",
        description: "We build fast, secure, and reliable applications that deliver consistent performance.",
        icon: <SpeedIcon fontSize="large" />,
    },
    {
        title: "Client-Centric Approach",
        description: "We understand your business needs and build solutions tailored specifically for you.",
        icon: <PeopleIcon fontSize="large" />,
    },
    {
        title: "Modern UI/UX Design",
        description: "Clean, intuitive, and user-friendly interfaces that enhance user experience.",
        icon: <DesignServicesIcon fontSize="large" />,
    },
];

export default function WhyChooseUs() {
    return (
        <Box sx={{ py: 10, backgroundColor: "#F9FAFB" }}>
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
                    Why Choose Encode Studio
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
                    We combine technology, design, and strategy to deliver high-quality digital solutions that drive real results.
                </Typography>

                {/* GRID */}
                <Grid container spacing={4} justifyContent="center">
                    {features.map((item, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={index}
                            sx={{ display: "flex", justifyContent: "center" }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    borderRadius: "16px",
                                    border: "1px solid rgba(0,0,0,0.06)",
                                    width: "100%",
                                    maxWidth: "350px",
                                    textAlign: "center",
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                                    },
                                }}
                            >
                                {/* ICON */}
                                <Box sx={{ color: "primary.main", mb: 2 }}>
                                    {item.icon}
                                </Box>

                                {/* TITLE */}
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                    {item.title}
                                </Typography>

                                {/* DESCRIPTION */}
                                <Typography sx={{ color: "text.secondary", fontSize: "14px" }}>
                                    {item.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    );
}