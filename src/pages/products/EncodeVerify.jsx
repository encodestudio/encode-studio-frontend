import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import WaitlistForm from "../../components/common/WaitlistForm";
import { useRef } from "react";

export default function EncodeVerify() {
    const navigate = useNavigate();
    const formRef = useRef(null);

    const features = [
        "Employee Verification",
        "Document Validation",
        "Real-time Status Tracking",
        "Secure Data Handling",
        "Automated Workflows",
        "Verification Reports",
    ];

    const sections = [
        {
            title: "Centralized Verification Dashboard",
            desc: "Manage all verification processes in one unified platform with complete visibility.",
            image: "verify-1.png",
        },
        {
            title: "Smart Document Validation",
            desc: "Automate document checks and reduce manual verification time significantly.",
            image: "verify-2.png",
        },
        {
            title: "Real-Time Tracking & Reports",
            desc: "Track verification status instantly with detailed reports and analytics.",
            image: "verify-3.png",
        },
    ];

    return (
        <Box sx={{ py: 10 }}>
            <Container maxWidth="lg">

                {/* HERO */}
                <Grid container spacing={5} alignItems="center" sx={{ mb: 10 }}>
                    <Box
                        sx={{
                            display: "inline-block",
                            px: 2,
                            py: 0.5,
                            mb: 2,
                            borderRadius: "20px",
                            backgroundColor: "#fff3cd",
                            color: "#856404",
                            fontSize: "0.8rem",
                            fontWeight: 500,
                        }}
                    >
                        🚀 Upcoming Product
                    </Box>

                    {/* LEFT */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                            Encode Verify
                        </Typography>

                        <Typography sx={{ color: "text.secondary", mb: 4 }}>
                            A secure and efficient verification platform designed to streamline
                            background checks, document validation, and compliance processes.
                        </Typography>

                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => {
                                formRef.current?.scrollIntoView({ behavior: "smooth" });
                            }}
                            sx={{ mr: 2 }}
                        >
                            Request Demo
                        </Button>

                        {/* <Button variant="outlined">
                            View Features
                        </Button> */}
                    </Grid>

                    {/* RIGHT IMAGE */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component={motion.img}
                            src="/products/encode-verify.png"
                            alt="Encode Verify"
                            whileHover={{ scale: 1.03 }}
                            sx={{
                                width: "100%",
                                borderRadius: "16px",
                                boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
                            }}
                        />
                    </Grid>

                </Grid>

                {/* FEATURES GRID */}
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 5 }}>
                        Key Features
                    </Typography>

                    <Grid container spacing={3}>
                        {features.map((feature, i) => (
                            <Grid item xs={12} sm={6} md={4} key={i}>
                                <Box
                                    component={motion.div}
                                    whileHover={{ y: -6 }}
                                    sx={{
                                        p: 4,
                                        borderRadius: "16px",
                                        border: "1px solid rgba(0,0,0,0.05)",
                                        textAlign: "center",
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 500 }}>
                                        {feature}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* DETAILED SECTIONS */}
                {sections.map((sec, index) => (
                    <Box key={index} sx={{ mb: 10 }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: {
                                    xs: "column",
                                    md: index % 2 === 0 ? "row" : "row-reverse",
                                },
                                alignItems: "center",
                                gap: 5,
                            }}
                        >

                            {/* TEXT */}
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                                    {sec.title}
                                </Typography>

                                <Typography sx={{ color: "text.secondary" }}>
                                    {sec.desc}
                                </Typography>
                            </Box>

                            {/* IMAGE */}
                            <Box
                                component={motion.img}
                                src={`/products/${sec.image}`}
                                alt={sec.title}
                                whileHover={{ scale: 1.05 }}
                                sx={{
                                    flex: 1,
                                    width: "100%",
                                    maxWidth: 420,
                                    borderRadius: "16px",
                                }}
                            />
                        </Box>
                    </Box>
                ))}

                {/* SECURITY SECTION (IMPORTANT DIFFERENTIATOR) */}
                <Box
                    sx={{
                        mb: 10,
                        p: 5,
                        borderRadius: "20px",
                        background: "linear-gradient(135deg, #0f172a, #1e293b)",
                        color: "#fff",
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                        Built for Security & Trust
                    </Typography>

                    <Typography sx={{ mb: 3 }}>
                        Encode Verify ensures secure handling of sensitive data with reliable
                        verification workflows and compliance-ready systems.
                    </Typography>

                    <Grid container spacing={3}>
                        {[
                            "Secure Data Encryption",
                            "Role-based Access Control",
                            "Audit Logs & Tracking",
                            "Compliance Ready System",
                        ].map((item, i) => (
                            <Grid item xs={12} sm={6} key={i}>
                                <Typography>✔ {item}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* CTA */}
                <Box
                    sx={{
                        textAlign: "center",
                        p: 6,
                        borderRadius: "20px",
                        background:
                            "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                        color: "#fff",
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                        Simplify Your Verification Process
                    </Typography>

                    <Typography sx={{ mb: 3 }}>
                        Get started with Encode Verify and streamline your operations today.
                    </Typography>

                    {/* <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate("/contact")}
                        sx={{ mr: 2 }}
                    >
                        Join Early Access
                    </Button> */}

                    {/* <Button variant="outlined">
                        View Features
                    </Button> */}
                </Box>

                <Box ref={formRef}>
                    <WaitlistForm productName="Encode Verify" />
                </Box>

            </Container>
        </Box>
    );
}