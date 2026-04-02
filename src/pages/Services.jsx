import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const services = [
    {
        title: "Website Development",
        description:
            "Modern, responsive websites designed to convert visitors into customers and represent your brand professionally.",
        features: [
            "Responsive design for all devices",
            "SEO-friendly structure",
            "Fast loading performance",
            "Modern UI/UX design",
        ],
        image: "web-dev.png",
    },
    {
        title: "Web Application Development",
        description:
            "Custom-built web applications tailored to your business workflows and scalable for future growth.",
        features: [
            "Custom dashboards",
            "Role-based access systems",
            "Scalable architecture",
            "High performance backend",
        ],
        image: "web-app-dev.png",
    },
    {
        title: "CRM / ERP Solutions",
        description:
            "Streamline your business operations with powerful CRM and ERP systems designed for automation and efficiency.",
        features: [
            "Workflow automation",
            "Data management systems",
            "Reporting & analytics",
            "Multi-user access",
        ],
        image: "encode-crm.png",
    },
    {
        title: "AI Integration & Automation",
        description:
            "Leverage AI to automate processes, enhance productivity, and unlock smarter business decisions.",
        features: [
            "AI-based automation",
            "Chatbots & assistants",
            "Data insights",
            "Process optimization",
        ],
        image: "ai-automation.png",
    },
    {
        title: "WordPress Development",
        description:
            "Flexible and easy-to-manage WordPress websites for businesses looking for quick and effective solutions.",
        features: [
            "Custom themes",
            "Plugin integration",
            "SEO optimization",
            "Easy content management",
        ],
        image: "wp-dev.png",
    },
    {
        title: "Branding & Digital Design",
        description:
            "Build a strong brand identity with modern design that creates a lasting impression.",
        features: [
            "Logo design",
            "Brand identity",
            "Marketing creatives",
            "UI/UX design",
        ],
        image: "designing.png",
    },
];

export default function Services() {
    const navigate = useNavigate();

    return (
        <Box sx={{ py: 10 }}>
            <Container maxWidth="lg">

                {/* HERO */}
                <Typography
                    variant="h3"
                    sx={{ fontWeight: 700, textAlign: "center", mb: 2 }}
                >
                    Our Services
                </Typography>

                <Typography
                    sx={{
                        textAlign: "center",
                        color: "text.secondary",
                        mb: 10,
                        maxWidth: "600px",
                        mx: "auto",
                    }}
                >
                    We provide modern digital solutions to help your business grow, scale, and succeed.
                </Typography>

                {/* SERVICES */}
                {services.map((service, index) => (
                    <Box
                        key={index}
                        sx={{
                            mb: 10,
                            p: { xs: 3, md: 5 },
                            borderRadius: "20px",
                            border: "1px solid rgba(0,0,0,0.05)",
                            background:
                                index % 2 === 0
                                    ? "#ffffff"
                                    : "linear-gradient(180deg, #f9fbff 0%, #f1f5ff 100%)",
                            transition: "0.3s",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: {
                                    xs: "column",
                                    md: index % 2 === 0 ? "row" : "row-reverse",
                                },
                                alignItems: "center",
                                gap: { xs: 3, md: 5 },
                            }}
                        >
                            {/* TEXT */}
                            <Box
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                                    {service.title}
                                </Typography>

                                <Typography sx={{ color: "text.secondary", mb: 3 }}>
                                    {service.description}
                                </Typography>

                                {/* FEATURES */}
                                <Box sx={{ mb: 3 }}>
                                    {service.features.map((feature, i) => (
                                        <Typography
                                            key={i}
                                            sx={{
                                                mb: 1,
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 6,
                                                    height: 6,
                                                    backgroundColor: "#1976d2",
                                                    borderRadius: "50%",
                                                    mr: 1.5,
                                                }}
                                            />
                                            {feature}
                                        </Typography>
                                    ))}
                                </Box>

                                <Button
                                    variant="contained"
                                    onClick={() => navigate("/contact")}
                                    sx={{
                                        borderRadius: "8px",
                                        textTransform: "none",
                                        px: 3,
                                        width: "fit-content",
                                    }}
                                >
                                    Get Started
                                </Button>
                            </Box>

                            {/* IMAGE */}
                            <Box
                                component="img"
                                src={`/services/${service.image}`}
                                alt={service.title}
                                sx={{
                                    flex: 1,
                                    width: "100%",
                                    maxWidth: 420,
                                    height: 260,
                                    objectFit: "cover",
                                    borderRadius: "16px",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                                }}
                            />
                        </Box>
                    </Box>
                ))}

                {/* CTA */}
                <Box sx={{ textAlign: "center", mt: 10 }}>
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                        Let’s Build Something Amazing
                    </Typography>

                    <Typography sx={{ color: "text.secondary", mb: 3 }}>
                        Ready to take your business to the next level? Let’s get started.
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate("/contact")}
                        sx={{
                            borderRadius: "10px",
                            px: 4,
                            py: 1.5,
                        }}
                    >
                        Contact Us
                    </Button>
                </Box>

            </Container>
        </Box>
    );
}