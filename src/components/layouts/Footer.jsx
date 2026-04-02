import {
    Box,
    Container,
    Grid,
    Typography,
    IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: "#0F172A",
                color: "#fff",
                pt: 10,
                pb: 4,
            }}
        >
            <Container maxWidth="lg">

                <Grid container spacing={5}>

                    {/* ABOUT */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                            Encode Studio
                        </Typography>

                        <Typography sx={{ color: "#9CA3AF", mb: 3 }}>
                            Encode Studio builds modern websites, web applications, and digital products that help businesses grow and scale.
                        </Typography>

                        {/* SOCIAL MEDIA */}
                        <Box>
                            <IconButton
                                href="https://facebook.com/encodestudio.in"
                                target="_blank"
                                sx={{ color: "#9CA3AF" }}
                            >
                                <FacebookIcon />
                            </IconButton>

                            <IconButton
                                href="https://instagram.com/encodestudio.in"
                                target="_blank"
                                sx={{ color: "#9CA3AF" }}
                            >
                                <InstagramIcon />
                            </IconButton>

                            <IconButton
                                href="https://linkedin.com/company/encode-studio-india"
                                target="_blank"
                                sx={{ color: "#9CA3AF" }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                            {/* WHATSAPP */}
                            <IconButton
                                href="https://wa.me/918377031018"
                                target="_blank"
                                sx={{
                                    color: "#25D366",
                                    "&:hover": {
                                        backgroundColor: "rgba(37,211,102,0.1)",
                                    },
                                }}
                            >
                                <WhatsAppIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* PRODUCTS */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Products
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Link to="/products/encode-campus" style={linkStyle}>
                                Encode Campus
                            </Link>
                            <Link to="/products/encode-verify" style={linkStyle}>
                                Encode Verify
                            </Link>
                        </Box>
                    </Grid>

                    {/* SERVICES */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Services
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Typography sx={textStyle}>Website Development</Typography>
                            <Typography sx={textStyle}>Web Applications</Typography>
                            <Typography sx={textStyle}>CRM/ERP Solutions</Typography>
                            <Typography sx={textStyle}>AI Integration</Typography>
                            <Typography sx={textStyle}>Branding</Typography>
                        </Box>
                    </Grid>

                    {/* QUICK LINKS */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Quick Links
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Link to="/" style={linkStyle}>Home</Link>
                            <Link to="/services" style={linkStyle}>Services</Link>
                            <Link to="/about" style={linkStyle}>About</Link>
                            <Link to="/contact" style={linkStyle}>Contact</Link>
                        </Box>
                    </Grid>

                    {/* CONTACT */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Contact
                        </Typography>

                        <Typography sx={textStyle}>📞 8377031018 | 9811311260</Typography>
                        <Typography sx={textStyle}>📧 shivam@encodestudio.in | encodestudio.in@gmail.com</Typography>
                        <Typography sx={textStyle}>📍 Greater Noida, Uttar Pradesh, India</Typography>
                    </Grid>

                </Grid>

                {/* BOTTOM BAR */}
                <Box
                    sx={{
                        mt: 6,
                        pt: 3,
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                        textAlign: "center",
                    }}
                >
                    <Typography sx={{ color: "#9CA3AF" }}>
                        © {new Date().getFullYear()} Encode Studio. All rights reserved.
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
}

/* STYLES */
const linkStyle = {
    color: "#9CA3AF",
    textDecoration: "none",
};

const textStyle = {
    color: "#9CA3AF",
};