import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import PublicIcon from "@mui/icons-material/Public";
import BrushIcon from "@mui/icons-material/Brush";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const services = [
    {
        title: "Website Development",
        description: "Modern, responsive websites designed to convert visitors into customers.",
        icon: <LanguageIcon fontSize="large" />,
    },
    {
        title: "Web Application Development",
        description: "Scalable and high-performance web apps tailored to your business workflows.",
        icon: <AppsIcon fontSize="large" />,
    },
    {
        title: "Custom CRM / ERP Solutions",
        description: "Build powerful systems to automate and manage your business operations.",
        icon: <SettingsIcon fontSize="large" />,
    },
    {
        title: "WordPress Development",
        description: "Flexible and SEO-friendly WordPress websites for fast deployment.",
        icon: <PublicIcon fontSize="large" />,
    },
    {
        title: "Branding & Digital Design",
        description: "Create a strong brand identity with modern and impactful design.",
        icon: <BrushIcon fontSize="large" />,
    },
    {
        title: "AI Integration & Automation",
        description: "Integrate AI into your business workflows to automate processes, improve efficiency, and unlock smarter decision-making.",
        icon: <SmartToyIcon fontSize="large" />,
    },
];

export default function ServicesSection() {
    return (
        <Box sx={{ py: 10, backgroundColor: "background.default" }}>
            <Container>

                {/* HEADING */}
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        textAlign: "center",
                        mb: 2,
                    }}
                >
                    Our Services
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
                    We build modern, scalable, and intelligent digital solutions tailored to your business needs.
                </Typography>

                {/* GRID */}
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    sx={{
                        maxWidth: "1200px",
                        mx: "auto",
                    }}
                >
                    {services.map((service, index) => (
                        <Grid item
                            xs={12}
                            sm={6}
                            md={4}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }} key={index}>

                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    borderRadius: "16px",
                                    border: "1px solid rgba(0,0,0,0.06)",
                                    transition: "0.3s",
                                    height: "100%",
                                    width: "100%",
                                    maxWidth: "350px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                                    },
                                }}
                            >

                                {/* ICON */}
                                <Box sx={{ color: "primary.main", mb: 2 }}>
                                    {service.icon}
                                </Box>

                                {/* TITLE */}
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 600, mb: 1 }}
                                >
                                    {service.title}
                                </Typography>

                                {/* DESCRIPTION */}
                                <Typography
                                    sx={{ color: "text.secondary", fontSize: "14px" }}
                                >
                                    {service.description}
                                </Typography>
                            </Paper>

                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}