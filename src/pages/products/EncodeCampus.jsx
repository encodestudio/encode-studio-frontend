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

export default function EncodeCampus() {
    const navigate = useNavigate();
    const formRef = useRef(null);

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const features = [
        "Student & Parent Portal",
        "Attendance Management",
        "Test & Result System",
        "Fees Management",
        "Transport Tracking",
        "Teacher Dashboard",
    ];

    const sections = [
        {
            title: "All-in-One School Platform",
            desc: "Manage everything from attendance to results in one unified system.",
            image: "campus-1.png",
        },
        {
            title: "Real-Time Communication",
            desc: "Keep parents, teachers, and students connected with instant updates.",
            image: "campus-2.png",
        },
        {
            title: "Powerful Admin Control",
            desc: "Complete control over operations, data, and reporting.",
            image: "campus-3.png",
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
                            Encode Campus
                        </Typography>

                        <Typography sx={{ color: "text.secondary", mb: 4 }}>
                            A modern school management system designed to simplify operations,
                            improve communication, and scale with your institution.
                        </Typography>

                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => {
                                formRef.current?.scrollIntoView({ behavior: "smooth" });
                            }}
                            sx={{ mr: 2 }}
                        >
                            Book Demo
                        </Button>

                        {/* <Button variant="outlined">
                            View Features
                        </Button> */}
                    </Grid>

                    {/* RIGHT IMAGE */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component={motion.img}
                            src="/products/encode-campus.png"
                            alt="Encode Campus"
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

                <Box
                    sx={{
                        textAlign: "center",
                        p: 6,
                        borderRadius: "20px",
                        border: "1px solid rgba(0,0,0,0.05)",
                        background: "#f9fafb",
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                        “Launching Soon — Built for forward-thinking schools”
                    </Typography>

                    <Typography sx={{ color: "text.secondary", mb: 3 }}>
                        We are currently building Encode Campus. Join early access and be among the first
                        to explore and shape the product.
                    </Typography>

                    {/* <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate("/contact")}
                    >
                        Request Early Access
                    </Button> */}
                </Box>

                {/* CTA */}
                <Box
                    sx={{
                        textAlign: "center",
                        p: 6,
                        mt: 5,
                        borderRadius: "20px",
                        background:
                            "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                        color: "#fff",
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                        Ready to Digitize Your School?
                    </Typography>

                    <Typography sx={{ mb: 3 }}>
                        Join schools already transforming their operations with Encode Campus.
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
                    <WaitlistForm productName="Encode Campus" />
                </Box>

            </Container>
        </Box>
    );
}