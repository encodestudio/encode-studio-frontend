import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function About() {
    const navigate = useNavigate();

    // 🔥 Animation
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    // 🔥 Timeline Data
    const timeline = [
        {
            year: "2020",
            title: "The Beginning",
            description:
                "Started the journey with a vision to build meaningful digital solutions.",
        },
        {
            year: "2022",
            title: "Growth Phase",
            description:
                "Worked on multiple projects and gained real-world development experience.",
        },
        {
            year: "2025",
            title: "Building Products",
            description:
                "Started developing platforms like Encode Campus and Encode Verify.",
        },
        {
            year: "2026",
            title: "Encode Studio Vision",
            description:
                "Building a product-driven digital company focused on innovation.",
        },
    ];

    const products = [
        {
            name: "Encode Campus",
            description:
                "A complete school management system designed to handle academics, administration, and communication in one platform.",
            features: [
                "Student & Attendance Management",
                "Test & Result Management",
                "Fees & Transport Tracking",
                "Parent & Teacher Dashboards",
            ],
            image: "encode-campus-showcase.png",
            link: "/products/encode-campus",
        },
        {
            name: "Encode Verify",
            description:
                "A smart verification platform designed to streamline background checks and document verification processes.",
            features: [
                "Employee Verification",
                "Document Validation",
                "Secure Data Handling",
                "Real-time Tracking",
            ],
            image: "encode-verify-showcase.png",
            link: "/products/encode-verify",
        },
    ];

    return (
        <Box sx={{ py: 10 }}>
            <Container maxWidth="lg">

                {/* HERO */}
                <Box
                    component={motion.div}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                >
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 700, textAlign: "center", mb: 2 }}
                    >
                        About Encode Studio
                    </Typography>

                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "text.secondary",
                            mb: 10,
                            maxWidth: "700px",
                            mx: "auto",
                        }}
                    >
                        Building digital products that solve real problems and drive real growth.
                    </Typography>
                </Box>

                {/* STORY */}
                <Box
                    component={motion.div}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    sx={{ mb: 10 }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
                        The Story Behind Encode Studio
                    </Typography>

                    <Typography sx={{ color: "text.secondary", mb: 2 }}>
                        Encode Studio started with a simple goal — to build digital solutions that actually make a difference.
                    </Typography>

                    <Typography sx={{ color: "text.secondary", mb: 2 }}>
                        From small projects to scalable platforms like Encode Campus and Encode Verify,
                        the journey has been about continuous growth and innovation.
                    </Typography>
                </Box>

                {/* TIMELINE */}
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 5 }}>
                        Our Journey
                    </Typography>

                    <Box sx={{ position: "relative" }}>
                        <Box
                            sx={{
                                position: "absolute",
                                left: { xs: 10, md: "50%" },
                                top: 0,
                                bottom: 0,
                                width: "2px",
                                backgroundColor: "#e5e7eb",
                                transform: { md: "translateX(-50%)" },
                            }}
                        />

                        {timeline.map((item, index) => (
                            <Box
                                key={index}
                                component={motion.div}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                sx={{
                                    display: "flex",
                                    flexDirection: {
                                        xs: "row",
                                        md: index % 2 === 0 ? "row" : "row-reverse",
                                    },
                                    alignItems: "center",
                                    mb: 6,
                                    position: "relative",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: { xs: "100%", md: "45%" },
                                        p: 3,
                                        borderRadius: "12px",
                                        border: "1px solid rgba(0,0,0,0.05)",
                                        backgroundColor: "#fff",
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 600 }}>{item.year}</Typography>
                                    <Typography variant="h6">{item.title}</Typography>
                                    <Typography sx={{ color: "text.secondary" }}>
                                        {item.description}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        width: 16,
                                        height: 16,
                                        borderRadius: "50%",
                                        backgroundColor: "#1976d2",
                                        position: "absolute",
                                        left: { xs: 4, md: "50%" },
                                        transform: { md: "translateX(-50%)" },
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* PRODUCT SHOWCASE */}
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 5 }}>
                        Our Upcoming Products
                    </Typography>

                    {products.map((product, index) => (
                        <Box
                            key={index}
                            component={motion.div}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            sx={{
                                mb: 8,
                                p: { xs: 3, md: 5 },
                                borderRadius: "20px",
                                border: "1px solid rgba(0,0,0,0.05)",
                                background:
                                    index % 2 === 0
                                        ? "#ffffff"
                                        : "linear-gradient(180deg, #f9fbff 0%, #f1f5ff 100%)",
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
                                    gap: 5,
                                }}
                            >

                                {/* TEXT */}
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                                        {product.name}
                                    </Typography>

                                    <Typography sx={{ color: "text.secondary", mb: 3 }}>
                                        {product.description}
                                    </Typography>

                                    <Box sx={{ mb: 3 }}>
                                        {product.features.map((feature, i) => (
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
                                        onClick={() => navigate(product.link)}
                                        sx={{
                                            borderRadius: "8px",
                                            textTransform: "none",
                                            px: 3,
                                        }}
                                    >
                                        Explore Product
                                    </Button>
                                </Box>

                                {/* IMAGE */}
                                <Box
                                    component={motion.img}
                                    src={`/products/${product.image}`}
                                    alt={product.name}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
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
                </Box>

                {/* FOUNDER SECTION */}
                <Box
                    component={motion.div}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    sx={{ mb: 10 }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 5 }}>
                        Meet the Founder
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: "center",
                            gap: 5,
                        }}
                    >
                        <Box
                            component={motion.img}
                            src="/founder.png"
                            alt="Shivam Prasad"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            sx={{
                                width: { xs: "100%", md: 320 },
                                height: { xs: 300, md: 320 },
                                objectFit: "cover",
                                borderRadius: "20px",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                            }}
                        />

                        <Box sx={{ flex: 1 }}>
                            <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                Shivam
                            </Typography>

                            <Typography sx={{ color: "#1976d2", mb: 2 }}>
                                Founder, Encode Studio
                            </Typography>

                            <Typography sx={{ color: "text.secondary", mb: 2 }}>
                                Full-stack developer focused on building real-world digital solutions.
                            </Typography>

                            <Button
                                variant="contained"
                                onClick={() => navigate("/contact")}
                                sx={{ mb: 2 }}
                            >
                                Work With Me
                            </Button>

                            {/* SOCIAL LINKS */}
                            <Box sx={{ display: "flex", gap: 2 }}>
                                <Box
                                    component="a"
                                    href="https://linkedin.com/in/ishivamprasad"
                                    target="_blank"
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#f1f5ff",
                                        color: "#1976d2",
                                        "&:hover": {
                                            backgroundColor: "#1976d2",
                                            color: "#fff",
                                        },
                                    }}
                                >
                                    <LinkedInIcon />
                                </Box>

                                <Box
                                    component="a"
                                    href="https://instagram.com/encodestudio.in"
                                    target="_blank"
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#fff0f5",
                                        color: "#e1306c",
                                        "&:hover": {
                                            backgroundColor: "#e1306c",
                                            color: "#fff",
                                        },
                                    }}
                                >
                                    <InstagramIcon />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* CTA */}
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                        Let’s Build Something Meaningful
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate("/contact")}
                    >
                        Contact Us
                    </Button>
                </Box>

            </Container>
        </Box>
    );
}